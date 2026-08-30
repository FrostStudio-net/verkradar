export const PHASE_C1_STAGING_PROJECT_REF = "ipixuxznqtrcdpzoxric";
export const PHASE_C1_PRODUCTION_PROJECT_REF = "asojxjbsgqbfpbepojzh";
export const PHASE_C1_REYKJAVIK_SOURCE_KEY = "reykjavik-utbod-v2";
export const PHASE_C1_CANARY_OBSERVATION_ID = "a5ded8dc-a745-4297-9dc7-e2783b374630";
export const PHASE_C3_FIRST_PRODUCTION_CANARY_OBSERVATION_ID = "32713ed0-089d-45a0-97f9-24fabdbf08dd";
export const PHASE_C2_CASES = Object.freeze([
  { case_key: "A", source_key: "reykjavik-utbod-v2", observation_id: "729459ca-3408-4004-a158-7b75f6c6c32f", expected: "new_quarantined_opportunity" },
  { case_key: "B", source_key: "rikiskaup-utbod-v2", observation_id: "d5a8f0eb-f55e-4b8c-b2c3-146a2eea0df1", expected: "existing_opportunity_reuse", expected_opportunity_id: "a416b17a-4249-41f7-9b14-51063ca9689e" },
  { case_key: "C", source_key: "reykjavik-utbod-v2", observation_id: "9c6b7648-1685-4d9b-953e-6afdcba208a7", expected: "fuzzy_only_block" },
]);

export function getPhaseC2Case(observationId) {
  return PHASE_C2_CASES.find((item) => item.observation_id === observationId) || null;
}

export function isPhaseC1StagingRuntime(supabaseUrl) {
  try {
    const hostname = new URL(String(supabaseUrl || "")).hostname.toLowerCase();
    return hostname === `${PHASE_C1_STAGING_PROJECT_REF}.supabase.co`
      && hostname !== `${PHASE_C1_PRODUCTION_PROJECT_REF}.supabase.co`;
  } catch {
    return false;
  }
}

export function isPhaseC3ProductionRuntime(supabaseUrl) {
  try {
    return new URL(String(supabaseUrl || "")).hostname.toLowerCase() === `${PHASE_C1_PRODUCTION_PROJECT_REF}.supabase.co`;
  } catch {
    return false;
  }
}

