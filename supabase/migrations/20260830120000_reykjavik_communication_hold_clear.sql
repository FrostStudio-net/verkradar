-- Final Phase C control for the first production Reykjavik canary.
-- Deploying this function does not clear the hold or run downstream work.

create or replace function public.clear_reykjavik_v2_canary_communication_hold(
  target_observation_id uuid,
  target_opportunity_id uuid,
  clearing_admin_id uuid,
  reason_text text,
  runtime_project_ref text
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions, pg_temp
as $$
declare
  expected_project_ref constant text := 'asojxjbsgqbfpbepojzh';
  expected_source_key constant text := 'reykjavik-utbod-v2';
  expected_observation_id constant uuid := '32713ed0-089d-45a0-97f9-24fabdbf08dd';
  expected_opportunity_id constant uuid := '1c4b107b-999c-47df-82a7-d87b43b20185';
  o public.v2_ingestion_observations%rowtype;
  c public.v2_source_configs%rowtype;
  p public.opportunity_ingestion_provenance%rowtype;
  q public.opportunities%rowtype;
  provenance_count integer;
  deterministic_count integer;
  fuzzy_count integer;
  other_promoted_count integer;
  prior_clear_event_count integer;
  downstream jsonb;
  normalized_reference text;
  normalized_url text;
  expected_source_external text;
  event_id_value uuid;
begin
  -- The Edge runtime derives this value from its exact SUPABASE_URL. The RPC
  -- independently rejects any non-production project assertion.
  if runtime_project_ref is distinct from expected_project_ref then
    raise exception 'V2_COMMUNICATION_HOLD_PRODUCTION_PROJECT_REQUIRED';
  end if;
  if target_observation_id is distinct from expected_observation_id
     or target_opportunity_id is distinct from expected_opportunity_id then
    raise exception 'V2_COMMUNICATION_HOLD_TARGET_NOT_ALLOWED';
  end if;
  if not exists(select 1 from public.admin_users where user_id=clearing_admin_id) then
    raise exception 'V2_COMMUNICATION_HOLD_ADMIN_REQUIRED';
  end if;
  if nullif(trim(reason_text),'') is null then
    raise exception 'V2_COMMUNICATION_HOLD_REASON_REQUIRED';
  end if;

  perform pg_advisory_xact_lock(hashtextextended('verkradar-phase-c-reykjavik-hold-clear',0));
  perform 1 from public.automation_settings
    where key='phase_c_production_enabled' for update;
  if not public.v2_phase_c_flag('phase_c_production_enabled') then
    raise exception 'V2_PRODUCTION_FEATURE_DISABLED';
  end if;

  select * into c from public.v2_source_configs
    where source_key=expected_source_key for update;
  if not found or c.source_key is distinct from expected_source_key then
    raise exception 'V2_COMMUNICATION_HOLD_SOURCE_NOT_ALLOWED';
  end if;
  if c.mode is distinct from 'shadow' or c.promotion_approved is true
     or c.production_canary_enabled is not true then
    raise exception 'V2_COMMUNICATION_HOLD_SOURCE_STATE_INVALID';
  end if;

  select * into o from public.v2_ingestion_observations
    where id=target_observation_id for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;
  if o.source_config_id is distinct from c.id
     or o.source_id is distinct from c.source_id
     or o.source_key is distinct from expected_source_key then
    raise exception 'V2_COMMUNICATION_HOLD_SOURCE_IDENTITY_MISMATCH';
  end if;

  perform 1 from public.opportunity_ingestion_provenance
    where observation_id=o.id or opportunity_id=target_opportunity_id
    order by id for update;
  select count(*) into provenance_count
  from public.opportunity_ingestion_provenance
  where observation_id=o.id or opportunity_id=target_opportunity_id;
  select * into p from public.opportunity_ingestion_provenance
  where observation_id=o.id and opportunity_id=target_opportunity_id
    and provenance_type='v2_created';
  if provenance_count<>1 or not found
     or p.source_config_id is distinct from c.id
     or p.content_hash is distinct from o.content_hash then
    raise exception 'V2_COMMUNICATION_HOLD_PROVENANCE_INVALID';
  end if;

  select * into q from public.opportunities
    where id=target_opportunity_id for update;
  if not found then raise exception 'V2_COMMUNICATION_HOLD_OPPORTUNITY_NOT_FOUND'; end if;
  if q.status is distinct from 'open' then raise exception 'V2_COMMUNICATION_HOLD_OPPORTUNITY_NOT_OPEN'; end if;
  if q.phase_c_released_at is null or o.released_at is null then raise exception 'V2_COMMUNICATION_HOLD_NOT_RELEASED'; end if;
  if q.raw_payload->>'promotion_quarantine' is not null then raise exception 'V2_COMMUNICATION_HOLD_QUARANTINE_ACTIVE'; end if;
  if q.phase_c_disabled_at is not null or o.post_release_disabled_at is not null then raise exception 'V2_COMMUNICATION_HOLD_CANARY_DISABLED'; end if;
  if q.phase_c_communication_hold is not true
     or coalesce((q.raw_payload->>'phase_c_communication_hold')::boolean,false) is not true then
    raise exception 'V2_COMMUNICATION_HOLD_ALREADY_CLEARED';
  end if;
  if o.promotion_state is distinct from 'promoted'
     or o.promoted_opportunity_id is distinct from q.id then
    raise exception 'V2_COMMUNICATION_HOLD_OBSERVATION_LINK_MISMATCH';
  end if;

  normalized_reference:=public.v2_normalize_identity_text(o.procurement_reference);
  normalized_url:=o.normalized_canonical_url;
  expected_source_external:=o.source_id::text||':'||o.external_id;
  if q.source_id is distinct from o.source_id
     or q.external_id is distinct from o.external_id
     or public.v2_normalize_identity_text(coalesce(q.raw_payload->>'procurement_reference',q.raw_payload->>'reference_number',q.raw_payload->>'notice_number')) is distinct from normalized_reference
     or public.v2_normalize_canonical_url(q.url) is distinct from normalized_url
     or p.metadata->>'source_external_id' is distinct from expected_source_external
     or p.metadata->>'normalized_procurement_reference' is distinct from normalized_reference
     or p.metadata->>'normalized_canonical_url' is distinct from normalized_url
     or p.metadata->>'identity_fingerprint' is distinct from o.identity_fingerprint then
    raise exception 'V2_COMMUNICATION_HOLD_IDENTITY_CHANGED';
  end if;

  if o.deadline is null or q.deadline is null
     or o.deadline_evidence is distinct from 'explicit_source'
     or q.deadline is distinct from o.deadline
     or o.deadline <= (now() at time zone 'UTC')::date
     or q.deadline <= (now() at time zone 'UTC')::date then
    raise exception 'V2_COMMUNICATION_HOLD_DEADLINE_INVALID';
  end if;
  if o.predicted_procurement_stage not in ('open_competition','upcoming_procurement','market_consultation')
     or o.predicted_actionable is not true
     or o.predicted_requires_admin_review is distinct from false
     or q.procurement_stage::text not in ('open_competition','upcoming_procurement','market_consultation')
     or q.actionable_for_suppliers is not true
     or q.requires_admin_review is true then
    raise exception 'V2_COMMUNICATION_HOLD_STAGE_NOT_ACTIONABLE';
  end if;
  if o.comparison_state in ('conflict','review_required')
     or exists(select 1 from public.v2_legacy_comparisons lc where lc.observation_id=o.id and (lc.match_type='fuzzy_review_candidate' or lc.decision='needs_review')) then
    raise exception 'V2_COMMUNICATION_HOLD_REVIEW_REQUIRED';
  end if;

  select count(distinct x.id) into deterministic_count from public.opportunities x
  where x.id<>q.id and (
    (x.source_id=o.source_id and x.external_id=o.external_id)
    or (normalized_reference<>'' and public.v2_normalize_identity_text(coalesce(x.raw_payload->>'procurement_reference',x.raw_payload->>'reference_number',x.raw_payload->>'notice_number'))=normalized_reference)
    or (normalized_url is not null and public.v2_normalize_canonical_url(x.url)=normalized_url)
    or (o.identity_fingerprint is not null and public.v2_identity_fingerprint(x.buyer,x.title,x.deadline,coalesce(x.raw_payload->>'procurement_reference',x.raw_payload->>'reference_number',x.raw_payload->>'notice_number'))=o.identity_fingerprint)
  );
  if deterministic_count<>0 then raise exception 'V2_COMMUNICATION_HOLD_DETERMINISTIC_CONFLICT'; end if;

  select count(*) into fuzzy_count from public.opportunities x
  where x.id<>q.id and extensions.similarity(
    public.v2_normalize_identity_text(x.title),public.v2_normalize_identity_text(o.title)
  )>=0.84;
  if fuzzy_count<>0 then raise exception 'V2_COMMUNICATION_HOLD_FUZZY_REVIEW_REQUIRED'; end if;

  select count(*) into other_promoted_count from public.v2_ingestion_observations x
  where x.id<>o.id and (x.promoted_opportunity_id is not null or x.promotion_state='promoted');
  if other_promoted_count<>0
     or exists(select 1 from public.opportunities x where x.id<>q.id and (
       x.raw_payload->>'promotion_quarantine'='phase_c_canary'
       or (x.phase_c_released_at is not null and x.phase_c_disabled_at is null and x.phase_c_communication_hold)
     )) then
    raise exception 'V2_COMMUNICATION_HOLD_CONFLICTING_CANARY';
  end if;

  select count(*) into prior_clear_event_count from public.v2_phase_c_events
  where observation_id=o.id and opportunity_id=q.id
    and event_type='communication_hold_cleared';
  if prior_clear_event_count<>0 then
    raise exception 'V2_COMMUNICATION_HOLD_ALREADY_CLEARED';
  end if;

  downstream:=public.v2_canary_downstream_assertions(q.id);
  if coalesce((downstream->>'zero_downstream')::boolean,false) is not true then
    raise exception using message='V2_COMMUNICATION_HOLD_UNEXPECTED_DOWNSTREAM',detail=downstream::text;
  end if;

  update public.opportunities
  set phase_c_communication_hold=false,
      raw_payload=raw_payload||jsonb_build_object(
        'phase_c_communication_hold',false,
        'admin_report_status','released'
      ),
      updated_at=now()
  where id=q.id;

  perform public.v2_phase_c_log(
    'communication_hold_cleared',clearing_admin_id,c.id,o.id,q.id,
    'V2_COMMUNICATION_HOLD_CLEARED',trim(reason_text),
    jsonb_build_object(
      'runtime_project_ref',runtime_project_ref,
      'matching_triggered',false,
      'downstream_triggered',false,
      'previous_admin_report_status',q.raw_payload->>'admin_report_status',
      'downstream_before_clear',downstream
    )
  );
  select id into event_id_value from public.v2_phase_c_events
    where opportunity_id=q.id and observation_id=o.id
      and event_type='communication_hold_cleared'
    order by occurred_at desc limit 1;

  return jsonb_build_object(
    'cleared',true,
    'source_key',c.source_key,
    'observation_id',o.id,
    'opportunity_id',q.id,
    'communication_hold',false,
    'status','open',
    'admin_report_status','released',
    'event_id',event_id_value,
    'matching_triggered',false,
    'downstream_triggered',false
  );
end;
$$;

revoke all on function public.clear_reykjavik_v2_canary_communication_hold(uuid,uuid,uuid,text,text)
  from public,anon,authenticated;
grant execute on function public.clear_reykjavik_v2_canary_communication_hold(uuid,uuid,uuid,text,text)
  to service_role;

comment on function public.clear_reykjavik_v2_canary_communication_hold(uuid,uuid,uuid,text,text) is
  'Exact-target, service-role-only final Phase C control. Clears the first production Reykjavik canary communication hold without invoking downstream work.';
comment on column public.opportunities.phase_c_communication_hold is
  'Explicit customer visibility/report/notification/send hold. The exact-target Phase C RPC is the only production clear path.';

notify pgrst, 'reload schema';
