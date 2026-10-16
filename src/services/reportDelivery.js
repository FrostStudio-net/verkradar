import { calculateCompanyOpportunityMatch, COMPANY_MATCH_THRESHOLD } from "../../supabase/functions/_shared/company-matcher.js";
import { cleanReportReasons, getReportEmailStatus, normalizeReportRisk } from "./reportLocalization.js";

export { cleanReportReasons, getReportEmailStatus };

export function getCustomerReadyReportMatches({ profile, matches, currentMatches }) {
  if (!profile) return [];
  const currentByOpportunity = new Map((currentMatches || []).map((match) => [
    String(match.opportunity_id || match.opportunityId || match.id || ""),
    match,
  ]));
  return (matches || []).filter((match) => {
    const opportunityId = String(match.id || match.opportunity_id || match.opportunityId || "");
    const current = currentByOpportunity.get(opportunityId);
    if (!current) return false;
    const recalculated = calculateCompanyOpportunityMatch(profile, match);
    const safety = String(current.safety_status || current.safetyStatus || "needs_review");
    const reviewRequired = current.review_required === true || current.reviewRequired === true;
    const alertEligible = current.alert_eligible ?? current.alertEligible;
    const reviewedAt = String(current.reviewed_at || current.reviewedAt || "");
    const specialistApproved = recalculated.requires_capability_review !== true || Boolean(reviewedAt);
    return recalculated.matchScore >= COMPANY_MATCH_THRESHOLD &&
      recalculated.has_substantive_scope_fit === true &&
      safety === "auto_approved" &&
      !reviewRequired &&
      alertEligible !== false &&
      specialistApproved;
  });
}

function conciseText(value, maxLength = 500) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

function customerSafeReasons(match, language) {
  const explicit = Array.isArray(match.customerSafeReasons) ? match.customerSafeReasons : [];
  const aiApproved = match.aiReviewSendToClient === true || match.ai_review_send_to_client === true;
  const aiReasons = aiApproved
    ? [match.aiSuggestedClientSummary || match.ai_suggested_client_summary, ...(match.aiFitReasons || match.ai_fit_reasons || [])]
    : [];
  return cleanReportReasons([...explicit, ...aiReasons].filter(Boolean), language);
}

export function buildReportEmail({ companyName, matches, language = "is" }) {
  const isIs = language !== "en";
  const recipient = String(companyName || "").trim();
  const intro = isIs
    ? `Sæll/Sæl${recipient ? ` hjá ${recipient}` : ""},\n\nVerkRadar fann eftirfarandi tækifæri sem gætu passað við ykkar þjónustu:`
    : `Hi${recipient ? ` ${recipient}` : ""},\n\nVerkRadar found the following opportunities that may fit your services:`;
  const footer = isIs
    ? "Staðfestið alltaf útboðsgögn, skilafresti og kröfur á upprunalegri heimild áður en brugðist er við.\n\nKv.\nKristján"
    : "Always verify the tender documents, deadlines, requirements, and eligibility on the original source before taking action.\n\nBest,\nKristján";

  const body = (matches || []).map((match) => {
    const reasons = customerSafeReasons(match, language);
    const reasonLines = reasons.length
      ? reasons.map((reason) => `- ${reason}`).join("\n")
      : `- ${isIs ? "Staðfesta þarf þjónustufit, umfang og hæfiskröfur áður en ákvörðun er tekin." : "Service fit, scope, and qualification requirements must be verified before deciding."}`;
    const scope = conciseText(match.description || match.scope) || (isIs ? "Lýsing á umfangi fannst ekki." : "No scope description was available.");
    const location = String(match.location || "").trim() || (isIs ? "Staðsetning ekki skráð" : "Location not listed");
    const risks = (match.risks || []).map((risk) => normalizeReportRisk(risk, language)).filter(Boolean);
    const riskLines = (risks.length ? risks : [isIs ? "Staðfesta þarf umfang, hæfi og útboðsgögn." : "Scope, eligibility, and tender documents must be verified."])
      .map((risk) => `- ${risk}`).join("\n");
    const url = match.url || (isIs ? "Engin heimild skráð" : "No source URL listed");
    if (isIs) {
      return `${match.title}
Útboðsaðili: ${match.buyer || "Óþekktur kaupandi"}
Skilafrestur: ${match.deadline || "Fannst ekki"}
Staðsetning: ${location}
Staða: ${getReportEmailStatus(match, language)}

Umfang:
${scope}

Af hverju þetta gæti passað:
${reasonLines}

Atriði sem þarf að staðfesta:
${riskLines}

Opna upprunalegt útboð:
${url}`;
    }
    return `${match.title}
Buyer: ${match.buyer || "Unknown buyer"}
Deadline: ${match.deadline || "Not found"}
Location: ${location}
Status: ${getReportEmailStatus(match, language)}

Scope:
${scope}

Why this may fit:
${reasonLines}

Points to verify:
${riskLines}

Open the original tender:
${url}`;
  }).join("\n\n");

  return `${intro}\n\n${body || (isIs ? "Engin atriði eru í þessu yfirliti." : "No items are included in this report.")}\n\n${footer}`;
}
