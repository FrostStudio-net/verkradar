with source_seed(name, source_type, base_url, notes) as (
  values
    (
      'Kópavogur Municipality',
      'municipal_website',
      'https://www.kopavogur.is',
      'Municipal procurement source. Official tender page exists, but no compatible RSS, WordPress REST, or machine-readable endpoint is confirmed.'
    ),
    (
      'Árborg',
      'municipal_website',
      'https://www.arborg.is',
      'Municipal source. Homepage includes tender/announcement content, but no compatible RSS, WordPress REST, or machine-readable endpoint is confirmed.'
    ),
    (
      'Fjarðabyggð',
      'municipal_website',
      'https://www.fjardabyggd.is',
      'East Iceland municipal source. Announcement pages include tender notices, but no compatible RSS, WordPress REST, or machine-readable endpoint is confirmed.'
    ),
    (
      'Veitur',
      'public_institution_page',
      'https://www.veitur.is',
      'Utility procurement source. Official tender page exists, but no compatible RSS, WordPress REST, or machine-readable endpoint is confirmed.'
    ),
    (
      'Landsnet',
      'public_institution_page',
      'https://www.landsnet.is',
      'Transmission operator procurement source. Official tender page exists, but no compatible RSS, WordPress REST, or machine-readable endpoint is confirmed.'
    ),
    (
      'Isavia/Keflavik procurement',
      'public_institution_page',
      'https://www.isavia.is',
      'Airport procurement source. Uses an In-Tend tender portal that requires registration for documents and is not suitable for automatic import without explicit permission.'
    ),
    (
      'Ríkiskaup / island.is procurement',
      'tender_portal',
      'https://island.is/s/rikiskaup',
      'Central public procurement information on island.is. No compatible public RSS, WordPress REST, or supported official API is confirmed for the current importer.'
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

insert into public.source_status (source_id, status)
select sources.id,
  case
    when sources.name = 'Isavia/Keflavik procurement' then 'permission_required'
    else 'planned'
  end
from public.sources
where sources.name in (
  'Kópavogur Municipality',
  'Árborg',
  'Fjarðabyggð',
  'Veitur',
  'Landsnet',
  'Isavia/Keflavik procurement',
  'Ríkiskaup / island.is procurement'
)
on conflict (source_id) do nothing;

with connector_seed(source_name, connector_type, endpoint_url, enabled, status, notes) as (
  values
    (
      'Kópavogur Municipality',
      'planned',
      'https://www.kopavogur.is/is/stjornsysla/utgafa-og-tolfraedi/utbodsauglysingar-og-nidurstodur',
      false,
      'planned',
      'Official Kópavogur tender page. Generic /feed and /rss endpoints returned 404, and no advertised RSS/API endpoint was found. Keep disabled until an official feed/API is available.'
    ),
    (
      'Árborg',
      'planned',
      'https://www.arborg.is/',
      false,
      'planned',
      'Official Árborg site has tender/announcement content on the homepage. Generic /rss returned 404 and /feed did not provide a usable feed. Keep disabled until an official feed/API is available.'
    ),
    (
      'Fjarðabyggð',
      'planned',
      'https://www.fjardabyggd.is/tilkynningar',
      false,
      'planned',
      'Official Fjarðabyggð announcement page. Generic /rss and /feed endpoints returned 404, and no advertised RSS/API endpoint was found. Keep disabled until an official feed/API is available.'
    ),
    (
      'Veitur',
      'planned',
      'https://www.veitur.is/utbod',
      false,
      'planned',
      'Official Veitur tender page. Generic /rss and /feed endpoints returned 404, and no compatible machine-readable endpoint was confirmed. Keep disabled until an official feed/API is available.'
    ),
    (
      'Landsnet',
      'planned',
      'https://www.landsnet.is/birgjar-og-innkaup/utbod/',
      false,
      'planned',
      'Official Landsnet tender page. Generic /rss and /feed endpoints returned 404, and no compatible machine-readable endpoint was confirmed. Keep disabled until an official feed/API is available.'
    ),
    (
      'Isavia/Keflavik procurement',
      'permission_required',
      'https://utbod.isavia.is/aspx/Home',
      false,
      'permission_required',
      'Official Isavia In-Tend tender portal. The portal requires supplier registration for tender documents and should not be imported automatically without explicit permission or a documented API/feed.'
    ),
    (
      'Ríkiskaup / island.is procurement',
      'official_api',
      'https://island.is/s/rikiskaup',
      false,
      'planned',
      'Official island.is Ríkiskaup procurement information page. Generic /rss and /feed endpoints returned 404, and no supported public API/feed is confirmed for automatic import.'
    )
),
connector_filters as (
  select
    array[
      'útboð',
      'utbod',
      'tilboð',
      'tilboðum',
      'óskað eftir tilboðum',
      'verðfyrirspurn',
      'innkaup',
      'rammasamningur',
      'framkvæmdir',
      'verk',
      'þjónusta'
    ]::text[] as include_keywords,
    array[
      'fundur',
      'frétt',
      'fréttir',
      'opnun',
      'viðburður',
      'kynning',
      'umsókn',
      'starf',
      'störf',
      'lokun',
      'umferð',
      'myndband',
      'auglýsing'
    ]::text[] as exclude_keywords
)
insert into public.source_connectors (
  source_id,
  connector_type,
  endpoint_url,
  enabled,
  status,
  notes,
  include_keywords,
  exclude_keywords,
  require_any_keyword,
  updated_at
)
select
  sources.id,
  connector_seed.connector_type,
  connector_seed.endpoint_url,
  connector_seed.enabled,
  connector_seed.status,
  connector_seed.notes,
  connector_filters.include_keywords,
  connector_filters.exclude_keywords,
  true,
  now()
from connector_seed
join public.sources on sources.name = connector_seed.source_name
cross join connector_filters
on conflict (source_id) do update set
  connector_type = case
    when public.source_connectors.enabled then public.source_connectors.connector_type
    else excluded.connector_type
  end,
  endpoint_url = case
    when public.source_connectors.enabled then public.source_connectors.endpoint_url
    else excluded.endpoint_url
  end,
  enabled = public.source_connectors.enabled or excluded.enabled,
  status = case
    when public.source_connectors.enabled then coalesce(nullif(public.source_connectors.status, ''), 'connected')
    else excluded.status
  end,
  notes = case
    when public.source_connectors.enabled then coalesce(public.source_connectors.notes, excluded.notes)
    else excluded.notes
  end,
  include_keywords = excluded.include_keywords,
  exclude_keywords = excluded.exclude_keywords,
  require_any_keyword = true,
  updated_at = now();

notify pgrst, 'reload schema';