export async function loadAdminV2IngestionOverview(supabase) {
  if (!supabase) throw new Error("Supabase client is not configured");
  const caseIds = PHASE_C2_CASES.map((item) => item.observation_id);
  const [configsResult, runsResult, observationsResult, comparisonsResult, caseObservationsResult, caseProvenanceResult, productionCandidatesResult, phaseCFlagResult] = await Promise.all([
    supabase.from("v2_source_configs").select(`
      id, source_id, source_key, display_name, adapter_type, mode, parser_name, parser_version,
      promotion_approved, promotion_reference_required, production_shadow_enabled, production_canary_enabled, release_feature_enabled, release_approved,
      routine_production_enabled, routine_admission_max_new_per_run, routine_admission_max_new_per_day, routine_admission_scan_limit, updated_at,
      v2_source_health (
        status, circuit_state, consecutive_failures, consecutive_zero_item_runs,
        last_run_at, last_success_at, last_fixture_at, last_shadow_at,
        last_observation_count, last_error_code, last_error_message, parser_health, updated_at
      )
    `).order("display_name", { ascending: true }),
    supabase.from("v2_ingestion_runs")
      .select("id, source_config_id, mode, trigger_type, fixture_name, status, fetched_count, parsed_count, observation_count, invalid_count, duplicate_count, error_count, suspicious_zero_items, error_code, error_message, details, started_at, finished_at, created_at")
      .order("created_at", { ascending: false }).limit(200),
    supabase.from("v2_ingestion_observations")
      .select("id, run_id, source_config_id, validation_state, comparison_state, promotion_state, created_at")
      .order("created_at", { ascending: false }).limit(1000),
    supabase.from("v2_legacy_comparisons")
      .select("id, observation_id, match_type, decision, compared_at")
      .order("compared_at", { ascending: false }).limit(1000),
    supabase.from("v2_ingestion_observations")
      .select("id, source_config_id, source_id, source_key, external_id, procurement_reference, title, buyer, deadline, canonical_url, validation_state, comparison_state, promotion_state, promoted_opportunity_id, predicted_procurement_stage, predicted_actionable, predicted_confidence, predicted_requires_admin_review, strong_procurement_evidence, deadline_evidence, promotion_enrichment_status, approved_for_promotion, approved_at, approved_by, rolled_back_at, rollback_reason")
      .in("id", caseIds),
    supabase.from("opportunity_ingestion_provenance")
      .select("id, observation_id, opportunity_id, provenance_type, identity_match_type, metadata, attached_at")
      .in("observation_id", caseIds),
    supabase.from("v2_ingestion_observations")
      .select("id, source_config_id, source_id, source_key, external_id, procurement_reference, title, buyer, deadline, canonical_url, validation_state, comparison_state, promotion_state, promoted_opportunity_id, predicted_procurement_stage, predicted_actionable, predicted_confidence, predicted_requires_admin_review, strong_procurement_evidence, deadline_evidence, promotion_enrichment_status, approved_for_promotion, approved_at, approved_for_release, released_at")
      .eq("source_key", PHASE_C1_REYKJAVIK_SOURCE_KEY)
      .eq("id", PHASE_C3_FIRST_PRODUCTION_CANARY_OBSERVATION_ID)
      .limit(1),
    supabase.from("automation_settings").select("key,value").in("key", ["phase_c_production_enabled", "phase_c_release_enabled"]),
  ]);
  for (const result of [configsResult, runsResult, observationsResult, comparisonsResult, caseObservationsResult, caseProvenanceResult, productionCandidatesResult, phaseCFlagResult]) {
    if (result.error) throw result.error;
  }

  const observationsById = new Map((caseObservationsResult.data || []).map((row) => [row.id, row]));
  const provenanceByObservation = new Map((caseProvenanceResult.data || []).map((row) => [row.observation_id, row]));
  const opportunityIds = [...new Set(PHASE_C2_CASES.map((item) => observationsById.get(item.observation_id)?.promoted_opportunity_id || provenanceByObservation.get(item.observation_id)?.opportunity_id).filter(Boolean))];
  const opportunitiesById = new Map();
  if (opportunityIds.length) {
    const opportunityResult = await supabase.from("opportunities")
      .select("id, source_id, external_id, title, buyer, deadline, url, status, raw_payload, procurement_stage, actionable_for_suppliers, classification_confidence, classification_reason, classified_by, classifier_version, requires_admin_review")
      .in("id", opportunityIds);
    if (opportunityResult.error) throw opportunityResult.error;
    for (const opportunity of opportunityResult.data || []) opportunitiesById.set(opportunity.id, opportunity);
  }

  const cases = PHASE_C2_CASES.map((definition) => {
    const observation = observationsById.get(definition.observation_id) || null;
    const provenance = provenanceByObservation.get(definition.observation_id) || null;
    const opportunityId = observation?.promoted_opportunity_id || provenance?.opportunity_id || null;
    return { ...definition, observation, provenance, opportunity: opportunitiesById.get(opportunityId) || null };
  });

  const flags = Object.fromEntries((phaseCFlagResult.data || []).map((row) => [row.key, row.value === true || row.value === "true"]));
  const today = new Date().toISOString().slice(0, 10);
  const productionCandidates = (productionCandidatesResult.data || []).filter((row) =>
    row.validation_state === "valid"
    && row.predicted_procurement_stage === "open_competition"
    && row.predicted_actionable === true
    && Number(row.predicted_confidence || 0) >= 0.90
    && row.predicted_requires_admin_review === false
    && row.strong_procurement_evidence === true
    && row.deadline_evidence === "explicit_source"
    && row.deadline > today
    && Boolean(row.procurement_reference && row.canonical_url && row.buyer)
    && ["succeeded", "not_needed"].includes(row.promotion_enrichment_status)
    && ["legacy_match", "v2_only", "baseline_unavailable"].includes(row.comparison_state)
  );
  const productionCandidateIds = productionCandidates.map((row) => row.id);
  const productionProvenance = new Map();
  const productionOpportunities = new Map();
  if (productionCandidateIds.length) {
    const provenanceResult = await supabase.from("opportunity_ingestion_provenance")
      .select("id,observation_id,opportunity_id,provenance_type,identity_match_type,metadata")
      .in("observation_id", productionCandidateIds);
    if (provenanceResult.error) throw provenanceResult.error;
    for (const row of provenanceResult.data || []) productionProvenance.set(row.observation_id, row);
    const opportunityIds = [...new Set(productionCandidates.map((row) => row.promoted_opportunity_id || productionProvenance.get(row.id)?.opportunity_id).filter(Boolean))];
    if (opportunityIds.length) {
      const opportunityResult = await supabase.from("opportunities")
        .select("id,source_id,external_id,title,buyer,deadline,url,status,raw_payload,procurement_stage,actionable_for_suppliers,phase_c_communication_hold,phase_c_released_at,phase_c_disabled_at,updated_at")
        .in("id", opportunityIds);
      if (opportunityResult.error) throw opportunityResult.error;
      for (const row of opportunityResult.data || []) productionOpportunities.set(row.id, row);
    }
  }
  const hydratedProductionCandidates = productionCandidates.map((observation) => {
    const provenance = productionProvenance.get(observation.id) || null;
    return { observation, provenance, opportunity: productionOpportunities.get(observation.promoted_opportunity_id || provenance?.opportunity_id) || null };
  });
  return buildAdminV2OverviewRows({
    configs: configsResult.data || [],
    runs: runsResult.data || [],
    observations: observationsResult.data || [],
    comparisons: comparisonsResult.data || [],
  }).map((row) => ({
    ...row,
    phaseC2Cases: cases.filter((item) => item.source_key === row.source_key),
    phaseC3Production: row.source_key === PHASE_C1_REYKJAVIK_SOURCE_KEY ? {
      enabled: flags.phase_c_production_enabled === true,
      release_enabled: flags.phase_c_release_enabled === true,
      candidates: hydratedProductionCandidates,
    } : null,
  }));
}

