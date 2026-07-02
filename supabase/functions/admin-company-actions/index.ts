import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const MIN_MATCH_SCORE = 50;
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type CompanyProfile = {
  id: string;
  companyName: string;
  contactEmail: string;
  industry: string;
  services: string[];
  includeKeywords: string[];
  excludeKeywords: string[];
  locations: string[];
  baseLocation: string;
  serviceAreas: string[];
  willingToTravel: boolean;
  nationalProjects: boolean;
  remoteProjects: boolean;
  minimumProjectValueForTravel: number | null;
  minProjectValue: number | null;
  maxProjectValue: number | null;
  allowUnknownValue: boolean;
};

type ReportMode = "new_only" | "all_current";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !anonKey || !serviceRoleKey) {
      return json({ error: "Missing Supabase Edge Function environment variables." }, 500);
    }

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
    const companyId = String(body.companyId || "").trim();
    const action = String(body.action || "refresh_matches").trim();
    const reportMode: ReportMode = body.reportMode === "all_current" ? "all_current" : "new_only";
    if (!isUuid(companyId)) return json({ error: "A valid companyId is required." }, 400);
    if (!["refresh_matches", "generate_report"].includes(action)) {
      return json({ error: "Unsupported action." }, 400);
    }

    const refreshResult = await refreshCompanyMatches(adminClient, companyId);
    if (action === "refresh_matches") {
      return json({
        ok: true,
        action,
        company_id: refreshResult.company.id,
        company_name: refreshResult.company.companyName,
        matches_refreshed: refreshResult.matches_refreshed,
      });
    }

    const reportResult = await generateCompanyReport(adminClient, refreshResult.company, refreshResult.matches, reportMode);
    return json({
      ok: true,
      action,
      company_id: refreshResult.company.id,
      company_name: refreshResult.company.companyName,
      matches_refreshed: refreshResult.matches_refreshed,
      report_mode: reportMode,
      ...reportResult,
    });
  } catch (error) {
    console.error("Admin company action failed:", error);
    return json({ error: errorMessage(error) }, 500);
  }
});

async function refreshCompanyMatches(supabase: ReturnType<typeof createClient>, companyId: string) {
  const company = await loadCompanyProfile(supabase, companyId);
  const { data: opportunities, error: opportunitiesError } = await supabase
    .from("opportunities")
    .select("*, sources(name, source_type)")
    .eq("status", "open")
    .order("created_at", { ascending: false })
    .limit(1000);

  if (opportunitiesError) throw opportunitiesError;

  const matches = (opportunities || [])
    .map(mapOpportunity)
    .filter(isCustomerMatchEligibleOpportunity)
    .filter(isDashboardVisibleOpportunity)
    .map((opportunity) => calculateMatch(company, opportunity))
    .filter((match) => match.matchScore >= MIN_MATCH_SCORE)
    .sort((a, b) => b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline));

  const { error: deleteError } = await supabase
    .from("opportunity_matches")
    .delete()
    .eq("company_id", companyId);
  if (deleteError) throw deleteError;

  const rows = matches.map((match) => ({
    company_id: companyId,
    opportunity_id: match.id,
    match_score: match.matchScore,
    match_label: match.matchLabel,
    match_reasons: match.matchReasons,
    risks: match.risks,
    next_steps: match.nextSteps,
    calculated_at: new Date().toISOString(),
  }));

  if (rows.length) {
    const { error: insertError } = await supabase.from("opportunity_matches").insert(rows);
    if (insertError) throw insertError;
  }

  return {
    company,
    matches,
    matches_refreshed: rows.length,
  };
}

async function loadCompanyProfile(supabase: ReturnType<typeof createClient>, companyId: string): Promise<CompanyProfile> {
  const [{ data: company, error: companyError }, servicesResult, locationsResult, keywordsResult] = await Promise.all([
    supabase.from("companies").select("*").eq("id", companyId).single(),
    supabase.from("company_services").select("service").eq("company_id", companyId),
    supabase.from("company_locations").select("location").eq("company_id", companyId),
    supabase.from("company_keywords").select("keyword, type").eq("company_id", companyId),
  ]);

  if (companyError) throw companyError;
  if (servicesResult.error) throw servicesResult.error;
  if (locationsResult.error) throw locationsResult.error;
  if (keywordsResult.error) throw keywordsResult.error;

  return {
    id: company.id,
    companyName: String(company.company_name || "Company"),
    contactEmail: String(company.contact_email || ""),
    industry: String(company.industry || ""),
    services: cleanStringArray((servicesResult.data || []).map((row) => row.service)),
    locations: cleanStringArray((locationsResult.data || []).map((row) => row.location)),
    includeKeywords: cleanStringArray((keywordsResult.data || []).filter((row) => row.type === "include").map((row) => row.keyword)),
    excludeKeywords: cleanStringArray((keywordsResult.data || []).filter((row) => row.type === "exclude").map((row) => row.keyword)),
    baseLocation: String(company.base_location || ""),
    serviceAreas: Array.isArray(company.service_areas) ? cleanStringArray(company.service_areas) : [],
    willingToTravel: Boolean(company.willing_to_travel),
    nationalProjects: Boolean(company.national_projects),
    remoteProjects: Boolean(company.remote_projects),
    minimumProjectValueForTravel: company.minimum_project_value_for_travel == null ? null : Number(company.minimum_project_value_for_travel),
    minProjectValue: company.min_project_value == null ? null : Number(company.min_project_value),
    maxProjectValue: company.max_project_value == null ? null : Number(company.max_project_value),
    allowUnknownValue: Boolean(company.allow_unknown_value),
  };
}

