import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { renderAdminV2IngestionPanel } from "../../../src/pages/adminV2Ingestion.js";

const migrationUrl = new URL("../../migrations/20260830210000_borgarbyggd_v2_normal_production.sql", import.meta.url);
const repairMigrationUrl = new URL("../../migrations/20260830200000_borgarbyggd_phase_b_repair.sql", import.meta.url);
const edgeUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);
const appUrl = new URL("../../../app.js", import.meta.url);

test("Borgarbyggð routine scheduler is isolated and does not overlap existing production jobs", async () => {
  const [sql, repair, edge] = await Promise.all([readFile(migrationUrl, "utf8"), readFile(repairMigrationUrl, "utf8"), readFile(edgeUrl, "utf8")]);
  assert.match(sql, /borgarbyggd-v2-daily-production','50 1 \* \* \*'/);
  assert.match(sql, /routine_admission_max_new_per_run=1/);
  assert.match(sql, /routine_admission_max_new_per_day=1/);
  assert.match(sql, /routine_admission_scan_limit=20/);
  assert.match(sql, /run_borgarbyggd_production/);
  assert.match(edge, /preAuthBody\.action === "run_borgarbyggd_production"/);
  assert.match(edge, /admit_borgarbyggd_v2_run/);
  assert.match(repair, /parser_version = '2\.0\.0'/);
  assert.doesNotMatch(sql, /where source_key='(?:reykjavik|gardabaer|rikiskaup|isafjordur|vegagerdin)-utbod-v2'/i);
});

test("Borgarbyggð automatic admission fails closed across run, parser, evidence and identity gates", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  for (const marker of [
    "V2_ROUTINE_RUN_UNHEALTHY", "V2_ROUTINE_HEALTH_BLOCKED", "V2_ROUTINE_PARSER_HEALTH_BLOCKED",
    "V2_ROUTINE_CLASSIFICATION_BLOCKED", "V2_ROUTINE_SOURCE_STATUS_BLOCKED", "V2_ROUTINE_DEADLINE_BLOCKED",
    "V2_ROUTINE_EVIDENCE_BLOCKED", "V2_ROUTINE_IDENTITY_REQUIRED", "V2_ROUTINE_COMPARISON_BLOCKED",
    "V2_ROUTINE_DETERMINISTIC_CONFLICT", "V2_FUZZY_REVIEW_REQUIRED", "V2_ROUTINE_NEW_ADMISSION_LIMIT",
  ]) assert.match(sql, new RegExp(marker));
  assert.match(sql, /pagination,fetched_pages[\s\S]*pagination,reported_total_pages/);
  assert.match(sql, /pagination,unique_items[\s\S]*parsed_count/);
  assert.match(sql, /comparison,baseline_unavailable/);
  assert.match(sql, /expired_or_completed_actionable/);
  assert.match(sql, /deadline<\(\(now\(\) at time zone 'UTC'\)::date\+7\)/);
  assert.match(sql, /o\.external_id!~'\^\\d\+\$'/);
  assert.match(sql, /promotion_reference_required=false/);
  assert.match(sql, /if ref<>'' then locks:=array_append/);
});

test("Borgarbyggð deterministic reuse is mutation-free and ingestion has no downstream trigger", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  const admission = sql.slice(sql.indexOf("create or replace function public.v2_admit_borgarbyggd_observation"), sql.indexOf("create or replace function public.admit_borgarbyggd_v2_run"));
  for (const lock of ["source_external:", "reference:", "url:", "fingerprint:"]) assert.match(admission, new RegExp(lock));
  assert.match(admission, /select \* into q from public\.opportunities where id=candidates\[1\] for update/);
  assert.doesNotMatch(admission, /update public\.opportunities/);
  assert.match(admission, /existing_opportunity_matched/);
  assert.match(admission, /opportunity_mutated',false/);
  assert.doesNotMatch(admission, /insert into public\.(opportunity_matches|ai_match_reviews|reports|report_items|company_opportunity_actions|company_opportunity_sends|notifications)/);
  assert.match(sql, /'matching_triggered',false,'downstream_triggered',false/);
});

test("Borgarbyggð emergency disable is source-specific and audit preserving", async () => {
  const [sql, edge, app] = await Promise.all([readFile(migrationUrl, "utf8"), readFile(edgeUrl, "utf8"), readFile(appUrl, "utf8")]);
  assert.match(sql, /create or replace function public\.set_borgarbyggd_routine_production/);
  assert.match(sql, /routine_source_enabled' else 'routine_source_disabled/);
  assert.doesNotMatch(sql.slice(sql.indexOf("create or replace function public.set_borgarbyggd_routine_production")), /delete from public\.(opportunities|opportunity_ingestion_provenance)/);
  assert.match(edge, /set_borgarbyggd_routine_production/);
  assert.match(app, /"borgarbyggd-utbod-v2": \{ action: "set_borgarbyggd_routine_production", label: "Borgarbyggð" \}/);
});

test("production admin shows Borgarbyggð routine health and bounded controls", () => {
  const row = {
    source_key: "borgarbyggd-utbod-v2", display_name: "Borgarbyggð", mode: "shadow", promotion_approved: false,
    routine_production_enabled: true, routine_admission_max_new_per_run: 1, routine_admission_max_new_per_day: 1, routine_admission_scan_limit: 20,
    routineMetrics: { admitted: 0, reused: 0, review_required: 0, blocked: 11, duplicates: 0, errors: 0 },
    health: { status: "healthy", circuit_state: "closed", parser_health: { parsed_count: 11, pagination: { fetched_pages: 2 }, classification: { actionable: 0, non_actionable: 11, uncertain: 5 } } },
    latestRun: { id: "run", status: "succeeded", parsed_count: 11, finished_at: "2026-08-30T20:00:00Z" },
  };
  const html = renderAdminV2IngestionPanel({ rows: [row], escapeHtml: String, formatDateTime: String, routineProductionControlsEnabled: true });
  assert.match(html, /Borgarbyggð V2 - normal production/);
  assert.match(html, /Pages \/ parsed items<\/dt><dd>2 \/ 11/);
  assert.match(html, /Actionable \/ non-actionable \/ uncertain<\/dt><dd>0 \/ 11 \/ 5/);
  assert.match(html, /Emergency disable Borgarbyggð V2 admissions/);
  assert.doesNotMatch(html, /Promote once|Run matching|Generate report|Send/);
});

test("routine migration leaves Reykjavík, Garðabær, Ríkiskaup, and legacy functions untouched", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  const edge = await readFile(edgeUrl, "utf8");
  assert.doesNotMatch(sql, /create or replace function public\.(?:trigger_reykjavik|trigger_gardabaer|import_ted|import_source_connectors)/i);
  assert.doesNotMatch(sql, /rikiskaup-utbod-v2|isafjordur-utbod-v2|vegagerdin-utbod-v2/i);
  assert.match(edge, /runReykjavikRoutineProduction/);
  assert.match(edge, /runGardabaerRoutineProduction/);
});
