-- Enqueue an internal operator alert when a canonical match first transitions
-- into the existing qualifying state, including PostgreSQL UPSERT update paths.
-- This migration performs no match scan and creates no historical outbox rows.

create or replace function public.internal_match_is_operator_alert_qualified(
  candidate public.opportunity_matches
)
returns boolean
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
declare
  company_threshold integer;
  opportunity_row public.opportunities%rowtype;
  hidden_from_reports boolean;
  admin_report_status text;
  canonical_opportunity_id text;
begin
  if candidate.company_id is null or candidate.opportunity_id is null then return false; end if;

  if not exists (
    select 1
    from public.internal_match_alert_subscriptions subscriptions
    where subscriptions.alert_type = 'new_qualifying_match'
      and subscriptions.company_id = candidate.company_id
      and subscriptions.recipient_secret_name = 'INTERNAL_MATCH_ALERT_EMAIL'
      and subscriptions.enabled
  ) then return false; end if;

  if candidate.safety_status is distinct from 'auto_approved'
     or candidate.review_required is distinct from false then return false; end if;

  select coalesce(companies.minimum_relevance_threshold, 50)
  into company_threshold
  from public.companies
  where companies.id = candidate.company_id;
  if company_threshold is null
     or candidate.match_score is null
     or candidate.match_score < company_threshold then return false; end if;

  select * into opportunity_row
  from public.opportunities
  where opportunities.id = candidate.opportunity_id;
  if not found then return false; end if;

  hidden_from_reports := lower(coalesce(opportunity_row.raw_payload->>'hidden_from_reports', 'false')) in ('true','1','yes');
  admin_report_status := lower(coalesce(opportunity_row.raw_payload->>'admin_report_status', ''));
  canonical_opportunity_id := nullif(opportunity_row.raw_payload->>'canonical_opportunity_id', '');

  if opportunity_row.status is distinct from 'open'
     or opportunity_row.procurement_stage::text not in ('open_competition','upcoming_procurement','market_consultation')
     or opportunity_row.actionable_for_suppliers is distinct from true
     or opportunity_row.requires_admin_review is distinct from false
     or opportunity_row.deadline is null
     or opportunity_row.deadline < (now() at time zone 'UTC')::date
     or opportunity_row.phase_c_communication_hold is true
     or opportunity_row.phase_c_disabled_at is not null
     or hidden_from_reports
     or admin_report_status in ('hidden','hide','noise','deleted','disabled','released_held')
     or lower(coalesce(opportunity_row.raw_payload->>'promotion_quarantine', '')) <> ''
     or lower(coalesce(opportunity_row.raw_payload->>'is_demo', 'false')) in ('true','1','yes')
     or lower(coalesce(opportunity_row.raw_payload->>'demo', 'false')) in ('true','1','yes')
     or lower(coalesce(opportunity_row.raw_payload->>'is_duplicate', 'false')) in ('true','1','yes')
     or nullif(opportunity_row.raw_payload->>'duplicate_of', '') is not null
     or (canonical_opportunity_id is not null and canonical_opportunity_id <> opportunity_row.id::text) then
    return false;
  end if;

  return true;
end;
$$;

revoke all on function public.internal_match_is_operator_alert_qualified(public.opportunity_matches)
from public, anon, authenticated;

create or replace function public.enqueue_internal_match_alert()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if tg_op = 'UPDATE'
     and public.internal_match_is_operator_alert_qualified(old) then
    return new;
  end if;

  if not public.internal_match_is_operator_alert_qualified(new) then return new; end if;

  insert into public.internal_match_alert_outbox(
    alert_type, company_id, opportunity_id, match_id, status, queued_at
  ) values (
    'new_qualifying_match', new.company_id, new.opportunity_id, new.id, 'queued', now()
  )
  on conflict (alert_type, company_id, opportunity_id) do nothing;
  return new;
exception when others then
  raise warning 'Internal match-alert enqueue failed for match %: %', new.id, sqlerrm;
  return new;
end;
$$;

comment on function public.enqueue_internal_match_alert() is
  'Queues one deduplicated internal operator alert on qualifying insert or the first nonqualifying-to-qualifying match transition.';

drop trigger if exists enqueue_internal_match_alert_after_update on public.opportunity_matches;
create trigger enqueue_internal_match_alert_after_update
after update of company_id, opportunity_id, match_score, safety_status, review_required
on public.opportunity_matches
for each row execute function public.enqueue_internal_match_alert();

create or replace function public.claim_internal_match_alerts(batch_limit integer default 5)
returns setof public.internal_match_alert_outbox
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if auth.role() is distinct from 'service_role' then
    raise exception 'INTERNAL_MATCH_ALERT_SERVICE_ROLE_REQUIRED';
  end if;

  update public.internal_match_alert_outbox outbox
  set status = 'cancelled',
      failed_at = now(),
      next_attempt_at = null,
      last_error = 'Alert became ineligible or subscription was disabled before delivery.',
      delivery_log = outbox.delivery_log || jsonb_build_array(jsonb_build_object(
        'status','cancelled','at',now(),'reason','ineligible_before_delivery'
      )),
      updated_at = now()
  where outbox.status in ('queued','failed')
    and not exists (
      select 1
      from public.opportunity_matches matches
      where matches.company_id = outbox.company_id
        and matches.opportunity_id = outbox.opportunity_id
        and public.internal_match_is_operator_alert_qualified(matches)
    );

  return query
  with candidates as (
    select outbox.id
    from public.internal_match_alert_outbox outbox
    where outbox.attempt_count < 3
      and (
        (outbox.status = 'queued' and coalesce(outbox.next_attempt_at, outbox.queued_at) <= now())
        or (outbox.status = 'failed' and outbox.next_attempt_at <= now())
        or (outbox.status = 'processing' and outbox.processing_at < now() - interval '15 minutes')
      )
    order by outbox.queued_at, outbox.id
    for update skip locked
    limit greatest(1, least(coalesce(batch_limit, 5), 10))
  )
  update public.internal_match_alert_outbox outbox
  set status = 'processing',
      processing_at = now(),
      failed_at = null,
      next_attempt_at = null,
      attempt_count = outbox.attempt_count + 1,
      last_error = null,
      delivery_log = outbox.delivery_log || jsonb_build_array(jsonb_build_object(
        'status','processing','at',now(),'attempt',outbox.attempt_count + 1
      )),
      updated_at = now()
  from candidates
  where outbox.id = candidates.id
  returning outbox.*;
end;
$$;

revoke all on function public.claim_internal_match_alerts(integer) from public, anon, authenticated;
grant execute on function public.claim_internal_match_alerts(integer) to service_role;

comment on function public.internal_match_is_operator_alert_qualified(public.opportunity_matches) is
  'Single production predicate for subscription-driven internal operator alert enqueue and delivery revalidation; customer notification preferences are intentionally irrelevant.';

notify pgrst, 'reload schema';
