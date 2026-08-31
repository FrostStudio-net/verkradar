function normalizeLocationAlias(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ð/g, "d")
    .replace(/þ/g, "th")
    .replace(/æ/g, "ae")
    .replace(/ö/g, "o")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const CAPITAL_AREA_EXACT_LOCATIONS = new Set([
  "reykjavik",
  "capital area",
  "hofudborgarsvaedid",
  "gardabaer",
]);

export function isExplicitLocationAliasMatch(selectedLocation, opportunityLocation) {
  const selected = normalizeLocationAlias(selectedLocation);
  const opportunity = normalizeLocationAlias(opportunityLocation);
  if (selected === "capital area") return CAPITAL_AREA_EXACT_LOCATIONS.has(opportunity);
  if (selected === "reykjavik") return ["reykjavik", "capital area", "hofudborgarsvaedid"].includes(opportunity);
  return false;
}
