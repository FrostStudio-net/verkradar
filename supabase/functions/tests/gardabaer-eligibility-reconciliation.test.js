import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { isExplicitLocationAliasMatch } from "../_shared/location-aliases.js";

const migrationUrl = new URL("../../migrations/20260831150000_gardabaer_verified_canonical_reconciliation.sql", import.meta.url);

test("Garðabær buyer normalization gate uses the exact database-normalized value", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  assert.match(sql, /v2_normalize_identity_text\(o\.buyer\)<>'gardabar'/);
  assert.doesNotMatch(sql, /v2_normalize_identity_text\(o\.buyer\)<>'gardabaer'/);
  assert.match(sql, /o\.external_id!~'\^gardabaer:'/);
  assert.match(sql, /gardabaer\\\.is\/framkvaemdir\/utbod/);
});

test("only an internally consistent explicit canonical group collapses", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  const resolver = sql.slice(sql.indexOf("create or replace function public.v2_resolve_gardabaer_established_group"), sql.indexOf("create or replace function public.v2_admit_gardabaer_observation"));
  assert.match(resolver, /canonical_opportunity_id/);
  assert.match(resolver, /not canonical_id=any\(candidate_ids\)/);
  assert.match(resolver, /cardinality\(candidate_ids\)>1 and cardinality\(resolved_ids\)=1 and has_explicit_link/);
  assert.match(resolver, /V2_ROUTINE_CANONICAL_LINK_BROKEN/);
  assert.match(resolver, /V2_ROUTINE_DETERMINISTIC_CONFLICT/);
  assert.match(sql, /source_ids\[1\]<>url_ids\[1\]/);
  assert.match(sql, /official_canonical_text is distinct from q\.id::text/);
  assert.match(sql, /not q\.id=any\(fp_ids\)/);
});

test("canonical reconciliation is classification-only, audited, and downstream-free", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  const reconciliation = sql.slice(sql.indexOf("reconciliation_before:=jsonb_build_object"), sql.indexOf("matched_by:='fingerprint'"));
  for (const field of [
    "procurement_stage", "actionable_for_suppliers", "classification_confidence",
    "classification_reason", "positive_signals", "negative_signals", "classified_by",
    "classified_at", "classifier_version", "requires_admin_review", "updated_at",
  ]) assert.match(reconciliation, new RegExp(field));
  for (const forbidden of ["title", "buyer", "description", "deadline", "location", "url", "source_id", "external_id", "raw_payload"]) {
    assert.doesNotMatch(reconciliation, new RegExp(`set[\\s\\S]*${forbidden}\\s*=`, "i"));
  }
  assert.match(sql, /v2_canary_downstream_assertions\(q\.id\)/);
  assert.match(sql, /'opportunity_mutated',reconciled/);
  assert.match(sql, /'mutation_scope'.*'classification_only'/s);
  assert.match(sql, /reconciliation_before/);
  assert.match(sql, /reconciliation_after/);
  assert.match(sql, /'established_canonical_group',established_group/);
  assert.doesNotMatch(sql, /insert into public\.(opportunity_matches|ai_match_reviews|reports|report_items|company_opportunity_actions|company_opportunity_sends|notifications)/);
  assert.match(sql, /'matching_triggered',false,'downstream_triggered',false/);
});

test("Garðabær is an exact Capital Area alias without broad municipality guessing", () => {
  assert.equal(isExplicitLocationAliasMatch("Capital Area", "Garðabær"), true);
  assert.equal(isExplicitLocationAliasMatch("Capital Area", "gardabaer"), true);
  assert.equal(isExplicitLocationAliasMatch("Capital Area", "Akureyri"), false);
  assert.equal(isExplicitLocationAliasMatch("Suðurnes", "Garðabær"), false);
});

test("the fix does not add semantic winter or street-cleaning synonyms", async () => {
  const [sql, aliases] = await Promise.all([
    readFile(migrationUrl, "utf8"),
    readFile(new URL("../_shared/location-aliases.js", import.meta.url), "utf8"),
  ]);
  assert.doesNotMatch(`${sql}\n${aliases}`, /hálkueyðing|snjóruðningi|hreinsun gatna|sópun/i);
});
