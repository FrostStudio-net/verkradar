import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import {
  buildContentHash,
  buildIdentityFingerprint,
  createObservation,
  normalizeCanonicalUrl,
} from "../_shared/ingestion-v2/contracts.js";
import { parseWithV2Adapter } from "../_shared/ingestion-v2/adapters/index.js";
import { fetchWithRetry, isRetryableStatus, parseRetryAfter } from "../_shared/ingestion-v2/fetching.js";
import { resolveIdentity } from "../_shared/ingestion-v2/identity.js";
import { detectZeroItemAnomaly } from "../_shared/ingestion-v2/metrics.js";
import { promoteObservation } from "../_shared/ingestion-v2/promotion.js";
import { renderAdminV2IngestionPanel } from "../../../src/pages/adminV2Ingestion.js";
import { extractAkranesDetailMetadata } from "../_shared/ingestion-v2/adapters/akranes-enrichment.js";
import { compareSameWindow } from "../_shared/ingestion-v2/replay.js";
import { extractProcurementDetailMetadata, extractProcurementReference } from "../_shared/ingestion-v2/adapters/procurement-metadata.js";
import { extractRikiskaupDetailMetadata } from "../_shared/ingestion-v2/adapters/rikiskaup-enrichment.js";
import { extractIsafjordurDetailMetadata } from "../_shared/ingestion-v2/adapters/isafjordur-enrichment.js";
import {
  classifyReykjavikProcurementType,
  extractReykjavikDetailMetadata,
} from "../_shared/ingestion-v2/adapters/reykjavik-enrichment.js";
import {
  classifyLandsvirkjunProcurementType,
  extractLandsvirkjunDetailMetadata,
} from "../_shared/ingestion-v2/adapters/landsvirkjun-enrichment.js";
import { getLandsvirkjunParserDiagnostics } from "../_shared/ingestion-v2/adapters/landsvirkjun-html-index.js";
import {
  classifyUtbodsvefurProcurementType,
  extractLandsnetDetailMetadata,
  extractOrkuveitanDetailMetadata,
  extractVeiturDetailMetadata,
} from "../_shared/ingestion-v2/adapters/utbodsvefur-enrichment.js";
import { getUtbodsvefurParserDiagnostics, UTBODSVEFUR_BUYERS } from "../_shared/ingestion-v2/adapters/utbodsvefur-buyers.js";
import {
  applySourcePredictionPolicy,
  buildShadowParserHealth,
  countSemanticDuplicates,
  derivePromotionEvidence,
  enrichCandidatesBounded,
  fetchBoundedWordpressPages,
  getSourceClassificationContext,
  isLikelyProcurementCandidate,
  THREE_SOURCE_KEYS,
} from "../_shared/ingestion-v2/shadow-quality.js";
import { classifyProcurementStage, classificationColumns } from "../_shared/procurement-stage.js";
import { buildAdminV2OverviewRows } from "../../../src/services/adminV2Ingestion.js";

const fixtureRoot = new URL("../import-source-connectors-v2/_fixtures/", import.meta.url);
const detailFixtureRoot = new URL("./fixtures/", import.meta.url);
const migrationUrl = new URL("../../migrations/20260826120000_parallel_source_ingestion_v2_phase_a.sql", import.meta.url);
const reykjavikMigrationUrl = new URL("../../migrations/20260827163000_v2_reykjavik_fixture_source.sql", import.meta.url);
const landsvirkjunMigrationUrl = new URL("../../migrations/20260827190000_v2_landsvirkjun_fixture_source.sql", import.meta.url);
const utbodsvefurBuyersMigrationUrl = new URL("../../migrations/20260827210000_v2_utbodsvefur_buyer_fixture_sources.sql", import.meta.url);
const functionUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);

const context = {
  run_id: "00000000-0000-4000-8000-000000000001",
  source_config_id: "00000000-0000-4000-8000-000000000002",
  source_id: "00000000-0000-4000-8000-000000000003",
  source_key: "test-source-v2",
  source_name: "Test source",
  parser_name: "test-parser",
  parser_version: "1.0.0",
  fetched_at: "2026-08-26T10:00:00.000Z",
  fetch_metadata: { fixture_only: true, http_status: 200 },
};

test("parses the narrow Akranes RSS fixture", async () => {
  const input = await readFile(new URL("akranes-rss.xml", fixtureRoot), "utf8");
  const rows = parseWithV2Adapter("akranes-rss", "1.0.0", input);
  assert.equal(rows.length, 2);
  assert.equal(rows[0].external_id, "akranes-fixture-2026-001");
  assert.equal(rows[0].procurement_reference, "AKR-2026-17");
  assert.equal(rows[0].deadline, "2026-09-15");
});

test("parses the Borgarbyggð WordPress REST fixture", async () => {
  const input = await readFile(new URL("borgarbyggd-wordpress.json", fixtureRoot), "utf8");
  const rows = parseWithV2Adapter("borgarbyggd-wordpress", "1.0.0", input);
  assert.equal(rows.length, 2);
  assert.equal(rows[0].external_id, "4201");
  assert.equal(rows[0].procurement_reference, "BOR-2026-09");
  assert.equal(rows[0].buyer, "Borgarbyggð");
});

test("parses the current-style Garðabær page-monitor fixture", async () => {
  const input = await readFile(new URL("gardabaer-page-monitor.html", fixtureRoot), "utf8");
  const rows = parseWithV2Adapter("gardabaer-page-monitor", "1.0.0", input);
  assert.equal(rows.length, 2);
  assert.equal(rows[0].external_id, "gardabaer-fixture-2026-31");
  assert.equal(rows[0].procurement_reference, "GAR-2026-31");
  assert.equal(rows[0].canonical_url, "https://www.gardabaer.is/framkvaemdir/utbod/holtahverfi-lagnir");
});

for (const [name, parser, file] of [["Ríkiskaup", "rikiskaup-wordpress", "rikiskaup-wordpress.json"], ["Vegagerðin", "vegagerdin-rss", "vegagerdin-rss.xml"], ["Ísafjarðarbær", "isafjordur-rss", "isafjordur-rss.xml"]]) {
  test(`parses ${name} V2 fixture conservatively`, async () => {
    const rows = parseWithV2Adapter(parser, "1.0.0", await readFile(new URL(file, fixtureRoot), "utf8"));
    assert.ok(rows.length >= 1);
    assert.ok(rows.every((row) => row.canonical_url && row.title));
  });
}

test("parses only current Reykjavík procurement detail links from the public index", async () => {
  const input = await readFile(new URL("reykjavik-html-index.html", fixtureRoot), "utf8");
  const rows = parseWithV2Adapter("reykjavik-html-index", "1.0.0", input);
  assert.equal(rows.length, 5);
  assert.deepEqual(rows.map((row) => row.procurement_reference), ["16347", "16200", "16322", "16341", "16344"]);
  assert.ok(rows.every((row) => row.external_id === row.procurement_reference));
  assert.ok(rows.every((row) => row.canonical_url.startsWith("https://reykjavik.is/utbod/")));
  assert.ok(rows.every((row) => row.safe_source_payload.listing_context === "current_procurement"));
  assert.equal(rows.some((row) => row.canonical_url.includes("frettir")), false);
  const duplicated = parseWithV2Adapter("reykjavik-html-index", "1.0.0", `${input}<a href="/utbod/16347-second-render">Duplicate rendering</a>`);
  assert.equal(duplicated.length, 5);
});

test("Reykjavík index reports structural drift but permits a genuine empty listing", () => {
  assert.deepEqual(parseWithV2Adapter("reykjavik-html-index", "1.0.0", "<main><h1>Útboðsauglýsingar</h1><p>Engin útboð eru í auglýsingu.</p></main>"), []);
  assert.throws(
    () => parseWithV2Adapter("reykjavik-html-index", "1.0.0", "<main><h1>Útboðsauglýsingar</h1><div>Útboð nr. 16347</div></main>"),
    { code: "V2_REYKJAVIK_STRUCTURE_MISMATCH" },
  );
});

test("Reykjavík detail parser extracts an open tender from the public Drupal article", async () => {
  const metadata = extractReykjavikDetailMetadata(await readFile(new URL("reykjavik-detail-open.html", detailFixtureRoot), "utf8"));
  assert.equal(metadata.title, "16200 Rammasamningur um mötuneytisþjónustu SFS");
  assert.equal(metadata.procurement_reference, "16200");
  assert.equal(metadata.buyer, "Skóla- og frístundasviðs Reykjavíkurborgar");
  assert.equal(metadata.deadline, "2026-10-06");
  assert.equal(metadata.procurement_type, "open_tender");
  assert.equal(metadata.form_type, "competition");
  assert.match(metadata.description, /fulla mötuneytisþjónustu/);
  assert.match(metadata.estimated_value, /2\.200 milljónir kr\./);
  assert.equal(metadata.portal_url, "https://utbod.reykjavik.is/");
});

test("Reykjavík detail parser distinguishes forval and RFI metadata", async () => {
  const forval = extractReykjavikDetailMetadata(await readFile(new URL("reykjavik-detail-forval.html", detailFixtureRoot), "utf8"));
  assert.equal(forval.procurement_reference, "16341");
  assert.equal(forval.buyer, "Almenningssamgangna höfuðborgarsvæðisins ohf.");
  assert.equal(forval.deadline, "2026-09-17");
  assert.equal(forval.procurement_type, "prequalification");
  const rfi = extractReykjavikDetailMetadata(await readFile(new URL("reykjavik-detail-rfi.html", detailFixtureRoot), "utf8"));
  assert.equal(rfi.procurement_reference, "16347");
  assert.equal(rfi.buyer, "Þjónustu- og nýsköpunarsvið Reykjavíkurborgar");
  assert.equal(rfi.deadline, "2026-09-17");
  assert.equal(rfi.procurement_type, "market_consultation");
});

