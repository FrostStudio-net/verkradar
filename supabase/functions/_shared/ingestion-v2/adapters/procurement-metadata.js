import { stripHtml } from "./common.js";

const FALSE_REFERENCE_WORDS = new Set([
  "verk", "verkid", "verkefni", "gerdina", "ferli", "ferlisins", "frestur",
  "lysingar", "gogn", "samningar", "mala", "thar",
]);

export function extractProcurementReference(value, options = {}) {
  const text = stripHtml(value);
  const explicitPatterns = [
    /(?:ees\s+)?(?:utbods?|útboðs?)\s*nr\.?\s*[:#-]?\s*([A-ZÁÉÍÓÚÝÞÐÆÖ]{0,10}[-/]?\d{3,}(?:[-/.]\d{1,6})*)\b/i,
    /(?:ees\s+)?(?:utbodsnummer|utbodsnumer|utboðsnummer|útboðsnúmer|utbods?\s*nr\.?|útboðs?\s*nr\.?|ees\s+utbod\s+nr\.?|ees\s+útboð\s+nr\.?|verknumer|verknúmer|tilvisun(?:arnumer)?|tilvísun(?:arnúmer)?|reference|procurement\s+reference)\s*[:#-]?\s*([A-ZÁÉÍÓÚÝÞÐÆÖ0-9][A-ZÁÉÍÓÚÝÞÐÆÖ0-9._/-]{2,30})/i,
    /\b(EES\s*\d{4}\s*\/\s*S\s*\d{3,}(?:-\d+)?)\b/i,
  ];
  for (const pattern of explicitPatterns) {
    const match = text.match(pattern);
    const reference = normalizeReference(match?.[1]);
    if (isStructuredReference(reference)) return reference;
  }

  if (options.allowContextualNumber === true && hasProcurementContext(text)) {
    const contextual = text.match(/\bnr\.?\s*[:#-]?\s*(\d{4,}(?:[-/]\d{2,4})?)\b/i);
    const reference = normalizeReference(contextual?.[1]);
    if (isStructuredReference(reference)) return reference;
  }
  return null;
}

export function extractProcurementDetailMetadata(html = "", options = {}) {
  const text = stripHtml(String(html)
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " "));
  const deadline = extractExplicitDeadline(text);
  const procurementReference = extractProcurementReference(text, {
    allowContextualNumber: options.allowContextualNumber === true,
  });
  const buyer = firstLabelValue(text, ["Kaupandi", "Verkkaupi", "Buyer"]);
  const followUp = /(?:tilbod\s+opnud|tilboð\s+opnuð|nidurstada\s+utbods|niðurstaða\s+útboðs|samningur\s+undirritadur|samningur\s+undirritaður|verktaki\s+valinn|samið\s+við|work\s+has\s+started|framkvaemdir\s+(?:eru\s+)?hafnar|framkvæmdir\s+(?:eru\s+)?hafnar)/i.test(text);
  const requestForBids = /(?:oskad|óskad|óskað|oskar|óskar)\s+eftir\s+tilbodum|utbodsgogn|útboðsgögn|invitation\s+to\s+tender|request\s+for\s+tenders/i.test(text);
  const consultation = /markadskonnun|markaðskönnun|request\s+for\s+information|\bRFI\b/i.test(text);
  const formType = followUp
    ? "result"
    : consultation
      ? "consultation"
      : requestForBids && (deadline || procurementReference)
        ? "competition"
        : null;
  const hasFields = deadline || procurementReference || buyer || formType;
  return {
    deadline,
    procurement_reference: procurementReference,
    buyer,
    form_type: formType,
    follow_up: followUp,
    request_for_bids: requestForBids,
    enrichment_status: hasFields ? "enriched" : "no_supported_fields",
  };
}

export function extractExplicitDeadline(value) {
  const text = stripHtml(value);
  const patterns = [
    /(?:tilbodsfrestur|tilboðsfrestur|timafrestur\s+utbods|tímafrestur\s+útboðs|skilafrestur(?:\s+tilboda|\s+tilboða)?|tilbodum\s+skal\s+skila|tilboðum\s+skal\s+skila|opnun\s+tilboda|opnun\s+tilboða)[^.!;]{0,100}?(\d{1,2})[.\/-]\s*(\d{1,2})[.\/-]\s*(\d{4})/i,
    /(?:deadline|submission\s+deadline)[^.!;]{0,80}?(\d{1,2})[.\/-]\s*(\d{1,2})[.\/-]\s*(\d{4})/i,
  ];
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (!match) continue;
    const candidate = `${match[3]}-${String(match[2]).padStart(2, "0")}-${String(match[1]).padStart(2, "0")}`;
    const date = new Date(`${candidate}T00:00:00Z`);
    if (!Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === candidate) return candidate;
  }
  const monthName = text.match(/(?:tilbodsfrestur|tilboðsfrestur|skilafrestur(?:\s+tilboda|\s+tilboða)?|tilbodum\s+skal\s+skila(?:d|ð)?(?:\s+eigi\s+sidar\s+en)?|tilboðum\s+skal\s+skila(?:ð)?(?:\s+eigi\s+síðar\s+en)?|tilbodin\s+verda\s+opnud|tilboðin\s+verða\s+opnuð)[\s\S]{0,160}?(\d{1,2})\.\s*([A-Za-zÁÉÍÓÚÝÞÐÆÖáéíóúýþðæö]+)\s+(\d{4})/i);
  if (monthName) {
    const month = icelandicMonth(monthName[2]);
    const candidate = month ? `${monthName[3]}-${String(month).padStart(2, "0")}-${String(monthName[1]).padStart(2, "0")}` : "";
    const date = candidate ? new Date(`${candidate}T00:00:00Z`) : null;
    if (date && !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === candidate) return candidate;
  }
  return null;
}

function icelandicMonth(value) {
  const key = String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ð/g, "d").replace(/þ/g, "th").replace(/æ/g, "ae");
  return ({ januar: 1, februar: 2, mars: 3, april: 4, mai: 5, juni: 6, juli: 7, agust: 8, september: 9, oktober: 10, november: 11, desember: 12 })[key] || null;
}

function firstLabelValue(text, labels) {
  for (const label of labels) {
    const match = text.match(new RegExp(`${label}\\s*[:#-]\\s*([^.;|]{2,120})`, "i"));
    if (match?.[1]) return match[1].trim();
  }
  return null;
}

function normalizeReference(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[.,;:]+$/, "")
    .replace(/\s+(?:tilbodsfrestur|tilboðsfrestur|skilafrestur|kaupandi|verkkaupi).*$/i, "")
    .trim() || null;
}

function isStructuredReference(value) {
  if (!value || !/\d/.test(value)) return false;
  if (/^\d{1,2}[.\/-]\d{1,2}[.\/-]\d{4}$/.test(value)) return false;
  const normalizedWord = value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ð/g, "d").replace(/þ/g, "th").replace(/æ/g, "ae");
  if (FALSE_REFERENCE_WORDS.has(normalizedWord)) return false;
  return /^(?:[A-ZÁÉÍÓÚÝÞÐÆÖ]{1,10}[-/ ]?)?\d{3,}(?:[-/. ](?:[A-ZÁÉÍÓÚÝÞÐÆÖ]{1,5}|\d{1,6}))*$/i.test(value) || /^EES\s*\d{4}\s*\/\s*S\s*\d{3,}(?:-\d+)?$/i.test(value);
}

function hasProcurementContext(text) {
  return /utbod|útboð|markadskonnun|markaðskönnun|rammasamning|innkaup|procurement|tender|\bRFI\b/i.test(text);
}
