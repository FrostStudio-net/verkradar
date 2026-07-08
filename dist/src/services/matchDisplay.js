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

export function mergeAiReviewsIntoAdminMatches(matches, aiReviews, company = null) {
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
      ai_review_profile_hash: review.reviewed_profile_hash || "",
      ai_review_profile_stale: isAiReviewProfileStale(review, company),
      ai_review_found: true,
      ai_review_saved: true,
    };
  });
}

export function getAdminMatchAiDisplay(match, company = null) {
  const locationAssessment = assessAdminMatchLocation(company, match);
  if (locationAssessment.outsideServiceArea) {
    return {
      bucket: "outside_service_area",
      label: "Outside service area",
      tone: "warning",
      clientReady: false,
      reason: locationAssessment.reason || "Outside current service area.",
    };
  }

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
    if (match?.ai_review_profile_stale === true) {
      return { bucket: "needs_review", label: "AI review may be stale", tone: "warning", clientReady: false, confidence };
    }
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

export function filterAdminMatchesByAiStatus(matches, filter, company = null) {
  return (matches || []).filter((match) => {
    const display = getAdminMatchAiDisplay(match, company);
    if (filter === "ai_recommended") return display.bucket === "ai_recommended";
    if (filter === "ai_possible") return display.bucket === "ai_possible";
    if (filter === "needs_review") return display.bucket === "needs_review";
    if (filter === "outside_service_area") return display.bucket === "outside_service_area";
    if (filter === "not_reviewed") return display.bucket === "not_reviewed";
    return true;
  });
}

export function createAdminCompanyProfileHash(company) {
  const payload = JSON.stringify({
    services: uniqueSorted([
      ...(company?.services || []),
      ...(company?.includeKeywords || []),
      ...(company?.excludeKeywords || []).map((value) => `exclude:${value}`),
    ]),
    locations: uniqueSorted([
      company?.baseLocation,
      ...(company?.locations || []),
      ...(company?.serviceAreas || []),
      company?.willingToTravel ? "willing_to_travel:true" : "willing_to_travel:false",
      company?.nationalProjects ? "national_projects:true" : "national_projects:false",
    ]),
  });
  let hash = 5381;
  for (let index = 0; index < payload.length; index += 1) {
    hash = ((hash << 5) + hash) + payload.charCodeAt(index);
    hash |= 0;
  }
  return `profile_${Math.abs(hash)}`;
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

function isAiReviewProfileStale(review, company) {
  if (!review || !company) return false;
  const reviewedHash = String(review.reviewed_profile_hash || "");
  return Boolean(reviewedHash && reviewedHash !== createAdminCompanyProfileHash(company));
}

function assessAdminMatchLocation(company, match) {
  if (!company || company.nationalProjects === true || company.willingToTravel === true) {
    return { outsideServiceArea: false, reason: "" };
  }
  const serviceText = normalizeText([
    company.baseLocation,
    ...(company.serviceAreas || []),
    ...(company.locations || []),
  ].join(" "));
  if (!serviceText || /all iceland|allt land|national|landsdekkandi/.test(serviceText)) {
    return { outsideServiceArea: false, reason: "" };
  }
  const opportunity = match?.opportunities || {};
  const payload = opportunity.raw_payload && typeof opportunity.raw_payload === "object" ? opportunity.raw_payload : {};
  const opportunityText = normalizeText([
    opportunity.title,
    opportunity.location,
    payload.region,
    payload.extracted_location,
  ].join(" "));
  if (!opportunityText) return { outsideServiceArea: false, reason: "Opportunity location unclear" };
  const outsideNorth = /(dalvik|akureyri|boggvisbraut|birkiholar|north iceland|nordurland)/.test(opportunityText) &&
    !/(dalvik|akureyri|north iceland|nordurland)/.test(serviceText);
  if (outsideNorth) return { outsideServiceArea: true, reason: "Outside current service area" };
  const outsideSnaefellsnes = /(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(opportunityText) &&
    !/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(serviceText);
  if (outsideSnaefellsnes) return { outsideServiceArea: true, reason: "Outside current service area" };
  const serviceRegions = getKnownLocationTokens(serviceText);
  const opportunityRegions = getKnownLocationTokens(opportunityText);
  if (!serviceRegions.length || !opportunityRegions.length) return { outsideServiceArea: false, reason: "" };
  return {
    outsideServiceArea: !opportunityRegions.some((token) => serviceRegions.includes(token)),
    reason: "Outside current service area",
  };
}

function getKnownLocationTokens(text) {
  const checks = [
    ["capital_area", /reykjavik|capital area|hofudborg|gardabaer|kopavogur|seltjarnarnes|mosfellsbaer/],
    ["south", /selfoss|arborg|sudurland|hveragerdi|olfus|rangarthing/],
    ["west_corridor", /akranes|borgarnes|borgarbyggd|hvalfjordur/],
    ["north", /dalvik|akureyri|nordurland|birkiholar|boggvisbraut/],
    ["snaefellsnes", /olafsvik|snaefellsnes|stykkisholmur|grundarfjordur/],
  ];
  return checks.filter(([, pattern]) => pattern.test(text)).map(([token]) => token);
}

function uniqueSorted(values) {
  return Array.from(new Set((values || []).map((value) => normalizeText(value)).filter(Boolean))).sort();
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/þ/g, "th")
    .replace(/ð/g, "d")
    .replace(/æ/g, "ae")
    .replace(/ö/g, "o")
    .replace(/[^a-z0-9\s/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
