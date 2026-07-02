with source_seed(name, source_type, base_url, is_active, notes) as (
  values
    (
      'Akranes útboð',
      'municipal_website',
      'https://www.akranes.is',
      true,
      'Source intent: high_intent_procurement. Region: Vesturland / Akranes. Relevant for contractors, jarðvinna, gatnagerð, lóðarframkvæmdir, lagnavinna, malbikun and viðhald. Official category-specific tender RSS; avoid the broad Akranes municipal news feed.'
    ),
    (
      'Borgarbyggð útboð',
      'municipal_website',
      'https://www.borgarbyggd.is',
      true,
      'Source intent: high_intent_procurement. Region: Vesturland / Borgarnes / Borgarbyggð. Relevant for contractors, jarðvinna, gatnagerð, lóðarframkvæmdir, lagnavinna, malbikun and viðhald. Official WordPress REST category for Útboð; avoid the broad posts endpoint.'
    ),
    (
      'Faxaflóahafnir útboð',
      'public_institution_page',
      'https://www.faxafloahafnir.is',
      true,
      'Source intent: high_intent_procurement. Region: Höfuðborgarsvæðið / hafnir. Relevant for contractors, jarðvinna, gatnagerð, lagnavinna, malbikun, hafnarframkvæmdir and viðhald. Narrow public tender page, but not plug-and-play; needs a source-specific parser before enabling.'
    )
)
insert into public.sources (name, source_type, base_url, is_active, notes)
select name, source_type, base_url, is_active, notes
from source_seed
on conflict (name) do update set
  source_type = excluded.source_type,
  base_url = excluded.base_url,
  is_active = excluded.is_active,
  notes = excluded.notes;

with procurement_filters as (
  select
    array[
      'útboð',
      'utbod',
      'útboðsauglýsing',
      'utbodsauglysing',
      'óskað eftir tilboðum',
      'oskad eftir tilbodum',
      'tilboð',
      'tilbod',
      'tilboðum',
      'tilbodum',
      'verðfyrirspurn',
      'verdfyrirspurn',
      'rammasamningur',
      'forval',
      'skilafrestur',
      'útboðsgögn',
      'utbodsgogn',
      'framkvæmdir',
      'framkvaemdir',
      'viðhald',
      'vidhald',
      'gatnagerð',
      'gatnagerd',
      'lóðarframkvæmdir',
      'lodarframkvaemdir',
      'lagnir',
      'malbikun',
      'jarðvinna',
      'jardvinna'
    ]::text[] as include_keywords,
    array[
      'fundur',
      'fundargerð',
      'fundargerd',
      'frétt',
      'frett',
      'fréttir',
      'frettir',
      'viðburður',
      'vidburdur',
      'menning',
      'skóli',
      'skoli',
      'opnun',
      'lokun',
      'lokanir',
      'umferð',
      'umferd',
      'kynning',
      'umsókn',
      'umsokn',
      'starf',
      'störf',
      'storf',
      'myndband',
      'auglýsing',
      'auglysing'
    ]::text[] as exclude_keywords
),
connector_seed(source_name, connector_type, endpoint_url, enabled, status, notes) as (
  values
    (
      'Akranes útboð',
      'rss_feed',
      'https://www.akranes.is/is/feed/7',
      true,
      'connected',
      'Active controlled source. Official Akranes category-specific tender RSS (RSS - Útboð). Do not use https://www.akranes.is/is/feed because it is broad municipal news.'
    ),
    (
      'Borgarbyggð útboð',
      'wordpress_rest',
      'https://dev.borgarbyggd.is/wp-json/wp/v2/posts?categories=177',
      true,
      'connected',
      'Active controlled source. Official WordPress REST category for Útboð. Do not use the broad posts endpoint without the categories=177 filter.'
    ),
    (
      'Faxaflóahafnir útboð',
      'page_monitor_allowed',
      'https://www.faxafloahafnir.is/utbod',
      false,
      'planned',
      'Planned only. Narrow public tender page, but the current importer needs a source-specific parser before this connector can be enabled safely.'
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
  procurement_filters.include_keywords,
  procurement_filters.exclude_keywords,
  true,
  now()
from connector_seed
join public.sources on sources.name = connector_seed.source_name
cross join procurement_filters
on conflict (source_id) do update set
  connector_type = excluded.connector_type,
  endpoint_url = excluded.endpoint_url,
  enabled = excluded.enabled,
  status = excluded.status,
  notes = excluded.notes,
  include_keywords = excluded.include_keywords,
  exclude_keywords = excluded.exclude_keywords,
  require_any_keyword = true,
  updated_at = now();

insert into public.source_status (source_id, status, updated_at)
select
  sources.id,
  case
    when sources.name in ('Akranes útboð', 'Borgarbyggð útboð') then 'connected'
    else 'planned'
  end,
  now()
from public.sources
where sources.name in ('Akranes útboð', 'Borgarbyggð útboð', 'Faxaflóahafnir útboð')
on conflict (source_id) do update set
  status = case
    when public.source_status.status = 'error' then public.source_status.status
    else excluded.status
  end,
  updated_at = now();

notify pgrst, 'reload schema';
