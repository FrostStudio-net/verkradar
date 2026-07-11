import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const supabaseUrl = requiredEnv("SUPABASE_URL");
    const anonKey = requiredEnv("SUPABASE_ANON_KEY");
    const serviceRoleKey = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
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

    const headers = {
      authorization: authHeader,
      apikey: anonKey,
      "content-type": "application/json",
    };
    const summary = {
      ok: true,
      sources_imported: 0,
      opportunities_inserted: 0,
      opportunities_updated: 0,
      companies_refreshed: 0,
      matches_created_updated: 0,
      ai_companies_checked: 0,
      ai_reviews_created: 0,
      skipped_already_reviewed: 0,
      skipped_outside_service_area: 0,
      skipped_missing_deadline: 0,
      skipped_expired: 0,
      errors: [] as string[],
      import_result: null as null | Record<string, unknown>,
      match_refresh_results: [] as Record<string, unknown>[],
      ai_result: null as null | Record<string, unknown>,
      company_summaries: [] as Record<string, unknown>[],
      match_details: [] as Record<string, unknown>[],
    };

    const importResult = await callFunction(supabaseUrl, "import-source-connectors", headers, {
      limit: 20,
      maxSources: 6,
      refreshMatches: false,
      generateReports: false,
    });
    summary.import_result = importResult.payload;
    if (!importResult.ok) summary.errors.push(`Source import failed: ${formatFunctionError(importResult)}`);
    summary.sources_imported = Number(importResult.payload.sources_processed || 0);
    summary.opportunities_inserted = Number(importResult.payload.inserted || 0);
    summary.opportunities_updated = Number(importResult.payload.updated || 0);

    const companies = await loadPipelineCompanies(adminClient);
    for (const company of companies) {
      const refreshResult = await callFunction(supabaseUrl, "admin-company-actions", headers, {
        companyId: company.id,
        action: "refresh_matches",
      });
      summary.match_refresh_results.push({
        company_id: company.id,
        company_name: company.company_name,
        ok: refreshResult.ok,
        matches_refreshed: refreshResult.payload.matches_refreshed || 0,
        error: refreshResult.ok ? null : formatFunctionError(refreshResult),
      });
      if (refreshResult.ok) {
        summary.companies_refreshed += 1;
        summary.matches_created_updated += Number(refreshResult.payload.matches_refreshed || 0);
      } else {
        summary.errors.push(`Match refresh failed for ${company.company_name}: ${formatFunctionError(refreshResult)}`);
      }
    }

    const aiResult = await callFunction(supabaseUrl, "ai-review-match", headers, {
      auto: true,
      limit: 10,
    });
    summary.ai_result = aiResult.payload;
    if (!aiResult.ok) summary.errors.push(`Automatic AI review failed: ${formatFunctionError(aiResult)}`);
    summary.ai_companies_checked = Number(aiResult.payload.companies_checked || 0);
    summary.ai_reviews_created = Number(aiResult.payload.ai_reviews_created || 0);
    summary.skipped_already_reviewed = Number(aiResult.payload.skipped_already_reviewed || 0);
    summary.skipped_outside_service_area = Number(aiResult.payload.skipped_outside_service_area || 0);
    summary.skipped_missing_deadline = Number(aiResult.payload.skipped_missing_deadline || 0);
    summary.skipped_expired = Number(aiResult.payload.skipped_expired || 0);
    const enriched = await buildPipelineResultDetails(adminClient, summary.match_refresh_results, aiResult.payload);
    summary.company_summaries = enriched.companySummaries;
    summary.match_details = enriched.matchDetails;

    return json(summary, summary.errors.length ? 207 : 200);
  } catch (error) {
    console.error("Daily pipeline failed:", error);
    return json({ ok: false, error: errorMessage(error), errors: [errorMessage(error)] }, 500);
  }
});

