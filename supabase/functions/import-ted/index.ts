import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

type ImportSummary = {
  fetched: number;
  inserted: number;
  updated: number;
  skipped: number;
  matched: number;
  reports_generated: number;
  errors: string[];
  sample?: unknown;
};

type OpportunityInsert = {
  source_id: string;
  external_id: string;
  country_code: string | null;
  title: string;
  buyer: string | null;
  category: string | null;
  type: string;
  description: string | null;
  deadline: string | null;
  published_date: string | null;
  location: string | null;
  estimated_value: number | null;
  currency: string;
  url: string | null;
  cpv_code: string | null;
  requirements: string[];
  keywords: string[];
  difficulty: string;
  status: string;
  raw_payload: Record<string, unknown>;
};

const TED_SEARCH_URL = "https://api.ted.europa.eu/v3/notices/search";
const TED_BASE_URL = "https://ted.europa.eu";
const DEFAULT_LIMIT = 50;
const MIN_MATCH_SCORE = 50;
const IMPORT_MODES = ["iceland", "nordic", "eu-broad"] as const;
type ImportMode = typeof IMPORT_MODES[number];
const ICELAND_COUNTRIES = new Set(["IS", "ISL"]);
const NORDIC_COUNTRIES = new Set(["IS", "ISL", "NO", "NOR", "DK", "DNK", "SE", "SWE", "FI", "FIN"]);
const COUNTRY_ALIASES: Record<string, string> = {
  IS: "IS",
  ISL: "IS",
  ICELAND: "IS",
  ÍSLAND: "IS",
  NO: "NO",
  NOR: "NO",
  NORWAY: "NO",
  DK: "DK",
  DNK: "DK",
  DENMARK: "DK",
  SE: "SE",
  SWE: "SE",
  SWEDEN: "SE",
  FI: "FI",
  FIN: "FI",
  FINLAND: "FI",
  PL: "PL",
  POL: "PL",
  POLAND: "PL",
  DE: "DE",
  DEU: "DE",
  GERMANY: "DE",
  HU: "HU",
  HUN: "HU",
  HUNGARY: "HU",
  BE: "BE",
  BEL: "BE",
  BELGIUM: "BE",
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return json({ ok: true });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const summary: ImportSummary = {
    fetched: 0,
    inserted: 0,
    updated: 0,
    skipped: 0,
    matched: 0,
    reports_generated: 0,
    errors: [],
  };

  try {
    const supabaseUrl = requiredEnv("SUPABASE_URL");
    const anonKey = requiredEnv("SUPABASE_ANON_KEY");
    const serviceRoleKey = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
    const automationSecret = Deno.env.get("AUTOMATION_SECRET") || "";
    const authHeader = req.headers.get("authorization") || "";
    const automationHeader = req.headers.get("x-automation-secret") || "";
    const jwt = authHeader.replace(/^Bearer\s+/i, "").trim();
    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });
    const isAutomation = automationSecret.length > 0 && automationHeader === automationSecret;

    if (!isAutomation) {
      if (!jwt) return json({ ...summary, errors: ["Missing authenticated user token."] }, 401);

      const userClient = createClient(supabaseUrl, anonKey, {
        global: { headers: { Authorization: `Bearer ${jwt}` } },
        auth: { persistSession: false },
      });
      const { data: userData, error: userError } = await userClient.auth.getUser(jwt);
      if (userError || !userData.user) {
        return json({ ...summary, errors: [userError?.message || "Authentication failed."] }, 401);
      }

      const { data: adminUser, error: adminError } = await adminClient
        .from("admin_users")
        .select("user_id")
        .eq("user_id", userData.user.id)
        .maybeSingle();

      if (adminError) throw adminError;
      if (!adminUser?.user_id) {
        return json({ ...summary, errors: ["You do not have access to import TED notices."] }, 403);
      }
    }

    const body = await safeJson(req);
    const limit = clamp(Number(body.limit || DEFAULT_LIMIT), 1, 250);
    const importMode = parseImportMode(body.importMode || body.mode);
    const sourceId = await getOrCreateTedSource(adminClient);
    const query = buildRecentQuery();
    const runId = await startImportRun(adminClient, {
      runType: isAutomation ? "ted-automation" : "ted-manual",
      sourceName: "EU TED",
      importMode,
      query,
    });

    try {
      const tedResponse = await fetchTedNotices(query, limit);

      const rawNotices = getTedResults(tedResponse);
      console.log("TED response keys:", Object.keys(tedResponse || {}));
      console.log("TED first notice:", JSON.stringify(rawNotices[0], null, 2));
      const notices = rawNotices;
      summary.fetched = rawNotices.length;

      const normalized = notices
        .map((notice) => normalizeTedNotice(notice, sourceId, importMode))
        .filter((opportunity): opportunity is OpportunityInsert => {
          if (opportunity) return true;
          summary.skipped += 1;
          return false;
        });

      if (normalized.length) {
        const existingExternalIds = await getExistingExternalIds(
          adminClient,
          sourceId,
          normalized.map((opportunity) => opportunity.external_id),
        );

        const { data: savedRows, error: upsertError } = await adminClient
          .from("opportunities")
          .upsert(normalized, { onConflict: "source_id,external_id" })
          .select("id, external_id");

        if (upsertError) throw upsertError;

        const savedCount = savedRows?.length || 0;
        summary.skipped += normalized.length - savedCount;
        for (const row of savedRows || []) {
          if (existingExternalIds.has(row.external_id)) summary.updated += 1;
          else summary.inserted += 1;
        }

        summary.matched = await refreshMatchesForAllCompanies(adminClient);
        summary.reports_generated = await generateWeeklyReports(adminClient);
      }

      await finalizeImportRun(adminClient, runId, {
        status: "success",
        ...summary,
        query,
        details: {
          importMode,
          automation: isAutomation,
        },
      });
      await updateSourceStatus(adminClient, sourceId, "connected", summary);

      return json({ ...summary, query, importMode, automation: isAutomation, sample: rawNotices[0] || tedResponse });
    } catch (runError) {
      await updateSourceStatus(adminClient, sourceId, "error", summary, errorMessage(runError));
      await finalizeImportRun(adminClient, runId, {
        status: "error",
        ...summary,
        query,
        error: errorMessage(runError),
        details: {
          importMode,
          automation: isAutomation,
        },
      });
      throw runError;
    }
  } catch (error) {
    summary.errors.push(errorMessage(error));
    return json(summary, 500);
  }
});

