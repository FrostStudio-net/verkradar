-- Company rows contain trusted billing, automation, ownership, and matching
-- configuration. Creation and deletion are server-controlled; authenticated
-- customers may read their tenant and update only the established business
-- profile fields.

alter table public.companies enable row level security;

drop policy if exists "Admins manage companies" on public.companies;
drop policy if exists "Admins read companies" on public.companies;
drop policy if exists "Company members read companies" on public.companies;
drop policy if exists "Company admins update companies" on public.companies;
drop policy if exists "Owners manage companies" on public.companies;
drop policy if exists "companies_insert_own" on public.companies;
drop policy if exists "companies_select_own" on public.companies;
drop policy if exists "companies_update_own" on public.companies;
drop policy if exists "companies_delete_own" on public.companies;

revoke all on public.companies from public, anon, authenticated;
-- auto_alert_mode previously had an explicit column-level UPDATE grant, which
-- a table-level REVOKE does not remove.
revoke update (auto_alert_mode) on public.companies from public, anon, authenticated;
grant select on public.companies to authenticated;
grant update (
  company_name,
  contact_email,
  kennitala,
  billing_email,
  contact_name,
  phone,
  address,
  website,
  industry,
  base_location,
  service_areas,
  willing_to_travel,
  national_projects,
  remote_projects,
  minimum_project_value_for_travel,
  min_project_value,
  max_project_value,
  allow_unknown_value,
  report_frequency,
  report_day,
  deadline_reminders,
  include_low_confidence
) on public.companies to authenticated;
grant all on public.companies to service_role;

create policy "Admins read companies"
  on public.companies
  for select
  to authenticated
  using (public.is_admin());

create policy "Company members read companies"
  on public.companies
  for select
  to authenticated
  using (public.is_company_member(id));

create policy "Company admins update companies"
  on public.companies
  for update
  to authenticated
  using (public.is_company_admin_member(id))
  with check (public.is_company_admin_member(id));

notify pgrst, 'reload schema';
