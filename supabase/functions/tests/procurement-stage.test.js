import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  applyDeadlineActionabilityGuard,
  buildAiClassifierInput,
  classificationColumns,
  classifyProcurementStage,
  isProcurementOpportunityEligible,
  preserveAdminClassification,
  processProcurementClassificationBatch,
} from "../_shared/procurement-stage.js";
import { getReportCandidateKind } from "../../../src/services/reportAiRanking.js";

const fixtureUrl = new URL("./fixtures/gilsbakkavegur-work-underway.json", import.meta.url);
const gilsbakkavegur = JSON.parse(await readFile(fixtureUrl, "utf8"));
const sourceImporterUrl = new URL("../import-source-connectors/index.ts", import.meta.url);

test("classifies an explicit open tender", () => {
  const result = classifyProcurementStage({
    title: "Óskað eftir tilboðum í gatnagerð",
    body_text: "Óskað er eftir tilboðum. Tilboðsfrestur er 30. september og útboðsgögn eru aðgengileg.",
  });
  assert.equal(result.procurement_stage, "open_competition");
  assert.equal(result.actionable_for_suppliers, true);
});

test("classifies an explicit future procurement announcement", () => {
  const result = classifyProcurementStage({
    title: "Fyrirhugað útboð á fráveituframkvæmdum",
    body_text: "Áætlað er að bjóða verkið út í október.",
  });
  assert.equal(result.procurement_stage, "upcoming_procurement");
  assert.equal(result.actionable_for_suppliers, true);
});

test("classifies a market consultation", () => {
  const result = classifyProcurementStage({
    title: "Markaðssamráð vegna sorphirðu",
    body_text: "Kaupandi boðar markaðssamráð við mögulega þjónustuveitendur.",
  });
  assert.equal(result.procurement_stage, "market_consultation");
  assert.equal(result.actionable_for_suppliers, true);
});

test("negative award evidence overrides project wording", () => {
  const result = classifyProcurementStage({
    title: "Endurnýjun götu",
    body_text: "Verkið felur í sér framkvæmdir við götuna. Verktaki valinn og verksamningur undirritaður.",
  });
  assert.equal(result.procurement_stage, "award_or_contract_signed");
  assert.equal(result.actionable_for_suppliers, false);
});

test("Gilsbakkavegur is work underway and excluded", () => {
  const result = classifyProcurementStage(gilsbakkavegur);
  const columns = classificationColumns(result, result.classified_by, new Date("2026-07-28T12:00:00Z"));
  assert.equal(columns.procurement_stage, "work_underway");
  assert.equal(columns.actionable_for_suppliers, false);
  assert.equal(columns.requires_admin_review, false);
  assert.equal(isProcurementOpportunityEligible({ ...columns, status: "open" }), false);
});

test("resident disruption notice is not a supplier opportunity", () => {
  const result = classifyProcurementStage({
    title: "Lokun vegna framkvæmda",
    body_text: "Umferð breytist og hjáleið verður merkt. Íbúar eru beðnir um að sýna aðgát.",
  });
  assert.equal(result.procurement_stage, "work_underway");
  assert.equal(result.actionable_for_suppliers, false);
});

test("classifies explicit completed work", () => {
  const result = classifyProcurementStage({
    title: "Endurbótum lokið",
    body_text: "Framkvæmdum er lokið og svæðið hefur verið opnað aftur.",
  });
  assert.equal(result.procurement_stage, "completed");
  assert.equal(result.actionable_for_suppliers, false);
  assert.equal(result.requires_admin_review, false);
});

test("generic municipal news is classified as general news", () => {
  const result = classifyProcurementStage({
    title: "Bæjarstjórnarfundur á fimmtudag",
    body_text: "Fundargerð og dagskrá fundarins hafa verið birt.",
  });
  assert.equal(result.procurement_stage, "general_news");
  assert.equal(result.actionable_for_suppliers, false);
});

test("ambiguous municipal item requires AI/admin review", () => {
  const result = classifyProcurementStage({
    source_type: "municipal_website",
    connector_type: "rss_feed",
    title: "Nýtt þjónustuhús við höfnina",
    body_text: "Sveitarfélagið kynnir hugmyndir að nýju þjónustuhúsi.",
  });
  assert.equal(result.procurement_stage, "uncertain");
  assert.equal(result.requires_admin_review, true);
  assert.equal(result.needs_ai, true);
});

test("generic construction words are never sufficient", () => {
  for (const body_text of ["Framkvæmdir", "Fyrirhugað", "Endurnýjun", "Verkið felur í sér jarðvinnu"]) {
    const result = classifyProcurementStage({ title: "Verkefni", body_text });
    assert.equal(result.procurement_stage, "uncertain");
    assert.equal(result.actionable_for_suppliers, false);
  }
});

