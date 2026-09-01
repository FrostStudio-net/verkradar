-- Internal operator email alerts for newly-created qualifying opportunity matches.
-- This migration is intentionally scoped to Garðaþjónusta. It does not alter
-- matching, customer notifications, reports, AI review, or customer sends.

create table if not exists public.internal_match_alert_subscriptions (
  id uuid primary key default gen_random_uuid(),
  alert_type text not null default 'new_qualifying_match',
  company_id uuid not null references public.companies(id) on delete cascade,
  recipient_secret_name text not null default 'INTERNAL_MATCH_ALERT_EMAIL',
  enabled boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint internal_match_alert_subscriptions_alert_type_check
    check (alert_type = 'new_qualifying_match'),
  constraint internal_match_alert_subscriptions_recipient_secret_check
    check (recipient_secret_name = 'INTERNAL_MATCH_ALERT_EMAIL'),
  constraint internal_match_alert_subscriptions_company_alert_key
    unique (alert_type, company_id)
);

create table if not exists public.internal_match_alert_outbox (
  id uuid primary key default gen_random_uuid(),
  alert_type text not null,
  -- Keep delivery history and permanent deduplication even if a business row is
  -- later removed. Eligibility is revalidated through live joins before send.
  company_id uuid not null,
  opportunity_id uuid not null,
  match_id uuid references public.opportunity_matches(id) on delete set null,
  status text not null default 'queued',
  queued_at timestamptz not null default now(),
  processing_at timestamptz,
  sent_at timestamptz,
  failed_at timestamptz,
  next_attempt_at timestamptz,
  provider_message_id text,
  attempt_count integer not null default 0,
  last_error text,
  delivery_log jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint internal_match_alert_outbox_alert_type_check
    check (alert_type = 'new_qualifying_match'),
  constraint internal_match_alert_outbox_status_check
    check (status in ('queued','processing','sent','failed','suppressed_existing','cancelled')),
  constraint internal_match_alert_outbox_attempt_count_check
    check (attempt_count between 0 and 3),
  constraint internal_match_alert_outbox_company_opportunity_key
    unique (alert_type, company_id, opportunity_id)
);

create index if not exists internal_match_alert_outbox_dispatch_idx
  on public.internal_match_alert_outbox(status, next_attempt_at, queued_at)
  where status in ('queued','failed','processing');

alter table public.internal_match_alert_subscriptions enable row level security;
alter table public.internal_match_alert_outbox enable row level security;
revoke all on public.internal_match_alert_subscriptions from public, anon, authenticated;
revoke all on public.internal_match_alert_outbox from public, anon, authenticated;

comment on table public.internal_match_alert_subscriptions is
  'Internal operator-alert subscriptions. Never a customer notification channel.';
comment on table public.internal_match_alert_outbox is
  'Durable, permanently deduplicated internal operator email outbox and delivery log.';

-- Enable only the explicitly requested production company when that company is
-- present. Fresh/local databases without production data remain safely disabled.
insert into public.internal_match_alert_subscriptions(
  alert_type, company_id, recipient_secret_name, enabled
)
select
  'new_qualifying_match',
  companies.id,
  'INTERNAL_MATCH_ALERT_EMAIL',
  true
from public.companies
where companies.id = 'cad6b69e-b021-447d-b637-31b2e8dbff2e'
on conflict (alert_type, company_id) do update
set recipient_secret_name = excluded.recipient_secret_name,
    enabled = excluded.enabled,
    updated_at = now();

-- Permanently suppress every match that already exists for the target company.
-- In production this seeds the two verified winter-service matches. This runs
-- before the enqueue trigger is created and does not mutate match rows.
insert into public.internal_match_alert_outbox(
  alert_type,
  company_id,
  opportunity_id,
  match_id,
  status,
  queued_at,
  last_error,
  delivery_log
)
select
  'new_qualifying_match',
  matches.company_id,
  matches.opportunity_id,
  matches.id,
  'suppressed_existing',
  coalesce(matches.calculated_at, now()),
  'Existing match at alert-system activation; no backfill email.',
  jsonb_build_array(jsonb_build_object(
    'status', 'suppressed_existing',
    'at', now(),
    'reason', 'existing_match_at_activation'
  ))
