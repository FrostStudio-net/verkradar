import { SUPABASE_ANON_KEY, SUPABASE_URL, supabaseClient } from "../supabaseClient.js";

export async function submitContactRequest(formData) {
  assertNoHoneypotValue(formData);
  const payload = buildContactRequestPayload(formData);
  validateContactRequestPayload(payload);
  const endpoint = getPublicFormSubmitEndpoint();
  if (!endpoint) throw new Error("Contact request storage is not configured.");
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`
    },
    body: JSON.stringify({
      kind: "contact",
      payload,
      website: String(formData.get("website") || "")
    })
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || result?.error) {
    throw new Error(result?.error || `Contact request failed with status ${response.status}`);
  }
  return result;
}

export async function loadAdminContactRequests() {
  if (!supabaseClient) throw new Error("Contact request storage is not configured.");
  const { data, error } = await supabaseClient
    .from("contact_requests")
    .select("id, name, company_name, email, phone, subject, message, status, created_at")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}

function buildContactRequestPayload(formData) {
  const value = (key) => String(formData.get(key) || "").trim();
  return {
    name: value("name"),
    company_name: value("company"),
    email: value("email"),
    phone: value("phone"),
    subject: value("subject"),
    message: value("message"),
    status: "new"
  };
}

function validateContactRequestPayload(payload) {
  const required = {
    name: "Nafn vantar.",
    email: "Netfang vantar.",
    subject: "Veldu efni.",
    message: "Skilaboð vantar."
  };
  const missing = Object.entries(required)
    .filter(([key]) => !String(payload[key] || "").trim())
    .map(([, message]) => message);
  if (missing.length) throw new Error(missing[0]);
  if (!/^\S+@\S+\.\S+$/.test(String(payload.email || "").trim())) {
    throw new Error("Skráðu gilt netfang.");
  }
}

function assertNoHoneypotValue(formData) {
  if (String(formData.get("website") || "").trim()) {
    throw new Error("Request rejected.");
  }
}

function getPublicFormSubmitEndpoint() {
  if (window.VERKRADAR_PUBLIC_FORM_SUBMIT_URL) return window.VERKRADAR_PUBLIC_FORM_SUBMIT_URL;
  if (window.VERKRADAR_SUPABASE_URL) return `${window.VERKRADAR_SUPABASE_URL}/functions/v1/public-form-submit`;
  if (SUPABASE_URL) return `${SUPABASE_URL}/functions/v1/public-form-submit`;
  return "";
}
