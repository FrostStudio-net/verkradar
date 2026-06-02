create extension if not exists pgcrypto;

create table if not exists public.import_runs (
  id uuid primary key default gen_random_uuid(),
  run_type text not null default 'ted-automation',
  source_name text not null default 'EU TED',
  import_mode text,
  query text,
  status text not null default 'running',
  fetched integer not null default 0,
  inserted integer not null default 0,
  updated integer not null default 0,
  skipped integer not null default 0,
  matched integer not null default 0,
  reports_generated integer not null default 0,
  error text,
  details jsonb not null default '{}'::jsonb,
  started_at timestamptz not null default now(),
  finished_at timestamptz
);

create index if not exists import_runs_started_at_idx
  on public.import_runs (started_at desc);

create index if not exists import_runs_status_idx
  on public.import_runs (status);

alter table public.import_runs enable row level security;

drop policy if exists "Admins manage import runs" on public.import_runs;
drop policy if exists "Authenticated admins read import runs" on public.import_runs;

create policy "Authenticated admins read import runs"
  on public.import_runs
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

create policy "Admins manage import runs"
  on public.import_runs
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
