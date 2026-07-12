import { SUPABASE_ANON_KEY, SUPABASE_URL, supabaseClient } from "../supabaseClient.js";

export async function submitTrialRequest(formData) {
  if (!supabaseClient) throw new Error("Trial request storage is not configured.");
  const payload = buildTrialRequestPayload(formData);
  validateTrialRequestPayload(payload);
  const { error } = await supabaseClient
    .from("trial_requests")
    .insert(payload);
  if (error) throw error;
  return {
    ok: true,
    request: null,
    stored: true
  };
}

export async function loadAdminTrialRequests() {
  if (!supabaseClient) throw new Error("Trial request storage is not configured.");
  const { data, error } = await supabaseClient
    .from("trial_requests")
    .select("id, company_name, contact_name, email, phone, services, locations, message, status, created_at, converted_company_id")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function updateTrialRequestStatus(requestId, status) {
  if (!supabaseClient) throw new Error("Trial request storage is not configured.");
  const normalized = normalizeTrialRequestStatus(status);
  if (!requestId || !["contacted", "rejected"].includes(normalized)) {
    throw new Error("Unsupported trial request status update.");
  }
  const { data, error } = await supabaseClient
    .from("trial_requests")
    .update({ status: normalized })
    .eq("id", requestId)
    .is("converted_company_id", null)
    .select("id, status, converted_company_id")
    .maybeSingle();
  if (error) throw error;
  if (!data) throw new Error("Trial request was not updated. It may already be converted.");
  return data;
}

export async function createCompanyFromTrialRequest(requestId, profile) {
  const endpoint = getAdminCompanyActionsEndpoint();
  if (!endpoint) throw new Error("Admin company action endpoint is not configured.");
  const headers = await getAdminActionHeaders();
  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      action: "create_company_from_trial_request",
      trialRequestId: requestId,
      company: profile
    })
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || result?.error) {
    throw new Error(result?.error || `Company creation failed with status ${response.status}`);
  }
  return result;
}

export function buildCompanyDraftFromTrialRequest(request, createEmptyProfile) {
  const draft = createEmptyProfile ? createEmptyProfile() : {};
  const services = splitRequestList(request?.services);
  const locations = splitRequestList(request?.locations);
  return {
    ...draft,
    companyName: String(request?.company_name || "").trim(),
    contactName: String(request?.contact_name || "").trim(),
    contactEmail: String(request?.email || "").trim(),
    billingEmail: String(request?.email || "").trim(),
    phone: String(request?.phone || "").trim(),
    services,
    includeKeywords: services,
    locations,
    serviceAreas: locations,
    selectedPlan: draft.selectedPlan || "basic",
    billingStatus: draft.billingStatus || "trial",
    reportFrequency: draft.reportFrequency || "weekly",
    reportDay: draft.reportDay || "monday",
    deadlineReminders: draft.deadlineReminders ?? true,
    includeLowConfidence: draft.includeLowConfidence ?? false
  };
}

export function getTrialRequestStatusLabel(status) {
  const labels = {
    new: "Ný",
    contacted: "Haft samband",
    rejected: "Hafnað",
    converted: "Umbreytt"
  };
  return labels[normalizeTrialRequestStatus(status)] || labels.new;
}

function buildTrialRequestPayload(formData) {
  const value = (key) => String(formData.get(key) || "").trim();
  return {
    company_name: value("company"),
    contact_name: value("contact"),
    email: value("email"),
    phone: value("phone"),
    services: value("services"),
    locations: value("regions"),
    message: value("notes"),
    status: "new"
  };
}

function validateTrialRequestPayload(payload) {
  const required = ["company_name", "contact_name", "email", "services", "locations"];
  const missing = required.filter((key) => !String(payload[key] || "").trim());
  if (missing.length) throw new Error(`Missing required trial request fields: ${missing.join(", ")}`);
}

function normalizeTrialRequestStatus(status) {
  const value = String(status || "new").trim().toLowerCase();
  return ["new", "contacted", "rejected", "converted"].includes(value) ? value : "new";
}

function splitRequestList(value) {
  return String(value || "")
    .split(/[\n,;]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getAdminCompanyActionsEndpoint() {
  if (window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL) return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL;
  if (window.VERKRADAR_SUPABASE_URL) return `${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`;
  if (SUPABASE_URL) return `${SUPABASE_URL}/functions/v1/admin-company-actions`;
  return "";
}

async function getAdminActionHeaders() {
  const headers = {
    "Content-Type": "application/json",
    apikey: SUPABASE_ANON_KEY
  };
  if (!supabaseClient) return headers;
  const { data, error } = await supabaseClient.auth.getSession();
  if (error) throw error;
  const token = data?.session?.access_token;
  if (!token) throw new Error("Admin authentication is required.");
  return {
    ...headers,
    Authorization: `Bearer ${token}`
  };
}
