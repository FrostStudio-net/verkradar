\set ON_ERROR_STOP on

begin;

do $$
begin
  if has_column_privilege('authenticated', 'public.companies', 'plan', 'UPDATE')
    or has_column_privilege('authenticated', 'public.companies', 'selected_plan', 'UPDATE')
    or has_column_privilege('authenticated', 'public.companies', 'billing_status', 'UPDATE') then
    raise exception 'CLIENT HANDOFF ASSERTION FAILED: customer role can update billing fields';
  end if;
  if not has_column_privilege('authenticated', 'public.companies', 'contact_name', 'UPDATE') then
    raise exception 'CLIENT HANDOFF ASSERTION FAILED: customer role cannot update an editable profile field';
  end if;
  if not coalesce((select prosecdef from pg_proc p join pg_namespace n on n.oid=p.pronamespace
    where n.nspname='public' and p.proname='v2_phase_c_guard_downstream_link'), false) then
    raise exception 'CLIENT HANDOFF ASSERTION FAILED: downstream trigger is not security definer';
  end if;
  if has_function_privilege('authenticated', 'public.v2_phase_c_is_quarantined(uuid)', 'EXECUTE') then
    raise exception 'CLIENT HANDOFF ASSERTION FAILED: private quarantine helper exposed to customer';
  end if;
end $$;

set local role authenticated;
select set_config(
  'request.jwt.claims',
  '{"sub":"fecda4d0-ce1d-4d45-9929-44366e4018c6","role":"authenticated","email":"krissijakob19@gmail.com"}',
  true
);

-- A normal customer can save an allowed field under RLS.
update public.companies
set contact_name = contact_name
where id = 'cad6b69e-b021-447d-b637-31b2e8dbff2e';

do $$
begin
  update public.companies
  set selected_plan = 'pro'
  where id = 'cad6b69e-b021-447d-b637-31b2e8dbff2e';
  raise exception 'CLIENT HANDOFF ASSERTION FAILED: customer changed selected plan';
exception
  when insufficient_privilege then null;
end $$;

-- Exercise the exact trigger privilege boundary that previously produced 42501.
update public.opportunity_matches
set opportunity_id = opportunity_id
where company_id = 'cad6b69e-b021-447d-b637-31b2e8dbff2e'
  and opportunity_id = 'e06bf06b-8af8-4ff7-b00a-2cd5ff8a1ea4';

rollback;