async function getOrCreateTedSource(supabase: ReturnType<typeof createClient>) {
  const { data: existing, error: selectError } = await supabase
    .from("sources")
    .select("id")
    .eq("name", "EU TED")
    .maybeSingle();

  if (selectError) throw selectError;
  if (existing?.id) return existing.id;

  const { data, error } = await supabase
    .from("sources")
    .insert({
      name: "EU TED",
      source_type: "api",
      base_url: TED_BASE_URL,
      is_active: true,
      notes: "Created by TED API importer",
    })
    .select("id")
    .single();

  if (error) throw error;
  return data.id;
}

async function fetchTedNotices(query: string, limit: number) {
  let fields = [
    "publication-number",
    "notice-title",
    "buyer-name",
    "publication-date",
    "deadline-receipt-request",
    "place-of-performance",
    "buyer-country",
    "place-of-performance-country",
    "buyer-country-sub",
    "classification-cpv",
    "estimated-value",
  ];

  while (fields.length) {
    const tedRequestBody = {
      query,
      fields,
      page: 1,
      limit,
      scope: "ACTIVE",
      checkQuerySyntax: false,
      paginationMode: "ITERATION",
    };

    console.log("FINAL TED REQUEST BODY", JSON.stringify(tedRequestBody));

    const response = await fetch(TED_SEARCH_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(tedRequestBody),
    });

    if (response.ok) return await response.json();

    const text = await response.text();
    const rejectedField = getRejectedTedField(text, fields);
    if (rejectedField) {
      console.warn(`TED rejected field ${rejectedField}; retrying without it.`);
      fields = fields.filter((field) => field !== rejectedField);
      continue;
    }

    throw new Error(`TED Search API failed (${response.status}): ${text.slice(0, 500)}`);
  }

  throw new Error("TED Search API failed: no supported fields remain.");
}

