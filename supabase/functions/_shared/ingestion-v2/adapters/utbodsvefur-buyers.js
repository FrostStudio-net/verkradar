import { assertParsedArray, decodeHtml, safeSourcePayload, stripHtml } from "./common.js";

const UTBODSVEFUR_ORIGIN = "https://utbodsvefur.is";
const EXPECTED_HEADERS = ["numer", "lysing", "utbodsadili", "tegund", "skilafrestur"];

export const UTBODSVEFUR_BUYERS = Object.freeze({
  landsvirkjun: buyerSpec("landsvirkjun-utbod-v2", "landsvirkjun-html-index", "Landsvirkjun", []),
  landsnet: buyerSpec("landsnet-utbod-v2", "landsnet-html-index", "Landsnet", []),
  veitur: buyerSpec("veitur-utbod-v2", "veitur-html-index", "Veitur", []),
  orkuveitan: buyerSpec("orkuveitan-utbod-v2", "orkuveitan-html-index", "Orkuveita Reykjavíkur", []),
});

export const landsvirkjunHtmlIndexAdapter = createUtbodsvefurBuyerAdapter(UTBODSVEFUR_BUYERS.landsvirkjun);
export const landsnetHtmlIndexAdapter = createUtbodsvefurBuyerAdapter(UTBODSVEFUR_BUYERS.landsnet);
export const veiturHtmlIndexAdapter = createUtbodsvefurBuyerAdapter(UTBODSVEFUR_BUYERS.veitur);
export const orkuveitanHtmlIndexAdapter = createUtbodsvefurBuyerAdapter(UTBODSVEFUR_BUYERS.orkuveitan);

export function createUtbodsvefurBuyerAdapter(spec) {
  return Object.freeze({
    parserName: spec.parserName,
    parserVersion: "1.0.0",
    parse(html) {
      return assertParsedArray(parseUtbodsvefurBuyerIndex(html, spec), this.parserName);
    },
  });
}

