import { akranesRssAdapter } from "./akranes-rss.js";
import { extractProcurementReference } from "./procurement-metadata.js";

export const vegagerdinRssAdapter = {
  ...akranesRssAdapter,
  parserName: "vegagerdin-rss",
  parse(input) {
    return akranesRssAdapter.parse(input).map((row) => ({
      ...row,
      buyer: "Vegagerðin",
      location: null,
      procurement_reference: extractProcurementReference(`${row.title} ${row.description}`),
    }));
  },
};