function normalizeTedNotice(notice: Record<string, unknown>, sourceId: string, importMode: ImportMode): OpportunityInsert | null {
  const externalId = firstString(notice, ["publication-number", "publicationNumber", "notice-id", "id"]);
  if (!externalId) return null;

  const title = firstString(notice, ["notice-title", "noticeTitle", "title"]) || `TED notice ${externalId}`;
  const buyer = firstString(notice, ["buyer-name", "buyerName", "organisation-name"]) || "Unknown buyer";
  const cpv = firstString(notice, ["classification-cpv", "main-classification-proc", "cpv"]);
  const deadline = firstDate(notice, ["deadline-receipt-request", "deadline-receipt-tender", "deadline"]);
  const publishedDate = firstDate(notice, ["publication-date", "publicationDate", "dispatch-date"]);
  const description = firstString(notice, ["description-proc", "description-lot", "description", "notice-summary"]);
  const location = firstString(notice, ["place-of-performance", "place-of-performance-city", "buyer-city"]);
  const estimatedValue = firstNumber(notice, ["estimated-value", "estimated-value-proc", "estimated-value-lot", "value"]);
  const countryCode = detectCountryCode(notice, title, location);
  const allowedCountries = importMode === "iceland" ? ICELAND_COUNTRIES : NORDIC_COUNTRIES;
  if (importMode !== "eu-broad" && (!countryCode || !allowedCountries.has(countryCode))) return null;
  const isEuBroadTest = importMode === "eu-broad";
  const isDashboardVisible = !isEuBroadTest && Boolean(countryCode && NORDIC_COUNTRIES.has(countryCode));
  const cleanedDescription = description && description.trim() !== title.trim()
    ? description
    : `Imported from TED notice ${externalId}`;

  return {
    source_id: sourceId,
    external_id: externalId,
    country_code: countryCode,
    title,
    buyer,
    category: "Public procurement",
    type: "tender",
    description: cleanedDescription,
    deadline,
    published_date: publishedDate,
    location: location || "Unknown",
    estimated_value: estimatedValue,
    currency: "EUR",
    url: `${TED_BASE_URL}/en/notice/-/detail/${externalId}`,
    cpv_code: cpv,
    requirements: [],
    keywords: uniqueStrings([
      "original-language",
      `ted-import-${importMode}`,
      isEuBroadTest ? "eu-broad-test" : null,
      countryCode,
      ...extractKeywordsFromText(`${title} ${cleanedDescription || ""}`),
    ]),
    difficulty: "medium",
    status: isDashboardVisible ? "open" : "hidden",
    raw_payload: {
      ...notice,
      verk_radar_import_mode: importMode,
      verk_radar_broad_test: isEuBroadTest,
    },
  };
}

async function getExistingExternalIds(supabase: ReturnType<typeof createClient>, sourceId: string, externalIds: string[]) {
  if (!externalIds.length) return new Set<string>();

  const { data, error } = await supabase
    .from("opportunities")
    .select("external_id")
    .eq("source_id", sourceId)
    .in("external_id", externalIds);

  if (error) throw error;
  return new Set((data || []).map((row) => row.external_id));
}

function buildRecentQuery() {
  return `publication-date >= ${daysAgoYyyymmdd(30)}`;
}

function parseImportMode(value: unknown): ImportMode {
  const mode = String(value || "nordic").toLowerCase();
  return IMPORT_MODES.includes(mode as ImportMode) ? (mode as ImportMode) : "nordic";
}

function daysAgoYyyymmdd(days: number) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().slice(0, 10).replaceAll("-", "");
}

function getTedResults(response: Record<string, unknown>): Record<string, unknown>[] {
  for (const candidate of [response.notices, response.results, response.content, response.data, response.items]) {
    if (Array.isArray(candidate)) return candidate as Record<string, unknown>[];
  }
  return [];
}

function getRejectedTedField(message: string, fields: string[]) {
  return fields.find((field) => message.includes(`'${field}'`) || message.includes(`"${field}"`)) || null;
}

async function startImportRun(
  supabase: ReturnType<typeof createClient>,
  run: {
    runType: string;
    sourceName: string;
    importMode: ImportMode;
    query: string;
  },
) {
  const { data, error } = await supabase
    .from("import_runs")
    .insert({
      run_type: run.runType,
      source_name: run.sourceName,
      import_mode: run.importMode,
      query: run.query,
      status: "running",
      started_at: new Date().toISOString(),
    })
    .select("id")
    .single();

  if (error) throw error;
  return data.id as string;
}

async function finalizeImportRun(
  supabase: ReturnType<typeof createClient>,
  runId: string,
  payload: {
    status: string;
    fetched?: number;
    inserted?: number;
    updated?: number;
    skipped?: number;
    matched?: number;
    reports_generated?: number;
    error?: string | null;
    query?: string;
    details?: Record<string, unknown>;
  },
) {
  const { error } = await supabase
    .from("import_runs")
    .update({
      status: payload.status,
      fetched: payload.fetched || 0,
      inserted: payload.inserted || 0,
      updated: payload.updated || 0,
      skipped: payload.skipped || 0,
      matched: payload.matched || 0,
      reports_generated: payload.reports_generated || 0,
      error: payload.error || null,
      query: payload.query || null,
      details: payload.details || {},
      finished_at: new Date().toISOString(),
    })
    .eq("id", runId);

  if (error) throw error;
}

