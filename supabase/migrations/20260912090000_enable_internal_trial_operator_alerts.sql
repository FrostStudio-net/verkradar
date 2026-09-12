-- Extend the existing internal operator-alert path to the two internal trial
-- companies. Customer-facing notification fields and report delivery remain
-- untouched. Existing matches are permanently suppressed from backfill email.
do $$
declare
  trial_ids constant uuid[] := array[
    '41941a6f-8ffc-46b9-8562-8982bf49d4b6'::uuid,
    '5fd8ec2e-9be4-4a64-b0f0-1c9cc12c9e9b'::uuid
  ];
begin
  if (select count(*) from public.companies where id = any(trial_ids)) <> 2
     or exists (select 1 from public.companies where id = any(trial_ids) and notification_email is not null)
     or exists (select 1 from public.company_members where company_id = any(trial_ids) and status <> 'active') then
    raise exception 'INTERNAL_TRIAL_ALERTS_BLOCKED: trial company/access state is unexpected';
  end if;
end;
$$;

insert into public.internal_match_alert_subscriptions(alert_type, company_id, recipient_secret_name, enabled)
select 'new_qualifying_match', company_id, 'INTERNAL_MATCH_ALERT_EMAIL', true
from unnest(array[
  '41941a6f-8ffc-46b9-8562-8982bf49d4b6'::uuid,
  '5fd8ec2e-9be4-4a64-b0f0-1c9cc12c9e9b'::uuid
]) company_id
on conflict (alert_type, company_id) do update
set recipient_secret_name = excluded.recipient_secret_name, enabled = excluded.enabled, updated_at = now();

insert into public.internal_match_alert_outbox(
  alert_type, company_id, opportunity_id, match_id, status, queued_at, last_error, delivery_log
)
select 'new_qualifying_match', matches.company_id, matches.opportunity_id, matches.id,
  'suppressed_existing', coalesce(matches.calculated_at, now()),
  'Existing internal trial match at alert activation; no backfill email.',
  jsonb_build_array(jsonb_build_object('status','suppressed_existing','at',now(),'reason','existing_match_at_activation'))
from public.opportunity_matches matches
where matches.company_id in (
  '41941a6f-8ffc-46b9-8562-8982bf49d4b6'::uuid,
  '5fd8ec2e-9be4-4a64-b0f0-1c9cc12c9e9b'::uuid
)
on conflict (alert_type, company_id, opportunity_id) do nothing;

create or replace function public.enqueue_internal_match_alert()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  subscription_enabled boolean;
  company_threshold integer;
  opportunity_row public.opportunities%rowtype;
  hidden_from_reports boolean;
  admin_report_status text;
  canonical_opportunity_id text;
begin
  if new.company_id <> all(array[
    'cad6b69e-b021-447d-b637-31b2e8dbff2e'::uuid,
    '41941a6f-8ffc-46b9-8562-8982bf49d4b6'::uuid,
    '5fd8ec2e-9be4-4a64-b0f0-1c9cc12c9e9b'::uuid
  ]) then return new; end if;
  if new.safety_status is distinct from 'auto_approved'
     or new.alert_eligible is distinct from true
     or new.review_required is distinct from false then return new; end if;

  select subscriptions.enabled into subscription_enabled
  from public.internal_match_alert_subscriptions subscriptions
  where subscriptions.alert_type = 'new_qualifying_match' and subscriptions.company_id = new.company_id;
  if subscription_enabled is distinct from true then return new; end if;

  select coalesce(companies.minimum_relevance_threshold, 50) into company_threshold
  from public.companies where companies.id = new.company_id;
  if company_threshold is null or new.match_score < company_threshold then return new; end if;

  select * into opportunity_row from public.opportunities where opportunities.id = new.opportunity_id;
  if not found then return new; end if;
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
     or (canonical_opportunity_id is not null and canonical_opportunity_id <> opportunity_row.id::text) then return new; end if;

  insert into public.internal_match_alert_outbox(alert_type, company_id, opportunity_id, match_id, status, queued_at)
  values ('new_qualifying_match', new.company_id, new.opportunity_id, new.id, 'queued', now())
  on conflict (alert_type, company_id, opportunity_id) do nothing;
  return new;
exception when others then
  raise warning 'Internal match-alert enqueue failed for match %: %', new.id, sqlerrm;
  return new;
end;
$$;

comment on function public.enqueue_internal_match_alert() is
  'Queues deduplicated internal operator alerts for Garðaþjónusta and internal trial companies only.';

notify pgrst, 'reload schema';
