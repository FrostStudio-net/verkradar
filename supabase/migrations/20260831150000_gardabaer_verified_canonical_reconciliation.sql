-- Repair Garðabær routine admission without broadening identity or matching.
-- Existing explicit duplicate groups may reconcile classification fields only.

create or replace function public.v2_resolve_gardabaer_established_group(candidate_ids uuid[])
returns jsonb
language plpgsql
stable
security definer
set search_path=public,pg_temp
as $$
declare
  candidate_id uuid;
  candidate_payload jsonb;
  canonical_text text;
  canonical_id uuid;
  resolved_ids uuid[] := '{}'::uuid[];
  has_explicit_link boolean := false;
begin
  if coalesce(cardinality(candidate_ids),0)=0 then
    return jsonb_build_object('resolved_ids','[]'::jsonb,'established_group',false,'error_code',null);
  end if;

  foreach candidate_id in array candidate_ids loop
    select raw_payload into candidate_payload from public.opportunities where id=candidate_id;
    if not found then
      return jsonb_build_object('resolved_ids','[]'::jsonb,'established_group',false,'error_code','V2_ROUTINE_CANONICAL_CANDIDATE_MISSING');
    end if;
    canonical_text:=nullif(trim(candidate_payload->>'canonical_opportunity_id'),'');
    if coalesce((candidate_payload->>'is_duplicate')::boolean,false) or canonical_text is not null then
      has_explicit_link:=true;
      if canonical_text is null or canonical_text !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$' then
        return jsonb_build_object('resolved_ids','[]'::jsonb,'established_group',false,'error_code','V2_ROUTINE_CANONICAL_LINK_BROKEN');
      end if;
      canonical_id:=canonical_text::uuid;
      if not canonical_id=any(candidate_ids) or not exists(select 1 from public.opportunities where id=canonical_id) then
        return jsonb_build_object('resolved_ids','[]'::jsonb,'established_group',false,'error_code','V2_ROUTINE_CANONICAL_LINK_BROKEN');
      end if;
      resolved_ids:=array_append(resolved_ids,canonical_id);
    else
      resolved_ids:=array_append(resolved_ids,candidate_id);
    end if;
  end loop;

  select coalesce(array_agg(distinct value order by value),'{}') into resolved_ids from unnest(resolved_ids) value;
  if cardinality(candidate_ids)>1 and cardinality(resolved_ids)=1 and has_explicit_link then
    return jsonb_build_object('resolved_ids',to_jsonb(resolved_ids),'established_group',true,'error_code',null);
  end if;
  if cardinality(candidate_ids)>1 then
    return jsonb_build_object('resolved_ids',to_jsonb(resolved_ids),'established_group',false,'error_code','V2_ROUTINE_DETERMINISTIC_CONFLICT');
  end if;
  if has_explicit_link then
    return jsonb_build_object('resolved_ids',to_jsonb(resolved_ids),'established_group',false,'error_code','V2_ROUTINE_CANONICAL_LINK_BROKEN');
  end if;
  return jsonb_build_object('resolved_ids',to_jsonb(resolved_ids),'established_group',false,'error_code',null);
end;
$$;

create or replace function public.v2_admit_gardabaer_observation(target_observation_id uuid)
returns table(observation_id uuid, admission_status text, opportunity_id uuid, created boolean, reason_code text)
language plpgsql security definer set search_path=public,extensions,pg_temp as $$
declare
  o public.v2_ingestion_observations%rowtype;
  c public.v2_source_configs%rowtype;
  r public.v2_ingestion_runs%rowtype;
  h public.v2_source_health%rowtype;
  q public.opportunities%rowtype;
  parser jsonb:='{}'::jsonb;
  ref text; canon text; fp text; lock_key text;
  locks text[]:='{}'::text[];
  source_ids uuid[]:='{}'::uuid[]; ref_ids uuid[]:='{}'::uuid[];
  url_ids uuid[]:='{}'::uuid[]; fp_ids uuid[]:='{}'::uuid[];
  raw_candidates uuid[]:='{}'::uuid[]; candidates uuid[]:='{}'::uuid[]; fuzzy_ids uuid[]:='{}'::uuid[];
  matched_keys text[]:='{}'::text[]; matched_by text;
  reasons jsonb:='[]'::jsonb; run_new_count int:=0; day_new_count int:=0;
  resolution jsonb; resolution_error text; established_group boolean:=false;
  official_candidate_id uuid; official_canonical_text text;
  downstream jsonb:='{}'::jsonb; reconciliation_before jsonb; reconciliation_after jsonb;
  reconciled boolean:=false;
