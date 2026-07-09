function uniqueStrings(values) {
  return Array.from(new Set((values || []).map((value) => String(value || "").trim()).filter(Boolean)));
}

function normalizeReason(reason) {
  return String(reason || "")
    .replace(/^mentions your service:\s*/i, "")
    .replace(/^contains your keyword:\s*/i, "")
    .replace(/^mentions core service:\s*/i, "")
    .replace(/^deadline is valid and in the future\.?$/i, "deadline")
    .replace(/^location matches company service areas\.?$/i, "location")
    .trim();
}

export function cleanReportReasons(reasons = [], language = "is") {
  const seenTerms = new Set();
  const cleaned = [];
  for (const reason of reasons || []) {
    const normalized = normalizeReason(reason);
    if (!normalized) continue;
    const key = normalized.toLowerCase();
    if (key === "deadline") {
      cleaned.push(language === "is" ? "Skilafrestur er skráður og þarf að staðfesta á heimild." : "A deadline is listed and should be verified at the source.");
      continue;
    }
    if (key === "location") {
      cleaned.push(language === "is" ? "Verkið er á svæði sem passar við þjónustusvæði fyrirtækisins." : "The location matches the company service area.");
      continue;
    }
    if (seenTerms.has(key)) continue;
    seenTerms.add(key);
    cleaned.push(language === "is"
      ? `Passar við þjónustu eða leitarorð: ${normalized}`
      : `Matches service or keyword: ${normalized}`);
  }
  return uniqueStrings(cleaned).slice(0, 4);
}

export function getReportDeliveryStatus(match, language = "is") {
  const fit = String(match?.aiReviewFit || match?.ai_review_fit || "").toLowerCase();
  const isRecommended = fit === "strong" || Number(match?.matchScore || 0) >= 85;
  if (language === "is") {
    return isRecommended
      ? "Mælt með — staðfesta þarf útboðsgögn"
      : "Mögulegt tækifæri — staðfesta þarf útboðsgögn";
  }
  return isRecommended
    ? "Recommended — tender documents should be verified"
    : "Possible opportunity — tender documents should be verified";
}

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
