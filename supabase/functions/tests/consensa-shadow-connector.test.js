import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  applyConsensaObservationStatus,
  getConsensaIndexDiagnostics,
  parseConsensaIndex,
} from "../_shared/ingestion-v2/adapters/consensa-html-index.js";
import { createObservation } from "../_shared/ingestion-v2/contracts.js";
import { applySourcePredictionPolicy, getSourceClassificationContext, THREE_SOURCE_KEYS } from "../_shared/ingestion-v2/shadow-quality.js";

const fixtureRoot = new URL("../import-source-connectors-v2/_fixtures/", import.meta.url);
const migrationUrl = new URL("../../migrations/20260910220000_consensa_v2_shadow_automation.sql", import.meta.url);
const edgeUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);
const productionShadowUrl = new URL("../_shared/ingestion-v2/production-shadow.js", import.meta.url);

async function fixtureInput() {
  return JSON.stringify({
    page_html: await readFile(new URL("consensa-html-index.html", fixtureRoot), "utf8"),
    sitemap_xml: await readFile(new URL("consensa-sitemap.xml", fixtureRoot), "utf8"),
  });
}

test("Consensa parser extracts public fields, stable identity, sitemap metadata, and outbound Tendsign reference", async () => {
  const rows = parseConsensaIndex(await fixtureInput());
  assert.equal(rows.length, 2);
  assert.deepEqual(rows[0], {
    external_id: "consensa:reference:202632",
    procurement_reference: "202632",
    discovered_url: "https://www.consensa.is/utbod",
    canonical_url: "https://www.consensa.is/projects/kalka---jar%C3%B0vinna-og-undirst%C3%B6%C3%B0ur-st%C3%A1lgrindarh%C3%BAss",
    title: "Kalka - Jarðvinna og undirstöður stálgrindarhúss",
    description: "Consensa, fyrir hönd Kölku sf., óskar eftir tilboðum í jarðvinnu að Berghólabraut 7, 230 Reykjanesbæ. Nánari upplýsingar eru í útboðsgögnum.",
    buyer: "Kalka sf.",
    deadline: "2026-12-31",
    publication_date: null,
    source_published_at: null,
    location: "Reykjanesbæ",
    safe_source_payload: {
      listing_context: "published_tender_archive",
      procurement_type: "Verkframkvæmdir",
      tendsign_url: "https://tendsign.com/doc.aspx?MeFormsNoticeId=97876&GoTo=Tender",
      tendsign_notice_id: "97876",
      deadline_time: "12:00",
      deadline_at: "2026-12-31T12:00:00Z",
      sitemap_lastmod: "2026-08-19",
      sitemap_lastmod_is_publication_date: false,
      canonical_url_source: "public_sitemap",
      geographic_text: "Reykjanesbæ",
      identity_basis: "procurement_reference",
    },
  });
  assert.equal(rows[0].publication_date, null);
  assert.equal(rows[0].source_published_at, null);
  assert.deepEqual(getConsensaIndexDiagnostics(rows), {
    tender_rows: 2,
    references_recovered: 2,
    buyers_recovered: 2,
    deadlines_recovered: 2,
    tendsign_ids_recovered: 2,
    canonical_detail_urls_recovered: 2,
    structure_matched: true,
  });
});

test("Consensa stable identity falls back from reference to Tendsign ID and then public canonical URL", () => {
  const base = `<h1>Auglýst útboð</h1><div role="listitem"><div id="comp-mbnfkw3a2__x"><h2>Prófunarútboð</h2></div><div id="comp-mbnfkw3b5__x"><p>Kaupandi óskar eftir tilboðum í verk.</p></div><div>Númer :</div><div></div><div>Kaupandi :</div><div>Kaupandi ehf.</div><div>Tegund innkaupa :</div><div>Verkframkvæmdir</div><div>Skilafrestur :</div><div>31. des. 2026 kl. 12:00</div>`;
  const byTendsign = parseConsensaIndex(`${base}<a href="https://tendsign.com/doc.aspx?MeFormsNoticeId=12345&GoTo=Tender">Tendsign</a></div>`)[0];
  assert.equal(byTendsign.external_id, "consensa:tendsign:12345");
  const sitemap = `<urlset><url><loc>https://www.consensa.is/projects/profunarutbod</loc><lastmod>2026-09-01</lastmod></url></urlset>`;
  const byUrl = parseConsensaIndex(JSON.stringify({ page_html: `${base}</div>`, sitemap_xml: sitemap }))[0];
  assert.equal(byUrl.external_id, "consensa:url:https://www.consensa.is/projects/profunarutbod");
});

