create table if not exists public.source_connectors (
  source_id uuid primary key references public.sources(id) on delete cascade,
  connector_type text not null default 'planned' check (
    connector_type in (
      'ted_api',
      'rss_feed',
      'wordpress_rest',
      'official_api',
      'page_monitor_allowed',
      'manual_fallback',
      'planned',
      'permission_required'
    )
  ),
  endpoint_url text,
  enabled boolean not null default false,
  status text not null default 'planned',
  last_checked_at timestamptz,
  last_success_at timestamptz,
  last_error text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists source_connectors_type_enabled_idx
  on public.source_connectors (connector_type, enabled);

alter table public.source_connectors enable row level security;

drop policy if exists "Admins manage source connectors" on public.source_connectors;
drop policy if exists "Authenticated users read source connectors" on public.source_connectors;

create policy "Authenticated users read source connectors"
  on public.source_connectors
  for select
  to authenticated
  using (true);

create policy "Admins manage source connectors"
  on public.source_connectors
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

with connector_seed(source_name, connector_type, endpoint_url, enabled, status, notes) as (
  values
    (
      'TED Iceland/Nordic',
      'ted_api',
      'https://api.ted.europa.eu/v3/notices/search',
      true,
      'connected',
      'Handled by the dedicated TED Edge Function.'
    ),
    (
      'Útboðsvefur.is',
      'permission_required',
      'https://utbodsvefur.is/feed/',
      false,
      'permission_required',
      'Public WordPress/RSS endpoints exist, but robots.txt disallows crawling. Do not import until permission or official endpoint is confirmed.'
    ),
    (
      'Ríkiskaup / island.is procurement',
      'official_api',
      'https://island.is',
      false,
      'planned',
      'Official connector planned.'
    ),
    (
      'Private/manual leads',
      'manual_fallback',
      null,
      false,
      'manual_fallback',
      'Admin fallback only. Not the main lead collection path.'
    )
)
insert into public.source_connectors (
  source_id,
  connector_type,
  endpoint_url,
  enabled,
  status,
  notes,
  updated_at
)
select
  sources.id,
  connector_seed.connector_type,
  connector_seed.endpoint_url,
  connector_seed.enabled,
  connector_seed.status,
  connector_seed.notes,
  now()
from connector_seed
join public.sources on sources.name = connector_seed.source_name
on conflict (source_id) do update set
  connector_type = excluded.connector_type,
  endpoint_url = excluded.endpoint_url,
  enabled = excluded.enabled,
  status = excluded.status,
  notes = excluded.notes,
  updated_at = now();

insert into public.source_connectors (
  source_id,
  connector_type,
  endpoint_url,
  enabled,
  status,
  notes,
  updated_at
)
select
  sources.id,
  case
    when sources.source_type = 'private_manual' or sources.source_type = 'manual' then 'manual_fallback'
    else 'planned'
  end,
  sources.base_url,
  false,
  case
    when sources.source_type = 'private_manual' or sources.source_type = 'manual' then 'manual_fallback'
    else 'planned'
  end,
  coalesce(sources.notes, 'Connector planned.'),
  now()
from public.sources
where not exists (
  select 1
  from public.source_connectors
  where source_connectors.source_id = sources.id
);

notify pgrst, 'reload schema';
