with source_seed(name, source_type, base_url, notes) as (
  values
    (
      'Kópavogur Municipality',
      'municipal_website',
      'https://www.kopavogur.is',
      'Municipal source. Official tender page exists, but no compatible RSS feed was confirmed.'
    ),
    (
      'Garðabær Municipality',
      'municipal_website',
      'https://www.gardabaer.is',
      'Municipal source. No compatible public RSS feed was confirmed.'
    ),
    (
      'Mosfellsbær Municipality',
      'municipal_website',
      'https://mos.is',
      'Municipal source. Public WordPress RSS feed confirmed.'
    ),
    (
      'Árborg',
      'municipal_website',
      'https://www.arborg.is',
      'Municipal source. Homepage includes tender/announcement content, but no compatible RSS feed was confirmed.'
    ),
    (
      'Fjarðabyggð',
      'municipal_website',
      'https://www.fjardabyggd.is',
      'East Iceland municipal source. Announcement pages include tender notices, but no compatible RSS feed was confirmed.'
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
    when sources.name = 'Mosfellsbær Municipality' then 'connected'
    else 'planned'
  end
from public.sources
where sources.name in (
  'Kópavogur Municipality',
  'Garðabær Municipality',
  'Mosfellsbær Municipality',
  'Árborg',
  'Fjarðabyggð'
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
      'Official Kópavogur tender page. Checked /feed and /rss; both returned 404/HTML, not RSS. Keep inactive until an official feed/API is available.'
    ),
    (
      'Garðabær Municipality',
      'planned',
      'https://www.gardabaer.is',
      false,
      'planned',
      'Official Garðabær site. Checked /feed, /rss and /frettir/feed; they returned 404/HTML, not RSS. Keep inactive until an official feed/API is available.'
    ),
    (
      'Mosfellsbær Municipality',
      'rss_feed',
      'https://mos.is/feed/',
      true,
      'connected',
      'Official Mosfellsbær WordPress RSS feed. Broad municipal news feed, enabled with strict tender/procurement include keywords and strengthened noise excludes.'
    ),
    (
      'Árborg',
      'planned',
      'https://www.arborg.is/',
      false,
      'planned',
      'Official Árborg site. Checked /rss and /feed; no usable RSS feed was confirmed. Keep inactive until an official feed/API is available.'
    ),
    (
      'Fjarðabyggð',
      'planned',
      'https://www.fjardabyggd.is/tilkynningar',
      false,
      'planned',
      'Official Fjarðabyggð announcements page. Checked /rss and /feed; both returned 404, not RSS. Keep inactive until an official feed/API is available.'
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
      'fundir',
      'fundargerð',
      'bæjarráð',
      'bæjarstjórn',
      'nefnd',
      'frétt',
      'fréttir',
      'opnun',
      'opnunartími',
      'viðburður',
      'kynning',
      'tilkynning',
      'umsókn',
      'starf',
      'störf',
      'ráðning',
      'lokun',
      'umferð',
      'tafir',
      'myndband',
      'auglýsing',
      'matarúrgangur',
      'matarleifar',
      'sorp',
      'úrgangur',
      'íþrótt',
      'íþróttir',
      'menning',
      'bókasafn',
      'skóli',
      'leikskóli',
      'frístund',
      'hátíð',
      'námskeið'
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
    when public.source_connectors.enabled and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest') then public.source_connectors.connector_type
    else excluded.connector_type
  end,
  endpoint_url = case
    when public.source_connectors.enabled and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest') then public.source_connectors.endpoint_url
    else excluded.endpoint_url
  end,
  enabled = public.source_connectors.enabled or excluded.enabled,
  status = case
    when public.source_connectors.enabled and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest') then coalesce(nullif(public.source_connectors.status, ''), 'connected')
    else excluded.status
  end,
  notes = case
    when public.source_connectors.enabled and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest') then coalesce(public.source_connectors.notes, excluded.notes)
    else excluded.notes
  end,
  include_keywords = excluded.include_keywords,
  exclude_keywords = excluded.exclude_keywords,
  require_any_keyword = true,
  updated_at = now();

notify pgrst, 'reload schema';
