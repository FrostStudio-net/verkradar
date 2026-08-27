export const PROCUREMENT_STAGES = Object.freeze([
  "open_competition",
  "upcoming_procurement",
  "market_consultation",
  "award_or_contract_signed",
  "work_underway",
  "completed",
  "general_news",
  "uncertain",
]);

export const ACTIONABLE_PROCUREMENT_STAGES = Object.freeze([
  "open_competition",
  "upcoming_procurement",
  "market_consultation",
]);

export const PROCUREMENT_CLASSIFIER_VERSION = "procurement-stage-v1";
export const DEFAULT_AI_CLASSIFICATION_LIMIT = 2;
export const DEFAULT_AI_CLASSIFICATION_BUDGET_MS = 7000;

const ACTIONABLE_STAGE_SET = new Set(ACTIONABLE_PROCUREMENT_STAGES);
const STAGE_SET = new Set(PROCUREMENT_STAGES);

const SIGNALS = Object.freeze({
  tenderRequest: ["oskad eftir tilbodum", "oskar eftir tilbodum", "request for tenders", "invitation to tender"],
  tenderDeadline: ["tilbodsfrestur", "skilafrestur tilboda", "tender deadline", "submission deadline"],
  tenderDocuments: ["utbodsgogn", "tender documents", "procurement documents"],
  procurementReference: ["utbodsnummer", "utbods nr", "procurement reference", "notice number"],
  upcomingTender: ["verdur bodid ut", "aaetlad er ad bjoda ut", "fyrirhugad utbod", "aaetlad utbod", "senn i utbod"],
  consultation: ["markadskonnun", "markadssamrad", "markadsdialog", "request for information", "prior information consultation"],
  award: ["laegstbjodandi", "verktaki valinn", "tilbod var samthykkt", "utbodnidurstada", "contract awarded", "successful tenderer"],
  contractSigned: ["samningur undirritadur", "skrifad undir verksamning", "verksamningur undirritadur", "contract signed"],
  workStarted: ["framkvaemdir hofust", "framkvaemdir eru hafnar", "framkvaemdir hafnar", "vinna er hafin", "verkid er hafid", "work has started", "works are underway"],
  workCompleted: ["framkvaemdum lokid", "framkvaemdum er lokid", "verkinu lokid", "verkid er fullunnid", "works completed", "project completed"],
  disruption: ["umferd breytist", "lokun vegna framkvaemda", "hjaleid", "vegfarendur eru bednir", "ibuar eru bednir", "resident notice", "traffic disruption"],
  generalNews: ["fundargerd", "baejarstjornarfundur", "vidburdadagatal", "frettatilkynning", "opinn fundur", "community event"],
});

export function deriveActionableForSuppliers(stage) {
  return ACTIONABLE_STAGE_SET.has(normalizeProcurementStage(stage));
}

export function normalizeProcurementStage(value) {
  const stage = String(value || "").trim().toLowerCase();
  return STAGE_SET.has(stage) ? stage : "uncertain";
}

export function applyDeadlineActionabilityGuard(classification, deadline, now = new Date()) {
  const stage = normalizeProcurementStage(classification?.procurement_stage);
  if (!ACTIONABLE_STAGE_SET.has(stage) || !isExpired(deadline, now)) return classification;
  return {
    ...classification,
    actionable_for_suppliers: false,
    classification_reason: appendReason(classification?.classification_reason, "The explicit supplier deadline has expired."),
    short_reason: appendReason(classification?.short_reason, "The explicit supplier deadline has expired."),
    negative_signals: unique([...(classification?.negative_signals || []), "supplier_deadline_expired"]),
  };
}

export function classificationColumns(classification, classifiedBy = classification.classified_by || "deterministic_rule", now = new Date()) {
  const stage = normalizeProcurementStage(classification.procurement_stage);
  const confidence = clampNumber(classification.confidence ?? classification.classification_confidence, 0, 1);
  const requiresReview = stage === "uncertain" || confidence < 0.8 || classification.requires_admin_review === true;
  return {
    procurement_stage: stage,
    actionable_for_suppliers: !requiresReview && classification.actionable_for_suppliers !== false && deriveActionableForSuppliers(stage),
    classification_confidence: confidence,
    classification_reason: truncate(classification.short_reason || classification.classification_reason || "", 500),
    positive_signals: cleanSignals(classification.positive_signals),
    negative_signals: cleanSignals(classification.negative_signals),
    classified_by: classifiedBy,
    classified_at: now.toISOString(),
    classifier_version: PROCUREMENT_CLASSIFIER_VERSION,
    requires_admin_review: requiresReview,
  };
}

