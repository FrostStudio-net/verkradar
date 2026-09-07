import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { renderAdminV2IngestionPanel } from "../../../src/pages/adminV2Ingestion.js";

const migrationUrl = new URL("../../migrations/20260831140000_vegagerdin_v2_normal_production.sql", import.meta.url);
const repairUrl = new URL("../../migrations/20260831110000_vegagerdin_current_tender_phase_b_repair.sql", import.meta.url);
const deadlineUrl = new URL("../../migrations/20260831113000_vegagerdin_body_deadline_health.sql", import.meta.url);
const authUrl = new URL("../../migrations/20260831130000_routine_v2_scheduler_gateway_auth.sql", import.meta.url);
const edgeUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);
const appUrl = new URL("../../../app.js", import.meta.url);

test("Vegagerðin routine production uses only repaired official current/planned HTML", async () => {
  const [sql, repair, deadline, edge] = await Promise.all([readFile(migrationUrl,"utf8"),readFile(repairUrl,"utf8"),readFile(deadlineUrl,"utf8"),readFile(edgeUrl,"utf8")]);
  assert.match(repair,/auglyst-utbod/); assert.match(repair,/fyrirhugud-utbod/); assert.match(deadline,/parser_version = '1\.1\.1'/);
  assert.match(sql,/routine_admission_source','current_tender_html'/);
  assert.match(sql,/planned_tender_html_observation_only/);
  assert.match(sql,/broad_rss','optional_context_disabled/);
  assert.match(sql,/listing_role',''\)<>'current_tender'/);
  assert.match(sql,/predicted_procurement_stage<>'open_competition'/);
  assert.match(edge,/runVegagerdinRoutineProduction/);
  assert.match(edge,/admit_vegagerdin_v2_run/);
});

test("Vegagerðin admission is strict, resolved, bounded and fail closed", async () => {
  const sql=await readFile(migrationUrl,"utf8");
  for(const marker of ["V2_ROUTINE_RUN_UNHEALTHY","V2_ROUTINE_HEALTH_BLOCKED","V2_ROUTINE_PARSER_HEALTH_BLOCKED","V2_ROUTINE_CLASSIFICATION_BLOCKED","V2_ROUTINE_DEADLINE_BLOCKED","V2_ROUTINE_EVIDENCE_BLOCKED","V2_ROUTINE_IDENTITY_REQUIRED","V2_ROUTINE_COMPARISON_BLOCKED","V2_ROUTINE_DETERMINISTIC_CONFLICT","V2_FUZZY_REVIEW_REQUIRED","V2_ROUTINE_NEW_ADMISSION_LIMIT"]) assert.match(sql,new RegExp(marker));
  assert.match(sql,/routine_admission_max_new_per_run=2/);
  assert.match(sql,/routine_admission_max_new_per_day=2/);
  assert.match(sql,/routine_admission_scan_limit=30/);
  assert.match(sql,/'detail_limit',12/);
  assert.match(sql,/comparison,global_completed/);
  assert.match(sql,/comparison,baseline_unavailable/);
  assert.match(sql,/current_detail|enrichment,succeeded/);
  assert.match(sql,/expired_or_completed_actionable/);
});

test("Vegagerðin deterministic reuse is mutation-free and ingestion triggers no downstream work", async () => {
  const sql=await readFile(migrationUrl,"utf8");
  const admission=sql.slice(sql.indexOf("create or replace function public.v2_admit_vegagerdin_observation"),sql.indexOf("create or replace function public.admit_vegagerdin_v2_run"));
  for(const key of ["source_external:","reference:","url:","fingerprint:"]) assert.match(admission,new RegExp(key));
  assert.match(admission,/existing_opportunity_matched/);
  assert.match(admission,/opportunity_mutated',false/);
  assert.doesNotMatch(admission,/update public\.opportunities/);
  assert.doesNotMatch(admission,/insert into public\.(opportunity_matches|ai_match_reviews|reports|report_items|company_opportunity_actions|company_opportunity_sends|notifications)/);
  assert.match(sql,/'matching_triggered',false,'downstream_triggered',false/);
});

test("Vegagerðin scheduler reuses dual auth and is isolated at 01:10 UTC", async () => {
  const [sql,auth,edge]=await Promise.all([readFile(migrationUrl,"utf8"),readFile(authUrl,"utf8"),readFile(edgeUrl,"utf8")]);
  assert.match(sql,/vegagerdin-v2-daily-production','10 1 \* \* \*'/);
  assert.match(sql,/'Authorization',gateway_authorization,'x-automation-secret',secret/);
  assert.match(sql,/v2_routine_gateway_authorization\(\)/);
  assert.match(auth,/vault\.decrypted_secrets/);
  assert.match(edge,/preAuthBody\.action === "run_vegagerdin_production"/);
  assert.match(edge,/x-automation-secret/);
  assert.match(edge,/isProduction/);
  assert.doesNotMatch(sql,/trigger_(?:isafjordur|borgarbyggd|gardabaer|reykjavik)_v2_automation/);
});

test("Vegagerðin emergency disable and admin status are source-specific", async () => {
  const [sql,edge,app]=await Promise.all([readFile(migrationUrl,"utf8"),readFile(edgeUrl,"utf8"),readFile(appUrl,"utf8")]);
  assert.match(sql,/set_vegagerdin_routine_production/);
  assert.match(sql,/routine_source_enabled' else 'routine_source_disabled/);
  assert.doesNotMatch(sql.slice(sql.indexOf("create or replace function public.set_vegagerdin_routine_production")),/delete from public\.(opportunities|opportunity_ingestion_provenance)/);
  assert.match(edge,/set_vegagerdin_routine_production/);
  assert.match(app,/"vegagerdin-utbod-v2": \{ action: "set_vegagerdin_routine_production", label: "Vegagerðin" \}/);
});

test("production admin shows current/planned, RSS, comparison and limits", () => {
  const row={source_key:"vegagerdin-utbod-v2",display_name:"Vegagerðin",mode:"shadow",promotion_approved:false,routine_production_enabled:true,routine_admission_max_new_per_run:2,routine_admission_max_new_per_day:2,routine_admission_scan_limit:30,routineMetrics:{admitted:0,reused:0,review_required:0,blocked:24,duplicates:0,errors:0},health:{status:"healthy",circuit_state:"closed",parser_health:{parsed_count:24,index_diagnostics:{current_tenders_found:4,planned_observations_stored:20,broad_rss_rows:0},comparison:{global_completed:24,baseline_unavailable:0},classification:{actionable:4,non_actionable:20,uncertain:0}}},latestRun:{id:"run",status:"succeeded",fetched_count:2,parsed_count:24,finished_at:"2026-09-01T01:10:00Z"}};
  const html=renderAdminV2IngestionPanel({rows:[row],escapeHtml:String,formatDateTime:String,routineProductionControlsEnabled:true});
  assert.match(html,/Vegagerðin V2 - normal production/);
  assert.match(html,/Current \/ planned observations<\/dt><dd>4 \/ 20/);
  assert.match(html,/Broad RSS rows<\/dt><dd>0/);
  assert.match(html,/2 new\/run, 2 new\/day, scan 30/);
  assert.match(html,/Emergency disable Vegagerðin V2 admissions/);
  assert.doesNotMatch(html,/Promote once|Run matching|Generate report|Send/);
});

test("migration does not alter existing routine sources, Ríkiskaup, or legacy functions", async()=>{
  const sql=await readFile(migrationUrl,"utf8");
  assert.doesNotMatch(sql,/where source_key='(?:reykjavik|gardabaer|borgarbyggd|isafjordur|rikiskaup)-utbod-v2'/i);
  assert.doesNotMatch(sql,/create or replace function public\.(?:trigger_reykjavik|trigger_gardabaer|trigger_borgarbyggd|trigger_isafjordur|import_ted|import_source_connectors)/i);
});
