\set ON_ERROR_STOP on

create or replace function public.c0_assert(condition boolean, message text) returns void language plpgsql as $$
begin if condition is not true then raise exception 'C0 ASSERTION FAILED: %', message; end if; end;
$$;

insert into auth.users(id) values ('00000000-0000-4000-8000-000000000001');
insert into public.admin_users(user_id) values ('00000000-0000-4000-8000-000000000001');
insert into public.sources(id,name) values ('10000000-0000-4000-8000-000000000001','C0 source');
insert into public.v2_source_configs(id,source_id,source_key,display_name,adapter_type,mode,parser_name,parser_version,promotion_approved,promotion_reference_required)
values ('20000000-0000-4000-8000-000000000001','10000000-0000-4000-8000-000000000001','c0-source','C0 source','rss','promote','c0','1',true,true);
insert into public.v2_ingestion_runs(id,source_config_id,mode,trigger_type,status,error_count,suspicious_zero_items,started_at,finished_at)
values ('30000000-0000-4000-8000-000000000001','20000000-0000-4000-8000-000000000001','shadow','shadow','succeeded',0,false,now()-interval '1 minute',now());
insert into public.v2_source_health(source_config_id,status,circuit_state,last_run_id,last_run_at,last_success_at,parser_health)
values ('20000000-0000-4000-8000-000000000001','healthy','closed','30000000-0000-4000-8000-000000000001',now(),now(),'{"parser_errors":[],"suspicious_zero_items":false,"enrichment":{"failed":0}}');

create or replace function public.c0_insert_observation(obs_id uuid, ext text, ref text, url text, title_value text, approved boolean default true)
returns void language plpgsql as $$
declare fp text;
begin
  fp := public.v2_identity_fingerprint('C0 buyer', title_value, current_date + 30, ref);
  insert into public.v2_ingestion_observations(
    id,run_id,source_config_id,source_id,source_key,source_name,external_id,procurement_reference,discovered_url,canonical_url,normalized_canonical_url,
    title,buyer,deadline,safe_source_payload,content_hash,identity_fingerprint,parser_name,parser_version,fetched_at,validation_state,comparison_state,promotion_state,
    predicted_procurement_stage,predicted_actionable,predicted_confidence,predicted_reason,predicted_requires_admin_review,enrichment_status,
    approved_for_promotion,approved_at,approved_by,strong_procurement_evidence,deadline_evidence,promotion_enrichment_status
  ) values (
    obs_id,'30000000-0000-4000-8000-000000000001','20000000-0000-4000-8000-000000000001','10000000-0000-4000-8000-000000000001','c0-source','C0 source',ext,ref,url,url,url,
    title_value,'C0 buyer',current_date+30,'{}',repeat('a',64),fp,'c0','1',now(),'valid','v2_only','eligible',
    'open_competition',true,0.95,'Explicit tender',false,'enriched',approved,case when approved then now() end,case when approved then '00000000-0000-4000-8000-000000000001'::uuid end,true,'explicit_source','succeeded'
  );
end;
$$;

-- Non-approved fails closed.
select public.c0_insert_observation('40000000-0000-4000-8000-000000000001','not-approved','C0-NA','https://c0.test/not-approved','Not approved',false);
select public.c0_assert((select promotion_status='blocked' and block_code='V2_MANUAL_APPROVAL_REQUIRED' from public.promote_v2_observation('40000000-0000-4000-8000-000000000001')), 'non-approved observation must block');

select public.c0_insert_observation('41000000-0000-4000-8000-000000000013','approval-rpc','C0-G13','https://c0.test/g13','Explicit approval',false);
select * from public.approve_v2_observation_for_promotion('41000000-0000-4000-8000-000000000013','00000000-0000-4000-8000-000000000001','C1 selected canary');
select public.c0_assert((select approved_for_promotion and approved_at is not null and approved_by='00000000-0000-4000-8000-000000000001' and approval_note='C1 selected canary' from public.v2_ingestion_observations where id='41000000-0000-4000-8000-000000000013'), 'approval RPC must audit one observation and admin');
do $$ begin
  perform public.approve_v2_observation_for_promotion('41000000-0000-4000-8000-000000000013','00000000-0000-4000-8000-000000000099','invalid admin');
  raise exception 'non-admin approval unexpectedly succeeded';
