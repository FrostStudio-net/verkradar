import { assertParsedArray, safeSourcePayload, stripHtml } from "./common.js";

const REYKJAVIK_ORIGIN = "https://reykjavik.is";
const DETAIL_PATH = /^\/utbod\/(\d{4,})-([a-z0-9-]+)\/?$/i;

export const reykjavikHtmlIndexAdapter = {
  parserName: "reykjavik-html-index",
  parserVersion: "1.0.0",
  parse(html) {
    return assertParsedArray(parseReykjavikIndex(html), this.parserName);
  },
};

export function parseReykjavikIndex(html = "") {
  const source = String(html || "");
  const seen = new Set();
  const notices = [];

  for (const match of source.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    const canonicalUrl = normalizeReykjavikDetailUrl(match[1]);
    if (!canonicalUrl) continue;
    const pathMatch = new URL(canonicalUrl).pathname.match(DETAIL_PATH);
    if (!pathMatch) continue;
    const reference = pathMatch[1];
    const title = stripHtml(match[2]);
    if (!title || seen.has(reference)) continue;
    seen.add(reference);
    notices.push({
      external_id: reference,
      procurement_reference: reference,
      discovered_url: canonicalUrl,
      canonical_url: canonicalUrl,
      title,
      description: null,
      buyer: null,
      deadline: null,
      publication_date: null,
      source_published_at: null,
      location: "Reykjavík",
      safe_source_payload: safeSourcePayload({
        listing_context: "current_procurement",
        index_path: "/utbodsauglysingar",
        reference_source: "detail_url",
      }, ["listing_context", "index_path", "reference_source"]),
    });
  }

  if (!notices.length && hasExpectedTenderSignals(source)) {
    throw deterministicParserError(
      "Reykjavík current-procurement signals were present but no detail links matched the expected structure",
      "V2_REYKJAVIK_STRUCTURE_MISMATCH",
    );
  }
  return notices;
}

export function normalizeReykjavikDetailUrl(value) {
  try {
    const url = new URL(String(value || ""), REYKJAVIK_ORIGIN);
    if (!["reykjavik.is", "www.reykjavik.is"].includes(url.hostname.toLowerCase())) return null;
    url.protocol = "https:";
    url.hostname = "reykjavik.is";
    url.hash = "";
    url.search = "";
    url.pathname = url.pathname.replace(/\/+$/, "");
    return DETAIL_PATH.test(url.pathname) ? url.toString() : null;
  } catch {
    return null;
  }
}

function hasExpectedTenderSignals(value) {
  const text = stripHtml(value);
  return /útboðsauglýsingar/i.test(text) && /(?:útboð|forval|markaðskönnun|tilboð)\s*(?:nr\.)?\s*\d{4,}/i.test(text);
}

function deterministicParserError(message, code) {
  const error = new Error(message);
  error.code = code;
  error.retryable = false;
  return error;
}
