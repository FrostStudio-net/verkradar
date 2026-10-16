import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { buildReportEmail, getCustomerReadyReportMatches } from "../../../src/services/reportDelivery.js";
import { getReportCandidateKind } from "../../../src/services/reportAiRanking.js";

test("all production safety gates require review for specialist capability uncertainty", async () => {
  const files = [
    "supabase/functions/admin-company-actions/index.ts",
    "supabase/functions/import-source-connectors/index.ts",
    "supabase/functions/import-ted/index.ts",
  ];
  for (const file of files) {
    const source = await readFile(new URL(`../../../${file}`, import.meta.url), "utf8");
    assert.match(source, /requiresCustomerCapabilityReview\(match\)/, file);
    assert.match(source, /specialist capability\|project scale\|subcontracting/, file);
    assert.match(source, /adminStatus === "include" && !requiresCustomerCapabilityReview\(match\)/, file);
  }
});

test("scheduled report generators re-score stored matches before customer exposure", async () => {
  const files = [
    "supabase/functions/import-source-connectors/index.ts",
    "supabase/functions/import-ted/index.ts",
  ];
  for (const file of files) {
    const source = await readFile(new URL(`../../../${file}`, import.meta.url), "utf8");
    const reportGenerator = source.slice(source.indexOf("async function generateWeeklyReports"));
    assert.match(reportGenerator, /calculateCompanyOpportunityMatch\(profile, /, file);
    assert.match(reportGenerator, /has_substantive_scope_fit === true/, file);
    assert.match(reportGenerator, /requiresCustomerCapabilityReview\(/, file);
    assert.match(reportGenerator, /reviewed_at|reviewedAt/, file);
  }
});

test("customer report email includes decision context and excludes raw matcher reasons", () => {
  const email = buildReportEmail({
    companyName: "270 Byggingarfélag",
    language: "is",
    matches: [{
      title: "Húsavík - Þvergarður",
      buyer: "Vegagerðin",
      deadline: "27. október 2026",
      location: "Húsavík / Norðurþing / Norðurland eystra",
      description: "Hafnarframkvæmdir með jarðvinnu, stálþilum og brimvarnargarði.",
      matchScore: 58,
      matchReasons: [
        "Mentions your service: jarðvinna",
        "Contains your keyword: arðvinna",
      ],
      risks: ["Specialist capability, project scale, or subcontracting suitability is unverified"],
      url: "https://example.test/original-tender",
    }],
  });

  assert.match(email, /hjá 270 Byggingarfélag/);
  assert.match(email, /Staðsetning: Húsavík/);
  assert.match(email, /Umfang:\nHafnarframkvæmdir/);
  assert.match(email, /sérhæfða getu, umfang verks og hvort undirverktakaþátttaka eigi við/);
  assert.match(email, /Opna upprunalegt útboð:\nhttps:\/\/example\.test\/original-tender/);
  assert.doesNotMatch(email, /arðvinna|Mentions your service|Contains your keyword/);
});

test("only explicitly customer-safe or approved AI reasons appear in customer email", () => {
  const email = buildReportEmail({
    companyName: "Fagurverk",
    language: "en",
    matches: [{
      title: "Earthworks",
      description: "Excavation and drainage work.",
      location: "Reykjavík",
      matchReasons: ["Contains your keyword: unreliable-fragment"],
      customerSafeReasons: ["Confirmed drainage scope"],
      url: "https://example.test/tender",
    }],
  });
  assert.match(email, /Confirmed drainage scope/);
  assert.doesNotMatch(email, /unreliable-fragment/);
});

test("copied reports revalidate scope and require explicit review for specialist work", () => {
  const profile = {
    industry: "Construction",
    services: ["jarðvinna", "fyllingar", "grjóthleðsla"],
    includeKeywords: ["jarðvinna", "fyllingar", "grjóthleðsla"],
    excludeKeywords: [],
    serviceAreas: ["Höfuðborgarsvæðið"],
    locations: [],
    allowUnknownValue: true,
  };
  const marine = {
    id: "marine",
    title: "Stækkun hafnar",
    buyer: "Hafnarsjóður",
    description: "Hafnarframkvæmdir, stálþil, jarðvinna, fyllingar og grjóthleðsla.",
    category: "Public procurement",
    location: "Höfuðborgarsvæðið",
    countryCode: "IS",
    deadline: "2099-12-31",
  };
  const current = {
    opportunity_id: "marine",
    safety_status: "auto_approved",
    review_required: false,
    alert_eligible: true,
  };
  assert.deepEqual(getCustomerReadyReportMatches({ profile, matches: [marine], currentMatches: [current] }), []);
  assert.equal(getCustomerReadyReportMatches({
    profile,
    matches: [marine],
    currentMatches: [{ ...current, reviewed_at: "2026-10-16T12:00:00Z" }],
  }).length, 1);
});

test("copied reports reject source-name-only service evidence", () => {
  const profile = {
    industry: "Construction",
    services: ["vegagerð"],
    includeKeywords: ["vegagerð"],
    excludeKeywords: [],
    serviceAreas: ["Höfuðborgarsvæðið"],
    locations: [],
    allowUnknownValue: true,
  };
  const lighting = {
    id: "lighting",
    title: "Viðhald veglýsingar",
    buyer: "Vegagerðin",
    source: "Vegagerðin",
    description: "Vegagerðin óskar eftir viðhaldi lampa og ljósastaura.",
    category: "Public procurement",
    location: "Höfuðborgarsvæðið",
    countryCode: "IS",
    deadline: "2099-12-31",
  };
  const current = [{ opportunity_id: "lighting", safety_status: "auto_approved", review_required: false, alert_eligible: true }];
  assert.deepEqual(getCustomerReadyReportMatches({ profile, matches: [lighting], currentMatches: current }), []);
});

test("AI approval cannot bypass needs-review safety on legacy opportunities", () => {
  assert.equal(getReportCandidateKind({
    id: "legacy-specialist",
    title: "Hafnarframkvæmdir",
    deadline: "2099-12-31",
    safetyStatus: "needs_review",
    aiReviewFit: "strong",
    aiReviewSendToClient: true,
    matchScore: 95,
  }), "excluded");
});
