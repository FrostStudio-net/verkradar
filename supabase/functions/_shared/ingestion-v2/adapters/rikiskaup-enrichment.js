import { stripHtml } from "./common.js";
import { extractProcurementDetailMetadata, extractProcurementReference } from "./procurement-metadata.js";

export function extractRikiskaupDetailMetadata(html = "") {
  const articleHtml = extractRikiskaupArticleHtml(html);
  const base = extractProcurementDetailMetadata(articleHtml, { allowContextualNumber: true });
  const title = stripHtml(articleHtml.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || "");
  const buyer = extractTableValue(articleHtml, "Útboðsaðili") || base.buyer;
  const noticeType = extractTableValue(articleHtml, "Tegund");
  const tableReference = extractTableValue(articleHtml, "Númer");
  const procurementReference = base.procurement_reference || extractProcurementReference(`Útboð nr. ${tableReference || ""}`);
  const text = stripHtml(`${title} ${noticeType} ${articleHtml}`);
  const procurementType = classifyRikiskaupProcurementType(text, noticeType);
  const formType = procurementType === "market_consultation"
    ? "consultation"
    : ["open_tender", "prequalification"].includes(procurementType)
      ? "competition"
      : null;
  const hasFields = base.deadline || procurementReference || buyer || noticeType || procurementType !== "unknown";

  return {
    ...base,
    buyer,
    procurement_reference: procurementReference,
    form_type: formType,
    notice_type: noticeType || null,
    procurement_type: procurementType,
    request_for_bids: ["open_tender", "prequalification"].includes(procurementType) || base.request_for_bids,
    enrichment_status: hasFields ? "enriched" : "no_supported_fields",
  };
}

export function classifyRikiskaupProcurementType(value, noticeType = "") {
  const text = normalize(`${noticeType} ${value}`);
  if (/\b(markadskonnun|markadssamrad|rfi|request for information)\b/.test(text)) return "market_consultation";
  if (/\b(gagnsaeistilkynning|veat|direct award preannouncement)\b/.test(text)) return "transparency_notice";
  if (/\b(forval|forvalsgogn|umsaeknum skal skila)\b/.test(text)) return "prequalification";
  if (/\b(utbod|utbodsgogn|tilbodum skal skila|samkeppnisutbod|rammasamningur)\b/.test(text)) return "open_tender";
  return "unknown";
}

function extractRikiskaupArticleHtml(value) {
  const html = String(value || "");
  const start = html.search(/<div\b[^>]*class=["'][^"']*\bcontent-text\b[^"']*["'][^>]*>/i);
  if (start < 0) return "";
  const end = html.search(/<div\b[^>]*class=["'][^"']*\blayout-footer\b/i);
  return html.slice(start, end > start ? end : undefined);
}

function extractTableValue(html, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = String(html || "").match(new RegExp(`<tr[^>]*>[\\s\\S]*?<td[^>]*class=["'][^"']*title[^"']*["'][^>]*>\\s*${escaped}\\s*:?\\s*<\\/td>\\s*<td[^>]*>([\\s\\S]*?)<\\/td>[\\s\\S]*?<\\/tr>`, "i"));
  return match?.[1] ? stripHtml(match[1]) : null;
}

function normalize(value) {
  return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/æ/g, "ae").replace(/ð/g, "d").replace(/þ/g, "th").replace(/[^a-z0-9]+/g, " ").trim();
}
