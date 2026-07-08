import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

type ConnectorType = "rss_feed" | "wordpress_rest" | "page_monitor_allowed";

type ImportSummary = {
  ok?: boolean;
  fetched: number;
  inserted: number;
  updated: number;
  skipped: number;
  matched: number;
  reports_generated: number;
  reports?: number;
  sources_processed?: number;
  sources_remaining?: number;
  matching_skipped?: boolean;
  reports_skipped?: boolean;
  message?: string;
  errors: string[];
  failedSources?: FailedSourceResult[];
  timedOutSources?: FailedSourceResult[];
};

type FailedSourceResult = {
  source: string;
  source_id?: string;
  connector_type?: string;
  endpoint_url?: string;
  status: string;
  message: string;
};

type ConnectorRow = {
  source_id: string;
  connector_type: ConnectorType;
  endpoint_url: string;
  enabled: boolean;
  include_keywords: string[];
  exclude_keywords: string[];
  require_any_keyword: boolean;
  last_success_at?: string | null;
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

type ImportSkipReason =
  | "missing_title"
  | "missing_url"
  | "duplicate_existing_opportunity"
  | "no_include_keyword_match"
  | "matched_exclude_keyword"
  | "low_quality_needs_review"
  | "unsupported_connector"
  | "parse_failed"
  | "fetch_failed";

type ImportSkipSample = {
  source_name: string;
  title: string;
  reason: ImportSkipReason;
  matchedKeyword?: string;
  included_reason?: string;
  excluded_reason?: string;
  matched_include_keywords?: string[];
  matched_exclude_keywords?: string[];
  final_quality_status?: string;
};

type KeywordDecisionSample = {
  source_name: string;
  title: string;
  included_reason: string;
  excluded_reason: string | null;
  matched_include_keywords: string[];
  matched_exclude_keywords: string[];
  final_quality_status: string;
};

type PerSourceImportResult = {
  source_name: string;
  source_id: string;
  connector_type: string;
  endpoint_url: string;
  fetched: number;
  inserted: number;
  updated: number;
  skipped: number;
  matched: number;
  reports_generated: number;
  status: string;
  error?: string | null;
};

type ImportDebugDetails = {
  source_name: string;
  source_id: string;
  connectorType: string;
  debug_version: string;
  sources_checked: number;
  source_names_checked: string[];
  connectors_checked: number;
  per_source: PerSourceImportResult[];
  items_seen: number;
  items_filtered: number;
  filtered_out_by_keyword: number;
  filtered_out_by_include_keyword: number;
  filtered_out_by_exclude_keyword: number;
  opportunities_imported: number;
  opportunities_updated: number;
  opportunities_filtered: number;
  matches_created_or_updated: number;
  reports_generated: number;
  score_threshold: number;
  opportunities_checked: number;
  companies_checked: number;
  matches_stored: number;
  skipped_low_score: number;
  skipped_no_company_fit: number;
  skipped_missing_location_or_scope: number;
  skipped_not_visible: number;
  skip_reasons: Record<string, number>;
  skipped_samples: ImportSkipSample[];
  keyword_decision_samples: KeywordDecisionSample[];
  match_skipped_samples: MatchDebugSample[];
  matching_by_source: SourceMatchDetails[];
  inserted: number;
  updated: number;
  skipped: number;
  errors: string[];
};

type KeywordFilterResult = {
  passed: boolean;
  reason: "exclude_keyword" | "include_keyword" | "no_keyword_required";
  matchedKeyword?: string;
  included_reason: string;
  excluded_reason: string | null;
  matched_include_keywords: string[];
  matched_exclude_keywords: string[];
  final_quality_status: string;
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

const SUPPORTED_CONNECTORS = new Set(["rss_feed", "wordpress_rest", "page_monitor_allowed"]);
const DEFAULT_LIMIT = 50;
const DEFAULT_BATCH_LIMIT = 20;
const DEFAULT_MAX_SOURCES_PER_RUN = 6;
const SOURCE_FETCH_TIMEOUT_MS = 8000;
const FUNCTION_TIME_BUDGET_MS = 18000;
const MIN_MATCH_SCORE = 50;
const MAX_MATCH_DEBUG_SAMPLES = 20;
const MAX_IMPORT_SKIP_SAMPLES = 10;
const MAX_KEYWORD_DECISION_SAMPLES = 20;
const IMPORT_DEBUG_VERSION = "source-connectors-skip-debug-v2";
const RIKISKAUP_SOURCE_NAME = "Ríkiskaup / island.is procurement";
const VEGAGERDIN_SOURCE_NAME = "Vegagerðin";
const VEGAGERDIN_PROJECT_EXTRACTION_METHOD = "vegagerdin_article_project_parser";
const GARDABAER_SOURCE_NAME = "Garðabær Municipality";
const FAXAFLOAHAFNIR_SOURCE_NAME = "Faxaflóahafnir útboð";
const MISSING_DEADLINE_RISK = "Deadline not available in imported data — verify on source page.";
const STRONG_OPPORTUNITY_KEYWORDS = [
  "útboð",
  "utbod",
  "útboðsauglýsing",
  "utbodsauglysing",
  "óskað eftir tilboðum",
  "oskad eftir tilbodum",
  "tilboð",
  "tilbod",
  "tilboðum",
  "tilbodum",
  "verðfyrirspurn",
  "verdfyrirspurn",
  "senn í útboð",
  "senn i utbod",
  "rammasamningur",
  "forval",
];
const WEAK_EXCLUDE_KEYWORDS = [
  "frett",
  "frétt",
  "kynnt",
  "tilkynning",
  "fundur",
];
const CLEAR_PROCUREMENT_INTENT_PHRASES = [
  "útboð",
  "utbod",
  "útboðsauglýsing",
  "utbodsauglysing",
  "óskað eftir tilboðum",
  "oskad eftir tilbodum",
  "verðfyrirspurn",
  "verdfyrirspurn",
  "tilboðsbeiðni",
  "tilbodsbeidni",
  "tilboðsfrestur",
  "tilbodsfrestur",
  "skilafrestur",
  "útboðsgögn",
  "utbodsgogn",
  "forval",
  "rammasamningur",
];
const NEWS_TRAFFIC_PROGRESS_PHRASES = [
  "lokun",
  "lokað",
  "lokad",
  "lokanir",
  "umferð",
  "umferd",
  "tafir",
  "hjáleið",
  "hjaleid",
  "vegfarendur",
  "akstursleið",
  "akstursleid",
  "opið aftur",
  "opid aftur",
  "breytt umferð",
  "breytt umferd",
  "framkvæmdir valda töfum",
  "framkvaemdir valda tofum",
  "frétt",
  "frett",
  "myndband",
  "tekur á sig mynd",
  "tekur a sig mynd",
];
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
    reports: 0,
    errors: [],
    failedSources: [],
    timedOutSources: [],
  };

  try {
    const startedAt = Date.now();
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
    const sourceId = firstString(body.sourceId, body.source_id, body.connectorId, body.connector_id);
    const isSingleSourceRun = Boolean(sourceId);
    const limit = clamp(Number(body.limit || (isSingleSourceRun ? DEFAULT_LIMIT : DEFAULT_BATCH_LIMIT)), 1, isSingleSourceRun ? 100 : DEFAULT_BATCH_LIMIT);
    const maxSources = isSingleSourceRun ? 1 : clamp(Number(body.maxSources || body.max_sources || DEFAULT_MAX_SOURCES_PER_RUN), 1, 25);
    const runMatching = body.refreshMatches === true || body.refresh_matches === true || body.runMatching === true || body.run_matching === true || isSingleSourceRun;
    const runReports = body.generateReports === true || body.generate_reports === true;
    const allConnectors = await loadEnabledConnectors(adminClient, sourceId);
    const connectors = allConnectors.slice(0, maxSources);
    const remainingConnectors = Math.max(0, allConnectors.length - connectors.length);

    if (!allConnectors.length) {
      return json({
        ...summary,
        ok: true,
        errors: sourceId ? ["No enabled safe connector found for this source."] : [],
      });
    }
    if (!connectors.length) {
      return json({
        ...summary,
        ok: false,
        message: "No sources completed before CPU limit / timeout.",
        errors: ["No source connectors selected for this run."],
      });
    }

    const aggregateRunDetails = createImportDebugDetails({
      sourceName: sourceId ? connectors[0]?.sources?.name || "Source connector" : "All source connectors",
      sourceId: sourceId || "",
      connectorType: sourceId ? connectors[0]?.connector_type || "source_connector" : "source_connectors_batch",
    });
    aggregateRunDetails.sources_checked = 0;
    aggregateRunDetails.connectors_checked = allConnectors.length;
    aggregateRunDetails.source_names_checked = [];

    const runId = await startImportRun(adminClient, {
      runType: isAutomation ? "source-connectors-automation" : "source-connectors-manual",
      sourceName: sourceId ? connectors[0]?.sources?.name || "Source connector" : "All source connectors",
      importMode: sourceId ? connectors[0]?.connector_type || "source_connector" : "source-connectors-batch",
      query: sourceId ? connectors[0]?.endpoint_url || "" : `enabled connectors: ${allConnectors.length}; processing: ${connectors.length}; item limit: ${limit}; matching: ${runMatching}; reports: ${runReports}`,
    });

    let processedSources = 0;
    for (let connectorIndex = 0; connectorIndex < connectors.length; connectorIndex += 1) {
      const connector = connectors[connectorIndex];
      if (Date.now() - startedAt > FUNCTION_TIME_BUDGET_MS) {
        const timedOut = connectors.slice(connectorIndex).map((remainingConnector) => ({
          source: remainingConnector.sources?.name || "Unknown source",
          source_id: remainingConnector.source_id,
          connector_type: remainingConnector.connector_type,
          endpoint_url: remainingConnector.endpoint_url,
          status: "timeout_budget",
          message: "Skipped before processing because the import run was close to the Edge Function CPU/runtime budget.",
        }));
        summary.timedOutSources = [...(summary.timedOutSources || []), ...timedOut];
        break;
      }

      const source = connector.sources;
      if (!source?.id || !source.name) {
        summary.skipped += 1;
        continue;
      }
      processedSources += 1;

      const sourceSummary: ImportSummary = {
        fetched: 0,
        inserted: 0,
        updated: 0,
        skipped: 0,
        matched: 0,
        reports_generated: 0,
        reports: 0,
        errors: [],
        failedSources: [],
        timedOutSources: [],
      };
      const runDetails = createImportDebugDetails({
        sourceName: source.name,
        sourceId: source.id,
        connectorType: connector.connector_type,
      });

      try {
        await updateConnectorState(adminClient, connector.source_id, "running");
        const items = await withTimeout(
          fetchConnectorItems(connector, limit),
          SOURCE_FETCH_TIMEOUT_MS,
          `${source.name} fetch/parser timed out after ${SOURCE_FETCH_TIMEOUT_MS}ms`,
        );
        sourceSummary.fetched = items.length;
        runDetails.items_seen = items.length;

        const filteredItems = items.filter((item) => {
          const keywordResult = connectorItemPassesKeywordFilter(item, connector);
          recordKeywordDecision(runDetails, {
            source_name: source.name,
            title: getConnectorItemTitle(item, connector.connector_type),
            included_reason: keywordResult.included_reason,
            excluded_reason: keywordResult.excluded_reason,
            matched_include_keywords: keywordResult.matched_include_keywords,
            matched_exclude_keywords: keywordResult.matched_exclude_keywords,
            final_quality_status: keywordResult.final_quality_status,
          });
          if (keywordResult.passed) return true;
          const skipReason = keywordResult.reason === "exclude_keyword"
            ? "matched_exclude_keyword"
            : "no_include_keyword_match";
          recordImportSkip(runDetails, {
            source_name: source.name,
            title: getConnectorItemTitle(item, connector.connector_type),
            reason: skipReason,
            matchedKeyword: keywordResult.matchedKeyword,
            included_reason: keywordResult.included_reason,
            excluded_reason: keywordResult.excluded_reason || undefined,
            matched_include_keywords: keywordResult.matched_include_keywords,
            matched_exclude_keywords: keywordResult.matched_exclude_keywords,
            final_quality_status: keywordResult.final_quality_status,
          });
          runDetails.items_filtered += 1;
          runDetails.filtered_out_by_keyword += 1;
          if (keywordResult.reason === "exclude_keyword") runDetails.filtered_out_by_exclude_keyword += 1;
          if (keywordResult.reason === "include_keyword") runDetails.filtered_out_by_include_keyword += 1;
          runDetails.opportunities_filtered += 1;
          sourceSummary.skipped += 1;
          return false;
        });

        const normalized: NormalizedOpportunity[] = [];
        for (let itemIndex = 0; itemIndex < filteredItems.length; itemIndex += 1) {
          const item = filteredItems[itemIndex];
          if (Date.now() - startedAt > FUNCTION_TIME_BUDGET_MS) {
            const remainingItems = filteredItems.length - itemIndex;
            sourceSummary.skipped += Math.max(0, remainingItems);
            sourceSummary.timedOutSources = [{
              source: source.name,
              source_id: connector.source_id,
              connector_type: connector.connector_type,
              endpoint_url: connector.endpoint_url,
              status: "timeout_budget",
              message: "Stopped this source before all items were parsed because the import run was close to the Edge Function CPU/runtime budget.",
            }];
            break;
          }
          const opportunities = await normalizeConnectorItems(item, connector, source);
          if (opportunities.length) {
            normalized.push(...opportunities);
            continue;
          }
          recordImportSkip(runDetails, {
            source_name: source.name,
            title: getConnectorItemTitle(item, connector.connector_type),
            reason: getNormalizeSkipReason(item, connector),
          });
          sourceSummary.skipped += 1;
        }

        if (normalized.length) {
          const existing = await getExistingExternalIds(
            adminClient,
            connector.source_id,
            normalized.map((opportunity) => opportunity.external_id),
          );

          const { data: savedRows, error: upsertError } = await adminClient
            .from("opportunities")
            .upsert(normalized, { onConflict: "source_id,external_id" })
            .select("id, external_id");

          if (upsertError) throw upsertError;

          const savedCount = savedRows?.length || 0;
          const unsavedCount = normalized.length - savedCount;
          sourceSummary.skipped += unsavedCount;
          if (unsavedCount > 0) {
            const savedIds = new Set((savedRows || []).map((row) => row.external_id));
            for (const opportunity of normalized) {
              if (savedIds.has(opportunity.external_id)) continue;
              recordImportSkip(runDetails, {
                source_name: source.name,
                title: opportunity.title,
                reason: existing.has(opportunity.external_id) ? "duplicate_existing_opportunity" : "parse_failed",
              });
            }
          }
          for (const row of savedRows || []) {
            if (existing.has(row.external_id)) sourceSummary.updated += 1;
            else sourceSummary.inserted += 1;
          }

          await resolveCrossSourceDuplicates(
            adminClient,
            (savedRows || []).map((row) => String(row.id || "")).filter(Boolean),
          );
        }

        runDetails.opportunities_imported = sourceSummary.inserted;
        runDetails.opportunities_updated = sourceSummary.updated;
        runDetails.inserted = sourceSummary.inserted;
        runDetails.updated = sourceSummary.updated;
        runDetails.skipped = sourceSummary.skipped;

        if (runMatching && (sourceSummary.inserted || sourceSummary.updated)) {
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
          runDetails.match_skipped_samples = matchDetails.skipped_samples;
          runDetails.matching_by_source = [matchDetails];
          if (runReports) {
            sourceSummary.reports_generated = await generateWeeklyReports(adminClient);
            sourceSummary.reports = sourceSummary.reports_generated;
          }
        }

        await updateSourceStatus(adminClient, connector.source_id, "connected", sourceSummary);
        await updateConnectorState(adminClient, connector.source_id, "connected", sourceSummary);
      } catch (error) {
        const message = errorMessage(error);
        const failedSource: FailedSourceResult = {
          source: source.name,
          source_id: connector.source_id,
          connector_type: connector.connector_type,
          endpoint_url: connector.endpoint_url,
          status: failureStatusFromMessage(message),
          message,
        };
        if (isTimeoutMessage(message)) {
          sourceSummary.timedOutSources = [failedSource];
        } else {
          sourceSummary.failedSources = [failedSource];
        }
        recordImportSkip(runDetails, {
          source_name: source.name,
          title: source.name,
          reason: message.toLowerCase().includes("fetch failed") ? "fetch_failed" : "parse_failed",
        });
        sourceSummary.errors.push(message);
        runDetails.errors.push(message);
        runDetails.opportunities_imported = sourceSummary.inserted;
        runDetails.opportunities_updated = sourceSummary.updated;
        runDetails.inserted = sourceSummary.inserted;
        runDetails.updated = sourceSummary.updated;
        runDetails.skipped = sourceSummary.skipped;
        await updateSourceStatus(adminClient, connector.source_id, "error", sourceSummary, message);
        await updateConnectorState(adminClient, connector.source_id, "error", sourceSummary, message);
      }

      mergeImportDetails(aggregateRunDetails, runDetails, {
        source,
        connector,
        summary: sourceSummary,
      });
      mergeSummary(summary, sourceSummary);
    }

    aggregateRunDetails.inserted = summary.inserted;
    aggregateRunDetails.updated = summary.updated;
    aggregateRunDetails.skipped = summary.skipped;
    aggregateRunDetails.opportunities_imported = summary.inserted;
    aggregateRunDetails.opportunities_updated = summary.updated;
    aggregateRunDetails.matches_created_or_updated = summary.matched;
    aggregateRunDetails.reports_generated = summary.reports_generated;
    aggregateRunDetails.errors = [
      ...(summary.failedSources || []).map((failure) => `${failure.source}: ${failure.message}`),
      ...(summary.timedOutSources || []).map((failure) => `${failure.source}: ${failure.message}`),
      ...summary.errors,
    ];
    summary.reports = summary.reports_generated;
    summary.ok = !summary.errors.length;
    summary.sources_processed = processedSources;
    summary.sources_remaining = remainingConnectors + Math.max(0, connectors.length - processedSources);
    summary.matching_skipped = !runMatching;
    summary.reports_skipped = !runReports;
    if (!processedSources) {
      summary.ok = false;
      summary.message = "No sources completed before CPU limit / timeout.";
      if (!summary.errors.length) summary.errors.push(summary.message);
    } else if (summary.sources_remaining) {
      summary.message = `Processed ${processedSources} source${processedSources === 1 ? "" : "s"}; ${summary.sources_remaining} source${summary.sources_remaining === 1 ? "" : "s"} remaining for the next run.`;
    } else if (summary.failedSources?.length || summary.timedOutSources?.length) {
      summary.message = "Source import completed with source-level failures. Successful sources were still imported.";
    } else {
      summary.message = "Source import completed.";
    }

    await finalizeImportRun(adminClient, runId, {
      status: !processedSources ? "error" : (summary.failedSources?.length || summary.timedOutSources?.length || summary.sources_remaining ? "partial_success" : "success"),
      ...summary,
      query: sourceId ? connectors[0]?.endpoint_url || "" : `enabled connectors: ${allConnectors.length}; processed: ${processedSources}; remaining: ${summary.sources_remaining}; item limit: ${limit}; matching: ${runMatching}; reports: ${runReports}`,
      error: summary.failedSources?.length || summary.timedOutSources?.length
        ? [
            ...(summary.failedSources || []).map((failure) => `${failure.source}: ${failure.message}`),
            ...(summary.timedOutSources || []).map((failure) => `${failure.source}: ${failure.message}`),
          ].join("; ")
        : summary.errors.length ? summary.errors.join("; ") : null,
      details: aggregateRunDetails,
    });

    return json(summary);
  } catch (error) {
    const message = errorMessage(error);
    summary.ok = false;
    summary.message = isTimeoutMessage(message)
      ? "No sources completed before CPU limit / timeout."
      : "Source import failed before the batch could complete.";
    summary.errors.push(message);
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
      last_success_at,
      sources (
        id,
        name,
        source_type,
        base_url
      )
    `)
    .eq("enabled", true)
    .in("connector_type", Array.from(SUPPORTED_CONNECTORS))
    .order("last_success_at", { ascending: true, nullsFirst: true });

  if (sourceId) query = query.eq("source_id", sourceId);

  const { data, error } = await query;
  if (error) throw error;

  return (data || [])
    .filter((row) => row.endpoint_url && SUPPORTED_CONNECTORS.has(row.connector_type))
    .map((row) => row as ConnectorRow);
}

async function fetchConnectorItems(connector: ConnectorRow, limit: number) {
  if (connector.connector_type === "rss_feed") {
    const response = await fetchWithAbortTimeout(connector.endpoint_url, SOURCE_FETCH_TIMEOUT_MS, {
      headers: { accept: "application/rss+xml, application/xml, text/xml" },
    });
    if (!response.ok) throw new Error(`RSS fetch failed (${response.status})`);
    return parseRssItems(await response.text()).slice(0, limit);
  }

  if (connector.connector_type === "page_monitor_allowed") {
    return fetchPageMonitorItems(connector, limit);
  }

  const url = new URL(connector.endpoint_url);
  if (!url.searchParams.has("per_page")) url.searchParams.set("per_page", String(limit));
  if (!url.searchParams.has("_embed")) url.searchParams.set("_embed", "1");

  const response = await fetchWithAbortTimeout(url.toString(), SOURCE_FETCH_TIMEOUT_MS, {
    headers: { accept: "application/json" },
  });
  if (!response.ok) throw new Error(`WordPress REST fetch failed (${response.status})`);
  const payload = await response.json();
  return Array.isArray(payload) ? payload.slice(0, limit) : [];
}

async function fetchPageMonitorItems(connector: ConnectorRow, limit: number) {
  if (!isGardabaerTenderPageConnector(connector) && !isFaxafloahafnirTenderPageConnector(connector)) {
    throw new Error("Unsupported page monitor connector");
  }

  const response = await fetchWithAbortTimeout(connector.endpoint_url, SOURCE_FETCH_TIMEOUT_MS, {
    headers: {
      accept: "text/html,application/xhtml+xml",
      "user-agent": "VerkRadar source connector (+support@verkradar.is)",
    },
  });
  if (!response.ok) throw new Error(`Page monitor fetch failed (${response.status})`);
  if (isFaxafloahafnirTenderPageConnector(connector)) {
    return enrichFaxafloahafnirTenderItems(parseFaxafloahafnirTenderPage(await response.text(), connector.endpoint_url).slice(0, limit));
  }
  return parseGardabaerTenderPage(await response.text(), connector.endpoint_url).slice(0, limit);
}

function isGardabaerTenderPageConnector(connector: ConnectorRow) {
  if (connector.sources?.name !== GARDABAER_SOURCE_NAME) return false;
  try {
    const url = new URL(connector.endpoint_url);
    return url.hostname.replace(/^www\./i, "") === "gardabaer.is" && url.pathname === "/framkvaemdir/utbod";
  } catch {
    return false;
  }
}

function isFaxafloahafnirTenderPageConnector(connector: ConnectorRow) {
  if (connector.sources?.name !== FAXAFLOAHAFNIR_SOURCE_NAME) return false;
  try {
    const url = new URL(connector.endpoint_url);
    return url.hostname.replace(/^www\./i, "") === "faxafloahafnir.is" && url.pathname === "/utbod";
  } catch {
    return false;
  }
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
      creator: extractXmlTag(block, "dc:creator") || extractXmlTag(block, "author"),
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

function connectorItemPassesKeywordFilter(item: Record<string, unknown>, connector: ConnectorRow): KeywordFilterResult {
  const searchableText = getConnectorItemSearchableText(item, connector.connector_type);
  const includeKeywords = normalizeKeywordList(
    connector.include_keywords?.length ? connector.include_keywords : DEFAULT_TENDER_INCLUDE_KEYWORDS,
  );
  const excludeKeywords = normalizeKeywordList(
    connector.exclude_keywords?.length ? connector.exclude_keywords : DEFAULT_TENDER_EXCLUDE_KEYWORDS,
  );
  const strongKeywords = normalizeKeywordList(STRONG_OPPORTUNITY_KEYWORDS);
  const requireAnyKeyword = connector.require_any_keyword !== false;
  const matchedIncludeKeywords = uniqueStrings([
    ...includeKeywords.filter((keyword) => keywordMatches(searchableText, keyword)),
    ...strongKeywords.filter((keyword) => keywordMatches(searchableText, keyword)),
  ]);
  const matchedExcludeKeywords = excludeKeywords.filter((keyword) => keywordMatches(searchableText, keyword));
  const matchedStrongKeywords = matchedIncludeKeywords.filter((keyword) => strongKeywords.includes(keyword));
  const finalQualityStatus = getConnectorOpportunityQuality(searchableText);
  const hasStrongOpportunitySignal = matchedStrongKeywords.length > 0 || finalQualityStatus === "confirmed_tender";
  const weakExcludeKeywords = normalizeKeywordList(WEAK_EXCLUDE_KEYWORDS);
  const hardExcludeKeywords = matchedExcludeKeywords.filter((keyword) => !weakExcludeKeywords.includes(keyword));

  if (matchedExcludeKeywords.length && !hasStrongOpportunitySignal) {
    return {
      passed: false,
      reason: "exclude_keyword",
      matchedKeyword: matchedExcludeKeywords[0],
      included_reason: matchedIncludeKeywords.length ? "include matched, but no strong opportunity signal" : "no accepted include override",
      excluded_reason: hardExcludeKeywords.length
        ? `matched hard exclude keyword: ${hardExcludeKeywords[0]}`
        : `matched weak exclude keyword: ${matchedExcludeKeywords[0]}`,
      matched_include_keywords: matchedIncludeKeywords,
      matched_exclude_keywords: matchedExcludeKeywords,
      final_quality_status: finalQualityStatus,
    };
  }

  if (requireAnyKeyword && includeKeywords.length) {
    if (matchedIncludeKeywords.length) {
      return {
        passed: true,
        reason: "include_keyword",
        matchedKeyword: matchedIncludeKeywords[0],
        included_reason: matchedExcludeKeywords.length && hasStrongOpportunitySignal
          ? "strong include keyword overrode weak exclude keyword"
          : "matched include keyword",
        excluded_reason: matchedExcludeKeywords.length ? `ignored exclude keyword because strong signal exists: ${matchedExcludeKeywords[0]}` : null,
        matched_include_keywords: matchedIncludeKeywords,
        matched_exclude_keywords: matchedExcludeKeywords,
        final_quality_status: finalQualityStatus,
      };
    }
    return {
      passed: false,
      reason: "include_keyword",
      included_reason: "no include keyword match",
      excluded_reason: null,
      matched_include_keywords: [],
      matched_exclude_keywords: matchedExcludeKeywords,
      final_quality_status: finalQualityStatus,
    };
  }

  return {
    passed: true,
    reason: "no_keyword_required",
    included_reason: "connector does not require an include keyword",
    excluded_reason: matchedExcludeKeywords.length && hasStrongOpportunitySignal ? "exclude keyword ignored because strong signal exists" : null,
    matched_include_keywords: matchedIncludeKeywords,
    matched_exclude_keywords: matchedExcludeKeywords,
    final_quality_status: finalQualityStatus,
  };
}

function parseGardabaerTenderPage(html: string, endpointUrl: string) {
  const items: Record<string, unknown>[] = [];
  const cardPattern = /<a\b[^>]*href="([^"]*\/framkvaemdir\/utbod\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  const seen = new Set<string>();
  let match: RegExpExecArray | null;

  while ((match = cardPattern.exec(html)) !== null) {
    const href = decodeHtml(match[1] || "");
    const cardHtml = match[2] || "";
    const url = absolutizeUrl(href, endpointUrl);
    if (!url || seen.has(url)) continue;
    seen.add(url);

    const title = cleanConnectorText(firstHtmlMatch(cardHtml, /<h2\b[^>]*>([\s\S]*?)<\/h2>/i), "");
    const description = cleanConnectorText(firstHtmlMatch(cardHtml, /<p\b[^>]*>([\s\S]*?)<\/p>/i), title);
    const details = extractGardabaerTenderDetails(cardHtml);
    const deadline = parseDate(details["Útboð lýkur"] || "");
    const openDate = parseDate(details["Útboð opnar"] || "");
    const workDueDate = parseDate(details["Skiladagur verks"] || "");
    const statusText = details["Staða útboðs"] || "";

    if (!title || !url) continue;

    items.push({
      externalId: `gardabaer:${getUrlSlug(url)}`,
      title,
      link: url,
      description,
      content: [
        description,
        statusText ? `Staða útboðs: ${statusText}` : "",
        details["Útboð opnar"] ? `Útboð opnar: ${details["Útboð opnar"]}` : "",
        details["Útboð lýkur"] ? `Útboð lýkur: ${details["Útboð lýkur"]}` : "",
        details["Skiladagur verks"] ? `Skiladagur verks: ${details["Skiladagur verks"]}` : "",
      ].filter(Boolean).join(". "),
      publishedDate: openDate,
      deadline,
      categories: ["Útboð í auglýsingu"],
      buyer: "Garðabær",
      tenderStatus: statusText,
      workDueDate,
      raw: {
        source_page: endpointUrl,
        source_page_type: "gardabaer_tender_listing",
        status: statusText,
        opening_date: openDate,
        deadline,
        work_due_date: workDueDate,
      },
    });
  }

  return items;
}

function parseFaxafloahafnirTenderPage(html: string, endpointUrl: string) {
  const items: Record<string, unknown>[] = [];
  const cardPattern = /<article\b[^>]*TenderList_item__[^>]*>([\s\S]*?)<\/article>/gi;
  const seen = new Set<string>();
  let match: RegExpExecArray | null;

  while ((match = cardPattern.exec(html)) !== null) {
    const cardHtml = match[1] || "";
    const href = decodeHtml(firstHtmlMatch(cardHtml, /<a\b[^>]*href="([^"]*\/utbod\/[^"]+)"[^>]*>/i));
    const url = absolutizeUrl(href, endpointUrl);
    if (!url || seen.has(url)) continue;
    seen.add(url);

    const title = cleanConnectorText(firstHtmlMatch(cardHtml, /<h3\b[^>]*>([\s\S]*?)<\/h3>/i), "");
    const publishedDate = parseDate(firstHtmlMatch(cardHtml, /<time\b[^>]*dateTime="([^"]+)"[^>]*>/i)) ||
      parseDate(cleanConnectorText(firstHtmlMatch(cardHtml, /<time\b[^>]*>([\s\S]*?)<\/time>/i), ""));

    if (!title) continue;

    items.push({
      externalId: `faxafloahafnir:${getUrlSlug(url)}`,
      title,
      link: url,
      description: title,
      content: title,
      publishedDate,
      categories: ["Útboð"],
      buyer: "Faxaflóahafnir",
      raw: {
        source_page: endpointUrl,
        source_page_type: "faxafloahafnir_tender_listing",
        listing_published_date: publishedDate,
      },
    });
  }

  return items;
}

async function enrichFaxafloahafnirTenderItems(items: Record<string, unknown>[]) {
  const enriched: Record<string, unknown>[] = [];
  for (const item of items) {
    const url = String(item.link || "");
    if (!isSafeFaxafloahafnirTenderUrl(url)) {
      enriched.push(item);
      continue;
    }

    try {
      const html = await fetchTextWithTimeout(url, 8000);
      enriched.push(enrichFaxafloahafnirTenderItem(item, html));
    } catch (error) {
      enriched.push({
        ...item,
        raw: {
          ...(item.raw && typeof item.raw === "object" ? item.raw as Record<string, unknown> : {}),
          detail_fetch_error: error instanceof Error ? error.message : String(error),
        },
      });
    }
  }
  return enriched;
}

function enrichFaxafloahafnirTenderItem(item: Record<string, unknown>, html: string) {
  const articleHtml = extractFaxafloahafnirTenderArticleHtml(html);
  const title = cleanConnectorText(firstHtmlMatch(articleHtml, /<h1\b[^>]*>([\s\S]*?)<\/h1>/i), String(item.title || "")) || String(item.title || "");
  const publishedDate = parseDate(firstHtmlMatch(articleHtml, /<time\b[^>]*dateTime="([^"]+)"[^>]*>/i)) ||
    parseDate(cleanConnectorText(firstHtmlMatch(articleHtml, /<time\b[^>]*>([\s\S]*?)<\/time>/i), "")) ||
    String(item.publishedDate || "");
  const bodyHtml = articleHtml.replace(/<h1\b[^>]*>[\s\S]*?<\/h1>/i, "").replace(/<time\b[^>]*>[\s\S]*?<\/time>/gi, "");
  const description = cleanConnectorText(bodyHtml, title);
  const extractedDeadline = extractDeadline(`${title} ${description}`);
  const raw = item.raw && typeof item.raw === "object" ? item.raw as Record<string, unknown> : {};

  return {
    ...item,
    title,
    description: description || title,
    content: description || title,
    publishedDate,
    deadline: extractedDeadline.date,
    buyer: "Faxaflóahafnir",
    raw: {
      ...raw,
      source_page_type: "faxafloahafnir_tender_listing",
      detail_page_enriched: true,
      extracted_deadline_text: extractedDeadline.rawText,
    },
  };
}

function extractFaxafloahafnirTenderArticleHtml(html: string) {
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  const mainHtml = mainMatch?.[1] || html;
  const start = mainHtml.search(/<time\b|<h1\b/i);
  if (start < 0) return mainHtml;
  const footerStart = mainHtml.search(/<footer\b|<section\b[^>]*Footer_|Faxaflóahafnir reka umfangsmestu hafnir/i);
  return footerStart > start ? mainHtml.slice(start, footerStart) : mainHtml.slice(start);
}

function isSafeFaxafloahafnirTenderUrl(value: string) {
  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./i, "");
    return host === "faxafloahafnir.is" && /^\/utbod\/[^/]+\/?$/.test(url.pathname);
  } catch {
    return false;
  }
}

function extractGardabaerTenderDetails(html: string) {
  const details: Record<string, string> = {};
  const detailPattern = /<div\b[^>]*detailsTitle[^>]*>([\s\S]*?)<\/div>\s*<div\b[^>]*detailsContent[^>]*>([\s\S]*?)<\/div>/gi;
  let match: RegExpExecArray | null;
  while ((match = detailPattern.exec(html)) !== null) {
    const key = cleanConnectorText(match[1] || "", "");
    const value = cleanConnectorText(match[2] || "", "");
    if (key && value) details[key] = value;
  }
  return details;
}

function firstHtmlMatch(html: string, pattern: RegExp) {
  const match = html.match(pattern);
  return match?.[1] || "";
}

function absolutizeUrl(value: string, baseUrl: string) {
  try {
    return new URL(value, baseUrl).toString();
  } catch {
    return "";
  }
}

function recordImportSkip(details: ImportDebugDetails, sample: ImportSkipSample) {
  details.skip_reasons[sample.reason] = (details.skip_reasons[sample.reason] || 0) + 1;
  if (details.skipped_samples.length >= MAX_IMPORT_SKIP_SAMPLES) return;
  details.skipped_samples.push({
    source_name: sample.source_name,
    title: sample.title || "Untitled item",
    reason: sample.reason,
    ...(sample.matchedKeyword ? { matchedKeyword: sample.matchedKeyword } : {}),
    ...(sample.included_reason ? { included_reason: sample.included_reason } : {}),
    ...(sample.excluded_reason ? { excluded_reason: sample.excluded_reason } : {}),
    ...(sample.matched_include_keywords ? { matched_include_keywords: sample.matched_include_keywords } : {}),
    ...(sample.matched_exclude_keywords ? { matched_exclude_keywords: sample.matched_exclude_keywords } : {}),
    ...(sample.final_quality_status ? { final_quality_status: sample.final_quality_status } : {}),
  });
}

function recordKeywordDecision(details: ImportDebugDetails, sample: KeywordDecisionSample) {
  if (details.keyword_decision_samples.length >= MAX_KEYWORD_DECISION_SAMPLES) return;
  details.keyword_decision_samples.push(sample);
}

function createImportDebugDetails(options: {
  sourceName: string;
  sourceId: string;
  connectorType: string;
}): ImportDebugDetails {
  return {
    source_name: options.sourceName,
    source_id: options.sourceId,
    connectorType: options.connectorType,
    debug_version: IMPORT_DEBUG_VERSION,
    sources_checked: 1,
    source_names_checked: options.sourceName ? [options.sourceName] : [],
    connectors_checked: 1,
    per_source: [],
    items_seen: 0,
    items_filtered: 0,
    filtered_out_by_keyword: 0,
    filtered_out_by_include_keyword: 0,
    filtered_out_by_exclude_keyword: 0,
    opportunities_imported: 0,
    opportunities_updated: 0,
    opportunities_filtered: 0,
    matches_created_or_updated: 0,
    reports_generated: 0,
    score_threshold: MIN_MATCH_SCORE,
    opportunities_checked: 0,
    companies_checked: 0,
    matches_stored: 0,
    skipped_low_score: 0,
    skipped_no_company_fit: 0,
    skipped_missing_location_or_scope: 0,
    skipped_not_visible: 0,
    skip_reasons: {},
    skipped_samples: [],
    keyword_decision_samples: [],
    match_skipped_samples: [],
    matching_by_source: [],
    inserted: 0,
    updated: 0,
    skipped: 0,
    errors: [],
  };
}

function mergeImportDetails(
  target: ImportDebugDetails,
  sourceDetails: ImportDebugDetails,
  context: {
    source: NonNullable<ConnectorRow["sources"]>;
    connector: ConnectorRow;
    summary: ImportSummary;
  },
) {
  target.sources_checked += 1;
  target.source_names_checked = uniqueStrings([
    ...target.source_names_checked,
    context.source.name,
  ]);
  target.items_seen += sourceDetails.items_seen;
  target.items_filtered += sourceDetails.items_filtered;
  target.filtered_out_by_keyword += sourceDetails.filtered_out_by_keyword;
  target.filtered_out_by_include_keyword += sourceDetails.filtered_out_by_include_keyword;
  target.filtered_out_by_exclude_keyword += sourceDetails.filtered_out_by_exclude_keyword;
  target.opportunities_filtered += sourceDetails.opportunities_filtered;
  target.opportunities_checked += sourceDetails.opportunities_checked;
  target.companies_checked += sourceDetails.companies_checked;
  target.matches_stored += sourceDetails.matches_stored;
  target.skipped_low_score += sourceDetails.skipped_low_score;
  target.skipped_no_company_fit += sourceDetails.skipped_no_company_fit;
  target.skipped_missing_location_or_scope += sourceDetails.skipped_missing_location_or_scope;
  target.skipped_not_visible += sourceDetails.skipped_not_visible;
  target.match_skipped_samples.push(...sourceDetails.match_skipped_samples);
  target.keyword_decision_samples.push(...sourceDetails.keyword_decision_samples);
  target.keyword_decision_samples = target.keyword_decision_samples.slice(0, MAX_KEYWORD_DECISION_SAMPLES);
  target.matching_by_source.push(...sourceDetails.matching_by_source);
  target.errors.push(...sourceDetails.errors);

  for (const [reason, count] of Object.entries(sourceDetails.skip_reasons)) {
    target.skip_reasons[reason] = (target.skip_reasons[reason] || 0) + Number(count || 0);
  }
  for (const sample of sourceDetails.skipped_samples) {
    if (target.skipped_samples.length >= MAX_IMPORT_SKIP_SAMPLES) break;
    target.skipped_samples.push(sample);
  }

  target.per_source.push({
    source_name: context.source.name,
    source_id: context.source.id,
    connector_type: context.connector.connector_type,
    endpoint_url: context.connector.endpoint_url,
    fetched: context.summary.fetched,
    inserted: context.summary.inserted,
    updated: context.summary.updated,
    skipped: context.summary.skipped,
    matched: context.summary.matched,
    reports_generated: context.summary.reports_generated,
    status: context.summary.timedOutSources?.length ? "timeout" : context.summary.errors.length ? "error" : "success",
    error: context.summary.errors[0] || null,
  });
}

function getConnectorItemTitle(item: Record<string, unknown>, connectorType: ConnectorType) {
  return stripHtml(
    connectorType === "wordpress_rest"
      ? stringFromPath(item, ["title", "rendered"])
      : String(item.title || ""),
  ) || String(item.link || item.externalId || item.id || "Untitled item");
}

function getNormalizeSkipReason(item: Record<string, unknown>, connector: ConnectorRow): ImportSkipReason {
  const isWordPress = connector.connector_type === "wordpress_rest";
  const title = stripHtml(
    isWordPress
      ? stringFromPath(item, ["title", "rendered"])
      : String(item.title || ""),
  );
  const url = String(isWordPress ? item.link || "" : item.link || "").trim();
  const externalId = cleanExternalId(
    isWordPress
      ? String(item.id || item.guid || url || title)
      : String(item.externalId || url || title),
  );

  if (!title) return "missing_title";
  if (!url) return "missing_url";
  if (!externalId) return "parse_failed";
  return "parse_failed";
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

async function normalizeConnectorItems(
  item: Record<string, unknown>,
  connector: ConnectorRow,
  source: NonNullable<ConnectorRow["sources"]>,
): Promise<NormalizedOpportunity[]> {
  const parent = normalizeConnectorItem(item, connector, source);
  if (!parent) return [];
  if (source.name === RIKISKAUP_SOURCE_NAME && connector.connector_type === "wordpress_rest") {
    await enrichRikiskaupOpportunityFromDetailPage(parent);
    applyRikiskaupMetadataFallback(parent);
  }

  const children = await extractVegagerdinArticleProjects(item, connector, source, parent);
  if (!children.length) return [parent];

  parent.raw_payload = {
    ...parent.raw_payload,
    quality_status: "needs_review",
    child_opportunities_extracted: children.length,
    extraction_method: "parent_article_with_child_opportunities",
  };
  parent.status = "hidden";
  parent.keywords = uniqueStrings([...parent.keywords, "project roundup", "útboðsverk"]);

  return [parent, ...children];
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

  const rawDescription = isWordPress
    ? stringFromPath(item, ["excerpt", "rendered"]) || stringFromPath(item, ["content", "rendered"])
    : String(item.description || "");
  const rawContent = isWordPress
    ? stringFromPath(item, ["content", "rendered"])
    : String(item.content || "");
  const cleanDescription = cleanConnectorText(rawDescription, "");
  const content = cleanConnectorText(rawContent, "");
  const publishedDate = parseDate(
    isWordPress
      ? String(item.date || item.date_gmt || "")
      : String(item.publishedDate || ""),
  );
  const categories = isWordPress
    ? extractWordPressTerms(item)
    : Array.isArray(item.categories) ? item.categories.map(String) : [];
  const category = source.name === FAXAFLOAHAFNIR_SOURCE_NAME ? "public procurement" : categories[0] || "Public procurement";
  const description = buildConnectorDescription({
    title,
    cleanDescription,
    content,
    category,
    sourceName: source.name,
  });
  const searchText = `${title} ${description} ${content} ${categories.join(" ")}`;
  const extractedDeadline = extractDeadline(searchText);
  const deadline = String(item.deadline || "") || extractedDeadline.date;
  const deadlineAt = deadline ? buildDeadlineAt(deadline, extractedDeadline.rawText) : null;
  const completionDateText = extractCompletionDateText(searchText);
  const isExpired = deadline ? daysUntil(deadline) < 0 : false;
  const staleInfo = getStaleOpportunityInfo({
    title,
    description,
    content,
    publishedDate,
    deadline,
    sourceName: source.name,
    sourceType: source.source_type || "",
    connectorType: connector.connector_type,
  });
  const qualityStatus = staleInfo.isStale
    ? "not_opportunity"
    : !deadline && completionDateText
    ? "needs_review"
    : source.name === FAXAFLOAHAFNIR_SOURCE_NAME && !deadline
    ? "needs_review"
    : getConnectorOpportunityQuality(searchText);
  const opportunityIntent = staleInfo.isStale ? "stale_opportunity" : getConnectorOpportunityIntent(searchText, title);
  const buyer = getConnectorItemBuyer(item, connector.connector_type, source.name, title) || "Unknown buyer";

  return {
    source_id: connector.source_id,
    external_id: externalId,
    country_code: "IS",
    title,
    buyer,
    category,
    type: "tender",
    description: description || title || `Imported from ${source.name}`,
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
    status: isExpired || staleInfo.isStale ? "hidden" : "open",
    raw_payload: {
      connector_type: connector.connector_type,
      source_name: source.name,
      ...(source.name === FAXAFLOAHAFNIR_SOURCE_NAME ? { source_intent: "high_intent_procurement" } : {}),
      buyer,
      quality_status: qualityStatus,
      opportunity_intent: opportunityIntent,
      hidden_from_reports: staleInfo.isStale || opportunityIntent === "news_context" || opportunityIntent === "not_opportunity",
      ...(staleInfo.isStale ? {
        admin_report_status: "hidden",
        stale_status: "stale_or_expired",
        stale_reason: staleInfo.reason,
        stale_threshold_days: staleInfo.thresholdDays,
        stale_age_days: staleInfo.ageDays,
        old_years_detected: staleInfo.oldYears,
        expired_keywords_detected: staleInfo.expiredKeywords,
      } : {}),
      extracted_deadline_text: extractedDeadline.rawText,
      ...(deadline ? {
        bid_deadline: deadline,
        deadline_at: deadlineAt,
        bid_deadline_at: deadlineAt,
      } : {}),
      ...(completionDateText ? { completion_date_text: completionDateText } : {}),
      ...(!deadline && completionDateText ? { deadline_debug_reason: "completion_date_found_but_no_bid_deadline" } : {}),
      deadline_warning: deadline ? null : MISSING_DEADLINE_RISK,
      item,
    },
  };
}

type VegagerdinProject = {
  number: string;
  title: string;
  description: string;
  region: string;
  qualityStatus: string;
  tenderState: string;
};

async function extractVegagerdinArticleProjects(
  item: Record<string, unknown>,
  connector: ConnectorRow,
  source: NonNullable<ConnectorRow["sources"]>,
  parent: NormalizedOpportunity,
): Promise<NormalizedOpportunity[]> {
  if (connector.connector_type !== "rss_feed") return [];
  if (source.name !== VEGAGERDIN_SOURCE_NAME) return [];

  const url = String(item.link || parent.url || "");
  const articleSlug = getUrlSlug(url);
  const titleText = normalizeSearchText(`${parent.title} ${url}`);
  const isKnownRoundup = titleText.includes("helstu utbodsverk arsins") || articleSlug === "helstu-utbodsverk-arsins";
  if (!isKnownRoundup) return [];
  if (!isSafeVegagerdinArticleUrl(url)) return [];

  let html = "";
  try {
    html = await fetchTextWithTimeout(url, 8000);
  } catch (error) {
    parent.raw_payload = {
      ...parent.raw_payload,
      article_project_extraction_error: errorMessage(error),
    };
    return [];
  }

  const projects = parseVegagerdinProjectArticle(html);
  if (!projects.length) return [];

  return projects.map((project) => {
    const text = `${project.title} ${project.description}`;
    const extractedDeadline = extractStrictTenderDeadline(text);
    const deadlineWarning = getVegagerdinProjectDeadlineWarning(project.tenderState, extractedDeadline.date);
    return {
      source_id: connector.source_id,
      external_id: cleanExternalId(`vegagerdin:${articleSlug}:${project.number || slugify(project.title)}`),
      country_code: "IS",
      title: project.title,
      buyer: VEGAGERDIN_SOURCE_NAME,
      category: "Road and infrastructure works",
      type: "tender",
      description: project.description || project.title,
      deadline: extractedDeadline.date,
      published_date: parent.published_date,
      location: project.region || inferIcelandicLocation(`${project.title} ${project.description}`),
      estimated_value: null,
      currency: "ISK",
      url,
      cpv_code: null,
      requirements: [],
      keywords: uniqueStrings([
        VEGAGERDIN_SOURCE_NAME,
        "road works",
        "infrastructure",
        "útboðsverk",
        project.region,
        project.number,
        ...extractKeywordsFromText(text),
      ]),
      difficulty: "medium",
      status: "open",
      raw_payload: {
        connector_type: connector.connector_type,
        source_name: source.name,
        buyer: VEGAGERDIN_SOURCE_NAME,
        quality_status: project.qualityStatus,
        opportunity_intent: project.qualityStatus === "confirmed_tender"
          ? "confirmed_tender"
          : project.qualityStatus === "early_signal"
            ? "early_opportunity"
            : "market_signal",
        tender_state: project.tenderState,
        deadline_warning: deadlineWarning,
        extracted_deadline_text: extractedDeadline.rawText,
        parent_article_title: parent.title,
        parent_url: url,
        parent_external_id: parent.external_id,
        project_number: project.number,
        region: project.region,
        extraction_method: VEGAGERDIN_PROJECT_EXTRACTION_METHOD,
      },
    };
  });
}

function isSafeVegagerdinArticleUrl(value: string) {
  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./i, "");
    return host === "vegagerdin.is" && url.pathname.startsWith("/vegagerdin/starfsemi/frettir/");
  } catch {
    return false;
  }
}

async function fetchTextWithTimeout(url: string, timeoutMs: number) {
  const response = await fetchWithAbortTimeout(url, timeoutMs, {
    headers: {
      accept: "text/html,application/xhtml+xml",
      "user-agent": "VerkRadar source connector (+support@verkradar.is)",
    },
  });
  if (!response.ok) throw new Error(`Article fetch failed with ${response.status}`);
  return await response.text();
}

function parseVegagerdinProjectArticle(html: string): VegagerdinProject[] {
  const articleHtml = extractVegagerdinMainArticleHtml(html);
  const blocks = splitVegagerdinArticleBlocks(articleHtml);
  const projects: VegagerdinProject[] = [];
  let currentRegion = "";

  for (const block of blocks) {
    if (block.type === "heading") {
      currentRegion = cleanConnectorText(block.html, "");
      continue;
    }

    const project = parseVegagerdinProjectParagraph(block.html, currentRegion);
    if (project) projects.push(project);
  }

  return projects;
}

function extractVegagerdinMainArticleHtml(html: string) {
  const start = html.indexOf("<h1>Vestursvæði</h1>");
  const end = html.indexOf("Þessi grein birtist fyrst", start);
  if (start >= 0 && end > start) return html.slice(start, end);
  return html;
}

function splitVegagerdinArticleBlocks(html: string) {
  const blocks: Array<{ type: "heading" | "paragraph"; html: string }> = [];
  const pattern = /<h1\b[^>]*>[\s\S]*?<\/h1>|<p\b[^>]*>[\s\S]*?<\/p>/gi;
  for (const match of html.matchAll(pattern)) {
    const value = match[0] || "";
    if (/^<h1\b/i.test(value)) blocks.push({ type: "heading", html: value });
    else blocks.push({ type: "paragraph", html: value });
  }
  return blocks;
}

function parseVegagerdinProjectParagraph(html: string, region: string): VegagerdinProject | null {
  const plain = cleanConnectorText(html, "");
  if (!plain) return null;

  const numbered = plain.match(/^(\d{2})\s*:\s*(.+)$/u);
  const lettered = plain.match(/^([A-ZÁÉÍÓÚÝÞÆÖ])\s*:\s*(.+)$/u);
  const match = numbered || lettered;
  if (!match?.[1] || !match?.[2]) return null;

  const number = match[1].trim();
  const rest = match[2].replace(/\s+/g, " ").trim();
  const titleEnd = findVegagerdinProjectTitleEnd(rest);
  const title = `${number}: ${rest.slice(0, titleEnd).replace(/[.。]\s*$/u, "").trim()}`;
  const description = rest.slice(titleEnd).replace(/^[.\s]+/u, "").trim() || rest;
  if (title.length < 6 || description.length < 24) return null;

  return {
    number,
    title,
    description,
    region,
    ...classifyVegagerdinProject(`${title} ${description}`),
  };
}

function findVegagerdinProjectTitleEnd(value: string) {
  const starts = [
    " Verkið ",
    "Verkið ",
    " Lagður ",
    "Lagður ",
    " Um er ",
    "Um er ",
    " Verkefnið ",
    "Verkefnið ",
    " Framkvæmdin ",
    "Framkvæmdin ",
    " Ætlunin ",
    "Ætlunin ",
    " Stálþilsframkvæmd",
    "Stálþilsframkvæmd",
    " Gerð ",
    "Gerð ",
    " Steyping ",
    "Steyping ",
    " Viðhaldsdýpkun",
    "Viðhaldsdýpkun",
    " Dýpkun ",
    "Dýpkun ",
  ];
  const indexes = starts
    .map((needle) => value.indexOf(needle))
    .filter((index) => index > 8);
  if (indexes.length) return Math.min(...indexes);

  const sentenceEnd = value.indexOf(". ");
  if (sentenceEnd > 8 && sentenceEnd < 180) return sentenceEnd;
  return Math.min(value.length, 150);
}

function classifyVegagerdinProject(text: string) {
  const normalized = normalizeSearchText(text);
  const alreadyTendered = [
    "utbod var auglyst",
    "utbodid var auglyst",
    "utbod auglyst",
    "auglyst utbod",
    "bodid ut",
    "var bodid ut",
    "verdid bodid ut",
    "utbod var opnad",
    "utbod opnud",
    "utbod hefur thegar farid fram",
    "utbod hefur farid fram",
    "utbodid hefur farid fram",
    "utbodid hefur thegar farid fram",
    "verkid var bodid ut",
    "laegstbjodandi",
    "laegst bjodandi",
    "laegstbjodandi var",
    "samningur var",
    "samid var",
    "skrifad var undir verksamning",
    "tilbod barst",
    "tilbod voru opnud",
    "tilbod opnud",
  ];
  if (alreadyTendered.some((phrase) => normalized.includes(normalizeSearchText(phrase)))) {
    const awardedPhrases = [
      "laegstbjodandi",
      "laegst bjodandi",
      "samningur var",
      "samid var",
      "skrifad var undir verksamning",
    ];
    const tenderState = awardedPhrases.some((phrase) => normalized.includes(normalizeSearchText(phrase)))
      ? "tender_awarded"
      : "already_tendered";
    return { qualityStatus: "confirmed_tender", tenderState };
  }

  const openTender = [
    "oskad eftir tilbodum",
    "tilbodsfrestur",
    "skilafrestur",
    "verdfyrirspurn",
    "rammasamningur",
    "forval",
    "utbodsauglysing",
    "utbod auglyst",
  ];
  if (openTender.some((phrase) => normalized.includes(normalizeSearchText(phrase)))) {
    return { qualityStatus: "confirmed_tender", tenderState: "announced" };
  }

  const early = [
    "aaetlad utbod",
    "aaetlad er ad bjoda",
    "aaetlad er ad bjoda ut",
    "fyrirhugad utbod",
    "utbod er aaetlad",
    "utbodid fer fram",
    "utbod fer fram",
    "utbodid verdur",
    "utbod verdur",
    "verdur bodid ut",
    "boda verkid ut",
    "senn i utbod",
    "fyrirhugad",
    "fyrirhugadar framkvaemdir",
    "aaetladar framkvaemdir",
    "stefnt er",
  ];
  if (early.some((phrase) => normalized.includes(normalizeSearchText(phrase)))) {
    return { qualityStatus: "early_signal", tenderState: "upcoming_tender" };
  }

  return { qualityStatus: "needs_review", tenderState: "project_signal" };
}

function getVegagerdinProjectDeadlineWarning(tenderState: string, deadline: string | null) {
  if (deadline) return null;
  if (tenderState === "already_tendered" || tenderState === "tender_awarded" || tenderState === "awarded" || tenderState === "announced") {
    return "Tender appears already announced/awarded — verify source article.";
  }
  if (tenderState === "upcoming_tender") {
    return "Formal tender deadline not found yet — monitor source article.";
  }
  return "No formal tender deadline extracted — verify source article.";
}

function extractStrictTenderDeadline(text: string) {
  const normalized = normalizeSearchText(text);
  const hasDeadlineIntent = [
    "skilafrestur",
    "tilbodsfrestur",
    "tilbod skulu hafa borist",
    "tilbodum skal skila",
    "skil tilboda",
    "frestur til",
    "skila fyrir",
    "fyrir kl",
    "eigi sidar en",
  ].some((phrase) => normalized.includes(normalizeSearchText(phrase)));
  if (!hasDeadlineIntent) return { date: null, rawText: null };
  return extractDeadline(text);
}

function getUrlSlug(value: string) {
  try {
    const pathname = new URL(value).pathname;
    return slugify(pathname.split("/").filter(Boolean).pop() || value);
  } catch {
    return slugify(value);
  }
}

function slugify(value: string) {
  return normalizeSearchText(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100);
}

function buildConnectorDescription(options: {
  title: string;
  cleanDescription: string;
  content: string;
  category: string;
  sourceName: string;
}) {
  const bestText = [options.cleanDescription, options.content]
    .map((value) => cleanConnectorText(value, ""))
    .find((value) =>
      value &&
      normalizeSearchText(value) !== normalizeSearchText(options.title) &&
      !(options.sourceName === RIKISKAUP_SOURCE_NAME && isPollutedUtbodsvefurText(value))
    );

  if (bestText) return bestText;

  if (options.sourceName === RIKISKAUP_SOURCE_NAME) {
    return [
      "Útboðstilkynning flutt inn af Útboðsvef.",
      options.category ? `Flokkur: ${options.category}.` : "",
      "Opnið upprunasíðuna til að staðfesta kaupanda, skilafrest, kröfur og útboðsgögn.",
    ].filter(Boolean).join(" ");
  }

  return options.title;
}

function isPollutedUtbodsvefurText(value: string) {
  const text = String(value || "");
  const signals = [
    "Útboðsvefur.is - Opinber útboð",
    "Fjöldi útboð",
    "Framkvæmdasýslan",
    "Ríkiseignir",
    "Grímsnes",
    "Garðabær",
  ].filter((term) => text.includes(term)).length;
  return signals >= 3 || /^Útboðsvefur\s+Útboðsvefur\.is/i.test(text);
}

function getConnectorItemBuyer(item: Record<string, unknown>, connectorType: ConnectorType, sourceName = "", title = "") {
  if (connectorType === "wordpress_rest") {
    const embedded = item._embedded as Record<string, unknown> | undefined;
    const authors = Array.isArray(embedded?.author) ? embedded?.author as Record<string, unknown>[] : [];
    const authorName = stripHtml(String(authors[0]?.name || ""));
    const authorUrl = stripHtml(String(authors[0]?.url || ""));
    if (sourceName === RIKISKAUP_SOURCE_NAME) {
      return sanitizeConnectorBuyer(inferRikiskaupBuyer(title, authorName, authorUrl), sourceName);
    }
    return sanitizeConnectorBuyer(authorName, sourceName);
  }

  return sanitizeConnectorBuyer(stripHtml(String(item.buyer || item.creator || "")), sourceName);
}

async function enrichRikiskaupOpportunityFromDetailPage(opportunity: NormalizedOpportunity) {
  const url = String(opportunity.url || "");
  if (!url) return;
  try {
    const pageUrl = new URL(url);
    if (pageUrl.hostname.replace(/^www\./i, "") !== "utbodsvefur.is") return;
    const response = await fetchWithAbortTimeout(pageUrl.toString(), 5000, {
      headers: {
        accept: "text/html,application/xhtml+xml",
        "user-agent": "VerkRadar source connector (+support@verkradar.is)",
      },
    });
    if (!response.ok) throw new Error(`Ríkiskaup detail fetch failed (${response.status})`);
    const html = await response.text();
    const detail = parseRikiskaupTenderDetailPage(html);
    if (!detail.hasUsefulDetail) return;

    if (detail.buyer) opportunity.buyer = detail.buyer;
    if (detail.deadline) {
      opportunity.deadline = detail.deadline;
      opportunity.status = daysUntil(detail.deadline) < 0 ? "hidden" : "open";
    }
    if (detail.type) opportunity.type = detail.type;
    if (detail.category) opportunity.category = detail.category;
    if (detail.description) opportunity.description = detail.description;
    if (detail.location) opportunity.location = detail.location;

    const isExpired = opportunity.deadline ? daysUntil(opportunity.deadline) < 0 : false;
    opportunity.raw_payload = {
      ...opportunity.raw_payload,
      detail_page_enriched: true,
      detail_page_url: url,
      ...(detail.buyer ? { buyer: detail.buyer, extracted_buyer: detail.buyer } : {}),
      ...(detail.type ? { tender_type: detail.type } : {}),
      ...(detail.tenderNumber ? { tender_number: detail.tenderNumber } : {}),
      ...(detail.deadline ? {
        extracted_deadline_text: detail.deadlineRaw,
        bid_deadline: detail.deadline,
        deadline_at: detail.deadlineAt || null,
        bid_deadline_at: detail.deadlineAt || null,
      } : {}),
      ...(!detail.deadline && detail.deadlineDebugReason ? { deadline_debug_reason: detail.deadlineDebugReason } : {}),
      ...(detail.openingDate ? { opening_date: detail.openingDate } : {}),
      ...(detail.documentsDate ? { tender_documents_date: detail.documentsDate } : {}),
      ...(detail.completionDate ? { completion_date_text: detail.completionDate } : {}),
      ...(detail.location ? { extracted_location: detail.location } : {}),
      quality_status: detail.deadline ? "confirmed_tender" : opportunity.raw_payload.quality_status,
      opportunity_intent: detail.deadline ? "confirmed_tender" : opportunity.raw_payload.opportunity_intent,
      hidden_from_reports: isExpired ? true : opportunity.raw_payload.hidden_from_reports === true,
      ...(isExpired ? { deadline_state: "passed", admin_report_status: "hidden" } : {}),
    };
  } catch (error) {
    opportunity.raw_payload = {
      ...opportunity.raw_payload,
      detail_page_enrichment_error: errorMessage(error),
    };
  }
}

function applyRikiskaupMetadataFallback(opportunity: NormalizedOpportunity) {
  const text = `${opportunity.title || ""} ${opportunity.description || ""} ${opportunity.buyer || ""} ${opportunity.raw_payload?.extracted_buyer || ""}`;
  const inferredLocation = inferRikiskaupLocation(text);
  if (inferredLocation && isGenericImportedLocation(opportunity.location)) {
    opportunity.location = inferredLocation;
    opportunity.raw_payload = {
      ...opportunity.raw_payload,
      extracted_location: inferredLocation,
      location_inference: "rikiskaup_title_description_fallback",
    };
  }

  const currentBuyer = String(opportunity.buyer || "");
  if (isGenericBuyerName(currentBuyer) && isLikelyReykjavikMunicipalTender(text)) {
    opportunity.buyer = "Reykjavíkurborg";
    opportunity.raw_payload = {
      ...opportunity.raw_payload,
      buyer: "Reykjavíkurborg",
      extracted_buyer: "Reykjavíkurborg",
      buyer_inference: "rikiskaup_reykjavik_tender_fallback",
    };
  }
}

function isGenericImportedLocation(value: string) {
  const normalized = normalizeLocationText(value);
  return !normalized ||
    normalized === "unknown" ||
    normalized === "all iceland" ||
    normalized === "iceland" ||
    normalized === "island";
}

function isGenericBuyerName(value: string) {
  const normalized = normalize(String(value || ""));
  return !normalized ||
    normalized === "unknown buyer" ||
    normalized === "unknown" ||
    normalized === "admin" ||
    normalized === "administrator" ||
    normalized === "editor" ||
    normalized === "ritstjori";
}

function isLikelyReykjavikMunicipalTender(text: string) {
  const normalized = normalize(String(text || ""));
  return normalized.includes("reykjavikurborg") ||
    (
      normalized.includes("reykjavik") &&
      (
        normalized.includes("vetrarthjonusta") ||
        normalized.includes("gongu og hjolaleida") ||
        normalized.includes("göngu og hjólaleiða")
      )
    );
}

function parseRikiskaupTenderDetailPage(html: string) {
  const mainHtml = extractRikiskaupTenderMainHtml(html);
  const text = cleanConnectorText(mainHtml, "");
  const buyer = cleanRikiskaupBuyer(
    extractLabeledValue(text, ["Útboðsaðili", "Utboðsaðili", "Utbodsaðili", "Utbodsadili"]) ||
    extractRikiskaupBuyerFromText(text),
  );
  const type = extractLabeledValue(text, ["Tegund"]) || "";
  const tenderDeadline = extractRikiskaupTenderDeadline(text);
  const deadlineRaw = tenderDeadline.rawText || "";
  const deadline = tenderDeadline.date;
  const openingDate = parseDeadlineDate(extractLabeledValue(text, ["Opnun tilboða", "Opnun tilboda"]) || "");
  const documentsDate = parseDeadlineDate(extractLabeledValue(text, ["Útboðsgögn afhent", "Utbodsgogn afhent"]) || "");
  const completionDate = extractCompletionDateText(text);
  const tenderNumber = extractTenderNumber(text);
  const description = buildRikiskaupDetailDescription(text, deadlineRaw);
  const location = inferRikiskaupLocation(`${text} ${buyer}`);
  return {
    buyer,
    type: type || "tender",
    category: type || "public procurement",
    tenderNumber,
    deadline,
    deadlineRaw: deadlineRaw || null,
    deadlineDebugReason: tenderDeadline.debugReason || null,
    deadlineAt: deadline ? buildDeadlineAt(deadline, deadlineRaw) : null,
    openingDate,
    documentsDate,
    completionDate,
    location,
    description,
    hasUsefulDetail: Boolean(buyer || deadline || description),
  };
}

function extractRikiskaupTenderMainHtml(html: string) {
  const body = String(html || "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, " ")
    .replace(/<header\b[^>]*>[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, " ")
    .replace(/<aside\b[^>]*>[\s\S]*?<\/aside>/gi, " ");
  const mainMatch = body.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  const articleMatch = body.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i);
  const content = articleMatch?.[1] || mainMatch?.[1] || body;
  const titleStart = content.search(/<h1\b|Útboðsaðili|Utbodsadili|Skilafrestur|F\.h\./i);
  return titleStart >= 0 ? content.slice(titleStart) : content;
}

function extractLabeledValue(text: string, labels: string[]) {
  const compact = String(text || "").replace(/\s+/g, " ").trim();
  if (!compact) return "";
  const labelPattern = labels.map(escapeRegex).join("|");
  const stopLabels = [
    "Númer",
    "Numer",
    "Útboðsaðili",
    "Utboðsaðili",
    "Utbodsaðili",
    "Utbodsadili",
    "Tegund",
    "Útboðsgögn afhent",
    "Utbodsgogn afhent",
    "Skilafrestur",
    "Tímafrestur útboðs",
    "Timafrestur utbods",
    "Opnun tilboða",
    "Opnun tilboda",
    "F.h.",
    "Verkinu skal",
    "Lauslegt yfirlit",
    "Nánari upplýsingar",
  ].map(escapeRegex).join("|");
  const match = compact.match(new RegExp(`(?:${labelPattern})\\s*:?\\s*([\\s\\S]{1,320}?)(?=\\s+(?:${stopLabels})\\s*:?|$)`, "i"));
  return match ? cleanLabeledValue(match[1]) : "";
}

function cleanLabeledValue(value: string) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .replace(/^(Útboðsaðili|Utbodsadili|Tegund|Skilafrestur|Tímafrestur útboðs|Timafrestur utbods|Opnun tilboða|Opnun tilboda)\s*:?/i, "")
    .trim();
}

function extractRikiskaupBuyerFromText(text: string) {
  const value = String(text || "");
  const explicit = value.match(/\bÚtboðsaðili\s*:?\s*([^:]{3,160}?)(?=\s+(?:Tegund|Útboðsgögn|Skilafrestur|Tímafrestur útboðs|Opnun tilboða)\b|$)/i);
  if (explicit?.[1]) return explicit[1].trim();
  const match = value.match(/F\.h\.\s+([^,.]{3,120}?Reykjavíkurborgar)/i);
  if (match?.[1]) return match[1].trim();
  if (/Reykjavíkurborg/i.test(value)) return "Reykjavíkurborg";
  return "";
}

function cleanRikiskaupBuyer(value: string) {
  const cleaned = cleanBuyerName(value)
    .replace(/\s+/g, " ")
    .replace(/\b(?:Tegund|Útboðsgögn afhent|Skilafrestur|Opnun tilboða)\b[\s\S]*$/i, "")
    .trim();
  if (/^FSRE\b/i.test(cleaned) || /Framkvæmdasýslan\s+Ríkiseignir/i.test(cleaned)) {
    return "FSRE / Framkvæmdasýslan Ríkiseignir";
  }
  if (/^Reykjavíkurborg(?:ar)?$/i.test(cleaned) || /Umhverfis- og skipulagssviðs Reykjavíkurborgar/i.test(cleaned)) {
    return "Reykjavíkurborg";
  }
  return cleaned;
}

function extractRikiskaupTenderDeadline(text: string): { date: string | null; rawText: string | null; debugReason?: string | null } {
  const compact = String(text || "").replace(/\s+/g, " ").trim();
  if (!compact) return { date: null, rawText: null, debugReason: "empty_detail_text" };

  const labeled = extractLabeledValue(compact, ["Skilafrestur"]);
  const timeLimitLabeled = extractLabeledValue(compact, ["Tímafrestur útboðs", "Timafrestur utbods"]);
  if (timeLimitLabeled) {
    const parsed = parseDeadlineDate(timeLimitLabeled);
    if (parsed) return { date: parsed, rawText: timeLimitLabeled };
  }
  if (labeled) {
    const parsed = parseDeadlineDate(labeled);
    if (parsed) return { date: parsed, rawText: labeled };
  }

  const extracted = extractDeadline(compact);
  if (extracted.date) return extracted;

  return {
    date: null,
    rawText: null,
    debugReason: containsCompletionDateIntent(compact)
      ? "only_completion_date_found_no_bid_deadline"
      : "no_bid_deadline_phrase_found",
  };
}

function buildRikiskaupDetailDescription(text: string, deadlineRaw = "") {
  const compact = String(text || "").replace(/\s+/g, " ").trim();
  const startMatches = [
    compact.search(/F\.h\.[^.]{0,260}ósk(?:að|ar) eftir tilboðum/i),
    compact.search(/(?:Reykjavíkurborg|sveitarfélag|bærinn|kaupandi)[^.]{0,260}ósk(?:að|ar) eftir tilboðum/i),
    compact.search(/óskar eftir tilboðum|óskað eftir tilboðum|oskar eftir tilbodum|oskad eftir tilbodum/i),
    compact.search(/verkið felur|verkefnið felur|gatna-|gatnagerð|stígagerð/i),
  ].filter((index) => index >= 0);
  const start = startMatches.length ? Math.min(...startMatches) : -1;
  if (start < 0) return "";
  const stop = compact.slice(start).search(/\s+(Skoða nánar|Um vefinn|Nánari upplýsingar|Auglýsandi|Flokkar|Tengdar fréttir|2014\s*-\s*2026)\b/i);
  const end = stop > 120 ? start + stop : start + 1200;
  const parts = [compact.slice(start, end).trim()];
  if (deadlineRaw) parts.push(`Skilafrestur: ${deadlineRaw}`);
  return uniqueStrings(parts)
    .join(" ")
    .replace(/\s+Skoða nánar[\s\S]*$/i, "")
    .replace(/\s+Um vefinn[\s\S]*$/i, "")
    .replace(/\s+2014\s*-\s*2026[\s\S]*$/i, "")
    .replace(/\s+/g, " ")
    .slice(0, 1400)
    .trim();
}

function extractCompletionDateText(text: string) {
  const match = String(text || "").match(/(?:Verkinu skal lokið|Áætluð verklok|Aaetluð verklok|Skiladagur verks|Verklok)[^.]{0,180}\.?/i);
  return match ? match[0].trim() : "";
}

function extractTenderNumber(text: string) {
  const match = String(text || "").match(/\b(?:útboð\s*nr\.?|nr\.?)\s*(\d{3,})\b/i);
  return match?.[1] || "";
}

function inferRikiskaupLocation(text: string) {
  const normalized = normalize(String(text || ""));
  if (normalized.includes("reykjavik") || normalized.includes("reykjavík") || normalized.includes("vogabyggd") || normalized.includes("vogabyggð")) {
    return "Reykjavík / Höfuðborgarsvæðið";
  }
  if (normalized.includes("stora hraun") || normalized.includes("gaulverjabaejarvegi") || normalized.includes("arborg")) {
    return "Árborg / Suðurland";
  }
  if (normalized.includes("gardabaer") || normalized.includes("garðabær") || normalized.includes("vifilsstadavegur") || normalized.includes("vifilsstaðavegur") || normalized.includes("vífilsstaðavegur")) {
    return "Garðabær / Höfuðborgarsvæðið";
  }
  return "";
}

function buildDeadlineAt(deadline: string, rawText: string | null) {
  const timeMatch = String(rawText || "").match(/\bkl\.?\s*(\d{1,2})[:.](\d{2})\b/i);
  if (!timeMatch) return null;
  return `${deadline}T${timeMatch[1].padStart(2, "0")}:${timeMatch[2]}:00`;
}

function escapeRegex(value: string) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function sanitizeConnectorBuyer(value: string, sourceName = "") {
  const clean = cleanBuyerName(value);
  if (clean && !isInvalidConnectorBuyer(clean)) return clean;
  return inferBuyerFromSourceName(sourceName);
}

function isInvalidConnectorBuyer(value: string) {
  const normalized = normalizeSearchText(value);
  if (!normalized) return true;
  if ([
    "admin",
    "administrator",
    "ritstjori",
    "editor",
    "noreply",
    "no reply",
    "wordpress",
    "wp admin",
    "user",
    "test",
  ].includes(normalized)) return true;
  if (normalized.includes("noreply")) return true;
  if (/^wp\s*[-_]?\s*\d+$/.test(normalized)) return true;
  return false;
}

function inferBuyerFromSourceName(sourceName: string) {
  const normalized = normalizeSearchText(sourceName);
  if (!normalized) return "";
  if (normalized.includes("borgarbyggd")) return "Borgarbyggð";
  if (normalized.includes("akranes")) return "Akraneskaupstaður";
  if (normalized.includes("gardabaer")) return "Garðabær";
  if (normalized.includes("reykjanesbaer")) return "Reykjanesbær";
  if (normalized.includes("kopavogur")) return "Kópavogur";
  if (normalized.includes("hafnarfjordur")) return "Hafnarfjarðarbær";
  if (normalized.includes("mosfellsbaer")) return "Mosfellsbær";
  if (normalized.includes("arborg")) return "Sveitarfélagið Árborg";
  if (normalized.includes("fjardabyggd")) return "Fjarðabyggð";
  if (normalized.includes("mulathing")) return "Múlaþing";
  return "";
}

function inferRikiskaupBuyer(title: string, authorName: string, authorUrl = "") {
  const normalizedAuthor = normalizeSearchText(authorName);
  const normalizedUrl = normalizeSearchText(authorUrl);
  const titleBuyer = inferBuyerFromTitle(title);
  if (titleBuyer) return titleBuyer;

  if (!normalizedAuthor) return "";
  if (normalizedAuthor.includes("rikiskaup") || normalizedAuthor.includes("fjarsyslan")) return "Fjársýslan / Ríkiskaup";
  if (normalizedAuthor.includes("vegagerd")) return "Vegagerðin";
  if (normalizedAuthor.includes("landspitali")) return "Landspítali";
  if (normalizedAuthor.includes("landsvirkjun")) return "Landsvirkjun";
  if (normalizedAuthor.includes("reykjanes")) return "Reykjanesbær";
  if (normalizedAuthor.includes("sveitarfelag") || normalizedAuthor.includes("sveitarfelagid")) return authorName;
  if (normalizedAuthor.includes("innkaupadeild") && authorName.split(/\s+/).length <= 4) return authorName;
  if (normalizedUrl.includes("landsvirkjun")) return "Landsvirkjun";
  if (normalizedUrl.includes("landspitali")) return "Landspítali";
  if (normalizedUrl.includes("vegagerd")) return "Vegagerðin";
  return "";
}

function inferBuyerFromTitle(title: string) {
  const cleanTitle = stripHtml(title);
  const directPatterns = [
    /^(.{3,90}?)\s+(?:óskar|oskar)\s+eftir\s+(?:tilboðum|tilbodum|upplýsingum|upplysingum)/i,
    /^(.{3,90}?)\s+(?:býður|bydur)\s+(?:hér\s+með\s+)?út/i,
    /^(.{3,90}?)\s+auglýsir\s+(?:útboð|utbod|eftir)/i,
    /^(.{3,90}?)\s+(?:fyrir hönd|f\.h\.)/i,
  ];
  for (const pattern of directPatterns) {
    const match = cleanTitle.match(pattern);
    if (match?.[1]) return cleanBuyerName(match[1]);
  }

  const municipalityMatch = cleanTitle.match(/\bí\s+(Sveitarfélaginu\s+[A-ZÁÉÍÓÚÝÞÆÖ][^,–-]+)/);
  if (municipalityMatch?.[1]) return cleanBuyerName(municipalityMatch[1].replace("Sveitarfélaginu", "Sveitarfélagið"));

  return "";
}

function cleanBuyerName(value: string) {
  const cleaned = stripHtml(value)
    .replace(/^(?:útboð|utbod|verðfyrirspurn|verdfyrirspurn)\s+/i, "")
    .replace(/[,:–-]\s*$/g, "")
    .trim();
  if (/reykjavíkurborg/i.test(cleaned)) return "Reykjavíkurborg";
  return cleaned;
}

function getConnectorOpportunityQuality(text: string) {
  const intent = getConnectorOpportunityIntent(text, text);
  if (intent === "confirmed_tender") return "confirmed_tender";
  if (intent === "early_opportunity") return "early_signal";
  if (intent === "news_context" || intent === "not_opportunity") return "not_opportunity";
  const normalized = normalizeSearchText(text);
  if (normalized.includes("senn i utbod")) return "early_signal";

  const confirmedTenderPhrases = [
    "útboð",
    "utbod",
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
    "verðkönnun",
    "verdkonnun",
    "innkaup",
    "rammasamningur",
    "samningskaup",
    "forval",
  ].map(normalizeSearchText);
  if (confirmedTenderPhrases.some((phrase) => normalized.includes(phrase))) return "confirmed_tender";

  const earlySignalPhrases = [
    "senn í útboð",
    "senn i utbod",
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
    "brúargerð",
    "bruargerd",
    "jarðvinna",
    "jardvinna",
    "gatnagerð",
    "gatnagerd",
    "markaðskönnun",
    "markadskonnun",
    "rfi",
  ].map(normalizeSearchText);
  if (earlySignalPhrases.some((phrase) => normalized.includes(phrase))) return "early_signal";

  return "needs_review";
}

function getConnectorOpportunityIntent(text: string, title = "") {
  const normalized = normalizeSearchText(text);
  const normalizedTitle = normalizeSearchText(title);
  const confirmedTenderPhrases = [
    ...CLEAR_PROCUREMENT_INTENT_PHRASES,
    "tilboð",
    "tilbod",
    "tilboðum",
    "tilbodum",
    "tender",
    "procurement",
  ].map(normalizeSearchText);
  if (confirmedTenderPhrases.some((phrase) => normalized.includes(phrase))) return "confirmed_tender";

  const earlyProcurementPhrases = [
    "senn i utbod",
    "aaetlad utbod",
    "aaetlad er ad bjoda ut",
    "fyrirhugad utbod",
  ].map(normalizeSearchText);
  if (earlyProcurementPhrases.some((phrase) => normalized.includes(phrase))) return "early_opportunity";

  const negativeTitlePhrases = NEWS_TRAFFIC_PROGRESS_PHRASES.map(normalizeSearchText);
  if (negativeTitlePhrases.some((phrase) => normalizedTitle.includes(phrase))) return "news_context";

  const earlyOpportunityPhrases = [
    "markadskonnun",
    "rfi",
  ].map(normalizeSearchText);
  if (earlyOpportunityPhrases.some((phrase) => normalized.includes(phrase))) return "early_opportunity";

  const marketSignalPhrases = [
    "aaetladar framkvaemdir",
    "fyrirhugadar framkvaemdir",
    "framkvaemdir hefjast",
    "malbikunarframkvaemdir",
    "vegaframkvaemdir",
    "bruargerd",
    "jardvinna",
    "gatnagerd",
    "fraesing",
  ].map(normalizeSearchText);
  if (marketSignalPhrases.some((phrase) => normalized.includes(phrase))) return "market_signal";

  return "market_signal";
}

function getStaleOpportunityInfo(input: {
  title?: string;
  description?: string;
  content?: string;
  publishedDate?: string | null;
  deadline?: string | null;
  sourceName?: string;
  sourceType?: string;
  connectorType?: string;
}) {
  const deadline = String(input.deadline || "").slice(0, 10);
  if (deadline && daysUntil(deadline) >= 0) {
    return { isStale: false, reason: "", thresholdDays: null as number | null, ageDays: null as number | null, oldYears: [] as number[], expiredKeywords: [] as string[] };
  }

  const text = `${input.title || ""} ${input.description || ""} ${input.content || ""}`;
  const normalized = normalizeSearchText(text);
  const oldYears = getOldYears(normalized);
  const expiredKeywords = getExpiredResultKeywords(normalized);
  const publishedDate = parseDate(String(input.publishedDate || ""));
  const ageDays = publishedDate ? Math.floor((Date.now() - new Date(`${publishedDate}T00:00:00Z`).getTime()) / 86400000) : null;
  const thresholdDays = isStrictStaleSource(input) ? 45 : 60;

  if (oldYears.length) {
    return { isStale: true, reason: `Old year detected (${oldYears.join(", ")}) and no future deadline found.`, thresholdDays, ageDays, oldYears, expiredKeywords };
  }
  if (expiredKeywords.length) {
    return { isStale: true, reason: `Expired/result wording detected (${expiredKeywords.slice(0, 3).join(", ")}) and no future deadline found.`, thresholdDays, ageDays, oldYears, expiredKeywords };
  }
  if (ageDays !== null && ageDays > thresholdDays) {
    return { isStale: true, reason: `Published ${ageDays} days ago with no current deadline.`, thresholdDays, ageDays, oldYears, expiredKeywords };
  }
  return { isStale: false, reason: "", thresholdDays, ageDays, oldYears, expiredKeywords };
}

function isStrictStaleSource(input: { sourceName?: string; sourceType?: string; connectorType?: string }) {
  const text = normalizeSearchText(`${input.sourceName || ""} ${input.sourceType || ""} ${input.connectorType || ""}`);
  return input.connectorType === "rss_feed" && [
    "municipal",
    "sveitarfelag",
    "akranes",
    "borgarbyggd",
    "arborg",
    "selfoss",
    "gardabaer",
    "reykjanesbaer",
    "hafnarfjordur",
    "mosfellsbaer",
    "kopavogur",
    "mulathing",
    "fjardabyggd",
  ].some((value) => text.includes(normalizeSearchText(value)));
}

function getOldYears(normalizedText: string) {
  const currentYear = new Date().getUTCFullYear();
  const years = new Set<number>();
  for (const match of normalizedText.matchAll(/\b(20[0-9]{2})\b/g)) {
    const year = Number(match[1]);
    if (year >= 2020 && year < currentYear) years.add(year);
  }
  return Array.from(years).sort();
}

function getExpiredResultKeywords(normalizedText: string) {
  const phrases = [
    "nidurstada utbods",
    "nidurstodur utbods",
    "opnun tilboda",
    "tilbod opnud",
    "lokid",
    "lokid utbodi",
    "buid",
    "ut runnid",
    "eldri utbod",
    "utbodssaga",
    "samningur gerdur",
    "verksamningur",
    "awarded",
    "tender results",
    "contract awarded",
    "expired",
  ];
  return phrases.filter((phrase) => normalizedText.includes(normalizeSearchText(phrase)));
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

async function resolveCrossSourceDuplicates(
  supabase: ReturnType<typeof createClient>,
  changedOpportunityIds: string[],
) {
  const changedIds = uniqueStrings(changedOpportunityIds).filter(Boolean);
  if (!changedIds.length) return;

  const { data: changedRows, error: changedError } = await supabase
    .from("opportunities")
    .select("id, source_id, title, buyer, description, deadline, published_date, status, raw_payload, url, sources(name, source_type)")
    .in("id", changedIds);
  if (changedError) throw changedError;
  if (!changedRows?.length) return;

  const { data: candidateRows, error: candidateError } = await supabase
    .from("opportunities")
    .select("id, source_id, title, buyer, description, deadline, published_date, status, raw_payload, url, sources(name, source_type)")
    .not("title", "is", null)
    .limit(1500);
  if (candidateError) throw candidateError;

  const updates = new Map<string, { canonicalId: string; reason: string; duplicateGroupKey: string }>();
  const canonicalIds = new Set<string>();

  for (const changed of changedRows) {
    const duplicateGroup = (candidateRows || []).filter((candidate) =>
      candidate.id !== changed.id && areLikelyDuplicateOpportunities(changed, candidate)
    );
    if (!duplicateGroup.length) continue;

    const group = [changed, ...duplicateGroup];
    const canonical = group.sort((a, b) => getCanonicalOpportunityScore(b) - getCanonicalOpportunityScore(a))[0];
    const duplicateGroupKey = getDuplicateGroupKey(canonical);
    canonicalIds.add(String(canonical.id));

    for (const row of group) {
      if (row.id === canonical.id) continue;
      updates.set(String(row.id), {
        canonicalId: String(canonical.id),
        duplicateGroupKey,
        reason: `Likely duplicate of ${String(canonical.title || "canonical opportunity")} from ${getSourceName(canonical)}.`,
      });
    }
  }

  for (const canonicalId of canonicalIds) {
    const row = (candidateRows || []).find((candidate) => String(candidate.id) === canonicalId);
    if (!row) continue;
    const payload = row.raw_payload && typeof row.raw_payload === "object" ? row.raw_payload as Record<string, unknown> : {};
    const nextPayload = {
      ...payload,
      duplicate_group_key: getDuplicateGroupKey(row),
      is_duplicate: false,
      duplicate_of: null,
      canonical_opportunity_id: String(row.id),
    };
    const { error } = await supabase
      .from("opportunities")
      .update({ raw_payload: nextPayload })
      .eq("id", row.id);
    if (error) throw error;
  }

  for (const [id, update] of updates) {
    const row = (candidateRows || []).find((candidate) => String(candidate.id) === id);
    const payload = row?.raw_payload && typeof row.raw_payload === "object" ? row.raw_payload as Record<string, unknown> : {};
    const nextPayload = {
      ...payload,
      duplicate_group_key: update.duplicateGroupKey,
      canonical_opportunity_id: update.canonicalId,
      is_duplicate: true,
      duplicate_of: update.canonicalId,
      duplicate_reason: update.reason,
      hidden_from_reports: true,
      admin_report_status: "hidden",
    };
    const { error } = await supabase
      .from("opportunities")
      .update({ status: "hidden", raw_payload: nextPayload })
      .eq("id", id);
    if (error) throw error;
  }

  const duplicateIds = Array.from(updates.keys());
  if (duplicateIds.length) {
    const { error } = await supabase
      .from("opportunity_matches")
      .delete()
      .in("opportunity_id", duplicateIds);
    if (error) throw error;
  }
}

function areLikelyDuplicateOpportunities(a: Record<string, unknown>, b: Record<string, unknown>) {
  const keyA = getDuplicateGroupKey(a);
  const keyB = getDuplicateGroupKey(b);
  if (!keyA || !keyB) return false;
  if (keyA === keyB && hasDistinctiveDuplicatePhrase(keyA)) return true;
  if (!shareStrongWorkType(a, b)) return false;
  return titleSimilarity(keyA, keyB) >= 0.92 && hasDistinctiveDuplicatePhrase(`${keyA} ${keyB}`);
}

function getDuplicateGroupKey(opportunity: Record<string, unknown>) {
  return normalizeSearchText(String(opportunity.title || ""))
    .replace(/\b(utbod|utbodsauglysing|verd fyrirspurn|verdfyrirspurn|oskad eftir tilbodum|tilbod|tilbodum)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function hasDistinctiveDuplicatePhrase(text: string) {
  const tokens = text.split(/\s+/).filter((token) => token.length >= 5);
  return tokens.length >= 3 || text.length >= 42;
}

function shareStrongWorkType(a: Record<string, unknown>, b: Record<string, unknown>) {
  const terms = [
    "gatnagerd",
    "lagnir",
    "lodarframkvaemdir",
    "jardvinna",
    "malbikun",
    "bilastaedi",
    "gangstett",
    "yfirbordsfragangur",
  ];
  const textA = normalizeSearchText(`${a.title || ""} ${a.description || ""}`);
  const textB = normalizeSearchText(`${b.title || ""} ${b.description || ""}`);
  return terms.some((term) => textA.includes(term) && textB.includes(term));
}

function titleSimilarity(a: string, b: string) {
  const tokensA = new Set(a.split(/\s+/).filter((token) => token.length > 2));
  const tokensB = new Set(b.split(/\s+/).filter((token) => token.length > 2));
  if (!tokensA.size || !tokensB.size) return 0;
  const shared = Array.from(tokensA).filter((token) => tokensB.has(token)).length;
  const total = new Set([...tokensA, ...tokensB]).size;
  return shared / total;
}

function getCanonicalOpportunityScore(opportunity: Record<string, unknown>) {
  const payload = opportunity.raw_payload && typeof opportunity.raw_payload === "object" ? opportunity.raw_payload as Record<string, unknown> : {};
  let score = 0;
  const deadline = String(opportunity.deadline || "");
  if (deadline && daysUntil(deadline) >= 0) score += 80;
  if (deadline) score += 20;
  if (hasUsefulBuyer(String(opportunity.buyer || ""))) score += 20;
  if (String(opportunity.description || "").length > 250) score += 12;
  if (payload.detail_page_enriched === true || payload.page_monitor === true) score += 12;
  if (["confirmed_tender", "likely_tender"].includes(String(payload.quality_status || ""))) score += 10;
  if (payload.hidden_from_reports === true || String(opportunity.status || "") !== "open") score -= 100;
  const sourceName = getSourceName(opportunity);
  if (/garðabær|gardabaer|akranes|borgarbyggð|borgarbyggd|reykjanesbær|reykjanesbaer|faxaflóahafnir|faxafloahafnir/i.test(sourceName)) score += 18;
  if (/ríkiskaup|rikiskaup|utbodsvefur|island\.is/i.test(sourceName) && !deadline) score -= 10;
  return score;
}

function hasUsefulBuyer(value: string) {
  const normalized = normalizeSearchText(value);
  if (!normalized || normalized.includes("unknown buyer")) return false;
  return !["admin", "administrator", "editor", "ritstjori", "noreply"].some((term) => normalized.includes(term));
}

function getSourceName(opportunity: Record<string, unknown>) {
  const source = opportunity.sources && typeof opportunity.sources === "object" ? opportunity.sources as Record<string, unknown> : {};
  const payload = opportunity.raw_payload && typeof opportunity.raw_payload === "object" ? opportunity.raw_payload as Record<string, unknown> : {};
  return String(source.name || payload.source_name || "");
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
  const details = {
    debug_version: IMPORT_DEBUG_VERSION,
    skip_reasons: {},
    skipped_samples: [],
    keyword_decision_samples: [],
    ...(payload.details || {}),
  };
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
      details,
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

  const ineligibleOpportunityIds: string[] = [];
  const visibleOpportunities = (opportunities || []).filter((opportunity) => {
    const visible = isVisibleOpportunity(opportunity) && isCustomerMatchEligibleOpportunity(opportunity);
    if (!visible) {
      details.skipped_not_visible += 1;
      if (opportunity.id) ineligibleOpportunityIds.push(String(opportunity.id));
    }
    return visible;
  });
  details.opportunities_checked = visibleOpportunities.length;

  if (ineligibleOpportunityIds.length) {
    const { error: deleteIneligibleError } = await supabase
      .from("opportunity_matches")
      .delete()
      .in("opportunity_id", ineligibleOpportunityIds);
    if (deleteIneligibleError) throw deleteIneligibleError;
  }

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

    const visibleOpportunityIds = visibleOpportunities.map((opportunity) => String(opportunity.id || "")).filter(Boolean);
    const existingSafety = new Map<string, Record<string, unknown>>();
    if (visibleOpportunityIds.length) {
      const { data: existingSafetyRows, error: existingSafetyError } = await supabase
        .from("opportunity_matches")
        .select("opportunity_id, safety_status, safety_reasons, alert_eligible, review_required, reviewed_at, reviewed_by, review_note")
        .eq("company_id", company.id)
        .in("opportunity_id", visibleOpportunityIds);
      if (existingSafetyError) throw existingSafetyError;
      for (const row of existingSafetyRows || []) {
        if (row.reviewed_at) existingSafety.set(String(row.opportunity_id || ""), row);
      }
    }

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
      const safety = applyReviewedSafetyOverride(
        classifyMatchSafety(profile, opportunity, match),
        existingSafety.get(String(match.opportunity_id || "")),
      );

      rows.push({
        company_id: company.id,
        opportunity_id: match.opportunity_id,
        match_score: match.match_score,
        match_label: match.match_label,
        match_reasons: match.match_reasons,
        risks: match.risks,
        next_steps: match.next_steps,
        safety_status: safety.safety_status,
        safety_reasons: safety.safety_reasons,
        alert_eligible: safety.alert_eligible,
        review_required: safety.review_required,
        reviewed_at: safety.reviewed_at || null,
        reviewed_by: safety.reviewed_by || null,
        review_note: safety.review_note || null,
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
    autoAlertMode: String(company.auto_alert_mode || "auto_safe_only"),
  };
}

const CIVIL_STRONG_SERVICE_TERMS = [
  "jarðvinna",
  "gatnagerð",
  "gatna- og stígagerð",
  "gatna og stígagerð",
  "stígagerð",
  "lóðarframkvæmdir",
  "lagnavinna",
  "lagnir",
  "fráveita",
  "fráveitulagnir",
  "vatnsveita",
  "hitaveita",
  "vatnslagnir",
  "regnvatnslagnir",
  "drenlagnir",
  "endurnýjun lagna",
  "brunnar",
  "dælubrunnar",
  "malbikun",
  "gangstétt",
  "gangstéttir",
  "stígar",
  "bílastæði",
  "vegagerð",
  "gröftur",
  "fyllingar",
  "grjóthleðsla",
  "jarðvegsskipti",
  "undirbygging",
  "yfirborðsfrágangur",
  "hellulögn",
  "hellulagnir",
  "kantsteinn",
  "kantsteinar",
  "landmótun",
  "afvötnun",
  "jarðvegsvinna",
  "útiframkvæmdir",
  "gatnaframkvæmdir",
];

const CIVIL_OPTIONAL_WINTER_SERVICE_TERMS = [
  "snjómokstur",
  "snjóruðningur",
  "hálkuvarnir",
  "vetrarþjónusta",
  "gangstéttir",
  "stofnanalóðir",
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

const CIVIL_CONSULTING_DOWNGRADE_TERMS = [
  "for- og verkhönnun",
  "verkhönnun",
  "forhönnun",
  "hönnun",
  "ráðgjöf",
  "verkfræðiráðgjöf",
  "eftirlit",
  "umsjón",
  "verkefnastjórn",
  "verkefnastjórnun",
];

const CIVIL_CONSULTING_ALLOWED_SERVICE_TERMS = [
  "hönnun",
  "for- og verkhönnun",
  "verkhönnun",
  "forhönnun",
  "ráðgjöf",
  "verkfræðiráðgjöf",
  "eftirlit",
  "umsjón",
  "verkefnastjórn",
  "verkefnastjórnun",
];

const CIVIL_CORE_EXECUTION_PROFILE_TERMS = [
  "jarðvinna",
  "jarðvegsvinna",
  "gatnagerð",
  "gatna- og stígagerð",
  "stígagerð",
  "vegagerð",
  "lóðarframkvæmdir",
  "gröftur",
  "jarðvegsskipti",
  "fyllingar",
  "afvötnun",
  "landmótun",
  "yfirborðsfrágangur",
  "malbikun",
  "útiframkvæmdir",
];

function normalizedIncludesAny(text: string, terms: string[]) {
  const normalized = normalize(String(text || ""));
  return terms.some((term) => normalized.includes(normalize(term)));
}

function isCivilWeakGenericTerm(value: string) {
  const normalized = normalize(String(value || ""));
  return CIVIL_WEAK_GENERIC_TERMS.some((term) => normalized === normalize(term));
}

function rankMatchTerm(value: string) {
  const normalized = normalize(String(value || ""));
  if (CIVIL_STRONG_SERVICE_TERMS.some((term) => normalized === normalize(term))) return 0;
  if (CIVIL_STRONG_SERVICE_TERMS.some((term) => normalized.includes(normalize(term)) || normalize(term).includes(normalized))) return 1;
  if (CIVIL_OPTIONAL_WINTER_SERVICE_TERMS.some((term) => normalized === normalize(term))) return 2;
  if (isCivilWeakGenericTerm(value)) return 10;
  return 3;
}

function sortMatchTermsBySpecificity(values: string[]) {
  return [...values].sort((a, b) => rankMatchTerm(a) - rankMatchTerm(b) || b.length - a.length || a.localeCompare(b));
}

function getStrongCivilTermsInText(text: string) {
  const normalizedText = normalize(String(text || ""));
  return CIVIL_STRONG_SERVICE_TERMS.filter((term) => normalizedText.includes(normalize(term)));
}

function getOptionalWinterTermsInText(text: string) {
  const normalizedText = normalize(String(text || ""));
  return CIVIL_OPTIONAL_WINTER_SERVICE_TERMS.filter((term) => normalizedText.includes(normalize(term)));
}

function promoteWeakGenericHitsToSpecificCivilTerms(hits: string[], opportunityTextValue: string) {
  const strongTerms = getStrongCivilTermsInText(opportunityTextValue);
  if (!strongTerms.length || !hits.some(isCivilWeakGenericTerm)) return hits;
  const nonWeakHits = hits.filter((hit) => !isCivilWeakGenericTerm(hit));
  return Array.from(new Set([...strongTerms, ...nonWeakHits]));
}

function isCivilContractorProfile(profile: Record<string, unknown>) {
  const profileText = [
    profile.industry,
    ...asArray(profile.services),
    ...asArray(profile.includeKeywords),
  ].filter(Boolean).join(" ");
  return normalizedIncludesAny(profileText, [
    ...CIVIL_STRONG_SERVICE_TERMS,
    ...CIVIL_OPTIONAL_WINTER_SERVICE_TERMS,
    "construction",
    "contractor",
    "verktaki",
    "mannvirki",
    "jarðtækni",
  ]);
}

function hasExplicitWinterService(profile: Record<string, unknown>) {
  const profileText = [
    ...asArray(profile.services),
    ...asArray(profile.includeKeywords),
  ].filter(Boolean).join(" ");
  return normalizedIncludesAny(profileText, CIVIL_OPTIONAL_WINTER_SERVICE_TERMS);
}

function hasExplicitIndoorService(profile: Record<string, unknown>) {
  const profileText = [
    ...asArray(profile.services),
    ...asArray(profile.includeKeywords),
  ].filter(Boolean).join(" ");
  return normalizedIncludesAny(profileText, CIVIL_INDOOR_ALLOWED_SERVICE_TERMS);
}

function hasExplicitConsultingService(profile: Record<string, unknown>) {
  const profileText = [
    ...asArray(profile.services),
    ...asArray(profile.includeKeywords),
  ].filter(Boolean).join(" ");
  return normalizedIncludesAny(profileText, CIVIL_CONSULTING_ALLOWED_SERVICE_TERMS);
}

function hasCoreExecutionService(profile: Record<string, unknown>) {
  const profileText = [
    profile.industry,
    ...asArray(profile.services),
    ...asArray(profile.includeKeywords),
  ].filter(Boolean).join(" ");
  return normalizedIncludesAny(profileText, CIVIL_CORE_EXECUTION_PROFILE_TERMS);
}

function getCivilContractorFit(
  profile: Record<string, unknown>,
  opportunity: Record<string, unknown>,
  serviceHits: string[],
  keywordHits: string[],
) {
  const isCivilProfile = isCivilContractorProfile(profile);
  if (!isCivilProfile) {
    return {
      serviceHits,
      keywordHits,
      hasWeakOnlyFit: false,
      hasIndoorMismatch: false,
      hasConsultingMismatch: false,
      hasSecondaryOnlyFit: false,
      hasPromotedBroadFit: false,
      hasWinterOnlyFit: false,
    };
  }

  const opportunityTextValue = [
    opportunity.title,
    opportunity.description,
    opportunity.category,
    opportunity.location,
    ...asArray(opportunity.keywords),
  ].join(" ");
  const hasStrongCivilTerm = normalizedIncludesAny(opportunityTextValue, CIVIL_STRONG_SERVICE_TERMS);
  const hasWinterTerm = normalizedIncludesAny(opportunityTextValue, CIVIL_OPTIONAL_WINTER_SERVICE_TERMS);
  const allowsWinterWork = hasExplicitWinterService(profile);
  const hasEligibleWinterTerm = hasWinterTerm && allowsWinterWork;
  const hasIndoorTerm = normalizedIncludesAny(opportunityTextValue, CIVIL_INDOOR_DOWNGRADE_TERMS);
  const allowsIndoorWork = hasExplicitIndoorService(profile);
  const hasConsultingTerm = normalizedIncludesAny(opportunityTextValue, CIVIL_CONSULTING_DOWNGRADE_TERMS);
  const allowsConsultingWork = hasExplicitConsultingService(profile);
  const detectedStrongTerms = getStrongCivilTermsInText(opportunityTextValue);
  const detectedWinterTerms = hasEligibleWinterTerm ? getOptionalWinterTermsInText(opportunityTextValue) : [];
  const serviceHitsAreWeakOnly = serviceHits.length > 0 && serviceHits.every(isCivilWeakGenericTerm);
  const keywordHitsAreWeakOnly = keywordHits.length > 0 && keywordHits.every(isCivilWeakGenericTerm);
  const hasAnySpecificHit = [...serviceHits, ...keywordHits].some((hit) => !isCivilWeakGenericTerm(hit));
  const hasWeakGenericHit = [...serviceHits, ...keywordHits].some(isCivilWeakGenericTerm);
  const shouldPromoteWeakTerms = !hasAnySpecificHit && hasWeakGenericHit && hasStrongCivilTerm;
  const expandedServiceHits = (shouldPromoteWeakTerms || hasEligibleWinterTerm)
    ? Array.from(new Set([...serviceHits, ...(shouldPromoteWeakTerms ? detectedStrongTerms : []), ...detectedWinterTerms]))
    : serviceHits;
  const shouldScoreWeakTerms = hasStrongCivilTerm || hasEligibleWinterTerm || hasAnySpecificHit;
  const filteredServiceHits = shouldScoreWeakTerms
    ? (shouldPromoteWeakTerms ? promoteWeakGenericHitsToSpecificCivilTerms(expandedServiceHits, opportunityTextValue) : expandedServiceHits.filter((service) => !isCivilWeakGenericTerm(service)))
    : expandedServiceHits.filter((service) => !isCivilWeakGenericTerm(service));
  const filteredKeywordHits = shouldScoreWeakTerms
    ? (shouldPromoteWeakTerms ? promoteWeakGenericHitsToSpecificCivilTerms(keywordHits, opportunityTextValue) : keywordHits.filter((keyword) => !isCivilWeakGenericTerm(keyword)))
    : keywordHits.filter((keyword) => !isCivilWeakGenericTerm(keyword));
  const specificHits = Array.from(new Set([...filteredServiceHits, ...filteredKeywordHits].filter((hit) => !isCivilWeakGenericTerm(hit))));
  const lacksCoreExecutionProfile = !hasCoreExecutionService(profile);

  return {
    serviceHits: sortMatchTermsBySpecificity(filteredServiceHits),
    keywordHits: sortMatchTermsBySpecificity(filteredKeywordHits),
    hasWeakOnlyFit: !hasStrongCivilTerm && !hasEligibleWinterTerm && !hasAnySpecificHit && (serviceHitsAreWeakOnly || keywordHitsAreWeakOnly),
    hasIndoorMismatch: hasIndoorTerm && !hasStrongCivilTerm && !allowsIndoorWork,
    hasConsultingMismatch: hasConsultingTerm && !allowsConsultingWork,
    hasWinterOnlyFit: hasEligibleWinterTerm && !hasStrongCivilTerm,
    hasSecondaryOnlyFit: hasAnySpecificHit && lacksCoreExecutionProfile && specificHits.length <= 2 && detectedStrongTerms.length >= 3,
    hasPromotedBroadFit: shouldPromoteWeakTerms,
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

  const rawServiceHits = asArray(profile.services).filter((service) => text.includes(normalize(service)));
  const rawKeywordHits = asArray(profile.includeKeywords).filter((keyword) => text.includes(normalize(keyword)));
  const civilFit = getCivilContractorFit(profile, opportunity, rawServiceHits, rawKeywordHits);
  const serviceHits = civilFit.serviceHits;
  if (serviceHits.length) {
    score += Math.min(35, serviceHits.length * 10);
    for (const service of serviceHits.slice(0, 3)) reasons.push(`Mentions your service: ${service}`);
  }

  const keywordHits = civilFit.keywordHits;
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

  if (civilFit.hasWinterOnlyFit && locationCategory === "local_match") {
    score += 12;
    reasons.push("Local winter service fit");
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
    risks.push(getOpportunityMissingDeadlineRisk(opportunity));
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

  if (civilFit.hasWeakOnlyFit) {
    score = Math.min(score, 40);
    risks.push("Only broad construction/procurement terms matched; verify fit");
  }

  if (civilFit.hasIndoorMismatch) {
    score = Math.min(score - 20, 40);
    risks.push("Appears to be indoor/building finishing work outside your core civil services");
  }

  if (civilFit.hasConsultingMismatch) {
    score = Math.min(score - 30, 35);
    risks.push("Appears to be design, consulting, supervision, or project management work outside your execution services");
  }

  if (civilFit.hasSecondaryOnlyFit) {
    score = Math.min(score, 84);
    risks.push("Secondary service match in a broader infrastructure tender; verify scope");
  }

  if (civilFit.hasPromotedBroadFit) {
    score = Math.min(score, 72);
    risks.push("Broad construction terms matched; verify the specific work type");
  }

  if (civilFit.hasWinterOnlyFit) {
    score = Math.min(score, 68);
    risks.push("Winter/snow service fit; verify capacity and scope");
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

function classifyMatchSafety(
  profile: Record<string, unknown>,
  opportunity: Record<string, unknown>,
  match: Record<string, unknown>,
) {
  const reasons: string[] = [];
  const payload = opportunity.raw_payload && typeof opportunity.raw_payload === "object"
    ? opportunity.raw_payload as Record<string, unknown>
    : {};
  const adminStatus = String(payload.admin_report_status || "").toLowerCase();
  if (adminStatus === "include") {
    return {
      safety_status: "auto_approved",
      safety_reasons: ["Admin override includes this opportunity in customer reports"],
      alert_eligible: true,
      review_required: false,
    };
  }
  if (!isVisibleOpportunity(opportunity) || !isCustomerMatchEligibleOpportunity(opportunity)) {
    return {
      safety_status: "hidden",
      safety_reasons: ["Excluded by customer eligibility, duplicate, stale, hidden, demo, or expired filters"],
      alert_eligible: false,
      review_required: false,
    };
  }

  const deadline = String(opportunity.deadline || "");
  const hasFutureDeadline = Boolean(deadline) && daysUntil(deadline) >= 0;
  const qualityText = getSafetyQualityText(opportunity);
  const risks = Array.isArray(match.risks) ? match.risks.map(String) : [];
  const hasStrongWorkTypeFit = hasStrongWorkTypeMatch(opportunity, match);

  if (!deadline) reasons.push("No reliable deadline was found");
  if (isUnknownBuyer(opportunity)) reasons.push("Buyer is missing or generic");
  if (risks.some((risk) => /broad construction|low confidence/i.test(risk))) reasons.push("Match depends on broad or low-confidence terms");
  if (risks.some((risk) => /indoor|finishing|outside your core civil services/i.test(risk))) reasons.push("Possible service mismatch for this company profile");
  if (containsReviewOnlyTerms(opportunity) && !companyExplicitlyAllowsReviewOnlyWork(profile)) {
    reasons.push("Mentions design, consulting, supervision, or project management terms");
  }

  const tenderState = String(payload.tender_state || "").toLowerCase();
  if (["tender_awarded", "awarded", "already_awarded", "already_tendered"].includes(tenderState)) {
    reasons.push("Tender appears already awarded or already tendered");
  }
  if (isStaleCustomerOpportunity(opportunity)) reasons.push("Stale or expired opportunity signal");

  if (reasons.some((reason) => /awarded|already tendered|stale|expired/i.test(reason))) {
    return {
      safety_status: "hidden",
      safety_reasons: Array.from(new Set(reasons)),
      alert_eligible: false,
      review_required: false,
    };
  }

  const autoApproved = hasFutureDeadline &&
    hasStrongWorkTypeFit &&
    !reasons.some((reason) => /missing|generic|broad|mismatch|consulting|supervision|project management/i.test(reason));

  if (autoApproved) {
    return {
      safety_status: "auto_approved",
      safety_reasons: [
        "Valid future deadline found",
        "Strong service/work-type fit",
      ],
      alert_eligible: String(profile.autoAlertMode || "auto_safe_only") !== "dashboard_only",
      review_required: false,
    };
  }

  return {
    safety_status: "needs_review",
    safety_reasons: Array.from(new Set(reasons.length ? reasons : ["Current opportunity is plausible but needs review before customer alerts"])),
    alert_eligible: false,
    review_required: true,
  };
}

function applyReviewedSafetyOverride(safety: Record<string, unknown>, existing?: Record<string, unknown>) {
  if (!existing?.reviewed_at) return safety;
  return {
    safety_status: String(existing.safety_status || safety.safety_status || "needs_review"),
    safety_reasons: Array.isArray(existing.safety_reasons) ? existing.safety_reasons.map(String) : safety.safety_reasons,
    alert_eligible: Boolean(existing.alert_eligible),
    review_required: Boolean(existing.review_required),
    reviewed_at: String(existing.reviewed_at || ""),
    reviewed_by: String(existing.reviewed_by || ""),
    review_note: String(existing.review_note || ""),
  };
}

function getSafetyQualityText(opportunity: Record<string, unknown>) {
  return [
    opportunity.title,
    opportunity.description,
    opportunity.category,
    opportunity.type,
    opportunity.location,
    Array.isArray(opportunity.keywords) ? opportunity.keywords.join(" ") : "",
  ].filter(Boolean).join(" ");
}

function isRecentOpportunity(opportunity: Record<string, unknown>, maxAgeDays: number) {
  const published = String(opportunity.published_date || opportunity.publishedDate || "");
  if (!published) return false;
  const date = new Date(`${published.slice(0, 10)}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return false;
  return (Date.now() - date.getTime()) / 86400000 <= maxAgeDays;
}

function isHighIntentSource(opportunity: Record<string, unknown>) {
  const source = opportunity.sources && typeof opportunity.sources === "object"
    ? opportunity.sources as Record<string, unknown>
    : {};
  const text = normalize(`${String(source.name || "")} ${String(source.source_type || "")} ${String(opportunity.category || "")}`);
  return ["utbodsvefur", "ríkiskaup", "rikiskaup", "útboð", "utbod", "procurement", "tender"].some((term) => text.includes(normalize(term)));
}

function hasProcurementIntent(text: string) {
  return normalizedIncludesAny(text, ["útboð", "utbod", "tilboð", "tilboðum", "óskað eftir tilboðum", "verðfyrirspurn", "skilafrestur", "útboðsgögn", "forval"]);
}

function hasUpcomingTenderIntentText(text: string) {
  return normalizedIncludesAny(text, ["senn í útboð", "senn i utbod", "áætlað útboð", "aaetlad utbod", "fyrirhugað útboð", "fyrirhugad utbod"]);
}

function hasStrongWorkTypeMatch(opportunity: Record<string, unknown>, match: Record<string, unknown>) {
  const reasons = Array.isArray(match.match_reasons) ? match.match_reasons.map(String).join(" ") : "";
  const text = `${reasons} ${getSafetyQualityText(opportunity)}`;
  return normalizedIncludesAny(text, CIVIL_STRONG_SERVICE_TERMS) ||
    (normalizedIncludesAny(reasons, ["service:", "keyword:"]) && !normalizedIncludesAny(reasons, CIVIL_WEAK_GENERIC_TERMS));
}

function isUnknownBuyer(opportunity: Record<string, unknown>) {
  const buyer = normalize(String(opportunity.buyer || ""));
  return !buyer || ["unknown buyer", "óþekktur kaupandi", "admin", "administrator", "editor", "ritstjóri", "noreply"].includes(buyer);
}

function containsReviewOnlyTerms(opportunity: Record<string, unknown>) {
  return normalizedIncludesAny(getSafetyQualityText(opportunity), [
    "umsjón",
    "umsjon",
    "eftirlit",
    "hönnun",
    "honnun",
    "ráðgjöf",
    "radgjof",
    "verkefnastjórn",
    "verkefnastjorn",
  ]);
}

function companyExplicitlyAllowsReviewOnlyWork(profile: Record<string, unknown>) {
  return normalizedIncludesAny([
    profile.industry,
    ...asArray(profile.services),
    ...asArray(profile.includeKeywords),
  ].join(" "), [
    "umsjón",
    "umsjon",
    "eftirlit",
    "hönnun",
    "honnun",
    "ráðgjöf",
    "radgjof",
    "verkefnastjórn",
    "verkefnastjorn",
    "verkfræðiráðgjöf",
    "verkfraediradgjof",
  ]);
}

function getOpportunityMissingDeadlineRisk(opportunity: Record<string, unknown>) {
  const rawPayload = opportunity.raw_payload && typeof opportunity.raw_payload === "object"
    ? opportunity.raw_payload as Record<string, unknown>
    : {};
  const warning = String(rawPayload.deadline_warning || "").trim();
  if (warning) return warning;
  if (rawPayload.extraction_method === VEGAGERDIN_PROJECT_EXTRACTION_METHOD) {
    const tenderState = String(rawPayload.tender_state || "").trim();
    if (["tender_awarded", "awarded", "already_tendered", "announced"].includes(tenderState)) {
      return "Tender appears already announced/awarded — verify source article.";
    }
    if (tenderState === "upcoming_tender") {
      return "Formal tender deadline not found yet — monitor source article.";
    }
    return "No formal tender deadline extracted — verify source article.";
  }
  return MISSING_DEADLINE_RISK;
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

function isCustomerMatchEligibleOpportunity(opportunity: Record<string, unknown>) {
  const payload = opportunity.raw_payload && typeof opportunity.raw_payload === "object"
    ? opportunity.raw_payload as Record<string, unknown>
    : {};
  if (isDemoTestOpportunity(opportunity)) return false;
  const adminStatus = String(payload.admin_report_status || "").toLowerCase();
  if (adminStatus === "include") return true;
  if (payload.hidden_from_reports === true) return false;
  if (["hidden", "hide", "noise", "deleted"].includes(adminStatus)) return false;
  if (isSecondaryDuplicateOpportunity(opportunity, payload)) return false;
  if (isStaleCustomerOpportunity(opportunity)) return false;
  const tenderState = String(payload.tender_state || "").toLowerCase();
  if (["tender_awarded", "awarded", "already_awarded", "already_tendered"].includes(tenderState)) return false;
  const explicitIntent = normalizeReportIntent(String(payload.opportunity_intent || payload.intent || payload.quality_status || ""));
  if (explicitIntent === "news_context" || explicitIntent === "not_opportunity") return false;
  if (explicitIntent === "confirmed_tender" || explicitIntent === "early_opportunity") return true;
  const intent = getReportOpportunityIntent(opportunity);
  if (intent === "news_context" || intent === "not_opportunity") return false;
  if (intent === "confirmed_tender" || intent === "early_opportunity") return true;
  return !hasObviousNewsTitleIntent(String(opportunity.title || ""));
}

function isSecondaryDuplicateOpportunity(opportunity: Record<string, unknown>, payload: Record<string, unknown>) {
  const id = String(opportunity.id || "");
  const canonicalId = String(payload.canonical_opportunity_id || "");
  return payload.is_duplicate === true ||
    Boolean(payload.duplicate_of) ||
    (Boolean(canonicalId) && Boolean(id) && canonicalId !== id);
}

function isStaleCustomerOpportunity(opportunity: Record<string, unknown>) {
  const payload = opportunity.raw_payload && typeof opportunity.raw_payload === "object"
    ? opportunity.raw_payload as Record<string, unknown>
    : {};
  const source = opportunity.sources && typeof opportunity.sources === "object"
    ? opportunity.sources as Record<string, unknown>
    : {};
  if (payload.stale_status === "stale_or_expired" || payload.opportunity_intent === "stale_opportunity") return true;
  return getStaleOpportunityInfo({
    title: String(opportunity.title || ""),
    description: String(opportunity.description || ""),
    content: [
      Array.isArray(opportunity.keywords) ? (opportunity.keywords as unknown[]).join(" ") : "",
      String(opportunity.category || ""),
      String(source.name || payload.source_name || ""),
    ].join(" "),
    publishedDate: String(opportunity.published_date || ""),
    deadline: String(opportunity.deadline || ""),
    sourceName: String(source.name || payload.source_name || ""),
    sourceType: String(source.source_type || ""),
    connectorType: String(payload.connector_type || ""),
  }).isStale;
}

function isDemoTestOpportunity(opportunity: Record<string, unknown>) {
  const payload = opportunity.raw_payload && typeof opportunity.raw_payload === "object"
    ? opportunity.raw_payload as Record<string, unknown>
    : {};
  if (payload.is_demo === true || payload.demo === true) return true;
  const source = opportunity.sources && typeof opportunity.sources === "object"
    ? opportunity.sources as Record<string, unknown>
    : {};
  const haystack = normalize(`${source.name || ""} ${source.source_type || ""} ${opportunity.title || ""} ${opportunity.external_id || ""}`);
  return ["private lead", "manual test", "grant portal", "demo", "test", "sample", "mock", "fake"].some((value) => haystack.includes(normalize(value)));
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
  const opportunityLocation = normalizeLocationText(getEffectiveOpportunityLocation(opportunity));

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
    if (selected === "capital area" && ["reykjavik", "capital area", "hofudborgarsvaedid"].includes(opportunityLocation)) return true;
    return opportunityLocation.includes(selected) || selected.includes(opportunityLocation);
  });
}

