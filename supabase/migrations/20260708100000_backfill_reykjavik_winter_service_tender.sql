-- Correct existing Ríkiskaup/Útboðsvefur winter-service tender metadata.
-- The source text/title identifies Reykjavík, but older imports stored the row
-- as All Iceland/Unknown buyer, which prevented local Reykjavík companies from
-- matching when national projects were disabled.

update public.opportunities
set
  buyer = case
    when lower(coalesce(buyer, '')) in ('', 'unknown', 'unknown buyer', 'admin', 'administrator', 'editor', 'ritstjóri')
      then 'Reykjavíkurborg'
    else buyer
  end,
  location = 'Reykjavík / Höfuðborgarsvæðið',
  raw_payload = coalesce(raw_payload, '{}'::jsonb) || jsonb_build_object(
    'buyer', case
      when lower(coalesce(buyer, '')) in ('', 'unknown', 'unknown buyer', 'admin', 'administrator', 'editor', 'ritstjóri')
        then 'Reykjavíkurborg'
      else buyer
    end,
    'extracted_buyer', case
      when lower(coalesce(buyer, '')) in ('', 'unknown', 'unknown buyer', 'admin', 'administrator', 'editor', 'ritstjóri')
        then 'Reykjavíkurborg'
      else coalesce(raw_payload->>'extracted_buyer', buyer)
    end,
    'extracted_location', 'Reykjavík / Höfuðborgarsvæðið',
    'location_inference', 'reykjavik_winter_service_backfill',
    'buyer_inference', 'reykjavik_winter_service_backfill',
    'hidden_from_reports', false
  )
where
  (
    title ilike '%Vetrarþjónusta göngu- og hjólaleiða%'
    or title ilike '%Vetrarthjonusta gongu- og hjolaleida%'
    or title ilike '%útboð nr. 16317%'
    or title ilike '%utbod nr. 16317%'
    or external_id ilike '%16317%'
    or url ilike '%16317%'
  )
  and (
    lower(coalesce(location, '')) in ('', 'unknown', 'all iceland', 'iceland', 'island')
    or coalesce(buyer, '') = ''
    or lower(coalesce(buyer, '')) in ('unknown', 'unknown buyer', 'admin', 'administrator', 'editor', 'ritstjóri')
  );
