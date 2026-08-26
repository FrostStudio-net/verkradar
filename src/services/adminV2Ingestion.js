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
      .select("id, source_config_id, mode, trigger_type, fixture_name, status, observation_count, invalid_count, error_count, suspicious_zero_items, error_code, error_message, started_at, finished_at, created_at")
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

  const runs = runsResult.data || [];
  const observations = observationsResult.data || [];
  const comparisons = comparisonsResult.data || [];
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

  return (configsResult.data || []).map((config) => {
    const sourceRuns = runs.filter((run) => run.source_config_id === config.id);
    const sourceObservations = observations.filter((row) => row.source_config_id === config.id);
    const health = Array.isArray(config.v2_source_health) ? config.v2_source_health[0] : config.v2_source_health;
    return {
      ...config,
      health: health || null,
      latestRun: sourceRuns[0] || null,
      latestFixtureRun: sourceRuns.find((run) => run.trigger_type === "fixture" || run.trigger_type === "replay") || null,
      latestShadowRun: sourceRuns.find((run) => run.mode === "shadow") || null,
      observationCount: sourceObservations.length,
      validObservationCount: sourceObservations.filter((row) => row.validation_state === "valid").length,
      invalidObservationCount: sourceObservations.filter((row) => row.validation_state !== "valid").length,
      pendingComparisonCount: sourceObservations.filter((row) => row.comparison_state === "not_compared" || row.comparison_state === "review_required").length,
      comparisonCounts: comparisonCounts.get(config.id) || {},
    };
  });
}