async function generateCompanyReport(
  supabase: ReturnType<typeof createClient>,
  company: CompanyProfile,
  matches: Array<Record<string, unknown>>,
  reportMode: ReportMode,
) {
  const seenIds = reportMode === "new_only"
    ? await loadPreviouslyReportedOpportunityIds(supabase, company.id)
    : new Set<string>();
  const ignoredIds = await loadCompanyActionOpportunityIds(supabase, company.id, ["ignored"]);
  const reportMatches = buildCompanyReportMatches(company, matches, reportMode, {
    previouslyReportedIds: seenIds,
    ignoredIds,
  });
  if (!reportMatches.length) {
    return {
      report_created: false,
      report_id: null,
      report_items: 0,
      report_mode: reportMode,
      previous_report_items_excluded: seenIds.size,
      message: reportMode === "new_only"
        ? "No new eligible opportunities found for this company. Use all current mode to generate a full current report."
        : "No customer-report-ready matches found.",
    };
  }

  const report = buildReportContent(company, reportMatches);
  const { data: savedReport, error: reportError } = await supabase
    .from("reports")
    .insert({
      company_id: company.id,
      title: `${report.title} (${new Date().toISOString()})`,
      period_start: report.periodStart,
      period_end: report.periodEnd,
      summary: report.summary,
      text_content: report.textContent,
      html_content: report.htmlContent,
      status: reportMode === "new_only" ? "generated_new_only" : "generated_all_current",
    })
    .select("id")
    .single();

  if (reportError) throw reportError;

  const itemRows = reportMatches.map((match, index) => ({
    report_id: savedReport.id,
    opportunity_id: match.id,
    match_score: match.matchScore,
    match_reasons: Array.isArray(match.matchReasons) ? match.matchReasons : [],
    risks: Array.isArray(match.risks) ? match.risks : [],
    sort_order: index + 1,
  }));

  if (itemRows.length) {
    const { error: itemsError } = await supabase.from("report_items").insert(itemRows);
    if (itemsError) throw itemsError;
  }

  return {
    report_created: true,
    report_id: savedReport.id,
    report_items: itemRows.length,
    report_mode: reportMode,
    previous_report_items_excluded: seenIds.size,
    message: `Generated report with ${itemRows.length} item${itemRows.length === 1 ? "" : "s"}.`,
  };
}

function buildCompanyReportMatches(
  company: CompanyProfile,
  matches: Array<Record<string, unknown>>,
  reportMode: ReportMode,
  options: {
    previouslyReportedIds?: Set<string>;
    ignoredIds?: Set<string>;
  } = {},
) {
  const previouslyReportedIds = options.previouslyReportedIds || new Set<string>();
  const ignoredIds = options.ignoredIds || new Set<string>();
  const modeMatches = reportMode === "new_only"
    ? matches.filter((match) => !previouslyReportedIds.has(String(match.id || "")))
    : matches;
  const sections = getReportSections(company, modeMatches.filter((match) => !ignoredIds.has(String(match.id || ""))));
  return [...sections.confirmed, ...sections.early];
}

async function loadPreviouslyReportedOpportunityIds(supabase: ReturnType<typeof createClient>, companyId: string) {
  const { data, error } = await supabase
    .from("reports")
    .select("report_items(opportunity_id)")
    .eq("company_id", companyId);
  if (error) throw error;
  const ids = new Set<string>();
  for (const report of data || []) {
    const items = Array.isArray(report.report_items) ? report.report_items : [];
    for (const item of items) {
      if (item?.opportunity_id) ids.add(String(item.opportunity_id));
    }
  }
  return ids;
}

async function loadCompanyActionOpportunityIds(
  supabase: ReturnType<typeof createClient>,
  companyId: string,
  actionTypes: string[],
) {
  const { data, error } = await supabase
    .from("company_opportunity_actions")
    .select("opportunity_id")
    .eq("company_id", companyId)
    .in("action_type", actionTypes);
  if (error) throw error;
  return new Set((data || []).map((row) => String(row.opportunity_id || "")).filter(Boolean));
}

