import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { renderAdminV2IngestionPanel } from "../../../src/pages/adminV2Ingestion.js";

const migrationUrl = new URL("../../migrations/20260830150000_reykjavik_v2_normal_production.sql", import.meta.url);
const edgeUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);

test("scheduler and automation route are Reykjavík-only and bounded", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  const edge = await readFile(edgeUrl, "utf8");
  assert.match(sql, /reykjavik-v2-daily-production','30 2 \* \* \*'/);
  assert.match(sql, /source_key='reykjavik-utbod-v2'/);
  assert.match(sql, /routine_admission_max_new_per_run=2/);
  assert.match(sql, /routine_admission_max_new_per_day=2/);
  assert.match(sql, /routine_admission_scan_limit=10/);
  assert.match(edge, /preAuthBody\.action === "run_reykjavik_production"/);
  assert.match(edge, /x-automation-secret/);
  assert.match(edge, /V2_ROUTINE_AUTOMATION_UNAUTHORIZED/);
  assert.doesNotMatch(sql, /landsvirkjun|landsnet|veitur|orkuveitan|isavia/i);
});

test("routine admission keeps strict health, classification, identity and ambiguity gates", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  for (const marker of [
    "V2_ROUTINE_RUN_UNHEALTHY", "V2_ROUTINE_HEALTH_BLOCKED", "V2_ROUTINE_PARSER_HEALTH_BLOCKED",
    "V2_ROUTINE_CLASSIFICATION_BLOCKED", "V2_ROUTINE_DEADLINE_BLOCKED", "V2_ROUTINE_EVIDENCE_BLOCKED",
    "V2_ROUTINE_IDENTITY_REQUIRED", "V2_ROUTINE_DETERMINISTIC_CONFLICT", "V2_FUZZY_REVIEW_REQUIRED",
    "V2_ROUTINE_NEW_ADMISSION_LIMIT",
  ]) assert.match(sql, new RegExp(marker));
  assert.match(sql, /same_source_external_id/);
  assert.match(sql, /procurement_reference/);
  assert.match(sql, /canonical_url/);
  assert.match(sql, /fingerprint/);
  assert.match(sql, /existing_opportunity_matched/);
  assert.match(sql, /opportunity_mutated',false/);
});

test("admission itself does not trigger downstream processing", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  const edge = await readFile(edgeUrl, "utf8");
  const admission = sql.slice(sql.indexOf("create or replace function public.v2_admit_reykjavik_observation"), sql.indexOf("create or replace function public.set_reykjavik_routine_production"));
  assert.doesNotMatch(admission, /insert into public\.(opportunity_matches|ai_match_reviews|reports|report_items|company_opportunity_actions|company_opportunity_sends)/);
  assert.match(admission, /'matching_triggered',false/);
  assert.match(edge, /matching_triggered: false, downstream_triggered: false/);
});

test("production admin shows routine operations and retires canary controls", () => {
  const row = {
    source_key: "reykjavik-utbod-v2", display_name: "Reykjavík", mode: "shadow", promotion_approved: false,
    routine_production_enabled: true, routine_admission_max_new_per_run: 2, routine_admission_max_new_per_day: 2,
    routine_admission_scan_limit: 10, routineMetrics: { admitted: 1, review_required: 1, duplicates: 0, errors: 0 },
    health: { status: "healthy", circuit_state: "closed" }, latestRun: { id: "run-1", status: "succeeded" },
    phaseC3Production: { enabled: false, release_enabled: false, candidates: [] },
  };
  const html = renderAdminV2IngestionPanel({ rows: [row], escapeHtml: String, formatDateTime: String, routineProductionControlsEnabled: true, phaseC3ProductionControlsEnabled: true, productionShadowControlsEnabled: true });
  assert.match(html, /Reykjavík V2 — normal production/);
  assert.match(html, /Emergency disable Reykjavík V2 admissions/);
  assert.doesNotMatch(html, /Enable Reykjavík production canary|Run shadow once|Promote once/);
});
