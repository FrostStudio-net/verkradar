-- VerkRadar launch RLS verification checks.
-- Run before and after applying supabase/migrations/20260716193000_launch_rls_hardening.sql.
-- These checks do not print secret values.

-- 1) Inspect anon grants on sensitive tables. After the migration, anon should have only INSERT
-- on trial_requests/contact_requests and no SELECT on the listed operational tables.
select
  table_schema,
  table_name,
  privilege_type
from information_schema.role_table_grants
where grantee = 'anon'
  and table_schema = 'public'
  and table_name in (
    'companies',
    'company_profiles',
    'company_services',
    'company_locations',
    'company_keywords',
    'company_members',
    'sources',
    'opportunities',
    'opportunity_matches',
    'company_opportunity_actions',
    'reports',
    'report_items',
    'report_archive',
    'import_runs',
    'source_status',
    'source_connectors',
    'trial_requests',
    'contact_requests'
  )
order by table_name, privilege_type;

-- 2) Inspect policies that still mention anon. After the migration, anon policies should only be
-- INSERT policies for trial_requests/contact_requests.
select
  schemaname,
  tablename,
  policyname,
  roles,
  cmd,
  qual,
  with_check
from pg_policies
where schemaname = 'public'
  and 'anon' = any(roles)
order by tablename, policyname;

-- 3) Optional SQL-editor probes. These should fail or return no rows for direct anonymous reads
-- after the migration. Wrap each in its own transaction if your SQL editor supports SET LOCAL.
-- begin;
-- set local role anon;
-- select id, title from public.opportunities limit 1;
-- rollback;
--
-- begin;
-- set local role anon;
-- select id, name from public.sources limit 1;
-- rollback;

-- 4) Optional allowed public insert smoke test. Roll it back so it does not create a real lead.
-- begin;
-- set local role anon;
-- insert into public.trial_requests (company_name, contact_name, email, services, status)
-- values ('RLS smoke test', 'Test User', 'rls-smoke@example.invalid', 'jarðvinna', 'new');
-- rollback;
