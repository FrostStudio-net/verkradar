-- Atomic single-active-run admission for the three asynchronous jobs that did
-- not previously have database-backed concurrency protection. Schedules,
-- matching behavior, source coverage, and downstream processing are unchanged.

do $$
begin
  if (
    select count(*)
    from public.canonical_match_runs
    where status = 'running'
  ) > 1 then
    raise exception 'CANONICAL_MATCHER_MULTIPLE_ACTIVE_RUNS';
  end if;

  if (
    select count(*)
    from public.import_runs
    where status = 'running'
      and run_type in ('ted-automation', 'ted-manual')
  ) > 1 then
    raise exception 'TED_MULTIPLE_ACTIVE_RUNS';
  end if;

  if exists (
    select source_name
    from public.import_runs
    where status = 'running'
      and run_type = 'source-connectors-automation'
      and import_mode = 'legacy-connectors-ingestion-only'
    group by source_name
    having count(*) > 1
  ) then
    raise exception 'LEGACY_CONNECTOR_MULTIPLE_ACTIVE_RUNS';
  end if;
end $$;

create unique index if not exists canonical_match_runs_one_active_idx
  on public.canonical_match_runs ((true))
  where status = 'running';

create unique index if not exists import_runs_one_active_ted_idx
  on public.import_runs ((true))
  where status = 'running'
    and run_type in ('ted-automation', 'ted-manual');

create unique index if not exists import_runs_one_active_legacy_batch_idx
  on public.import_runs (source_name)
  where status = 'running'
    and run_type = 'source-connectors-automation'
    and import_mode = 'legacy-connectors-ingestion-only';

create or replace function public.admit_canonical_match_run(requested_run_id uuid)
returns table(admitted boolean, run_id uuid, reason text)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  active_run_id uuid;
begin
  if auth.role() is distinct from 'service_role' then
    raise exception 'SCHEDULER_ADMISSION_SERVICE_ROLE_REQUIRED';
  end if;

  perform pg_advisory_xact_lock(hashtextextended('verkradar:canonical-matcher-admission', 0));

  update public.canonical_match_runs
  set status = 'error',
      completed_at = now(),
      error = coalesce(error, 'Run automatically closed after exceeding the 20 minute active-run lease.'),
      details = details || jsonb_build_object('stale_run_recovered_at', now())
  where status = 'running'
    and started_at <= now() - interval '20 minutes';

  select id into active_run_id
  from public.canonical_match_runs
  where status = 'running'
  order by started_at
  limit 1;

  if active_run_id is not null then
    return query select false, active_run_id, 'already_running'::text;
    return;
  end if;

  begin
    insert into public.canonical_match_runs(id, status, started_at)
    values (requested_run_id, 'running', now());
  exception when unique_violation then
    select id into active_run_id
    from public.canonical_match_runs
    where status = 'running'
    order by started_at
    limit 1;
    return query select false, active_run_id, 'already_running'::text;
    return;
  end;

  return query select true, requested_run_id, 'admitted'::text;
end;
$$;

create or replace function public.admit_ted_import_run(
  requested_run_id uuid,
  requested_run_type text,
  requested_source_name text,
  requested_import_mode text,
  requested_query text
)
returns table(admitted boolean, run_id uuid, reason text)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  active_run_id uuid;
begin
  if auth.role() is distinct from 'service_role' then
    raise exception 'SCHEDULER_ADMISSION_SERVICE_ROLE_REQUIRED';
  end if;
  if requested_run_type not in ('ted-automation', 'ted-manual')
     or requested_source_name <> 'TED Iceland/Nordic' then
    raise exception 'TED_ADMISSION_INVALID_JOB';
  end if;

  perform pg_advisory_xact_lock(hashtextextended('verkradar:ted-import-admission', 0));

  update public.import_runs
  set status = 'error',
      finished_at = now(),
      error = coalesce(error, 'Run automatically closed after exceeding the 30 minute active-run lease.'),
      details = details || jsonb_build_object('stale_run_recovered_at', now())
  where status = 'running'
    and run_type in ('ted-automation', 'ted-manual')
    and started_at <= now() - interval '30 minutes';

  select id into active_run_id
  from public.import_runs
  where status = 'running'
    and run_type in ('ted-automation', 'ted-manual')
  order by started_at
  limit 1;

  if active_run_id is not null then
    return query select false, active_run_id, 'already_running'::text;
    return;
  end if;

  begin
    insert into public.import_runs(
      id, run_type, source_name, import_mode, query, status, started_at
    ) values (
      requested_run_id, requested_run_type, requested_source_name,
      requested_import_mode, requested_query, 'running', now()
    );
  exception when unique_violation then
    select id into active_run_id
    from public.import_runs
    where status = 'running'
      and run_type in ('ted-automation', 'ted-manual')
    order by started_at
    limit 1;
    return query select false, active_run_id, 'already_running'::text;
    return;
  end;

  return query select true, requested_run_id, 'admitted'::text;
end;
$$;

