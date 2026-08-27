import { UTBODSVEFUR_BUYERS, landsvirkjunHtmlIndexAdapter, parseUtbodsvefurBuyerIndex } from "./utbodsvefur-buyers.js";

export { landsvirkjunHtmlIndexAdapter };
export { normalizeUtbodsvefurDetailUrl } from "./utbodsvefur-buyers.js";

export function parseLandsvirkjunIndex(html = "") {
  return parseUtbodsvefurBuyerIndex(html, UTBODSVEFUR_BUYERS.landsvirkjun);
}

export function getLandsvirkjunParserDiagnostics(rows) {
  return rows?.parserDiagnostics || null;
}
