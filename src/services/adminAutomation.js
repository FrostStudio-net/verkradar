import { SUPABASE_ANON_KEY, SUPABASE_URL, supabaseClient } from "../supabaseClient.js";

export function getDailyPipelineEndpoint() {
  if (window.VERKRADAR_DAILY_PIPELINE_URL) return window.VERKRADAR_DAILY_PIPELINE_URL;
  if (window.VERKRADAR_SUPABASE_URL) return `${window.VERKRADAR_SUPABASE_URL}/functions/v1/daily-pipeline`;
  if (SUPABASE_URL) return `${SUPABASE_URL}/functions/v1/daily-pipeline`;
  return null;
}

export async function requestDailyPipelineRun() {
  const endpoint = getDailyPipelineEndpoint();
  if (!endpoint) {
    throw new Error("Daily pipeline function is not configured. Set window.VERKRADAR_DAILY_PIPELINE_URL or window.VERKRADAR_SUPABASE_URL.");
  }
  const headers = await getAdminFunctionHeaders();
  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({ runDailyPipeline: true }),
  });
  const payload = await readJsonResponse(response);
  if (!response.ok && response.status !== 207) {
    throw new Error(payload.error || payload.message || `Daily pipeline failed with status ${response.status}`);
  }
  return payload;
}

async function getAdminFunctionHeaders() {
  const headers = { "content-type": "application/json" };
  const anonKey = window.VERKRADAR_SUPABASE_ANON_KEY || SUPABASE_ANON_KEY;
  if (anonKey) headers.apikey = anonKey;
  const { data, error } = supabaseClient
    ? await supabaseClient.auth.getSession()
    : { data: { session: null }, error: null };
  if (error) throw error;
  const token = data.session?.access_token;
  if (!token) throw new Error("You must be logged in as an admin to run the daily pipeline.");
  headers.authorization = `Bearer ${token}`;
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
