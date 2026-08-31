import { stripHtml } from "./common.js";
import { extractSubmissionDeadline, normalizeDetailUrl } from "./vegagerdin-html-index.js";

export function extractVegagerdinDetailMetadata(html = "") {
  const source = String(html || "");
  const reference = stripHtml(source.match(/<span\b[^>]*class=["'][^"']*\bHeadline_eyebrow__[^"']*["'][^>]*>([\s\S]*?)<\/span>/i)?.[1] || "")
    .match(/Útboðsnúmer\s+([0-9]{2}-[0-9]{3})\b/i)?.[1] || null;
  const headline = source.match(/<h1\b[^>]*class=["'][^"']*\bHeadline_headline__[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i)?.[1] || "";
  const title = stripHtml(headline.replace(/<span\b[\s\S]*?<\/span>/i, "")) || null;
  const intro = extractBalancedDivByClass(source, "PageHeader_intro__");
  const description = stripHtml(intro) || null;
  // Current pages usually place the submission deadline in the article body,
  // outside PageHeader_intro. The deadline extractor itself requires an
  // explicit submission phrase, so searching this page-local HTML is safe.
  const deadline = extractSubmissionDeadline(source);
  const currentMilestone = extractCurrentMilestone(source);
  const sourceStatus = normalizeLifecycle(currentMilestone);
  const procurementType = sourceStatus === "active" ? "open_tender"
    : ["opened", "completed", "cancelled"].includes(sourceStatus) ? "award_or_followup"
    : "unknown";
  const canonicalUrl = canonicalFromHtml(source);
  const hasFields = Boolean(reference || title || description || deadline || sourceStatus !== "unknown");
  return {
    title,
    procurement_reference: reference,
    buyer: "Vegagerðin",
    description,
    deadline,
    source_status: sourceStatus,
    lifecycle_label: currentMilestone,
    procurement_type: procurementType,
    request_for_bids: sourceStatus === "active" && Boolean(deadline) && /(?:býður|óskar).{0,80}(?:út|eftir\s+tilboðum)|útboðsgögn/i.test(description || ""),
    follow_up: ["opened", "completed", "cancelled"].includes(sourceStatus),
    canonical_url: canonicalUrl,
    identity_basis: reference ? "explicit_tender_reference" : canonicalUrl ? "canonical_path" : null,
    enrichment_status: hasFields ? "enriched" : "no_supported_fields",
  };
}

export function normalizeVegagerdinLifecycle(value) {
  return normalizeLifecycle(value);
}

function extractCurrentMilestone(html) {
  const match = String(html || "").match(/<li\b[^>]*class=["'][^"']*\bProgressTracker_milestone__[^"']*\bProgressTracker_current__[^"']*["'][^>]*>([\s\S]*?)<\/li>/i);
  return stripHtml(match?.[1] || "").replace(/^\d+\s*/, "") || null;
}

function normalizeLifecycle(value) {
  const text = normalize(value);
  if (/haett vid utbod/.test(text)) return "cancelled";
  if (/samningum lokid/.test(text)) return "completed";
  if (/opnun tilboda/.test(text)) return "opened";
  if (/auglyst/.test(text)) return "active";
  return "unknown";
}

function canonicalFromHtml(html) {
  const match = String(html || "").match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    || String(html || "").match(/<meta\b[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["']/i);
  return normalizeDetailUrl(match?.[1]) || null;
}

function extractBalancedDivByClass(value, classPrefix) {
  const html = String(value || "");
  const marker = new RegExp(`<div\\b[^>]*class=["'][^"']*\\b${classPrefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^"']*["'][^>]*>`, "ig");
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

function normalize(value) {
  return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/æ/g, "ae").replace(/ð/g, "d").replace(/þ/g, "th").replace(/[^a-z0-9]+/g, " ").trim();
}
