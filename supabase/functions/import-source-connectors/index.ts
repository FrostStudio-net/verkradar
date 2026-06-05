import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

type ConnectorType = "rss_feed" | "wordpress_rest";

type ImportSummary = {
  fetched: number;
  inserted: number;
  updated: number;
  skipped: number;
  matched: number;
  reports_generated: number;
  errors: string[];
};

type ConnectorRow = {
  source_id: string;
  connector_type: ConnectorType;
  endpoint_url: string;
  enabled: boolean;
  include_keywords: string[];
  exclude_keywords: string[];
  require_any_keyword: boolean;
  sources: {
    id: string;
    name: string;
    source_type: string | null;
    base_url: string | null;
  } | null;
};

type NormalizedOpportunity = {
  source_id: string;
  external_id: string;
  country_code: string;
  title: string;
  buyer: string;
  category: string;
  type: string;
  description: string;
  deadline: string | null;
  published_date: string | null;
  location: string;
  estimated_value: number | null;
  currency: string;
  url: string;
  cpv_code: string | null;
  requirements: string[];
  keywords: string[];
  difficulty: string;
  status: string;
  raw_payload: Record<string, unknown>;
};

type MatchDebugSample = {
  title: string;
  source_name: string;
  company_name: string;
  calculated_score: number;
  reason_not_stored: string;
};

type SourceMatchDetails = {
  source_name: string;
  source_id: string;
  score_threshold: number;
  opportunities_checked: number;
  companies_checked: number;
  matches_stored: number;
  skipped_low_score: number;
  skipped_no_company_fit: number;
  skipped_missing_location_or_scope: number;
  skipped_not_visible: number;
  skipped_samples: MatchDebugSample[];
};

