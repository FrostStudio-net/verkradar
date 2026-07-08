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
