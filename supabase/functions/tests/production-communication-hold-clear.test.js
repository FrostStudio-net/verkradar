import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { renderAdminV2IngestionPanel } from "../../../src/pages/adminV2Ingestion.js";

const migrationUrl = new URL("../../migrations/20260830120000_reykjavik_communication_hold_clear.sql", import.meta.url);
const edgeUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);
const appUrl = new URL("../../../app.js", import.meta.url);

const observation = {
  id: "32713ed0-089d-45a0-97f9-24fabdbf08dd",
  procurement_reference: "16322",
  title: "16322 Mötuneytisþjónusta í stjórnsýsluhúsum Reykjavíkurborgar. EES",
  deadline: "2026-09-15",
  predicted_procurement_stage: "open_competition",
  predicted_confidence: 1,
  comparison_state: "baseline_unavailable",
  promotion_state: "promoted",
  promoted_opportunity_id: "1c4b107b-999c-47df-82a7-d87b43b20185",
  approved_for_promotion: true,
  approved_for_release: true,
};
const provenance = { provenance_type: "v2_created" };

function opportunity(overrides = {}) {
  return {
    id: "1c4b107b-999c-47df-82a7-d87b43b20185",
    status: "open",
    raw_payload: { admin_report_status: "released_held", phase_c_communication_hold: true },
    phase_c_communication_hold: true,
    phase_c_released_at: "2026-08-29T14:25:19Z",
    phase_c_disabled_at: null,
    ...overrides,
  };
}

function row(opp = opportunity()) {
  return {
    source_key: "reykjavik-utbod-v2",
    display_name: "Reykjavíkurborg útboð v2",
    mode: "shadow",
    promotion_approved: false,
    production_canary_enabled: true,
    release_feature_enabled: true,
    release_approved: false,
    health: { status: "healthy", circuit_state: "closed" },
    phaseC3Production: {
      enabled: true,
      release_enabled: true,
      candidates: [{ observation, opportunity: opp, provenance }],
    },
  };
}

function render(sourceRow, result = null) {
  return renderAdminV2IngestionPanel({
    rows: [sourceRow], escapeHtml: String, formatDateTime: String,
    phaseC3ProductionControlsEnabled: true,
    phaseC3SelectedObservationId: observation.id,
    phaseC3Result: result,
  });
}

test("hold-clear UI appears only for the exact released held canary after zero-downstream assertions", () => {
  assert.doesNotMatch(render(row()), /data-action="v2-c3-clear-hold"/);
  const ready = render(row(), { assertions: { zero_downstream: true, opportunity_matches: 0, ai_reviews: 0, ai_usages: 0, reports: 0, report_items: 0, actions: 0, sends: 0, customer_visible_linkages: 0 } });
  assert.match(ready, /RELEASED — COMMUNICATION HOLD ACTIVE/);
  assert.match(ready, /data-action="v2-c3-clear-hold"/);
  assert.match(ready, /Clear communication hold/);
  assert.match(ready, /Post-release disable/);
  assert.doesNotMatch(render(row({ ...opportunity(), id: "00000000-0000-4000-8000-000000000099" }), { assertions: { zero_downstream: true } }), /data-action="v2-c3-clear-hold"/);
  assert.doesNotMatch(render(row(), { assertions: { zero_downstream: false } }), /data-action="v2-c3-clear-hold"/);
});

test("cleared UI reports the final state and retains the fail-safe", () => {
  const cleared = opportunity({ phase_c_communication_hold: false, raw_payload: { admin_report_status: "released", phase_c_communication_hold: false } });
  const html = render(row(cleared), { assertions: { zero_downstream: true, opportunity_matches: 0, customer_visible_linkages: 0 } });
  assert.match(html, /RELEASED — COMMUNICATION HOLD CLEARED/);
  assert.match(html, /Post-release disable/);
  assert.doesNotMatch(html, /data-action="v2-c3-clear-hold"/);
});