test("Reykjavík detail parser fails closed for ordinary pages and absent optional metadata", async () => {
  const missing = extractReykjavikDetailMetadata(await readFile(new URL("reykjavik-detail-missing.html", detailFixtureRoot), "utf8"));
  assert.equal(missing.procurement_reference, "16344");
  assert.equal(missing.deadline, null);
  assert.equal(missing.buyer, null);
  assert.equal(missing.contact, null);
  assert.equal(missing.cpv, null);
  assert.equal(missing.estimated_value, null);
  const news = extractReykjavikDetailMetadata("<html><body class=\"node-news\"><article><h1>Sumarhátíð</h1><p>Útboð nr. 99999 í leiðarkerfi.</p></article></body></html>");
  assert.equal(news.enrichment_status, "no_supported_fields");
  assert.equal(news.procurement_reference, null);
  assert.equal(news.procurement_type, "unknown");
});

test("Reykjavík source mapping is explicit and the shared deadline guard wins", async () => {
  assert.equal(classifyReykjavikProcurementType("Gagnsæistilkynning (VEAT) vegna fyrirhugaðrar beinnar samningsgerðar"), "transparency_notice");
  const base = { procurement_stage: "uncertain", actionable_for_suppliers: false, requires_admin_review: true, classification_confidence: 0.35 };
  const map = (procurement_type, deadline = "2026-09-30") => applySourcePredictionPolicy(base, {
    deadline,
    safe_source_payload: { shadow_enrichment: { procurement_type } },
  }, { source_key: THREE_SOURCE_KEYS.REYKJAVIK }, new Date("2026-08-27T12:00:00Z")).prediction;
  assert.equal(map("open_tender").procurement_stage, "open_competition");
  assert.equal(map("prequalification").procurement_stage, "open_competition");
  assert.equal(map("market_consultation").procurement_stage, "market_consultation");
  assert.equal(map("transparency_notice").actionable_for_suppliers, false);
  assert.equal(map("award_or_followup").procurement_stage, "award_or_contract_signed");
  const expired = extractReykjavikDetailMetadata(await readFile(new URL("reykjavik-detail-expired.html", detailFixtureRoot), "utf8"));
  assert.equal(expired.deadline, "2026-01-12");
  assert.equal(map(expired.procurement_type, expired.deadline).procurement_stage, "open_competition");
  assert.equal(map(expired.procurement_type, expired.deadline).actionable_for_suppliers, false);
});

test("Reykjavík bounded enrichment isolates failures and does not exceed the hard limit", async () => {
  const candidates = Array.from({ length: 14 }, (_, index) => ({
    external_id: String(17000 + index),
    procurement_reference: String(17000 + index),
    title: `Útboð ${17000 + index}`,
    canonical_url: `https://reykjavik.is/utbod/${17000 + index}-fixture`,
    safe_source_payload: { listing_context: "current_procurement" },
  }));
  const detail = await readFile(new URL("reykjavik-detail-open.html", detailFixtureRoot), "utf8");
  const result = await enrichCandidatesBounded(candidates, {
    sourceKey: THREE_SOURCE_KEYS.REYKJAVIK,
    limit: 99,
    now: new Date("2026-08-27T00:00:00Z"),
    metadataExtractor: extractReykjavikDetailMetadata,
    fetchDetail: async (_url, candidate) => candidate.external_id === "17001" ? Promise.reject(Object.assign(new Error("timeout"), { code: "V2_FETCH_TIMEOUT" })) : detail,
  });
  assert.deepEqual(result.metrics, { attempted: 12, succeeded: 11, failed: 1, enriched: 11, no_supported_fields: 0, skipped: 2, limit: 12 });
  assert.equal(result.candidates[1].safe_source_payload.shadow_enrichment.enrichment_status, "failed");
  assert.equal(result.candidates[12].safe_source_payload.shadow_enrichment.enrichment_status, "skipped_limit");
});

test("Reykjavík identity resolves stable reference before canonical URL", async () => {
  const observation = await createObservation({
    external_id: "16347",
    procurement_reference: "16347",
    title: "Markaðskönnun fyrir nemendakerfi",
    canonical_url: "https://reykjavik.is/utbod/16347-markadskonnun",
  }, { ...context, source_key: THREE_SOURCE_KEYS.REYKJAVIK });
  const result = await resolveIdentity(observation, [{
    id: "same-reference",
    source_id: "another-source",
    procurement_reference: "16347",
    canonical_url: "https://reykjavik.is/utbod/different",
  }]);
  assert.equal(result.match_type, "procurement_reference");
  assert.equal(result.auto_merge, true);
});

test("Landsvirkjun aggregate parser filters the shared table by exact buyer", async () => {
  const input = await readFile(new URL("utbodsvefur-buyers-html-index.html", fixtureRoot), "utf8");
  const rows = parseWithV2Adapter("landsvirkjun-html-index", "1.0.0", input);
  assert.equal(rows.length, 3);
  assert.deepEqual(rows.map((row) => row.procurement_reference), ["2026-17", "2026-10", "2026-38"]);
  assert.ok(rows.every((row) => row.buyer === "Landsvirkjun"));
  assert.ok(rows.every((row) => row.safe_source_payload.listing_context === "current_procurement"));
  assert.equal(rows[0].deadline, "2033-11-19");
  assert.equal(rows[1].canonical_url, "https://utbodsvefur.is/kaplan-upgrade-at-steingrimsstod/");
  assert.deepEqual(getLandsvirkjunParserDiagnostics(rows), {
    total_rows: 7,
    matching_buyer_rows: 3,
    buyer_mismatch_rows: 4,
    duplicate_rows: 0,
    zero_exact_buyer_match: false,
    canonical_buyer: "Landsvirkjun",
    accepted_buyer_aliases: [],
    structure: "semantic_procurement_table_v1",
  });
  assert.equal(rows.some((row) => /Landsnet|Isavia|Veitur|Orkuveita/.test(row.buyer)), false);
});

test("Landsvirkjun parser dedupes deterministically and rejects near-match buyers", () => {
  const table = `<table><tr><th>Númer</th><th>Lýsing</th><th>Útboðsaðili</th><th>Tegund</th><th>Skilafrestur</th></tr>
    <tr><td>LV-1</td><td><a href="/lv-one/">Útboð eitt</a></td><td>Landsvirkjun</td><td>Framkvæmd</td><td>01.10.2026</td></tr>
    <tr><td>LV-1</td><td><a href="/lv-one-copy/">Útboð eitt aftur</a></td><td>Landsvirkjun</td><td>Framkvæmd</td><td>01.10.2026</td></tr>
    <tr><td>LV-2</td><td><a href="/lv-two/">Ráðgjöf</a></td><td>Landsvirkjun ráðgjöf</td><td>Þjónusta</td><td>01.10.2026</td></tr></table>`;
  const rows = parseWithV2Adapter("landsvirkjun-html-index", "1.0.0", table);
  assert.equal(rows.length, 1);
  assert.equal(getLandsvirkjunParserDiagnostics(rows).duplicate_rows, 1);
  assert.equal(getLandsvirkjunParserDiagnostics(rows).buyer_mismatch_rows, 1);
});

test("Landsvirkjun parser distinguishes zero exact matches from structure drift", () => {
  const noMatch = parseWithV2Adapter("landsvirkjun-html-index", "1.0.0", `<table><tr><th>Númer</th><th>Lýsing</th><th>Útboðsaðili</th><th>Tegund</th><th>Skilafrestur</th></tr><tr><td>LN-1</td><td><a href="/landsnet/">Útboð</a></td><td>Landsnet</td><td>Framkvæmd</td><td>01.10.2026</td></tr></table>`);
  assert.equal(noMatch.length, 0);
  assert.equal(getLandsvirkjunParserDiagnostics(noMatch).zero_exact_buyer_match, true);
  assert.equal(getLandsvirkjunParserDiagnostics(noMatch).buyer_mismatch_rows, 1);
  assert.throws(() => parseWithV2Adapter("landsvirkjun-html-index", "1.0.0", "<main><h1>Útboð</h1><p>2026-38 HVM36</p></main>"), { code: "V2_LANDSVIRKJUN_STRUCTURE_MISMATCH" });
});

test("Landsvirkjun detail parser extracts public metadata and keeps In-Tend as provenance only", async () => {
  const metadata = extractLandsvirkjunDetailMetadata(await readFile(new URL("landsvirkjun-detail-open.html", detailFixtureRoot), "utf8"));
  assert.equal(metadata.title, "HVM36 – Þrýstipípur");
  assert.equal(metadata.procurement_reference, "2026-38");
  assert.equal(metadata.buyer, "Landsvirkjun");
  assert.equal(metadata.deadline, "2026-09-03");
  assert.equal(metadata.notice_type, "Framkvæmd");
  assert.equal(metadata.procurement_type, "open_tender");
  assert.match(metadata.description, /hönnunar, framleiðslu/);
  assert.equal(metadata.portal_url, "https://in-tendhost.co.uk/landsvirkjun/aspx/ProjectManage/12345");
  assert.equal(metadata.documents_available_from, "02.07.2026 kl. 00:00");
});

test("Landsvirkjun detail parsing stays conservative when optional metadata is absent or buyer mismatches", async () => {
  const missing = extractLandsvirkjunDetailMetadata(await readFile(new URL("landsvirkjun-detail-missing.html", detailFixtureRoot), "utf8"));
  assert.equal(missing.procurement_reference, "2026-99");
  assert.equal(missing.deadline, null);
  assert.equal(missing.procurement_type, "unknown");
  assert.equal(missing.portal_url, null);
  const mismatch = extractLandsvirkjunDetailMetadata(`<div class="content-text"><h1>Útboð</h1><table><tr><td class="title">Útboðsaðili:</td><td>Landsnet</td></tr><tr><td class="title">Númer:</td><td>LN-1</td></tr></table></div>`);
  assert.equal(mismatch.enrichment_status, "no_supported_fields");
  assert.equal(mismatch.procurement_reference, null);
});

