insert into public.sources (name, source_type, base_url, is_active, notes)
values (
  'FSRE / Framkvæmdasýslan - Ríkiseignir',
  'public_institution_page',
  'https://www.fsre.is',
  true,
  'High-value public construction/building tenders source. No safe RSS/API endpoint confirmed yet.'
)
on conflict (name) do update set
  source_type = excluded.source_type,
  base_url = excluded.base_url,
  is_active = true,
  notes = excluded.notes;

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
  id,
  'planned',
  'https://www.fsre.is/auglysingar/utbod-og-sala',
  false,
  'planned',
  'High-value public construction/building tenders source. No safe RSS/API endpoint confirmed yet.',
  now()
from public.sources
where name = 'FSRE / Framkvæmdasýslan - Ríkiseignir'
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
  notes = case
    when public.source_connectors.enabled then public.source_connectors.notes
    else excluded.notes
  end,
  updated_at = now();

notify pgrst, 'reload schema';
