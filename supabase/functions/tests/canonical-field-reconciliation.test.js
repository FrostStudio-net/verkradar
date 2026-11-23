import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { extractGardabaerDetailMetadata } from "../_shared/ingestion-v2/adapters/gardabaer-enrichment.js";
import { extractReykjavikDetailMetadata } from "../_shared/ingestion-v2/adapters/reykjavik-enrichment.js";

const migrationUrl = new URL("../../migrations/20261123120000_verified_official_canonical_field_reconciliation.sql", import.meta.url);

test("Hnoðraholt detail enrichment preserves full scope and surfaces its deadline conflict", () => {
  const html = `<!doctype html><html><head>
    <link rel="canonical" href="https://www.gardabaer.is/framkvaemdir/utbod/hnodraholt-sudur-haholt-gatnagerd-og-lagnir">
    </head><body><main><article><h1>Hnoðraholt suður – Háholt – Gatnagerð og lagnir</h1>
    <div class="details"><div class="detailsTitle">Staða útboðs</div><div class="detailsContent">Í auglýsingu</div></div>
    <div class="details"><div class="detailsTitle">Útboð lýkur</div><div class="detailsContent">04.12.2026</div></div>
    <p>Garðabær óskar eftir tilboðum í gatnagerð. Verkið felst í allri jarðvinnu fyrir götur, gangstéttar og bílastæði, fráveitur og frárennsliskerfi.</p>
    <p>Verkið felur einnig í sér lagnir við heitt og kalt vatn og yfirborðsfrágang.</p>
    <p>Skal tilboðum skilað rafrænt fyrir kl. 14:00 miðvikudaginn 2. desember 2026.</p>
    </article></main></body></html>`;
  const metadata = extractGardabaerDetailMetadata(html);

  assert.equal(metadata.enrichment_status, "enriched");
  assert.match(metadata.description, /jarðvinnu/);
  assert.match(metadata.description, /fráveitur/);
  assert.match(metadata.description, /frárennsliskerfi/);
  assert.match(metadata.description, /lagnir við heitt og kalt vatn/);
  assert.match(metadata.description, /götur/);
  assert.match(metadata.description, /yfirborðsfrágang/);
  assert.equal(metadata.deadline, "2026-12-02");
  assert.equal(metadata.deadline_evidence.submission_deadline, "2026-12-02");
  assert.equal(metadata.deadline_evidence.structured_deadline, "2026-12-04");
  assert.equal(metadata.deadline_conflict, true);
});

test("Reykjavík detail submission deadline outranks structured metadata and conflicts are explicit", () => {
  const html = `<!doctype html><html><head>
    <link rel="canonical" href="https://reykjavik.is/utbod/16342-rafraen-undirritunarlausn-fyrir-reykjavikurborg-rammasamningur">
    <meta name="robots" content="unavailable_after: Tue, 24-Nov-2026 10:00:00 GMT">
    </head><body class="node-tender"><article><h1>16342 Rafræn undirritunarlausn</h1>
    <div class="TextBlock"><p>Útboð nr. 16342. Tilboðum skal skila eigi síðar en 8. desember 2026.</p></div>
    </article></body></html>`;
  const metadata = extractReykjavikDetailMetadata(html);

  assert.equal(metadata.deadline, "2026-12-08");
  assert.equal(metadata.deadline_evidence.submission_deadline, "2026-12-08");
  assert.equal(metadata.deadline_evidence.structured_deadline, "2026-11-24");
  assert.equal(metadata.deadline_conflict, true);
});

test("canonical reconciliation is same-identity, precedence-aware, monotonic, and reference-preserving", async () => {
  const sql = await readFile(migrationUrl, "utf8");

  assert.match(sql, /source_key not in \('gardabaer-utbod-v2', 'reykjavik-utbod-v2'\)/);
  assert.match(sql, /opportunity_row\.source_id is distinct from observation_row\.source_id/);
  assert.match(sql, /opportunity_row\.external_id is distinct from observation_row\.external_id/);
  assert.match(sql, /candidate_description_rank := 300/);
  assert.match(sql, /char_length\(candidate_description\) > char_length\(coalesce\(opportunity_row\.description, ''\)\)/);
  assert.match(sql, /candidate_description_rank > existing_description_rank/);
  assert.match(sql, /observed_at >= previous_description_observed_at/);
  assert.match(sql, /observed_at >= previous_deadline_observed_at/);
  assert.match(sql, /deadline_conflict and \(previous_deadline_observed_at is null or observed_at >= previous_deadline_observed_at\)/);
  assert.match(sql, /candidate_deadline_rank >= existing_deadline_rank/);
  assert.match(sql, /'resolution', 'canonical_deadline_preserved'/);
  assert.match(sql, /update public\.opportunities[\s\S]*where id = opportunity_row\.id/);
  assert.doesNotMatch(sql, /insert into public\.opportunities/i);
  assert.doesNotMatch(sql, /delete from public\.opportunities/i);
  assert.doesNotMatch(sql, /(?:insert into|update|delete from) public\.(?:opportunity_matches|company_opportunity_actions|company_opportunity_sends|reports|report_items|internal_match_alert_outbox)/i);
});

test("controlled repair is limited to the two audited canonical IDs and remains idempotent", async () => {
  const sql = await readFile(migrationUrl, "utf8");
  assert.match(sql, /f94dab85-70da-4d7f-ad94-d26262feed0d/);
  assert.match(sql, /3f838300-17c4-413a-96f5-44856a082b07/);
  assert.match(sql, /order by o\.fetched_at desc, o\.created_at desc/);
  assert.match(sql, /perform public\.v2_reconcile_verified_official_fields\(target\.opportunity_id, target\.observation_id\)/);
  assert.match(sql, /after update of promotion_state, promoted_opportunity_id/);
});
