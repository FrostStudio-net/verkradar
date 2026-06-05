alter table public.source_connectors
  add column if not exists include_keywords text[] not null default array[
    'útboð',
    'utbod',
    'tilboð',
    'tilboðum',
    'óskað eftir tilboðum',
    'innkaup',
    'verðfyrirspurn',
    'verdfyrirspurn',
    'rammasamningur',
    'útboðsauglýsing'
  ]::text[],
  add column if not exists exclude_keywords text[] not null default array[
    'styrkur',
    'hlýtur styrk',
    'ársfundur',
    'kynnt',
    'frétt',
    'viðburður',
    'lokun',
    'lokanir',
    'umferð',
    'dagskrá',
    'skráning',
    'myndband',
    'ráðstefna',
    'menning',
    'bókasafn',
    'opnunartími',
    'fundargerð'
  ]::text[],
  add column if not exists require_any_keyword boolean not null default true;

update public.source_connectors
set include_keywords = array[
    'útboð',
    'utbod',
    'tilboð',
    'tilboðum',
    'óskað eftir tilboðum',
    'innkaup',
    'verðfyrirspurn',
    'verdfyrirspurn',
    'rammasamningur',
    'útboðsauglýsing'
  ]::text[],
  exclude_keywords = array[
    'styrkur',
    'hlýtur styrk',
    'ársfundur',
    'kynnt',
    'frétt',
    'viðburður',
    'lokun',
    'lokanir',
    'umferð',
    'dagskrá',
    'skráning',
    'myndband',
    'ráðstefna',
    'menning',
    'bókasafn',
    'opnunartími',
    'fundargerð'
  ]::text[],
  require_any_keyword = true,
  updated_at = now()
where connector_type in ('rss_feed', 'wordpress_rest')
  and coalesce(array_length(include_keywords, 1), 0) = 0;

notify pgrst, 'reload schema';
