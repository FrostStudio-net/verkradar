import { supabaseClient } from "../supabaseClient.js";

export async function submitTrialRequest(formData) {
  if (!supabaseClient) throw new Error("Trial request storage is not configured.");
  const payload = buildTrialRequestPayload(formData);
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
