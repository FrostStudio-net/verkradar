export const MATCH_DECISION_REASONS = [
  ["", "Ástæða valfrjáls"],
  ["wrong_service", "Röng þjónusta"],
  ["wrong_location", "Rangt svæði"],
  ["too_large", "Of stórt"],
  ["too_small", "Of lítið"],
  ["missing_equipment_or_certification", "Vantar tæki eða vottun"],
  ["consultancy_not_execution", "Ráðgjöf/eftirlit, ekki framkvæmd"],
  ["not_interested", "Ekki áhugavert"],
  ["duplicate_or_already_known", "Tvítekið eða þegar þekkt"],
  ["other", "Annað"]
];

export function isHybridMatchingEnabled() {
  const value = window.VERKRADAR_HYBRID_MATCHING_ENABLED;
  return value === true || String(value || "").toLowerCase() === "true";
}

export function getCompanyMatchingProfile(company = {}) {
  return {
    coreServices: cleanArray(company.coreServices),
    secondaryServices: cleanArray(company.secondaryServices),
    excludedServices: cleanArray(company.excludedServices),
    preferredProjectTypes: cleanArray(company.preferredProjectTypes),
    excludedProjectTypes: cleanArray(company.excludedProjectTypes),
    equipment: cleanArray(company.equipment),
    certifications: cleanArray(company.certifications),
    preferredBuyers: cleanArray(company.preferredBuyers),
    maxTravelDistanceKm: company.maxTravelDistanceKm || "",
    typicalProjectSize: company.typicalProjectSize || "",
    profileNotesForAi: company.profileNotesForAi || ""
  };
}

export function buildMatchingProfilePayload(formElement) {
  const form = new FormData(formElement);
  return {
    coreServices: splitText(form.get("coreServices")),
    secondaryServices: splitText(form.get("secondaryServices")),
    excludedServices: splitText(form.get("excludedServices")),
    preferredProjectTypes: splitText(form.get("preferredProjectTypes")),
    excludedProjectTypes: splitText(form.get("excludedProjectTypes")),
    equipment: splitText(form.get("equipment")),
    certifications: splitText(form.get("certifications")),
    preferredBuyers: splitText(form.get("preferredBuyers")),
    maxTravelDistanceKm: nullableNumber(form.get("maxTravelDistanceKm")),
    typicalProjectSize: String(form.get("typicalProjectSize") || "").trim(),
    profileNotesForAi: String(form.get("profileNotesForAi") || "").trim()
  };
}

export function buildMatchDecisionPayload(formElement) {
  const form = new FormData(formElement);
  return {
    opportunityId: String(form.get("opportunityId") || "").trim(),
    decision: String(form.get("decision") || "").trim(),
    reason: String(form.get("reason") || "").trim(),
    comment: String(form.get("comment") || "").trim()
  };
}

export function buildEvaluationLabelPayload(formElement) {
  const form = new FormData(formElement);
  return {
    opportunityId: String(form.get("opportunityId") || "").trim(),
    label: String(form.get("label") || "").trim(),
    reason: String(form.get("reason") || "").trim(),
    notes: String(form.get("notes") || "").trim()
  };
}

export function formatMatchingProfileArray(value) {
  return cleanArray(value).join(", ");
}

function splitText(value) {
  return String(value || "")
    .split(/[\n,;]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function cleanArray(value) {
  return Array.isArray(value) ? value.map((item) => String(item || "").trim()).filter(Boolean) : splitText(value);
}

function nullableNumber(value) {
  if (value == null || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}
