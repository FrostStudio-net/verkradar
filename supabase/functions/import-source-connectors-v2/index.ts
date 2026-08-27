import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { createObservation } from "../_shared/ingestion-v2/contracts.js";
import { parseWithV2Adapter } from "../_shared/ingestion-v2/adapters/index.js";
import { assertCircuitAllowsRun, detectZeroItemAnomaly, nextCircuitState } from "../_shared/ingestion-v2/metrics.js";
import { assertRunDeadline, createRunLease, heartbeatLease } from "../_shared/ingestion-v2/run-control.js";
import { fetchWithRetry } from "../_shared/ingestion-v2/fetching.js";
import { compareObservationToLegacy } from "../_shared/ingestion-v2/comparison.js";
import { classifyProcurementStage, classificationColumns } from "../_shared/procurement-stage.js";
import { extractAkranesDetailMetadata } from "../_shared/ingestion-v2/adapters/akranes-enrichment.js";
import { extractRikiskaupDetailMetadata } from "../_shared/ingestion-v2/adapters/rikiskaup-enrichment.js";
import { extractIsafjordurDetailMetadata } from "../_shared/ingestion-v2/adapters/isafjordur-enrichment.js";
import { extractReykjavikDetailMetadata } from "../_shared/ingestion-v2/adapters/reykjavik-enrichment.js";
import { extractLandsnetDetailMetadata, extractLandsvirkjunDetailMetadata, extractOrkuveitanDetailMetadata, extractVeiturDetailMetadata } from "../_shared/ingestion-v2/adapters/utbodsvefur-enrichment.js";
import { getUtbodsvefurParserDiagnostics } from "../_shared/ingestion-v2/adapters/utbodsvefur-buyers.js";
import {
  applySourcePredictionPolicy,
  buildShadowParserHealth,
  countSemanticDuplicates,
  DETAIL_ENRICHMENT_LIMITS,
  enrichCandidatesBounded,
  fetchBoundedWordpressPages,
  getSourceClassificationContext,
  THREE_SOURCE_KEYS,
} from "../_shared/ingestion-v2/shadow-quality.js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const LEGACY_TABLE = "opportunities";
const STAGING_PROJECT_REF = "ipixuxznqtrcdpzoxric";
const PRODUCTION_PROJECT_REF = "asojxjbsgqbfpbepojzh";
const ALLOWED_SOURCES = new Set(["akranes-utbod-v2", "borgarbyggd-utbod-v2", "gardabaer-utbod-v2", "rikiskaup-utbod-v2", "vegagerdin-utbod-v2", "isafjordur-utbod-v2", "reykjavik-utbod-v2"]);

const PHASE_A_FIXTURES: Record<string, { sourceKey: string; file: URL; contentType: string }> = {
  "akranes-rss": {
    sourceKey: "akranes-utbod-v2",
    file: new URL("./_fixtures/akranes-rss.xml", import.meta.url),
    contentType: "application/rss+xml",
  },
  "borgarbyggd-wordpress": {
    sourceKey: "borgarbyggd-utbod-v2",
    file: new URL("./_fixtures/borgarbyggd-wordpress.json", import.meta.url),
    contentType: "application/json",
  },
  "gardabaer-page-monitor": {
    sourceKey: "gardabaer-utbod-v2",
    file: new URL("./_fixtures/gardabaer-page-monitor.html", import.meta.url),
    contentType: "text/html",
  },
  "rikiskaup-wordpress": { sourceKey: "rikiskaup-utbod-v2", file: new URL("./_fixtures/rikiskaup-wordpress.json", import.meta.url), contentType: "application/json" },
  "vegagerdin-rss": { sourceKey: "vegagerdin-utbod-v2", file: new URL("./_fixtures/vegagerdin-rss.xml", import.meta.url), contentType: "application/rss+xml" },
  "isafjordur-rss": { sourceKey: "isafjordur-utbod-v2", file: new URL("./_fixtures/isafjordur-rss.xml", import.meta.url), contentType: "application/rss+xml" },
  "reykjavik-html-index": { sourceKey: "reykjavik-utbod-v2", file: new URL("./_fixtures/reykjavik-html-index.html", import.meta.url), contentType: "text/html" },
  "landsvirkjun-html-index": { sourceKey: "landsvirkjun-utbod-v2", file: new URL("./_fixtures/utbodsvefur-buyers-html-index.html", import.meta.url), contentType: "text/html" },
  "landsnet-html-index": { sourceKey: "landsnet-utbod-v2", file: new URL("./_fixtures/utbodsvefur-buyers-html-index.html", import.meta.url), contentType: "text/html" },
  "veitur-html-index": { sourceKey: "veitur-utbod-v2", file: new URL("./_fixtures/utbodsvefur-buyers-html-index.html", import.meta.url), contentType: "text/html" },
  "orkuveitan-html-index": { sourceKey: "orkuveitan-utbod-v2", file: new URL("./_fixtures/utbodsvefur-buyers-html-index.html", import.meta.url), contentType: "text/html" },
};

