-- Hotfix launch RLS policies that caused PostgREST nested reads to time out.
-- Keep anonymous operational reads blocked while replacing recursive policy predicates
-- with SECURITY DEFINER authorization helpers that bypass RLS internally.

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users admin_users
    where admin_users.user_id = auth.uid()
  );
$$;

create or replace function public.is_company_member(company_uuid uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(company_uuid is not null, false)
    and (
      exists (
        select 1
        from public.company_members company_members
        where company_members.company_id = company_uuid
          and company_members.status = 'active'
          and company_members.user_id = auth.uid()
      )
      or exists (
        select 1
        from public.companies companies
        where companies.id = company_uuid
          and companies.owner_id = auth.uid()
      )
    );
$$;

create or replace function public.is_company_admin_member(company_uuid uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(company_uuid is not null, false)
    and (
      exists (
        select 1
        from public.company_members company_members
        where company_members.company_id = company_uuid
          and company_members.status = 'active'
          and company_members.user_id = auth.uid()
          and company_members.role in ('owner', 'admin')
      )
      or exists (
        select 1
        from public.companies companies
        where companies.id = company_uuid
          and companies.owner_id = auth.uid()
      )
    );
$$;

create or replace function public.can_view_report(report_uuid uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.is_admin()
    or exists (
      select 1
      from public.reports reports
      where reports.id = report_uuid
        and public.is_company_member(reports.company_id)
    );
$$;

create or replace function public.can_manage_report(report_uuid uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.is_admin()
    or exists (
      select 1
      from public.reports reports
      where reports.id = report_uuid
        and public.is_company_admin_member(reports.company_id)
    );
$$;

create or replace function public.can_view_opportunity(opportunity_uuid uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.is_admin()
    or exists (
      select 1
      from public.opportunity_matches opportunity_matches
      where opportunity_matches.opportunity_id = opportunity_uuid
        and public.is_company_member(opportunity_matches.company_id)
    )
    or exists (
      select 1
      from public.company_opportunity_actions company_opportunity_actions
      where company_opportunity_actions.opportunity_id = opportunity_uuid
        and public.is_company_member(company_opportunity_actions.company_id)
    )
    or exists (
      select 1
      from public.report_items report_items
      join public.reports reports on reports.id = report_items.report_id
      where report_items.opportunity_id = opportunity_uuid
        and public.is_company_member(reports.company_id)
    )
    or exists (
      select 1
      from public.company_opportunity_sends company_opportunity_sends
      where company_opportunity_sends.opportunity_id = opportunity_uuid
        and public.is_company_member(company_opportunity_sends.company_id)
    );
$$;

create or replace function public.can_view_source(source_uuid uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.is_admin()
    or exists (
      select 1
      from public.opportunities opportunities
      where opportunities.source_id = source_uuid
        and public.can_view_opportunity(opportunities.id)
    );
$$;

revoke all on function public.is_admin() from public;
revoke all on function public.is_company_member(uuid) from public;
revoke all on function public.is_company_admin_member(uuid) from public;
revoke all on function public.can_view_report(uuid) from public;
revoke all on function public.can_manage_report(uuid) from public;
revoke all on function public.can_view_opportunity(uuid) from public;
revoke all on function public.can_view_source(uuid) from public;

grant execute on function public.is_admin() to authenticated;
grant execute on function public.is_company_member(uuid) to authenticated;
grant execute on function public.is_company_admin_member(uuid) to authenticated;
grant execute on function public.can_view_report(uuid) to authenticated;
grant execute on function public.can_manage_report(uuid) to authenticated;
grant execute on function public.can_view_opportunity(uuid) to authenticated;
grant execute on function public.can_view_source(uuid) to authenticated;

-- Indexes supporting the helper predicates and common nested reads.
create index if not exists admin_users_user_id_idx on public.admin_users(user_id);
create index if not exists company_members_user_status_company_idx on public.company_members(user_id, status, company_id);
create index if not exists company_members_company_status_user_idx on public.company_members(company_id, status, user_id);
create index if not exists company_members_company_role_status_user_idx on public.company_members(company_id, role, status, user_id);
create index if not exists companies_owner_id_lookup_idx on public.companies(owner_id);
create index if not exists opportunity_matches_opportunity_company_idx on public.opportunity_matches(opportunity_id, company_id);
create index if not exists opportunity_matches_company_calculated_idx on public.opportunity_matches(company_id, calculated_at desc);
create index if not exists company_opportunity_actions_opportunity_company_idx on public.company_opportunity_actions(opportunity_id, company_id);
create index if not exists company_opportunity_actions_company_opportunity_idx on public.company_opportunity_actions(company_id, opportunity_id);
create index if not exists company_opportunity_sends_opportunity_company_idx on public.company_opportunity_sends(opportunity_id, company_id);
create index if not exists company_opportunity_sends_company_opportunity_idx on public.company_opportunity_sends(company_id, opportunity_id);
create index if not exists report_items_opportunity_report_idx on public.report_items(opportunity_id, report_id);
create index if not exists reports_id_company_idx on public.reports(id, company_id);
create index if not exists opportunities_source_id_idx on public.opportunities(source_id);
create index if not exists opportunities_status_deadline_idx on public.opportunities(status, deadline);
create index if not exists opportunities_created_at_idx on public.opportunities(created_at desc);
create index if not exists source_status_source_id_idx on public.source_status(source_id);
create index if not exists source_connectors_source_id_idx on public.source_connectors(source_id);

-- Replace slow/recursive operational policies.
drop policy if exists "Admins manage sources" on public.sources;
drop policy if exists "Active members read linked sources" on public.sources;
drop policy if exists "Authenticated users read sources" on public.sources;
drop policy if exists "Anon users read sources" on public.sources;
create policy "Admins manage sources"
  on public.sources for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());
create policy "Members read linked sources"
  on public.sources for select to authenticated
  using (public.can_view_source(id));

drop policy if exists "Admins manage opportunities" on public.opportunities;
drop policy if exists "Active members read linked opportunities" on public.opportunities;
drop policy if exists "Authenticated users read opportunities" on public.opportunities;
drop policy if exists "Anon users read opportunities" on public.opportunities;
create policy "Admins manage opportunities"
  on public.opportunities for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());
create policy "Members read linked opportunities"
  on public.opportunities for select to authenticated
  using (public.can_view_opportunity(id));

drop policy if exists "Owners manage opportunity matches" on public.opportunity_matches;
drop policy if exists "Admins read opportunity matches" on public.opportunity_matches;
drop policy if exists "Active members read opportunity matches" on public.opportunity_matches;
drop policy if exists "Dev all access for anon opportunity matches" on public.opportunity_matches;
drop policy if exists "Dev all access for authenticated opportunity matches" on public.opportunity_matches;
create policy "Admins manage opportunity matches"
  on public.opportunity_matches for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());
create policy "Company members manage opportunity matches"
  on public.opportunity_matches for all to authenticated
  using (public.is_company_member(company_id))
  with check (public.is_company_member(company_id));

drop policy if exists "Owners manage company opportunity actions" on public.company_opportunity_actions;
drop policy if exists "Admins read company opportunity actions" on public.company_opportunity_actions;
drop policy if exists "Active members manage company opportunity actions" on public.company_opportunity_actions;
create policy "Admins manage company opportunity actions"
  on public.company_opportunity_actions for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());
create policy "Company members manage company opportunity actions"
  on public.company_opportunity_actions for all to authenticated
  using (public.is_company_member(company_id))
  with check (public.is_company_member(company_id));

drop policy if exists "Owners read company opportunity sends" on public.company_opportunity_sends;
drop policy if exists "Admins manage company opportunity sends" on public.company_opportunity_sends;
drop policy if exists "Active members read company opportunity sends" on public.company_opportunity_sends;
create policy "Admins manage company opportunity sends"
  on public.company_opportunity_sends for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());
create policy "Company members read company opportunity sends"
  on public.company_opportunity_sends for select to authenticated
  using (public.is_company_member(company_id));

-- Reports and report items.
drop policy if exists "Owners manage reports" on public.reports;
drop policy if exists "Admins read reports" on public.reports;
drop policy if exists "Active members manage reports" on public.reports;
create policy "Admins manage reports"
  on public.reports for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());
