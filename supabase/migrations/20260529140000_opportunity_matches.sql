create extension if not exists pgcrypto;

create table if not exists public.opportunity_matches (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete cascade,
  opportunity_id uuid references public.opportunities(id) on delete cascade,
  match_score integer,
  match_label text,
  match_reasons jsonb,
  risks jsonb,
  next_steps jsonb,
  calculated_at timestamptz default now(),
  unique (company_id, opportunity_id)
);

alter table public.opportunity_matches
  add column if not exists calculated_at timestamptz default now();

alter table public.opportunity_matches
  alter column match_reasons drop default,
  alter column risks drop default,
  alter column next_steps drop default;

alter table public.opportunity_matches
  alter column match_reasons type jsonb using to_jsonb(match_reasons),
  alter column risks type jsonb using to_jsonb(risks),
  alter column next_steps type jsonb using to_jsonb(next_steps);

alter table public.opportunity_matches
  alter column match_reasons set default '[]'::jsonb,
  alter column risks set default '[]'::jsonb,
  alter column next_steps set default '[]'::jsonb;

create unique index if not exists opportunity_matches_company_opportunity_idx
  on public.opportunity_matches(company_id, opportunity_id);

alter table public.opportunity_matches enable row level security;

drop policy if exists "Dev all access for anon opportunity matches" on public.opportunity_matches;
drop policy if exists "Dev all access for authenticated opportunity matches" on public.opportunity_matches;
drop policy if exists "Owners manage opportunity matches" on public.opportunity_matches;

create policy "Dev all access for anon opportunity matches"
  on public.opportunity_matches
  for all
  to anon
  using (true)
  with check (true);

create policy "Dev all access for authenticated opportunity matches"
  on public.opportunity_matches
  for all
  to authenticated
  using (true)
  with check (true);
