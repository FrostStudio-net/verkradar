with source_seed(name, source_type, base_url, notes) as (
  values
    (
      'Kópavogur Municipality',
      'municipal_website',
      'https://www.kopavogur.is',
      'Municipal procurement source. Official page says Kópavogur tenders are advertised on Útboðsvefur/TendSign; no compatible public RSS, WordPress REST, JSON, or API endpoint is confirmed.'
    ),
    (
      'Garðabær Municipality',
      'municipal_website',
      'https://www.gardabaer.is',
      'Municipal procurement source. Official tender listing is public and robots.txt allows crawling. Enabled as a narrow page_monitor_allowed connector for the single official tender page.'
    ),
    (
      'Árborg',
      'municipal_website',
      'https://www.arborg.is',
      'Municipal source. Homepage has tender/project announcements, but no compatible RSS, WordPress REST, JSON, or API endpoint is confirmed. Robots.txt has crawl-delay and blocks search/view paths; keep planned.'
    ),
    (
      'Fjarðabyggð',
      'municipal_website',
      'https://www.fjardabyggd.is',
      'East Iceland municipal source. Public announcement pages can mention tenders, but no compatible RSS, WordPress REST, JSON, or API endpoint is confirmed.'
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

with connector_filters as (
  select
    array[
      'útboð',
      'utbod',
      'tilboð',
      'tilboðum',
      'framkvæmdir',
      'framkvaemdir',
      'viðhald',
      'vidhald',
      'gatnagerð',
      'gatnagerd',
      'malbikun',
      'lagnir',
      'snjómokstur',
      'snjomokstur',
      'bygging',
      'endurbætur',
      'endurbaetur',
      'verðfyrirspurn',
      'verdfyrirspurn',
      'rammasamningur'
    ]::text[] as include_keywords,
    array[
      'fundur',
      'frétt',
      'frett',
      'viðburður',
      'vidburdur',
      'menning',
      'skóli',
      'skoli',
      'lokun',
      'umferð',
      'umferd',
      'kynning'
    ]::text[] as exclude_keywords
),
connector_seed(source_name, connector_type, endpoint_url, enabled, status, notes) as (
  values
    (
      'Kópavogur Municipality',
      'planned',
      'https://www.kopavogur.is/is/stjornsysla/utgafa-og-tolfraedi/utbodsauglysingar-og-nidurstodur',
      false,
      'planned',
      'Robots.txt allows crawling and sitemap exists, but /feed and WordPress REST are not available. The official procurement page says tenders are advertised on Útboðsvefur/TendSign, so keep disabled until a supported endpoint or permission is confirmed.'
    ),
    (
      'Garðabær Municipality',
      'page_monitor_allowed',
      'https://www.gardabaer.is/framkvaemdir/utbod',
      true,
      'connected',
      'Official Garðabær tender listing page. Robots.txt allows crawling. Connector fetches only this single public page and parses tender cards; it does not crawl detail pages.'
    ),
    (
      'Árborg',
      'planned',
      'https://www.arborg.is/',
      false,
      'planned',
      'Robots.txt allows the homepage but sets Crawl-delay: 5 and blocks search/view paths. Sitemap exists, but no RSS, WordPress REST, JSON, or API tender feed is confirmed. Keep planned to avoid broad homepage/news scraping.'
    ),
    (
      'Fjarðabyggð',
      'planned',
      'https://www.fjardabyggd.is/tilkynningar',
      false,
      'planned',
      'Robots.txt only blocks /cpresources/ and sitemap exists, but /feed, /rss, and WordPress REST are not usable. Keep planned until an official feed/API is confirmed.'
    )
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
    when public.source_connectors.enabled and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest', 'ted_api') then public.source_connectors.connector_type
    else excluded.connector_type
  end,
  endpoint_url = case
    when public.source_connectors.enabled and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest', 'ted_api') then public.source_connectors.endpoint_url
    else excluded.endpoint_url
  end,
  enabled = case
    when public.source_connectors.enabled and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest', 'ted_api') then true
    else excluded.enabled
  end,
  status = case
    when public.source_connectors.enabled and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest', 'ted_api') then coalesce(nullif(public.source_connectors.status, ''), 'connected')
    else excluded.status
  end,
  notes = case
    when public.source_connectors.enabled and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest', 'ted_api') then coalesce(public.source_connectors.notes, excluded.notes)
    else excluded.notes
  end,
  include_keywords = excluded.include_keywords,
  exclude_keywords = excluded.exclude_keywords,
  require_any_keyword = true,
  updated_at = now();

insert into public.source_status (source_id, status, updated_at)
select sources.id,
  case when sources.name = 'Garðabær Municipality' then 'connected' else 'planned' end,
  now()
from public.sources
where sources.name in ('Kópavogur Municipality', 'Garðabær Municipality', 'Árborg', 'Fjarðabyggð')
on conflict (source_id) do update set
  status = case
    when public.source_status.status in ('running', 'error') then public.source_status.status
    when excluded.status = 'connected' then 'connected'
    else 'planned'
  end,
  updated_at = now();

notify pgrst, 'reload schema';