test("Consensa admission policy fails closed for expired or incomplete observations", async () => {
  const rows = applyConsensaObservationStatus(parseConsensaIndex(await fixtureInput()), new Date("2026-09-10T12:00:00Z"));
  assert.equal(rows[0].safe_source_payload.source_status, "active");
  assert.equal(rows[0].safe_source_payload.admission_eligible, true);
  assert.equal(rows[1].safe_source_payload.source_status, "expired");
  assert.equal(rows[1].safe_source_payload.admission_eligible, false);

  const basePrediction = { procurement_stage: "uncertain", actionable_for_suppliers: false, requires_admin_review: true, classification_confidence: 0.35 };
  const active = applySourcePredictionPolicy(basePrediction, rows[0], { source_key: THREE_SOURCE_KEYS.CONSENSA }, new Date("2026-09-10T12:00:00Z")).prediction;
  const expired = applySourcePredictionPolicy(basePrediction, rows[1], { source_key: THREE_SOURCE_KEYS.CONSENSA }, new Date("2026-09-10T12:00:00Z")).prediction;
  assert.equal(active.procurement_stage, "open_competition");
  assert.equal(active.actionable_for_suppliers, true);
  assert.equal(expired.procurement_stage, "completed");
  assert.equal(expired.actionable_for_suppliers, false);

  const incomplete = applyConsensaObservationStatus([{ ...rows[0], buyer: null }], new Date("2026-09-10T12:00:00Z"))[0];
  const observation = await createObservation(incomplete, {
    run_id: "00000000-0000-4000-8000-000000000001",
    source_config_id: "00000000-0000-4000-8000-000000000002",
    source_id: "00000000-0000-4000-8000-000000000003",
    source_key: THREE_SOURCE_KEYS.CONSENSA,
    source_name: "Consensa útboð v2",
    parser_name: "consensa-html-index",
    parser_version: "1.0.0",
  });
  assert.equal(observation.validation_state, "invalid");
  assert.deepEqual(observation.validation_errors, ["buyer_required"]);
});

test("Consensa parser fails closed on tender-like structural drift", () => {
  assert.throws(
    () => parseConsensaIndex("<h1>Auglýst útboð</h1><p>Númer: 202699 Kaupandi: X Skilafrestur: 31. des. 2026</p>"),
    { code: "V2_CONSENSA_STRUCTURE_MISMATCH" },
  );
});

test("Consensa production configuration is observation-only and scheduled before the matcher", async () => {
  const [migration, edge, productionShadow] = await Promise.all([
    readFile(migrationUrl, "utf8"), readFile(edgeUrl, "utf8"), readFile(productionShadowUrl, "utf8"),
  ]);
  assert.match(migration, /'consensa-utbod-v2'/);
  assert.match(migration, /'45 2 \* \* \*'/);
  assert.match(migration, /'shadow'/);
  assert.match(migration, /production_shadow_enabled = true/);
  assert.match(migration, /promotion_approved = false/);
  assert.match(migration, /routine_production_enabled = false/);
  assert.match(migration, /'wix_internal_api_requests', false/);
  assert.match(migration, /'tendsign_requests', false/);
  assert.match(migration, /compare_consensa_shadow_observation/);
  assert.doesNotMatch(migration, /insert\s+into\s+public\.opportunities/i);
  assert.doesNotMatch(migration, /opportunity_matches|ai-review-match|weekly_reports|send-email/i);
  assert.match(edge, /run_consensa_shadow_automation/);
  assert.match(edge, /V2_CONSENSA_SHADOW_AUTOMATION_UNAUTHORIZED/);
  assert.match(edge, /observation_only:\s*true/);
  assert.match(edge, /customer_visible_writes:\s*0/);
  assert.match(edge, /ai_triggered:\s*false/);
  assert.match(edge, /communications_triggered:\s*false/);
  assert.doesNotMatch(edge, /fetchWithRetry\([^\n]*(?:tendsign|_api\/)/i);
  assert.match(productionShadow, /consensa-utbod-v2/);
  assert.deepEqual(getSourceClassificationContext({ source_key: THREE_SOURCE_KEYS.CONSENSA }), {
    source_type: "procurement_consultant_tender_page",
    connector_type: "public_procurement_html_index",
    source_organisation: "Consensa",
  });
});