const UTBODSVEFUR_DETAIL_EXTRACTORS: Record<string, (html: string) => Record<string, unknown>> = {
  [THREE_SOURCE_KEYS.LANDSVIRKJUN]: extractLandsvirkjunDetailMetadata,
  [THREE_SOURCE_KEYS.LANDSNET]: extractLandsnetDetailMetadata,
  [THREE_SOURCE_KEYS.VEITUR]: extractVeiturDetailMetadata,
  [THREE_SOURCE_KEYS.ORKUVEITAN]: extractOrkuveitanDetailMetadata,
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return json({ ok: true });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let runId = "";
  try {
    const supabaseUrl = requiredEnv("SUPABASE_URL");
    if (supabaseUrl.includes(PRODUCTION_PROJECT_REF) || !supabaseUrl.includes(STAGING_PROJECT_REF)) {
      return json({ error: "V2 shadow controls are staging-only", code: "V2_ENVIRONMENT_BLOCKED" }, 409);
    }
    const anonKey = requiredEnv("SUPABASE_ANON_KEY");
    const serviceRoleKey = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
    const authHeader = req.headers.get("authorization") || "";
    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false },
    });
    const adminClient = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false } });
    const { data: userData, error: userError } = await userClient.auth.getUser();
    if (userError || !userData.user) return json({ error: "Unauthorized" }, 401);
    const { data: adminRow, error: adminError } = await adminClient
      .from("admin_users")
      .select("user_id")
      .eq("user_id", userData.user.id)
      .maybeSingle();
    if (adminError) throw adminError;
    if (!adminRow) return json({ error: "Admin access required" }, 403);

    const body = await safeJson(req);
    if (body.action === "set_mode") return await setShadowMode({ body, adminClient });
    if (body.action === "diagnostics") return await diagnostics({ adminClient });
    if (body.action === "run_shadow") {
      const requestedSource = String(body.source_key || "");
      if (!ALLOWED_SOURCES.has(requestedSource)) return json({ error: "Source is not allowlisted", code: "V2_SOURCE_NOT_ALLOWED", action: "run_shadow", source_key: requestedSource }, 403);
      const { data: shadowConfig, error: shadowError } = await adminClient.from("v2_source_configs").select("*").eq("source_key", requestedSource).single();
      if (shadowError) throw shadowError;
      if (shadowConfig.mode !== "shadow") return json({ error: "Source must be in shadow mode", code: "V2_SHADOW_MODE_REQUIRED", action: "run_shadow", source_key: requestedSource }, 409);
      return await runShadow({ body, config: shadowConfig, adminClient });
    }
    const fixtureName = String(body.fixture || body.fixtureName || "").trim();
    const requestedSource = String(body.source_key || body.source || "").trim();
    if (!fixtureName && requestedSource) {
      if (!ALLOWED_SOURCES.has(requestedSource)) return json({ error: "Source is not allowlisted for live execution", code: "V2_SOURCE_NOT_ALLOWED" }, 403);
      const { data: shadowConfig, error: shadowError } = await adminClient.from("v2_source_configs").select("*").eq("source_key", requestedSource).single();
      if (shadowError) throw shadowError;
      if (shadowConfig.mode === "shadow") return await runShadow({ body, config: shadowConfig, adminClient });
      if (shadowConfig.mode === "disabled") return json({ error: "Source is disabled", code: "V2_SOURCE_DISABLED" }, 409);
      return json({ error: "Live fetch requires explicit shadow mode", code: "V2_SHADOW_MODE_REQUIRED" }, 409);
    }
    const fixture = PHASE_A_FIXTURES[fixtureName];
    if (!fixture) return json({ error: "A known Phase A fixture is required", code: "V2_FIXTURE_REQUIRED" }, 400);
    if (body.live === true || body.trigger_type === "shadow" || body.trigger_type === "automation") {
      return json({ error: "Phase A permits fixture/replay input only", code: "V2_PHASE_A_FIXTURE_ONLY" }, 409);
    }

    const { data: config, error: configError } = await adminClient
      .from("v2_source_configs")
      .select("*")
      .eq("source_key", fixture.sourceKey)
      .single();
    if (configError) throw configError;
    if (config.mode !== "fixture_only") {
      return json({
        error: `Phase A runner requires fixture_only mode; current mode is ${config.mode}`,
        code: "V2_PHASE_A_MODE_BLOCKED",
      }, 409);
    }

    const { data: health, error: healthError } = await adminClient
      .from("v2_source_health")
      .select("*")
      .eq("source_config_id", config.id)
      .maybeSingle();
    if (healthError) throw healthError;
    assertCircuitAllowsRun(health);

    const now = new Date();
    const lease = createRunLease({ now, leaseMs: 30000, deadlineMs: Number(config.run_deadline_ms || 30000) });
    const { error: staleRunError } = await adminClient
      .from("v2_ingestion_runs")
      .update({
        status: "timed_out",
        error_count: 1,
        error_code: "V2_LEASE_EXPIRED",
        error_message: "Run lease expired before completion.",
        finished_at: now.toISOString(),
        updated_at: now.toISOString(),
      })
      .eq("source_config_id", config.id)
      .in("status", ["queued", "running"])
      .lt("lease_expires_at", now.toISOString());
    if (staleRunError) throw staleRunError;
    const { data: run, error: runError } = await adminClient
      .from("v2_ingestion_runs")
      .insert({
        source_config_id: config.id,
        mode: config.mode,
        trigger_type: body.replay === true ? "replay" : "fixture",
        fixture_name: fixtureName,
        status: "running",
        attempt_count: 1,
        started_at: now.toISOString(),
        ...lease,
        details: { phase: "A", live_requests_allowed: false, fixture_content_type: fixture.contentType },
      })
      .select("id")
      .single();
    if (runError) throw runError;
    runId = String(run.id || "");

    assertRunDeadline(lease.run_deadline_at);
    const fixtureText = await Deno.readTextFile(fixture.file);
    const candidates = parseWithV2Adapter(config.parser_name, config.parser_version, fixtureText);
    const indexDiagnostics = getUtbodsvefurParserDiagnostics(candidates);
    const zeroItem = detectZeroItemAnomaly({
      httpOk: true,
      parsedCount: candidates.length,
      consecutiveZeroItemRuns: health?.consecutive_zero_item_runs || 0,
      threshold: config.zero_item_threshold || 1,
    });

    const heartbeat = heartbeatLease(lease.lease_token);
    const { error: heartbeatError } = await adminClient
      .from("v2_ingestion_runs")
      .update(heartbeat)
      .eq("id", runId)
      .eq("lease_token", lease.lease_token);
    if (heartbeatError) throw heartbeatError;
    assertRunDeadline(lease.run_deadline_at);

    const fetchedAt = new Date().toISOString();
    const observations = await Promise.all(candidates.map((candidate) => createObservation(candidate, {
      run_id: runId,
      source_config_id: config.id,
      source_id: config.source_id,
      source_key: config.source_key,
      source_name: config.display_name,
      parser_name: config.parser_name,
      parser_version: config.parser_version,
      fetched_at: fetchedAt,
      fetch_metadata: {
        fixture: fixtureName,
        fixture_only: true,
        live_request: false,
        http_status: 200,
        content_type: fixture.contentType,
      },
    })));

    if (observations.length) {
      const { error: observationError } = await adminClient.from("v2_ingestion_observations").insert(observations);
      if (observationError) throw observationError;
    }

    const invalidCount = observations.filter((row) => row.validation_state !== "valid").length;
    const finishedAt = new Date().toISOString();
    const runStatus = zeroItem.suspicious ? "quarantined" : invalidCount ? "partial" : "succeeded";
    const { error: finalizeError } = await adminClient
      .from("v2_ingestion_runs")
      .update({
        status: runStatus,
        fetched_count: 1,
        parsed_count: candidates.length,
        observation_count: observations.length,
        invalid_count: invalidCount,
        suspicious_zero_items: zeroItem.suspicious,
        error_count: zeroItem.suspicious ? 1 : 0,
        error_code: zeroItem.reason,
        error_message: zeroItem.suspicious ? "Fixture parsed zero items and was quarantined." : null,
        details: { phase: "A", live_requests_allowed: false, fixture_content_type: fixture.contentType, index_diagnostics: indexDiagnostics },
        finished_at: finishedAt,
        lease_expires_at: finishedAt,
        updated_at: finishedAt,
      })
      .eq("id", runId);
    if (finalizeError) throw finalizeError;

    const circuit = nextCircuitState(health, {
      ok: !zeroItem.suspicious && invalidCount === 0,
      circuitShouldOpen: zeroItem.circuit_should_open,
    });
    const { error: healthUpdateError } = await adminClient.from("v2_source_health").upsert({
      source_config_id: config.id,
      ...circuit,
      consecutive_zero_item_runs: zeroItem.consecutive_zero_item_runs,
      last_run_id: runId,
      last_run_at: finishedAt,
      last_success_at: runStatus === "succeeded" ? finishedAt : health?.last_success_at || null,
      last_fixture_at: finishedAt,
      last_http_status: 200,
      last_observation_count: observations.length,
      last_error_code: zeroItem.reason,
      last_error_message: zeroItem.suspicious ? "HTTP success but zero parsed items" : null,
      parser_health: {
        parser_name: config.parser_name,
        parser_version: config.parser_version,
        parsed_count: candidates.length,
        invalid_count: invalidCount,
        index_diagnostics: indexDiagnostics,
        fixture_only: true,
      },
      updated_at: finishedAt,
    }, { onConflict: "source_config_id" });
    if (healthUpdateError) throw healthUpdateError;

    return json({
      ok: runStatus === "succeeded",
      phase: "A",
      fixture_only: true,
      live_requests_made: 0,
      customer_visible_writes: 0,
      source: config.display_name,
      source_key: config.source_key,
      run_id: runId,
      status: runStatus,
      parsed: candidates.length,
      observations: observations.length,
      invalid: invalidCount,
      suspicious_zero_items: zeroItem.suspicious,
    }, runStatus === "succeeded" ? 200 : 207);
  } catch (error) {
    console.error("V2 ingestion run failed:", error);
    if (runId) await markRunFailed(requiredEnv("SUPABASE_URL"), requiredEnv("SUPABASE_SERVICE_ROLE_KEY"), runId, error);
    return json({ ok: false, phase: "A", fixture_only: true, customer_visible_writes: 0, error: errorMessage(error), code: errorCode(error) }, 500);
  }
});

