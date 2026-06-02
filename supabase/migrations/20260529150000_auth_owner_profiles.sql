alter table public.companies
  add column if not exists owner_id uuid references auth.users(id) on delete cascade;

alter table public.companies
  drop column if exists local_user_id;

drop index if exists public.companies_owner_id_idx;

alter table public.companies
  drop constraint if exists companies_owner_id_key;

alter table public.companies
  add constraint companies_owner_id_key unique (owner_id);

alter table public.companies enable row level security;
alter table public.company_services enable row level security;
alter table public.company_locations enable row level security;
alter table public.company_keywords enable row level security;

drop policy if exists "Owners manage companies" on public.companies;
drop policy if exists "Owners manage company services" on public.company_services;
drop policy if exists "Owners manage company locations" on public.company_locations;
drop policy if exists "Owners manage company keywords" on public.company_keywords;
drop policy if exists "Dev all access for anon opportunity matches" on public.opportunity_matches;
drop policy if exists "Dev all access for authenticated opportunity matches" on public.opportunity_matches;
drop policy if exists "Owners manage opportunity matches" on public.opportunity_matches;

create policy "Owners manage companies"
  on public.companies
  for all
  to authenticated
  using (owner_id = auth.uid())
  with check (owner_id = auth.uid());

create policy "Owners manage company services"
  on public.company_services
  for all
  to authenticated
  using (
    exists (
      select 1 from public.companies
      where companies.id = company_services.company_id
        and companies.owner_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.companies
      where companies.id = company_services.company_id
        and companies.owner_id = auth.uid()
    )
  );

create policy "Owners manage company locations"
  on public.company_locations
  for all
  to authenticated
  using (
    exists (
      select 1 from public.companies
      where companies.id = company_locations.company_id
        and companies.owner_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.companies
      where companies.id = company_locations.company_id
        and companies.owner_id = auth.uid()
    )
  );

create policy "Owners manage company keywords"
  on public.company_keywords
  for all
  to authenticated
  using (
    exists (
      select 1 from public.companies
      where companies.id = company_keywords.company_id
        and companies.owner_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.companies
      where companies.id = company_keywords.company_id
        and companies.owner_id = auth.uid()
    )
  );

create policy "Owners manage opportunity matches"
  on public.opportunity_matches
  for all
  to authenticated
  using (
    exists (
      select 1 from public.companies
      where companies.id = opportunity_matches.company_id
        and companies.owner_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.companies
      where companies.id = opportunity_matches.company_id
        and companies.owner_id = auth.uid()
    )
  );
