alter table public.companies
  add column if not exists core_services text[],
  add column if not exists secondary_services text[],
  add column if not exists excluded_services text[],
  add column if not exists preferred_project_types text[],
  add column if not exists excluded_project_types text[],
  add column if not exists equipment text[],
  add column if not exists certifications text[],
  add column if not exists preferred_buyers text[],
  add column if not exists max_travel_distance_km integer,
  add column if not exists typical_project_size text,
  add column if not exists profile_notes_for_ai text,
  add column if not exists matching_profile_updated_at timestamptz,
  add column if not exists matching_profile_hash text;

create table if not exists public.admin_match_decisions (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  opportunity_id uuid not null references public.opportunities(id) on delete cascade,
  decision text not null check (decision in ('send', 'possible', 'reject')),
  reason text check (
    reason is null or reason in (
      'wrong_service',
      'wrong_location',
      'too_large',
      'too_small',
      'missing_equipment_or_certification',
      'consultancy_not_execution',
      'not_interested',
      'duplicate_or_already_known',
      'other'
    )
  ),
  comment text,
  decided_by uuid references auth.users(id) on delete set null,
  decided_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (company_id, opportunity_id)
);

create table if not exists public.match_evaluation_labels (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  opportunity_id uuid not null references public.opportunities(id) on delete cascade,
  label text not null check (label in ('strong', 'possible', 'no_fit')),
  reason text,
  notes text,
  labeled_by uuid references auth.users(id) on delete set null,
  labeled_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (company_id, opportunity_id)
);

create index if not exists admin_match_decisions_company_idx
  on public.admin_match_decisions(company_id, decided_at desc);

create index if not exists admin_match_decisions_opportunity_idx
  on public.admin_match_decisions(opportunity_id);

create index if not exists match_evaluation_labels_company_idx
  on public.match_evaluation_labels(company_id, labeled_at desc);

create index if not exists match_evaluation_labels_opportunity_idx
  on public.match_evaluation_labels(opportunity_id);

alter table public.admin_match_decisions enable row level security;
alter table public.match_evaluation_labels enable row level security;

grant select, insert, update, delete on public.admin_match_decisions to authenticated;
grant select, insert, update, delete on public.match_evaluation_labels to authenticated;

drop policy if exists "Admins manage match decisions" on public.admin_match_decisions;
drop policy if exists "Admins manage evaluation labels" on public.match_evaluation_labels;

create policy "Admins manage match decisions"
  on public.admin_match_decisions
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users admin_users
      where admin_users.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.admin_users admin_users
      where admin_users.user_id = auth.uid()
    )
  );

create policy "Admins manage evaluation labels"
  on public.match_evaluation_labels
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users admin_users
      where admin_users.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.admin_users admin_users
      where admin_users.user_id = auth.uid()
    )
  );
