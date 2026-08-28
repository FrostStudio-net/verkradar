import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import { renderAdminV2IngestionPanel } from "../../../src/pages/adminV2Ingestion.js";
import { invokeAdminV2Action, isPhaseC1StagingRuntime, PHASE_C2_CASES } from "../../../src/services/adminV2Ingestion.js";

const escapeHtml = (value) => String(value ?? "");
const formatDateTime = (value) => String(value || "");

function observation(definition) {
  const details = {
    A: ["16322", "16322 Mötuneytisþjónusta í stjórnsýsluhúsum Reykjavíkurborgar. EES", "2026-09-15", "open_competition", "baseline_unavailable"],
    B: ["I0232", "Markaðskönnun – RFI Rafrænt stjórnunar- og eftirlitskerfi fyrir Ísótópastofu", "2026-09-07", "market_consultation", "legacy_match"],
    C: ["16347", "16347 Markaðskönnun (RFI) fyrir nemenda- og námsumsjónarkerfi SFS", "2026-09-17", "market_consultation", "baseline_unavailable"],
  }[definition.case_key];
  return {
    id: definition.observation_id,
    procurement_reference: details[0], title: details[1], deadline: details[2],
    buyer: "Staging buyer", canonical_url: `https://example.test/${details[0]}`,
    validation_state: "valid", comparison_state: details[4], promotion_state: "not_eligible",
    promoted_opportunity_id: null, predicted_procurement_stage: details[3], predicted_actionable: true,
    predicted_confidence: 1, predicted_requires_admin_review: false, strong_procurement_evidence: true,
    deadline_evidence: "explicit_source", promotion_enrichment_status: "succeeded", approved_for_promotion: false,
  };
}

function rows() {
  return ["reykjavik-utbod-v2", "rikiskaup-utbod-v2"].map((sourceKey) => ({
    source_key: sourceKey,
    display_name: sourceKey === "reykjavik-utbod-v2" ? "Reykjavíkurborg útboð v2" : "Ríkiskaup útboð v2",
    mode: "shadow", promotion_approved: false, parser_name: "parser", parser_version: "1.0.0",
    health: { status: "healthy", circuit_state: "closed", parser_health: { parser_errors: [], suspicious_zero_items: false, enrichment: { failed: 0 } } },
    latestShadowRun: { status: "succeeded", finished_at: "2026-08-28T08:00:00Z", error_count: 0, suspicious_zero_items: false },
    phaseC2Cases: PHASE_C2_CASES.filter((item) => item.source_key === sourceKey).map((item) => ({ ...item, observation: observation(item), provenance: null, opportunity: null })),
  }));
}

function render(enabled = false, overrides = {}) {
  return renderAdminV2IngestionPanel({ rows: rows(), escapeHtml, formatDateTime, controlsEnabled: enabled, phaseC2ControlsEnabled: enabled, ...overrides });
}

test("Phase C runtime gate accepts only staging and rejects production", () => {
  assert.equal(isPhaseC1StagingRuntime("https://ipixuxznqtrcdpzoxric.supabase.co"), true);
  assert.equal(isPhaseC1StagingRuntime("https://asojxjbsgqbfpbepojzh.supabase.co"), false);
  assert.equal(isPhaseC1StagingRuntime("https://ipixuxznqtrcdpzoxric.supabase.co.evil.example"), false);
});

test("production/non-admin render has no Phase C2 controls", () => {
  const html = render(false);
  assert.doesNotMatch(html, /Phase C2 — staging only/);
  assert.doesNotMatch(html, /v2-c2-promote/);
  assert.doesNotMatch(html, /v2-c2-rollback|v2-c2-clear-approval/);
});

