import { cleanReportReasons, getReportDeliveryStatus } from "./reportLocalization.js";

export { cleanReportReasons, getReportDeliveryStatus };

export function buildReportEmail({ companyName, matches, language = "is" }) {
  const isIs = language !== "en";
  const intro = isIs
    ? "Sæll/Sæl,\n\nVerkRadar fann eftirfarandi tækifæri sem gætu passað við ykkar þjónustu:"
    : "Hi,\n\nVerkRadar found the following opportunities that may fit your services:";
  const footer = isIs
    ? "Staðfestið alltaf útboðsgögn, skilafresti og kröfur á upprunalegri heimild áður en brugðist er við.\n\nKv.\nKristján"
    : "Always verify the tender documents, deadlines, requirements, and eligibility on the original source before taking action.\n\nBest,\nKristján";

  const body = (matches || []).map((match) => {
    const reasons = cleanReportReasons(match.matchReasons || match.reasons || [], language);
    const reasonLines = reasons.length
      ? reasons.map((reason) => `- ${reason}`).join("\n")
      : `- ${isIs ? "Passar við fyrirtækjaprófílinn." : "Matches the company profile."}`;
    if (isIs) {
      return `${match.title}
Útboðsaðili: ${match.buyer || "Óþekktur kaupandi"}
Skilafrestur: ${match.deadline || "Fannst ekki"}
Staða: ${getReportDeliveryStatus(match, language)}

Af hverju þetta gæti passað:
${reasonLines}

Heimild:
${match.url || "Engin heimild skráð"}`;
    }
    return `${match.title}
Buyer: ${match.buyer || "Unknown buyer"}
Deadline: ${match.deadline || "Not found"}
Status: ${getReportDeliveryStatus(match, language)}

Why this may fit:
${reasonLines}

Source:
${match.url || "No source URL listed"}`;
  }).join("\n\n");

  return `${intro}\n\n${body || (isIs ? "Engin atriði eru í þessu yfirliti." : "No items are included in this report.")}\n\n${footer}`;
}
