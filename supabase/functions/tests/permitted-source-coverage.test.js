import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { classifyProcurementStage } from "../_shared/procurement-stage.js";
import {
  buildTedCurrentQuery,
  classifyCoverageHealth,
  extractTedNoticeFields,
  latestTedPublicationDate,
  TED_RESULT_FIELDS,
} from "../_shared/ted-source-coverage.js";

const importerUrl = new URL("../import-ted/index.ts", import.meta.url);
const migrationUrl = new URL("../../migrations/20261123180000_permitted_procurement_source_coverage.sql", import.meta.url);

const veuNotice = {
  "publication-number": "721659-2026",
  "internal-identifier-proc": "VEU-2609-0060",
  "notice-title": "Framework Agreement for Trenchless Lining of Sewer Pipelines",
  "buyer-name": "Veitur ohf.",
  "publication-date": "2026-10-19",
  "deadline-receipt-request": "2027-01-18T14:00:00Z",
  "description-proc": "Veitur intends to establish a framework agreement with up to two contractors.",
  "description-lot": [
    "Trenchless lining of sewer pipelines, including foul water and stormwater pipelines.",
    "Cleaning, CCTV inspection, supply, installation, curing, testing and local rehabilitation.",
  ],
  "place-of-performance": "Höfuðborgarsvæði",
  "place-of-performance-country-lot": "ISL",
  "main-classification-lot": "45232440",
  "framework-agreement-lot": "fa-mix",
  "dps-usage-lot": "none",
};

test("scheduled TED discovery is server-side Iceland scoped instead of a global 50-row sample", () => {
  assert.equal(
    buildTedCurrentQuery("iceland", "20260726", "20261123"),
    "publication-date >= 20260726 AND deadline-receipt-request >= 20261123 AND buyer-country = ISL",
  );
  assert.equal(
    buildTedCurrentQuery("nordic", "20260726", "20261123"),
    "publication-date >= 20260726 AND deadline-receipt-request >= 20261123 AND buyer-country IN (ISL NOR DNK SWE FIN)",
  );
  assert.equal(
    buildTedCurrentQuery("eu-broad", "20260726", "20261123"),
    "publication-date >= 20260726 AND deadline-receipt-request >= 20261123",
  );
  assert.throws(() => buildTedCurrentQuery("iceland", "2026-07-26", "20261123"), /YYYYMMDD/);
});

test("official TED result fields cover identity, deadline, scope, geography and procurement system type", () => {
  for (const field of [
    "publication-number", "internal-identifier-proc", "notice-title", "buyer-name",
    "deadline-receipt-request", "description-proc", "description-lot",
    "place-of-performance", "place-of-performance-country-lot",
    "framework-agreement-lot", "dps-usage-lot",
  ]) assert.ok(TED_RESULT_FIELDS.includes(field), field);
});

test("VEU-2609-0060 official TED fixture yields complete canonical input", () => {
  const fields = extractTedNoticeFields(veuNotice);
  assert.equal(fields.externalId, "721659-2026");
  assert.equal(fields.internalReference, "VEU-2609-0060");
  assert.equal(fields.buyer, "Veitur ohf.");
  assert.equal(fields.deadline, "2027-01-18");
  assert.equal(fields.publishedDate, "2026-10-19");
  assert.equal(fields.location, "Höfuðborgarsvæði");
  assert.match(fields.description, /foul water and stormwater pipelines/);
  assert.match(fields.description, /CCTV inspection/);
  assert.equal(fields.dynamicPurchasingSystem, false);
});

test("dynamic purchasing systems remain one actionable parent observation and are not confused with frameworks", () => {
  const dps = extractTedNoticeFields({
    ...veuNotice,
    "publication-number": "DPS-001-2026",
    "internal-identifier-proc": "VEGK-2024-01",
    "notice-title": "Dynamic purchasing system for utility installation and earthworks",
    "description-lot": "Applications remain open throughout the system period.",
    "dps-usage-lot": "dps-list",
  });
  assert.equal(dps.dynamicPurchasingSystem, true);
  const classification = classifyProcurementStage({
    source_type: "ted",
    source_organisation: "TED Iceland/Nordic",
    title: dps.title,
    body_text: dps.description,
    deadline: "2028-04-08",
    authoritative_metadata: { form_type: "competition" },
  });
  assert.equal(classification.actionable_for_suppliers, true);
});

test("expired TED notices cannot remain supplier actionable", () => {
  const classification = classifyProcurementStage({
    source_type: "ted",
    source_organisation: "TED Iceland/Nordic",
    title: "Expired works tender",
    body_text: "Road works",
    deadline: "2020-01-01",
    authoritative_metadata: { form_type: "competition" },
  });
  assert.equal(classification.actionable_for_suppliers, false);
  assert.ok(classification.negative_signals.includes("supplier_deadline_expired"));
});

test("coverage health does not report HTTP-only, partial or fixture sources as healthy", () => {
  const common = { requestSucceeded: true, currentRecords: 2, latestPublicationAt: "2026-11-20", now: "2026-11-23" };
  assert.equal(classifyCoverageHealth(common), "healthy");
  assert.equal(classifyCoverageHealth({ ...common, currentRecords: 0 }), "stale");
  assert.equal(classifyCoverageHealth({ ...common, latestPublicationAt: "2026-01-01" }), "stale");
  assert.equal(classifyCoverageHealth({ ...common, blocked: true }), "blocked");
  assert.equal(classifyCoverageHealth({ ...common, permissionRequired: true }), "permission_required");
  assert.equal(classifyCoverageHealth({ ...common, fixtureOnly: true }), "fixture_only");
  assert.equal(classifyCoverageHealth({ ...common, shadowOnly: true }), "shadow_only");
  assert.equal(latestTedPublicationDate([veuNotice]), "2026-10-19T00:00:00.000Z");
});

test("TED persistence dedupes on official source and publication identity", async () => {
  const importer = await readFile(importerUrl, "utf8");
  assert.match(importer, /upsert\(prepared, \{ onConflict: "source_id,external_id" \}\)/);
  assert.match(importer, /isAutomation \? "iceland" : "nordic"/);
  assert.match(importer, /extractTedNoticeFields\(notice\)/);
  assert.doesNotMatch(importer, /utbodsvefur\.is|in-tendhost/i);
});

test("blocked national sources stay disabled and fixture-only configs cannot become production imports", async () => {
  const migration = await readFile(migrationUrl, "utf8");
  assert.match(migration, /robots\.txt disallows all crawlers/i);
  assert.match(migration, /connector_type = 'permission_required'[\s\S]*enabled = false[\s\S]*coverage_health_state = 'permission_required'/);
  assert.match(migration, /coverage_health_state = 'blocked'[\s\S]*sources\.name = 'Útboðsvefur\.is'/);
  assert.match(migration, /where source_key in \([\s\S]*'rikiskaup-utbod-v2'[\s\S]*'veitur-utbod-v2'[\s\S]*'orkuveitan-utbod-v2'[\s\S]*\)[\s\S]*and mode = 'fixture_only'/);
  assert.doesNotMatch(migration, /set\s+mode\s*=\s*'(shadow|promote)'/i);
  assert.match(migration, /BLOCKED_UTBODSVEFUR_AUTOMATION_REMAINS_ENABLED/);
  assert.match(migration, /update public\.source_status status_rows[\s\S]*'blocked'[\s\S]*'permission_required'/);
});
