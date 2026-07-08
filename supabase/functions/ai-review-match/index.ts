import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type AiFit = "strong" | "possible" | "weak" | "no_fit";

const DAILY_AI_REVIEW_LIMIT = 50;
const DAILY_COMPANY_BATCH_LIMIT = 3;
const DAILY_COMPANY_AUTO_REVIEW_LIMIT = 10;
const HOURLY_COMPANY_RERUN_LIMIT = 1;
const MAX_BATCH_MATCHES = 10;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const supabaseUrl = requiredEnv("SUPABASE_URL");
    const anonKey = requiredEnv("SUPABASE_ANON_KEY");
    const serviceRoleKey = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
    const openAiKey = requiredEnv("OPENAI_API_KEY");
    const model = Deno.env.get("OPENAI_MODEL") || "gpt-4.1-mini";

    const authHeader = req.headers.get("authorization") || "";
    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false },
    });
    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

    const { data: userData, error: userError } = await userClient.auth.getUser();
    if (userError || !userData.user) return json({ error: "Unauthorized" }, 401);

    const { data: adminRow, error: adminError } = await adminClient
      .from("admin_users")
      .select("user_id")
      .eq("user_id", userData.user.id)
      .maybeSingle();
    if (adminError) throw adminError;
    if (!adminRow) return json({ error: "Admin access required" }, 403);

    const body = await safeJson(req);
    const companyId = String(body.companyId || body.company_id || "").trim();
    const auto = body.auto === true || body.mode === "auto";
    const batch = body.batch === true || body.mode === "batch";
    const limit = Math.max(1, Math.min(MAX_BATCH_MATCHES, Number(body.limit || MAX_BATCH_MATCHES)));
    const force = body.force === true || body.revalidate === true;
    if (auto) {
      const result = await runAutomaticAiReview(adminClient, openAiKey, model, userData.user.id, limit);
      return json({ ok: true, ...result });
    }
    if (batch) {
      if (!isUuid(companyId)) return json({ error: "A valid companyId is required for batch review." }, 400);
      await assertAiUsageAllowed(adminClient, {
        userId: userData.user.id,
        companyId,
        action: force ? "rerun" : "batch_review",
        requestedReviews: limit,
        force,
        isBatch: true,
      });
      const result = await runBatchReview(adminClient, openAiKey, model, companyId, limit, force, userData.user.id);
      return json({ ok: true, ...result });
    }

    const matchId = String(body.matchId || body.match_id || "").trim();
    if (!isUuid(matchId)) return json({ error: "A valid matchId is required." }, 400);

    const context = await loadReviewContext(adminClient, matchId);
    if (!force) {
      const { data: existing, error: existingError } = await adminClient
        .from("ai_match_reviews")
        .select("*")
        .eq("company_id", context.company.id)
        .eq("opportunity_id", context.opportunity.id)
        .maybeSingle();
      if (existingError) throw existingError;
      if (existing) return json({ ok: true, cached: true, review: existing });
    }

    validateContextBeforeAi(context, { force, allowOutsideServiceArea: body.allowOutsideServiceArea === true });
    await assertAiUsageAllowed(adminClient, {
      userId: userData.user.id,
      companyId: String(context.company.id || ""),
      action: force ? "rerun" : "single_review",
      requestedReviews: 1,
      force,
      isBatch: false,
    });
    const saved = await createAndSaveReview(adminClient, openAiKey, model, context, userData.user.id, force ? "rerun" : "single_review");
    return json({ ok: true, cached: false, review: saved });
  } catch (error) {
    console.error("AI match review failed:", error);
    return json({ error: errorMessage(error) }, 500);
  }
});

async function loadReviewContext(supabase: ReturnType<typeof createClient>, matchId: string) {
  const { data: match, error: matchError } = await supabase
    .from("opportunity_matches")
    .select(`
      id,
      company_id,
      opportunity_id,
      match_score,
      match_label,
      match_reasons,
      risks,
      safety_status,
      safety_reasons,
      alert_eligible,
      review_required,
      companies (*),
      opportunities (
        *,
        sources (
          name,
          source_type
        )
      )
    `)
    .eq("id", matchId)
    .single();
  if (matchError) throw matchError;
  if (!match?.companies || !match?.opportunities) throw new Error("Match context is incomplete.");

  const [servicesResult, keywordsResult, locationsResult] = await Promise.all([
    supabase.from("company_services").select("service").eq("company_id", match.company_id),
    supabase.from("company_keywords").select("keyword, type").eq("company_id", match.company_id),
    supabase.from("company_locations").select("location").eq("company_id", match.company_id),
  ]);
  if (servicesResult.error) throw servicesResult.error;
  if (keywordsResult.error) throw keywordsResult.error;
  if (locationsResult.error) throw locationsResult.error;

  const keywords = keywordsResult.data || [];
  const companyContext = {
    id: String(match.companies.id),
    name: String(match.companies.company_name || ""),
    industry: String(match.companies.industry || ""),
    services: (servicesResult.data || []).map((row) => String(row.service || "")).filter(Boolean),
    includeKeywords: keywords.filter((row) => row.type === "include").map((row) => String(row.keyword || "")).filter(Boolean),
    excludeKeywords: keywords.filter((row) => row.type === "exclude").map((row) => String(row.keyword || "")).filter(Boolean),
    locations: (locationsResult.data || []).map((row) => String(row.location || "")).filter(Boolean),
    baseLocation: String(match.companies.base_location || ""),
    serviceAreas: Array.isArray(match.companies.service_areas) ? match.companies.service_areas.map(String) : [],
    willingToTravel: Boolean(match.companies.willing_to_travel),
    nationalProjects: Boolean(match.companies.national_projects),
    remoteProjects: Boolean(match.companies.remote_projects),
    updatedAt: String(match.companies.updated_at || ""),
  };
  const opportunityContext = {
    id: String(match.opportunities.id),
    title: String(match.opportunities.title || ""),
    description: String(match.opportunities.description || ""),
    buyer: String(match.opportunities.buyer || ""),
    location: String(match.opportunities.location || ""),
    source: String(match.opportunities.sources?.name || match.opportunities.raw_payload?.source_name || ""),
    sourceType: String(match.opportunities.sources?.source_type || ""),
    deadline: match.opportunities.deadline ? String(match.opportunities.deadline) : "",
    deadlineAt: String(match.opportunities.raw_payload?.deadline_at || ""),
    category: String(match.opportunities.category || ""),
    type: String(match.opportunities.type || ""),
    status: String(match.opportunities.status || ""),
    rawPayload: match.opportunities.raw_payload && typeof match.opportunities.raw_payload === "object" ? match.opportunities.raw_payload : {},
  };
  return {
    match,
    company: companyContext,
    opportunity: opportunityContext,
    locationAssessment: assessCompanyOpportunityLocation(companyContext, opportunityContext),
  };
}