test("Landsvirkjun deterministic stage mapping is conservative and deadline guarded", async () => {
  assert.equal(classifyLandsvirkjunProcurementType("Útboðsgögn fyrir HVM36"), "open_tender");
  assert.equal(classifyLandsvirkjunProcurementType("Forval vegna ráðgjafar"), "prequalification");
  assert.equal(classifyLandsvirkjunProcurementType("Markaðskönnun / RFI"), "market_consultation");
  assert.equal(classifyLandsvirkjunProcurementType("Niðurstaða útboðs"), "award_or_followup");
  assert.equal(classifyLandsvirkjunProcurementType("Nánari upplýsingar verða birtar síðar"), "unknown");
  const base = { procurement_stage: "uncertain", actionable_for_suppliers: false, requires_admin_review: true, classification_confidence: 0.35 };
  const map = (procurement_type, deadline = "2026-09-30") => applySourcePredictionPolicy(base, { deadline, safe_source_payload: { shadow_enrichment: { procurement_type } } }, { source_key: THREE_SOURCE_KEYS.LANDSVIRKJUN }, new Date("2026-08-28T10:00:00Z")).prediction;
  assert.equal(map("open_tender").procurement_stage, "open_competition");
  assert.equal(map("prequalification").procurement_stage, "open_competition");
  assert.equal(map("market_consultation").procurement_stage, "market_consultation");
  assert.equal(map("award_or_followup").actionable_for_suppliers, false);
  assert.equal(map("unknown").actionable_for_suppliers, false);
  const expired = extractLandsvirkjunDetailMetadata(await readFile(new URL("landsvirkjun-detail-expired.html", detailFixtureRoot), "utf8"));
  assert.equal(expired.deadline, "2026-08-27");
  assert.equal(map(expired.procurement_type, expired.deadline).procurement_stage, "open_competition");
  assert.equal(map(expired.procurement_type, expired.deadline).actionable_for_suppliers, false);
});

test("Landsvirkjun future enrichment is hard-bounded and never follows provenance links", async () => {
  const candidates = Array.from({ length: 12 }, (_, index) => ({
    external_id: `LV-${index}`,
    procurement_reference: `LV-${index}`,
    title: `Útboð ${index}`,
    buyer: "Landsvirkjun",
    canonical_url: `https://utbodsvefur.is/landsvirkjun-${index}/`,
    safe_source_payload: { listing_context: "current_procurement", configured_buyer: "Landsvirkjun" },
  }));
  const detail = await readFile(new URL("landsvirkjun-detail-open.html", detailFixtureRoot), "utf8");
  const requested = [];
  const result = await enrichCandidatesBounded(candidates, {
    sourceKey: THREE_SOURCE_KEYS.LANDSVIRKJUN,
    limit: 99,
    metadataExtractor: extractLandsvirkjunDetailMetadata,
    fetchDetail: async (url) => { requested.push(url); return detail; },
  });
  assert.equal(result.metrics.attempted, 10);
  assert.equal(result.metrics.succeeded, 10);
  assert.equal(result.metrics.skipped, 2);
  assert.ok(requested.every((url) => url.startsWith("https://utbodsvefur.is/")));
  assert.equal(requested.some((url) => url.includes("in-tendhost")), false);
});

test("Landsvirkjun identity prefers explicit reference and does not fuzzy-auto-merge", async () => {
  const observation = await createObservation({ external_id: "2026-38", procurement_reference: "2026-38", title: "HVM36 – Þrýstipípur", canonical_url: "https://utbodsvefur.is/hvm36-thrystipipur/" }, { ...context, source_key: THREE_SOURCE_KEYS.LANDSVIRKJUN });
  const reference = await resolveIdentity(observation, [{ id: "same-reference", source_id: "other", procurement_reference: "2026-38", canonical_url: "https://example.is/other" }]);
  assert.equal(reference.match_type, "procurement_reference");
  assert.equal(reference.auto_merge, true);
  const fuzzy = await resolveIdentity(observation, [{ id: "similar-title", source_id: "other", title: "HVM36 Þrýstipípur", publication_date: null, deadline: null }]);
  assert.equal(fuzzy.auto_merge, false);
});

test("shared Útboðsvefur aggregate returns only each configured buyer", async () => {
  const input = await readFile(new URL("utbodsvefur-buyers-html-index.html", fixtureRoot), "utf8");
  const cases = [
    ["landsvirkjun-html-index", "Landsvirkjun", ["2026-17", "2026-10", "2026-38"]],
    ["landsnet-html-index", "Landsnet", ["2026-06-629"]],
    ["veitur-html-index", "Veitur", ["VEU-2604-0038"]],
    ["orkuveitan-html-index", "Orkuveita Reykjavíkur", ["ORGK-2025-01"]],
  ];
  for (const [parser, buyer, references] of cases) {
    const rows = parseWithV2Adapter(parser, "1.0.0", input);
    assert.deepEqual(rows.map((row) => row.procurement_reference), references);
    assert.ok(rows.every((row) => row.buyer === buyer));
    assert.ok(rows.every((row) => row.safe_source_payload.configured_buyer === buyer));
    const diagnostics = getUtbodsvefurParserDiagnostics(rows);
    assert.equal(diagnostics.total_rows, 7);
    assert.equal(diagnostics.matching_buyer_rows, references.length);
    assert.equal(diagnostics.buyer_mismatch_rows, 7 - references.length);
  }
});

test("Útboðsvefur exact buyer filtering rejects near matches and related companies", () => {
  const table = (buyer) => `<table><tr><th>Númer</th><th>Lýsing</th><th>Útboðsaðili</th><th>Tegund</th><th>Skilafrestur</th></tr><tr><td>X-1</td><td><a href="/x-one/">Útboð</a></td><td>${buyer}</td><td>Framkvæmd</td><td>01.10.2026</td></tr></table>`;
  assert.equal(parseWithV2Adapter("landsnet-html-index", "1.0.0", table("Landsnet hf.")).length, 0);
  assert.equal(parseWithV2Adapter("veitur-html-index", "1.0.0", table("Orkuveita Reykjavíkur")).length, 0);
  assert.equal(parseWithV2Adapter("orkuveitan-html-index", "1.0.0", table("Veitur")).length, 0);
  assert.equal(parseWithV2Adapter("orkuveitan-html-index", "1.0.0", table("Orkuveitan")).length, 0);
  assert.deepEqual(UTBODSVEFUR_BUYERS.orkuveitan.acceptedBuyerAliases, []);
});

test("Landsnet public detail enrichment identifies RFI market consultation", async () => {
  const metadata = extractLandsnetDetailMetadata(await readFile(new URL("landsnet-detail-rfi.html", detailFixtureRoot), "utf8"));
  assert.equal(metadata.procurement_reference, "2026-06-629");
  assert.equal(metadata.buyer, "Landsnet");
  assert.equal(metadata.deadline, "2026-09-01");
  assert.equal(metadata.procurement_type, "market_consultation");
  assert.equal(metadata.form_type, "consultation");
  assert.equal(metadata.canonical_url, "https://utbodsvefur.is/faeranlegar-vinnubudir-markadskonnun/");
  assert.match(metadata.description, /markaðskönnun en ekki útboð/);
  assert.equal(metadata.portal_url, "https://in-tendhost.co.uk/landsnet/aspx/ProjectManage/629");
});

test("Veitur public detail enrichment preserves VEU reference and excludes Orkuveitan", async () => {
  const metadata = extractVeiturDetailMetadata(await readFile(new URL("veitur-detail-open.html", detailFixtureRoot), "utf8"));
  assert.equal(metadata.procurement_reference, "VEU-2604-0038");
  assert.equal(metadata.buyer, "Veitur");
  assert.equal(metadata.deadline, "2026-09-03");
  assert.equal(metadata.procurement_type, "open_tender");
  assert.equal(metadata.request_for_bids, true);
  assert.equal(metadata.canonical_url, "https://utbodsvefur.is/hreinsun-myndanir-og-greining-fraveitulagna/");
  assert.equal(classifyUtbodsvefurProcurementType("Rammasamningur Veitna; tilboðum skal skila"), "open_tender");
  const related = extractVeiturDetailMetadata(await readFile(new URL("orkuveitan-detail-dps.html", detailFixtureRoot), "utf8"));
  assert.equal(related.enrichment_status, "no_supported_fields");
  assert.equal(related.procurement_reference, null);
});

test("Orkuveitan public detail enrichment preserves ORGK identity and explicit DPS", async () => {
  const metadata = extractOrkuveitanDetailMetadata(await readFile(new URL("orkuveitan-detail-dps.html", detailFixtureRoot), "utf8"));
  assert.equal(metadata.procurement_reference, "ORGK-2025-01");
  assert.equal(metadata.buyer, "Orkuveita Reykjavíkur");
  assert.equal(metadata.deadline, "2031-04-17");
  assert.equal(metadata.procurement_type, "dynamic_purchasing_system");
  assert.equal(metadata.form_type, "competition");
  assert.equal(metadata.canonical_url, "https://utbodsvefur.is/laus-husgogn-fyrir-hofudstodvar-orkuveitunnar/");
  const subsidiary = extractOrkuveitanDetailMetadata(await readFile(new URL("veitur-detail-open.html", detailFixtureRoot), "utf8"));
  assert.equal(subsidiary.enrichment_status, "no_supported_fields");
});