async function updateSourceStatus(
  supabase: ReturnType<typeof createClient>,
  sourceId: string,
  status: string,
  summary: ImportSummary,
  lastError: string | null = null,
) {
  const { count, error: countError } = await supabase
    .from("opportunities")
    .select("id", { count: "exact", head: true })
    .eq("source_id", sourceId)
    .eq("status", "open");

  if (countError) {
    console.error("Failed to count active source opportunities:", countError);
    return;
  }

  const now = new Date().toISOString();
  const { error } = await supabase
    .from("source_status")
    .upsert({
      source_id: sourceId,
      status,
      last_checked_at: now,
      last_success_at: status === "connected" ? now : null,
      last_error: lastError,
      fetched_count: summary.fetched || 0,
      inserted_count: summary.inserted || 0,
      updated_count: summary.updated || 0,
      active_opportunities_count: count || 0,
      updated_at: now,
    }, { onConflict: "source_id" });

  if (error) console.error("Failed to update source status:", error);
}

async function refreshMatchesForAllCompanies(supabase: ReturnType<typeof createClient>) {
  const [{ data: companies, error: companiesError }, { data: opportunities, error: opportunitiesError }] = await Promise.all([
    supabase.from("companies").select("*"),
    supabase.from("opportunities").select("*, sources(name)").eq("status", "open"),
  ]);

  if (companiesError) throw companiesError;
  if (opportunitiesError) throw opportunitiesError;

  const visibleOpportunities = (opportunities || [])
    .map((opportunity) => ({
      ...opportunity,
      country_code: opportunity.country_code || null,
    }))
    .filter((opportunity) => isVisibleOpportunity(opportunity, (opportunity.sources as Record<string, unknown> | undefined)?.name || ""));

  let totalMatches = 0;
  for (const company of companies || []) {
    const [servicesResult, locationsResult, keywordsResult] = await Promise.all([
      supabase.from("company_services").select("service").eq("company_id", company.id),
      supabase.from("company_locations").select("location").eq("company_id", company.id),
      supabase.from("company_keywords").select("keyword, type").eq("company_id", company.id),
    ]);

    if (servicesResult.error) throw servicesResult.error;
    if (locationsResult.error) throw locationsResult.error;
    if (keywordsResult.error) throw keywordsResult.error;

    const profile = mapCompanyProfile(
      company,
      servicesResult.data || [],
      locationsResult.data || [],
      keywordsResult.data || [],
    );

    const rows = visibleOpportunities
      .map((opportunity) => calculateMatch(profile, opportunity))
      .filter((match) => match.matchScore >= MIN_MATCH_SCORE)
      .map((match) => ({
        company_id: company.id,
        opportunity_id: match.id,
        match_score: match.matchScore,
        match_label: match.matchLabel,
        match_reasons: match.matchReasons,
        risks: match.risks,
        next_steps: match.nextSteps,
        calculated_at: new Date().toISOString(),
      }));

    const { error: deleteError } = await supabase
      .from("opportunity_matches")
      .delete()
      .eq("company_id", company.id);
    if (deleteError) throw deleteError;

    if (rows.length) {
      const { error: insertError } = await supabase
        .from("opportunity_matches")
        .insert(rows);
      if (insertError) throw insertError;
    }

    totalMatches += rows.length;
  }

  return totalMatches;
}

