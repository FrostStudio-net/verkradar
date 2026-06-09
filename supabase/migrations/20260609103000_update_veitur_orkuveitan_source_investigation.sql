-- Record the latest Veitur / Orkuveitan source investigation without enabling scraping.
-- Safe/idempotent: updates existing canonical source rows and keeps connectors disabled.

with source_seed(name, source_type, base_url, notes) as (
  values
    (
      'Veitur',
      'public_institution_page',
      'https://www.veitur.is',
      'Veitur procurement page is public and states Orkuveitan handles tenders for Veitur and other subsidiaries. No Veitur-specific RSS/API/JSON endpoint or tender list was confirmed. Keep planned/disabled.'
    ),
    (
      'Orkuveita/Reykjavik Energy tender portal',
      'public_institution_page',
      'https://www.orkuveitan.is',
      'Official Orkuveitan procurement page is public and points to the Reykjavik Energy In-Tend portal. In-Tend current tender rows are loaded via an AJAX service that returned 401 to direct and cookie-backed requests. Keep planned/disabled until explicit permission or an official API/feed is available.'
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

with connector_seed(
  source_name,
  connector_type,
  endpoint_url,
  enabled,
  status,
  include_keywords,
  exclude_keywords,
  require_any_keyword,
  notes
) as (
  values
    (
      'Veitur',
      'planned',
      'https://www.veitur.is/utbod',
      false,
      'planned',
      array[
        'rafmagn',
        'lagnir',
        'fráveita',
        'fraveita',
        'vatn',
        'hitaveita',
        'viðhald',
        'vidhald',
        'framkvæmdir',
        'framkvaemdir',
        'jarðvinna',
        'jardvinna',
        'ráðgjöf',
        'radgjof',
        'útboð',
        'utbod',
        'tilboð',
        'tilbod',
        'verðfyrirspurn',
        'verdfyrirspurn',
        'rammasamningur'
      ],
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
        'kynning',
        'störf',
        'storf',
        'starf'
      ],
      true,
      'Public Veitur procurement page is informational only and points to Orkuveitan. No compatible Veitur RSS/API/JSON endpoint found; do not page-monitor because it would only create a generic portal lead.'
    ),
    (
      'Orkuveita/Reykjavik Energy tender portal',
      'planned',
      'https://www.orkuveitan.is/orkuveitan/innkaup/utbod/',
      false,
      'planned',
      array[
        'rafmagn',
        'lagnir',
        'fráveita',
        'fraveita',
        'vatn',
        'hitaveita',
        'viðhald',
        'vidhald',
        'framkvæmdir',
        'framkvaemdir',
        'jarðvinna',
        'jardvinna',
        'ráðgjöf',
        'radgjof',
        'útboð',
        'utbod',
        'tilboð',
        'tilbod',
        'verðfyrirspurn',
        'verdfyrirspurn',
        'rammasamningur'
      ],
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
        'kynning',
        'störf',
        'storf',
        'starf'
      ],
      true,
      'Official procurement page points to In-Tend at https://in-tendhost.co.uk/reykjavikenergy/aspx/Home. The static page does not list individual tenders; In-Tend current/forthcoming rows are loaded via protected AJAX services, so no safe connector is enabled.'
    )
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
  sources.id,
  connector_seed.connector_type,
  connector_seed.endpoint_url,
  connector_seed.enabled,
  connector_seed.status,
  connector_seed.include_keywords,
  connector_seed.exclude_keywords,
  connector_seed.require_any_keyword,
  connector_seed.notes,
  now()
from connector_seed
join public.sources on sources.name = connector_seed.source_name
on conflict (source_id) do update set
  connector_type = case
    when public.source_connectors.enabled
      and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest', 'ted_api', 'page_monitor_allowed', 'official_api')
      then public.source_connectors.connector_type
    else excluded.connector_type
  end,
  endpoint_url = case
    when public.source_connectors.enabled
      and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest', 'ted_api', 'page_monitor_allowed', 'official_api')
      then public.source_connectors.endpoint_url
    else excluded.endpoint_url
  end,
  enabled = public.source_connectors.enabled
    and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest', 'ted_api', 'page_monitor_allowed', 'official_api'),
  status = case
    when public.source_connectors.enabled
      and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest', 'ted_api', 'page_monitor_allowed', 'official_api')
      then public.source_connectors.status
    else excluded.status
  end,
  include_keywords = excluded.include_keywords,
  exclude_keywords = excluded.exclude_keywords,
  require_any_keyword = excluded.require_any_keyword,
  notes = case
    when public.source_connectors.enabled
      and public.source_connectors.connector_type in ('rss_feed', 'wordpress_rest', 'ted_api', 'page_monitor_allowed', 'official_api')
      then public.source_connectors.notes
    else excluded.notes
  end,
  updated_at = now();

insert into public.source_status (source_id, status, updated_at)
select sources.id, 'planned', now()
from public.sources
where sources.name in ('Veitur', 'Orkuveita/Reykjavik Energy tender portal')
on conflict (source_id) do update set
  status = case
    when public.source_status.status in ('connected', 'success', 'running', 'error') then public.source_status.status
    else 'planned'
  end,
  updated_at = now();

notify pgrst, 'reload schema';
