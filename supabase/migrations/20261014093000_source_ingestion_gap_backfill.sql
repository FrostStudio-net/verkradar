-- A planned Vegagerðin row may legitimately require fuzzy review without
-- blocking an unrelated current tender. The per-observation comparison gate
-- below remains unchanged, as do all global conflict/error/health safeguards.
do $$
declare
  function_sql text;
  global_fuzzy_gate text := $gate$
     or coalesce(nullif(parser#>>'{comparison,fuzzy_only}',''),'0')::int<>0$gate$;
begin
  function_sql := pg_get_functiondef('public.v2_admit_vegagerdin_observation(uuid)'::regprocedure);
  if strpos(function_sql, global_fuzzy_gate) = 0 then
    raise exception 'V2_VEGAGERDIN_GLOBAL_FUZZY_GATE_PATCH_TARGET_MISSING';
  end if;
  execute replace(function_sql, global_fuzzy_gate, '');

  function_sql := pg_get_functiondef('public.v2_admit_vegagerdin_observation(uuid)'::regprocedure);
  if strpos(function_sql, global_fuzzy_gate) <> 0
     or strpos(function_sql, $check$o.comparison_state not in ('legacy_match','v2_only')$check$) = 0
     or strpos(function_sql, $check$match_type='fuzzy_review_candidate'$check$) = 0 then
    raise exception 'V2_VEGAGERDIN_PER_OBSERVATION_GATE_VERIFICATION_FAILED';
  end if;
end;
$$;

-- Holtastöð was imported from the official Mosfellsbær RSS feed before detail
-- enrichment existed, then aged out of the feed. Backfill only that exact
-- official canonical row with the same fields now produced by the connector.
update public.opportunities o
set buyer = 'Mosfellsbær',
    description = 'Mosfellsbær óskar eftir tilboðum í gerð grjótgildru við skólpdælustöðina Holtastöð. Helstu verkþættir eru að útbúa nýja grjótgildru framan við skólpdælustöðina. Helstu magntölur: gröftur 180 m3; burðarhæf fylling 45 m3; steypumót 88 m2; bendistál 2.700 kg; steypa 17 m3; færsla háspennustrengs 10 m. Verkinu skal lokið 15. janúar 2027. Útboðsgögn eru afhent rafrænt. Tilboðum skal skilað rafrænt eigi síðar en kl. 11:00 mánudaginn 19. október 2026.',
    deadline = date '2026-10-19',
    url = 'https://mos.is/mannlif/um-mosfellsbae/frettir/utbod-grjotgildra-vid-holtastod/',
    status = 'open',
    raw_payload = coalesce(o.raw_payload, '{}'::jsonb) || jsonb_build_object(
      'buyer', 'Mosfellsbær',
      'extracted_buyer', 'Mosfellsbær',
      'detail_page_enriched', true,
      'detail_page_url', 'https://mos.is/mannlif/um-mosfellsbae/frettir/utbod-grjotgildra-vid-holtastod/',
      'canonical_source_url', 'https://mos.is/mannlif/um-mosfellsbae/frettir/utbod-grjotgildra-vid-holtastod/',
      'extracted_deadline_text', 'Tilboðum skal skilað rafrænt eigi síðar en kl. 11:00 mánudaginn 19. október 2026.',
      'extracted_deadline_source', 'official_detail_page_backfill',
      'bid_deadline', '2026-10-19',
      'deadline_at', '2026-10-19T11:00:00Z',
      'bid_deadline_at', '2026-10-19T11:00:00Z',
      'quality_status', 'confirmed_tender',
      'opportunity_intent', 'confirmed_tender',
      'hidden_from_reports', false,
      'review_required', false,
      'alert_eligible', true,
      'source_gap_backfilled_at', now()
    ),
    procurement_stage = 'open_competition'::public.procurement_stage,
    actionable_for_suppliers = true,
    classification_confidence = 0.98,
    classification_reason = 'Official Mosfellsbær tender page contains an explicit invitation, full work scope, and future bid deadline.',
    positive_signals = array['official buyer page', 'explicit invitation to tender', 'explicit future submission deadline', 'detailed construction scope'],
    negative_signals = '{}',
    classified_by = 'deterministic_rule',
    classified_at = now(),
    classifier_version = 'source-detail-backfill-v1',
    requires_admin_review = false,
    updated_at = now()
from public.sources s
where s.id = o.source_id
  and s.name = 'Mosfellsbær Municipality'
  and o.title = 'Útboð: Grjótgildra við Holtastöð'
  and o.url = 'https://mos.is/mannlif/um-mosfellsbae/frettir/utbod-grjotgildra-vid-holtastod/'
  and o.deadline is null;