export function parseUtbodsvefurBuyerIndex(html = "", spec) {
  if (!spec?.canonicalBuyer || !spec?.parserName) throw parserError("A configured Útboðsvefur buyer is required", "V2_UTBODSVEFUR_BUYER_REQUIRED");
  const source = String(html || "");
  const table = findProcurementTable(source);
  if (!table) throw parserError("Expected Útboðsvefur procurement table was not found", structureErrorCode(spec));

  const acceptedBuyers = new Set([spec.canonicalBuyer, ...(spec.acceptedBuyerAliases || [])].map(normalizeBuyer));
  const diagnostics = {
    total_rows: 0,
    matching_buyer_rows: 0,
    buyer_mismatch_rows: 0,
    duplicate_rows: 0,
    zero_exact_buyer_match: false,
    canonical_buyer: spec.canonicalBuyer,
    accepted_buyer_aliases: [...(spec.acceptedBuyerAliases || [])],
    structure: "semantic_procurement_table_v1",
  };
  const candidates = [];
  const seen = new Set();
  for (const rowHtml of table.rows.slice(1)) {
    const cells = [...rowHtml.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map((match) => match[1]);
    if (cells.length < EXPECTED_HEADERS.length) continue;
    diagnostics.total_rows += 1;
    const buyer = stripHtml(cells[2]);
    if (!acceptedBuyers.has(normalizeBuyer(buyer))) {
      diagnostics.buyer_mismatch_rows += 1;
      continue;
    }
    diagnostics.matching_buyer_rows += 1;
    const reference = normalizeUtbodsvefurReference(stripHtml(cells[0]));
    const anchor = cells[1].match(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
    const canonicalUrl = normalizeUtbodsvefurDetailUrl(anchor?.[1]);
    const title = stripHtml(anchor?.[2] || cells[1]);
    if (!title || (!reference && !canonicalUrl)) continue;
    const identity = reference || canonicalUrl;
    if (seen.has(identity)) {
      diagnostics.duplicate_rows += 1;
      continue;
    }
    seen.add(identity);
    const noticeType = stripHtml(cells[3]) || null;
    candidates.push({
      external_id: reference || canonicalUrl,
      procurement_reference: reference || null,
      discovered_url: canonicalUrl,
      canonical_url: canonicalUrl,
      title,
      description: null,
      buyer,
      deadline: parseUtbodsvefurDate(stripHtml(cells[4])),
      publication_date: null,
      source_published_at: null,
      location: "Iceland",
      safe_source_payload: safeSourcePayload({
        listing_context: "current_procurement",
        source_status: "current_listing",
        notice_type: noticeType,
        aggregate_buyer: buyer,
        configured_buyer: spec.canonicalBuyer,
        reference_source: reference ? "index_reference_column" : "detail_url",
      }, ["listing_context", "source_status", "notice_type", "aggregate_buyer", "configured_buyer", "reference_source"]),
    });
  }
  diagnostics.zero_exact_buyer_match = diagnostics.matching_buyer_rows === 0;
  Object.defineProperty(candidates, "parserDiagnostics", { value: Object.freeze(diagnostics), enumerable: false });
  return candidates;
}

export function getUtbodsvefurParserDiagnostics(rows) {
  return rows?.parserDiagnostics || null;
}

export function normalizeUtbodsvefurDetailUrl(value) {
  try {
    const url = new URL(decodeHtml(String(value || "")), UTBODSVEFUR_ORIGIN);
    if (!["utbodsvefur.is", "www.utbodsvefur.is"].includes(url.hostname.toLowerCase())) return null;
    url.protocol = "https:";
    url.hostname = "utbodsvefur.is";
    url.search = "";
    url.hash = "";
    url.pathname = `/${url.pathname.split("/").filter(Boolean).join("/")}/`;
    if (!/^\/[a-z0-9áðéíóúýþæö_-]+\/$/i.test(url.pathname)) return null;
    if (/^\/(?:wp-|login|register|account|aspx)/i.test(url.pathname)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function normalizeUtbodsvefurBuyer(value) {
  return normalizeBuyer(value);
}

export function normalizeUtbodsvefurReference(value) {
  return String(value || "").replace(/\u00ad/g, "").replace(/[‐‑‒–—]/g, "-").replace(/\s+/g, "").trim() || null;
}

export function parseUtbodsvefurDate(value) {
  const match = String(value || "").match(/\b(\d{1,2})[.]\s*(\d{1,2})[.]\s*(\d{4})\b/);
  if (!match) return null;
  const candidate = `${match[3]}-${match[2].padStart(2, "0")}-${match[1].padStart(2, "0")}`;
  const date = new Date(`${candidate}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === candidate ? candidate : null;
}

function findProcurementTable(source) {
  for (const table of source.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/gi)) {
    const rows = [...table[1].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((match) => match[1]);
    if (!rows.length) continue;
    const headers = [...rows[0].matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/gi)].map((match) => normalizeBuyer(stripHtml(match[1])));
    if (EXPECTED_HEADERS.every((header, index) => headers[index] === header)) return { rows };
  }
  return null;
}

function buyerSpec(sourceKey, parserName, canonicalBuyer, acceptedBuyerAliases) {
  return Object.freeze({ sourceKey, parserName, canonicalBuyer, acceptedBuyerAliases: Object.freeze(acceptedBuyerAliases) });
}

function normalizeBuyer(value) {
  return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/æ/g, "ae").replace(/ð/g, "d").replace(/þ/g, "th").replace(/[^a-z0-9]+/g, "").trim();
}

function structureErrorCode(spec) {
  return `V2_${String(spec.sourceKey || "UTBODSVEFUR").split("-")[0].toUpperCase()}_STRUCTURE_MISMATCH`;
}

function parserError(message, code) {
  const error = new Error(message);
  error.code = code;
  error.retryable = false;
  return error;
}
