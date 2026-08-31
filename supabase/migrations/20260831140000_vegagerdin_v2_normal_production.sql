-- Vegagerðin V2 routine production. Uses only the official current-tender
-- listing for admission; planned tenders remain observation-only and RSS is disabled.

create or replace function public.v2_admit_vegagerdin_observation(target_observation_id uuid)
returns table(observation_id uuid, admission_status text, opportunity_id uuid, created boolean, reason_code text)
language plpgsql security definer set search_path=public,extensions,pg_temp as $$
declare
  o public.v2_ingestion_observations%rowtype; c public.v2_source_configs%rowtype;
  r public.v2_ingestion_runs%rowtype; h public.v2_source_health%rowtype; q public.opportunities%rowtype;
  parser jsonb:='{}'; idx jsonb:='{}'; ref text; canon text; fp text; lock_key text;
  locks text[]:='{}'; source_ids uuid[]:='{}'; ref_ids uuid[]:='{}'; url_ids uuid[]:='{}'; fp_ids uuid[]:='{}';
  candidates uuid[]:='{}'; fuzzy_ids uuid[]:='{}'; matched_keys text[]:='{}'; matched_by text;
  reasons jsonb:='[]'; run_new_count int:=0; day_new_count int:=0; current_count int:=0;
begin
  if current_user not in ('postgres','service_role','supabase_admin') then raise exception 'V2_ROUTINE_SERVICE_ROLE_REQUIRED'; end if;
  select * into o from public.v2_ingestion_observations where id=target_observation_id for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;
  select * into c from public.v2_source_configs where id=o.source_config_id for update;
  select * into r from public.v2_ingestion_runs where id=o.run_id;
  select * into h from public.v2_source_health where source_config_id=o.source_config_id;
  parser:=coalesce(h.parser_health,'{}'); idx:=coalesce(parser->'index_diagnostics','{}');
  current_count:=coalesce(nullif(idx->>'current_tenders_found',''),'0')::int;

  if c.source_key<>'vegagerdin-utbod-v2' or not c.routine_production_enabled then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_SOURCE_DISABLED')); end if;
  if c.mode<>'shadow' or c.promotion_approved or c.production_canary_enabled or c.release_feature_enabled or c.release_approved then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_SOURCE_STATE_UNSAFE')); end if;
  if c.endpoint_url<>'https://www.vegagerdin.is/verkefnin/utbod/auglyst-utbod' or c.parser_name<>'vegagerdin-html-index' or c.parser_version<>'1.1.1'
     or coalesce(c.settings#>>'{shadow_quality,planned_endpoint_url}','')<>'https://www.vegagerdin.is/verkefnin/utbod/fyrirhugud-utbod'
     or coalesce(c.settings#>>'{source_roles,broad_rss}','')<>'optional_context_disabled'
     or coalesce(nullif(c.settings#>>'{shadow_quality,detail_limit}',''),'0')::int<>12
  then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_SOURCE_CONTRACT_MISMATCH')); end if;
  if r.status<>'succeeded' or r.finished_at is null or r.error_count<>0 or r.suspicious_zero_items or r.trigger_type<>'automation' then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_RUN_UNHEALTHY')); end if;
  if h.source_config_id is null or h.status is distinct from 'healthy' or h.circuit_state is distinct from 'closed' or h.last_run_id is distinct from r.id then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_HEALTH_BLOCKED')); end if;
  if coalesce(parser->>'parser_name','')<>'vegagerdin-html-index' or coalesce(parser->>'parser_version','')<>'1.1.1'
     or coalesce(nullif(parser->>'parsed_count',''),'0')::int<=0
     or coalesce(nullif(parser->>'parsed_count',''),'0')::int<>coalesce(nullif(parser->>'valid_count',''),'0')::int
     or coalesce(nullif(parser->>'invalid_count',''),'0')::int<>0
     or jsonb_typeof(parser->'parser_errors')<>'array' or jsonb_array_length(coalesce(parser->'parser_errors','[]'))<>0
     or coalesce((parser->>'suspicious_zero_items')::boolean,false)
     or coalesce((parser#>>'{quality,healthy}')::boolean,false) is not true
     or current_count<=0 or current_count>12 or coalesce((idx->>'structure_matched')::boolean,false) is not true
     or coalesce(nullif(idx->>'broad_rss_rows',''),'0')::int<>0
     or coalesce(nullif(parser#>>'{enrichment,attempted}',''),'0')::int<>current_count
     or coalesce(nullif(parser#>>'{enrichment,succeeded}',''),'0')::int<>current_count
     or coalesce(nullif(parser#>>'{enrichment,failed}',''),'0')::int<>0
     or coalesce(nullif(parser#>>'{enrichment,no_supported_fields}',''),'0')::int<>0
     or coalesce(nullif(parser#>>'{recovery,references}',''),'0')::int<>coalesce(nullif(parser->>'valid_count',''),'0')::int
     or coalesce(nullif(parser#>>'{recovery,buyers}',''),'0')::int<>coalesce(nullif(parser->>'valid_count',''),'0')::int
     or coalesce(nullif(parser#>>'{recovery,deadlines}',''),'0')::int<current_count
     or coalesce(nullif(parser#>>'{comparison,global_completed}',''),'0')::int<>coalesce(nullif(parser->>'valid_count',''),'0')::int
     or coalesce(nullif(parser#>>'{comparison,errors}',''),'0')::int<>0
     or coalesce(nullif(parser#>>'{comparison,baseline_unavailable}',''),'0')::int<>0
     or coalesce(nullif(parser#>>'{comparison,conflicts}',''),'0')::int<>0
     or coalesce(nullif(parser#>>'{comparison,fuzzy_only}',''),'0')::int<>0
     or coalesce(nullif(parser#>>'{comparison,same_run_unresolved_groups}',''),'0')::int<>0
     or coalesce(nullif(parser#>>'{classification,expired_or_completed_actionable}',''),'0')::int<>0
  then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_PARSER_HEALTH_BLOCKED')); end if;
  if coalesce(o.safe_source_payload->>'listing_role','')<>'current_tender' or coalesce(o.safe_source_payload->>'listing_context','')<>'current_procurement'
     or o.validation_state<>'valid' or o.predicted_procurement_stage<>'open_competition' or not o.predicted_actionable
     or o.predicted_requires_admin_review or coalesce(o.predicted_confidence,0)<0.95
  then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_CLASSIFICATION_BLOCKED')); end if;
  if o.deadline_evidence<>'explicit_source' or o.deadline is null or o.deadline<((now() at time zone 'UTC')::date+7) then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_DEADLINE_BLOCKED')); end if;
  if not o.strong_procurement_evidence or o.promotion_enrichment_status<>'succeeded' then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_EVIDENCE_BLOCKED')); end if;
  if o.source_id is null or o.source_id<>c.source_id or nullif(trim(o.external_id),'') is null or nullif(trim(o.procurement_reference),'') is null
     or o.procurement_reference!~'^[0-9]{2}-[0-9]{3}$' or nullif(trim(o.buyer),'') is null
     or public.v2_normalize_identity_text(o.buyer)<>'vegagerdin' or o.normalized_canonical_url is null
     or o.canonical_url!~*'^https://(www\.)?vegagerdin\.is/verkefnin/utbod/.+'
     or o.normalized_canonical_url in ('https://www.vegagerdin.is/verkefnin/utbod/auglyst-utbod','https://www.vegagerdin.is/verkefnin/utbod/fyrirhugud-utbod')
     or o.identity_fingerprint is null
  then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_IDENTITY_REQUIRED')); end if;
  if o.comparison_state not in ('legacy_match','v2_only') or exists(select 1 from public.v2_legacy_comparisons x where x.observation_id=o.id and (x.match_type='fuzzy_review_candidate' or x.decision='needs_review')) then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_COMPARISON_BLOCKED')); end if;
  if exists(select 1 from public.opportunity_ingestion_provenance p where p.observation_id=o.id) then
    select p.opportunity_id into opportunity_id from public.opportunity_ingestion_provenance p where p.observation_id=o.id;
    observation_id:=o.id; admission_status:='already_admitted'; created:=false; reason_code:='V2_ALREADY_ADMITTED'; return next; return;
  end if;
  if jsonb_array_length(reasons)>0 then
    update public.v2_ingestion_observations set promotion_state=case when exists(select 1 from jsonb_array_elements(reasons)e where e->>'code'='V2_ROUTINE_COMPARISON_BLOCKED') then 'review_required' else 'blocked' end,promotion_error=reasons::text,updated_at=now() where id=o.id;
    perform public.v2_phase_c_log('routine_admission_blocked',null,c.id,o.id,null,reasons->0->>'code',null,reasons);
    observation_id:=o.id; admission_status:='blocked'; created:=false; reason_code:=reasons->0->>'code'; return next; return;
  end if;

  ref:=public.v2_normalize_identity_text(o.procurement_reference); canon:=o.normalized_canonical_url; fp:=o.identity_fingerprint;
  locks:=array['source_external:'||o.source_id||':'||o.external_id,'reference:'||ref,'url:'||canon,'fingerprint:'||fp];
  select coalesce(array_agg(distinct k order by k),'{}') into locks from unnest(locks)k;
  foreach lock_key in array locks loop perform pg_advisory_xact_lock(hashtextextended('verkradar-v2:'||lock_key,0)); end loop;
  select coalesce(array_agg(id order by id),'{}') into source_ids from public.opportunities where source_id=o.source_id and external_id=o.external_id;
  select coalesce(array_agg(id order by id),'{}') into ref_ids from public.opportunities where public.v2_normalize_identity_text(coalesce(raw_payload->>'procurement_reference',raw_payload->>'reference_number',raw_payload->>'notice_number'))=ref;
  select coalesce(array_agg(id order by id),'{}') into url_ids from public.opportunities where public.v2_normalize_canonical_url(url)=canon;
  select coalesce(array_agg(id order by id),'{}') into fp_ids from public.opportunities where public.v2_identity_fingerprint(buyer,title,deadline,coalesce(raw_payload->>'procurement_reference',raw_payload->>'reference_number',raw_payload->>'notice_number'))=fp;
  select coalesce(array_agg(distinct x order by x),'{}') into candidates from unnest(source_ids||ref_ids||url_ids||fp_ids)x;
  if cardinality(source_ids)>1 or cardinality(ref_ids)>1 or cardinality(url_ids)>1 or cardinality(fp_ids)>1 or cardinality(candidates)>1 then
    update public.v2_ingestion_observations set comparison_state='conflict',promotion_state='review_required',promotion_error='V2_ROUTINE_DETERMINISTIC_CONFLICT',updated_at=now() where id=o.id;
    perform public.v2_phase_c_log('routine_admission_blocked',null,c.id,o.id,null,'V2_ROUTINE_DETERMINISTIC_CONFLICT',null,jsonb_build_object('candidate_ids',candidates));
    observation_id:=o.id; admission_status:='review_required'; created:=false; reason_code:='V2_ROUTINE_DETERMINISTIC_CONFLICT'; return next; return;
  end if;
  if cardinality(candidates)=0 then
    select coalesce(array_agg(id order by id),'{}') into fuzzy_ids from public.opportunities where extensions.similarity(public.v2_normalize_identity_text(title),public.v2_normalize_identity_text(o.title))>=0.84;
    if cardinality(fuzzy_ids)>0 then
      update public.v2_ingestion_observations set comparison_state='review_required',promotion_state='review_required',promotion_error='V2_FUZZY_REVIEW_REQUIRED',updated_at=now() where id=o.id;
      perform public.v2_phase_c_log('routine_admission_blocked',null,c.id,o.id,null,'V2_FUZZY_REVIEW_REQUIRED',null,jsonb_build_object('candidate_ids',fuzzy_ids));
      observation_id:=o.id; admission_status:='review_required'; created:=false; reason_code:='V2_FUZZY_REVIEW_REQUIRED'; return next; return;
    end if;
    select count(*) into run_new_count from public.opportunity_ingestion_provenance p join public.v2_ingestion_observations vo on vo.id=p.observation_id where vo.run_id=o.run_id and p.source_config_id=c.id and p.provenance_type='v2_created';
    select count(*) into day_new_count from public.opportunity_ingestion_provenance p where p.source_config_id=c.id and p.provenance_type='v2_created' and p.metadata->>'phase'='C3-routine' and p.attached_at>=date_trunc('day',now() at time zone 'UTC') at time zone 'UTC';
    if run_new_count>=c.routine_admission_max_new_per_run or day_new_count>=c.routine_admission_max_new_per_day then
      update public.v2_ingestion_observations set promotion_state='blocked',promotion_error='V2_ROUTINE_NEW_ADMISSION_LIMIT',updated_at=now() where id=o.id;
      perform public.v2_phase_c_log('routine_admission_blocked',null,c.id,o.id,null,'V2_ROUTINE_NEW_ADMISSION_LIMIT',null,jsonb_build_object('run_new_count',run_new_count,'day_new_count',day_new_count));
      observation_id:=o.id; admission_status:='blocked'; created:=false; reason_code:='V2_ROUTINE_NEW_ADMISSION_LIMIT'; return next; return;
    end if;
  end if;

  if cardinality(candidates)=1 then
    select * into q from public.opportunities where id=candidates[1] for update;
    if q.id=any(source_ids) then matched_by:='same_source_external_id'; matched_keys:=array_append(matched_keys,'same_source_external_id'); end if;
    if q.id=any(ref_ids) then matched_by:=coalesce(matched_by,'procurement_reference'); matched_keys:=array_append(matched_keys,'procurement_reference'); end if;
    if q.id=any(url_ids) then matched_by:=coalesce(matched_by,'canonical_url'); matched_keys:=array_append(matched_keys,'canonical_url'); end if;
    if q.id=any(fp_ids) then matched_by:=coalesce(matched_by,'fingerprint'); matched_keys:=array_append(matched_keys,'fingerprint'); end if;
    created:=false;
  else
    insert into public.opportunities(source_id,external_id,title,buyer,description,deadline,published_date,location,url,status,raw_payload,procurement_stage,actionable_for_suppliers,classification_confidence,classification_reason,positive_signals,negative_signals,classified_by,classified_at,classifier_version,requires_admin_review,phase_c_communication_hold)
    values(o.source_id,o.external_id,o.title,o.buyer,o.description,o.deadline,o.publication_date,o.location,o.canonical_url,'open',jsonb_build_object('v2_observation_id',o.id,'procurement_reference',o.procurement_reference,'source_payload',o.safe_source_payload,'v2_routine_admission',true,'hidden_from_reports',false,'admin_report_status','released'),o.predicted_procurement_stage::public.procurement_stage,true,o.predicted_confidence,o.predicted_reason,array['strong_procurement_evidence','explicit_future_deadline'],'{}','deterministic_rule',now(),'v2-vegagerdin-routine-v1',false,false) returning * into q;
    matched_by:='same_source_external_id'; matched_keys:=array['source_external_id','procurement_reference','canonical_url','fingerprint']; created:=true;
  end if;
  insert into public.opportunity_ingestion_provenance(opportunity_id,observation_id,source_config_id,provenance_type,identity_match_type,content_hash,metadata)
  values(q.id,o.id,c.id,case when created then 'v2_created' else 'existing_opportunity_matched' end,matched_by,o.content_hash,jsonb_build_object('phase','C3-routine','automatic',true,'opportunity_mutated',false,'matched_identity_keys',matched_keys,'source_external_id',o.source_id||':'||o.external_id,'normalized_procurement_reference',ref,'normalized_canonical_url',canon,'identity_fingerprint',fp,'deterministic_candidate_ids',candidates));
  update public.v2_ingestion_observations set promotion_state='promoted',promoted_opportunity_id=q.id,promotion_error=null,updated_at=now() where id=o.id;
  perform public.v2_phase_c_log(case when created then 'routine_opportunity_created' else 'routine_existing_reused' end,null,c.id,o.id,q.id,null,null,jsonb_build_object('identity_match_type',matched_by,'opportunity_mutated',false));
  perform public.v2_phase_c_log('routine_admitted',null,c.id,o.id,q.id,null,null,jsonb_build_object('created',created,'matching_triggered',false,'downstream_triggered',false));
  observation_id:=o.id; opportunity_id:=q.id; admission_status:='admitted'; reason_code:=null; return next;
end;
$$;

create or replace function public.admit_vegagerdin_v2_run(target_run_id uuid,runtime_project_ref text)
returns jsonb language plpgsql security definer set search_path=public,pg_temp as $$
declare c public.v2_source_configs%rowtype; r public.v2_ingestion_runs%rowtype; o record; x record; scanned int:=0; admitted int:=0; created_count int:=0; reused_count int:=0; blocked_count int:=0;
begin
  if current_user not in ('postgres','service_role','supabase_admin') then raise exception 'V2_ROUTINE_SERVICE_ROLE_REQUIRED'; end if;
  if runtime_project_ref<>'asojxjbsgqbfpbepojzh' then raise exception 'V2_ROUTINE_PRODUCTION_PROJECT_REQUIRED'; end if;
  perform pg_advisory_xact_lock(hashtextextended('verkradar-v2:vegagerdin-routine-admission',0));
  select * into r from public.v2_ingestion_runs where id=target_run_id for update;
  select * into c from public.v2_source_configs where id=r.source_config_id for update;
  if c.source_key<>'vegagerdin-utbod-v2' or not c.routine_production_enabled or c.mode<>'shadow' then raise exception 'V2_ROUTINE_SOURCE_DISABLED'; end if;
  if r.status<>'succeeded' or r.trigger_type<>'automation' then raise exception 'V2_ROUTINE_RUN_NOT_ELIGIBLE'; end if;
  perform public.v2_phase_c_log('routine_admission_attempted',null,c.id,null,null,null,null,jsonb_build_object('run_id',r.id));
  for o in select id from public.v2_ingestion_observations where run_id=r.id order by predicted_actionable desc,deadline asc nulls last,id limit c.routine_admission_scan_limit loop
    scanned:=scanned+1; select * into x from public.v2_admit_vegagerdin_observation(o.id);
    if x.admission_status='admitted' then admitted:=admitted+1; if x.created then created_count:=created_count+1; else reused_count:=reused_count+1; end if; elsif x.admission_status not in ('already_admitted') then blocked_count:=blocked_count+1; end if;
  end loop;
  update public.v2_ingestion_runs set details=details||jsonb_build_object('routine_admission',jsonb_build_object('scanned',scanned,'admitted',admitted,'created',created_count,'reused',reused_count,'blocked',blocked_count,'new_limit_per_run',c.routine_admission_max_new_per_run,'new_limit_per_day',c.routine_admission_max_new_per_day,'matching_triggered',false,'downstream_triggered',false)),updated_at=now() where id=r.id;
  return jsonb_build_object('run_id',r.id,'scanned',scanned,'admitted',admitted,'created',created_count,'reused',reused_count,'blocked',blocked_count,'matching_triggered',false,'downstream_triggered',false);
end;
$$;

create or replace function public.set_vegagerdin_routine_production(enabled_value boolean,acting_admin_id uuid,reason_text text)
returns jsonb language plpgsql security definer set search_path=public,pg_temp as $$
declare c public.v2_source_configs%rowtype;
begin
  if current_user not in ('postgres','service_role','supabase_admin') then raise exception 'V2_ROUTINE_SERVICE_ROLE_REQUIRED'; end if;
  if not exists(select 1 from public.admin_users where user_id=acting_admin_id) then raise exception 'V2_ROUTINE_ADMIN_REQUIRED'; end if;
  if nullif(trim(reason_text),'') is null then raise exception 'V2_ROUTINE_REASON_REQUIRED'; end if;
  select * into c from public.v2_source_configs where source_key='vegagerdin-utbod-v2' for update;
  if enabled_value and (c.mode<>'shadow' or c.promotion_approved or c.production_canary_enabled or c.release_feature_enabled or c.release_approved or c.parser_name<>'vegagerdin-html-index' or c.parser_version<>'1.1.1') then raise exception 'V2_ROUTINE_SOURCE_STATE_UNSAFE'; end if;
  update public.v2_source_configs set routine_production_enabled=enabled_value,updated_at=now() where id=c.id;
  perform public.v2_phase_c_log(case when enabled_value then 'routine_source_enabled' else 'routine_source_disabled' end,acting_admin_id,c.id,null,null,null,reason_text,'{}');
  return jsonb_build_object('source_key',c.source_key,'routine_production_enabled',enabled_value,'admissions_stopped',not enabled_value);
end;
$$;

revoke all on function public.v2_admit_vegagerdin_observation(uuid) from public,anon,authenticated;
revoke all on function public.admit_vegagerdin_v2_run(uuid,text) from public,anon,authenticated;
revoke all on function public.set_vegagerdin_routine_production(boolean,uuid,text) from public,anon,authenticated;
grant execute on function public.v2_admit_vegagerdin_observation(uuid) to service_role;
grant execute on function public.admit_vegagerdin_v2_run(uuid,text) to service_role;
grant execute on function public.set_vegagerdin_routine_production(boolean,uuid,text) to service_role;

insert into public.automation_settings(key,value) values('v2_vegagerdin_automation_url','https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/import-source-connectors-v2') on conflict(key) do update set value=excluded.value;

create or replace function public.trigger_vegagerdin_v2_automation()
returns void language plpgsql security definer set search_path=public,extensions,pg_temp as $$
declare endpoint text; secret text; gateway_authorization text; c public.v2_source_configs%rowtype;
begin
  select * into c from public.v2_source_configs where source_key='vegagerdin-utbod-v2';
  if c.id is null or not c.routine_production_enabled or c.mode<>'shadow' or c.promotion_approved then return; end if;
  select value into endpoint from public.automation_settings where key='v2_vegagerdin_automation_url';
  select value into secret from public.automation_settings where key='automation_secret';
  gateway_authorization:=public.v2_routine_gateway_authorization();
  if endpoint<>'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/import-source-connectors-v2' or nullif(secret,'') is null then raise exception 'V2_ROUTINE_AUTOMATION_CONFIG_INVALID'; end if;
  perform net.http_post(url:=endpoint,headers:=jsonb_build_object('Content-Type','application/json','Authorization',gateway_authorization,'x-automation-secret',secret),body:=jsonb_build_object('action','run_vegagerdin_production','source_key','vegagerdin-utbod-v2'));
end;
$$;
revoke all on function public.trigger_vegagerdin_v2_automation() from public,anon,authenticated;

do $$ begin perform cron.unschedule(jobid) from cron.job where jobname='vegagerdin-v2-daily-production'; exception when others then null; end $$;
select cron.schedule('vegagerdin-v2-daily-production','10 1 * * *','select public.trigger_vegagerdin_v2_automation();');

update public.v2_source_configs set endpoint_url='https://www.vegagerdin.is/verkefnin/utbod/auglyst-utbod',parser_name='vegagerdin-html-index',parser_version='1.1.1',adapter_type='public_procurement_html_index',request_timeout_ms=5000,run_deadline_ms=120000,max_attempts=2,
  mode='shadow',production_shadow_enabled=false,promotion_approved=false,production_canary_enabled=false,release_feature_enabled=false,release_approved=false,promotion_reference_required=true,routine_production_enabled=true,
  routine_admission_max_new_per_run=2,routine_admission_max_new_per_day=2,routine_admission_scan_limit=30,
  settings=coalesce(settings,'{}')||jsonb_build_object('shadow_quality',coalesce(settings->'shadow_quality','{}')||jsonb_build_object('detail_limit',12,'max_current_items',12,'max_planned_items',30,'planned_endpoint_url','https://www.vegagerdin.is/verkefnin/utbod/fyrirhugud-utbod','global_deterministic_comparison',true),'source_roles',jsonb_build_object('routine_admission_source','current_tender_html','planned_source','planned_tender_html_observation_only','broad_rss','optional_context_disabled')),
  updated_at=now() where source_key='vegagerdin-utbod-v2';

select public.v2_phase_c_log('routine_source_enabled',null,id,null,null,null,'Initial Vegagerðin routine production rollout',jsonb_build_object('max_new_per_run',2,'max_new_per_day',2,'scan_limit',30,'max_detail_requests',12,'schedule_utc','01:10','planned_observation_only',true,'broad_rss_admission',false)) from public.v2_source_configs where source_key='vegagerdin-utbod-v2';