export function classifyProcurementStage(input) {
  const metadataResult = classifyAuthoritativeMetadata(input?.authoritative_metadata || {}, input?.deadline);
  if (metadataResult) return metadataResult;

  const title = truncate(stripHtml(input?.title), 300);
  const body = truncate(stripHtml(input?.body_text ?? input?.description), 8000);
  const text = normalizeText(`${title} ${body}`);
  const matched = (group) => SIGNALS[group].filter((phrase) => text.includes(phrase));

  const completed = matched("workCompleted");
  if (completed.length) return result("completed", 0.98, "Explicit completion language was found.", [], ["work_completed"]);

  const underway = matched("workStarted");
  const disruption = matched("disruption");
  if (underway.length || disruption.length >= 2) {
    return result("work_underway", 0.97, "The notice describes work already underway or operational disruption.", [], unique(["work_started", ...(disruption.length ? ["resident_or_traffic_disruption"] : [])]));
  }

  const contractSigned = matched("contractSigned");
  const award = matched("award");
  if (contractSigned.length || award.length) {
    return result("award_or_contract_signed", 0.97, "The notice describes an award, selected contractor, or signed contract.", [], unique([...(award.length ? ["award_announced"] : []), ...(contractSigned.length ? ["contract_signed"] : [])]));
  }

  const consultation = matched("consultation");
  if (consultation.length) return result("market_consultation", 0.94, "An explicit supplier market consultation was found.", ["market_consultation"], []);

  const tenderRequest = matched("tenderRequest");
  const tenderDeadline = matched("tenderDeadline");
  const tenderDocuments = matched("tenderDocuments");
  const procurementReference = matched("procurementReference");
  const corroboratingOpenSignals = tenderDeadline.length + tenderDocuments.length + procurementReference.length;
  if (tenderRequest.length && corroboratingOpenSignals > 0) {
    return result("open_competition", 0.96, "An explicit request for bids is supported by formal procurement details.", unique(["request_for_bids", ...(tenderDeadline.length ? ["supplier_deadline"] : []), ...(tenderDocuments.length ? ["tender_documents"] : []), ...(procurementReference.length ? ["procurement_reference"] : [])]), []);
  }

  const upcoming = matched("upcomingTender");
  if (upcoming.length) return result("upcoming_procurement", 0.91, "The text explicitly says a procurement will be advertised later.", ["explicit_future_procurement"], []);

  const news = matched("generalNews");
  if (news.length) return result("general_news", 0.92, "The item is a general municipal information item without supplier action.", [], ["general_news_format"]);

  return result("uncertain", 0.35, "No authoritative metadata or decisive lifecycle evidence was found.", [], ["insufficient_procurement_evidence"], true, isAmbiguousMunicipalNews(input));
}

export function isAmbiguousMunicipalNews(input) {
  const sourceType = normalizeText(input?.source_type);
  const connectorType = normalizeText(input?.connector_type);
  return sourceType.includes("municipal") && ["rss feed", "wordpress rest", "page monitor allowed"].includes(connectorType);
}

export function buildAiClassifierInput(input) {
  const authoritative = input?.authoritative_metadata && typeof input.authoritative_metadata === "object"
    ? input.authoritative_metadata
    : {};
  return {
    source_type: truncate(stripControl(input?.source_type), 80),
    source_organisation: truncate(stripControl(input?.source_organisation), 200),
    title: truncate(sanitizePublicText(input?.title), 300),
    body_text: truncate(sanitizePublicText(input?.body_text), 4000),
    publication_date: truncate(stripControl(input?.publication_date), 40),
    deadline: truncate(stripControl(input?.deadline), 40),
    category: truncate(sanitizePublicText(input?.category), 200),
    authoritative_metadata: {
      form_type: truncate(stripControl(authoritative.form_type), 80),
      notice_type: truncate(stripControl(authoritative.notice_type), 120),
      notice_subtype: truncate(stripControl(authoritative.notice_subtype), 120),
    },
  };
}