test("staging admin sees exactly the three prepared C2 observations", () => {
  const html = render(true);
  assert.match(html, /Phase C2 — staging only/);
  assert.equal((html.match(/data-case-card=/g) || []).length, 3);
  for (const definition of PHASE_C2_CASES) assert.match(html, new RegExp(definition.observation_id));
  assert.match(html, /16322 Mötuneytisþjónusta/);
  assert.match(html, /I0232/);
  assert.match(html, /16347 Markaðskönnun/);
  assert.doesNotMatch(html, /a5ded8dc-a745-4297-9dc7-e2783b374630/);
  assert.doesNotMatch(html, /data-action="[^\"]*(release|match|ai-review|report|send)/i);
});

test("promotion remains disabled before source and observation approval", () => {
  const html = render(true);
  assert.equal((html.match(/data-action="v2-c2-promote"[^>]*disabled/g) || []).length, 3);
});

test("source approval controls carry isolated source keys", async () => {
  const html = render(true);
  assert.match(html, /v2-c2-approve-source" data-source-key="reykjavik-utbod-v2"/);
  assert.match(html, /v2-c2-approve-source" data-source-key="rikiskaup-utbod-v2"/);
  const edge = await readFile(new URL("../import-source-connectors-v2/index.ts", import.meta.url), "utf8");
  assert.match(edge, /new Set\(\[THREE_SOURCE_KEYS\.REYKJAVIK, THREE_SOURCE_KEYS\.RIKISKAUP\]\)/);
  assert.match(edge, /\.eq\("source_key", sourceKey\)/);
});

test("Case C displays the exact fail-closed outcome without creating rows", () => {
  const caseC = PHASE_C2_CASES.find((item) => item.case_key === "C");
  const html = render(true, { phaseC2Results: { [caseC.observation_id]: { ok: false, code: "V2_FUZZY_REVIEW_REQUIRED", block_code: "V2_FUZZY_REVIEW_REQUIRED", created: false, provenance_attached: false } } });
  assert.match(html, /PROMOTION BLOCKED/);
  assert.match(html, /V2_FUZZY_REVIEW_REQUIRED/);
  assert.match(html, /Opportunity created<\/dt><dd>no/);
  assert.match(html, /Provenance created<\/dt><dd>no/);
});

test("cleanup controls are exact-case, manual, and enabled only for current C2 artifacts", () => {
  const cleanupRows = rows();
  for (const source of cleanupRows) {
    source.mode = "promote";
    source.promotion_approved = true;
    for (const item of source.phaseC2Cases) {
      item.observation.approved_for_promotion = true;
      if (item.case_key === "A" || item.case_key === "B") {
        item.observation.promotion_state = "promoted";
        item.observation.promoted_opportunity_id = item.case_key === "A"
          ? "acaec64d-81f6-4150-9df3-f66d952713b2"
          : "a416b17a-4249-41f7-9b14-51063ca9689e";
        item.provenance = { provenance_type: item.case_key === "A" ? "v2_created" : "existing_opportunity_matched", metadata: { opportunity_mutated: false } };
        item.opportunity = { id: item.observation.promoted_opportunity_id, raw_payload: item.case_key === "A" ? { promotion_quarantine: "phase_c_canary" } : {} };
      } else {
        item.observation.comparison_state = "review_required";
        item.observation.promotion_state = "review_required";
        item.observation.promotion_error = '[{"code":"V2_FUZZY_REVIEW_REQUIRED"}]';
      }
    }
  }
  const html = render(true, { rows: cleanupRows });
  assert.match(html, /data-action="v2-c2-rollback" data-observation-id="729459ca-3408-4004-a158-7b75f6c6c32f"[^>]*>Roll back Case A/);
  assert.match(html, /data-action="v2-c2-rollback" data-observation-id="d5a8f0eb-f55e-4b8c-b2c3-146a2eea0df1"[^>]*>Roll back Case B/);
  assert.match(html, /data-action="v2-c2-clear-approval" data-observation-id="9c6b7648-1685-4d9b-953e-6afdcba208a7"[^>]*>Clear manual approval/);
  assert.equal((html.match(/data-action="v2-c2-rollback"/g) || []).length, 2);
  assert.equal((html.match(/data-action="v2-c2-clear-approval"/g) || []).length, 1);
});

test("Case A/B reuse the fail-closed rollback and Case C clears approval fields only", async () => {
  const c0 = await readFile(new URL("../../migrations/20260827230000_phase_c0_promotion_safety.sql", import.meta.url), "utf8");
  assert.match(c0, /if provenance_row\.provenance_type = 'v2_created'.*V2_ROLLBACK_DOWNSTREAM_DEPENDENCIES.*delete from public\.opportunities/s);
  assert.match(c0, /else\s+delete from public\.opportunity_ingestion_provenance.*rollback_status := 'rolled_back_existing_match'/s);
  const cleanup = await readFile(new URL("../../migrations/20260828120000_phase_c2_cleanup_approval.sql", import.meta.url), "utf8");
  assert.match(cleanup, /9c6b7648-1685-4d9b-953e-6afdcba208a7/);
  assert.match(cleanup, /comparison_state is distinct from 'review_required'.*promotion_state is distinct from 'review_required'.*V2_FUZZY_REVIEW_REQUIRED/s);
  assert.match(cleanup, /V2_C2_CLEAR_APPROVAL_PROVENANCE_EXISTS/);
  const update = cleanup.slice(cleanup.indexOf("update public.v2_ingestion_observations"), cleanup.indexOf("where id = target_observation_id;", cleanup.indexOf("update public.v2_ingestion_observations")));
  assert.match(update, /approved_for_promotion = false/);
  assert.match(update, /approved_at = null/);
  assert.match(update, /approved_by = null/);
  assert.match(update, /approval_note = null/);
  assert.doesNotMatch(update, /comparison_state\s*=|promotion_state\s*=|promotion_error\s*=|promoted_opportunity_id\s*=/);
});

test("Case C cleanup Edge action is staging-admin routed and exact-observation scoped", async () => {
  const edge = await readFile(new URL("../import-source-connectors-v2/index.ts", import.meta.url), "utf8");
  const adminCheck = edge.indexOf('.from("admin_users")');
  const route = edge.indexOf('body.action === "clear_c2_review_approval"');
  assert.ok(route > adminCheck);
  assert.match(edge, /observationId !== PHASE_C2_CASE_C_OBSERVATION_ID/);
  assert.match(edge, /adminClient\.rpc\("clear_v2_c2_review_approval"/);
  assert.match(edge, /review_evidence_preserved: true/);
  assert.match(edge, /opportunity_mutated: false/);
  assert.match(edge, /provenance_mutated: false/);
});

test("page-load service is select-only and mutations use authenticated Edge actions", async () => {
  const source = await readFile(new URL("../../../src/services/adminV2Ingestion.js", import.meta.url), "utf8");
  const loader = source.slice(source.indexOf("export async function loadAdminV2IngestionOverview"), source.indexOf("export function buildAdminV2OverviewRows"));
  assert.doesNotMatch(loader, /\.functions\.invoke|\.(insert|update|upsert|delete|rpc)\s*\(/);
  assert.match(source, /supabase\.functions\.invoke\("import-source-connectors-v2"/);
  assert.doesNotMatch(source, /service[_-]?role/i);
  const app = await readFile(new URL("../../../app.js", import.meta.url), "utf8");
  assert.match(app, /!state\.isAdmin \|\| !isPhaseC1StagingRuntime/);
});

test("authenticated Edge errors retain structured blocked results", async () => {
  const response = new Response(JSON.stringify({ error: "Promotion blocked", code: "V2_FUZZY_REVIEW_REQUIRED", created: false, provenance_attached: false }), { status: 409, headers: { "content-type": "application/json" } });
  const supabase = { functions: { invoke: async () => ({ data: null, error: { message: "Edge Function returned a non-2xx status code", context: response } }) } };
  await assert.rejects(async () => {
    try { await invokeAdminV2Action(supabase, "promote_canary", null, null, { observation_id: PHASE_C2_CASES[2].observation_id }); }
    catch (error) { assert.equal(error.actionResult.code, "V2_FUZZY_REVIEW_REQUIRED"); throw error; }
  }, /HTTP 409.*V2_FUZZY_REVIEW_REQUIRED/);
});
