-- Enable only the dormant Phase C3 Reykjavik canary control plane.
-- This function does not approve a source/observation, change source mode,
-- promote, release, or create a Phase C event.

create or replace function public.set_reykjavik_production_canary_enabled(
  enabled_value boolean,
  acting_admin_id uuid
)
returns table(
  phase_c_production_enabled boolean,
  production_canary_enabled boolean,
  phase_c_release_enabled boolean,
  source_mode text,
  promotion_approved boolean,
  release_feature_enabled boolean,
  release_approved boolean
)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  config_row public.v2_source_configs%rowtype;
  latest_run public.v2_ingestion_runs%rowtype;
  health_row public.v2_source_health%rowtype;
  global_release_enabled boolean;
  approved_observation_count integer;
  promoted_observation_count integer;
  active_quarantine_count integer;
  active_source_count integer;
  active_released_canary_count integer;
begin
  if not exists (
    select 1 from public.admin_users where user_id = acting_admin_id
  ) then
    raise exception 'V2_PRODUCTION_CANARY_ADMIN_REQUIRED';
  end if;

  perform pg_advisory_xact_lock(hashtextextended('verkradar-phase-c-reykjavik-enable', 0));

  -- Lock both global flags and the only source this operation may affect.
  perform 1
  from public.automation_settings
  where key in ('phase_c_production_enabled', 'phase_c_release_enabled')
  order by key
  for update;

  if not exists (
    select 1 from public.automation_settings where key = 'phase_c_production_enabled'
  ) or not exists (
    select 1 from public.automation_settings where key = 'phase_c_release_enabled'
  ) then
    raise exception 'V2_PRODUCTION_CANARY_GLOBAL_FLAGS_MISSING';
  end if;

  select * into config_row
  from public.v2_source_configs
  where source_key = 'reykjavik-utbod-v2'
  for update;
  if not found then raise exception 'V2_REYKJAVIK_SOURCE_CONFIG_MISSING'; end if;

  global_release_enabled := public.v2_phase_c_flag('phase_c_release_enabled');

  select count(*) into approved_observation_count
  from public.v2_ingestion_observations
  where approved_for_promotion;

  select count(*) into promoted_observation_count
  from public.v2_ingestion_observations
  where promoted_opportunity_id is not null or promotion_state = 'promoted';

  select count(*) into active_quarantine_count
  from public.opportunities
  where raw_payload->>'promotion_quarantine' = 'phase_c_canary';

  select count(*) into active_source_count
  from public.v2_source_configs c
  where c.mode = 'promote' or c.promotion_approved;

  select count(*) into active_released_canary_count
  from public.opportunities
  where phase_c_released_at is not null
    and phase_c_disabled_at is null;

  if enabled_value then
    if config_row.mode <> 'shadow' then raise exception 'V2_C_SHADOW_MODE_REQUIRED'; end if;
    if not config_row.production_shadow_enabled then raise exception 'V2_PRODUCTION_SHADOW_DISABLED'; end if;
    if config_row.promotion_approved then raise exception 'V2_SOURCE_ALREADY_PROMOTION_APPROVED'; end if;
    if config_row.release_feature_enabled then raise exception 'V2_RELEASE_FEATURE_MUST_REMAIN_DISABLED'; end if;
    if config_row.release_approved then raise exception 'V2_RELEASE_APPROVAL_MUST_REMAIN_DISABLED'; end if;
    if global_release_enabled then raise exception 'V2_GLOBAL_RELEASE_MUST_REMAIN_DISABLED'; end if;
    if approved_observation_count <> 0 then raise exception 'V2_APPROVED_OBSERVATIONS_EXIST'; end if;
    if promoted_observation_count <> 0 then raise exception 'V2_PROMOTED_OBSERVATIONS_EXIST'; end if;
    if active_quarantine_count <> 0 then raise exception 'V2_ACTIVE_CANARY_EXISTS'; end if;
    if active_source_count <> 0 then raise exception 'V2_PROMOTION_CAPABLE_SOURCE_EXISTS'; end if;
    if active_released_canary_count <> 0 then raise exception 'V2_RELEASED_CANARY_EXISTS'; end if;

    select * into latest_run
    from public.v2_ingestion_runs
    where source_config_id = config_row.id
    order by created_at desc
    limit 1;
    if not found or latest_run.mode <> 'shadow' or latest_run.status <> 'succeeded'
      or latest_run.finished_at is null then
      raise exception 'V2_LATEST_REYKJAVIK_SHADOW_NOT_SUCCEEDED';
    end if;
    if latest_run.suspicious_zero_items or latest_run.error_count <> 0 then
      raise exception 'V2_LATEST_REYKJAVIK_SHADOW_UNHEALTHY';
    end if;

    select * into health_row
    from public.v2_source_health
    where source_config_id = config_row.id
    for update;
    if not found or health_row.status <> 'healthy' or health_row.circuit_state <> 'closed'
      or health_row.last_run_id is distinct from latest_run.id
      or health_row.last_error_code is not null
      or coalesce((health_row.parser_health->>'suspicious_zero')::boolean, false)
      or coalesce((health_row.parser_health->>'parser_errors')::jsonb, '[]'::jsonb) <> '[]'::jsonb then
      raise exception 'V2_REYKJAVIK_SOURCE_HEALTH_NOT_HEALTHY';
    end if;

    update public.automation_settings
    set value = 'true'
    where key = 'phase_c_production_enabled';

    update public.v2_source_configs
    set production_canary_enabled = true
    where id = config_row.id;
  else
    if global_release_enabled or config_row.release_feature_enabled or config_row.release_approved then
      raise exception 'V2_RELEASE_ACTIVE';
    end if;
    if approved_observation_count <> 0 then raise exception 'V2_APPROVED_OBSERVATIONS_EXIST'; end if;
    if promoted_observation_count <> 0 then raise exception 'V2_PROMOTED_OBSERVATIONS_EXIST'; end if;
    if active_quarantine_count <> 0 then raise exception 'V2_ACTIVE_CANARY_EXISTS'; end if;
    if active_source_count <> 0 then raise exception 'V2_PROMOTION_CAPABLE_SOURCE_EXISTS'; end if;
    if active_released_canary_count <> 0 then raise exception 'V2_RELEASED_CANARY_EXISTS'; end if;

    update public.automation_settings
    set value = 'false'
    where key = 'phase_c_production_enabled';

    update public.v2_source_configs
    set production_canary_enabled = false
    where id = config_row.id;
  end if;

  return query
  select
    public.v2_phase_c_flag('phase_c_production_enabled'),
    c.production_canary_enabled,
    public.v2_phase_c_flag('phase_c_release_enabled'),
    c.mode,
    c.promotion_approved,
    c.release_feature_enabled,
    c.release_approved
  from public.v2_source_configs c
  where c.id = config_row.id;
end;
$$;

revoke all on function public.set_reykjavik_production_canary_enabled(boolean, uuid)
  from public, anon, authenticated;
grant execute on function public.set_reykjavik_production_canary_enabled(boolean, uuid)
  to service_role;

comment on function public.set_reykjavik_production_canary_enabled(boolean, uuid) is
  'Admin-only atomic production toggle for the Reykjavik Phase C3 canary control plane. It changes only the global production flag and Reykjavik production_canary_enabled.';

notify pgrst, 'reload schema';
