-- Give canonical company matching one independent scheduled owner after the
-- daily source window. This invokes the existing admin-company-actions matcher
-- without importing sources, running AI, generating reports, or sending mail.

create table if not exists public.canonical_match_runs (
  id uuid primary key default gen_random_uuid(),
  status text not null check (status in ('running', 'success', 'error')),
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  companies_checked integer not null default 0,
  eligible_opportunities integer not null default 0,
  matches_refreshed integer not null default 0,
  matches_created integer not null default 0,
  matches_updated integer not null default 0,
  matches_removed integer not null default 0,
  source_names_evaluated jsonb not null default '[]'::jsonb,
  details jsonb not null default '{}'::jsonb,
  error text
);

create index if not exists canonical_match_runs_started_idx
  on public.canonical_match_runs(started_at desc);

alter table public.canonical_match_runs enable row level security;
revoke all on public.canonical_match_runs from public, anon, authenticated;

drop policy if exists "Admins read canonical match runs" on public.canonical_match_runs;
create policy "Admins read canonical match runs"
  on public.canonical_match_runs for select to authenticated
  using (exists (
    select 1 from public.admin_users where admin_users.user_id = auth.uid()
  ));

create table if not exists public.canonical_match_automation_dispatches (
  id uuid primary key default gen_random_uuid(),
  invoked_at timestamptz not null default now(),
  request_id bigint,
  status text not null default 'dispatched'
    check (status in ('dispatched', 'skipped_active_run')),
  reason text
);

create index if not exists canonical_match_dispatches_invoked_idx
  on public.canonical_match_automation_dispatches(invoked_at desc);

alter table public.canonical_match_automation_dispatches enable row level security;
revoke all on public.canonical_match_automation_dispatches from public, anon, authenticated;

drop policy if exists "Admins read canonical match dispatches"
  on public.canonical_match_automation_dispatches;
create policy "Admins read canonical match dispatches"
  on public.canonical_match_automation_dispatches for select to authenticated
  using (exists (
    select 1 from public.admin_users where admin_users.user_id = auth.uid()
  ));

insert into public.automation_settings(key, value)
values (
  'canonical_matcher_automation_url',
  'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/admin-company-actions'
)
on conflict (key) do update set value = excluded.value, updated_at = now();

create or replace function public.trigger_canonical_matcher_automation()
returns void
language plpgsql
security definer
set search_path = public, extensions, pg_temp
as $$
declare
  endpoint text;
  automation_secret text;
  gateway_authorization text;
  request_id bigint;
begin
  if exists (
    select 1 from public.canonical_match_runs
    where status = 'running' and started_at > now() - interval '20 minutes'
  ) then
    insert into public.canonical_match_automation_dispatches(status, reason)
    values ('skipped_active_run', 'A canonical matcher run is already active.');
    return;
  end if;

  select value into endpoint from public.automation_settings
  where key = 'canonical_matcher_automation_url';
  select value into automation_secret from public.automation_settings
  where key = 'automation_secret';
  gateway_authorization := public.v2_routine_gateway_authorization();

  if endpoint <> 'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/admin-company-actions'
     or nullif(automation_secret, '') is null then
    raise exception 'CANONICAL_MATCHER_AUTOMATION_CONFIG_INVALID';
  end if;

  request_id := net.http_post(
    url := endpoint,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', gateway_authorization,
      'x-automation-secret', automation_secret
    ),
    body := jsonb_build_object('action', 'refresh_all_matches')
  );

  insert into public.canonical_match_automation_dispatches(request_id, status)
  values (request_id, 'dispatched');
end;
$$;

revoke all on function public.trigger_canonical_matcher_automation()
  from public, anon, authenticated;

do $$
declare existing_jobid bigint;
begin
  select jobid into existing_jobid from cron.job
  where jobname = 'canonical-matcher-daily-production';
  if existing_jobid is not null then perform cron.unschedule(existing_jobid); end if;
end $$;

select cron.schedule(
  'canonical-matcher-daily-production',
  '20 3 * * *',
  $$select public.trigger_canonical_matcher_automation();$$
);

notify pgrst, 'reload schema';
