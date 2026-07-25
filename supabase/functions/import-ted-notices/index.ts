import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

type ImportStatus = {
  fetched: number;
  inserted: number;
  updated: number;
  skipped: number;
  matched: number;
  errors: string[];
};

type Opportunity = {
  source_id: string;
  external_id: string;
  title: string;
  buyer: string | null;
  category: string | null;
  type: string | null;
  description: string | null;
  deadline: string | null;
  published_date: string | null;
  location: string | null;
  estimated_value: number | null;
  currency: string | null;
  url: string | null;
  cpv_code: string | null;
  requirements: string[];
  keywords: string[];
  difficulty: string;
  status: string;
  raw_payload: Record<string, unknown>;
};

const TED_SEARCH_URL = "https://api.ted.europa.eu/v3/notices/search";
const DEFAULT_LIMIT = 50;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-automation-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const status: ImportStatus = {
    fetched: 0,
    inserted: 0,
    updated: 0,
    skipped: 0,
    matched: 0,
    errors: [],
  };

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !anonKey || !serviceRoleKey) {
      return json({ ...status, errors: ["Missing required Supabase environment variables."] }, 500);
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

    const automationSecret = Deno.env.get("AUTOMATION_SECRET") || "";
    const suppliedAutomationSecret = req.headers.get("x-automation-secret") || "";
    const isAutomation = automationSecret.length > 0
      && constantTimeEqual(suppliedAutomationSecret, automationSecret);

    if (!isAutomation) {
      const jwt = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "").trim();
      if (!jwt) return json({ ...status, errors: ["Authentication required."] }, 401);

      const userClient = createClient(supabaseUrl, anonKey, {
        global: { headers: { Authorization: `Bearer ${jwt}` } },
        auth: { persistSession: false },
      });
      const { data: userData, error: userError } = await userClient.auth.getUser(jwt);
      if (userError || !userData.user) {
        return json({ ...status, errors: ["Authentication failed."] }, 401);
      }

      const { data: adminUser, error: adminError } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", userData.user.id)
        .maybeSingle();
      if (adminError) throw adminError;
      if (!adminUser) return json({ ...status, errors: ["Administrator access required."] }, 403);
    }

    const body = await safeJson(req);
    const limit = clamp(Number(body.limit || DEFAULT_LIMIT), 1, 250);
    const tedQuery = buildRecentTedQuery();

    const source = await ensureTedSource(supabase);
    const tedResponse = await fetchTedNotices(tedQuery, limit);

    const rawNotices = getTedResults(tedResponse);
    const notices = rawNotices;

    status.fetched = rawNotices.length;

    const normalized = notices
      .map((notice) => normalizeTedNotice(notice, source.id))
      .filter((opportunity): opportunity is Opportunity => {
        if (!opportunity) {
          status.skipped += 1;
          return false;
        }
        return true;
      });

    const existingExternalIds = await getExistingExternalIds(
      supabase,
      source.id,
      normalized.map((opportunity) => opportunity.external_id),
    );

    if (normalized.length) {
      const { data, error } = await supabase
        .from("opportunities")
        .upsert(normalized, { onConflict: "source_id,external_id" })
        .select("id, external_id");

      if (error) throw error;

      for (const row of data || []) {
        if (existingExternalIds.has(row.external_id)) status.updated += 1;
        else status.inserted += 1;
      }

      status.skipped += normalized.length - (data?.length || 0);

      const opportunityIds = (data || []).map((row) => row.id);
      status.matched = await refreshMatches(supabase, opportunityIds);
    }

    return json({ ...status, query: tedQuery });
  } catch (error) {
    status.errors.push(error instanceof Error ? error.message : String(error));
    return json(status, 500);
  }
});

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

function constantTimeEqual(left: string, right: string) {
  const leftBytes = new TextEncoder().encode(left);
  const rightBytes = new TextEncoder().encode(right);
  const length = Math.max(leftBytes.length, rightBytes.length);
  let difference = leftBytes.length ^ rightBytes.length;
  for (let index = 0; index < length; index += 1) {
    difference |= (leftBytes[index] || 0) ^ (rightBytes[index] || 0);
  }
  return difference === 0;
}

function buildRecentTedQuery() {
  const since = new Date();
  since.setDate(since.getDate() - 30);
  const yyyymmdd = since.toISOString().slice(0, 10).replaceAll("-", "");
  return `publication-date >= ${yyyymmdd}`;
}

async function ensureTedSource(supabase: ReturnType<typeof createClient>) {
  const name = "Tenders Electronic Daily";
  const { data: existing, error: selectError } = await supabase
    .from("sources")
    .select("id")
    .eq("name", name)
    .maybeSingle();

  if (selectError) throw selectError;
  if (existing?.id) return existing;

  const { data, error } = await supabase
    .from("sources")
    .insert({
      name,
      source_type: "ted",
      base_url: "https://ted.europa.eu",
      is_active: true,
      notes: "Created by TED importer",
    })
    .select("id")
    .single();

  if (error) throw error;
  return data;
}

