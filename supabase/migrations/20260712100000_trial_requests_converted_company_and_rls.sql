alter table public.trial_requests
  add column if not exists converted_company_id uuid references public.companies(id) on delete set null;

alter table public.trial_requests enable row level security;

revoke all on public.trial_requests from anon;
revoke all on public.trial_requests from authenticated;

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
    status = 'new'
    and converted_company_id is null
    and length(trim(company_name)) > 0
    and length(trim(contact_name)) > 0
    and length(trim(email)) > 0
    and length(trim(services)) > 0
    and length(trim(locations)) > 0
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
