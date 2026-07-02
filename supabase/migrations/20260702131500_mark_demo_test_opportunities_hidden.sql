with demo_sources as (
  update public.sources
  set
    source_type = case
      when lower(coalesce(source_type, '')) in ('demo', 'test', 'demo_test', 'manual_test') then source_type
      when lower(name) in ('manual test', 'private lead', 'grant portal') then 'demo_test'
      when lower(name) similar to '%(demo|test|sample|mock|fake)%' then 'demo_test'
      else source_type
    end,
    is_active = case
      when lower(name) in ('manual test', 'private lead', 'grant portal')
        or lower(coalesce(source_type, '')) in ('demo', 'test', 'demo_test', 'manual_test')
        or lower(name) similar to '%(demo|test|sample|mock|fake)%'
      then false
      else is_active
    end,
    notes = case
      when lower(name) in ('manual test', 'private lead', 'grant portal')
        or lower(coalesce(source_type, '')) in ('demo', 'test', 'demo_test', 'manual_test')
        or lower(name) similar to '%(demo|test|sample|mock|fake)%'
      then concat_ws(' ', nullif(notes, ''), 'Marked as demo/test source; hidden from customer dashboards, matching and reports by default.')
      else notes
    end
  where lower(name) in ('manual test', 'private lead', 'grant portal')
     or lower(coalesce(source_type, '')) in ('demo', 'test', 'demo_test', 'manual_test')
     or lower(name) similar to '%(demo|test|sample|mock|fake)%'
  returning id
),
demo_opportunities as (
  select opportunities.id
  from public.opportunities opportunities
  left join public.sources sources on sources.id = opportunities.source_id
  where sources.id in (select id from demo_sources)
     or lower(coalesce(sources.name, '')) in ('manual test', 'private lead', 'grant portal')
     or lower(coalesce(sources.source_type, '')) in ('demo', 'test', 'demo_test', 'manual_test')
     or lower(coalesce(sources.name, '')) similar to '%(demo|test|sample|mock|fake)%'
     or lower(coalesce(opportunities.external_id, '')) similar to '%(demo|test|sample|mock|fake)%'
     or lower(coalesce(opportunities.title, '')) in (
       'office cleaning services for school buildings',
       'security camera installation for school facilities',
       'electrical maintenance for municipal buildings'
     )
),
marked as (
  update public.opportunities opportunities
  set
    raw_payload = jsonb_set(
      jsonb_set(
        jsonb_set(
          jsonb_set(coalesce(opportunities.raw_payload, '{}'::jsonb), '{is_demo}', 'true'::jsonb, true),
          '{hidden_from_reports}', 'true'::jsonb, true
        ),
        '{admin_report_status}', '"hidden"'::jsonb, true
      ),
      '{opportunity_intent}', '"not_opportunity"'::jsonb, true
    ),
    updated_at = now()
  where opportunities.id in (select id from demo_opportunities)
  returning opportunities.id
),
deleted_matches as (
  delete from public.opportunity_matches opportunity_matches
  where opportunity_matches.opportunity_id in (select id from marked)
  returning opportunity_matches.id
)
select count(*) as removed_match_count
from deleted_matches;

notify pgrst, 'reload schema';
