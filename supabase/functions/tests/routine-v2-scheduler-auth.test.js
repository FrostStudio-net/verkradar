import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const migration = readFileSync(new URL("../../migrations/20260831130000_routine_v2_scheduler_gateway_auth.sql", import.meta.url), "utf8");
const edge = readFileSync(new URL("../import-source-connectors-v2/index.ts", import.meta.url), "utf8");
const dispatchers = ["isafjordur", "borgarbyggd", "gardabaer", "reykjavik"];

test("all routine dispatchers require gateway JWT plus automation secret", () => {
  for (const source of dispatchers) {
    const start = migration.indexOf(`trigger_${source}_v2_automation()`);
    assert.notEqual(start, -1);
    const body = migration.slice(start, migration.indexOf("$$;", start));
    assert.match(body, /'Authorization',gateway_authorization/);
    assert.match(body, /'x-automation-secret',secret/);
    assert.match(body, /routine_production_enabled/);
    assert.match(body, /mode<>'shadow'/);
    assert.match(body, /promotion_approved/);
  }
});

test("gateway credential is Vault-backed anon JWT and no credential is committed", () => {
  assert.match(migration, /vault\.decrypted_secrets/);
  assert.match(migration, /v2_routine_gateway_anon_jwt/);
  assert.doesNotMatch(migration, /service_role/i);
  assert.doesNotMatch(migration, /eyJ[A-Za-z0-9_-]+\./);
});

test("application routine authorization remains exact-project, exact-source and secret gated", () => {
  assert.match(edge, /isProduction/);
  assert.match(edge, /req\.headers\.get\("x-automation-secret"\) === requiredEnv\("AUTOMATION_SECRET"\)/);
  for (const action of ["run_isafjordur_production", "run_borgarbyggd_production", "run_gardabaer_production", "run_reykjavik_production"]) {
    assert.match(edge, new RegExp(action));
  }
  assert.match(edge, /admin_users/);
  assert.match(edge, /V2_ROUTINE_AUTOMATION_UNAUTHORIZED/);
});

test("migration does not alter schedules, source configuration, admission, or legacy functions", () => {
  assert.doesNotMatch(migration, /cron\.schedule|cron\.unschedule/);
  assert.doesNotMatch(migration, /update\s+public\.v2_source_configs/i);
  assert.doesNotMatch(migration, /admit_.*v2_run/i);
  assert.doesNotMatch(migration, /trigger_ted_automation|import-ted|import-source-connectors(?:[^-]|$)/i);
});
