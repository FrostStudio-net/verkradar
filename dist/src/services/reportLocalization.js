function uniqueStrings(values) {
  return Array.from(new Set((values || []).map((value) => String(value || "").trim()).filter(Boolean)));
}

function stripReasonPrefix(reason) {
  return String(reason || "")
    .replace(/^mentions your service:\s*/i, "")
    .replace(/^contains your keyword:\s*/i, "")
    .replace(/^mentions core service:\s*/i, "")
    .replace(/^nefnir þjónustu ykkar:\s*/i, "")
    .replace(/^inniheldur leitarorð:\s*/i, "")
    .replace(/^nefnir lykilþjónustu:\s*/i, "")
    .trim();
}

export function getReportUiLabel(key, language = "is") {
  const is = language !== "en";
  const labels = {
    downloadPdf: is ? "Sækja PDF" : "Download PDF",
    copyReportEmail: is ? "Afrita skýrslupóst" : "Copy report email",
    markAsSent: is ? "Merkja sem sent" : "Mark as sent",
    marking: is ? "Merkir..." : "Marking...",
    close: is ? "Loka" : "Close",
    sentStatus: is ? "Sendingarstaða" : "Sent status",
    notSent: is ? "Ekki sent" : "Not sent",
    sentOn: is ? "Sent" : "Sent on",
    company: is ? "Fyrirtæki" : "Company",
    period: is ? "Tímabil" : "Period",
    generatedAt: is ? "Útbúið" : "Generated at",
    mode: is ? "Gerð" : "Mode",
    items: is ? "Fjöldi" : "Items",
    currentActive: is ? "Núverandi virk tækifæri" : "Current active opportunities",
    newOpportunities: is ? "Ný tækifæri" : "New opportunities",
    reasons: is ? "Ástæður" : "Reasons",
    openSource: is ? "Opna heimild" : "Open source",
    verifyBadge: is ? "Staðfesta gögn" : "Verify documents",
    verifyTenderDocs: is ? "Staðfesta útboðsgögn" : "Verify tender documents",
    openActiveTitle: is ? "Opin útboð / virk tækifæri" : "Open tenders / active opportunities",
    openActiveDescription: is
      ? "Opin útboð eða virk verðfyrirspurnaratriði með skilafresti. Yfirfarið frumgögn áður en brugðist er við."
      : "Open tenders or active quote-request items with deadlines. Review source documents before acting.",
    possibleTitle: is ? "Möguleg tækifæri til skoðunar" : "Possible opportunities to review",
    possibleDescription: is
      ? "Tækifæri sem gætu átt við, en þar sem þarf að staðfesta umfang, kröfur eða hlutverk fyrirtækisins."
      : "Opportunities that may fit, but where scope, requirements, or company role should be verified.",
    earlyTitle: is ? "Væntanleg verkefni / early signals" : "Upcoming projects / early signals",
    earlyDescription: is
      ? "Vísbendingar um möguleg framtíðarverkefni sem eru ekki endilega formleg útboð ennþá."
      : "Signals for possible future projects that may not be formal tenders yet.",
  };
  return labels[key] || key;
}

export function getReportDeliveryStatus(match, language = "is") {
  const fit = String(match?.aiReviewFit || match?.ai_review_fit || "").toLowerCase();
  const isRecommended = fit === "strong" || Number(match?.matchScore || match?.match_score || 0) >= 85;
  if (language !== "en") {
    return isRecommended
      ? "Mælt með — staðfesta þarf útboðsgögn"
      : "Mögulegt tækifæri — staðfesta þarf útboðsgögn";
  }
  return isRecommended
    ? "Recommended — tender documents should be verified"
    : "Possible opportunity — tender documents should be verified";
}

export function getReportStatusBadge(match, language = "is") {
  const fit = String(match?.aiReviewFit || match?.ai_review_fit || "").toLowerCase();
  if (language !== "en") {
    if (fit === "strong" || Number(match?.matchScore || 0) >= 85) return "Mælt með";
    if (fit === "possible") return "Mögulegt tækifæri";
    if (String(match?.reportSection || "") === "early") return "Væntanlegt / merki";
    return "Staðfesta útboðsgögn";
  }
  if (fit === "strong" || Number(match?.matchScore || 0) >= 85) return "Recommended";
  if (fit === "possible") return "Possible opportunity";
  if (String(match?.reportSection || "") === "early") return "Upcoming signal";
  return "Verify documents";
}

export function cleanReportReasons(reasons = [], language = "is") {
  const cleaned = [];
  const seenTerms = new Set();
  for (const reason of reasons || []) {
    const raw = String(reason || "").trim();
    if (!raw) continue;
    const lower = raw.toLowerCase();
    if (lower.includes("winter/snow service fit")) {
      cleaned.push(language === "is"
        ? "Passar við vetrarþjónustu/snjómokstur; staðfestið umfang og getu."
        : "Winter/snow service fit; verify capacity and scope.");
      continue;
    }
    if (lower.includes("deadline is valid and in the future")) {
      cleaned.push(language === "is" ? "Skilafrestur er í framtíðinni." : "Deadline is valid and in the future.");
      continue;
    }
    if (lower.includes("location matches company service areas")) {
      cleaned.push(language === "is" ? "Staðsetning passar við þjónustusvæði." : "Location matches company service areas.");
      continue;
    }
    if (lower.includes("verify capacity and scope")) {
      cleaned.push(language === "is" ? "Staðfestið umfang og getu." : "Verify capacity and scope.");
      continue;
    }
    const term = stripReasonPrefix(raw);
    const key = term.toLowerCase();
    if (!term || seenTerms.has(key)) continue;
    seenTerms.add(key);
    const isAlreadyLocalized = language === "is" && /passar|nefnir|stað|skilafrestur|þjónustu|umfang/i.test(term);
    cleaned.push(language === "is"
      ? (isAlreadyLocalized ? term : `Passar við þjónustu eða leitarorð: ${term}`)
      : (/matches|mentions|deadline|location|verify/i.test(term) ? term : `Matches service or keyword: ${term}`));
  }
  return uniqueStrings(cleaned).slice(0, 4);
}

export function normalizeReportRisk(risk, language = "is") {
  const value = String(risk || "").trim();
  if (!value) return "";
  const lower = value.toLowerCase();
  if (language !== "en") {
    if (lower.includes("deadline not available")) return "Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.";
    if (lower.includes("open the source documents")) return "Opna útboðsgögn.";
    if (lower.includes("confirm mandatory requirements")) return "Staðfesta kröfur og hæfisskilyrði.";
    if (lower.includes("check capacity and profitability")) return "Meta getu og arðsemi.";
    if (lower.includes("prepare questions before the deadline")) return "Undirbúa fyrirspurnir fyrir skilafrest.";
    if (lower.includes("verify capacity and scope")) return "Staðfestið umfang og getu.";
  }
  return value;
}
