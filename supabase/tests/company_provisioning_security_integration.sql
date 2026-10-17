\set ON_ERROR_STOP on

begin;

do $$
declare
  write_policies integer;
begin
  if has_table_privilege('authenticated', 'public.companies', 'INSERT')
    or has_table_privilege('authenticated', 'public.companies', 'DELETE')
    or has_table_privilege('authenticated', 'public.companies', 'TRUNCATE') then
    raise exception 'COMPANY PROVISIONING ASSERTION FAILED: authenticated retains company creation/deletion privileges';
  end if;
  if not has_table_privilege('service_role', 'public.companies', 'INSERT')
    or not has_table_privilege('service_role', 'public.companies', 'UPDATE') then
    raise exception 'COMPANY PROVISIONING ASSERTION FAILED: trusted server lost company creation privileges';
  end if;
  if not has_column_privilege('authenticated', 'public.companies', 'company_name', 'UPDATE')
    or not has_column_privilege('authenticated', 'public.companies', 'contact_email', 'UPDATE') then
    raise exception 'COMPANY PROVISIONING ASSERTION FAILED: customer lost intended profile editing';
  end if;
  if has_column_privilege('authenticated', 'public.companies', 'plan', 'UPDATE')
    or has_column_privilege('authenticated', 'public.companies', 'selected_plan', 'UPDATE')
    or has_column_privilege('authenticated', 'public.companies', 'billing_status', 'UPDATE')
    or has_column_privilege('authenticated', 'public.companies', 'trial_started_at', 'UPDATE')
    or has_column_privilege('authenticated', 'public.companies', 'trial_ends_at', 'UPDATE')
    or has_column_privilege('authenticated', 'public.companies', 'minimum_relevance_threshold', 'UPDATE')
    or has_column_privilege('authenticated', 'public.companies', 'auto_ai_review_enabled', 'UPDATE')
    or has_column_privilege('authenticated', 'public.companies', 'auto_alert_mode', 'UPDATE')
    or has_column_privilege('authenticated', 'public.companies', 'owner_id', 'UPDATE') then
    raise exception 'COMPANY PROVISIONING ASSERTION FAILED: authenticated can update trusted state';
  end if;
  select count(*) into write_policies
  from pg_policies
  where schemaname = 'public'
    and tablename = 'companies'
    and cmd in ('INSERT', 'DELETE', 'ALL');
  if write_policies <> 0 then
    raise exception 'COMPANY PROVISIONING ASSERTION FAILED: unsafe company policy remains';
  end if;
end $$;

set local role authenticated;
select set_config(
  'request.jwt.claims',
  '{"sub":"fecda4d0-ce1d-4d45-9929-44366e4018c6","role":"authenticated","email":"krissijakob19@gmail.com"}',
  true
);

do $$
begin
  insert into public.companies (
    company_name, contact_email, industry, owner_id, plan, selected_plan,
    billing_status, trial_started_at, trial_ends_at,
    minimum_relevance_threshold, auto_ai_review_enabled, auto_alert_mode
  ) values (
    'Forged company', 'forged@example.test', 'construction', auth.uid(), 'paid', 'pro',
    'active', now() - interval '1 year', now() + interval '10 years', 1, true, 'auto_safe_only'
  );
  raise exception 'COMPANY PROVISIONING ASSERTION FAILED: customer forged trusted company state';
exception when insufficient_privilege then null;
end $$;

do $$
begin
  insert into public.companies (company_name, contact_email, industry, owner_id)
  values ('Foreign owner', 'foreign@example.test', 'construction', '00000000-0000-4000-8000-000000000099');
  raise exception 'COMPANY PROVISIONING ASSERTION FAILED: customer assigned another owner';
exception when insufficient_privilege then null;
end $$;

-- Existing customer business-profile editing remains available for its own
-- active tenant.
update public.companies
set contact_name = contact_name
where id = 'cad6b69e-b021-447d-b637-31b2e8dbff2e';

do $$
declare
  affected integer;
begin
  update public.companies
  set contact_name = contact_name
  where id = '41941a6f-8ffc-46b9-8562-8982bf49d4b6';
  get diagnostics affected = row_count;
  if affected <> 0 then
    raise exception 'COMPANY PROVISIONING ASSERTION FAILED: customer updated another tenant';
  end if;
end $$;

do $$
begin
  update public.companies
  set plan = 'paid',
      selected_plan = 'pro',
      billing_status = 'active',
      minimum_relevance_threshold = 1,
      auto_ai_review_enabled = true,
      auto_alert_mode = 'auto_safe_only',
      owner_id = '00000000-0000-4000-8000-000000000099';
  raise exception 'COMPANY PROVISIONING ASSERTION FAILED: customer updated trusted state';
exception when insufficient_privilege then null;
end $$;

rollback;
