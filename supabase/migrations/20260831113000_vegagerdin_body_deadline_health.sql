-- Follow-up to the staging-only Vegagerðin proof: current detail deadlines
-- live in the article body. Tighten the parser version after adding body-local
-- explicit deadline extraction and fail-closed completeness health.

update public.v2_source_configs
set parser_version = '1.1.1',
    updated_at = now()
where source_key = 'vegagerdin-utbod-v2';