async function runBatchReview(
  supabase: ReturnType<typeof createClient>,
  openAiKey: string,
  model: string,
  companyId: string,
  limit: number,
  force: boolean,
  userId: string,
) {
  const candidateResult = await loadBatchCandidates(supabase, companyId, limit, force);
  const candidates = candidateResult.candidates;
  await logAiUsage(supabase, {
    userId,
    companyId,
    opportunityId: null,
    action: force ? "rerun" : "batch_review",
    model,
    inputTokens: null,
    outputTokens: null,
    estimatedCost: 0,
  });
  const summary = {
    company_id: companyId,
    force,
    reviewed: 0,
    strong: 0,
    possible: 0,
    weak_or_no_fit: 0,
    skipped: 0,
    skipped_outside_service_area: 0,
    skipped_already_reviewed: 0,
    skipped_expired_or_missing_deadline: 0,
    skipped_score_too_low: 0,
    skipped_manually_rejected: 0,
    token_usage: null as null | Record<string, unknown>,
    estimated_cost: null as null | string,
    reviews: [] as Record<string, unknown>[],
    skipped_samples: [] as string[],
    skipped_reasons: {} as Record<string, number>,
  };
  summary.skipped_outside_service_area = candidateResult.skipped.outsideServiceArea;
  summary.skipped_already_reviewed = candidateResult.skipped.alreadyReviewed;
  summary.skipped_expired_or_missing_deadline = candidateResult.skipped.expiredOrMissingDeadline;
  summary.skipped_score_too_low = candidateResult.skipped.scoreTooLow;
  summary.skipped_manually_rejected = candidateResult.skipped.manuallyRejected;
  summary.skipped += candidateResult.skipped.outsideServiceArea
    + candidateResult.skipped.alreadyReviewed
    + candidateResult.skipped.expiredOrMissingDeadline
    + candidateResult.skipped.scoreTooLow
    + candidateResult.skipped.manuallyRejected;
  summary.skipped_reasons = {
    "Outside service area": candidateResult.skipped.outsideServiceArea,
    "Already reviewed": candidateResult.skipped.alreadyReviewed,
    "Expired or missing deadline": candidateResult.skipped.expiredOrMissingDeadline,
    "Score too low": candidateResult.skipped.scoreTooLow,
    "Manually rejected": candidateResult.skipped.manuallyRejected,
  };
  summary.skipped_samples.push(...candidateResult.skipped.samples);

  for (const candidate of candidates) {
    try {
      const context = await loadReviewContext(supabase, String(candidate.id || ""));
      validateContextBeforeAi(context, { force, allowOutsideServiceArea: false });
      const saved = await createAndSaveReview(supabase, openAiKey, model, context, userId, force ? "rerun" : "batch_review");
      summary.reviewed += 1;
      if (saved.fit === "strong") summary.strong += 1;
      else if (saved.fit === "possible") summary.possible += 1;
      else summary.weak_or_no_fit += 1;
      summary.reviews.push(saved);
    } catch (error) {
      summary.skipped += 1;
      summary.skipped_samples.push(errorMessage(error));
    }
  }

  return summary;
}

