import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import { parseWithV2Adapter } from "../_shared/ingestion-v2/adapters/index.js";
import { extractVegagerdinDetailMetadata } from "../_shared/ingestion-v2/adapters/vegagerdin-enrichment.js";
import { getVegagerdinIndexDiagnostics, parseCurrentListing, parsePlannedListing } from "../_shared/ingestion-v2/adapters/vegagerdin-html-index.js";
import { applySourcePredictionPolicy, enrichCandidatesBounded, THREE_SOURCE_KEYS } from "../_shared/ingestion-v2/shadow-quality.js";

const fixtureRoot = new URL("../import-source-connectors-v2/_fixtures/", import.meta.url);
const migrationUrl = new URL("../../migrations/20260831110000_vegagerdin_current_tender_phase_b_repair.sql", import.meta.url);
const functionUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);

test("Vegagerðin combined index keeps current and planned roles separate", async () => {
  const payload = await readFile(new URL("vegagerdin-html-index.json", fixtureRoot), "utf8");
  const rows = parseWithV2Adapter("vegagerdin-html-index", "1.1.0", payload);
  assert.equal(rows.length, 3);
  assert.deepEqual(rows.filter((row) => row.safe_source_payload.listing_role === "current_tender").map((row) => row.procurement_reference), ["25-025", "24-029"]);
  assert.deepEqual(rows.filter((row) => row.safe_source_payload.listing_role === "planned_tender").map((row) => row.procurement_reference), ["26-118"]);
  const diagnostics = getVegagerdinIndexDiagnostics(rows);
  assert.deepEqual(diagnostics, { current_tenders_found: 2, planned_tenders_found: 2, planned_observations_stored: 1, planned_promoted_to_current_suppressed: 1, broad_rss_rows: 0, structure_matched: true });
  assert.ok(rows.every((row) => row.buyer === "Vegagerðin"));
});

test("Vegagerðin current cards are isolated and reject unrelated links", () => {
  const html = `<main><h1>Auglýst útboð</h1>
    <a href="/verkefnin/utbod/first"><span>Útboð 26-001 · 1. ágúst 2026</span><span>Fyrsta verk</span><div class="Card_summary__x">Tilboðum skal skilað 10. september 2026.</div></a>
    <a href="/verkefnin/utbod/second"><span>Útboð 26-002 · 2. ágúst 2026</span><span>Annað verk</span></a>
    <a href="/vegagerdin/starfsemi/frettir/utbod"><span>Útboð 99-999 · 3. ágúst 2026</span><span>Frétt</span></a></main>`;
  const rows = parseCurrentListing(html);
  assert.equal(rows.length, 2);
  assert.equal(rows[0].deadline, "2026-09-10");
  assert.equal(rows[1].deadline, null);
  assert.equal(rows.some((row) => row.title === "Frétt"), false);
});

test("Vegagerðin current structure drift fails while a genuine empty page is safe", () => {
  assert.throws(() => parseCurrentListing("<main><h1>Auglýst útboð</h1><p>Útboð 26-001 án korts</p></main>"), /no isolated tender cards/i);
  assert.deepEqual(parseCurrentListing("<main><h1>Engin útboð í auglýsingu</h1></main>"), []);
});

test("Vegagerðin planned table parses references without creating open competitions", () => {
  const rows = parsePlannedListing(`<main><h1>Fyrirhuguð útboð</h1><table><tr><td>Útboðsnúmer</td><td>Verk</td><td>Auglýst</td></tr><tr><td>26-118</td><td>Krossá</td><td>2026</td></tr></table></main>`);
  assert.equal(rows.length, 1);
  assert.equal(rows[0].safe_source_payload.listing_context, "planned_procurement");
  const classified = applySourcePredictionPolicy(
    { procurement_stage: "open_competition", actionable_for_suppliers: true, requires_admin_review: false, classification_confidence: 0.95 },
    rows[0],
    { source_key: THREE_SOURCE_KEYS.VEGAGERDIN },
    new Date("2026-08-31T00:00:00Z"),
  );
  assert.equal(classified.prediction.procurement_stage, "upcoming_procurement");
  assert.equal(classified.prediction.actionable_for_suppliers, false);
  assert.equal(classified.category, "planned_procurement");
});

test("Vegagerðin detail extracts active reference, deadline, lifecycle, and evidence", async () => {
  const html = await readFile(new URL("vegagerdin-detail-active.html", fixtureRoot), "utf8");
  const metadata = extractVegagerdinDetailMetadata(html);
  assert.equal(metadata.procurement_reference, "25-025");
  assert.equal(metadata.deadline, "2026-09-15");
  assert.equal(metadata.source_status, "active");
  assert.equal(metadata.procurement_type, "open_tender");
  assert.equal(metadata.request_for_bids, true);
  assert.equal(metadata.buyer, "Vegagerðin");
});

