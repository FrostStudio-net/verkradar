-- Phase C3 production prerequisites. All production rollout flags remain OFF.
-- This migration performs no approvals, promotions, releases, matching, or sends.

alter table public.v2_source_configs
  add column if not exists production_canary_enabled boolean not null default false,
  add column if not exists release_feature_enabled boolean not null default false,
  add column if not exists release_approved boolean not null default false;

alter table public.v2_ingestion_observations
  add column if not exists approved_for_release boolean not null default false,
  add column if not exists release_approved_at timestamptz,
  add column if not exists release_approved_by uuid references auth.users(id) on delete set null,
  add column if not exists release_approval_reason text,
  add column if not exists released_at timestamptz,
  add column if not exists released_by uuid references auth.users(id) on delete set null,
  add column if not exists release_reason text,
  add column if not exists post_release_disabled_at timestamptz,
  add column if not exists post_release_disabled_by uuid references auth.users(id) on delete set null,
  add column if not exists post_release_disable_reason text;

alter table public.opportunities
  add column if not exists phase_c_communication_hold boolean not null default false,
  add column if not exists phase_c_released_at timestamptz,
  add column if not exists phase_c_released_by uuid references auth.users(id) on delete set null,
  add column if not exists phase_c_release_reason text,
  add column if not exists phase_c_disabled_at timestamptz,
  add column if not exists phase_c_disabled_by uuid references auth.users(id) on delete set null,
  add column if not exists phase_c_disable_reason text;

insert into public.automation_settings(key, value)
values
  ('phase_c_production_enabled', 'false'),
  ('phase_c_release_enabled', 'false')
on conflict (key) do nothing;

create table if not exists public.v2_phase_c_events (
  id uuid primary key default gen_random_uuid(),
  occurred_at timestamptz not null default now(),
  actor_admin_id uuid,
  source_config_id uuid,
  source_id uuid,
  observation_id uuid,
  opportunity_id uuid,
  event_type text not null check (event_type in (
    'source_approved', 'source_revoked', 'observation_approved',
    'promotion_attempted', 'promotion_blocked', 'opportunity_created',
    'existing_opportunity_reused', 'quarantine_created',
    'release_approved', 'released', 'communication_hold_cleared',
    'rollback', 'post_release_disabled'
  )),
  reason_code text,
  reason text,
  metadata jsonb not null default '{}'::jsonb
);

create index if not exists v2_phase_c_events_observation_idx on public.v2_phase_c_events(observation_id, occurred_at desc);
create index if not exists v2_phase_c_events_opportunity_idx on public.v2_phase_c_events(opportunity_id, occurred_at desc);
create index if not exists v2_phase_c_events_type_time_idx on public.v2_phase_c_events(event_type, occurred_at desc);

create table if not exists public.v2_phase_c_authorized_transactions (
  transaction_id bigint not null,
  backend_pid integer not null,
  action text not null check (action in ('rollback','release','post_release_disable')),
  created_at timestamptz not null default clock_timestamp(),
  primary key(transaction_id,backend_pid,action)
);

alter table public.v2_phase_c_events enable row level security;
create policy "Admins read Phase C events"
  on public.v2_phase_c_events for select to authenticated
  using (public.is_admin());

create or replace function public.v2_phase_c_reject_event_mutation()
returns trigger language plpgsql set search_path = public, pg_temp as $$
begin
  raise exception 'V2_PHASE_C_EVENT_LOG_APPEND_ONLY';
end;
$$;
drop trigger if exists v2_phase_c_events_append_only on public.v2_phase_c_events;
create trigger v2_phase_c_events_append_only
  before update or delete on public.v2_phase_c_events
  for each row execute function public.v2_phase_c_reject_event_mutation();

create or replace function public.v2_phase_c_flag(flag_key text)
returns boolean language sql stable security definer set search_path = public, pg_temp as $$
  select coalesce((select case
    when lower(trim(value)) in ('true','1','yes','on') then true else false end
  from public.automation_settings where key = flag_key), false)
$$;