create or replace function public.admit_legacy_connector_import_run(
  requested_run_id uuid,
  requested_source_name text,
  requested_query text
)
returns table(admitted boolean, run_id uuid, reason text)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  active_run_id uuid;
begin
  if auth.role() is distinct from 'service_role' then
    raise exception 'SCHEDULER_ADMISSION_SERVICE_ROLE_REQUIRED';
  end if;
  if requested_source_name not in (
    'Legacy source connectors / legacy_batch_1',
    'Legacy source connectors / legacy_batch_2'
  ) then
    raise exception 'LEGACY_CONNECTOR_ADMISSION_INVALID_JOB';
  end if;

  perform pg_advisory_xact_lock(hashtextextended(
    'verkradar:legacy-connector-admission:' || requested_source_name,
    0
  ));

  update public.import_runs
  set status = 'error',
      finished_at = now(),
      error = coalesce(error, 'Run automatically closed after exceeding the 10 minute active-run lease.'),
      details = details || jsonb_build_object('stale_run_recovered_at', now())
  where status = 'running'
    and run_type = 'source-connectors-automation'
    and import_mode = 'legacy-connectors-ingestion-only'
    and source_name = requested_source_name
    and started_at <= now() - interval '10 minutes';

  select id into active_run_id
  from public.import_runs
  where status = 'running'
    and run_type = 'source-connectors-automation'
    and import_mode = 'legacy-connectors-ingestion-only'
    and source_name = requested_source_name
  order by started_at
  limit 1;

  if active_run_id is not null then
    return query select false, active_run_id, 'already_running'::text;
    return;
  end if;

  begin
    insert into public.import_runs(
      id, run_type, source_name, import_mode, query, status, started_at
    ) values (
      requested_run_id, 'source-connectors-automation', requested_source_name,
      'legacy-connectors-ingestion-only', requested_query, 'running', now()
    );
  exception when unique_violation then
    select id into active_run_id
    from public.import_runs
    where status = 'running'
      and run_type = 'source-connectors-automation'
      and import_mode = 'legacy-connectors-ingestion-only'
      and source_name = requested_source_name
    order by started_at
    limit 1;
    return query select false, active_run_id, 'already_running'::text;
    return;
  end;

  return query select true, requested_run_id, 'admitted'::text;
end;
$$;

revoke all on function public.admit_canonical_match_run(uuid) from public, anon, authenticated;
revoke all on function public.admit_ted_import_run(uuid, text, text, text, text) from public, anon, authenticated;
revoke all on function public.admit_legacy_connector_import_run(uuid, text, text) from public, anon, authenticated;
grant execute on function public.admit_canonical_match_run(uuid) to service_role;
grant execute on function public.admit_ted_import_run(uuid, text, text, text, text) to service_role;
grant execute on function public.admit_legacy_connector_import_run(uuid, text, text) to service_role;

-- Keep the existing dispatcher as a cheap optimization, but scope its check to
-- the requested batch. The admission RPC remains the atomic authority.
create or replace function public.trigger_legacy_connector_automation(batch_key_value text)
returns void
language plpgsql
security definer
set search_path = public, extensions, pg_temp
as $$
declare
  endpoint text;
  secret text;
  gateway_authorization text;
  dispatch_id uuid := gen_random_uuid();
  net_request_id bigint;
  logical_source_name text;
begin
  if batch_key_value not in ('legacy_batch_1', 'legacy_batch_2') then
    raise exception 'LEGACY_CONNECTOR_AUTOMATION_BATCH_NOT_ALLOWED';
  end if;

  logical_source_name := 'Legacy source connectors / ' || batch_key_value;
  if exists (
    select 1 from public.import_runs
    where run_type = 'source-connectors-automation'
      and import_mode = 'legacy-connectors-ingestion-only'
      and source_name = logical_source_name
      and status = 'running'
      and started_at > now() - interval '10 minutes'
  ) then
    insert into public.legacy_connector_automation_dispatches(id, batch_key, status, reason)
    values (dispatch_id, batch_key_value, 'skipped_active_run', 'This legacy connector batch is already active.');
    return;
  end if;

  select value into endpoint from public.automation_settings
  where key = 'legacy_connector_automation_url';
  select value into secret from public.automation_settings
  where key = 'automation_secret';
  gateway_authorization := public.v2_routine_gateway_authorization();

  if endpoint <> 'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/import-source-connectors'
     or nullif(secret, '') is null then
    raise exception 'LEGACY_CONNECTOR_AUTOMATION_CONFIG_INVALID';
  end if;

  net_request_id := net.http_post(
    url := endpoint,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', gateway_authorization,
      'x-automation-secret', secret
    ),
    body := jsonb_build_object(
      'action', 'run_legacy_connector_batch',
      'batch_key', batch_key_value
    )
  );

  insert into public.legacy_connector_automation_dispatches(
    id, batch_key, request_id, status
  ) values (
    dispatch_id, batch_key_value, net_request_id, 'dispatched'
  );
end;
$$;

revoke all on function public.trigger_legacy_connector_automation(text)
  from public, anon, authenticated;

notify pgrst, 'reload schema';