async function runAutomaticAiReview(
  supabase: ReturnType<typeof createClient>,
  openAiKey: string,
  model: string,
  userId: string,
  limit: number,
) {
  const today = startOfUtcDayIso();
  const totalUsage = await getAiUsageTotals(supabase, { since: today, opportunityRequired: true });
  let remainingTotal = Math.max(0, DAILY_AI_REVIEW_LIMIT - totalUsage.count);
  if (remainingTotal <= 0) {
    throw new Error("AI daily limit reached. Try again tomorrow or increase the limit.");
  }

  const { data: companies, error } = await supabase
    .from("companies")
    .select("id, company_name, billing_status, plan, selected_plan, auto_ai_review_enabled")
    .eq("auto_ai_review_enabled", true)
    .order("created_at", { ascending: true })
    .limit(100);
  if (error) throw error;

  const summary = {
    mode: "auto",
    companies_checked: 0,
    matches_checked: 0,
    ai_reviews_created: 0,
    strong: 0,
    possible: 0,
    weak_or_no_fit: 0,
    skipped_expired: 0,
    skipped_missing_deadline: 0,
    skipped_outside_service_area: 0,
    skipped_already_reviewed: 0,
    skipped_usage_limit: 0,
    skipped_other: 0,
    daily_usage_remaining: remainingTotal,
    reviews: [] as Record<string, unknown>[],
  };

  for (const company of companies || []) {
    if (summary.ai_reviews_created >= limit || remainingTotal <= 0) break;
    if (!isActiveCompanyForAutoAi(company as Record<string, unknown>)) continue;
    summary.companies_checked += 1;
    const companyId = String(company.id || "");
    const companyUsage = await getAiUsageTotals(supabase, {
      since: today,
      companyId,
      opportunityRequired: true,
    });
    const companyRemaining = Math.max(0, DAILY_COMPANY_AUTO_REVIEW_LIMIT - companyUsage.count);
    if (companyRemaining <= 0) {
      summary.skipped_usage_limit += 1;
      continue;
    }
    const candidateLimit = Math.min(limit - summary.ai_reviews_created, remainingTotal, companyRemaining);
    const candidateResult = await loadBatchCandidates(supabase, companyId, candidateLimit, false);
    summary.matches_checked += candidateResult.checked;
    summary.skipped_outside_service_area += candidateResult.skipped.outsideServiceArea;
    summary.skipped_already_reviewed += candidateResult.skipped.alreadyReviewed;
    summary.skipped_expired += candidateResult.skipped.expired;
    summary.skipped_missing_deadline += candidateResult.skipped.missingDeadline;

    for (const candidate of candidateResult.candidates) {
      if (summary.ai_reviews_created >= limit || remainingTotal <= 0) break;
      try {
        const context = await loadReviewContext(supabase, String(candidate.id || ""));
        validateContextBeforeAi(context, { force: false, allowOutsideServiceArea: false });
        const saved = await createAndSaveReview(supabase, openAiKey, model, context, userId, "batch_review");
        summary.ai_reviews_created += 1;
        remainingTotal -= 1;
        summary.daily_usage_remaining = remainingTotal;
        if (saved.fit === "strong") summary.strong += 1;
        else if (saved.fit === "possible") summary.possible += 1;
        else summary.weak_or_no_fit += 1;
        summary.reviews.push(saved);
      } catch {
        summary.skipped_other += 1;
      }
    }
  }

  return summary;
}

async function loadBatchCandidates(supabase: ReturnType<typeof createClient>, companyId: string, limit: number, force: boolean) {
  const company = await loadCompanyForLocationFilter(supabase, companyId);
  const { data: matches, error } = await supabase
    .from("opportunity_matches")
    .select(`
      id,
      opportunity_id,
      match_score,
      match_label,
      safety_status,
      review_note,
      reviewed_at,
      ai_review_status,
      ai_review_skipped_reason,
      opportunities (
        id,
        title,
        location,
        deadline,
        status,
        raw_payload
      )
    `)
    .eq("company_id", companyId)
    .order("match_score", { ascending: false })
    .limit(100);
  if (error) throw error;

  const reviews = await loadExistingReviewKeys(supabase, companyId, (matches || []).map((match) => String(match.opportunity_id || "")));
  const candidates = [];
  const skipped = {
    alreadyReviewed: 0,
    outsideServiceArea: 0,
    expiredOrMissingDeadline: 0,
    expired: 0,
    missingDeadline: 0,
    scoreTooLow: 0,
    manuallyRejected: 0,
    samples: [] as string[],
  };
  let checked = 0;
  for (const match of matches || []) {
    checked += 1;
    const title = String((match.opportunities as Record<string, unknown> | null)?.title || match.opportunity_id || "match");
    if (reviews.has(String(match.opportunity_id || ""))) {
      skipped.alreadyReviewed += 1;
      if (!force) {
        await markMatchAiSkipped(supabase, String(match.id || ""), "already_reviewed", false);
        continue;
      }
    }
    if (!force && String(match.ai_review_status || "not_reviewed") !== "not_reviewed" && !match.ai_review_skipped_reason) {
      continue;
    }
    if (String(match.safety_status || "") === "hidden" || (match.reviewed_at && /reject|hafna|hidden/i.test(String(match.review_note || "")))) {
      skipped.manuallyRejected += 1;
      await markMatchAiSkipped(supabase, String(match.id || ""), "manually_rejected", true);
      continue;
    }
    if (Number(match.match_score || 0) < 50) {
      skipped.scoreTooLow += 1;
      await markMatchAiSkipped(supabase, String(match.id || ""), "score_too_low", false);
      continue;
    }
    const opportunity = match.opportunities as Record<string, unknown> | null;
    if (!opportunity || !isBatchEligibleOpportunity(opportunity)) {
      skipped.expiredOrMissingDeadline += 1;
      if (!opportunity || isMissingDeadlineOpportunity(opportunity)) skipped.missingDeadline += 1;
      else skipped.expired += 1;
      await markMatchAiSkipped(supabase, String(match.id || ""), "expired_or_missing_deadline", true);
      await markExistingReviewNotSendable(supabase, companyId, String(match.opportunity_id || ""), "Expired or missing deadline under current review rules.");
      if (skipped.samples.length < 5) skipped.samples.push(`${title}: expired or missing deadline`);
      continue;
    }
    const locationAssessment = assessCompanyOpportunityLocation(company, opportunity);
    if (locationAssessment.outsideServiceArea) {
      skipped.outsideServiceArea += 1;
      await markMatchAiSkipped(supabase, String(match.id || ""), "outside_service_area", true);
      await markExistingReviewNotSendable(supabase, companyId, String(match.opportunity_id || ""), "Outside service area under current company profile.");
      if (skipped.samples.length < 5) skipped.samples.push(`${title}: Outside service area`);
      continue;
    }
    if (candidates.length >= limit) continue;
    candidates.push(match);
  }
  return { candidates, skipped, checked };
}

