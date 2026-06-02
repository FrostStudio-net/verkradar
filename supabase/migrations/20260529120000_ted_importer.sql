create extension if not exists pgcrypto;

create table if not exists public.sources (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  source_type text,
  base_url text,
  is_active boolean not null default true,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.opportunities (
  id uuid primary key default gen_random_uuid(),
  source_id uuid not null references public.sources(id) on delete cascade,
  external_id text not null,
  title text not null,
  buyer text,
  category text,
  type text,
  description text,
  deadline date,
  published_date date,
  location text,
  estimated_value numeric,
  currency text,
  url text,
  cpv_code text,
  requirements text[] not null default '{}',
  keywords text[] not null default '{}',
  difficulty text,
  status text,
  raw_payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (source_id, external_id)
);

create table if not exists public.opportunity_matches (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null,
  opportunity_id uuid not null references public.opportunities(id) on delete cascade,
  match_score integer not null,
  match_label text not null,
  match_reasons text[] not null default '{}',
  risks text[] not null default '{}',
  next_steps text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (company_id, opportunity_id)
);

insert into public.sources (name, source_type, base_url, is_active, notes)
values ('Tenders Electronic Daily', 'ted', 'https://ted.europa.eu', true, 'Created by TED importer')
on conflict (name) do update set
  source_type = excluded.source_type,
  base_url = excluded.base_url,
  is_active = excluded.is_active,
  notes = excluded.notes;
