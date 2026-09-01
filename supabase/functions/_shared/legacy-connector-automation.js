export const PRODUCTION_PROJECT_REF = "asojxjbsgqbfpbepojzh";
export const LEGACY_CONNECTOR_AUTOMATION_ACTION = "run_legacy_connector_batch";

export const LEGACY_CONNECTOR_BATCHES = Object.freeze({
  legacy_batch_1: Object.freeze([
    "Akranes útboð",
    "Akureyri Municipality",
    "Árborg",
    "Faxaflóahafnir útboð",
  ]),
  legacy_batch_2: Object.freeze([
    "Hafnarfjörður Municipality",
    "Háskóli Íslands",
    "Mosfellsbær Municipality",
    "Múlaþing",
    "Reykjanesbær",
  ]),
});

export const LEGACY_CONNECTOR_BLOCKED_SOURCES = Object.freeze([
  "Ríkiskaup / island.is procurement",
  "Borgarbyggð útboð",
  "Garðabær Municipality",
  "Ísafjarðarbær",
  "Vegagerðin",
]);

export function projectRefFromSupabaseUrl(value) {
  try {
    return new URL(String(value || "")).hostname.split(".")[0] || "";
  } catch {
    return "";
  }
}

export function resolveLegacyConnectorAutomationBatch({ action, batchKey, supabaseUrl, isAutomation }) {
  if (action !== LEGACY_CONNECTOR_AUTOMATION_ACTION) return null;
  if (!isAutomation) throw new Error("LEGACY_CONNECTOR_AUTOMATION_SECRET_REQUIRED");
  if (projectRefFromSupabaseUrl(supabaseUrl) !== PRODUCTION_PROJECT_REF) {
    throw new Error("LEGACY_CONNECTOR_AUTOMATION_PRODUCTION_ONLY");
  }
  const sourceNames = LEGACY_CONNECTOR_BATCHES[String(batchKey || "")];
  if (!sourceNames) throw new Error("LEGACY_CONNECTOR_AUTOMATION_BATCH_NOT_ALLOWED");
  return {
    batchKey: String(batchKey),
    sourceNames: [...sourceNames],
    limit: 20,
    maxSources: sourceNames.length,
    runMatching: false,
    runReports: false,
    runAi: false,
  };
}

export function filterLegacyAutomationConnectors(connectors, sourceNames) {
  const allowed = new Set(sourceNames);
  return connectors.filter((connector) => allowed.has(String(connector?.sources?.name || "")));
}
