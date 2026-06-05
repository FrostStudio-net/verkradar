begin;

insert into public.sources (name, source_type, base_url, is_active, notes)
values
  ('TED Iceland/Nordic', 'eu_ted', 'https://ted.europa.eu', true, 'Canonical TED source for Iceland/Nordic notices.'),
  ('Útboðsvefur.is', 'utbodsvefur', 'https://utbodsvefur.is', true, 'Canonical Icelandic public tender portal source.')
on conflict (name) do update set
  source_type = excluded.source_type,
  base_url = excluded.base_url,
  is_active = true,
  notes = coalesce(public.sources.notes, excluded.notes);

with canonical as (
  select id
  from public.sources
  where name = 'TED Iceland/Nordic'
  limit 1
),
affected as (
  select
    o.id,
    o.source_id,
    o.external_id,
    row_number() over (
      partition by o.external_id
      order by
        case when o.source_id = (select id from canonical) then 0 else 1 end,
        o.created_at,
        o.id
    ) as duplicate_rank
  from public.opportunities o
  where o.source_id in (
    select id from canonical
    union all
    select id from public.sources where name in ('EU TED', 'Tenders Electronic Daily')
  )
)
update public.opportunities o
set external_id = o.external_id || '-merged-' || left(o.id::text, 8)
from affected
where o.id = affected.id
  and affected.duplicate_rank > 1;

with canonical as (
  select id
  from public.sources
  where name = 'TED Iceland/Nordic'
  limit 1
),
duplicates as (
  select id
  from public.sources
  where name in ('EU TED', 'Tenders Electronic Daily')
),
merged_status as (
  select
    (select id from canonical) as source_id,
    case
      when bool_or(ss.status = 'error') then 'error'
      when bool_or(ss.status in ('connected', 'success')) then 'connected'
      when bool_or(ss.status = 'running') then 'running'
      else 'planned'
    end as status,
    max(ss.last_checked_at) as last_checked_at,
    max(ss.last_success_at) as last_success_at,
    (array_agg(ss.last_error order by ss.updated_at desc nulls last) filter (where ss.last_error is not null))[1] as last_error,
    coalesce(sum(ss.fetched_count), 0)::integer as fetched_count,
    coalesce(sum(ss.inserted_count), 0)::integer as inserted_count,
    coalesce(sum(ss.updated_count), 0)::integer as updated_count,
    coalesce(sum(ss.active_opportunities_count), 0)::integer as active_opportunities_count
  from public.source_status ss
  where ss.source_id in (
    select id from duplicates
    union all
    select id from canonical
  )
)
insert into public.source_status (
  source_id,
  status,
  last_checked_at,
  last_success_at,
  last_error,
  fetched_count,
  inserted_count,
  updated_count,
  active_opportunities_count,
  updated_at
)
select
  source_id,
  status,
  last_checked_at,
  last_success_at,
  last_error,
  fetched_count,
  inserted_count,
  updated_count,
  active_opportunities_count,
  now()
from merged_status
where source_id is not null
on conflict (source_id) do update set
  status = excluded.status,
  last_checked_at = greatest(public.source_status.last_checked_at, excluded.last_checked_at),
  last_success_at = greatest(public.source_status.last_success_at, excluded.last_success_at),
  last_error = coalesce(excluded.last_error, public.source_status.last_error),
  fetched_count = greatest(public.source_status.fetched_count, excluded.fetched_count),
  inserted_count = greatest(public.source_status.inserted_count, excluded.inserted_count),
  updated_count = greatest(public.source_status.updated_count, excluded.updated_count),
  active_opportunities_count = greatest(public.source_status.active_opportunities_count, excluded.active_opportunities_count),
  updated_at = now();

update public.opportunities
set source_id = (select id from public.sources where name = 'TED Iceland/Nordic' limit 1)
where source_id in (
  select id
  from public.sources
  where name in ('EU TED', 'Tenders Electronic Daily')
)
and exists (
  select 1
  from public.sources
  where name = 'TED Iceland/Nordic'
);

