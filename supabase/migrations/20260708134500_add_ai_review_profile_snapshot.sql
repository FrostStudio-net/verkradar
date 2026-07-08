alter table public.ai_match_reviews
  add column if not exists company_services_snapshot jsonb not null default '[]'::jsonb,
  add column if not exists company_locations_snapshot jsonb not null default '[]'::jsonb,
  add column if not exists reviewed_profile_hash text,
  add column if not exists profile_updated_at timestamptz;

create index if not exists ai_match_reviews_profile_hash_idx
  on public.ai_match_reviews(company_id, reviewed_profile_hash);
