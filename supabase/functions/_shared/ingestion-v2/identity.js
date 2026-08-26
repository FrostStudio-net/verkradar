import { buildIdentityFingerprint, normalizeCanonicalUrl, normalizeIdentityText } from "./contracts.js";

export const IDENTITY_MATCH_TYPES = Object.freeze([
  "same_source_external_id",
  "procurement_reference",
  "canonical_url",
  "fingerprint",
]);

export async function resolveIdentity(observation, opportunities, options = {}) {
  const candidates = Array.isArray(opportunities) ? opportunities : [];
  const sameSource = candidates.find((row) =>
    String(row.source_id || "") === String(observation.source_id || "") &&
    String(row.external_id || "") === String(observation.external_id || ""));
  if (sameSource) return exactResult(sameSource, "same_source_external_id");

  const reference = normalizeIdentityText(observation.procurement_reference);
  if (reference) {
    const byReference = candidates.find((row) => normalizeIdentityText(getReference(row)) === reference);
    if (byReference) return exactResult(byReference, "procurement_reference");
  }

  const url = normalizeCanonicalUrl(observation.canonical_url || observation.discovered_url);
  if (url) {
    const byUrl = candidates.find((row) => normalizeCanonicalUrl(row.canonical_url || row.url) === url);
    if (byUrl) return exactResult(byUrl, "canonical_url");
  }

  const fingerprint = observation.identity_fingerprint || await buildIdentityFingerprint(observation);
  for (const candidate of candidates) {
    const candidateFingerprint = candidate.identity_fingerprint || await buildIdentityFingerprint({
      ...candidate,
      procurement_reference: getReference(candidate),
    });
    if (candidateFingerprint === fingerprint) return exactResult(candidate, "fingerprint");
  }

  const reviewCandidate = findFuzzyReviewCandidate(observation, candidates, options.fuzzyThreshold ?? 0.84);
  return {
    matched: false,
    opportunity: null,
    match_type: null,
    auto_merge: false,
    review_candidate: reviewCandidate,
  };
}

export function findFuzzyReviewCandidate(observation, candidates, threshold = 0.84) {
  let best = null;
  for (const candidate of candidates) {
    const similarity = tokenSimilarity(observation.title, candidate.title);
    if (similarity < threshold || (best && similarity <= best.similarity)) continue;
    best = {
      opportunity: candidate,
      match_type: "fuzzy_review_candidate",
      similarity,
      auto_merge: false,
    };
  }
  return best;
}

export function tokenSimilarity(left, right) {
  const a = new Set(normalizeIdentityText(left).split(/\s+/).filter((token) => token.length > 2));
  const b = new Set(normalizeIdentityText(right).split(/\s+/).filter((token) => token.length > 2));
  if (!a.size || !b.size) return 0;
  const shared = [...a].filter((token) => b.has(token)).length;
  return shared / new Set([...a, ...b]).size;
}

function exactResult(opportunity, matchType) {
  return { matched: true, opportunity, match_type: matchType, auto_merge: true, review_candidate: null };
}

function getReference(opportunity) {
  return opportunity.procurement_reference || opportunity.reference_number || opportunity.notice_number ||
    opportunity.raw_payload?.procurement_reference || opportunity.raw_payload?.reference_number || opportunity.raw_payload?.notice_number || "";
}
