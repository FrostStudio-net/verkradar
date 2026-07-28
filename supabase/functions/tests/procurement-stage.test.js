import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  buildAiClassifierInput,
  classificationColumns,
  classifyProcurementStage,
  isProcurementOpportunityEligible,
  preserveAdminClassification,
} from "../_shared/procurement-stage.js";
import { getReportCandidateKind } from "../../../src/services/reportAiRanking.js";

const fixtureUrl = new URL("./fixtures/gilsbakkavegur-work-underway.json", import.meta.url);
const gilsbakkavegur = JSON.parse(await readFile(fixtureUrl, "utf8"));

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

test("an expired authoritative competition is not actionable", () => {
  const result = classifyProcurementStage({
    deadline: "2020-01-01",
    authoritative_metadata: { form_type: "competition" },
  });
  const columns = classificationColumns(result, result.classified_by, new Date("2026-07-28T12:00:00Z"));
  assert.equal(columns.procurement_stage, "open_competition");
  assert.equal(columns.actionable_for_suppliers, false);
});

test("AI input is allowlisted, bounded, and removes direct identifiers", () => {
  const input = buildAiClassifierInput({
    source_type: "municipal_website",
    source_organisation: "Sveitarfélagið",
    title: "Útboð ".repeat(100),
    body_text: "Tengiliður: Jón Jónsson\nNetfang: person@example.is\nSími: 555 1234\nKennitala: 010130-2399\n" + "x".repeat(5000),
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
  assert.doesNotMatch(JSON.stringify(input), /Jón Jónsson|person@example|555 1234|010130-2399|Private customer|must-not-pass|secret/);
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
    raw_payload: { opportunity_intent: "confirmed_tender" },
  };
  const now = new Date("2026-07-28T12:00:00Z");
  assert.equal(isProcurementOpportunityEligible(legacy, { now }), false);
  assert.equal(isProcurementOpportunityEligible(legacy, { now, allowLegacyUnclassified: true }), true);
});

test("legacy AI report candidates retain the pre-stage safety ordering", () => {
  const legacy = {
    deadline: "2099-08-30",
    aiReviewFit: "strong",
    aiReviewSendToClient: true,
    safetyStatus: "needs_review",
  };
  assert.equal(getReportCandidateKind(legacy), "ai_strong");
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
