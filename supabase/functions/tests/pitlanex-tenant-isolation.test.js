import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const migration = readFileSync(
  new URL("../../../supabase/migrations/20261015210000_detach_pitlanex_from_stale_raffix_owner.sql", import.meta.url),
  "utf8",
);
const rls = readFileSync(
  new URL("../../../supabase/migrations/20260717103000_fix_launch_rls_timeouts.sql", import.meta.url),
  "utf8",
);
const app = readFileSync(new URL("../../../app.js", import.meta.url), "utf8");

test("one Auth identity must not gain unintended access through stale companies.owner_id state", () => {
  assert.match(rls, /company_members\.status = 'active'[\s\S]*company_members\.user_id = auth\.uid\(\)[\s\S]*or exists[\s\S]*companies\.owner_id = auth\.uid\(\)/);
  assert.match(migration, /stale_raffix_id constant uuid := '701bfc6b-1349-4a2d-942c-488f25168f37'/);
  assert.match(migration, /drenlagnir_id constant uuid := '41941a6f-8ffc-46b9-8562-8982bf49d4b6'/);
  assert.match(migration, /update public\.companies\s+set owner_id = null\s+where id = stale_raffix_id\s+and owner_id = pitlanex_user_id/);
  assert.match(migration, /exists \(select 1 from public\.companies where owner_id = pitlanex_user_id\)/);
  assert.match(migration, /count\(\*\) from public\.company_members where user_id = pitlanex_user_id and status = 'active'\) <> 1/);
});

test("repair preserves tenant data, Drenlagnir membership, admins, and unrelated companies", () => {
  assert.match(migration, /related_counts_after is distinct from related_counts_before/);
  assert.match(migration, /membership_before/);
  assert.match(migration, /retained_raffix_before/);
  assert.match(migration, /protected_companies_before/);
  assert.match(migration, /admin_rows_before/);
  assert.doesNotMatch(migration, /delete\s+from/i);
  assert.doesNotMatch(migration, /update\s+auth\.users/i);
  assert.doesNotMatch(migration, /update\s+public\.company_members/i);
});

test("customer dashboard falls back to the sole active membership after stale ownership is cleared", () => {
  const resolver = app.match(/async function loadAuthenticatedCompany\(\)[\s\S]*?\n}\n\nasync function loadCompanyProfile/)?.[0] || "";
  assert.match(resolver, /\.eq\("owner_id", state\.user\.id\)/);
  assert.match(resolver, /loadActiveCompanyMemberships\(supabaseClient, state\.user\)/);
  assert.match(resolver, /\.eq\("id", membership\.company_id\)/);
});
