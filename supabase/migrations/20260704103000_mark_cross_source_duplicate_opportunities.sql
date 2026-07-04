-- Mark cross-source duplicate opportunities and remove secondary customer matches.
-- Keeps all opportunity rows for Admin/source review. Safe to run multiple times.

with candidates as (
  select
    opportunities.id,
    opportunities.title,
    opportunities.buyer,
    opportunities.description,
    opportunities.deadline,
    opportunities.status,
    coalesce(opportunities.raw_payload, '{}'::jsonb) as payload,
    coalesce(sources.name, '') as source_name,
    trim(regexp_replace(
      regexp_replace(
        lower(
          replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(
            coalesce(opportunities.title, ''),
            'á', 'a'), 'é', 'e'), 'í', 'i'), 'ó', 'o'), 'ú', 'u'),
            'ý', 'y'), 'þ', 'th'), 'ð', 'd'), 'æ', 'ae'), 'ö', 'o')
        ),
        '\m(utbod|utbodsauglysing|verd fyrirspurn|verdfyrirspurn|oskad eftir tilbodum|tilbod|tilbodum)\M',
        ' ',
        'g'
      ),
      '[^a-z0-9]+',
      ' ',
      'g'
    )) as duplicate_key
  from public.opportunities
  left join public.sources on sources.id = opportunities.source_id
  where opportunities.title is not null
),
scored as (
  select
    candidates.*,
    (
      case when deadline is not null and deadline >= current_date then 100 else 0 end +
      case when deadline is not null then 20 else 0 end +
      case when lower(coalesce(buyer, '')) not in ('', 'unknown buyer', 'óþekktur kaupandi', 'admin', 'administrator', 'editor', 'noreply') then 20 else 0 end +
      case when length(coalesce(description, '')) > 250 then 12 else 0 end +
      case when lower(source_name) similar to '%(garðabær|gardabaer|akranes|borgarbyggð|borgarbyggd|reykjanesbær|reykjanesbaer|faxaflóahafnir|faxafloahafnir)%' then 18 else 0 end +
      case when lower(source_name) similar to '%(ríkiskaup|rikiskaup|utbodsvefur|island)%' and deadline is null then -10 else 0 end +
      case when status <> 'open' or lower(coalesce(payload->>'hidden_from_reports', 'false')) in ('true', '1', 'yes') then -100 else 0 end
    ) as canonical_score
  from candidates
  where duplicate_key <> ''
),
known_vifilstadavegur as (
  select *
  from scored
  where duplicate_key like '%vifilstadavegur fra hringtorgi vid spitalaveg ad ellidavatnsvegi%'
    and duplicate_key like '%gatnagerd%'
    and duplicate_key like '%lagnir%'
),
known_vifilstadavegur_canonical as (
  select id, title, source_name, duplicate_key
  from known_vifilstadavegur
  order by
    case when lower(source_name) similar to '%(garðabær|gardabaer)%' then 1 else 0 end desc,
    canonical_score desc,
    id
  limit 1
),
exact_duplicate_groups as (
  select duplicate_key
  from scored
  where length(duplicate_key) >= 42
    and duplicate_key !~ '^(gatnagerd|lagnir|framkvaemdir|utbod|tilbod|malbikun|vidhald)( |$)'
  group by duplicate_key
  having count(*) > 1
),
exact_canonicals as (
  select distinct on (scored.duplicate_key)
    scored.id,
    scored.title,
    scored.source_name,
    scored.duplicate_key
  from scored
  join exact_duplicate_groups on exact_duplicate_groups.duplicate_key = scored.duplicate_key
  order by scored.duplicate_key, scored.canonical_score desc, scored.id
),
canonical as (
  select * from known_vifilstadavegur_canonical
  union
  select * from exact_canonicals
),
duplicates as (
  select
    scored.id,
    canonical.id as canonical_id,
    canonical.title as canonical_title,
    canonical.source_name as canonical_source,
    scored.duplicate_key
  from scored
  join canonical on canonical.duplicate_key = scored.duplicate_key
  where scored.id <> canonical.id
),
marked_canonical as (
  update public.opportunities opportunities
  set raw_payload = jsonb_set(
      jsonb_set(
        jsonb_set(
          jsonb_set(coalesce(opportunities.raw_payload, '{}'::jsonb), '{duplicate_group_key}', to_jsonb(canonical.duplicate_key), true),
          '{canonical_opportunity_id}', to_jsonb(canonical.id), true
        ),
        '{is_duplicate}', 'false'::jsonb, true
      ),
      '{duplicate_of}', 'null'::jsonb, true
    ),
    updated_at = now()
  from canonical
  where opportunities.id = canonical.id
  returning opportunities.id
),
marked_duplicates as (
  update public.opportunities opportunities
  set
    status = 'hidden',
    raw_payload = jsonb_set(
      jsonb_set(
        jsonb_set(
          jsonb_set(
            jsonb_set(
              jsonb_set(
                jsonb_set(coalesce(opportunities.raw_payload, '{}'::jsonb), '{duplicate_group_key}', to_jsonb(duplicates.duplicate_key), true),
                '{canonical_opportunity_id}', to_jsonb(duplicates.canonical_id), true
              ),
              '{is_duplicate}', 'true'::jsonb, true
            ),
            '{duplicate_of}', to_jsonb(duplicates.canonical_id), true
          ),
          '{duplicate_reason}', to_jsonb('Likely duplicate of ' || duplicates.canonical_title || ' from ' || duplicates.canonical_source || '.'), true
        ),
        '{hidden_from_reports}', 'true'::jsonb, true
      ),
      '{admin_report_status}', '"hidden"'::jsonb, true
    ),
    updated_at = now()
  from duplicates
  where opportunities.id = duplicates.id
  returning opportunities.id
),
deleted_matches as (
  delete from public.opportunity_matches opportunity_matches
  where opportunity_matches.opportunity_id in (select id from marked_duplicates)
  returning opportunity_matches.id
)
select
  (select count(*) from marked_canonical) as canonical_rows_marked,
  (select count(*) from marked_duplicates) as duplicate_rows_hidden,
  (select count(*) from deleted_matches) as matches_removed;

notify pgrst, 'reload schema';