test("shared Útboðsvefur classification maps RFI and DPS but expired deadlines always close", () => {
  assert.equal(classifyUtbodsvefurProcurementType("Markaðskönnun / RFI"), "market_consultation");
  assert.equal(classifyUtbodsvefurProcurementType("Gagnvirkt innkaupakerfi DPS"), "dynamic_purchasing_system");
  assert.equal(classifyUtbodsvefurProcurementType("Almenn kynning á starfsemi"), "unknown");
  const base = { procurement_stage: "uncertain", actionable_for_suppliers: false, requires_admin_review: true, classification_confidence: 0.35 };
  for (const source_key of [THREE_SOURCE_KEYS.LANDSNET, THREE_SOURCE_KEYS.VEITUR, THREE_SOURCE_KEYS.ORKUVEITAN]) {
    const current = applySourcePredictionPolicy(base, { deadline: "2031-04-17", safe_source_payload: { shadow_enrichment: { procurement_type: "dynamic_purchasing_system" } } }, { source_key }, new Date("2026-08-28T10:00:00Z")).prediction;
    assert.equal(current.procurement_stage, "open_competition");
    assert.equal(current.actionable_for_suppliers, true);
    const expired = applySourcePredictionPolicy(base, { deadline: "2026-08-27", safe_source_payload: { shadow_enrichment: { procurement_type: "open_tender" } } }, { source_key }, new Date("2026-08-28T10:00:00Z")).prediction;
    assert.equal(expired.procurement_stage, "open_competition");
    assert.equal(expired.actionable_for_suppliers, false);
    const weak = applySourcePredictionPolicy(base, { deadline: null, safe_source_payload: { shadow_enrichment: { procurement_type: "unknown" } } }, { source_key }, new Date("2026-08-28T10:00:00Z")).prediction;
    assert.equal(weak.procurement_stage, "uncertain");
    assert.equal(weak.actionable_for_suppliers, false);
  }
});

test("new Útboðsvefur source identities use exact reference and never fuzzy-auto-merge", async () => {
  const cases = [
    [THREE_SOURCE_KEYS.LANDSNET, "2026-06-629", "Landsnet RFI"],
    [THREE_SOURCE_KEYS.VEITUR, "VEU-2604-0038", "Fráveitulagnir"],
    [THREE_SOURCE_KEYS.ORKUVEITAN, "ORGK-2025-01", "Laus húsgögn"],
  ];
  for (const [sourceKey, reference, title] of cases) {
    const observation = await createObservation({ external_id: reference, procurement_reference: reference, title, canonical_url: `https://utbodsvefur.is/${String(reference).toLowerCase()}/` }, { ...context, source_key: sourceKey });
    const exact = await resolveIdentity(observation, [{ id: "reference", source_id: "other", procurement_reference: reference, title: "Other" }]);
    assert.equal(exact.match_type, "procurement_reference");
    assert.equal(exact.auto_merge, true);
    const fuzzy = await resolveIdentity(observation, [{ id: "similar", source_id: "other", title }]);
    assert.equal(fuzzy.auto_merge, false);
  }
});

test("bounded Útboðsvefur enrichment fetches only public detail URLs, never provenance", async () => {
  const input = await readFile(new URL("utbodsvefur-buyers-html-index.html", fixtureRoot), "utf8");
  const candidates = parseWithV2Adapter("landsnet-html-index", "1.0.0", input);
  const detail = await readFile(new URL("landsnet-detail-rfi.html", detailFixtureRoot), "utf8");
  const requested = [];
  const result = await enrichCandidatesBounded(candidates, {
    sourceKey: THREE_SOURCE_KEYS.LANDSNET,
    metadataExtractor: extractLandsnetDetailMetadata,
    fetchDetail: async (url) => { requested.push(url); return detail; },
  });
  assert.equal(result.metrics.attempted, 1);
  assert.deepEqual(requested, ["https://utbodsvefur.is/faeranlegar-vinnubudir-markadskonnun/"]);
  assert.equal(requested.some((url) => url.includes("in-tendhost")), false);
});

test("content hashes are stable across object key order and fetch time", async () => {
  const candidate = {
    source_key: "source",
    external_id: "abc",
    title: "Útboð á götu",
    buyer: "Garðabær",
    deadline: "2026-09-01",
    canonical_url: "HTTPS://EXAMPLE.IS/tender/1/#details",
    safe_source_payload: { b: 2, a: 1 },
  };
  const left = await buildContentHash(candidate);
  const right = await buildContentHash({ ...candidate, fetched_at: "2099-01-01", safe_source_payload: { a: 1, b: 2 } });
  assert.equal(left, right);
  assert.equal(left.length, 64);
});

test("same-source identity has highest priority", async () => {
  const observation = await sampleObservation();
  const result = await resolveIdentity(observation, [{
    id: "same-source",
    source_id: observation.source_id,
    external_id: observation.external_id,
    title: "Different title",
  }]);
  assert.equal(result.matched, true);
  assert.equal(result.match_type, "same_source_external_id");
});

test("cross-source identity resolves reference before URL and fingerprint", async () => {
  const observation = await sampleObservation();
  const result = await resolveIdentity(observation, [{
    id: "reference-match",
    source_id: "different",
    external_id: "different",
    procurement_reference: observation.procurement_reference,
    url: observation.canonical_url,
    title: observation.title,
    buyer: observation.buyer,
    deadline: observation.deadline,
  }]);
  assert.equal(result.match_type, "procurement_reference");
});

test("cross-source identity resolves exact normalized canonical URL", async () => {
  const observation = await sampleObservation({ procurement_reference: null });
  const result = await resolveIdentity(observation, [{
    id: "url-match",
    source_id: "different",
    external_id: "different",
    url: `${observation.canonical_url}/#fragment`,
    title: "Different title",
  }]);
  assert.equal(result.match_type, "canonical_url");
  assert.equal(normalizeCanonicalUrl(`${observation.canonical_url}/#x`), normalizeCanonicalUrl(observation.canonical_url));
});

test("cross-source identity falls back to conservative fingerprint", async () => {
  const observation = await sampleObservation({ procurement_reference: null, canonical_url: null, discovered_url: "https://v2.is/item" });
  observation.normalized_canonical_url = null;
  observation.identity_fingerprint = await buildIdentityFingerprint(observation);
  const result = await resolveIdentity(observation, [{
    id: "fingerprint-match",
    source_id: "different",
    external_id: "different",
    title: observation.title,
    buyer: observation.buyer,
    deadline: observation.deadline,
    url: "https://legacy.is/different",
  }]);
  assert.equal(result.match_type, "fingerprint");
});

test("fuzzy similarity is review-only and never auto-merges", async () => {
  const observation = await sampleObservation({ procurement_reference: null, canonical_url: "https://v2.is/one" });
  const result = await resolveIdentity(observation, [{
    id: "fuzzy",
    source_id: "different",
    external_id: "different",
    title: `${observation.title} aukaverk`,
    buyer: "Different buyer",
    deadline: "2026-10-01",
    url: "https://legacy.is/two",
  }], { fuzzyThreshold: 0.6 });
  assert.equal(result.matched, false);
  assert.equal(result.auto_merge, false);
  assert.equal(result.review_candidate.match_type, "fuzzy_review_candidate");
  assert.equal(result.review_candidate.auto_merge, false);
});

test("fixture and shadow modes cannot call the production gateway", async () => {
  const observation = await sampleObservation();
  for (const mode of ["disabled", "fixture_only", "shadow"]) {
    let gatewayCalls = 0;
    await assert.rejects(() => promoteObservation({
      config: { mode, source_id: observation.source_id },
      observation,
      identity: { matched: true },
      promotionGateway: async () => { gatewayCalls += 1; },
    }), { code: "V2_PROMOTE_MODE_REQUIRED" });
    assert.equal(gatewayCalls, 0);
  }
});

test("promotion helper delegates only the observation id to the database-owned gate", async () => {
  const observation = await sampleObservation();
  let received;
  const result = await promoteObservation({
    config: { mode: "promote", source_id: observation.source_id },
    observation,
    identity: { matched: false },
    promotionGateway: async (...args) => { received = args; return { promotion_status: "blocked" }; },
  });
  assert.deepEqual(received, [observation.id]);
  assert.equal(result.promotion_status, "blocked");
});

test("legacy row path attaches provenance without reclassification", async () => {
  const observation = await sampleObservation();
  let classifierCalls = 0;
  let receivedClassification = "unset";
  const result = await promoteObservation({
    config: { mode: "promote", source_id: observation.source_id },
    observation,
    identity: { matched: true, match_type: "same_source_external_id" },
    classifyNewOpportunity: async () => { classifierCalls += 1; },
    promotionGateway: async (_id, classification) => {
      receivedClassification = classification;
      return { opportunity_id: "legacy-opportunity", created: false, provenance_attached: true };
    },
  });
  assert.equal(classifierCalls, 0);
  assert.equal(receivedClassification, undefined);
  assert.equal(result.opportunity_id, "legacy-opportunity");
  assert.equal(result.provenance_attached, true);
});

test("promotion is idempotent under concurrent requests when gateway enforces its lock", async () => {
  const observation = await sampleObservation();
  let created = false;
  let provenance = false;
  let chain = Promise.resolve();
  const gateway = async () => {
    let release;
    const previous = chain;
    chain = new Promise((resolve) => { release = resolve; });
    await previous;
    try {
      const result = {
        opportunity_id: "one-opportunity",
        created: !created,
        provenance_attached: !provenance,
      };
      created = true;
      provenance = true;
      return result;
    } finally {
      release();
    }
  };
  const options = {
    config: { mode: "promote", source_id: observation.source_id },
    observation,
    identity: { matched: true },
    promotionGateway: gateway,
  };
  const [first, second] = await Promise.all([promoteObservation(options), promoteObservation(options)]);
  assert.equal(first.opportunity_id, second.opportunity_id);
  assert.equal([first.created, second.created].filter(Boolean).length, 1);
  assert.equal([first.provenance_attached, second.provenance_attached].filter(Boolean).length, 1);
});

