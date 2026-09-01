import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  filterLegacyAutomationConnectors,
  LEGACY_CONNECTOR_AUTOMATION_ACTION,
  LEGACY_CONNECTOR_BATCHES,
  LEGACY_CONNECTOR_BLOCKED_SOURCES,
  resolveLegacyConnectorAutomationBatch,
} from "../_shared/legacy-connector-automation.js";

const edge = readFileSync(new URL("../import-source-connectors/index.ts", import.meta.url), "utf8");
const migration = readFileSync(new URL("../../migrations/20260901150000_legacy_connector_zero_click_automation.sql", import.meta.url), "utf8");
const productionUrl = "https://asojxjbsgqbfpbepojzh.supabase.co";
const expectedSources = [
  "Akranes útboð",
  "Akureyri Municipality",
  "Árborg",
  "Faxaflóahafnir útboð",
  "Hafnarfjörður Municipality",
  "Háskóli Íslands",
  "Mosfellsbær Municipality",
  "Múlaþing",
  "Reykjanesbær",
];

test("the two batches contain exactly the nine cleared legacy-only sources", () => {
  assert.deepEqual([...LEGACY_CONNECTOR_BATCHES.legacy_batch_1, ...LEGACY_CONNECTOR_BATCHES.legacy_batch_2], expectedSources);
  assert.equal(new Set(expectedSources).size, 9);
  for (const blocked of LEGACY_CONNECTOR_BLOCKED_SOURCES) {
    assert.equal(expectedSources.includes(blocked), false, `${blocked} must remain excluded`);
  }
  assert.ok(LEGACY_CONNECTOR_BLOCKED_SOURCES.includes("Ríkiskaup / island.is procurement"));
});

test("only exact allowlisted connector names survive runtime filtering", () => {
  const connectors = [...expectedSources, ...LEGACY_CONNECTOR_BLOCKED_SOURCES, "Unknown source"]
    .map((name) => ({ sources: { name } }));
  const batch = resolveLegacyConnectorAutomationBatch({
    action: LEGACY_CONNECTOR_AUTOMATION_ACTION,
    batchKey: "legacy_batch_1",
    supabaseUrl: productionUrl,
    isAutomation: true,
  });
  assert.deepEqual(filterLegacyAutomationConnectors(connectors, batch.sourceNames).map((row) => row.sources.name), LEGACY_CONNECTOR_BATCHES.legacy_batch_1);
});

test("automation action fails closed for auth, project, and unknown batch", () => {
  assert.throws(() => resolveLegacyConnectorAutomationBatch({ action: LEGACY_CONNECTOR_AUTOMATION_ACTION, batchKey: "legacy_batch_1", supabaseUrl: productionUrl, isAutomation: false }), /SECRET_REQUIRED/);
  assert.throws(() => resolveLegacyConnectorAutomationBatch({ action: LEGACY_CONNECTOR_AUTOMATION_ACTION, batchKey: "legacy_batch_1", supabaseUrl: "https://ipixuxznqtrcdpzoxric.supabase.co", isAutomation: true }), /PRODUCTION_ONLY/);
  assert.throws(() => resolveLegacyConnectorAutomationBatch({ action: LEGACY_CONNECTOR_AUTOMATION_ACTION, batchKey: "rikiskaup", supabaseUrl: productionUrl, isAutomation: true }), /BATCH_NOT_ALLOWED/);
  assert.equal(resolveLegacyConnectorAutomationBatch({ action: "normal_admin_import", batchKey: "legacy_batch_1", supabaseUrl: productionUrl, isAutomation: false }), null);
});

test("scheduled path is bounded and forces every downstream option off", () => {
  for (const batchKey of Object.keys(LEGACY_CONNECTOR_BATCHES)) {
    const batch = resolveLegacyConnectorAutomationBatch({ action: LEGACY_CONNECTOR_AUTOMATION_ACTION, batchKey, supabaseUrl: productionUrl, isAutomation: true });
    assert.equal(batch.limit, 20);
    assert.ok(batch.maxSources <= 5);
    assert.equal(batch.runMatching, false);
    assert.equal(batch.runReports, false);
    assert.equal(batch.runAi, false);
  }
  assert.match(edge, /maxAiClassifications: scheduledLegacyBatch \? 0/);
  assert.match(edge, /const runMatching = scheduledLegacyBatch\?\.runMatching/);
  assert.match(edge, /const runReports = scheduledLegacyBatch\?\.runReports/);
  assert.match(edge, /!scheduledLegacyBatch && \(body\.reenrichMissingDeadlines/);
  assert.match(edge, /LEGACY_CONNECTOR_AUTOMATION_SOURCE_OVERRIDE_BLOCKED/);
});

test("per-source failures remain isolated and fully represented in run details", () => {
  assert.match(edge, /for \(let connectorIndex = 0; connectorIndex < connectors\.length/);
  assert.match(edge, /catch \(error\) \{[\s\S]*failedSource[\s\S]*updateConnectorState[\s\S]*mergeImportDetails/s);
  assert.match(edge, /expected_source_names/);
  assert.match(edge, /not_configured_or_disabled/);
  assert.match(edge, /per_source: \[\]/);
});

test("cron uses dual auth, exact endpoint, distinct schedules, and no legacy/V2 schedule changes", () => {
  assert.match(migration, /v2_routine_gateway_authorization\(\)/);
  assert.match(migration, /'Authorization',gateway_authorization/);
  assert.match(migration, /'x-automation-secret',secret/);
  assert.doesNotMatch(migration, /service_role/i);
  assert.match(migration, /'legacy-source-connectors-batch-1',[\s\S]*'30 0 \* \* \*'/);
  assert.match(migration, /'legacy-source-connectors-batch-2',[\s\S]*'50 0 \* \* \*'/);
  assert.doesNotMatch(migration, /trigger_(vegagerdin|isafjordur|borgarbyggd|gardabaer|reykjavik)_v2_automation/);
  assert.doesNotMatch(migration, /ted-daily-automation|trigger_ted_automation/);
});

test("scheduled legacy implementation invokes no matching, AI, reports, actions, or sends", () => {
  assert.match(edge, /matching: false; reports: false; ai: false/);
  assert.doesNotMatch(migration, /refresh.*match|ai-review|generate.*report|report_items|company_opportunity_sends|notification|send/i);
  assert.match(edge, /if \(runMatching &&/);
  assert.match(edge, /if \(runReports\)/);
});