export function isProcurementOpportunityEligible(opportunity, options = {}) {
  if (!opportunity) return false;
  const stageValue = opportunity.procurement_stage ?? opportunity.procurementStage;
  if (stageValue != null && String(stageValue).trim()) {
    const stage = normalizeProcurementStage(stageValue);
    if (opportunity.actionable_for_suppliers !== true && opportunity.actionableForSuppliers !== true) return false;
    if (opportunity.requires_admin_review === true || opportunity.requiresAdminReview === true) return false;
    if (!ACTIONABLE_STAGE_SET.has(stage)) return false;
    if (String(opportunity.status || "").toLowerCase() !== "open") return false;
    if (ACTIONABLE_STAGE_SET.has(stage) && isExpired(opportunity.deadline, options.now)) return false;
    return true;
  }
  const grandfathered = opportunity.classification_grandfathered === true || opportunity.classificationGrandfathered === true;
  if (options.allowLegacyUnclassified !== true || !grandfathered) return false;
  if (typeof options.legacyEligibility === "function") return options.legacyEligibility(opportunity) === true;
  return legacyOpportunityEligible(opportunity, options.now);
}

export async function processProcurementClassificationBatch(items, options) {
  const now = options.now || Date.now;
  const startedAt = Number(options.startedAt ?? now());
  const aiWindowStartedAt = Number(options.aiWindowStartedAt ?? now());
  const functionBudgetMs = Number(options.functionBudgetMs ?? 18000);
  const functionReserveMs = Number(options.functionReserveMs ?? 4000);
  const aiBudgetMs = Number(options.aiBudgetMs ?? DEFAULT_AI_CLASSIFICATION_BUDGET_MS);
  const perCallTimeoutMs = Number(options.perCallTimeoutMs ?? 5000);
  const maxAiClassifications = Number(options.maxAiClassifications ?? DEFAULT_AI_CLASSIFICATION_LIMIT);
  const stats = { processed: 0, persisted: 0, ai_attempted: 0, ai_budget_exhausted: 0, ai_failed: 0 };

  for (const item of items) {
    const deterministic = await options.classifyDeterministic(item);
    let classified = deterministic.value;

    if (deterministic.needsAi) {
      const remainingAiMs = aiBudgetMs - (now() - aiWindowStartedAt);
      const remainingFunctionMs = functionBudgetMs - (now() - startedAt) - functionReserveMs;
      const timeoutMs = Math.floor(Math.min(perCallTimeoutMs, remainingAiMs, remainingFunctionMs));

      if (stats.ai_attempted >= maxAiClassifications || timeoutMs <= 0) {
        stats.ai_budget_exhausted += 1;
        classified = await options.failClosed(item, "ai_classification_budget_exhausted", deterministic);
      } else {
        stats.ai_attempted += 1;
        try {
          classified = await options.classifyAi(item, timeoutMs, deterministic);
        } catch (error) {
          stats.ai_failed += 1;
          classified = await options.failClosed(item, "ai_classification_unavailable", deterministic, error);
        }
      }
    }

    stats.processed += 1;
    await options.persist(classified, item);
    stats.persisted += 1;
  }

  return stats;
}

export function preserveAdminClassification(incoming, existing) {
  if (!existing || String(existing.classified_by || existing.classifiedBy || "") !== "admin") return incoming;
  const existingPayload = existing.raw_payload ?? existing.rawPayload;
  const incomingPayload = incoming.raw_payload ?? incoming.rawPayload;
  const adminPayloadKeys = [
    "admin_report_status",
    "hidden_from_reports",
    "opportunity_intent",
    "quality_status",
    "tender_state",
    "admin_reviewed_at",
  ];
  const preservedPayload = incomingPayload && typeof incomingPayload === "object" ? { ...incomingPayload } : {};
  if (existingPayload && typeof existingPayload === "object") {
    for (const key of adminPayloadKeys) {
      if (Object.hasOwn(existingPayload, key)) preservedPayload[key] = existingPayload[key];
    }
  }
  return {
    ...incoming,
    raw_payload: preservedPayload,
    procurement_stage: existing.procurement_stage ?? existing.procurementStage,
    actionable_for_suppliers: existing.actionable_for_suppliers ?? existing.actionableForSuppliers,
    classification_confidence: existing.classification_confidence ?? existing.classificationConfidence,
    classification_reason: existing.classification_reason ?? existing.classificationReason,
    positive_signals: existing.positive_signals ?? existing.positiveSignals ?? [],
    negative_signals: existing.negative_signals ?? existing.negativeSignals ?? [],
    classified_by: "admin",
    classified_at: existing.classified_at ?? existing.classifiedAt,
    classifier_version: existing.classifier_version ?? existing.classifierVersion,
    requires_admin_review: existing.requires_admin_review ?? existing.requiresAdminReview,
  };
}