begin
  if current_user not in ('postgres','service_role','supabase_admin') then raise exception 'V2_ROUTINE_SERVICE_ROLE_REQUIRED'; end if;
  select * into o from public.v2_ingestion_observations where id=target_observation_id for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;
  select * into c from public.v2_source_configs where id=o.source_config_id for update;
  select * into r from public.v2_ingestion_runs where id=o.run_id;
  select * into h from public.v2_source_health where source_config_id=o.source_config_id;
  parser:=coalesce(h.parser_health,'{}'::jsonb);

  if c.source_key<>'gardabaer-utbod-v2' or not c.routine_production_enabled then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_SOURCE_DISABLED')); end if;
  if c.mode<>'shadow' or c.promotion_approved or c.production_canary_enabled or c.release_feature_enabled or c.release_approved then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_SOURCE_STATE_UNSAFE')); end if;
  if c.endpoint_url<>'https://www.gardabaer.is/framkvaemdir/utbod' or c.parser_name<>'gardabaer-page-monitor' or c.parser_version<>'2.0.0' then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_SOURCE_CONTRACT_MISMATCH')); end if;
  if c.promotion_reference_required then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_REFERENCE_POLICY_MISMATCH')); end if;
  if r.status<>'succeeded' or r.finished_at is null or r.error_count<>0 or r.suspicious_zero_items or r.trigger_type<>'automation' then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_RUN_UNHEALTHY')); end if;
  if h.source_config_id is null or h.status is distinct from 'healthy' or h.circuit_state is distinct from 'closed' or h.last_run_id is distinct from r.id then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_HEALTH_BLOCKED')); end if;
  if coalesce(parser->>'parser_name','')<>'gardabaer-page-monitor' or coalesce(parser->>'parser_version','')<>'2.0.0'
     or coalesce(nullif(parser->>'fetched_count',''),'0')::int<>1
     or coalesce(nullif(parser->>'parsed_count',''),'0')::int<=0
     or coalesce(nullif(parser->>'parsed_count',''),'0')::int<>coalesce(nullif(parser->>'valid_count',''),'0')::int
     or coalesce(nullif(parser->>'invalid_count',''),'0')::int<>0
     or coalesce(nullif(parser->>'duplicate_count',''),'0')::int<>0
     or jsonb_typeof(parser->'parser_errors')<>'array'
     or jsonb_array_length(coalesce(parser->'parser_errors','[]'))<>0
     or coalesce((parser->>'suspicious_zero_items')::boolean,false)
     or coalesce(nullif(parser#>>'{enrichment,failed}',''),'0')::int<>0
     or coalesce(nullif(parser#>>'{enrichment,attempted}',''),'0')::int<>coalesce(nullif(parser#>>'{enrichment,succeeded}',''),'0')::int
     or coalesce(nullif(parser#>>'{recovery,source_status_distribution,active}',''),'0')::int<=0
  then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_PARSER_HEALTH_BLOCKED')); end if;
  if o.validation_state<>'valid' or o.predicted_procurement_stage not in ('open_competition','upcoming_procurement','market_consultation') or not o.predicted_actionable or o.predicted_requires_admin_review or coalesce(o.predicted_confidence,0)<0.95 then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_CLASSIFICATION_BLOCKED')); end if;
  if coalesce(o.safe_source_payload#>>'{shadow_enrichment,source_status}',o.safe_source_payload->>'source_status','')<>'active' then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_SOURCE_STATUS_BLOCKED')); end if;
  if o.deadline_evidence<>'explicit_source' or o.deadline is null or o.deadline<((now() at time zone 'UTC')::date+7) then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_DEADLINE_BLOCKED')); end if;
  if not o.strong_procurement_evidence or o.promotion_enrichment_status not in ('succeeded','not_needed') then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_EVIDENCE_BLOCKED')); end if;
  if o.source_id is null or o.source_id<>c.source_id or nullif(trim(o.external_id),'') is null or o.external_id!~'^gardabaer:' or nullif(trim(o.buyer),'') is null or public.v2_normalize_identity_text(o.buyer)<>'gardabar' or o.normalized_canonical_url is null or o.canonical_url!~*'^https://(www\.)?gardabaer\.is/framkvaemdir/utbod/[^/]+/?$' then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_IDENTITY_REQUIRED')); end if;
  if o.comparison_state not in ('legacy_match','v2_only') or exists(select 1 from public.v2_legacy_comparisons x where x.observation_id=o.id and (x.match_type='fuzzy_review_candidate' or x.decision='needs_review')) then reasons:=reasons||jsonb_build_array(jsonb_build_object('code','V2_ROUTINE_COMPARISON_BLOCKED')); end if;
  if exists(select 1 from public.opportunity_ingestion_provenance p where p.observation_id=o.id) then
    select p.opportunity_id into opportunity_id from public.opportunity_ingestion_provenance p where p.observation_id=o.id;
    observation_id:=o.id; admission_status:='already_admitted'; created:=false; reason_code:='V2_ALREADY_ADMITTED'; return next; return;
  end if;
  if jsonb_array_length(reasons)>0 then
    update public.v2_ingestion_observations set promotion_state=case when exists(select 1 from jsonb_array_elements(reasons)e where e->>'code'='V2_ROUTINE_COMPARISON_BLOCKED') then 'review_required' else 'blocked' end,promotion_error=reasons::text,updated_at=now() where id=o.id;
    perform public.v2_phase_c_log('routine_admission_blocked',null,c.id,o.id,null,reasons->0->>'code',null,reasons);
    observation_id:=o.id; admission_status:='blocked'; opportunity_id:=null; created:=false; reason_code:=reasons->0->>'code'; return next; return;
  end if;

  ref:=public.v2_normalize_identity_text(o.procurement_reference); canon:=o.normalized_canonical_url; fp:=o.identity_fingerprint;
  locks:=array['source_external:'||o.source_id||':'||o.external_id,'url:'||canon,'fingerprint:'||fp];
  if ref<>'' then locks:=array_append(locks,'reference:'||ref); end if;
  select coalesce(array_agg(distinct value order by value),'{}') into locks from unnest(locks) value;
  foreach lock_key in array locks loop perform pg_advisory_xact_lock(hashtextextended('verkradar-v2:'||lock_key,0)); end loop;
  select coalesce(array_agg(id order by id),'{}') into source_ids from public.opportunities where source_id=o.source_id and external_id=o.external_id;
  if ref<>'' then select coalesce(array_agg(id order by id),'{}') into ref_ids from public.opportunities where public.v2_normalize_identity_text(coalesce(raw_payload->>'procurement_reference',raw_payload->>'reference_number',raw_payload->>'notice_number'))=ref; end if;
  select coalesce(array_agg(id order by id),'{}') into url_ids from public.opportunities where public.v2_normalize_canonical_url(url)=canon;
  select coalesce(array_agg(id order by id),'{}') into fp_ids from public.opportunities where public.v2_identity_fingerprint(buyer,title,deadline,coalesce(raw_payload->>'procurement_reference',raw_payload->>'reference_number',raw_payload->>'notice_number'))=fp;
  select coalesce(array_agg(distinct value order by value),'{}') into raw_candidates from unnest(source_ids||ref_ids||url_ids||fp_ids) value;
  resolution:=public.v2_resolve_gardabaer_established_group(raw_candidates);
  resolution_error:=nullif(resolution->>'error_code','');
  established_group:=coalesce((resolution->>'established_group')::boolean,false);
  select coalesce(array_agg(value::uuid order by value::uuid),'{}') into candidates from jsonb_array_elements_text(coalesce(resolution->'resolved_ids','[]'::jsonb)) value;
  if resolution_error is not null or cardinality(source_ids)>1 or cardinality(ref_ids)>1 or cardinality(url_ids)>1 or cardinality(fp_ids)>1 or cardinality(candidates)>1 then
    update public.v2_ingestion_observations set comparison_state='conflict',promotion_state='review_required',promotion_error=coalesce(resolution_error,'V2_ROUTINE_DETERMINISTIC_CONFLICT'),updated_at=now() where id=o.id;
    perform public.v2_phase_c_log('routine_admission_blocked',null,c.id,o.id,null,coalesce(resolution_error,'V2_ROUTINE_DETERMINISTIC_CONFLICT'),null,jsonb_build_object('candidate_ids',raw_candidates));
    observation_id:=o.id; admission_status:='review_required'; opportunity_id:=null; created:=false; reason_code:=coalesce(resolution_error,'V2_ROUTINE_DETERMINISTIC_CONFLICT'); return next; return;
  end if;
  if cardinality(candidates)=0 then
    select coalesce(array_agg(id order by id),'{}') into fuzzy_ids from public.opportunities where extensions.similarity(public.v2_normalize_identity_text(title),public.v2_normalize_identity_text(o.title))>=0.84;
    if cardinality(fuzzy_ids)>0 then
      update public.v2_ingestion_observations set comparison_state='review_required',promotion_state='review_required',promotion_error='V2_FUZZY_REVIEW_REQUIRED',updated_at=now() where id=o.id;
      perform public.v2_phase_c_log('routine_admission_blocked',null,c.id,o.id,null,'V2_FUZZY_REVIEW_REQUIRED',null,jsonb_build_object('candidate_ids',fuzzy_ids));
      observation_id:=o.id; admission_status:='review_required'; opportunity_id:=null; created:=false; reason_code:='V2_FUZZY_REVIEW_REQUIRED'; return next; return;
    end if;
    select count(*) into run_new_count from public.opportunity_ingestion_provenance p join public.v2_ingestion_observations vo on vo.id=p.observation_id where vo.run_id=o.run_id and p.source_config_id=c.id and p.provenance_type='v2_created';
    select count(*) into day_new_count from public.opportunity_ingestion_provenance p where p.source_config_id=c.id and p.provenance_type='v2_created' and p.metadata->>'phase'='C3-routine' and p.attached_at>=date_trunc('day',now() at time zone 'UTC') at time zone 'UTC';
    if run_new_count>=c.routine_admission_max_new_per_run or day_new_count>=c.routine_admission_max_new_per_day then
      update public.v2_ingestion_observations set promotion_state='blocked',promotion_error='V2_ROUTINE_NEW_ADMISSION_LIMIT',updated_at=now() where id=o.id;
      perform public.v2_phase_c_log('routine_admission_blocked',null,c.id,o.id,null,'V2_ROUTINE_NEW_ADMISSION_LIMIT',null,jsonb_build_object('run_new_count',run_new_count,'day_new_count',day_new_count));
      observation_id:=o.id; admission_status:='blocked'; opportunity_id:=null; created:=false; reason_code:='V2_ROUTINE_NEW_ADMISSION_LIMIT'; return next; return;
    end if;
  end if;

  if cardinality(candidates)=1 then
    select * into q from public.opportunities where id=candidates[1] for update;
    created:=false;
    if established_group then
      if cardinality(source_ids)<>1 or cardinality(url_ids)<>1 or source_ids[1]<>url_ids[1] or source_ids[1]=q.id or not q.id=any(fp_ids) then
        resolution_error:='V2_ROUTINE_ESTABLISHED_GROUP_INVALID';
      else
        official_candidate_id:=source_ids[1];
        select raw_payload->>'canonical_opportunity_id' into official_canonical_text from public.opportunities where id=official_candidate_id;
        if official_canonical_text is distinct from q.id::text then resolution_error:='V2_ROUTINE_ESTABLISHED_GROUP_INVALID'; end if;
      end if;
      downstream:=public.v2_canary_downstream_assertions(q.id);
      if resolution_error is null and (
        q.status<>'open' or q.phase_c_communication_hold or q.raw_payload->>'promotion_quarantine' is not null
        or q.deadline is distinct from o.deadline
        or public.v2_normalize_identity_text(q.buyer) is distinct from public.v2_normalize_identity_text(o.buyer)
        or public.v2_normalize_identity_text(q.title) is distinct from public.v2_normalize_identity_text(o.title)
        or q.procurement_stage is distinct from 'uncertain'::public.procurement_stage
        or q.actionable_for_suppliers or not q.requires_admin_review or coalesce(q.classification_confidence,0)>=0.80
        or q.classified_by='admin' or not coalesce((downstream->>'zero_downstream')::boolean,false)
      ) then resolution_error:='V2_ROUTINE_RECONCILIATION_BLOCKED'; end if;
      if resolution_error is not null then
        update public.v2_ingestion_observations set comparison_state='conflict',promotion_state='review_required',promotion_error=resolution_error,updated_at=now() where id=o.id;
        perform public.v2_phase_c_log('routine_admission_blocked',null,c.id,o.id,q.id,resolution_error,null,jsonb_build_object('candidate_ids',raw_candidates,'downstream',downstream));
        observation_id:=o.id; admission_status:='review_required'; opportunity_id:=null; created:=false; reason_code:=resolution_error; return next; return;
      end if;
      reconciliation_before:=jsonb_build_object(
        'procurement_stage',q.procurement_stage,'actionable_for_suppliers',q.actionable_for_suppliers,
        'classification_confidence',q.classification_confidence,'classification_reason',q.classification_reason,
        'positive_signals',q.positive_signals,'negative_signals',q.negative_signals,
        'classified_by',q.classified_by,'classified_at',q.classified_at,
        'classifier_version',q.classifier_version,'requires_admin_review',q.requires_admin_review,'updated_at',q.updated_at);
      update public.opportunities set
        procurement_stage=o.predicted_procurement_stage::public.procurement_stage,
        actionable_for_suppliers=true,
        classification_confidence=o.predicted_confidence,
        classification_reason='Admin-approved reconciliation from verified official Garðabær V2 evidence. '||coalesce(o.predicted_reason,''),
        positive_signals=array['request_for_bids','supplier_deadline','strong_procurement_evidence','verified_official_source'],
        negative_signals='{}',classified_by='admin',classified_at=now(),
        classifier_version='v2-gardabaer-canonical-reconciliation-v1',requires_admin_review=false,updated_at=now()
      where id=q.id returning * into q;
      reconciliation_after:=jsonb_build_object(
        'procurement_stage',q.procurement_stage,'actionable_for_suppliers',q.actionable_for_suppliers,
        'classification_confidence',q.classification_confidence,'classification_reason',q.classification_reason,
        'positive_signals',q.positive_signals,'negative_signals',q.negative_signals,
        'classified_by',q.classified_by,'classified_at',q.classified_at,
        'classifier_version',q.classifier_version,'requires_admin_review',q.requires_admin_review,'updated_at',q.updated_at);
      -- The designated canonical target independently matched the observation fingerprint.
      -- Keep the constrained provenance enum while recording the group resolution in metadata.
      matched_by:='fingerprint';
      matched_keys:=array['same_source_external_id','canonical_url','fingerprint','explicit_canonical_opportunity_id'];
      reconciled:=true;
    else
      if q.id=any(source_ids) then matched_by:='same_source_external_id'; matched_keys:=array_append(matched_keys,'same_source_external_id'); end if;
      if q.id=any(ref_ids) then matched_by:=coalesce(matched_by,'procurement_reference'); matched_keys:=array_append(matched_keys,'procurement_reference'); end if;
      if q.id=any(url_ids) then matched_by:=coalesce(matched_by,'canonical_url'); matched_keys:=array_append(matched_keys,'canonical_url'); end if;
      if q.id=any(fp_ids) then matched_by:=coalesce(matched_by,'fingerprint'); matched_keys:=array_append(matched_keys,'fingerprint'); end if;
    end if;
  else
    insert into public.opportunities(source_id,external_id,title,buyer,description,deadline,published_date,location,url,status,raw_payload,procurement_stage,actionable_for_suppliers,classification_confidence,classification_reason,positive_signals,negative_signals,classified_by,classified_at,classifier_version,requires_admin_review,phase_c_communication_hold)
    values(o.source_id,o.external_id,o.title,o.buyer,o.description,o.deadline,o.publication_date,o.location,o.canonical_url,'open',jsonb_build_object('v2_observation_id',o.id,'procurement_reference',o.procurement_reference,'source_payload',o.safe_source_payload,'v2_routine_admission',true,'hidden_from_reports',false,'admin_report_status','released'),o.predicted_procurement_stage::public.procurement_stage,true,o.predicted_confidence,o.predicted_reason,array['strong_procurement_evidence','explicit_future_deadline'],'{}','deterministic_rule',now(),'v2-gardabaer-routine-v1',false,false) returning * into q;
    matched_by:='same_source_external_id'; matched_keys:=array['source_external_id','canonical_url','fingerprint']; if ref<>'' then matched_keys:=array_append(matched_keys,'procurement_reference'); end if; created:=true;
  end if;
  insert into public.opportunity_ingestion_provenance(opportunity_id,observation_id,source_config_id,provenance_type,identity_match_type,content_hash,metadata)
  values(q.id,o.id,c.id,case when created then 'v2_created' else 'existing_opportunity_matched' end,matched_by,o.content_hash,jsonb_build_object(
    'phase','C3-routine','automatic',true,'opportunity_mutated',reconciled,'mutation_scope',case when reconciled then 'classification_only' else 'none' end,
    'matched_identity_keys',matched_keys,'source_external_id',o.source_id||':'||o.external_id,
    'normalized_procurement_reference',nullif(ref,''),'normalized_canonical_url',canon,'identity_fingerprint',fp,
    'deterministic_candidate_ids',raw_candidates,'established_canonical_group',established_group,'resolved_canonical_opportunity_id',q.id,
    'reconciliation_before',reconciliation_before,'reconciliation_after',reconciliation_after));
  update public.v2_ingestion_observations set promotion_state='promoted',promoted_opportunity_id=q.id,promotion_error=null,updated_at=now() where id=o.id;
  perform public.v2_phase_c_log(case when created then 'routine_opportunity_created' else 'routine_existing_reused' end,null,c.id,o.id,q.id,null,null,jsonb_build_object(
    'identity_match_type',matched_by,'opportunity_mutated',reconciled,'mutation_scope',case when reconciled then 'classification_only' else 'none' end,
    'candidate_ids',raw_candidates,'reconciliation_before',reconciliation_before,'reconciliation_after',reconciliation_after));
  perform public.v2_phase_c_log('routine_admitted',null,c.id,o.id,q.id,null,null,jsonb_build_object('created',created,'reconciled',reconciled,'matching_triggered',false,'downstream_triggered',false));
  observation_id:=o.id; opportunity_id:=q.id; admission_status:='admitted'; reason_code:=null; return next;
end;
$$;

revoke all on function public.v2_resolve_gardabaer_established_group(uuid[]) from public,anon,authenticated;
revoke all on function public.v2_admit_gardabaer_observation(uuid) from public,anon,authenticated;
grant execute on function public.v2_resolve_gardabaer_established_group(uuid[]) to service_role;
grant execute on function public.v2_admit_gardabaer_observation(uuid) to service_role;

comment on function public.v2_resolve_gardabaer_established_group(uuid[]) is
  'Resolves only internally consistent, explicitly linked Garðabær legacy duplicate groups.';
comment on function public.v2_admit_gardabaer_observation(uuid) is
  'Garðabær routine admission with exact buyer normalization and narrow audited canonical classification reconciliation.';