create or replace function public.v2_phase_c_is_restricted(target_opportunity_id uuid)
returns boolean language sql stable security definer set search_path = public, pg_temp as $$
  select coalesce((select
    raw_payload->>'promotion_quarantine' = 'phase_c_canary'
    or phase_c_communication_hold
  from public.opportunities where id = target_opportunity_id), false)
$$;

create or replace function public.v2_phase_c_is_quarantined(target_opportunity_id uuid)
returns boolean language sql stable security definer set search_path = public, pg_temp as $$
  select coalesce((select raw_payload->>'promotion_quarantine' = 'phase_c_canary'
  from public.opportunities where id = target_opportunity_id), false)
$$;

create or replace function public.v2_phase_c_log(
  event_name text, actor_id uuid, config_id uuid, observation_id_value uuid,
  opportunity_id_value uuid, code_value text default null,
  reason_value text default null, metadata_value jsonb default '{}'::jsonb
)
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare source_value uuid;
begin
  if event_name not in (
    'source_approved','source_revoked','observation_approved','promotion_attempted',
    'promotion_blocked','opportunity_created','existing_opportunity_reused',
    'quarantine_created','release_approved','released','communication_hold_cleared',
    'rollback','post_release_disabled'
  ) then raise exception 'V2_PHASE_C_EVENT_TYPE_INVALID'; end if;
  select source_id into source_value from public.v2_source_configs where id = config_id;
  insert into public.v2_phase_c_events(
    actor_admin_id, source_config_id, source_id, observation_id, opportunity_id,
    event_type, reason_code, reason, metadata
  ) values (actor_id, config_id, source_value, observation_id_value,
    opportunity_id_value, event_name, code_value, reason_value, coalesce(metadata_value, '{}'::jsonb));
end;
$$;

create or replace function public.v2_phase_c_authorize_transaction(action_value text, authorize boolean default true)
returns void language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if action_value not in ('rollback','release','post_release_disable') then raise exception 'V2_PHASE_C_AUTHORIZATION_ACTION_INVALID'; end if;
  if authorize then
    insert into public.v2_phase_c_authorized_transactions(transaction_id,backend_pid,action)
    values(txid_current(),pg_backend_pid(),action_value) on conflict do nothing;
  else
    delete from public.v2_phase_c_authorized_transactions
    where transaction_id=txid_current() and backend_pid=pg_backend_pid() and action=action_value;
  end if;
end;
$$;

create or replace function public.v2_phase_c_guard_quarantined_opportunity()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if old.raw_payload->>'promotion_quarantine' = 'phase_c_canary'
     and not exists (
       select 1 from public.v2_phase_c_authorized_transactions a
       where a.transaction_id=txid_current() and a.backend_pid=pg_backend_pid()
         and a.action in ('rollback','release','post_release_disable')
     ) then
    raise exception 'V2_QUARANTINED_OPPORTUNITY_IMMUTABLE';
  end if;
  return case when tg_op = 'DELETE' then old else new end;
end;
$$;
drop trigger if exists v2_phase_c_quarantine_immutable on public.opportunities;
create trigger v2_phase_c_quarantine_immutable
  before update or delete on public.opportunities
  for each row execute function public.v2_phase_c_guard_quarantined_opportunity();

create or replace function public.v2_phase_c_guard_downstream_link()
returns trigger language plpgsql set search_path = public, pg_temp as $$
begin
  if new.opportunity_id is not null and (
    public.v2_phase_c_is_quarantined(new.opportunity_id)
    or (tg_table_name <> 'opportunity_matches' and public.v2_phase_c_is_restricted(new.opportunity_id))
  ) then
    raise exception 'V2_PHASE_C_DOWNSTREAM_LINK_BLOCKED';
  end if;
  return new;
end;
$$;

do $$
declare table_name text;
begin
  foreach table_name in array array[
    'opportunity_matches','report_items','company_opportunity_actions',
    'company_opportunity_sends','ai_match_reviews','ai_usage_log',
    'admin_match_decisions','match_evaluation_labels'
  ] loop
    execute format('drop trigger if exists v2_phase_c_downstream_guard on public.%I', table_name);
    execute format('create trigger v2_phase_c_downstream_guard before insert or update of opportunity_id on public.%I for each row execute function public.v2_phase_c_guard_downstream_link()', table_name);
  end loop;
