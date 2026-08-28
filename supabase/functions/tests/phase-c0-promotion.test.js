import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const migrationUrl = new URL("../../migrations/20260827230000_phase_c0_promotion_safety.sql", import.meta.url);
const functionUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);
const productionShadowGateUrl = new URL("../_shared/ingestion-v2/production-shadow.js", import.meta.url);
const stageUrl = new URL("../_shared/procurement-stage.js", import.meta.url);
const connectorUrl = new URL("../import-source-connectors/index.ts", import.meta.url);
const tedUrl = new URL("../import-ted/index.ts", import.meta.url);

test("C0 RPC owns every eligibility gate and defaults all approvals off", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  for (const token of [
    "promotion_approved boolean not null default false",
    "approved_for_promotion boolean not null default false",
    "promotion_state is distinct from 'eligible'",
    "run_row.status is distinct from 'succeeded'",
    "predicted_procurement_stage not in ('open_competition', 'upcoming_procurement', 'market_consultation')",
    "predicted_actionable is not true",
    "predicted_requires_admin_review is distinct from false",
    "predicted_confidence, 0) < 0.90",
    "deadline_evidence is distinct from 'explicit_source'",
    "deadline <= today_utc",
    "strong_procurement_evidence is not true",
    "promotion_reference_required is true",
    "health_row.status is distinct from 'healthy'",
    "health_row.circuit_state is distinct from 'closed'",
    "V2_PARSER_ERRORS_PRESENT",
    "V2_SOURCE_ENRICHMENT_FAILURES_PRESENT",
    "promotion_enrichment_status not in ('succeeded', 'not_needed')",
    "V2_UNRESOLVED_FUZZY_CANDIDATE",
  ]) assert.match(sql, new RegExp(escapeRegex(token), "i"), token);
  assert.doesNotMatch(sql, /set\s+promotion_approved\s*=\s*true/i);
  const approvalFunction = sql.slice(sql.indexOf("create or replace function public.approve_v2_observation_for_promotion"), sql.indexOf("drop function if exists public.promote_v2_observation"));
  assert.match(approvalFunction, /set approved_for_promotion = true[\s\S]*where id = target_observation_id/s);
});

test("C0 duplicate resolution blocks multiplicity, conflicts, baseline candidates, and fuzzy matches", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  for (const code of [
    "V2_MULTIPLE_SOURCE_EXTERNAL_CANDIDATES",
    "V2_MULTIPLE_REFERENCE_CANDIDATES",
    "V2_MULTIPLE_URL_CANDIDATES",
    "V2_MULTIPLE_FINGERPRINT_CANDIDATES",
    "V2_CONFLICTING_DETERMINISTIC_IDENTITIES",
    "V2_BASELINE_UNAVAILABLE_REQUIRES_ZERO_GLOBAL_CANDIDATES",
    "V2_FUZZY_REVIEW_REQUIRED",
  ]) assert.match(sql, new RegExp(code));
  assert.match(sql, /extensions\.similarity\([\s\S]*>= 0\.84/);
  assert.match(sql, /'auto_merge', false/);
});

test("C0 takes strong identity locks in deterministic order", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  for (const key of ["source_external:", "reference:", "url:", "fingerprint:"]) assert.match(sql, new RegExp(key));
  assert.match(sql, /array_agg\(key order by key\)/);
  assert.match(sql, /foreach lock_key in array lock_keys loop[\s\S]*pg_advisory_xact_lock/s);
});

test("new opportunities are quarantined and existing opportunities are never updated", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  assert.match(sql, /'hidden',[\s\S]*'promotion_quarantine', 'phase_c_canary'[\s\S]*'hidden_from_reports', true[\s\S]*'admin_report_status', 'hidden'/s);
  const promotionBody = sql.slice(sql.indexOf("create function public.promote_v2_observation"), sql.indexOf("create or replace function public.rollback_v2_canary_promotion"));
  assert.doesNotMatch(promotionBody, /update public\.opportunities/i);
  assert.doesNotMatch(promotionBody, /opportunity_matches[\s\S]*(insert|update|upsert)/i);
  assert.doesNotMatch(promotionBody, /insert into public\.(reports|report_items|ai_match_reviews|company_opportunity_sends)/i);
});

