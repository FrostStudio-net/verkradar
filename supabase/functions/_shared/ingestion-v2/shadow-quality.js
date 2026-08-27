import { extractProcurementDetailMetadata } from "./adapters/procurement-metadata.js";
import { applyDeadlineActionabilityGuard } from "../procurement-stage.js";

export const THREE_SOURCE_KEYS = Object.freeze({
  RIKISKAUP: "rikiskaup-utbod-v2",
  VEGAGERDIN: "vegagerdin-utbod-v2",
  ISAFJORDUR: "isafjordur-utbod-v2",
  REYKJAVIK: "reykjavik-utbod-v2",
  LANDSVIRKJUN: "landsvirkjun-utbod-v2",
});

export const DETAIL_ENRICHMENT_LIMITS = Object.freeze({
  [THREE_SOURCE_KEYS.RIKISKAUP]: 20,
  [THREE_SOURCE_KEYS.VEGAGERDIN]: 12,
  [THREE_SOURCE_KEYS.ISAFJORDUR]: 15,
  [THREE_SOURCE_KEYS.REYKJAVIK]: 12,
  [THREE_SOURCE_KEYS.LANDSVIRKJUN]: 10,
});

export function getSourceClassificationContext(config) {
  const sourceKey = String(config?.source_key || "");
  if (sourceKey === THREE_SOURCE_KEYS.RIKISKAUP) {
    return { source_type: "national_procurement_portal", connector_type: "wordpress_rest", source_organisation: "Ríkiskaup / island.is procurement" };
  }
  if (sourceKey === THREE_SOURCE_KEYS.VEGAGERDIN) {
    return { source_type: "road_authority_broad_feed", connector_type: "rss_feed", source_organisation: "Vegagerðin" };
  }
  if (sourceKey === THREE_SOURCE_KEYS.ISAFJORDUR) {
    return { source_type: "municipal", connector_type: "rss_feed", source_organisation: "Ísafjarðarbær" };
  }
  if (sourceKey === THREE_SOURCE_KEYS.REYKJAVIK) {
    return { source_type: "municipal_procurement_portal", connector_type: "municipal_html_index", source_organisation: "Reykjavíkurborg procurement" };
  }
  if (sourceKey === THREE_SOURCE_KEYS.LANDSVIRKJUN) {
    return { source_type: "energy_utility_procurement_portal", connector_type: "public_procurement_html_index", source_organisation: "Landsvirkjun procurement" };
  }
  if (["akranes-utbod-v2", "borgarbyggd-utbod-v2", "gardabaer-utbod-v2"].includes(sourceKey)) {
    return { source_type: "municipal", connector_type: "rss_feed", source_organisation: String(config?.display_name || sourceKey) };
  }
  return {
    source_type: String(config?.adapter_type || "unknown_source"),
    connector_type: String(config?.adapter_type || "unknown_connector"),
    source_organisation: String(config?.display_name || config?.source_key || ""),
  };
}

export async function fetchBoundedWordpressPages(options) {
  const maxPages = positiveInt(options.maxPages, 3);
  const maxItems = positiveInt(options.maxItems, 60);
  const perPage = Math.min(positiveInt(options.perPage, 20), maxItems);
  const items = [];
  const seen = new Set();
  let duplicates = 0;
  let fetchedPages = 0;
  let stopped = "page_cap";
  let lastFetch = null;
  let reportedTotalPages = null;

  for (let page = 1; page <= maxPages && items.length < maxItems; page += 1) {
    const pageUrl = new URL(options.endpointUrl);
    pageUrl.searchParams.set("page", String(page));
    pageUrl.searchParams.set("per_page", String(Math.min(perPage, maxItems - items.length)));
    lastFetch = await options.fetchPage(pageUrl.toString(), page);
    fetchedPages += 1;
    const totalPages = Number(lastFetch.totalPages);
    if (Number.isInteger(totalPages) && totalPages >= 0) reportedTotalPages = totalPages;
    let pageItems;
    try { pageItems = typeof lastFetch.body === "string" ? JSON.parse(lastFetch.body) : lastFetch.body; }
    catch { throw parserError("WordPress page response is not valid JSON"); }
    if (!Array.isArray(pageItems)) throw parserError("WordPress page response must be an array");
    if (!pageItems.length) { stopped = "empty_page"; break; }
    for (const item of pageItems) {
      const key = String(item?.id || item?.link || item?.guid?.rendered || JSON.stringify(item));
      if (seen.has(key)) { duplicates += 1; continue; }
      seen.add(key);
      items.push(item);
      if (items.length >= maxItems) break;
    }
    if (pageItems.length < perPage) { stopped = "short_page"; break; }
    if (reportedTotalPages !== null && page >= reportedTotalPages) { stopped = "reported_end"; break; }
    if (items.length >= maxItems) stopped = "item_cap";
  }

  return {
    items,
    lastFetch,
    diagnostics: { fetched_pages: fetchedPages, reported_total_pages: reportedTotalPages, per_page: perPage, max_pages: maxPages, max_items: maxItems, unique_items: items.length, duplicates, stopped },
  };
}

