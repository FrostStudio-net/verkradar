import { normalizeLocationText } from "./strings.js";

export function formatCurrencyAmount(value, currency = "ISK") {
  if (!value) return "";
  const code = currency || "ISK";
  const suffix = code === "ISK" ? "kr" : code;
  return `${new Intl.NumberFormat("is-IS").format(value)} ${suffix}`;
}

export function formatReportQualityLabel(label, translate) {
  const t = translate || ((key) => key);
  const map = {
    "Confirmed tender": t("confirmedTender"),
    "Likely opportunity": t("likelyOpportunity"),
    "Early signal": t("earlySignal"),
    "Needs review": t("needsReview"),
    "Tender awarded": t("tenderAwarded"),
    "Tender already announced": t("tenderAlreadyAnnounced"),
    "Upcoming tender": t("upcomingTender"),
    "Project signal": t("projectSignal"),
    "Original language": t("originalLanguage")
  };
  return map[label] || label || "";
}

export function formatReportMatchLabel(label, translate) {
  const t = translate || ((key) => key);
  const map = {
    "Strong match": t("strongMatch"),
    "Good match": t("goodMatch"),
    "Possible match": t("possibleMatch"),
    "Weak match": t("weakMatch")
  };
  return map[label] || label || "";
}

export function formatReportMetadataValue(type, value, translate) {
  const t = translate || ((key) => key);
  const text = String(value || "").trim();
  if (!text) return type === "buyer" ? t("unknownBuyer") : t("notListed");
  if (type === "buyer") {
    if (isInvalidBuyerName(text)) return t("unknownBuyer");
    if (text.toLowerCase() === "unknown buyer") return t("unknownBuyer");
  }
  if (type === "location" && text.toLowerCase() === "all iceland") return t("allIceland");
  if (type === "source") return text.replace(/\bprocurement\b/gi, t("procurement"));
  return text;
}

export function isInvalidBuyerName(value) {
  const normalized = normalizeLocationText(value);
  if (!normalized) return true;
  if ([
    "admin",
    "administrator",
    "ritstjori",
    "editor",
    "noreply",
    "no reply",
    "wordpress",
    "wp admin",
    "user",
    "test"
  ].includes(normalized)) return true;
  if (normalized.includes("noreply")) return true;
  if (/^wp\s*[-_]?\s*\d+$/.test(normalized)) return true;
  return false;
}

export function inferBuyerFromSourceName(sourceName) {
  const normalized = normalizeLocationText(sourceName);
  if (!normalized) return "";
  if (normalized.includes("borgarbyggd")) return "Borgarbyggð";
  if (normalized.includes("akranes")) return "Akraneskaupstaður";
  if (normalized.includes("faxafloahafnir")) return "Faxaflóahafnir";
  if (normalized.includes("gardabaer")) return "Garðabær";
  if (normalized.includes("reykjanesbaer")) return "Reykjanesbær";
  if (normalized.includes("kopavogur")) return "Kópavogur";
  if (normalized.includes("hafnarfjordur")) return "Hafnarfjarðarbær";
  if (normalized.includes("mosfellsbaer")) return "Mosfellsbær";
  if (normalized.includes("arborg")) return "Sveitarfélagið Árborg";
  if (normalized.includes("fjardabyggd")) return "Fjarðabyggð";
  if (normalized.includes("mulathing")) return "Múlaþing";
  if (normalized.includes("garðabaer")) return "Garðabær";
  if (normalized.includes("rikiskaup") || normalized.includes("utbodsvefur")) return "";
  return "";
}

export function getCleanOpportunityBuyer(buyer, sourceName, rawPayload = {}) {
  const text = String(buyer || "").trim();
  if (/reykjavíkurborg/i.test(text)) return "Reykjavíkurborg";
  if (text && !isInvalidBuyerName(text) && text.toLowerCase() !== "unknown buyer") return text;
  const payloadBuyer = String(rawPayload.extracted_buyer || rawPayload.buyer || "").trim();
  if (/reykjavíkurborg/i.test(payloadBuyer)) return "Reykjavíkurborg";
  if (payloadBuyer && !isInvalidBuyerName(payloadBuyer) && payloadBuyer.toLowerCase() !== "unknown buyer") return payloadBuyer;
  return inferBuyerFromSourceName(sourceName) || "Unknown buyer";
}

export function inferLocationFromSourceName(sourceName) {
  const normalized = normalizeLocationText(sourceName);
  if (!normalized) return "";
  if (normalized.includes("borgarbyggd")) return "Borgarbyggð / Vesturland";
  if (normalized.includes("akranes")) return "Akranes / Vesturland";
  if (normalized.includes("faxafloahafnir")) return "Höfuðborgarsvæðið";
  if (normalized.includes("arborg")) return "Árborg / Suðurland";
  return "";
}