async function generateWeeklyReports(supabase: ReturnType<typeof createClient>) {
  const today = new Date();
  const start = new Date(today);
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
  start.setHours(0, 0, 0, 0);
  const periodStart = start.toISOString().slice(0, 10);
  const periodEndDate = new Date(start);
  periodEndDate.setDate(periodEndDate.getDate() + 6);
  const periodEnd = periodEndDate.toISOString().slice(0, 10);

  const [{ data: companies, error: companiesError }, { data: existingReports, error: reportsError }] = await Promise.all([
    supabase.from("companies").select("*"),
    supabase.from("reports").select("id, company_id, period_start"),
  ]);

  if (companiesError) throw companiesError;
  if (reportsError) throw reportsError;

  const existingByCompany = new Set(
    (existingReports || [])
      .filter((report) => report.period_start === periodStart)
      .map((report) => report.company_id),
  );

  let createdCount = 0;
  for (const company of companies || []) {
    if (existingByCompany.has(company.id)) continue;

    const [servicesResult, locationsResult, keywordsResult, matchesResult] = await Promise.all([
      supabase.from("company_services").select("service").eq("company_id", company.id),
      supabase.from("company_locations").select("location").eq("company_id", company.id),
      supabase.from("company_keywords").select("keyword, type").eq("company_id", company.id),
      supabase
        .from("opportunity_matches")
        .select("match_score, opportunities(*)")
        .eq("company_id", company.id)
        .gte("match_score", MIN_MATCH_SCORE)
        .order("match_score", { ascending: false })
        .limit(5),
    ]);

    if (servicesResult.error) throw servicesResult.error;
    if (locationsResult.error) throw locationsResult.error;
    if (keywordsResult.error) throw keywordsResult.error;
    if (matchesResult.error) throw matchesResult.error;

    const matches = (matchesResult.data || [])
      .filter((row) => row.opportunities)
      .map((row) => {
        const opportunity = row.opportunities as Record<string, unknown>;
        return {
          id: String(opportunity.id || ""),
          title: String(opportunity.title || "Untitled opportunity"),
          buyer: String(opportunity.buyer || "Unknown buyer"),
          deadline: String(opportunity.deadline || ""),
          location: String(opportunity.location || "Unknown"),
          estimatedValue: opportunity.estimated_value ? Number(opportunity.estimated_value) : null,
          currency: String(opportunity.currency || "EUR"),
          url: String(opportunity.url || ""),
          category: String(opportunity.category || "Public procurement"),
          type: String(opportunity.type || "tender"),
          publishedDate: String(opportunity.published_date || ""),
          source: String((opportunity.sources as Record<string, unknown> | undefined)?.name || "EU TED"),
          matchScore: Number(row.match_score || 0),
          matchLabel: getMatchLabel(Number(row.match_score || 0)),
          matchReasons: [],
          risks: [],
          nextSteps: [],
          description: String(opportunity.description || ""),
          requirements: Array.isArray(opportunity.requirements) ? opportunity.requirements as string[] : [],
          keywords: Array.isArray(opportunity.keywords) ? opportunity.keywords as string[] : [],
        };
      })
      .filter((match) => match.id);

    if (!matches.length) continue;

    const profile = mapCompanyProfile(
      company,
      servicesResult.data || [],
      locationsResult.data || [],
      keywordsResult.data || [],
    );
    const report = buildWeeklyReport(profile, matches, periodStart, periodEnd);

    const { data: createdReport, error: reportError } = await supabase
      .from("reports")
      .insert({
        company_id: company.id,
        title: report.title,
        period_start: report.periodStart,
        period_end: report.periodEnd,
        summary: report.summary,
        text_content: report.textContent,
        html_content: report.htmlContent,
        status: "draft",
      })
      .select("id")
      .single();

    if (reportError) throw reportError;

    const itemRows = matches.map((match, index) => ({
      report_id: createdReport.id,
      opportunity_id: match.id,
      match_score: match.matchScore,
      sort_order: index + 1,
    }));

    if (itemRows.length) {
      const { error: itemsError } = await supabase.from("report_items").insert(itemRows);
      if (itemsError) throw itemsError;
    }

    createdCount += 1;
  }

  return createdCount;
}

function buildWeeklyReport(profile: Record<string, unknown>, matches: Array<Record<string, unknown>>, periodStart: string, periodEnd: string) {
  const companyName = String(profile.companyName || "Your company");
  const title = `Weekly Opportunity Report for ${companyName}`;
  const summary = `We found ${matches.length} relevant opportunities this week.`;
  const textContent = `Weekly Opportunity Report for ${companyName}\n\n${summary}\n\n${matches.map((match, index) => `${index + 1}. ${String(match.title || "")}`).join("\n")}`;
  const htmlContent = `
    <h2>${escapeHtml(title)}</h2>
    <p>${escapeHtml(summary)}</p>
    ${matches.map((match, index) => `
      <article>
        <h3>${index + 1}. ${escapeHtml(String(match.title || ""))}</h3>
        <p>${escapeHtml(String(match.buyer || "Unknown buyer"))} · ${escapeHtml(String(match.location || "Unknown"))}</p>
        <p>Match ${Number(match.matchScore || 0)}%</p>
      </article>
    `).join("")}
  `;

  return {
    title,
    periodStart,
    periodEnd,
    summary,
    textContent,
    htmlContent,
  };
}

