export const TED_COVERAGE_HEALTH_STATES = Object.freeze([
  "healthy",
  "stale",
  "blocked",
  "permission_required",
  "fixture_only",
  "shadow_only",
]);

const TED_COUNTRY_FILTERS = Object.freeze({
  iceland: "buyer-country = ISL",
  nordic: "buyer-country IN (ISL NOR DNK SWE FIN)",
});

export const TED_RESULT_FIELDS = Object.freeze([
  "publication-number",
  "form-type",
  "notice-type",
  "notice-subtype",
  "notice-title",
  "buyer-name",
  "publication-date",
  "deadline-receipt-request",
  "description-proc",
  "description-lot",
  "internal-identifier-proc",
  "place-of-performance",
  "place-of-performance-country-proc",
  "place-of-performance-country-lot",
  "buyer-country",
  "buyer-country-sub",
  "main-classification-proc",
  "main-classification-lot",
  "estimated-value-proc",
  "estimated-value-lot",
  "framework-agreement-lot",
  "dps-usage-lot",
]);

export function buildTedCurrentQuery(importMode, publicationCutoffYyyymmdd, deadlineCutoffYyyymmdd) {
  const publicationDate = String(publicationCutoffYyyymmdd || "").trim();
  const deadlineDate = String(deadlineCutoffYyyymmdd || "").trim();
  if (!/^\d{8}$/.test(publicationDate) || !/^\d{8}$/.test(deadlineDate)) {
    throw new Error("TED cutoffs must be YYYYMMDD");
  }
  const countryFilter = TED_COUNTRY_FILTERS[String(importMode || "").toLowerCase()];
  const currentWindow = `publication-date >= ${publicationDate} AND deadline-receipt-request >= ${deadlineDate}`;
  return countryFilter
    ? `${currentWindow} AND ${countryFilter}`
    : currentWindow;
}

export function classifyCoverageHealth(input = {}) {
  if (input.blocked === true) return "blocked";
  if (input.permissionRequired === true) return "permission_required";
  if (input.fixtureOnly === true) return "fixture_only";
  if (input.shadowOnly === true) return "shadow_only";
  if (input.requestSucceeded !== true) return "stale";
  if (Number(input.currentRecords || 0) <= 0) return "stale";

  const latest = Date.parse(String(input.latestPublicationAt || ""));
  const now = Date.parse(String(input.now || new Date().toISOString()));
  const staleAfterDays = Math.max(1, Number(input.staleAfterDays || 45));
  if (!Number.isFinite(latest) || !Number.isFinite(now)) return "stale";
  return now - latest > staleAfterDays * 86400000 ? "stale" : "healthy";
}

export function latestTedPublicationDate(notices = []) {
  const dates = notices
    .flatMap((notice) => tedStrings(notice?.["publication-date"] ?? notice?.publicationDate))
    .map((value) => Date.parse(value))
    .filter(Number.isFinite);
  return dates.length ? new Date(Math.max(...dates)).toISOString() : null;
}

export function extractTedNoticeFields(notice = {}) {
  return {
    externalId: firstTedString(notice, ["publication-number", "publicationNumber", "notice-id", "id"]),
    internalReference: firstTedString(notice, ["internal-identifier-proc", "internal-identifier-lot"]),
    title: firstTedString(notice, ["notice-title", "noticeTitle", "title"]),
    buyer: firstTedString(notice, ["buyer-name", "buyerName", "organisation-name"]),
    deadline: firstTedDate(notice, ["deadline-receipt-request", "deadline-receipt-tender", "deadline"]),
    publishedDate: firstTedDate(notice, ["publication-date", "publicationDate", "dispatch-date"]),
    description: joinTedStrings(notice, ["description-proc", "description-lot", "description", "notice-summary"]),
    location: joinTedStrings(notice, ["place-of-performance", "place-of-performance-city-proc", "place-of-performance-city-lot", "buyer-city"]),
    dynamicPurchasingSystem: tedStrings(notice["dps-usage-lot"]).some((value) => !/^(none|false|no)$/i.test(value)),
  };
}

function firstTedString(record, keys) {
  for (const key of keys) {
    const values = tedStrings(record?.[key]);
    if (values[0]) return values[0];
  }
  return null;
}

function firstTedDate(record, keys) {
  const value = firstTedString(record, keys);
  if (!value) return null;
  const compact = value.match(/^(\d{4})(\d{2})(\d{2})$/);
  if (compact) return `${compact[1]}-${compact[2]}-${compact[3]}`;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString().slice(0, 10);
}

function joinTedStrings(record, keys) {
  const values = keys.flatMap((key) => tedStrings(record?.[key]));
  return [...new Set(values)].join("\n\n") || null;
}

function tedStrings(value) {
  if (value == null) return [];
  if (Array.isArray(value)) return value.flatMap(tedStrings);
  if (typeof value === "object") {
    return tedStrings(value.value || value.text || value.eng || value.en || Object.values(value)[0]);
  }
  return [String(value).trim()].filter(Boolean);
}