create policy "Company members manage reports"
  on public.reports for all to authenticated
  using (public.is_company_member(company_id))
  with check (public.is_company_member(company_id));

drop policy if exists "Owners manage report items" on public.report_items;
drop policy if exists "Admins read report items" on public.report_items;
drop policy if exists "Active members manage report items" on public.report_items;
create policy "Admins manage report items"
  on public.report_items for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());
create policy "Company members manage report items"
  on public.report_items for all to authenticated
  using (public.can_view_report(report_id))
  with check (public.can_manage_report(report_id));

-- Company/profile read policies used by dashboard and admin company details.
drop policy if exists "Owners manage companies" on public.companies;
drop policy if exists "Admins read companies" on public.companies;
drop policy if exists "Active members read companies" on public.companies;
drop policy if exists "Company access owners manage companies" on public.companies;
create policy "Admins manage companies"
  on public.companies for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());
create policy "Company members read companies"
  on public.companies for select to authenticated
  using (public.is_company_member(id));
create policy "Company admins update companies"
  on public.companies for update to authenticated
  using (public.is_company_admin_member(id))
  with check (public.is_company_admin_member(id));

-- Preserve company profile side-table access without direct RLS-protected membership subqueries.
drop policy if exists "Owners manage company services" on public.company_services;
drop policy if exists "Admins read company services" on public.company_services;
drop policy if exists "Active members read company services" on public.company_services;
drop policy if exists "Company access owners manage company services" on public.company_services;
create policy "Admins manage company services"
  on public.company_services for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());