exception when others then
  if sqlerrm <> 'V2_APPROVAL_ADMIN_REQUIRED' then raise; end if;
end $$;
do $$ begin
  set local role authenticated;
  perform public.promote_v2_observation('41000000-0000-4000-8000-000000000013');
  reset role;
  raise exception 'authenticated role unexpectedly executed service-only promotion';
exception when insufficient_privilege then
  reset role;
end $$;

-- Every mutable eligibility and health gate is exercised through the real RPC.
select public.c0_insert_observation('41000000-0000-4000-8000-000000000001','not-eligible','C0-G1','https://c0.test/g1','Gate not eligible');
update public.v2_ingestion_observations set promotion_state='blocked' where id='41000000-0000-4000-8000-000000000001';
select public.c0_assert((select block_code='V2_OBSERVATION_NOT_ELIGIBLE' from public.promote_v2_observation('41000000-0000-4000-8000-000000000001')), 'not eligible must block');

select public.c0_insert_observation('41000000-0000-4000-8000-000000000002','not-actionable','C0-G2','https://c0.test/g2','Gate not actionable');
update public.v2_ingestion_observations set predicted_actionable=false where id='41000000-0000-4000-8000-000000000002';
select public.c0_assert((select block_code='V2_PREDICTION_NOT_ACTIONABLE' from public.promote_v2_observation('41000000-0000-4000-8000-000000000002')), 'non-actionable must block');

select public.c0_insert_observation('41000000-0000-4000-8000-000000000003','review','C0-G3','https://c0.test/g3','Gate review');
update public.v2_ingestion_observations set predicted_requires_admin_review=true where id='41000000-0000-4000-8000-000000000003';
select public.c0_assert((select block_code='V2_PREDICTION_REVIEW_REQUIRED' from public.promote_v2_observation('41000000-0000-4000-8000-000000000003')), 'review-required must block');

select public.c0_insert_observation('41000000-0000-4000-8000-000000000004','low-confidence','C0-G4','https://c0.test/g4','Gate confidence');
update public.v2_ingestion_observations set predicted_confidence=.89 where id='41000000-0000-4000-8000-000000000004';
select public.c0_assert((select block_code='V2_CONFIDENCE_BELOW_THRESHOLD' from public.promote_v2_observation('41000000-0000-4000-8000-000000000004')), 'confidence below .90 must block');

select public.c0_insert_observation('41000000-0000-4000-8000-000000000005','no-deadline','C0-G5','https://c0.test/g5','Gate deadline absent');
update public.v2_ingestion_observations set deadline=null, deadline_evidence=null where id='41000000-0000-4000-8000-000000000005';
select public.c0_assert((select block_code='V2_EXPLICIT_DEADLINE_REQUIRED' from public.promote_v2_observation('41000000-0000-4000-8000-000000000005')), 'missing deadline must block');

select public.c0_insert_observation('41000000-0000-4000-8000-000000000006','expired','C0-G6','https://c0.test/g6','Gate expired');
update public.v2_ingestion_observations set deadline=current_date-1 where id='41000000-0000-4000-8000-000000000006';
select public.c0_assert((select block_code='V2_DEADLINE_NOT_STRICTLY_FUTURE' from public.promote_v2_observation('41000000-0000-4000-8000-000000000006')), 'expired deadline must block');

select public.c0_insert_observation('41000000-0000-4000-8000-000000000007','today','C0-G7','https://c0.test/g7','Gate today');
update public.v2_ingestion_observations set deadline=current_date where id='41000000-0000-4000-8000-000000000007';
select public.c0_assert((select block_code='V2_DEADLINE_NOT_STRICTLY_FUTURE' from public.promote_v2_observation('41000000-0000-4000-8000-000000000007')), 'deadline today must block initial rollout');

select public.c0_insert_observation('41000000-0000-4000-8000-000000000008','weak','C0-G8','https://c0.test/g8','Gate weak evidence');
update public.v2_ingestion_observations set strong_procurement_evidence=false where id='41000000-0000-4000-8000-000000000008';
select public.c0_assert((select block_code='V2_STRONG_PROCUREMENT_EVIDENCE_REQUIRED' from public.promote_v2_observation('41000000-0000-4000-8000-000000000008')), 'weak evidence must block');

