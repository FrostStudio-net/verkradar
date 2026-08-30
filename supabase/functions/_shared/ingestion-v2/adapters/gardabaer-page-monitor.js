import { assertParsedArray, extractDate, firstMatch, safeSourcePayload, stripHtml } from "./common.js";

export const gardabaerPageMonitorAdapter = {
  parserName: "gardabaer-page-monitor",
  parserVersion: "2.0.0",
  parse(html) {
    const source = String(html || "");
    const cards = [...source.matchAll(/<article\b([^>]*)>([\s\S]*?)<\/article>/gi)]
      .filter((match) => /\bdata-v2-tender\b/i.test(match[1]))
      .map((match) => parseCard(match[1], match[2]));
    if (cards.length) return assertParsedArray(cards, this.parserName);
    const seen = new Set();
    const liveCards = [...source.matchAll(/<li\b[^>]*class=["'][^"']*cardList__item[^"']*["'][^>]*>([\s\S]*?)<\/li>/gi)]
      .map((match) => parseLiveCard(match[1]))
      .filter(Boolean)
      .filter((card) => { if (seen.has(card.canonical_url)) return false; seen.add(card.canonical_url); return true; });
    return assertParsedArray(liveCards, this.parserName);
  },
};

function parseLiveCard(cardHtml) {
  const relativeUrl = firstMatch(cardHtml, [/<a\b[^>]*href=["'](\/framkvaemdir\/utbod\/[^"'#?]+)["']/i]);
  if (!relativeUrl) return null;
  const url = new URL(relativeUrl, "https://www.gardabaer.is").toString();
  const slug = relativeUrl.split("/").filter(Boolean).pop() || "";
  const title = firstMatch(cardHtml, [/<h2\b[^>]*>([\s\S]*?)<\/h2>/i]);
  const description = firstMatch(cardHtml, [/<p\b[^>]*>([\s\S]*?)<\/p>/i]);
  const statusLabel = firstMatch(cardHtml, [/<div\b[^>]*class=["'][^"']*tag[^"']*["'][^>]*>([\s\S]*?)<\/div>/i]);
  const sourceStatus = normalizeSourceStatus(statusLabel || stripHtml(cardHtml));
  const deadline = extractDate(cardHtml, ["Útboð lýkur", "Tilboðsfrestur", "Skilafrestur"]);
  const publicationDate = extractDate(cardHtml, ["Útboð opnar"]);
  return {
    external_id: `gardabaer:${slug}`,
    procurement_reference: null,
    discovered_url: url,
    canonical_url: url,
    title,
    description: stripHtml(description).slice(0, 1000),
    buyer: "Garðabær",
    deadline,
    publication_date: publicationDate,
    source_published_at: publicationDate,
    location: "Garðabær",
    safe_source_payload: safeSourcePayload({
      source: "next-card",
      relativeUrl,
      source_status: sourceStatus,
      listing_context: sourceStatus === "active" ? "current_procurement" : sourceStatus === "completed" ? "historical_or_followup" : "unknown",
      identity_basis: "canonical_path",
    }, ["source", "relativeUrl", "source_status", "listing_context", "identity_basis"]),
  };
}

export function normalizeGardabaerSourceStatus(value) {
  return normalizeSourceStatus(value);
}

function normalizeSourceStatus(value) {
  const text = String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ð/g, "d").replace(/þ/g, "th");
  if (/\bi auglysingu\b/.test(text)) return "active";
  if (/\blokid\b/.test(text)) return "completed";
  return "unknown";
}

function parseCard(attributes, body) {
  const externalId = firstMatch(attributes, [/data-external-id=["']([^"']+)["']/i]);
  const reference = firstMatch(attributes, [/data-reference=["']([^"']+)["']/i]);
  const relativeUrl = firstMatch(body, [/<a\b[^>]*href=["']([^"']+)["']/i]);
  const url = relativeUrl ? new URL(relativeUrl, "https://www.gardabaer.is").toString() : "";
  const title = firstMatch(body, [/<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/i, /<a\b[^>]*>([\s\S]*?)<\/a>/i]);
  const description = firstMatch(body, [/<p\b[^>]*>([\s\S]*?)<\/p>/i]);
  const publicationDate = firstMatch(attributes, [/data-published=["']([^"']+)["']/i]);
  return {
    external_id: externalId || reference || url,
    procurement_reference: reference || null,
    discovered_url: url,
    canonical_url: url,
    title,
    description: stripHtml(description),
    buyer: "Garðabær",
    deadline: extractDate(body, ["Tilboðsfrestur", "Skilafrestur"]),
    publication_date: publicationDate ? publicationDate.slice(0, 10) : null,
    source_published_at: publicationDate || null,
    location: "Garðabær",
    safe_source_payload: safeSourcePayload({ externalId, reference, publicationDate }, ["externalId", "reference", "publicationDate"]),
  };
}