function mapOpportunity(row: Record<string, unknown>) {
  const source = row.sources && typeof row.sources === "object" ? row.sources as Record<string, unknown> : {};
  const rawPayload = row.raw_payload && typeof row.raw_payload === "object" ? row.raw_payload as Record<string, unknown> : {};
  return {
    id: String(row.id || ""),
    source: String(source.name || rawPayload.source_name || "Unknown source"),
    sourceType: String(source.source_type || ""),
    externalId: String(row.external_id || ""),
    countryCode: String(row.country_code || ""),
    title: String(row.title || "Untitled opportunity"),
    buyer: String(row.buyer || "Unknown buyer"),
    category: String(row.category || ""),
    type: String(row.type || "tender"),
    description: String(row.description || ""),
    deadline: row.deadline ? String(row.deadline) : "",
    publishedDate: row.published_date ? String(row.published_date) : "",
    location: String(row.location || "Unknown"),
    estimatedValue: row.estimated_value == null ? null : Number(row.estimated_value),
    currency: String(row.currency || "ISK"),
    url: String(row.url || ""),
    requirements: Array.isArray(row.requirements) ? row.requirements.map(String) : [],
    keywords: Array.isArray(row.keywords) ? row.keywords.map(String) : [],
    difficulty: String(row.difficulty || "medium"),
    status: String(row.status || "open"),
    qualityStatus: String(rawPayload.quality_status || ""),
    rawPayload,
  };
}

const CIVIL_STRONG_SERVICE_TERMS = [
  "jarðvinna",
  "gatnagerð",
  "lóðarframkvæmdir",
  "lagnavinna",
  "lagnir",
  "fráveita",
  "vatnslagnir",
  "regnvatnslagnir",
  "malbikun",
  "gangstétt",
  "gangstéttir",
  "stígar",
  "bílastæði",
  "vegagerð",
  "gröftur",
  "jarðvegsskipti",
  "undirbygging",
  "yfirborðsfrágangur",
  "hellulögn",
  "kantsteinn",
  "snjómokstur",
  "gatnaframkvæmdir",
];

const CIVIL_WEAK_GENERIC_TERMS = [
  "framkvæmdir",
  "framkvæmd",
  "útboð",
  "verðfyrirspurn",
  "tilboð",
  "viðhald",
  "verktaki",
  "verk",
];

const CIVIL_INDOOR_DOWNGRADE_TERMS = [
  "innanhússfrágangur",
  "innanhúss",
  "smíði",
  "smíðavinna",
  "málun",
  "gólfefni",
  "innréttingar",
  "raflagnir",
  "pípulagnir",
  "leikskóli",
  "skóli",
  "húsnæði",
  "byggingarvinna",
];

const CIVIL_INDOOR_ALLOWED_SERVICE_TERMS = [
  "innanhússfrágangur",
  "innanhúss",
  "smíði",
  "smíðavinna",
  "málun",
  "gólfefni",
  "innréttingar",
  "raflagnir",
  "pípulagnir",
  "byggingarvinna",
];

function normalizedIncludesAny(text: string, terms: string[]) {
  const normalized = normalizeText(text);
  return terms.some((term) => normalized.includes(normalizeText(term)));
}

function isCivilWeakGenericTerm(value: string) {
  const normalized = normalizeText(value);
  return CIVIL_WEAK_GENERIC_TERMS.some((term) => normalized === normalizeText(term));
}

function rankMatchTerm(value: string) {
  const normalized = normalizeText(value);
  if (CIVIL_STRONG_SERVICE_TERMS.some((term) => normalized === normalizeText(term))) return 0;
  if (CIVIL_STRONG_SERVICE_TERMS.some((term) => normalized.includes(normalizeText(term)) || normalizeText(term).includes(normalized))) return 1;
  if (isCivilWeakGenericTerm(value)) return 10;
  return 3;
}

function sortMatchTermsBySpecificity(values: string[]) {
  return [...values].sort((a, b) => rankMatchTerm(a) - rankMatchTerm(b) || b.length - a.length || a.localeCompare(b));
}

function getStrongCivilTermsInText(text: string) {
  const normalizedText = normalizeText(text);
  return CIVIL_STRONG_SERVICE_TERMS.filter((term) => normalizedText.includes(normalizeText(term)));
}

function promoteWeakGenericHitsToSpecificCivilTerms(hits: string[], opportunityTextValue: string) {
  const strongTerms = getStrongCivilTermsInText(opportunityTextValue);
  if (!strongTerms.length || !hits.some(isCivilWeakGenericTerm)) return hits;
  const nonWeakHits = hits.filter((hit) => !isCivilWeakGenericTerm(hit));
  return Array.from(new Set([...strongTerms, ...nonWeakHits]));
}

function isCivilContractorProfile(profile: CompanyProfile) {
  const profileText = [
    profile.industry,
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : []),
  ].filter(Boolean).join(" ");
  return normalizedIncludesAny(profileText, [
    ...CIVIL_STRONG_SERVICE_TERMS,
    "construction",
    "contractor",
    "verktaki",
    "mannvirki",
    "jarðtækni",
  ]);
}

function hasExplicitIndoorService(profile: CompanyProfile) {
  const profileText = [
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : []),
  ].filter(Boolean).join(" ");
  return normalizedIncludesAny(profileText, CIVIL_INDOOR_ALLOWED_SERVICE_TERMS);
}