async function fetchTedNotices(query: string, limit: number) {
  let fields = [
    "publication-number",
    "notice-title",
    "buyer-name",
    "publication-date",
    "deadline-receipt-request",
    "place-of-performance",
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
      paginationMode: "PAGE_NUMBER",
    };

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

function getTedResults(response: Record<string, unknown>): Record<string, unknown>[] {
  const candidates = [
    response.notices,
    response.results,
    response.content,
    response.data,
    response.items,
  ];

  for (const candidate of candidates) {
    if (Array.isArray(candidate)) return candidate as Record<string, unknown>[];
  }

  return [];
}

function getRejectedTedField(message: string, fields: string[]) {
  return fields.find((field) => message.includes(`'${field}'`) || message.includes(`"${field}"`)) || null;
}

function normalizeTedNotice(notice: Record<string, unknown>, sourceId: string): Opportunity | null {
  const externalId = firstString(notice, ["publication-number", "publicationNumber", "notice-id", "id"]);
  if (!externalId) return null;

  const title = firstString(notice, ["notice-title", "noticeTitle", "title"]) || `TED notice ${externalId}`;
  const cpv = firstString(notice, ["classification-cpv", "main-classification-proc", "cpv"]);
  const description = firstString(notice, ["description-proc", "description-lot", "description", "notice-summary"]);
  const buyer = firstString(notice, ["buyer-name", "buyerName", "organisation-name"]) || "Unknown buyer";
  const deadline = firstDate(notice, ["deadline-receipt-request", "deadline-receipt-tender", "deadline"]);
  const publishedDate = firstDate(notice, ["publication-date", "publicationDate", "dispatch-date"]);
  const estimatedValue = firstNumber(notice, ["estimated-value", "estimated-value-proc", "estimated-value-lot", "value"]);
  const location = firstString(notice, ["place-of-performance", "place-of-performance-city", "buyer-city"]);

  return {
    source_id: sourceId,
    external_id: externalId,
    title,
    buyer,
    category: "Public procurement",
    type: "tender",
    description: description || title || `Imported from TED notice ${externalId}`,
    deadline,
    published_date: publishedDate,
    location: location || "Unknown",
    estimated_value: estimatedValue,
    currency: "EUR",
    url: `https://ted.europa.eu/en/notice/-/detail/${externalId}`,
    cpv_code: cpv,
    requirements: [],
    keywords: extractKeywordsFromText(`${title} ${description || ""}`),
    difficulty: "medium",
    status: "open",
    raw_payload: notice,
  };
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
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    const compact = value.match(/^(\d{4})(\d{2})(\d{2})$/);
    if (!compact) return null;
    return `${compact[1]}-${compact[2]}-${compact[3]}`;
  }
  return parsed.toISOString().slice(0, 10);
}

function firstNumber(record: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    const value = firstString(record, [key]);
    if (!value) continue;
    const number = Number(String(value).replace(/[^0-9.-]/g, ""));
    if (Number.isFinite(number)) return number;
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

async function refreshMatches(supabase: ReturnType<typeof createClient>, opportunityIds: string[]) {
  if (!opportunityIds.length) return 0;

  const [{ data: companies, error: companiesError }, { data: opportunities, error: opportunitiesError }] = await Promise.all([
    supabase.from("companies").select("*"),
    supabase.from("opportunities").select("*").in("id", opportunityIds),
  ]);

  if (companiesError) throw companiesError;
  if (opportunitiesError) throw opportunitiesError;

  const visibleOpportunities = (opportunities || []).filter((opportunity) =>
    isVisibleOpportunity(opportunity) && isCustomerMatchEligibleOpportunity(opportunity)
  );

  const ineligibleOpportunityIds = (opportunities || [])
    .filter((opportunity) => !visibleOpportunities.some((visible) => visible.id === opportunity.id))
    .map((opportunity) => opportunity.id)
    .filter(Boolean);

  if (ineligibleOpportunityIds.length) {
    const { error: deleteError } = await supabase
      .from("opportunity_matches")
      .delete()
      .in("opportunity_id", ineligibleOpportunityIds);
    if (deleteError) throw deleteError;
  }

  const rows = [];
  for (const company of companies || []) {
    for (const opportunity of visibleOpportunities) {
      const match = calculateMatch(company, opportunity);
      rows.push({
        company_id: company.id,
        opportunity_id: opportunity.id,
        match_score: match.matchScore,
        match_label: match.matchLabel,
        match_reasons: match.matchReasons,
        risks: match.risks,
        next_steps: match.nextSteps,
        updated_at: new Date().toISOString(),
      });
    }
  }

  if (!rows.length) return 0;

  const { error } = await supabase
    .from("opportunity_matches")
    .upsert(rows, { onConflict: "company_id,opportunity_id" });

  if (error) throw error;
  return rows.length;
}

function isVisibleOpportunity(opportunity: Record<string, unknown>) {
  const status = String(opportunity.status || "").toLowerCase();
  const url = String(opportunity.url || "").trim();
  const deadline = String(opportunity.deadline || "");
  if (status && status !== "open") return false;
  if (!url || url === "#") return false;
  if (deadline && daysUntil(deadline) < 0) return false;
  return true;
}

function isCustomerMatchEligibleOpportunity(opportunity: Record<string, unknown>) {
  const payload = opportunity.raw_payload && typeof opportunity.raw_payload === "object"
    ? opportunity.raw_payload as Record<string, unknown>
    : {};
  const adminStatus = String(payload.admin_report_status || "").toLowerCase();
  if (adminStatus === "include") return true;
  if (payload.hidden_from_reports === true) return false;
  if (["hidden", "hide", "noise", "deleted"].includes(adminStatus)) return false;
  const tenderState = String(payload.tender_state || "").toLowerCase();
  if (["tender_awarded", "awarded", "already_awarded", "already_tendered"].includes(tenderState)) return false;
  const intent = normalizeReportIntent(String(payload.opportunity_intent || payload.intent || payload.quality_status || ""));
  if (["news_context", "not_opportunity"].includes(intent)) return false;
  return !hasObviousNewsTitleIntent(String(opportunity.title || ""));
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

function hasObviousNewsTitleIntent(title: string) {
  const normalized = normalizeText(title);
  return [
    "lokun",
    "lokad",
    "lokanir",
    "umferd",
    "tafir",
    "hjaleid",
    "vegfarendur",
    "akstursleid",
    "opid aftur",
    "breytt umferd",
    "framkvaemdir valda tofum",
    "frett",
    "myndband",
    "tekur a sig mynd",
  ].some((phrase) => normalized.includes(phrase));
}

function normalizeText(value: string) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ð/g, "d")
    .replace(/þ/g, "th")
    .replace(/æ/g, "ae")
    .replace(/ö/g, "o");
}

