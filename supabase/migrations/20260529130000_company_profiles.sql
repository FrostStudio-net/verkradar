create extension if not exists pgcrypto;

create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid unique references auth.users(id) on delete cascade,
  company_name text not null,
  contact_email text not null,
  website text,
  industry text,
  min_project_value numeric,
  max_project_value numeric,
  allow_unknown_value boolean not null default true,
  report_frequency text,
  report_day text,
  deadline_reminders boolean not null default true,
  include_low_confidence boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.company_services (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  service text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.company_locations (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  location text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.company_keywords (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  keyword text not null,
  type text not null check (type in ('include', 'exclude')),
  created_at timestamptz not null default now()
);

create index if not exists company_services_company_id_idx on public.company_services(company_id);
create index if not exists company_locations_company_id_idx on public.company_locations(company_id);
create index if not exists company_keywords_company_id_idx on public.company_keywords(company_id);