export async function enrichCandidatesBounded(candidates, options) {
  const sourceKey = String(options.sourceKey || "");
  const configuredLimit = DETAIL_ENRICHMENT_LIMITS[sourceKey] || 0;
  const requestedLimit = positiveInt(options.limit, configuredLimit);
  const limit = Math.min(configuredLimit ? Math.min(requestedLimit, configuredLimit) : requestedLimit, candidates.length);
  const metrics = { attempted: 0, succeeded: 0, failed: 0, enriched: 0, no_supported_fields: 0, skipped: 0, limit };
  const enriched = [];

  for (const candidate of candidates) {
    const eligible = isLikelyProcurementCandidate(candidate, sourceKey, options.now);
    if (!eligible || metrics.attempted >= limit) {
      metrics.skipped += 1;
      enriched.push(withEnrichment(candidate, {
        enrichment_status: eligible ? "skipped_limit" : "skipped_not_candidate",
      }));
      continue;
    }
    metrics.attempted += 1;
    try {
      const result = await options.fetchDetail(candidate.canonical_url || candidate.discovered_url, candidate);
      const metadataExtractor = typeof options.metadataExtractor === "function"
        ? options.metadataExtractor
        : (value) => extractProcurementDetailMetadata(value, {
          allowContextualNumber: sourceKey === THREE_SOURCE_KEYS.RIKISKAUP,
        });
      const metadata = metadataExtractor(result?.body ?? result);
      metrics.succeeded += 1;
      if (metadata.enrichment_status === "enriched") metrics.enriched += 1;
      else metrics.no_supported_fields += 1;
      enriched.push(withEnrichment({
        ...candidate,
        title: candidate.title || metadata.title,
        description: candidate.description || metadata.description,
        deadline: candidate.deadline || metadata.deadline,
        buyer: candidate.buyer || metadata.buyer,
        procurement_reference: candidate.procurement_reference || metadata.procurement_reference,
      }, metadata));
    } catch (error) {
      metrics.failed += 1;
      enriched.push(withEnrichment(candidate, {
        enrichment_status: "failed",
        error_code: String(error?.code || "DETAIL_FETCH_FAILED").slice(0, 80),
      }));
    }
  }
  return { candidates: enriched, metrics };
}

export function isLikelyProcurementCandidate(candidate, sourceKey, now = new Date()) {
  if (sourceKey === THREE_SOURCE_KEYS.LANDSVIRKJUN) {
    try {
      const url = new URL(candidate?.canonical_url || candidate?.discovered_url || "");
      return ["utbodsvefur.is", "www.utbodsvefur.is"].includes(url.hostname.toLowerCase()) &&
        candidate?.safe_source_payload?.listing_context === "current_procurement" &&
        normalize(candidate?.buyer) === "landsvirkjun";
    } catch {
      return false;
    }
  }
  if (sourceKey === THREE_SOURCE_KEYS.REYKJAVIK) {
    try {
      const url = new URL(candidate?.canonical_url || candidate?.discovered_url || "");
      return ["reykjavik.is", "www.reykjavik.is"].includes(url.hostname.toLowerCase()) &&
        /^\/utbod\/\d{4,}-/i.test(url.pathname) &&
        candidate?.safe_source_payload?.listing_context === "current_procurement";
    } catch {
      return false;
    }
  }
  const text = normalize(`${candidate?.title || ""} ${candidate?.description || ""}`);
  const procurementSignal = /\b(utbod\w*|tilbod\w*|markadskonnun\w*|rammasamning\w*|verdkonnun\w*|bjod\w*|innkaup\w*|tender\w*|procurement|rfi)\b/.test(text);
  if (!procurementSignal) return false;
  if (sourceKey !== THREE_SOURCE_KEYS.VEGAGERDIN) return true;
  const published = Date.parse(`${String(candidate?.publication_date || "").slice(0, 10)}T00:00:00Z`);
  const current = now instanceof Date ? now.getTime() : new Date(now || Date.now()).getTime();
  const recent = Number.isFinite(published) && current - published <= 550 * 86400000 && current - published >= -30 * 86400000;
  const followUp = /\b(nidurstada\w*|samning\w*|samid|valinn|opnud|framkvaemdir\s+hafnar|vinna\s+hafin|lokid)\b/.test(text);
  return recent && !followUp;
}

