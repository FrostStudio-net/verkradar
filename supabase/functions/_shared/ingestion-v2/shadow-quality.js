import { extractProcurementDetailMetadata } from "./adapters/procurement-metadata.js";
import { applyDeadlineActionabilityGuard } from "../procurement-stage.js";

export const THREE_SOURCE_KEYS = Object.freeze({
  BORGARBYGGD: "borgarbyggd-utbod-v2",
  GARDABAER: "gardabaer-utbod-v2",
  RIKISKAUP: "rikiskaup-utbod-v2",
  VEGAGERDIN: "vegagerdin-utbod-v2",
  ISAFJORDUR: "isafjordur-utbod-v2",
  REYKJAVIK: "reykjavik-utbod-v2",
  LANDSVIRKJUN: "landsvirkjun-utbod-v2",
  LANDSNET: "landsnet-utbod-v2",
  VEITUR: "veitur-utbod-v2",
  ORKUVEITAN: "orkuveitan-utbod-v2",
  CONSENSA: "consensa-utbod-v2",
});

const UTBODSVEFUR_SOURCE_BUYERS = Object.freeze({
  [THREE_SOURCE_KEYS.LANDSVIRKJUN]: "Landsvirkjun",
  [THREE_SOURCE_KEYS.LANDSNET]: "Landsnet",
  [THREE_SOURCE_KEYS.VEITUR]: "Veitur",
  [THREE_SOURCE_KEYS.ORKUVEITAN]: "Orkuveita Reykjavíkur",
});

export const DETAIL_ENRICHMENT_LIMITS = Object.freeze({
  [THREE_SOURCE_KEYS.GARDABAER]: 10,
  [THREE_SOURCE_KEYS.RIKISKAUP]: 20,
  [THREE_SOURCE_KEYS.VEGAGERDIN]: 12,
  [THREE_SOURCE_KEYS.ISAFJORDUR]: 15,
  [THREE_SOURCE_KEYS.REYKJAVIK]: 12,
  [THREE_SOURCE_KEYS.LANDSVIRKJUN]: 10,
  [THREE_SOURCE_KEYS.LANDSNET]: 10,
  [THREE_SOURCE_KEYS.VEITUR]: 10,
  [THREE_SOURCE_KEYS.ORKUVEITAN]: 10,
});