end $$;

-- Customer policies exclude active quarantine and communication hold even if a
-- service-role matching job creates a match after release.
drop policy if exists "Company members manage opportunity matches" on public.opportunity_matches;
create policy "Company members manage opportunity matches"
  on public.opportunity_matches for all to authenticated
  using (public.is_company_member(company_id) and not public.v2_phase_c_is_restricted(opportunity_id))
  with check (public.is_company_member(company_id) and not public.v2_phase_c_is_restricted(opportunity_id));

create or replace function public.can_view_opportunity(opportunity_uuid uuid)
returns boolean language sql stable security definer set search_path = public, pg_temp as $$
  select public.is_admin()
    or (
      not public.v2_phase_c_is_restricted(opportunity_uuid)
      and (
        exists (select 1 from public.opportunity_matches m where m.opportunity_id=opportunity_uuid and public.is_company_member(m.company_id))
        or exists (select 1 from public.company_opportunity_actions a where a.opportunity_id=opportunity_uuid and public.is_company_member(a.company_id))
        or exists (select 1 from public.report_items i join public.reports r on r.id=i.report_id where i.opportunity_id=opportunity_uuid and public.is_company_member(r.company_id))
        or exists (select 1 from public.company_opportunity_sends s where s.opportunity_id=opportunity_uuid and public.is_company_member(s.company_id))
      )
    )
$$;

create or replace function public.v2_phase_c_guard_source_limits()
returns trigger language plpgsql set search_path = public, pg_temp as $$
begin
  if new.promotion_approved and (not old.promotion_approved or new.mode = 'promote' and old.mode <> 'promote') then
    if not public.v2_phase_c_flag('phase_c_production_enabled') then raise exception 'V2_PRODUCTION_FEATURE_DISABLED'; end if;
    if not new.production_canary_enabled then raise exception 'V2_SOURCE_PRODUCTION_CANARY_DISABLED'; end if;
    perform pg_advisory_xact_lock(hashtextextended('verkradar-phase-c-approved-source', 0));
    if exists (select 1 from public.v2_source_configs c where c.id <> new.id and (c.promotion_approved or c.mode = 'promote')) then
      raise exception 'V2_PRODUCTION_SOURCE_LIMIT';
    end if;
  end if;
  return new;
end;
$$;
drop trigger if exists v2_phase_c_source_limits on public.v2_source_configs;
create trigger v2_phase_c_source_limits before update of promotion_approved, mode on public.v2_source_configs
for each row execute function public.v2_phase_c_guard_source_limits();

-- Preserve the proven C0 operations as private internals, then put production
-- limits/auditing around the public service-role entry points.
alter function public.approve_v2_observation_for_promotion(uuid, uuid, text)
  rename to v2_c0_approve_observation_internal;
alter function public.promote_v2_observation(uuid)
  rename to v2_c0_promote_observation_internal;
alter function public.rollback_v2_canary_promotion(uuid, uuid, text)
  rename to v2_c0_rollback_canary_internal;

revoke all on function public.v2_c0_approve_observation_internal(uuid, uuid, text) from public, anon, authenticated, service_role;
revoke all on function public.v2_c0_promote_observation_internal(uuid) from public, anon, authenticated, service_role;
revoke all on function public.v2_c0_rollback_canary_internal(uuid, uuid, text) from public, anon, authenticated, service_role;