delete from public.source_status
where source_id in (
  select id
  from public.sources
  where name in ('EU TED', 'Tenders Electronic Daily')
);

delete from public.sources
where name in ('EU TED', 'Tenders Electronic Daily');

with canonical as (
  select id
  from public.sources
  where name = 'Útboðsvefur.is'
  limit 1
),
affected as (
  select
    o.id,
    o.source_id,
    o.external_id,
    row_number() over (
      partition by o.external_id
      order by
        case when o.source_id = (select id from canonical) then 0 else 1 end,
        o.created_at,
        o.id
    ) as duplicate_rank
  from public.opportunities o
  where o.source_id in (
    select id from canonical
    union all
    select id from public.sources where name = 'Útboðsvefur'
  )
)
update public.opportunities o
set external_id = o.external_id || '-merged-' || left(o.id::text, 8)
from affected
where o.id = affected.id
  and affected.duplicate_rank > 1;

with canonical as (
  select id
  from public.sources
  where name = 'Útboðsvefur.is'
  limit 1
),
duplicates as (
  select id
  from public.sources
  where name = 'Útboðsvefur'
),
merged_status as (
  select
    (select id from canonical) as source_id,
    case
      when bool_or(ss.status = 'error') then 'error'
      when bool_or(ss.status in ('connected', 'success')) then 'connected'
      when bool_or(ss.status = 'running') then 'running'
      else 'planned'
    end as status,
    max(ss.last_checked_at) as last_checked_at,
    max(ss.last_success_at) as last_success_at,
    (array_agg(ss.last_error order by ss.updated_at desc nulls last) filter (where ss.last_error is not null))[1] as last_error,
    coalesce(sum(ss.fetched_count), 0)::integer as fetched_count,
    coalesce(sum(ss.inserted_count), 0)::integer as inserted_count,
    coalesce(sum(ss.updated_count), 0)::integer as updated_count,
    coalesce(sum(ss.active_opportunities_count), 0)::integer as active_opportunities_count
  from public.source_status ss
  where ss.source_id in (
    select id from duplicates
    union all
    select id from canonical
  )
)
insert into public.source_status (
  source_id,
  status,
  last_checked_at,
  last_success_at,
  last_error,
  fetched_count,
  inserted_count,
  updated_count,
  active_opportunities_count,
  updated_at
)
select
  source_id,
  status,
  last_checked_at,
  last_success_at,
  last_error,
  fetched_count,
  inserted_count,
  updated_count,
  active_opportunities_count,
  now()
from merged_status
where source_id is not null
on conflict (source_id) do update set
  status = excluded.status,
  last_checked_at = greatest(public.source_status.last_checked_at, excluded.last_checked_at),
  last_success_at = greatest(public.source_status.last_success_at, excluded.last_success_at),
  last_error = coalesce(excluded.last_error, public.source_status.last_error),
  fetched_count = greatest(public.source_status.fetched_count, excluded.fetched_count),
  inserted_count = greatest(public.source_status.inserted_count, excluded.inserted_count),
  updated_count = greatest(public.source_status.updated_count, excluded.updated_count),
  active_opportunities_count = greatest(public.source_status.active_opportunities_count, excluded.active_opportunities_count),
  updated_at = now();

update public.opportunities
set source_id = (select id from public.sources where name = 'Útboðsvefur.is' limit 1)
where source_id in (
  select id
  from public.sources
  where name = 'Útboðsvefur'
)
and exists (
  select 1
  from public.sources
  where name = 'Útboðsvefur.is'
);

delete from public.source_status
where source_id in (
  select id
  from public.sources
  where name = 'Útboðsvefur'
);

delete from public.sources
where name = 'Útboðsvefur';

insert into public.source_status (source_id, status, updated_at)
select id,
  case
    when name = 'TED Iceland/Nordic' then 'connected'
    else 'planned'
  end,
  now()
from public.sources
where name in ('TED Iceland/Nordic', 'Útboðsvefur.is')
on conflict (source_id) do nothing;

notify pgrst, 'reload schema';

commit;
