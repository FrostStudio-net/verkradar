-- Production release controls for the single already-quarantined Reykjavík canary.
-- Enabling these controls does not approve or release the opportunity.

create or replace function public.v2_reykjavik_release_preflight(
  target_observation_id uuid,
  target_opportunity_id uuid,
  require_release_enabled boolean default true
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions, pg_temp
as $$
declare
  o public.v2_ingestion_observations%rowtype;
  c public.v2_source_configs%rowtype;
  p public.opportunity_ingestion_provenance%rowtype;
  q public.opportunities%rowtype;
  r public.v2_ingestion_runs%rowtype;
  h public.v2_source_health%rowtype;
  provenance_count integer;
  active_canary_count integer;
  other_approved_count integer;
  other_promoted_count integer;
  deterministic_count integer;
  fuzzy_count integer;
  downstream jsonb;
  checks jsonb;
begin
  select * into o from public.v2_ingestion_observations where id=target_observation_id;
  select * into c from public.v2_source_configs where id=o.source_config_id;
  select * into q from public.opportunities where id=target_opportunity_id;
  select * into p from public.opportunity_ingestion_provenance
    where observation_id=target_observation_id and opportunity_id=target_opportunity_id
    limit 1;
  select count(*) into provenance_count from public.opportunity_ingestion_provenance
    where observation_id=target_observation_id or opportunity_id=target_opportunity_id;
  select * into r from public.v2_ingestion_runs where id=o.run_id;
  select * into h from public.v2_source_health where source_config_id=c.id;
  select count(*) into active_canary_count from public.opportunities
    where raw_payload->>'promotion_quarantine'='phase_c_canary';
  select count(*) into other_approved_count from public.v2_ingestion_observations
    where id<>target_observation_id and approved_for_promotion;
  select count(*) into other_promoted_count from public.v2_ingestion_observations
    where id<>target_observation_id and (promoted_opportunity_id is not null or promotion_state='promoted');

  select count(distinct x.id) into deterministic_count from public.opportunities x
  where x.id<>target_opportunity_id and (
    (x.source_id=o.source_id and x.external_id=o.external_id)
    or (nullif(public.v2_normalize_identity_text(o.procurement_reference),'') is not null
      and public.v2_normalize_identity_text(coalesce(x.raw_payload->>'procurement_reference',x.raw_payload->>'reference_number',x.raw_payload->>'notice_number'))=public.v2_normalize_identity_text(o.procurement_reference))
    or (o.normalized_canonical_url is not null and public.v2_normalize_canonical_url(x.url)=o.normalized_canonical_url)
    or public.v2_identity_fingerprint(x.buyer,x.title,x.deadline,coalesce(x.raw_payload->>'procurement_reference',x.raw_payload->>'reference_number',x.raw_payload->>'notice_number'))=o.identity_fingerprint
  );
  select count(*) into fuzzy_count from public.opportunities x
  where x.id<>target_opportunity_id
    and extensions.similarity(public.v2_normalize_identity_text(x.title),public.v2_normalize_identity_text(o.title))>=0.84;
  downstream:=public.v2_canary_downstream_assertions(target_opportunity_id);

  checks:=jsonb_build_object(
    'exact_source',c.source_key='reykjavik-utbod-v2',
    'phase_c_enabled',public.v2_phase_c_flag('phase_c_production_enabled'),
    'release_enabled',public.v2_phase_c_flag('phase_c_release_enabled') and c.release_feature_enabled,
    'source_shadow_neutral',c.mode='shadow' and not c.promotion_approved,
    'source_canary_enabled',c.production_canary_enabled,
    'observation_linked',o.promoted_opportunity_id=target_opportunity_id and o.promotion_state='promoted',
    'observation_unambiguous',not coalesce(o.predicted_requires_admin_review,true)
      and o.comparison_state not in ('conflict','review_required')
      and not exists(select 1 from public.v2_legacy_comparisons lc where lc.observation_id=o.id and (lc.match_type='fuzzy_review_candidate' or lc.decision='needs_review')),
    'deadline_valid',o.deadline is not null and o.deadline_evidence='explicit_source'
      and o.deadline>(now() at time zone 'UTC')::date+7,
    'run_healthy',r.status='succeeded' and r.finished_at is not null and r.error_count=0 and not r.suspicious_zero_items,
    'source_healthy',h.status='healthy' and h.circuit_state='closed' and h.last_run_id=r.id
      and h.last_error_code is null,
    'opportunity_hidden_quarantined',q.status='hidden'
      and q.raw_payload->>'promotion_quarantine'='phase_c_canary'
      and q.phase_c_released_at is null and not q.phase_c_communication_hold,
    'provenance_valid',provenance_count=1 and p.provenance_type='v2_created',
    'single_active_canary',active_canary_count=1,
    'no_other_approved_observation',other_approved_count=0,
    'no_other_promoted_observation',other_promoted_count=0,
    'deterministic_candidate_count',deterministic_count,
    'fuzzy_candidate_count',fuzzy_count,
    'downstream',downstream
  );
  return checks||jsonb_build_object('eligible',
    (checks->>'exact_source')::boolean
    and (checks->>'phase_c_enabled')::boolean
    and (not require_release_enabled or (checks->>'release_enabled')::boolean)
    and (checks->>'source_shadow_neutral')::boolean
    and (checks->>'source_canary_enabled')::boolean
    and (checks->>'observation_linked')::boolean
    and (checks->>'observation_unambiguous')::boolean
    and (checks->>'deadline_valid')::boolean
    and (checks->>'run_healthy')::boolean
    and (checks->>'source_healthy')::boolean
    and (checks->>'opportunity_hidden_quarantined')::boolean
    and (checks->>'provenance_valid')::boolean
    and (checks->>'single_active_canary')::boolean
    and (checks->>'no_other_approved_observation')::boolean
    and (checks->>'no_other_promoted_observation')::boolean
    and deterministic_count=0 and fuzzy_count=0
    and coalesce((downstream->>'zero_downstream')::boolean,false)
  );
end;
$$;

create or replace function public.set_reykjavik_canary_release_enabled(
  target_observation_id uuid,
  target_opportunity_id uuid,
  enabled_value boolean,
  acting_admin_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  o public.v2_ingestion_observations%rowtype;
  c public.v2_source_configs%rowtype;
  q public.opportunities%rowtype;
  preflight jsonb;
begin
  if not exists(select 1 from public.admin_users where user_id=acting_admin_id) then raise exception 'V2_RELEASE_ADMIN_REQUIRED'; end if;
  perform pg_advisory_xact_lock(hashtextextended('verkradar-phase-c-release-controls',0));
  perform 1 from public.automation_settings where key in ('phase_c_production_enabled','phase_c_release_enabled') order by key for update;
  select * into o from public.v2_ingestion_observations where id=target_observation_id for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;
  select * into c from public.v2_source_configs where id=o.source_config_id for update;
  select * into q from public.opportunities where id=target_opportunity_id for update;
  if not found then raise exception 'V2_RELEASE_OPPORTUNITY_NOT_FOUND'; end if;
  if c.source_key<>'reykjavik-utbod-v2' then raise exception 'V2_RELEASE_SOURCE_NOT_ALLOWED'; end if;
  if o.promoted_opportunity_id is distinct from q.id then raise exception 'V2_RELEASE_CANARY_LINK_MISMATCH'; end if;

  if enabled_value then
    preflight:=public.v2_reykjavik_release_preflight(o.id,q.id,false);
    if coalesce((preflight->>'eligible')::boolean,false) is not true then
      raise exception using message='V2_RELEASE_PREFLIGHT_BLOCKED',detail=preflight::text;
    end if;
    if c.release_approved or o.approved_for_release then raise exception 'V2_RELEASE_ALREADY_APPROVED'; end if;
    update public.automation_settings set value='true' where key='phase_c_release_enabled';
    update public.v2_source_configs set release_feature_enabled=true where id=c.id;
  else
    if q.phase_c_released_at is not null or q.raw_payload->>'promotion_quarantine'<>'phase_c_canary' then
      raise exception 'V2_RELEASE_DISABLE_AFTER_RELEASE_FORBIDDEN';
    end if;
    if coalesce((public.v2_canary_downstream_assertions(q.id)->>'zero_downstream')::boolean,false) is not true then
      raise exception 'V2_RELEASE_UNEXPECTED_DOWNSTREAM_STATE';
    end if;
    update public.automation_settings set value='false' where key='phase_c_release_enabled';
    update public.v2_source_configs set release_feature_enabled=false,release_approved=false where id=c.id;
    update public.v2_ingestion_observations set approved_for_release=false,
      release_approved_at=null,release_approved_by=null,release_approval_reason=null
      where id=o.id;
  end if;
  return jsonb_build_object(
    'enabled',enabled_value,
    'observation_id',o.id,
    'opportunity_id',q.id,
    'phase_c_release_enabled',public.v2_phase_c_flag('phase_c_release_enabled'),
    'release_feature_enabled',(select release_feature_enabled from public.v2_source_configs where id=c.id),
    'release_approved',(select release_approved from public.v2_source_configs where id=c.id),
    'released',false,'opportunity_mutated',false,'downstream_triggered',false
  );
end;
$$;

create or replace function public.approve_v2_canary_release(target_observation_id uuid, approving_admin_id uuid, reason_text text)
returns jsonb language plpgsql security definer set search_path = public, pg_temp as $$
declare o public.v2_ingestion_observations%rowtype; c public.v2_source_configs%rowtype; p public.opportunity_ingestion_provenance%rowtype; q public.opportunities%rowtype; preflight jsonb;
begin
  if not exists(select 1 from public.admin_users where user_id=approving_admin_id) then raise exception 'V2_RELEASE_ADMIN_REQUIRED'; end if;
  if nullif(trim(reason_text),'') is null then raise exception 'V2_RELEASE_REASON_REQUIRED'; end if;
  perform pg_advisory_xact_lock(hashtextextended('verkradar-phase-c-release',0));
  select * into o from public.v2_ingestion_observations where id=target_observation_id for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;
  select * into c from public.v2_source_configs where id=o.source_config_id for update;
  select * into p from public.opportunity_ingestion_provenance where observation_id=o.id and provenance_type='v2_created' for update;
  if not found then raise exception 'V2_RELEASE_PROVENANCE_INVALID'; end if;
  select * into q from public.opportunities where id=p.opportunity_id for update;
  preflight:=public.v2_reykjavik_release_preflight(o.id,q.id,true);
  if coalesce((preflight->>'eligible')::boolean,false) is not true then raise exception using message='V2_RELEASE_PREFLIGHT_BLOCKED',detail=preflight::text; end if;
  update public.v2_ingestion_observations set approved_for_release=true,release_approved_at=now(),release_approved_by=approving_admin_id,release_approval_reason=trim(reason_text),updated_at=now() where id=o.id;
  update public.v2_source_configs set release_approved=true,updated_at=now() where id=c.id;
  perform public.v2_phase_c_log('release_approved',approving_admin_id,c.id,o.id,q.id,null,reason_text,preflight);
  return jsonb_build_object('approved',true,'released',false,'observation_id',o.id,'opportunity_id',q.id,'preflight',preflight);
end;
$$;

create or replace function public.release_v2_canary(target_observation_id uuid, releasing_admin_id uuid, reason_text text)
returns jsonb language plpgsql security definer set search_path = public, pg_temp as $$
declare o public.v2_ingestion_observations%rowtype; c public.v2_source_configs%rowtype; p public.opportunity_ingestion_provenance%rowtype; q public.opportunities%rowtype; r public.v2_ingestion_runs%rowtype; h public.v2_source_health%rowtype; preflight jsonb;
begin
  if not exists(select 1 from public.admin_users where user_id=releasing_admin_id) then raise exception 'V2_RELEASE_ADMIN_REQUIRED'; end if;
  if nullif(trim(reason_text),'') is null then raise exception 'V2_RELEASE_REASON_REQUIRED'; end if;
  perform pg_advisory_xact_lock(hashtextextended('verkradar-phase-c-release',0));
  select * into o from public.v2_ingestion_observations where id=target_observation_id for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;
  select * into c from public.v2_source_configs where id=o.source_config_id for update;
  select * into p from public.opportunity_ingestion_provenance where observation_id=o.id and provenance_type='v2_created' for update;
  if not found then raise exception 'V2_RELEASE_PROVENANCE_INVALID'; end if;
  select * into q from public.opportunities where id=p.opportunity_id for update;
  select * into r from public.v2_ingestion_runs where id=o.run_id for update;
  select * into h from public.v2_source_health where source_config_id=c.id for update;
  if not c.release_approved or not o.approved_for_release then raise exception 'V2_RELEASE_NOT_APPROVED'; end if;
  preflight:=public.v2_reykjavik_release_preflight(o.id,q.id,true);
  if coalesce((preflight->>'eligible')::boolean,false) is not true then raise exception using message='V2_RELEASE_PREFLIGHT_BLOCKED',detail=preflight::text; end if;
  perform public.v2_phase_c_authorize_transaction('release',true);
  update public.opportunities set status='open',phase_c_communication_hold=true,phase_c_released_at=now(),phase_c_released_by=releasing_admin_id,phase_c_release_reason=trim(reason_text),raw_payload=(raw_payload-'promotion_quarantine')||jsonb_build_object('hidden_from_reports',false,'admin_report_status','released_held','phase_c_communication_hold',true),updated_at=now() where id=q.id;
  perform public.v2_phase_c_authorize_transaction('release',false);
  update public.v2_ingestion_observations set released_at=now(),released_by=releasing_admin_id,release_reason=trim(reason_text),updated_at=now() where id=o.id;
  update public.v2_source_configs set release_approved=false,updated_at=now() where id=c.id;
  perform public.v2_phase_c_log('released',releasing_admin_id,c.id,o.id,q.id,null,reason_text,preflight||jsonb_build_object('communication_hold',true,'matching_triggered',false));
  return jsonb_build_object('released',true,'opportunity_id',q.id,'communication_hold',true,'downstream_triggered',false);
end;
$$;

revoke all on function public.v2_reykjavik_release_preflight(uuid,uuid,boolean) from public,anon,authenticated;
revoke all on function public.set_reykjavik_canary_release_enabled(uuid,uuid,boolean,uuid) from public,anon,authenticated;
revoke all on function public.approve_v2_canary_release(uuid,uuid,text) from public,anon,authenticated;
revoke all on function public.release_v2_canary(uuid,uuid,text) from public,anon,authenticated;
grant execute on function public.v2_reykjavik_release_preflight(uuid,uuid,boolean) to service_role;
grant execute on function public.set_reykjavik_canary_release_enabled(uuid,uuid,boolean,uuid) to service_role;
grant execute on function public.approve_v2_canary_release(uuid,uuid,text) to service_role;
grant execute on function public.release_v2_canary(uuid,uuid,text) to service_role;

notify pgrst, 'reload schema';