async function loadPipelineCompanies(supabase: ReturnType<typeof createClient>) {
  const { data, error } = await supabase
    .from("companies")
    .select("id, company_name, contact_email, industry, base_location, service_areas, billing_status, selected_plan, plan")
    .order("created_at", { ascending: true })
    .limit(100);
  if (error) throw error;
  const rows = data || [];
  const companyIds = rows.map((company) => String(company.id || "")).filter(Boolean);
  const [{ data: services, error: servicesError }, { data: locations, error: locationsError }] = await Promise.all([
    supabase.from("company_services").select("company_id").in("company_id", companyIds),
    supabase.from("company_locations").select("company_id").in("company_id", companyIds),
  ]);
  if (servicesError) throw servicesError;
  if (locationsError) throw locationsError;
  const serviceCompanyIds = new Set((services || []).map((row) => String(row.company_id || "")));
  const locationCompanyIds = new Set((locations || []).map((row) => String(row.company_id || "")));
  return rows.filter((company) => {
    const billing = String(company.billing_status || "").toLowerCase();
    const plan = String(company.selected_plan || company.plan || "").toLowerCase();
    const serviceAreas = Array.isArray(company.service_areas) ? company.service_areas : [];
    const active = ["trial", "active", "paying", "paid", "not_started"].includes(billing)
      || ["trial", "basic", "pro", "priority", "starter", "growth"].includes(plan);
    const complete = Boolean(company.company_name && company.contact_email && company.industry)
      && serviceCompanyIds.has(company.id)
      && (Boolean(company.base_location) || serviceAreas.length > 0 || locationCompanyIds.has(company.id));
    return active && complete;
  });
}

