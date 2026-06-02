create extension if not exists pg_cron;
create extension if not exists pg_net;

create table if not exists public.automation_settings (
  key text primary key,
  value text not null,
  updated_at timestamptz not null default now()
);

alter table public.automation_settings enable row level security;

drop policy if exists "Admins manage automation settings" on public.automation_settings;

create policy "Admins manage automation settings"
  on public.automation_settings
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

create or replace function public.trigger_ted_automation()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  automation_url text;
  automation_secret text;
begin
  select value
  into automation_url
  from public.automation_settings
  where key = 'automation_url';

  select value
  into automation_secret
  from public.automation_settings
  where key = 'automation_secret';

  if coalesce(automation_url, '') = '' then
    raise notice 'TED automation URL is not configured.';
    return;
  end if;

  perform net.http_post(
    url := automation_url,
    headers := jsonb_build_object(
      'content-type', 'application/json',
      'x-automation-secret', coalesce(automation_secret, '')
    ),
    body := '{}'::jsonb
  );
end;
$$;

do $$
declare
  existing_jobid bigint;
begin
  select jobid
  into existing_jobid
  from cron.job
  where jobname = 'ted-daily-automation'
  limit 1;

  if existing_jobid is not null then
    perform cron.unschedule(existing_jobid);
  end if;
end $$;

select cron.schedule(
  'ted-daily-automation',
  '0 3 * * *',
  $$ select public.trigger_ted_automation(); $$
);

notify pgrst, 'reload schema';