async function markMatchAiSkipped(supabase: ReturnType<typeof createClient>, matchId: string, reason: string, lowPriority: boolean) {
  if (!isUuid(matchId)) return;
  const payload: Record<string, unknown> = {
    ai_review_skipped_reason: reason,
  };
  if (lowPriority) {
    payload.ai_review_status = "low_priority";
    payload.ai_reviewed_at = new Date().toISOString();
  }
  const { error } = await supabase
    .from("opportunity_matches")
    .update(payload)
    .eq("id", matchId);
  if (error) throw error;
}

async function markExistingReviewNotSendable(supabase: ReturnType<typeof createClient>, companyId: string, opportunityId: string, reason: string) {
  if (!isUuid(companyId) || !isUuid(opportunityId)) return;
  const { error } = await supabase
    .from("ai_match_reviews")
    .update({
      send_to_client: false,
      fit: "no_fit",
      reason,
      updated_at: new Date().toISOString(),
    })
    .eq("company_id", companyId)
    .eq("opportunity_id", opportunityId);
  if (error) throw error;
}

async function loadExistingReviewKeys(supabase: ReturnType<typeof createClient>, companyId: string, opportunityIds: string[]) {
  const ids = uniqueStrings(opportunityIds).filter(isUuid);
  if (!ids.length) return new Set<string>();
  const { data, error } = await supabase
    .from("ai_match_reviews")
    .select("opportunity_id")
    .eq("company_id", companyId)
    .in("opportunity_id", ids);
  if (error) throw error;
  return new Set((data || []).map((row) => String(row.opportunity_id || "")));
}

async function loadCompanyForLocationFilter(supabase: ReturnType<typeof createClient>, companyId: string) {
  const [{ data: company, error: companyError }, locationsResult] = await Promise.all([
    supabase.from("companies").select("id, company_name, base_location, service_areas, willing_to_travel, national_projects, updated_at").eq("id", companyId).single(),
    supabase.from("company_locations").select("location").eq("company_id", companyId),
  ]);
  if (companyError) throw companyError;
  if (locationsResult.error) throw locationsResult.error;
  return {
    id: String(company.id || ""),
    name: String(company.company_name || ""),
    baseLocation: String(company.base_location || ""),
    serviceAreas: Array.isArray(company.service_areas) ? company.service_areas.map(String) : [],
    locations: (locationsResult.data || []).map((row) => String(row.location || "")).filter(Boolean),
    willingToTravel: Boolean(company.willing_to_travel),
    nationalProjects: Boolean(company.national_projects),
    updatedAt: String(company.updated_at || ""),
  };
}

function assessCompanyOpportunityLocation(company: Record<string, unknown>, opportunity: Record<string, unknown>) {
  if (company.nationalProjects === true || company.willingToTravel === true) {
    return { outsideServiceArea: false, reason: "Company accepts national/travel opportunities" };
  }
  const serviceText = normalizeText([
    company.baseLocation,
    ...(Array.isArray(company.serviceAreas) ? company.serviceAreas : []),
    ...(Array.isArray(company.locations) ? company.locations : []),
  ].join(" "));
  if (!serviceText) return { outsideServiceArea: false, reason: "No service area configured" };
  if (/all iceland|allt land|national|landsdekkandi/.test(serviceText)) {
    return { outsideServiceArea: false, reason: "Company accepts national opportunities" };
  }
  const opportunityText = normalizeText([
    opportunity.title,
    opportunity.location,
    (opportunity.rawPayload as Record<string, unknown> | undefined)?.region,
    (opportunity.rawPayload as Record<string, unknown> | undefined)?.extracted_location,
    (opportunity.raw_payload as Record<string, unknown> | undefined)?.region,
    (opportunity.raw_payload as Record<string, unknown> | undefined)?.extracted_location,
  ].join(" "));
  if (!opportunityText) return { outsideServiceArea: false, reason: "Opportunity location unclear" };
  const outsideNorth = /(dalvik|akureyri|boggvisbraut|birkiholar|north iceland|nordurland|nordurland)/.test(opportunityText) &&
    !/(dalvik|akureyri|north iceland|nordurland|nordurland)/.test(serviceText);
  if (outsideNorth) return { outsideServiceArea: true, reason: "Outside service area" };
  const outsideSnaefellsnes = /(olafsvik|snaefellsnes|snaefellsnes|stykkisholmur|grundarfjordur)/.test(opportunityText) &&
    !/(olafsvik|snaefellsnes|snaefellsnes|stykkisholmur|grundarfjordur)/.test(serviceText);
  if (outsideSnaefellsnes) return { outsideServiceArea: true, reason: "Outside service area" };
  const serviceRegions = getKnownLocationTokens(serviceText);
  const opportunityRegions = getKnownLocationTokens(opportunityText);
  if (!opportunityRegions.length || !serviceRegions.length) return { outsideServiceArea: false, reason: "Location could not be compared confidently" };
  const overlaps = opportunityRegions.some((token) => serviceRegions.includes(token));
  return { outsideServiceArea: !overlaps, reason: overlaps ? "Location matches service area" : "Outside service area" };
}