async function runShadow({ body: _body, config, adminClient }: { body: Record<string, unknown>; config: any; adminClient: any }) {
  if (config?.settings?.operational_state === "automated_live_access_not_cleared" || config?.settings?.access_policy?.automated_live_access_cleared === false) {
    const error = new Error("Automated live access has not been operationally cleared for this source");
    (error as any).code = "V2_LIVE_ACCESS_NOT_CLEARED";
    throw error;
  }
  const started = Date.now();
  const now = new Date();
  const lease = createRunLease({ now, leaseMs: 30000, deadlineMs: Number(config.run_deadline_ms || 30000) });
  const { data: run, error: runError } = await adminClient.from("v2_ingestion_runs").insert({ source_config_id: config.id, mode: "shadow", trigger_type: "shadow", status: "running", attempt_count: 1, started_at: now.toISOString(), ...lease, details: { phase: "B", live_requests_allowed: true, customer_visible_writes: 0, promotion_allowed: false } }).select("id").single();
  if (runError) throw runError;
  const headers = { "user-agent": "VerkRadar/2 shadow ingestion (+https://verkradar.is)" };
  let fetched: any;
  try {
    let text;
    let fetchedCount = 1;
    let duplicateCount = 0;
    let pagination = null;
    if (config.source_key === THREE_SOURCE_KEYS.RIKISKAUP) {
      const qualitySettings = config.settings?.shadow_quality || {};
      const paged = await fetchBoundedWordpressPages({
        endpointUrl: config.endpoint_url,
        maxPages: qualitySettings.max_pages || 3,
        maxItems: qualitySettings.max_items || 60,
        perPage: qualitySettings.per_page || 20,
        fetchPage: async (url: string) => {
          const result = await fetchWithRetry(url, { maxAttempts: config.max_attempts, timeoutMs: config.request_timeout_ms, deadlineAt: Date.parse(lease.run_deadline_at), request: { headers } });
          return { body: await result.response.text(), totalPages: result.response.headers.get("x-wp-totalpages"), result };
        },
      });
      fetched = paged.lastFetch?.result;
      text = JSON.stringify(paged.items);
      fetchedCount = paged.diagnostics.fetched_pages;
      duplicateCount = paged.diagnostics.duplicates;
      pagination = paged.diagnostics;
    } else {
      fetched = await fetchWithRetry(config.endpoint_url, { maxAttempts: config.max_attempts, timeoutMs: config.request_timeout_ms, deadlineAt: Date.parse(lease.run_deadline_at), request: { headers } });
      text = await fetched.response.text();
    }
    let candidates = parseWithV2Adapter(config.parser_name, config.parser_version, text);
    const indexDiagnostics = getUtbodsvefurParserDiagnostics(candidates);
    if ([THREE_SOURCE_KEYS.RIKISKAUP, THREE_SOURCE_KEYS.VEGAGERDIN, THREE_SOURCE_KEYS.ISAFJORDUR, THREE_SOURCE_KEYS.REYKJAVIK, ...Object.keys(UTBODSVEFUR_DETAIL_EXTRACTORS)].includes(config.source_key)) {
      duplicateCount += countSemanticDuplicates(candidates);
    }
    let enrichmentMetrics = { attempted: 0, succeeded: 0, failed: 0, enriched: 0, no_supported_fields: 0, skipped: candidates.length, limit: 0 };
    if (config.source_key === "akranes-utbod-v2") {
      const enriched = [];
      for (const candidate of candidates.slice(0, 25)) {
        try { const detail = await fetchWithRetry(candidate.canonical_url || candidate.discovered_url, { maxAttempts: 2, timeoutMs: 5000, deadlineAt: Date.parse(lease.run_deadline_at), request: { headers } }); const metadata = extractAkranesDetailMetadata(await detail.response.text()); enriched.push({ ...candidate, deadline: candidate.deadline || metadata.deadline, procurement_reference: candidate.procurement_reference || metadata.procurement_reference, safe_source_payload: { ...(candidate.safe_source_payload || {}), shadow_enrichment: metadata } }); } catch { enriched.push({ ...candidate, safe_source_payload: { ...(candidate.safe_source_payload || {}), shadow_enrichment: { enrichment_status: "failed" } } }); }
      }
      candidates = enriched;
      enrichmentMetrics = summarizeExistingEnrichment(candidates, 25);
    }
    const defaultDetailLimit = (DETAIL_ENRICHMENT_LIMITS as Record<string, number>)[String(config.source_key)];
    if (config.source_key !== "akranes-utbod-v2" && defaultDetailLimit) {
      const configuredLimit = config.settings?.shadow_quality?.detail_limit;
      const enrichment = await enrichCandidatesBounded(candidates, {
        sourceKey: config.source_key,
        limit: configuredLimit || defaultDetailLimit,
        now,
        metadataExtractor: config.source_key === THREE_SOURCE_KEYS.RIKISKAUP
          ? extractRikiskaupDetailMetadata
          : config.source_key === THREE_SOURCE_KEYS.ISAFJORDUR
            ? extractIsafjordurDetailMetadata
            : config.source_key === THREE_SOURCE_KEYS.REYKJAVIK
              ? extractReykjavikDetailMetadata
            : UTBODSVEFUR_DETAIL_EXTRACTORS[config.source_key]
              ? UTBODSVEFUR_DETAIL_EXTRACTORS[config.source_key]
            : undefined,
        fetchDetail: async (url: string) => {
          const detail = await fetchWithRetry(url, { maxAttempts: 2, timeoutMs: Math.min(Number(config.request_timeout_ms || 5000), 5000), deadlineAt: Date.parse(lease.run_deadline_at), request: { headers } });
          return { body: await detail.response.text() };
        },
      });
      candidates = enrichment.candidates;
      enrichmentMetrics = enrichment.metrics;
    }
    const observations = await Promise.all(candidates.map((candidate) => createObservation(candidate, { run_id: run.id, source_config_id: config.id, source_id: config.source_id, source_key: config.source_key, source_name: config.display_name, parser_name: config.parser_name, parser_version: config.parser_version, fetched_at: new Date().toISOString(), fetch_metadata: { live_request: true, http_status: fetched.response.status, content_type: fetched.response.headers.get("content-type"), attempts: fetched.attempts, latency_ms: fetched.latencyMs, mode: "shadow" } })));
    const invalidCount = observations.filter((row) => row.validation_state !== "valid").length;
    const validCount = observations.length - invalidCount;
    const parserErrors: string[] = [...new Set<string>(observations.flatMap((row) => row.validation_errors || []))];
    const { data: health, error: healthError } = await adminClient.from("v2_source_health").select("*").eq("source_config_id", config.id).maybeSingle();
    if (healthError) throw healthError;
    const zeroItem = detectZeroItemAnomaly({ httpOk: fetched.response.ok, parsedCount: candidates.length, consecutiveZeroItemRuns: health?.consecutive_zero_item_runs || 0, threshold: config.zero_item_threshold || 1 });
    let storedObservations: any[] = observations;
    if (observations.length) { const { data, error } = await adminClient.from("v2_ingestion_observations").insert(observations).select("*"); if (error) throw error; storedObservations = data || observations; }
    const classificationContext = getSourceClassificationContext(config);
    const classificationMetrics: { stage_distribution: Record<string, number>; actionable: number; non_actionable: number } = { stage_distribution: {}, actionable: 0, non_actionable: 0 };
    for (const observation of storedObservations) {
      const enrichment = observation.safe_source_payload?.shadow_enrichment || {};
      const classified = classificationColumns(classifyProcurementStage({ title: observation.title, body_text: observation.description, description: observation.description, buyer: observation.buyer, deadline: observation.deadline, publication_date: observation.publication_date, ...classificationContext, authoritative_metadata: { ...(observation.safe_source_payload || {}), ...enrichment } }));
      const { prediction, category } = applySourcePredictionPolicy(classified, observation, config, now);
      const stage = String(prediction.procurement_stage || "uncertain");
      classificationMetrics.stage_distribution[stage] = (classificationMetrics.stage_distribution[stage] || 0) + 1;
      if (prediction.actionable_for_suppliers === true) classificationMetrics.actionable += 1;
      else classificationMetrics.non_actionable += 1;
      const { error: predictionError } = await adminClient.from("v2_ingestion_observations").update({ predicted_procurement_stage: prediction.procurement_stage, predicted_actionable: prediction.actionable_for_suppliers, predicted_confidence: prediction.classification_confidence, predicted_reason: prediction.classification_reason, predicted_requires_admin_review: prediction.requires_admin_review, enrichment_status: enrichment.enrichment_status || null, shadow_quality_category: category }).eq("id", observation.id);
      if (predictionError) throw predictionError;
    }
    const { data: legacy } = await adminClient.from(LEGACY_TABLE).select("id,source_id,external_id,procurement_reference,canonical_url,url,title,description,buyer,deadline,publication_date,location").eq("source_id", config.source_id);
    for (const observation of storedObservations) { const comparison = await compareObservationToLegacy(observation, legacy || []); const { comparison_state, ...comparisonRecord } = comparison; const { error: comparisonError } = await adminClient.from("v2_legacy_comparisons").upsert({ observation_id: observation.id, ...comparisonRecord }, { onConflict: "observation_id,legacy_opportunity_id,match_type" }); if (comparisonError) throw comparisonError; const state = comparison_state || (comparison.match_type === "v2_only" ? "v2_only" : comparison.match_type === "fuzzy_review_candidate" ? "review_required" : "legacy_match"); const { error: stateError } = await adminClient.from("v2_ingestion_observations").update({ comparison_state: state }).eq("id", observation.id); if (stateError) throw stateError; }
    const finished = new Date().toISOString();
    const runStatus = zeroItem.suspicious ? "quarantined" : invalidCount ? "partial" : "succeeded";
    const parserHealth = buildShadowParserHealth({ config, fetched: fetchedCount, parsed: candidates.length, valid: validCount, invalid: invalidCount, duplicates: duplicateCount, parserErrors, enrichment: enrichmentMetrics, suspiciousZero: zeroItem.suspicious, pagination, classification: classificationMetrics, indexDiagnostics });
    const details = { phase: "B", live_requests_allowed: true, customer_visible_writes: 0, promotion_allowed: false, promote_count: 0, pagination, index_diagnostics: indexDiagnostics, enrichment: enrichmentMetrics, classification: classificationMetrics };
    const { error: finalizeError } = await adminClient.from("v2_ingestion_runs").update({ status: runStatus, fetched_count: fetchedCount, parsed_count: candidates.length, observation_count: observations.length, invalid_count: invalidCount, duplicate_count: duplicateCount, suspicious_zero_items: zeroItem.suspicious, error_count: parserErrors.length + (zeroItem.suspicious ? 1 : 0), error_code: zeroItem.reason, error_message: zeroItem.suspicious ? "HTTP success but zero parsed items" : null, details, finished_at: finished, lease_expires_at: finished, updated_at: finished }).eq("id", run.id);
    if (finalizeError) throw finalizeError;
    const { error: healthUpdateError } = await adminClient.from("v2_source_health").upsert({ source_config_id: config.id, status: runStatus === "succeeded" ? "healthy" : "degraded", circuit_state: zeroItem.circuit_should_open ? "open" : "closed", consecutive_zero_item_runs: zeroItem.consecutive_zero_item_runs, last_run_id: run.id, last_run_at: finished, last_success_at: runStatus === "succeeded" ? finished : health?.last_success_at || null, last_shadow_at: finished, last_http_status: fetched.response.status, last_latency_ms: fetched.latencyMs, last_observation_count: observations.length, last_error_code: zeroItem.reason, last_error_message: zeroItem.suspicious ? "HTTP success but zero parsed items" : null, parser_health: parserHealth, updated_at: finished }, { onConflict: "source_config_id" });
    if (healthUpdateError) throw healthUpdateError;
    return json({ ok: runStatus === "succeeded", phase: "B", mode: "shadow", run_id: run.id, source: config.display_name, status: runStatus, fetched: fetchedCount, parsed: candidates.length, valid: validCount, invalid: invalidCount, duplicates: duplicateCount, observations: observations.length, enrichment: enrichmentMetrics, pagination, live_requests_made: fetchedCount + enrichmentMetrics.attempted, customer_visible_writes: 0, promote_count: 0, latency_ms: Date.now() - started }, runStatus === "succeeded" ? 200 : 207);
  } catch (error) {
    const code = errorCode(error);
    await adminClient.from("v2_ingestion_runs").update({ status: code === "V2_RUN_DEADLINE" ? "timed_out" : "failed", error_count: 1, error_code: code || "V2_SHADOW_ERROR", error_message: errorMessage(error), finished_at: new Date().toISOString() }).eq("id", run.id);
    throw error;
  }
}

