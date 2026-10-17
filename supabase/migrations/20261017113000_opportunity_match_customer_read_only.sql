-- Canonical match rows are trusted server-owned data. Customers may read only
-- the rows linked to their active tenant; customer interaction state belongs in
-- company_opportunity_actions.

alter table public.opportunity_matches enable row level security;

drop policy if exists "Dev all access for anon opportunity matches" on public.opportunity_matches;
drop policy if exists "Dev all access for authenticated opportunity matches" on public.opportunity_matches;
drop policy if exists "Owners manage opportunity matches" on public.opportunity_matches;
drop policy if exists "Admins read opportunity matches" on public.opportunity_matches;
drop policy if exists "Active members read opportunity matches" on public.opportunity_matches;
drop policy if exists "Admins manage opportunity matches" on public.opportunity_matches;
drop policy if exists "Company members manage opportunity matches" on public.opportunity_matches;
drop policy if exists "opportunity_matches_own" on public.opportunity_matches;

-- Browser clients, including admins, get read access only. All trusted writes
-- are performed through service-role Edge Functions and scheduled jobs.
revoke all on public.opportunity_matches from public, anon, authenticated;
grant select on public.opportunity_matches to authenticated;
grant all on public.opportunity_matches to service_role;

create policy "Admins read opportunity matches"
  on public.opportunity_matches
  for select
  to authenticated
  using (public.is_admin());

create policy "Company members read opportunity matches"
  on public.opportunity_matches
  for select
  to authenticated
  using (
    public.is_company_member(company_id)
    and not public.v2_phase_c_is_restricted(opportunity_id)
  );

notify pgrst, 'reload schema';
