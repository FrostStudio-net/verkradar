-- Tighten customer-facing filtering for existing source-connector noise.
-- Keeps opportunities for Admin/source review, but removes customer matches
-- for obvious news/traffic/progress items and report-ineligible tender states.
-- Safe to run multiple times.

with candidates as (
  select
    opportunities.id,
    lower(coalesce(opportunities.title, '')) as title_text,
    lower(coalesce(opportunities.title, '') || ' ' || coalesce(opportunities.description, '') || ' ' || coalesce(opportunities.category, '')) as full_text,
    coalesce(opportunities.raw_payload, '{}'::jsonb) as payload
  from public.opportunities
  left join public.sources on sources.id = opportunities.source_id
  where coalesce(opportunities.raw_payload->>'admin_report_status', '') <> 'include'
    and (
      sources.name = 'Vegagerðin'
      or opportunities.raw_payload ? 'connector_type'
      or opportunities.raw_payload->>'source_name' is not null
    )
),
obvious_noise as (
  select id
  from candidates
  where title_text ~ '(lokun|lokað|lokad|lokanir|umferð|umferd|tafir|hjáleið|hjaleid|vegfarendur|akstursleið|akstursleid|opið aftur|opid aftur|breytt umferð|breytt umferd|framkvæmdir valda töfum|framkvaemdir valda tofum|frétt|frett|myndband|tekur á sig mynd|tekur a sig mynd)'
    and full_text !~ '(útboð|utbod|útboðsauglýsing|utbodsauglysing|óskað eftir tilboðum|oskad eftir tilbodum|verðfyrirspurn|verdfyrirspurn|tilboðsbeiðni|tilbodsbeidni|tilboðsfrestur|tilbodsfrestur|skilafrestur|útboðsgögn|utbodsgogn|forval|rammasamningur|senn í útboð|senn i utbod)'
)
update public.opportunities as opportunities
set raw_payload = jsonb_set(
    jsonb_set(
      jsonb_set(coalesce(opportunities.raw_payload, '{}'::jsonb), '{opportunity_intent}', to_jsonb('news_context'::text), true),
      '{hidden_from_reports}', 'true'::jsonb, true
    ),
    '{quality_status}', to_jsonb('not_opportunity'::text), true
  ),
  updated_at = now()
from obvious_noise
where opportunities.id = obvious_noise.id;

with ineligible as (
  select opportunities.id
  from public.opportunities
  where coalesce(opportunities.raw_payload->>'admin_report_status', '') <> 'include'
    and (
      lower(coalesce(opportunities.raw_payload->>'hidden_from_reports', 'false')) in ('true', '1', 'yes')
      or opportunities.raw_payload->>'admin_report_status' in ('hidden', 'hide', 'noise', 'deleted')
      or opportunities.raw_payload->>'opportunity_intent' in ('news_context', 'not_opportunity', 'noise')
      or opportunities.raw_payload->>'intent' in ('news_context', 'not_opportunity', 'noise')
      or opportunities.raw_payload->>'quality_status' in ('news_context', 'not_opportunity', 'noise')
      or opportunities.raw_payload->>'tender_state' in ('tender_awarded', 'awarded', 'already_awarded', 'already_tendered')
    )
)
delete from public.opportunity_matches
using ineligible
where opportunity_matches.opportunity_id = ineligible.id;

notify pgrst, 'reload schema';
