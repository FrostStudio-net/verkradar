import { SUPABASE_ANON_KEY, SUPABASE_URL, supabaseClient } from "../supabaseClient.js";

export function getAiReviewEndpoint() {
  if (window.VERKRADAR_AI_REVIEW_MATCH_URL) return window.VERKRADAR_AI_REVIEW_MATCH_URL;
  if (window.VERKRADAR_SUPABASE_URL) return `${window.VERKRADAR_SUPABASE_URL}/functions/v1/ai-review-match`;
  if (SUPABASE_URL) return `${SUPABASE_URL}/functions/v1/ai-review-match`;
  return null;
}

export async function requestAiMatchReview(matchId, options = {}) {
  const endpoint = getAiReviewEndpoint();
  if (!endpoint) {
    throw new Error("AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.");
  }
  const headers = await getAiReviewHeaders();
  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      matchId,
      force: options.force === true,
    }),
  });
  const payload = await readJsonResponse(response);
  if (!response.ok) {
    throw new Error(payload.error || payload.message || `AI review failed with status ${response.status}`);
  }
  return payload;
}

export async function requestCompanyAiReviewBatch(companyId, options = {}) {
  const endpoint = getAiReviewEndpoint();
  if (!endpoint) {
    throw new Error("AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.");
  }
  const headers = await getAiReviewHeaders();
  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      batch: true,
      companyId,
      limit: Math.max(1, Math.min(20, Number(options.limit || 10))),
      force: options.force === true,
      revalidate: options.revalidate === true,
    }),
  });
  const payload = await readJsonResponse(response);
  if (!response.ok) {
    throw new Error(payload.error || payload.message || `AI review batch failed with status ${response.status}`);
  }
  return payload;
}

export async function requestAutomaticAiReviewRun(options = {}) {
  const endpoint = getAiReviewEndpoint();
  if (!endpoint) {
    throw new Error("AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.");
  }
  const headers = await getAiReviewHeaders();
  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      auto: true,
      limit: Math.max(1, Math.min(10, Number(options.limit || 10))),
    }),
  });
  const payload = await readJsonResponse(response);
  if (!response.ok) {
    throw new Error(payload.error || payload.message || `Automatic AI review failed with status ${response.status}`);
  }
  return payload;
}

export async function updateCompanyAutoAiReviewEnabled(companyId, enabled) {
  if (!supabaseClient) throw new Error("Supabase client is not configured.");
  const { data, error } = await supabaseClient
    .from("companies")
    .update({ auto_ai_review_enabled: enabled })
    .eq("id", companyId)
    .select("id, company_name, contact_email, auto_ai_review_enabled");
  if (error) throw error;
  const rows = data || [];
  if (!rows.length) {
    const debugError = new Error(`No company row was updated for company_id=${companyId}. The company may not exist or RLS may block this update.`);
    debugError.details = {
      companyId,
      enabled,
      rowCount: 0,
      dataReturned: false,
    };
    throw debugError;
  }
  return {
    row: rows[0],
    rowCount: rows.length,
    dataReturned: true,
  };
}

export async function loadTodayAiUsageSummary() {
  if (!supabaseClient) {
    return { reviewsToday: 0, estimatedCostToday: 0, remainingReviewsToday: 50 };
  }
  const start = new Date();
  start.setUTCHours(0, 0, 0, 0);
  const { data, error } = await supabaseClient
    .from("ai_usage_log")
    .select("opportunity_id, estimated_cost")
    .gte("created_at", start.toISOString());
  if (error) throw error;
  const rows = data || [];
  const reviewsToday = rows.filter((row) => row.opportunity_id).length;
  const estimatedCostToday = rows.reduce((sum, row) => sum + Number(row.estimated_cost || 0), 0);
  return {
    reviewsToday,
    estimatedCostToday,
    remainingReviewsToday: Math.max(0, 50 - reviewsToday),
  };
}

export function formatAiUsageCost(value) {
  const amount = Number(value || 0);
  return `$${amount.toFixed(amount >= 1 ? 2 : 4)}`;
}

async function getAiReviewHeaders() {
  const headers = { "content-type": "application/json" };
  const anonKey = window.VERKRADAR_SUPABASE_ANON_KEY || SUPABASE_ANON_KEY;
  if (anonKey) headers.apikey = anonKey;
  const { data, error } = supabaseClient
    ? await supabaseClient.auth.getSession()
    : { data: { session: null }, error: null };
  if (error) throw error;
  const accessToken = data.session?.access_token;
  if (!accessToken) throw new Error("You must be logged in as an admin to run AI review.");
  headers.authorization = `Bearer ${accessToken}`;
  return headers;
}

async function readJsonResponse(response) {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { error: text };
  }
}
