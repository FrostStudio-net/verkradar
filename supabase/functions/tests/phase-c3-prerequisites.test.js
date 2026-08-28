import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { isPhaseC3ProductionRuntime } from "../../../src/services/adminV2Ingestion.js";
import { renderAdminV2IngestionPanel } from "../../../src/pages/adminV2Ingestion.js";

const migrationUrl = new URL("../../migrations/20260828160000_phase_c3_production_prerequisites.sql", import.meta.url);
const releaseMigrationUrl = new URL("../../migrations/20260828190000_reykjavik_canary_release_controls.sql", import.meta.url);
const edgeUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);
const productionShadowGateUrl = new URL("../_shared/ingestion-v2/production-shadow.js", import.meta.url);

test("quarantine immutability and downstream guards are database enforced", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  assert.match(sql, /V2_QUARANTINED_OPPORTUNITY_IMMUTABLE/);
  assert.match(sql, /before update or delete on public\.opportunities/);
  for (const table of ["opportunity_matches", "report_items", "company_opportunity_actions", "company_opportunity_sends", "ai_match_reviews", "ai_usage_log", "admin_match_decisions", "match_evaluation_labels"]) {
    assert.match(sql, new RegExp(`'${table}'`));
  }
  assert.match(sql, /V2_PHASE_C_DOWNSTREAM_LINK_BLOCKED/);
  assert.match(sql, /v2_phase_c_authorized_transactions/);
  assert.match(sql, /transaction_id=txid_current\(\).*backend_pid=pg_backend_pid\(\)/s);
  assert.match(sql, /revoke all on table public\.v2_phase_c_authorized_transactions from public, anon, authenticated, service_role/);
  assert.doesNotMatch(sql, /current_setting\('verkradar\.phase_c_authorized_action'/);
});

test("event log is append-only and rollout limits are transactional", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  assert.match(sql, /create table if not exists public\.v2_phase_c_events/);
  assert.match(sql, /V2_PHASE_C_EVENT_LOG_APPEND_ONLY/);
  for (const code of ["V2_PRODUCTION_SOURCE_LIMIT", "V2_PRODUCTION_OBSERVATION_LIMIT", "V2_ACTIVE_CANARY_LIMIT", "V2_DAILY_NEW_PROMOTION_LIMIT"]) assert.match(sql, new RegExp(code));
  assert.match(sql, /pg_advisory_xact_lock\(hashtextextended\('verkradar-phase-c-production-promotion'/);
  assert.doesNotMatch(sql, /729459ca|d5a8f0eb|9c6b7648|acaec64d|a416b17a/);
});

test("release stays held, triggers nothing, and post-release disable never deletes", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  const releaseSql = await readFile(releaseMigrationUrl, "utf8");
  const release = releaseSql.slice(releaseSql.indexOf("create or replace function public.release_v2_canary"));
  assert.match(releaseSql, /deadline_valid/);
  assert.match(releaseSql, /deterministic_candidate_count/);
  assert.match(releaseSql, /fuzzy_candidate_count/);
  assert.match(release, /phase_c_communication_hold=true/);
  assert.match(release, /'matching_triggered',false/);
  assert.doesNotMatch(release, /insert into public\.(opportunity_matches|ai_match_reviews|reports|report_items|company_opportunity_sends)/);
  const disable = sql.slice(sql.indexOf("create function public.disable_released_v2_canary"));
  assert.match(disable, /status='hidden'/);
  assert.doesNotMatch(disable, /delete from public\.opportunities/);
});

test("production action surface is exact-project, admin authenticated, flagged, and single-item", async () => {
  const source = await readFile(edgeUrl, "utf8");
  const productionShadowGate = await readFile(productionShadowGateUrl, "utf8");
  assert.match(source, /PRODUCTION_PROJECT_REF/);
  assert.match(productionShadowGate, /PRODUCTION_PROJECT_REF = "asojxjbsgqbfpbepojzh"/);
  assert.match(source, /admin_users/);
  assert.match(source, /phase_c_production_enabled/);
  assert.match(source, /Exactly one valid observation_id is required/);
  for (const action of ["approve_release", "release_canary", "disable_released_canary"]) assert.match(source, new RegExp(action));
  assert.doesNotMatch(source, /promote_bulk|automatic_release|clear_communication_hold/);
});

test("production UI exposes only the enable control until both feature gates allow canary actions", () => {
  assert.equal(isPhaseC3ProductionRuntime("https://asojxjbsgqbfpbepojzh.supabase.co"), true);
  assert.equal(isPhaseC3ProductionRuntime("https://ipixuxznqtrcdpzoxric.supabase.co"), false);
  const base = { rows: [], escapeHtml: String, formatDateTime: String };
  assert.doesNotMatch(renderAdminV2IngestionPanel(base), /Phase C3 production canary/);
  const row = { source_key: "reykjavik-utbod-v2", display_name: "Reykjavík", mode: "shadow", promotion_approved: false, production_canary_enabled: false, phaseC3Production: { enabled: true, release_enabled: false, candidates: [] } };
  const partial = renderAdminV2IngestionPanel({ ...base, rows: [row], phaseC3ProductionControlsEnabled: true });
  assert.match(partial, /Phase C3 — Reykjavík production canary/);
  assert.doesNotMatch(partial, /Approve Reykjavík source|Promote once/);
  assert.match(renderAdminV2IngestionPanel({ ...base, rows: [{ ...row, production_canary_enabled: true }], phaseC3ProductionControlsEnabled: true }), /Phase C3 production canary/);
});
