import { assertParsedArray, cleanReference, extractDate, firstMatch, safeSourcePayload, stripHtml } from "./common.js";

export const akranesRssAdapter = {
  parserName: "akranes-rss",
  parserVersion: "1.0.0",
  parse(xml) {
    const items = [...String(xml || "").matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)].map((match) => parseItem(match[1]));
    return assertParsedArray(items, this.parserName);
  },
};

function parseItem(itemXml) {
  const title = firstMatch(itemXml, [/<title\b[^>]*>([\s\S]*?)<\/title>/i]);
  const link = firstMatch(itemXml, [/<link\b[^>]*>([\s\S]*?)<\/link>/i]);
  const guid = firstMatch(itemXml, [/<guid\b[^>]*>([\s\S]*?)<\/guid>/i]);
  const descriptionHtml = firstMatch(itemXml, [/<description\b[^>]*>([\s\S]*?)<\/description>/i]);
  const pubDate = firstMatch(itemXml, [/<pubDate\b[^>]*>([\s\S]*?)<\/pubDate>/i]);
  const reference = firstMatch(`${title} ${descriptionHtml}`, [/(?:útboðs|verknúmer|tilvísun)\s*:?[ ]*([A-ZÁÉÍÓÚÝÞÐÆÖ0-9][A-ZÁÉÍÓÚÝÞÐÆÖ0-9._/-]{2,})/i]);
  return {
    external_id: guid || link,
    procurement_reference: cleanReference(reference) || null,
    discovered_url: link,
    canonical_url: link,
    title,
    description: stripHtml(descriptionHtml),
    buyer: "Akraneskaupstaður",
    deadline: extractDate(descriptionHtml, ["Tilboðsfrestur", "Skilafrestur"]),
    publication_date: toIsoDate(pubDate),
    source_published_at: toIsoTimestamp(pubDate),
    location: "Akranes",
    safe_source_payload: safeSourcePayload({ guid, pubDate }, ["guid", "pubDate"]),
  };
}

function toIsoTimestamp(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function toIsoDate(value) {
  return toIsoTimestamp(value)?.slice(0, 10) || null;
}