const SUPPORTED_CONNECTORS = new Set(["rss_feed", "wordpress_rest"]);
const DEFAULT_LIMIT = 50;
const MIN_MATCH_SCORE = 50;
const MAX_MATCH_DEBUG_SAMPLES = 20;
const DEFAULT_TENDER_INCLUDE_KEYWORDS = [
  "útboð",
  "utbod",
  "tilboð",
  "tilboðum",
  "óskað eftir tilboðum",
  "innkaup",
  "verðfyrirspurn",
  "verdfyrirspurn",
  "rammasamningur",
  "útboðsauglýsing",
];
const DEFAULT_TENDER_EXCLUDE_KEYWORDS = [
  "styrkur",
  "hlýtur styrk",
  "ársfundur",
  "kynnt",
  "frétt",
  "viðburður",
  "lokun",
  "lokanir",
  "umferð",
  "dagskrá",
  "skráning",
  "myndband",
  "ráðstefna",
  "menning",
  "bókasafn",
  "opnunartími",
  "fundargerð",
];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-automation-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return json({ ok: true });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

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
    const isAutomation = automationSecret.length > 0 && automationHeader === automationSecret;
    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

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
        return json({ ...summary, errors: ["You do not have access to run source imports."] }, 403);
      }
    }

    const body = await safeJson(req);
    const limit = clamp(Number(body.limit || DEFAULT_LIMIT), 1, 100);
    const sourceId = typeof body.sourceId === "string" ? body.sourceId : "";
    const connectors = await loadEnabledConnectors(adminClient, sourceId);

    if (!connectors.length) {
      return json({
        ...summary,
        errors: sourceId ? ["No enabled safe connector found for this source."] : [],
      });
    }

    for (const connector of connectors) {
      const source = connector.sources;
      if (!source?.id || !source.name) {
        summary.skipped += 1;
        continue;
      }

      const runId = await startImportRun(adminClient, {
        runType: isAutomation ? "source-connectors-automation" : "source-connectors-manual",
        sourceName: source.name,
        importMode: connector.connector_type,
        query: connector.endpoint_url,
      });

      const sourceSummary: ImportSummary = {
        fetched: 0,
        inserted: 0,
        updated: 0,
        skipped: 0,
        matched: 0,
        reports_generated: 0,
        errors: [],
      };
      const runDetails = {
        source_name: source.name,
        source_id: source.id,
        connectorType: connector.connector_type,
        sources_checked: 1,
        items_seen: 0,
        items_filtered: 0,
        filtered_out_by_keyword: 0,
        filtered_out_by_include_keyword: 0,
        filtered_out_by_exclude_keyword: 0,
        opportunities_imported: 0,
        opportunities_updated: 0,
        opportunities_filtered: 0,
        matches_created_or_updated: 0,
        score_threshold: MIN_MATCH_SCORE,
        opportunities_checked: 0,
        companies_checked: 0,
        matches_stored: 0,
        skipped_low_score: 0,
        skipped_no_company_fit: 0,
        skipped_missing_location_or_scope: 0,
        skipped_not_visible: 0,
        skipped_samples: [] as MatchDebugSample[],
        matching_by_source: [] as SourceMatchDetails[],
        inserted: 0,
        updated: 0,
        skipped: 0,
        errors: [] as string[],
      };

      try {
        await updateConnectorState(adminClient, connector.source_id, "running");
        const items = await fetchConnectorItems(connector, limit);
        sourceSummary.fetched = items.length;
        runDetails.items_seen = items.length;

        const filteredItems = items.filter((item) => {
          const keywordResult = connectorItemPassesKeywordFilter(item, connector);
          if (keywordResult.passed) return true;
          runDetails.items_filtered += 1;
          runDetails.filtered_out_by_keyword += 1;
          if (keywordResult.reason === "exclude_keyword") runDetails.filtered_out_by_exclude_keyword += 1;
          if (keywordResult.reason === "include_keyword") runDetails.filtered_out_by_include_keyword += 1;
          runDetails.opportunities_filtered += 1;
          sourceSummary.skipped += 1;
          return false;
        });

        const normalized = filteredItems
          .map((item) => normalizeConnectorItem(item, connector, source))
          .filter((opportunity): opportunity is NormalizedOpportunity => {
            if (opportunity) return true;
            sourceSummary.skipped += 1;
            return false;
          });

        if (normalized.length) {
          const existing = await getExistingExternalIds(
            adminClient,
            connector.source_id,
            normalized.map((opportunity) => opportunity.external_id),
          );

          const { data: savedRows, error: upsertError } = await adminClient
            .from("opportunities")
            .upsert(normalized, { onConflict: "source_id,external_id" })
            .select("external_id");

          if (upsertError) throw upsertError;

          const savedCount = savedRows?.length || 0;
          sourceSummary.skipped += normalized.length - savedCount;
          for (const row of savedRows || []) {
            if (existing.has(row.external_id)) sourceSummary.updated += 1;
            else sourceSummary.inserted += 1;
          }
        }

        runDetails.opportunities_imported = sourceSummary.inserted;
        runDetails.opportunities_updated = sourceSummary.updated;
        runDetails.inserted = sourceSummary.inserted;
        runDetails.updated = sourceSummary.updated;
        runDetails.skipped = sourceSummary.skipped;

        if (sourceSummary.inserted || sourceSummary.updated) {
          const matchDetails = await refreshMatchesForAllCompanies(adminClient, {
            sourceId: connector.source_id,
            sourceName: source.name,
          });
          sourceSummary.matched = matchDetails.matches_stored;
          runDetails.matches_created_or_updated = sourceSummary.matched;
          runDetails.opportunities_checked = matchDetails.opportunities_checked;
          runDetails.companies_checked = matchDetails.companies_checked;
          runDetails.matches_stored = matchDetails.matches_stored;
          runDetails.skipped_low_score = matchDetails.skipped_low_score;
          runDetails.skipped_no_company_fit = matchDetails.skipped_no_company_fit;
          runDetails.skipped_missing_location_or_scope = matchDetails.skipped_missing_location_or_scope;
          runDetails.skipped_not_visible = matchDetails.skipped_not_visible;
          runDetails.skipped_samples = matchDetails.skipped_samples;
          runDetails.matching_by_source = [matchDetails];
          sourceSummary.reports_generated = await generateWeeklyReports(adminClient);
        }

        await finalizeImportRun(adminClient, runId, {
          status: "success",
          ...sourceSummary,
          query: connector.endpoint_url,
          details: runDetails,
        });
        await updateSourceStatus(adminClient, connector.source_id, "connected", sourceSummary);
        await updateConnectorState(adminClient, connector.source_id, "connected", sourceSummary);
      } catch (error) {
        const message = errorMessage(error);
        sourceSummary.errors.push(message);
        runDetails.errors.push(message);
        runDetails.opportunities_imported = sourceSummary.inserted;
        runDetails.opportunities_updated = sourceSummary.updated;
        runDetails.inserted = sourceSummary.inserted;
        runDetails.updated = sourceSummary.updated;
        runDetails.skipped = sourceSummary.skipped;
        await finalizeImportRun(adminClient, runId, {
          status: "error",
          ...sourceSummary,
          query: connector.endpoint_url,
          error: message,
          details: runDetails,
        });
        await updateSourceStatus(adminClient, connector.source_id, "error", sourceSummary, message);
        await updateConnectorState(adminClient, connector.source_id, "error", sourceSummary, message);
      }

      mergeSummary(summary, sourceSummary);
    }

    return json(summary);
  } catch (error) {
    summary.errors.push(errorMessage(error));
    return json(summary, 500);
  }
});

async function loadEnabledConnectors(supabase: ReturnType<typeof createClient>, sourceId = "") {
  let query = supabase
    .from("source_connectors")
    .select(`
      source_id,
      connector_type,
      endpoint_url,
      enabled,
      include_keywords,
      exclude_keywords,
      require_any_keyword,
      sources (
        id,
        name,
        source_type,
        base_url
      )
    `)
    .eq("enabled", true)
    .in("connector_type", Array.from(SUPPORTED_CONNECTORS));

  if (sourceId) query = query.eq("source_id", sourceId);

  const { data, error } = await query;
  if (error) throw error;

  return (data || [])
    .filter((row) => row.endpoint_url && SUPPORTED_CONNECTORS.has(row.connector_type))
    .map((row) => row as ConnectorRow);
}

