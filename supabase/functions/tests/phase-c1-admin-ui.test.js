import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import { getKnownCanaryEligibility, renderAdminV2IngestionPanel } from "../../../src/pages/adminV2Ingestion.js";
import { invokeAdminV2Action, isPhaseC1StagingRuntime } from "../../../src/services/adminV2Ingestion.js";

const escapeHtml = (value) => String(value ?? "");
const formatDateTime = (value) => String(value || "");

function row(overrides = {}) {
  return {
    source_key: "reykjavik-utbod-v2",
    display_name: "Reykjavíkurborg útboð v2",
    mode: "shadow",
    promotion_approved: false,
    parser_name: "reykjavik-html-index",
    parser_version: "1.0.0",
    health: {
      status: "healthy",
      circuit_state: "closed",
      parser_health: { parser_errors: [], suspicious_zero_items: false, enrichment: { failed: 0 } },
    },
    latestShadowRun: { status: "succeeded", finished_at: "2026-08-27T16:32:01Z", error_count: 0, suspicious_zero_items: false },
    phaseCCanary: {
      observation: {
        id: "a5ded8dc-a745-4297-9dc7-e2783b374630",
        procurement_reference: "16200",
        title: "16200 Rammasamningur um mötuneytisþjónustu SFS",
        buyer: "Skóla- og frístundasvið Reykjavíkurborgar",
        deadline: "2026-10-06",
        canonical_url: "https://reykjavik.is/utbod/16200-rammasamningur-um-motuneytisthjonustu-sfs",
        validation_state: "valid",
        comparison_state: "baseline_unavailable",
        promotion_state: "not_eligible",
        promoted_opportunity_id: null,
        predicted_procurement_stage: "open_competition",
        predicted_actionable: true,
        predicted_confidence: 1,
        predicted_requires_admin_review: false,
        strong_procurement_evidence: true,
        deadline_evidence: "explicit_source",
        promotion_enrichment_status: "succeeded",
        approved_for_promotion: false,
      },
      provenance: null,
      opportunity: null,
    },
    ...overrides,
  };
}

function render(options = {}) {
  return renderAdminV2IngestionPanel({ rows: [row(options.row)], escapeHtml, formatDateTime, controlsEnabled: true, canaryControlsEnabled: options.canaryControlsEnabled === true });
}

test("Phase C1 runtime gate accepts only the staging project host", () => {
  assert.equal(isPhaseC1StagingRuntime("https://ipixuxznqtrcdpzoxric.supabase.co"), true);
  assert.equal(isPhaseC1StagingRuntime("https://asojxjbsgqbfpbepojzh.supabase.co"), false);
  assert.equal(isPhaseC1StagingRuntime("https://ipixuxznqtrcdpzoxric.supabase.co.evil.example"), false);
  assert.equal(isPhaseC1StagingRuntime(""), false);
});

test("canary controls are absent without staging-admin render authorization", () => {
  assert.doesNotMatch(render(), /Phase C canary/);
  assert.doesNotMatch(render(), /v2-c1-promote/);
});

test("staging admin sees the fixed Reykjavík observation with promotion disabled before approvals", () => {
  const html = render({ canaryControlsEnabled: true });
  assert.match(html, /Phase C canary — staging only/);
  assert.match(html, /a5ded8dc-a745-4297-9dc7-e2783b374630/);
  assert.match(html, /16200 Rammasamningur um mötuneytisþjónustu SFS/);
  assert.match(html, /data-action="v2-c1-approve-source"/);
  assert.match(html, /data-action="v2-c1-approve-observation"[^>]*disabled/);
  assert.match(html, /data-action="v2-c1-promote"[^>]*disabled/);
});

test("promotion becomes enabled only after source and observation approvals plus known gates", () => {
  const approved = row({ mode: "promote", promotion_approved: true });
  approved.phaseCCanary.observation = { ...approved.phaseCCanary.observation, approved_for_promotion: true, approved_at: "2026-08-27T20:00:00Z", promotion_state: "eligible" };
  assert.equal(getKnownCanaryEligibility(approved, approved.phaseCCanary.observation, new Date("2026-08-27T20:00:00Z")).ready, true);
  const html = renderAdminV2IngestionPanel({ rows: [approved], escapeHtml, formatDateTime, controlsEnabled: true, canaryControlsEnabled: true });
  assert.match(html, /data-action="v2-c1-promote"/);
  assert.doesNotMatch(html, /data-action="v2-c1-promote"[^>]*disabled/);
});

test("quarantined state exposes assertions and rollback but never release or downstream triggers", () => {
  const promoted = row({ mode: "promote", promotion_approved: true });
  promoted.phaseCCanary.observation.promoted_opportunity_id = "11111111-1111-4111-8111-111111111111";
  promoted.phaseCCanary.observation.promotion_state = "promoted";
  promoted.phaseCCanary.provenance = { provenance_type: "v2_created" };
  promoted.phaseCCanary.opportunity = { id: "11111111-1111-4111-8111-111111111111", status: "hidden", raw_payload: { promotion_quarantine: "phase_c_canary", hidden_from_reports: true, admin_report_status: "hidden" } };
  const html = renderAdminV2IngestionPanel({ rows: [promoted], escapeHtml, formatDateTime, controlsEnabled: true, canaryControlsEnabled: true });
  assert.match(html, /QUARANTINED CANARY/);
  assert.match(html, /data-action="v2-c1-assertions"/);
  assert.match(html, /data-action="v2-c1-rollback"/);
  assert.doesNotMatch(html, /data-action="[^"]*(release|match|ai-review|report|send)/i);
});

test("page-load service is select-only and canary mutations use authenticated Edge actions", async () => {
  const source = await readFile(new URL("../../../src/services/adminV2Ingestion.js", import.meta.url), "utf8");
  const loader = source.slice(source.indexOf("export async function loadAdminV2IngestionOverview"), source.indexOf("export function buildAdminV2OverviewRows"));
  assert.doesNotMatch(loader, /\.functions\.invoke|\.(insert|update|upsert|delete|rpc)\s*\(/);
  assert.match(source, /supabase\.functions\.invoke\("import-source-connectors-v2"/);
  assert.doesNotMatch(source, /service[_-]?role/i);
});

test("authenticated Edge errors are surfaced with HTTP status, code, and message", async () => {
  const response = new Response(JSON.stringify({ error: "Admin access required", code: "V2_ADMIN_REQUIRED" }), { status: 403, headers: { "content-type": "application/json" } });
  const supabase = { functions: { invoke: async () => ({ data: null, error: { message: "Edge Function returned a non-2xx status code", context: response } }) } };
  await assert.rejects(
    () => invokeAdminV2Action(supabase, "approve_promotion", null, null, { observation_id: "a5ded8dc-a745-4297-9dc7-e2783b374630" }),
    /HTTP 403.*V2_ADMIN_REQUIRED: Admin access required/,
  );
});

test("source approval action is staging-authenticated, Reykjavík-only, and manual", async () => {
  const edge = await readFile(new URL("../import-source-connectors-v2/index.ts", import.meta.url), "utf8");
  const route = edge.indexOf('body.action === "set_source_promotion_approval"');
  const auth = edge.indexOf('from("admin_users")');
  assert.ok(route > auth, "source approval must route after admin authentication");
  assert.match(edge, /sourceKey !== THREE_SOURCE_KEYS\.REYKJAVIK/);
  assert.match(edge, /promotion_approved: approved, mode: approved \? "promote" : "shadow"/);
  assert.match(edge, /manual_only: true, automatic: false/);
  assert.doesNotMatch(edge, /release_quarantine|promote_bulk/);
});