function getCivilContractorFit(
  profile: CompanyProfile,
  opportunity: Record<string, unknown>,
  serviceHits: string[],
  keywordHits: string[],
) {
  if (!isCivilContractorProfile(profile)) {
    return {
      serviceHits,
      keywordHits,
      hasWeakOnlyFit: false,
      hasIndoorMismatch: false,
    };
  }

  const opportunityTextValue = opportunityText(opportunity);
  const hasStrongCivilTerm = normalizedIncludesAny(opportunityTextValue, CIVIL_STRONG_SERVICE_TERMS);
  const hasIndoorTerm = normalizedIncludesAny(opportunityTextValue, CIVIL_INDOOR_DOWNGRADE_TERMS);
  const allowsIndoorWork = hasExplicitIndoorService(profile);
  const serviceHitsAreWeakOnly = serviceHits.length > 0 && serviceHits.every(isCivilWeakGenericTerm);
  const keywordHitsAreWeakOnly = keywordHits.length > 0 && keywordHits.every(isCivilWeakGenericTerm);
  const hasAnySpecificHit = [...serviceHits, ...keywordHits].some((hit) => !isCivilWeakGenericTerm(hit));
  const shouldScoreWeakTerms = hasStrongCivilTerm || hasAnySpecificHit;

  return {
    serviceHits: sortMatchTermsBySpecificity(shouldScoreWeakTerms ? promoteWeakGenericHitsToSpecificCivilTerms(serviceHits, opportunityTextValue) : serviceHits.filter((service) => !isCivilWeakGenericTerm(service))),
    keywordHits: sortMatchTermsBySpecificity(shouldScoreWeakTerms ? promoteWeakGenericHitsToSpecificCivilTerms(keywordHits, opportunityTextValue) : keywordHits.filter((keyword) => !isCivilWeakGenericTerm(keyword))),
    hasWeakOnlyFit: !hasStrongCivilTerm && !hasAnySpecificHit && (serviceHitsAreWeakOnly || keywordHitsAreWeakOnly),
    hasIndoorMismatch: hasIndoorTerm && !hasStrongCivilTerm && !allowsIndoorWork,
  };
}

function calculateMatch(profile: CompanyProfile, opportunity: Record<string, unknown>) {
  const text = opportunityText(opportunity);
  let score = 0;
  const reasons: string[] = [];
  const risks: string[] = [];

  if (categoryMatches(profile, opportunity)) {
    score += 35;
    reasons.push(`Matches your ${profile.industry} industry`);
  }

  const rawServiceHits = (profile.services || []).filter((service) => textIncludes(text, service));
  const rawKeywordHits = (profile.includeKeywords || []).filter((keyword) => textIncludes(text, keyword));
  const civilFit = getCivilContractorFit(profile, opportunity, rawServiceHits, rawKeywordHits);

  for (const service of civilFit.serviceHits) {
    score += 10;
    reasons.push(`Mentions your service: ${service}`);
  }

  for (const keyword of civilFit.keywordHits) {
    score += 8;
    reasons.push(`Contains your keyword: ${keyword}`);
  }

  const locationCategory = getLocationMatchCategory(profile, opportunity);
  if (locationCategory === "local_match") {
    score += 22;
    reasons.push("Local match");
  } else if (locationCategory === "national_match") {
    score += 16;
    reasons.push("National opportunity");
  } else if (locationCategory === "remote_match") {
    score += 14;
    reasons.push("Remote opportunity");
  } else if (locationCategory === "outside_area_possible") {
    const travelMinimum = Number(profile.minimumProjectValueForTravel || 0);
    const belowTravelMinimum = Boolean(travelMinimum && opportunity.estimatedValue && Number(opportunity.estimatedValue) < travelMinimum);
    score += belowTravelMinimum ? -4 : 4;
    reasons.push("Outside base area but travel allowed");
    risks.push(belowTravelMinimum
      ? "Outside base area and below your preferred travel project value"
      : "Check travel cost, project size and delivery capacity");
  } else {
    score -= 8;
    risks.push("Outside selected area; location match is low confidence");
  }

  if (valueMatches(profile, opportunity)) {
    score += 10;
    if (opportunity.estimatedValue) reasons.push("Project value is inside your preferred range");
  } else {
    score -= 25;
    risks.push("Estimated project value is outside your preferred range");
  }

  const deadline = String(opportunity.deadline || "");
  if (!deadline) {
    risks.push(getOpportunityMissingDeadlineRisk(opportunity));
  } else {
    const days = daysUntilDeadline(deadline);
    if (days >= 0 && days <= 30) {
      score += 8;
      reasons.push("Deadline is coming up soon");
    } else if (days < 0) {
      score -= 50;
      risks.push("Deadline has passed");
    }
  }

  const excluded = profile.excludeKeywords.filter((keyword) => textIncludes(text, keyword));
  if (excluded.length) {
    score -= Math.min(36, excluded.length * 18);
    for (const keyword of excluded.slice(0, 2)) risks.push(`Contains exclude keyword: ${keyword}`);
  }

  if (civilFit.hasWeakOnlyFit) {
    score = Math.min(score, 40);
    risks.push("Only broad construction/procurement terms matched; verify fit");
  }

  if (civilFit.hasIndoorMismatch) {
    score = Math.min(score - 20, 40);
    risks.push("Appears to be indoor/building finishing work outside your core civil services");
  }

  score = Math.max(0, Math.min(100, Math.round(score)));
  return {
    ...opportunity,
    matchScore: score,
    matchLabel: getMatchLabel(score),
    matchReasons: reasons.slice(0, 5),
    risks: uniqueStrings(risks).slice(0, 4),
    nextSteps: [
      "Open the source documents",
      "Confirm mandatory requirements",
      "Check capacity and profitability",
      "Prepare questions before the deadline",
    ],
  };
}