select public.c0_insert_observation('41000000-0000-4000-8000-000000000009','enrichment-failed','C0-G9','https://c0.test/g9','Gate enrichment');
update public.v2_ingestion_observations set promotion_enrichment_status='failed' where id='41000000-0000-4000-8000-000000000009';
select public.c0_assert((select block_code='V2_OBSERVATION_ENRICHMENT_BLOCKED' from public.promote_v2_observation('41000000-0000-4000-8000-000000000009')), 'observation enrichment failure must block');

select public.c0_insert_observation('41000000-0000-4000-8000-000000000010','health','C0-G10','https://c0.test/g10','Gate source health');
update public.v2_source_health set status='degraded' where source_config_id='20000000-0000-4000-8000-000000000001';
select public.c0_assert((select block_code='V2_SOURCE_HEALTH_BLOCKED' from public.promote_v2_observation('41000000-0000-4000-8000-000000000010')), 'unhealthy source must block');
update public.v2_source_health set status='healthy' where source_config_id='20000000-0000-4000-8000-000000000001';

select public.c0_insert_observation('41000000-0000-4000-8000-000000000011','parser-error','C0-G11','https://c0.test/g11','Gate parser error');
update public.v2_source_health set parser_health=jsonb_set(parser_health,'{parser_errors}','["parse failed"]') where source_config_id='20000000-0000-4000-8000-000000000001';
select public.c0_assert((select block_code='V2_PARSER_ERRORS_PRESENT' from public.promote_v2_observation('41000000-0000-4000-8000-000000000011')), 'parser errors must block');
update public.v2_source_health set parser_health=jsonb_set(parser_health,'{parser_errors}','[]') where source_config_id='20000000-0000-4000-8000-000000000001';

select public.c0_insert_observation('41000000-0000-4000-8000-000000000012','source-enrichment','C0-G12','https://c0.test/g12','Gate source enrichment');
update public.v2_source_health set parser_health=jsonb_set(parser_health,'{enrichment,failed}','1') where source_config_id='20000000-0000-4000-8000-000000000001';
select public.c0_assert((select block_code='V2_SOURCE_ENRICHMENT_FAILURES_PRESENT' from public.promote_v2_observation('41000000-0000-4000-8000-000000000012')), 'source enrichment failure must block');
update public.v2_source_health set parser_health=jsonb_set(parser_health,'{enrichment,failed}','0') where source_config_id='20000000-0000-4000-8000-000000000001';

-- Clean new candidate creates one hidden canary, is idempotent, and rolls back cleanly.
select public.c0_insert_observation('40000000-0000-4000-8000-000000000002','new','C0-NEW','https://c0.test/new','Unique future tender');
select public.c0_assert((select created and promotion_status='promoted' from public.promote_v2_observation('40000000-0000-4000-8000-000000000002')), 'new candidate must promote');
select public.c0_assert((select status='hidden' and raw_payload->>'promotion_quarantine'='phase_c_canary' and (raw_payload->>'hidden_from_reports')::boolean from public.opportunities where external_id='new'), 'new opportunity must be quarantined');
select public.c0_assert((select zero_downstream from jsonb_to_record(public.v2_canary_downstream_assertions((select id from public.opportunities where external_id='new'))) as x(zero_downstream boolean)), 'new canary must have zero downstream');
select public.c0_assert((select promotion_status='promoted' and provenance_attached=false from public.promote_v2_observation('40000000-0000-4000-8000-000000000002')), 'repeat promotion must be idempotent');
select public.rollback_v2_canary_promotion('40000000-0000-4000-8000-000000000002','00000000-0000-4000-8000-000000000001','integration rollback');
select public.c0_assert(not exists(select 1 from public.opportunities where external_id='new'), 'clean rollback must delete only created canary');
select public.c0_assert((select rollback_status='already_rolled_back' from public.rollback_v2_canary_promotion('40000000-0000-4000-8000-000000000002','00000000-0000-4000-8000-000000000001','repeat rollback')), 'repeat rollback must be safe');

