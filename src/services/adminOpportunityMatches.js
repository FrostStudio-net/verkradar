export function getStoredMatchedCompanyNames(matchRows) {
  const uniqueNames = new Map();

  for (const match of Array.isArray(matchRows) ? matchRows : []) {
    const relatedCompanies = Array.isArray(match?.companies)
      ? match.companies
      : [match?.companies];

    for (const company of relatedCompanies) {
      const name = String(company?.company_name || "").trim();
      if (!name) continue;
      const normalizedName = name.toLocaleLowerCase();
      if (!uniqueNames.has(normalizedName)) uniqueNames.set(normalizedName, name);
    }
  }

  return [...uniqueNames.values()].sort((a, b) => a.localeCompare(b));
}