test("Vegagerðin completed detail is follow-up and never actionable", async () => {
  const html = await readFile(new URL("vegagerdin-detail-followup.html", fixtureRoot), "utf8");
  const metadata = extractVegagerdinDetailMetadata(html);
  assert.equal(metadata.source_status, "completed");
  assert.equal(metadata.procurement_type, "award_or_followup");
  const result = applySourcePredictionPolicy(
    { procurement_stage: "open_competition", actionable_for_suppliers: true, requires_admin_review: false, classification_confidence: 0.95 },
    { deadline: "2026-09-15", safe_source_payload: { listing_role: "current_tender", listing_context: "current_procurement", shadow_enrichment: metadata } },
    { source_key: THREE_SOURCE_KEYS.VEGAGERDIN },
    new Date("2026-08-31T00:00:00Z"),
  );
  assert.equal(result.prediction.actionable_for_suppliers, false);
  assert.equal(result.category, "historical_procurement_or_followup");
});

test("Vegagerðin active current tender is actionable only with a future explicit deadline", async () => {
  const metadata = extractVegagerdinDetailMetadata(await readFile(new URL("vegagerdin-detail-active.html", fixtureRoot), "utf8"));
  const observation = { deadline: metadata.deadline, canonical_url: metadata.canonical_url, safe_source_payload: { listing_role: "current_tender", listing_context: "current_procurement", shadow_enrichment: metadata } };
  const future = applySourcePredictionPolicy(
    { procurement_stage: "uncertain", actionable_for_suppliers: false, requires_admin_review: true, classification_confidence: 0.35 },
    observation,
    { source_key: THREE_SOURCE_KEYS.VEGAGERDIN },
    new Date("2026-08-31T00:00:00Z"),
  );
  assert.equal(future.prediction.procurement_stage, "open_competition");
  assert.equal(future.prediction.actionable_for_suppliers, true);
  assert.equal(future.prediction.classification_confidence, 0.95);
  const expired = applySourcePredictionPolicy(future.prediction, observation, { source_key: THREE_SOURCE_KEYS.VEGAGERDIN }, new Date("2026-09-16T00:00:00Z"));
  assert.equal(expired.prediction.actionable_for_suppliers, false);
});

test("Vegagerðin enrichment is capped at 12 current details and never fetches planned rows", async () => {
  const current = Array.from({ length: 15 }, (_, index) => ({ title: `Tender ${index}`, canonical_url: `https://www.vegagerdin.is/verkefnin/utbod/tender-${index}`, safe_source_payload: { listing_context: "current_procurement" } }));
  const planned = [{ title: "Planned", canonical_url: "https://www.vegagerdin.is/verkefnin/utbod/fyrirhugud-utbod#26-118", safe_source_payload: { listing_context: "planned_procurement" } }];
  let requests = 0;
  const result = await enrichCandidatesBounded([...current, ...planned], { sourceKey: THREE_SOURCE_KEYS.VEGAGERDIN, limit: 99, fetchDetail: async () => { requests += 1; return "<p>no fields</p>"; } });
  assert.equal(requests, 12);
  assert.equal(result.metrics.attempted, 12);
  assert.equal(result.metrics.skipped, 4);
});

test("Vegagerðin migration and runtime use current/planned HTML with global fail-closed comparison", async () => {
  const [sql, source] = await Promise.all([readFile(migrationUrl, "utf8"), readFile(functionUrl, "utf8")]);
  assert.match(sql, /endpoint_url\s*=\s*'https:\/\/www\.vegagerdin\.is\/verkefnin\/utbod\/auglyst-utbod'/i);
  assert.match(sql, /planned_endpoint_url.*fyrirhugud-utbod/i);
  assert.match(sql, /compare_vegagerdin_shadow_observation/i);
  assert.match(sql, /global_comparison_completed/i);
  assert.match(sql, /grant execute on function public\.compare_vegagerdin_shadow_observation\(uuid\) to service_role/i);
  assert.doesNotMatch(sql, /routine_production_enabled\s*=\s*true/i);
  assert.match(source, /current_detail_enrichment_ineffective/);
  assert.match(source, /current_reference_recovery_incomplete/);
  assert.match(source, /comparison_incomplete/);
  assert.match(sql, /optional_context_disabled/);
  assert.doesNotMatch(source, /from\("opportunities"\)\.insert/);
});
