begin;

insert into public.sources (name, source_type, base_url, is_active, notes)
values
  ('TED Iceland/Nordic', 'eu_ted', 'https://ted.europa.eu', true, 'Canonical TED source for Iceland/Nordic notices.'),
  ('Reykjavík tender portal', 'municipal_website', 'https://reykjavik.is', true, 'Canonical Reykjavík tender/procurement source.')
on conflict (name) do update set
  source_type = excluded.source_type,
  base_url = excluded.base_url,
  is_active = true,
  notes = coalesce(public.sources.notes, excluded.notes);

-- Merge duplicate opportunity rows for legacy sources before moving source_id.
-- A legacy opportunity is considered a duplicate when the canonical source already
-- has the same external_id, same non-empty URL, or same normalized title.
create temp table legacy_source_opportunity_map on commit drop as
with source_pairs(canonical_name, legacy_name) as (
  values
    ('TED Iceland/Nordic', 'EU TED'),
    ('TED Iceland/Nordic', 'Tenders Electronic Daily'),
    ('Reykjavík tender portal', 'Reykjavík Tenders')
)
  select
    legacy_opp.id as legacy_opportunity_id,
    canonical_match.id as canonical_opportunity_id
  from source_pairs
  join public.sources canonical_source on canonical_source.name = source_pairs.canonical_name
  join public.sources legacy_source on legacy_source.name = source_pairs.legacy_name
  join public.opportunities legacy_opp on legacy_opp.source_id = legacy_source.id
  join lateral (
    select canonical_opp.id
    from public.opportunities canonical_opp
    where canonical_opp.source_id = canonical_source.id
      and (
        canonical_opp.external_id = legacy_opp.external_id
        or (
          nullif(trim(canonical_opp.url), '') is not null
          and nullif(trim(legacy_opp.url), '') is not null
          and lower(trim(canonical_opp.url)) = lower(trim(legacy_opp.url))
        )
        or (
          nullif(trim(canonical_opp.title), '') is not null
          and nullif(trim(legacy_opp.title), '') is not null
          and lower(trim(canonical_opp.title)) = lower(trim(legacy_opp.title))
        )
      )
    order by
      case when canonical_opp.external_id = legacy_opp.external_id then 0 else 1 end,
      case
        when nullif(trim(canonical_opp.url), '') is not null
          and nullif(trim(legacy_opp.url), '') is not null
          and lower(trim(canonical_opp.url)) = lower(trim(legacy_opp.url))
        then 0 else 1
      end,
      canonical_opp.created_at,
      canonical_opp.id
    limit 1
  ) canonical_match on true
;

update public.report_items report_items
set opportunity_id = duplicate_map.canonical_opportunity_id
from legacy_source_opportunity_map duplicate_map
where report_items.opportunity_id = duplicate_map.legacy_opportunity_id;

update public.opportunity_matches opportunity_matches
set
  opportunity_id = duplicate_map.canonical_opportunity_id,
  calculated_at = coalesce(opportunity_matches.calculated_at, now())
from legacy_source_opportunity_map duplicate_map
where opportunity_matches.opportunity_id = duplicate_map.legacy_opportunity_id
  and not exists (
    select 1
    from public.opportunity_matches existing_match
    where existing_match.company_id = opportunity_matches.company_id
      and existing_match.opportunity_id = duplicate_map.canonical_opportunity_id
  );

delete from public.opportunity_matches opportunity_matches
using legacy_source_opportunity_map duplicate_map
where opportunity_matches.opportunity_id = duplicate_map.legacy_opportunity_id;

delete from public.opportunities opportunities
using legacy_source_opportunity_map duplicate_map
where opportunities.id = duplicate_map.legacy_opportunity_id;

-- Avoid unique(source_id, external_id) conflicts when multiple legacy rows share
-- an external_id and are moved to the same canonical source.
with source_pairs(canonical_name, legacy_name) as (
  values
    ('TED Iceland/Nordic', 'EU TED'),
    ('TED Iceland/Nordic', 'Tenders Electronic Daily'),
    ('Reykjavík tender portal', 'Reykjavík Tenders')
),
remaining_legacy as (
  select
    legacy_opp.id,
    legacy_opp.external_id,
    row_number() over (
      partition by source_pairs.canonical_name, legacy_opp.external_id
      order by legacy_opp.created_at, legacy_opp.id
    ) as duplicate_rank
  from source_pairs
  join public.sources legacy_source on legacy_source.name = source_pairs.legacy_name
  join public.opportunities legacy_opp on legacy_opp.source_id = legacy_source.id
)
update public.opportunities opportunities
set external_id = opportunities.external_id || '-merged-' || left(opportunities.id::text, 8)
from remaining_legacy
where opportunities.id = remaining_legacy.id
  and remaining_legacy.duplicate_rank > 1;