function summarizeExistingEnrichment(candidates: any[], limit: number) {
  const statuses: string[] = candidates.map((candidate: any) => candidate.safe_source_payload?.shadow_enrichment?.enrichment_status).filter(Boolean);
  return {
    attempted: statuses.length,
    succeeded: statuses.filter((status) => status !== "failed").length,
    failed: statuses.filter((status) => status === "failed").length,
    enriched: statuses.filter((status) => status === "enriched").length,
    no_supported_fields: statuses.filter((status) => status === "no_supported_fields").length,
    skipped: 0,
    limit,
  };
}

async function setShadowMode({ body, adminClient }: { body: Record<string, unknown>; adminClient: any }) {
  const sourceKey = String(body.source_key || "");
  const mode = String(body.mode || "");
  if (!ALLOWED_SOURCES.has(sourceKey)) return json({ error: "Source is not allowlisted", code: "V2_SOURCE_NOT_ALLOWED" }, 403);
  if (!["shadow", "fixture_only"].includes(mode)) return json({ error: "Only shadow and fixture_only are supported", code: "V2_MODE_FORBIDDEN" }, 400);
  const { data: config, error } = await adminClient.from("v2_source_configs").select("id,source_key,mode").eq("source_key", sourceKey).single();
  if (error) throw error;
  if (!((config.mode === "fixture_only" && mode === "shadow") || (config.mode === "shadow" && mode === "fixture_only"))) return json({ error: "Invalid mode transition", code: "V2_MODE_TRANSITION_FORBIDDEN" }, 409);
  const { error: updateError } = await adminClient.from("v2_source_configs").update({ mode, updated_at: new Date().toISOString() }).eq("id", config.id).eq("mode", config.mode);
  if (updateError) throw updateError;
  return json({ ok: true, source_key: sourceKey, mode, customer_visible_writes: 0 });
}

