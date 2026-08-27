import { stripHtml } from "./common.js";
import { extractProcurementDetailMetadata } from "./procurement-metadata.js";

export function extractIsafjordurDetailMetadata(html = "") {
  const articleHtml = extractEntryContent(html);
  const metadata = extractProcurementDetailMetadata(articleHtml);
  const articleText = stripHtml(articleHtml);
  const explicitTender = /(?:oskað|óskar)\s+eftir\s+tilboðum|útboðsgögn|útboð\s+nr\.?|verðkönnun|verðfyrirspurn/i.test(articleText);
  const followUp = metadata.follow_up || /(?:niðurstaða\s+útboðs|samningur\s+undirritaður|tilboð\s+opnuð|verktaki\s+valinn)/i.test(articleText);
  const formType = followUp
    ? "result"
    : explicitTender && (metadata.deadline || metadata.procurement_reference)
      ? "competition"
      : metadata.form_type;
  const hasFields = metadata.deadline || metadata.procurement_reference || metadata.buyer || formType;
  return {
    ...metadata,
    form_type: formType,
    follow_up: followUp,
    request_for_bids: explicitTender || metadata.request_for_bids,
    enrichment_status: hasFields ? "enriched" : "no_supported_fields",
  };
}

function extractEntryContent(value) {
  const html = String(value || "");
  const marker = /<div\b[^>]*class=["'][^"']*\bentryContent\b[^"']*["'][^>]*>/ig;
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
  return html.slice(match.index + match[0].length);
}