create function public.set_v2_source_production_approval(
  target_source_key text, approved_value boolean, approving_admin_id uuid, reason_text text default null
)
returns table(source_config_id uuid, source_key text, mode text, promotion_approved boolean)
language plpgsql security definer set search_path = public, pg_temp as $$
declare c public.v2_source_configs%rowtype;
begin
  if not exists (select 1 from public.admin_users where user_id = approving_admin_id) then raise exception 'V2_APPROVAL_ADMIN_REQUIRED'; end if;
  perform pg_advisory_xact_lock(hashtextextended('verkradar-phase-c-approved-source', 0));
  select * into c from public.v2_source_configs where v2_source_configs.source_key = target_source_key for update;
  if not found then raise exception 'V2_SOURCE_CONFIG_MISSING'; end if;
  if approved_value then
    if not public.v2_phase_c_flag('phase_c_production_enabled') then raise exception 'V2_PRODUCTION_FEATURE_DISABLED'; end if;
    if not c.production_canary_enabled then raise exception 'V2_SOURCE_PRODUCTION_CANARY_DISABLED'; end if;
    if c.mode not in ('shadow','promote') then raise exception 'V2_C_SHADOW_MODE_REQUIRED'; end if;
    if exists (select 1 from public.v2_source_configs x where x.id <> c.id and (x.promotion_approved or x.mode='promote')) then raise exception 'V2_PRODUCTION_SOURCE_LIMIT'; end if;
  end if;
  update public.v2_source_configs set promotion_approved=approved_value,
    mode=case when approved_value then 'promote' else 'shadow' end,
    release_approved=case when approved_value then release_approved else false end,
    updated_at=now() where id=c.id;
  perform public.v2_phase_c_log(case when approved_value then 'source_approved' else 'source_revoked' end,
    approving_admin_id,c.id,null,null,null,reason_text,'{}');
  return query select c.id,c.source_key,case when approved_value then 'promote' else 'shadow' end,approved_value;
end;
$$;

create function public.approve_v2_observation_for_promotion(
  target_observation_id uuid, approving_admin_id uuid, approval_note_text text default null
)
returns table(observation_id uuid, approved boolean, promotion_state text)
language plpgsql security definer set search_path = public, pg_temp as $$
declare o public.v2_ingestion_observations%rowtype; c public.v2_source_configs%rowtype;
begin
  perform pg_advisory_xact_lock(hashtextextended('verkradar-phase-c-approved-observation', 0));
  select * into o from public.v2_ingestion_observations where id=target_observation_id for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;
  select * into c from public.v2_source_configs where id=o.source_config_id;
  if not public.v2_phase_c_flag('phase_c_production_enabled') or not c.production_canary_enabled then raise exception 'V2_PRODUCTION_FEATURE_DISABLED'; end if;
  if exists(select 1 from public.v2_ingestion_observations x where x.id<>o.id and x.approved_for_promotion) then raise exception 'V2_PRODUCTION_OBSERVATION_LIMIT'; end if;
  return query select * from public.v2_c0_approve_observation_internal(target_observation_id,approving_admin_id,approval_note_text);
  perform public.v2_phase_c_log('observation_approved',approving_admin_id,c.id,o.id,null,null,approval_note_text,'{}');
end;
$$;

