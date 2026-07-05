update public.opportunities
set
  buyer = 'Reykjavíkurborg',
  deadline = date '2026-07-21',
  location = 'Reykjavík / Höfuðborgarsvæðið',
  description = 'F.h. Umhverfis- og skipulagssviðs Reykjavíkurborgar er óskað eftir tilboðum í verkið Vogabyggð 1. Strandstígur - Gatna- og stígagerð, útboð nr. 16328. Verkefnið felst í fullnaðarfrágangi yfirborðs á hlutasvæðum götu og göngusvæða í Drómundarvogi og Bátavogi ásamt göngustíg með fram sjó og milli lóða. Verkið felur m.a. í sér rif á núverandi yfirborði, jarðvegsskipti, fyllingar, grjóthleðslu, steyptan stoðvegg, stígagerð, regnvatnslagnir, hellulögn, kantsteina, lýsingu, gróðursetningu, þökulögn, landmótun og almennan yfirborðsfrágang. Skilafrestur: 21.07.2026 kl. 10:00',
  status = 'open',
  raw_payload = coalesce(raw_payload, '{}'::jsonb) || jsonb_build_object(
    'buyer', 'Reykjavíkurborg',
    'extracted_buyer', 'Reykjavíkurborg',
    'deadline_at', '2026-07-21T10:00:00',
    'extracted_deadline_text', '21.07.2026 kl. 10:00',
    'deadline_warning', null,
    'extracted_location', 'Reykjavík / Höfuðborgarsvæðið',
    'quality_status', 'confirmed_tender',
    'opportunity_intent', 'confirmed_tender',
    'hidden_from_reports', false,
    'detail_page_enriched', true
  )
where title ilike 'Vogabyggð 1. Strandstígur%';

update public.opportunities
set
  buyer = 'FSRE / Framkvæmdasýslan Ríkiseignir',
  deadline = date '2026-08-20',
  location = 'Árborg / Suðurland',
  description = 'Framkvæmdasýslan - Ríkiseignir (FSRE), f.h. Dómsmálaráðuneytis, óskar eftir tilboðum fyrirtækja eða teyma fyrirtækja í almennu útboði sem felur í sér jarðvinnuframkvæmd á nýju öryggisfangelsi að Stóra-Hrauni í sveitarfélaginu Árborg. Fyrirhugað er að byggja nýtt öryggisfangelsi á háu öryggisstigi sem rýma skal í heildina 128 afplánunarfanga. Aðkoma að fangelsinu verður frá Gaulverjabæjarvegi (33). Skilafrestur: 20.08.2026 kl. 12:00',
  status = 'open',
  raw_payload = coalesce(raw_payload, '{}'::jsonb) || jsonb_build_object(
    'buyer', 'FSRE / Framkvæmdasýslan Ríkiseignir',
    'extracted_buyer', 'FSRE / Framkvæmdasýslan Ríkiseignir',
    'deadline_at', '2026-08-20T12:00:00',
    'extracted_deadline_text', '20.08.2026 kl. 12:00',
    'deadline_warning', null,
    'extracted_location', 'Árborg / Suðurland',
    'tender_number', '25-0115',
    'quality_status', 'confirmed_tender',
    'opportunity_intent', 'confirmed_tender',
    'hidden_from_reports', false,
    'detail_page_enriched', true
  )
where title ilike 'Stóra-Hraun Öryggisfangelsi%';

update public.opportunities
set
  buyer = 'Garðabær',
  deadline = date '2026-07-17',
  location = 'Garðabær / Höfuðborgarsvæðið',
  description = regexp_replace(
    coalesce(description, ''),
    '\s+(Skoða nánar|Um vefinn|2014\s*-\s*2026).*$',
    '',
    'i'
  ),
  status = 'open',
  raw_payload = coalesce(raw_payload, '{}'::jsonb) || jsonb_build_object(
    'buyer', 'Garðabær',
    'extracted_buyer', 'Garðabær',
    'deadline_at', '2026-07-17T14:00:00',
    'extracted_deadline_text', 'tilboðum skilað fyrir kl. 14:00 fimmtudaginn 17. júlí 2026',
    'deadline_warning', null,
    'completion_date_text', 'Verkinu skal lokið fyrir 01. júlí 2027.',
    'extracted_location', 'Garðabær / Höfuðborgarsvæðið',
    'quality_status', 'confirmed_tender',
    'opportunity_intent', 'confirmed_tender',
    'hidden_from_reports', false,
    'detail_page_enriched', true
  )
where title ilike 'Vífilsstaðavegur frá hringtorgi%';
