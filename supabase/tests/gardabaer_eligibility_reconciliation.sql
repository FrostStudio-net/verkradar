begin;

do $$
declare
  gard_config public.v2_source_configs%rowtype;
  rik_config public.v2_source_configs%rowtype;
  target_deadline date:=current_date+15;
  target_title text:='Vetrarþjónusta integration test';
  target_external text:='gardabaer:vetrarthjonusta-integration-test';
  target_url text:='https://www.gardabaer.is/framkvaemdir/utbod/vetrarthjonusta-integration-test';
  target_fp text;
  result_row record;
  before_business jsonb;
  after_business jsonb;
  resolution jsonb;
begin
  select * into gard_config from public.v2_source_configs where source_key='gardabaer-utbod-v2';
  select * into rik_config from public.v2_source_configs where source_key='rikiskaup-utbod-v2';
  if gard_config.id is null or rik_config.id is null then raise exception 'fixture source configs missing'; end if;
  if public.v2_normalize_identity_text('Garðabær')<>'gardabar' then raise exception 'Garðabær normalization regression'; end if;

  insert into public.v2_ingestion_runs(id,source_config_id,mode,trigger_type,status,fetched_count,parsed_count,observation_count,started_at,finished_at)
  values('10000000-0000-4000-8000-000000000001',gard_config.id,'shadow','automation','succeeded',1,1,1,now()-interval '1 minute',now());
  insert into public.v2_source_health(source_config_id,status,circuit_state,last_run_id,last_run_at,last_success_at,last_observation_count,parser_health)
  values(gard_config.id,'healthy','closed','10000000-0000-4000-8000-000000000001',now(),now(),1,jsonb_build_object(
    'parser_name','gardabaer-page-monitor','parser_version','2.0.0','fetched_count',1,'parsed_count',1,'valid_count',1,
    'invalid_count',0,'duplicate_count',0,'parser_errors','[]'::jsonb,'suspicious_zero_items',false,
    'enrichment',jsonb_build_object('attempted',1,'succeeded',1,'failed',0),
    'recovery',jsonb_build_object('source_status_distribution',jsonb_build_object('active',1))))
  on conflict(source_config_id) do update set status=excluded.status,circuit_state=excluded.circuit_state,last_run_id=excluded.last_run_id,
    last_run_at=excluded.last_run_at,last_success_at=excluded.last_success_at,last_observation_count=excluded.last_observation_count,parser_health=excluded.parser_health;

  target_fp:=public.v2_identity_fingerprint('Garðabær',target_title,target_deadline,null);
  insert into public.opportunities(id,source_id,external_id,title,buyer,description,deadline,location,url,status,raw_payload,
    procurement_stage,actionable_for_suppliers,classification_confidence,classification_reason,negative_signals,classified_by,classified_at,classifier_version,requires_admin_review)
  values
    ('20000000-0000-4000-8000-000000000001',rik_config.source_id,'integration-rik-canonical',target_title,'Garðabær','Legacy canonical content',target_deadline,'Reykjavík / Höfuðborgarsvæðið','https://utbodsvefur.is/vetrarthjonusta-integration-test/','open','{}',
      'uncertain',false,0.35,'Legacy weak classification',array['insufficient_procurement_evidence'],'deterministic_rule',now()-interval '1 day','procurement-stage-v1',true),
    ('20000000-0000-4000-8000-000000000002',gard_config.source_id,target_external,target_title,'Garðabær','Official legacy content',null,'All Iceland',target_url,'hidden',jsonb_build_object(
      'is_duplicate',true,'duplicate_of','20000000-0000-4000-8000-000000000001','canonical_opportunity_id','20000000-0000-4000-8000-000000000001',
      'hidden_from_reports',true,'admin_report_status','hidden'),
      'uncertain',false,0,'Official stale classification',array['insufficient_procurement_evidence'],'deterministic_rule',now()-interval '1 day','procurement-stage-v1',true);

  insert into public.v2_ingestion_observations(id,run_id,source_config_id,source_id,source_key,source_name,external_id,discovered_url,canonical_url,
    normalized_canonical_url,title,description,buyer,deadline,publication_date,location,safe_source_payload,content_hash,identity_fingerprint,
    parser_name,parser_version,fetched_at,validation_state,comparison_state,promotion_state,predicted_procurement_stage,predicted_actionable,
    predicted_confidence,predicted_reason,predicted_requires_admin_review,enrichment_status,strong_procurement_evidence,deadline_evidence,promotion_enrichment_status)
  values('30000000-0000-4000-8000-000000000001','10000000-0000-4000-8000-000000000001',gard_config.id,gard_config.source_id,
    'gardabaer-utbod-v2','Garðabær útboð v2',target_external,target_url,target_url,public.v2_normalize_canonical_url(target_url),target_title,
    'Verified official source content','Garðabær',target_deadline,current_date,'Garðabær',jsonb_build_object('shadow_enrichment',jsonb_build_object('source_status','active')),
    repeat('a',64),target_fp,'gardabaer-page-monitor','2.0.0',now(),'valid','legacy_match','blocked','open_competition',true,0.95,
    'Verified request for bids with explicit deadline.',false,'enriched',true,'explicit_source','succeeded');

  select to_jsonb(x)-array['procurement_stage','actionable_for_suppliers','classification_confidence','classification_reason','positive_signals',
    'negative_signals','classified_by','classified_at','classifier_version','requires_admin_review','updated_at'] into before_business
  from public.opportunities x where id='20000000-0000-4000-8000-000000000001';

  select * into result_row from public.v2_admit_gardabaer_observation('30000000-0000-4000-8000-000000000001');
  if result_row.admission_status<>'admitted' or result_row.opportunity_id<>'20000000-0000-4000-8000-000000000001' or result_row.created then
    raise exception 'linked canonical group did not reconcile to its designated canonical target: %',to_jsonb(result_row);
  end if;
  if (select count(*) from public.opportunities where title=target_title)<>2 then raise exception 'reconciliation created a duplicate opportunity'; end if;
  if not exists(select 1 from public.opportunities where id='20000000-0000-4000-8000-000000000001' and procurement_stage='open_competition'
    and actionable_for_suppliers and not requires_admin_review and classification_confidence=0.95 and deadline=target_deadline and classified_by='admin') then
    raise exception 'canonical classification was not narrowly reconciled';
  end if;
  if not exists(select 1 from public.opportunities where id='20000000-0000-4000-8000-000000000002' and status='hidden' and deadline is null
    and raw_payload->>'canonical_opportunity_id'='20000000-0000-4000-8000-000000000001') then raise exception 'official duplicate row was mutated'; end if;

  select to_jsonb(x)-array['procurement_stage','actionable_for_suppliers','classification_confidence','classification_reason','positive_signals',
    'negative_signals','classified_by','classified_at','classifier_version','requires_admin_review','updated_at'] into after_business
  from public.opportunities x where id='20000000-0000-4000-8000-000000000001';
  if before_business is distinct from after_business then raise exception 'non-classification canonical fields changed'; end if;
  if not exists(select 1 from public.opportunity_ingestion_provenance where observation_id='30000000-0000-4000-8000-000000000001'
    and opportunity_id='20000000-0000-4000-8000-000000000001' and provenance_type='existing_opportunity_matched'
    and identity_match_type='fingerprint' and (metadata->>'established_canonical_group')::boolean and metadata->>'mutation_scope'='classification_only') then raise exception 'reconciliation provenance missing'; end if;
  if (select count(*) from public.v2_phase_c_events where observation_id='30000000-0000-4000-8000-000000000001')<>2 then raise exception 'expected exactly two audit events'; end if;
  if not coalesce((public.v2_canary_downstream_assertions('20000000-0000-4000-8000-000000000001')->>'zero_downstream')::boolean,false) then raise exception 'reconciliation created downstream state'; end if;

  insert into public.opportunities(id,source_id,external_id,title,buyer,deadline,url,status,raw_payload,procurement_stage,actionable_for_suppliers,
    classification_confidence,classified_by,classifier_version,requires_admin_review)
  values
    ('20000000-0000-4000-8000-000000000003',rik_config.source_id,'unrelated-a','Unrelated A','Buyer',target_deadline,'https://example.test/a','open','{}','uncertain',false,0.35,'deterministic_rule','procurement-stage-v1',true),
    ('20000000-0000-4000-8000-000000000004',rik_config.source_id,'unrelated-b','Unrelated B','Buyer',target_deadline,'https://example.test/b','open','{}','uncertain',false,0.35,'deterministic_rule','procurement-stage-v1',true),
    ('20000000-0000-4000-8000-000000000005',gard_config.source_id,'broken-link','Broken link','Buyer',null,'https://example.test/broken','hidden',jsonb_build_object('is_duplicate',true,'canonical_opportunity_id','20000000-0000-4000-8000-000000000099'),'uncertain',false,0,'deterministic_rule','procurement-stage-v1',true);

  resolution:=public.v2_resolve_gardabaer_established_group(array['20000000-0000-4000-8000-000000000003'::uuid,'20000000-0000-4000-8000-000000000004'::uuid]);
  if resolution->>'error_code'<>'V2_ROUTINE_DETERMINISTIC_CONFLICT' then raise exception 'unrelated candidates did not fail closed: %',resolution; end if;
  resolution:=public.v2_resolve_gardabaer_established_group(array['20000000-0000-4000-8000-000000000005'::uuid]);
  if resolution->>'error_code'<>'V2_ROUTINE_CANONICAL_LINK_BROKEN' then raise exception 'broken canonical target did not fail closed: %',resolution; end if;
end;
$$;

rollback;
