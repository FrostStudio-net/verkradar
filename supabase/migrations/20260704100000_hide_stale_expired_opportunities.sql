-- Hide stale/expired imported opportunities from customer-facing matches/reports.
-- Keeps opportunity rows for Admin/source review and removes only customer match rows.
-- Safe to run multiple times.

with candidates as (
  select
    opportunities.id,
    opportunities.deadline,
    opportunities.published_date,
    coalesce(opportunities.raw_payload, '{}'::jsonb) as payload,
    coalesce(sources.name, '') as source_name,
    coalesce(sources.source_type, '') as source_type,
    lower(
      coalesce(opportunities.title, '') || ' ' ||
      coalesce(opportunities.description, '') || ' ' ||
      coalesce(opportunities.category, '') || ' ' ||
      coalesce(sources.name, '')
    ) as full_text
  from public.opportunities
  left join public.sources on sources.id = opportunities.source_id
  where coalesce(opportunities.raw_payload->>'admin_report_status', '') <> 'include'
),
classified as (
  select
    candidates.*,
    case
      when lower(source_name) similar to '%(akranes|borgarbyggð|borgarbyggd|árborg|arborg|selfoss|garðabær|gardabaer|reykjanesbær|reykjanesbaer|hafnarfjörður|hafnarfjordur|mosfellsbær|mosfellsbaer|kópavogur|kopavogur|múlaþing|mulathing|fjarðabyggð|fjardabyggd)%'
        or lower(source_type) similar to '%(municipal|sveitarfelag)%'
      then 45
      else 60
    end as threshold_days,
    case
      when published_date is not null then (current_date - published_date)
      else null
    end as age_days
  from candidates
  where deadline is null or deadline < current_date
),
stale as (
  select
    id,
    case
      when lower(source_name) = 'akranes útboð'
        and full_text like '%sementsreitur%gatnager%'
        then 'Known stale Akranes item; old project page without current deadline.'
      when full_text ~ '(2020|2021|2022|2023|2024|2025)'
        then 'Old year detected and no future deadline found.'
      when full_text ~ '(niðurstaða útboðs|nidurstada utbods|niðurstöður útboðs|nidurstodur utbods|opnun tilboða|opnun tilboda|tilboð opnuð|tilbod opnud|lokið|lokid|lokið útboði|lokid utbodi|búið|buid|útrunnið|ut runnid|eldri útboð|eldri utbod|útboðssaga|utbodssaga|samningur gerður|samningur gerdur|verksamningur|awarded|tender results|contract awarded|expired)'
        then 'Expired/result wording detected and no future deadline found.'
      when age_days is not null and age_days > threshold_days
        then 'Published ' || age_days::text || ' days ago with no current deadline.'
      else 'Stale opportunity hidden from customer reports.'
    end as stale_reason,
    threshold_days,
    age_days
  from classified
  where (
      lower(source_name) = 'akranes útboð'
      and full_text like '%sementsreitur%gatnager%'
    )
    or full_text ~ '(2020|2021|2022|2023|2024|2025)'
    or full_text ~ '(niðurstaða útboðs|nidurstada utbods|niðurstöður útboðs|nidurstodur utbods|opnun tilboða|opnun tilboda|tilboð opnuð|tilbod opnud|lokið|lokid|lokið útboði|lokid utbodi|búið|buid|útrunnið|ut runnid|eldri útboð|eldri utbod|útboðssaga|utbodssaga|samningur gerður|samningur gerdur|verksamningur|awarded|tender results|contract awarded|expired)'
    or (age_days is not null and age_days > threshold_days)
),
marked as (
  update public.opportunities opportunities
  set
    status = 'hidden',
    raw_payload = jsonb_set(
      jsonb_set(
        jsonb_set(
          jsonb_set(
            jsonb_set(
              jsonb_set(
                jsonb_set(coalesce(opportunities.raw_payload, '{}'::jsonb), '{hidden_from_reports}', 'true'::jsonb, true),
                '{admin_report_status}', '"hidden"'::jsonb, true
              ),
              '{opportunity_intent}', '"stale_opportunity"'::jsonb, true
            ),
            '{quality_status}', '"not_opportunity"'::jsonb, true
          ),
          '{stale_status}', '"stale_or_expired"'::jsonb, true
        ),
        '{stale_reason}', to_jsonb(stale.stale_reason), true
      ),
      '{stale_age_days}', coalesce(to_jsonb(stale.age_days), 'null'::jsonb), true
    ),
    updated_at = now()
  from stale
  where opportunities.id = stale.id
  returning opportunities.id
),
deleted_matches as (
  delete from public.opportunity_matches opportunity_matches
  where opportunity_matches.opportunity_id in (select id from marked)
  returning opportunity_matches.id
)
select
  (select count(*) from marked) as opportunities_marked_stale,
  (select count(*) from deleted_matches) as matches_removed;

notify pgrst, 'reload schema';