function isCustomerMatchEligibleOpportunity(opportunity: Record<string, unknown>) {
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object"
    ? opportunity.rawPayload as Record<string, unknown>
    : {};
  if (isDemoTestOpportunity(opportunity)) return false;
  const adminStatus = String(payload.admin_report_status || "").toLowerCase();
  if (adminStatus === "include") return true;
  if (payload.hidden_from_reports === true) return false;
  if (["hidden", "hide", "noise", "deleted"].includes(adminStatus)) return false;
  const tenderState = String(payload.tender_state || "").toLowerCase();
  if (["tender_awarded", "awarded", "already_awarded", "already_tendered"].includes(tenderState)) return false;
  const intent = normalizeReportIntent(String(payload.opportunity_intent || payload.intent || payload.quality_status || ""));
  if (["news_context", "not_opportunity"].includes(intent)) return false;
  if (containsTitleNewsIntent(String(opportunity.title || "")) && !containsConfirmedTenderIntent(getOpportunityQualityText(opportunity))) return false;
  return true;
}

function isDashboardVisibleOpportunity(opportunity: Record<string, unknown>) {
  if (!opportunity || String(opportunity.status || "") !== "open") return false;
  if (!opportunity.url || opportunity.url === "#") return false;
  if (daysUntilDeadline(String(opportunity.deadline || "")) < 0) return false;
  if (isDemoTestOpportunity(opportunity)) return false;
  if ((opportunity.rawPayload as Record<string, unknown> | undefined)?.extraction_method === "parent_article_with_child_opportunities") return false;
  return true;
}

function getReportSections(company: CompanyProfile, matches: Array<Record<string, unknown>>) {
  const buckets = { confirmed: [] as Array<Record<string, unknown>>, early: [] as Array<Record<string, unknown>> };
  const seen = new Set<string>();
  sortCustomerReportMatches(matches).forEach((opportunity) => {
    const id = String(opportunity.id || "");
    if (!id || seen.has(id) || !isStrictCustomerReportEligible(company, opportunity)) return;
    seen.add(id);
    const intent = getOpportunityIntent(opportunity);
    if (intent === "confirmed_tender") buckets.confirmed.push(opportunity);
    else if (intent === "early_opportunity") buckets.early.push(opportunity);
    else {
      const quality = normalizeOpportunityQualityStatus(String(opportunity.qualityStatus || ""), opportunity);
      if (quality === "confirmed_tender") buckets.confirmed.push(opportunity);
      else if (quality === "early_signal") buckets.early.push(opportunity);
    }
  });
  let remaining = 8;
  buckets.confirmed = buckets.confirmed.slice(0, remaining);
  remaining -= buckets.confirmed.length;
  buckets.early = buckets.early.slice(0, Math.max(0, remaining));
  return buckets;
}

function isStrictCustomerReportEligible(company: CompanyProfile, opportunity: Record<string, unknown>) {
  if (!isCustomerMatchEligibleOpportunity(opportunity)) return false;
  if (isAlreadyAwardedOrTenderedReportItem(opportunity)) return false;
  if (isDesignConsultingOnlyForProfile(company, opportunity)) return false;
  if (containsTitleNewsIntent(String(opportunity.title || "")) && !hasOpenTenderOrQuoteIntent(opportunity)) return false;
  const intent = getOpportunityIntent(opportunity);
  if (intent === "confirmed_tender") return hasOpenTenderOrQuoteIntent(opportunity) || isProcurementSource(opportunity);
  if (intent === "early_opportunity") return hasUpcomingTenderIntent(opportunity);
  const quality = normalizeOpportunityQualityStatus(String(opportunity.qualityStatus || ""), opportunity);
  if (quality === "confirmed_tender") return hasOpenTenderOrQuoteIntent(opportunity) || isProcurementSource(opportunity);
  if (quality === "early_signal") return hasUpcomingTenderIntent(opportunity);
  return false;
}

