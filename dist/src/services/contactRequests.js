import { supabaseClient } from "../supabaseClient.js";

export async function submitContactRequest(formData) {
  if (!supabaseClient) throw new Error("Contact request storage is not configured.");
  const payload = buildContactRequestPayload(formData);
  validateContactRequestPayload(payload);
  const { error } = await supabaseClient
    .from("contact_requests")
    .insert(payload);
  if (error) throw error;
  return { ok: true, stored: true };
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
}
