-- Phase B: permit the shadow run trigger without enabling promotion.
alter table public.v2_ingestion_runs drop constraint if exists v2_ingestion_runs_trigger_type_check;
alter table public.v2_ingestion_runs add constraint v2_ingestion_runs_trigger_type_check
  check (trigger_type in ('fixture', 'replay', 'manual', 'automation', 'shadow'));
