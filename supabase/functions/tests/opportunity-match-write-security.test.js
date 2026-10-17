import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const migration = readFileSync(new URL("../../../supabase/migrations/20261017113000_opportunity_match_customer_read_only.sql", import.meta.url), "utf8");
const app = readFileSync(new URL("../../../app.js", import.meta.url), "utf8");
const adminActions = readFileSync(new URL("../admin-company-actions/index.ts", import.meta.url), "utf8");

test("authenticated browser role is reduced to SELECT on canonical matches", () => {
  assert.match(migration, /revoke all on public\.opportunity_matches from public, anon, authenticated/i);
  assert.match(migration, /grant select on public\.opportunity_matches to authenticated/i);
  assert.doesNotMatch(migration, /grant (?:insert|update|delete|all).*opportunity_matches.*authenticated/i);
  assert.match(migration, /grant all on public\.opportunity_matches to service_role/i);
});

test("only tenant-scoped and admin SELECT policies remain", () => {
  assert.match(migration, /drop policy if exists "Company members manage opportunity matches"/i);
  assert.match(migration, /drop policy if exists "opportunity_matches_own"/i);
  assert.match(migration, /create policy "Admins read opportunity matches"[\s\S]*for select/i);
  assert.match(migration, /create policy "Company members read opportunity matches"[\s\S]*for select[\s\S]*is_company_member\(company_id\)[\s\S]*v2_phase_c_is_restricted\(opportunity_id\)/i);
});

test("customer frontend cannot insert, update, or delete canonical matches", () => {
  const matching = app.match(/async function runMatchingForCurrentCompany\(\)[\s\S]*?\n}\n\nasync function addOpportunity/)?.[0] || "";
  assert.doesNotMatch(matching, /\.from\("opportunity_matches"\)/);
  assert.match(matching, /state\.isAdmin[\s\S]*runAdminCompanyAction\(company\.id, "refresh_matches"\)/);
  const stageOverride = app.match(/async function updateOpportunityReportOverride[\s\S]*?\n}\n\nasync function getOrCreateSource/)?.[0] || "";
  assert.doesNotMatch(stageOverride, /\.from\("opportunity_matches"\)/);
  assert.match(stageOverride, /runAdminOpportunityAction\("sync_opportunity_match_safety"/);
});

test("save and ignore state remains in company_opportunity_actions", () => {
  assert.match(app, /async function setCompanyOpportunityAction[\s\S]*\.from\("company_opportunity_actions"\)[\s\S]*\.upsert\(/);
  assert.match(app, /async function clearCompanyOpportunityAction[\s\S]*\.from\("company_opportunity_actions"\)[\s\S]*\.delete\(/);
});

test("secured admin and service paths retain canonical write operations", () => {
  assert.match(adminActions, /action === "refresh_matches"/);
  assert.match(adminActions, /action === "review_match"/);
  assert.match(adminActions, /action === "sync_opportunity_match_safety"/);
  assert.match(adminActions, /async function refreshCompanyMatches[\s\S]*\.from\("opportunity_matches"\)[\s\S]*\.upsert\(/);
  assert.match(adminActions, /async function reviewOpportunityMatch[\s\S]*\.from\("opportunity_matches"\)[\s\S]*\.update\(/);
  assert.match(adminActions, /async function syncOpportunityMatchSafety[\s\S]*\.from\("opportunity_matches"\)[\s\S]*\.update\(/);
});

test("migration does not alter the legitimate operator-alert trigger or match history", () => {
  assert.doesNotMatch(migration, /drop trigger|create trigger|insert into public\.opportunity_matches|update public\.opportunity_matches|delete from public\.opportunity_matches/i);
});
