import { SUPABASE_ANON_KEY, SUPABASE_URL, supabaseClient } from "../supabaseClient.js";

const PENDING_INVITE_TOKEN_KEY = "verkradar_pending_invite_token";
const PERSISTED_INVITE_FLOW_KEY = "verkradar_pending_invite_flow";
const LEGACY_PENDING_INVITE_TOKEN_KEY = "verkradar_legacy_pending_invite_token";
const INVITE_DEBUG_KEY = "vr_debug_invite";
const INVITE_FLOW_TTL_MS = 1000 * 60 * 60 * 24 * 7;

export function normalizeAccessEmail(email) {
  return String(email || "").trim().toLowerCase();
}

export function getCompanyInviteEndpoint() {
  if (window.VERKRADAR_COMPANY_INVITE_URL) return window.VERKRADAR_COMPANY_INVITE_URL;
  if (window.VERKRADAR_SUPABASE_URL) return `${window.VERKRADAR_SUPABASE_URL}/functions/v1/company-invite`;
  if (SUPABASE_URL) return `${SUPABASE_URL}/functions/v1/company-invite`;
  return null;
}

export function getInviteTokenFromRoute(route) {
  const raw = String(route || "");
  const query = raw.includes("?") ? raw.slice(raw.indexOf("?") + 1) : "";
  return new URLSearchParams(query).get("token") || new URLSearchParams(query).get("invite") || "";
}

export function isInviteDebugEnabled() {
  try {
    return localStorage.getItem(INVITE_DEBUG_KEY) === "1";
  } catch {
    return false;
  }
}

export function getInviteRouteDiagnostics(route) {
  const routeToken = getInviteTokenFromRoute(route);
  const storage = readStoredInviteTokens();
  const tokenSource = routeToken
    ? "url"
    : storage.sessionToken
      ? "sessionStorage"
      : storage.localToken
        ? "localStorage"
        : "missing";
  const token = routeToken || storage.sessionToken || storage.localToken || "";
  return {
    current_url: maskInviteTokenInText(window.location.href),
    current_hash: maskInviteTokenInText(window.location.hash || ""),
    token_source: tokenSource,
    token_present: Boolean(token),
    token_length: token.length,
    localStorage_pending_token_present: Boolean(storage.localToken),
    sessionStorage_pending_token_present: Boolean(storage.sessionToken),
  };
}

export async function getInviteAuthDiagnostics(authEvent = "") {
  try {
    const { data, error } = supabaseClient
      ? await supabaseClient.auth.getSession()
      : { data: { session: null }, error: null };
    const user = data?.session?.user || null;
    return {
      auth_session_present: Boolean(data?.session && !error),
      auth_user_id_present: Boolean(user?.id),
      auth_user_email: user?.email || "",
      email_confirmed_at_present: Boolean(user?.email_confirmed_at || user?.confirmed_at),
      auth_event_received: authEvent || "",
      access_token_present: Boolean(data?.session?.access_token),
    };
  } catch (error) {
    return {
      auth_session_present: false,
      auth_user_id_present: false,
      auth_user_email: "",
      email_confirmed_at_present: false,
      auth_event_received: authEvent || "",
      access_token_present: false,
      auth_error: error instanceof Error ? error.message : String(error || "Unknown auth error"),
    };
  }
}

export function isAcceptInviteRoute(route) {
  return getRoutePath(route) === "/accept-invite";
}

export function isInviteAuthRoute(route) {
  const path = getRoutePath(route);
  return ["/login", "/signup", "/forgot-password"].includes(path) && Boolean(getInviteTokenFromRoute(route));
}

export function shouldPreserveInviteForRoute(route) {
  return isAcceptInviteRoute(route) || isInviteAuthRoute(route) || (isAuthCallbackRoute(route) && Boolean(getStoredPendingInviteToken()));
}

export function getInitialPendingInviteToken(route) {
  if (shouldPreserveInviteForRoute(route)) return getInviteTokenFromRoute(route) || getStoredPendingInviteToken();
  clearStoredPendingInviteToken();
  return "";
}

