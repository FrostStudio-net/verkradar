import { assertParsedArray, safeSourcePayload, stripHtml } from "./common.js";

const ORIGIN = "https://www.vegagerdin.is";
const CURRENT_PATH = "/verkefnin/utbod/auglyst-utbod";
const PLANNED_PATH = "/verkefnin/utbod/fyrirhugud-utbod";
const RESERVED_PATHS = new Set([
  "/verkefnin/utbod",
  CURRENT_PATH,
  "/verkefnin/utbod/opnun-tilboda",
  "/verkefnin/utbod/samningum-lokid",
  PLANNED_PATH,
]);

export const vegagerdinHtmlIndexAdapter = {
  parserName: "vegagerdin-html-index",
  parserVersion: "1.1.1",
  parse(input) {
    let payload;
    try { payload = typeof input === "string" ? JSON.parse(input) : input; }
    catch { throw parserError("Vegagerðin combined index payload is not valid JSON", "V2_VEGAGERDIN_INDEX_JSON_INVALID"); }
    return assertParsedArray(parseVegagerdinIndexPayload(payload), this.parserName);
  },
};

export function parseVegagerdinIndexPayload(payload = {}) {
  const current = parseCurrentListing(payload.current_html || "");
  const plannedRaw = parsePlannedListing(payload.planned_html || "");
  const currentReferences = new Set(current.map((row) => row.procurement_reference));
  const planned = plannedRaw.filter((row) => !currentReferences.has(row.procurement_reference));
  const totals = {
    current_tenders_found: current.length,
    planned_tenders_found: plannedRaw.length,
    planned_observations_stored: planned.length,
    planned_promoted_to_current_suppressed: plannedRaw.length - planned.length,
    broad_rss_rows: 0,
  };
  return [...current, ...planned].map((row) => ({
    ...row,
    safe_source_payload: { ...(row.safe_source_payload || {}), index_totals: totals },
  }));
}