test("repeated promotion returns the same opportunity and attaches provenance once", async () => {
  const observation = await sampleObservation();
  let calls = 0;
  const gateway = async () => ({ opportunity_id: "stable", created: calls++ === 0, provenance_attached: calls === 1 });
  const options = { config: { mode: "promote", source_id: observation.source_id }, observation, identity: { matched: true }, promotionGateway: gateway };
  const first = await promoteObservation(options);
  const second = await promoteObservation(options);
  assert.equal(first.opportunity_id, second.opportunity_id);
  assert.equal(first.provenance_attached, true);
  assert.equal(second.provenance_attached, false);
});

test("new promotion leaves duplicate and eligibility enforcement to the atomic database gateway", async () => {
  const observation = await sampleObservation();
  const defended = [];
  const classification = {
    procurement_stage: "open_competition",
    actionable_for_suppliers: true,
    classification_confidence: 0.99,
    classified_by: "deterministic_rule",
    classifier_version: "procurement-stage-v1",
    requires_admin_review: false,
  };
  const result = await promoteObservation({
    config: { mode: "promote", source_id: observation.source_id },
    observation,
    identity: { matched: false },
    classifyNewOpportunity: async () => classification,
    promotionGateway: async () => ({ opportunity_id: "new-opportunity", created: true, provenance_attached: true }),
    duplicateDefense: async (opportunityId) => defended.push(opportunityId),
  });
  assert.equal(result.created, true);
  assert.deepEqual(defended, []);
});

test("eligible HTTP failures retry and Retry-After is honored", async () => {
  const statuses = [429, 503, 200];
  const sleeps = [];
  const result = await fetchWithRetry("https://fixture.invalid", {
    maxAttempts: 3,
    deadlineAt: Date.now() + 10000,
    random: () => 0,
    sleep: async (ms) => { sleeps.push(ms); },
    fetchImpl: async () => {
      const status = statuses.shift();
      return new Response("fixture", { status, headers: status === 429 ? { "retry-after": "2" } : {} });
    },
  });
  assert.equal(result.response.status, 200);
  assert.equal(sleeps[0], 2000);
  assert.equal(isRetryableStatus(408), true);
  assert.equal(isRetryableStatus(501), false);
  assert.equal(parseRetryAfter("3"), 3000);
});

test("per-request timeout aborts without an unbounded wait", async () => {
  const started = Date.now();
  await assert.rejects(() => fetchWithRetry("https://fixture.invalid", {
    maxAttempts: 1,
    timeoutMs: 15,
    deadlineAt: Date.now() + 200,
    fetchImpl: async (_url, request) => new Promise((_resolve, reject) => {
      request.signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")), { once: true });
    }),
  }), { code: "REQUEST_TIMEOUT" });
  assert.ok(Date.now() - started < 500);
});

test("overall run deadline prevents any request attempt after expiry", async () => {
  let calls = 0;
  await assert.rejects(() => fetchWithRetry("https://fixture.invalid", {
    deadlineAt: Date.now() - 1,
    fetchImpl: async () => { calls += 1; return new Response("never"); },
  }), { code: "V2_RUN_DEADLINE" });
  assert.equal(calls, 0);
});

test("deterministic parser failures are invalid and non-retryable", () => {
  assert.throws(() => parseWithV2Adapter("borgarbyggd-wordpress", "1.0.0", "{invalid"), (error) => {
    assert.equal(error.code, "V2_PARSER_INVALID_JSON");
    assert.equal(error.retryable, false);
    return true;
  });
  assert.throws(() => parseWithV2Adapter("unknown", "1.0.0", "[]"), { code: "V2_ADAPTER_UNSUPPORTED" });
});

test("HTTP success with zero parsed items is anomalous and opens source circuit at threshold", () => {
  const anomaly = detectZeroItemAnomaly({ httpOk: true, parsedCount: 0, consecutiveZeroItemRuns: 1, threshold: 2 });
  assert.equal(anomaly.suspicious, true);
  assert.equal(anomaly.consecutive_zero_item_runs, 2);
  assert.equal(anomaly.circuit_should_open, true);
  assert.equal(anomaly.reason, "http_success_zero_parsed_items");
});

test("observation validation quarantines invalid parser output from promotion", async () => {
  const invalid = await createObservation({ external_id: "", title: "", discovered_url: "" }, context);
  assert.equal(invalid.validation_state, "invalid");
  assert.deepEqual(invalid.validation_errors, ["external_id_required", "title_required", "source_url_required"]);
  await assert.rejects(() => promoteObservation({
    config: { mode: "promote", source_id: context.source_id },
    observation: invalid,
    identity: { matched: true },
    promotionGateway: async () => { throw new Error("must not run"); },
  }), { code: "V2_VALIDATION_ERROR" });
});

test("migration enforces advisory locking, service-role promotion, and classification preservation", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  assert.match(sql, /pg_advisory_xact_lock/);
  assert.match(sql, /if config_row\.mode <> 'promote'/);
  assert.match(sql, /grant execute on function public\.promote_v2_observation\(uuid, jsonb\) to service_role/);
  assert.match(sql, /revoke all on function public\.promote_v2_observation\(uuid, jsonb\) from public, anon, authenticated/);
  const enrichmentBlock = sql.slice(sql.indexOf("if existing_opportunity.id is not null then"), sql.indexOf("else\n    if classification is null"));
  assert.doesNotMatch(enrichmentBlock, /procurement_stage\s*=/);
  assert.doesNotMatch(enrichmentBlock, /classified_by\s*=/);
  assert.doesNotMatch(enrichmentBlock, /opportunity_matches/);
});

test("Phase B shadow trigger type is narrowly added", async () => {
  const sql = await readFile(new URL("../../migrations/20260826210000_parallel_source_ingestion_v2_shadow_trigger_type.sql", import.meta.url), "utf8");
  assert.match(sql, /drop constraint if exists v2_ingestion_runs_trigger_type_check/i);
  assert.match(sql, /'fixture'.*'replay'.*'manual'.*'automation'.*'shadow'/s);
  assert.doesNotMatch(sql, /'promote'/);
});

