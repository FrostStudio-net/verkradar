-- Consensa V2 observation-only automation. This migration cannot admit or
-- promote opportunities and does not invoke matching, AI, reports, alerts, or email.

do $$
begin
  if not exists (select 1 from public.sources where name = 'Consensa') then
    raise exception 'Canonical Consensa source is required';
  end if;
end
$$;

insert into public.v2_source_configs (
  source_id, source_key, display_name, adapter_type, mode, endpoint_url,
  parser_name, parser_version, request_timeout_ms, run_deadline_ms,
  max_attempts, zero_item_threshold, settings
)
select
  sources.id,
  'consensa-utbod-v2',
  'Consensa útboð v2',
  'public_procurement_html_index',
  'shadow',
  'https://www.consensa.is/utbod',
  'consensa-html-index',
  '1.0.0',
  12000,
  60000,
  2,
  2,
  jsonb_build_object(
    'operational_state', 'observation_only',
    'shadow_automation_enabled', true,
    'promotion_available', false,
    'shadow_quality', jsonb_build_object(
      'global_deterministic_comparison', true,
      'fail_closed_required_fields', jsonb_build_array('deadline', 'buyer', 'stable_identity', 'procurement_evidence', 'source_url')
    ),
    'access_policy', jsonb_build_object(
      'automated_live_access_cleared', true,
      'robots_allow_verified_at', '2026-09-10T00:00:00Z',
      'public_html_only', true,
      'public_sitemap_url', 'https://www.consensa.is/dynamic-projects_p_59b8e9ef_92b8_4ca8_9773_c88e9eb52fae_0_5000-sitemap.xml',
      'wix_internal_api_requests', false,
      'tendsign_requests', false,
      'protected_document_requests', false,
      'login_automation', false,
      'captcha_bypass', false,
      'max_requests_per_run', 2
    )
  )
from public.sources
where sources.name = 'Consensa'
on conflict (source_key) do update set
  source_id = excluded.source_id,
  display_name = excluded.display_name,
  adapter_type = excluded.adapter_type,
  mode = 'shadow',
  endpoint_url = excluded.endpoint_url,
  parser_name = excluded.parser_name,
  parser_version = excluded.parser_version,
  request_timeout_ms = excluded.request_timeout_ms,
  run_deadline_ms = excluded.run_deadline_ms,
  max_attempts = excluded.max_attempts,
  zero_item_threshold = excluded.zero_item_threshold,
  settings = excluded.settings,
  production_shadow_enabled = true,
  promotion_approved = false,
  production_canary_enabled = false,
  release_feature_enabled = false,
  release_approved = false,
  routine_production_enabled = false,
  routine_admission_max_new_per_run = 0,
  routine_admission_max_new_per_day = 0,
  routine_admission_scan_limit = 0,
  updated_at = now();

update public.v2_source_configs
set production_shadow_enabled = true,
    promotion_approved = false,
    production_canary_enabled = false,
    release_feature_enabled = false,
    release_approved = false,
    routine_production_enabled = false,
    routine_admission_max_new_per_run = 0,
    routine_admission_max_new_per_day = 0,
    routine_admission_scan_limit = 0,
    updated_at = now()
where source_key = 'consensa-utbod-v2';

insert into public.v2_source_health (source_config_id)
select id from public.v2_source_configs where source_key = 'consensa-utbod-v2'
on conflict (source_config_id) do nothing;

update public.source_connectors
set enabled = false,
    connector_type = 'planned',
    status = 'planned',
    endpoint_url = 'https://www.consensa.is/utbod',
    notes = 'Legacy connector remains disabled. Consensa is collected only by the V2 public-HTML/public-sitemap observation pipeline; no canonical admission or Tendsign requests are enabled.',
    updated_at = now()
where source_id = (select id from public.sources where name = 'Consensa');

create or replace function public.compare_consensa_shadow_observation(target_observation_id uuid)
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
  tendsign_ids uuid[] := '{}'::uuid[];
  url_ids uuid[] := '{}'::uuid[];
  fingerprint_ids uuid[] := '{}'::uuid[];
  same_run_ids uuid[] := '{}'::uuid[];
  deterministic_ids uuid[] := '{}'::uuid[];
  fuzzy_ids uuid[] := '{}'::uuid[];
  matched_id uuid;
  matched_type text;
  state_value text;
  decision_value text := 'pending';
  confidence_value numeric(5,4);
  evidence_value jsonb;
  normalized_reference text;
  normalized_buyer text;
  tendsign_notice_id text;