test("TED form type is authoritative", () => {
  const result = classifyProcurementStage({
    deadline: "2099-12-31",
    authoritative_metadata: { form_type: "competition" },
  });
  assert.equal(result.procurement_stage, "open_competition");
  assert.equal(result.classified_by, "source_metadata");
});

test("TED contract-modification form types are authoritative non-actionable results", () => {
  for (const form_type of [
    "contract modification",
    "contract-modification notice",
    "cont-modif",
    "dir-cont-modif",
  ]) {
    const result = classifyProcurementStage({ authoritative_metadata: { form_type } });
    assert.equal(result.procurement_stage, "award_or_contract_signed", form_type);
    assert.equal(result.actionable_for_suppliers, false, form_type);
    assert.equal(result.classified_by, "source_metadata", form_type);
  }
});

test("an expired authoritative competition is not actionable", () => {
  const result = classifyProcurementStage({
    deadline: "2020-01-01",
    authoritative_metadata: { form_type: "competition" },
  });
  const columns = classificationColumns(result, result.classified_by, new Date("2026-07-28T12:00:00Z"));
  assert.equal(columns.procurement_stage, "open_competition");
  assert.equal(columns.actionable_for_suppliers, false);
});

test("deadline actionability guard preserves future and same-day actionable stages", () => {
  const base = { procurement_stage: "market_consultation", actionable_for_suppliers: true, negative_signals: [] };
  const now = new Date("2026-08-27T12:00:00Z");
  assert.equal(applyDeadlineActionabilityGuard(base, "2026-08-28", now).actionable_for_suppliers, true);
  assert.equal(applyDeadlineActionabilityGuard(base, "2026-08-27", now).actionable_for_suppliers, true);
});

test("deadline actionability guard closes every actionable stage after an explicit deadline", () => {
  for (const procurement_stage of ["open_competition", "upcoming_procurement", "market_consultation"]) {
    const result = applyDeadlineActionabilityGuard({ procurement_stage, actionable_for_suppliers: true, negative_signals: [] }, "2026-08-26", new Date("2026-08-27T00:00:00Z"));
    assert.equal(result.procurement_stage, procurement_stage);
    assert.equal(result.actionable_for_suppliers, false);
    assert.ok(result.negative_signals.includes("supplier_deadline_expired"));
  }
});

test("deadline actionability guard does not loosen non-actionable classification", () => {
  const result = applyDeadlineActionabilityGuard({ procurement_stage: "uncertain", actionable_for_suppliers: false }, "2026-09-30", new Date("2026-08-27T00:00:00Z"));
  assert.equal(result.procurement_stage, "uncertain");
  assert.equal(result.actionable_for_suppliers, false);
});

test("AI input is allowlisted, bounded, and removes direct identifiers", () => {
  const input = buildAiClassifierInput({
    source_type: "municipal_website",
    source_organisation: "Sveitarfélagið",
    title: "Útboð ".repeat(100),
    body_text: "Höfundur: Jón Jónsson\nAuthor: Jane Author\nByline: Bjarni Blaðamaður\nContact: Anna Tengiliður\nNetfang: person@example.is\nSími: 555 1234\nKennitala: 010130-2399\n" + "x".repeat(5000),
    publication_date: "2026-07-28",
    deadline: "2026-08-30",
    category: "Útboð",
    authoritative_metadata: { form_type: "", secret: "must-not-pass" },
    company_profile: { company_name: "Private customer" },
    billing_information: "secret",
    internal_notes: "secret",
    raw_payload: { secret: true },
    match: { secret: true },
  });
  assert.deepEqual(Object.keys(input), ["source_type", "source_organisation", "title", "body_text", "publication_date", "deadline", "category", "authoritative_metadata"]);
  assert.deepEqual(Object.keys(input.authoritative_metadata), ["form_type", "notice_type", "notice_subtype"]);
  assert.ok(input.title.length <= 300);
  assert.ok(input.body_text.length <= 4000);
  assert.doesNotMatch(JSON.stringify(input), /Jón Jónsson|Jane Author|Bjarni Blaðamaður|Anna Tengiliður|person@example|555 1234|010130-2399|Private customer|must-not-pass|secret/);
});

