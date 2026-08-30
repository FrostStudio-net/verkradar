import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { parseWithV2Adapter } from "../_shared/ingestion-v2/adapters/index.js";
import {
  applyBorgarbyggdSourceStatus,
  applySourcePredictionPolicy,
  buildShadowParserHealth,
  derivePromotionEvidence,
  fetchBoundedWordpressPages,
  getSourceClassificationContext,
} from "../_shared/ingestion-v2/shadow-quality.js";

const migrationUrl = new URL("../../migrations/20260830200000_borgarbyggd_phase_b_repair.sql", import.meta.url);
const edgeUrl = new URL("../import-source-connectors-v2/index.ts", import.meta.url);

const config = { source_key: "borgarbyggd-utbod-v2", display_name: "Borgarbyggð útboð v2" };
const basePrediction = {
  procurement_stage: "open_competition",
  actionable_for_suppliers: true,
  requires_admin_review: false,
  classification_confidence: 0.96,
  classification_reason: "Explicit tender wording.",
  positive_signals: ["request_for_bids", "supplier_deadline"],
  negative_signals: [],
};

test("Borgarbyggð WordPress pagination fetches all pages, dedupes, and stops at the reported end", async () => {
  const posts = Array.from({ length: 11 }, (_, index) => ({ id: index + 1, link: `https://dev.borgarbyggd.is/utbod/${index + 1}/` }));
  const calls = [];
  const result = await fetchBoundedWordpressPages({
    endpointUrl: "https://dev.borgarbyggd.is/wp-json/wp/v2/posts?categories=177",
    maxPages: 3,
    maxItems: 30,
    perPage: 10,
    fetchPage: async (url) => {
      const page = Number(new URL(url).searchParams.get("page"));
      calls.push(page);
      return { body: JSON.stringify(page === 1 ? posts.slice(0, 10) : [posts[9], posts[10]]), totalPages: "2", result: {} };
    },
  });
  assert.deepEqual(calls, [1, 2]);
  assert.equal(result.items.length, 11);
  assert.equal(result.diagnostics.fetched_pages, 2);
  assert.equal(result.diagnostics.unique_items, 11);
  assert.equal(result.diagnostics.duplicates, 1);
  assert.equal(result.diagnostics.stopped, "reported_end");
});

test("Borgarbyggð parser recovers post-local Icelandic deadlines and rejects false references", () => {
  const posts = [
    post(34916, "Vetrarþjónusta í Borgarnesi", "Tímafrestur útboðs: 18.06.2026 kl. 12:55. Hægt er að sækja öll útboðsgögn hér á vef."),
    post(34881, "Gatnaframkvæmdir á Bröttugötu – Útboð", "Skilafrestur tilboða er til kl. 10:00 þann 5. júní 2026. Gögn eru í kerfi."),
    post(34805, "Borgarbyggð óskar eftir tilboðum í skólaakstur", "Tilboðum skal skila með rafrænum hætti eigi síðar en 15.06.2026 kl. 12:00. Málaferli eiga ekki við."),
  ];
  const rows = parseWithV2Adapter("borgarbyggd-wordpress", "2.0.0", JSON.stringify(posts));
  assert.deepEqual(rows.map((row) => row.deadline), ["2026-06-18", "2026-06-05", "2026-06-15"]);
  assert.deepEqual(rows.map((row) => row.procurement_reference), [null, null, null]);
  assert.deepEqual(rows.map((row) => row.external_id), ["34916", "34881", "34805"]);
  assert.equal(rows[0].safe_source_payload.listing_context, "procurement_category");
});

test("Borgarbyggð retains only strongly labelled structured procurement references", () => {
  const [row] = parseWithV2Adapter("borgarbyggd-wordpress", "2.0.0", JSON.stringify([
    post(40001, "Útboð í gatnagerð", "Verknúmer: BOR-2026-09. Tilboðsfrestur: 21.09.2026."),
  ]));
  assert.equal(row.procurement_reference, "BOR-2026-09");
  assert.equal(row.deadline, "2026-09-21");
});

