-- Schedule the existing source-agnostic automatic AI reviewer after the 03:20
-- canonical match refresh. The Edge action remains opt-in, candidate-only,
-- bounded to 10 reviews per invocation, and does not deliver customer content.

create table if not exists public.ai_review_automation_runs (
  id uuid primary key default gen_random_uuid(),
  status text not null check (status in ('running', 'success', 'error')),
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  requested_limit integer not null default 10 check (requested_limit between 1 and 10),
  companies_checked integer not null default 0,
  matches_checked integer not null default 0,
  reviews_created integer not null default 0,
  skipped_count integer not null default 0,
  details jsonb not null default '{}'::jsonb,
  error text
);

create index if not exists ai_review_automation_runs_started_idx
  on public.ai_review_automation_runs(started_at desc);

create unique index if not exists ai_review_automation_single_running_idx
  on public.ai_review_automation_runs(status)
  where status = 'running';

alter table public.ai_review_automation_runs enable row level security;
revoke all on public.ai_review_automation_runs from public, anon, authenticated;

drop policy if exists "Admins read AI review automation runs"
  on public.ai_review_automation_runs;
create policy "Admins read AI review automation runs"
  on public.ai_review_automation_runs for select to authenticated
  using (exists (
    select 1 from public.admin_users where admin_users.user_id = auth.uid()
  ));

create table if not exists public.ai_review_automation_dispatches (
  id uuid primary key default gen_random_uuid(),
  invoked_at timestamptz not null default now(),
  request_id bigint,
  status text not null default 'dispatched'
    check (status in ('dispatched', 'skipped_active_run')),
  reason text
);

create index if not exists ai_review_automation_dispatches_invoked_idx
  on public.ai_review_automation_dispatches(invoked_at desc);

alter table public.ai_review_automation_dispatches enable row level security;
revoke all on public.ai_review_automation_dispatches from public, anon, authenticated;

drop policy if exists "Admins read AI review automation dispatches"
  on public.ai_review_automation_dispatches;
create policy "Admins read AI review automation dispatches"
  on public.ai_review_automation_dispatches for select to authenticated
  using (exists (
    select 1 from public.admin_users where admin_users.user_id = auth.uid()
  ));

insert into public.automation_settings(key, value)
values (
  'ai_review_automation_url',
  'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/ai-review-match'
)
on conflict (key) do update set value = excluded.value, updated_at = now();

create or replace function public.trigger_ai_review_automation()
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
    select 1 from public.ai_review_automation_runs
    where status = 'running' and started_at > now() - interval '20 minutes'
  ) then
    insert into public.ai_review_automation_dispatches(status, reason)
    values ('skipped_active_run', 'An automatic AI review run is already active.');
    return;
  end if;

  select value into endpoint from public.automation_settings
  where key = 'ai_review_automation_url';
  select value into automation_secret from public.automation_settings
  where key = 'automation_secret';
  gateway_authorization := public.v2_routine_gateway_authorization();

  if endpoint <> 'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/ai-review-match'
     or nullif(automation_secret, '') is null then
    raise exception 'AI_REVIEW_AUTOMATION_CONFIG_INVALID';
  end if;

  request_id := net.http_post(
    url := endpoint,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', gateway_authorization,
      'x-automation-secret', automation_secret
    ),
    body := jsonb_build_object('auto', true, 'limit', 10)
  );

  insert into public.ai_review_automation_dispatches(request_id, status)
  values (request_id, 'dispatched');
end;
$$;

revoke all on function public.trigger_ai_review_automation()
  from public, anon, authenticated;

do $$
declare existing_jobid bigint;
begin
  select jobid into existing_jobid from cron.job
  where jobname = 'automatic-ai-match-review-daily-production';
  if existing_jobid is not null then perform cron.unschedule(existing_jobid); end if;
end $$;

select cron.schedule(
  'automatic-ai-match-review-daily-production',
  '40 3 * * *',
  $$select public.trigger_ai_review_automation();$$
);

notify pgrst, 'reload schema';
