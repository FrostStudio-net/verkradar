import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createObservation } from "../_shared/ingestion-v2/contracts.js";
import { dedupeIsafjordurObservations } from "../_shared/ingestion-v2/shadow-quality.js";
import { isafjordurRssAdapter } from "../_shared/ingestion-v2/adapters/isafjordur-rss.js";

const migrationUrl = new URL("../../migrations/20260831090000_isafjordur_phase_b_comparison_repair.sql", import.meta.url);
const runtimeUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);

test("Ísafjarðarbær adapter version matches the repaired source configuration", () => {
  assert.equal(isafjordurRssAdapter.parserVersion, "1.1.0");
});

async function observation(overrides = {}) {
  return createObservation({
    external_id: "https://www.isafjardarbaer.is/is/moya/news/oskad-eftir-tilbodum-i-verkid-endurnyjun-thakkants-a-torfnesi",
    canonical_url: "https://www.isafjardarbaer.is/is/moya/news/oskad-eftir-tilbodum-i-verkid-endurnyjun-thakkants-a-torfnesi",
    title: "Óskað eftir tilboðum í verkið endurnýjun þakkants á Torfnesi",
    description: "Ísafjarðarbær óskar eftir tilboðum í endurbætur á þakkanti íþróttahússins á Torfnesi.",
    buyer: "Ísafjarðarbær",
    publication_date: "2026-02-27",
    ...overrides,
  }, {
    run_id: "00000000-0000-4000-8000-000000000001",
    source_config_id: "00000000-0000-4000-8000-000000000002",
    source_id: "00000000-0000-4000-8000-000000000003",
    source_key: "isafjordur-utbod-v2",
    source_name: "Ísafjarðarbær útboð v2",
    parser_name: "isafjordur-rss",
    parser_version: "1.1.0",
    fetched_at: "2026-08-31T00:00:00Z",
  });
}

test("Ísafjarðarbær deterministically suppresses the Torfnes -1 duplicate", async () => {
  const canonical = await observation();
  const suffixed = await observation({
    external_id: `${canonical.external_id}-1`,
    canonical_url: `${canonical.canonical_url}-1`,
  });
  const result = dedupeIsafjordurObservations([suffixed, canonical]);
  assert.equal(result.observations.length, 1);
  assert.equal(result.observations[0].canonical_url, canonical.canonical_url);
  assert.equal(result.diagnostics.input_count, 2);
  assert.equal(result.diagnostics.canonical_count, 1);
  assert.equal(result.diagnostics.suppressed_count, 1);
  assert.equal(result.diagnostics.unresolved_group_count, 0);
  assert.equal(result.diagnostics.suppressed[0].suppressed_canonical_url, suffixed.canonical_url);
  assert.equal(result.diagnostics.suppressed[0].canonical_url, canonical.canonical_url);
});

test("same fingerprint without an exact suffix family remains unresolved", async () => {
  const first = await observation({ canonical_url: "https://www.isafjardarbaer.is/is/moya/news/verk-a", external_id: "verk-a" });
  const second = await observation({ canonical_url: "https://www.isafjardarbaer.is/is/moya/news/verk-b", external_id: "verk-b" });
  const result = dedupeIsafjordurObservations([first, second]);
  assert.equal(result.observations.length, 2);
  assert.equal(result.diagnostics.suppressed_count, 0);
  assert.equal(result.diagnostics.unresolved_group_count, 1);
});

test("Ísafjarðarbær comparison RPC is global, atomic, and fail-closed", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  assert.match(sql, /compare_isafjordur_shadow_observation/);
  assert.match(sql, /security definer/i);
  assert.match(sql, /for update/i);
  assert.match(sql, /from public\.opportunities\s+where source_id = o\.source_id and external_id = o\.external_id/is);
  assert.match(sql, /reference_ids/);
  assert.match(sql, /canonical_url_candidates/);
  assert.match(sql, /fingerprint_candidates/);
  assert.match(sql, /same_run_fingerprint_candidates/);
  assert.match(sql, /state_value := 'v2_only'/);
  assert.match(sql, /state_value := 'review_required'/);
  assert.match(sql, /state_value := 'conflict'/);
  assert.match(sql, /opportunity_mutated', false/);
  assert.match(sql, /revoke all on function public\.compare_isafjordur_shadow_observation\(uuid\) from public, anon, authenticated/i);
  assert.doesNotMatch(sql, /routine_production_enabled\s*=\s*true/i);
  assert.doesNotMatch(sql, /mode\s*=\s*'promote'/i);
});

test("Ísafjarðarbær health gate requires completed comparison and resolved deterministic duplicates", async () => {
  const runtime = await readFile(runtimeUrl, "utf8");
  assert.match(runtime, /compare_isafjordur_shadow_observation/);
  assert.match(runtime, /comparisonMetrics\.global_completed !== storedObservations\.length/);
  assert.match(runtime, /comparisonMetrics\.baseline_unavailable !== 0/);
  assert.match(runtime, /sameRunDedupe\.unresolved_group_count !== 0/);
  assert.match(runtime, /deterministic_identity_conflict/);
  assert.match(runtime, /V2_ISAFJORDUR_QUALITY_GATE/);
  assert.match(runtime, /customer_visible_writes: 0/);
});