test("provenance distinguishes created and reused opportunities with identity evidence", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  assert.match(sql, /'v2_created'.*'existing_opportunity_matched'/s);
  assert.match(sql, /'matched_identity_keys'/);
  assert.match(sql, /'normalized_procurement_reference'/);
  assert.match(sql, /'normalized_canonical_url'/);
  assert.match(sql, /'identity_fingerprint'/);
  assert.match(sql, /'opportunity_mutated', false/);
});

test("rollback locks all records, blocks dependencies, and never deletes a reused opportunity", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  const rollback = sql.slice(sql.indexOf("create or replace function public.rollback_v2_canary_promotion"));
  assert.match(rollback, /v2_ingestion_observations[\s\S]*for update/);
  assert.match(rollback, /opportunity_ingestion_provenance[\s\S]*for update/);
  assert.match(rollback, /public\.opportunities[\s\S]*for update/);
  assert.match(rollback, /V2_ROLLBACK_DOWNSTREAM_DEPENDENCIES/);
  assert.match(rollback, /if provenance_row\.provenance_type = 'v2_created'[\s\S]*delete from public\.opportunities/s);
  const existingBranch = rollback.slice(rollback.indexOf("else\n    delete from public.opportunity_ingestion_provenance"), rollback.indexOf("update public.v2_ingestion_observations"));
  assert.doesNotMatch(existingBranch, /delete from public\.opportunities/);
  assert.match(rollback, /already_rolled_back/);
});

test("downstream assertions cover every current opportunity-linked customer table", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  for (const table of [
    "opportunity_matches",
    "ai_match_reviews",
    "ai_usage_log",
    "report_items",
    "company_opportunity_actions",
    "company_opportunity_sends",
    "admin_match_decisions",
    "match_evaluation_labels",
  ]) assert.match(sql, new RegExp(`public\\.${table}`));
  assert.match(sql, /'zero_downstream'/);
  assert.match(sql, /'customer_visible_linkages'/);
});

test("admin surface is staging-only, authenticated, single-observation, and has no bulk/release path", async () => {
  const source = await readFile(functionUrl, "utf8");
  const productionShadowGate = await readFile(productionShadowGateUrl, "utf8");
  assert.match(source, /STAGING_PROJECT_REF = "ipixuxznqtrcdpzoxric"/);
  assert.match(source, /PRODUCTION_PROJECT_REF/);
  assert.match(productionShadowGate, /PRODUCTION_PROJECT_REF = "asojxjbsgqbfpbepojzh"/);
  assert.match(source, /admin_users/);
  for (const action of ["approve_promotion", "promote_canary", "rollback_canary", "canary_assertions"]) assert.match(source, new RegExp(action));
  assert.match(source, /Exactly one valid observation_id is required/);
  assert.doesNotMatch(source, /promote_bulk|release_quarantine|automatic_promotion/);
  assert.match(source, /downstream_triggered: false/);
});

test("existing matching and reporting paths exclude hidden canaries", async () => {
  const [stage, connector, ted] = await Promise.all([readFile(stageUrl, "utf8"), readFile(connectorUrl, "utf8"), readFile(tedUrl, "utf8")]);
  assert.match(stage, /String\(opportunity\.status \|\| ""\)\.toLowerCase\(\) !== "open"/);
  assert.match(connector, /hidden_from_reports/);
  assert.match(connector, /admin_report_status/);
  assert.match(ted, /\.eq\("status", "open"\)/);
});

test("C0 functions are service-role only and the legacy bypass signature is removed", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  assert.match(sql, /drop function if exists public\.promote_v2_observation\(uuid, jsonb\)/);
  for (const signature of [
    "v2_canary_downstream_assertions(uuid)",
    "approve_v2_observation_for_promotion(uuid, uuid, text)",
    "promote_v2_observation(uuid)",
    "rollback_v2_canary_promotion(uuid, uuid, text)",
  ]) {
    assert.match(sql, new RegExp(`revoke all on function public\\.${escapeRegex(signature)} from public, anon, authenticated`));
    assert.match(sql, new RegExp(`grant execute on function public\\.${escapeRegex(signature)} to service_role`));
  }
});

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