function isDesignConsultingOnlyForProfile(company: CompanyProfile, opportunity: Record<string, unknown>) {
  const text = getOpportunityQualityText(opportunity);
  const hasDesignOnlyTerm = containsAnyNormalizedPhrase(text, [
    "for og verkhönnun",
    "for og verkhonnun",
    "verkhönnun",
    "verkhonnun",
    "forhönnun",
    "forhonnun",
    "verkfræðiráðgjöf",
    "verkfraediradgjof",
    "ráðgjöf",
    "radgjof",
    "útboðsgögn hönnun",
    "utbodsgogn honnun",
  ]);
  const hasGeneralDesignTerm = containsAnyNormalizedPhrase(text, ["hönnun", "honnun"]);
  const hasPhysicalWorkTerm = containsAnyNormalizedPhrase(text, [
    "framkvæmdir",
    "framkvaemdir",
    "lóðarframkvæmdir",
    "lodarframkvaemdir",
    "gatnagerð",
    "gatnagerd",
    "lagnir",
    "jarðvinna",
    "jardvinna",
    "malbikun",
    "bygging",
    "viðhald",
    "vidhald",
    "endurbætur",
    "endurbaetur",
  ]);
  const supervisionOnly = containsAnyNormalizedPhrase(text, ["eftirlit"]) && !hasPhysicalWorkTerm;

  if (!hasDesignOnlyTerm && !(hasGeneralDesignTerm && !hasPhysicalWorkTerm) && !supervisionOnly) return false;

  const profileServiceText = [
    company.industry,
    ...(Array.isArray(company.services) ? company.services : []),
  ].filter(Boolean).join(" ");

  return !containsAnyNormalizedPhrase(profileServiceText, [
    "hönnun",
    "honnun",
    "ráðgjöf",
    "radgjof",
    "verkfræðiráðgjöf",
    "verkfraediradgjof",
    "verkfræði",
    "verkfraedi",
    "eftirlit",
    "verkefnastjórnun",
    "verkefnastjornun",
    "útboðsgögn",
    "utbodsgogn",
    "engineering",
    "design",
    "consulting",
    "project management",
    "supervision",
  ]);
}

function sortCustomerReportMatches(matches: Array<Record<string, unknown>>) {
  return [...matches].sort((a, b) => {
    const rankDiff = getStrictReportRank(a) - getStrictReportRank(b);
    if (rankDiff) return rankDiff;
    const procurementDiff = Number(isProcurementSource(b)) - Number(isProcurementSource(a));
    if (procurementDiff) return procurementDiff;
    return Number(b.matchScore || 0) - Number(a.matchScore || 0);
  });
}

function getStrictReportRank(opportunity: Record<string, unknown>) {
  if (isAlreadyAwardedOrTenderedReportItem(opportunity)) return 99;
  const intent = getOpportunityIntent(opportunity);
  if (intent === "confirmed_tender") return 0;
  if (intent === "early_opportunity") return 1;
  return 10;
}

function getOpportunityIntent(opportunity: Record<string, unknown>) {
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object"
    ? opportunity.rawPayload as Record<string, unknown>
    : {};
  const adminStatus = String(payload.admin_report_status || "").toLowerCase();
  const override = normalizeReportIntent(String(payload.opportunity_intent || payload.intent || ""));
  if (adminStatus === "include") return override || "confirmed_tender";
  if (["hidden", "hide", "noise", "deleted"].includes(adminStatus)) return override || "not_opportunity";
  if (override) return override;
  if (/ted|tenders electronic daily/i.test(String(opportunity.source || ""))) return "confirmed_tender";
  const text = getOpportunityQualityText(opportunity);
  if (containsConfirmedTenderIntent(text)) return "confirmed_tender";
  if (containsTitleNewsIntent(String(opportunity.title || "")) || containsObviousNewsIntent(text)) return "news_context";
  if (hasUpcomingTenderIntent(opportunity)) return "early_opportunity";
  return "market_signal";
}

function normalizeOpportunityQualityStatus(status: string, opportunity: Record<string, unknown>) {
  const value = String(status || "").toLowerCase();
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object" ? opportunity.rawPayload as Record<string, unknown> : {};
  const intentOverride = normalizeReportIntent(String(payload.opportunity_intent || payload.intent || ""));
  if (intentOverride === "confirmed_tender") return "confirmed_tender";
  if (["early_opportunity", "market_signal"].includes(intentOverride)) return "early_signal";
  if (["news_context", "not_opportunity"].includes(intentOverride)) return "needs_review";
  if (/ted|tenders electronic daily/i.test(String(opportunity.source || ""))) return "confirmed_tender";
  if (value === "early_signal" || value === "needs_review" || value === "confirmed_tender") return value;
  const text = getOpportunityQualityText(opportunity);
  if (containsConfirmedTenderIntent(text)) return "confirmed_tender";
  if (hasUpcomingTenderIntent(opportunity)) return "early_signal";
  return "needs_review";
}