-- Existing deterministic match is provenance-only and rollback never deletes it.
insert into public.opportunities(source_id,external_id,title,buyer,description,deadline,url,status,raw_payload,procurement_stage,actionable_for_suppliers,classification_confidence,classified_by,classifier_version,requires_admin_review)
values ('10000000-0000-4000-8000-000000000001','legacy','Legacy title','Strong legacy buyer','Strong legacy description',current_date+30,'https://c0.test/legacy','open','{"procurement_reference":"C0-LEG"}','open_competition',true,.99,'admin','legacy',false);
select public.c0_insert_observation('40000000-0000-4000-8000-000000000003','other-ext','C0-LEG','https://c0.test/other','Different V2 title');
update public.v2_ingestion_observations set comparison_state='legacy_match' where id='40000000-0000-4000-8000-000000000003';
select public.c0_assert((select not created from public.promote_v2_observation('40000000-0000-4000-8000-000000000003')), 'existing candidate must be reused');
select public.c0_assert((select buyer='Strong legacy buyer' and description='Strong legacy description' from public.opportunities where external_id='legacy'), 'existing opportunity must be mutation-free');
select public.c0_assert((select provenance_type='existing_opportunity_matched' from public.opportunity_ingestion_provenance where observation_id='40000000-0000-4000-8000-000000000003'), 'existing provenance type must be explicit');
select public.rollback_v2_canary_promotion('40000000-0000-4000-8000-000000000003','00000000-0000-4000-8000-000000000001','detach existing');
select public.c0_assert(exists(select 1 from public.opportunities where external_id='legacy'), 'existing opportunity must survive rollback');

-- Multiple reference matches and conflicting reference/URL candidates block.
insert into public.opportunities(source_id,external_id,title,deadline,url,status,raw_payload,procurement_stage) values
('10000000-0000-4000-8000-000000000001','dup-a','Dup A',current_date+30,'https://c0.test/dup-a','open','{"procurement_reference":"C0-DUP"}','open_competition'),
('10000000-0000-4000-8000-000000000001','dup-b','Dup B',current_date+30,'https://c0.test/dup-b','open','{"procurement_reference":"C0-DUP"}','open_competition'),
('10000000-0000-4000-8000-000000000001','url-target','URL target',current_date+30,'https://c0.test/conflict','open','{"procurement_reference":"C0-OTHER"}','open_competition');
select public.c0_insert_observation('40000000-0000-4000-8000-000000000004','dup-obs','C0-DUP','https://c0.test/dup-obs','Multiple ref candidate');
select public.c0_assert((select block_code='V2_MULTIPLE_REFERENCE_CANDIDATES' from public.promote_v2_observation('40000000-0000-4000-8000-000000000004')), 'multiple reference candidates must block');
select public.c0_insert_observation('40000000-0000-4000-8000-000000000005','conflict-obs','C0-LEG','https://c0.test/conflict','Identity conflict');
select public.c0_assert((select block_code='V2_CONFLICTING_DETERMINISTIC_IDENTITIES' from public.promote_v2_observation('40000000-0000-4000-8000-000000000005')), 'reference/url conflict must block');

-- Fuzzy-only candidate blocks for review.
insert into public.opportunities(source_id,external_id,title,buyer,deadline,url,status,raw_payload,procurement_stage)
values ('10000000-0000-4000-8000-000000000001','fuzzy-target','Very distinctive airport runway tender','Different buyer',current_date+20,'https://c0.test/fuzzy-target','open','{}','open_competition');
select public.c0_insert_observation('40000000-0000-4000-8000-000000000006','fuzzy-obs','C0-FUZZ','https://c0.test/fuzzy-obs','Very distinctive airport runway tender');
select public.c0_assert((select promotion_status='review_required' and block_code='V2_FUZZY_REVIEW_REQUIRED' from public.promote_v2_observation('40000000-0000-4000-8000-000000000006')), 'fuzzy candidate must block for review');

-- Rollback refuses to delete a canary with downstream state.
select public.c0_insert_observation('40000000-0000-4000-8000-000000000007','dependent','C0-DEP','https://c0.test/dependent','Dependent canary');
select * from public.promote_v2_observation('40000000-0000-4000-8000-000000000007');
insert into public.opportunity_matches(opportunity_id) select id from public.opportunities where external_id='dependent';
do $$ begin
  perform public.rollback_v2_canary_promotion('40000000-0000-4000-8000-000000000007','00000000-0000-4000-8000-000000000001','must block');
  raise exception 'rollback unexpectedly succeeded';
exception when others then
  if sqlerrm not like 'V2_ROLLBACK_DOWNSTREAM_DEPENDENCIES%' then raise; end if;
end $$;
select public.c0_assert(exists(select 1 from public.opportunities where external_id='dependent'), 'dependency rollback must delete nothing');