test("RPC is service-role-only, exact-target, transactional, and changes only hold state plus one event", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  for (const guard of [
    "V2_COMMUNICATION_HOLD_PRODUCTION_PROJECT_REQUIRED", "V2_COMMUNICATION_HOLD_TARGET_NOT_ALLOWED",
    "V2_COMMUNICATION_HOLD_ADMIN_REQUIRED", "V2_COMMUNICATION_HOLD_REASON_REQUIRED",
    "V2_COMMUNICATION_HOLD_SOURCE_IDENTITY_MISMATCH", "V2_COMMUNICATION_HOLD_PROVENANCE_INVALID",
    "V2_COMMUNICATION_HOLD_OPPORTUNITY_NOT_OPEN", "V2_COMMUNICATION_HOLD_NOT_RELEASED",
    "V2_COMMUNICATION_HOLD_ALREADY_CLEARED", "V2_COMMUNICATION_HOLD_IDENTITY_CHANGED",
    "V2_COMMUNICATION_HOLD_DEADLINE_INVALID", "V2_COMMUNICATION_HOLD_STAGE_NOT_ACTIONABLE",
    "V2_COMMUNICATION_HOLD_DETERMINISTIC_CONFLICT", "V2_COMMUNICATION_HOLD_FUZZY_REVIEW_REQUIRED",
    "V2_COMMUNICATION_HOLD_CONFLICTING_CANARY", "V2_COMMUNICATION_HOLD_UNEXPECTED_DOWNSTREAM",
  ]) assert.match(sql, new RegExp(guard));
  assert.match(sql, /for update/);
  assert.match(sql, /phase_c_communication_hold=false/);
  assert.match(sql, /'admin_report_status','released'/);
  assert.match(sql, /'communication_hold_cleared'/);
  assert.match(sql, /'matching_triggered',false/);
  assert.match(sql, /'downstream_triggered',false/);
  assert.match(sql, /revoke all on function public\.clear_reykjavik_v2_canary_communication_hold[\s\S]*from public,anon,authenticated/);
  assert.match(sql, /grant execute on function public\.clear_reykjavik_v2_canary_communication_hold[\s\S]*to service_role/);
  assert.doesNotMatch(sql, /insert into public\.(opportunity_matches|ai_match_reviews|reports|report_items|company_opportunity_actions|company_opportunity_sends)/);
});

test("Edge route is authenticated, production-only, exact-target, confirmed, and invokes no downstream action", async () => {
  const source = await readFile(edgeUrl, "utf8");
  assert.ok(source.indexOf("if (!adminRow)") < source.indexOf("const body = await safeJson(req)"));
  assert.match(source, /body\.action === "clear_communication_hold"/);
  assert.match(source, /V2_COMMUNICATION_HOLD_PRODUCTION_REQUIRED/);
  assert.match(source, /REYKJAVIK_HOLD_CLEAR_OBSERVATION_ID/);
  assert.match(source, /REYKJAVIK_HOLD_CLEAR_OPPORTUNITY_ID/);
  assert.match(source, /COMMUNICATION_HOLD_CLEAR_CONFIRMATION/);
  const handler = source.slice(source.indexOf("async function clearCommunicationHold"), source.indexOf("async function disableReleasedCanary"));
  assert.match(handler, /clear_reykjavik_v2_canary_communication_hold/);
  assert.match(handler, /matching_triggered: false/);
  assert.match(handler, /downstream_triggered: false/);
  assert.doesNotMatch(handler, /(refresh|match_all|release_v2_canary|promote_v2_observation|insert\()/);
});

test("browser requires reason and confirmation and page load remains read-only", async () => {
  const app = await readFile(appUrl, "utf8");
  assert.match(app, /v2-c3-clear-hold/);
  assert.match(app, /Clear communication hold only — no matching or communication will run/);
  assert.match(app, /window\.prompt\("Required audit reason"\)/);
  assert.match(app, /window\.confirm\(confirmation\)/);
  const loader = app.slice(app.indexOf("async function loadV2IngestionForAdmin"), app.indexOf("async function loadAdminCompanies"));
  assert.doesNotMatch(loader, /clear_communication_hold|invokeAdminV2Action/);
});
