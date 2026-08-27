-- Bounded shadow quality settings for the three existing Phase B sources.
-- This does not enable promotion or alter legacy ingestion.
update public.v2_source_configs
set
  request_timeout_ms = 6000,
  run_deadline_ms = 180000,
  max_attempts = 2,
  settings = jsonb_set(
    coalesce(settings, '{}'::jsonb),
    '{shadow_quality}',
    case source_key
      when 'rikiskaup-utbod-v2' then '{"max_pages":3,"max_items":60,"per_page":20,"detail_limit":20}'::jsonb
      when 'vegagerdin-utbod-v2' then '{"detail_limit":12}'::jsonb
      when 'isafjordur-utbod-v2' then '{"detail_limit":15}'::jsonb
    end,
    true
  ),
  updated_at = now()
where source_key in (
  'rikiskaup-utbod-v2',
  'vegagerdin-utbod-v2',
  'isafjordur-utbod-v2'
);
