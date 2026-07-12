import { supabaseClient } from "../supabaseClient.js";

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
