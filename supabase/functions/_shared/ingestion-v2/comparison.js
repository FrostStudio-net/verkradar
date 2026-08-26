import { resolveIdentity } from "./identity.js";

// Conservative, review-first comparison. Fuzzy candidates are never equivalent.
export async function compareObservationToLegacy(observation, legacyRows = []) {
  if (!Array.isArray(legacyRows) || legacyRows.length === 0) return { match_type: "none", decision: "pending", comparison_state: "baseline_unavailable", legacy_opportunity_id: null, confidence: null, field_differences: {}, notes: "No representative legacy baseline available." };
  const result = await resolveIdentity(observation, legacyRows);
  if (result.matched) return { match_type: result.match_type, decision: "pending", legacy_opportunity_id: result.opportunity.id, confidence: 1, field_differences: diff(observation, result.opportunity) };
  if (result.review_candidate) return { match_type: "fuzzy_review_candidate", decision: "needs_review", legacy_opportunity_id: result.review_candidate.opportunity.id, confidence: result.review_candidate.similarity, field_differences: {}, notes: "Fuzzy similarity is review evidence only." };
  return { match_type: "v2_only", decision: "pending", legacy_opportunity_id: null, confidence: null, field_differences: {} };
}

export function legacyOnlyComparisons(legacyRows = [], matchedIds = new Set()) {
  return legacyRows.filter((row) => !matchedIds.has(String(row.id))).map((row) => ({ match_type: "legacy_only", decision: "pending", legacy_opportunity_id: row.id, confidence: null, field_differences: {} }));
}

function diff(observation, row) {
  const fields = ["title", "description", "buyer", "deadline", "publication_date", "location", "canonical_url", "procurement_reference"];
  return Object.fromEntries(fields.filter((f) => String(observation[f] || "") !== String(row[f] || "")).map((f) => [f, { v2: observation[f] ?? null, legacy: row[f] ?? null }]));
}