export function getSourceClassificationContext(config) {
  const sourceKey = String(config?.source_key || "");
  if (sourceKey === THREE_SOURCE_KEYS.RIKISKAUP) {
    return { source_type: "national_procurement_portal", connector_type: "wordpress_rest", source_organisation: "Ríkiskaup / island.is procurement" };
  }
  if (sourceKey === THREE_SOURCE_KEYS.VEGAGERDIN) {
    return { source_type: "road_authority_procurement_portal", connector_type: "public_procurement_html_index", source_organisation: "Vegagerðin procurement" };
  }
  if (sourceKey === THREE_SOURCE_KEYS.ISAFJORDUR) {
    return { source_type: "municipal", connector_type: "rss_feed", source_organisation: "Ísafjarðarbær" };
  }
  if (sourceKey === THREE_SOURCE_KEYS.REYKJAVIK) {
    return { source_type: "municipal_procurement_portal", connector_type: "municipal_html_index", source_organisation: "Reykjavíkurborg procurement" };
  }
  if (sourceKey === THREE_SOURCE_KEYS.GARDABAER) {
    return { source_type: "municipal_procurement_portal", connector_type: "municipal_html_index", source_organisation: "Garðabær procurement" };
  }
  if (sourceKey === THREE_SOURCE_KEYS.CONSENSA) {
    return { source_type: "procurement_consultant_tender_page", connector_type: "public_procurement_html_index", source_organisation: "Consensa" };
  }
  if (sourceKey === THREE_SOURCE_KEYS.BORGARBYGGD) {
    return { source_type: "municipal_procurement_portal", connector_type: "wordpress_procurement_category", source_organisation: "Borgarbyggð procurement" };
  }
  if (UTBODSVEFUR_SOURCE_BUYERS[sourceKey]) {
    return { source_type: "energy_utility_procurement_portal", connector_type: "public_procurement_html_index", source_organisation: `${UTBODSVEFUR_SOURCE_BUYERS[sourceKey]} procurement` };
  }
  if (sourceKey === "akranes-utbod-v2") {
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
    if (reportedTotalPages !== null && page >= reportedTotalPages) { stopped = "reported_end"; break; }
    if (pageItems.length < perPage) { stopped = "short_page"; break; }
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
  const configuredBuyer = UTBODSVEFUR_SOURCE_BUYERS[sourceKey];
  if (configuredBuyer) {
    try {
      const url = new URL(candidate?.canonical_url || candidate?.discovered_url || "");
      return ["utbodsvefur.is", "www.utbodsvefur.is"].includes(url.hostname.toLowerCase()) &&
        candidate?.safe_source_payload?.listing_context === "current_procurement" &&
        normalize(candidate?.buyer) === normalize(configuredBuyer) &&
        normalize(candidate?.safe_source_payload?.configured_buyer) === normalize(configuredBuyer);
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
  if (sourceKey === THREE_SOURCE_KEYS.GARDABAER) {
    try {
      const url = new URL(candidate?.canonical_url || candidate?.discovered_url || "");
      return ["gardabaer.is", "www.gardabaer.is"].includes(url.hostname.toLowerCase()) &&
        /^\/framkvaemdir\/utbod\/[^/]+\/?$/i.test(url.pathname) &&
        candidate?.safe_source_payload?.source_status === "active" &&
        candidate?.safe_source_payload?.listing_context === "current_procurement";
    } catch {
      return false;
    }
  }
  if (sourceKey === THREE_SOURCE_KEYS.VEGAGERDIN) {
    try {
      const url = new URL(candidate?.canonical_url || candidate?.discovered_url || "");
      return ["vegagerdin.is", "www.vegagerdin.is"].includes(url.hostname.toLowerCase()) &&
        /^\/verkefnin\/utbod\/[^/]+\/?$/i.test(url.pathname) &&
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
  let adjusted = sourceKey === THREE_SOURCE_KEYS.CONSENSA
    ? applyConsensaProcurementType(prediction, observation, now)
    : sourceKey === THREE_SOURCE_KEYS.RIKISKAUP
    ? applyRikiskaupProcurementType(prediction, observation)
    : sourceKey === THREE_SOURCE_KEYS.REYKJAVIK
      ? applyReykjavikProcurementType(prediction, observation)
      : sourceKey === THREE_SOURCE_KEYS.GARDABAER
        ? applyGardabaerProcurementType(prediction, observation)
        : sourceKey === THREE_SOURCE_KEYS.VEGAGERDIN
          ? applyVegagerdinProcurementType(prediction, observation)
      : sourceKey === THREE_SOURCE_KEYS.BORGARBYGGD
        ? applyBorgarbyggdProcurementType(prediction, observation)
      : UTBODSVEFUR_SOURCE_BUYERS[sourceKey]
        ? applyUtbodsvefurProcurementType(prediction, observation, UTBODSVEFUR_SOURCE_BUYERS[sourceKey])
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

function applyConsensaProcurementType(prediction, observation, now) {
  const payload = observation?.safe_source_payload || {};
  const deadline = String(observation?.deadline || "");
  const today = new Date(now).toISOString().slice(0, 10);
  const allowedUrl = (() => {
    try {
      const url = new URL(String(observation?.canonical_url || observation?.discovered_url || ""));
      return url.protocol === "https:" && ["consensa.is", "www.consensa.is"].includes(url.hostname.toLowerCase()) && (url.pathname === "/utbod" || /^\/projects\//i.test(url.pathname));
    } catch { return false; }
  })();
  const stableIdentity = Boolean(observation?.procurement_reference || payload.tendsign_notice_id || payload.canonical_url_source === "public_sitemap");
  const deadlineAt = payload.deadline_at ? Date.parse(payload.deadline_at) : NaN;
  const futureDeadline = deadline ? Number.isFinite(deadlineAt) ? deadlineAt > new Date(now).getTime() : deadline > today : false;
  const complete = Boolean(futureDeadline && observation?.buyer && stableIdentity && allowedUrl && payload.admission_eligible === true);
  if (!complete) {
    return mappedPrediction(prediction, deadline && !futureDeadline ? "completed" : "uncertain", false, !deadline || !observation?.buyer || !stableIdentity || !allowedUrl,
      deadline && !futureDeadline ? "Consensa tender deadline has expired." : "Consensa observation lacks a required future deadline, buyer, stable identity, procurement evidence, or valid public source URL.");
  }
  return mappedPrediction(prediction, "open_competition", true, false, "Consensa publishes a clear tender invitation with a buyer, stable identity, and explicit future deadline.");
}

export function applyBorgarbyggdSourceStatus(candidates, now = new Date()) {
  const referenceDate = new Date(now).toISOString().slice(0, 10);
  return candidates.map((candidate) => {
    const enrichment = candidate?.safe_source_payload?.shadow_enrichment || {};
    const status = enrichment.follow_up === true
      ? "completed"
      : candidate?.deadline
        ? String(candidate.deadline).slice(0, 10) < referenceDate ? "completed" : "active"
        : "unknown";
    return {
      ...candidate,
      safe_source_payload: {
        ...(candidate.safe_source_payload || {}),
        source_status: status,
        shadow_enrichment: { ...enrichment, source_status: status },
      },
    };
  });
}

export function derivePromotionEvidence(observation, prediction) {
  const enrichment = observation?.safe_source_payload?.shadow_enrichment || {};
  const enrichmentStatus = String(enrichment.enrichment_status || "");
  const procurementType = String(enrichment.procurement_type || "");
  const strongType = [
    "open_tender",
    "prequalification",
    "market_consultation",
    "dynamic_purchasing_system",
    "prior_notice",
  ].includes(procurementType);
  const strongSignals = Array.isArray(prediction?.positive_signals)
    ? prediction.positive_signals.map(String)
    : [];
  const followUpOrCompleted = procurementType === "award_or_followup" || enrichment.follow_up === true ||
    ["award_or_contract_signed", "work_underway", "completed"].includes(String(prediction?.procurement_stage || ""));
  const strongProcurementEvidence = !followUpOrCompleted && (strongType || enrichment.request_for_bids === true ||
    strongSignals.some((signal) => ["request_for_bids", "market_consultation", "supplier_deadline", "procurement_reference"].includes(signal)));
  const deadlineEvidence = observation?.deadline ? "explicit_source" : null;
  let promotionEnrichmentStatus = "failed";
  if (enrichmentStatus === "not_needed" && strongProcurementEvidence && deadlineEvidence) promotionEnrichmentStatus = "not_needed";
  else if (["enriched", "no_supported_fields"].includes(enrichmentStatus)) promotionEnrichmentStatus = "succeeded";
  else if (!enrichmentStatus && strongProcurementEvidence && deadlineEvidence) promotionEnrichmentStatus = "not_needed";
  return {
    strong_procurement_evidence: strongProcurementEvidence,
    deadline_evidence: deadlineEvidence,
    promotion_enrichment_status: promotionEnrichmentStatus,
  };
}

function applyUtbodsvefurProcurementType(prediction, observation, buyer) {
  const procurementType = String(observation?.safe_source_payload?.shadow_enrichment?.procurement_type || "");
  if (procurementType === "market_consultation") {
    return mappedPrediction(prediction, "market_consultation", true, false, `Explicit ${buyer} RFI/market-consultation evidence.`);
  }
  if (["open_tender", "prequalification", "dynamic_purchasing_system"].includes(procurementType)) {
    return mappedPrediction(prediction, "open_competition", true, false, procurementType === "prequalification"
      ? `Explicit ${buyer} prequalification accepting supplier applications.`
      : procurementType === "dynamic_purchasing_system"
        ? `Explicit ${buyer} dynamic purchasing system accepting supplier applications.`
        : `Explicit ${buyer} tender accepting supplier bids.`);
  }
  if (procurementType === "prior_notice") {
    return mappedPrediction(prediction, "upcoming_procurement", true, false, `Explicit ${buyer} prior-information notice on the current procurement listing.`);
  }
  if (procurementType === "transparency_notice") {
    return mappedPrediction(prediction, "uncertain", false, true, `${buyer} transparency/direct-award notice is not an open competition.`);
  }
  if (procurementType === "award_or_followup") {
    return mappedPrediction(prediction, "award_or_contract_signed", false, false, `Explicit ${buyer} procurement award/follow-up evidence.`);
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

function applyGardabaerProcurementType(prediction, observation) {
  const enrichment = observation?.safe_source_payload?.shadow_enrichment || {};
  const procurementType = String(enrichment.procurement_type || "");
  const sourceStatus = String(enrichment.source_status || observation?.safe_source_payload?.source_status || "");
  if (sourceStatus === "completed" || procurementType === "award_or_followup") {
    return mappedPrediction(prediction, "completed", false, false, "Garðabær marks this procurement notice as completed.");
  }
  if (sourceStatus !== "active") return { ...prediction, actionable_for_suppliers: false, requires_admin_review: true };
  if (procurementType === "market_consultation") {
    return mappedPrediction(prediction, "market_consultation", true, false, "Explicit active Garðabær RFI/market-consultation evidence.");
  }
  if (["open_tender", "prequalification"].includes(procurementType)) {
    return mappedPrediction(prediction, "open_competition", true, false, procurementType === "prequalification"
      ? "Explicit active Garðabær prequalification accepting supplier applications."
      : "Explicit active Garðabær tender accepting supplier bids.");
  }
  return { ...prediction, actionable_for_suppliers: false, requires_admin_review: true };
}

function applyVegagerdinProcurementType(prediction, observation) {
  const payload = observation?.safe_source_payload || {};
  const enrichment = payload.shadow_enrichment || {};
  const listingRole = String(payload.listing_role || "");
  const procurementType = String(enrichment.procurement_type || payload.procurement_type || "");
  const sourceStatus = String(enrichment.source_status || payload.source_status || "unknown");
  if (listingRole === "planned_tender") {
    return mappedPrediction(prediction, "upcoming_procurement", false, false, "Vegagerðin planned-tender table is advance planning context, not an open invitation to bid.");
  }
  if (["opened", "completed", "cancelled"].includes(sourceStatus) || procurementType === "award_or_followup") {
    return mappedPrediction(prediction, sourceStatus === "completed" ? "completed" : "award_or_contract_signed", false, false, "Vegagerðin lifecycle shows bid opening, cancellation, award, or completion follow-up.");
  }
  if (listingRole === "current_tender" && sourceStatus === "active" && procurementType === "open_tender" && observation?.deadline) {
    return mappedPrediction(prediction, "open_competition", true, false, "Official Vegagerðin current-tender detail shows an active invitation and explicit submission deadline.");
  }
  return {
    ...prediction,
    procurement_stage: "uncertain",
    actionable_for_suppliers: false,
    requires_admin_review: true,
    classification_confidence: Math.min(Number(prediction?.classification_confidence || 0.35), 0.7),
    classification_reason: "Vegagerðin current-tender metadata is incomplete or its lifecycle is unresolved.",
  };
}

function applyBorgarbyggdProcurementType(prediction, observation) {
  const enrichment = observation?.safe_source_payload?.shadow_enrichment || {};
  const procurementType = String(enrichment.procurement_type || "");
  const sourceStatus = String(enrichment.source_status || observation?.safe_source_payload?.source_status || "unknown");
  if (sourceStatus === "completed" || procurementType === "award_or_followup") {
    return mappedPrediction(prediction, "completed", false, false, "Borgarbyggð notice is expired, completed, or procurement follow-up content.");
  }
  if (sourceStatus === "active" && procurementType === "open_tender" && observation?.deadline) {
    return mappedPrediction(prediction, "open_competition", true, false, "Explicit Borgarbyggð invitation to tender with a current submission deadline.");
  }
  return {
    ...prediction,
    procurement_stage: "uncertain",
    actionable_for_suppliers: false,
    requires_admin_review: true,
    classification_confidence: Math.min(Number(prediction?.classification_confidence || 0.35), 0.7),
    classification_reason: "Borgarbyggð notice lacks enough current tender evidence for automatic actionability.",
  };
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
  const listingRole = String(observation?.safe_source_payload?.listing_role || "");
  const status = String(observation?.safe_source_payload?.shadow_enrichment?.source_status || observation?.safe_source_payload?.source_status || "unknown");
  if (listingRole === "planned_tender") return "planned_procurement";
  if (["opened", "completed", "cancelled"].includes(status) || ["award_or_contract_signed", "completed"].includes(prediction.procurement_stage)) return "historical_procurement_or_followup";
  if (listingRole === "current_tender" && isLikelyProcurementCandidate(observation, sourceKey, now)) return "likely_current_procurement_candidate";
  return "current_tender_incomplete";
}

/** @param {any} input */
export function buildShadowParserHealth(input) {
  const { config, fetched, parsed, valid, invalid, duplicates, parserErrors = [], enrichment, suspiciousZero, pagination, classification, comparison, quality, indexDiagnostics, recovery } = input;
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
    comparison: comparison || { state_distribution: {}, errors: 0 },
    quality: quality || { healthy: true, blockers: [] },
    recovery: recovery || { deadlines: 0, references: 0, buyers: 0, source_status_distribution: {} },
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

export function dedupeIsafjordurObservations(observations) {
  const rows = Array.isArray(observations) ? observations : [];
  const groups = new Map();
  for (const row of rows) {
    const signature = [
      String(row?.identity_fingerprint || ""),
      normalize(row?.title),
      normalize(row?.description),
      String(row?.publication_date || "").slice(0, 10),
    ].join("|");
    const grouped = groups.get(signature) || [];
    grouped.push(row);
    groups.set(signature, grouped);
  }

  const kept = [];
  const suppressed = [];
  const unresolved = [];
  for (const group of groups.values()) {
    if (group.length === 1) {
      kept.push(group[0]);
      continue;
    }
    const families = group.map((row) => isafjordurUrlFamily(row?.canonical_url || row?.discovered_url));
    const familyNames = new Set(families.map((entry) => entry.family).filter(Boolean));
    const hasCanonical = families.some((entry) => entry.isCanonical);
    const exactUrlFamily = familyNames.size === 1 && hasCanonical && families.every((entry) => entry.family);
    if (!exactUrlFamily) {
      kept.push(...group);
      unresolved.push({
        identity_fingerprint: group[0]?.identity_fingerprint || null,
        observation_external_ids: group.map((row) => row?.external_id || null),
        reason: "same_fingerprint_without_resolvable_canonical_url_family",
      });
      continue;
    }
    const ranked = [...group].sort(compareIsafjordurCanonicalObservation);
    const canonical = ranked[0];
    kept.push(canonical);
    for (const duplicate of ranked.slice(1)) {
      suppressed.push({
        suppressed_external_id: duplicate?.external_id || null,
        suppressed_canonical_url: duplicate?.canonical_url || duplicate?.discovered_url || null,
        canonical_external_id: canonical?.external_id || null,
        canonical_url: canonical?.canonical_url || canonical?.discovered_url || null,
        identity_fingerprint: canonical?.identity_fingerprint || null,
        reason: "same_fingerprint_exact_content_and_url_suffix_variant",
      });
    }
  }
  return {
    observations: kept,
    diagnostics: {
      input_count: rows.length,
      canonical_count: kept.length,
      suppressed_count: suppressed.length,
      unresolved_group_count: unresolved.length,
      suppressed,
      unresolved,
    },
  };
}

function compareIsafjordurCanonicalObservation(left, right) {
  const leftFamily = isafjordurUrlFamily(left?.canonical_url || left?.discovered_url);
  const rightFamily = isafjordurUrlFamily(right?.canonical_url || right?.discovered_url);
  if (leftFamily.isCanonical !== rightFamily.isCanonical) return leftFamily.isCanonical ? -1 : 1;
  const completeness = (row) => [row?.procurement_reference, row?.deadline, row?.buyer, row?.description, row?.canonical_url]
    .filter((value) => String(value || "").trim()).length;
  const completenessDifference = completeness(right) - completeness(left);
  if (completenessDifference) return completenessDifference;
  const leftUrl = String(left?.normalized_canonical_url || left?.canonical_url || left?.discovered_url || "");
  const rightUrl = String(right?.normalized_canonical_url || right?.canonical_url || right?.discovered_url || "");
  return leftUrl.localeCompare(rightUrl) || String(left?.external_id || "").localeCompare(String(right?.external_id || ""));
}

function isafjordurUrlFamily(value) {
  try {
    const url = new URL(String(value || ""));
    const pathname = url.pathname.replace(/\/+$/, "");
    const suffixed = pathname.match(/^(.*)-(\d+)$/);
    const familyPath = suffixed ? suffixed[1] : pathname;
    return {
      family: `${url.hostname.toLowerCase()}${familyPath.toLowerCase()}`,
      isCanonical: !suffixed,
    };
  } catch {
    return { family: null, isCanonical: false };
  }
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
