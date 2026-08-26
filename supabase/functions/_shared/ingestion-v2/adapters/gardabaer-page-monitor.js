import { assertParsedArray, extractDate, firstMatch, safeSourcePayload, stripHtml } from "./common.js";

export const gardabaerPageMonitorAdapter = {
  parserName: "gardabaer-page-monitor",
  parserVersion: "1.0.0",
  parse(html) {
    const source = String(html || "");
    const cards = [...source.matchAll(/<article\b([^>]*)>([\s\S]*?)<\/article>/gi)]
      .filter((match) => /\bdata-v2-tender\b/i.test(match[1]))
      .map((match) => parseCard(match[1], match[2]));
    if (cards.length) return assertParsedArray(cards, this.parserName);
    const seen = new Set();
    const liveCards = [...source.matchAll(/href=["'](\/framkvaemdir\/utbod\/[^"'#?]+)["']/gi)]
      .map((match) => match[1])
      .filter((relativeUrl) => { if (seen.has(relativeUrl)) return false; seen.add(relativeUrl); return true; })
      .map((relativeUrl) => parseLiveLink(source, relativeUrl));
    return assertParsedArray(liveCards, this.parserName);
  },
};

function parseLiveLink(source, relativeUrl) {
  const url = new URL(relativeUrl, "https://www.gardabaer.is").toString();
  const slug = relativeUrl.split("/").filter(Boolean).pop() || "";
  const title = slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const context = source.slice(Math.max(0, source.indexOf(relativeUrl) - 500), source.indexOf(relativeUrl) + 1200);
  return { external_id: `gardabaer:${slug}`, procurement_reference: null, discovered_url: url, canonical_url: url, title, description: stripHtml(context).slice(0, 1000), buyer: "Garðabær", deadline: extractDate(context, ["Útboð lýkur", "Tilboðsfrestur", "Skilafrestur"]), publication_date: null, source_published_at: null, location: "Garðabær", safe_source_payload: safeSourcePayload({ source: "next-rsc", relativeUrl }, ["source", "relativeUrl"]) };
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
