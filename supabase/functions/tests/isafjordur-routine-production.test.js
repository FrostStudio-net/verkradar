import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { renderAdminV2IngestionPanel } from "../../../src/pages/adminV2Ingestion.js";

const migrationUrl = new URL("../../migrations/20260831100000_isafjordur_v2_normal_production.sql", import.meta.url);
const repairMigrationUrl = new URL("../../migrations/20260831090000_isafjordur_phase_b_comparison_repair.sql", import.meta.url);
const pacingMigrationUrl = new URL("../../migrations/20260830220000_isafjordur_access_pacing.sql", import.meta.url);
const edgeUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);
const appUrl = new URL("../../../app.js", import.meta.url);

test("Ísafjarðarbær routine scheduler is isolated, paced, and bounded", async () => {
  const [sql, repair, pacing, edge] = await Promise.all([
    readFile(migrationUrl, "utf8"), readFile(repairMigrationUrl, "utf8"),
    readFile(pacingMigrationUrl, "utf8"), readFile(edgeUrl, "utf8"),
  ]);
  assert.match(sql, /isafjordur-v2-daily-production','30 1 \* \* \*'/);
  assert.match(sql, /routine_admission_max_new_per_run=1/);
  assert.match(sql, /routine_admission_max_new_per_day=1/);
  assert.match(sql, /routine_admission_scan_limit=20/);
  assert.match(sql, /'max_items',20,'detail_limit',4/);
  assert.match(sql, /'crawl_delay_ms',5000/);
  assert.match(edge, /preAuthBody\.action === "run_isafjordur_production"/);
  assert.match(edge, /admit_isafjordur_v2_run/);
  assert.match(repair, /compare_isafjordur_shadow_observation/);
  assert.match(pacing, /'crawl_delay_ms',\s*5000/);
});

test("Ísafjarðarbær auto-admission requires resolved healthy canonical observations", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  for (const marker of [
    "V2_ROUTINE_RUN_UNHEALTHY", "V2_ROUTINE_HEALTH_BLOCKED", "V2_ROUTINE_PARSER_HEALTH_BLOCKED",
    "V2_ROUTINE_CLASSIFICATION_BLOCKED", "V2_ROUTINE_DEADLINE_BLOCKED", "V2_ROUTINE_EVIDENCE_BLOCKED",
    "V2_ROUTINE_IDENTITY_REQUIRED", "V2_ROUTINE_COMPARISON_BLOCKED", "V2_ROUTINE_DETERMINISTIC_CONFLICT",
    "V2_FUZZY_REVIEW_REQUIRED", "V2_ROUTINE_NEW_ADMISSION_LIMIT", "V2_ROUTINE_ACCESS_LIMIT_MISMATCH",
  ]) assert.match(sql, new RegExp(marker));
  assert.match(sql, /parsed_count[\s\S]*valid_count[\s\S]*duplicate_count/);
  assert.match(sql, /comparison,global_completed[\s\S]*valid_count/);
  assert.match(sql, /comparison,baseline_unavailable/);
  assert.match(sql, /comparison,same_run_unresolved_groups/);
  assert.match(sql, /comparison,same_run_deterministic_duplicates[\s\S]*duplicate_count/);
  assert.match(sql, /comparison,fuzzy_only/);
  assert.match(sql, /expired_or_completed_actionable/);
  assert.match(sql, /deadline<\(\(now\(\) at time zone 'UTC'\)::date\+7\)/);
  assert.match(sql, /promotion_reference_required=false/);
});

