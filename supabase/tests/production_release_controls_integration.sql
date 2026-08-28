begin;

insert into auth.users(id) values ('00000000-0000-4000-8000-000000000091') on conflict do nothing;
insert into public.admin_users(user_id) values ('00000000-0000-4000-8000-000000000091') on conflict do nothing;

do $$
declare
  c public.v2_source_configs%rowtype;
  run_id_value uuid := '00000000-0000-4000-8000-000000000092';
  observation_id_value uuid := '00000000-0000-4000-8000-000000000093';
  opportunity_id_value uuid := '00000000-0000-4000-8000-000000000094';
  opportunity_before jsonb;
  observation_before jsonb;
  result jsonb;
begin
  -- Neutralize only inside this rolled-back test transaction so prior local test
  -- artifacts cannot make the one-canary contract nondeterministic.
  perform public.v2_phase_c_authorize_transaction('rollback',true);
  update public.opportunities set raw_payload=raw_payload-'promotion_quarantine'
    where raw_payload->>'promotion_quarantine'='phase_c_canary';
  perform public.v2_phase_c_authorize_transaction('rollback',false);
  update public.v2_ingestion_observations set approved_for_promotion=false,
    promoted_opportunity_id=null,promotion_state='not_eligible',approved_for_release=false;
  update public.v2_source_configs set promotion_approved=false,
    mode=case when mode='promote' then 'shadow' else mode end,
    production_canary_enabled=false,release_feature_enabled=false,release_approved=false;
  update public.automation_settings set value='false' where key='phase_c_release_enabled';
  update public.automation_settings set value='true' where key='phase_c_production_enabled';

  select * into c from public.v2_source_configs where source_key='reykjavik-utbod-v2';
  update public.v2_source_configs set mode='shadow',promotion_approved=false,
    production_shadow_enabled=true,production_canary_enabled=true,
    release_feature_enabled=false,release_approved=false where id=c.id;

  insert into public.v2_ingestion_runs(
    id,source_config_id,mode,trigger_type,status,error_count,suspicious_zero_items,
    started_at,finished_at,created_at
  ) values(run_id_value,c.id,'shadow','shadow','succeeded',0,false,now()-interval '1 minute',now(),now());
  insert into public.v2_source_health(source_config_id,status,circuit_state,last_run_id,last_run_at,last_success_at,last_error_code,parser_health)
  values(c.id,'healthy','closed',run_id_value,now(),now(),null,'{"parser_errors":[],"suspicious_zero_items":false}')
  on conflict(source_config_id) do update set status='healthy',circuit_state='closed',last_run_id=excluded.last_run_id,last_run_at=now(),last_success_at=now(),last_error_code=null,parser_health=excluded.parser_health;

  insert into public.v2_ingestion_observations(
    id,run_id,source_config_id,source_id,source_key,source_name,external_id,
    procurement_reference,discovered_url,canonical_url,normalized_canonical_url,
    title,buyer,deadline,safe_source_payload,content_hash,identity_fingerprint,
    parser_name,parser_version,fetched_at,validation_state,comparison_state,promotion_state,
    predicted_procurement_stage,predicted_actionable,predicted_confidence,predicted_reason,
    predicted_requires_admin_review,enrichment_status,approved_for_promotion,approved_at,
    approved_by,strong_procurement_evidence,deadline_evidence,promotion_enrichment_status
  ) values(
    observation_id_value,run_id_value,c.id,c.source_id,c.source_key,c.display_name,
    'release-control-test-unique','RC-UNIQUE-2026',
    'https://reykjavik.is/utbod/release-control-test-unique','https://reykjavik.is/utbod/release-control-test-unique','https://reykjavik.is/utbod/release-control-test-unique',
    'Release control unique canary 8f13b7','Reykjavíkurborg',current_date+30,'{}',
    encode(digest(observation_id_value::text,'sha256'),'hex'),
    public.v2_identity_fingerprint('Reykjavíkurborg','Release control unique canary 8f13b7',current_date+30,'RC-UNIQUE-2026'),
    'release-control-test','1',now(),'valid','baseline_unavailable','eligible',
    'open_competition',true,.99,'Explicit future tender',false,'enriched',true,now(),
    '00000000-0000-4000-8000-000000000091',true,'explicit_source','succeeded'
  );
  insert into public.opportunities(
    id,source_id,external_id,title,buyer,deadline,url,status,raw_payload,
    procurement_stage,actionable_for_suppliers,classification_confidence,
    classification_reason,classified_by,classifier_version,requires_admin_review
  ) values(
    opportunity_id_value,c.source_id,'release-control-test-unique','Release control unique canary 8f13b7',
    'Reykjavíkurborg',current_date+30,'https://reykjavik.is/utbod/release-control-test-unique','hidden',
    '{"promotion_quarantine":"phase_c_canary","hidden_from_reports":true,"admin_report_status":"hidden","procurement_reference":"RC-UNIQUE-2026"}',
    'open_competition',true,.99,'Explicit future tender','deterministic_rule','release-control-test',false
  );
  update public.v2_ingestion_observations set promotion_state='promoted',promoted_opportunity_id=opportunity_id_value where id=observation_id_value;
  insert into public.opportunity_ingestion_provenance(
    opportunity_id,observation_id,source_config_id,provenance_type,identity_match_type,content_hash,metadata
  ) select opportunity_id_value,id,source_config_id,'v2_created','same_source_external_id',content_hash,
    '{"deterministic_candidate_ids":[],"matched_identity_keys":["source_external_id","procurement_reference","canonical_url","fingerprint"]}'
    from public.v2_ingestion_observations where id=observation_id_value;

  opportunity_before:=(select to_jsonb(o) from public.opportunities o where id=opportunity_id_value);
  observation_before:=(select to_jsonb(o)-'approved_for_release'-'release_approved_at'-'release_approved_by'-'release_approval_reason'-'updated_at' from public.v2_ingestion_observations o where id=observation_id_value);

  begin
    perform public.set_reykjavik_canary_release_enabled(observation_id_value,'00000000-0000-4000-8000-000000000099',true,'00000000-0000-4000-8000-000000000091');
    raise exception 'wrong opportunity unexpectedly enabled release';
  exception when others then
    if sqlerrm not in ('V2_RELEASE_OPPORTUNITY_NOT_FOUND','V2_RELEASE_CANARY_LINK_MISMATCH') then raise; end if;
  end;
  begin
    perform public.set_reykjavik_canary_release_enabled(observation_id_value,opportunity_id_value,true,'00000000-0000-4000-8000-000000000099');
    raise exception 'non-admin unexpectedly enabled release';
  exception when others then
    if sqlerrm<>'V2_RELEASE_ADMIN_REQUIRED' then raise; end if;
  end;

  result:=public.set_reykjavik_canary_release_enabled(observation_id_value,opportunity_id_value,true,'00000000-0000-4000-8000-000000000091');
  if not public.v2_phase_c_flag('phase_c_release_enabled') or not (select release_feature_enabled from public.v2_source_configs where id=c.id) then raise exception 'release enable did not set both flags'; end if;
  if opportunity_before is distinct from (select to_jsonb(o) from public.opportunities o where id=opportunity_id_value) then raise exception 'release enable mutated opportunity'; end if;
  if observation_before is distinct from (select to_jsonb(o)-'approved_for_release'-'release_approved_at'-'release_approved_by'-'release_approval_reason'-'updated_at' from public.v2_ingestion_observations o where id=observation_id_value) then raise exception 'release enable mutated non-release observation state'; end if;
  if (select approved_for_release from public.v2_ingestion_observations where id=observation_id_value) or (select release_approved from public.v2_source_configs where id=c.id) then raise exception 'release enable approved release'; end if;

  result:=public.set_reykjavik_canary_release_enabled(observation_id_value,opportunity_id_value,false,'00000000-0000-4000-8000-000000000091');
  if public.v2_phase_c_flag('phase_c_release_enabled') or (select release_feature_enabled or release_approved from public.v2_source_configs where id=c.id) then raise exception 'pre-release disable did not clear release controls'; end if;
  if opportunity_before is distinct from (select to_jsonb(o) from public.opportunities o where id=opportunity_id_value) then raise exception 'pre-release disable mutated quarantine'; end if;

  perform public.set_reykjavik_canary_release_enabled(observation_id_value,opportunity_id_value,true,'00000000-0000-4000-8000-000000000091');
  begin
    perform public.release_v2_canary(observation_id_value,'00000000-0000-4000-8000-000000000091','must block before approval');
    raise exception 'release without approval unexpectedly succeeded';
  exception when others then if sqlerrm<>'V2_RELEASE_NOT_APPROVED' then raise; end if; end;

  result:=public.approve_v2_canary_release(observation_id_value,'00000000-0000-4000-8000-000000000091','integration release approval');
  if not (select approved_for_release from public.v2_ingestion_observations where id=observation_id_value)
    or not (select release_approved from public.v2_source_configs where id=c.id)
    or (select status<>'hidden' or raw_payload->>'promotion_quarantine'<>'phase_c_canary' from public.opportunities where id=opportunity_id_value) then
    raise exception 'release approval either failed or released early';
  end if;

  result:=public.release_v2_canary(observation_id_value,'00000000-0000-4000-8000-000000000091','integration held release');
  if not (select status='open' and phase_c_communication_hold and raw_payload->>'promotion_quarantine' is null and raw_payload->>'admin_report_status'='released_held' from public.opportunities where id=opportunity_id_value) then raise exception 'release did not establish communication hold'; end if;
  if coalesce((public.v2_canary_downstream_assertions(opportunity_id_value)->>'zero_downstream')::boolean,false) is not true then raise exception 'release created downstream rows'; end if;

  result:=public.disable_released_v2_canary(observation_id_value,'00000000-0000-4000-8000-000000000091','integration post-release disable');
  if not (select status='hidden' and phase_c_communication_hold and phase_c_disabled_at is not null from public.opportunities where id=opportunity_id_value) then raise exception 'post-release disable failed'; end if;
end;
$$;

rollback;
