export const PRODUCTION_PROJECT_REF = "asojxjbsgqbfpbepojzh";
export const PRODUCTION_SHADOW_SOURCE_KEYS = Object.freeze(["reykjavik-utbod-v2", "consensa-utbod-v2"]);

const productionShadowSources = new Set(PRODUCTION_SHADOW_SOURCE_KEYS);

export function isExactSupabaseProject(supabaseUrl, projectRef) {
  try {
    return new URL(String(supabaseUrl || "")).hostname.toLowerCase() === `${String(projectRef || "").toLowerCase()}.supabase.co`;
  } catch {
    return false;
  }
}

export function assertProductionShadowAllowed({ isProduction, sourceKey, config, releaseEnabled = false }) {
  if (!isProduction) throw gateError("V2_ENVIRONMENT_BLOCKED", "Production shadow execution requires the exact production project");
  if (!productionShadowSources.has(String(sourceKey || ""))) {
    throw gateError("V2_PRODUCTION_SHADOW_SOURCE_NOT_ALLOWED", "Source is not allowlisted for production shadow execution");
  }
  if (!config || config.source_key !== sourceKey) {
    throw gateError("V2_SOURCE_CONFIG_MISSING", "Production shadow source configuration is missing");
  }
  if (config.mode !== "shadow") {
    throw gateError("V2_SHADOW_MODE_REQUIRED", "Source must be in shadow mode");
  }
  if (config.production_shadow_enabled !== true) {
    throw gateError("V2_PRODUCTION_SHADOW_DISABLED", "Production shadow execution is disabled for this source");
  }
  if (config.promotion_approved === true) {
    throw gateError("V2_PRODUCTION_SHADOW_PROMOTION_APPROVED", "Production shadow execution requires promotion approval to remain off");
  }
  if (releaseEnabled === true || config.release_feature_enabled === true || config.release_approved === true) {
    throw gateError("V2_PRODUCTION_SHADOW_RELEASE_ENABLED", "Production shadow execution requires release to remain disabled");
  }
  return true;
}

function gateError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}
