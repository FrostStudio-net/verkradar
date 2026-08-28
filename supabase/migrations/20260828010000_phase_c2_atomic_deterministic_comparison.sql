-- Phase C2 preparation: atomically resolve one observation against existing opportunities.
-- This enables no source, approves no observation, and performs no promotion.

create or replace function public.compare_v2_observation_deterministically(
  target_observation_id uuid,
  comparing_admin_id uuid
)
returns table(
  observation_id uuid,
  opportunity_id uuid,
  comparison_state text,
  match_type text,
  decision text,
  evidence jsonb
)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  observation_row public.v2_ingestion_observations%rowtype;
  config_row public.v2_source_configs%rowtype;
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
  reference_value text;
  canonical_value text;
  fingerprint_value text;
  evidence_value jsonb;
begin
  if not exists (select 1 from public.admin_users where user_id = comparing_admin_id) then
    raise exception 'V2_COMPARISON_ADMIN_REQUIRED';
  end if;

  select * into observation_row
  from public.v2_ingestion_observations
  where id = target_observation_id
  for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;

  select * into config_row
  from public.v2_source_configs
  where id = observation_row.source_config_id;
  if config_row.id is null then raise exception 'V2_SOURCE_CONFIG_MISSING'; end if;
  if config_row.mode is distinct from 'shadow' or config_row.promotion_approved is true then
    raise exception 'V2_COMPARISON_REQUIRES_UNAPPROVED_SHADOW_SOURCE';
  end if;
  if observation_row.approved_for_promotion is true
     or observation_row.promoted_opportunity_id is not null
     or observation_row.promotion_state = 'promoted'
     or exists (select 1 from public.opportunity_ingestion_provenance provenance_row where provenance_row.observation_id = target_observation_id) then
    raise exception 'V2_COMPARISON_REQUIRES_UNPROMOTED_OBSERVATION';
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

  if cardinality(source_external_candidates) > 1 then raise exception 'V2_COMPARISON_MULTIPLE_SOURCE_EXTERNAL_CANDIDATES'; end if;
  if cardinality(reference_candidates) > 1 then raise exception 'V2_COMPARISON_MULTIPLE_REFERENCE_CANDIDATES'; end if;
  if cardinality(url_candidates) > 1 then raise exception 'V2_COMPARISON_MULTIPLE_URL_CANDIDATES'; end if;
  if cardinality(fingerprint_candidates) > 1 then raise exception 'V2_COMPARISON_MULTIPLE_FINGERPRINT_CANDIDATES'; end if;

  select coalesce(array_agg(distinct candidate_id order by candidate_id), '{}'::uuid[]) into deterministic_candidates
  from unnest(source_external_candidates || reference_candidates || url_candidates || fingerprint_candidates) candidate_id;
  if cardinality(deterministic_candidates) > 1 then
    raise exception 'V2_COMPARISON_CONFLICTING_DETERMINISTIC_IDENTITIES';
  end if;

  if cardinality(deterministic_candidates) = 0 then
    select coalesce(array_agg(id order by id), '{}'::uuid[]) into fuzzy_candidates
    from public.opportunities
    where extensions.similarity(
      public.v2_normalize_identity_text(title),
      public.v2_normalize_identity_text(observation_row.title)
    ) >= 0.84;
    if cardinality(fuzzy_candidates) > 0 then raise exception 'V2_COMPARISON_FUZZY_REVIEW_REQUIRED'; end if;
    raise exception 'V2_COMPARISON_NO_DETERMINISTIC_MATCH';
  end if;

  opportunity_id := deterministic_candidates[1];
  if opportunity_id = any(source_external_candidates) then matched_by := 'same_source_external_id'; matched_keys := array_append(matched_keys, 'same_source_external_id'); end if;
  if opportunity_id = any(reference_candidates) then if matched_by is null then matched_by := 'procurement_reference'; end if; matched_keys := array_append(matched_keys, 'procurement_reference'); end if;
  if opportunity_id = any(url_candidates) then if matched_by is null then matched_by := 'canonical_url'; end if; matched_keys := array_append(matched_keys, 'canonical_url'); end if;
  if opportunity_id = any(fingerprint_candidates) then if matched_by is null then matched_by := 'fingerprint'; end if; matched_keys := array_append(matched_keys, 'fingerprint'); end if;

  evidence_value := jsonb_build_object(
    'matched_identity_keys', to_jsonb(matched_keys),
    'source_external_id', observation_row.source_id::text || ':' || observation_row.external_id,
    'normalized_procurement_reference', nullif(reference_value, ''),
    'normalized_canonical_url', canonical_value,
    'identity_fingerprint', fingerprint_value,
    'deterministic_candidate_ids', to_jsonb(deterministic_candidates),
    'opportunity_mutated', false
  );

  delete from public.v2_legacy_comparisons comparison_row where comparison_row.observation_id = target_observation_id;
  insert into public.v2_legacy_comparisons (
    observation_id, legacy_opportunity_id, match_type, decision, confidence,
    field_differences, notes, compared_at, compared_by, updated_at
  ) values (
    target_observation_id, opportunity_id, matched_by, 'equivalent', 1,
    jsonb_build_object('identity_evidence', evidence_value),
    'Phase C2 atomic deterministic comparison; existing opportunity was not mutated.',
    now(), comparing_admin_id, now()
  );

  update public.v2_ingestion_observations
  set comparison_state = 'legacy_match', updated_at = now()
  where id = target_observation_id;

  observation_id := target_observation_id;
  comparison_state := 'legacy_match';
  match_type := matched_by;
  decision := 'equivalent';
  evidence := evidence_value;
  return next;
end;
$$;

revoke all on function public.compare_v2_observation_deterministically(uuid, uuid) from public, anon, authenticated;
grant execute on function public.compare_v2_observation_deterministically(uuid, uuid) to service_role;

comment on function public.compare_v2_observation_deterministically(uuid, uuid) is
  'Service-role-only Phase C2 preparation. Atomically records one unambiguous deterministic legacy match without promotion or opportunity mutation.';
