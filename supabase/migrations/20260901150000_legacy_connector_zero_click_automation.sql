-- Ingestion-only automation for the nine legacy sources that remain operational
-- and do not duplicate routine V2 sources. Matching remains exclusively on the
-- existing 03:00 TED path. No parser, source configuration, or V2 schedule is changed.

create table if not exists public.legacy_connector_automation_dispatches (
  id uuid primary key default gen_random_uuid(),
  batch_key text not null check (batch_key in ('legacy_batch_1','legacy_batch_2')),
  invoked_at timestamptz not null default now(),
  request_id bigint,
  status text not null default 'dispatched' check (status in ('dispatched','skipped_active_run')),
  reason text
);

create index if not exists legacy_connector_automation_dispatches_invoked_idx
  on public.legacy_connector_automation_dispatches(invoked_at desc);

alter table public.legacy_connector_automation_dispatches enable row level security;
revoke all on public.legacy_connector_automation_dispatches from public, anon, authenticated;

drop policy if exists "Admins read legacy connector automation dispatches"
  on public.legacy_connector_automation_dispatches;
create policy "Admins read legacy connector automation dispatches"
  on public.legacy_connector_automation_dispatches
  for select to authenticated
  using (exists (
    select 1 from public.admin_users
    where admin_users.user_id = auth.uid()
  ));

insert into public.automation_settings(key,value)
values (
  'legacy_connector_automation_url',
  'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/import-source-connectors'
)
on conflict (key) do update set value=excluded.value,updated_at=now();

create or replace function public.trigger_legacy_connector_automation(batch_key_value text)
returns void
language plpgsql
security definer
set search_path=public,extensions,pg_temp
as $$
declare
  endpoint text;
  secret text;
  gateway_authorization text;
  dispatch_id uuid := gen_random_uuid();
  net_request_id bigint;
begin
  if batch_key_value not in ('legacy_batch_1','legacy_batch_2') then
    raise exception 'LEGACY_CONNECTOR_AUTOMATION_BATCH_NOT_ALLOWED';
  end if;

  -- The Edge runtime budget is 18 seconds and schedules are 20 minutes apart.
  -- This guard also prevents a manual/duplicate dispatcher from overlapping a
  -- recent ingestion-only legacy batch.
  if exists (
    select 1 from public.import_runs
    where run_type='source-connectors-automation'
      and import_mode='legacy-connectors-ingestion-only'
      and status='running'
      and started_at > now() - interval '10 minutes'
  ) then
    insert into public.legacy_connector_automation_dispatches(id,batch_key,status,reason)
    values(dispatch_id,batch_key_value,'skipped_active_run','A legacy ingestion-only batch is already active.');
    return;
  end if;

  select value into endpoint from public.automation_settings
  where key='legacy_connector_automation_url';
  select value into secret from public.automation_settings
  where key='automation_secret';
  gateway_authorization := public.v2_routine_gateway_authorization();

  if endpoint <> 'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/import-source-connectors'
     or nullif(secret,'') is null then
    raise exception 'LEGACY_CONNECTOR_AUTOMATION_CONFIG_INVALID';
  end if;

  net_request_id := net.http_post(
    url:=endpoint,
    headers:=jsonb_build_object(
      'Content-Type','application/json',
      'Authorization',gateway_authorization,
      'x-automation-secret',secret
    ),
    body:=jsonb_build_object(
      'action','run_legacy_connector_batch',
      'batch_key',batch_key_value
    )
  );

  insert into public.legacy_connector_automation_dispatches(
    id,batch_key,request_id,status
  ) values (
    dispatch_id,batch_key_value,net_request_id,'dispatched'
  );
end;
$$;

revoke all on function public.trigger_legacy_connector_automation(text)
  from public,anon,authenticated;

do $$
declare existing_jobid bigint;
begin
  select jobid into existing_jobid from cron.job
  where jobname='legacy-source-connectors-batch-1';
  if existing_jobid is not null then perform cron.unschedule(existing_jobid); end if;
  select jobid into existing_jobid from cron.job
  where jobname='legacy-source-connectors-batch-2';
  if existing_jobid is not null then perform cron.unschedule(existing_jobid); end if;
end $$;

select cron.schedule(
  'legacy-source-connectors-batch-1',
  '30 0 * * *',
  $$select public.trigger_legacy_connector_automation('legacy_batch_1');$$
);

select cron.schedule(
  'legacy-source-connectors-batch-2',
  '50 0 * * *',
  $$select public.trigger_legacy_connector_automation('legacy_batch_2');$$
);

notify pgrst,'reload schema';
