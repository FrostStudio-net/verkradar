-- Add report-intent metadata to existing opportunities.
-- This keeps noisy/news items in Admin while excluding them from customer-facing reports.
-- Safe to run multiple times.

with classified as (
  select
    opportunities.id,
    lower(coalesce(opportunities.title, '')) as title_text,
    lower(coalesce(opportunities.title, '') || ' ' || coalesce(opportunities.description, '') || ' ' || coalesce(opportunities.category, '')) as full_text,
    coalesce(opportunities.raw_payload, '{}'::jsonb) as payload
  from public.opportunities
),
intent as (
  select
    id,
    case
      when payload->>'admin_report_status' = 'include'
        then coalesce(nullif(payload->>'opportunity_intent', ''), 'confirmed_tender')
      when full_text ~ '(útboð|utbod|útboðsauglýsing|utbodsauglysing|óskað eftir tilboðum|oskad eftir tilbodum|tilboð|tilbod|tilboðum|tilbodum|verðfyrirspurn|verdfyrirspurn|forval|tender|procurement|skilafrestur|útboðsgögn|utbodsgogn)'
        then 'confirmed_tender'
      when title_text ~ '(lokun|lokað|lokad|lokanir|umferð|umferd|tafir|hjáleið|hjaleid|akstursleið|akstursleid|vegfarendur|frétt|frett|myndband|tekur á sig mynd|tekur a sig mynd|opið aftur|opid aftur)'
        then 'news_context'
      when full_text ~ '(senn í útboð|senn i utbod|áætlað útboð|aaetlad utbod|áætlað er að bjóða út|aaetlad er ad bjoda ut|fyrirhugað útboð|fyrirhugad utbod|markaðskönnun|markadskonnun)'
        then 'early_opportunity'
      when full_text ~ '(áætlaðar framkvæmdir|aaetladar framkvaemdir|fyrirhugaðar framkvæmdir|fyrirhugadar framkvaemdir|framkvæmdir hefjast|framkvaemdir hefjast|malbikunarframkvæmdir|malbikunarframkvaemdir|vegaframkvæmdir|vegaframkvaemdir|brúargerð|bruargerd|jarðvinna|jardvinna|gatnagerð|gatnagerd|fræsing|fraesing)'
        then 'market_signal'
      else coalesce(nullif(payload->>'opportunity_intent', ''), 'market_signal')
    end as opportunity_intent
  from classified
),
with_flags as (
  select
    classified.id,
    intent.opportunity_intent,
    case
      when classified.payload->>'admin_report_status' = 'include' then false
      when classified.payload->>'admin_report_status' in ('hidden', 'hide', 'noise', 'deleted') then true
      when intent.opportunity_intent in ('news_context', 'not_opportunity') then true
      else coalesce((classified.payload->>'hidden_from_reports')::boolean, false)
    end as hidden_from_reports,
    case
      when intent.opportunity_intent = 'confirmed_tender' then 'confirmed_tender'
      when intent.opportunity_intent = 'early_opportunity' then 'early_signal'
      else 'needs_review'
    end as quality_status
  from classified
  join intent on intent.id = classified.id
)
update public.opportunities as opportunities
set raw_payload = jsonb_set(
    jsonb_set(
      jsonb_set(coalesce(opportunities.raw_payload, '{}'::jsonb), '{opportunity_intent}', to_jsonb(with_flags.opportunity_intent), true),
      '{hidden_from_reports}', to_jsonb(with_flags.hidden_from_reports), true
    ),
    '{quality_status}', to_jsonb(with_flags.quality_status), true
  ),
  updated_at = now()
from with_flags
where opportunities.id = with_flags.id;

notify pgrst, 'reload schema';