create policy "Company members read company services"
  on public.company_services for select to authenticated
  using (public.is_company_member(company_id));
create policy "Company admins manage company services"
  on public.company_services for all to authenticated
  using (public.is_company_admin_member(company_id))
  with check (public.is_company_admin_member(company_id));

drop policy if exists "Owners manage company locations" on public.company_locations;
drop policy if exists "Admins read company locations" on public.company_locations;
drop policy if exists "Active members read company locations" on public.company_locations;
drop policy if exists "Company access owners manage company locations" on public.company_locations;
create policy "Admins manage company locations"
  on public.company_locations for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());
create policy "Company members read company locations"
  on public.company_locations for select to authenticated
  using (public.is_company_member(company_id));
create policy "Company admins manage company locations"
  on public.company_locations for all to authenticated
  using (public.is_company_admin_member(company_id))
  with check (public.is_company_admin_member(company_id));

drop policy if exists "Owners manage company keywords" on public.company_keywords;
drop policy if exists "Admins read company keywords" on public.company_keywords;
drop policy if exists "Active members read company keywords" on public.company_keywords;
drop policy if exists "Company access owners manage company keywords" on public.company_keywords;
create policy "Admins manage company keywords"
  on public.company_keywords for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());
create policy "Company members read company keywords"
  on public.company_keywords for select to authenticated
  using (public.is_company_member(company_id));
create policy "Company admins manage company keywords"
  on public.company_keywords for all to authenticated
  using (public.is_company_admin_member(company_id))
  with check (public.is_company_admin_member(company_id));

-- Company membership rows themselves.
drop policy if exists "Admins manage company members" on public.company_members;
drop policy if exists "Company members read own memberships" on public.company_members;
drop policy if exists "Invited users activate own memberships" on public.company_members;
create policy "Admins manage company members"
  on public.company_members for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());
create policy "Company members read own memberships"
  on public.company_members for select to authenticated
  using (
    user_id = auth.uid()
    or (
      status = 'invited'
      and email_normalized = lower(coalesce(auth.jwt() ->> 'email', ''))
    )
  );
create policy "Invited users activate own memberships"
  on public.company_members for update to authenticated
  using (
    status = 'invited'
    and email_normalized = lower(coalesce(auth.jwt() ->> 'email', ''))
  )
  with check (
    status = 'active'
    and user_id = auth.uid()
    and email_normalized = lower(coalesce(auth.jwt() ->> 'email', ''))
  );

-- Admin-only import/source operational tables. Customers do not need direct browsing here.
drop policy if exists "Authenticated users read source status" on public.source_status;
drop policy if exists "Admins read source status" on public.source_status;
drop policy if exists "Admins manage source status" on public.source_status;
create policy "Admins manage source status"
  on public.source_status for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Authenticated users read source connectors" on public.source_connectors;
drop policy if exists "Admins read source connectors" on public.source_connectors;
drop policy if exists "Admins manage source connectors" on public.source_connectors;
create policy "Admins manage source connectors"
  on public.source_connectors for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Keep operational tables unavailable to anon. Public form inserts are managed by the prior migration.
revoke all on public.sources from anon;
revoke all on public.opportunities from anon;
revoke all on public.opportunity_matches from anon;
revoke all on public.company_opportunity_actions from anon;
revoke all on public.company_opportunity_sends from anon;
revoke all on public.reports from anon;
revoke all on public.report_items from anon;
revoke all on public.source_status from anon;
revoke all on public.source_connectors from anon;

notify pgrst, 'reload schema';