export function applySourcePredictionPolicy(prediction, observation, config, now = new Date()) {
  const sourceKey = String(config?.source_key || "");
  let adjusted = sourceKey === THREE_SOURCE_KEYS.RIKISKAUP
    ? applyRikiskaupProcurementType(prediction, observation)
    : sourceKey === THREE_SOURCE_KEYS.REYKJAVIK
      ? applyReykjavikProcurementType(prediction, observation)
      : sourceKey === THREE_SOURCE_KEYS.LANDSVIRKJUN
        ? applyLandsvirkjunProcurementType(prediction, observation)
    : { ...prediction };
  adjusted = applyDeadlineActionabilityGuard(adjusted, observation?.deadline, now);
  const category = categorizeShadowObservation(observation, adjusted, sourceKey, now);
  if (sourceKey === THREE_SOURCE_KEYS.VEGAGERDIN && category !== "likely_current_procurement_candidate") {
    adjusted.actionable_for_suppliers = false;
  }
  if (sourceKey === THREE_SOURCE_KEYS.ISAFJORDUR && adjusted.procurement_stage === "open_competition" && !observation.deadline) {
    adjusted.actionable_for_suppliers = false;
    adjusted.requires_admin_review = true;
  }
  return { prediction: adjusted, category };
}

function applyLandsvirkjunProcurementType(prediction, observation) {
  const procurementType = String(observation?.safe_source_payload?.shadow_enrichment?.procurement_type || "");
  if (procurementType === "market_consultation") {
    return mappedPrediction(prediction, "market_consultation", true, false, "Explicit Landsvirkjun RFI/market-consultation evidence.");
  }
  if (["open_tender", "prequalification", "dynamic_purchasing_system"].includes(procurementType)) {
    return mappedPrediction(prediction, "open_competition", true, false, procurementType === "prequalification"
      ? "Explicit Landsvirkjun prequalification accepting supplier applications."
      : procurementType === "dynamic_purchasing_system"
        ? "Explicit Landsvirkjun dynamic purchasing system accepting supplier applications."
        : "Explicit Landsvirkjun tender accepting supplier bids.");
  }
  if (procurementType === "prior_notice") {
    return mappedPrediction(prediction, "upcoming_procurement", true, false, "Explicit Landsvirkjun prior-information notice on the current procurement listing.");
  }
  if (procurementType === "transparency_notice") {
    return mappedPrediction(prediction, "uncertain", false, true, "Landsvirkjun transparency/direct-award notice is not an open competition.");
  }
  if (procurementType === "award_or_followup") {
    return mappedPrediction(prediction, "award_or_contract_signed", false, false, "Explicit Landsvirkjun procurement award/follow-up evidence.");
  }
  return { ...prediction };
}

function applyReykjavikProcurementType(prediction, observation) {
  const procurementType = String(observation?.safe_source_payload?.shadow_enrichment?.procurement_type || "");
  if (procurementType === "market_consultation") {
    return mappedPrediction(prediction, "market_consultation", true, false, "Explicit Reykjavík RFI/market-consultation evidence on the current procurement listing.");
  }
  if (["open_tender", "prequalification"].includes(procurementType)) {
    return mappedPrediction(prediction, "open_competition", true, false, procurementType === "prequalification"
      ? "Explicit Reykjavík prequalification accepting supplier applications."
      : "Explicit Reykjavík tender accepting supplier bids.");
  }
  if (procurementType === "transparency_notice") {
    return mappedPrediction(prediction, "uncertain", false, true, "Reykjavík transparency/direct-award notice is not an open competition.");
  }
  if (procurementType === "award_or_followup") {
    return mappedPrediction(prediction, "award_or_contract_signed", false, false, "Explicit Reykjavík procurement award/follow-up evidence.");
  }
  return { ...prediction };
}