export function buildAdminV2OverviewRows({ configs = [], runs = [], observations = [], comparisons = [] }) {
  const observationById = new Map(observations.map((row) => [String(row.id), row]));
  const comparisonCounts = new Map();
  for (const comparison of comparisons) {
    const observation = observationById.get(String(comparison.observation_id));
    if (!observation) continue;
    const counts = comparisonCounts.get(observation.source_config_id) || {};
    const key = comparison.decision || "pending";
    counts[key] = Number(counts[key] || 0) + 1;
    comparisonCounts.set(observation.source_config_id, counts);
  }

  return configs.map((config) => {
    const sourceRuns = runs.filter((run) => run.source_config_id === config.id);
    const sourceObservations = observations.filter((row) => row.source_config_id === config.id);
    const health = Array.isArray(config.v2_source_health) ? config.v2_source_health[0] : config.v2_source_health;
    const latestRun = sourceRuns[0] || null;
    const latestRunObservations = latestRun ? sourceObservations.filter((row) => row.run_id === latestRun.id) : [];
    const parserHealth = health?.parser_health || {};
    const storedObservationCount = numberOrFallback(latestRun?.observation_count, health?.last_observation_count, sourceObservations.length);
    const storedInvalidCount = numberOrFallback(latestRun?.invalid_count, parserHealth.invalid_count, sourceObservations.filter((row) => row.validation_state !== "valid").length);
    return {
      ...config,
      health: health || null,
      latestRun,
      latestFixtureRun: sourceRuns.find((run) => run.trigger_type === "fixture" || run.trigger_type === "replay") || null,
      latestShadowRun: sourceRuns.find((run) => run.mode === "shadow") || null,
      observationCount: storedObservationCount,
      validObservationCount: Math.max(0, storedObservationCount - storedInvalidCount),
      invalidObservationCount: storedInvalidCount,
      pendingComparisonCount: sourceObservations.filter((row) => row.comparison_state === "not_compared" || row.comparison_state === "review_required").length,
      comparisonCounts: comparisonCounts.get(config.id) || {},
      routineMetrics: {
        admitted: Number(latestRun?.details?.routine_admission?.admitted ?? latestRunObservations.filter((row) => row.promotion_state === "promoted").length),
        reused: Number(latestRun?.details?.routine_admission?.reused || 0),
        review_required: latestRunObservations.filter((row) => row.promotion_state === "review_required" || row.comparison_state === "review_required").length,
        blocked: latestRunObservations.filter((row) => row.promotion_state === "blocked").length,
        duplicates: Number(latestRun?.duplicate_count || 0),
        errors: Number(latestRun?.error_count || 0),
      },
    };
  });
}

function numberOrFallback(...values) {
  for (const value of values) {
    if (value !== null && value !== undefined && Number.isFinite(Number(value))) return Number(value);
  }
  return 0;
}