create function public.promote_v2_observation(target_observation_id uuid, promoting_admin_id uuid)
returns table(opportunity_id uuid, created boolean, identity_match_type text, provenance_attached boolean, promotion_status text, block_code text, reasons jsonb)
language plpgsql security definer set search_path = public, pg_temp as $$
declare o public.v2_ingestion_observations%rowtype; c public.v2_source_configs%rowtype; r record; active_canaries integer; new_today integer; already_promoted boolean;
begin
  if not exists(select 1 from public.admin_users where user_id=promoting_admin_id) then raise exception 'V2_PROMOTION_ADMIN_REQUIRED'; end if;
  perform pg_advisory_xact_lock(hashtextextended('verkradar-phase-c-production-promotion',0));
  select * into o from public.v2_ingestion_observations where id=target_observation_id for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;
  select * into c from public.v2_source_configs where id=o.source_config_id;
  if not public.v2_phase_c_flag('phase_c_production_enabled') or not c.production_canary_enabled then raise exception 'V2_PRODUCTION_FEATURE_DISABLED'; end if;
  select exists(select 1 from public.opportunity_ingestion_provenance where observation_id=o.id) into already_promoted;
  select count(*) into active_canaries from public.opportunities where raw_payload->>'promotion_quarantine'='phase_c_canary';
  select count(*) into new_today from public.v2_phase_c_events where event_type='opportunity_created' and occurred_at >= date_trunc('day',now() at time zone 'UTC') at time zone 'UTC';
  perform public.v2_phase_c_log('promotion_attempted',promoting_admin_id,c.id,o.id,null,null,null,'{}');
  select * into r from public.v2_c0_promote_observation_internal(target_observation_id);
  if r.created and not already_promoted and active_canaries >= 1 then raise exception 'V2_ACTIVE_CANARY_LIMIT'; end if;
  if r.created and not already_promoted and new_today >= 1 then raise exception 'V2_DAILY_NEW_PROMOTION_LIMIT'; end if;
  if r.promotion_status <> 'promoted' then
    perform public.v2_phase_c_log('promotion_blocked',promoting_admin_id,c.id,o.id,null,r.block_code,null,coalesce(r.reasons,'[]'));
  elsif r.created and not already_promoted then
    perform public.v2_phase_c_log('opportunity_created',promoting_admin_id,c.id,o.id,r.opportunity_id,null,null,jsonb_build_object('identity_match_type',r.identity_match_type));
    perform public.v2_phase_c_log('quarantine_created',promoting_admin_id,c.id,o.id,r.opportunity_id,null,null,'{}');
  elsif not already_promoted then
    perform public.v2_phase_c_log('existing_opportunity_reused',promoting_admin_id,c.id,o.id,r.opportunity_id,null,null,jsonb_build_object('identity_match_type',r.identity_match_type));
  end if;
  return query select r.opportunity_id,r.created,r.identity_match_type,r.provenance_attached,r.promotion_status,r.block_code,r.reasons;
end;
$$;

create function public.rollback_v2_canary_promotion(target_observation_id uuid, rollback_admin_id uuid, rollback_reason_text text)
returns table(observation_id uuid, opportunity_id uuid, rollback_status text, opportunity_deleted boolean, assertions jsonb)
language plpgsql security definer set search_path = public, pg_temp as $$
declare o public.v2_ingestion_observations%rowtype; r record;
begin
  select * into o from public.v2_ingestion_observations where id=target_observation_id for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;
  perform public.v2_phase_c_authorize_transaction('rollback',true);
  select * into r from public.v2_c0_rollback_canary_internal(target_observation_id,rollback_admin_id,rollback_reason_text);
  perform public.v2_phase_c_log('rollback',rollback_admin_id,o.source_config_id,o.id,r.opportunity_id,null,rollback_reason_text,jsonb_build_object('status',r.rollback_status,'deleted',r.opportunity_deleted));
  perform public.v2_phase_c_authorize_transaction('rollback',false);
  return query select r.observation_id,r.opportunity_id,r.rollback_status,r.opportunity_deleted,r.assertions;
end;
$$;

create function public.approve_v2_canary_release(target_observation_id uuid, approving_admin_id uuid, reason_text text)
returns jsonb language plpgsql security definer set search_path = public, pg_temp as $$
declare o public.v2_ingestion_observations%rowtype; c public.v2_source_configs%rowtype; p public.opportunity_ingestion_provenance%rowtype; q public.opportunities%rowtype;
begin
  if not exists(select 1 from public.admin_users where user_id=approving_admin_id) then raise exception 'V2_RELEASE_ADMIN_REQUIRED'; end if;
  if nullif(trim(reason_text),'') is null then raise exception 'V2_RELEASE_REASON_REQUIRED'; end if;
  select * into o from public.v2_ingestion_observations where id=target_observation_id for update;
  select * into c from public.v2_source_configs where id=o.source_config_id for update;
  select * into p from public.opportunity_ingestion_provenance where observation_id=o.id and provenance_type='v2_created' for update;
  select * into q from public.opportunities where id=p.opportunity_id for update;
  if not public.v2_phase_c_flag('phase_c_production_enabled') or not public.v2_phase_c_flag('phase_c_release_enabled') or not c.release_feature_enabled then raise exception 'V2_RELEASE_FEATURE_DISABLED'; end if;
  if c.mode<>'promote' or not c.promotion_approved then raise exception 'V2_SOURCE_PROMOTION_NOT_APPROVED'; end if;
  if q.raw_payload->>'promotion_quarantine'<>'phase_c_canary' then raise exception 'V2_RELEASE_NOT_QUARANTINED'; end if;
  update public.v2_ingestion_observations set approved_for_release=true,release_approved_at=now(),release_approved_by=approving_admin_id,release_approval_reason=trim(reason_text),updated_at=now() where id=o.id;
  update public.v2_source_configs set release_approved=true,updated_at=now() where id=c.id;
  perform public.v2_phase_c_log('release_approved',approving_admin_id,c.id,o.id,q.id,null,reason_text,'{}');
  return jsonb_build_object('approved',true,'observation_id',o.id,'opportunity_id',q.id);