function classifyAuthoritativeMetadata(metadata, deadline) {
  const formType = normalizeText(metadata?.form_type ?? metadata?.["form-type"]);
  const mapping = {
    competition: "open_competition",
    planning: "upcoming_procurement",
    consultation: "market_consultation",
    result: "award_or_contract_signed",
    completion: "completed",
    "cont modif": "award_or_contract_signed",
    "dir awa pre": "award_or_contract_signed",
    bri: "general_news",
  };
  const isContractModification = formType === "contract modification" ||
    formType.startsWith("contract modification ") ||
    formType === "cont modif" ||
    formType.startsWith("cont modif ") ||
    formType.endsWith(" cont modif");
  const stage = isContractModification ? "award_or_contract_signed" : mapping[formType];
  if (!stage) return null;
  const expiredCompetition = stage === "open_competition" && isExpired(deadline);
  return {
    ...result(stage, 1, `Authoritative source form type: ${formType}.`, expiredCompetition ? [] : ["authoritative_form_type"], expiredCompetition ? ["supplier_deadline_expired"] : []),
    actionable_for_suppliers: !expiredCompetition && deriveActionableForSuppliers(stage),
    classified_by: "source_metadata",
  };
}

function legacyOpportunityEligible(opportunity, now) {
  if (String(opportunity.status || "").toLowerCase() !== "open") return false;
  if (isExpired(opportunity.deadline, now)) return false;
  const payload = opportunity.raw_payload ?? opportunity.rawPayload ?? {};
  const adminStatus = String(payload.admin_report_status || "").toLowerCase();
  if (adminStatus === "include") return true;
  if (payload.hidden_from_reports === true || ["hidden", "hide", "noise", "deleted"].includes(adminStatus)) return false;
  const tenderState = normalizeText(payload.tender_state);
  if (["tender awarded", "awarded", "already awarded", "already tendered"].includes(tenderState)) return false;
  const intent = normalizeText(payload.opportunity_intent || payload.intent || payload.quality_status);
  if (["news context", "not opportunity", "stale opportunity", "needs review"].includes(intent)) return false;
  return ["confirmed tender", "early opportunity", "early signal", "likely tender"].includes(intent);
}

function result(stage, confidence, reason, positiveSignals, negativeSignals, requiresReview = false, needsAi = false) {
  return {
    procurement_stage: stage,
    confidence,
    short_reason: reason,
    positive_signals: positiveSignals,
    negative_signals: negativeSignals,
    requires_admin_review: requiresReview,
    actionable_for_suppliers: !requiresReview && deriveActionableForSuppliers(stage),
    classified_by: "deterministic_rule",
    needs_ai: needsAi,
  };
}

function sanitizePublicText(value) {
  return String(value || "")
    .replace(/\r\n?/g, "\n")
    .replace(/<(?:br|\/p|\/div|\/li)>/gi, "\n")
    .replace(/<[^>]*>/g, " ")
    .replace(/(?:^|\n)\s*(?:hofundur|höfundur|author|byline|tengilidur|tengiliður|contact|simi|sími|netfang)\s*:.*$/gim, " ")
    .replace(/\b(?:tengilidur|tengiliður|contact person)\s*:[^.\n]{0,300}/gi, " ")
    .replace(/\b[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}\b/g, "[redacted-email]")
    .replace(/\b(?:\+?354[ -]?)?(?:\d[ -]?){7}\b/g, "[redacted-phone]")
    .replace(/\b\d{6}[- ]?\d{4}\b/g, "[redacted-id]")
    .replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripHtml(value) {
  return stripControl(value).replace(/<[^>]*>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/&amp;/gi, "&").replace(/\s+/g, " ").trim();
}

function stripControl(value) {
  return String(value || "").replace(/[\u0000-\u001f\u007f]/g, " ").trim();
}

function normalizeText(value) {
  return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/æ/g, "ae").replace(/ð/g, "d").replace(/þ/g, "th").replace(/[^a-z0-9]+/g, " ").trim();
}

function isExpired(value, now = new Date()) {
  if (!value) return false;
  const deadline = new Date(`${String(value).slice(0, 10)}T23:59:59Z`);
  const current = now instanceof Date ? now : new Date(now || Date.now());
  return !Number.isNaN(deadline.getTime()) && deadline.getTime() < current.getTime();
}

function cleanSignals(value) {
  return unique(Array.isArray(value) ? value.map((item) => truncate(stripControl(item), 80)).filter(Boolean) : []).slice(0, 12);
}

function clampNumber(value, minimum, maximum) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(minimum, Math.min(maximum, number)) : 0;
}

function truncate(value, maximum) {
  return String(value || "").slice(0, maximum);
}

function unique(values) {
  return [...new Set(values)];
}

function appendReason(value, suffix) {
  const reason = String(value || "").trim();
  return reason ? `${reason} ${suffix}` : suffix;
}
