import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  parseVeiturDynamicPurchasingSystemPages,
  VEITUR_DPS_ADMISSION_CLOSE_DATE,
  VEITUR_DPS_REFERENCE,
  VEITUR_DPS_SOURCE_URL,
} from "../_shared/veitur-dps.js";

const statusPage = `
  <main><h1>Óskum eftir fleiri samstarfsaðilum í gagnvirkt innkaupakerfi</h1>
  <p>Hægt er að sækja um núna</p>
  <p>Verkefni tengjast veitulögnum, jarðvinnu og yfirborðsfrágangi.</p>
  <p>Innan kerfisins eru einungis lokuð útboð þar sem samþykktir aðilar fá þátttökurétt.</p>
  <p>Opið er fyrir umsóknir yfir gildistíma kerfisins eða þar til í apríl 2028.</p></main>`;
const identityPage = `
  <main><h1>Kynningarfundur um gagnvirkt innkaupakerfi Veitna</h1>
  <p>Boðið er til kynningar á gagnvirku innkaupakerfi nr. VEGK-2024-01 vegna veitulagna, jarðvinnu og yfirborðsfrágangs.</p></main>`;

test("official Veitur pages produce one persistent actionable DPS parent identity", () => {
  const item = parseVeiturDynamicPurchasingSystemPages(statusPage, identityPage);
  assert.equal(item.externalId, VEITUR_DPS_REFERENCE);
  assert.equal(item.link, VEITUR_DPS_SOURCE_URL);
  assert.equal(item.procurementType, "dynamic_purchasing_system");
  assert.equal(item.formType, "competition");
  assert.equal(item.deadline, VEITUR_DPS_ADMISSION_CLOSE_DATE);
  assert.equal(item.raw.deadline_semantics, "system_admission_closing_date");
  assert.equal(item.raw.rolling_admission, true);
  assert.equal(item.raw.call_offs_are_separate_opportunities, true);
  assert.match(item.location, /Reykjavík.*Suðurland.*Vesturland/);
  assert.equal(item.content, item.description);
  assert.ok(item.content.length < 500);
});

test("Veitur DPS parser fails closed when status, scope, identity, or admission evidence is absent", () => {
  assert.equal(parseVeiturDynamicPurchasingSystemPages("<p>Almenn frétt</p>", identityPage), null);
  assert.equal(parseVeiturDynamicPurchasingSystemPages(statusPage, "<p>Gagnvirkt kerfi án auðkennis</p>"), null);
  assert.equal(parseVeiturDynamicPurchasingSystemPages(statusPage.replace("apríl 2028", "síðar"), identityPage), null);
  assert.equal(parseVeiturDynamicPurchasingSystemPages(statusPage.replace("lokuð útboð", "fréttir"), identityPage), null);
});

test("production migration is company-specific, does not add broad lagnir, and never crawls blocked Útboðsvefur", async () => {
  const migration = await readFile(new URL("../../migrations/20261102120000_gardathjonusta_lagnavinna_recall.sql", import.meta.url), "utf8");
  assert.match(migration, /cad6b69e-b021-447d-b637-31b2e8dbff2e/);
  assert.match(migration, /Garðaþjónusta Reykjavíkur ehf\./);
  for (const term of ["lagnavinna", "veitulagnir", "pípulagnir", "fráveita", "skólplagnir"]) assert.match(migration, new RegExp(term));
  assert.doesNotMatch(migration, /\(target_company_id,\s*'lagnir'\)/);
  assert.doesNotMatch(migration, /fóðrun|lagnafóðrun/i);
  assert.doesNotMatch(migration, /https:\/\/utbodsvefur\.is/i);
  assert.doesNotMatch(migration, /(?:insert|update|delete)\s+(?:into\s+|from\s+)?public\.(?:opportunity_matches|internal_match_alert_outbox|company_opportunity_sends|report_items)/i);
});

test("connector implementation keeps DPS type and admission semantics on the canonical row", async () => {
  const edge = await readFile(new URL("../import-source-connectors/index.ts", import.meta.url), "utf8");
  assert.match(edge, /type: procurementType/);
  assert.match(edge, /deadline_semantics/);
  assert.match(edge, /call_offs_are_separate_opportunities/);
  assert.match(edge, /VEITUR_DPS_IDENTITY_URL/);
});