export function getStoredPendingInviteToken() {
  try {
    localStorage.removeItem(LEGACY_PENDING_INVITE_TOKEN_KEY);
  } catch {
    // Ignore legacy cleanup failures.
  }
  try {
    const sessionToken = sessionStorage.getItem(PENDING_INVITE_TOKEN_KEY) || "";
    if (sessionToken) return sessionToken;
    const flow = JSON.parse(localStorage.getItem(PERSISTED_INVITE_FLOW_KEY) || "null");
    if (!flow?.token || !flow?.expires_at || new Date(flow.expires_at).getTime() < Date.now()) {
      localStorage.removeItem(PERSISTED_INVITE_FLOW_KEY);
      return "";
    }
    return String(flow.token || "").trim();
  } catch {
    return "";
  }
}

export function getStoredPendingInviteTokenSource(route) {
  if (getInviteTokenFromRoute(route)) return "url";
  const storage = readStoredInviteTokens();
  if (storage.sessionToken) return "sessionStorage";
  if (storage.localToken) return "localStorage";
  return "missing";
}

export function setStoredPendingInviteToken(token) {
  const cleanToken = String(token || "").trim();
  try {
    if (cleanToken) {
      sessionStorage.setItem(PENDING_INVITE_TOKEN_KEY, cleanToken);
      localStorage.setItem(PERSISTED_INVITE_FLOW_KEY, JSON.stringify({
        token: cleanToken,
        created_at: new Date().toISOString(),
        expires_at: new Date(Date.now() + INVITE_FLOW_TTL_MS).toISOString()
      }));
    }
  } catch {
    // Keep token in memory if storage is unavailable.
  }
  return cleanToken;
}

export function clearStoredPendingInviteToken() {
  try {
    sessionStorage.removeItem(PENDING_INVITE_TOKEN_KEY);
    localStorage.removeItem(PERSISTED_INVITE_FLOW_KEY);
    localStorage.removeItem(LEGACY_PENDING_INVITE_TOKEN_KEY);
  } catch {
    // Ignore storage failures.
  }
}

export function buildCompanyInviteLink(token) {
  const cleanToken = String(token || "").trim();
  if (!cleanToken) return "";
  return `${window.location.origin}/#/accept-invite?token=${encodeURIComponent(cleanToken)}`;
}

export async function previewCompanyInvite(token) {
  const endpoint = getCompanyInviteEndpoint();
  if (!endpoint) throw new Error("Company invite function is not configured.");
  const response = await fetch(endpoint, {
    method: "POST",
    headers: getAnonHeaders(),
    body: JSON.stringify({ action: "preview", token }),
  });
  const payload = await readJsonResponse(response);
  const debug = {
    preview_request_sent: true,
    preview_status: response.status,
    preview_response_body: sanitizeInvitePayload(payload),
  };
  if (!response.ok) {
    const error = new Error(payload.error || payload.message || `Invite preview failed with status ${response.status}`);
    error.details = { ...payload, __http_status: response.status, __debug: debug };
    throw error;
  }
  return { ...payload, __debug: debug };
}

export async function acceptCompanyInvite(token) {
  const endpoint = getCompanyInviteEndpoint();
  if (!endpoint) throw new Error("Company invite function is not configured.");
  let headers;
  try {
    headers = await getAuthenticatedHeaders();
  } catch (error) {
    const wrapped = new Error(error instanceof Error ? error.message : "You must be logged in to accept this invite.");
    wrapped.details = {
      code: "no_session",
      diagnostics: {
        accept_request_sent: false,
        authorization_header_included: false,
        accept_error_reason: "no_session",
      },
    };
    throw wrapped;
  }
  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({ action: "accept", token }),
  });
  const payload = await readJsonResponse(response);
  const debug = {
    accept_request_sent: true,
    authorization_header_included: Boolean(headers.authorization),
    accept_http_status: response.status,
    accept_response_body: sanitizeInvitePayload(payload),
  };
  if (!response.ok) {
    const error = new Error(payload.error || payload.message || `Invite acceptance failed with status ${response.status}`);
    error.details = { ...payload, __http_status: response.status, __debug: debug };
    throw error;
  }
  return { ...payload, __debug: debug };
}

