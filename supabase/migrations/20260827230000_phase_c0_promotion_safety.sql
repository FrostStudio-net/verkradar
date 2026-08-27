-- Phase C0: fail-closed, staging-canary promotion prerequisites.
-- This migration enables no source and approves/promotes no observation.

create extension if not exists pg_trgm with schema extensions;

alter table public.v2_source_configs
  add column if not exists promotion_approved boolean not null default false,
  add column if not exists promotion_reference_required boolean not null default false;

alter table public.v2_ingestion_observations
  add column if not exists approved_for_promotion boolean not null default false,
  add column if not exists approved_at timestamptz,
  add column if not exists approved_by uuid references auth.users(id) on delete set null,
  add column if not exists approval_note text,
  add column if not exists strong_procurement_evidence boolean not null default false,
  add column if not exists deadline_evidence text,
  add column if not exists promotion_enrichment_status text,
  add column if not exists rolled_back_at timestamptz,
  add column if not exists rolled_back_by uuid references auth.users(id) on delete set null,
  add column if not exists rollback_reason text;

alter table public.v2_ingestion_observations
  drop constraint if exists v2_ingestion_observations_approval_complete_check;
alter table public.v2_ingestion_observations
  add constraint v2_ingestion_observations_approval_complete_check
  check (
    approved_for_promotion is false
    or (approved_at is not null and approved_by is not null)
  );

alter table public.v2_ingestion_observations
  drop constraint if exists v2_ingestion_observations_deadline_evidence_check;
alter table public.v2_ingestion_observations
  add constraint v2_ingestion_observations_deadline_evidence_check
  check (deadline_evidence is null or deadline_evidence in ('explicit_source'));

alter table public.v2_ingestion_observations
  drop constraint if exists v2_ingestion_observations_promotion_enrichment_status_check;
alter table public.v2_ingestion_observations
  add constraint v2_ingestion_observations_promotion_enrichment_status_check
  check (promotion_enrichment_status is null or promotion_enrichment_status in ('succeeded', 'not_needed', 'failed'));

alter table public.opportunity_ingestion_provenance
  drop constraint if exists opportunity_ingestion_provenance_provenance_type_check;
alter table public.opportunity_ingestion_provenance
  add constraint opportunity_ingestion_provenance_provenance_type_check
  check (provenance_type in ('legacy_row_matched', 'v2_created', 'v2_safe_enrichment', 'existing_opportunity_matched'));