async function diagnostics({ adminClient }: { adminClient: any }) {
  const { data, error } = await adminClient.from("v2_source_configs").select("id,source_key,display_name,mode,parser_name,parser_version,v2_source_health(*),v2_ingestion_runs(id,status,parsed_count,observation_count,error_count,finished_at),v2_ingestion_observations(validation_state,comparison_state,predicted_procurement_stage)").in("source_key", [...ALLOWED_SOURCES]);
  if (error) throw error;
  return json({ ok: true, sources: data || [], secrets: false });
}

async function markRunFailed(supabaseUrl: string, serviceRoleKey: string, runId: string, error: unknown) {
  const client = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false } });
  const now = new Date().toISOString();
  await client.from("v2_ingestion_runs").update({
    status: errorCode(error) === "V2_RUN_DEADLINE" ? "timed_out" : "failed",
    error_count: 1,
    error_code: errorCode(error),
    error_message: errorMessage(error),
    finished_at: now,
    lease_expires_at: now,
    updated_at: now,
  }).eq("id", runId);
}

async function safeJson(req: Request): Promise<Record<string, unknown>> {
  try {
    const value = await req.json();
    return value && typeof value === "object" ? value as Record<string, unknown> : {};
  } catch {
    return {};
  }
}

function requiredEnv(name: string) {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`${name} is not configured`);
  return value;
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}

function errorCode(error: unknown) {
  if (error && typeof error === "object" && "code" in error) return String((error as { code?: unknown }).code || "V2_RUN_FAILED");
  return "V2_RUN_FAILED";
}

function json(payload: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...corsHeaders, "content-type": "application/json" },
  });
}