from public.opportunity_matches matches
where matches.company_id = 'cad6b69e-b021-447d-b637-31b2e8dbff2e'
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
  -- Exact initial scope. This is deliberately not a broad customer-email path.
  if new.company_id is distinct from 'cad6b69e-b021-447d-b637-31b2e8dbff2e'::uuid then
    return new;
  end if;
  if new.safety_status is distinct from 'auto_approved'
     or new.alert_eligible is distinct from true
     or new.review_required is distinct from false then
    return new;
  end if;

  select subscriptions.enabled
    into subscription_enabled
  from public.internal_match_alert_subscriptions subscriptions
  where subscriptions.alert_type = 'new_qualifying_match'
    and subscriptions.company_id = new.company_id;
  if subscription_enabled is distinct from true then return new; end if;

  select coalesce(companies.minimum_relevance_threshold, 50)
    into company_threshold
  from public.companies
  where companies.id = new.company_id;
  if company_threshold is null or new.match_score < company_threshold then return new; end if;

  select * into opportunity_row
  from public.opportunities
  where opportunities.id = new.opportunity_id;
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
     or (canonical_opportunity_id is not null and canonical_opportunity_id <> opportunity_row.id::text) then
    return new;
  end if;

  insert into public.internal_match_alert_outbox(
    alert_type, company_id, opportunity_id, match_id, status, queued_at
  ) values (
    'new_qualifying_match', new.company_id, new.opportunity_id, new.id, 'queued', now()
  )
  on conflict (alert_type, company_id, opportunity_id) do nothing;

  return new;
exception when others then
  -- Notification enqueueing is best effort and must never roll back matching.
  raise warning 'Internal match-alert enqueue failed for match %: %', new.id, sqlerrm;
  return new;
end;
$$;

revoke all on function public.enqueue_internal_match_alert() from public, anon, authenticated;

drop trigger if exists enqueue_internal_match_alert_after_insert on public.opportunity_matches;
create trigger enqueue_internal_match_alert_after_insert
after insert on public.opportunity_matches
for each row execute function public.enqueue_internal_match_alert();

create or replace function public.claim_internal_match_alerts(batch_limit integer default 5)
returns setof public.internal_match_alert_outbox
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if current_user <> 'service_role' and session_user <> 'service_role' then
    -- PostgREST SECURITY DEFINER calls retain JWT role in the request claim.
    if coalesce(current_setting('request.jwt.claim.role', true), '') <> 'service_role' then
      raise exception 'INTERNAL_MATCH_ALERT_SERVICE_ROLE_REQUIRED';
    end if;
  end if;

  -- Cancel pending work that is no longer safe to deliver.
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
  if current_user <> 'service_role' and session_user <> 'service_role' then
    if coalesce(current_setting('request.jwt.claim.role', true), '') <> 'service_role' then
      raise exception 'INTERNAL_MATCH_ALERT_SERVICE_ROLE_REQUIRED';
    end if;
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

insert into public.automation_settings(key, value)
values (
  'internal_match_alert_dispatch_url',
  'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/internal-match-alerts'
)
on conflict (key) do update set value = excluded.value, updated_at = now();

create or replace function public.trigger_internal_match_alert_dispatch()
returns void
language plpgsql
security definer
set search_path = public, extensions, pg_temp
as $$
declare
  endpoint text;
  secret text;
  gateway_authorization text;
begin
  if not exists (
    select 1 from public.internal_match_alert_outbox
    where attempt_count < 3 and (
      (status = 'queued' and coalesce(next_attempt_at, queued_at) <= now())
      or (status = 'failed' and next_attempt_at <= now())
      or (status = 'processing' and processing_at < now() - interval '15 minutes')
    )
  ) then
    return;
  end if;

  select value into endpoint from public.automation_settings
  where key = 'internal_match_alert_dispatch_url';
  select value into secret from public.automation_settings
  where key = 'automation_secret';
  gateway_authorization := public.v2_routine_gateway_authorization();

  if endpoint <> 'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/internal-match-alerts'
     or nullif(secret,'') is null then
    raise exception 'INTERNAL_MATCH_ALERT_AUTOMATION_CONFIG_INVALID';
  end if;

  perform net.http_post(
    url := endpoint,
    headers := jsonb_build_object(
      'Content-Type','application/json',
      'Authorization',gateway_authorization,
      'x-automation-secret',secret
    ),
    body := jsonb_build_object('action','dispatch','batch_limit',5)
  );
end;
$$;

revoke all on function public.trigger_internal_match_alert_dispatch() from public, anon, authenticated;

do $$
declare existing_jobid bigint;
begin
  select jobid into existing_jobid from cron.job
  where jobname = 'internal-match-alert-dispatch';
  if existing_jobid is not null then perform cron.unschedule(existing_jobid); end if;
end $$;

select cron.schedule(
  'internal-match-alert-dispatch',
  '*/2 * * * *',
  $$ select public.trigger_internal_match_alert_dispatch(); $$
);

notify pgrst, 'reload schema';