async function fetchConnectorItems(connector: ConnectorRow, limit: number) {
  if (connector.connector_type === "rss_feed") {
    const response = await fetch(connector.endpoint_url, {
      headers: { accept: "application/rss+xml, application/xml, text/xml" },
    });
    if (!response.ok) throw new Error(`RSS fetch failed (${response.status})`);
    return parseRssItems(await response.text()).slice(0, limit);
  }

  const url = new URL(connector.endpoint_url);
  if (!url.searchParams.has("per_page")) url.searchParams.set("per_page", String(limit));
  if (!url.searchParams.has("_embed")) url.searchParams.set("_embed", "1");

  const response = await fetch(url.toString(), {
    headers: { accept: "application/json" },
  });
  if (!response.ok) throw new Error(`WordPress REST fetch failed (${response.status})`);
  const payload = await response.json();
  return Array.isArray(payload) ? payload.slice(0, limit) : [];
}

function parseRssItems(xml: string) {
  const blocks = xml.match(/<item\b[^>]*>[\s\S]*?<\/item>/gi) || [];
  return blocks.map((block) => {
    const title = extractXmlTag(block, "title");
    const link = extractXmlTag(block, "link");
    const guid = extractXmlTag(block, "guid");
    const description = extractXmlTag(block, "description") || extractXmlTag(block, "content:encoded");
    const content = extractXmlTag(block, "content:encoded");

    return {
      externalId: guid || link || title,
      title,
      link,
      description,
      content,
      publishedDate: extractXmlTag(block, "pubDate"),
      categories: extractXmlTags(block, "category"),
      raw: block,
    };
  });
}

function extractXmlTag(xml: string, tagName: string) {
  const escapedTag = escapeRegExp(tagName);
  const match = xml.match(new RegExp(`<${escapedTag}\\b[^>]*>([\\s\\S]*?)<\\/${escapedTag}>`, "i"));
  return match ? decodeXmlText(match[1]) : "";
}

function extractXmlTags(xml: string, tagName: string) {
  const escapedTag = escapeRegExp(tagName);
  const pattern = new RegExp(`<${escapedTag}\\b[^>]*>([\\s\\S]*?)<\\/${escapedTag}>`, "gi");
  const values: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(xml)) !== null) {
    const value = decodeXmlText(match[1]);
    if (value) values.push(value);
  }
  return values;
}

function decodeXmlText(value: string) {
  return decodeHtml(
    String(value || "")
      .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, "$1")
      .replace(/^\s+|\s+$/g, ""),
  );
}

function escapeRegExp(value: string) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function connectorItemPassesKeywordFilter(item: Record<string, unknown>, connector: ConnectorRow) {
  const searchableText = getConnectorItemSearchableText(item, connector.connector_type);
  const includeKeywords = normalizeKeywordList(
    connector.include_keywords?.length ? connector.include_keywords : DEFAULT_TENDER_INCLUDE_KEYWORDS,
  );
  const excludeKeywords = normalizeKeywordList(
    connector.exclude_keywords?.length ? connector.exclude_keywords : DEFAULT_TENDER_EXCLUDE_KEYWORDS,
  );
  const requireAnyKeyword = connector.require_any_keyword !== false;

  if (excludeKeywords.some((keyword) => keywordMatches(searchableText, keyword))) {
    return { passed: false, reason: "exclude_keyword" };
  }
  if (requireAnyKeyword && includeKeywords.length) {
    const matchedInclude = includeKeywords.some((keyword) => keywordMatches(searchableText, keyword));
    return matchedInclude
      ? { passed: true, reason: "include_keyword" }
      : { passed: false, reason: "include_keyword" };
  }
  return { passed: true, reason: "no_keyword_required" };
}

function keywordMatches(searchableText: string, keyword: string) {
  const normalizedKeyword = normalizeSearchText(keyword);
  if (!normalizedKeyword) return false;
  return searchableText.includes(normalizedKeyword);
}

function getConnectorItemSearchableText(item: Record<string, unknown>, connectorType: ConnectorType) {
  if (connectorType === "wordpress_rest") {
    return normalizeSearchText([
      stringFromPath(item, ["title", "rendered"]),
      stringFromPath(item, ["excerpt", "rendered"]),
      stringFromPath(item, ["content", "rendered"]),
      String(item.slug || ""),
      String(item.link || ""),
    ].join(" "));
  }

  return normalizeSearchText([
    String(item.title || ""),
    String(item.description || ""),
    String(item.content || ""),
    String(item.snippet || ""),
    String(item.link || ""),
  ].join(" "));
}

