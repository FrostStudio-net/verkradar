\set ON_ERROR_STOP on
begin;

create or replace function public.hold_clear_assert(condition boolean, message text)
returns void language plpgsql as $$
begin if condition is not true then raise exception 'HOLD CLEAR ASSERTION FAILED: %',message; end if; end;
$$;

insert into auth.users(id,email) values
  ('00000000-0000-4000-8000-0000000000a1','hold-clear-admin@example.test'),
  ('00000000-0000-4000-8000-0000000000a2','hold-clear-customer@example.test')
on conflict(id) do nothing;
insert into public.admin_users(user_id) values ('00000000-0000-4000-8000-0000000000a1') on conflict do nothing;
insert into public.companies(id,company_name,contact_email)
values ('00000000-0000-4000-8000-0000000000a3','Hold clear customer','hold-clear-customer@example.test')
on conflict(id) do nothing;
insert into public.company_members(company_id,user_id,email,email_normalized,role,status,accepted_at)
values ('00000000-0000-4000-8000-0000000000a3','00000000-0000-4000-8000-0000000000a2','hold-clear-customer@example.test','hold-clear-customer@example.test','owner','active',now())
on conflict(company_id,email_normalized) do update set user_id=excluded.user_id,status='active';

do $$
declare
  c public.v2_source_configs%rowtype;
  run_id_value uuid := '00000000-0000-4000-8000-0000000000a4';
  observation_id_value uuid := '32713ed0-089d-45a0-97f9-24fabdbf08dd';
  opportunity_id_value uuid := '1c4b107b-999c-47df-82a7-d87b43b20185';
  duplicate_id uuid;
  before_opp jsonb;
  after_opp jsonb;
  before_observation jsonb;
  before_provenance jsonb;
  result jsonb;
  event_count integer;
