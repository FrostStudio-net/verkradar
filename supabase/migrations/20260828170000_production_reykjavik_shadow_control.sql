-- Permit one narrowly allowlisted, admin-triggered production V2 shadow source.
-- This does not schedule a run and does not enable any Phase C capability.

alter table public.v2_source_configs
  add column if not exists production_shadow_enabled boolean not null default false;

update public.v2_source_configs
set production_shadow_enabled = true,
    mode = 'shadow',
    promotion_approved = false,
    production_canary_enabled = false,
    release_feature_enabled = false,
    release_approved = false,
    updated_at = now()
where source_key = 'reykjavik-utbod-v2';

create unique index if not exists v2_ingestion_runs_one_active_per_source_idx
  on public.v2_ingestion_runs (source_config_id)
  where status in ('queued', 'running');

comment on column public.v2_source_configs.production_shadow_enabled is
  'Explicit opt-in for authenticated manual production shadow execution. It does not schedule runs or authorize promotion.';
