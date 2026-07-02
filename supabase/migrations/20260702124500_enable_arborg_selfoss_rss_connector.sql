with source_seed(name, source_type, base_url, is_active, notes) as (
  values
    (
      'Árborg',
      'municipal_website',
      'https://www.arborg.is',
      true,
      'Source intent: medium_intent_project_signal with high_intent_procurement when tender phrases are present. Region: Suðurland / Selfoss / Árborg. Relevant for contractors, jarðvinna, gatnagerð, lóðarframkvæmdir, lagnir, fráveita, malbikun, viðhald gatna and vetrarþjónusta. Use only the narrow official Tilkynningar RSS feed; do not use broad Árborg feeds or search pages. Robots.txt sets Crawl-delay: 5 and disallows search/view paths.'
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

with arborg_filters as (
  select
    array[
      'útboð',
      'utbod',
      'óskar eftir tilboðum',
      'oskar eftir tilbodum',
      'óskað eftir tilboðum',
      'oskad eftir tilbodum',
      'tilboð',
      'tilbod',
      'skilafrestur',
      'framkvæmdaverk',
      'framkvaemdaverk',
      'gatnahreinsun',
      'vetrarþjónusta',
      'vetrarthjonusta',
      'jarðvinna',
      'jardvinna',
      'gatnagerð',
      'gatnagerd',
      'lagnir',
      'fráveita',
      'fraveita',
      'dælustöð',
      'daelustod',
      'vatnsgeymir',
      'lóðarframkvæmdir',
      'lodarframkvaemdir',
      'malbikun',
      'gangstétt',
      'gangstett',
      'bílastæði',
      'bilastaedi'
    ]::text[] as include_keywords,
    array[
      'kosningar',
      'fundur',
      'viðburður',
      'vidburdur',
      'starf',
      'störf',
      'storf',
      'styrkur',
      'opnun',
      'bókasafn',
      'bokasafn',
      'menning',
      'ljósmyndakeppni',
      'ljosmyndakeppni',
      'skólastarf',
      'skolastarf',
      'íþróttir',
      'ithrottir',
      'fræðsla',
      'fraedsla'
    ]::text[] as exclude_keywords
),
connector_seed(source_name, connector_type, endpoint_url, enabled, status, notes) as (
  values
    (
      'Árborg',
      'rss_feed',
      'https://www.arborg.is/mannlif/vidburdir-og-frettir/tilkynning/rss.xml',
      true,
      'connected',
      'Active controlled Batch 2 source. Official narrow Árborg Tilkynningar RSS feed from Eplica CMS. The feed is mixed, so require strict contractor/procurement include keywords and filter obvious civic/news/culture noise. Do not use broad feeds, homepage scraping, search pages, or disallowed /leit and /search URLs.'
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
  arborg_filters.include_keywords,
  arborg_filters.exclude_keywords,
  true,
  now()
from connector_seed
join public.sources on sources.name = connector_seed.source_name
cross join arborg_filters
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
select sources.id, 'connected', now()
from public.sources
where sources.name = 'Árborg'
on conflict (source_id) do update set
  status = case
    when public.source_status.status = 'error' then public.source_status.status
    else excluded.status
  end,
  updated_at = now();

notify pgrst, 'reload schema';