end;
$$;

create function public.release_v2_canary(target_observation_id uuid, releasing_admin_id uuid, reason_text text)
returns jsonb language plpgsql security definer set search_path = public, pg_temp as $$
declare o public.v2_ingestion_observations%rowtype; c public.v2_source_configs%rowtype; p public.opportunity_ingestion_provenance%rowtype; q public.opportunities%rowtype; run_row public.v2_ingestion_runs%rowtype; health_row public.v2_source_health%rowtype; checks jsonb; candidate_count integer; fuzzy_count integer;
begin
  if not exists(select 1 from public.admin_users where user_id=releasing_admin_id) then raise exception 'V2_RELEASE_ADMIN_REQUIRED'; end if;
  if nullif(trim(reason_text),'') is null then raise exception 'V2_RELEASE_REASON_REQUIRED'; end if;
  perform pg_advisory_xact_lock(hashtextextended('verkradar-phase-c-release',0));
  select * into o from public.v2_ingestion_observations where id=target_observation_id for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;
  select * into c from public.v2_source_configs where id=o.source_config_id for update;
  select * into p from public.opportunity_ingestion_provenance where observation_id=o.id and provenance_type='v2_created' for update;
  if not found then raise exception 'V2_RELEASE_PROVENANCE_INVALID'; end if;
  select * into q from public.opportunities where id=p.opportunity_id for update;
  select * into run_row from public.v2_ingestion_runs where id=o.run_id;
  select * into health_row from public.v2_source_health where source_config_id=c.id;
  if not public.v2_phase_c_flag('phase_c_production_enabled') or not public.v2_phase_c_flag('phase_c_release_enabled') or not c.release_feature_enabled then raise exception 'V2_RELEASE_FEATURE_DISABLED'; end if;
  if c.mode<>'promote' or not c.promotion_approved or not c.release_approved or not o.approved_for_release then raise exception 'V2_RELEASE_NOT_APPROVED'; end if;
  if q.raw_payload->>'promotion_quarantine'<>'phase_c_canary' or q.status='open' then raise exception 'V2_RELEASE_NOT_QUARANTINED'; end if;
  if run_row.status<>'succeeded' or run_row.finished_at is null or run_row.error_count<>0 or run_row.suspicious_zero_items then raise exception 'V2_RELEASE_RUN_UNHEALTHY'; end if;
  if health_row.status<>'healthy' or health_row.circuit_state<>'closed' or health_row.last_run_id<>run_row.id then raise exception 'V2_RELEASE_SOURCE_UNHEALTHY'; end if;
  if o.deadline is null or o.deadline_evidence<>'explicit_source' or o.deadline <= (now() at time zone 'UTC')::date + 7 then raise exception 'V2_RELEASE_DEADLINE_TOO_CLOSE'; end if;
  if o.predicted_requires_admin_review or o.comparison_state in ('conflict','review_required') or exists(select 1 from public.v2_legacy_comparisons where observation_id=o.id and (match_type='fuzzy_review_candidate' or decision='needs_review')) then raise exception 'V2_RELEASE_IDENTITY_REVIEW_REQUIRED'; end if;
  select count(distinct id) into candidate_count from public.opportunities x where x.id<>q.id and (
    (x.source_id=o.source_id and x.external_id=o.external_id)
    or (nullif(public.v2_normalize_identity_text(o.procurement_reference),'') is not null and public.v2_normalize_identity_text(coalesce(x.raw_payload->>'procurement_reference',x.raw_payload->>'reference_number',x.raw_payload->>'notice_number'))=public.v2_normalize_identity_text(o.procurement_reference))
    or (o.normalized_canonical_url is not null and public.v2_normalize_canonical_url(x.url)=o.normalized_canonical_url)
    or public.v2_identity_fingerprint(x.buyer,x.title,x.deadline,coalesce(x.raw_payload->>'procurement_reference',x.raw_payload->>'reference_number',x.raw_payload->>'notice_number'))=o.identity_fingerprint
  );
  if candidate_count<>0 then raise exception 'V2_RELEASE_DETERMINISTIC_DUPLICATE_FOUND'; end if;
  select count(*) into fuzzy_count from public.opportunities x
  where x.id<>q.id
    and extensions.similarity(public.v2_normalize_identity_text(x.title),public.v2_normalize_identity_text(o.title))>=0.84;
  if fuzzy_count<>0 then raise exception 'V2_RELEASE_FUZZY_REVIEW_REQUIRED'; end if;
  checks:=public.v2_canary_downstream_assertions(q.id);
  if coalesce((checks->>'zero_downstream')::boolean,false) is not true then raise exception 'V2_RELEASE_UNEXPECTED_DOWNSTREAM_STATE'; end if;
  perform public.v2_phase_c_authorize_transaction('release',true);
  update public.opportunities set status='open',phase_c_communication_hold=true,phase_c_released_at=now(),phase_c_released_by=releasing_admin_id,phase_c_release_reason=trim(reason_text),raw_payload=(raw_payload-'promotion_quarantine')||jsonb_build_object('hidden_from_reports',false,'admin_report_status','released_held','phase_c_communication_hold',true),updated_at=now() where id=q.id;
  perform public.v2_phase_c_authorize_transaction('release',false);
  update public.v2_ingestion_observations set released_at=now(),released_by=releasing_admin_id,release_reason=trim(reason_text),updated_at=now() where id=o.id;
  update public.v2_source_configs set release_approved=false,updated_at=now() where id=c.id;
  perform public.v2_phase_c_log('released',releasing_admin_id,c.id,o.id,q.id,null,reason_text,jsonb_build_object('communication_hold',true,'matching_triggered',false));
  return jsonb_build_object('released',true,'opportunity_id',q.id,'communication_hold',true,'downstream_triggered',false);
