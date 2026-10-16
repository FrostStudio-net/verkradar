import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { calculateCompanyOpportunityMatch, COMPANY_MATCH_THRESHOLD, requiresCustomerCapabilityReview } from "../_shared/company-matcher.js";

const REFERENCE_TIME = "2026-09-01T12:00:00Z";

const gardathjonusta = {
  industry: "Garden maintenance",
  services: ["vetrarþjónusta"],
  includeKeywords: ["vetrarþjónusta"],
  excludeKeywords: [],
  locations: ["Capital Area", "Reykjavík", "Suðurnes"],
  baseLocation: "",
  serviceAreas: [],
  willingToTravel: false,
  nationalProjects: false,
  remoteProjects: false,
  minimumProjectValueForTravel: null,
  minProjectValue: null,
  maxProjectValue: null,
  allowUnknownValue: true,
};

function winterTender(id, title) {
  return {
    id,
    title,
    buyer: "Garðabær",
    description: "Útboðstilkynning um vetrarþjónustu í Garðabæ.",
    category: "Þjónusta",
    location: "Reykjavík / Höfuðborgarsvæðið",
    deadline: "2026-09-15",
    estimatedValue: null,
    countryCode: "IS",
    keywords: ["vetrarþjónusta", "Garðabær"],
  };
}

const expectedReasons = [
  "Mentions your service: vetrarþjónusta",
  "Local match",
  "Local winter service fit",
  "Deadline is coming up soon",
];

test("both Garðabær winter tenders remain matches without duplicate evidence", () => {
  const tenders = [
    winterTender("e06bf06b-8af8-4ff7-b00a-2cd5ff8a1ea4", "Vetrarþjónusta gatna í Garðabæ 2026-2029 (EES)"),
    winterTender("8e6909b8-7daa-4d0b-946f-9276cbfb8613", "Vetrarþjónusta stofnanalóða og húsagatna í Garðabæ 2026-2029 (EES)"),
  ];
  for (const opportunity of tenders) {
    const result = calculateCompanyOpportunityMatch(gardathjonusta, opportunity, { referenceTime: REFERENCE_TIME });
    assert.equal(result.matchScore, 62);
    assert.equal(result.match_score, 62);
    assert.deepEqual(result.matchReasons, expectedReasons);
    assert.deepEqual(result.match_reasons, expectedReasons);
    assert.match(result.risks.join(" "), /Winter\/snow service fit/);
  }
});

test("camelCase admin and snake_case scheduled inputs have identical results", () => {
  const camel = winterTender("one", "Vetrarþjónusta gatna í Garðabæ 2026-2029 (EES)");
  const snake = {
    ...camel,
    estimatedValue: undefined,
    countryCode: undefined,
    rawPayload: undefined,
    estimated_value: null,
    country_code: "IS",
    raw_payload: {},
  };
  const admin = calculateCompanyOpportunityMatch(gardathjonusta, camel, { referenceTime: REFERENCE_TIME });
  const scheduled = calculateCompanyOpportunityMatch(gardathjonusta, snake, { referenceTime: REFERENCE_TIME });
  assert.equal(admin.matchScore, scheduled.match_score);
  assert.deepEqual(admin.matchReasons, scheduled.match_reasons);
  assert.deepEqual(admin.risks, scheduled.risks);
});

test("winter bonus and cap apply only to an explicitly eligible winter fit", () => {
  const winter = calculateCompanyOpportunityMatch({
    ...gardathjonusta,
    services: ["vetrarþjónusta", "snjómokstur", "hálkuvarnir"],
    includeKeywords: ["vetrarþjónusta", "snjómokstur", "hálkuvarnir"],
  }, {
    ...winterTender("winter", "Vetrarþjónusta, snjómokstur og hálkuvarnir"),
    description: "Vetrarþjónusta, snjómokstur og hálkuvarnir.",
  }, { referenceTime: REFERENCE_TIME });
  assert.equal(winter.matchScore, 68);

  const nonWinter = calculateCompanyOpportunityMatch(gardathjonusta, {
    ...winterTender("summer", "Grassláttur á stofnanalóðum"),
    description: "Grassláttur og sumarviðhald.",
    keywords: ["grassláttur"],
  }, { referenceTime: REFERENCE_TIME });
  assert.doesNotMatch(nonWinter.matchReasons.join(" "), /Local winter service fit/);
  assert.doesNotMatch(nonWinter.risks.join(" "), /Winter\/snow service fit/);
});

test("unknown-value benefit requires the existing allowUnknownValue setting", () => {
  const allowed = calculateCompanyOpportunityMatch(gardathjonusta, winterTender("allowed", "Vetrarþjónusta gatna"), { referenceTime: REFERENCE_TIME });
  const blocked = calculateCompanyOpportunityMatch({ ...gardathjonusta, allowUnknownValue: false }, winterTender("blocked", "Vetrarþjónusta gatna"), { referenceTime: REFERENCE_TIME });
  assert.equal(allowed.matchScore, 62);
  assert.ok(blocked.matchScore < COMPANY_MATCH_THRESHOLD);
  assert.ok(allowed.matchScore > blocked.matchScore);
  assert.match(blocked.risks.join(" "), /outside your preferred range/i);
});

const earthworksProfile = {
  industry: "Construction",
  services: ["jarðvinna", "fyllingar", "vegagerð"],
  includeKeywords: ["jarðvinna", "fyllingar", "arðvinna", "vegagerð"],
  excludeKeywords: [],
  locations: [],
  baseLocation: "",
  serviceAreas: ["Höfuðborgarsvæðið"],
  willingToTravel: true,
  nationalProjects: false,
  remoteProjects: false,
  minimumProjectValueForTravel: null,
  minProjectValue: null,
  maxProjectValue: null,
  allowUnknownValue: true,
};