function mapCompanyProfile(
  company: Record<string, unknown>,
  services: Array<Record<string, unknown>>,
  locations: Array<Record<string, unknown>>,
  keywords: Array<Record<string, unknown>>,
) {
  return {
    companyName: company.company_name || "",
    contactEmail: company.contact_email || "",
    industry: company.industry || "",
    services: services.map((row) => String(row.service || "")).filter(Boolean),
    locations: locations.map((row) => String(row.location || "")).filter(Boolean),
    baseLocation: company.base_location || "",
    serviceAreas: Array.isArray(company.service_areas) ? company.service_areas : [],
    willingToTravel: Boolean(company.willing_to_travel),
    nationalProjects: Boolean(company.national_projects),
    remoteProjects: Boolean(company.remote_projects),
    minimumProjectValueForTravel: company.minimum_project_value_for_travel ? Number(company.minimum_project_value_for_travel) : "",
    includeKeywords: keywords.filter((row) => row.type === "include").map((row) => String(row.keyword || "")).filter(Boolean),
    excludeKeywords: keywords.filter((row) => row.type === "exclude").map((row) => String(row.keyword || "")).filter(Boolean),
    minProjectValue: company.min_project_value ? Number(company.min_project_value) : "",
    maxProjectValue: company.max_project_value ? Number(company.max_project_value) : "",
    allowUnknownValue: Boolean(company.allow_unknown_value),
  };
}

function calculateMatch(profile: Record<string, unknown>, opportunity: Record<string, unknown>) {
  const text = [
    opportunity.title,
    opportunity.description,
    opportunity.category,
    opportunity.location,
    ...(Array.isArray(opportunity.keywords) ? opportunity.keywords : []),
  ].join(" ").toLowerCase();

  let score = 0;
  const reasons: string[] = [];
  const risks: string[] = [];

  const industry = String(profile.industry || "").toLowerCase();
  const category = String(opportunity.category || "").toLowerCase();
  if (industry && category && (category.includes(industry) || industry.includes(category))) {
    score += 35;
    reasons.push(`Matches your ${profile.industry} industry`);
  }

  for (const service of asArray(profile.services)) {
    if (text.includes(service.toLowerCase())) {
      score += 10;
      reasons.push(`Mentions your service: ${service}`);
    }
  }

  for (const keyword of asArray(profile.includeKeywords)) {
    if (text.includes(keyword.toLowerCase())) {
      score += 8;
      reasons.push(`Contains your keyword: ${keyword}`);
    }
  }

  const locationCategory = getLocationMatchCategory(profile, opportunity);
  const locationReason = locationMatchReason(locationCategory);
  if (locationCategory === "local_match") {
    score += 22;
    reasons.push(locationReason);
  } else if (locationCategory === "national_match") {
    score += 16;
    reasons.push(locationReason);
  } else if (locationCategory === "remote_match") {
    score += 14;
    reasons.push(locationReason);
  } else if (locationCategory === "outside_area_possible") {
    const travelMinimum = Number(profile.minimumProjectValueForTravel || 0);
    const estimatedValueForTravel = Number(opportunity.estimated_value || opportunity.estimatedValue || 0);
    const belowTravelMinimum = travelMinimum && estimatedValueForTravel && estimatedValueForTravel < travelMinimum;
    score += belowTravelMinimum ? -4 : 4;
    reasons.push(locationReason);
    risks.push(belowTravelMinimum
      ? "Outside base area and below your preferred travel project value"
      : "Check travel cost, project size and delivery capacity");
  } else {
    score -= 8;
    risks.push("Outside selected area; location match is low confidence");
  }

  const estimatedValue = Number(opportunity.estimated_value || opportunity.estimatedValue || 0);
  const min = Number(profile.minProjectValue || 0);
  const max = Number(profile.maxProjectValue || 0);
  if (!estimatedValue) {
    if (profile.allowUnknownValue === false) risks.push("Project value is unknown");
  } else if ((min && estimatedValue < min) || (max && estimatedValue > max)) {
    score -= 25;
    risks.push("Estimated project value is outside your preferred range");
  } else {
    score += 10;
    reasons.push("Project value is inside your preferred range");
  }

  const deadline = String(opportunity.deadline || "");
  if (deadline) {
    const days = daysUntilDeadline(deadline);
    if (days >= 0 && days <= 30) {
      score += 8;
      reasons.push("Deadline is coming up soon");
    }
    if (days < 0) {
      score -= 50;
      risks.push("Deadline has passed");
    }
  }

  for (const keyword of asArray(profile.excludeKeywords)) {
    if (text.includes(keyword.toLowerCase())) {
      score -= 18;
      risks.push(`Contains exclude keyword: ${keyword}`);
    }
  }

  score = Math.max(0, Math.min(100, Math.round(score)));

  return {
    ...opportunity,
    matchScore: score,
    matchLabel: getMatchLabel(score),
    matchReasons: reasons.slice(0, 5),
    risks: [...new Set(risks)].slice(0, 4),
    nextSteps: [
      "Open the source documents",
      "Confirm mandatory requirements",
      "Check capacity and profitability",
      "Prepare questions before the deadline",
    ],
  };
}

