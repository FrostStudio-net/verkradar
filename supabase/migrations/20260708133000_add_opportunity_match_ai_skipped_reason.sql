alter table public.opportunity_matches
  add column if not exists ai_review_skipped_reason text;

create index if not exists opportunity_matches_ai_review_skipped_reason_idx
  on public.opportunity_matches(company_id, ai_review_skipped_reason);