end;
$$;

create function public.disable_released_v2_canary(target_observation_id uuid, disabling_admin_id uuid, reason_text text)
returns jsonb language plpgsql security definer set search_path = public, pg_temp as $$
declare o public.v2_ingestion_observations%rowtype; p public.opportunity_ingestion_provenance%rowtype; q public.opportunities%rowtype;
begin
  if not exists(select 1 from public.admin_users where user_id=disabling_admin_id) then raise exception 'V2_DISABLE_ADMIN_REQUIRED'; end if;
  if nullif(trim(reason_text),'') is null then raise exception 'V2_DISABLE_REASON_REQUIRED'; end if;
  select * into o from public.v2_ingestion_observations where id=target_observation_id for update;
  select * into p from public.opportunity_ingestion_provenance where observation_id=o.id and provenance_type='v2_created' for update;
  if not found then raise exception 'V2_DISABLE_V2_CREATED_ONLY'; end if;
  select * into q from public.opportunities where id=p.opportunity_id for update;
  if q.phase_c_released_at is null then raise exception 'V2_DISABLE_NOT_RELEASED'; end if;
  perform public.v2_phase_c_authorize_transaction('post_release_disable',true);
  update public.opportunities set status='hidden',actionable_for_suppliers=false,requires_admin_review=true,phase_c_communication_hold=true,phase_c_disabled_at=now(),phase_c_disabled_by=disabling_admin_id,phase_c_disable_reason=trim(reason_text),raw_payload=raw_payload||jsonb_build_object('hidden_from_reports',true,'admin_report_status','disabled','phase_c_communication_hold',true),updated_at=now() where id=q.id;
  perform public.v2_phase_c_authorize_transaction('post_release_disable',false);
  update public.opportunity_matches set safety_status='hidden',alert_eligible=false,review_required=true,safety_reasons=array_append(coalesce(safety_reasons,'{}'),'Phase C post-release disable') where opportunity_id=q.id;
  update public.v2_ingestion_observations set post_release_disabled_at=now(),post_release_disabled_by=disabling_admin_id,post_release_disable_reason=trim(reason_text),updated_at=now() where id=o.id;
  perform public.v2_phase_c_log('post_release_disabled',disabling_admin_id,o.source_config_id,o.id,q.id,null,reason_text,'{}');
  return jsonb_build_object('disabled',true,'opportunity_id',q.id,'deleted',false,'communication_hold',true);