function currentVegagerdinTender(overrides = {}) {
  return {
    id: "vegagerdin-case",
    buyer: "Vegagerðin",
    source: "Vegagerðin",
    sources: { name: "Vegagerðin" },
    category: "Public procurement",
    countryCode: "IS",
    deadline: "2026-10-27",
    location: "Höfuðborgarsvæðið",
    keywords: [],
    ...overrides,
  };
}

test("buyer and source names cannot create a road-work match", () => {
  const result = calculateCompanyOpportunityMatch(earthworksProfile, currentVegagerdinTender({
    title: "Þjónusta og viðhald veglýsingar á höfuðborgarsvæðinu",
    description: "Vegagerðin óskar eftir viðhaldi lampa og ljósastaura.",
    keywords: ["Vegagerðin", "veglýsing"],
  }), { referenceTime: "2026-10-16T12:00:00Z" });
  assert.ok(result.matchScore < COMPANY_MATCH_THRESHOLD);
  assert.equal(result.has_substantive_scope_fit, false);
  assert.doesNotMatch(result.matchReasons.join(" "), /vegagerð/i);
  assert.match(result.risks.join(" "), /insufficient relevant work-scope evidence/i);
});

test("a truncated keyword is invalid and overlapping service evidence scores once", () => {
  const result = calculateCompanyOpportunityMatch(earthworksProfile, currentVegagerdinTender({
    title: "Jarðvinna við nýja götu",
    description: "Jarðvinna og uppgröftur vegna framkvæmdarinnar.",
  }), { referenceTime: "2026-10-16T12:00:00Z" });
  assert.match(result.matchReasons.join(" "), /Mentions your service: jarðvinna/i);
  assert.doesNotMatch(result.matchReasons.join(" "), /Contains your keyword: (?:jarðvinna|arðvinna)/i);
  assert.equal(result.matchReasons.filter((reason) => /jarðvinna/i.test(reason)).length, 1);
});

test("Icelandic compound boundaries preserve legitimate compound matches", () => {
  const result = calculateCompanyOpportunityMatch({
    ...earthworksProfile,
    services: ["lagnir"],
    includeKeywords: [],
  }, currentVegagerdinTender({
    title: "Endurnýjun fráveitulagna",
    description: "Verkið felur í sér fráveitulagnir og tengingar.",
  }), { referenceTime: "2026-10-16T12:00:00Z" });
  assert.match(result.matchReasons.join(" "), /Mentions your service: lagnir/i);
  assert.ok(result.matchScore >= COMPANY_MATCH_THRESHOLD);
});

test("marine infrastructure requires capability review for an ordinary earthworks profile", () => {
  const result = calculateCompanyOpportunityMatch(earthworksProfile, currentVegagerdinTender({
    title: "Húsavík - Þvergarður – Endurbygging og lenging 2026",
    description: "Hafnarframkvæmdir með jarðvinnu, fyllingum, stálþilum, viðlegukanti og brimvarnargarði.",
    location: "Húsavík / Norðurþing / Norðurland eystra",
    keywords: ["jarðvinna", "fyllingar"],
  }), { referenceTime: "2026-10-16T12:00:00Z" });
  assert.equal(result.requires_capability_review, true);
  assert.equal(requiresCustomerCapabilityReview(result), true);
  assert.match(result.risks.join(" "), /specialist capability.*project scale.*subcontracting/i);
});

test("legitimate road construction and earthworks remain eligible matches", () => {
  for (const opportunity of [
    currentVegagerdinTender({ title: "Gatnagerð og vegagerð", description: "Ný vegagerð, fyllingar og undirbygging." }),
    currentVegagerdinTender({ title: "Jarðvinna fyrir fráveitu", description: "Jarðvinna, gröftur og fyllingar vegna lagna." }),
  ]) {
    const result = calculateCompanyOpportunityMatch(earthworksProfile, opportunity, { referenceTime: "2026-10-16T12:00:00Z" });
    assert.ok(result.matchScore >= COMPANY_MATCH_THRESHOLD, `${opportunity.title}: ${result.matchScore}`);
    assert.equal(result.has_substantive_scope_fit, true);
  }
});

test("unrelated profiles do not gain the winter bonus or reach threshold", () => {
  const unrelated = calculateCompanyOpportunityMatch({
    ...gardathjonusta,
    industry: "Software",
    services: ["hugbúnaður"],
    includeKeywords: ["tölvukerfi"],
  }, winterTender("unrelated", "Vetrarþjónusta gatna"), { referenceTime: REFERENCE_TIME });
  assert.equal(COMPANY_MATCH_THRESHOLD, 50);
  assert.ok(unrelated.matchScore < COMPANY_MATCH_THRESHOLD);
  assert.doesNotMatch(unrelated.matchReasons.join(" "), /winter service fit/i);
});

test("all production match writers delegate to the canonical scorer", async () => {
  const files = [
    "supabase/functions/import-source-connectors/index.ts",
    "supabase/functions/admin-company-actions/index.ts",
    "app.js",
  ];
  for (const file of files) {
    const source = await readFile(new URL(`../../../${file}`, import.meta.url), "utf8");
    assert.match(source, /calculateCompanyOpportunityMatch\(profile, (?:opportunity|opp)\)/, file);
  }
});

test("database uniqueness still prevents duplicate company/opportunity match rows", async () => {
  const migration = await readFile(new URL("../../../supabase/migrations/20260529140000_opportunity_matches.sql", import.meta.url), "utf8");
  assert.match(migration, /create unique index if not exists opportunity_matches_company_opportunity_idx[\s\S]*company_id, opportunity_id/i);
});