function normalizeConnectorItem(
  item: Record<string, unknown>,
  connector: ConnectorRow,
  source: NonNullable<ConnectorRow["sources"]>,
): NormalizedOpportunity | null {
  const isWordPress = connector.connector_type === "wordpress_rest";
  const title = stripHtml(
    isWordPress
      ? stringFromPath(item, ["title", "rendered"])
      : String(item.title || ""),
  );
  const url = String(isWordPress ? item.link || "" : item.link || "");
  const externalId = cleanExternalId(
    isWordPress
      ? String(item.id || item.guid || url || title)
      : String(item.externalId || url || title),
  );

  if (!externalId || !title || !url) return null;

  const description = stripHtml(
    isWordPress
      ? stringFromPath(item, ["excerpt", "rendered"]) || stringFromPath(item, ["content", "rendered"])
      : String(item.description || ""),
  );
  const content = stripHtml(
    isWordPress
      ? stringFromPath(item, ["content", "rendered"])
      : String(item.content || ""),
  );
  const publishedDate = parseDate(
    isWordPress
      ? String(item.date || item.date_gmt || "")
      : String(item.publishedDate || ""),
  );
  const categories = isWordPress
    ? extractWordPressTerms(item)
    : Array.isArray(item.categories) ? item.categories.map(String) : [];
  const extractedDeadline = extractDeadline(`${title} ${description} ${content}`);
  const deadline = extractedDeadline.date;
  const isExpired = deadline ? daysUntil(deadline) < 0 : false;
  const category = categories[0] || "Public procurement";
  const qualityStatus = getConnectorOpportunityQuality(`${title} ${description} ${content}`);

  return {
    source_id: connector.source_id,
    external_id: externalId,
    country_code: "IS",
    title,
    buyer: source.name,
    category,
    type: "tender",
    description: description || `Imported from ${source.name}`,
    deadline,
    published_date: publishedDate,
    location: inferIcelandicLocation(`${title} ${description} ${source.name}`),
    estimated_value: null,
    currency: "ISK",
    url,
    cpv_code: null,
    requirements: [],
    keywords: uniqueStrings([
      source.name,
      source.source_type || "",
      connector.connector_type,
      ...categories,
      ...extractKeywordsFromText(`${title} ${description}`),
    ]),
    difficulty: "medium",
    status: isExpired ? "hidden" : "open",
    raw_payload: {
      connector_type: connector.connector_type,
      source_name: source.name,
      quality_status: qualityStatus,
      extracted_deadline_text: extractedDeadline.rawText,
      item,
    },
  };
}