async function buildPipelineResultDetails(
  supabase: ReturnType<typeof createClient>,
  refreshResults: Record<string, unknown>[],
  aiPayload: Record<string, unknown>,
) {
  const reviews = Array.isArray(aiPayload.reviews) ? aiPayload.reviews as Record<string, unknown>[] : [];
  const diagnostics = Array.isArray(aiPayload.company_diagnostics) ? aiPayload.company_diagnostics as Record<string, unknown>[] : [];
  const matchIds = Array.from(new Set(reviews.map((review) => String(review.match_id || "")).filter(Boolean)));
  const companyIds = Array.from(new Set([
    ...refreshResults.map((row) => String(row.company_id || "")).filter(Boolean),
    ...diagnostics.map((row) => String(row.company_id || "")).filter(Boolean),
    ...reviews.map((row) => String(row.company_id || "")).filter(Boolean),
  ]));

  const [{ data: matchRows, error: matchError }, { data: companies, error: companyError }] = await Promise.all([
    matchIds.length
      ? supabase
        .from("opportunity_matches")
        .select(`
          id,
          company_id,
          opportunity_id,
          match_score,
          match_label,
          ai_review_status,
          ai_review_fit,
          ai_review_confidence,
          ai_reviewed_at,
          ai_review_skipped_reason,
          opportunities (
            id,
            title,
            buyer,
            deadline,
            url,
            raw_payload,
            sources(name)
          )
        `)
        .in("id", matchIds)
      : Promise.resolve({ data: [], error: null }),
    companyIds.length
      ? supabase
        .from("companies")
        .select("id, company_name, updated_at")
        .in("id", companyIds)
      : Promise.resolve({ data: [], error: null }),
  ]);
  if (matchError) throw matchError;
  if (companyError) throw companyError;

  const matchById = new Map((matchRows || []).map((row) => [String(row.id || ""), row as Record<string, unknown>]));
  const companyById = new Map((companies || []).map((row) => [String(row.id || ""), row as Record<string, unknown>]));
  const matchDetails = reviews.map((review) => {
    const match = matchById.get(String(review.match_id || "")) || {};
    const opportunity = (match.opportunities || {}) as Record<string, unknown>;
    const raw = opportunity.raw_payload && typeof opportunity.raw_payload === "object" ? opportunity.raw_payload as Record<string, unknown> : {};
    const source = opportunity.sources && typeof opportunity.sources === "object" ? opportunity.sources as Record<string, unknown> : {};
    const companyId = String(review.company_id || match.company_id || "");
    const company = companyById.get(companyId) || {};
    const reviewUpdatedAt = String(review.updated_at || review.created_at || "");
    const companyUpdatedAt = String(company.updated_at || "");
    return {
      company_id: companyId,
      company_name: String(company.company_name || "Unknown company"),
      match_id: String(review.match_id || match.id || ""),
      opportunity_id: String(review.opportunity_id || match.opportunity_id || opportunity.id || ""),
      opportunity_title: String(opportunity.title || "Untitled opportunity"),
      buyer: String(opportunity.buyer || raw.extracted_buyer || raw.buyer || "Unknown buyer"),
      source: String(source.name || raw.source_name || "Unknown source"),
      source_url: String(opportunity.url || raw.source_url || raw.link || ""),
      deadline: String(raw.deadline_at || raw.deadline_text || opportunity.deadline || ""),
      rule_score: Number(match.match_score || 0),
      rule_label: String(match.match_label || ""),
      ai_fit: String(review.fit || ""),
      ai_confidence: Number(review.confidence || 0),
      send_to_client: review.send_to_client === true,
      top_reasons: toStringArray(review.fit_reasons).slice(0, 4),
      top_risk: toStringArray(review.risks_or_questions)[0] || "",
      ai_review_is_stale: Boolean(companyUpdatedAt && reviewUpdatedAt && new Date(companyUpdatedAt).getTime() > new Date(reviewUpdatedAt).getTime()),
      reviewed_at: reviewUpdatedAt,
    };
  });

  const companySummaries = new Map<string, Record<string, unknown>>();
  const ensureCompany = (companyId: string, fallbackName = "Unknown company") => {
    if (!companySummaries.has(companyId)) {
      const company = companyById.get(companyId) || {};
      companySummaries.set(companyId, {
        company_id: companyId,
        company_name: String(company.company_name || fallbackName),
        new_matches_count: 0,
        ai_recommended_count: 0,
        ai_possible_count: 0,
        ai_rejected_count: 0,
        already_reviewed_count: 0,
        needs_manual_review_count: 0,
        skipped_outside_service_area: 0,
        skipped_missing_deadline: 0,
        skipped_expired: 0,
        match_details: [] as Record<string, unknown>[],
      });
    }
    return companySummaries.get(companyId)!;
  };

  for (const row of refreshResults) {
    const summary = ensureCompany(String(row.company_id || ""), String(row.company_name || "Unknown company"));
    summary.new_matches_count = Number(row.matches_refreshed || 0);
  }
  for (const row of diagnostics) {
    const summary = ensureCompany(String(row.company_id || ""), String(row.company_name || "Unknown company"));
    summary.already_reviewed_count = Number(row.skipped_already_reviewed || 0);
    summary.skipped_outside_service_area = Number(row.skipped_outside_service_area || 0);
    summary.skipped_missing_deadline = Number(row.skipped_missing_deadline || 0);
    summary.skipped_expired = Number(row.skipped_expired || 0);
    summary.needs_manual_review_count = Number(row.skipped_missing_deadline || 0) + Number(row.skipped_score_too_low || 0);
  }
  for (const detail of matchDetails) {
    const summary = ensureCompany(String(detail.company_id || ""), String(detail.company_name || "Unknown company"));
    const fit = String(detail.ai_fit || "");
    if (fit === "strong" && detail.send_to_client === true) summary.ai_recommended_count = Number(summary.ai_recommended_count || 0) + 1;
    else if (fit === "possible") summary.ai_possible_count = Number(summary.ai_possible_count || 0) + 1;
    else if (["weak", "no_fit"].includes(fit)) {
      summary.ai_rejected_count = Number(summary.ai_rejected_count || 0) + 1;
      summary.needs_manual_review_count = Number(summary.needs_manual_review_count || 0) + 1;
    }
    (summary.match_details as Record<string, unknown>[]).push(detail);
  }

  return {
    companySummaries: Array.from(companySummaries.values()),
    matchDetails,
  };
}

function toStringArray(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item || "").trim()).filter(Boolean);
}

async function callFunction(supabaseUrl: string, name: string, headers: Record<string, string>, body: Record<string, unknown>) {
  const response = await fetch(`${supabaseUrl}/functions/v1/${name}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  const payload = await response.json().catch(() => ({}));
  return { ok: response.ok, status: response.status, payload };
}

function formatFunctionError(result: { status: number; payload: Record<string, unknown> }) {
  const errors = Array.isArray(result.payload.errors) ? result.payload.errors.join("; ") : "";
  return String(result.payload.error || result.payload.message || errors || `status ${result.status}`);
}

function requiredEnv(name: string) {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing ${name}.`);
  return value;
}

function json(payload: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...corsHeaders, "content-type": "application/json" },
  });
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}