test("Ísafjarðarbær deterministic reuse is mutation-free and has no ingestion-time downstream work", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  const admission = sql.slice(sql.indexOf("create or replace function public.v2_admit_isafjordur_observation"), sql.indexOf("create or replace function public.admit_isafjordur_v2_run"));
  for (const lock of ["source_external:", "reference:", "url:", "fingerprint:"]) assert.match(admission, new RegExp(lock));
  assert.match(admission, /select \* into q from public\.opportunities where id=candidates\[1\] for update/);
  assert.doesNotMatch(admission, /update public\.opportunities/);
  assert.match(admission, /existing_opportunity_matched/);
  assert.match(admission, /opportunity_mutated',false/);
  assert.doesNotMatch(admission, /insert into public\.(opportunity_matches|ai_match_reviews|reports|report_items|company_opportunity_actions|company_opportunity_sends|notifications)/);
  assert.match(sql, /'matching_triggered',false,'downstream_triggered',false/);
});

test("Ísafjarðarbær emergency disable is source-specific and audit preserving", async () => {
  const [sql, edge, app] = await Promise.all([readFile(migrationUrl, "utf8"), readFile(edgeUrl, "utf8"), readFile(appUrl, "utf8")]);
  assert.match(sql, /create or replace function public\.set_isafjordur_routine_production/);
  assert.match(sql, /routine_source_enabled' else 'routine_source_disabled/);
  assert.doesNotMatch(sql.slice(sql.indexOf("create or replace function public.set_isafjordur_routine_production")), /delete from public\.(opportunities|opportunity_ingestion_provenance)/);
  assert.match(edge, /set_isafjordur_routine_production/);
  assert.match(app, /"isafjordur-utbod-v2": \{ action: "set_isafjordur_routine_production", label: "Ísafjarðarbær" \}/);
});

test("production admin shows Ísafjarðarbær canonical, dedupe, and comparison health", () => {
  const row = {
    source_key: "isafjordur-utbod-v2", display_name: "Ísafjarðarbær", mode: "shadow", promotion_approved: false,
    routine_production_enabled: true, routine_admission_max_new_per_run: 1, routine_admission_max_new_per_day: 1, routine_admission_scan_limit: 20,
    routineMetrics: { admitted: 0, reused: 0, review_required: 0, blocked: 19, duplicates: 1, errors: 0 },
    health: { status: "healthy", circuit_state: "closed", parser_health: {
      fetched_count: 1, parsed_count: 20, valid_count: 19,
      comparison: { global_completed: 19, baseline_unavailable: 0, same_run_deterministic_duplicates: 1 },
      classification: { actionable: 0, non_actionable: 19, uncertain: 15 },
    } },
    latestRun: { id: "run", status: "succeeded", fetched_count: 1, parsed_count: 20, observation_count: 19, finished_at: "2026-08-31T01:30:00Z" },
  };
  const html = renderAdminV2IngestionPanel({ rows: [row], escapeHtml: String, formatDateTime: String, routineProductionControlsEnabled: true });
  assert.match(html, /Ísafjarðarbær V2 — normal production/);
  assert.match(html, /Index requests \/ parsed \/ canonical<\/dt><dd>1 \/ 20 \/ 19/);
  assert.match(html, /Duplicates suppressed<\/dt><dd>1/);
  assert.match(html, /Comparison completed \/ baseline unavailable<\/dt><dd>19 \/ 0/);
  assert.match(html, /Emergency disable Ísafjarðarbær V2 admissions/);
  assert.doesNotMatch(html, /Promote once|Run matching|Generate report|Send/);
});

test("Ísafjarðarbær routine migration leaves existing sources and legacy functions unchanged", async () => {
  const [sql, edge] = await Promise.all([readFile(migrationUrl, "utf8"), readFile(edgeUrl, "utf8")]);
  assert.doesNotMatch(sql, /create or replace function public\.(?:trigger_reykjavik|trigger_gardabaer|trigger_borgarbyggd|import_ted|import_source_connectors)/i);
  assert.doesNotMatch(sql, /where source_key='(?:reykjavik|gardabaer|borgarbyggd|rikiskaup|vegagerdin)-utbod-v2'/i);
  assert.match(edge, /runReykjavikRoutineProduction/);
  assert.match(edge, /runGardabaerRoutineProduction/);
  assert.match(edge, /runBorgarbyggdRoutineProduction/);
});
