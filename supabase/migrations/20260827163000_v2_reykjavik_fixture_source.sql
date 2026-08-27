-- Reykjavík V2 public-HTML source. Fixture-only by default; no legacy or promotion changes.
alter table public.v2_source_configs
  drop constraint if exists v2_source_configs_adapter_type_check;

alter table public.v2_source_configs
  add constraint v2_source_configs_adapter_type_check
  check (adapter_type in ('rss', 'wordpress_rest', 'page_monitor', 'municipal_html_index'));

do $$
begin
  if not exists (select 1 from public.sources where name = 'Reykjavík tender portal') then
    raise exception 'Canonical source Reykjavík tender portal is required before adding its V2 config';
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
  'reykjavik-utbod-v2',
  'Reykjavíkurborg útboð v2',
  'municipal_html_index',
  'fixture_only',
  'https://reykjavik.is/utbodsauglysingar',
  'reykjavik-html-index',
  '1.0.0',
  6000,
  150000,
  2,
  1,
  '{
    "shadow_quality":{"detail_limit":12},
    "access_policy":{"public_html_only":true,"authenticated_documents":false,"login_automation":false},
    "disabled_fallback":{"enabled":false,"kind":"in_tend_xhr","reason":"Not used by default; never bypass anonymous request limits or reCAPTCHA."}
  }'::jsonb
from public.sources
where sources.name = 'Reykjavík tender portal'
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
select id from public.v2_source_configs where source_key = 'reykjavik-utbod-v2'
on conflict (source_config_id) do nothing;
