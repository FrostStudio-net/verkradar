import { parseWithV2Adapter } from "./adapters/index.js";
import { compareObservationToLegacy } from "./comparison.js";

// Read-only legacy-shaped normalization for same-window replay; production importer is untouched.
export async function compareSameWindow({ rssText, parserName = "akranes-rss", parserVersion = "1.0.0", legacyNormalize = (row) => ({ ...row, external_id: row.canonical_url || row.discovered_url }) }) {
  const v2 = parseWithV2Adapter(parserName, parserVersion, rssText);
  const legacy = v2.map(legacyNormalize);
  const results = [];
  for (const row of v2) results.push(await compareObservationToLegacy(row, legacy));
  return { raw_items: v2.length, legacy_candidates: legacy.length, v2_candidates: v2.length, results, legacy, v2 };
}
