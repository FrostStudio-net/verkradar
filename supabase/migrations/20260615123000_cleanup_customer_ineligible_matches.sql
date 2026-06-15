-- Remove stored customer matches for opportunities that should remain in Admin
-- but should not count as normal customer-facing matches.
-- Safe to run multiple times. Does not delete opportunities.

with classified as (
  select
    opportunities.id,
    lower(coalesce(opportunities.title, '')) as title_text,
    lower(coalesce(opportunities.title, '') || ' ' || coalesce(opportunities.description, '') || ' ' || coalesce(opportunities.category, '')) as full_text,
    coalesce(opportunities.raw_payload, '{}'::jsonb) as payload
  from public.opportunities
),
ineligible as (
  select id
  from classified
  where coalesce(payload->>'admin_report_status', '') <> 'include'
    and (
      lower(coalesce(payload->>'hidden_from_reports', 'false')) in ('true', '1', 'yes')
      or payload->>'admin_report_status' in ('hidden', 'hide', 'noise', 'deleted')
      or payload->>'opportunity_intent' in ('news_context', 'not_opportunity', 'noise')
      or payload->>'intent' in ('news_context', 'not_opportunity', 'noise')
      or payload->>'quality_status' in ('news_context', 'not_opportunity', 'noise')
      or payload->>'tender_state' in ('tender_awarded', 'awarded', 'already_tendered')
      or (
        title_text ~ '(lokun|lokað|lokad|lokanir|umferð|umferd|tafir|hjáleið|hjaleid|akstursleið|akstursleid|vegfarendur|frétt|frett|myndband|tekur á sig mynd|tekur a sig mynd|opið aftur|opid aftur)'
        and full_text !~ '(útboð|utbod|útboðsauglýsing|utbodsauglysing|óskað eftir tilboðum|oskad eftir tilbodum|tilboð|tilbod|tilboðum|tilbodum|verðfyrirspurn|verdfyrirspurn|forval|skilafrestur|útboðsgögn|utbodsgogn)'
      )
    )
)
delete from public.opportunity_matches
using ineligible
where opportunity_matches.opportunity_id = ineligible.id;

-- Add practical exclude keywords to asphalt/contractor-style profiles so
-- design-only consulting notices and traffic/news items score lower.
with target_companies as (
  select id
  from public.companies
  where lower(coalesce(company_name, '')) ~ '(malbik|verktak|contractor|asphalt)'
     or lower(coalesce(industry, '')) ~ '(construction|contractor|asphalt|malbik|veg|road)'
),
keywords(keyword) as (
  values
    ('hönnun'),
    ('ráðgjöf'),
    ('verkfræðiráðgjöf'),
    ('for- og verkhönnun'),
    ('umferð'),
    ('lokun'),
    ('frétt'),
    ('myndband')
)
insert into public.company_keywords (company_id, keyword, type)
select target_companies.id, keywords.keyword, 'exclude'
from target_companies
cross join keywords
where not exists (
  select 1
  from public.company_keywords existing
  where existing.company_id = target_companies.id
    and lower(existing.keyword) = lower(keywords.keyword)
    and existing.type = 'exclude'
);
