import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { renderAdminV2IngestionPanel } from "../../../src/pages/adminV2Ingestion.js";

const migrationUrl = new URL("../../migrations/20260828190000_reykjavik_canary_release_controls.sql", import.meta.url);
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
  approved_for_promotion: true,
  approved_for_release: false,
};
const opportunity = { id: "1c4b107b-999c-47df-82a7-d87b43b20185", status: "hidden", raw_payload: { promotion_quarantine: "phase_c_canary" }, phase_c_communication_hold: false, phase_c_released_at: null };

function row(overrides = {}) {
  return {
    source_key: "reykjavik-utbod-v2", display_name: "Reykjavík", mode: "shadow",
    promotion_approved: false, production_canary_enabled: true,
    release_feature_enabled: false, release_approved: false,
    health: { status: "healthy", circuit_state: "closed" },
    phaseC3Production: { enabled: true, release_enabled: false, candidates: [{ observation, opportunity, provenance: { provenance_type: "v2_created" } }] },
    ...overrides,
  };
}

function render(sourceRow, result = null) {
  return renderAdminV2IngestionPanel({ rows: [sourceRow], escapeHtml: String, formatDateTime: String, phaseC3ProductionControlsEnabled: true, phaseC3SelectedObservationId: observation.id, phaseC3Result: result });
}

test("quarantined canary shows manual release enable but no release before approval", () => {
  const html = render(row());
  assert.match(html, /Enable canary release controls/);
  assert.doesNotMatch(html, /Approve canary release|Release with communication hold/);
  assert.match(html, /Run safety assertions/);
  assert.doesNotMatch(html, /clear communication hold|data-action="[^"]*(match|ai|report|send)/i);
});

test("enabled and approved states reveal one-step controls; released state exposes only assertions and disable", () => {
  const enabled = row({ release_feature_enabled: true, phaseC3Production: { enabled: true, release_enabled: true, candidates: [{ observation, opportunity, provenance: { provenance_type: "v2_created" } }] } });
  assert.match(render(enabled), /Approve canary release/);
  assert.doesNotMatch(render(enabled), /Release with communication hold/);
  const approvedObservation = { ...observation, approved_for_release: true };
  const approved = { ...enabled, release_approved: true, phaseC3Production: { ...enabled.phaseC3Production, candidates: [{ observation: approvedObservation, opportunity, provenance: { provenance_type: "v2_created" } }] } };
  assert.match(render(approved), /Release with communication hold/);

  const releasedOpportunity = { ...opportunity, status: "open", raw_payload: { admin_report_status: "released_held" }, phase_c_communication_hold: true, phase_c_released_at: "2026-08-28T20:00:00Z" };
  const released = { ...approved, release_approved: false, phaseC3Production: { ...approved.phaseC3Production, candidates: [{ observation: approvedObservation, opportunity: releasedOpportunity, provenance: { provenance_type: "v2_created" } }] } };
  const releasedHtml = render(released, { assertions: { zero_downstream: true, opportunity_matches: 0 } });
  assert.match(releasedHtml, /RELEASED - COMMUNICATION HOLD ACTIVE/);
  assert.match(releasedHtml, /Post-release disable/);
  assert.doesNotMatch(releasedHtml, /Approve canary release|Release with communication hold|Rollback before release/);
});

test("production Edge action is admin-gated, staging-blocked, exact-source, and never releases while enabling", async () => {
  const source = await readFile(edgeUrl, "utf8");
  assert.ok(source.indexOf("if (!adminRow)") < source.indexOf("const body = await safeJson(req)"));
  assert.match(source, /body\.action === "set_reykjavik_release_enabled"/);
  assert.match(source, /if \(!isProduction\).*V2_RELEASE_ENVIRONMENT_REQUIRED/);
  assert.match(source, /sourceKey !== REYKJAVIK_SOURCE_KEY/);
  assert.match(source, /PRODUCTION_RELEASE_CONFIRMATION/);
  const handler = source.slice(source.indexOf("async function setReykjavikReleaseEnabled"), source.indexOf("async function releaseCanary"));
  assert.match(handler, /set_reykjavik_canary_release_enabled/);
  assert.doesNotMatch(handler, /release_v2_canary|approve_v2_canary_release|promote_v2_observation/);
});

test("database release controls revalidate identity, health, deadline, quarantine, and downstream state", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  for (const signal of ["deadline_valid", "run_healthy", "source_healthy", "observation_unambiguous", "deterministic_candidate_count", "fuzzy_candidate_count", "zero_downstream", "single_active_canary", "provenance_valid"]) assert.match(sql, new RegExp(signal));
  assert.match(sql, /set value='true' where key='phase_c_release_enabled'/);
  assert.match(sql, /set release_feature_enabled=true/);
  assert.match(sql, /V2_RELEASE_NOT_APPROVED/);
  assert.match(sql, /phase_c_communication_hold=true/);
  assert.match(sql, /'downstream_triggered',false/);
  assert.doesNotMatch(sql, /insert into public\.(opportunity_matches|ai_match_reviews|reports|report_items|company_opportunity_sends)/);
});

test("page load remains read-only and release mutations require explicit clicks", async () => {
  const app = await readFile(appUrl, "utf8");
  const loader = app.slice(app.indexOf("async function loadV2IngestionForAdmin"), app.indexOf("async function loadAdminCompanies"));
  assert.doesNotMatch(loader, /invokeAdminV2Action|set_reykjavik_release_enabled|approve_release|release_canary/);
  assert.match(app, /Enable release controls only - no release will occur/);
  assert.match(app, /window\.confirm\(confirmation\)/);
});