function buildReportContent(company: CompanyProfile, matches: Array<Record<string, unknown>>) {
  const now = new Date();
  const periodEnd = now.toISOString().slice(0, 10);
  const start = new Date(now);
  start.setDate(start.getDate() - 7);
  const periodStart = start.toISOString().slice(0, 10);
  const title = `Útboðs- og verkefnayfirlit fyrir ${company.companyName}`;
  const summary = `${matches.length} viðeigandi útboðs- eða verðfyrirspurnaratriði fundust fyrir ${company.companyName}.`;
  const textContent = `${title}\n${periodStart} - ${periodEnd}\n\n${summary}\n\n${matches.map((match, index) => `${index + 1}. ${match.title}`).join("\n")}`;
  const htmlContent = `
    <section>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(summary)}</p>
      ${matches.map((match, index) => `
        <article>
          <h3>${index + 1}. ${escapeHtml(String(match.title || ""))}</h3>
          <p>${escapeHtml(String(match.buyer || "Óþekktur kaupandi"))} · ${escapeHtml(String(match.source || ""))} · ${Number(match.matchScore || 0)}/100</p>
        </article>
      `).join("")}
    </section>
  `;
  return { title, periodStart, periodEnd, summary, textContent, htmlContent };
}

function getLocationMatchCategory(profile: CompanyProfile, opportunity: Record<string, unknown>) {
  if (localLocationMatches(profile, opportunity)) return "local_match";
  const locationText = normalizeLocationText(String(opportunity.location || ""));
  if (locationText.includes("remote") || locationText.includes("online")) return profile.remoteProjects ? "remote_match" : "outside_area_low_confidence";
  if (isNationalOpportunity(opportunity) && getOpportunityCountryCode(opportunity) === "IS") return "national_match";
  if (getOpportunityCountryCode(opportunity) === "IS" && (profile.nationalProjects || profile.willingToTravel)) return "outside_area_possible";
  return "outside_area_low_confidence";
}

function localLocationMatches(profile: CompanyProfile, opportunity: Record<string, unknown>) {
  const selectedLocations = [
    ...profile.locations,
    ...profile.serviceAreas,
    profile.baseLocation,
  ].filter(Boolean).map(normalizeLocationText);
  if (!selectedLocations.length) return false;
  const opportunityLocation = normalizeLocationText(String(opportunity.location || ""));
  if (selectedLocations.includes("all iceland")) return getOpportunityCountryCode(opportunity) === "IS" || opportunityLocation.includes("iceland") || opportunityLocation.includes("island");
  return selectedLocations.some((selected) => selected && (opportunityLocation.includes(selected) || selected.includes(opportunityLocation)));
}

function isNationalOpportunity(opportunity: Record<string, unknown>) {
  const text = normalizeLocationText(`${opportunity.title || ""} ${opportunity.description || ""} ${opportunity.location || ""}`);
  return ["all iceland", "iceland", "island", "national", "nationwide", "landsvist"].some((value) => text.includes(value));
}

function getOpportunityCountryCode(opportunity: Record<string, unknown>) {
  const direct = normalizeCountryCode(opportunity.countryCode);
  if (direct) return direct;
  const location = normalizeLocationText(String(opportunity.location || ""));
  if (location.includes("iceland") || location.includes("island")) return "IS";
  return "";
}

function normalizeCountryCode(value: unknown) {
  const code = String(value || "").trim().toUpperCase();
  if (["IS", "ISL"].includes(code)) return "IS";
  if (["NO", "NOR"].includes(code)) return "NO";
  if (["DK", "DNK"].includes(code)) return "DK";
  if (["SE", "SWE"].includes(code)) return "SE";
  if (["FI", "FIN"].includes(code)) return "FI";
  return "";
}

function categoryMatches(profile: CompanyProfile, opportunity: Record<string, unknown>) {
  const industry = normalizeText(profile.industry);
  const category = normalizeText(String(opportunity.category || ""));
  return category.includes(industry) || industry.includes(category);
}

function valueMatches(profile: CompanyProfile, opportunity: Record<string, unknown>) {
  const estimatedValue = Number(opportunity.estimatedValue || 0);
  if (!estimatedValue) return Boolean(profile.allowUnknownValue);
  if (profile.minProjectValue && estimatedValue < profile.minProjectValue) return false;
  if (profile.maxProjectValue && estimatedValue > profile.maxProjectValue) return false;
  return true;
}

function opportunityText(opportunity: Record<string, unknown>) {
  return normalizeText([
    opportunity.title,
    opportunity.description,
    opportunity.category,
    opportunity.location,
    ...(Array.isArray(opportunity.keywords) ? opportunity.keywords : []),
  ].filter(Boolean).join(" "));
}

function textIncludes(text: string, value: string) {
  const normalized = normalizeText(value);
  return Boolean(normalized && text.includes(normalized));
}

function getOpportunityQualityText(opportunity: Record<string, unknown>) {
  return `${opportunity.title || ""} ${opportunity.description || ""} ${opportunity.category || ""} ${Array.isArray(opportunity.keywords) ? opportunity.keywords.join(" ") : ""}`;
}

function hasOpenTenderOrQuoteIntent(opportunity: Record<string, unknown>) {
  return containsConfirmedTenderIntent(getOpportunityQualityText(opportunity));
}

function hasUpcomingTenderIntent(opportunity: Record<string, unknown>) {
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opportunity), [
    "senn í útboð",
    "senn i utbod",
    "áætlað útboð",
    "aaetlad utbod",
    "áætlað er að bjóða út",
    "aaetlad er ad bjoda ut",
    "fyrirhugað útboð",
    "fyrirhugad utbod",
  ]);
}

