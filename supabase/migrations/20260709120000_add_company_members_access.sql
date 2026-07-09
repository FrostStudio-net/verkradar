create extension if not exists pgcrypto;

create table if not exists public.company_members (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  user_id uuid references auth.users(id) on delete set null,
  email text not null,
  email_normalized text not null,
  role text not null default 'member' check (role in ('owner', 'admin', 'member')),
  status text not null default 'invited' check (status in ('invited', 'active', 'revoked')),
  invited_at timestamptz not null default now(),
  accepted_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (company_id, email_normalized)
);

create index if not exists company_members_company_idx
  on public.company_members(company_id);

create index if not exists company_members_user_idx
  on public.company_members(user_id);

create index if not exists company_members_email_normalized_idx
  on public.company_members(email_normalized);

alter table public.company_members enable row level security;

drop policy if exists "Admins manage company members" on public.company_members;
drop policy if exists "Company members read own memberships" on public.company_members;
drop policy if exists "Invited users activate own memberships" on public.company_members;

create policy "Admins manage company members"
  on public.company_members
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

create policy "Company members read own memberships"
  on public.company_members
  for select
  to authenticated
  using (
    user_id = auth.uid()
    or (
      status = 'invited'
      and email_normalized = lower(coalesce(auth.jwt() ->> 'email', ''))
    )
  );

create policy "Invited users activate own memberships"
  on public.company_members
  for update
  to authenticated
  using (
    status = 'invited'
    and email_normalized = lower(coalesce(auth.jwt() ->> 'email', ''))
  )
  with check (
    status = 'active'
    and user_id = auth.uid()
    and email_normalized = lower(coalesce(auth.jwt() ->> 'email', ''))
  );

create or replace function public.protect_company_member_claim_update()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if old.status = 'invited' and new.status = 'active' then
    if new.company_id is distinct from old.company_id
      or new.email_normalized is distinct from old.email_normalized
      or new.email is distinct from old.email
      or new.role is distinct from old.role then
      raise exception 'Company membership claim cannot change company, email, or role';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_company_member_claim_update_trigger on public.company_members;
create trigger protect_company_member_claim_update_trigger
  before update on public.company_members
  for each row
  execute function public.protect_company_member_claim_update();

drop policy if exists "Active members read companies" on public.companies;
create policy "Active members read companies"
  on public.companies
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = companies.id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
  );

drop policy if exists "Company access owners manage companies" on public.companies;
create policy "Company access owners manage companies"
  on public.companies
  for update
  to authenticated
  using (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = companies.id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
        and company_members.role in ('owner', 'admin')
    )
  )
  with check (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = companies.id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
        and company_members.role in ('owner', 'admin')
    )
  );

drop policy if exists "Active members read company services" on public.company_services;
create policy "Active members read company services"
  on public.company_services
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = company_services.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
  );

drop policy if exists "Company access owners manage company services" on public.company_services;
create policy "Company access owners manage company services"
  on public.company_services
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = company_services.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
        and company_members.role in ('owner', 'admin')
    )
  )
  with check (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = company_services.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
        and company_members.role in ('owner', 'admin')
    )
  );

drop policy if exists "Active members read company locations" on public.company_locations;
create policy "Active members read company locations"
  on public.company_locations
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = company_locations.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
  );

drop policy if exists "Company access owners manage company locations" on public.company_locations;
create policy "Company access owners manage company locations"
  on public.company_locations
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = company_locations.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
        and company_members.role in ('owner', 'admin')
    )
  )
  with check (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = company_locations.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
        and company_members.role in ('owner', 'admin')
    )
  );

drop policy if exists "Active members read company keywords" on public.company_keywords;
create policy "Active members read company keywords"
  on public.company_keywords
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = company_keywords.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
  );

drop policy if exists "Company access owners manage company keywords" on public.company_keywords;
create policy "Company access owners manage company keywords"
  on public.company_keywords
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = company_keywords.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
        and company_members.role in ('owner', 'admin')
    )
  )
  with check (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = company_keywords.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
        and company_members.role in ('owner', 'admin')
    )
  );

drop policy if exists "Active members read opportunity matches" on public.opportunity_matches;
create policy "Active members read opportunity matches"
  on public.opportunity_matches
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = opportunity_matches.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
  );

drop policy if exists "Active members manage company opportunity actions" on public.company_opportunity_actions;
create policy "Active members manage company opportunity actions"
  on public.company_opportunity_actions
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = company_opportunity_actions.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = company_opportunity_actions.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
  );

drop policy if exists "Active members manage reports" on public.reports;
create policy "Active members manage reports"
  on public.reports
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = reports.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = reports.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
  );

drop policy if exists "Active members manage report items" on public.report_items;
create policy "Active members manage report items"
  on public.report_items
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.reports
      join public.company_members on company_members.company_id = reports.company_id
      where reports.id = report_items.report_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.reports
      join public.company_members on company_members.company_id = reports.company_id
      where reports.id = report_items.report_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
  );

drop policy if exists "Active members read company opportunity sends" on public.company_opportunity_sends;
create policy "Active members read company opportunity sends"
  on public.company_opportunity_sends
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.company_members
      where company_members.company_id = company_opportunity_sends.company_id
        and company_members.status = 'active'
        and company_members.user_id = auth.uid()
    )
  );

notify pgrst, 'reload schema';
