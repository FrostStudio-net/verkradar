import { akranesRssAdapter } from "./akranes-rss.js";
import { borgarbyggdWordpressAdapter } from "./borgarbyggd-wordpress.js";
import { gardabaerPageMonitorAdapter } from "./gardabaer-page-monitor.js";
import { rikiskaupWordpressAdapter } from "./rikiskaup-wordpress.js";
import { vegagerdinRssAdapter } from "./vegagerdin-rss.js";
import { isafjordurRssAdapter } from "./isafjordur-rss.js";
import { reykjavikHtmlIndexAdapter } from "./reykjavik-html-index.js";
import { landsvirkjunHtmlIndexAdapter } from "./landsvirkjun-html-index.js";
import { landsnetHtmlIndexAdapter, orkuveitanHtmlIndexAdapter, veiturHtmlIndexAdapter } from "./utbodsvefur-buyers.js";

const ADAPTERS = new Map([
  [akranesRssAdapter.parserName, akranesRssAdapter],
  [borgarbyggdWordpressAdapter.parserName, borgarbyggdWordpressAdapter],
  [gardabaerPageMonitorAdapter.parserName, gardabaerPageMonitorAdapter],
  [rikiskaupWordpressAdapter.parserName, rikiskaupWordpressAdapter],
  [vegagerdinRssAdapter.parserName, vegagerdinRssAdapter],
  [isafjordurRssAdapter.parserName, isafjordurRssAdapter],
  [reykjavikHtmlIndexAdapter.parserName, reykjavikHtmlIndexAdapter],
  [landsvirkjunHtmlIndexAdapter.parserName, landsvirkjunHtmlIndexAdapter],
  [landsnetHtmlIndexAdapter.parserName, landsnetHtmlIndexAdapter],
  [veiturHtmlIndexAdapter.parserName, veiturHtmlIndexAdapter],
  [orkuveitanHtmlIndexAdapter.parserName, orkuveitanHtmlIndexAdapter],
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
