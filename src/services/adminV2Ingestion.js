export async function loadAdminV2IngestionOverview(supabase) {
  if (!supabase) throw new Error("Supabase client is not configured");
  const [configsResult, runsResult, observationsResult, comparisonsResult] = await Promise.all([
    supabase.from("v2_source_configs").select(`
      id, source_id, source_key, display_name, adapter_type, mode, parser_name, parser_version, updated_at,
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
      .select("id, source_config_id, validation_state, comparison_state, promotion_state, created_at")
      .order("created_at", { ascending: false }).limit(1000),
    supabase.from("v2_legacy_comparisons")
      .select("id, observation_id, match_type, decision, compared_at")
      .order("compared_at", { ascending: false }).limit(1000),
  ]);
  for (const result of [configsResult, runsResult, observationsResult, comparisonsResult]) {
    if (result.error) throw result.error;
  }

  return buildAdminV2OverviewRows({
    configs: configsResult.data || [],
    runs: runsResult.data || [],
    observations: observationsResult.data || [],
    comparisons: comparisonsResult.data || [],
  });
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
    };
  });
}

function numberOrFallback(...values) {
  for (const value of values) {
    if (value !== null && value !== undefined && Number.isFinite(Number(value))) return Number(value);
  }
  return 0;
}

export async function invokeAdminV2Action(supabase, action, source_key = null, mode = null) {
  if (!supabase) throw new Error("Supabase client is not configured");
  const { data, error } = await supabase.functions.invoke("import-source-connectors-v2", { body: { action, ...(source_key ? { source_key } : {}), ...(action === "set_mode" ? { mode: mode || "shadow" } : {}) } });
  if (error) {
    let detail = error.message || "Edge Function request failed";
    const response = error.context;
    if (response?.status) detail = `HTTP ${response.status}: ${detail}`;
    try { const body = await response?.clone?.().json(); if (body?.error) detail += ` (${body.code || "V2_ERROR"}: ${body.error})`; } catch { /* non-JSON response */ }
    throw new Error(`${action}${source_key ? ` [${source_key}]` : ""}: ${detail}`);
  }
  if (!data?.ok) throw new Error(data?.error || "V2 action failed");
  return data;
}
