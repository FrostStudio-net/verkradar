import { V2ValidationError } from "../contracts.js";

export function decodeHtml(value) {
  return String(value || "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_match, code) => String.fromCodePoint(Number(code)));
}

export function stripHtml(value) {
  return decodeHtml(value).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export function firstMatch(value, patterns) {
  for (const pattern of patterns) {
    const match = String(value || "").match(pattern);
    if (match?.[1]) return stripHtml(match[1]);
  }
  return "";
}

export function extractDate(value, labels = []) {
  const text = stripHtml(value);
  for (const label of labels) {
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const match = text.match(new RegExp(`${escaped}\\s*:?\\s*(\\d{1,2})[.\\/-](\\d{1,2})[.\\/-](\\d{4})`, "i"));
    if (match) return `${match[3]}-${match[2].padStart(2, "0")}-${match[1].padStart(2, "0")}`;
  }
  const iso = text.match(/\b(20\d{2})-(\d{2})-(\d{2})\b/);
  return iso ? `${iso[1]}-${iso[2]}-${iso[3]}` : null;
}

export function assertParsedArray(items, parserName) {
  if (!Array.isArray(items)) throw new V2ValidationError(`${parserName} returned a non-array result`, ["parser_result_not_array"]);
  for (const [index, item] of items.entries()) {
    if (!item || typeof item !== "object" || Array.isArray(item)) {
      throw new V2ValidationError(`${parserName} returned an invalid item at index ${index}`, ["parser_item_invalid"]);
    }
  }
  return items;
}

export function safeSourcePayload(value, allowedKeys) {
  return Object.fromEntries(allowedKeys.filter((key) => value?.[key] !== undefined).map((key) => [key, value[key]]));
}

export function cleanReference(value) {
  return String(value || "").trim().replace(/[.,;:]+$/, "");
}
