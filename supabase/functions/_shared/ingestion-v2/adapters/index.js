import { akranesRssAdapter } from "./akranes-rss.js";
import { borgarbyggdWordpressAdapter } from "./borgarbyggd-wordpress.js";
import { gardabaerPageMonitorAdapter } from "./gardabaer-page-monitor.js";

const ADAPTERS = new Map([
  [akranesRssAdapter.parserName, akranesRssAdapter],
  [borgarbyggdWordpressAdapter.parserName, borgarbyggdWordpressAdapter],
  [gardabaerPageMonitorAdapter.parserName, gardabaerPageMonitorAdapter],
]);

export function getV2Adapter(parserName, parserVersion) {
  const adapter = ADAPTERS.get(String(parserName || ""));
  if (!adapter) throw deterministicAdapterError(`Unsupported V2 parser: ${parserName}`, "V2_ADAPTER_UNSUPPORTED");
  if (parserVersion && adapter.parserVersion !== parserVersion) {
    throw deterministicAdapterError(`Parser version mismatch for ${parserName}`, "V2_ADAPTER_VERSION_MISMATCH");
  }
  return adapter;
}

export function parseWithV2Adapter(parserName, parserVersion, input) {
  const result = getV2Adapter(parserName, parserVersion).parse(input);
  if (!Array.isArray(result)) throw deterministicAdapterError("Adapter result must be an array", "V2_PARSER_RESULT_INVALID");
  return result;
}

function deterministicAdapterError(message, code) {
  const error = new Error(message);
  error.code = code;
  error.retryable = false;
  return error;
}