test("Borgarbyggð policy closes expired and complaint posts while preserving a future explicit tender", () => {
  const parsed = parseWithV2Adapter("borgarbyggd-wordpress", "2.0.0", JSON.stringify([
    post(1, "Útboð á tryggingum Borgarbyggðar kært", "Tilkynning um niðurstöðu. Útboði lokið."),
    post(2, "Vetrarþjónusta í Borgarnesi", "Borgarbyggð óskar eftir tilboðum. Tímafrestur útboðs: 18.06.2026."),
    post(3, "Útboð í gatnagerð", "Borgarbyggð óskar eftir tilboðum. Tilboðsfrestur: 21.09.2026."),
    post(4, "Gamalt útboð", "Eldri auglýsing án studds skilafrests.", "2021-01-01T00:00:00"),
  ]));
  const rows = applyBorgarbyggdSourceStatus(parsed, new Date("2026-08-30T12:00:00Z"));
  const predictions = rows.map((row) => applySourcePredictionPolicy(basePrediction, row, config, new Date("2026-08-30T12:00:00Z")).prediction);
  assert.equal(predictions[0].procurement_stage, "completed");
  assert.equal(predictions[0].actionable_for_suppliers, false);
  assert.equal(derivePromotionEvidence(rows[0], predictions[0]).strong_procurement_evidence, false);
  assert.equal(predictions[1].procurement_stage, "completed");
  assert.equal(predictions[1].actionable_for_suppliers, false);
  assert.equal(predictions[2].procurement_stage, "open_competition");
  assert.equal(predictions[2].actionable_for_suppliers, true);
  assert.equal(predictions[3].procurement_stage, "uncertain");
  assert.equal(predictions[3].actionable_for_suppliers, false);
  assert.equal(predictions[3].requires_admin_review, true);
});

test("Borgarbyggð context and health diagnostics are WordPress-specific and fail-closed capable", () => {
  assert.deepEqual(getSourceClassificationContext(config), {
    source_type: "municipal_procurement_portal",
    connector_type: "wordpress_procurement_category",
    source_organisation: "Borgarbyggð procurement",
  });
  const health = buildShadowParserHealth({
    config: { parser_name: "borgarbyggd-wordpress", parser_version: "2.0.0" }, fetched: 2, parsed: 11, valid: 11, invalid: 0, duplicates: 0,
    pagination: { fetched_pages: 2, unique_items: 11 }, comparison: { state_distribution: { v2_only: 11 }, errors: 0 },
    quality: { healthy: true, blockers: [] }, recovery: { deadlines: 7, references: 0, buyers: 11, source_status_distribution: { completed: 7, unknown: 4 } },
  });
  assert.equal(health.pagination.unique_items, 11);
  assert.equal(health.comparison.state_distribution.v2_only, 11);
  assert.equal(health.quality.healthy, true);
  assert.equal(health.recovery.references, 0);
});

test("Borgarbyggð runtime uses the atomic comparison and quality gate without enabling production", async () => {
  const [sql, edge] = await Promise.all([readFile(migrationUrl, "utf8"), readFile(edgeUrl, "utf8")]);
  assert.match(sql, /compare_borgarbyggd_shadow_observation/);
  assert.match(sql, /source_external_candidates/);
  assert.match(sql, /reference_candidates/);
  assert.match(sql, /canonical_url_candidates/);
  assert.match(sql, /fingerprint_candidates/);
  assert.match(sql, /fuzzy_review_candidate/);
  assert.doesNotMatch(sql, /routine_production_enabled\s*=\s*true|production_shadow_enabled\s*=\s*true/);
  assert.match(edge, /V2_BORGARBYGGD_QUALITY_GATE/);
  assert.match(edge, /expired_or_completed_actionable/);
  assert.match(edge, /comparisonMetrics\.baseline_unavailable/);
});

function post(id, title, content, date = "2026-05-20T11:39:44") {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `post-${id}`;
  return { id, date, date_gmt: date, slug, status: "publish", type: "post", link: `https://dev.borgarbyggd.is/utbod/${slug}/`, title: { rendered: title }, content: { rendered: `<p>${content}</p>` } };
}
