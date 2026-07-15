create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company_name text,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create index if not exists contact_requests_created_at_idx
  on public.contact_requests(created_at desc);

create index if not exists contact_requests_status_created_at_idx
  on public.contact_requests(status, created_at desc);

alter table public.contact_requests enable row level security;

revoke all on public.contact_requests from anon;
revoke all on public.contact_requests from authenticated;

grant insert on public.contact_requests to anon, authenticated;
grant select, update on public.contact_requests to authenticated;

drop policy if exists "Anyone can submit contact requests" on public.contact_requests;
drop policy if exists "Admins read contact requests" on public.contact_requests;
drop policy if exists "Admins update contact requests" on public.contact_requests;

create policy "Anyone can submit contact requests"
  on public.contact_requests
  for insert
  to anon, authenticated
  with check (
    status = 'new'
    and length(trim(name)) > 0
    and length(trim(email)) > 0
    and length(trim(subject)) > 0
    and length(trim(message)) > 0
  );

create policy "Admins read contact requests"
  on public.contact_requests
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users admin_users
      where admin_users.user_id = auth.uid()
    )
  );

create policy "Admins update contact requests"
  on public.contact_requests
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
