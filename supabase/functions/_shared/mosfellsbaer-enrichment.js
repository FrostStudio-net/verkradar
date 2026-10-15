function decodeHtml(value) {
  return String(value || "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function stripHtml(value) {
  return decodeHtml(value).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export function isSafeMosfellsbaerTenderUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:"
      && url.hostname.replace(/^www\./i, "") === "mos.is"
      && /^\/mannlif\/um-mosfellsbae\/frettir\/[^/]+\/?$/.test(url.pathname);
  } catch {
    return false;
  }
}

export function parseMosfellsbaerTenderDetail(html = "", fallbackUrl = "") {
  const source = String(html || "");
  const bodyHtml = extractBalancedDivByClass(source, "bde-rich-text");
  const description = stripHtml(bodyHtml);
  const canonicalMatch = source.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    || source.match(/<meta\b[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["']/i);
  const candidateUrl = decodeHtml(canonicalMatch?.[1] || fallbackUrl);
  const canonicalUrl = isSafeMosfellsbaerTenderUrl(candidateUrl) ? new URL(candidateUrl).toString() : null;
  return {
    buyer: "Mosfellsbær",
    location: "Mosfellsbær / Höfuðborgarsvæðið",
    description: description || null,
    canonical_url: canonicalUrl,
    has_useful_detail: description.length >= 80,
  };
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
  return "";
}