test("fixture and shadow implementation has no direct opportunities write path", async () => {
  const source = await readFile(functionUrl, "utf8");
  assert.doesNotMatch(source, /\bfetch\s*\(/);
  assert.match(source, /body\.action === "promote_canary"/);
  assert.doesNotMatch(source, /\.from\(["']opportunities["']\)/);
  assert.match(source, /config\.mode !== "fixture_only"/);
  assert.match(source, /Phase A permits fixture\/replay input only/);
});

test("admin v2 panel exposes safe shadow/staging actions and separately gated Phase C3 controls", async () => {
  const service = await readFile(new URL("../../../src/services/adminV2Ingestion.js", import.meta.url), "utf8");
  const panel = await readFile(new URL("../../../src/pages/adminV2Ingestion.js", import.meta.url), "utf8");
  assert.doesNotMatch(service, /\.(insert|update|upsert|delete|rpc)\s*\(/);
  assert.match(panel, /v2-enable-shadow/);
  assert.match(panel, /v2-disable-shadow/);
  assert.match(panel, /v2-run-shadow/);
  assert.doesNotMatch(panel, /v2-promote|data-action="promote"/);
  assert.match(panel, /fixture\/shadow health/i);
  assert.match(panel, /phaseC2ControlsEnabled/);
  assert.match(panel, /v2-c2-approve-source/);
  assert.match(panel, /v2-c2-approve-observation/);
  assert.match(panel, /v2-c2-promote/);
  assert.match(panel, /v2-c2-assertions/);
  assert.match(panel, /phaseC3ProductionControlsEnabled/);
  assert.match(panel, /v2-c3-enable-controls/);
  assert.match(panel, /v2-c3-disable-controls/);
  assert.match(panel, /v2-c3-enable-release/);
  assert.match(panel, /v2-c3-approve-release/);
  assert.match(panel, /v2-c3-release/);
  assert.match(panel, /v2-c3-clear-hold/);
  assert.doesNotMatch(panel, /data-action="[^"]*(match|ai|report|send)/i);
});

test("admin v2 panel render path resolves control gating without free variables", () => {
  const html = renderAdminV2IngestionPanel({ rows: [{ source_key: "akranes-utbod-v2", display_name: "Akranes", mode: "shadow" }], escapeHtml: (v) => String(v), formatDateTime: () => "", controlsEnabled: true });
  assert.match(html, /v2-run-shadow/);
  assert.doesNotMatch(html, /Promote/);
});

test("Akranes detail enrichment recovers deadline/reference and follow-up safely", () => {
  const result = extractAkranesDetailMetadata("<p>EES útboð nr. 74814-2026. Tilboðum skal skilað 12. 06. 2026. Opnunarfundur verður haldinn.</p>");
  assert.equal(result.deadline, "2026-06-12");
  assert.equal(result.procurement_reference, "74814-2026");
  assert.equal(result.tender_status, "follow_up_or_award");
  assert.equal(result.enrichment_status, "enriched");
});

test("Akranes enrichment returns safe no-op for malformed/empty detail", () => {
  const result = extractAkranesDetailMetadata("<broken");
  assert.equal(result.deadline, null);
  assert.equal(result.procurement_reference, null);
  assert.equal(result.enrichment_status, "no_supported_fields");
});

test("same-window replay is read-only and reports conservative identity results", async () => {
  const rss = await readFile(new URL("akranes-rss.xml", fixtureRoot), "utf8");
  const result = await compareSameWindow({ rssText: rss });
  assert.equal(result.raw_items, 2);
  assert.equal(result.legacy_candidates, 2);
  assert.equal(result.v2_candidates, 2);
  assert.equal(result.results.length, 2);
  assert.ok(result.results.every((row) => ["pending", "needs_review"].includes(row.decision)));
});

test("comparison persistence keeps comparison_state on observations only", async () => {
  const source = await readFile(functionUrl, "utf8");
  assert.match(source, /const \{ comparison_state, \.\.\.comparisonRecord \} = comparison/);
  assert.match(source, /v2_legacy_comparisons.*comparisonRecord/s);
  assert.match(source, /v2_ingestion_observations.*comparison_state/s);
});

test("baseline_unavailable is an observation-only comparison state", async () => {
  const sql = await readFile(new URL("../../migrations/20260826230000_v2_observation_baseline_unavailable_state.sql", import.meta.url), "utf8");
  assert.match(sql, /baseline_unavailable/);
  assert.match(sql, /not_compared.*legacy_match.*legacy_only.*v2_only.*conflict.*review_required/s);
  assert.doesNotMatch(sql, /legacy_comparisons/);
});

test("Ríkiskaup WordPress pagination is bounded and deduplicates across pages", async () => {
  const pages = new Map([
    [1, [{ id: 1, link: "https://utbodsvefur.is/1" }, { id: 2, link: "https://utbodsvefur.is/2" }]],
    [2, [{ id: 2, link: "https://utbodsvefur.is/2" }, { id: 3, link: "https://utbodsvefur.is/3" }]],
    [3, []],
  ]);
  const result = await fetchBoundedWordpressPages({ endpointUrl: "https://utbodsvefur.is/wp-json/wp/v2/posts", perPage: 2, maxPages: 3, maxItems: 10, fetchPage: async (_url, page) => ({ body: pages.get(page) }) });
  assert.deepEqual(result.items.map((item) => item.id), [1, 2, 3]);
  assert.equal(result.diagnostics.fetched_pages, 3);
  assert.equal(result.diagnostics.duplicates, 1);
  assert.equal(result.diagnostics.stopped, "empty_page");
});

test("Ríkiskaup pagination obeys hard page and item caps", async () => {
  let calls = 0;
  const result = await fetchBoundedWordpressPages({ endpointUrl: "https://utbodsvefur.is/wp-json/wp/v2/posts", perPage: 2, maxPages: 2, maxItems: 3, fetchPage: async (_url, page) => { calls += 1; return { body: [{ id: page * 10 + 1 }, { id: page * 10 + 2 }] }; } });
  assert.equal(calls, 2);
  assert.equal(result.items.length, 3);
  assert.equal(result.diagnostics.stopped, "item_cap");
});

test("Ríkiskaup pagination stops at the WordPress reported final page", async () => {
  let calls = 0;
  const result = await fetchBoundedWordpressPages({ endpointUrl: "https://utbodsvefur.is/wp-json/wp/v2/posts", perPage: 2, maxPages: 3, maxItems: 10, fetchPage: async () => { calls += 1; return { body: [{ id: 1 }, { id: 2 }], totalPages: "1" }; } });
  assert.equal(calls, 1);
  assert.equal(result.diagnostics.reported_total_pages, 1);
  assert.equal(result.diagnostics.stopped, "reported_end");
});

test("Ríkiskaup title references require procurement context and support numeric IDs", () => {
  assert.equal(extractProcurementReference("Markaðskönnun (RFI), nr. 16347", { allowContextualNumber: true }), "16347");
  assert.equal(extractProcurementReference("Rammasamningur, EES útboð nr. 16200", { allowContextualNumber: true }), "16200");
  assert.equal(extractProcurementReference("Frétt nr. 16347", { allowContextualNumber: true }), null);
});

test("ordinary Icelandic words are rejected as procurement references", () => {
  for (const word of ["verk", "gerðina", "ferli", "frestur", "lýsingar"]) {
    assert.equal(extractProcurementReference(`Tilvísun: ${word}`), null);
  }
});

test("Ríkiskaup detail enrichment fills only explicit missing metadata", async () => {
  const source = { title: "Útboð nr. 16347", description: "", canonical_url: "https://utbodsvefur.is/16347", buyer: "Existing buyer", deadline: null, procurement_reference: "16347" };
  const result = await enrichCandidatesBounded([source], { sourceKey: THREE_SOURCE_KEYS.RIKISKAUP, limit: 1, now: new Date("2026-08-27T00:00:00Z"), fetchDetail: async () => "<p>Verkkaupi: Annar kaupandi. Tilboðsfrestur: 30.09.2026. Tilvísun: 99999.</p>" });
  assert.equal(result.candidates[0].deadline, "2026-09-30");
  assert.equal(result.candidates[0].buyer, "Existing buyer");
  assert.equal(result.candidates[0].procurement_reference, "16347");
  assert.equal(result.metrics.succeeded, 1);
  const missingBuyer = await enrichCandidatesBounded([{ ...source, buyer: null }], { sourceKey: THREE_SOURCE_KEYS.RIKISKAUP, limit: 1, now: new Date("2026-08-27T00:00:00Z"), fetchDetail: async () => "<p>Verkkaupi: Innkaupastofnun. Tilboðsfrestur: 30.09.2026.</p>" });
  assert.equal(missingBuyer.candidates[0].buyer, "Innkaupastofnun");
});

test("Ríkiskaup detail extraction ignores site-wide RFI filters and maps explicit tender metadata", () => {
  const html = `
    <header><option>Markaðskönnun (RFI)</option></header>
    <div class="content-text">
      <h1>Rammasamningur um mötuneytisþjónustu SFS, EES útboð nr. 16200</h1>
      <table>
        <tr><td class="title">Númer:</td><td>16200</td></tr>
        <tr><td class="title">Útboðsaðili:</td><td>Reykjavíkurborg</td></tr>
        <tr><td class="title">Tegund:</td><td>Þjónusta</td></tr>
        <tr><td class="title">Skilafrestur</td><td>06.10.2026 kl. 10:00</td></tr>
      </table>
      <p>Tilboðum skal skila með rafrænum hætti.</p>
    </div><div class="layout-footer">Markaðskönnun</div>`;
  const metadata = extractRikiskaupDetailMetadata(html);
  assert.equal(metadata.procurement_type, "open_tender");
  assert.equal(metadata.form_type, "competition");
  assert.equal(metadata.deadline, "2026-10-06");
  assert.equal(metadata.procurement_reference, "16200");
  assert.equal(metadata.buyer, "Reykjavíkurborg");
});

test("Ríkiskaup source mapping distinguishes tender, forval, RFI, transparency, and weak evidence", () => {
  const config = { source_key: THREE_SOURCE_KEYS.RIKISKAUP };
  const initial = { procurement_stage: "uncertain", actionable_for_suppliers: false, requires_admin_review: true, classification_confidence: 0.35 };
  const mapped = (procurement_type, deadline = "2026-09-30") => applySourcePredictionPolicy(initial, { deadline, safe_source_payload: { shadow_enrichment: { procurement_type } } }, config, new Date("2026-08-27T12:00:00Z")).prediction;
  assert.deepEqual([mapped("open_tender").procurement_stage, mapped("prequalification").procurement_stage], ["open_competition", "open_competition"]);
  assert.equal(mapped("market_consultation").procurement_stage, "market_consultation");
  assert.equal(mapped("transparency_notice").procurement_stage, "uncertain");
  assert.equal(mapped("transparency_notice").actionable_for_suppliers, false);
  assert.equal(mapped("unknown", null).procurement_stage, "uncertain");
});

test("Ríkiskaup representative detail titles produce deterministic source types", () => {
  const detail = (title, type = "Þjónusta", number = "16341") => extractRikiskaupDetailMetadata(`
    <header><option>Markaðskönnun (RFI)</option></header>
    <div class="content-text"><h1>${title}</h1><table>
      <tr><td class="title">Númer:</td><td>${number}</td></tr>
      <tr><td class="title">Tegund:</td><td>${type}</td></tr>
      <tr><td class="title">Skilafrestur</td><td>17.09.2026</td></tr>
    </table></div><div class="layout-footer">Markaðskönnun</div>`);
  assert.equal(detail("Útboð á ræstingu í Brekkuskóla").procurement_type, "open_tender");
  assert.equal(detail("Akstur almenningsvagna 2028-2036. Forval, EES útboð nr. 16341").procurement_type, "prequalification");
  assert.equal(detail("Markaðskönnun (RFI) fyrir námsumsjónarkerfi").procurement_type, "market_consultation");
  const transparency = detail("Gagnsæistilkynning vegna fyrirhugaðra innkaupa", "Þjónusta, Gagnsæistilkynning (VEAT)", "23431");
  assert.equal(transparency.procurement_type, "transparency_notice");
  assert.equal(transparency.procurement_reference, "23431");
});

test("expired Ríkiskaup tender is non-actionable after source type mapping", () => {
  const result = applySourcePredictionPolicy(
    { procurement_stage: "uncertain", actionable_for_suppliers: false, requires_admin_review: true, classification_confidence: 0.35 },
    { deadline: "2026-08-26", safe_source_payload: { shadow_enrichment: { procurement_type: "open_tender" } } },
    { source_key: THREE_SOURCE_KEYS.RIKISKAUP },
    new Date("2026-08-27T12:00:00Z"),
  );
  assert.equal(result.prediction.procurement_stage, "open_competition");
  assert.equal(result.prediction.actionable_for_suppliers, false);
});

test("detail enrichment leaves metadata null when it is not explicit", () => {
  const result = extractProcurementDetailMetadata("<article>Almenn lýsing án útboðsgagna.</article>");
  assert.equal(result.deadline, null);
  assert.equal(result.buyer, null);
  assert.equal(result.procurement_reference, null);
  assert.equal(result.enrichment_status, "no_supported_fields");
});

test("Vegagerðin candidate prefilter and enrichment remain bounded on a broad feed", async () => {
  const current = Array.from({ length: 20 }, (_, index) => ({ title: `Útboð nr. ${16000 + index}`, description: "Óskað eftir tilboðum", publication_date: "2026-08-20", canonical_url: `https://vegagerdin.is/${index}` }));
  const historical = Array.from({ length: 80 }, (_, index) => ({ title: `Frétt af framkvæmd ${index}`, description: "Vinna er hafin", publication_date: "2022-01-01", canonical_url: `https://vegagerdin.is/old/${index}` }));
  const result = await enrichCandidatesBounded([...current, ...historical], { sourceKey: THREE_SOURCE_KEYS.VEGAGERDIN, limit: 12, now: new Date("2026-08-27T00:00:00Z"), fetchDetail: async () => "<p>Almenn útboðslýsing.</p>" });
  assert.equal(result.metrics.attempted, 12);
  assert.equal(result.metrics.skipped, 88);
  assert.equal(result.candidates.length, 100);
});

test("Vegagerðin news and historical follow-up are never made actionable", () => {
  const config = { source_key: THREE_SOURCE_KEYS.VEGAGERDIN };
  const news = { title: "Umferðartilkynning", description: "Almenn frétt", publication_date: "2026-08-20", deadline: null };
  const historical = { title: "Niðurstaða útboðs", description: "Samningur undirritaður", publication_date: "2022-01-01", deadline: null };
  for (const observation of [news, historical]) {
    const initial = { procurement_stage: "upcoming_procurement", actionable_for_suppliers: true, requires_admin_review: false };
    const result = applySourcePredictionPolicy(initial, observation, config, new Date("2026-08-27T00:00:00Z"));
    assert.equal(result.prediction.actionable_for_suppliers, false);
  }
});

test("Ísafjarðarbær detail enrichment extracts an explicit deadline", async () => {
  const candidate = { title: "Óskað eftir tilboðum í hafnarverk", description: "", canonical_url: "https://www.isafjordur.is/utbod", deadline: null, buyer: "Ísafjarðarbær", procurement_reference: null };
  const result = await enrichCandidatesBounded([candidate], { sourceKey: THREE_SOURCE_KEYS.ISAFJORDUR, limit: 1, now: new Date("2026-08-27T00:00:00Z"), fetchDetail: async () => "<p>Tilboðum skal skilað 14. 09. 2026. Útboðsnúmer: ISA-2026-14.</p>" });
  assert.equal(result.candidates[0].deadline, "2026-09-14");
  assert.equal(result.candidates[0].procurement_reference, "ISA-2026-14");
});

test("Ísafjarðarbær Moya entryContent recovers Icelandic deadline and explicit reference", async () => {
  const html = `<nav>Almennar fréttir og dagskrá</nav><div class="entryContent">
    <p><strong>Slökkvistöð á Suðurtanga – Burðarvirki</strong><br>Útboð nr. 2024120087</p>
    <table><tr><td>Tilboðsfrestur</td><td>10. júní 2026 kl. 15:30</td></tr></table>
    <p>Ísafjarðarbær óskar eftir tilboðum. Útboðsgögn verða aðgengileg.</p>
  </div><footer>Markaðskönnun nr. 99999</footer>`;
  const candidate = { title: "Útboð: Slökkvistöð", description: "", canonical_url: "https://www.isafjardarbaer.is/is/moya/news/utbod", deadline: null, buyer: "Ísafjarðarbær", procurement_reference: null };
  const result = await enrichCandidatesBounded([candidate], { sourceKey: THREE_SOURCE_KEYS.ISAFJORDUR, limit: 1, now: new Date("2026-05-20T00:00:00Z"), metadataExtractor: extractIsafjordurDetailMetadata, fetchDetail: async () => html });
  assert.equal(result.candidates[0].deadline, "2026-06-10");
  assert.equal(result.candidates[0].procurement_reference, "2024120087");
  assert.equal(result.candidates[0].safe_source_payload.shadow_enrichment.form_type, "competition");
});

test("Ísafjarðarbær Moya solicitation supports explicit month-name deadline without a reference", () => {
  const metadata = extractIsafjordurDetailMetadata(`<div class="entryContent"><p>Útboðsgögn afhent frá 15. júní 2026.</p><p>Tilboðsfrestur: 29. júní 2026 kl. 12:00</p></div>`);
  assert.equal(metadata.deadline, "2026-06-29");
  assert.equal(metadata.procurement_reference, null);
  assert.equal(metadata.form_type, "competition");
});

test("Ísafjarðarbær ordinary Moya news and missing metadata remain null", () => {
  const metadata = extractIsafjordurDetailMetadata(`<nav>Útboð nr. 99999</nav><div class="entryContent"><p>Götulokun vegna bæjarhátíðar á laugardag.</p></div>`);
  assert.equal(metadata.deadline, null);
  assert.equal(metadata.procurement_reference, null);
  assert.equal(metadata.form_type, null);
  assert.equal(metadata.enrichment_status, "no_supported_fields");
});

test("Ísafjarðarbær explicit follow-up evidence is non-open source metadata", () => {
  const metadata = extractIsafjordurDetailMetadata(`<div class="entryContent"><p>Niðurstaða útboðs: samningur undirritaður við valinn verktaka.</p></div>`);
  assert.equal(metadata.form_type, "result");
  assert.equal(metadata.follow_up, true);
  const prediction = classificationColumns(classifyProcurementStage({ authoritative_metadata: metadata }));
  assert.equal(prediction.procurement_stage, "award_or_contract_signed");
  assert.equal(prediction.actionable_for_suppliers, false);
});

test("Ísafjarðarbær source-specific enrichment isolates individual detail failures", async () => {
  const candidates = [
    { title: "Útboð A", description: "Óskað eftir tilboðum", canonical_url: "https://example.is/a" },
    { title: "Útboð B", description: "Óskað eftir tilboðum", canonical_url: "https://example.is/b" },
  ];
  const result = await enrichCandidatesBounded(candidates, { sourceKey: THREE_SOURCE_KEYS.ISAFJORDUR, limit: 2, now: new Date("2026-05-20T00:00:00Z"), metadataExtractor: extractIsafjordurDetailMetadata, fetchDetail: async (url) => { if (url.endsWith("/a")) throw Object.assign(new Error("timeout"), { code: "V2_FETCH_TIMEOUT" }); return `<div class="entryContent"><p>Tilboðsfrestur: 29. júní 2026</p><p>Útboðsgögn.</p></div>`; } });
  assert.equal(result.metrics.failed, 1);
  assert.equal(result.metrics.succeeded, 1);
  assert.equal(result.candidates[0].safe_source_payload.shadow_enrichment.enrichment_status, "failed");
  assert.equal(result.candidates[1].deadline, "2026-06-29");
});

test("Ísafjarðarbær municipal news stays non-actionable and missing deadlines fail closed", () => {
  const context = getSourceClassificationContext({ source_key: THREE_SOURCE_KEYS.ISAFJORDUR });
  const news = classificationColumns(classifyProcurementStage({ ...context, title: "Götulokun vegna malbikunar", description: "Umferð verður beint annað", authoritative_metadata: {} }));
  assert.equal(news.actionable_for_suppliers, false);
  const openWithoutDeadline = applySourcePredictionPolicy({ procurement_stage: "open_competition", actionable_for_suppliers: true, requires_admin_review: false }, { deadline: null }, { source_key: THREE_SOURCE_KEYS.ISAFJORDUR });
  assert.equal(openWithoutDeadline.prediction.actionable_for_suppliers, false);
  assert.equal(openWithoutDeadline.prediction.requires_admin_review, true);
});

test("Ísafjarðarbær semantic duplicate titles are counted without dropping raw observations", () => {
  const rows = [
    { title: "Óskað eftir tilboðum í þakviðgerðir", publication_date: "2026-02-27", canonical_url: "https://isafjordur.is/one" },
    { title: "Óskað eftir tilboðum í þakviðgerðir", publication_date: "2026-02-27", canonical_url: "https://isafjordur.is/one-1" },
  ];
  assert.equal(countSemanticDuplicates(rows), 1);
  assert.equal(rows.length, 2);
});

test("classification context is source-accurate without changing other source defaults", () => {
  assert.deepEqual(getSourceClassificationContext({ source_key: THREE_SOURCE_KEYS.RIKISKAUP }).source_type, "national_procurement_portal");
  assert.deepEqual(getSourceClassificationContext({ source_key: THREE_SOURCE_KEYS.VEGAGERDIN }).source_type, "road_authority_broad_feed");
  assert.deepEqual(getSourceClassificationContext({ source_key: THREE_SOURCE_KEYS.ISAFJORDUR }).source_type, "municipal");
  assert.deepEqual(getSourceClassificationContext({ source_key: THREE_SOURCE_KEYS.REYKJAVIK }), {
    source_type: "municipal_procurement_portal",
    connector_type: "municipal_html_index",
    source_organisation: "Reykjavíkurborg procurement",
  });
  assert.deepEqual(getSourceClassificationContext({ source_key: THREE_SOURCE_KEYS.LANDSVIRKJUN }), {
    source_type: "energy_utility_procurement_portal",
    connector_type: "public_procurement_html_index",
    source_organisation: "Landsvirkjun procurement",
  });
  assert.equal(getSourceClassificationContext({ source_key: THREE_SOURCE_KEYS.LANDSNET }).source_organisation, "Landsnet procurement");
  assert.equal(getSourceClassificationContext({ source_key: THREE_SOURCE_KEYS.VEITUR }).source_organisation, "Veitur procurement");
  assert.equal(getSourceClassificationContext({ source_key: THREE_SOURCE_KEYS.ORKUVEITAN }).source_organisation, "Orkuveita Reykjavíkur procurement");
  assert.deepEqual(getSourceClassificationContext({ source_key: "akranes-utbod-v2", adapter_type: "rss" }), { source_type: "municipal", connector_type: "rss_feed", source_organisation: "akranes-utbod-v2" });
});

test("shadow parser health records stored run and enrichment metrics", () => {
  const health = buildShadowParserHealth({ config: { parser_name: "rikiskaup-wordpress", parser_version: "1.0.0" }, fetched: 3, parsed: 40, valid: 39, invalid: 1, duplicates: 2, parserErrors: ["deadline_invalid"], enrichment: { attempted: 20, succeeded: 19, failed: 1 }, suspiciousZero: false, pagination: { fetched_pages: 3 }, classification: { stage_distribution: { open_competition: 7, uncertain: 33 }, actionable: 7, non_actionable: 33 } });
  assert.equal(health.fetched_count, 3);
  assert.equal(health.valid_count, 39);
  assert.equal(health.duplicate_count, 2);
  assert.equal(health.enrichment.failed, 1);
  assert.deepEqual(health.classification.stage_distribution, { open_competition: 7, uncertain: 33 });
  assert.equal(health.classification.actionable, 7);
});

test("Reykjavík migration is fixture-only public HTML with a disabled fallback", async () => {
  const sql = await readFile(reykjavikMigrationUrl, "utf8");
  assert.match(sql, /'reykjavik-utbod-v2'/);
  assert.match(sql, /'municipal_html_index'/);
  assert.match(sql, /'fixture_only'/);
  assert.match(sql, /https:\/\/reykjavik\.is\/utbodsauglysingar/);
  assert.match(sql, /"public_html_only":true/);
  assert.match(sql, /"authenticated_documents":false/);
  assert.match(sql, /"enabled":false,"kind":"in_tend_xhr"/);
  assert.doesNotMatch(sql, /mode\s*=\s*excluded\.mode/);
});

test("Reykjavík runtime is allowlisted but has no authenticated or In-Tend request path", async () => {
  const source = await readFile(functionUrl, "utf8");
  assert.match(source, /"reykjavik-utbod-v2"/);
  assert.match(source, /"reykjavik-html-index"/);
  assert.match(source, /extractReykjavikDetailMetadata/);
  assert.doesNotMatch(source, /MyTenders|Projects\.svc|reCAPTCHA|authenticated document/i);
  assert.match(source, /customer_visible_writes:\s*0/);
  assert.match(source, /promotion_allowed:\s*false/);
  assert.match(source, /promote_count:\s*0/);
});

test("Landsvirkjun migration is fixture-only and records uncleared automated access", async () => {
  const sql = await readFile(landsvirkjunMigrationUrl, "utf8");
  assert.match(sql, /'landsvirkjun-utbod-v2'/);
  assert.match(sql, /'public_procurement_html_index'/);
  assert.match(sql, /'fixture_only'/);
  assert.match(sql, /https:\/\/utbodsvefur\.is\/\?adili=1347/);
  assert.match(sql, /"operational_state":"automated_live_access_not_cleared"/);
  assert.match(sql, /"robots_disallow":true/);
  assert.match(sql, /"automated_live_access_cleared":false/);
  assert.match(sql, /"index_requests":1/);
  assert.match(sql, /"detail_requests":10/);
  assert.match(sql, /"request_timeout_ms":5000/);
  assert.match(sql, /"max_attempts":2/);
  assert.doesNotMatch(sql, /mode\s*=\s*excluded\.mode/);
});

test("Landsvirkjun runtime is fixture-wired, live-blocked, and promotion-free", async () => {
  const source = await readFile(functionUrl, "utf8");
  assert.match(source, /"landsvirkjun-html-index"/);
  assert.match(source, /extractLandsvirkjunDetailMetadata/);
  assert.match(source, /V2_LIVE_ACCESS_NOT_CLEARED/);
  const allowlist = source.match(/const ALLOWED_SOURCES = new Set\(\[([^\]]+)\]\)/)?.[1] || "";
  assert.doesNotMatch(allowlist, /landsvirkjun-utbod-v2/);
  assert.doesNotMatch(source, /fetchWithRetry\([^\n]*(?:in-tendhost|MyTenders|Projects\.svc)/i);
  assert.match(source, /customer_visible_writes:\s*0/);
  assert.match(source, /promotion_allowed:\s*false/);
  assert.match(source, /promote_count:\s*0/);
  assert.doesNotMatch(source, /\.from\(["']opportunities["']\)\.(?:insert|update|upsert|delete)/);
});

test("three additional Útboðsvefur configs are fixture-only with strict buyer settings", async () => {
  const sql = await readFile(utbodsvefurBuyersMigrationUrl, "utf8");
  for (const [key, selector, buyer] of [
    ["landsnet-utbod-v2", "326", "Landsnet"],
    ["veitur-utbod-v2", "574", "Veitur"],
    ["orkuveitan-utbod-v2", "193", "Orkuveita Reykjavíkur"],
  ]) {
    assert.match(sql, new RegExp(`'${key}'`));
    assert.match(sql, new RegExp(`\\?adili=${selector}`));
    assert.match(sql, new RegExp(`'${buyer}'`));
  }
  assert.match(sql, /'fixture_only'/);
  assert.match(sql, /'automated_live_access_not_cleared'/);
  assert.match(sql, /'robots_disallow', true/);
  assert.match(sql, /'automated_live_access_cleared', false/);
  assert.match(sql, /'promotion_available', false/);
  assert.match(sql, /'accepted_buyer_aliases', '\[\]'::jsonb/);
  assert.doesNotMatch(sql, /mode\s*=\s*excluded\.mode/);
});

test("new Útboðsvefur sources are fixture-wired but outside every live execution allowlist", async () => {
  const source = await readFile(functionUrl, "utf8");
  for (const parser of ["landsnet-html-index", "veitur-html-index", "orkuveitan-html-index"]) assert.match(source, new RegExp(`"${parser}"`));
  for (const extractor of ["extractLandsnetDetailMetadata", "extractVeiturDetailMetadata", "extractOrkuveitanDetailMetadata"]) assert.match(source, new RegExp(extractor));
  const allowlist = source.match(/const ALLOWED_SOURCES = new Set\(\[([^\]]+)\]\)/)?.[1] || "";
  for (const key of ["landsvirkjun-utbod-v2", "landsnet-utbod-v2", "veitur-utbod-v2", "orkuveitan-utbod-v2"]) assert.doesNotMatch(allowlist, new RegExp(key));
  assert.match(source, /V2_LIVE_ACCESS_NOT_CLEARED/);
  assert.doesNotMatch(source, /fetchWithRetry\([^\n]*(?:in-tendhost|MyTenders|Projects\.svc)/i);
  assert.doesNotMatch(source, /\.from\(["']opportunities["']\)\.(?:insert|update|upsert|delete)/);
  assert.match(source, /promote_v2_observation/);
});

test("Landsvirkjun aggregate diagnostics persist in parser health", () => {
  const health = buildShadowParserHealth({
    config: { parser_name: "landsvirkjun-html-index", parser_version: "1.0.0" },
    fetched: 1,
    parsed: 3,
    valid: 3,
    invalid: 0,
    duplicates: 0,
    suspiciousZero: false,
    indexDiagnostics: { total_rows: 7, matching_buyer_rows: 3, buyer_mismatch_rows: 4, zero_exact_buyer_match: false },
  });
  assert.equal(health.index_diagnostics.total_rows, 7);
  assert.equal(health.index_diagnostics.buyer_mismatch_rows, 4);
});

test("admin diagnostics prefer stored run totals over globally limited observation rows", () => {
  const rows = buildAdminV2OverviewRows({ configs: [{ id: "source", v2_source_health: { last_observation_count: 749, parser_health: { invalid_count: 0 } } }], runs: [{ id: "run", source_config_id: "source", observation_count: 749, invalid_count: 0, created_at: "2026-08-27" }], observations: [], comparisons: [] });
  assert.equal(rows[0].observationCount, 749);
  assert.equal(rows[0].validObservationCount, 749);
});

test("shadow runs remain zero-write even though a separate manual canary action exists", async () => {
  const source = await readFile(functionUrl, "utf8");
  assert.match(source, /customer_visible_writes:\s*0/);
  assert.match(source, /promotion_allowed:\s*false/);
  assert.match(source, /promote_count:\s*0/);
  assert.doesNotMatch(source, /\.from\(["']opportunities["']\)\.(?:insert|update|upsert|delete)/);
  assert.match(source, /body\.action === "promote_canary"/);
});

test("promotion evidence requires explicit deadline and strong procurement metadata", () => {
  const ready = derivePromotionEvidence({
    deadline: "2026-10-01",
    safe_source_payload: { shadow_enrichment: { enrichment_status: "enriched", procurement_type: "open_tender", request_for_bids: true } },
  }, { positive_signals: [] });
  assert.deepEqual(ready, {
    strong_procurement_evidence: true,
    deadline_evidence: "explicit_source",
    promotion_enrichment_status: "succeeded",
  });
  const failed = derivePromotionEvidence({
    deadline: "2026-10-01",
    safe_source_payload: { shadow_enrichment: { enrichment_status: "failed", procurement_type: "open_tender" } },
  }, { positive_signals: [] });
  assert.equal(failed.strong_procurement_evidence, true);
  assert.equal(failed.promotion_enrichment_status, "failed");
  const weak = derivePromotionEvidence({ deadline: null, safe_source_payload: {} }, { positive_signals: [] });
  assert.equal(weak.strong_procurement_evidence, false);
  assert.equal(weak.deadline_evidence, null);
  assert.equal(weak.promotion_enrichment_status, "failed");
});

async function sampleObservation(overrides = {}) {
  return createObservation({
    external_id: "source-123",
    procurement_reference: "VRK-2026-123",
    discovered_url: "https://example.is/tenders/123",
    canonical_url: "https://example.is/tenders/123",
    title: "Gatnagerð og lagnir við miðbæ",
    description: "Óskað eftir tilboðum.",
    buyer: "Dæmibær",
    deadline: "2026-09-30",
    publication_date: "2026-08-20",
    location: "Dæmibær",
    safe_source_payload: { id: 123 },
    ...overrides,
  }, context);
}