function getKnownLocationTokens(text: string) {
  const tokens: string[] = [];
  const checks: Array<[string, RegExp]> = [
    ["capital_area", /reykjavik|capital area|hofudborg|hofudborg|gardabaer|kopavogur|seltjarnarnes|mosfellsbaer/],
    ["south", /selfoss|arborg|sudurland|hveragerdi|olfus|rangarthing/],
    ["west", /akranes|borgarnes|borgarbyggd|vesturland|hvalfjordur/],
    ["north", /dalvik|akureyri|nordurland|birkiholar|boggvisbraut/],
    ["east", /austurland|egilsstadir|fjardabyggd|mulathing/],
    ["westfjords", /vestfirdir|isafjordur/],
  ];
  for (const [token, pattern] of checks) {
    if (pattern.test(text)) tokens.push(token);
  }
  return tokens;
}

function isBatchEligibleOpportunity(opportunity: Record<string, unknown>) {
  const payload = opportunity.raw_payload && typeof opportunity.raw_payload === "object" ? opportunity.raw_payload as Record<string, unknown> : {};
  const deadline = String(opportunity.deadline || payload.deadline_at || payload.bid_deadline_at || "").trim();
  if (!deadline || daysUntil(deadline) < 0) return false;
  if (String(opportunity.status || "").toLowerCase() === "hidden") return false;
  if (payload.hidden_from_reports === true) return false;
  if (["hidden", "noise", "deleted"].includes(String(payload.admin_report_status || "").toLowerCase())) return false;
  if (String(payload.stale_status || "").toLowerCase()) return false;
  return true;
}

function isMissingDeadlineOpportunity(opportunity: Record<string, unknown>) {
  const payload = opportunity.raw_payload && typeof opportunity.raw_payload === "object" ? opportunity.raw_payload as Record<string, unknown> : {};
  return !String(opportunity.deadline || payload.deadline_at || payload.bid_deadline_at || "").trim();
}

function isActiveCompanyForAutoAi(company: Record<string, unknown>) {
  if (company.auto_ai_review_enabled !== true) return false;
  const billingStatus = String(company.billing_status || "").toLowerCase();
  const plan = String(company.selected_plan || company.plan || "").toLowerCase();
  if (["cancelled", "canceled", "inactive", "suspended"].includes(billingStatus)) return false;
  return ["trial", "active", "paying", "paid", "not_started"].includes(billingStatus)
    || ["trial", "basic", "pro", "priority", "starter", "growth"].includes(plan);
}

function validateContextBeforeAi(context: Record<string, unknown>, options: { force: boolean; allowOutsideServiceArea: boolean }) {
  const opportunity = context.opportunity as Record<string, unknown>;
  const match = context.match as Record<string, unknown>;
  const locationAssessment = context.locationAssessment as Record<string, unknown> | undefined;
  const rawPayload = opportunity.rawPayload && typeof opportunity.rawPayload === "object" ? opportunity.rawPayload as Record<string, unknown> : {};
  const deadline = String(opportunity.deadline || opportunity.deadlineAt || rawPayload.deadline_at || rawPayload.bid_deadline_at || "").trim();
  const expired = deadline ? daysUntil(deadline) < 0 : false;
  const hidden = String(opportunity.status || "").toLowerCase() === "hidden"
    || String(match.safety_status || "").toLowerCase() === "hidden"
    || rawPayload.hidden_from_reports === true
    || ["hidden", "noise", "deleted"].includes(String(rawPayload.admin_report_status || "").toLowerCase());
  if (!deadline) throw new Error("AI review skipped: missing deadline.");
  if (expired) throw new Error("AI review skipped: expired opportunity.");
  if (hidden) throw new Error("AI review skipped: hidden opportunity.");
  if (locationAssessment?.outsideServiceArea === true && !(options.force && options.allowOutsideServiceArea)) {
    throw new Error("AI review skipped: outside service area.");
  }
}

