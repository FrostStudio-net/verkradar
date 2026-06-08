with source_upsert as (
  insert into public.sources (name, source_type, base_url, is_active, notes)
  values (
    'FSRE / Framkvæmdasýslan - Ríkiseignir',
    'public_institution_page',
    'https://island.is/s/fsre',
    true,
    'High-value public construction/building tenders source. Direct fsre.is pages currently redirect through island.is or block legacy access; no safe direct RSS/API/WordPress endpoint is confirmed. FSRE tenders should be captured through the central Útboðsvefur/Ríkiskaup connector when they are published there.'
  )
  on conflict (name) do update set
    source_type = excluded.source_type,
    base_url = excluded.base_url,
    is_active = true,
    notes = excluded.notes
  returning id
),
connector_filters as (
  select
    array[
      'útboð',
      'utbod',
      'útboðsauglýsing',
      'utbodsauglysing',
      'framkvæmdir',
      'framkvaemdir',
      'framkvæmd',
      'framkvaemd',
      'viðhald',
      'vidhald',
      'verk',
      'bygging',
      'endurbætur',
      'endurbaetur',
      'hönnun',
      'honnun',
      'ráðgjöf',
      'radgjof',
      'eftirlit',
      'tilboð',
      'tilbod',
      'tilboðum',
      'tilbodum',
      'verðfyrirspurn',
      'verdfyrirspurn',
      'rammasamningur',
      'forval',
      'markaðskönnun',
      'markadskonnun'
    ]::text[] as include_keywords,
    array[
      'frétt',
      'frett',
      'kynning',
      'viðburður',
      'vidburdur',
      'fundur',
      'starf',
      'starfsumsókn',
      'starfsumsokn',
      'störf',
      'storf'
    ]::text[] as exclude_keywords
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
  source_upsert.id,
  'planned',
  'https://www.fsre.is/auglysingar/utbod-og-sala',
  false,
  'planned',
  connector_filters.include_keywords,
  connector_filters.exclude_keywords,
  true,
  'Direct FSRE connector remains disabled. www.fsre.is currently redirects through island.is and the planned tender URL returns 404; gamli.fsre.is tender, RSS, REST and sitemap checks return 403; no compatible direct RSS/API/WordPress endpoint is confirmed. FSRE page text says larger tenders are published on Útboðsvefur, which VerkRadar already imports through the Ríkiskaup / island.is procurement connector.',
  now()
from source_upsert
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
  enabled = public.source_connectors.enabled,
  status = case
    when public.source_connectors.enabled then public.source_connectors.status
    else excluded.status
  end,
  include_keywords = excluded.include_keywords,
  exclude_keywords = excluded.exclude_keywords,
  require_any_keyword = excluded.require_any_keyword,
  notes = case
    when public.source_connectors.enabled then public.source_connectors.notes
    else excluded.notes
  end,
  updated_at = now();

insert into public.source_status (source_id, status, updated_at)
select id, 'planned', now()
from public.sources
where name = 'FSRE / Framkvæmdasýslan - Ríkiseignir'
on conflict (source_id) do update set
  status = case
    when public.source_status.status in ('connected', 'success', 'running', 'error') then public.source_status.status
    else 'planned'
  end,
  updated_at = now();

notify pgrst, 'reload schema';
