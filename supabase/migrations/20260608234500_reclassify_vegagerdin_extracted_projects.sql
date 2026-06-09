-- Reclassify existing Vegagerðin child opportunities extracted from roundup articles.
-- Safe to run multiple times.

with extracted as (
  select
    id,
    lower(coalesce(title, '') || ' ' || coalesce(description, '')) as text_value,
    coalesce(raw_payload, '{}'::jsonb) as payload
  from public.opportunities
  where raw_payload->>'extraction_method' = 'vegagerdin_article_project_parser'
),
classified as (
  select
    id,
    case
      when text_value like '%lægstbjóðandi%'
        or text_value like '%laegstbjodandi%'
        or text_value like '%samningur var%'
        or text_value like '%samið var%'
        or text_value like '%samid var%'
        or text_value like '%skrifað var undir verksamning%'
        or text_value like '%skrifad var undir verksamning%'
        then 'tender_awarded'
      when text_value like '%útboð var auglýst%'
        or text_value like '%utbod var auglyst%'
        or text_value like '%útboðið var auglýst%'
        or text_value like '%utbodid var auglyst%'
        or text_value like '%útboð hefur farið fram%'
        or text_value like '%utbod hefur farid fram%'
        or text_value like '%útboðið hefur farið fram%'
        or text_value like '%utbodid hefur farid fram%'
        or text_value like '%boðið út%'
        or text_value like '%bodid ut%'
        or text_value like '%verkið var boðið út%'
        or text_value like '%verkid var bodid ut%'
        then 'already_tendered'
      when text_value like '%óskað eftir tilboðum%'
        or text_value like '%oskad eftir tilbodum%'
        or text_value like '%tilboðsfrestur%'
        or text_value like '%tilbodsfrestur%'
        or text_value like '%skilafrestur%'
        or text_value like '%verðfyrirspurn%'
        or text_value like '%verdfyrirspurn%'
        or text_value like '%rammasamningur%'
        or text_value like '%forval%'
        then 'announced'
      when text_value like '%áætlað útboð%'
        or text_value like '%aaetlad utbod%'
        or text_value like '%áætlað er að bjóða út%'
        or text_value like '%aaetlad er ad bjoda ut%'
        or text_value like '%fyrirhugað útboð%'
        or text_value like '%fyrirhugad utbod%'
        or text_value like '%senn í útboð%'
        or text_value like '%senn i utbod%'
        or text_value like '%útboð verður%'
        or text_value like '%utbod verdur%'
        then 'upcoming_tender'
      else 'project_signal'
    end as tender_state
  from extracted
),
with_quality as (
  select
    id,
    tender_state,
    case
      when tender_state in ('tender_awarded', 'already_tendered', 'announced') then 'confirmed_tender'
      when tender_state = 'upcoming_tender' then 'early_signal'
      else 'needs_review'
    end as quality_status,
    case
      when tender_state in ('tender_awarded', 'already_tendered', 'announced')
        then 'Tender appears already announced/awarded — verify source article.'
      when tender_state = 'upcoming_tender'
        then 'Formal tender deadline not found yet — monitor source article.'
      else 'No formal tender deadline extracted — verify source article.'
    end as deadline_warning
  from classified
)
update public.opportunities as opportunities
set raw_payload = jsonb_set(
    jsonb_set(
      jsonb_set(coalesce(opportunities.raw_payload, '{}'::jsonb), '{tender_state}', to_jsonb(with_quality.tender_state), true),
      '{quality_status}', to_jsonb(with_quality.quality_status), true
    ),
    '{deadline_warning}', to_jsonb(with_quality.deadline_warning), true
  )
from with_quality
where opportunities.id = with_quality.id;

with classified as (
  select
    id,
    case
      when raw_payload->>'tender_state' in ('tender_awarded', 'awarded', 'already_tendered', 'announced')
        then 'Tender appears already announced/awarded — verify source article.'
      when raw_payload->>'tender_state' = 'upcoming_tender'
        then 'Formal tender deadline not found yet — monitor source article.'
      else 'No formal tender deadline extracted — verify source article.'
    end as deadline_warning
  from public.opportunities
  where raw_payload->>'extraction_method' = 'vegagerdin_article_project_parser'
),
cleaned_matches as (
  select
    matches.id as match_id,
    classified.deadline_warning,
    coalesce(
      (
        select jsonb_agg(risk.value)
        from jsonb_array_elements_text(coalesce(matches.risks, '[]'::jsonb)) as risk(value)
        where risk.value not in (
          'Deadline not available in feed — verify on source page.',
          'No formal tender deadline extracted — verify source article.',
          'Tender appears already announced/awarded — verify source article.',
          'Formal tender deadline not found yet — monitor source article.',
          'Extracted project signal — verify tender timing in the source article.'
        )
      ),
      '[]'::jsonb
    ) as cleaned_risks
  from public.opportunity_matches as matches
  join classified on matches.opportunity_id = classified.id
)
update public.opportunity_matches as matches
set risks = case
  when cleaned_matches.cleaned_risks ? cleaned_matches.deadline_warning then cleaned_matches.cleaned_risks
  else cleaned_matches.cleaned_risks || jsonb_build_array(cleaned_matches.deadline_warning)
end
from cleaned_matches
where matches.id = cleaned_matches.match_id
  and matches.risks is distinct from case
    when cleaned_matches.cleaned_risks ? cleaned_matches.deadline_warning then cleaned_matches.cleaned_risks
    else cleaned_matches.cleaned_risks || jsonb_build_array(cleaned_matches.deadline_warning)
  end;