test("matching and report gate uses stage, review, status, and deadline", () => {
  const base = {
    procurement_stage: "open_competition",
    actionable_for_suppliers: true,
    requires_admin_review: false,
    status: "open",
    deadline: "2026-08-30",
  };
  const now = new Date("2026-07-28T12:00:00Z");
  assert.equal(isProcurementOpportunityEligible(base, { now }), true);
  assert.equal(isProcurementOpportunityEligible({ ...base, requires_admin_review: true }, { now }), false);
  assert.equal(isProcurementOpportunityEligible({ ...base, procurement_stage: "work_underway", actionable_for_suppliers: false }, { now }), false);
  assert.equal(isProcurementOpportunityEligible({ ...base, deadline: "2026-01-01" }, { now }), false);
  assert.equal(isProcurementOpportunityEligible({ ...base, procurement_stage: "upcoming_procurement", deadline: "" }, { now }), true);
  assert.equal(isProcurementOpportunityEligible({ ...base, procurement_stage: "market_consultation", deadline: "" }, { now }), true);
});

test("legacy rows require an explicit fallback and retain prior eligibility", () => {
  const legacy = {
    status: "open",
    deadline: "2026-08-30",
    classification_grandfathered: true,
    raw_payload: { opportunity_intent: "confirmed_tender" },
  };
  const now = new Date("2026-07-28T12:00:00Z");
  assert.equal(isProcurementOpportunityEligible(legacy, { now }), false);
  assert.equal(isProcurementOpportunityEligible(legacy, { now, allowLegacyUnclassified: true }), true);
  assert.equal(isProcurementOpportunityEligible({ ...legacy, classification_grandfathered: false }, { now, allowLegacyUnclassified: true }), false);
});

