import { assertValidObservation } from "./contracts.js";

export class V2PromotionBlockedError extends Error {
  constructor(message, code = "V2_PROMOTION_BLOCKED") {
    super(message);
    this.name = "V2PromotionBlockedError";
    this.code = code;
  }
}

export async function promoteObservation(options) {
  const { config, observation, identity, promotionGateway } = options;
  if (config?.mode !== "promote") {
    throw new V2PromotionBlockedError(`Explicit promote mode is required; current mode is ${config?.mode || "missing"}`, "V2_PROMOTE_MODE_REQUIRED");
  }
  assertValidObservation(observation);
  if (!observation.source_id || String(config.source_id || "") !== String(observation.source_id)) {
    throw new V2PromotionBlockedError("Canonical source_id is required and must match the V2 config", "V2_SOURCE_ID_MISMATCH");
  }
  if (identity?.review_candidate && !identity.matched) {
    throw new V2PromotionBlockedError("Fuzzy identity candidate requires manual review", "V2_FUZZY_REVIEW_REQUIRED");
  }

  if (typeof promotionGateway !== "function") throw new V2PromotionBlockedError("Promotion gateway is unavailable");
  return await promotionGateway(observation.id);
}

export function createSupabasePromotionGateway(supabase) {
  return async (observationId) => {
    const { data, error } = await supabase.rpc("promote_v2_observation", {
      target_observation_id: observationId,
    });
    if (error) throw error;
    return Array.isArray(data) ? data[0] : data;
  };
}

export function assertCompleteClassification(classification) {
  const required = [
    "procurement_stage", "actionable_for_suppliers", "classification_confidence",
    "classified_by", "classifier_version", "requires_admin_review",
  ];
  const missing = required.filter((key) => classification?.[key] === undefined || classification?.[key] === null || classification?.[key] === "");
  if (missing.length) throw new V2PromotionBlockedError(`Incomplete procurement classification: ${missing.join(", ")}`, "V2_CLASSIFICATION_INCOMPLETE");
  return classification;
}
