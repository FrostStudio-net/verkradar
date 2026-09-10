import { assertParsedArray, safeSourcePayload, stripHtml } from "./common.js";
import { normalizeIdentityText } from "../contracts.js";

const CONSENSA_INDEX_URL = "https://www.consensa.is/utbod";
const CONSENSA_HOSTS = new Set(["consensa.is", "www.consensa.is"]);
const TENDSIGN_HOSTS = new Set(["tendsign.com", "www.tendsign.com", "tendsign.is", "www.tendsign.is"]);
const MONTHS = Object.freeze({
  jan: 1, januar: 1, feb: 2, februar: 2, mar: 3, mars: 3, apr: 4, april: 4,
  mai: 5, jun: 6, juni: 6, jul: 7, juli: 7, agu: 8, agust: 8,
  sep: 9, september: 9, okt: 10, oktober: 10, nov: 11, november: 11, des: 12, desember: 12,
});

export const consensaHtmlIndexAdapter = {
  parserName: "consensa-html-index",
  parserVersion: "1.0.0",
  parse(input) {
    return assertParsedArray(parseConsensaIndex(input), this.parserName);
  },
};

export function parseConsensaIndex(input = "") {
  const { pageHtml, sitemapXml } = unpackInput(input);
  const source = pageHtml.replace(/\0/g, "");
  const sitemap = parseConsensaSitemap(sitemapXml);
  const chunks = source.split(/<div\b[^>]*role=["']listitem["'][^>]*>/i).slice(1);
  const observations = [];
  const seen = new Set();
  let malformed = 0;

  for (const chunk of chunks) {
    if (!/comp-mbnfkw3a2__/i.test(chunk) || !/(?:N(?:&uacute;|ú)mer|Kaupandi|Skilafrestur)/i.test(chunk)) continue;
    const candidate = parseTenderChunk(chunk, sitemap);
    if (!candidate) {
      malformed += 1;
      continue;
    }
    if (seen.has(candidate.external_id)) continue;
    seen.add(candidate.external_id);
    observations.push(candidate);
  }

  if (!observations.length && hasConsensaTenderSignals(source)) {
    throw parserError("Consensa tender signals were present but no repeated tender records matched", "V2_CONSENSA_STRUCTURE_MISMATCH");
  }
  if (malformed > 0) {
    const error = parserError(`Consensa contained ${malformed} malformed repeated tender record(s)`, "V2_CONSENSA_MALFORMED_RECORD");
    error.malformed_count = malformed;
    throw error;
  }
  return observations;
}

export function getConsensaIndexDiagnostics(candidates = []) {
  const rows = Array.isArray(candidates) ? candidates : [];
  return {
    tender_rows: rows.length,
    references_recovered: rows.filter((row) => Boolean(row.procurement_reference)).length,
    buyers_recovered: rows.filter((row) => Boolean(row.buyer)).length,
    deadlines_recovered: rows.filter((row) => Boolean(row.deadline)).length,
    tendsign_ids_recovered: rows.filter((row) => Boolean(row.safe_source_payload?.tendsign_notice_id)).length,
    canonical_detail_urls_recovered: rows.filter((row) => row.safe_source_payload?.canonical_url_source === "public_sitemap").length,
    structure_matched: rows.length > 0,
  };
}

export function applyConsensaObservationStatus(candidates = [], now = new Date()) {
  const today = new Date(now).toISOString().slice(0, 10);
  return candidates.map((candidate) => {
    const validSourceUrl = isAllowedConsensaUrl(candidate.canonical_url || candidate.discovered_url);
    const procurementSignal = /\b(?:utbod\w*|tilbod\w*|innkaup\w*|verdfyrirspurn\w*|rammasamning\w*|forval\w*)\b/.test(normalizeIdentityText(`${candidate.title} ${candidate.description}`));
    const stableIdentity = Boolean(candidate.procurement_reference || candidate.safe_source_payload?.tendsign_notice_id || candidate.safe_source_payload?.canonical_url_source === "public_sitemap");
    const deadlineAt = candidate.safe_source_payload?.deadline_at ? Date.parse(candidate.safe_source_payload.deadline_at) : NaN;
    const futureDeadline = candidate.deadline
      ? Number.isFinite(deadlineAt) ? deadlineAt > new Date(now).getTime() : candidate.deadline > today
      : false;
    const complete = Boolean(candidate.deadline && candidate.buyer && stableIdentity && procurementSignal && validSourceUrl);
    const sourceStatus = !complete ? "invalid" : futureDeadline ? "active" : "expired";
    const validationErrors = [
      !candidate.deadline && "deadline_required",
      !candidate.buyer && "buyer_required",
      !stableIdentity && "stable_identity_required",
      !procurementSignal && "procurement_evidence_required",
      !validSourceUrl && "consensa_source_url_required",
    ].filter(Boolean);
    return {
      ...candidate,
      validation_errors: validationErrors,
      safe_source_payload: {
        ...(candidate.safe_source_payload || {}),
        source_status: sourceStatus,
        admission_eligible: sourceStatus === "active",
      },
    };
  });
}

function parseTenderChunk(chunk, sitemap) {
  const title = fieldHtml(chunk, /<h2\b[^>]*>([\s\S]*?)<\/h2>/i);
  const description = fieldHtml(chunk, /comp-mbnfkw3b5__[^>]*>[\s\S]*?<p\b[^>]*>([\s\S]*?)<\/p>/i);
  const plain = decodeNamedEntities(stripHtml(chunk));
  const reference = labeledValue(plain, "Númer", "Kaupandi");
  const buyer = labeledValue(plain, "Kaupandi", "Tegund innkaupa");
  const procurementType = labeledValue(plain, "Tegund innkaupa", "Skilafrestur");
  const deadlineText = plain.match(/Skilafrestur\s*:\s*(\d{1,2}\.?\s+[A-Za-zÁÉÍÓÚÝÞÐÆÖáéíóúýþðæö.]+\s+20\d{2})(?:\s+kl\.?\s*(\d{1,2}:\d{2}))?/i);
  const parsedDeadline = deadlineText ? parseIcelandicDeadline(deadlineText[1], deadlineText[2]) : null;
  const tendsignUrl = extractTendsignUrl(chunk);
  const tendsignNoticeId = tendsignUrl ? new URL(tendsignUrl).searchParams.get("MeFormsNoticeId") : null;
  const sitemapMatch = sitemap.get(normalizeIdentityText(title)) || null;
  const canonicalUrl = sitemapMatch?.url || CONSENSA_INDEX_URL;
  const identity = reference
    ? `reference:${normalizeIdentityText(reference).replace(/\s+/g, "-")}`
    : tendsignNoticeId
      ? `tendsign:${tendsignNoticeId}`
      : sitemapMatch?.url
        ? `url:${sitemapMatch.url}`
        : "";
  if (!title) return null;
  const location = extractGeographicText(`${title} ${description}`);
  return {
    external_id: identity ? `consensa:${identity}` : `consensa:malformed:${normalizeIdentityText(title).replace(/\s+/g, "-")}`,
    procurement_reference: reference || null,
    discovered_url: CONSENSA_INDEX_URL,
    canonical_url: canonicalUrl,
    title,
    description: description || null,
    buyer: buyer || null,
    deadline: parsedDeadline?.date || null,
    publication_date: null,
    source_published_at: null,
    location,
    safe_source_payload: safeSourcePayload({
      listing_context: "published_tender_archive",
      procurement_type: procurementType || null,
      tendsign_url: tendsignUrl,
      tendsign_notice_id: tendsignNoticeId,
      deadline_time: parsedDeadline?.time || null,
      deadline_at: parsedDeadline?.timestamp || null,
      sitemap_lastmod: sitemapMatch?.lastmod || null,
      sitemap_lastmod_is_publication_date: false,
      canonical_url_source: sitemapMatch ? "public_sitemap" : "official_tender_index",
      geographic_text: location,
      identity_basis: reference ? "procurement_reference" : tendsignNoticeId ? "tendsign_notice_id" : sitemapMatch ? "canonical_consensa_url" : "missing",
    }, [
      "listing_context", "procurement_type", "tendsign_url", "tendsign_notice_id", "deadline_time", "deadline_at",
      "sitemap_lastmod", "sitemap_lastmod_is_publication_date", "canonical_url_source", "geographic_text", "identity_basis",
    ]),
  };
}

function unpackInput(input) {
  const source = String(input || "");
  try {
    const parsed = JSON.parse(source);
    if (parsed && typeof parsed === "object" && typeof parsed.page_html === "string") {
      return { pageHtml: parsed.page_html, sitemapXml: String(parsed.sitemap_xml || "") };
    }
  } catch {
    // Raw HTML is supported for deterministic fixtures and replay.
  }
  return { pageHtml: source, sitemapXml: "" };
}

function parseConsensaSitemap(xml = "") {
  const map = new Map();
  for (const match of String(xml || "").matchAll(/<url>\s*<loc>([\s\S]*?)<\/loc>(?:\s*<lastmod>([\s\S]*?)<\/lastmod>)?[\s\S]*?<\/url>/gi)) {
    const rawUrl = decodeNamedEntities(stripHtml(match[1]));
    try {
      const url = new URL(rawUrl);
      if (!CONSENSA_HOSTS.has(url.hostname.toLowerCase()) || !/^\/projects\//i.test(url.pathname)) continue;
      const slug = decodeURIComponent(url.pathname.split("/").filter(Boolean).pop() || "").replace(/---/g, " - ").replace(/-/g, " ");
      const key = normalizeIdentityText(slug);
      if (!key || map.has(key)) continue;
      url.protocol = "https:";
      url.hostname = "www.consensa.is";
      url.hash = "";
      url.search = "";
      map.set(key, { url: url.toString(), lastmod: normalizeLastmod(match[2]) });
    } catch {
      // Invalid sitemap URLs are ignored; the official index remains the source URL.
    }
  }
  return map;
}

function labeledValue(text, label, nextLabel) {
  const pattern = new RegExp(`${escapeRegex(label)}\\s*:\\s*([\\s\\S]*?)\\s+${escapeRegex(nextLabel)}\\s*:`, "i");
  return String(text || "").match(pattern)?.[1]?.trim() || "";
}

function parseIcelandicDeadline(dateText, timeText) {
  const normalized = normalizeIdentityText(dateText).replace(/\s+/g, " ");
  const match = normalized.match(/^(\d{1,2})\s+([a-z]+)\s+(20\d{2})$/);
  if (!match) return null;
  const month = MONTHS[match[2]];
  if (!month) return null;
  const date = `${match[3]}-${String(month).padStart(2, "0")}-${match[1].padStart(2, "0")}`;
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== date) return null;
  const time = /^\d{1,2}:\d{2}$/.test(String(timeText || "")) ? String(timeText).padStart(5, "0") : null;
  return { date, time, timestamp: time ? `${date}T${time}:00Z` : null };
}

function extractTendsignUrl(html) {
  for (const match of String(html || "").matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)) {
    const href = decodeNamedEntities(match[1]);
    try {
      const url = new URL(href);
      if (!TENDSIGN_HOSTS.has(url.hostname.toLowerCase()) || !/^\/doc\.aspx$/i.test(url.pathname)) continue;
      url.protocol = "https:";
      url.hash = "";
      return url.toString();
    } catch {
      continue;
    }
  }
  return null;
}

function extractGeographicText(value) {
  const text = decodeNamedEntities(stripHtml(value));
  const postal = text.match(/\b\d{3}\s+([A-ZÁÉÍÓÚÝÞÐÆÖ][A-Za-zÁÉÍÓÚÝÞÐÆÖáéíóúýþðæö-]+)/);
  return postal?.[1] || null;
}

function fieldHtml(value, pattern) {
  const match = String(value || "").match(pattern);
  return match?.[1] ? decodeNamedEntities(stripHtml(match[1])) : "";
}

function decodeNamedEntities(value) {
  const named = { amp: "&", quot: '"', nbsp: " ", aacute: "á", eacute: "é", iacute: "í", oacute: "ó", uacute: "ú", yacute: "ý", thorn: "þ", eth: "ð", aelig: "æ", ouml: "ö", ndash: "-", mdash: "-" };
  return String(value || "").replace(/&([a-z]+);/gi, (whole, name) => named[name.toLowerCase()] ?? whole).replace(/\s+/g, " ").trim();
}

function normalizeLastmod(value) {
  const match = String(value || "").trim().match(/^(20\d{2}-\d{2}-\d{2})/);
  return match?.[1] || null;
}

function isAllowedConsensaUrl(value) {
  try {
    const url = new URL(String(value || ""));
    return url.protocol === "https:" && CONSENSA_HOSTS.has(url.hostname.toLowerCase()) && (url.pathname === "/utbod" || /^\/projects\//i.test(url.pathname));
  } catch {
    return false;
  }
}

function hasConsensaTenderSignals(value) {
  const text = decodeNamedEntities(stripHtml(value));
  return /Auglýst útboð/i.test(text) && /Númer\s*:/i.test(text) && /Skilafrestur\s*:/i.test(text);
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function parserError(message, code) {
  const error = new Error(message);
  error.code = code;
  error.retryable = false;
  return error;
}
