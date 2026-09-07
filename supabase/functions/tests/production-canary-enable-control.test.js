import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import {
  isPhaseC3ProductionRuntime,
  PHASE_C3_FIRST_PRODUCTION_CANARY_OBSERVATION_ID,
} from "../../../src/services/adminV2Ingestion.js";
import { renderAdminV2IngestionPanel } from "../../../src/pages/adminV2Ingestion.js";

const edgeUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);
const migrationUrl = new URL("../../migrations/20260828180000_reykjavik_production_canary_enable_control.sql", import.meta.url);
const appUrl = new URL("../../../app.js", import.meta.url);
const serviceUrl = new URL("../../../src/services/adminV2Ingestion.js", import.meta.url);

const candidate = {
  observation: {
    id: PHASE_C3_FIRST_PRODUCTION_CANARY_OBSERVATION_ID,
    procurement_reference: "16322",
    title: "16322 Mötuneytisþjónusta í stjórnsýsluhúsum Reykjavíkurborgar. EES",
    deadline: "2026-09-15",
    predicted_procurement_stage: "open_competition",
    predicted_confidence: 1,
    comparison_state: "baseline_unavailable",
    promotion_state: "not_eligible",
    approved_for_promotion: false,
  },
  provenance: null,
  opportunity: null,
};

function row(overrides = {}) {
  return {
    source_key: "reykjavik-utbod-v2",
    display_name: "Reykjavíkurborg útboð v2",
    mode: "shadow",
    promotion_approved: false,
    production_shadow_enabled: true,
    production_canary_enabled: false,
    release_feature_enabled: false,
    release_approved: false,
    phaseC3Production: { enabled: false, release_enabled: false, candidates: [candidate] },
    ...overrides,
  };
}

function render(sourceRow, production = true) {
  return renderAdminV2IngestionPanel({
    rows: [sourceRow],
    escapeHtml: String,
    formatDateTime: String,
    phaseC3ProductionControlsEnabled: production,
    phaseC3SelectedObservationId: PHASE_C3_FIRST_PRODUCTION_CANARY_OBSERVATION_ID,
  });
}

test("exact production runtime and admin render gate keep the control out of staging/production non-admin UI", () => {
  assert.equal(isPhaseC3ProductionRuntime("https://asojxjbsgqbfpbepojzh.supabase.co"), true);
  assert.equal(isPhaseC3ProductionRuntime("https://ipixuxznqtrcdpzoxric.supabase.co"), false);
  assert.doesNotMatch(render(row(), false), /Enable Reykjavík production canary/);
  assert.match(render(row()), /Enable Reykjavík production canary/);
  assert.doesNotMatch(render(row()), /Approve Reykjavík source|Approve observation|Promote once/);
});

test("enabled state reveals only the prepared candidate and keeps release unavailable", () => {
  const html = render(row({
    production_canary_enabled: true,
    phaseC3Production: { enabled: true, release_enabled: false, candidates: [candidate] },
  }));
  assert.match(html, new RegExp(PHASE_C3_FIRST_PRODUCTION_CANARY_OBSERVATION_ID));
  assert.match(html, /16322/);
  assert.match(html, /Approve Reykjavík source/);
  assert.match(html, /Disable production canary/);
  assert.doesNotMatch(html, /Approve release|Release with communication hold|clear communication hold/i);
});

test("Edge action is authenticated first, production-only, Reykjavík-only, and does not bypass Phase C actions", async () => {
  const source = await readFile(edgeUrl, "utf8");
  assert.ok(source.indexOf("if (!adminRow)") < source.indexOf("const body = await safeJson(req)"));
  assert.match(source, /productionCanaryToggleAction && !isProduction/);
  assert.match(source, /sourceKey !== REYKJAVIK_SOURCE_KEY/);
  assert.match(source, /PRODUCTION_CANARY_CONFIRMATION/);
  assert.match(source, /set_reykjavik_production_canary_enabled/);
  assert.match(source, /productionPhaseCAction && !\(await isPhaseCProductionEnabled/);
  assert.doesNotMatch(source, /set_reykjavik_production_canary_enabled[\s\S]{0,400}(promote_v2_observation|approve_v2_observation|release_v2_canary)/);
});

test("atomic RPC guards neutral production and updates only the two canary flags", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  for (const guard of [
    "V2_PRODUCTION_CANARY_ADMIN_REQUIRED", "V2_C_SHADOW_MODE_REQUIRED",
    "V2_PRODUCTION_SHADOW_DISABLED", "V2_SOURCE_ALREADY_PROMOTION_APPROVED",
    "V2_RELEASE_FEATURE_MUST_REMAIN_DISABLED", "V2_GLOBAL_RELEASE_MUST_REMAIN_DISABLED",
    "V2_APPROVED_OBSERVATIONS_EXIST", "V2_PROMOTED_OBSERVATIONS_EXIST",
    "V2_ACTIVE_CANARY_EXISTS", "V2_PROMOTION_CAPABLE_SOURCE_EXISTS",
    "V2_LATEST_REYKJAVIK_SHADOW_NOT_SUCCEEDED", "V2_REYKJAVIK_SOURCE_HEALTH_NOT_HEALTHY",
  ]) assert.match(sql, new RegExp(guard));
  assert.match(sql, /set value = 'true'[\s\S]*key = 'phase_c_production_enabled'/);
  assert.match(sql, /set production_canary_enabled = true/);
  assert.match(sql, /set value = 'false'[\s\S]*key = 'phase_c_production_enabled'/);
  assert.match(sql, /set production_canary_enabled = false/);
  assert.doesNotMatch(sql, /insert into public\.(opportunities|opportunity_ingestion_provenance|v2_phase_c_events)/);
  assert.doesNotMatch(sql, /phase_c_release_enabled'\s*;|set release_|set promotion_approved|set mode\s*=/);
});

test("page load only reads the prepared observation and never invokes the toggle", async () => {
  const service = await readFile(serviceUrl, "utf8");
  const app = await readFile(appUrl, "utf8");
  assert.match(service, new RegExp(`eq\\("id", PHASE_C3_FIRST_PRODUCTION_CANARY_OBSERVATION_ID\\)`));
  const loader = app.slice(app.indexOf("async function loadV2IngestionForAdmin"), app.indexOf("async function loadAdminCompanies"));
  assert.doesNotMatch(loader, /invokeAdminV2Action|set_reykjavik_production_canary_enabled/);
  assert.match(app, /window\.confirm\(confirmation\)/);
  assert.match(app, /Enable canary controls only - no promotion will occur/);
});