export async function claimInvitedCompanyMemberships(supabaseClient, user, options = {}) {
  const token = String(options.token || "").trim();
  if (token) return [await acceptCompanyInvite(token)];
  const email = normalizeAccessEmail(user?.email);
  if (!supabaseClient || !user?.id || !email || options.allowEmailClaim !== true) return [];

  const { data: invites, error: inviteError } = await supabaseClient
    .from("company_members")
    .select("id, company_id, email, role, status")
    .eq("email_normalized", email)
    .eq("status", "invited");
  if (inviteError) throw inviteError;

  const rows = invites || [];
  if (!rows.length) return [];

  const claimed = [];
  for (const invite of rows) {
    const { data, error } = await supabaseClient
      .from("company_members")
      .update({
        user_id: user.id,
        status: "active",
        accepted_at: new Date().toISOString(),
        revoked_at: null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", invite.id)
      .eq("email_normalized", email)
      .eq("status", "invited")
      .select("id, company_id, email, role, status, accepted_at")
      .maybeSingle();
    if (error) throw error;
    if (data) claimed.push(data);
  }
  return claimed;
}

export async function loadActiveCompanyMemberships(supabaseClient, user) {
  if (!supabaseClient || !user?.id) return [];
  const { data, error } = await supabaseClient
    .from("company_members")
    .select("id, company_id, email, role, status, accepted_at")
    .eq("user_id", user.id)
    .eq("status", "active")
    .order("accepted_at", { ascending: true });
  if (error) throw error;
  return data || [];
}

function getAnonHeaders() {
  const headers = { "content-type": "application/json" };
  const anonKey = window.VERKRADAR_SUPABASE_ANON_KEY || SUPABASE_ANON_KEY;
  if (anonKey) headers.apikey = anonKey;
  return headers;
}

function readStoredInviteTokens() {
  const result = { sessionToken: "", localToken: "" };
  try {
    result.sessionToken = String(sessionStorage.getItem(PENDING_INVITE_TOKEN_KEY) || "").trim();
  } catch {
    // Ignore storage failures.
  }
  try {
    const flow = JSON.parse(localStorage.getItem(PERSISTED_INVITE_FLOW_KEY) || "null");
    if (flow?.token && flow?.expires_at && new Date(flow.expires_at).getTime() >= Date.now()) {
      result.localToken = String(flow.token || "").trim();
    }
  } catch {
    // Ignore storage failures.
  }
  return result;
}

function maskInviteTokenInText(value) {
  return String(value || "").replace(/([?&](?:token|invite)=)[^&#]+/gi, "$1[redacted]");
}

function sanitizeInvitePayload(payload) {
  if (!payload || typeof payload !== "object") return payload || null;
  const { diagnostics, ok, status, code, error, message, company_name, invited_email, role, expires_at, company_id } = payload;
  return {
    ok,
    status,
    code,
    error,
    message,
    company_name,
    invited_email,
    role,
    expires_at,
    company_id,
    diagnostics,
  };
}

async function getAuthenticatedHeaders() {
  const headers = getAnonHeaders();
  const { data, error } = supabaseClient
    ? await supabaseClient.auth.getSession()
    : { data: { session: null }, error: null };
  if (error) throw error;
  const accessToken = data.session?.access_token;
  if (!accessToken) throw new Error("You must be logged in to accept this invite.");
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

function getRoutePath(route) {
  const raw = String(route || "/");
  const normalized = raw.startsWith("/") ? raw : `/${raw}`;
  return normalized.split("?")[0] || "/";
}

function isAuthCallbackRoute(route) {
  const raw = String(route || "");
  return raw.startsWith("access_token=") ||
    raw.startsWith("code=") ||
    raw.includes("access_token=") ||
    raw.includes("code=") ||
    raw.includes("type=signup") ||
    raw.includes("type=email_change");
}
