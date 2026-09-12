export const PRODUCTION_PROJECT_REF = "asojxjbsgqbfpbepojzh";
export const TARGET_COMPANY_ID = "cad6b69e-b021-447d-b637-31b2e8dbff2e";
export const TARGET_COMPANY_NAME = "Garðaþjónusta";
export const INTERNAL_ALERT_COMPANY_IDS = Object.freeze([
  TARGET_COMPANY_ID,
  "41941a6f-8ffc-46b9-8562-8982bf49d4b6",
  "5fd8ec2e-9be4-4a64-b0f0-1c9cc12c9e9b",
]);
export const INTERNAL_ALERT_COMPANY_NAMES = Object.freeze({
  [TARGET_COMPANY_ID]: TARGET_COMPANY_NAME,
  "41941a6f-8ffc-46b9-8562-8982bf49d4b6": "Drenlagnir",
  "5fd8ec2e-9be4-4a64-b0f0-1c9cc12c9e9b": "Fagurverk",
});
export const ALERT_TYPE = "new_qualifying_match";
export const ADMIN_URL = "https://verkradar.is/#/admin";

export function projectRefFromSupabaseUrl(value) {
  try {
    return new URL(String(value || "")).hostname.split(".")[0] || "";
  } catch {
    return "";
  }
}

export function constantTimeEqual(left, right) {
  const a = new TextEncoder().encode(String(left || ""));
  const b = new TextEncoder().encode(String(right || ""));
  const length = Math.max(a.length, b.length);
  let difference = a.length ^ b.length;
  for (let index = 0; index < length; index += 1) {
    difference |= (a[index] || 0) ^ (b[index] || 0);
  }
  return difference === 0;
}

export function isAuthorizedAutomationRequest({ supabaseUrl, automationSecret, requestSecret }) {
  return projectRefFromSupabaseUrl(supabaseUrl) === PRODUCTION_PROJECT_REF
    && Boolean(automationSecret)
    && constantTimeEqual(automationSecret, requestSecret);
}

export function resendIdempotencyKey(alert) {
  return `${ALERT_TYPE}/${alert.company_id}/${alert.opportunity_id}`;
}

export function internalAlertCompanyName(companyId) {
  return INTERNAL_ALERT_COMPANY_NAMES[String(companyId || "")] || "VerkRadar fyrirtæki";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function displayDate(value) {
  if (!value) return "Ekki skráður";
  const date = new Date(`${String(value).slice(0, 10)}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat("is-IS", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Atlantic/Reykjavik",
  }).format(date);
}

export function buildInternalMatchAlertEmail({ alert, match, opportunity, sourceName, companyName }) {
  const score = Number(match.match_score || 0);
  const reasons = Array.isArray(match.match_reasons)
    ? match.match_reasons.filter(Boolean).slice(0, 6).join("; ")
    : "";
  const source = sourceName || opportunity.source_name || "Óþekkt heimild";
  const deadline = displayDate(opportunity.deadline);
  const displayCompanyName = companyName || internalAlertCompanyName(alert.company_id);
  const subject = `Ný VerkRadar samsvörun - ${displayCompanyName}: ${opportunity.title}`;
  const fields = [
    ["Fyrirtæki", displayCompanyName],
    ["Tækifæri", opportunity.title],
    ["Kaupandi", opportunity.buyer || "Ekki skráður"],
    ["Skilafrestur", deadline],
    ["Stig", String(score)],
    ["Ástæður", reasons || "Engar stuttar ástæður skráðar"],
    ["Heimild", source],
  ];
  const text = [
    "Ný hæf samsvörun fannst í VerkRadar.",
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`),
    "",
    `Opna stjórnborð: ${ADMIN_URL}`,
    `Leið: Companies → ${displayCompanyName}`,
  ].join("\n");
  const htmlRows = fields.map(([label, value]) =>
    `<tr><th align="left" style="padding:6px 12px 6px 0">${escapeHtml(label)}</th><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`
  ).join("");
  const html = `<p>Ný hæf samsvörun fannst í VerkRadar.</p><table>${htmlRows}</table><p><a href="${ADMIN_URL}">Opna stjórnborð</a><br>Leið: Companies → ${escapeHtml(displayCompanyName)}</p>`;
  return { subject, text, html, idempotencyKey: resendIdempotencyKey(alert) };
}
