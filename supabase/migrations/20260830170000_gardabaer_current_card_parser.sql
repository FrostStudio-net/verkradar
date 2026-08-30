-- Garðabær's 2026-08-28 Next.js card structure requires card-local parsing and
-- bounded public detail enrichment. This migration does not change source mode
-- or enable routine production.
update public.v2_source_configs
set
  parser_version = '2.0.0',
  settings = coalesce(settings, '{}'::jsonb) || jsonb_build_object(
    'shadow_quality', coalesce(settings->'shadow_quality', '{}'::jsonb) || jsonb_build_object(
      'detail_limit', 10,
      'card_local_parsing', true,
      'source_status_normalization', true
    ),
    'identity_policy', jsonb_build_object(
      'reference', 'explicit_only',
      'fallback', 'canonical_detail_path'
    )
  ),
  updated_at = now()
where source_key = 'gardabaer-utbod-v2';