function selectedProfileLocations(profile: Record<string, unknown>) {
  return [
    ...asArray(profile.locations),
    ...asArray(profile.serviceAreas),
    String(profile.baseLocation || ""),
  ].filter(Boolean);
}

function isNationalOpportunity(opportunity: Record<string, unknown>) {
  const location = normalizeText(String(opportunity.location || ""));
  const text = normalizeText(`${String(opportunity.title || "")} ${String(opportunity.description || "")} ${String(opportunity.location || "")}`);
  if (["all iceland", "iceland", "island"].some((value) => location.includes(value))) return true;
  return ["national", "landsvist", "nationwide"].some((value) => text.includes(value));
}

function localLocationMatches(profile: Record<string, unknown>, opportunity: Record<string, unknown>) {
  const selectedLocations = selectedProfileLocations(profile);
  if (!selectedLocations.length) return false;

  const country = getOpportunityCountryCode(opportunity);
  const locationText = normalizeText(String(opportunity.location || ""));

  if (selectedLocations.some((location) => normalizeText(location) === "all iceland")) {
    return country === "IS" || locationText.includes("iceland") || locationText.includes("island");
  }

  return selectedLocations.some((location) => {
    const selected = normalizeText(location);
    if (!selected) return false;
    if (selected === "remote online") return locationText.includes("remote") || locationText.includes("online");
    if (selected === "reykjavik") {
      return country === "IS" && (locationText.includes("reykjavik") || locationText.includes("capital area") || locationText.includes("hofudborgarsvaedid"));
    }
    if (country === "IS" && (selected.includes("iceland") || selected.includes("island"))) return true;
    return locationText.includes(selected);
  });
}

function getLocationMatchCategory(profile: Record<string, unknown>, opportunity: Record<string, unknown>) {
  if (localLocationMatches(profile, opportunity)) return "local_match";
  const locationText = normalizeText(String(opportunity.location || ""));
  if (locationText.includes("remote") || locationText.includes("online")) {
    return profile.remoteProjects ? "remote_match" : "outside_area_low_confidence";
  }
  if (isNationalOpportunity(opportunity) && getOpportunityCountryCode(opportunity) === "IS") return "national_match";
  if (getOpportunityCountryCode(opportunity) === "IS" && (profile.nationalProjects || profile.willingToTravel)) return "outside_area_possible";
  return "outside_area_low_confidence";
}

function locationMatchReason(category: string) {
  if (category === "local_match") return "Local match";
  if (category === "national_match") return "National opportunity";
  if (category === "remote_match") return "Remote opportunity";
  if (category === "outside_area_possible") return "Outside base area but travel allowed";
  return "Outside selected area; low-confidence location match";
}

function getOpportunityCountryCode(opportunity: Record<string, unknown>) {
  const direct = normalizeCountryCode(opportunity.country_code || opportunity.countryCode);
  if (direct) return direct;

  const location = normalizeText(String(opportunity.location || ""));
  if (
    location.includes("iceland") ||
    location.includes("island") ||
    location.includes("reykjavik") ||
    location.includes("capital area") ||
    location.includes("hofudborgarsvaedid") ||
    location.includes("east iceland") ||
    location.includes("west iceland") ||
    location.includes("north iceland") ||
    location.includes("south iceland") ||
    location.includes("sudurnes")
  ) return "IS";
  if (location.includes("norway")) return "NO";
  if (location.includes("denmark")) return "DK";
  if (location.includes("sweden")) return "SE";
  if (location.includes("finland")) return "FI";
  return "";
}