export function formatCustomerLocation(value, language, translate) {
  const text = String(value || "").trim();
  const t = translate || ((key) => key);
  if (language === "is") {
    const map = {
      "Capital Area": "Höfuðborgarsvæðið",
      "South Iceland": "Suðurland",
      "West Iceland": "Vesturland",
      "North Iceland": "Norðurland",
      "East Iceland": "Austurland",
      "Westfjords": "Vestfirðir",
      "All Iceland": t("allIceland"),
      "Remote / Online": "Fjarvinna / netverkefni"
    };
    return map[text] || text;
  }
  return text;
}

export function formatOpportunityModalValue(type, value, { language = "en", translate } = {}) {
  const t = translate || ((key) => key);
  const text = formatReportMetadataValue(type, value, t);
  if (language !== "is") return text;
  const normalized = String(text || "").trim().toLowerCase();
  const map = {
    "public procurement": t("publicProcurement"),
    "procurement": t("procurement"),
    "tender": t("tender")
  };
  return map[normalized] || text.replace(/\bpublic procurement\b/gi, t("publicProcurement")).replace(/\btender\b/gi, t("tender"));
}

export function formatReportReason(reason, { language = "en", translate } = {}) {
  const t = translate || ((key, params = {}) => params.value ? `${key}: ${params.value}` : key);
  const text = String(reason || "");
  const servicePrefix = "Mentions your service:";
  const keywordPrefix = "Contains your keyword:";
  if (text.startsWith(servicePrefix)) {
    return t("mentionsService", { value: text.slice(servicePrefix.length).trim() });
  }
  if (text.startsWith(keywordPrefix)) {
    return t("containsKeyword", { value: text.slice(keywordPrefix.length).trim() });
  }

  const map = {
    "National opportunity": t("nationalOpportunity"),
    "Local match": t("localMatch"),
    "Located in your selected region": t("localMatch"),
    "Project value is inside your preferred range": language === "is" ? "Áætlað verðmæti er innan óskaðs bils" : "Project value is inside your preferred range",
    "Deadline is coming up soon": language === "is" ? "Skilafrestur nálgast" : "Deadline is coming up soon",
    "Matched to your company profile.": language === "is" ? "Passar við fyrirtækjaprófílinn." : "Matched to your company profile.",
    "Matched to your profile by service, location or keyword overlap.": language === "is" ? "Passar við þjónustu, svæði eða lykilorð í prófílnum." : "Matched to your profile by service, location or keyword overlap."
  };
  return map[text] || text || "";
}

export function formatReportRisk(risk, language = "en") {
  if (language !== "is") return risk || "";
  const map = {
    "Deadline not available in feed - verify on source page.": "Skilafrestur fannst ekki í innfluttum gögnum - staðfestið á upprunasíðu.",
    "Deadline not available in imported data - verify on source page.": "Skilafrestur fannst ekki í innfluttum gögnum - staðfestið á upprunasíðu.",
    "Deadline not available in source - verify page.": "Skilafrestur fannst ekki í heimild - staðfestið á upprunalegri síðu.",
    "No formal tender deadline extracted - verify source article.": "Formlegur skilafrestur fannst ekki - staðfestið í heimildargrein.",
    "Formal tender deadline not found yet - monitor source article.": "Formlegur skilafrestur fannst ekki enn - fylgist með heimildargrein.",
    "Tender appears already announced/awarded - verify source article.": "Útboð virðist þegar auglýst eða afgreitt - staðfestið í heimildargrein.",
    "Estimated value is not listed in the imported data.": "Áætlað verðmæti er ekki gefið upp í innfluttum gögnum.",
    "Open the source page and confirm mandatory requirements.": "Opnið upprunalega heimild og staðfestið skyldukröfur.",
    "Extracted project signal - verify tender timing in the source article.": "Útdregin verkefnavísbending - staðfestið útboðstímasetningu í heimildargrein.",
    "Imported from broad feed - verify that this is a real tender or business opportunity.": "Innflutt úr breiðum fréttastraumi - staðfestið að þetta sé raunverulegt útboð eða viðskiptatækifæri."
  };
  return map[risk] || risk || "";
}

export function formatNextStep(step, language = "en") {
  if (language !== "is") return step || "";
  const map = {
    "Open the source documents": "Opna útboðsgögn",
    "Confirm mandatory requirements": "Staðfesta kröfur og hæfisskilyrði",
    "Check capacity and profitability": "Meta getu og arðsemi",
    "Prepare questions before the deadline": "Undirbúa fyrirspurnir fyrir skilafrest",
    "Open source documents and confirm requirements.": "Opna útboðsgögn og staðfesta kröfur."
  };
  return map[step] || step || "";
}