async function assertAiUsageAllowed(
  supabase: ReturnType<typeof createClient>,
  options: {
    userId: string;
    companyId: string;
    action: "single_review" | "batch_review" | "rerun";
    requestedReviews: number;
    force: boolean;
    isBatch: boolean;
  },
) {
  const today = startOfUtcDayIso();
  const hourAgo = new Date(Date.now() - 3600000).toISOString();
  const totalUsage = await getAiUsageTotals(supabase, {
    since: today,
    opportunityRequired: true,
  });
  if (totalUsage.count + options.requestedReviews > DAILY_AI_REVIEW_LIMIT) {
    throw new Error("AI daily limit reached. Try again tomorrow or increase the limit.");
  }
  const companyReviewUsage = await getAiUsageTotals(supabase, {
    since: today,
    companyId: options.companyId,
    opportunityRequired: true,
  });
  if (companyReviewUsage.count + options.requestedReviews > DAILY_COMPANY_AUTO_REVIEW_LIMIT) {
    throw new Error("AI daily limit reached. Try again tomorrow or increase the limit.");
  }

  if (options.isBatch && !options.force) {
    const companyBatches = await countAiUsage(supabase, {
      since: today,
      companyId: options.companyId,
      action: "batch_review",
      opportunityRequired: false,
      opportunityIsNull: true,
    });
    if (companyBatches >= DAILY_COMPANY_BATCH_LIMIT) {
      throw new Error("AI daily limit reached. Try again tomorrow or increase the limit.");
    }
  }

  if (options.force) {
    const companyReruns = await countAiUsage(supabase, {
      since: hourAgo,
      companyId: options.companyId,
      action: "rerun",
      opportunityRequired: false,
    });
    if (companyReruns >= HOURLY_COMPANY_RERUN_LIMIT) {
      throw new Error("AI daily limit reached. Try again tomorrow or increase the limit.");
    }
  }
}

async function getAiUsageTotals(
  supabase: ReturnType<typeof createClient>,
  options: {
    since: string;
    companyId?: string;
    action?: string;
    opportunityRequired?: boolean;
    opportunityIsNull?: boolean;
  },
) {
  let dataQuery = supabase
    .from("ai_usage_log")
    .select("estimated_cost")
    .gte("created_at", options.since);
  if (options.companyId) dataQuery = dataQuery.eq("company_id", options.companyId);
  if (options.action) dataQuery = dataQuery.eq("action", options.action);
  if (options.opportunityRequired) dataQuery = dataQuery.not("opportunity_id", "is", null);
  if (options.opportunityIsNull) dataQuery = dataQuery.is("opportunity_id", null);
  const { data, error } = await dataQuery;
  if (error) throw error;
  return {
    count: (data || []).length,
    estimatedCost: (data || []).reduce((sum, row) => sum + Number(row.estimated_cost || 0), 0),
  };
}

async function countAiUsage(
  supabase: ReturnType<typeof createClient>,
  options: {
    since: string;
    companyId?: string;
    action?: string;
    opportunityRequired?: boolean;
    opportunityIsNull?: boolean;
  },
) {
  let query = supabase
    .from("ai_usage_log")
    .select("id", { count: "exact", head: true })
    .gte("created_at", options.since);
  if (options.companyId) query = query.eq("company_id", options.companyId);
  if (options.action) query = query.eq("action", options.action);
  if (options.opportunityRequired) query = query.not("opportunity_id", "is", null);
  if (options.opportunityIsNull) query = query.is("opportunity_id", null);
  const { count, error } = await query;
  if (error) throw error;
  return Number(count || 0);
}

async function logAiUsage(
  supabase: ReturnType<typeof createClient>,
  entry: {
    userId: string;
    companyId: string;
    opportunityId: string | null;
    action: "single_review" | "batch_review" | "rerun";
    model: string;
    inputTokens: number | null;
    outputTokens: number | null;
    estimatedCost: number;
  },
) {
  const { error } = await supabase
    .from("ai_usage_log")
    .insert({
      user_id: entry.userId,
      company_id: entry.companyId,
      opportunity_id: entry.opportunityId,
      action: entry.action,
      model: entry.model,
      input_tokens: entry.inputTokens,
      output_tokens: entry.outputTokens,
      estimated_cost: entry.estimatedCost,
    });
  if (error) throw error;
}

function startOfUtcDayIso() {
  const date = new Date();
  date.setUTCHours(0, 0, 0, 0);
  return date.toISOString();
}

async function createAndSaveReview(
  supabase: ReturnType<typeof createClient>,
  openAiKey: string,
  model: string,
  context: Record<string, unknown>,
  userId: string,
  action: "single_review" | "batch_review" | "rerun",
) {
  const aiResult = await callOpenAiForReview(openAiKey, model, context);
  const review = applyHardSafetyRules(aiResult.review, context);
  const match = context.match as Record<string, unknown>;
  const company = context.company as Record<string, unknown>;
  const opportunity = context.opportunity as Record<string, unknown>;
  const row = {
    company_id: company.id,
    opportunity_id: opportunity.id,
    match_id: match.id,
    fit: review.fit,
    confidence: review.confidence,
    send_to_client: review.send_to_client,
    reason: review.reason,
    fit_reasons: review.fit_reasons,
    risks_or_questions: review.risks_or_questions,
    suggested_client_summary: review.suggested_client_summary,
    model,
    company_services_snapshot: createCompanyServicesSnapshot(company),
    company_locations_snapshot: createCompanyLocationsSnapshot(company),
    reviewed_profile_hash: createCompanyProfileHash(company),
    profile_updated_at: String(company.updatedAt || "") || null,
    updated_at: new Date().toISOString(),
  };

  const { data: saved, error: saveError } = await supabase
    .from("ai_match_reviews")
    .upsert(row, { onConflict: "company_id,opportunity_id" })
    .select("*")
    .single();
  if (saveError) throw saveError;
  await updateMatchAiReviewStatus(supabase, String(match.id || ""), review);
  await logAiUsage(supabase, {
    userId,
    companyId: String(company.id || ""),
    opportunityId: String(opportunity.id || ""),
    action,
    model,
    inputTokens: aiResult.usage.inputTokens,
    outputTokens: aiResult.usage.outputTokens,
    estimatedCost: estimateOpenAiCost(model, aiResult.usage.inputTokens, aiResult.usage.outputTokens),
  });
  return saved;
}

