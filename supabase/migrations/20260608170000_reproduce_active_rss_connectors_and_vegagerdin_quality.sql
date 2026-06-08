with source_seed(name, source_type, base_url, notes) as (
  values
    (
      'Akureyri Municipality',
      'municipal_website',
      'https://www.akureyri.is',
      'Active municipal RSS source. Imports broad Akureyri news/announcements and relies on strict tender/construction keyword filters.'
    ),
    (
      'Hafnarfjörður Municipality',
      'municipal_website',
      'https://www.hafnarfjordur.is',
      'Active municipal RSS source. Imports broad Hafnarfjörður news/announcements and relies on strict tender/construction keyword filters.'
    ),
    (
      'Múlaþing',
      'municipal_website',
      'https://www.mulathing.is',
      'Active East Iceland municipal RSS source. Imports announcements and tender-like notices with strict keyword filters.'
    ),
    (
      'Reykjanesbær',
      'municipal_website',
      'https://www.reykjanesbaer.is',
      'Active municipal RSS source. Imports Reykjanesbær announcements and tender-like notices with strict keyword filters.'
    ),
    (
      'Vegagerðin',
      'public_institution_page',
      'https://www.vegagerdin.is',
      'Active road authority RSS source. Imports broad Vegagerðin news/project notices; classification keeps clear tenders and early contractor signals separate from traffic/news noise.'
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

insert into public.source_status (source_id, status, updated_at)
select id, 'connected', now()
from public.sources
where name in (
  'Akureyri Municipality',
  'Hafnarfjörður Municipality',
  'Múlaþing',
  'Reykjanesbær',
  'Vegagerðin'
)
on conflict (source_id) do update set
  status = case
    when public.source_status.status = 'error' then public.source_status.status
    else 'connected'
  end,
  updated_at = now();

with connector_seed(source_name, endpoint_url, notes) as (
  values
    (
      'Akureyri Municipality',
      'https://www.akureyri.is/feed',
      'Official Akureyri RSS feed. Broad municipal news feed, enabled with strict tender/construction filters.'
    ),
    (
      'Hafnarfjörður Municipality',
      'https://hafnarfjordur.is/feed/',
      'Official Hafnarfjörður RSS feed. Broad municipal news feed, enabled with strict tender/construction filters.'
    ),
    (
      'Múlaþing',
      'https://www.mulathing.is/feed',
      'Official Múlaþing RSS feed. Broad municipal announcements feed, enabled with strict tender/construction filters.'
    ),
    (
      'Reykjanesbær',
      'https://www.reykjanesbaer.is/feed',
      'Official Reykjanesbær RSS feed. Broad municipal announcements feed, enabled with strict tender/construction filters.'
    ),
    (
      'Vegagerðin',
      'https://www.vegagerdin.is/rss.xml',
      'Official Vegagerðin RSS feed advertised on the news site. Broad road authority news feed; enabled with stricter procurement and contractor early-signal filters.'
    )
),
default_filters as (
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
      'senn í útboð',
      'senn i utbod',
      'fyrirhugaðar framkvæmdir',
      'fyrirhugadar framkvaemdir',
      'áætlaðar framkvæmdir',
      'aaetladar framkvaemdir',
      'framkvæmdir hefjast',
      'framkvaemdir hefjast',
      'malbikunarframkvæmdir',
      'malbikunarframkvaemdir',
      'vegaframkvæmdir',
      'vegaframkvaemdir',
      'brúargerð',
      'bruargerd',
      'jarðvinna',
      'jardvinna',
      'gatnagerð',
      'gatnagerd'
    ]::text[] as include_keywords,
    array[
      'styrkur',
      'styrkir',
      'hlýtur styrk',
      'hlytur styrk',
      'ársfundur',
      'arsfundur',
      'frétt',
      'frett',
      'fréttir',
      'frettir',
      'viðburður',
      'vidburdur',
      'lokun',
      'lokanir',
      'tafir',
      'umferð',
      'umferd',
      'dagskrá',
      'dagskra',
      'skráning',
      'skraning',
      'myndband',
      'ráðstefna',
      'radstefna',
      'menning',
      'bókasafn',
      'bokasafn',
      'opnunartími',
      'opnunartimi',
      'fundargerð',
      'fundargerd',
      'kynningarfundur',
      'fundur',
      'fjölskylduganga',
      'fjolskylduganga'
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
  sources.id,
  'rss_feed',
  connector_seed.endpoint_url,
  true,
  'connected',
  default_filters.include_keywords,
  default_filters.exclude_keywords,
  true,
  connector_seed.notes,
  now()
from connector_seed
join public.sources on sources.name = connector_seed.source_name
cross join default_filters
on conflict (source_id) do update set
  connector_type = 'rss_feed',
  endpoint_url = excluded.endpoint_url,
  enabled = true,
  status = case
    when public.source_connectors.status = 'error' then 'error'
    else 'connected'
  end,
  include_keywords = excluded.include_keywords,
  exclude_keywords = excluded.exclude_keywords,
  require_any_keyword = true,
  notes = excluded.notes,
  updated_at = now();

-- Reclassify existing Vegagerðin rows so current dashboards/admin counts do not
-- depend on waiting for the next import run.
with vegagerdin_source as (
  select id
  from public.sources
  where name = 'Vegagerðin'
),
classified as (
  select
    opportunities.id,
    case
      when lower(coalesce(opportunities.title, '') || ' ' || coalesce(opportunities.description, '')) ~
        '(senn í útboð|senn i utbod)'
      then 'early_signal'
      when lower(coalesce(opportunities.title, '') || ' ' || coalesce(opportunities.description, '')) ~
        '(útboð|utbod|útboðsauglýsing|utbodsauglysing|óskað eftir tilboðum|oskad eftir tilbodum|tilboð|tilbod|verðfyrirspurn|verdfyrirspurn|rammasamningur|forval)'
      then 'confirmed_tender'
      when lower(coalesce(opportunities.title, '') || ' ' || coalesce(opportunities.description, '')) ~
        '(senn í útboð|senn i utbod|fyrirhugaðar framkvæmdir|fyrirhugadar framkvaemdir|áætlaðar framkvæmdir|aaetladar framkvaemdir|framkvæmdir hefjast|framkvaemdir hefjast|malbikunarframkvæmdir|malbikunarframkvaemdir|vegaframkvæmdir|vegaframkvaemdir|brúargerð|bruargerd|jarðvinna|jardvinna|gatnagerð|gatnagerd)'
      then 'early_signal'
      else 'needs_review'
    end as quality_status
  from public.opportunities
  join vegagerdin_source on opportunities.source_id = vegagerdin_source.id
)
update public.opportunities
set raw_payload = jsonb_set(
    coalesce(raw_payload, '{}'::jsonb),
    '{quality_status}',
    to_jsonb(classified.quality_status),
    true
  ),
  updated_at = now()
from classified
where opportunities.id = classified.id;

notify pgrst, 'reload schema';
