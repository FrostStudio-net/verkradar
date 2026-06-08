create extension if not exists pgcrypto;

create table if not exists public.company_opportunity_actions (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  opportunity_id uuid not null references public.opportunities(id) on delete cascade,
  action_type text not null check (action_type in ('saved', 'ignored', 'watched')),
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (company_id, opportunity_id)
);

create index if not exists company_opportunity_actions_company_idx
  on public.company_opportunity_actions(company_id);

create index if not exists company_opportunity_actions_opportunity_idx
  on public.company_opportunity_actions(opportunity_id);

alter table public.companies enable row level security;
alter table public.company_services enable row level security;
alter table public.company_locations enable row level security;
alter table public.company_keywords enable row level security;
alter table public.opportunity_matches enable row level security;
alter table public.reports enable row level security;
alter table public.report_items enable row level security;
alter table public.company_opportunity_actions enable row level security;
alter table public.sources enable row level security;
alter table public.opportunities enable row level security;
alter table public.source_status enable row level security;
alter table public.source_connectors enable row level security;
alter table public.import_runs enable row level security;
alter table public.automation_settings enable row level security;

drop policy if exists "Dev all access for anon opportunity matches" on public.opportunity_matches;
drop policy if exists "Dev all access for authenticated opportunity matches" on public.opportunity_matches;
drop policy if exists "Owners manage opportunity matches" on public.opportunity_matches;
drop policy if exists "Admins read opportunity matches" on public.opportunity_matches;

create policy "Owners manage opportunity matches"
  on public.opportunity_matches
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.companies
      where companies.id = opportunity_matches.company_id
        and companies.owner_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.companies
      where companies.id = opportunity_matches.company_id
        and companies.owner_id = auth.uid()
    )
  );

create policy "Admins read opportunity matches"
  on public.opportunity_matches
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

drop policy if exists "Owners manage company opportunity actions" on public.company_opportunity_actions;
drop policy if exists "Admins read company opportunity actions" on public.company_opportunity_actions;

create policy "Owners manage company opportunity actions"
  on public.company_opportunity_actions
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.companies
      where companies.id = company_opportunity_actions.company_id
        and companies.owner_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.companies
      where companies.id = company_opportunity_actions.company_id
        and companies.owner_id = auth.uid()
    )
  );

create policy "Admins read company opportunity actions"
  on public.company_opportunity_actions
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

drop policy if exists "Admins read company services" on public.company_services;
drop policy if exists "Admins read company locations" on public.company_locations;
drop policy if exists "Admins read company keywords" on public.company_keywords;

create policy "Admins read company services"
  on public.company_services
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

create policy "Admins read company locations"
  on public.company_locations
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

create policy "Admins read company keywords"
  on public.company_keywords
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

drop policy if exists "Anon users read sources" on public.sources;
drop policy if exists "Anon users read opportunities" on public.opportunities;

drop policy if exists "Authenticated users read source status" on public.source_status;
drop policy if exists "Admins read source status" on public.source_status;

create policy "Admins read source status"
  on public.source_status
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

drop policy if exists "Authenticated users read source connectors" on public.source_connectors;
drop policy if exists "Admins read source connectors" on public.source_connectors;

create policy "Admins read source connectors"
  on public.source_connectors
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
