import { akranesRssAdapter } from "./akranes-rss.js";
export const isafjordurRssAdapter = { ...akranesRssAdapter, parserName: "isafjordur-rss", parse: akranesRssAdapter.parse };
