import { SUPABASE_ANON_KEY, SUPABASE_URL, supabaseClient } from "../supabaseClient.js";

export function buildAdminCompanyProfilePayload(formElement) {
  const form = new FormData(formElement);
  return {
    companyName: text(form.get("companyName")),
    kennitala: text(form.get("kennitala")),
    contactName: text(form.get("contactName")),
    contactEmail: text(form.get("contactEmail")),
    notificationEmail: text(form.get("notificationEmail")),
    billingEmail: text(form.get("billingEmail")),
    services: list(form.get("services")),
    includeKeywords: list(form.get("includeKeywords")),
    excludeKeywords: list(form.get("excludeKeywords")),
    locations: list(form.get("locations")),
    serviceAreas: list(form.get("serviceAreas")),
    baseLocation: text(form.get("baseLocation")),
    opportunityCategories: list(form.get("opportunityCategories")),
    opportunityTypes: list(form.get("opportunityTypes")),
    preferredProjectTypes: list(form.get("preferredProjectTypes")),
    excludedProjectTypes: list(form.get("excludedProjectTypes")),
    subcontractingRelevant: form.get("subcontractingRelevant") === "on",
    minimumRelevanceThreshold: number(form.get("minimumRelevanceThreshold"), 50),
    reportFrequency: text(form.get("reportFrequency")) || "weekly",
    reportDay: text(form.get("reportDay")) || "monday",
    deadlineReminders: form.get("deadlineReminders") === "on",
    includeLowConfidence: form.get("includeLowConfidence") === "on",
    billingStatus: text(form.get("billingStatus")) || "trial",
    selectedPlan: text(form.get("selectedPlan")) || "basic",
    coreServices: list(form.get("coreServices")),
    secondaryServices: list(form.get("secondaryServices")),
    excludedServices: list(form.get("excludedServices")),
    equipment: list(form.get("equipment")),
    certifications: list(form.get("certifications")),
    preferredBuyers: list(form.get("preferredBuyers")),
    maxTravelDistanceKm: nullableNumber(form.get("maxTravelDistanceKm")),
    typicalProjectSize: text(form.get("typicalProjectSize")),
    profileNotesForAi: text(form.get("profileNotesForAi")),
    internalAdminNotes: text(form.get("internalAdminNotes"))
  };
}

export async function saveAdminCompanyProfile(companyId, profile, options = {}) {
  const endpoint = getAdminCompanyActionsEndpoint();
  if (!endpoint) throw new Error("Admin company actions are not configured.");
  const headers = await getAdminActionHeaders();
  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      companyId,
      action: "update_company_profile",
      companyProfile: profile,
      refreshMatches: Boolean(options.refreshMatches)
    })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload?.error) {
    throw new Error(payload?.error || `Admin company profile update failed with status ${response.status}`);
  }
  return payload;
}

function getAdminCompanyActionsEndpoint() {
  if (window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL) return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL;
  if (window.VERKRADAR_SUPABASE_URL) return `${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`;
  if (SUPABASE_URL) return `${SUPABASE_URL}/functions/v1/admin-company-actions`;
  return null;
}

async function getAdminActionHeaders() {
  const headers = { "content-type": "application/json" };
  const anonKey = window.VERKRADAR_SUPABASE_ANON_KEY || SUPABASE_ANON_KEY;
  if (anonKey) headers.apikey = anonKey;
  const { data, error } = supabaseClient
    ? await supabaseClient.auth.getSession()
    : { data: { session: null }, error: null };
  if (error) throw error;
  const token = data.session?.access_token;
  if (!token) throw new Error("You must be logged in as an admin to update a company profile.");
  headers.authorization = `Bearer ${token}`;
  return headers;
}

function text(value) {
  return String(value || "").trim();
}

function list(value) {
  return text(value)
    .split(/[\n,;]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function number(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function nullableNumber(value) {
  if (value == null || value === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}
