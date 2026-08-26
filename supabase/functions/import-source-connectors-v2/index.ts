import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { createObservation } from "../_shared/ingestion-v2/contracts.js";
import { parseWithV2Adapter } from "../_shared/ingestion-v2/adapters/index.js";
import { assertCircuitAllowsRun, detectZeroItemAnomaly, nextCircuitState } from "../_shared/ingestion-v2/metrics.js";
import { assertRunDeadline, createRunLease, heartbeatLease } from "../_shared/ingestion-v2/run-control.js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

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
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return json({ ok: true });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let runId = "";
  try {
    const supabaseUrl = requiredEnv("SUPABASE_URL");
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
    const fixtureName = String(body.fixture || body.fixtureName || "").trim();
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
    console.error("V2 Phase A fixture run failed:", error);
    if (runId) await markRunFailed(requiredEnv("SUPABASE_URL"), requiredEnv("SUPABASE_SERVICE_ROLE_KEY"), runId, error);
    return json({ ok: false, phase: "A", fixture_only: true, customer_visible_writes: 0, error: errorMessage(error), code: errorCode(error) }, 500);
  }
});

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
