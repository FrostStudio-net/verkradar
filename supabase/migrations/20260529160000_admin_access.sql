create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;
alter table public.sources enable row level security;
alter table public.opportunities enable row level security;

drop policy if exists "Admins can read own admin row" on public.admin_users;
drop policy if exists "Admins manage sources" on public.sources;
drop policy if exists "Admins manage opportunities" on public.opportunities;
drop policy if exists "Authenticated users read sources" on public.sources;
drop policy if exists "Authenticated users read opportunities" on public.opportunities;
drop policy if exists "Anon users read sources" on public.sources;
drop policy if exists "Anon users read opportunities" on public.opportunities;

create policy "Admins can read own admin row"
  on public.admin_users
  for select
  to authenticated
  using (user_id = auth.uid());

create policy "Authenticated users read sources"
  on public.sources
  for select
  to authenticated
  using (true);

create policy "Anon users read sources"
  on public.sources
  for select
  to anon
  using (true);

create policy "Authenticated users read opportunities"
  on public.opportunities
  for select
  to authenticated
  using (true);

create policy "Anon users read opportunities"
  on public.opportunities
  for select
  to anon
  using (true);

create policy "Admins manage sources"
  on public.sources
  for all
  to authenticated
  using (
    exists (
      select 1 from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

create policy "Admins manage opportunities"
  on public.opportunities
  for all
  to authenticated
  using (
    exists (
      select 1 from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );
