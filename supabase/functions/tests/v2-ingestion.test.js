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

const fixtureRoot = new URL("../import-source-connectors-v2/_fixtures/", import.meta.url);
const migrationUrl = new URL("../../migrations/20260826120000_parallel_source_ingestion_v2_phase_a.sql", import.meta.url);
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

test("promote mode is required and a new row requires existing classification contract", async () => {
  const observation = await sampleObservation();
  await assert.rejects(() => promoteObservation({
    config: { mode: "promote", source_id: observation.source_id },
    observation,
    identity: { matched: false },
    promotionGateway: async () => { throw new Error("must not reach gateway"); },
  }), { code: "V2_CLASSIFIER_REQUIRED" });
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
  assert.equal(receivedClassification, null);
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

test("new promotion invokes duplicate detection only as defense-in-depth", async () => {
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
  assert.deepEqual(defended, ["new-opportunity"]);
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

test("Phase A function has no live fetch, promotion RPC, or opportunities write path", async () => {
  const source = await readFile(functionUrl, "utf8");
  assert.doesNotMatch(source, /\bfetch\s*\(/);
  assert.doesNotMatch(source, /promote_v2_observation/);
  assert.doesNotMatch(source, /\.from\(["']opportunities["']\)/);
  assert.match(source, /config\.mode !== "fixture_only"/);
  assert.match(source, /Phase A permits fixture\/replay input only/);
});

test("admin v2 data service and panel are read-only", async () => {
  const service = await readFile(new URL("../../../src/services/adminV2Ingestion.js", import.meta.url), "utf8");
  const panel = await readFile(new URL("../../../src/pages/adminV2Ingestion.js", import.meta.url), "utf8");
  assert.doesNotMatch(service, /\.(insert|update|upsert|delete|rpc)\s*\(/);
  assert.doesNotMatch(panel, /data-action=/);
  assert.match(panel, /read-only fixture\/shadow health/i);
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
