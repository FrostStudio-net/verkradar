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
    }),
  });
  const payload = await readJsonResponse(response);
  if (!response.ok) {
    throw new Error(payload.error || payload.message || `AI review batch failed with status ${response.status}`);
  }
  return payload;
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
