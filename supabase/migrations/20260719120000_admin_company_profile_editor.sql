-- Admin-editable company matching profile fields and audit log.

alter table public.companies
  add column if not exists notification_email text,
  add column if not exists opportunity_categories text[] not null default '{}',
  add column if not exists opportunity_types text[] not null default '{}',
  add column if not exists subcontracting_relevant boolean not null default false,
  add column if not exists minimum_relevance_threshold integer not null default 50,
  add column if not exists internal_admin_notes text;

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'companies_minimum_relevance_threshold_check'
  ) then
    alter table public.companies
      add constraint companies_minimum_relevance_threshold_check
      check (minimum_relevance_threshold between 0 and 100);
  end if;
end $$;

create table if not exists public.company_profile_change_log (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  changed_by uuid references auth.users(id) on delete set null,
  changed_by_email text,
  changed_at timestamptz not null default now(),
  source text not null default 'admin' check (source in ('admin', 'client')),
  changed_fields text[] not null default '{}',
  previous_values jsonb not null default '{}'::jsonb,
  new_values jsonb not null default '{}'::jsonb
);

create index if not exists company_profile_change_log_company_changed_idx
  on public.company_profile_change_log(company_id, changed_at desc);

alter table public.company_profile_change_log enable row level security;

drop policy if exists "Admins read company profile changes" on public.company_profile_change_log;
drop policy if exists "Admins insert company profile changes" on public.company_profile_change_log;
drop policy if exists "Admins manage company profile changes" on public.company_profile_change_log;
drop policy if exists "Members insert own company profile changes" on public.company_profile_change_log;

create policy "Admins read company profile changes"
  on public.company_profile_change_log
  for select
  to authenticated
  using (public.is_admin());

create policy "Admins insert company profile changes"
  on public.company_profile_change_log
  for insert
  to authenticated
  with check (public.is_admin());

create policy "Members insert own company profile changes"
  on public.company_profile_change_log
  for insert
  to authenticated
  with check (
    source = 'client'
    and changed_by = auth.uid()
    and public.is_company_member(company_id)
  );

revoke all on public.company_profile_change_log from anon;
grant select, insert on public.company_profile_change_log to authenticated;

notify pgrst, 'reload schema';
