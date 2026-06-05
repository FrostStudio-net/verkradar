update public.source_connectors
set
  include_keywords = array[
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
where connector_type in ('rss_feed', 'wordpress_rest');

notify pgrst, 'reload schema';
