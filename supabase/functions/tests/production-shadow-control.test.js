import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import {
  assertProductionShadowAllowed,
  isExactSupabaseProject,
  PRODUCTION_PROJECT_REF,
  PRODUCTION_SHADOW_SOURCE_KEYS,
} from "../_shared/ingestion-v2/production-shadow.js";
import { renderAdminV2IngestionPanel } from "../../../src/pages/adminV2Ingestion.js";

const edgeUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);
const migrationUrl = new URL("../../migrations/20260828170000_production_reykjavik_shadow_control.sql", import.meta.url);
const appUrl = new URL("../../../app.js", import.meta.url);

const config = Object.freeze({
  source_key: "reykjavik-utbod-v2",
  mode: "shadow",
  production_shadow_enabled: true,
  promotion_approved: false,
  release_feature_enabled: false,
  release_approved: false,
});

test("production Reykjavík shadow gate permits only the exact dormant source configuration", () => {
  assert.equal(PRODUCTION_PROJECT_REF, "asojxjbsgqbfpbepojzh");
  assert.deepEqual(PRODUCTION_SHADOW_SOURCE_KEYS, ["reykjavik-utbod-v2"]);
  assert.equal(assertProductionShadowAllowed({ isProduction: true, sourceKey: config.source_key, config }), true);
  assert.equal(isExactSupabaseProject("https://asojxjbsgqbfpbepojzh.supabase.co", PRODUCTION_PROJECT_REF), true);
  assert.equal(isExactSupabaseProject("https://asojxjbsgqbfpbepojzh.supabase.co.attacker.example", PRODUCTION_PROJECT_REF), false);
  assert.equal(isExactSupabaseProject("not-a-url", PRODUCTION_PROJECT_REF), false);
});

test("production shadow gate fails closed for project, source, mode, approvals, and flags", () => {
  const cases = [
    [{ isProduction: false, sourceKey: config.source_key, config }, "V2_ENVIRONMENT_BLOCKED"],
    [{ isProduction: true, sourceKey: "rikiskaup-utbod-v2", config: { ...config, source_key: "rikiskaup-utbod-v2" } }, "V2_PRODUCTION_SHADOW_SOURCE_NOT_ALLOWED"],
    [{ isProduction: true, sourceKey: config.source_key, config: { ...config, production_shadow_enabled: false } }, "V2_PRODUCTION_SHADOW_DISABLED"],
    [{ isProduction: true, sourceKey: config.source_key, config: { ...config, mode: "promote" } }, "V2_SHADOW_MODE_REQUIRED"],
    [{ isProduction: true, sourceKey: config.source_key, config: { ...config, promotion_approved: true } }, "V2_PRODUCTION_SHADOW_PROMOTION_APPROVED"],
    [{ isProduction: true, sourceKey: config.source_key, config: { ...config, release_feature_enabled: true } }, "V2_PRODUCTION_SHADOW_RELEASE_ENABLED"],
    [{ isProduction: true, sourceKey: config.source_key, config, releaseEnabled: true }, "V2_PRODUCTION_SHADOW_RELEASE_ENABLED"],
  ];
  for (const [input, code] of cases) assert.throws(() => assertProductionShadowAllowed(input), { code });
});

test("router keeps authentication first, allows only run_shadow, and leaves Phase C flag gating intact", async () => {
  const source = await readFile(edgeUrl, "utf8");
  const adminCheck = source.indexOf("if (!adminRow)");
  const bodyRead = source.indexOf("const body = await safeJson(req)");
  assert.ok(adminCheck >= 0 && adminCheck < bodyRead);
  assert.match(source, /const productionShadowAction = body\.action === "run_shadow"/);
  assert.match(source, /isProduction && !productionPhaseCAction && !productionShadowAction/);
  assert.match(source, /productionPhaseCAction && !\(await isPhaseCProductionEnabled/);
  assert.match(source, /assertProductionShadowAllowed\(\{ isProduction, sourceKey: requestedSource, config: shadowConfig, releaseEnabled \}\)/);
  assert.match(source, /V2_RUN_ALREADY_ACTIVE/);
});

test("runShadow remains V2-only and reports zero customer-visible writes", async () => {
  const source = await readFile(edgeUrl, "utf8");
  const shadow = source.slice(source.indexOf("async function runShadow"), source.indexOf("async function approvePromotion"));
  for (const table of ["v2_ingestion_runs", "v2_ingestion_observations", "v2_source_health", "v2_legacy_comparisons"]) {
    assert.match(shadow, new RegExp(table));
  }
  for (const table of ["opportunity_ingestion_provenance", "opportunity_matches", "ai_match_reviews", "reports", "report_items", "company_opportunity_actions", "company_opportunity_sends", "v2_phase_c_events"]) {
    assert.doesNotMatch(shadow, new RegExp(`from\\(["']${table}["']\\)`));
  }
  assert.match(shadow, /customer_visible_writes: 0/);
  assert.match(shadow, /promote_count: 0/);
});

test("migration opts in only Reykjavík and prevents concurrent active runs", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  assert.match(sql, /production_shadow_enabled boolean not null default false/);
  assert.match(sql, /where source_key = 'reykjavik-utbod-v2'/);
  assert.match(sql, /production_shadow_enabled = true/);
  assert.match(sql, /promotion_approved = false/);
  assert.match(sql, /production_canary_enabled = false/);
  assert.match(sql, /release_feature_enabled = false/);
  assert.match(sql, /unique index if not exists v2_ingestion_runs_one_active_per_source_idx/);
  assert.match(sql, /where status in \('queued', 'running'\)/);
  assert.doesNotMatch(sql, /cron\.|schedule\s*\(/i);
});

test("production admin UI renders one shadow button only for the exact eligible row", async () => {
  const base = { rows: [], escapeHtml: String, formatDateTime: String, productionShadowControlsEnabled: true };
  const eligible = { ...config, display_name: "Reykjavíkurborg útboð v2" };
  const html = renderAdminV2IngestionPanel({ ...base, rows: [eligible] });
  assert.match(html, /Run shadow once/);
  assert.equal((html.match(/data-action="v2-production-run-shadow"/g) || []).length, 1);
  assert.doesNotMatch(html, /Approve Reykjavík source|Promote once|Release with communication hold/);
  assert.doesNotMatch(renderAdminV2IngestionPanel({ ...base, rows: [{ ...eligible, production_shadow_enabled: false }] }), /Run shadow once/);
  assert.doesNotMatch(renderAdminV2IngestionPanel({ ...base, rows: [{ ...eligible, mode: "promote" }] }), /Run shadow once/);
  assert.doesNotMatch(renderAdminV2IngestionPanel({ ...base, rows: [{ ...eligible, promotion_approved: true }] }), /Run shadow once/);
  assert.doesNotMatch(renderAdminV2IngestionPanel({ ...base, rows: [eligible], productionShadowControlsEnabled: false }), /Run shadow once/);

  const app = await readFile(appUrl, "utf8");
  assert.match(app, /state\.isAdmin\s*&&\s*isPhaseC3ProductionRuntime\(SUPABASE_URL\)/);
  assert.match(app, /sourceKey === "reykjavik-utbod-v2"/);
  assert.match(app, /invokeAdminV2Action\(supabaseClient, "run_shadow", sourceKey\)/);
});

test("staging run_shadow route remains available without the production-only config gate", async () => {
  const source = await readFile(edgeUrl, "utf8");
  assert.match(source, /if \(isProduction\) \{\s*const releaseEnabled[\s\S]*?assertProductionShadowAllowed/);
  assert.match(source, /if \(shadowConfig\.mode !== "shadow"\)/);
});