create or replace function public.v2_canary_downstream_assertions(target_opportunity_id uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
declare
  result jsonb;
begin
  select jsonb_build_object(
    'opportunity_matches', (select count(*) from public.opportunity_matches where opportunity_id = target_opportunity_id),
    'ai_reviews', (select count(*) from public.ai_match_reviews where opportunity_id = target_opportunity_id),
    'ai_usages', (select count(*) from public.ai_usage_log where opportunity_id = target_opportunity_id),
    'reports', (select count(distinct report_id) from public.report_items where opportunity_id = target_opportunity_id),
    'report_items', (select count(*) from public.report_items where opportunity_id = target_opportunity_id),
    'actions', (select count(*) from public.company_opportunity_actions where opportunity_id = target_opportunity_id),
    'sends', (select count(*) from public.company_opportunity_sends where opportunity_id = target_opportunity_id),
    'admin_match_decisions', (select count(*) from public.admin_match_decisions where opportunity_id = target_opportunity_id),
    'match_evaluation_labels', (select count(*) from public.match_evaluation_labels where opportunity_id = target_opportunity_id),
    'customer_visible_linkages',
      (select count(*) from public.opportunity_matches where opportunity_id = target_opportunity_id)
      + (select count(*) from public.report_items where opportunity_id = target_opportunity_id)
      + (select count(*) from public.company_opportunity_actions where opportunity_id = target_opportunity_id)
      + (select count(*) from public.company_opportunity_sends where opportunity_id = target_opportunity_id),
    'quarantined', coalesce((select
      status <> 'open'
      and coalesce((raw_payload->>'hidden_from_reports')::boolean, false)
      and lower(coalesce(raw_payload->>'admin_report_status', '')) = 'hidden'
      and raw_payload->>'promotion_quarantine' = 'phase_c_canary'
      from public.opportunities where id = target_opportunity_id), false)
  ) into result;
  return result || jsonb_build_object(
    'zero_downstream',
      coalesce((result->>'opportunity_matches')::integer, 0) = 0
      and coalesce((result->>'ai_reviews')::integer, 0) = 0
      and coalesce((result->>'ai_usages')::integer, 0) = 0
      and coalesce((result->>'reports')::integer, 0) = 0
      and coalesce((result->>'report_items')::integer, 0) = 0
      and coalesce((result->>'actions')::integer, 0) = 0
      and coalesce((result->>'sends')::integer, 0) = 0
      and coalesce((result->>'admin_match_decisions')::integer, 0) = 0
      and coalesce((result->>'match_evaluation_labels')::integer, 0) = 0
      and coalesce((result->>'customer_visible_linkages')::integer, 0) = 0
  );
end;
$$;

create or replace function public.approve_v2_observation_for_promotion(
  target_observation_id uuid,
  approving_admin_id uuid,
  approval_note_text text default null
)
returns table(observation_id uuid, approved boolean, promotion_state text)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  observation_row public.v2_ingestion_observations%rowtype;
  config_row public.v2_source_configs%rowtype;
begin
  if not exists (select 1 from public.admin_users where user_id = approving_admin_id) then
    raise exception 'V2_APPROVAL_ADMIN_REQUIRED';
  end if;

  select * into observation_row
  from public.v2_ingestion_observations
  where id = target_observation_id
  for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;

  select * into config_row from public.v2_source_configs where id = observation_row.source_config_id;
  if config_row.mode <> 'promote' then raise exception 'V2_PROMOTE_MODE_REQUIRED'; end if;
  if config_row.promotion_approved is not true then raise exception 'V2_SOURCE_PROMOTION_NOT_APPROVED'; end if;
  if observation_row.promotion_state = 'promoted' then raise exception 'V2_OBSERVATION_ALREADY_PROMOTED'; end if;

  update public.v2_ingestion_observations
  set approved_for_promotion = true,
      approved_at = now(),
      approved_by = approving_admin_id,
      approval_note = nullif(trim(approval_note_text), ''),
      promotion_state = 'eligible',
      promotion_error = null,
      rolled_back_at = null,
      rolled_back_by = null,
      rollback_reason = null,
      updated_at = now()
  where id = target_observation_id;

  observation_id := target_observation_id;
  approved := true;
  promotion_state := 'eligible';
  return next;
end;
$$;

drop function if exists public.promote_v2_observation(uuid, jsonb);

create function public.promote_v2_observation(target_observation_id uuid)
returns table(
  opportunity_id uuid,
  created boolean,
  identity_match_type text,
  provenance_attached boolean,
  promotion_status text,
  block_code text,
  reasons jsonb
)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  observation_row public.v2_ingestion_observations%rowtype;
  config_row public.v2_source_configs%rowtype;
  run_row public.v2_ingestion_runs%rowtype;
  health_row public.v2_source_health%rowtype;
  existing_provenance public.opportunity_ingestion_provenance%rowtype;
  existing_opportunity public.opportunities%rowtype;
  source_external_candidates uuid[] := '{}'::uuid[];
  reference_candidates uuid[] := '{}'::uuid[];
  url_candidates uuid[] := '{}'::uuid[];
  fingerprint_candidates uuid[] := '{}'::uuid[];
  deterministic_candidates uuid[] := '{}'::uuid[];
  fuzzy_candidates uuid[] := '{}'::uuid[];
  lock_keys text[] := '{}'::text[];
  lock_key text;
  matched_keys text[] := '{}'::text[];
  matched_by text;
  blocked_reasons jsonb := '[]'::jsonb;
  review_block boolean := false;
  inserted_provenance_count integer := 0;
  parser_health jsonb := '{}'::jsonb;
  reference_value text;
  canonical_value text;
  fingerprint_value text;
  today_utc date := (now() at time zone 'UTC')::date;
begin
  select * into observation_row
  from public.v2_ingestion_observations
  where id = target_observation_id
  for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;

  select * into existing_provenance
  from public.opportunity_ingestion_provenance
  where observation_id = target_observation_id;
  if found then
    opportunity_id := existing_provenance.opportunity_id;
    created := existing_provenance.provenance_type = 'v2_created';
    identity_match_type := existing_provenance.identity_match_type;
    provenance_attached := false;
    promotion_status := 'promoted';
    block_code := null;
    reasons := jsonb_build_array(jsonb_build_object('code', 'V2_ALREADY_PROMOTED', 'idempotent', true));
    return next;
    return;
  end if;

  select * into config_row from public.v2_source_configs where id = observation_row.source_config_id;
  select * into run_row from public.v2_ingestion_runs where id = observation_row.run_id;
  select * into health_row from public.v2_source_health where source_config_id = observation_row.source_config_id;
  parser_health := coalesce(health_row.parser_health, '{}'::jsonb);

  if config_row.id is null then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_SOURCE_CONFIG_MISSING')); end if;
  if config_row.mode is distinct from 'promote' then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_PROMOTE_MODE_REQUIRED')); end if;
  if config_row.promotion_approved is not true then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_SOURCE_PROMOTION_NOT_APPROVED')); end if;
  if observation_row.validation_state is distinct from 'valid' then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_OBSERVATION_INVALID')); end if;
  if observation_row.approved_for_promotion is not true or observation_row.approved_at is null or observation_row.approved_by is null then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_MANUAL_APPROVAL_REQUIRED')); end if;
  if observation_row.promotion_state is distinct from 'eligible' then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_OBSERVATION_NOT_ELIGIBLE')); end if;
  if run_row.id is null or run_row.status is distinct from 'succeeded' or run_row.finished_at is null or run_row.error_count <> 0 then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_RUN_NOT_CLEANLY_COMPLETED')); end if;
  if coalesce(run_row.suspicious_zero_items, true) then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_RUN_SUSPICIOUS_ZERO')); end if;
  if observation_row.predicted_procurement_stage not in ('open_competition', 'upcoming_procurement', 'market_consultation') then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_STAGE_NOT_ACTIONABLE')); end if;
  if observation_row.predicted_actionable is not true then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_PREDICTION_NOT_ACTIONABLE')); end if;
  if observation_row.predicted_requires_admin_review is distinct from false then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_PREDICTION_REVIEW_REQUIRED')); end if;
  if coalesce(observation_row.predicted_confidence, 0) < 0.90 then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_CONFIDENCE_BELOW_THRESHOLD', 'minimum', 0.90)); end if;
  if observation_row.deadline is null or observation_row.deadline_evidence is distinct from 'explicit_source' then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_EXPLICIT_DEADLINE_REQUIRED')); end if;
  if observation_row.deadline is null or observation_row.deadline <= today_utc then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_DEADLINE_NOT_STRICTLY_FUTURE', 'reference_date', today_utc)); end if;
  if observation_row.strong_procurement_evidence is not true then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_STRONG_PROCUREMENT_EVIDENCE_REQUIRED')); end if;
  if observation_row.source_id is null or config_row.source_id is distinct from observation_row.source_id then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_CANONICAL_SOURCE_REQUIRED')); end if;
  if nullif(trim(observation_row.external_id), '') is null then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_EXTERNAL_ID_REQUIRED')); end if;
  if observation_row.normalized_canonical_url is null or nullif(trim(observation_row.canonical_url), '') is null then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_CANONICAL_URL_REQUIRED')); end if;
  if config_row.promotion_reference_required is true and nullif(trim(observation_row.procurement_reference), '') is null then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_REFERENCE_REQUIRED')); end if;
  if health_row.source_config_id is null or health_row.status is distinct from 'healthy' or health_row.circuit_state is distinct from 'closed' then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_SOURCE_HEALTH_BLOCKED')); end if;
  if health_row.last_run_id is distinct from run_row.id then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_HEALTH_RUN_MISMATCH')); end if;
  if coalesce((parser_health->>'suspicious_zero_items')::boolean, false) then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_PARSER_SUSPICIOUS_ZERO')); end if;
  if jsonb_typeof(parser_health->'parser_errors') is distinct from 'array' or jsonb_array_length(coalesce(parser_health->'parser_errors', '[]'::jsonb)) <> 0 then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_PARSER_ERRORS_PRESENT')); end if;
  if coalesce(nullif(parser_health#>>'{enrichment,failed}', ''), '0')::integer <> 0 then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_SOURCE_ENRICHMENT_FAILURES_PRESENT')); end if;
  if observation_row.promotion_enrichment_status not in ('succeeded', 'not_needed') then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_OBSERVATION_ENRICHMENT_BLOCKED')); end if;
  if observation_row.comparison_state not in ('legacy_match', 'v2_only', 'baseline_unavailable') then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_COMPARISON_NOT_RESOLVED', 'state', observation_row.comparison_state)); end if;
  if exists (select 1 from public.v2_legacy_comparisons where observation_id = target_observation_id and (match_type = 'fuzzy_review_candidate' or decision = 'needs_review')) then
    blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_UNRESOLVED_FUZZY_CANDIDATE'));
    review_block := true;
  end if;

  if jsonb_array_length(blocked_reasons) > 0 then
    update public.v2_ingestion_observations
    set promotion_state = case when review_block then 'review_required' else 'blocked' end,
        promotion_error = blocked_reasons::text,
        updated_at = now()
    where id = target_observation_id;
    opportunity_id := null; created := false; identity_match_type := null; provenance_attached := false;
    promotion_status := case when review_block then 'review_required' else 'blocked' end;
    block_code := blocked_reasons->0->>'code'; reasons := blocked_reasons;
    return next;
    return;
  end if;

  reference_value := public.v2_normalize_identity_text(observation_row.procurement_reference);
  canonical_value := observation_row.normalized_canonical_url;
  fingerprint_value := observation_row.identity_fingerprint;
  select coalesce(array_agg(key order by key), '{}'::text[]) into lock_keys
  from (
    select distinct key from unnest(array[
      'source_external:' || observation_row.source_id::text || ':' || observation_row.external_id,
      case when reference_value <> '' then 'reference:' || reference_value end,
      case when canonical_value is not null then 'url:' || canonical_value end,
      case when fingerprint_value is not null then 'fingerprint:' || fingerprint_value end
    ]) key where key is not null
  ) ordered_keys;
  foreach lock_key in array lock_keys loop
    perform pg_advisory_xact_lock(hashtextextended('verkradar-v2:' || lock_key, 0));
  end loop;

  select coalesce(array_agg(id order by id), '{}'::uuid[]) into source_external_candidates
  from public.opportunities
  where source_id = observation_row.source_id and external_id = observation_row.external_id;

  if reference_value <> '' then
    select coalesce(array_agg(id order by id), '{}'::uuid[]) into reference_candidates
    from public.opportunities
    where public.v2_normalize_identity_text(coalesce(raw_payload->>'procurement_reference', raw_payload->>'reference_number', raw_payload->>'notice_number')) = reference_value;
  end if;

  if canonical_value is not null then
    select coalesce(array_agg(id order by id), '{}'::uuid[]) into url_candidates
    from public.opportunities
    where public.v2_normalize_canonical_url(url) = canonical_value;
  end if;

  if fingerprint_value is not null then
    select coalesce(array_agg(id order by id), '{}'::uuid[]) into fingerprint_candidates
    from public.opportunities
    where public.v2_identity_fingerprint(
      buyer, title, deadline,
      coalesce(raw_payload->>'procurement_reference', raw_payload->>'reference_number', raw_payload->>'notice_number')
    ) = fingerprint_value;
  end if;

  if cardinality(source_external_candidates) > 1 then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_MULTIPLE_SOURCE_EXTERNAL_CANDIDATES', 'ids', to_jsonb(source_external_candidates))); end if;
  if cardinality(reference_candidates) > 1 then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_MULTIPLE_REFERENCE_CANDIDATES', 'ids', to_jsonb(reference_candidates))); end if;
  if cardinality(url_candidates) > 1 then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_MULTIPLE_URL_CANDIDATES', 'ids', to_jsonb(url_candidates))); end if;
  if cardinality(fingerprint_candidates) > 1 then blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_MULTIPLE_FINGERPRINT_CANDIDATES', 'ids', to_jsonb(fingerprint_candidates))); end if;

  select coalesce(array_agg(distinct candidate_id order by candidate_id), '{}'::uuid[]) into deterministic_candidates
  from unnest(source_external_candidates || reference_candidates || url_candidates || fingerprint_candidates) candidate_id;
  if cardinality(deterministic_candidates) > 1 then
    blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object(
      'code', 'V2_CONFLICTING_DETERMINISTIC_IDENTITIES',
      'source_external', to_jsonb(source_external_candidates),
      'reference', to_jsonb(reference_candidates),
      'canonical_url', to_jsonb(url_candidates),
      'fingerprint', to_jsonb(fingerprint_candidates)
    ));
  end if;

  if observation_row.comparison_state = 'baseline_unavailable' and cardinality(deterministic_candidates) <> 0 then
    blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_BASELINE_UNAVAILABLE_REQUIRES_ZERO_GLOBAL_CANDIDATES', 'ids', to_jsonb(deterministic_candidates)));
  end if;

  if cardinality(deterministic_candidates) = 0 then
    select coalesce(array_agg(id order by id), '{}'::uuid[]) into fuzzy_candidates
    from public.opportunities
    where extensions.similarity(public.v2_normalize_identity_text(title), public.v2_normalize_identity_text(observation_row.title)) >= 0.84;
    if cardinality(fuzzy_candidates) > 0 then
      blocked_reasons := blocked_reasons || jsonb_build_array(jsonb_build_object('code', 'V2_FUZZY_REVIEW_REQUIRED', 'ids', to_jsonb(fuzzy_candidates), 'auto_merge', false));
      review_block := true;
    end if;
  end if;

  if jsonb_array_length(blocked_reasons) > 0 then
    update public.v2_ingestion_observations
    set comparison_state = case when review_block then 'review_required' else 'conflict' end,
        promotion_state = case when review_block then 'review_required' else 'blocked' end,
        promotion_error = blocked_reasons::text,
        updated_at = now()
    where id = target_observation_id;
    opportunity_id := null; created := false; identity_match_type := null; provenance_attached := false;
    promotion_status := case when review_block then 'review_required' else 'blocked' end;
    block_code := blocked_reasons->0->>'code'; reasons := blocked_reasons;
    return next;
    return;
  end if;

  if cardinality(deterministic_candidates) = 1 then
    select * into existing_opportunity from public.opportunities where id = deterministic_candidates[1] for update;
    if existing_opportunity.id = any(source_external_candidates) then matched_by := 'same_source_external_id'; matched_keys := array_append(matched_keys, 'same_source_external_id'); end if;
    if existing_opportunity.id = any(reference_candidates) then if matched_by is null then matched_by := 'procurement_reference'; end if; matched_keys := array_append(matched_keys, 'procurement_reference'); end if;
    if existing_opportunity.id = any(url_candidates) then if matched_by is null then matched_by := 'canonical_url'; end if; matched_keys := array_append(matched_keys, 'canonical_url'); end if;
    if existing_opportunity.id = any(fingerprint_candidates) then if matched_by is null then matched_by := 'fingerprint'; end if; matched_keys := array_append(matched_keys, 'fingerprint'); end if;
    created := false;
  else
    insert into public.opportunities (
      source_id, external_id, title, buyer, description, deadline, published_date, location, url,
      status, raw_payload, procurement_stage, actionable_for_suppliers, classification_confidence,
      classification_reason, positive_signals, negative_signals, classified_by, classified_at,
      classifier_version, requires_admin_review
    ) values (
      observation_row.source_id, observation_row.external_id, observation_row.title,
      observation_row.buyer, observation_row.description, observation_row.deadline,
      observation_row.publication_date, observation_row.location, observation_row.canonical_url,
      'hidden',
      jsonb_build_object(
        'v2_observation_id', observation_row.id,
        'procurement_reference', observation_row.procurement_reference,
        'source_payload', observation_row.safe_source_payload,
        'promotion_quarantine', 'phase_c_canary',
        'hidden_from_reports', true,
        'admin_report_status', 'hidden',
        'promotion_release_allowed', false
      ),
      observation_row.predicted_procurement_stage::public.procurement_stage,
      true,
      observation_row.predicted_confidence,
      observation_row.predicted_reason,
      array['strong_procurement_evidence', 'explicit_future_deadline'],
      '{}'::text[],
      'deterministic_rule',
      now(),
      'v2-phase-c0-canary',
      false
    ) returning * into existing_opportunity;
    matched_by := 'same_source_external_id';
    matched_keys := array['source_external_id', 'procurement_reference', 'canonical_url', 'fingerprint'];
    created := true;
  end if;

  insert into public.opportunity_ingestion_provenance (
    opportunity_id, observation_id, source_config_id, provenance_type,
    identity_match_type, content_hash, metadata
  ) values (
    existing_opportunity.id,
    observation_row.id,
    observation_row.source_config_id,
    case when created then 'v2_created' else 'existing_opportunity_matched' end,
    matched_by,
    observation_row.content_hash,
    jsonb_build_object(
      'phase', 'C0',
      'canary_quarantine', created,
      'opportunity_mutated', false,
      'matched_identity_keys', to_jsonb(matched_keys),
      'source_external_id', observation_row.source_id::text || ':' || observation_row.external_id,
      'normalized_procurement_reference', nullif(reference_value, ''),
      'normalized_canonical_url', canonical_value,
      'identity_fingerprint', fingerprint_value,
      'deterministic_candidate_ids', to_jsonb(deterministic_candidates)
    )
  ) on conflict (observation_id) do nothing;
  get diagnostics inserted_provenance_count = row_count;

  update public.v2_ingestion_observations
  set promotion_state = 'promoted',
      promoted_opportunity_id = existing_opportunity.id,
      promotion_error = null,
      updated_at = now()
  where id = observation_row.id;

  opportunity_id := existing_opportunity.id;
  identity_match_type := matched_by;
  provenance_attached := inserted_provenance_count > 0;
  promotion_status := 'promoted';
  block_code := null;
  reasons := jsonb_build_array(jsonb_build_object(
    'code', case when created then 'V2_QUARANTINED_OPPORTUNITY_CREATED' else 'V2_EXISTING_OPPORTUNITY_REUSED' end,
    'opportunity_mutated', false,
    'quarantined', created
  ));
  return next;
end;
$$;

create or replace function public.rollback_v2_canary_promotion(
  target_observation_id uuid,
  rollback_admin_id uuid,
  rollback_reason_text text
)
returns table(
  observation_id uuid,
  opportunity_id uuid,
  rollback_status text,
  opportunity_deleted boolean,
  assertions jsonb
)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  observation_row public.v2_ingestion_observations%rowtype;
  provenance_row public.opportunity_ingestion_provenance%rowtype;
  opportunity_row public.opportunities%rowtype;
  dependency_counts jsonb := '{}'::jsonb;
  other_provenance integer := 0;
begin
  if not exists (select 1 from public.admin_users where user_id = rollback_admin_id) then raise exception 'V2_ROLLBACK_ADMIN_REQUIRED'; end if;
  if nullif(trim(rollback_reason_text), '') is null then raise exception 'V2_ROLLBACK_REASON_REQUIRED'; end if;

  select * into observation_row from public.v2_ingestion_observations where id = target_observation_id for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;

  select * into provenance_row from public.opportunity_ingestion_provenance provenance where provenance.observation_id = target_observation_id for update;
  if not found then
    if observation_row.rolled_back_at is not null then
      observation_id := target_observation_id; opportunity_id := null; rollback_status := 'already_rolled_back'; opportunity_deleted := false; assertions := jsonb_build_object('idempotent', true); return next; return;
    end if;
    raise exception 'V2_PROMOTION_PROVENANCE_NOT_FOUND';
  end if;

  select * into opportunity_row from public.opportunities where id = provenance_row.opportunity_id for update;
  if not found then raise exception 'V2_PROMOTED_OPPORTUNITY_NOT_FOUND'; end if;
  opportunity_id := opportunity_row.id;

  if provenance_row.provenance_type = 'v2_created' then
    select count(*) into other_provenance from public.opportunity_ingestion_provenance provenance where provenance.opportunity_id = opportunity_row.id and provenance.observation_id <> target_observation_id;
    dependency_counts := public.v2_canary_downstream_assertions(opportunity_row.id) || jsonb_build_object('other_provenance', other_provenance);
    if other_provenance <> 0 or coalesce((dependency_counts->>'zero_downstream')::boolean, false) is not true then
      raise exception 'V2_ROLLBACK_DOWNSTREAM_DEPENDENCIES' using detail = dependency_counts::text;
    end if;
    if opportunity_row.raw_payload->>'promotion_quarantine' is distinct from 'phase_c_canary' then
      raise exception 'V2_ROLLBACK_NOT_A_CANARY_OPPORTUNITY';
    end if;
    delete from public.opportunity_ingestion_provenance provenance where provenance.observation_id = target_observation_id;
    delete from public.opportunities where id = opportunity_row.id;
    opportunity_deleted := true;
    rollback_status := 'rolled_back_created_opportunity';
  else
    delete from public.opportunity_ingestion_provenance provenance where provenance.observation_id = target_observation_id;
    dependency_counts := public.v2_canary_downstream_assertions(opportunity_row.id);
    opportunity_deleted := false;
    rollback_status := 'rolled_back_existing_match';
  end if;

  update public.v2_ingestion_observations
  set promoted_opportunity_id = null,
      promotion_state = 'blocked',
      approved_for_promotion = false,
      promotion_error = 'Rolled back: ' || trim(rollback_reason_text),
      rolled_back_at = now(),
      rolled_back_by = rollback_admin_id,
      rollback_reason = trim(rollback_reason_text),
      updated_at = now()
  where id = target_observation_id;

  observation_id := target_observation_id;
  assertions := dependency_counts;
  return next;
end;
$$;

revoke all on function public.v2_canary_downstream_assertions(uuid) from public, anon, authenticated;
revoke all on function public.approve_v2_observation_for_promotion(uuid, uuid, text) from public, anon, authenticated;
revoke all on function public.promote_v2_observation(uuid) from public, anon, authenticated;
revoke all on function public.rollback_v2_canary_promotion(uuid, uuid, text) from public, anon, authenticated;
grant execute on function public.v2_canary_downstream_assertions(uuid) to service_role;
grant execute on function public.approve_v2_observation_for_promotion(uuid, uuid, text) to service_role;
grant execute on function public.promote_v2_observation(uuid) to service_role;
grant execute on function public.rollback_v2_canary_promotion(uuid, uuid, text) to service_role;

comment on column public.v2_source_configs.promotion_approved is 'Explicit source-level Phase C capability. Defaults false and does not approve any observation.';
comment on column public.v2_ingestion_observations.approved_for_promotion is 'Explicit per-observation admin approval; never set automatically.';
comment on function public.promote_v2_observation(uuid) is 'Phase C0 service-role-only, fail-closed promotion gate. Creates hidden canaries or attaches provenance without mutating existing opportunities.';

-- Populate only deterministic evidence already stored by completed shadow runs.
-- This does not approve an observation or make it eligible for promotion.
update public.v2_ingestion_observations
set strong_procurement_evidence = (
      coalesce(safe_source_payload#>>'{shadow_enrichment,procurement_type}', '') in (
        'open_tender', 'prequalification', 'market_consultation',
        'dynamic_purchasing_system', 'prior_notice'
      )
      or lower(coalesce(safe_source_payload#>>'{shadow_enrichment,request_for_bids}', '')) in ('true', '1', 'yes')
    ),
    deadline_evidence = case when deadline is not null then 'explicit_source' else null end,
    promotion_enrichment_status = case
      when coalesce(safe_source_payload#>>'{shadow_enrichment,enrichment_status}', enrichment_status, '') in ('enriched', 'no_supported_fields') then 'succeeded'
      when coalesce(safe_source_payload#>>'{shadow_enrichment,enrichment_status}', enrichment_status, '') = 'failed' then 'failed'
      when deadline is not null and (
        coalesce(safe_source_payload#>>'{shadow_enrichment,procurement_type}', '') in (
          'open_tender', 'prequalification', 'market_consultation',
          'dynamic_purchasing_system', 'prior_notice'
        )
        or lower(coalesce(safe_source_payload#>>'{shadow_enrichment,request_for_bids}', '')) in ('true', '1', 'yes')
      ) then 'not_needed'
      else 'failed'
    end,
    updated_at = now()
where validation_state = 'valid';

update public.v2_source_configs
set promotion_reference_required = true,
    updated_at = now()
where source_key in ('rikiskaup-utbod-v2', 'reykjavik-utbod-v2');

notify pgrst, 'reload schema';
