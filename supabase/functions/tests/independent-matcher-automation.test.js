import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const adminActions = await readFile(new URL("../admin-company-actions/index.ts", import.meta.url), "utf8");
const tedImporter = await readFile(new URL("../import-ted/index.ts", import.meta.url), "utf8");
const migration = await readFile(new URL("../../migrations/20260910170000_independent_canonical_matcher_automation.sql", import.meta.url), "utf8");

test("the automation-only entrypoint reuses the existing canonical company refresh", () => {
  assert.match(adminActions, /action === "refresh_all_matches"/);
  assert.match(adminActions, /await refreshAllCompanyMatches\(adminClient\)/);
  assert.match(adminActions, /await refreshCompanyMatches\(supabase, String\(company\.id\)\)/);
  assert.match(adminActions, /const MIN_MATCH_SCORE = COMPANY_MATCH_THRESHOLD/);
  assert.match(adminActions, /calculateCompanyOpportunityMatch\(profile, opportunity\)/);
  const companyRefresh = adminActions.slice(adminActions.indexOf("async function refreshCompanyMatches"), adminActions.indexOf("async function refreshAllCompanyMatches"));
  assert.doesNotMatch(companyRefresh, /\.limit\(/);
  assert.match(adminActions, /AUTOMATION_ACTION_NOT_ALLOWED/);
  assert.match(adminActions, /AUTOMATION_REQUIRED/);
});

test("refresh persistence is idempotent and preserves existing match rows", () => {
  assert.match(adminActions, /\.upsert\(rows, \{ onConflict: "company_id,opportunity_id" \}\)/);
  assert.match(adminActions, /staleOpportunityIds/);
  assert.doesNotMatch(adminActions, /from\("opportunity_matches"\)\s*\.delete\(\)\s*\.eq\("company_id", companyId\);/);
});

test("TED no longer owns the global match refresh", () => {
  const importBlock = tedImporter.slice(tedImporter.indexOf("if (normalized.length)"), tedImporter.indexOf("await finalizeImportRun"));
  assert.doesNotMatch(importBlock, /refreshMatchesForAllCompanies/);
  assert.match(importBlock, /generateWeeklyReports/);
});

test("the dedicated schedule uses dual auth and runs at 03:20 UTC", () => {
  assert.match(migration, /canonical-matcher-daily-production/);
  assert.match(migration, /'20 3 \* \* \*'/);
  assert.match(migration, /functions\/v1\/admin-company-actions/);
  assert.match(migration, /'action', 'refresh_all_matches'/);
  assert.match(migration, /'Authorization', gateway_authorization/);
  assert.match(migration, /'x-automation-secret', automation_secret/);
});

test("matcher automation has no AI, report, customer-send, source, or Ríkiskaup mutation", () => {
  assert.doesNotMatch(migration, /ai-review-match|generate_report|report_items|company_opportunity_sends|source_connectors|rikiskaup|ríkiskaup/i);
  const globalRefresh = adminActions.slice(adminActions.indexOf("async function refreshAllCompanyMatches"), adminActions.indexOf("async function loadCompanyProfile"));
  assert.doesNotMatch(globalRefresh, /ai[_-]|report|notification|email|send/i);
});