function containsConfirmedTenderIntent(text: string) {
  return containsAnyNormalizedPhrase(text, [
    "útboð",
    "utbod",
    "útboðsauglýsing",
    "utbodsauglysing",
    "tilboð",
    "tilbod",
    "óskað eftir tilboðum",
    "oskad eftir tilbodum",
    "verðfyrirspurn",
    "verdfyrirspurn",
    "forval",
    "skilafrestur",
    "útboðsgögn",
    "utbodsgogn",
  ]);
}

function containsTitleNewsIntent(title: string) {
  return containsAnyNormalizedPhrase(title, [
    "lokun",
    "lokað",
    "lokad",
    "lokanir",
    "umferð",
    "umferd",
    "tafir",
    "hjáleið",
    "hjaleid",
    "akstursleið",
    "akstursleid",
    "vegfarendur",
    "frétt",
    "frett",
    "myndband",
    "tekur á sig mynd",
    "tekur a sig mynd",
    "opið aftur",
    "opid aftur",
  ]);
}

function containsObviousNewsIntent(text: string) {
  return containsAnyNormalizedPhrase(text, ["frétt", "frett", "viðburður", "vidburdur", "fundur", "myndband"]);
}

function isAlreadyAwardedOrTenderedReportItem(opportunity: Record<string, unknown>) {
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object" ? opportunity.rawPayload as Record<string, unknown> : {};
  const tenderState = String(payload.tender_state || "").toLowerCase();
  if (["tender_awarded", "awarded", "already_awarded", "already_tendered"].includes(tenderState)) return true;
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opportunity), [
    "lægstbjóðandi",
    "laegstbjodandi",
    "samningur var",
    "samið var",
    "samid var",
    "útboð hefur farið fram",
    "utbod hefur farid fram",
    "útboð var auglýst",
    "utbod var auglyst",
  ]);
}

function isProcurementSource(opportunity: Record<string, unknown>) {
  const source = normalizeText(String(opportunity.source || ""));
  return ["rikiskaup", "utbodsvefur", "ted", "procurement", "tender portal"].some((value) => source.includes(normalizeText(value)));
}

function isDemoTestOpportunity(opportunity: Record<string, unknown>) {
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object"
    ? opportunity.rawPayload as Record<string, unknown>
    : {};
  if (payload.is_demo === true || payload.demo === true) return true;
  const haystack = normalizeText(`${opportunity.source || ""} ${opportunity.sourceType || ""} ${opportunity.title || ""} ${opportunity.externalId || ""}`);
  return ["private lead", "manual test", "grant portal", "demo", "test", "sample", "mock", "fake"].some((value) => haystack.includes(normalizeText(value)));
}

function getOpportunityMissingDeadlineRisk(opportunity: Record<string, unknown>) {
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object" ? opportunity.rawPayload as Record<string, unknown> : {};
  return String(payload.deadline_warning || "Deadline not available in source — verify page.");
}

function getMatchLabel(score: number) {
  if (score >= 85) return "Strong match";
  if (score >= 65) return "Good match";
  if (score >= 45) return "Possible match";
  return "Weak match";
}

function normalizeReportIntent(value: string) {
  const normalized = String(value || "").toLowerCase().trim();
  const aliases: Record<string, string> = {
    confirmed: "confirmed_tender",
    confirmed_tender: "confirmed_tender",
    likely_opportunity: "confirmed_tender",
    verified: "confirmed_tender",
    early_signal: "early_opportunity",
    early_opportunity: "early_opportunity",
    upcoming_tender: "early_opportunity",
    market_signal: "market_signal",
    project_signal: "market_signal",
    needs_review: "market_signal",
    news_context: "news_context",
    news: "news_context",
    noise: "not_opportunity",
    not_opportunity: "not_opportunity",
  };
  return aliases[normalized] || "";
}

function cleanStringArray(values: unknown[]) {
  return uniqueStrings(values.map((value) => String(value || "").trim()).filter(Boolean));
}

function uniqueStrings(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)));
}

function containsAnyNormalizedPhrase(text: string, phrases: string[]) {
  const normalized = normalizeText(text);
  return phrases.map(normalizeText).some((phrase) => phrase && normalized.includes(phrase));
}

function normalizeText(value: unknown) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ð/g, "d")
    .replace(/þ/g, "th")
    .replace(/æ/g, "ae")
    .replace(/ö/g, "o")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function normalizeLocationText(value: unknown) {
  return normalizeText(value);
}

function daysUntilDeadline(value: string) {
  if (!value) return 9999;
  const date = new Date(`${String(value).slice(0, 10)}T23:59:59Z`);
  if (Number.isNaN(date.getTime())) return 9999;
  return Math.ceil((date.getTime() - Date.now()) / 86400000);
}

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function escapeHtml(value: unknown) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;",
  }[char] || char));
}

async function safeJson(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "content-type": "application/json" },
  });
}

function errorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === "object" && error && "message" in error) return String((error as Record<string, unknown>).message);
  return String(error || "Unknown error");
}
