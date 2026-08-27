-- Landsvirkjun V2 fixture-first source. Automated access is not operationally cleared.
alter table public.v2_source_configs
  drop constraint if exists v2_source_configs_adapter_type_check;

alter table public.v2_source_configs
  add constraint v2_source_configs_adapter_type_check
  check (adapter_type in ('rss', 'wordpress_rest', 'page_monitor', 'municipal_html_index', 'public_procurement_html_index'));

do $$
begin
  if not exists (select 1 from public.sources where name = 'Landsvirkjun procurement / útboð') then
    raise exception 'Canonical source Landsvirkjun procurement / útboð is required before adding its V2 config';
  end if;
end
$$;

insert into public.v2_source_configs (
  source_id,
  source_key,
  display_name,
  adapter_type,
  mode,
  endpoint_url,
  parser_name,
  parser_version,
  request_timeout_ms,
  run_deadline_ms,
  max_attempts,
  zero_item_threshold,
  settings
)
select
  sources.id,
  'landsvirkjun-utbod-v2',
  'Landsvirkjun útboð v2',
  'public_procurement_html_index',
  'fixture_only',
  'https://utbodsvefur.is/?adili=1347',
  'landsvirkjun-html-index',
  '1.0.0',
  5000,
  90000,
  2,
  1,
  '{
    "operational_state":"automated_live_access_not_cleared",
    "shadow_quality":{"detail_limit":10},
    "future_live_limits":{"index_requests":1,"detail_requests":10,"request_timeout_ms":5000,"max_attempts":2,"concurrency":2},
    "access_policy":{"robots_disallow":true,"automated_live_access_cleared":false,"public_html_only":true,"in_tend_requests":false,"protected_document_requests":false,"login_automation":false}
  }'::jsonb
from public.sources
where sources.name = 'Landsvirkjun procurement / útboð'
on conflict (source_key) do update set
  source_id = excluded.source_id,
  display_name = excluded.display_name,
  adapter_type = excluded.adapter_type,
  endpoint_url = excluded.endpoint_url,
  parser_name = excluded.parser_name,
  parser_version = excluded.parser_version,
  request_timeout_ms = excluded.request_timeout_ms,
  run_deadline_ms = excluded.run_deadline_ms,
  max_attempts = excluded.max_attempts,
  zero_item_threshold = excluded.zero_item_threshold,
  settings = excluded.settings,
  updated_at = now();

insert into public.v2_source_health (source_config_id)
select id from public.v2_source_configs where source_key = 'landsvirkjun-utbod-v2'
on conflict (source_config_id) do nothing;