begin
  if current_user not in ('postgres', 'service_role', 'supabase_admin') then
    raise exception 'V2_SHADOW_COMPARISON_SERVICE_ROLE_REQUIRED';
  end if;

  select * into o from public.v2_ingestion_observations where id = target_observation_id for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;
  select * into c from public.v2_source_configs where id = o.source_config_id;
  if c.source_key <> 'consensa-utbod-v2' or c.mode <> 'shadow' or not c.production_shadow_enabled
     or c.promotion_approved or c.production_canary_enabled or c.release_feature_enabled or c.release_approved
     or c.routine_production_enabled then
    raise exception 'V2_CONSENSA_SHADOW_COMPARISON_STATE_REQUIRED';
  end if;

  normalized_reference := public.v2_normalize_identity_text(o.procurement_reference);
  normalized_buyer := public.v2_normalize_identity_text(o.buyer);
  tendsign_notice_id := nullif(o.safe_source_payload->>'tendsign_notice_id', '');

  select coalesce(array_agg(id order by id), '{}') into source_ids
  from public.opportunities where source_id = o.source_id and external_id = o.external_id;

  if normalized_reference <> '' and normalized_buyer <> '' then
    select coalesce(array_agg(id order by id), '{}') into reference_ids
    from public.opportunities
    where public.v2_normalize_identity_text(buyer) = normalized_buyer
      and public.v2_normalize_identity_text(coalesce(
        raw_payload->>'procurement_reference', raw_payload->>'reference_number', raw_payload->>'notice_number'
      )) = normalized_reference;
  end if;

  if tendsign_notice_id is not null and tendsign_notice_id ~ '^[0-9]+$' then
    select coalesce(array_agg(id order by id), '{}') into tendsign_ids
    from public.opportunities
    where lower(coalesce(url, '')) ~ ('[?&](meformsnoticeid)=' || tendsign_notice_id || '(&|$)')
       or coalesce(raw_payload->>'tendsign_notice_id', raw_payload#>>'{source_payload,tendsign_notice_id}', '') = tendsign_notice_id
       or lower(coalesce(raw_payload->>'tendsign_url', raw_payload#>>'{source_payload,tendsign_url}', '')) ~ ('[?&](meformsnoticeid)=' || tendsign_notice_id || '(&|$)');
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
    select coalesce(array_agg(id order by id), '{}') into same_run_ids
    from public.v2_ingestion_observations
    where run_id = o.run_id and id <> o.id and validation_state = 'valid' and identity_fingerprint = o.identity_fingerprint;
  end if;

  select coalesce(array_agg(distinct candidate order by candidate), '{}') into deterministic_ids
  from unnest(source_ids || reference_ids || tendsign_ids || url_ids || fingerprint_ids) candidate;

  evidence_value := jsonb_build_object(
    'global_comparison_completed', true,
    'source_external_candidates', source_ids,
    'reference_candidates', reference_ids,
    'tendsign_notice_candidates', tendsign_ids,
    'canonical_url_candidates', url_ids,
    'fingerprint_candidates', fingerprint_ids,
    'same_run_fingerprint_candidates', same_run_ids,
    'deterministic_candidate_ids', deterministic_ids,
    'normalized_reference', nullif(normalized_reference, ''),
    'tendsign_notice_id', tendsign_notice_id,
    'normalized_canonical_url', o.normalized_canonical_url,
    'identity_fingerprint', o.identity_fingerprint,
    'opportunity_mutated', false
  );

  delete from public.v2_legacy_comparisons where observation_id = o.id;
  if cardinality(same_run_ids) > 0 or cardinality(source_ids) > 1 or cardinality(reference_ids) > 1
     or cardinality(tendsign_ids) > 1 or cardinality(url_ids) > 1 or cardinality(fingerprint_ids) > 1
     or cardinality(deterministic_ids) > 1 then
    state_value := 'conflict'; matched_type := 'none'; decision_value := 'needs_review';
  elsif cardinality(deterministic_ids) = 1 then
    matched_id := deterministic_ids[1]; state_value := 'legacy_match'; decision_value := 'equivalent'; confidence_value := 1;
    matched_type := case
      when matched_id = any(source_ids) then 'same_source_external_id'
      when matched_id = any(reference_ids) or matched_id = any(tendsign_ids) then 'procurement_reference'
      when matched_id = any(url_ids) then 'canonical_url'
      else 'fingerprint'
    end;
  else
    select coalesce(array_agg(id order by similarity_score desc, id), '{}') into fuzzy_ids
    from (
      select id, extensions.similarity(public.v2_normalize_identity_text(title), public.v2_normalize_identity_text(o.title)) similarity_score
      from public.opportunities
      where public.v2_normalize_identity_text(buyer) = normalized_buyer
        and extensions.similarity(public.v2_normalize_identity_text(title), public.v2_normalize_identity_text(o.title)) >= 0.84
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
    'Consensa global observation comparison; no opportunity mutation.', now(), now()
  );
  update public.v2_ingestion_observations
  set comparison_state = state_value,
      promotion_state = case when state_value in ('conflict', 'review_required') then 'review_required' else 'not_eligible' end,
      promotion_error = case when state_value in ('conflict', 'review_required') then 'V2_CONSENSA_IDENTITY_REVIEW_REQUIRED' else null end,
      updated_at = now()
  where id = o.id;

  return jsonb_build_object(
    'comparison_state', state_value, 'match_type', matched_type, 'decision', decision_value,
    'opportunity_id', matched_id, 'evidence', evidence_value
  );
end;
$$;

revoke all on function public.compare_consensa_shadow_observation(uuid) from public, anon, authenticated;
grant execute on function public.compare_consensa_shadow_observation(uuid) to service_role;

comment on function public.compare_consensa_shadow_observation(uuid) is
  'Service-role-only global comparison for Consensa shadow observations. It never mutates canonical opportunities.';

insert into public.automation_settings(key, value)
values ('v2_consensa_shadow_automation_url', 'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/import-source-connectors-v2')
on conflict(key) do update set value = excluded.value;

create or replace function public.trigger_consensa_v2_shadow_automation()
returns void
language plpgsql
security definer
set search_path = public, extensions, pg_temp
as $$
declare
  endpoint text;
  secret text;
  gateway_authorization text;
  c public.v2_source_configs%rowtype;
begin
  select * into c from public.v2_source_configs where source_key = 'consensa-utbod-v2';
  if c.id is null or c.mode <> 'shadow' or not c.production_shadow_enabled or c.promotion_approved
     or c.production_canary_enabled or c.release_feature_enabled or c.release_approved
     or c.routine_production_enabled or coalesce((c.settings->>'shadow_automation_enabled')::boolean, false) is not true then
    return;
  end if;
  if c.endpoint_url <> 'https://www.consensa.is/utbod'
     or c.parser_name <> 'consensa-html-index' or c.parser_version <> '1.0.0'
     or c.settings#>>'{access_policy,public_sitemap_url}' <> 'https://www.consensa.is/dynamic-projects_p_59b8e9ef_92b8_4ca8_9773_c88e9eb52fae_0_5000-sitemap.xml'
     or coalesce((c.settings#>>'{access_policy,wix_internal_api_requests}')::boolean, true)
     or coalesce((c.settings#>>'{access_policy,tendsign_requests}')::boolean, true) then
    raise exception 'V2_CONSENSA_SHADOW_CONTRACT_INVALID';
  end if;
  select value into endpoint from public.automation_settings where key = 'v2_consensa_shadow_automation_url';
  select value into secret from public.automation_settings where key = 'automation_secret';
  gateway_authorization := public.v2_routine_gateway_authorization();
  if endpoint <> 'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/import-source-connectors-v2' or nullif(secret, '') is null then
    raise exception 'V2_CONSENSA_SHADOW_AUTOMATION_CONFIG_INVALID';
  end if;
  perform net.http_post(
    url := endpoint,
    headers := jsonb_build_object('Content-Type', 'application/json', 'Authorization', gateway_authorization, 'x-automation-secret', secret),
    body := jsonb_build_object('action', 'run_consensa_shadow_automation', 'source_key', 'consensa-utbod-v2')
  );
end;
$$;

revoke all on function public.trigger_consensa_v2_shadow_automation() from public, anon, authenticated;

do $$
begin
  perform cron.unschedule(jobid) from cron.job where jobname = 'consensa-v2-daily-shadow';
exception when others then null;
end
$$;

select cron.schedule(
  'consensa-v2-daily-shadow',
  '45 2 * * *',
  'select public.trigger_consensa_v2_shadow_automation();'
);

update public.source_status
set status = 'connected', updated_at = now()
where source_id = (select id from public.sources where name = 'Consensa');

notify pgrst, 'reload schema';
