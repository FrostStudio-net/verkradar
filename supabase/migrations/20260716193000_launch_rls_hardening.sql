-- Launch hardening: remove unsafe anonymous reads and preserve only explicit public form inserts.
-- This migration is intentionally defensive because early MVP migrations granted broad anon reads
-- on sources/opportunities and production may have policy drift.

alter table if exists public.companies enable row level security;
alter table if exists public.company_services enable row level security;
alter table if exists public.company_locations enable row level security;
alter table if exists public.company_keywords enable row level security;
alter table if exists public.company_members enable row level security;
alter table if exists public.sources enable row level security;
alter table if exists public.opportunities enable row level security;
alter table if exists public.opportunity_matches enable row level security;
alter table if exists public.company_opportunity_actions enable row level security;
alter table if exists public.reports enable row level security;
alter table if exists public.report_items enable row level security;
alter table if exists public.import_runs enable row level security;
alter table if exists public.source_status enable row level security;
alter table if exists public.source_connectors enable row level security;
alter table if exists public.trial_requests enable row level security;
alter table if exists public.contact_requests enable row level security;

-- Remove every anon SELECT/ALL policy on sensitive operational tables. Public form INSERT
-- policies are recreated explicitly below.
do $$
declare
  policy_record record;
begin
  for policy_record in
    select schemaname, tablename, policyname
    from pg_policies
    where schemaname = 'public'
      and tablename in (
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
      and 'anon' = any(roles)
      and cmd in ('SELECT', 'ALL')
  loop
    execute format('drop policy if exists %I on %I.%I', policy_record.policyname, policy_record.schemaname, policy_record.tablename);
  end loop;
end $$;

-- Drop known broad policies from earlier MVP migrations.
drop policy if exists "Anon users read sources" on public.sources;
drop policy if exists "Anon users read opportunities" on public.opportunities;
drop policy if exists "Authenticated users read sources" on public.sources;
drop policy if exists "Authenticated users read opportunities" on public.opportunities;
drop policy if exists "Dev all access for anon opportunity matches" on public.opportunity_matches;
drop policy if exists "Dev all access for authenticated opportunity matches" on public.opportunity_matches;

-- Remove direct table privileges from anon by default. Service-role bypasses RLS and remains unaffected.
revoke all on public.companies from anon;
revoke all on public.company_services from anon;
revoke all on public.company_locations from anon;
revoke all on public.company_keywords from anon;
revoke all on public.company_members from anon;
revoke all on public.sources from anon;
revoke all on public.opportunities from anon;
revoke all on public.opportunity_matches from anon;
revoke all on public.company_opportunity_actions from anon;
revoke all on public.reports from anon;
revoke all on public.report_items from anon;
revoke all on public.import_runs from anon;
revoke all on public.source_status from anon;
revoke all on public.source_connectors from anon;
revoke all on public.trial_requests from anon;
revoke all on public.contact_requests from anon;

grant insert on public.trial_requests to anon, authenticated;
grant insert on public.contact_requests to anon, authenticated;
grant select, update on public.trial_requests to authenticated;
grant select, update on public.contact_requests to authenticated;

-- Admin access for operational source/opportunity tables.
drop policy if exists "Admins manage sources" on public.sources;
create policy "Admins manage sources"
  on public.sources
  for all
  to authenticated
  using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()))
  with check (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

drop policy if exists "Admins manage opportunities" on public.opportunities;
create policy "Admins manage opportunities"
  on public.opportunities
  for all
  to authenticated
  using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()))
  with check (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

-- Customers may read only opportunities already connected to one of their active company
-- memberships through matches, saved/ignored actions, reports, or sent records. This preserves
-- dashboard/report rendering without exposing the entire opportunity table.
drop policy if exists "Active members read linked opportunities" on public.opportunities;
create policy "Active members read linked opportunities"
  on public.opportunities
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.opportunity_matches
      join public.company_members on company_members.company_id = opportunity_matches.company_id
      where opportunity_matches.opportunity_id = opportunities.id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
    or exists (
      select 1
      from public.company_opportunity_actions
      join public.company_members on company_members.company_id = company_opportunity_actions.company_id
      where company_opportunity_actions.opportunity_id = opportunities.id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
    or exists (
      select 1
      from public.report_items
      join public.reports on reports.id = report_items.report_id
      join public.company_members on company_members.company_id = reports.company_id
      where report_items.opportunity_id = opportunities.id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
    or exists (
      select 1
      from public.company_opportunity_sends
      join public.company_members on company_members.company_id = company_opportunity_sends.company_id
      where company_opportunity_sends.opportunity_id = opportunities.id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
  );

-- Sources are visible only to admins or through an opportunity the active member may read.
drop policy if exists "Active members read linked sources" on public.sources;
create policy "Active members read linked sources"
  on public.sources
  for select
  to authenticated
  using (
    exists (select 1 from public.admin_users where admin_users.user_id = auth.uid())
    or exists (
      select 1
      from public.opportunities
      where opportunities.source_id = sources.id
    )
  );

-- Public form insertion remains allowed, with stricter server-side validation and no public reads.
drop policy if exists "Anyone can submit trial requests" on public.trial_requests;
create policy "Anyone can submit trial requests"
  on public.trial_requests
  for insert
  to anon, authenticated
  with check (
    status = 'new'
    and length(trim(company_name)) between 1 and 200
    and length(trim(contact_name)) between 1 and 200
    and length(trim(email)) between 3 and 254
    and position('@' in trim(email)) > 1
    and length(trim(services)) between 1 and 2000
    and coalesce(length(phone), 0) <= 40
    and coalesce(length(locations), 0) <= 2000
    and coalesce(length(message), 0) <= 4000
  );

drop policy if exists "Anyone can submit contact requests" on public.contact_requests;
create policy "Anyone can submit contact requests"
  on public.contact_requests
  for insert
  to anon, authenticated
  with check (
    status = 'new'
    and length(trim(name)) between 1 and 200
    and length(trim(email)) between 3 and 254
    and position('@' in trim(email)) > 1
    and length(trim(subject)) between 1 and 200
    and length(trim(message)) between 1 and 4000
    and coalesce(length(company_name), 0) <= 200
    and coalesce(length(phone), 0) <= 40
  );

-- Keep admin management policies for public requests explicit.
drop policy if exists "Admins read trial requests" on public.trial_requests;
create policy "Admins read trial requests"
  on public.trial_requests
  for select
  to authenticated
  using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

drop policy if exists "Admins update trial requests" on public.trial_requests;
create policy "Admins update trial requests"
  on public.trial_requests
  for update
  to authenticated
  using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()))
  with check (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

drop policy if exists "Admins read contact requests" on public.contact_requests;
create policy "Admins read contact requests"
  on public.contact_requests
  for select
  to authenticated
  using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

drop policy if exists "Admins update contact requests" on public.contact_requests;
create policy "Admins update contact requests"
  on public.contact_requests
  for update
  to authenticated
  using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()))
  with check (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

notify pgrst, 'reload schema';