test("connector reports select the legacy grandfathering marker", async () => {
  const source = await readFile(sourceImporterUrl, "utf8");
  assert.match(
    source,
    /opportunities\([^)]*procurement_stage, classification_grandfathered, actionable_for_suppliers/s,
  );
  assert.match(source, /upsert\(preparedBatch\.map\(toOpportunityUpsertRow\)/);
  assert.match(source, /PROCUREMENT_PERSISTENCE_BATCH_SIZE = 10/);
});

test("browser-side refresh gate excludes every non-actionable classified stage", () => {
  const base = { status: "open", deadline: "2026-08-30", classificationGrandfathered: false };
  const candidates = [
    { ...base, id: "open", procurementStage: "open_competition", actionableForSuppliers: true, requiresAdminReview: false },
    { ...base, id: "award", procurementStage: "award_or_contract_signed", actionableForSuppliers: false, requiresAdminReview: false },
    { ...base, id: "underway", procurementStage: "work_underway", actionableForSuppliers: false, requiresAdminReview: false },
    { ...base, id: "completed", procurementStage: "completed", actionableForSuppliers: false, requiresAdminReview: false },
    { ...base, id: "news", procurementStage: "general_news", actionableForSuppliers: false, requiresAdminReview: false },
    { ...base, id: "uncertain", procurementStage: "uncertain", actionableForSuppliers: false, requiresAdminReview: true },
    { ...base, id: "false-actionable", procurementStage: "open_competition", actionableForSuppliers: false, requiresAdminReview: false },
    { ...base, id: "review", procurementStage: "open_competition", actionableForSuppliers: true, requiresAdminReview: true },
    { ...base, id: "legacy", procurementStage: "", classificationGrandfathered: true, rawPayload: { opportunity_intent: "confirmed_tender" } },
    { ...base, id: "new-null", procurementStage: "", classificationGrandfathered: false, rawPayload: { opportunity_intent: "confirmed_tender" } },
  ];
  const refreshedIds = candidates
    .filter((opportunity) => isProcurementOpportunityEligible(opportunity, { allowLegacyUnclassified: true }))
    .map((opportunity) => opportunity.id);
  assert.deepEqual(refreshedIds, ["open", "legacy"]);
});

test("many ambiguous records respect the AI call limit and persist the full batch", async () => {
  let clock = 0;
  const persisted = [];
  const stats = await processProcurementClassificationBatch(
    Array.from({ length: 20 }, (_, id) => ({ id })),
    {
      now: () => clock,
      startedAt: 0,
      functionBudgetMs: 18000,
      functionReserveMs: 4000,
      aiBudgetMs: 7000,
      perCallTimeoutMs: 5000,
      maxAiClassifications: 2,
      classifyDeterministic: (item) => ({ needsAi: true, value: item }),
      classifyAi: async (item) => {
        clock += 1000;
        return { ...item, stage: "uncertain", source: "ai" };
      },
      failClosed: (item, reason) => ({ ...item, stage: "uncertain", reason }),
      persist: (item) => persisted.push(item),
    },
  );
  assert.equal(stats.ai_attempted, 2);
  assert.equal(stats.ai_budget_exhausted, 18);
  assert.equal(stats.persisted, 20);
  assert.equal(persisted.length, 20);
  assert.ok(persisted.slice(2).every((item) => item.reason === "ai_classification_budget_exhausted"));
});

test("multiple source batches share one request-wide AI cap", async () => {
  let used = 0;
  let calls = 0;
  const persisted = [];
  for (const source of ["a", "b", "c"]) {
    const stats = await processProcurementClassificationBatch(
      [{ source, id: 1 }, { source, id: 2 }],
      {
        now: () => 1000,
        startedAt: 0,
        aiWindowStartedAt: 0,
        functionBudgetMs: 18000,
        functionReserveMs: 4000,
        aiBudgetMs: 7000,
        maxAiClassifications: Math.max(0, 2 - used),
        classifyDeterministic: (item) => ({ needsAi: true, value: item }),
        classifyAi: async (item) => {
          calls += 1;
          return { ...item, stage: "uncertain" };
        },
        failClosed: (item, reason) => ({ ...item, stage: "uncertain", reason }),
        persist: (item) => persisted.push(item),
      },
    );
    used += stats.ai_attempted;
  }
  assert.equal(calls, 2);
  assert.equal(persisted.length, 6);
  assert.equal(persisted.filter((item) => item.reason === "ai_classification_budget_exhausted").length, 4);
});

test("classifier timeout fails closed and later records still persist", async () => {
  const persisted = [];
  const stats = await processProcurementClassificationBatch([{ id: 1 }, { id: 2 }, { id: 3 }], {
    now: () => 0,
    startedAt: 0,
    classifyDeterministic: (item) => ({ needsAi: true, value: item }),
    classifyAi: async () => { throw new Error("Fetch timed out"); },
    failClosed: (item, reason) => ({ ...item, stage: "uncertain", reason }),
    persist: (item) => persisted.push(item),
  });
  assert.equal(stats.ai_failed, 2);
  assert.equal(stats.ai_budget_exhausted, 1);
  assert.equal(stats.persisted, 3);
  assert.deepEqual(persisted.map((item) => item.stage), ["uncertain", "uncertain", "uncertain"]);
});

test("exhausted function budget skips AI but preserves partial-batch persistence", async () => {
  const persisted = [];
  const stats = await processProcurementClassificationBatch([{ id: "deterministic" }, { id: "ambiguous-1" }, { id: "ambiguous-2" }], {
    now: () => 15000,
    startedAt: 0,
    functionBudgetMs: 18000,
    functionReserveMs: 4000,
    classifyDeterministic: (item) => item.id === "deterministic"
      ? { needsAi: false, value: { ...item, stage: "open_competition" } }
      : { needsAi: true, value: item },
    classifyAi: async () => { throw new Error("AI must not run after budget exhaustion"); },
    failClosed: (item, reason) => ({ ...item, stage: "uncertain", reason }),
    persist: (item) => persisted.push(item),
  });
  assert.equal(stats.ai_attempted, 0);
  assert.equal(stats.ai_budget_exhausted, 2);
  assert.equal(stats.persisted, 3);
  assert.deepEqual(persisted.map((item) => item.stage), ["open_competition", "uncertain", "uncertain"]);
});

test("legacy AI report candidates retain the pre-stage safety ordering", () => {
  const legacy = {
    deadline: "2099-08-30",
    classificationGrandfathered: true,
    aiReviewFit: "strong",
    aiReviewSendToClient: true,
    safetyStatus: "needs_review",
  };
  assert.equal(getReportCandidateKind(legacy), "ai_strong");
  assert.equal(getReportCandidateKind({ ...legacy, classificationGrandfathered: false }), "excluded");
  assert.equal(getReportCandidateKind({
    ...legacy,
    procurementStage: "open_competition",
    actionableForSuppliers: true,
    requiresAdminReview: false,
  }), "excluded");
});

test("source reimports preserve an admin-confirmed stage", () => {
  const incoming = {
    title: "Updated public title",
    raw_payload: { source_value: "new", hidden_from_reports: false },
    procurement_stage: "uncertain",
    actionable_for_suppliers: false,
    classified_by: "openai",
    requires_admin_review: true,
  };
  const existing = {
    raw_payload: { source_value: "old", hidden_from_reports: true, admin_report_status: "hidden" },
    procurement_stage: "work_underway",
    actionable_for_suppliers: false,
    classification_confidence: 1,
    classification_reason: "Admin confirmed work is underway.",
    positive_signals: [],
    negative_signals: ["admin_confirmed_non_actionable_or_uncertain"],
    classified_by: "admin",
    classified_at: "2026-07-28T12:00:00.000Z",
    classifier_version: "procurement-stage-v1",
    requires_admin_review: false,
  };
  const result = preserveAdminClassification(incoming, existing);
  assert.equal(result.title, "Updated public title");
  assert.equal(result.raw_payload.source_value, "new");
  assert.equal(result.raw_payload.hidden_from_reports, true);
  assert.equal(result.procurement_stage, "work_underway");
  assert.equal(result.classified_by, "admin");
  assert.equal(result.requires_admin_review, false);
});
