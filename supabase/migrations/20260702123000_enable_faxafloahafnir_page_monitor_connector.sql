-- Enable Faxaflóahafnir's narrow public tender page now that the importer has
-- a source-specific page_monitor_allowed parser for /utbod.

with source_row as (
  insert into public.sources (
    name,
    source_type,
    base_url,
    notes,
    is_active,
    created_at
  )
  values (
    'Faxaflóahafnir útboð',
    'tender_portal',
    'https://www.faxafloahafnir.is',
    'High-intent public harbor tender page for Faxaflóahafnir. Enabled with a narrow source-specific page monitor parser for https://www.faxafloahafnir.is/utbod only.',
    true,
    now()
  )
  on conflict (name) do update set
    source_type = excluded.source_type,
    base_url = excluded.base_url,
    notes = excluded.notes,
    is_active = true
  returning id
),
procurement_filters as (
  select
    array[
      'útboð',
      'utbod',
      'útboðsauglýsing',
      'tilboð',
      'tilboðum',
      'óskað eftir tilboðum',
      'verðfyrirspurn',
      'innkaup',
      'rammasamningur',
      'framkvæmdir',
      'hafnarframkvæmdir',
      'viðhald',
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
      'myndband'
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
  source_row.id,
  'page_monitor_allowed',
  'https://www.faxafloahafnir.is/utbod',
  true,
  'connected',
  'Active controlled source. Parser fetches only the official Faxaflóahafnir tender listing page and linked /utbod detail pages. It does not crawl broad news or the wider site.',
  procurement_filters.include_keywords,
  procurement_filters.exclude_keywords,
  true,
  now()
from source_row
cross join procurement_filters
on conflict (source_id) do update set
  connector_type = excluded.connector_type,
  endpoint_url = excluded.endpoint_url,
  enabled = true,
  status = 'connected',
  notes = excluded.notes,
  include_keywords = excluded.include_keywords,
  exclude_keywords = excluded.exclude_keywords,
  require_any_keyword = true,
  updated_at = now();

insert into public.source_status (source_id, status, updated_at)
select id, 'connected', now()
from public.sources
where name = 'Faxaflóahafnir útboð'
on conflict (source_id) do update set
  status = case
    when public.source_status.status = 'error' then public.source_status.status
    else excluded.status
  end,
  updated_at = now();

notify pgrst, 'reload schema';
