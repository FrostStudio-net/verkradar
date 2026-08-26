-- Permit the explicit non-representative-baseline review state on observations.
alter table public.v2_ingestion_observations drop constraint if exists v2_ingestion_observations_comparison_state_check;
alter table public.v2_ingestion_observations add constraint v2_ingestion_observations_comparison_state_check
  check (comparison_state in ('not_compared', 'legacy_match', 'legacy_only', 'v2_only', 'conflict', 'review_required', 'baseline_unavailable'));
