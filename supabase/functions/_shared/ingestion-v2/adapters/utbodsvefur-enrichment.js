import { stripHtml } from "./common.js";
import { normalizeUtbodsvefurBuyer, normalizeUtbodsvefurReference, parseUtbodsvefurDate, UTBODSVEFUR_BUYERS } from "./utbodsvefur-buyers.js";

export function extractUtbodsvefurDetailMetadata(html = "", spec) {
  const articleHtml = extractArticle(html);
  if (!articleHtml || !spec?.canonicalBuyer) return emptyMetadata();
  const title = stripHtml(articleHtml.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || "") || null;
  const buyer = extractTableValue(articleHtml, "Útboðsaðili");
  const acceptedBuyers = new Set([spec.canonicalBuyer, ...(spec.acceptedBuyerAliases || [])].map(normalizeUtbodsvefurBuyer));
  if (!buyer || !acceptedBuyers.has(normalizeUtbodsvefurBuyer(buyer))) return emptyMetadata();
  const procurementReference = normalizeUtbodsvefurReference(extractTableValue(articleHtml, "Númer"));
  const noticeType = extractTableValue(articleHtml, "Tegund");
  const deadline = parseUtbodsvefurDate(extractTableValue(articleHtml, "Skilafrestur"));
  const documentsAvailableFrom = extractTableValue(articleHtml, "Útboðsgögn afhent");
  const text = stripHtml(articleHtml);
  const procurementType = classifyUtbodsvefurProcurementType(`${noticeType || ""} ${title || ""} ${text}`);
  const portalUrl = extractInTendProvenance(articleHtml);
  const canonicalUrl = extractCanonicalUrl(html);
  const description = extractDescription(articleHtml);
  const hasFields = title || procurementReference || deadline || noticeType || description;
  return {
    title,
    procurement_reference: procurementReference,
    buyer,
    description,
    deadline,
    notice_type: noticeType || null,
    procurement_type: procurementType,
    form_type: procurementType === "market_consultation" ? "consultation" : ["open_tender", "prequalification", "dynamic_purchasing_system"].includes(procurementType) ? "competition" : null,
    request_for_bids: ["open_tender", "prequalification", "dynamic_purchasing_system"].includes(procurementType),
    follow_up: procurementType === "award_or_followup",
    documents_available_from: documentsAvailableFrom || null,
    portal_url: portalUrl,
    canonical_url: canonicalUrl,
    enrichment_status: hasFields ? "enriched" : "no_supported_fields",
  };
}

export function extractLandsvirkjunDetailMetadata(html = "") {
  return extractUtbodsvefurDetailMetadata(html, UTBODSVEFUR_BUYERS.landsvirkjun);
}

export function extractLandsnetDetailMetadata(html = "") {
  return extractUtbodsvefurDetailMetadata(html, UTBODSVEFUR_BUYERS.landsnet);
}

export function extractVeiturDetailMetadata(html = "") {
  return extractUtbodsvefurDetailMetadata(html, UTBODSVEFUR_BUYERS.veitur);
}

export function extractOrkuveitanDetailMetadata(html = "") {
  return extractUtbodsvefurDetailMetadata(html, UTBODSVEFUR_BUYERS.orkuveitan);
}

export function classifyUtbodsvefurProcurementType(value) {
  const text = normalize(value);
  if (/\b(nidurstada|tilbod opnud|samningur undirritadur|verktaki valinn|samid vid|utbod lokid)\b/.test(text)) return "award_or_followup";
  if (/\b(gagnsaeistilkynning|veat|fyrirhugud bein samningsgerd)\b/.test(text)) return "transparency_notice";
  if (/\b(markadskonnun|markadssamrad|upplysingabeidni|rfi|request for information)\b/.test(text)) return "market_consultation";
  if (/\b(forval|forvalsgogn|prequalification|umsaeknum skal skila)\b/.test(text)) return "prequalification";
  if (/\b(gagnvirkt innkaupakerfi|dynamic purchasing system|dps)\b/.test(text)) return "dynamic_purchasing_system";
  if (/\b(forauglysing|prior information notice)\b/.test(text)) return "prior_notice";
  if (/\b(utbod|utbodsgogn|tilbodum skal skila|tender|framkvaemd|vorukaup|thjonusta|rammasamningur)\b/.test(text)) return "open_tender";
  return "unknown";
}

function extractArticle(value) {
  const html = String(value || "");
  const start = html.search(/<div\b[^>]*class=["'][^"']*\bcontent-text\b[^"']*["'][^>]*>/i);
  if (start < 0) return "";
  const end = html.slice(start).search(/<div\b[^>]*class=["'][^"']*\blayout-footer\b/i);
  return end >= 0 ? html.slice(start, start + end) : html.slice(start);
}

function extractTableValue(html, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = String(html || "").match(new RegExp(`<tr[^>]*>[\\s\\S]*?<td[^>]*class=["'][^"']*title[^"']*["'][^>]*>\\s*${escaped}\\s*:?\\s*<\\/td>\\s*<td[^>]*>([\\s\\S]*?)<\\/td>[\\s\\S]*?<\\/tr>`, "i"));
  return match?.[1] ? stripHtml(match[1]) : null;
}

function extractDescription(html) {
  const withoutTable = String(html || "").replace(/<table\b[^>]*>[\s\S]*?<\/table>/gi, " ").replace(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi, " ");
  const text = stripHtml(withoutTable);
  return text || null;
}

function extractInTendProvenance(html) {
  for (const match of String(html || "").matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)) {
    try {
      const url = new URL(match[1]);
      if (url.hostname.toLowerCase().endsWith("in-tendhost.co.uk")) return url.toString();
    } catch { /* malformed links are ignored */ }
  }
  return null;
}

function extractCanonicalUrl(html) {
  const match = String(html || "").match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    || String(html || "").match(/<link\b[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  if (!match) return null;
  try {
    const url = new URL(match[1]);
    if (!["utbodsvefur.is", "www.utbodsvefur.is"].includes(url.hostname.toLowerCase())) return null;
    url.protocol = "https:";
    url.hostname = "utbodsvefur.is";
    url.search = "";
    url.hash = "";
    url.pathname = `/${url.pathname.split("/").filter(Boolean).join("/")}/`;
    return url.toString();
  } catch {
    return null;
  }
}

function normalize(value) {
  return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/æ/g, "ae").replace(/ð/g, "d").replace(/þ/g, "th").replace(/[^a-z0-9]+/g, " ").trim();
}

function emptyMetadata() {
  return { title: null, procurement_reference: null, buyer: null, description: null, deadline: null, notice_type: null, procurement_type: "unknown", form_type: null, request_for_bids: false, follow_up: false, documents_available_from: null, portal_url: null, canonical_url: null, enrichment_status: "no_supported_fields" };
}
