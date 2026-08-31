import { akranesRssAdapter } from "./akranes-rss.js";
import { extractProcurementReference } from "./procurement-metadata.js";

export const isafjordurRssAdapter = {
  ...akranesRssAdapter,
  parserName: "isafjordur-rss",
  parserVersion: "1.1.0",
  parse(input) {
    return akranesRssAdapter.parse(input).map((row) => ({
      ...row,
      buyer: "Ísafjarðarbær",
      location: "Ísafjarðarbær",
      procurement_reference: extractProcurementReference(`${row.title} ${row.description}`),
    }));
  },
};
