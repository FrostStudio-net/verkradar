create table if not exists public.ai_match_reviews (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  opportunity_id uuid not null references public.opportunities(id) on delete cascade,
  match_id uuid references public.opportunity_matches(id) on delete set null,
  fit text not null check (fit in ('strong', 'possible', 'weak', 'no_fit')),
  confidence numeric not null default 0 check (confidence >= 0 and confidence <= 1),
  send_to_client boolean not null default false,
  reason text not null default '',
  fit_reasons jsonb not null default '[]'::jsonb,
  risks_or_questions jsonb not null default '[]'::jsonb,
  suggested_client_summary text not null default '',
  model text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint ai_match_reviews_company_opportunity_key unique (company_id, opportunity_id)
);

create index if not exists ai_match_reviews_company_id_idx on public.ai_match_reviews(company_id);
create index if not exists ai_match_reviews_opportunity_id_idx on public.ai_match_reviews(opportunity_id);
create index if not exists ai_match_reviews_match_id_idx on public.ai_match_reviews(match_id);
create index if not exists ai_match_reviews_created_at_idx on public.ai_match_reviews(created_at desc);

alter table public.ai_match_reviews enable row level security;

drop policy if exists "Admins manage AI match reviews" on public.ai_match_reviews;

create policy "Admins manage AI match reviews"
  on public.ai_match_reviews
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
