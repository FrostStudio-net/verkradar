-- Phase B shadow-only metadata; no customer-visible writes.
alter table public.v2_ingestion_observations
  add column if not exists predicted_procurement_stage text,
  add column if not exists predicted_actionable boolean,
  add column if not exists predicted_confidence numeric(5,4),
  add column if not exists predicted_reason text,
  add column if not exists predicted_requires_admin_review boolean;
comment on column public.v2_ingestion_observations.predicted_procurement_stage is 'Shadow comparison only; never updates opportunities.';
