import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { renderAdminV2IngestionPanel } from "../../../src/pages/adminV2Ingestion.js";

const migrationUrl = new URL("../../migrations/20260830180000_gardabaer_v2_normal_production.sql", import.meta.url);
const parserMigrationUrl = new URL("../../migrations/20260830170000_gardabaer_current_card_parser.sql", import.meta.url);
const edgeUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);
const appUrl = new URL("../../../app.js", import.meta.url);

test("Garðabær routine scheduler is isolated, bounded, and does not change Reykjavík", async () => {
  const [sql, parserSql, edge] = await Promise.all([readFile(migrationUrl, "utf8"), readFile(parserMigrationUrl, "utf8"), readFile(edgeUrl, "utf8")]);
  assert.match(sql, /gardabaer-v2-daily-production','10 2 \* \* \*'/);
  assert.match(sql, /routine_admission_max_new_per_run=1/);
  assert.match(sql, /routine_admission_max_new_per_day=1/);
  assert.match(sql, /routine_admission_scan_limit=25/);
  assert.match(sql, /source_key='gardabaer-utbod-v2'/);
  assert.match(sql, /run_gardabaer_production/);
  assert.match(edge, /preAuthBody\.action === "run_gardabaer_production"/);
  assert.match(edge, /admit_gardabaer_v2_run/);
  assert.match(parserSql, /parser_version = '2\.0\.0'/);
  assert.doesNotMatch(sql, /update public\.v2_source_configs[\s\S]{0,500}where source_key='reykjavik-utbod-v2'/i);
  assert.doesNotMatch(sql, /rikiskaup-utbod-v2|landsvirkjun|landsnet|veitur|orkuveitan|isavia/i);
});

test("Garðabær auto-admission is strict but permits canonical identity without an invented reference", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  for (const marker of [
    "V2_ROUTINE_RUN_UNHEALTHY", "V2_ROUTINE_HEALTH_BLOCKED", "V2_ROUTINE_PARSER_HEALTH_BLOCKED",
    "V2_ROUTINE_CLASSIFICATION_BLOCKED", "V2_ROUTINE_SOURCE_STATUS_BLOCKED", "V2_ROUTINE_DEADLINE_BLOCKED",
    "V2_ROUTINE_EVIDENCE_BLOCKED", "V2_ROUTINE_IDENTITY_REQUIRED", "V2_ROUTINE_COMPARISON_BLOCKED",
    "V2_ROUTINE_DETERMINISTIC_CONFLICT", "V2_FUZZY_REVIEW_REQUIRED", "V2_ROUTINE_NEW_ADMISSION_LIMIT",
  ]) assert.match(sql, new RegExp(marker));
  assert.match(sql, /comparison_state not in \('legacy_match','v2_only'\)/);
  assert.match(sql, /promotion_reference_required=false/);
  assert.match(sql, /o\.external_id!~'\^gardabaer:'[\s\S]*o\.canonical_url!~\*'\^https:\/\//);
  assert.match(sql, /if ref<>'' then locks:=array_append/);
  assert.match(sql, /if ref<>'' then select coalesce\(array_agg/);
  assert.match(sql, /source_status_distribution,active/);
  assert.match(sql, /enrichment,attempted[\s\S]*enrichment,succeeded/);
  assert.match(sql, /deadline<\(\(now\(\) at time zone 'UTC'\)::date\+7\)/);
});

test("Garðabær existing opportunities are provenance-only and new admissions have no direct downstream trigger", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  const admission = sql.slice(sql.indexOf("create or replace function public.v2_admit_gardabaer_observation"), sql.indexOf("create or replace function public.admit_gardabaer_v2_run"));
  assert.match(admission, /select \* into q from public\.opportunities where id=candidates\[1\] for update/);
  assert.doesNotMatch(admission, /update public\.opportunities/);
  assert.match(admission, /existing_opportunity_matched/);
  assert.match(admission, /opportunity_mutated',false/);
  assert.doesNotMatch(admission, /insert into public\.(opportunity_matches|ai_match_reviews|reports|report_items|company_opportunity_actions|company_opportunity_sends|notifications)/);
  assert.match(sql, /'matching_triggered',false,'downstream_triggered',false/);
});

test("Garðabær emergency disable is source-specific and audit-preserving", async () => {
  const [sql, edge, app] = await Promise.all([readFile(migrationUrl, "utf8"), readFile(edgeUrl, "utf8"), readFile(appUrl, "utf8")]);
  assert.match(sql, /create or replace function public\.set_gardabaer_routine_production/);
  assert.match(sql, /routine_source_enabled' else 'routine_source_disabled/);
  assert.doesNotMatch(sql.slice(sql.indexOf("create or replace function public.set_gardabaer_routine_production")), /delete from public\.(opportunities|opportunity_ingestion_provenance)/);
  assert.match(edge, /set_gardabaer_routine_production/);
  assert.match(app, /"gardabaer-utbod-v2": \{ action: "set_gardabaer_routine_production", label: "Garðabær" \}/);
});

test("production admin renders independent Reykjavík and Garðabær routine controls", () => {
  const base = { mode: "shadow", promotion_approved: false, routine_production_enabled: true, routine_admission_max_new_per_run: 1, routine_admission_max_new_per_day: 1, routine_admission_scan_limit: 25, routineMetrics: { admitted: 0, review_required: 0, blocked: 0, duplicates: 0, errors: 0 }, health: { status: "healthy", circuit_state: "closed" }, latestRun: { id: "run", status: "succeeded" } };
  const html = renderAdminV2IngestionPanel({
    rows: [{ ...base, source_key: "reykjavik-utbod-v2", display_name: "Reykjavík" }, { ...base, source_key: "gardabaer-utbod-v2", display_name: "Garðabær" }],
    escapeHtml: String, formatDateTime: String, routineProductionControlsEnabled: true,
  });
  assert.match(html, /Reykjavík V2 - normal production/);
  assert.match(html, /Garðabær V2 - normal production/);
  assert.match(html, /data-source-key="reykjavik-utbod-v2"/);
  assert.match(html, /data-source-key="gardabaer-utbod-v2"/);
  assert.match(html, /Emergency disable Garðabær V2 admissions/);
  assert.doesNotMatch(html, /Promote once|Run matching|Generate report|Send/);
});
