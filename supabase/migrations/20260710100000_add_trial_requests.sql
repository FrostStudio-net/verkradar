create table if not exists public.trial_requests (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  contact_name text,
  email text not null,
  phone text,
  services text,
  locations text,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create index if not exists trial_requests_created_at_idx
  on public.trial_requests(created_at desc);

create index if not exists trial_requests_status_created_at_idx
  on public.trial_requests(status, created_at desc);

alter table public.trial_requests enable row level security;

grant insert on public.trial_requests to anon, authenticated;
grant select, update on public.trial_requests to authenticated;

drop policy if exists "Anyone can submit trial requests" on public.trial_requests;
drop policy if exists "Admins read trial requests" on public.trial_requests;
drop policy if exists "Admins update trial requests" on public.trial_requests;

create policy "Anyone can submit trial requests"
  on public.trial_requests
  for insert
  to anon, authenticated
  with check (
    length(trim(company_name)) > 0
    and length(trim(email)) > 0
  );

create policy "Admins read trial requests"
  on public.trial_requests
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users admin_users
      where admin_users.user_id = auth.uid()
    )
  );

create policy "Admins update trial requests"
  on public.trial_requests
  for update
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users admin_users
      where admin_users.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.admin_users admin_users
      where admin_users.user_id = auth.uid()
    )
  );
