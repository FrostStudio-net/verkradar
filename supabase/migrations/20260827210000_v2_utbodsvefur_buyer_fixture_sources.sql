-- Fixture-only Útboðsvefur buyer sources. Automated access remains operationally blocked.
do $$
begin
  if exists (
    select required.name
    from (values ('Landsnet'), ('Veitur'), ('Orkuveita/Reykjavik Energy tender portal')) as required(name)
    left join public.sources on sources.name = required.name
    where sources.id is null
  ) then
    raise exception 'Canonical Landsnet, Veitur, and Orkuveitan sources are required before adding V2 configs';
  end if;
end
$$;

update public.v2_source_configs
set settings = settings || jsonb_build_object(
  'promotion_available', false,
  'utbodsvefur', jsonb_build_object(
    'canonical_buyer', 'Landsvirkjun',
    'accepted_buyer_aliases', '[]'::jsonb,
    'aggregate_selector', 'adili=1347'
  )
), updated_at = now()
where source_key = 'landsvirkjun-utbod-v2';

with source_seed(source_name, source_key, display_name, endpoint_url, parser_name, canonical_buyer, aggregate_selector) as (
  values
    ('Landsnet', 'landsnet-utbod-v2', 'Landsnet útboð v2', 'https://utbodsvefur.is/?adili=326', 'landsnet-html-index', 'Landsnet', 'adili=326'),
    ('Veitur', 'veitur-utbod-v2', 'Veitur útboð v2', 'https://utbodsvefur.is/?adili=574', 'veitur-html-index', 'Veitur', 'adili=574'),
    ('Orkuveita/Reykjavik Energy tender portal', 'orkuveitan-utbod-v2', 'Orkuveita Reykjavíkur útboð v2', 'https://utbodsvefur.is/?adili=193', 'orkuveitan-html-index', 'Orkuveita Reykjavíkur', 'adili=193')
)
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
  source_seed.source_key,
  source_seed.display_name,
  'public_procurement_html_index',
  'fixture_only',
  source_seed.endpoint_url,
  source_seed.parser_name,
  '1.0.0',
  5000,
  90000,
  2,
  1,
  jsonb_build_object(
    'operational_state', 'automated_live_access_not_cleared',
    'promotion_available', false,
    'utbodsvefur', jsonb_build_object(
      'canonical_buyer', source_seed.canonical_buyer,
      'accepted_buyer_aliases', '[]'::jsonb,
      'aggregate_selector', source_seed.aggregate_selector
    ),
    'shadow_quality', jsonb_build_object('detail_limit', 10),
    'future_live_limits', jsonb_build_object('index_requests', 1, 'detail_requests', 10, 'request_timeout_ms', 5000, 'max_attempts', 2, 'concurrency', 2),
    'access_policy', jsonb_build_object('robots_disallow', true, 'automated_live_access_cleared', false, 'public_html_only', true, 'in_tend_requests', false, 'protected_document_requests', false, 'login_automation', false)
  )
from source_seed
join public.sources on sources.name = source_seed.source_name
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
select id
from public.v2_source_configs
where source_key in ('landsnet-utbod-v2', 'veitur-utbod-v2', 'orkuveitan-utbod-v2')
on conflict (source_config_id) do nothing;
