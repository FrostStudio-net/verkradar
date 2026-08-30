begin;

create or replace function pg_temp.assert_true(ok boolean, message text) returns void language plpgsql as $$ begin if not coalesce(ok,false) then raise exception 'ASSERTION FAILED: %',message; end if; end $$;

do $$
declare c public.v2_source_configs%rowtype; run1 uuid:=gen_random_uuid(); run2 uuid:=gen_random_uuid();
  obs1 uuid:=gen_random_uuid(); obs2 uuid:=gen_random_uuid(); obs3 uuid:=gen_random_uuid(); obs4 uuid:=gen_random_uuid();
  admitted record; reused record; blocked record; opp uuid; opp_updated timestamptz;
begin
  select * into c from public.v2_source_configs where source_key='reykjavik-utbod-v2';
  if c.id is null then raise exception 'Reykjavík config missing'; end if;
  update public.v2_source_configs set routine_production_enabled=true,mode='shadow',promotion_approved=false,production_canary_enabled=false,release_feature_enabled=false,release_approved=false,routine_admission_max_new_per_run=1,routine_admission_max_new_per_day=1,routine_admission_scan_limit=10 where id=c.id;

  insert into public.v2_ingestion_runs(id,source_config_id,mode,trigger_type,status,error_count,suspicious_zero_items,started_at,finished_at) values(run1,c.id,'shadow','automation','succeeded',0,false,now(),now());
  insert into public.v2_source_health(source_config_id,status,circuit_state,last_run_id,last_run_at,last_success_at,last_observation_count,parser_health)
  values(c.id,'healthy','closed',run1,now(),now(),1,'{"parser_errors":[],"suspicious_zero_items":false,"enrichment":{"failed":0}}')
  on conflict(source_config_id) do update set status='healthy',circuit_state='closed',last_run_id=excluded.last_run_id,parser_health=excluded.parser_health;
  insert into public.v2_ingestion_observations(id,run_id,source_config_id,source_id,source_key,source_name,external_id,procurement_reference,canonical_url,normalized_canonical_url,title,description,buyer,deadline,safe_source_payload,content_hash,identity_fingerprint,parser_name,parser_version,fetched_at,validation_state,comparison_state,promotion_state,predicted_procurement_stage,predicted_actionable,predicted_confidence,predicted_requires_admin_review,strong_procurement_evidence,deadline_evidence,promotion_enrichment_status)
  values(obs1,run1,c.id,c.source_id,c.source_key,c.display_name,'routine-new','RT-NEW','https://reykjavik.is/utbod/rt-new','https://reykjavik.is/utbod/rt-new','Unique Reykjavík routine construction tender alpha','Public tender',c.display_name,current_date+30,'{}',repeat('a',64),repeat('b',64),c.parser_name,c.parser_version,now(),'valid','v2_only','not_eligible','open_competition',true,.99,false,true,'explicit_source','succeeded');
  select * into admitted from public.v2_admit_reykjavik_observation(obs1);
  perform pg_temp.assert_true(admitted.admission_status='admitted' and admitted.created,'new strict candidate admitted');
  opp:=admitted.opportunity_id;
  select updated_at into opp_updated from public.opportunities where id=opp;
  perform pg_temp.assert_true((select status='open' and not phase_c_communication_hold and raw_payload->>'promotion_quarantine' is null from public.opportunities where id=opp),'new opportunity directly reaches normal state atomically');
  perform pg_temp.assert_true((select count(*)=1 from public.opportunity_ingestion_provenance where observation_id=obs1 and provenance_type='v2_created'),'new provenance');
  perform pg_temp.assert_true((select count(*)=0 from public.opportunity_matches where opportunity_id=opp),'no matching trigger');
  perform pg_temp.assert_true((select count(*)=0 from public.report_items where opportunity_id=opp),'no report trigger');

  insert into public.v2_ingestion_runs(id,source_config_id,mode,trigger_type,status,error_count,suspicious_zero_items,started_at,finished_at) values(run2,c.id,'shadow','automation','succeeded',0,false,now(),now());
  update public.v2_source_health set last_run_id=run2,status='healthy',circuit_state='closed' where source_config_id=c.id;
  insert into public.v2_ingestion_observations(id,run_id,source_config_id,source_id,source_key,source_name,external_id,procurement_reference,canonical_url,normalized_canonical_url,title,description,buyer,deadline,safe_source_payload,content_hash,identity_fingerprint,parser_name,parser_version,fetched_at,validation_state,comparison_state,promotion_state,predicted_procurement_stage,predicted_actionable,predicted_confidence,predicted_requires_admin_review,strong_procurement_evidence,deadline_evidence,promotion_enrichment_status)
  values(obs2,run2,c.id,c.source_id,c.source_key,c.display_name,'routine-new','RT-NEW','https://reykjavik.is/utbod/rt-new','https://reykjavik.is/utbod/rt-new','Unique Reykjavík routine construction tender alpha','Public tender',c.display_name,current_date+30,'{}',repeat('c',64),repeat('b',64),c.parser_name,c.parser_version,now(),'valid','legacy_match','not_eligible','open_competition',true,.99,false,true,'explicit_source','succeeded');
  select * into reused from public.v2_admit_reykjavik_observation(obs2);
  perform pg_temp.assert_true(reused.admission_status='admitted' and not reused.created and reused.opportunity_id=opp,'deterministic duplicate reused');
  perform pg_temp.assert_true((select updated_at=opp_updated from public.opportunities where id=opp),'existing opportunity mutation-free');
  perform pg_temp.assert_true((select count(*)=1 from public.opportunity_ingestion_provenance where observation_id=obs2 and provenance_type='existing_opportunity_matched'),'reuse provenance');

  insert into public.opportunities(source_id,external_id,title,buyer,deadline,url,status,raw_payload,procurement_stage,actionable_for_suppliers,classification_confidence,classification_reason,classified_by,classified_at,classifier_version,requires_admin_review)
  values(c.source_id,'fuzzy-existing','Routine fuzzy municipal service notice',c.display_name,current_date+30,'https://example.test/fuzzy','open','{}','open_competition',true,.99,'integration fixture','deterministic_rule',now(),'test',false);
  insert into public.v2_ingestion_observations(id,run_id,source_config_id,source_id,source_key,source_name,external_id,procurement_reference,canonical_url,normalized_canonical_url,title,buyer,deadline,safe_source_payload,content_hash,identity_fingerprint,parser_name,parser_version,fetched_at,validation_state,comparison_state,promotion_state,predicted_procurement_stage,predicted_actionable,predicted_confidence,predicted_requires_admin_review,strong_procurement_evidence,deadline_evidence,promotion_enrichment_status)
  values(obs3,run2,c.id,c.source_id,c.source_key,c.display_name,'fuzzy-new','RT-FUZZY','https://reykjavik.is/utbod/rt-fuzzy','https://reykjavik.is/utbod/rt-fuzzy','Routine fuzzy municipal service notice',c.display_name,current_date+30,'{}',repeat('d',64),repeat('e',64),c.parser_name,c.parser_version,now(),'valid','v2_only','not_eligible','open_competition',true,.99,false,true,'explicit_source','succeeded');
  select * into blocked from public.v2_admit_reykjavik_observation(obs3);
  perform pg_temp.assert_true(blocked.reason_code='V2_FUZZY_REVIEW_REQUIRED' and (select promotion_state='review_required' from public.v2_ingestion_observations where id=obs3),'fuzzy candidate blocked');

  insert into public.v2_ingestion_observations(id,run_id,source_config_id,source_id,source_key,source_name,external_id,procurement_reference,canonical_url,normalized_canonical_url,title,buyer,deadline,safe_source_payload,content_hash,identity_fingerprint,parser_name,parser_version,fetched_at,validation_state,comparison_state,promotion_state,predicted_procurement_stage,predicted_actionable,predicted_confidence,predicted_requires_admin_review,strong_procurement_evidence,deadline_evidence,promotion_enrichment_status)
  values(obs4,run2,c.id,c.source_id,c.source_key,c.display_name,'expired','RT-EXPIRED','https://reykjavik.is/utbod/rt-expired','https://reykjavik.is/utbod/rt-expired','Expired unique routine tender omega',c.display_name,current_date-1,'{}',repeat('f',64),repeat('1',64),c.parser_name,c.parser_version,now(),'valid','v2_only','not_eligible','open_competition',true,.99,false,true,'explicit_source','succeeded');
  select * into blocked from public.v2_admit_reykjavik_observation(obs4);
  perform pg_temp.assert_true(blocked.reason_code='V2_ROUTINE_DEADLINE_BLOCKED','expired opportunity blocked');
end $$;

rollback;