function isVisibleOpportunity(opportunity: Record<string, unknown>, sourceName = "") {
  const status = String(opportunity.status || "").toLowerCase();
  const url = String(opportunity.url || "").trim();
  const deadline = String(opportunity.deadline || "");
  if (status !== "open") return false;
  if (!url || url === "#") return false;
  if (deadline && daysUntilDeadline(deadline) < 0) return false;
  if (!/ted/i.test(String(sourceName || ""))) return true;
  const country = getOpportunityCountryCode(opportunity);
  return ["IS", "NO", "DK", "SE", "FI"].includes(country);
}

function daysUntilDeadline(dateString: string) {
  const today = new Date();
  const d = new Date(`${dateString}T00:00:00`);
  const ms = d - new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

function normalizeText(value: string) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/æ/g, "ae")
    .replace(/[ðþ]/g, (char) => char === "ð" ? "d" : "th")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function asArray(value: unknown) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed.map(String).filter(Boolean);
    } catch {
      return value.split(",").map((item) => item.trim()).filter(Boolean);
    }
  }
  return [];
}

function getMatchLabel(score: number) {
  if (score >= 85) return "Strong match";
  if (score >= 65) return "Good match";
  if (score >= 45) return "Possible match";
  return "Weak match";
}

function detectCountryCode(notice: Record<string, unknown>, title: string, location: string | null) {
  const candidates = [
    ...allStrings(notice["buyer-country"]),
    ...allStrings(notice["place-of-performance-country"]),
    ...allStrings(notice["buyer-country-sub"]),
    ...allStrings(notice["place-of-performance"]),
    location,
    countryPrefixFromTitle(title),
  ];

  for (const candidate of candidates) {
    const code = normalizeCountryCode(candidate);
    if (code) return code;
  }

  return null;
}

function countryPrefixFromTitle(title: string) {
  return title.split(/[–-]/)[0]?.trim() || "";
}

function normalizeCountryCode(value: unknown) {
  const text = String(value || "").trim();
  if (!text) return null;
  const upper = text.toUpperCase();
  if (COUNTRY_ALIASES[upper]) return COUNTRY_ALIASES[upper];

  const regionPrefix = upper.match(/^([A-Z]{2})[A-Z0-9]{2,4}$/);
  if (regionPrefix) return COUNTRY_ALIASES[regionPrefix[1]] || regionPrefix[1];

  return null;
}

function firstString(record: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    const values = allStrings(record[key]);
    if (values[0]) return values[0];
  }
  return null;
}

function firstDate(record: Record<string, unknown>, keys: string[]) {
  const value = firstString(record, keys);
  if (!value) return null;
  const compact = value.match(/^(\d{4})(\d{2})(\d{2})$/);
  if (compact) return `${compact[1]}-${compact[2]}-${compact[3]}`;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString().slice(0, 10);
}

function firstNumber(record: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    const value = firstString(record, [key]);
    if (!value) continue;
    const number = Number(String(value).replace(/[^0-9.-]/g, ""));
    if (Number.isFinite(number)) return Math.round(number);
  }
  return null;
}

function allStrings(value: unknown): string[] {
  if (value == null) return [];
  if (Array.isArray(value)) return value.flatMap(allStrings);
  if (typeof value === "object") {
    const object = value as Record<string, unknown>;
    return allStrings(object.value || object.text || object.eng || object.en || Object.values(object)[0]);
  }
  return [String(value).trim()].filter(Boolean);
}

function uniqueStrings(values: Array<string | null | undefined>) {
  return [...new Set(values.filter((value): value is string => Boolean(value && value.trim())).map((value) => value.trim()))];
}

function extractKeywordsFromText(value: string) {
  const stopWords = new Set([
    "from",
    "with",
    "this",
    "that",
    "notice",
    "tender",
    "ted",
    "and",
    "the",
    "for",
  ]);

  return uniqueStrings(value
    .toLowerCase()
    .split(/[^a-z0-9áéíóúýþæöð]+/i)
    .filter((word) => word.length > 3 && !stopWords.has(word))).slice(0, 12);
}

async function safeJson(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { ...corsHeaders, "content-type": "application/json" },
  });
}

function clamp(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return DEFAULT_LIMIT;
  return Math.min(max, Math.max(min, Math.round(value)));
}

function requiredEnv(name: string) {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing ${name}.`);
  return value;
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}

function escapeHtml(value: string) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