-- Move remaining non-duplicate opportunities to the canonical sources.
with source_pairs(canonical_name, legacy_name) as (
  values
    ('TED Iceland/Nordic', 'EU TED'),
    ('TED Iceland/Nordic', 'Tenders Electronic Daily'),
    ('Reykjavík tender portal', 'Reykjavík Tenders')
)
update public.opportunities opportunities
set source_id = canonical_source.id
from source_pairs
join public.sources canonical_source on canonical_source.name = source_pairs.canonical_name
join public.sources legacy_source on legacy_source.name = source_pairs.legacy_name
where opportunities.source_id = legacy_source.id;

-- Merge source_status into canonical rows.
with source_pairs(canonical_name, legacy_name) as (
  values
    ('TED Iceland/Nordic', 'EU TED'),
    ('TED Iceland/Nordic', 'Tenders Electronic Daily'),
    ('Reykjavík tender portal', 'Reykjavík Tenders')
),
status_sources as (
  select distinct
    canonical_source.id as canonical_source_id,
    canonical_source.id as related_source_id
  from source_pairs
  join public.sources canonical_source on canonical_source.name = source_pairs.canonical_name
  union
  select distinct
    canonical_source.id as canonical_source_id,
    legacy_source.id as related_source_id
  from source_pairs
  join public.sources canonical_source on canonical_source.name = source_pairs.canonical_name
  join public.sources legacy_source on legacy_source.name = source_pairs.legacy_name
),
merged_status as (
  select
    status_sources.canonical_source_id as source_id,
    case
      when bool_or(source_status.status = 'error') then 'error'
      when bool_or(source_status.status in ('connected', 'success')) then 'connected'
      when bool_or(source_status.status = 'running') then 'running'
      else 'planned'
    end as status,
    max(source_status.last_checked_at) as last_checked_at,
    max(source_status.last_success_at) as last_success_at,
    (array_agg(source_status.last_error order by source_status.updated_at desc nulls last) filter (where source_status.last_error is not null))[1] as last_error,
    coalesce(sum(source_status.fetched_count), 0)::integer as fetched_count,
    coalesce(sum(source_status.inserted_count), 0)::integer as inserted_count,
    coalesce(sum(source_status.updated_count), 0)::integer as updated_count,
    coalesce(sum(source_status.active_opportunities_count), 0)::integer as active_opportunities_count
  from status_sources
  join public.source_status source_status
    on source_status.source_id = status_sources.related_source_id
  group by status_sources.canonical_source_id
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
on conflict (source_id) do update set
  status = excluded.status,
  last_checked_at = coalesce(greatest(public.source_status.last_checked_at, excluded.last_checked_at), public.source_status.last_checked_at, excluded.last_checked_at),
  last_success_at = coalesce(greatest(public.source_status.last_success_at, excluded.last_success_at), public.source_status.last_success_at, excluded.last_success_at),
  last_error = coalesce(excluded.last_error, public.source_status.last_error),
  fetched_count = greatest(coalesce(public.source_status.fetched_count, 0), coalesce(excluded.fetched_count, 0)),
  inserted_count = greatest(coalesce(public.source_status.inserted_count, 0), coalesce(excluded.inserted_count, 0)),
  updated_count = greatest(coalesce(public.source_status.updated_count, 0), coalesce(excluded.updated_count, 0)),
  active_opportunities_count = greatest(coalesce(public.source_status.active_opportunities_count, 0), coalesce(excluded.active_opportunities_count, 0)),
  updated_at = now();

delete from public.source_status source_status
using public.sources sources
where source_status.source_id = sources.id
  and sources.name in ('EU TED', 'Tenders Electronic Daily', 'Reykjavík Tenders');

-- Legacy connectors are removed with their legacy sources. Canonical connectors
-- are managed by the existing connector seed migrations and import functions.
delete from public.source_connectors source_connectors
using public.sources sources
where source_connectors.source_id = sources.id
  and sources.name in ('EU TED', 'Tenders Electronic Daily', 'Reykjavík Tenders');

delete from public.sources
where name in ('EU TED', 'Tenders Electronic Daily', 'Reykjavík Tenders');

-- Ensure canonical status rows exist after cleanup.
insert into public.source_status (source_id, status, updated_at)
select id,
  case
    when name = 'TED Iceland/Nordic' then 'connected'
    else 'planned'
  end,
  now()
from public.sources
where name in ('TED Iceland/Nordic', 'Reykjavík tender portal')
on conflict (source_id) do nothing;

notify pgrst, 'reload schema';

commit;
