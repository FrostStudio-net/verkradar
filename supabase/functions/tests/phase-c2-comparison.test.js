import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const migrationUrl = new URL("../../migrations/20260828010000_phase_c2_atomic_deterministic_comparison.sql", import.meta.url);
const functionUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);

test("Phase C2 comparison is atomic, deterministic, and mutation-free", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  assert.match(sql, /for update/);
  assert.match(sql, /array_agg\(key order by key\)/);
  for (const token of [
    "V2_COMPARISON_MULTIPLE_SOURCE_EXTERNAL_CANDIDATES",
    "V2_COMPARISON_MULTIPLE_REFERENCE_CANDIDATES",
    "V2_COMPARISON_MULTIPLE_URL_CANDIDATES",
    "V2_COMPARISON_MULTIPLE_FINGERPRINT_CANDIDATES",
    "V2_COMPARISON_CONFLICTING_DETERMINISTIC_IDENTITIES",
    "V2_COMPARISON_FUZZY_REVIEW_REQUIRED",
  ]) assert.match(sql, new RegExp(token));
  assert.match(sql, /insert into public\.v2_legacy_comparisons/);
  assert.match(sql, /set comparison_state = 'legacy_match'/);
  assert.match(sql, /'matched_identity_keys'/);
  assert.match(sql, /'opportunity_mutated', false/);
  assert.doesNotMatch(sql, /(insert into|update|delete from) public\.opportunities/i);
  assert.doesNotMatch(sql, /(insert into|update) public\.opportunity_ingestion_provenance/i);
});

test("Phase C2 comparison RPC is service-role-only", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  assert.match(sql, /revoke all on function public\.compare_v2_observation_deterministically\(uuid, uuid\) from public, anon, authenticated/);
  assert.match(sql, /grant execute on function public\.compare_v2_observation_deterministically\(uuid, uuid\) to service_role/);
  assert.match(sql, /admin_users/);
  assert.match(sql, /approved_for_promotion is true[\s\S]*V2_COMPARISON_REQUIRES_UNPROMOTED_OBSERVATION/);
  assert.match(sql, /mode is distinct from 'shadow'[\s\S]*V2_COMPARISON_REQUIRES_UNAPPROVED_SHADOW_SOURCE/);
});

test("authenticated staging Edge action is fixed to the selected Case B pair", async () => {
  const source = await readFile(functionUrl, "utf8");
  const auth = source.indexOf('from("admin_users")');
  const route = source.indexOf('body.action === "compare_c2_candidate"');
  assert.ok(route > auth);
  assert.match(source, /PHASE_C2_CASE_B_OBSERVATION_ID = "d5a8f0eb-f55e-4b8c-b2c3-146a2eea0df1"/);
  assert.match(source, /PHASE_C2_CASE_B_OPPORTUNITY_ID = "a416b17a-4249-41f7-9b14-51063ca9689e"/);
  assert.match(source, /promotion_executed: false/);
  assert.match(source, /opportunity_mutated: false/);
});
