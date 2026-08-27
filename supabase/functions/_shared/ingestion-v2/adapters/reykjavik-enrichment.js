import { stripHtml } from "./common.js";
import { extractProcurementReference } from "./procurement-metadata.js";

export function extractReykjavikDetailMetadata(html = "") {
  const source = String(html || "");
  const articleHtml = extractTenderArticle(source);
  if (!articleHtml) return emptyMetadata();

  const title = stripHtml(articleHtml.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || "") || null;
  const contentHtml = extractBalancedDivByClass(articleHtml, "TextBlock");
  const description = stripHtml(contentHtml) || null;
  const articleText = stripHtml(`${title || ""} ${contentHtml}`);
  const procurementReference = extractProcurementReference(articleText, { allowContextualNumber: true }) || referenceFromCanonical(source);
  const deadline = extractReykjavikDeadline(articleText) || deadlineFromRobotsMeta(source);
  const department = extractBuyerOrDepartment(description || "");
  const procurementType = classifyReykjavikProcurementType(articleText);
  const formType = procurementType === "market_consultation"
    ? "consultation"
    : ["open_tender", "prequalification"].includes(procurementType)
      ? "competition"
      : procurementType === "award_or_followup"
        ? "result"
        : null;
  const contact = articleText.match(/\b[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}\b/)?.[0] || null;
  const cpv = articleText.match(/\bCPV(?:-kóði)?\s*[:#-]?\s*(\d{8}(?:-\d)?)\b/i)?.[1] || null;
  const estimatedValue = extractEstimatedValue(articleText);
  const portalUrl = extractPublicPortalUrl(contentHtml);
  const canonicalUrl = canonicalFromHtml(source);
  const hasFields = title || procurementReference || description || deadline || department || formType;

  return {
    title,
    procurement_reference: procurementReference,
    buyer: department,
    department,
    description,
    deadline,
    form_type: formType,
    procurement_type: procurementType,
    follow_up: procurementType === "award_or_followup",
    request_for_bids: ["open_tender", "prequalification"].includes(procurementType),
    contact,
    estimated_value: estimatedValue,
    cpv,
    portal_url: portalUrl,
    canonical_url: canonicalUrl,
    enrichment_status: hasFields ? "enriched" : "no_supported_fields",
  };
}

export function classifyReykjavikProcurementType(value) {
  const text = normalize(value);
  if (/\b(nidurstada utbods|tilbod opnud|samningur undirritadur|verktaki valinn|samid vid)\b/.test(text)) return "award_or_followup";
  if (/\b(gagnsaeistilkynning|veat|fyrirhugud bein samningsgerd)\b/.test(text)) return "transparency_notice";
  if (/\b(markadskonnun|markadssamrad|upplysingabeidni|rfi|request for information)\b/.test(text)) return "market_consultation";
  if (/\b(forval|forvalsgogn|umsaeknum skal skila|samkeppnisvidraedur)\b/.test(text)) return "prequalification";
  if (/\b(utbod|utbodsgogn|tilbodum skal skila|oskad eftir tilbodum|oskar eftir tilbodum|rammasamningur|verdkonnun)\b/.test(text)) return "open_tender";
  return "unknown";
}

export function extractReykjavikDeadline(value) {
  const text = stripHtml(value);
  const numeric = text.match(/(?:tilboðum|umsóknum|gögnum)\s+skal\s+skila(?:ð)?.{0,180}?(\d{1,2})[.\/-]\s*(\d{1,2})[.\/-]\s*(\d{4})/i);
  if (numeric) return validDate(numeric[3], numeric[2], numeric[1]);
  const named = text.match(/(?:tilboðum|umsóknum|gögnum)\s+skal\s+skila(?:ð)?.{0,220}?(\d{1,2})\.?\s+([A-Za-zÁÉÍÓÚÝÞÐÆÖáéíóúýþðæö]+)\s+(\d{4})/i);
  if (!named) return null;
  const month = icelandicMonth(named[2]);
  return month ? validDate(named[3], month, named[1]) : null;
}

function extractTenderArticle(value) {
  const html = String(value || "");
  if (!/<body\b[^>]*class=["'][^"']*\bnode-tender\b/i.test(html)) return "";
  return html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i)?.[1] || "";
}

function extractBalancedDivByClass(value, className) {
  const html = String(value || "");
  const escaped = className.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const marker = new RegExp(`<div\\b[^>]*class=["'][^"']*\\b${escaped}\\b[^"']*["'][^>]*>`, "ig");
  const match = marker.exec(html);
  if (!match) return "";
  let depth = 1;
  const tag = /<\/?div\b[^>]*>/ig;
  tag.lastIndex = match.index + match[0].length;
  let current;
  while ((current = tag.exec(html))) {
    depth += /^<\/div/i.test(current[0]) ? -1 : 1;
    if (depth === 0) return html.slice(match.index + match[0].length, current.index);
  }
  return html.slice(match.index + match[0].length);
}

function extractBuyerOrDepartment(text) {
  const value = String(text || "");
  const onBehalf = [...value.matchAll(/f\.h\.\s+(.{3,180}?)\s+(?:er\s+)?(?:óskað|óskar)/gi)].at(-1)?.[1];
  if (onBehalf) return onBehalf.trim().replace(/\s+/g, " ");
  const direct = value.match(/(?:^|[.!?]\s+)([^.!?]{3,140}?Reykjavíkurborgar)\s+(?:er\s+)?(?:óskað|óskar)/i)?.[1];
  return direct ? direct.trim().replace(/\s+/g, " ") : null;
}

function extractEstimatedValue(text) {
  const match = String(text || "").match(/(?:áætluð\s+innkaup|áætlað\s+verð|áætlað\s+verðmæti|estimated\s+value).{0,180}?(?:kr\.|ISK)(?:\s+án\s+vsk\.)?/i);
  return match?.[0]?.trim() || null;
}

function extractPublicPortalUrl(html) {
  const match = String(html || "").match(/href=["'](https?:\/\/utbod\.reykjavik\.is\/?[^"']*)["']/i);
  if (!match) return null;
  try {
    const url = new URL(match[1]);
    url.protocol = "https:";
    return url.toString();
  } catch {
    return null;
  }
}

function canonicalFromHtml(html) {
  const match = String(html || "").match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    || String(html || "").match(/<link\b[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  if (!match) return null;
  try {
    const url = new URL(match[1]);
    return ["reykjavik.is", "www.reykjavik.is"].includes(url.hostname.toLowerCase()) ? url.toString() : null;
  } catch {
    return null;
  }
}

function referenceFromCanonical(html) {
  const canonical = canonicalFromHtml(html);
  return canonical?.match(/\/utbod\/(\d{4,})-/i)?.[1] || null;
}

function deadlineFromRobotsMeta(html) {
  const match = String(html || "").match(/<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*unavailable_after:\s*\w+,\s*(\d{1,2})-([A-Za-z]{3})-(\d{2,4})/i);
  if (!match) return null;
  const month = ({ jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 })[match[2].toLowerCase()];
  const year = match[3].length === 2 ? `20${match[3]}` : match[3];
  return month ? validDate(year, month, match[1]) : null;
}

function icelandicMonth(value) {
  return ({ januar: 1, februar: 2, mars: 3, april: 4, mai: 5, juni: 6, juli: 7, agust: 8, september: 9, oktober: 10, november: 11, desember: 12 })[normalize(value).replace(/\s+/g, "")] || null;
}

function validDate(year, month, day) {
  const candidate = `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const date = new Date(`${candidate}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === candidate ? candidate : null;
}

function emptyMetadata() {
  return {
    title: null,
    procurement_reference: null,
    buyer: null,
    department: null,
    description: null,
    deadline: null,
    form_type: null,
    procurement_type: "unknown",
    follow_up: false,
    request_for_bids: false,
    contact: null,
    estimated_value: null,
    cpv: null,
    portal_url: null,
    canonical_url: null,
    enrichment_status: "no_supported_fields",
  };
}

function normalize(value) {
  return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/æ/g, "ae").replace(/ð/g, "d").replace(/þ/g, "th").replace(/[^a-z0-9]+/g, " ").trim();
}
