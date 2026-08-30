-- Borgarbyggð Phase B repair: bounded pagination, parser v2 and deterministic
-- staging shadow comparison. This migration does not enable production.

update public.v2_source_configs
set parser_version = '2.0.0',
    settings = coalesce(settings, '{}'::jsonb) || jsonb_build_object(
      'shadow_quality',
      coalesce(settings->'shadow_quality', '{}'::jsonb) || jsonb_build_object(
        'max_pages', 3,
        'max_items', 30,
        'per_page', 10
      )
    ),
    updated_at = now()
where source_key = 'borgarbyggd-utbod-v2';

create or replace function public.compare_borgarbyggd_shadow_observation(target_observation_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions, pg_temp
as $$
declare
  o public.v2_ingestion_observations%rowtype;
  c public.v2_source_configs%rowtype;
  source_ids uuid[] := '{}'::uuid[];
  reference_ids uuid[] := '{}'::uuid[];
  url_ids uuid[] := '{}'::uuid[];
  fingerprint_ids uuid[] := '{}'::uuid[];
  deterministic_ids uuid[] := '{}'::uuid[];
  fuzzy_ids uuid[] := '{}'::uuid[];
  matched_id uuid;
  matched_type text;
  state_value text;
  decision_value text := 'pending';
  confidence_value numeric(5,4);
  evidence_value jsonb;
  normalized_reference text;
begin
  if current_user not in ('postgres', 'service_role', 'supabase_admin') then
    raise exception 'V2_SHADOW_COMPARISON_SERVICE_ROLE_REQUIRED';
  end if;

  select * into o from public.v2_ingestion_observations where id = target_observation_id for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;
  select * into c from public.v2_source_configs where id = o.source_config_id;
  if c.source_key <> 'borgarbyggd-utbod-v2' or c.mode <> 'shadow' or c.promotion_approved then
    raise exception 'V2_BORGARBYGGD_SHADOW_COMPARISON_STATE_REQUIRED';
  end if;

  normalized_reference := public.v2_normalize_identity_text(o.procurement_reference);
  select coalesce(array_agg(id order by id), '{}') into source_ids
  from public.opportunities where source_id = o.source_id and external_id = o.external_id;
  if normalized_reference <> '' then
    select coalesce(array_agg(id order by id), '{}') into reference_ids
    from public.opportunities
    where public.v2_normalize_identity_text(coalesce(raw_payload->>'procurement_reference', raw_payload->>'reference_number', raw_payload->>'notice_number')) = normalized_reference;
  end if;
  if o.normalized_canonical_url is not null then
    select coalesce(array_agg(id order by id), '{}') into url_ids
    from public.opportunities where public.v2_normalize_canonical_url(url) = o.normalized_canonical_url;
  end if;
  if o.identity_fingerprint is not null then
    select coalesce(array_agg(id order by id), '{}') into fingerprint_ids
    from public.opportunities
    where public.v2_identity_fingerprint(
      buyer, title, deadline,
      coalesce(raw_payload->>'procurement_reference', raw_payload->>'reference_number', raw_payload->>'notice_number')
    ) = o.identity_fingerprint;
  end if;
  select coalesce(array_agg(distinct candidate order by candidate), '{}') into deterministic_ids
  from unnest(source_ids || reference_ids || url_ids || fingerprint_ids) candidate;

  evidence_value := jsonb_build_object(
    'source_external_candidates', source_ids,
    'reference_candidates', reference_ids,
    'canonical_url_candidates', url_ids,
    'fingerprint_candidates', fingerprint_ids,
    'deterministic_candidate_ids', deterministic_ids,
    'normalized_reference', nullif(normalized_reference, ''),
    'normalized_canonical_url', o.normalized_canonical_url,
    'identity_fingerprint', o.identity_fingerprint,
    'opportunity_mutated', false
  );

  delete from public.v2_legacy_comparisons where observation_id = o.id;
  if cardinality(source_ids) > 1 or cardinality(reference_ids) > 1 or cardinality(url_ids) > 1
     or cardinality(fingerprint_ids) > 1 or cardinality(deterministic_ids) > 1 then
    state_value := 'conflict'; matched_type := 'none'; decision_value := 'needs_review';
  elsif cardinality(deterministic_ids) = 1 then
    matched_id := deterministic_ids[1]; state_value := 'legacy_match'; decision_value := 'equivalent'; confidence_value := 1;
    matched_type := case
      when matched_id = any(source_ids) then 'same_source_external_id'
      when matched_id = any(reference_ids) then 'procurement_reference'
      when matched_id = any(url_ids) then 'canonical_url'
      else 'fingerprint'
    end;
  else
    select coalesce(array_agg(id order by similarity_score desc, id), '{}') into fuzzy_ids
    from (
      select id, extensions.similarity(public.v2_normalize_identity_text(title), public.v2_normalize_identity_text(o.title)) similarity_score
      from public.opportunities
      where extensions.similarity(public.v2_normalize_identity_text(title), public.v2_normalize_identity_text(o.title)) >= 0.84
    ) fuzzy;
    evidence_value := evidence_value || jsonb_build_object('fuzzy_candidate_ids', fuzzy_ids);
    if cardinality(fuzzy_ids) > 0 then
      matched_id := fuzzy_ids[1]; state_value := 'review_required'; matched_type := 'fuzzy_review_candidate'; decision_value := 'needs_review';
    else
      state_value := 'v2_only'; matched_type := 'v2_only';
    end if;
  end if;

  insert into public.v2_legacy_comparisons(
    observation_id, legacy_opportunity_id, match_type, decision, confidence,
    field_differences, notes, compared_at, updated_at
  ) values (
    o.id, matched_id, matched_type, decision_value, confidence_value,
    jsonb_build_object('identity_evidence', evidence_value),
    'Borgarbyggð Phase B deterministic shadow comparison; no opportunity mutation.',
    now(), now()
  );
  update public.v2_ingestion_observations set comparison_state = state_value, updated_at = now() where id = o.id;

  return jsonb_build_object(
    'comparison_state', state_value,
    'match_type', matched_type,
    'decision', decision_value,
    'opportunity_id', matched_id,
    'evidence', evidence_value
  );
end;
$$;

revoke all on function public.compare_borgarbyggd_shadow_observation(uuid) from public, anon, authenticated;
grant execute on function public.compare_borgarbyggd_shadow_observation(uuid) to service_role;

comment on function public.compare_borgarbyggd_shadow_observation(uuid) is
  'Service-role-only deterministic comparison for unapproved Borgarbyggð shadow observations. Records exact, fuzzy-review, conflict, or v2-only without opportunity mutation.';
