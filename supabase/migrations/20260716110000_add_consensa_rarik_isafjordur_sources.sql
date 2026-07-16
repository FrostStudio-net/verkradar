with source_seed(name, source_type, base_url, is_active, notes) as (
  values
    (
      'Consensa',
      'tender_portal',
      'https://www.consensa.is/utbod',
      true,
      'Tender portal investigated July 2026. robots.txt allows crawling and the sitemap exposes project URLs, but current tender fields such as buyer, tender number, deadline and Tendsign link are rendered from Wix/CMS data that is not present in server-side HTML and no official RSS/API endpoint was confirmed. Keep disabled until Consensa provides a machine-readable endpoint or explicit permission.'
    ),
    (
      'Ísafjarðarbær',
      'municipal_website',
      'https://www.isafjordur.is/is/umhverfi/skipulag/utbod-frettir/',
      true,
      'Municipal procurement and project announcements. Official Moya RSS category feed /is/feed/7 is advertised from the Útboð og framkvæmdir page. robots.txt permits the path and asks for Crawl-delay: 5.'
    ),
    (
      'RARIK',
      'public_institution_page',
      'https://utbod.rarik.is/aspx/Tenders/Current',
      true,
      'RARIK In-Tend procurement portal investigated July 2026. The current tenders page presents automated-traffic protection and no official RSS/API/sitemap procurement endpoint was confirmed. Do not scrape or bypass the challenge; use TED/Útboðsvefur overlap or request an official feed/permission.'
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

insert into public.source_status (source_id, status, updated_at)
select sources.id,
  case
    when sources.name = 'Ísafjarðarbær' then 'connected'
    else 'permission_required'
  end,
  now()
from public.sources
where sources.name in ('Consensa', 'Ísafjarðarbær', 'RARIK')
on conflict (source_id) do update set
  status = case
    when public.source_status.status in ('running', 'error') then public.source_status.status
    when excluded.status = 'connected' then 'connected'
    else excluded.status
  end,
  updated_at = now();

with connector_seed(source_name, connector_type, endpoint_url, enabled, status, notes) as (
  values
    (
      'Consensa',
      'permission_required',
      'https://www.consensa.is/utbod',
      false,
      'permission_required',
      'robots.txt allows crawling and project URLs are listed in the Wix sitemap, but tender metadata is not exposed in server-rendered HTML and no official structured endpoint was found. Disabled to avoid brittle JS/Wix scraping; request an official endpoint or permission before enabling.'
    ),
    (
      'Ísafjarðarbær',
      'rss_feed',
      'https://www.isafjordur.is/is/feed/7',
      true,
      'connected',
      'Official RSS feed for the Útboð og framkvæmdir category. Items are imported with strict procurement keywords; detail pages remain linked as the source of truth. Missing-deadline safety keeps items out of client alerts until a bid deadline is available or manually reviewed.'
    ),
    (
      'RARIK',
      'permission_required',
      'https://utbod.rarik.is/aspx/Tenders/Current',
      false,
      'permission_required',
      'In-Tend current tenders page is protected by automated-traffic controls and no safe public RSS/API endpoint was confirmed. Disabled; do not bypass anti-bot protection.'
    )
),
connector_filters as (
  select
    array[
      'útboð',
      'utbod',
      'útboðs',
      'utbods',
      'tilboð',
      'tilboðum',
      'tilboðin',
      'óskar eftir tilboðum',
      'óska eftir tilboðum',
      'verðkönnun',
      'verdkonnun',
      'verðfyrirspurn',
      'verdfyrirspurn',
      'framkvæmdir',
      'framkvæmd',
      'lagnir',
      'fráveita',
      'hafnir',
      'dýpkun',
      'malbikun',
      'þakviðgerðir',
      'slökkvistöð',
      'girðing'
    ]::text[] as include_keywords,
    array[
      'kosningar',
      'fundargerð',
      'fundargerd',
      'bæjarráð',
      'baejarrad',
      'bæjarstjórn',
      'baejarstjorn',
      'nefnd',
      'opnunartími',
      'opnunartimi',
      'viðburður',
      'vidburdur',
      'menningarviðburður',
      'menningarvidburdur',
      'íþróttaviðburður',
      'ithrottavidburdur',
      'styrkur',
      'styrkir',
      'starf',
      'störf',
      'radning',
      'ráðning',
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
  connector_type = excluded.connector_type,
  endpoint_url = excluded.endpoint_url,
  enabled = excluded.enabled,
  status = excluded.status,
  notes = excluded.notes,
  include_keywords = excluded.include_keywords,
  exclude_keywords = excluded.exclude_keywords,
  require_any_keyword = excluded.require_any_keyword,
  updated_at = now();
