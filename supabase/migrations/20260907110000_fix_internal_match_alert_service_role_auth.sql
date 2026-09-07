-- Accept the canonical PostgREST JWT role context for internal alert delivery.
-- Function behavior, ownership, grants, RLS, retries, and deduplication are unchanged.

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
    and (
      not exists (
        select 1 from public.internal_match_alert_subscriptions subscriptions
        where subscriptions.alert_type = outbox.alert_type
          and subscriptions.company_id = outbox.company_id
          and subscriptions.enabled
      )
      or not exists (
        select 1
        from public.opportunity_matches matches
        join public.companies companies on companies.id = matches.company_id
        join public.opportunities opportunities on opportunities.id = matches.opportunity_id
        where matches.company_id = outbox.company_id
          and matches.opportunity_id = outbox.opportunity_id
          and matches.match_score >= coalesce(companies.minimum_relevance_threshold, 50)
          and matches.safety_status = 'auto_approved'
          and matches.alert_eligible
          and not matches.review_required
          and opportunities.status = 'open'
          and opportunities.actionable_for_suppliers
          and not opportunities.requires_admin_review
          and opportunities.deadline >= (now() at time zone 'UTC')::date
          and not opportunities.phase_c_communication_hold
          and opportunities.phase_c_disabled_at is null
          and lower(coalesce(opportunities.raw_payload->>'hidden_from_reports','false')) not in ('true','1','yes')
          and lower(coalesce(opportunities.raw_payload->>'admin_report_status','')) not in ('hidden','hide','noise','deleted','disabled','released_held')
      )
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

create or replace function public.complete_internal_match_alert(
  alert_id uuid,
  delivered boolean,
  provider_id text default null,
  error_text text default null,
  provider_http_status integer default null
)
returns public.internal_match_alert_outbox
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  result public.internal_match_alert_outbox%rowtype;
begin
  if auth.role() is distinct from 'service_role' then
    raise exception 'INTERNAL_MATCH_ALERT_SERVICE_ROLE_REQUIRED';
  end if;
  if delivered and nullif(trim(coalesce(provider_id,'')), '') is null then
    raise exception 'INTERNAL_MATCH_ALERT_PROVIDER_ID_REQUIRED';
  end if;

  update public.internal_match_alert_outbox outbox
  set status = case when delivered then 'sent' else 'failed' end,
      sent_at = case when delivered then now() else outbox.sent_at end,
      failed_at = case when delivered then null else now() end,
      processing_at = null,
      provider_message_id = case when delivered then left(provider_id, 300) else outbox.provider_message_id end,
      last_error = case when delivered then null else left(coalesce(nullif(error_text,''),'Unknown delivery error'),1000) end,
      next_attempt_at = case
        when delivered or outbox.attempt_count >= 3 then null
        when outbox.attempt_count = 1 then now() + interval '5 minutes'
        else now() + interval '30 minutes'
      end,
      delivery_log = outbox.delivery_log || jsonb_build_array(jsonb_build_object(
        'status',case when delivered then 'sent' else 'failed' end,
        'at',now(),
        'attempt',outbox.attempt_count,
        'provider_http_status',provider_http_status,
        'provider_message_id',case when delivered then left(provider_id,300) else null end,
        'error',case when delivered then null else left(coalesce(nullif(error_text,''),'Unknown delivery error'),1000) end
      )),
      updated_at = now()
  where outbox.id = alert_id
    and outbox.status = 'processing'
  returning * into result;

  if not found then raise exception 'INTERNAL_MATCH_ALERT_NOT_PROCESSING'; end if;
  return result;
end;
$$;

revoke all on function public.claim_internal_match_alerts(integer) from public, anon, authenticated;
revoke all on function public.complete_internal_match_alert(uuid,boolean,text,text,integer) from public, anon, authenticated;
grant execute on function public.claim_internal_match_alerts(integer) to service_role;
grant execute on function public.complete_internal_match_alert(uuid,boolean,text,text,integer) to service_role;
