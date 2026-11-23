-- Permitted-source coverage health and access decisions for TED, Veitur and
-- Ríkiskaup. This migration does not run an import or touch opportunities.

alter table public.source_connectors
  add column if not exists coverage_health_state text not null default 'stale',
  add column if not exists coverage_health_detail jsonb not null default '{}'::jsonb,
  add column if not exists last_current_publication_at timestamptz;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conrelid = 'public.source_connectors'::regclass
      and conname = 'source_connectors_coverage_health_state_check'
  ) then
    alter table public.source_connectors
      add constraint source_connectors_coverage_health_state_check
      check (coverage_health_state in (
        'healthy', 'stale', 'blocked', 'permission_required',
        'fixture_only', 'shadow_only'
      ));
  end if;
end
$$;

-- The official TED Search API is anonymous and intended for data reuse. It is
-- the permitted path for Icelandic notices above the applicable EES threshold.
update public.source_connectors connectors
set coverage_health_state = case
      when status_rows.last_success_at >= now() - interval '3 days'
       and recent.latest_publication_at >= now() - interval '45 days'
        then 'healthy'
      else 'stale'
    end,
    last_current_publication_at = recent.latest_publication_at,
    coverage_health_detail = jsonb_build_object(
      'owner', 'Publications Office of the European Union',
      'access', 'official_anonymous_search_api',
      'auth_required', false,
      'content_type', 'application/json',
      'pagination', 'iteration',
      'coverage_scope', 'iceland_ees_notices',
      'inventory_completeness', 'ees_threshold_only',
      'query_country', 'ISL',
      'stale_after_days', 45
    ),
    notes = 'Official anonymous TED Search API. Scheduled automation is Iceland-first and uses a server-side ISL filter; this covers EES notices only and is not a replacement for the blocked national portal.',
    updated_at = now()
from public.sources sources
left join public.source_status status_rows on status_rows.source_id = sources.id
left join lateral (
  select max(opportunities.published_date)::timestamptz as latest_publication_at
  from public.opportunities
  where opportunities.source_id = sources.id
) recent on true
where connectors.source_id = sources.id
  and sources.name = 'TED Iceland/Nordic';

-- The central national inventory is public to people, but its robots policy
-- disallows automation and island.is exposes no independent listing feed/API.
update public.source_connectors connectors
set connector_type = 'permission_required',
    endpoint_url = 'https://island.is/utbodsvefur',
    enabled = false,
    status = 'permission_required',
    coverage_health_state = 'permission_required',
    coverage_health_detail = jsonb_build_object(
      'owner', 'Fjársýslan / Ríkiskaup',
      'public_information_page', 'https://island.is/utbodsvefur',
      'national_inventory', 'https://utbodsvefur.is',
      'robots_policy', 'disallow_all',
      'auth_required_for_public_page', false,
      'permitted_machine_feed_found', false,
      'required_next_step', 'official_feed_api_or_written_automation_permission'
    ),
    notes = 'Automation disabled. Útboðsvefur robots.txt disallows all crawlers and island.is exposes no independent current-opportunity feed/API. Requires an official feed/API or written automation permission.',
    updated_at = now()
from public.sources sources
where connectors.source_id = sources.id
  and sources.name = 'Ríkiskaup / island.is procurement';

update public.source_connectors connectors
set enabled = false,
    status = 'blocked',
    coverage_health_state = 'blocked',
    coverage_health_detail = jsonb_build_object(
      'owner', 'Fjársýslan / Ríkiskaup',
      'robots_policy', 'disallow_all',
      'permitted_machine_feed_found', false
    ),
    notes = 'Do not crawl: https://utbodsvefur.is/robots.txt contains User-agent: * and Disallow: /.',
    updated_at = now()
from public.sources sources
where connectors.source_id = sources.id
  and sources.name = 'Útboðsvefur.is';

