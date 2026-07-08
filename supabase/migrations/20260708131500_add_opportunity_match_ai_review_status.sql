alter table public.opportunity_matches
  add column if not exists ai_review_status text not null default 'not_reviewed',
  add column if not exists ai_review_fit text,
  add column if not exists ai_review_confidence numeric,
  add column if not exists ai_reviewed_at timestamptz;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'opportunity_matches_ai_review_status_check'
  ) then
    alter table public.opportunity_matches
      add constraint opportunity_matches_ai_review_status_check
      check (ai_review_status in ('not_reviewed', 'ready_for_admin', 'possible', 'needs_review', 'low_priority'));
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'opportunity_matches_ai_review_fit_check'
  ) then
    alter table public.opportunity_matches
      add constraint opportunity_matches_ai_review_fit_check
      check (ai_review_fit is null or ai_review_fit in ('strong', 'possible', 'weak', 'no_fit'));
  end if;
end $$;

create index if not exists opportunity_matches_ai_review_status_idx
  on public.opportunity_matches(company_id, ai_review_status);
