export function getAiReviewStatusFromReview(review) {
  const fit = String(review?.fit || "");
  const confidence = Number(review?.confidence || 0);
  const sendToClient = review?.send_to_client === true || review?.sendToClient === true;
  if (confidence < 0.65) return "needs_review";
  if (fit === "strong" && sendToClient) return "ready_for_admin";
  if (fit === "possible" && sendToClient) return "possible";
  if (fit === "weak" || fit === "no_fit") return "low_priority";
  return "needs_review";
}

export function mergeAiReviewsIntoAdminMatches(matches, aiReviews) {
  const byCompanyOpportunity = new Map();
  const byMatchId = new Map();
  for (const review of aiReviews || []) {
    const companyId = String(review.company_id || "");
    const opportunityId = String(review.opportunity_id || "");
    const matchId = String(review.match_id || "");
    if (companyId && opportunityId) byCompanyOpportunity.set(`${companyId}:${opportunityId}`, review);
    if (matchId) byMatchId.set(matchId, review);
  }

  return (matches || []).map((match) => {
    const key = `${String(match.company_id || "")}:${String(match.opportunity_id || "")}`;
    const review = byCompanyOpportunity.get(key) || byMatchId.get(String(match.id || ""));
    if (!review) return { ...match, ai_review_found: false };
    return {
      ...match,
      ai_review_status: getAiReviewStatusFromReview(review),
      ai_review_fit: review.fit || match.ai_review_fit,
      ai_review_confidence: review.confidence ?? match.ai_review_confidence,
      ai_reviewed_at: review.updated_at || review.created_at || match.ai_reviewed_at,
      ai_review_send_to_client: review.send_to_client === true,
      ai_review_reason: review.reason || "",
      ai_review_found: true,
      ai_review_saved: true,
    };
  });
}

export function getAdminMatchAiDisplay(match) {
  const skippedReason = normalizeSkippedReason(match?.ai_review_skipped_reason);
  const fit = String(match?.ai_review_fit || "");
  const confidence = Number(match?.ai_review_confidence || 0);
  const hasSavedReview = match?.ai_review_found === true || match?.ai_review_saved === true || Boolean(fit);
  const status = String(match?.ai_review_status || "not_reviewed");

  if (skippedReason === "outside_service_area") {
    return {
      bucket: "outside_service_area",
      label: "Outside service area",
      tone: "warning",
      clientReady: false,
      reason: "Skipped by batch review because the opportunity is outside the company service area.",
    };
  }

  if (hasSavedReview) {
    if (fit === "strong" && match?.ai_review_send_to_client === true) {
      return { bucket: "ai_recommended", label: "AI recommended", tone: "success", clientReady: true, confidence };
    }
    if (fit === "possible") {
      return { bucket: "ai_possible", label: "AI possible", tone: "notice", clientReady: match?.ai_review_send_to_client === true, confidence };
    }
    if (fit === "weak" || fit === "no_fit" || status === "low_priority") {
      return { bucket: "low_priority", label: fit === "no_fit" ? "AI: no fit" : "AI: weak fit", tone: "muted", clientReady: false, confidence };
    }
    return { bucket: "needs_review", label: "Needs review", tone: "warning", clientReady: false, confidence };
  }

  if (skippedReason) {
    return {
      bucket: skippedReason,
      label: formatSkippedReason(skippedReason),
      tone: skippedReason === "already_reviewed" ? "notice" : "warning",
      clientReady: false,
      reason: formatSkippedReason(skippedReason),
    };
  }

  if (status === "needs_review" || String(match?.safety_status || "") === "needs_review") {
    return { bucket: "needs_review", label: "Needs review", tone: "warning", clientReady: false };
  }

  return { bucket: "not_reviewed", label: "Not AI reviewed", tone: "muted", clientReady: false };
}

export function filterAdminMatchesByAiStatus(matches, filter) {
  return (matches || []).filter((match) => {
    const display = getAdminMatchAiDisplay(match);
    if (filter === "ai_recommended") return display.bucket === "ai_recommended";
    if (filter === "ai_possible") return display.bucket === "ai_possible";
    if (filter === "needs_review") return display.bucket === "needs_review";
    if (filter === "outside_service_area") return display.bucket === "outside_service_area";
    if (filter === "not_reviewed") return display.bucket === "not_reviewed";
    return true;
  });
}

export function formatSkippedReason(value) {
  const labels = {
    outside_service_area: "Outside service area",
    already_reviewed: "Already reviewed",
    expired: "Expired",
    missing_deadline: "Missing deadline",
    expired_or_missing_deadline: "Expired or missing deadline",
    score_too_low: "Score too low",
    manually_rejected: "Manually rejected",
  };
  return labels[normalizeSkippedReason(value)] || "Skipped";
}

function normalizeSkippedReason(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_");
}