function daysUntil(value: string) {
  const date = new Date(`${String(value).slice(0, 10)}T23:59:59Z`);
  if (Number.isNaN(date.getTime())) return 9999;
  return Math.ceil((date.getTime() - Date.now()) / 86400000);
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

  const industry = stringValue(profile.industry).toLowerCase();
  const category = stringValue(opportunity.category).toLowerCase();
  if (industry && category && (category.includes(industry) || industry.includes(category))) {
    score += 35;
    reasons.push(`Matches your ${profile.industry} industry`);
  }

  for (const service of arrayValue(profile.services)) {
    if (text.includes(service.toLowerCase())) {
      score += 10;
      reasons.push(`Mentions your service: ${service}`);
    }
  }

  for (const keyword of arrayValue(profile.include_keywords || profile.includeKeywords)) {
    if (text.includes(keyword.toLowerCase())) {
      score += 8;
      reasons.push(`Contains your keyword: ${keyword}`);
    }
  }

  if (locationMatches(profile, opportunity)) {
    score += 20;
    reasons.push(`Located in your selected region: ${opportunity.location || "TED notice location"}`);
  } else {
    score -= 20;
    risks.push("Location may not match your selected regions");
  }

  const estimatedValue = Number(opportunity.estimated_value || opportunity.estimatedValue || 0);
  const min = Number(profile.min_project_value || profile.minProjectValue || 0);
  const max = Number(profile.max_project_value || profile.maxProjectValue || 0);
  if (!estimatedValue) {
    if (profile.allow_unknown_value === false || profile.allowUnknownValue === false) risks.push("Project value is unknown");
  } else if ((min && estimatedValue < min) || (max && estimatedValue > max)) {
    score -= 25;
    risks.push("Estimated project value is outside your preferred range");
  } else {
    score += 10;
    reasons.push("Project value is inside your preferred range");
  }

  score = Math.max(0, Math.min(100, Math.round(score)));
  return {
    matchScore: score,
    matchLabel: getMatchLabel(score),
    matchReasons: [...new Set(reasons)].slice(0, 5),
    risks: [...new Set(risks)].slice(0, 4),
    nextSteps: [
      "Open the source documents",
      "Confirm mandatory requirements",
      "Check capacity and profitability",
      "Prepare questions before the deadline",
    ],
  };
}

function locationMatches(profile: Record<string, unknown>, opportunity: Record<string, unknown>) {
  const locations = arrayValue(profile.locations);
  if (!locations.length || locations.includes("All Iceland")) return true;
  const opportunityLocation = stringValue(opportunity.location).toLowerCase();
  return locations.some((location) => {
    const normalized = location.toLowerCase();
    return opportunityLocation.includes(normalized) || (normalized.includes("iceland") && opportunityLocation.includes("iceland"));
  });
}

function getMatchLabel(score: number) {
  if (score >= 85) return "Strong match";
  if (score >= 65) return "Good match";
  if (score >= 45) return "Possible match";
  return "Weak match";
}

function arrayValue(value: unknown) {
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

function stringValue(value: unknown) {
  return String(value || "");
}