-- The narrow official Veitur connector remains enabled for the VEGK DPS parent,
-- but its buyer-wide coverage is explicitly unhealthy/partial. One-off EES
-- notices are handled by TED; other In-Tend inventory still needs permission.
update public.source_connectors connectors
set coverage_health_state = 'stale',
    coverage_health_detail = jsonb_build_object(
      'owner', 'Veitur',
      'official_page_coverage', 'VEGK-2024-01_parent_only',
      'inventory_completeness', 'subset_only',
      'ees_notice_fallback', 'TED Iceland/Nordic',
      'portal', 'In-Tend Reykjavik Energy',
      'portal_automation_permitted', false,
      'required_next_step', 'official_feed_api_or_written_portal_permission'
    ),
    notes = 'Enabled only for the stable official VEGK-2024-01 DPS parent page. Buyer-wide coverage is partial: EES notices use TED; other In-Tend opportunities require an official feed/API or written permission.',
    updated_at = now()
from public.sources sources
where connectors.source_id = sources.id
  and sources.name = 'Veitur';

update public.source_connectors connectors
set connector_type = 'permission_required',
    enabled = false,
    status = 'permission_required',
    coverage_health_state = 'permission_required',
    coverage_health_detail = jsonb_build_object(
      'owner', 'Orkuveitan',
      'official_information_page', 'https://www.orkuveitan.is/orkuveitan/innkaup/utbod/',
      'portal', 'In-Tend Reykjavik Energy',
      'public_tender_inventory_on_official_page', false,
      'portal_automation_permitted', false,
      'required_next_step', 'official_feed_api_or_written_portal_permission'
    ),
    notes = 'Official page is informational and links to In-Tend; it does not expose the current tender inventory. Automation remains disabled pending an official feed/API or written permission.',
    updated_at = now()
from public.sources sources
where connectors.source_id = sources.id
  and sources.name = 'Orkuveita/Reykjavik Energy tender portal';

update public.source_status status_rows
set status = case sources.name
      when 'Útboðsvefur.is' then 'blocked'
      else 'permission_required'
    end,
    last_error = case sources.name
      when 'Útboðsvefur.is' then 'Automated access blocked by robots.txt.'
      when 'Ríkiskaup / island.is procurement' then 'No permitted independent current-opportunity feed/API is available.'
      else 'Official page exposes no permitted machine-readable tender inventory.'
    end,
    updated_at = now()
from public.sources sources
where status_rows.source_id = sources.id
  and sources.name in (
    'Útboðsvefur.is',
    'Ríkiskaup / island.is procurement',
    'Orkuveita/Reykjavik Energy tender portal'
  );

-- Retain the test fixtures, but make their non-production coverage state
-- explicit. No blocked endpoint is enabled by this migration.
update public.v2_source_configs
set settings = settings || jsonb_build_object(
      'coverage_health_state', 'fixture_only',
      'permitted_live_source', false,
      'coverage_gap', true,
      'required_next_step', 'official_feed_api_or_written_automation_permission'
    ),
    updated_at = now()
where source_key in (
  'rikiskaup-utbod-v2',
  'veitur-utbod-v2',
  'orkuveitan-utbod-v2'
)
  and mode = 'fixture_only';

do $$
begin
  if exists (
    select 1
    from public.source_connectors connectors
    join public.sources sources on sources.id = connectors.source_id
    where sources.name in ('Útboðsvefur.is', 'Ríkiskaup / island.is procurement')
      and (
        connectors.enabled
        or connectors.endpoint_url like 'https://utbodsvefur.is/wp-json/%'
      )
  ) then
    raise exception 'BLOCKED_UTBODSVEFUR_AUTOMATION_REMAINS_ENABLED';
  end if;

  if not exists (
    select 1
    from public.source_connectors connectors
    join public.sources sources on sources.id = connectors.source_id
    where sources.name = 'TED Iceland/Nordic'
      and connectors.enabled
      and connectors.connector_type = 'ted_api'
      and connectors.endpoint_url = 'https://api.ted.europa.eu/v3/notices/search'
  ) then
    raise exception 'PERMITTED_TED_CONNECTOR_NOT_ENABLED';
  end if;
end
$$;

notify pgrst, 'reload schema';
