with source_upsert as (
  insert into public.sources (name, source_type, base_url, is_active, notes)
  values (
    'Ríkiskaup / island.is procurement',
    'tender_portal',
    'https://island.is/utbodsvefur',
    true,
    'Central Icelandic public procurement source. island.is identifies Útboðsvefur.is as the public tender portal managed by Fjársýslan; automatic import uses the official WordPress REST endpoint at utbodsvefur.is.'
  )
  on conflict (name) do update set
    source_type = excluded.source_type,
    base_url = excluded.base_url,
    is_active = true,
    notes = excluded.notes
  returning id
)
insert into public.source_status (source_id, status, last_error, updated_at)
select id, 'connected', null, now()
from source_upsert
on conflict (source_id) do update set
  status = case
    when public.source_status.status = 'error' then 'connected'
    else coalesce(nullif(public.source_status.status, ''), 'connected')
  end,
  last_error = case
    when public.source_status.status = 'error' then null
    else public.source_status.last_error
  end,
  updated_at = now();

with connector_filters as (
  select
    array[
      'útboð',
      'utbod',
      'útboðsauglýsing',
      'tilboð',
      'tilboðum',
      'óskað eftir tilboðum',
      'oskad eftir tilbodum',
      'verðfyrirspurn',
      'verdfyrirspurn',
      'innkaup',
      'samningskaup',
      'rammasamningur',
      'forval',
      'markaðskönnun',
      'markadskonnun',
      'framkvæmdir',
      'framkvaemdir',
      'þjónusta',
      'thjonusta',
      'ráðgjöf',
      'radgjof'
    ]::text[] as include_keywords,
    array[
      'frétt',
      'frett',
      'kynning',
      'viðburður',
      'vidburdur',
      'fundur'
    ]::text[] as exclude_keywords
),
source_row as (
  select id
  from public.sources
  where name = 'Ríkiskaup / island.is procurement'
)
insert into public.source_connectors (
  source_id,
  connector_type,
  endpoint_url,
  enabled,
  status,
  include_keywords,
  exclude_keywords,
  require_any_keyword,
  notes,
  updated_at
)
select
  source_row.id,
  'wordpress_rest',
  'https://utbodsvefur.is/wp-json/wp/v2/posts',
  true,
  'connected',
  connector_filters.include_keywords,
  connector_filters.exclude_keywords,
  true,
  'Enabled through the official WordPress REST endpoint advertised by utbodsvefur.is. This is a central public tender portal referenced from island.is/Ríkiskaup pages. The endpoint provides title, link, publication date, category terms and embedded author/buyer; detailed descriptions and deadlines may be sparse and should be verified on the source page.',
  now()
from source_row
cross join connector_filters
on conflict (source_id) do update set
  connector_type = excluded.connector_type,
  endpoint_url = excluded.endpoint_url,
  enabled = true,
  status = 'connected',
  include_keywords = excluded.include_keywords,
  exclude_keywords = excluded.exclude_keywords,
  require_any_keyword = excluded.require_any_keyword,
  notes = excluded.notes,
  updated_at = now();
