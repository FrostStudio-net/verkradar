function normalizeFit(value) {
  return String(value || "").toLowerCase();
}

function toArray(value) {
  return Array.isArray(value) ? value.map((item) => String(item || "").trim()).filter(Boolean) : [];
}

function uniqueStrings(values) {
  return Array.from(new Set((values || []).map((value) => String(value || "").trim()).filter(Boolean)));
}

function getDeadlineTime(value) {
  if (!value) return Number.NaN;
  const date = new Date(value);
  return date.getTime();
}

function isExpiredDeadline(value) {
  const time = getDeadlineTime(value);
  if (Number.isNaN(time)) return true;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return time < today.getTime();
}

export function mapAiReviewForReport(review = {}) {
  return {
    aiReviewFit: normalizeFit(review.fit),
    aiReviewConfidence: Number(review.confidence || 0),
    aiReviewSendToClient: review.send_to_client === true || review.sendToClient === true,
    aiReviewReason: String(review.reason || ""),
    aiFitReasons: toArray(review.fit_reasons || review.fitReasons),
    aiRisksOrQuestions: toArray(review.risks_or_questions || review.risksOrQuestions),
    aiSuggestedClientSummary: String(review.suggested_client_summary || review.suggestedClientSummary || ""),
    aiReviewedAt: review.updated_at || review.created_at || "",
  };
}

export function mergeAiReviewsIntoReportMatches(matches, aiReviews) {
  const reviewsByOpportunity = new Map();
  for (const review of aiReviews || []) {
    const opportunityId = String(review.opportunity_id || review.opportunityId || "");
    if (opportunityId) reviewsByOpportunity.set(opportunityId, mapAiReviewForReport(review));
  }

  return (matches || []).map((match) => {
    const review = reviewsByOpportunity.get(String(match.id || match.opportunity_id || ""));
    if (!review) return match;
    return {
      ...match,
      ...review,
      matchReasons: uniqueStrings([
        review.aiSuggestedClientSummary,
        ...review.aiFitReasons,
        ...(Array.isArray(match.matchReasons) ? match.matchReasons : []),
      ]),
      risks: uniqueStrings([
        ...review.aiRisksOrQuestions,
        ...(Array.isArray(match.risks) ? match.risks : []),
      ]),
    };
  });
}

export function isAiReportMatchEligible(match) {
  return getReportCandidateKind(match) !== "excluded";
}

export function getReportCandidateKind(match) {
  const fit = normalizeFit(match?.aiReviewFit || match?.ai_review_fit);
  if (!match?.deadline || isExpiredDeadline(match.deadline)) return "excluded";
  const sendToClient = match?.aiReviewSendToClient === true || match?.ai_review_send_to_client === true;
  const skippedReason = String(match?.aiReviewSkippedReason || match?.ai_review_skipped_reason || "").toLowerCase();
  if (skippedReason === "outside_service_area") return "excluded";
  const riskText = [
    match?.aiReviewReason,
    ...(toArray(match?.aiRisksOrQuestions || match?.risks_or_questions)),
  ].join(" ").toLowerCase();
  if (riskText.includes("outside service area")) return "excluded";

  if (fit) {
    if (["weak", "no_fit"].includes(fit)) return "excluded";
    if (fit === "strong" && sendToClient) return "ai_strong";
    if (fit === "possible" && sendToClient) return "ai_possible";
    return "excluded";
  }

  const safety = String(match?.safetyStatus || match?.safety_status || "auto_approved").toLowerCase();
  if (safety === "hidden" || safety === "needs_review") return "excluded";
  const score = Number(match?.matchScore || match?.match_score || 0);
  const label = String(match?.matchLabel || match?.match_label || "").toLowerCase();
  if (score >= 75 || label.includes("strong") || label.includes("good")) return "rule_fallback";
  return "excluded";
}

export function getAiReportPlacement(match) {
  const kind = getReportCandidateKind(match);
  if (hasFutureDeadline(match)) {
    if (kind === "ai_strong" || kind === "ai_possible" || kind === "rule_fallback") return "confirmed";
  }
  if (kind === "ai_possible" || kind === "rule_fallback") return "early";
  return "excluded";
}

export function hasFutureDeadline(match) {
  return Boolean(match?.deadline) && !isExpiredDeadline(match.deadline);
}

export function sortAiReportMatches(matches) {
  return [...(matches || [])]
    .filter(isAiReportMatchEligible)
    .sort((a, b) => {
      const kindRank = { ai_strong: 0, ai_possible: 1, rule_fallback: 2 };
      const aKind = getReportCandidateKind(a);
      const bKind = getReportCandidateKind(b);
      const rankDiff = (kindRank[aKind] ?? 9) - (kindRank[bKind] ?? 9);
      if (rankDiff) return rankDiff;
      const confidenceDiff = Number(b.aiReviewConfidence || b.ai_review_confidence || 0) - Number(a.aiReviewConfidence || a.ai_review_confidence || 0);
      if (confidenceDiff) return confidenceDiff;
      const scoreDiff = Number(b.matchScore || b.match_score || 0) - Number(a.matchScore || a.match_score || 0);
      if (scoreDiff) return scoreDiff;
      return getDeadlineTime(a.deadline) - getDeadlineTime(b.deadline);
    });
}
