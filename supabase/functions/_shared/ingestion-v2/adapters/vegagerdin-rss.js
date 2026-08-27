import { akranesRssAdapter } from "./akranes-rss.js";
export const vegagerdinRssAdapter = { ...akranesRssAdapter, parserName: "vegagerdin-rss", parse: akranesRssAdapter.parse };