async function updateMatchAiReviewStatus(supabase: ReturnType<typeof createClient>, matchId: string, review: ReturnType<typeof normalizeAiReview>) {
  const status = getAiReviewStatus(review);
  const { error } = await supabase
    .from("opportunity_matches")
    .update({
      ai_review_status: status,
      ai_review_fit: review.fit,
      ai_review_confidence: review.confidence,
      ai_reviewed_at: new Date().toISOString(),
      ai_review_skipped_reason: null,
      ...(review.fit === "weak" || review.fit === "no_fit" ? { review_required: true } : {}),
    })
    .eq("id", matchId);
  if (error) throw error;
}

function getAiReviewStatus(review: ReturnType<typeof normalizeAiReview>) {
  if (review.confidence < 0.65) return "needs_review";
  if (review.fit === "strong" && review.send_to_client) return "ready_for_admin";
  if (review.fit === "possible" && review.send_to_client) return "possible";
  if (review.fit === "weak" || review.fit === "no_fit") return "low_priority";
  return "needs_review";
}

function createCompanyServicesSnapshot(company: Record<string, unknown>) {
  return uniqueStrings([
    ...(Array.isArray(company.services) ? company.services as string[] : []),
    ...(Array.isArray(company.includeKeywords) ? company.includeKeywords as string[] : []),
    ...(Array.isArray(company.excludeKeywords) ? (company.excludeKeywords as string[]).map((value) => `exclude:${value}`) : []),
  ].map((value) => normalizeSnapshotValue(value)));
}

function createCompanyLocationsSnapshot(company: Record<string, unknown>) {
  return uniqueStrings([
    company.baseLocation,
    ...(Array.isArray(company.locations) ? company.locations as string[] : []),
    ...(Array.isArray(company.serviceAreas) ? company.serviceAreas as string[] : []),
    company.willingToTravel === true ? "willing_to_travel:true" : "willing_to_travel:false",
    company.nationalProjects === true ? "national_projects:true" : "national_projects:false",
  ].map((value) => normalizeSnapshotValue(value)));
}

function createCompanyProfileHash(company: Record<string, unknown>) {
  const payload = JSON.stringify({
    services: createCompanyServicesSnapshot(company),
    locations: createCompanyLocationsSnapshot(company),
  });
  let hash = 5381;
  for (let index = 0; index < payload.length; index += 1) {
    hash = ((hash << 5) + hash) + payload.charCodeAt(index);
    hash |= 0;
  }
  return `profile_${Math.abs(hash)}`;
}

function normalizeSnapshotValue(value: unknown) {
  return normalizeText(value).replace(/\s+/g, " ").trim();
}