end;
$$;

-- Reykjavík is prepared, but every production capability remains disabled.
update public.v2_source_configs set mode='shadow',promotion_approved=false,
  promotion_reference_required=true,production_canary_enabled=false,
  release_feature_enabled=false,release_approved=false,updated_at=now()
where source_key='reykjavik-utbod-v2';
update public.v2_source_configs set promotion_approved=false,release_approved=false where source_key<>'reykjavik-utbod-v2';

drop function if exists public.clear_v2_c2_review_approval(uuid, uuid);

revoke all on table public.v2_phase_c_events from public, anon, authenticated;
grant select on table public.v2_phase_c_events to authenticated;
revoke all on table public.v2_phase_c_authorized_transactions from public, anon, authenticated, service_role;
revoke all on function public.v2_phase_c_flag(text) from public, anon, authenticated;
revoke all on function public.v2_phase_c_is_restricted(uuid) from public, anon;
grant execute on function public.v2_phase_c_is_restricted(uuid) to authenticated, service_role;
revoke all on function public.v2_phase_c_is_quarantined(uuid) from public, anon, authenticated;
revoke all on function public.v2_phase_c_log(text,uuid,uuid,uuid,uuid,text,text,jsonb) from public, anon, authenticated;
revoke all on function public.v2_phase_c_authorize_transaction(text,boolean) from public, anon, authenticated, service_role;
revoke all on function public.set_v2_source_production_approval(text,boolean,uuid,text) from public, anon, authenticated;
revoke all on function public.approve_v2_observation_for_promotion(uuid,uuid,text) from public, anon, authenticated;
revoke all on function public.promote_v2_observation(uuid,uuid) from public, anon, authenticated;
revoke all on function public.rollback_v2_canary_promotion(uuid,uuid,text) from public, anon, authenticated;
revoke all on function public.approve_v2_canary_release(uuid,uuid,text) from public, anon, authenticated;
revoke all on function public.release_v2_canary(uuid,uuid,text) from public, anon, authenticated;
revoke all on function public.disable_released_v2_canary(uuid,uuid,text) from public, anon, authenticated;
grant execute on function public.set_v2_source_production_approval(text,boolean,uuid,text) to service_role;
grant execute on function public.approve_v2_observation_for_promotion(uuid,uuid,text) to service_role;
grant execute on function public.promote_v2_observation(uuid,uuid) to service_role;
grant execute on function public.rollback_v2_canary_promotion(uuid,uuid,text) to service_role;
grant execute on function public.approve_v2_canary_release(uuid,uuid,text) to service_role;
grant execute on function public.release_v2_canary(uuid,uuid,text) to service_role;
grant execute on function public.disable_released_v2_canary(uuid,uuid,text) to service_role;

comment on column public.opportunities.phase_c_communication_hold is 'Explicit customer visibility/report/notification/send hold. Release sets true; no C3 hold-clear action exists.';
comment on table public.v2_phase_c_events is 'Append-only Phase C administrative and lifecycle audit trail.';
notify pgrst, 'reload schema';
