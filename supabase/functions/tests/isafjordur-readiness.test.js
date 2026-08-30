import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const edgeUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);
const migrationUrl = new URL("../../migrations/20260830220000_isafjordur_access_pacing.sql", import.meta.url);

test("Ísafjarðarbær live enrichment respects the published crawl delay and remains bounded", async () => {
  const [edge, sql] = await Promise.all([readFile(edgeUrl, "utf8"), readFile(migrationUrl, "utf8")]);
  assert.match(sql, /'detail_limit',4/);
  assert.match(sql, /'crawl_delay_ms',5000/);
  assert.match(sql, /run_deadline_ms=60000/);
  assert.match(edge, /nextIsafjordurRequestAt/);
  assert.match(edge, /Math\.max\(5000, Number\(config\.settings\?\.access_policy\?\.crawl_delay_ms/);
  assert.match(edge, /await new Promise\(\(resolve\) => setTimeout\(resolve, delayMs\)\)/);
  assert.doesNotMatch(sql, /routine_production_enabled\s*=\s*true|mode\s*=\s*'shadow'/i);
});
