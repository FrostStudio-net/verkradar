import { stripHtml } from "./common.js";

export function extractGardabaerDetailMetadata(html = "") {
  const source = String(html || "");
  const article = source.match(/<main\b[^>]*>[\s\S]*?<article\b[^>]*>([\s\S]*?)<\/article>/i)?.[1]
    || source.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i)?.[1]
    || "";
  const canonicalUrl = canonicalFromHtml(source);
  if (!article || !canonicalUrl || !/^\/framkvaemdir\/utbod\//i.test(new URL(canonicalUrl).pathname)) return emptyMetadata();

  const title = stripHtml(article.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || "") || null;
  const articleText = stripHtml(article);
  const rawStatus = detailValue(article, "Staða útboðs") || statusFromText(articleText);
  const sourceStatus = normalizeGardabaerDetailStatus(rawStatus);
  const deadline = parseIcelandicDate(detailValue(article, "Útboð lýkur")) || deadlineFromText(articleText);
  const procurementReference = explicitReference(articleText);
  const municipalCaseId = source.match(/\/malsnumer\/(\d{6,})/i)?.[1] || null;
  const procurementType = classifyGardabaerProcurementType(articleText, sourceStatus);
  const description = extractDescription(article, title);
  const hasFields = title || deadline || sourceStatus !== "unknown" || procurementReference || procurementType !== "unknown";

  return {
    title,
    procurement_reference: procurementReference,
    buyer: "Garðabær",
    description,
    deadline,
    source_status: sourceStatus,
    procurement_type: procurementType,
    request_for_bids: sourceStatus === "active" && ["open_tender", "prequalification"].includes(procurementType),
    follow_up: sourceStatus === "completed" || procurementType === "award_or_followup",
    canonical_url: canonicalUrl,
    municipal_case_id: municipalCaseId,
    identity_basis: procurementReference ? "explicit_reference" : "canonical_path",
    enrichment_status: hasFields ? "enriched" : "no_supported_fields",
  };
}

export function normalizeGardabaerDetailStatus(value) {
  const text = normalize(value);
  if (/\bi auglysingu\b/.test(text)) return "active";
  if (/\blokid\b/.test(text)) return "completed";
  return "unknown";
}

export function classifyGardabaerProcurementType(value, status = "unknown") {
  const text = normalize(value);
  if (status === "completed" || /\b(nidurstada utbods|samningur undirritadur|verktaki valinn|samid vid)\b/.test(text)) return "award_or_followup";
  if (/\b(markadskonnun|markadssamrad|upplysingabeidni|rfi|request for information)\b/.test(text)) return "market_consultation";
  if (/\b(forval|lokuðu utbodi|lokudu utbodi|umsaeknum|thatttokurett)\b/.test(text)) return "prequalification";
  if (/\b(utbod|utbodsgogn|tilbodum skal skila|oskar eftir tilbodum|auglysir eftir tilbodum)\b/.test(text)) return "open_tender";
  return "unknown";
}

function detailValue(html, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`<div\\b[^>]*class=["'][^"']*detailsTitle[^"']*["'][^>]*>\\s*${escaped}\\s*<\\/div>\\s*<div\\b[^>]*class=["'][^"']*detailsContent[^"']*["'][^>]*>([\\s\\S]*?)<\\/div>`, "i");
  return stripHtml(html.match(pattern)?.[1] || "") || null;
}

function statusFromText(text) {
  return String(text || "").match(/\b(Í auglýsingu|Lokið)\b/i)?.[1] || null;
}

function parseIcelandicDate(value) {
  const match = String(value || "").match(/\b(\d{1,2})[.\/-](\d{1,2})[.\/-](\d{4})\b/);
  return match ? validDate(match[3], match[2], match[1]) : null;
}

function deadlineFromText(text) {
  const numeric = String(text || "").match(/(?:tilboðum|umsóknum)\s+skal\s+skila(?:ð)?.{0,180}?(\d{1,2})[.\/-](\d{1,2})[.\/-](\d{4})/i);
  if (numeric) return validDate(numeric[3], numeric[2], numeric[1]);
  const named = String(text || "").match(/(?:tilboðum|umsóknum)\s+skal\s+skila(?:ð)?.{0,220}?(\d{1,2})\.?\s+([A-Za-zÁÉÍÓÚÝÞÐÆÖáéíóúýþðæö]+)\s+(\d{4})/i);
  if (!named) return null;
  const month = ({ januar: 1, februar: 2, mars: 3, april: 4, mai: 5, juni: 6, juli: 7, agust: 8, september: 9, oktober: 10, november: 11, desember: 12 })[normalize(named[2]).replace(/\s+/g, "")];
  return month ? validDate(named[3], month, named[1]) : null;
}

function explicitReference(text) {
  const match = String(text || "").match(/(?:útboðs(?:númer|nr\.?|númerið)|útboð\s+nr\.?|verknúmer|tilvísun)\s*[:#-]?\s*([A-ZÁÉÍÓÚÝÞÐÆÖ0-9][A-ZÁÉÍÓÚÝÞÐÆÖ0-9._\/-]{2,39})/i);
  return match?.[1]?.replace(/[.,;:]+$/, "") || null;
}

function extractDescription(article, title) {
  const paragraphs = [...String(article || "").matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) => stripHtml(match[1]))
    .filter(Boolean);
  const text = paragraphs.join(" ").slice(0, 5000);
  return text && text !== title ? text : null;
}

function canonicalFromHtml(html) {
  const match = String(html || "").match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    || String(html || "").match(/<link\b[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  if (!match) return null;
  try {
    const url = new URL(match[1], "https://www.gardabaer.is");
    if (!["gardabaer.is", "www.gardabaer.is"].includes(url.hostname.toLowerCase())) return null;
    url.hash = "";
    return url.toString();
  } catch {
    return null;
  }
}

function validDate(year, month, day) {
  const candidate = `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const date = new Date(`${candidate}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === candidate ? candidate : null;
}

function normalize(value) {
  return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/æ/g, "ae").replace(/ð/g, "d").replace(/þ/g, "th").replace(/[^a-z0-9]+/g, " ").trim();
}

function emptyMetadata() {
  return {
    title: null,
    procurement_reference: null,
    buyer: null,
    description: null,
    deadline: null,
    source_status: "unknown",
    procurement_type: "unknown",
    request_for_bids: false,
    follow_up: false,
    canonical_url: null,
    municipal_case_id: null,
    identity_basis: null,
    enrichment_status: "no_supported_fields",
  };
}