export async function invokeAdminV2Action(supabase, action, source_key = null, mode = null, extraBody = {}) {
  if (!supabase) throw new Error("Supabase client is not configured");
  const body = { action, ...(source_key ? { source_key } : {}), ...(action === "set_mode" ? { mode: mode || "shadow" } : {}), ...extraBody };
  const { data, error } = await supabase.functions.invoke("import-source-connectors-v2", { body });
  if (error) {
    let detail = error.message || "Edge Function request failed";
    const response = error.context;
    let errorBody = null;
    if (response?.status) detail = `HTTP ${response.status}: ${detail}`;
    try { errorBody = await response?.clone?.().json(); if (errorBody?.error) detail += ` (${errorBody.code || "V2_ERROR"}: ${errorBody.error})`; } catch { /* non-JSON response */ }
    const wrapped = new Error(`${action}${source_key ? ` [${source_key}]` : ""}: ${detail}`);
    wrapped.actionResult = errorBody;
    throw wrapped;
  }
  if (!data?.ok) {
    const wrapped = new Error(`${data?.code || "V2_ERROR"}: ${data?.error || "V2 action failed"}`);
    wrapped.actionResult = data;
    throw wrapped;
  }
  return data;
}

export async function verifyPhaseC1PromotionIdempotency(supabase, promotionResult, expectedOpportunityId) {
  if (!supabase) throw new Error("Supabase client is not configured");
  const returnedOpportunityId = String(promotionResult?.opportunity_id || "").trim();
  if (!returnedOpportunityId) throw new Error("Promotion response did not include an opportunity ID");

  const observationResult = await supabase.from("v2_ingestion_observations")
    .select("id,source_id,external_id,procurement_reference,canonical_url,promoted_opportunity_id,promotion_state")
    .eq("id", PHASE_C1_CANARY_OBSERVATION_ID).single();
  if (observationResult.error) throw observationResult.error;
  const observation = observationResult.data;

  const identityQueries = [
    supabase.from("opportunities").select("id,status,raw_payload")
      .eq("source_id", observation.source_id).eq("external_id", observation.external_id),
  ];
  if (observation.canonical_url) {
    identityQueries.push(supabase.from("opportunities").select("id,status,raw_payload").eq("url", observation.canonical_url));
  }
  if (observation.procurement_reference) {
    identityQueries.push(supabase.from("opportunities").select("id,status,raw_payload").contains("raw_payload", { procurement_reference: observation.procurement_reference }));
  }

  const [identityResults, provenanceResult] = await Promise.all([
    Promise.all(identityQueries),
    supabase.from("opportunity_ingestion_provenance")
      .select("id,opportunity_id,observation_id,provenance_type")
      .eq("observation_id", PHASE_C1_CANARY_OBSERVATION_ID),
  ]);
  for (const result of [...identityResults, provenanceResult]) {
    if (result.error) throw result.error;
  }

  const opportunitiesById = new Map();
  for (const result of identityResults) {
    for (const opportunity of result.data || []) opportunitiesById.set(opportunity.id, opportunity);
  }
  const opportunity = opportunitiesById.get(returnedOpportunityId) || null;
  const payload = opportunity?.raw_payload || {};
  const quarantineIntact = opportunity?.status === "hidden"
    && payload.promotion_quarantine === "phase_c_canary"
    && payload.hidden_from_reports === true
    && payload.admin_report_status === "hidden"
    && payload.promotion_release_allowed === false;
  const assertionsResult = await invokeAdminV2Action(supabase, "canary_assertions", null, null, { opportunity_id: returnedOpportunityId });
  const downstream = assertionsResult.assertions || {};
  const result = {
    returned_opportunity_id: returnedOpportunityId,
    expected_opportunity_id: expectedOpportunityId,
    same_opportunity_id: returnedOpportunityId === expectedOpportunityId,
    opportunity_count: opportunitiesById.size,
    provenance_count: (provenanceResult.data || []).length,
    observation_points_to_same_opportunity: observation.promoted_opportunity_id === returnedOpportunityId,
    quarantine_intact: quarantineIntact,
    downstream_assertions: downstream,
  };
  result.pass = result.same_opportunity_id
    && result.opportunity_count === 1
    && result.provenance_count === 1
    && result.observation_points_to_same_opportunity
    && result.quarantine_intact
    && downstream.quarantined === true
    && downstream.zero_downstream === true;
  return result;
}
