import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const migration = readFileSync(
  new URL("../../migrations/20260902110000_ted_scheduler_gateway_auth.sql", import.meta.url),
  "utf8",
);
const edge = readFileSync(new URL("../import-ted/index.ts", import.meta.url), "utf8");
const originalCron = readFileSync(
  new URL("../../migrations/20260530152000_ted_automation_cron.sql", import.meta.url),
  "utf8",
);

test("TED dispatcher uses the existing Vault-backed gateway credential plus automation secret", () => {
  assert.match(migration, /v2_routine_gateway_authorization\(\)/);
  assert.match(migration, /'Authorization', gateway_authorization/);
  assert.match(migration, /'x-automation-secret', automation_secret/);
  assert.match(
    migration,
    /automation_url <> 'https:\/\/asojxjbsgqbfpbepojzh\.supabase\.co\/functions\/v1\/import-ted'/,
  );
  assert.match(migration, /nullif\(automation_secret, ''\) is null/);
});

test("no credential or service-role token is embedded in the dispatcher", () => {
  assert.doesNotMatch(migration, /service[_ -]?role/i);
  assert.doesNotMatch(migration, /eyJ[A-Za-z0-9_-]+\./);
  assert.doesNotMatch(migration, /vault\.decrypted_secrets/);
});

test("import-ted keeps application automation-secret validation and admin JWT fallback", () => {
  assert.match(edge, /req\.headers\.get\("authorization"\)/);
  assert.match(edge, /req\.headers\.get\("x-automation-secret"\)/);
  assert.match(edge, /automationSecret\.length > 0 && automationHeader === automationSecret/);
  assert.match(edge, /if \(!isAutomation\)/);
  assert.match(edge, /admin_users/);
});

test("the focused migration changes no schedule, matcher, reports, sources, or RLS", () => {
  assert.doesNotMatch(migration, /cron\.(?:schedule|unschedule)/);
  assert.doesNotMatch(migration, /opportunity_matches|refresh.*match|generate.*report/i);
  assert.doesNotMatch(migration, /v2_source_configs|source_connectors/);
  assert.doesNotMatch(migration, /create\s+policy|alter\s+table/i);
  assert.match(originalCron, /'ted-daily-automation',[\s\S]*'0 3 \* \* \*'/);
});

test("the dispatcher remains service-only", () => {
  assert.match(
    migration,
    /revoke all on function public\.trigger_ted_automation\(\)[\s\S]*from public, anon, authenticated/,
  );
});
