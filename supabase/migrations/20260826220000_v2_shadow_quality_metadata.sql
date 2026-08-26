alter table public.v2_ingestion_observations add column if not exists enrichment_status text;
alter table public.v2_ingestion_observations add column if not exists shadow_quality_category text;