export function parseCurrentListing(html = "") {
  const source = String(html || "");
  const rows = [];
  const seen = new Set();
  const anchorPattern = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  for (const match of source.matchAll(anchorPattern)) {
    const attributes = match[1];
    const href = attributes.match(/href=["']([^"']+)["']/i)?.[1];
    const canonicalUrl = normalizeDetailUrl(href);
    if (!canonicalUrl) continue;
    const body = match[2];
    const eyebrowMatch = body.match(/<span\b[^>]*>\s*(Útboð\s+[0-9]{2}-[0-9]{3}[\s\S]*?)<\/span>/i);
    const eyebrow = stripHtml(eyebrowMatch?.[1] || "");
    const reference = normalizeReference(eyebrow.match(/Útboð\s+([0-9]{2}-[0-9]{3})\b/i)?.[1]);
    const afterEyebrow = eyebrowMatch ? body.slice((eyebrowMatch.index || 0) + eyebrowMatch[0].length) : "";
    const title = stripHtml(afterEyebrow.match(/<span\b[^>]*>([\s\S]*?)<\/span>/i)?.[1] || "");
    if (!reference || !title || seen.has(reference)) continue;
    seen.add(reference);
    const summary = stripHtml(afterEyebrow.match(/<div\b[^>]*class=["'][^"']*\bCard_summary__[^"']*["'][^>]*>([\s\S]*)/i)?.[1] || "") || null;
    rows.push({
      external_id: reference,
      procurement_reference: reference,
      discovered_url: canonicalUrl,
      canonical_url: canonicalUrl,
      title,
      description: summary,
      buyer: "Vegagerðin",
      deadline: extractSubmissionDeadline(summary || ""),
      publication_date: parseIcelandicDate(eyebrow),
      source_published_at: null,
      location: "Ísland",
      safe_source_payload: safeSourcePayload({
        listing_role: "current_tender",
        listing_context: "current_procurement",
        source_status: "active",
        procurement_type: "open_tender",
        request_for_bids: true,
        strong_procurement_evidence: true,
        index_path: CURRENT_PATH,
        identity_basis: "explicit_tender_reference",
      }, ["listing_role", "listing_context", "source_status", "procurement_type", "request_for_bids", "strong_procurement_evidence", "index_path", "identity_basis"]),
    });
  }
  if (!rows.length && /Auglýst\s+útboð/i.test(stripHtml(source))) {
    throw parserError("Vegagerðin current-tender signals were present but no isolated tender cards matched", "V2_VEGAGERDIN_CURRENT_STRUCTURE_MISMATCH");
  }
  return rows;
}

export function parsePlannedListing(html = "") {
  const source = String(html || "");
  const table = [...source.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/gi)]
    .map((match) => match[1])
    .find((body) => /Útboðsnúmer/i.test(stripHtml(body)) && /\bVerk\b/i.test(stripHtml(body)) && /\bAuglýst\b/i.test(stripHtml(body))) || "";
  const rows = [];
  const seen = new Set();
  for (const match of table.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const cells = [...match[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map((cell) => stripHtml(cell[1]));
    if (cells.length < 3) continue;
    const reference = normalizeReference(cells[0]);
    const title = cells[1]?.trim();
    const year = cells[2]?.match(/\b(20\d{2})\b/)?.[1] || null;
    if (!reference || !title || seen.has(reference)) continue;
    seen.add(reference);
    const url = `${ORIGIN}${PLANNED_PATH}#${encodeURIComponent(reference)}`;
    rows.push({
      external_id: `planned:${reference}`,
      procurement_reference: reference,
      discovered_url: url,
      canonical_url: url,
      title,
      description: null,
      buyer: "Vegagerðin",
      deadline: null,
      publication_date: null,
      source_published_at: null,
      location: "Ísland",
      safe_source_payload: safeSourcePayload({
        listing_role: "planned_tender",
        listing_context: "planned_procurement",
        source_status: "planned",
        procurement_type: "prior_notice",
        request_for_bids: false,
        strong_procurement_evidence: true,
        planned_year: year,
        index_path: PLANNED_PATH,
        identity_basis: "explicit_tender_reference",
      }, ["listing_role", "listing_context", "source_status", "procurement_type", "request_for_bids", "strong_procurement_evidence", "planned_year", "index_path", "identity_basis"]),
    });
  }
  if (!rows.length && /Útboðsnúmer\s+Verk\s+Auglýst/i.test(stripHtml(source))) {
    throw parserError("Vegagerðin planned-tender table was present but no rows matched", "V2_VEGAGERDIN_PLANNED_STRUCTURE_MISMATCH");
  }
  return rows;
}

export function getVegagerdinIndexDiagnostics(candidates = []) {
  const totals = candidates.find((row) => row?.safe_source_payload?.index_totals)?.safe_source_payload?.index_totals || {};
  return {
    current_tenders_found: Number(totals.current_tenders_found || 0),
    planned_tenders_found: Number(totals.planned_tenders_found || 0),
    planned_observations_stored: Number(totals.planned_observations_stored || 0),
    planned_promoted_to_current_suppressed: Number(totals.planned_promoted_to_current_suppressed || 0),
    broad_rss_rows: 0,
    structure_matched: Number(totals.current_tenders_found || 0) > 0,
  };
}

export function normalizeDetailUrl(value) {
  try {
    const url = new URL(String(value || ""), ORIGIN);
    url.protocol = "https:";
    url.hostname = "www.vegagerdin.is";
    url.search = "";
    url.hash = "";
    url.pathname = url.pathname.replace(/\/+$/, "");
    if (!url.pathname.startsWith("/verkefnin/utbod/") || RESERVED_PATHS.has(url.pathname)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function extractSubmissionDeadline(value) {
  const text = stripHtml(value);
  const numeric = text.match(/(?:(?:tilboði|tilboðum|umsókn|umsóknum)\s+skal\s+skila(?:ð)?|skal\s+(?:tilboði|tilboðum|umsókn|umsóknum)\s+skila(?:ð)?).{0,180}?(\d{1,2})[.\/-](\d{1,2})[.\/-](\d{4})/i);
  if (numeric) return validDate(numeric[3], numeric[2], numeric[1]);
  const named = text.match(/(?:(?:tilboði|tilboðum|umsókn|umsóknum)\s+skal\s+skila(?:ð)?|skal\s+(?:tilboði|tilboðum|umsókn|umsóknum)\s+skila(?:ð)?).{0,220}?(\d{1,2})\.?\s+([A-Za-zÁÉÍÓÚÝÞÐÆÖáéíóúýþðæö]+)\s+(\d{4})/i);
  if (!named) return null;
  const month = icelandicMonth(named[2]);
  return month ? validDate(named[3], month, named[1]) : null;
}

function parseIcelandicDate(value) {
  const match = stripHtml(value).match(/\b(\d{1,2})\.?\s+([A-Za-zÁÉÍÓÚÝÞÐÆÖáéíóúýþðæö]+)\s+(\d{4})\b/i);
  if (!match) return null;
  const month = icelandicMonth(match[2]);
  return month ? validDate(match[3], month, match[1]) : null;
}

function icelandicMonth(value) {
  return ({ januar: 1, februar: 2, mars: 3, april: 4, mai: 5, juni: 6, juli: 7, agust: 8, september: 9, oktober: 10, november: 11, desember: 12 })[normalize(value)] || null;
}

function normalizeReference(value) {
  const reference = stripHtml(value).replace(/\s+/g, "").replace(/[.,;:]+$/, "");
  return /^\d{2}-\d{3}$/.test(reference) ? reference : null;
}

function validDate(year, month, day) {
  const candidate = `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const date = new Date(`${candidate}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === candidate ? candidate : null;
}

function normalize(value) {
  return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/æ/g, "ae").replace(/ð/g, "d").replace(/þ/g, "th").replace(/[^a-z0-9]+/g, "").trim();
}

function parserError(message, code) {
  const error = new Error(message);
  error.code = code;
  error.retryable = false;
  return error;
}