function applyRikiskaupProcurementType(prediction, observation) {
  const procurementType = String(observation?.safe_source_payload?.shadow_enrichment?.procurement_type || "");
  if (procurementType === "market_consultation") {
    return mappedPrediction(prediction, "market_consultation", true, false, "Explicit Ríkiskaup RFI/market-consultation evidence.");
  }
  if (["open_tender", "prequalification"].includes(procurementType)) {
    return mappedPrediction(prediction, "open_competition", true, false, procurementType === "prequalification"
      ? "Explicit Ríkiskaup prequalification accepting supplier applications."
      : "Explicit Ríkiskaup tender accepting supplier bids.");
  }
  if (procurementType === "transparency_notice") {
    return mappedPrediction(prediction, "uncertain", false, true, "Ríkiskaup transparency/direct-award notice is not an open competition.");
  }
  return { ...prediction };
}

function mappedPrediction(prediction, stage, actionable, review, reason) {
  return {
    ...prediction,
    procurement_stage: stage,
    actionable_for_suppliers: actionable,
    requires_admin_review: review,
    classification_confidence: Math.max(Number(prediction?.classification_confidence || 0), 0.95),
    classification_reason: reason,
  };
}

export function categorizeShadowObservation(observation, prediction, sourceKey, now = new Date()) {
  if (sourceKey !== THREE_SOURCE_KEYS.VEGAGERDIN) {
    if (["award_or_contract_signed", "work_underway", "completed"].includes(prediction.procurement_stage)) return "historical_or_followup";
    if (prediction.actionable_for_suppliers) return "likely_current_procurement_candidate";
    return observation.deadline ? "non_actionable_with_deadline" : "conservative_missing_deadline";
  }
  const text = normalize(`${observation.title || ""} ${observation.description || ""}`);
  const published = Date.parse(`${String(observation.publication_date || "").slice(0, 10)}T00:00:00Z`);
  const current = now instanceof Date ? now.getTime() : new Date(now || Date.now()).getTime();
  const old = !Number.isFinite(published) || current - published > 550 * 86400000;
  const procurementLike = /\b(utbod\w*|tilbod\w*|markadskonnun\w*|rammasamning\w*|bjod\w*|innkaup\w*|tender\w*|procurement|rfi)\b/.test(text);
  const followUp = ["award_or_contract_signed", "work_underway", "completed"].includes(prediction.procurement_stage) || /\b(nidurstada\w*|samning\w*|samid|valinn|opnud|framkvaemdir\s+hafnar|lokid)\b/.test(text);
  if (procurementLike && (old || followUp)) return "historical_procurement_or_followup";
  if (procurementLike && isLikelyProcurementCandidate(observation, sourceKey, now)) return "likely_current_procurement_candidate";
  return "general_news_or_project_item";
}

/** @param {any} input */
export function buildShadowParserHealth(input) {
  const { config, fetched, parsed, valid, invalid, duplicates, parserErrors = [], enrichment, suspiciousZero, pagination, classification, indexDiagnostics } = input;
  return {
    parser_name: config.parser_name,
    parser_version: config.parser_version,
    fetched_count: Number(fetched || 0),
    parsed_count: Number(parsed || 0),
    valid_count: Number(valid || 0),
    invalid_count: Number(invalid || 0),
    duplicate_count: Number(duplicates || 0),
    parser_errors: [...new Set(parserErrors.map((value) => String(value)))],
    enrichment: enrichment || { attempted: 0, succeeded: 0, failed: 0, enriched: 0, skipped: 0 },
    suspicious_zero_items: suspiciousZero === true,
    pagination: pagination || null,
    index_diagnostics: indexDiagnostics || null,
    classification: classification || { stage_distribution: {}, actionable: 0, non_actionable: 0 },
    fixture_only: false,
  };
}

export function countSemanticDuplicates(candidates) {
  const seen = new Set();
  let duplicates = 0;
  for (const candidate of candidates) {
    const title = normalize(candidate?.title);
    const date = String(candidate?.publication_date || "").slice(0, 10);
    if (!title || !date) continue;
    const key = `${title}|${date}`;
    if (seen.has(key)) duplicates += 1;
    else seen.add(key);
  }
  return duplicates;
}

function withEnrichment(candidate, metadata) {
  return {
    ...candidate,
    safe_source_payload: {
      ...(candidate.safe_source_payload || {}),
      shadow_enrichment: metadata,
    },
  };
}

function normalize(value) {
  return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/æ/g, "ae").replace(/ð/g, "d").replace(/þ/g, "th").replace(/[^a-z0-9]+/g, " ").trim();
}

function positiveInt(value, fallback) {
  const number = Number(value);
  return Number.isInteger(number) && number > 0 ? number : fallback;
}

function parserError(message) {
  const error = new Error(message);
  error.code = "V2_PARSER_INVALID_JSON";
  error.retryable = false;
  return error;
}