async function callOpenAiForReview(openAiKey: string, model: string, context: Record<string, unknown>) {
  const input = [
    {
      role: "system",
      content: [{
        type: "input_text",
        text: [
          "You are an expert Icelandic B2B tender analyst for VerkRadar.",
          "Assess whether the opportunity is relevant for the company profile.",
          "Return strict JSON only. No markdown.",
          "Use fit: strong, possible, weak, or no_fit.",
          "Strong fit must be rare and requires all three: clear core service match, clear service-area/location match, and valid future deadline.",
          "If the project is broad civil works but only partially matches the company services, fit must be possible, not strong.",
          "If location is outside service area and the company is not national/travel, fit must be weak or no_fit.",
          "Set send_to_client=false if the deadline is missing, expired, hidden, needs manual deadline review, outside service area, wrong work type, or uncertain.",
        ].join(" "),
      }],
    },
    {
      role: "user",
      content: [{
        type: "input_text",
        text: JSON.stringify({
          instructions: {
            output_schema: {
              fit: "strong | possible | weak | no_fit",
              confidence: "number 0..1",
              send_to_client: "boolean",
              reason: "short string",
              fit_reasons: "string[]",
              risks_or_questions: "string[]",
              suggested_client_summary: "short Icelandic customer-facing summary",
            },
            safety_rules: [
              "If deadline is missing, send_to_client=false.",
              "If deadline is expired, send_to_client=false.",
              "If opportunity is hidden/needs_review because of missing deadline, send_to_client=false.",
              "Strong fit requires clear service match AND clear location match AND future deadline.",
              "If broad civil works only partially matches company services, use possible, not strong.",
              "If location is clearly outside service area and company is not national/travel, downgrade.",
              "If locationAssessment.outsideServiceArea=true, fit must be weak or no_fit and send_to_client=false.",
              "If tender is supervision/consulting/design but company is execution contractor, downgrade.",
              "If uncertain, fit should be possible or weak and send_to_client=false.",
            ],
          },
          context,
        }),
      }],
    },
  ];

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      authorization: `Bearer ${openAiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model,
      input,
      temperature: 0.1,
      max_output_tokens: 900,
      text: {
        format: {
          type: "json_schema",
          name: "ai_match_review",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              fit: { type: "string", enum: ["strong", "possible", "weak", "no_fit"] },
              confidence: { type: "number", minimum: 0, maximum: 1 },
              send_to_client: { type: "boolean" },
              reason: { type: "string" },
              fit_reasons: { type: "array", items: { type: "string" } },
              risks_or_questions: { type: "array", items: { type: "string" } },
              suggested_client_summary: { type: "string" },
            },
            required: ["fit", "confidence", "send_to_client", "reason", "fit_reasons", "risks_or_questions", "suggested_client_summary"],
          },
        },
      },
    }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload?.error?.message || `OpenAI request failed with status ${response.status}`);
  return {
    review: normalizeAiReview(parseOpenAiJson(payload)),
    usage: parseOpenAiUsage(payload),
  };
}

function parseOpenAiUsage(payload: Record<string, unknown>) {
  const usage = payload.usage && typeof payload.usage === "object" ? payload.usage as Record<string, unknown> : {};
  return {
    inputTokens: nullableNumber(usage.input_tokens ?? usage.prompt_tokens),
    outputTokens: nullableNumber(usage.output_tokens ?? usage.completion_tokens),
  };
}

function nullableNumber(value: unknown) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function estimateOpenAiCost(model: string, inputTokens: number | null, outputTokens: number | null) {
  const input = Number(inputTokens || 0);
  const output = Number(outputTokens || 0);
  const normalized = String(model || "").toLowerCase();
  const rates = normalized.includes("gpt-4.1-mini")
    ? { input: 0.40, output: 1.60 }
    : { input: 0, output: 0 };
  return Number((((input / 1000000) * rates.input) + ((output / 1000000) * rates.output)).toFixed(6));
}

function parseOpenAiJson(payload: Record<string, unknown>) {
  const outputText = String(payload.output_text || "");
  if (outputText) return JSON.parse(outputText);
  const output = Array.isArray(payload.output) ? payload.output : [];
  for (const item of output) {
    const content = Array.isArray((item as Record<string, unknown>).content) ? (item as Record<string, unknown>).content as Record<string, unknown>[] : [];
    for (const part of content) {
      const text = String(part.text || part.output_text || "");
      if (text) return JSON.parse(text);
    }
  }
  throw new Error("OpenAI response did not include JSON output.");
}

function normalizeAiReview(value: Record<string, unknown>) {
  const fit = ["strong", "possible", "weak", "no_fit"].includes(String(value.fit)) ? String(value.fit) as AiFit : "weak";
  const confidence = Math.max(0, Math.min(1, Number(value.confidence || 0)));
  return {
    fit,
    confidence,
    send_to_client: value.send_to_client === true,
    reason: String(value.reason || "").slice(0, 1200),
    fit_reasons: toStringArray(value.fit_reasons).slice(0, 8),
    risks_or_questions: toStringArray(value.risks_or_questions).slice(0, 8),
    suggested_client_summary: String(value.suggested_client_summary || "").slice(0, 1200),
  };
}

function applyHardSafetyRules(review: ReturnType<typeof normalizeAiReview>, context: Record<string, unknown>) {
  const opportunity = context.opportunity as Record<string, unknown>;
  const match = context.match as Record<string, unknown>;
  const locationAssessment = context.locationAssessment as Record<string, unknown> | undefined;
  const rawPayload = opportunity.rawPayload && typeof opportunity.rawPayload === "object" ? opportunity.rawPayload as Record<string, unknown> : {};
  const deadline = String(opportunity.deadline || "");
  const deadlineAt = String(opportunity.deadlineAt || rawPayload.deadline_at || "");
  const days = daysUntil(deadline || deadlineAt);
  const isMissingDeadline = !deadline && !deadlineAt;
  const isExpired = Number.isFinite(days) && days < 0;
  const hidden = opportunity.status === "hidden" || rawPayload.hidden_from_reports === true || ["hidden", "noise", "deleted"].includes(String(rawPayload.admin_report_status || ""));
  const missingDeadlineReview = String(rawPayload.deadline_debug_reason || rawPayload.deadline_warning || "").toLowerCase().includes("missing");
  const outsideServiceArea = locationAssessment?.outsideServiceArea === true;
  if (isMissingDeadline || isExpired || hidden || missingDeadlineReview || outsideServiceArea || String(match.safety_status || "") === "hidden") {
    return {
      ...review,
      fit: outsideServiceArea ? "no_fit" : review.fit === "strong" ? "possible" : review.fit,
      send_to_client: false,
      risks_or_questions: uniqueStrings([
        ...review.risks_or_questions,
        isMissingDeadline ? "Missing bid deadline; do not send automatically." : "",
        isExpired ? "Deadline appears expired; do not send automatically." : "",
        hidden ? "Opportunity is hidden or excluded by system rules." : "",
        missingDeadlineReview ? "Opportunity requires manual deadline review." : "",
        outsideServiceArea ? "Outside service area." : "",
      ]),
    };
  }
  return review;
}

function daysUntil(value: string) {
  if (!value) return Number.NaN;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return Number.NaN;
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const normalized = new Date(date);
  normalized.setUTCHours(0, 0, 0, 0);
  return Math.ceil((normalized.getTime() - today.getTime()) / 86400000);
}

function toStringArray(value: unknown) {
  return Array.isArray(value) ? value.map((item) => String(item || "").trim()).filter(Boolean) : [];
}

function uniqueStrings(values: string[]) {
  return Array.from(new Set(values.map((value) => String(value || "").trim()).filter(Boolean)));
}

function normalizeText(value: unknown) {
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

function requiredEnv(name: string) {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing ${name}.`);
  return value;
}

async function safeJson(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

function json(payload: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...corsHeaders, "content-type": "application/json" },
  });
}

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}
