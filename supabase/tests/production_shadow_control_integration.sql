begin;

do $$
declare
  reykjavik_config public.v2_source_configs%rowtype;
  first_run_id uuid;
begin
  select * into reykjavik_config
  from public.v2_source_configs
  where source_key = 'reykjavik-utbod-v2';

  if not found
    or reykjavik_config.mode <> 'shadow'
    or not reykjavik_config.production_shadow_enabled
    or reykjavik_config.promotion_approved
    or reykjavik_config.production_canary_enabled
    or reykjavik_config.release_feature_enabled
    or reykjavik_config.release_approved then
    raise exception 'production Reykjavík shadow configuration is not dormant and exact';
  end if;

  if exists (
    select 1 from public.v2_source_configs
    where source_key <> 'reykjavik-utbod-v2' and production_shadow_enabled
  ) then
    raise exception 'another source is enabled for production shadow execution';
  end if;

  insert into public.v2_ingestion_runs (
    source_config_id, mode, trigger_type, status, attempt_count, started_at,
    lease_token, lease_expires_at, run_deadline_at, details
  ) values (
    reykjavik_config.id, 'shadow', 'shadow', 'running', 1, now(),
    gen_random_uuid(), now() + interval '30 seconds', now() + interval '60 seconds',
    '{"customer_visible_writes":0,"promotion_allowed":false}'::jsonb
  ) returning id into first_run_id;

  begin
    insert into public.v2_ingestion_runs (
      source_config_id, mode, trigger_type, status, attempt_count, started_at,
      lease_token, lease_expires_at, run_deadline_at, details
    ) values (
      reykjavik_config.id, 'shadow', 'shadow', 'running', 1, now(),
      gen_random_uuid(), now() + interval '30 seconds', now() + interval '60 seconds',
      '{"customer_visible_writes":0,"promotion_allowed":false}'::jsonb
    );
    raise exception 'concurrent active shadow run was not blocked';
  exception
    when unique_violation then null;
  end;

  if (select count(*) from public.v2_ingestion_runs where id = first_run_id) <> 1 then
    raise exception 'active-run uniqueness test changed the first run';
  end if;

  if exists (select 1 from public.v2_phase_c_events) then
    raise exception 'shadow setup created a Phase C event';
  end if;
end;
$$;

rollback;