function getLocationMatchCategory(profile: Record<string, unknown>, opportunity: Record<string, unknown>) {
  if (localLocationMatches(profile, opportunity)) return "local_match";
  const locationText = normalizeLocationText(getEffectiveOpportunityLocation(opportunity));
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
  if (isGenericIcelandLocation(location) && inferOpportunityLocationFromText(opportunity)) return false;
  const text = normalizeLocationText(`${opportunity.title || ""} ${opportunity.description || ""} ${opportunity.location || ""}`);
  if (["all iceland", "iceland", "island"].some((value) => location.includes(value))) return true;
  return ["national", "landsvist", "nationwide"].some((value) => text.includes(value));
}

function getOpportunityCountryCode(opportunity: Record<string, unknown>) {
  const direct = normalizeCountryCode(opportunity.country_code || opportunity.countryCode);
  if (direct) return direct;

  const location = normalizeLocationText(getEffectiveOpportunityLocation(opportunity));
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

function getEffectiveOpportunityLocation(opportunity: Record<string, unknown>) {
  const rawLocation = String(opportunity.location || "").trim();
  const normalized = normalizeLocationText(rawLocation);
  if (rawLocation && !isGenericIcelandLocation(normalized)) return rawLocation;
  return inferOpportunityLocationFromText(opportunity) || rawLocation;
}

function isGenericIcelandLocation(normalizedLocation: string) {
  return !normalizedLocation ||
    normalizedLocation === "unknown" ||
    normalizedLocation === "all iceland" ||
    normalizedLocation === "iceland" ||
    normalizedLocation === "island";
}

function inferOpportunityLocationFromText(opportunity: Record<string, unknown>) {
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object"
    ? opportunity.rawPayload as Record<string, unknown>
    : {};
  const text = normalizeLocationText([
    opportunity.title,
    opportunity.description,
    opportunity.buyer,
    payload.buyer,
    payload.extracted_buyer,
    payload.source_name,
    payload.extracted_location,
    payload.location,
  ].filter(Boolean).join(" "));
  if (
    text.includes("reykjavik") ||
    text.includes("reykjavikurborg") ||
    text.includes("hofudborgarsvaedid")
  ) return "Reykjavík / Höfuðborgarsvæðið";
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
    .replace(/\u00ad/g, "")
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
      .select("match_score, safety_status, alert_eligible, opportunities(id, title, buyer, description, deadline, status, raw_payload, sources(name))")
      .eq("company_id", company.id)
      .gte("match_score", MIN_MATCH_SCORE)
      .eq("safety_status", "auto_approved")
      .eq("alert_eligible", true)
      .order("match_score", { ascending: false })
      .limit(30);

    if (matchesError) throw matchesError;
    const reportMatches = (matches || [])
      .filter((match) => isCustomerReportMatch(match))
      .slice(0, 8);
    if (!reportMatches.length) continue;

    const { data: report, error: reportError } = await supabase
      .from("reports")
      .insert({
        company_id: company.id,
        title: `Weekly opportunity report - ${company.company_name || "Company"}`,
        period_start: periodStart,
        period_end: periodEnd,
        summary: `${reportMatches.length} report-ready opportunities found.`,
        text_content: `${reportMatches.length} report-ready opportunities found for this week.`,
        html_content: `<p>${reportMatches.length} report-ready opportunities found for this week.</p>`,
        status: "generated",
      })
      .select("id")
      .single();

    if (reportError) throw reportError;

    const items = reportMatches
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

function isCustomerReportMatch(match: Record<string, unknown>) {
  if (String(match.safety_status || "") !== "auto_approved" || match.alert_eligible === false) return false;
  const opportunity = match.opportunities as Record<string, unknown> | undefined;
  if (!opportunity?.id) return false;
  if (String(opportunity.status || "open") !== "open") return false;
  const payload = (opportunity.raw_payload && typeof opportunity.raw_payload === "object")
    ? opportunity.raw_payload as Record<string, unknown>
    : {};
  const adminStatus = String(payload.admin_report_status || "").toLowerCase();
  if (adminStatus === "include") return true;
  if (payload.hidden_from_reports === true) return false;
  if (["hidden", "hide", "noise", "deleted"].includes(adminStatus)) return false;
  if (isSecondaryDuplicateOpportunity(opportunity, payload)) return false;
  const intent = getReportOpportunityIntent(opportunity);
  return intent === "confirmed_tender" || intent === "early_opportunity";
}

function getReportOpportunityIntent(opportunity: Record<string, unknown>) {
  const payload = (opportunity.raw_payload && typeof opportunity.raw_payload === "object")
    ? opportunity.raw_payload as Record<string, unknown>
    : {};
  const override = normalizeReportIntent(String(payload.opportunity_intent || payload.intent || ""));
  if (override) return override;
  const sourceName = String((opportunity.sources as Record<string, unknown> | undefined)?.name || payload.source_name || "");
  if (/ted|tenders electronic daily/i.test(sourceName)) return "confirmed_tender";
  return getConnectorOpportunityIntent(`${opportunity.title || ""} ${opportunity.description || ""} ${sourceName}`, String(opportunity.title || ""));
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
    stale_opportunity: "not_opportunity",
    stale: "not_opportunity",
    expired: "not_opportunity",
  };
  return aliases[normalized] || "";
}

function hasObviousNewsTitleIntent(title: string) {
  const normalizedTitle = normalizeSearchText(title);
  const negativeTitlePhrases = [
    "lokun",
    "lokad",
    "lokanir",
    "umferd",
    "tafir",
    "hjaleid",
    "akstursleid",
    "vegfarendur",
    "frett",
    "myndband",
    "tekur a sig mynd",
    "opid aftur",
  ].map(normalizeSearchText);
  return negativeTitlePhrases.some((phrase) => normalizedTitle.includes(phrase));
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
  const keywordPattern = "(skilafrestur|tímafrestur útboðs|timafrestur utbods|tilboðsfrestur|tilbodsfrestur|skil tilboða|skil tilboda|tilboðum skal skila|tilbodum skal skila|tilboðum skilað|tilbodum skilad|skal tilboðum skila|skal tilbodum skila|tilboð skulu hafa borist|tilbod skulu hafa borist|tilboð skulu berast|tilbod skulu berast|eigi síðar en|eigi sidar en|frestur til|skila fyrir|fyrir kl\\.?)";
  const numericDatePattern = "(\\d{1,2}[./]\\d{1,2}[./]20\\d{2}|20\\d{2}-\\d{2}-\\d{2})";
  const monthDatePattern = "(\\d{1,2}\\.?\\s+(janúar|januar|febrúar|februar|mars|apríl|april|maí|mai|júní|juni|júlí|juli|ágúst|agust|september|október|oktober|nóvember|november|desember)\\s+20\\d{2})";

  const keywordThenDate = new RegExp(`${keywordPattern}[\\s\\S]{0,220}?(${numericDatePattern}|${monthDatePattern})`, "i");
  const keywordMatch = cleanText.match(keywordThenDate);
  if (keywordMatch && !isCompletionOnlyDeadlineSnippet(keywordMatch[0])) {
    const parsed = parseDeadlineDate(keywordMatch[2]);
    if (parsed) return { date: parsed, rawText: keywordMatch[0].trim() };
  }

  const dateThenKeyword = new RegExp(`(${numericDatePattern}|${monthDatePattern})[\\s\\S]{0,120}?${keywordPattern}`, "i");
  const reverseKeywordMatch = cleanText.match(dateThenKeyword);
  if (reverseKeywordMatch && !isCompletionOnlyDeadlineSnippet(reverseKeywordMatch[0])) {
    const parsed = parseDeadlineDate(reverseKeywordMatch[1]);
    if (parsed) return { date: parsed, rawText: reverseKeywordMatch[0].trim() };
  }

  return { date: null, rawText: null };
}

function containsCompletionDateIntent(value: string) {
  return normalizeSearchText(value).match(/\b(verkinu skal lokid|aaetlud verklok|skiladagur verks|verklok)\b/) !== null;
}

function containsBidDeadlineIntent(value: string) {
  return normalizeSearchText(value).match(/\b(skilafrestur|timafrestur utbods|tilbodsfrestur|skil tilboda|tilbodum skal skila|tilbod skulu hafa borist|tilbod skulu berast|eigi sidar en|frestur til|skila fyrir|fyrir kl)\b/) !== null;
}

function isCompletionOnlyDeadlineSnippet(value: string) {
  return containsCompletionDateIntent(value) && !containsBidDeadlineIntent(value);
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

function cleanConnectorText(value: string, fallback = "") {
  const original = String(value || "");
  const withoutBlocks = original
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, "$1")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[[a-z][^\]\[]*(?:\][^\[]*\[\/[a-z][^\]]*)?\]/gi, " ")
    .replace(/(?:^|\s)[.#]?[a-z0-9_-]+\s*\{[^{}]*\}/gi, " ")
    .replace(/\b[a-z-]+\s*:\s*[^;{}]+;/gi, " ");
  const cleaned = decodeHtml(withoutBlocks)
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned || isMostlyCssText(cleaned)) return stripHtml(fallback);
  return cleaned;
}

function isMostlyCssText(value: string) {
  const text = String(value || "").trim();
  if (!text) return true;
  const cssSignals = [
    /\bdisplay\s*:/i,
    /\bfont-size\s*:/i,
    /\bline-height\s*:/i,
    /\bbackground(?:-color)?\s*:/i,
    /\bmargin(?:-[a-z]+)?\s*:/i,
    /\bpadding(?:-[a-z]+)?\s*:/i,
    /\bcolor\s*:/i,
    /\bwidth\s*:/i,
    /\bheight\s*:/i,
    /\bvar\(--/i,
  ].filter((pattern) => pattern.test(text)).length;
  const words = text.split(/\s+/).filter(Boolean).length;
  return cssSignals >= 3 || (cssSignals >= 2 && words < 24);
}

function decodeHtml(value: string) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
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
  target.reports = target.reports_generated;
  target.failedSources = [
    ...(target.failedSources || []),
    ...(source.failedSources || []),
  ];
  target.timedOutSources = [
    ...(target.timedOutSources || []),
    ...(source.timedOutSources || []),
  ];
  if (source.errors.length && !source.failedSources?.length && !source.timedOutSources?.length) {
    target.errors.push(...source.errors);
  }
}

async function safeJson(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

function firstString(...values: unknown[]) {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
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

async function withTimeout<T>(promise: Promise<T>, timeoutMs: number, message: string): Promise<T> {
  let timeoutId: number | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error(message)), timeoutMs);
  });
  try {
    return await Promise.race([promise, timeout]);
  } finally {
    if (timeoutId !== undefined) clearTimeout(timeoutId);
  }
}

async function fetchWithAbortTimeout(url: string, timeoutMs: number, init: RequestInit = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error(`Fetch timed out after ${timeoutMs}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

function isTimeoutMessage(message: string) {
  return /timed out|timeout|cpu|runtime budget/i.test(String(message || ""));
}

function failureStatusFromMessage(message: string) {
  const match = String(message || "").match(/\((\d{3})\)|\bwith\s+(\d{3})\b/i);
  if (isTimeoutMessage(message)) return "timeout";
  return match?.[1] || match?.[2] || "error";
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