begin
  update public.automation_settings set value='true' where key='phase_c_production_enabled';
  perform public.v2_phase_c_authorize_transaction('post_release_disable',true);
  update public.opportunities set raw_payload=raw_payload-'promotion_quarantine',
    phase_c_communication_hold=false
    where raw_payload->>'promotion_quarantine'='phase_c_canary';
  delete from public.opportunity_ingestion_provenance where observation_id=observation_id_value or opportunity_id=opportunity_id_value;
  delete from public.v2_ingestion_observations where id=observation_id_value;
  delete from public.opportunities where id=opportunity_id_value;
  perform public.v2_phase_c_authorize_transaction('post_release_disable',false);
  update public.v2_ingestion_observations set promoted_opportunity_id=null,
    promotion_state=case when promotion_state='promoted' then 'not_eligible' else promotion_state end
    where promoted_opportunity_id is not null or promotion_state='promoted';

  select * into c from public.v2_source_configs where source_key='reykjavik-utbod-v2';
  if not found then raise exception 'Reykjavik test source config missing'; end if;
  update public.v2_source_configs set mode='shadow',promotion_approved=false,
    production_canary_enabled=true where id=c.id;
  insert into public.v2_ingestion_runs(
    id,source_config_id,mode,trigger_type,status,error_count,suspicious_zero_items,
    started_at,finished_at,created_at
  ) values(run_id_value,c.id,'shadow','shadow','succeeded',0,false,now()-interval '1 minute',now(),now())
  on conflict(id) do nothing;
  insert into public.opportunities(
    id,source_id,external_id,title,buyer,deadline,url,status,raw_payload,
    procurement_stage,actionable_for_suppliers,classification_confidence,
    classification_reason,classified_by,classifier_version,requires_admin_review,
    phase_c_communication_hold,phase_c_released_at,phase_c_released_by,phase_c_release_reason
  ) values(
    opportunity_id_value,c.source_id,'16322','16322 Hold clear integration tender','Reykjavíkurborg',current_date+30,
    'https://reykjavik.is/utbod/16322-test','open',
    '{"hidden_from_reports":false,"admin_report_status":"released_held","phase_c_communication_hold":true,"procurement_reference":"16322"}',
    'open_competition',true,.99,'Explicit tender','deterministic_rule','hold-clear-test',false,
    true,now(),'00000000-0000-4000-8000-0000000000a1','Held release integration'
  );
  insert into public.v2_ingestion_observations(
    id,run_id,source_config_id,source_id,source_key,source_name,external_id,
    procurement_reference,discovered_url,canonical_url,normalized_canonical_url,
    title,buyer,deadline,safe_source_payload,content_hash,identity_fingerprint,
    parser_name,parser_version,fetched_at,validation_state,comparison_state,promotion_state,
    promoted_opportunity_id,predicted_procurement_stage,predicted_actionable,
    predicted_confidence,predicted_reason,predicted_requires_admin_review,
    enrichment_status,approved_for_promotion,approved_at,approved_by,
    strong_procurement_evidence,deadline_evidence,promotion_enrichment_status,
    approved_for_release,released_at,released_by,release_reason
  ) values(
    observation_id_value,run_id_value,c.id,c.source_id,c.source_key,c.display_name,'16322',
    '16322','https://reykjavik.is/utbod/16322-test','https://reykjavik.is/utbod/16322-test','https://reykjavik.is/utbod/16322-test',
    '16322 Hold clear integration tender','Reykjavíkurborg',current_date+30,'{}',
    encode(digest(observation_id_value::text,'sha256'),'hex'),
    public.v2_identity_fingerprint('Reykjavíkurborg','16322 Hold clear integration tender',current_date+30,'16322'),
    'hold-clear-test','1',now(),'valid','baseline_unavailable','promoted',opportunity_id_value,
    'open_competition',true,.99,'Explicit tender',false,'enriched',true,now(),
    '00000000-0000-4000-8000-0000000000a1',true,'explicit_source','succeeded',
    true,now(),'00000000-0000-4000-8000-0000000000a1','Held release integration'
  );
  insert into public.opportunity_ingestion_provenance(
    opportunity_id,observation_id,source_config_id,provenance_type,
    identity_match_type,content_hash,metadata
  ) select opportunity_id_value,id,source_config_id,'v2_created','same_source_external_id',content_hash,
    jsonb_build_object(
      'source_external_id',source_id::text||':'||external_id,
      'normalized_procurement_reference',public.v2_normalize_identity_text(procurement_reference),
      'normalized_canonical_url',normalized_canonical_url,
      'identity_fingerprint',identity_fingerprint,
      'matched_identity_keys',jsonb_build_array('source_external_id','procurement_reference','canonical_url','fingerprint'),
      'deterministic_candidate_ids','[]'::jsonb
    ) from public.v2_ingestion_observations where id=observation_id_value;

  begin
    perform public.clear_reykjavik_v2_canary_communication_hold(observation_id_value,opportunity_id_value,'00000000-0000-4000-8000-0000000000a1','wrong project','ipixuxznqtrcdpzoxric');
    raise exception 'wrong project unexpectedly cleared hold';
  exception when others then if sqlerrm<>'V2_COMMUNICATION_HOLD_PRODUCTION_PROJECT_REQUIRED' then raise; end if; end;
  begin
    perform public.clear_reykjavik_v2_canary_communication_hold('00000000-0000-4000-8000-000000000099',opportunity_id_value,'00000000-0000-4000-8000-0000000000a1','wrong observation','asojxjbsgqbfpbepojzh');
    raise exception 'wrong observation unexpectedly cleared hold';
  exception when others then if sqlerrm<>'V2_COMMUNICATION_HOLD_TARGET_NOT_ALLOWED' then raise; end if; end;
  begin
    perform public.clear_reykjavik_v2_canary_communication_hold(observation_id_value,opportunity_id_value,'00000000-0000-4000-8000-0000000000a2','non-admin','asojxjbsgqbfpbepojzh');
    raise exception 'non-admin unexpectedly cleared hold';
  exception when others then if sqlerrm<>'V2_COMMUNICATION_HOLD_ADMIN_REQUIRED' then raise; end if; end;
  begin
    perform public.clear_reykjavik_v2_canary_communication_hold(observation_id_value,opportunity_id_value,'00000000-0000-4000-8000-0000000000a1',' ','asojxjbsgqbfpbepojzh');
    raise exception 'empty reason unexpectedly cleared hold';
  exception when others then if sqlerrm<>'V2_COMMUNICATION_HOLD_REASON_REQUIRED' then raise; end if; end;

  update public.v2_source_configs set source_key='wrong-reykjavik-source' where id=c.id;
  begin
    perform public.clear_reykjavik_v2_canary_communication_hold(observation_id_value,opportunity_id_value,'00000000-0000-4000-8000-0000000000a1','wrong source','asojxjbsgqbfpbepojzh');
    raise exception 'wrong source unexpectedly cleared hold';
  exception when others then if sqlerrm<>'V2_COMMUNICATION_HOLD_SOURCE_NOT_ALLOWED' then raise; end if; end;
  update public.v2_source_configs set source_key='reykjavik-utbod-v2' where id=c.id;

  update public.opportunities set deadline=current_date where id=opportunity_id_value;
  begin
    perform public.clear_reykjavik_v2_canary_communication_hold(observation_id_value,opportunity_id_value,'00000000-0000-4000-8000-0000000000a1','invalid deadline','asojxjbsgqbfpbepojzh');
    raise exception 'invalid deadline unexpectedly cleared hold';
  exception when others then if sqlerrm<>'V2_COMMUNICATION_HOLD_DEADLINE_INVALID' then raise; end if; end;
  update public.opportunities set deadline=current_date+30 where id=opportunity_id_value;
  update public.opportunities set actionable_for_suppliers=false where id=opportunity_id_value;
  begin
    perform public.clear_reykjavik_v2_canary_communication_hold(observation_id_value,opportunity_id_value,'00000000-0000-4000-8000-0000000000a1','invalid stage','asojxjbsgqbfpbepojzh');
    raise exception 'invalid stage unexpectedly cleared hold';
  exception when others then if sqlerrm<>'V2_COMMUNICATION_HOLD_STAGE_NOT_ACTIONABLE' then raise; end if; end;
  update public.opportunities set actionable_for_suppliers=true where id=opportunity_id_value;

  insert into public.opportunities(source_id,external_id,title,buyer,deadline,url,status,raw_payload,procurement_stage)
  values(c.source_id,'duplicate-16322','Distinct duplicate',null,current_date+30,'https://example.test/duplicate-16322','open','{"procurement_reference":"16322"}','uncertain') returning id into duplicate_id;
  begin
    perform public.clear_reykjavik_v2_canary_communication_hold(observation_id_value,opportunity_id_value,'00000000-0000-4000-8000-0000000000a1','duplicate conflict','asojxjbsgqbfpbepojzh');
    raise exception 'deterministic duplicate unexpectedly cleared hold';
  exception when others then if sqlerrm<>'V2_COMMUNICATION_HOLD_DETERMINISTIC_CONFLICT' then raise; end if; end;
  delete from public.opportunities where id=duplicate_id;

  insert into public.opportunities(source_id,external_id,title,buyer,deadline,url,status,raw_payload,procurement_stage)
  values(c.source_id,'fuzzy-16322','16322 Hold clear integration tender copy',null,current_date+29,'https://example.test/fuzzy-16322','open','{}','uncertain') returning id into duplicate_id;
  begin
    perform public.clear_reykjavik_v2_canary_communication_hold(observation_id_value,opportunity_id_value,'00000000-0000-4000-8000-0000000000a1','fuzzy conflict','asojxjbsgqbfpbepojzh');
    raise exception 'fuzzy duplicate unexpectedly cleared hold';
  exception when others then if sqlerrm<>'V2_COMMUNICATION_HOLD_FUZZY_REVIEW_REQUIRED' then raise; end if; end;
  delete from public.opportunities where id=duplicate_id;

  insert into public.opportunity_matches(company_id,opportunity_id,match_score,match_label)
  values('00000000-0000-4000-8000-0000000000a3',opportunity_id_value,50,'possible');
  begin
    perform public.clear_reykjavik_v2_canary_communication_hold(observation_id_value,opportunity_id_value,'00000000-0000-4000-8000-0000000000a1','downstream contamination','asojxjbsgqbfpbepojzh');
    raise exception 'downstream contamination unexpectedly cleared hold';
  exception when others then if sqlerrm<>'V2_COMMUNICATION_HOLD_UNEXPECTED_DOWNSTREAM' then raise; end if; end;
  delete from public.opportunity_matches where opportunity_id=opportunity_id_value;

  before_opp:=(select to_jsonb(x)-'phase_c_communication_hold'-'raw_payload'-'updated_at' from public.opportunities x where id=opportunity_id_value);
  before_observation:=(select to_jsonb(x) from public.v2_ingestion_observations x where id=observation_id_value);
  before_provenance:=(select to_jsonb(x) from public.opportunity_ingestion_provenance x where observation_id=observation_id_value);
  result:=public.clear_reykjavik_v2_canary_communication_hold(observation_id_value,opportunity_id_value,'00000000-0000-4000-8000-0000000000a1','final production canary activation integration','asojxjbsgqbfpbepojzh');
  after_opp:=(select to_jsonb(x)-'phase_c_communication_hold'-'raw_payload'-'updated_at' from public.opportunities x where id=opportunity_id_value);
  if before_opp is distinct from after_opp then raise exception 'hold clear mutated unrelated opportunity fields'; end if;
  if before_observation is distinct from (select to_jsonb(x) from public.v2_ingestion_observations x where id=observation_id_value) then raise exception 'hold clear mutated observation'; end if;
  if before_provenance is distinct from (select to_jsonb(x) from public.opportunity_ingestion_provenance x where observation_id=observation_id_value) then raise exception 'hold clear mutated provenance'; end if;
  if not (select not phase_c_communication_hold
    and raw_payload->>'phase_c_communication_hold'='false'
    and raw_payload->>'admin_report_status'='released'
    and status='open' from public.opportunities where id=opportunity_id_value) then
    raise exception 'hold state did not clear exactly';
  end if;
  if result->>'matching_triggered'<>'false' or result->>'downstream_triggered'<>'false' then raise exception 'hold clear reported downstream work'; end if;
  select count(*) into event_count from public.v2_phase_c_events
    where observation_id=observation_id_value and opportunity_id=opportunity_id_value and event_type='communication_hold_cleared';
  if event_count<>1 then raise exception 'hold clear did not append exactly one event'; end if;
  if coalesce((public.v2_canary_downstream_assertions(opportunity_id_value)->>'zero_downstream')::boolean,false) is not true then raise exception 'hold clear created downstream rows'; end if;

  begin
    perform public.clear_reykjavik_v2_canary_communication_hold(observation_id_value,opportunity_id_value,'00000000-0000-4000-8000-0000000000a1','repeat','asojxjbsgqbfpbepojzh');
    raise exception 'repeat clear unexpectedly succeeded';
  exception when others then if sqlerrm<>'V2_COMMUNICATION_HOLD_ALREADY_CLEARED' then raise; end if; end;
  if (select count(*) from public.v2_phase_c_events where observation_id=observation_id_value and event_type='communication_hold_cleared')<>1 then raise exception 'repeat clear appended duplicate event'; end if;
end;
$$;

-- With no qualifying company linkage, clearing hold alone exposes nothing.
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"00000000-0000-4000-8000-0000000000a2","role":"authenticated"}',true);
select count(*) as customer_opportunity_count from public.opportunities
  where id='1c4b107b-999c-47df-82a7-d87b43b20185' \gset
select count(*) as customer_match_count from public.opportunity_matches
  where opportunity_id='1c4b107b-999c-47df-82a7-d87b43b20185' \gset
reset role;
select public.hold_clear_assert(:customer_opportunity_count::integer=0,'customer must not see unlinked opportunity after hold clear');
select public.hold_clear_assert(:customer_match_count::integer=0,'customer must not see a canary match after hold clear');

rollback;
