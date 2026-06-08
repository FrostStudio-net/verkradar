with source_seed(name, source_type, base_url, notes) as (
  values
    (
      'Ríkiskaup / island.is procurement',
      'tender_portal',
      'https://island.is/s/rikiskaup',
      'High-priority central public procurement source. No compatible public RSS, WordPress REST, or supported official API is confirmed for the current importer.'
    ),
    (
      'Isavia/Keflavik procurement',
      'public_institution_page',
      'https://www.isavia.is',
      'Airport procurement source. Official In-Tend portal exists, but no safe machine-readable feed/API is confirmed.'
    ),
    (
      'Veitur',
      'public_institution_page',
      'https://www.veitur.is',
      'Utility procurement source. Veitur states procurement is handled through Orkuveitan tender portal; no compatible machine-readable feed/API is confirmed.'
    ),
    (
      'Orkuveita/Reykjavik Energy tender portal',
      'public_institution_page',
      'https://orkuveitan.is',
      'Reykjavík Energy Group procurement source. Tender page exists, but no compatible public RSS/API endpoint is confirmed.'
    ),
    (
      'Landsvirkjun procurement / útboð',
      'public_institution_page',
      'https://www.landsvirkjun.is',
      'High-value national energy procurement source. Public tender portal exists, but no safe RSS/API endpoint is confirmed.'
    ),
    (
      'Landsnet',
      'public_institution_page',
      'https://www.landsnet.is',
      'Transmission operator procurement source. Public tender portal exists, but no compatible RSS/API endpoint is confirmed.'
    ),
    (
      'Reykjavík tender portal',
      'municipal_website',
      'https://reykjavik.is',
      'Canonical Reykjavík procurement/tender source. Tender portal exists, but no compatible RSS/API endpoint is confirmed.'
    )
)
insert into public.sources (name, source_type, base_url, is_active, notes)
select name, source_type, base_url, true, notes
from source_seed
on conflict (name) do update set
  source_type = excluded.source_type,
  base_url = excluded.base_url,
  is_active = true,
  notes = excluded.notes;

insert into public.source_status (source_id, status, updated_at)
select sources.id, 'planned', now()
from public.sources
where sources.name in (
  'Ríkiskaup / island.is procurement',
  'Isavia/Keflavik procurement',
  'Veitur',
  'Orkuveita/Reykjavik Energy tender portal',
  'Landsvirkjun procurement / útboð',
  'Landsnet',
  'Reykjavík tender portal'
)
on conflict (source_id) do update set
  status = case
    when public.source_status.status in ('connected', 'success', 'running', 'error') then public.source_status.status
    else 'planned'
  end,
  updated_at = now();

with connector_seed(source_name, connector_type, endpoint_url, enabled, status, notes) as (
  values
    (
      'Ríkiskaup / island.is procurement',
      'planned',
      'https://island.is/s/rikiskaup',
      false,
      'planned',
      'High-priority central procurement source. Keep planned until a supported official API/feed is confirmed.'
    ),
    (
      'Isavia/Keflavik procurement',
      'planned',
      'https://utbod.isavia.is/aspx/Home',
      false,
      'planned',
      'Official Isavia In-Tend portal. Registration is required for tender documents and no machine-readable feed/API is confirmed.'
    ),
    (
      'Veitur',
      'planned',
      'https://www.veitur.is/utbod',
      false,
      'planned',
      'Official Veitur procurement page points to Orkuveitan tender handling. No compatible feed/API is confirmed.'
    ),
    (
      'Orkuveita/Reykjavik Energy tender portal',
      'planned',
      'https://orkuveitan.is/fjarmal/innkaup/utbod/',
      false,
      'planned',
      'Official Orkuveitan tender page. No compatible public RSS/API endpoint is confirmed for automatic import.'
    ),
    (
      'Landsvirkjun procurement / útboð',
      'planned',
      'https://utbod.landsvirkjun.is',
      false,
      'planned',
      'Official Landsvirkjun tender portal redirects to In-Tend. No compatible RSS/API endpoint is confirmed.'
    ),
    (
      'Landsnet',
      'planned',
      'https://utbod.landsnet.is',
      false,
      'planned',
      'Official Landsnet procurement portal redirects to In-Tend. No compatible RSS/API endpoint is confirmed.'
    ),
    (
      'Reykjavík tender portal',
      'planned',
      'https://utbod.reykjavik.is/aspx/Tenders/MyTenders',
      false,
      'planned',
      'Official Reykjavík tender portal. No compatible public RSS/API endpoint is confirmed.'
    )
)
insert into public.source_connectors (
  source_id,
  connector_type,
  endpoint_url,
  enabled,
  status,
  notes,
  updated_at
)
select
  sources.id,
  connector_seed.connector_type,
  connector_seed.endpoint_url,
  connector_seed.enabled,
  connector_seed.status,
  connector_seed.notes,
  now()
from connector_seed
join public.sources on sources.name = connector_seed.source_name
on conflict (source_id) do update set
  connector_type = case
    when public.source_connectors.enabled then public.source_connectors.connector_type
    else excluded.connector_type
  end,
  endpoint_url = case
    when public.source_connectors.enabled then public.source_connectors.endpoint_url
    else excluded.endpoint_url
  end,
  enabled = public.source_connectors.enabled and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest', 'ted_api'),
  status = case
    when public.source_connectors.enabled and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest', 'ted_api') then public.source_connectors.status
    else excluded.status
  end,
  notes = case
    when public.source_connectors.enabled and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest', 'ted_api') then public.source_connectors.notes
    else excluded.notes
  end,
  updated_at = now();

notify pgrst, 'reload schema';
