import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { createObservation } from "../_shared/ingestion-v2/contracts.js";
import { parseWithV2Adapter } from "../_shared/ingestion-v2/adapters/index.js";
import { assertCircuitAllowsRun, detectZeroItemAnomaly, nextCircuitState } from "../_shared/ingestion-v2/metrics.js";
import { assertRunDeadline, createRunLease, heartbeatLease } from "../_shared/ingestion-v2/run-control.js";
import { fetchWithRetry } from "../_shared/ingestion-v2/fetching.js";
import { compareObservationToLegacy } from "../_shared/ingestion-v2/comparison.js";
import { assertProductionShadowAllowed, isExactSupabaseProject, PRODUCTION_PROJECT_REF } from "../_shared/ingestion-v2/production-shadow.js";
import { classifyProcurementStage, classificationColumns } from "../_shared/procurement-stage.js";
import { extractAkranesDetailMetadata } from "../_shared/ingestion-v2/adapters/akranes-enrichment.js";
import { extractRikiskaupDetailMetadata } from "../_shared/ingestion-v2/adapters/rikiskaup-enrichment.js";
import { extractIsafjordurDetailMetadata } from "../_shared/ingestion-v2/adapters/isafjordur-enrichment.js";
import { extractReykjavikDetailMetadata } from "../_shared/ingestion-v2/adapters/reykjavik-enrichment.js";
import { extractGardabaerDetailMetadata } from "../_shared/ingestion-v2/adapters/gardabaer-enrichment.js";
import { extractLandsnetDetailMetadata, extractLandsvirkjunDetailMetadata, extractOrkuveitanDetailMetadata, extractVeiturDetailMetadata } from "../_shared/ingestion-v2/adapters/utbodsvefur-enrichment.js";
import { getUtbodsvefurParserDiagnostics } from "../_shared/ingestion-v2/adapters/utbodsvefur-buyers.js";
import {
  applyBorgarbyggdSourceStatus,
  applySourcePredictionPolicy,
  buildShadowParserHealth,
  countSemanticDuplicates,
  derivePromotionEvidence,
  DETAIL_ENRICHMENT_LIMITS,
  enrichCandidatesBounded,
  fetchBoundedWordpressPages,
  getSourceClassificationContext,
  THREE_SOURCE_KEYS,
} from "../_shared/ingestion-v2/shadow-quality.js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-automation-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const LEGACY_TABLE = "opportunities";
const STAGING_PROJECT_REF = "ipixuxznqtrcdpzoxric";
const REYKJAVIK_SOURCE_KEY = "reykjavik-utbod-v2";
const GARDABAER_SOURCE_KEY = "gardabaer-utbod-v2";
const REYKJAVIK_HOLD_CLEAR_OBSERVATION_ID = "32713ed0-089d-45a0-97f9-24fabdbf08dd";
const REYKJAVIK_HOLD_CLEAR_OPPORTUNITY_ID = "1c4b107b-999c-47df-82a7-d87b43b20185";
const PRODUCTION_CANARY_CONFIRMATION = "Enable canary controls only — no promotion will occur";
const PRODUCTION_RELEASE_CONFIRMATION = "Enable release controls only — no release will occur";
const COMMUNICATION_HOLD_CLEAR_CONFIRMATION = "Clear communication hold only — no matching or communication will run";
const STAGING_PHASE_C_SOURCES: ReadonlySet<string> = new Set([THREE_SOURCE_KEYS.REYKJAVIK, THREE_SOURCE_KEYS.RIKISKAUP]);
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
    const isStaging = isExactSupabaseProject(supabaseUrl, STAGING_PROJECT_REF);
    const isProduction = isExactSupabaseProject(supabaseUrl, PRODUCTION_PROJECT_REF);
    if (!isStaging && !isProduction) return json({ error: "Unknown Supabase project", code: "V2_ENVIRONMENT_BLOCKED" }, 409);
    const anonKey = requiredEnv("SUPABASE_ANON_KEY");
    const serviceRoleKey = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
    const preAuthBody = await safeJson(req.clone());
    const routineAutomation = preAuthBody.action === "run_reykjavik_production";
    const gardabaerRoutineAutomation = preAuthBody.action === "run_gardabaer_production";
    const routineAutomationAuthorized = routineAutomation
      && isProduction
      && String(preAuthBody.source_key || "") === REYKJAVIK_SOURCE_KEY
      && Boolean(requiredEnv("AUTOMATION_SECRET"))
      && req.headers.get("x-automation-secret") === requiredEnv("AUTOMATION_SECRET");
    const gardabaerRoutineAutomationAuthorized = gardabaerRoutineAutomation
      && isProduction
      && String(preAuthBody.source_key || "") === GARDABAER_SOURCE_KEY
      && Boolean(requiredEnv("AUTOMATION_SECRET"))
      && req.headers.get("x-automation-secret") === requiredEnv("AUTOMATION_SECRET");
    const authHeader = req.headers.get("authorization") || "";
    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false },
    });
    const adminClient = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false } });
    let adminUserId = "";
    if (!routineAutomationAuthorized && !gardabaerRoutineAutomationAuthorized) {
      const { data: userData, error: userError } = await userClient.auth.getUser();
      if (userError || !userData.user) return json({ error: "Unauthorized" }, 401);
      const { data: adminRow, error: adminError } = await adminClient
        .from("admin_users")
        .select("user_id")
        .eq("user_id", userData.user.id)
        .maybeSingle();
      if (adminError) throw adminError;
      if (!adminRow) return json({ error: "Admin access required" }, 403);
      adminUserId = userData.user.id;
    }
    if (routineAutomation && !routineAutomationAuthorized) {
      return json({ error: "Reykjavík routine automation authentication failed", code: "V2_ROUTINE_AUTOMATION_UNAUTHORIZED" }, 401);
    }
    if (gardabaerRoutineAutomation && !gardabaerRoutineAutomationAuthorized) {
      return json({ error: "Garðabær routine automation authentication failed", code: "V2_ROUTINE_AUTOMATION_UNAUTHORIZED" }, 401);
    }
    const body = await safeJson(req);
    if (routineAutomationAuthorized) return await runReykjavikRoutineProduction({ body, adminClient });
    if (gardabaerRoutineAutomationAuthorized) return await runGardabaerRoutineProduction({ body, adminClient });
    if (body.action === "phase_c_capabilities") return await phaseCCapabilities({ adminClient, isProduction });
    const productionPhaseCAction = ["set_source_promotion_approval", "approve_promotion", "promote_canary", "rollback_canary", "canary_assertions", "set_reykjavik_release_enabled", "approve_release", "release_canary", "clear_communication_hold", "disable_released_canary"].includes(String(body.action || ""));
    const productionShadowAction = body.action === "run_shadow";
    const productionCanaryToggleAction = body.action === "set_reykjavik_production_canary_enabled";
    const productionRoutineToggleAction = ["set_reykjavik_routine_production", "set_gardabaer_routine_production"].includes(String(body.action || ""));
    if (productionCanaryToggleAction && !isProduction) {
      return json({ error: "This action is available only in the production project", code: "V2_PRODUCTION_CANARY_ENVIRONMENT_REQUIRED" }, 403);
    }
    if (isProduction && productionPhaseCAction && !(await isPhaseCProductionEnabled(adminClient))) {
      return json({ error: "Phase C production canary feature is disabled", code: "V2_PRODUCTION_FEATURE_DISABLED" }, 409);
    }
    if (isProduction && !productionPhaseCAction && !productionShadowAction && !productionCanaryToggleAction && !productionRoutineToggleAction) {
      return json({ error: "This action is not available in production", code: "V2_PRODUCTION_ACTION_BLOCKED" }, 403);
    }
    if (productionCanaryToggleAction) return await setReykjavikProductionCanaryEnabled({ body, adminClient, adminUserId });
    if (body.action === "set_reykjavik_routine_production") return await setReykjavikRoutineProduction({ body, adminClient, adminUserId, isProduction });
    if (body.action === "set_gardabaer_routine_production") return await setGardabaerRoutineProduction({ body, adminClient, adminUserId, isProduction });
    if (body.action === "set_source_promotion_approval") return await setSourcePromotionApproval({ body, adminClient, adminUserId });
    if (body.action === "approve_promotion") return await approvePromotion({ body, adminClient, adminUserId });
    if (body.action === "promote_canary") return await promoteCanary({ body, adminClient, adminUserId });
    if (body.action === "rollback_canary") return await rollbackCanary({ body, adminClient, adminUserId });
    if (body.action === "set_reykjavik_release_enabled") {
      if (!isProduction) return json({ error: "Release controls are production-only", code: "V2_RELEASE_ENVIRONMENT_REQUIRED" }, 403);
      return await setReykjavikReleaseEnabled({ body, adminClient, adminUserId });
    }
    if (body.action === "approve_release") return await approveRelease({ body, adminClient, adminUserId });
    if (body.action === "release_canary") return await releaseCanary({ body, adminClient, adminUserId });
    if (body.action === "clear_communication_hold") {
      if (!isProduction) return json({ error: "Communication hold clearing is production-only", code: "V2_COMMUNICATION_HOLD_PRODUCTION_REQUIRED" }, 403);
      return await clearCommunicationHold({ body, adminClient, adminUserId });
    }
    if (body.action === "disable_released_canary") return await disableReleasedCanary({ body, adminClient, adminUserId });
    if (body.action === "canary_assertions") return await canaryAssertions({ body, adminClient });
    if (body.action === "set_mode") return await setShadowMode({ body, adminClient });
    if (body.action === "diagnostics") return await diagnostics({ adminClient });
    if (body.action === "run_shadow") {
      const requestedSource = String(body.source_key || "");
      if (!ALLOWED_SOURCES.has(requestedSource)) return json({ error: "Source is not allowlisted", code: "V2_SOURCE_NOT_ALLOWED", action: "run_shadow", source_key: requestedSource }, 403);
      const { data: shadowConfig, error: shadowError } = await adminClient.from("v2_source_configs").select("*").eq("source_key", requestedSource).single();
      if (shadowError) throw shadowError;
      if (isProduction) {
        const releaseEnabled = await isPhaseCReleaseEnabled(adminClient);
        assertProductionShadowAllowed({ isProduction, sourceKey: requestedSource, config: shadowConfig, releaseEnabled });
      }
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

async function runShadow({ body, config, adminClient }: { body: Record<string, unknown>; config: any; adminClient: any }) {
  if (config?.settings?.operational_state === "automated_live_access_not_cleared" || config?.settings?.access_policy?.automated_live_access_cleared === false) {
    const error = new Error("Automated live access has not been operationally cleared for this source");
    (error as any).code = "V2_LIVE_ACCESS_NOT_CLEARED";
    throw error;
  }
  const started = Date.now();
  const now = new Date();
  await closeExpiredShadowRuns(adminClient, config.id, now);
  const { data: activeRuns, error: activeRunError } = await adminClient
    .from("v2_ingestion_runs")
    .select("id,status,lease_expires_at")
    .eq("source_config_id", config.id)
    .in("status", ["queued", "running"])
    .limit(1);
  if (activeRunError) throw activeRunError;
  if (activeRuns?.length) {
    const error = new Error("A shadow run is already active for this source");
    (error as any).code = "V2_RUN_ALREADY_ACTIVE";
    throw error;
  }
  const lease = createRunLease({ now, leaseMs: 30000, deadlineMs: Number(config.run_deadline_ms || 30000) });
  const triggerType = body.trigger_type === "automation" ? "automation" : "shadow";
  const { data: run, error: runError } = await adminClient.from("v2_ingestion_runs").insert({ source_config_id: config.id, mode: "shadow", trigger_type: triggerType, status: "running", attempt_count: 1, started_at: now.toISOString(), ...lease, details: { phase: "B", live_requests_allowed: true, customer_visible_writes: 0, promotion_allowed: false, routine_production: triggerType === "automation" } }).select("id").single();
  if (runError) {
    if (runError.code === "23505") {
      const error = new Error("A shadow run is already active for this source");
      (error as any).code = "V2_RUN_ALREADY_ACTIVE";
      throw error;
    }
    throw runError;
  }
  const headers = { "user-agent": "VerkRadar/2 shadow ingestion (+https://verkradar.is)" };
  let fetched: any;
  try {
    let text;
    let fetchedCount = 1;
    let duplicateCount = 0;
    let pagination = null;
    if ([THREE_SOURCE_KEYS.RIKISKAUP, THREE_SOURCE_KEYS.BORGARBYGGD].includes(config.source_key)) {
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
    if (config.source_key === THREE_SOURCE_KEYS.BORGARBYGGD) {
      candidates = applyBorgarbyggdSourceStatus(candidates, now);
    }
    const indexDiagnostics = getUtbodsvefurParserDiagnostics(candidates);
    if ([THREE_SOURCE_KEYS.BORGARBYGGD, THREE_SOURCE_KEYS.GARDABAER, THREE_SOURCE_KEYS.RIKISKAUP, THREE_SOURCE_KEYS.VEGAGERDIN, THREE_SOURCE_KEYS.ISAFJORDUR, THREE_SOURCE_KEYS.REYKJAVIK, ...Object.keys(UTBODSVEFUR_DETAIL_EXTRACTORS)].includes(config.source_key)) {
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
          : config.source_key === THREE_SOURCE_KEYS.GARDABAER
            ? extractGardabaerDetailMetadata
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
    const recoveryMetrics = {
      deadlines: candidates.filter((candidate) => Boolean(candidate.deadline)).length,
      references: candidates.filter((candidate) => Boolean(candidate.procurement_reference)).length,
      buyers: candidates.filter((candidate) => Boolean(candidate.buyer)).length,
      source_status_distribution: candidates.reduce((counts: Record<string, number>, candidate) => {
        const status = String(candidate?.safe_source_payload?.shadow_enrichment?.source_status || candidate?.safe_source_payload?.source_status || "unknown");
        counts[status] = (counts[status] || 0) + 1;
        return counts;
      }, {}),
    };
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
    const classificationMetrics: { stage_distribution: Record<string, number>; actionable: number; non_actionable: number; uncertain: number; strong_evidence: number; expired_or_completed_actionable: number } = { stage_distribution: {}, actionable: 0, non_actionable: 0, uncertain: 0, strong_evidence: 0, expired_or_completed_actionable: 0 };
    for (const observation of storedObservations) {
      const enrichment = observation.safe_source_payload?.shadow_enrichment || {};
      const classified = classificationColumns(classifyProcurementStage({ title: observation.title, body_text: observation.description, description: observation.description, buyer: observation.buyer, deadline: observation.deadline, publication_date: observation.publication_date, ...classificationContext, authoritative_metadata: { ...(observation.safe_source_payload || {}), ...enrichment } }));
      const { prediction, category } = applySourcePredictionPolicy(classified, observation, config, now);
      const promotionEvidence = derivePromotionEvidence(observation, prediction);
      const stage = String(prediction.procurement_stage || "uncertain");
      classificationMetrics.stage_distribution[stage] = (classificationMetrics.stage_distribution[stage] || 0) + 1;
      if (prediction.actionable_for_suppliers === true) classificationMetrics.actionable += 1;
      else classificationMetrics.non_actionable += 1;
      if (prediction.requires_admin_review === true || stage === "uncertain") classificationMetrics.uncertain += 1;
      if (promotionEvidence.strong_procurement_evidence === true) classificationMetrics.strong_evidence += 1;
      const sourceStatus = String(enrichment.source_status || observation.safe_source_payload?.source_status || "unknown");
      if (prediction.actionable_for_suppliers === true && (sourceStatus === "completed" || (observation.deadline && String(observation.deadline).slice(0, 10) < now.toISOString().slice(0, 10)))) classificationMetrics.expired_or_completed_actionable += 1;
      const { error: predictionError } = await adminClient.from("v2_ingestion_observations").update({ predicted_procurement_stage: prediction.procurement_stage, predicted_actionable: prediction.actionable_for_suppliers, predicted_confidence: prediction.classification_confidence, predicted_reason: prediction.classification_reason, predicted_requires_admin_review: prediction.requires_admin_review, enrichment_status: enrichment.enrichment_status || null, shadow_quality_category: category, ...promotionEvidence }).eq("id", observation.id);
      if (predictionError) throw predictionError;
    }
    const comparisonMetrics: { state_distribution: Record<string, number>; match_type_distribution: Record<string, number>; errors: number; baseline_unavailable: number; fuzzy_only: number } = { state_distribution: {}, match_type_distribution: {}, errors: 0, baseline_unavailable: 0, fuzzy_only: 0 };
    if (config.source_key === THREE_SOURCE_KEYS.BORGARBYGGD) {
      for (const observation of storedObservations) {
        const { data: comparison, error: comparisonError } = await adminClient.rpc("compare_borgarbyggd_shadow_observation", { target_observation_id: observation.id });
        if (comparisonError) { comparisonMetrics.errors += 1; parserErrors.push(String(comparisonError.code || comparisonError.message || "V2_COMPARISON_ERROR")); continue; }
        const state = String(comparison?.comparison_state || "baseline_unavailable");
        const matchType = String(comparison?.match_type || "none");
        comparisonMetrics.state_distribution[state] = (comparisonMetrics.state_distribution[state] || 0) + 1;
        comparisonMetrics.match_type_distribution[matchType] = (comparisonMetrics.match_type_distribution[matchType] || 0) + 1;
        if (state === "baseline_unavailable") comparisonMetrics.baseline_unavailable += 1;
        if (matchType === "fuzzy_review_candidate") comparisonMetrics.fuzzy_only += 1;
      }
    } else {
      const { data: legacy, error: legacyError } = await adminClient.from(LEGACY_TABLE)
        .select("id,source_id,external_id,url,title,description,buyer,deadline,published_date,location,raw_payload")
        .eq("source_id", config.source_id);
      if (legacyError) throw legacyError;
      const legacyComparisonRows = (legacy || []).map((row) => ({
        ...row,
        canonical_url: row.url,
        publication_date: row.published_date,
        procurement_reference: row.raw_payload?.procurement_reference || row.raw_payload?.reference_number || row.raw_payload?.notice_number || null,
      }));
      for (const observation of storedObservations) {
        const comparison = await compareObservationToLegacy(observation, legacyComparisonRows);
        const { comparison_state, ...comparisonRecord } = comparison;
        const { error: comparisonError } = await adminClient.from("v2_legacy_comparisons").upsert({ observation_id: observation.id, ...comparisonRecord }, { onConflict: "observation_id,legacy_opportunity_id,match_type" });
        if (comparisonError) throw comparisonError;
        const state = comparison_state || (comparison.match_type === "v2_only" ? "v2_only" : comparison.match_type === "fuzzy_review_candidate" ? "review_required" : "legacy_match");
        const { error: stateError } = await adminClient.from("v2_ingestion_observations").update({ comparison_state: state }).eq("id", observation.id);
        if (stateError) throw stateError;
        comparisonMetrics.state_distribution[state] = (comparisonMetrics.state_distribution[state] || 0) + 1;
        comparisonMetrics.match_type_distribution[comparison.match_type] = (comparisonMetrics.match_type_distribution[comparison.match_type] || 0) + 1;
        if (state === "baseline_unavailable") comparisonMetrics.baseline_unavailable += 1;
        if (comparison.match_type === "fuzzy_review_candidate") comparisonMetrics.fuzzy_only += 1;
      }
    }
    const finished = new Date().toISOString();
    const qualityBlockers: string[] = [];
    if (config.source_key === THREE_SOURCE_KEYS.BORGARBYGGD) {
      if (!pagination || pagination.reported_total_pages === null || pagination.fetched_pages !== pagination.reported_total_pages || pagination.unique_items !== candidates.length) qualityBlockers.push("pagination_incomplete");
      if (recoveryMetrics.buyers !== candidates.length) qualityBlockers.push("buyer_recovery_incomplete");
      if (classificationMetrics.expired_or_completed_actionable !== 0) qualityBlockers.push("expired_or_completed_actionable");
      if (classificationMetrics.actionable > recoveryMetrics.deadlines || classificationMetrics.actionable > classificationMetrics.strong_evidence) qualityBlockers.push("actionable_metadata_incomplete");
      if (comparisonMetrics.errors !== 0 || comparisonMetrics.baseline_unavailable !== 0) qualityBlockers.push("comparison_incomplete");
    }
    const quality = { healthy: qualityBlockers.length === 0, blockers: qualityBlockers };
    const qualityBlocked = qualityBlockers.length > 0;
    const runStatus = zeroItem.suspicious || qualityBlocked ? "quarantined" : invalidCount ? "partial" : "succeeded";
    const runErrorCode = zeroItem.reason || (qualityBlocked ? "V2_BORGARBYGGD_QUALITY_GATE" : null);
    const runErrorMessage = zeroItem.suspicious ? "HTTP success but zero parsed items" : qualityBlocked ? `Borgarbyggð quality gate blocked: ${qualityBlockers.join(", ")}` : null;
    const parserHealth = buildShadowParserHealth({ config, fetched: fetchedCount, parsed: candidates.length, valid: validCount, invalid: invalidCount, duplicates: duplicateCount, parserErrors, enrichment: enrichmentMetrics, suspiciousZero: zeroItem.suspicious, pagination, classification: classificationMetrics, comparison: comparisonMetrics, quality, indexDiagnostics, recovery: recoveryMetrics });
    const details = { phase: "B", live_requests_allowed: true, customer_visible_writes: 0, promotion_allowed: false, promote_count: 0, pagination, index_diagnostics: indexDiagnostics, enrichment: enrichmentMetrics, classification: classificationMetrics, comparison: comparisonMetrics, quality, recovery: recoveryMetrics };
    const { error: finalizeError } = await adminClient.from("v2_ingestion_runs").update({ status: runStatus, fetched_count: fetchedCount, parsed_count: candidates.length, observation_count: observations.length, invalid_count: invalidCount, duplicate_count: duplicateCount, suspicious_zero_items: zeroItem.suspicious, error_count: parserErrors.length + (zeroItem.suspicious || qualityBlocked ? 1 : 0), error_code: runErrorCode, error_message: runErrorMessage, details, finished_at: finished, lease_expires_at: finished, updated_at: finished }).eq("id", run.id);
    if (finalizeError) throw finalizeError;
    const { error: healthUpdateError } = await adminClient.from("v2_source_health").upsert({ source_config_id: config.id, status: runStatus === "succeeded" ? "healthy" : "degraded", circuit_state: zeroItem.circuit_should_open || qualityBlocked ? "open" : "closed", consecutive_zero_item_runs: zeroItem.consecutive_zero_item_runs, last_run_id: run.id, last_run_at: finished, last_success_at: runStatus === "succeeded" ? finished : health?.last_success_at || null, last_shadow_at: finished, last_http_status: fetched.response.status, last_latency_ms: fetched.latencyMs, last_observation_count: observations.length, last_error_code: runErrorCode, last_error_message: runErrorMessage, parser_health: parserHealth, updated_at: finished }, { onConflict: "source_config_id" });
    if (healthUpdateError) throw healthUpdateError;
    return json({ ok: runStatus === "succeeded", phase: "B", mode: "shadow", run_id: run.id, source: config.display_name, status: runStatus, fetched: fetchedCount, parsed: candidates.length, valid: validCount, invalid: invalidCount, duplicates: duplicateCount, observations: observations.length, enrichment: enrichmentMetrics, pagination, live_requests_made: fetchedCount + enrichmentMetrics.attempted, customer_visible_writes: 0, promote_count: 0, latency_ms: Date.now() - started }, runStatus === "succeeded" ? 200 : 207);
  } catch (error) {
    const code = errorCode(error);
    await adminClient.from("v2_ingestion_runs").update({ status: code === "V2_RUN_DEADLINE" ? "timed_out" : "failed", error_count: 1, error_code: code || "V2_SHADOW_ERROR", error_message: errorMessage(error), finished_at: new Date().toISOString() }).eq("id", run.id);
    throw error;
  }
}

async function runReykjavikRoutineProduction({ body, adminClient }: { body: Record<string, unknown>; adminClient: any }) {
  if (String(body.source_key || "") !== REYKJAVIK_SOURCE_KEY) {
    return json({ error: "Only Reykjavík routine production is allowlisted", code: "V2_ROUTINE_SOURCE_NOT_ALLOWED" }, 403);
  }
  const { data: config, error: configError } = await adminClient.from("v2_source_configs").select("*").eq("source_key", REYKJAVIK_SOURCE_KEY).single();
  if (configError) throw configError;
  if (config.routine_production_enabled !== true || config.mode !== "shadow" || config.promotion_approved === true
      || config.production_canary_enabled === true || config.release_feature_enabled === true || config.release_approved === true) {
    return json({ error: "Reykjavík routine production is disabled or the source state is unsafe", code: "V2_ROUTINE_SOURCE_DISABLED" }, 409);
  }
  const runResponse = await runShadow({ body: { ...body, trigger_type: "automation" }, config, adminClient });
  const runResult = await runResponse.clone().json();
  if (!runResponse.ok || runResult?.status !== "succeeded" || !runResult?.run_id) return runResponse;
  const { data: admission, error: admissionError } = await adminClient.rpc("admit_reykjavik_v2_run", {
    target_run_id: runResult.run_id,
    runtime_project_ref: PRODUCTION_PROJECT_REF,
  });
  if (admissionError) throw admissionError;
  return json({ ...runResult, action: "run_reykjavik_production", routine_admission: admission, customer_visible_writes: 0, matching_triggered: false, downstream_triggered: false });
}

async function runGardabaerRoutineProduction({ body, adminClient }: { body: Record<string, unknown>; adminClient: any }) {
  if (String(body.source_key || "") !== GARDABAER_SOURCE_KEY) {
    return json({ error: "Only Garðabær routine production is allowed by this action", code: "V2_ROUTINE_SOURCE_NOT_ALLOWED" }, 403);
  }
  const { data: config, error: configError } = await adminClient.from("v2_source_configs").select("*").eq("source_key", GARDABAER_SOURCE_KEY).single();
  if (configError) throw configError;
  if (config.routine_production_enabled !== true || config.mode !== "shadow" || config.promotion_approved === true
      || config.production_canary_enabled === true || config.release_feature_enabled === true || config.release_approved === true) {
    return json({ error: "Garðabær routine production is disabled or the source state is unsafe", code: "V2_ROUTINE_SOURCE_DISABLED" }, 409);
  }
  const runResponse = await runShadow({ body: { ...body, trigger_type: "automation" }, config, adminClient });
  const runResult = await runResponse.clone().json();
  if (!runResponse.ok || runResult?.status !== "succeeded" || !runResult?.run_id) return runResponse;
  const { data: admission, error: admissionError } = await adminClient.rpc("admit_gardabaer_v2_run", {
    target_run_id: runResult.run_id,
    runtime_project_ref: PRODUCTION_PROJECT_REF,
  });
  if (admissionError) throw admissionError;
  return json({ ...runResult, action: "run_gardabaer_production", routine_admission: admission, customer_visible_writes: 0, matching_triggered: false, downstream_triggered: false });
}

async function setReykjavikRoutineProduction({ body, adminClient, adminUserId, isProduction }: { body: Record<string, unknown>; adminClient: any; adminUserId: string; isProduction: boolean }) {
  if (!isProduction || String(body.source_key || "") !== REYKJAVIK_SOURCE_KEY) {
    return json({ error: "Reykjavík routine controls are production-only", code: "V2_ROUTINE_ENVIRONMENT_BLOCKED" }, 403);
  }
  if (typeof body.enabled !== "boolean") return json({ error: "An explicit enabled boolean is required", code: "V2_ROUTINE_VALUE_REQUIRED" }, 400);
  const reason = String(body.reason || "").trim();
  if (!reason) return json({ error: "An audit reason is required", code: "V2_ROUTINE_REASON_REQUIRED" }, 400);
  const { data, error } = await adminClient.rpc("set_reykjavik_routine_production", {
    enabled_value: body.enabled,
    acting_admin_id: adminUserId,
    reason_text: reason,
  });
  if (error) throw error;
  return json({ ok: true, action: "set_reykjavik_routine_production", source: data, automatic_approval: false, downstream_triggered: false });
}

async function setGardabaerRoutineProduction({ body, adminClient, adminUserId, isProduction }: { body: Record<string, unknown>; adminClient: any; adminUserId: string; isProduction: boolean }) {
  if (!isProduction || String(body.source_key || "") !== GARDABAER_SOURCE_KEY) {
    return json({ error: "Garðabær routine controls are production-only", code: "V2_ROUTINE_ENVIRONMENT_BLOCKED" }, 403);
  }
  if (typeof body.enabled !== "boolean") return json({ error: "An explicit enabled boolean is required", code: "V2_ROUTINE_VALUE_REQUIRED" }, 400);
  const reason = String(body.reason || "").trim();
  if (!reason) return json({ error: "An audit reason is required", code: "V2_ROUTINE_REASON_REQUIRED" }, 400);
  const { data, error } = await adminClient.rpc("set_gardabaer_routine_production", {
    enabled_value: body.enabled,
    acting_admin_id: adminUserId,
    reason_text: reason,
  });
  if (error) throw error;
  return json({ ok: true, action: "set_gardabaer_routine_production", source: data, automatic_approval: false, downstream_triggered: false });
}

async function approvePromotion({ body, adminClient, adminUserId }: { body: Record<string, unknown>; adminClient: any; adminUserId: string }) {
  const observationId = requireSingleObservationId(body);
  const { data, error } = await adminClient.rpc("approve_v2_observation_for_promotion", {
    target_observation_id: observationId,
    approving_admin_id: adminUserId,
    approval_note_text: String(body.note || "").trim() || null,
  });
  if (error) throw error;
  return json({ ok: true, action: "approve_promotion", canary: true, automatic: false, observation: Array.isArray(data) ? data[0] : data });
}

async function setSourcePromotionApproval({ body, adminClient, adminUserId }: { body: Record<string, unknown>; adminClient: any; adminUserId: string }) {
  const sourceKey = String(body.source_key || "").trim();
  if (!STAGING_PHASE_C_SOURCES.has(sourceKey)) return json({ error: "Source is not approved for a manual Phase C canary", code: "V2_C_SOURCE_NOT_ALLOWED" }, 403);
  if (typeof body.approved !== "boolean") {
    return json({ error: "An explicit approved boolean is required", code: "V2_SOURCE_APPROVAL_VALUE_REQUIRED" }, 400);
  }
  const { data, error } = await adminClient.rpc("set_v2_source_production_approval", {
    target_source_key: sourceKey,
    approved_value: body.approved === true,
    approving_admin_id: adminUserId,
    reason_text: String(body.reason || "").trim() || null,
  });
  if (error) throw error;
  return json({ ok: true, action: "set_source_promotion_approval", source: Array.isArray(data) ? data[0] : data, manual_only: true, automatic: false });
}

async function setReykjavikProductionCanaryEnabled({ body, adminClient, adminUserId }: { body: Record<string, unknown>; adminClient: any; adminUserId: string }) {
  const sourceKey = String(body.source_key || "").trim();
  if (sourceKey !== REYKJAVIK_SOURCE_KEY) {
    return json({ error: "Only Reykjavík is allowlisted for the first production canary", code: "V2_PRODUCTION_CANARY_SOURCE_NOT_ALLOWED" }, 403);
  }
  if (typeof body.enabled !== "boolean") {
    return json({ error: "An explicit enabled boolean is required", code: "V2_PRODUCTION_CANARY_VALUE_REQUIRED" }, 400);
  }
  if (body.enabled === true && String(body.confirmation || "") !== PRODUCTION_CANARY_CONFIRMATION) {
    return json({ error: "Exact production canary confirmation is required", code: "V2_PRODUCTION_CANARY_CONFIRMATION_REQUIRED" }, 400);
  }
  const { data, error } = await adminClient.rpc("set_reykjavik_production_canary_enabled", {
    enabled_value: body.enabled,
    acting_admin_id: adminUserId,
  });
  if (error) throw error;
  const state = Array.isArray(data) ? data[0] : data;
  return json({
    ok: true,
    action: "set_reykjavik_production_canary_enabled",
    source_key: REYKJAVIK_SOURCE_KEY,
    state,
    promotion_executed: false,
    release_enabled: false,
    downstream_triggered: false,
  });
}

async function promoteCanary({ body, adminClient, adminUserId }: { body: Record<string, unknown>; adminClient: any; adminUserId: string }) {
  const observationId = requireSingleObservationId(body);
  const { data, error } = await adminClient.rpc("promote_v2_observation", { target_observation_id: observationId, promoting_admin_id: adminUserId });
  if (error) throw error;
  const result = Array.isArray(data) ? data[0] : data;
  if (result?.promotion_status !== "promoted") {
    return json({ ok: false, action: "promote_canary", canary: true, quarantined: false, error: "Promotion blocked by the atomic eligibility or identity gate", code: result?.block_code || "V2_PROMOTION_BLOCKED", opportunity_created: false, provenance_created: false, ...result }, 409);
  }
  const assertions = result.opportunity_id
    ? await loadCanaryAssertions(adminClient, String(result.opportunity_id))
    : null;
  return json({ ok: true, action: "promote_canary", canary: true, quarantined: result.created === true, downstream_triggered: false, ...result, assertions });
}

async function approveRelease({ body, adminClient, adminUserId }: { body: Record<string, unknown>; adminClient: any; adminUserId: string }) {
  const observationId = requireSingleObservationId(body);
  const reason = String(body.reason || "").trim();
  if (!reason) return json({ error: "A release approval reason is required", code: "V2_RELEASE_REASON_REQUIRED" }, 400);
  const { data, error } = await adminClient.rpc("approve_v2_canary_release", { target_observation_id: observationId, approving_admin_id: adminUserId, reason_text: reason });
  if (error) throw error;
  return json({ ok: true, action: "approve_release", release: data, automatic: false });
}

async function setReykjavikReleaseEnabled({ body, adminClient, adminUserId }: { body: Record<string, unknown>; adminClient: any; adminUserId: string }) {
  const sourceKey = String(body.source_key || "").trim();
  const observationId = requireSingleObservationId(body);
  const opportunityId = String(body.opportunity_id || "").trim();
  if (sourceKey !== REYKJAVIK_SOURCE_KEY) return json({ error: "Only the Reykjavík production canary may enable release controls", code: "V2_RELEASE_SOURCE_NOT_ALLOWED" }, 403);
  if (!isUuid(opportunityId)) return json({ error: "Exactly one valid opportunity_id is required", code: "V2_SINGLE_OPPORTUNITY_REQUIRED" }, 400);
  if (typeof body.enabled !== "boolean") return json({ error: "An explicit enabled boolean is required", code: "V2_RELEASE_ENABLE_VALUE_REQUIRED" }, 400);
  if (body.enabled === true && String(body.confirmation || "") !== PRODUCTION_RELEASE_CONFIRMATION) {
    return json({ error: "Exact release-control confirmation is required", code: "V2_RELEASE_ENABLE_CONFIRMATION_REQUIRED" }, 400);
  }
  const { data, error } = await adminClient.rpc("set_reykjavik_canary_release_enabled", {
    target_observation_id: observationId,
    target_opportunity_id: opportunityId,
    enabled_value: body.enabled,
    acting_admin_id: adminUserId,
  });
  if (error) throw error;
  return json({ ok: true, action: "set_reykjavik_release_enabled", release_controls: data, release_executed: false, downstream_triggered: false });
}

async function releaseCanary({ body, adminClient, adminUserId }: { body: Record<string, unknown>; adminClient: any; adminUserId: string }) {
  const observationId = requireSingleObservationId(body);
  const reason = String(body.reason || "").trim();
  if (!reason) return json({ error: "A release reason is required", code: "V2_RELEASE_REASON_REQUIRED" }, 400);
  const { data, error } = await adminClient.rpc("release_v2_canary", { target_observation_id: observationId, releasing_admin_id: adminUserId, reason_text: reason });
  if (error) throw error;
  return json({ ok: true, action: "release_canary", release: data, matching_triggered: false, communication_hold: true });
}

async function clearCommunicationHold({ body, adminClient, adminUserId }: { body: Record<string, unknown>; adminClient: any; adminUserId: string }) {
  const sourceKey = String(body.source_key || "").trim();
  const observationId = requireSingleObservationId(body);
  const opportunityId = String(body.opportunity_id || "").trim();
  const reason = String(body.reason || "").trim();
  if (sourceKey !== REYKJAVIK_SOURCE_KEY
      || observationId !== REYKJAVIK_HOLD_CLEAR_OBSERVATION_ID
      || opportunityId !== REYKJAVIK_HOLD_CLEAR_OPPORTUNITY_ID) {
    return json({ error: "Only the exact released Reykjavík production canary may clear communication hold", code: "V2_COMMUNICATION_HOLD_TARGET_NOT_ALLOWED" }, 403);
  }
  if (!isUuid(opportunityId)) return json({ error: "Exactly one valid opportunity_id is required", code: "V2_SINGLE_OPPORTUNITY_REQUIRED" }, 400);
  if (!reason) return json({ error: "A communication-hold audit reason is required", code: "V2_COMMUNICATION_HOLD_REASON_REQUIRED" }, 400);
  if (String(body.confirmation || "") !== COMMUNICATION_HOLD_CLEAR_CONFIRMATION) {
    return json({ error: "Exact communication-hold confirmation is required", code: "V2_COMMUNICATION_HOLD_CONFIRMATION_REQUIRED" }, 400);
  }
  const { data, error } = await adminClient.rpc("clear_reykjavik_v2_canary_communication_hold", {
    target_observation_id: observationId,
    target_opportunity_id: opportunityId,
    clearing_admin_id: adminUserId,
    reason_text: reason,
    runtime_project_ref: PRODUCTION_PROJECT_REF,
  });
  if (error) throw error;
  return json({
    ok: true,
    action: "clear_communication_hold",
    hold_clear: data,
    assertions: await loadCanaryAssertions(adminClient, opportunityId),
    matching_triggered: false,
    downstream_triggered: false,
  });
}

async function disableReleasedCanary({ body, adminClient, adminUserId }: { body: Record<string, unknown>; adminClient: any; adminUserId: string }) {
  const observationId = requireSingleObservationId(body);
  const reason = String(body.reason || "").trim();
  if (!reason) return json({ error: "A disable reason is required", code: "V2_DISABLE_REASON_REQUIRED" }, 400);
  const { data, error } = await adminClient.rpc("disable_released_v2_canary", { target_observation_id: observationId, disabling_admin_id: adminUserId, reason_text: reason });
  if (error) throw error;
  return json({ ok: true, action: "disable_released_canary", disable: data, deleted: false });
}

async function isPhaseCProductionEnabled(adminClient: any) {
  const { data, error } = await adminClient.from("automation_settings").select("value").eq("key", "phase_c_production_enabled").maybeSingle();
  if (error) throw error;
  return data?.value === true || data?.value === "true";
}

async function isPhaseCReleaseEnabled(adminClient: any) {
  const { data, error } = await adminClient.from("automation_settings").select("value").eq("key", "phase_c_release_enabled").maybeSingle();
  if (error) throw error;
  return data?.value === true || data?.value === "true";
}

async function closeExpiredShadowRuns(adminClient: any, sourceConfigId: string, now: Date) {
  const timestamp = now.toISOString();
  const { error } = await adminClient
    .from("v2_ingestion_runs")
    .update({
      status: "timed_out",
      error_count: 1,
      error_code: "V2_LEASE_EXPIRED",
      error_message: "Run lease expired before completion.",
      finished_at: timestamp,
      lease_expires_at: timestamp,
      updated_at: timestamp,
    })
    .eq("source_config_id", sourceConfigId)
    .in("status", ["queued", "running"])
    .lt("lease_expires_at", timestamp);
  if (error) throw error;
}

async function phaseCCapabilities({ adminClient, isProduction }: { adminClient: any; isProduction: boolean }) {
  const enabled = isProduction ? await isPhaseCProductionEnabled(adminClient) : true;
  const { data: releaseSetting } = await adminClient.from("automation_settings").select("value").eq("key", "phase_c_release_enabled").maybeSingle();
  return json({ ok: true, action: "phase_c_capabilities", production: isProduction, enabled, release_enabled: releaseSetting?.value === true || releaseSetting?.value === "true", single_observation_only: true, bulk: false, automatic: false });
}

async function rollbackCanary({ body, adminClient, adminUserId }: { body: Record<string, unknown>; adminClient: any; adminUserId: string }) {
  const observationId = requireSingleObservationId(body);
  const reason = String(body.reason || "").trim();
  if (!reason) return json({ error: "A rollback reason is required", code: "V2_ROLLBACK_REASON_REQUIRED" }, 400);
  const { data, error } = await adminClient.rpc("rollback_v2_canary_promotion", {
    target_observation_id: observationId,
    rollback_admin_id: adminUserId,
    rollback_reason_text: reason,
  });
  if (error) throw error;
  return json({ ok: true, action: "rollback_canary", canary: true, rollback: Array.isArray(data) ? data[0] : data });
}

async function canaryAssertions({ body, adminClient }: { body: Record<string, unknown>; adminClient: any }) {
  const opportunityId = String(body.opportunity_id || "").trim();
  if (!isUuid(opportunityId)) return json({ error: "Exactly one valid opportunity_id is required", code: "V2_SINGLE_OPPORTUNITY_REQUIRED" }, 400);
  const observationId = String(body.observation_id || "").trim();
  let releasePreflight = null;
  if (observationId) {
    if (!isUuid(observationId)) return json({ error: "A valid observation_id is required", code: "V2_SINGLE_OBSERVATION_REQUIRED" }, 400);
    const { data, error } = await adminClient.rpc("v2_reykjavik_release_preflight", {
      target_observation_id: observationId,
      target_opportunity_id: opportunityId,
      require_release_enabled: true,
    });
    if (error) throw error;
    releasePreflight = data;
  }
  return json({ ok: true, action: "canary_assertions", opportunity_id: opportunityId, assertions: await loadCanaryAssertions(adminClient, opportunityId), release_preflight: releasePreflight });
}

async function loadCanaryAssertions(adminClient: any, opportunityId: string) {
  const { data, error } = await adminClient.rpc("v2_canary_downstream_assertions", { target_opportunity_id: opportunityId });
  if (error) throw error;
  return data;
}

function requireSingleObservationId(body: Record<string, unknown>) {
  const observationId = String(body.observation_id || "").trim();
  if (!isUuid(observationId) || Array.isArray(body.observation_ids)) {
    const error = new Error("Exactly one valid observation_id is required");
    (error as any).code = "V2_SINGLE_OBSERVATION_REQUIRED";
    throw error;
  }
  return observationId;
}

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
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
