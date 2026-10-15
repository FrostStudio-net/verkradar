import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const migrationUrl = new URL("../../migrations/20261015230000_canonical_geography_and_expiry_quality.sql", import.meta.url);
const importerUrl = new URL("../import-source-connectors/index.ts", import.meta.url);

test("canonical quality migration repairs only audited geography and uses existing hidden state", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  assert.match(sql, /Húsavík \/ Norðurþing \/ Norðurland eystra/);
  assert.match(sql, /Reykjanes \/ Suðurnes/);
  assert.match(sql, /Mosfellsbær \/ Höfuðborgarsvæðið/);
  assert.match(sql, /deadline < \(now\(\) at time zone 'UTC'\)::date/);
  assert.match(sql, /set status = 'hidden'/);
  assert.doesNotMatch(sql, /delete\s+from\s+public\.opportunities/i);
  assert.doesNotMatch(sql, /insert\s+into\s+public\.opportunity_matches/i);
  assert.match(sql, /'15 3 \* \* \*'/);
});

test("connector fallback does not manufacture portal scope evidence", async () => {
  const source = await readFile(importerUrl, "utf8");
  assert.doesNotMatch(source, /Útboðstilkynning flutt inn af Útboðsvef/);
  assert.match(source, /description_quality: "title_only_no_meaningful_description"/);
});
