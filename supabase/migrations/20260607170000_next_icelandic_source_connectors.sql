alter table public.source_connectors
  add column if not exists include_keywords text[] not null default array[
    'útboð',
    'utbod',
    'tilboð',
    'innkaup',
    'verðfyrirspurn',
    'verdfyrirspurn',
    'rammasamningur',
    'útboðsauglýsing'
  ],
  add column if not exists exclude_keywords text[] not null default array[
    'styrkur',
    'ársfundur',
    'frétt',
    'viðburður',
    'fundargerð'
  ],
  add column if not exists require_any_keyword boolean not null default true;

insert into public.sources (name, source_type, base_url, notes)
values
  (
    'RARIK',
    'public_institution_page',
    'https://www.rarik.is',
    'Electric utility source coverage. No compatible RSS or WordPress REST endpoint confirmed yet.'
  )
on conflict (name) do update set
  source_type = excluded.source_type,
  base_url = excluded.base_url,
  notes = excluded.notes;

insert into public.source_status (source_id, status)
select id, 'planned'
from public.sources
where name = 'RARIK'
on conflict (source_id) do nothing;

with connector_seed as (
  select *
  from (
    values
      (
        'Háskóli Íslands',
        'rss_feed',
        'https://hi.is/frettir/18551/feed',
        true,
        'connected',
        'Official Háskóli Íslands RSS stream listed on https://www.hi.is/haskolinn/rss_straumar_haskola_islands. Broad university news feed, enabled only with strict procurement and construction keyword filters. Event feeds are intentionally not enabled because they are too noisy.'
      ),
      (
        'Fjarðabyggð',
        'planned',
        'https://www.fjardabyggd.is',
        false,
        'planned',
        'Checked generic RSS/feed paths and homepage metadata. No compatible official RSS, WordPress REST, or machine-readable procurement endpoint found. Keep disabled until an official endpoint or permission is available.'
      ),
      (
        'Árborg',
        'planned',
        'https://www.arborg.is',
        false,
        'planned',
        'Checked generic RSS/feed paths and homepage metadata. No compatible official RSS, WordPress REST, or machine-readable procurement endpoint found. Keep disabled until an official endpoint or permission is available.'
      ),
      (
        'Kópavogur Municipality',
        'planned',
        'https://www.kopavogur.is',
        false,
        'planned',
        'Checked generic RSS/feed paths and homepage metadata. No compatible official RSS, WordPress REST, or machine-readable procurement endpoint found for the existing importer. Keep disabled to avoid aggressive crawling.'
      ),
      (
        'Landspítali',
        'planned',
        'https://www.landspitali.is',
        false,
        'planned',
        'Checked generic RSS/feed paths and homepage metadata. Public pages redirect through island.is style content and no compatible procurement feed or API was confirmed. Keep disabled until an official endpoint is available.'
      ),
      (
        'Isavia/Keflavik procurement',
        'permission_required',
        'https://www.isavia.is',
        false,
        'permission_required',
        'Checked generic RSS/feed paths and homepage metadata. No compatible official procurement feed or API was confirmed. Tender pages should not be crawled without an allowed endpoint or explicit permission.'
      ),
      (
        'Landsnet',
        'planned',
        'https://www.landsnet.is',
        false,
        'planned',
        'Checked generic RSS/feed paths and homepage metadata. No compatible official RSS, WordPress REST, or machine-readable procurement endpoint found. Keep disabled until an official endpoint is available.'
      ),
      (
        'Orkuveita/Reykjavik Energy tender portal',
        'permission_required',
        'https://www.or.is',
        false,
        'permission_required',
        'Checked generic RSS/feed paths and homepage metadata. No compatible importer-safe procurement feed or API was confirmed. Keep disabled unless Orkuveita provides an official endpoint or permission.'
      ),
      (
        'Veitur',
        'planned',
        'https://www.veitur.is',
        false,
        'planned',
        'Checked generic RSS/feed paths and homepage metadata. No compatible official RSS, WordPress REST, or procurement API found for the existing importer. Keep disabled to avoid aggressive crawling.'
      ),
      (
        'RARIK',
        'planned',
        'https://www.rarik.is',
        false,
        'planned',
        'Checked /rss and /feed paths. They return HTML rather than RSS, so this is not compatible with the current RSS importer. Keep disabled until an official feed or API is available.'
      ),
      (
        'Reykjavík tender portal',
        'permission_required',
        'https://reykjavik.is',
        false,
        'permission_required',
        'Checked generic RSS/feed paths and homepage metadata. No compatible official procurement RSS, WordPress REST, or API endpoint confirmed. Keep disabled unless an official machine-readable endpoint or permission is available.'
      )
  ) as seed(source_name, connector_type, endpoint_url, enabled, status, notes)
),
strict_filters as (
  select
    array[
      'útboð',
      'utbod',
      'óskað eftir tilboðum',
      'oskad eftir tilbodum',
      'tilboð',
      'innkaup',
      'verðfyrirspurn',
      'verdfyrirspurn',
      'rammasamningur',
      'senn í útboð',
      'senn i utbod',
      'framkvæmdir',
      'framkvæmd',
      'vegaframkvæmdir',
      'malbikunarframkvæmdir',
      'gatnagerð',
      'viðhald'
    ]::text[] as include_keywords,
    array[
      'fundargerð',
      'fundargerd',
      'bæjarráð',
      'baejarrad',
      'bæjarstjórn',
      'baejarstjorn',
      'nefnd',
      'kosningar',
      'opnunartími',
      'viðburður',
      'menningarviðburður',
      'íþróttaviðburður',
      'styrkur',
      'styrkir',
      'bókasafn',
      'safn',
      'ársfundur',
      'ráðstefna',
      'lokun',
      'tafir',
      'umferð',
      'myndband',
      'kynning'
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
  strict_filters.include_keywords,
  strict_filters.exclude_keywords,
  true,
  now()
from connector_seed
join public.sources on public.sources.name = connector_seed.source_name
cross join strict_filters
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
