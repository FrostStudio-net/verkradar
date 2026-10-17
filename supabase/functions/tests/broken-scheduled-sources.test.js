import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { LEGACY_CONNECTOR_BATCHES } from "../_shared/legacy-connector-automation.js";

const migrationUrl = new URL("../../migrations/20261016090000_disable_broken_hi_reykjanesbaer_connectors.sql", import.meta.url);
const endpointMigrationUrl = new URL("../../migrations/20261017100000_record_current_reykjanesbaer_tender_url.sql", import.meta.url);

test("broken HÍ and Reykjanesbær connectors are absent from every scheduled batch", () => {
  const scheduled = Object.values(LEGACY_CONNECTOR_BATCHES).flat();
  assert.equal(scheduled.includes("Háskóli Íslands"), false);
  assert.equal(scheduled.includes("Reykjanesbær"), false);
  assert.deepEqual(LEGACY_CONNECTOR_BATCHES.legacy_batch_2, [
    "Hafnarfjörður Municipality",
    "Mosfellsbær Municipality",
    "Múlaþing",
  ]);
});

test("migration disables only the two audited connectors and preserves schedules and history", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  assert.match(sql, /https:\/\/www\.hi\.is\/rss\.xml/);
  assert.match(sql, /https:\/\/www\.reykjanesbaer\.is\/reykjanesbaer\/fjarmal\/utbod/);
  assert.match(sql, /connector_type = 'permission_required'/);
  assert.match(sql, /enabled = false/g);
  assert.match(sql, /robots\.txt contains User-agent: \* \/ Disallow: \//);
  assert.doesNotMatch(sql, /cron\.(?:schedule|unschedule)/);
  assert.doesNotMatch(sql, /update\s+public\.opportunities/i);
  assert.doesNotMatch(sql, /delete\s+from/i);
  assert.doesNotMatch(sql, /opportunity_matches|alert|ai_review|company_profiles?/i);
});

test("Reykjanesbær registration records the current official page without enabling automation", async () => {
  const sql = await readFile(endpointMigrationUrl, "utf8");
  assert.match(sql, /https:\/\/www\.reykjanesbaer\.is\/is\/stjornsysla\/fjarmal-og-rekstur\/utbod/);
  assert.match(sql, /connector_type = 'permission_required'/);
  assert.match(sql, /not enabled/);
  assert.match(sql, /robots\.txt contains User-agent: \* \/ Disallow: \//);
  assert.doesNotMatch(sql, /cron\.(?:schedule|unschedule)/);
  assert.doesNotMatch(sql, /update\s+public\.opportunities/i);
  assert.doesNotMatch(sql, /delete\s+from/i);
  assert.doesNotMatch(sql, /opportunity_matches|alert|ai_review|company_profiles?/i);
});