function getConnectorOpportunityQuality(text: string) {
  const normalized = normalizeSearchText(text);
  const confirmedTenderPhrases = [
    "útboð",
    "utbod",
    "senn í útboð",
    "senn i utbod",
    "útboðsauglýsing",
    "utbodsauglysing",
    "tilboð",
    "tilbod",
    "tilboðum",
    "tilbodum",
    "óskað eftir tilboðum",
    "oskad eftir tilbodum",
    "verðfyrirspurn",
    "verdfyrirspurn",
    "innkaup",
    "rammasamningur",
  ].map(normalizeSearchText);
  if (confirmedTenderPhrases.some((phrase) => normalized.includes(phrase))) return "confirmed_tender";

  const earlySignalPhrases = [
    "áætlaðar framkvæmdir",
    "aaetladar framkvaemdir",
    "fyrirhugaðar framkvæmdir",
    "fyrirhugadar framkvaemdir",
    "framkvæmdir hefjast",
    "framkvaemdir hefjast",
    "malbikunarframkvæmdir",
    "malbikunarframkvaemdir",
    "vegaframkvæmdir",
    "vegaframkvaemdir",
    "framkvæmdir við",
    "framkvaemdir vid",
    "senn",
    "malbikun",
  ].map(normalizeSearchText);
  if (earlySignalPhrases.some((phrase) => normalized.includes(phrase))) return "early_signal";

  return "needs_review";
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

async function startImportRun(
  supabase: ReturnType<typeof createClient>,
  run: { runType: string; sourceName: string; importMode: string; query: string },
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
  payload: ImportSummary & {
    status: string;
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

  if (countError) throw countError;

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

  if (error) throw error;
}

async function updateConnectorState(
  supabase: ReturnType<typeof createClient>,
  sourceId: string,
  status: string,
  summary: Partial<ImportSummary> = {},
  lastError: string | null = null,
) {
  const now = new Date().toISOString();
  const { error } = await supabase
    .from("source_connectors")
    .update({
      status,
      last_checked_at: now,
      last_success_at: status === "connected" ? now : null,
      last_error: lastError,
      updated_at: now,
    })
    .eq("source_id", sourceId);

  if (error) throw error;
}

async function refreshMatchesForAllCompanies(
  supabase: ReturnType<typeof createClient>,
  options: { sourceId: string; sourceName: string },
): Promise<SourceMatchDetails> {
  const [{ data: companies, error: companiesError }, { data: opportunities, error: opportunitiesError }] = await Promise.all([
    supabase.from("companies").select("*"),
    supabase.from("opportunities").select("*, sources(name)").eq("source_id", options.sourceId),
  ]);

  if (companiesError) throw companiesError;
  if (opportunitiesError) throw opportunitiesError;

  const details: SourceMatchDetails = {
    source_name: options.sourceName,
    source_id: options.sourceId,
    score_threshold: MIN_MATCH_SCORE,
    opportunities_checked: 0,
    companies_checked: companies?.length || 0,
    matches_stored: 0,
    skipped_low_score: 0,
    skipped_no_company_fit: 0,
    skipped_missing_location_or_scope: 0,
    skipped_not_visible: 0,
    skipped_samples: [],
  };

  const visibleOpportunities = (opportunities || []).filter((opportunity) => {
    const visible = isVisibleOpportunity(opportunity);
    if (!visible) details.skipped_not_visible += 1;
    return visible;
  });
  details.opportunities_checked = visibleOpportunities.length;

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

    const rows: Array<Record<string, unknown>> = [];
    for (const opportunity of visibleOpportunities) {
      const match = calculateMatch(profile, opportunity);
      if (match.match_score < MIN_MATCH_SCORE) {
        details.skipped_low_score += 1;
        if (!match.has_company_fit) details.skipped_no_company_fit += 1;
        if (match.location_category === "outside_area_low_confidence") details.skipped_missing_location_or_scope += 1;
        addMatchDebugSample(details, {
          title: String(opportunity.title || "Untitled opportunity"),
          source_name: options.sourceName,
          company_name: String(company.company_name || "Unknown company"),
          calculated_score: match.match_score,
          reason_not_stored: getReasonNotStored(match),
        });
        continue;
      }

      rows.push({
        company_id: company.id,
        opportunity_id: match.opportunity_id,
        match_score: match.match_score,
        match_label: match.match_label,
        match_reasons: match.match_reasons,
        risks: match.risks,
        next_steps: match.next_steps,
        calculated_at: new Date().toISOString(),
      });
    }

    if (rows.length) {
      const { data: storedRows, error: upsertError } = await supabase
        .from("opportunity_matches")
        .upsert(rows, { onConflict: "company_id,opportunity_id" })
        .select("company_id, opportunity_id");
      if (upsertError) throw upsertError;
      details.matches_stored += storedRows?.length || 0;
    }
  }

  return details;
}

function mapCompanyProfile(
  company: Record<string, unknown>,
  services: Array<Record<string, unknown>>,
  locations: Array<Record<string, unknown>>,
  keywords: Array<Record<string, unknown>>,
) {
  return {
    id: company.id,
    companyName: String(company.company_name || ""),
    industry: String(company.industry || ""),
    services: services.map((row) => String(row.service || "")).filter(Boolean),
    locations: locations.map((row) => String(row.location || "")).filter(Boolean),
    baseLocation: String(company.base_location || ""),
    serviceAreas: Array.isArray(company.service_areas) ? company.service_areas.map(String).filter(Boolean) : [],
    willingToTravel: Boolean(company.willing_to_travel),
    nationalProjects: Boolean(company.national_projects),
    remoteProjects: Boolean(company.remote_projects),
    minimumProjectValueForTravel: company.minimum_project_value_for_travel == null ? null : Number(company.minimum_project_value_for_travel),
    includeKeywords: keywords.filter((row) => row.type === "include").map((row) => String(row.keyword || "")).filter(Boolean),
    excludeKeywords: keywords.filter((row) => row.type === "exclude").map((row) => String(row.keyword || "")).filter(Boolean),
    minProjectValue: company.min_project_value == null ? null : Number(company.min_project_value),
    maxProjectValue: company.max_project_value == null ? null : Number(company.max_project_value),
    allowUnknownValue: Boolean(company.allow_unknown_value),
  };
}

function calculateMatch(profile: Record<string, unknown>, opportunity: Record<string, unknown>) {
  const text = normalize(`${opportunity.title || ""} ${opportunity.description || ""} ${opportunity.category || ""} ${opportunity.location || ""} ${asArray(opportunity.keywords).join(" ")}`);
  const reasons: string[] = [];
  const risks: string[] = [];
  let score = 0;

  const industry = normalize(String(profile.industry || ""));
  const category = normalize(String(opportunity.category || ""));
  if (industry && category && (category.includes(industry) || industry.includes(category))) {
    score += 35;
    reasons.push(`Matches your ${profile.industry} industry`);
  }

  const serviceHits = asArray(profile.services).filter((service) => text.includes(normalize(service)));
  if (serviceHits.length) {
    score += Math.min(35, serviceHits.length * 10);
    for (const service of serviceHits.slice(0, 3)) reasons.push(`Mentions your service: ${service}`);
  }

  const keywordHits = asArray(profile.includeKeywords).filter((keyword) => text.includes(normalize(keyword)));
  if (keywordHits.length) {
    score += Math.min(25, keywordHits.length * 8);
    for (const keyword of keywordHits.slice(0, 3)) reasons.push(`Contains your keyword: ${keyword}`);
  }

  const hasCompanyFit = Boolean(
    (industry && category && (category.includes(industry) || industry.includes(category))) ||
      serviceHits.length ||
      keywordHits.length,
  );
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
    const estimatedValueForTravel = Number(opportunity.estimated_value || 0);
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

  const estimatedValue = Number(opportunity.estimated_value || 0);
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

  const excluded = asArray(profile.excludeKeywords).filter((keyword) => text.includes(normalize(keyword)));
  if (excluded.length) {
    score -= Math.min(36, excluded.length * 18);
    for (const keyword of excluded.slice(0, 2)) risks.push(`Contains exclude keyword: ${keyword}`);
  }

  if (!opportunity.deadline) {
    risks.push("Deadline could not be extracted from source feed");
  } else {
    const days = daysUntil(String(opportunity.deadline));
    if (days >= 0 && days <= 30) {
      score += 8;
      reasons.push("Deadline is coming up soon");
    }
    if (days < 0) {
      score -= 50;
      risks.push("Deadline has passed");
    }
  }

  score = Math.max(0, Math.min(100, score));
  return {
    opportunity_id: opportunity.id,
    match_score: score,
    match_label: getMatchLabel(score),
    match_reasons: reasons.length ? reasons : ["General profile match"],
    risks: Array.from(new Set(risks)).slice(0, 4),
    next_steps: [
      "Open the source documents",
      "Confirm mandatory requirements",
      "Check capacity and profitability",
      "Prepare questions before the deadline",
    ],
    has_company_fit: hasCompanyFit,
    location_category: locationCategory,
  };
}

function addMatchDebugSample(details: SourceMatchDetails, sample: MatchDebugSample) {
  if (details.skipped_samples.length >= MAX_MATCH_DEBUG_SAMPLES) return;
  details.skipped_samples.push(sample);
}

function getReasonNotStored(match: Record<string, unknown>) {
  if (match.location_category === "outside_area_low_confidence") {
    return `Score ${match.match_score} is below ${MIN_MATCH_SCORE}; location/scope is low confidence.`;
  }
  if (!match.has_company_fit) {
    return `Score ${match.match_score} is below ${MIN_MATCH_SCORE}; no strong service, industry, or keyword fit.`;
  }
  return `Score ${match.match_score} is below ${MIN_MATCH_SCORE}.`;
}

function isVisibleOpportunity(opportunity: Record<string, unknown>) {
  const status = String(opportunity.status || "").toLowerCase();
  const url = String(opportunity.url || "").trim();
  const deadline = String(opportunity.deadline || "");
  if (status !== "open") return false;
  if (!url || url === "#") return false;
  if (deadline && daysUntil(deadline) < 0) return false;
  return true;
}

function selectedProfileLocations(profile: Record<string, unknown>) {
  return [
    ...asArray(profile.locations),
    ...asArray(profile.serviceAreas),
    String(profile.baseLocation || ""),
  ].filter(Boolean);
}

function localLocationMatches(profile: Record<string, unknown>, opportunity: Record<string, unknown>) {
  const selectedLocations = selectedProfileLocations(profile);
  if (!selectedLocations.length) return false;
  const country = getOpportunityCountryCode(opportunity);
  const opportunityLocation = normalizeLocationText(String(opportunity.location || ""));

  if (selectedLocations.some((location) => normalizeLocationText(location) === "all iceland")) {
    return country === "IS" || opportunityLocation.includes("iceland") || opportunityLocation.includes("island");
  }

  if (selectedLocations.some((location) => normalizeLocationText(location) === "remote online") && opportunityLocation.includes("remote")) {
    return true;
  }

  if (!country) return false;
  if (country !== "IS" && selectedLocations.some((location) => normalizeLocationText(location).includes("iceland"))) return false;

  return selectedLocations.some((location) => {
    const selected = normalizeLocationText(location);
    if (!selected) return false;
    if (selected === opportunityLocation) return true;
    if (selected === "reykjavik" && ["reykjavik", "capital area", "hofudborgarsvaedid"].includes(opportunityLocation)) return true;
    return opportunityLocation.includes(selected) || selected.includes(opportunityLocation);
  });
}

function getLocationMatchCategory(profile: Record<string, unknown>, opportunity: Record<string, unknown>) {
  if (localLocationMatches(profile, opportunity)) return "local_match";
  const locationText = normalizeLocationText(String(opportunity.location || ""));
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

function isNationalOpportunity(opportunity: Record<string, unknown>) {
  const location = normalizeLocationText(String(opportunity.location || ""));
  const text = normalizeLocationText(`${opportunity.title || ""} ${opportunity.description || ""} ${opportunity.location || ""}`);
  if (["all iceland", "iceland", "island"].some((value) => location.includes(value))) return true;
  return ["national", "landsvist", "nationwide"].some((value) => text.includes(value));
}

function getOpportunityCountryCode(opportunity: Record<string, unknown>) {
  const direct = normalizeCountryCode(opportunity.country_code || opportunity.countryCode);
  if (direct) return direct;

  const location = normalizeLocationText(String(opportunity.location || ""));
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

function normalizeCountryCode(value: unknown) {
  const normalized = String(value || "").trim().toUpperCase();
  const aliases: Record<string, string> = {
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
  };
  return aliases[normalized] || "";
}

function normalizeLocationText(value: string) {
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
  if (score >= 70) return "Good match";
  if (score >= 50) return "Possible match";
  return "Weak match";
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
    supabase.from("companies").select("id, company_name"),
    supabase.from("reports").select("id, company_id, period_start"),
  ]);

  if (companiesError) throw companiesError;
  if (reportsError) throw reportsError;

  const existing = new Set((existingReports || [])
    .filter((report) => report.period_start === periodStart)
    .map((report) => report.company_id));

  let created = 0;
  for (const company of companies || []) {
    if (existing.has(company.id)) continue;

    const { data: matches, error: matchesError } = await supabase
      .from("opportunity_matches")
      .select("match_score, opportunities(id, title, buyer, deadline)")
      .eq("company_id", company.id)
      .gte("match_score", MIN_MATCH_SCORE)
      .order("match_score", { ascending: false })
      .limit(5);

    if (matchesError) throw matchesError;
    if (!matches?.length) continue;

    const { data: report, error: reportError } = await supabase
      .from("reports")
      .insert({
        company_id: company.id,
        title: `Weekly opportunity report - ${company.company_name || "Company"}`,
        period_start: periodStart,
        period_end: periodEnd,
        summary: `${matches.length} relevant opportunities found.`,
        text_content: `${matches.length} relevant opportunities found for this week.`,
        html_content: `<p>${matches.length} relevant opportunities found for this week.</p>`,
        status: "generated",
      })
      .select("id")
      .single();

    if (reportError) throw reportError;

    const items = matches
      .filter((match) => match.opportunities?.id)
      .map((match, index) => ({
        report_id: report.id,
        opportunity_id: match.opportunities.id,
        match_score: match.match_score,
        sort_order: index + 1,
      }));

    if (items.length) {
      const { error: itemsError } = await supabase.from("report_items").insert(items);
      if (itemsError) throw itemsError;
      created += 1;
    }
  }

  return created;
}

function extractWordPressTerms(item: Record<string, unknown>) {
  const embedded = item._embedded as Record<string, unknown> | undefined;
  const terms = embedded?.["wp:term"];
  if (!Array.isArray(terms)) return [];
  return terms
    .flatMap((group) => Array.isArray(group) ? group : [])
    .map((term) => typeof term === "object" && term ? String((term as Record<string, unknown>).name || "") : "")
    .filter(Boolean);
}

function stringFromPath(value: Record<string, unknown>, path: string[]) {
  let current: unknown = value;
  for (const key of path) {
    if (!current || typeof current !== "object") return "";
    current = (current as Record<string, unknown>)[key];
  }
  return String(current || "");
}

function extractDeadline(text: string): { date: string | null; rawText: string | null } {
  const cleanText = stripHtml(text);
  const keywordPattern = "(skilafrestur|tilboðsfrestur|tilbodsfrestur|frestur til|eigi síðar en|eigi sidar en)";
  const numericDatePattern = "(\\d{1,2}[./]\\d{1,2}[./]20\\d{2}|20\\d{2}-\\d{2}-\\d{2})";
  const monthDatePattern = "(\\d{1,2}\\.?\\s+(janúar|januar|febrúar|februar|mars|apríl|april|maí|mai|júní|juni|júlí|juli|ágúst|agust|september|október|oktober|nóvember|november|desember)\\s+20\\d{2})";

  const keywordThenDate = new RegExp(`${keywordPattern}[\\s\\S]{0,120}?(${numericDatePattern}|${monthDatePattern})`, "i");
  const keywordMatch = cleanText.match(keywordThenDate);
  if (keywordMatch) {
    const parsed = parseDeadlineDate(keywordMatch[2]);
    if (parsed) return { date: parsed, rawText: keywordMatch[0].trim() };
  }

  const dateThenKeyword = new RegExp(`(${numericDatePattern}|${monthDatePattern})[\\s\\S]{0,80}?${keywordPattern}`, "i");
  const reverseKeywordMatch = cleanText.match(dateThenKeyword);
  if (reverseKeywordMatch) {
    const parsed = parseDeadlineDate(reverseKeywordMatch[1]);
    if (parsed) return { date: parsed, rawText: reverseKeywordMatch[0].trim() };
  }

  const numericMatch = cleanText.match(new RegExp(numericDatePattern, "i"));
  if (numericMatch) {
    const parsed = parseDeadlineDate(numericMatch[1]);
    if (parsed) return { date: parsed, rawText: numericMatch[0].trim() };
  }

  const monthMatch = cleanText.match(new RegExp(monthDatePattern, "i"));
  if (monthMatch) {
    const parsed = parseDeadlineDate(monthMatch[1]);
    if (parsed) return { date: parsed, rawText: monthMatch[0].trim() };
  }

  return { date: null, rawText: null };
}

function parseDeadline(text: string) {
  return extractDeadline(text).date;
}

function parseDeadlineDate(value: string) {
  const cleanValue = stripHtml(value).trim();
  const isoMatch = cleanValue.match(/\b(20\d{2}-\d{2}-\d{2})\b/);
  if (isoMatch) return isoMatch[1];

  const numericMatch = cleanValue.match(/\b(\d{1,2})[./](\d{1,2})[./](20\d{2})\b/);
  if (numericMatch) {
    const [, day, month, year] = numericMatch;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  const monthMatch = cleanValue.match(/\b(\d{1,2})\.?\s+([^\s]+)\s+(20\d{2})\b/i);
  if (monthMatch) {
    const [, day, monthName, year] = monthMatch;
    const month = getIcelandicMonthNumber(monthName);
    if (month) return `${year}-${month}-${day.padStart(2, "0")}`;
  }

  return null;
}

function getIcelandicMonthNumber(value: string) {
  const months: Record<string, string> = {
    januar: "01",
    febrúar: "02",
    februar: "02",
    mars: "03",
    apríl: "04",
    april: "04",
    maí: "05",
    mai: "05",
    júní: "06",
    juni: "06",
    júlí: "07",
    juli: "07",
    ágúst: "08",
    agust: "08",
    september: "09",
    október: "10",
    oktober: "10",
    nóvember: "11",
    november: "11",
    desember: "12",
  };
  return months[normalize(String(value || ""))] || null;
}

function parseDate(value: string) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? parseDeadline(value) : date.toISOString().slice(0, 10);
}

function daysUntil(value: string) {
  if (!value) return 999;
  const date = new Date(`${value}T23:59:59`);
  if (Number.isNaN(date.getTime())) return 999;
  return Math.ceil((date.getTime() - Date.now()) / 86400000);
}

function inferIcelandicLocation(text: string) {
  const normalized = normalize(text);
  if (normalized.includes("reykjavik") || normalized.includes("hofudborg")) return "Reykjavík";
  if (normalized.includes("akureyri") || normalized.includes("north iceland")) return "North Iceland";
  if (normalized.includes("egilsstad") || normalized.includes("seyðis") || normalized.includes("seydis") || normalized.includes("east iceland")) return "East Iceland";
  if (normalized.includes("reykjanes") || normalized.includes("sudurnes")) return "Suðurnes";
  return "All Iceland";
}

function stripHtml(value: string) {
  return decodeHtml(String(value || ""))
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtml(value: string) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#8217;/g, "'")
    .replace(/&#038;/g, "&")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function cleanExternalId(value: string) {
  return stripHtml(value)
    .replace(/^https?:\/\//i, "")
    .replace(/[^\p{L}\p{N}._:/-]+/gu, "-")
    .slice(0, 180);
}

function extractKeywordsFromText(text: string) {
  const stop = new Set(["the", "and", "for", "with", "from", "this", "that", "í", "og", "á", "að", "til", "um", "fyrir"]);
  return uniqueStrings(
    stripHtml(text)
      .toLowerCase()
      .split(/[^\p{L}\p{N}]+/u)
      .filter((word) => word.length > 3 && !stop.has(word))
      .slice(0, 16),
  );
}

function uniqueStrings(values: Array<string | null | undefined>) {
  return Array.from(new Set(values.map((value) => String(value || "").trim()).filter(Boolean)));
}

function normalizeKeywordList(values: Array<string | null | undefined>) {
  return uniqueStrings(values).map((value) => normalizeSearchText(value)).filter(Boolean);
}

function normalizeSearchText(value: string) {
  return normalize(stripHtml(value));
}

function normalize(value: string) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ð/g, "d")
    .replace(/þ/g, "th")
    .replace(/æ/g, "ae")
    .replace(/ö/g, "o")
    .replace(/\s+/g, " ")
    .trim();
}

function mergeSummary(target: ImportSummary, source: ImportSummary) {
  target.fetched += source.fetched;
  target.inserted += source.inserted;
  target.updated += source.updated;
  target.skipped += source.skipped;
  target.matched += source.matched;
  target.reports_generated += source.reports_generated;
  target.errors.push(...source.errors);
}

async function safeJson(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

function clamp(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min;
  return Math.min(Math.max(Math.round(value), min), max);
}

function requiredEnv(name: string) {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}

function json(payload: unknown, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...corsHeaders,
      "content-type": "application/json",
    },
  });
}
