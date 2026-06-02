drop policy if exists "Admins read reports" on public.reports;
drop policy if exists "Admins read report items" on public.report_items;
drop policy if exists "Admins read companies" on public.companies;

create policy "Admins read reports"
  on public.reports
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

create policy "Admins read report items"
  on public.report_items
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

create policy "Admins read companies"
  on public.companies
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

notify pgrst, 'reload schema';
