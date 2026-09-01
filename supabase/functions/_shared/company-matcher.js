import { isExplicitLocationAliasMatch } from "./location-aliases.js";

export const COMPANY_MATCH_THRESHOLD = 50;

const CIVIL_STRONG_SERVICE_TERMS = [
  "jarðvinna", "gatnagerð", "gatna- og stígagerð", "gatna og stígagerð", "stígagerð",
  "lóðarframkvæmdir", "lagnavinna", "lagnir", "fráveita", "fráveitulagnir", "vatnsveita",
  "hitaveita", "vatnslagnir", "regnvatnslagnir", "drenlagnir", "endurnýjun lagna", "brunnar",
  "dælubrunnar", "malbikun", "gangstétt", "gangstéttir", "stígar", "bílastæði", "vegagerð",
  "gröftur", "fyllingar", "grjóthleðsla", "jarðvegsskipti", "undirbygging",
  "yfirborðsfrágangur", "hellulögn", "hellulagnir", "kantsteinn", "kantsteinar", "landmótun",
  "afvötnun", "jarðvegsvinna", "útiframkvæmdir", "gatnaframkvæmdir",
];

const CIVIL_OPTIONAL_WINTER_SERVICE_TERMS = [
  "snjómokstur", "snjóruðningur", "hálkuvarnir", "vetrarþjónusta", "gangstéttir", "stofnanalóðir",
];

const CIVIL_WEAK_GENERIC_TERMS = [
  "framkvæmdir", "framkvæmd", "útboð", "verðfyrirspurn", "tilboð", "viðhald", "verktaki", "verk",
];

const CIVIL_INDOOR_DOWNGRADE_TERMS = [
  "innanhússfrágangur", "innanhúss", "smíði", "smíðavinna", "málun", "gólfefni", "innréttingar",
  "raflagnir", "pípulagnir", "leikskóli", "skóli", "húsnæði", "byggingarvinna",
];

const CIVIL_INDOOR_ALLOWED_SERVICE_TERMS = [
  "innanhússfrágangur", "innanhúss", "smíði", "smíðavinna", "málun", "gólfefni", "innréttingar",
  "raflagnir", "pípulagnir", "byggingarvinna",
];

const CIVIL_CONSULTING_DOWNGRADE_TERMS = [
  "for- og verkhönnun", "verkhönnun", "forhönnun", "hönnun", "ráðgjöf", "verkfræðiráðgjöf",
  "eftirlit", "umsjón", "verkefnastjórn", "verkefnastjórnun",
];

const CIVIL_CONSULTING_ALLOWED_SERVICE_TERMS = [...CIVIL_CONSULTING_DOWNGRADE_TERMS];

const CIVIL_CORE_EXECUTION_PROFILE_TERMS = [
  "jarðvinna", "jarðvegsvinna", "gatnagerð", "gatna- og stígagerð", "stígagerð", "vegagerð",
  "lóðarframkvæmdir", "gröftur", "jarðvegsskipti", "fyllingar", "afvötnun", "landmótun",
  "yfirborðsfrágangur", "malbikun", "útiframkvæmdir",
];

function asArray(value) {
  return Array.isArray(value) ? value.map(String).filter(Boolean) : [];
}

function normalizeText(value) {
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

function normalizedIncludesAny(text, terms) {
  const normalized = normalizeText(text);
  return terms.some((term) => normalized.includes(normalizeText(term)));
}

function textIncludes(text, value) {
  const normalized = normalizeText(value);
  return Boolean(normalized && text.includes(normalized));
}

function opportunityField(opportunity, camel, snake) {
  return opportunity?.[camel] ?? opportunity?.[snake];
}

function rawPayload(opportunity) {
  const value = opportunityField(opportunity, "rawPayload", "raw_payload");
  return value && typeof value === "object" ? value : {};
}

function opportunityText(opportunity) {
  return normalizeText([
    opportunity?.title,
    opportunity?.description,
    opportunity?.category,
    opportunity?.location,
    ...asArray(opportunity?.keywords),
  ].filter(Boolean).join(" "));
}

function isCivilWeakGenericTerm(value) {
  const normalized = normalizeText(value);
  return CIVIL_WEAK_GENERIC_TERMS.some((term) => normalized === normalizeText(term));
}

function rankMatchTerm(value) {
  const normalized = normalizeText(value);
  if (CIVIL_STRONG_SERVICE_TERMS.some((term) => normalized === normalizeText(term))) return 0;
  if (CIVIL_STRONG_SERVICE_TERMS.some((term) => normalized.includes(normalizeText(term)) || normalizeText(term).includes(normalized))) return 1;
  if (CIVIL_OPTIONAL_WINTER_SERVICE_TERMS.some((term) => normalized === normalizeText(term))) return 2;
  if (isCivilWeakGenericTerm(value)) return 10;
  return 3;
}

function sortMatchTermsBySpecificity(values) {
  return [...values].sort((a, b) => rankMatchTerm(a) - rankMatchTerm(b) || b.length - a.length || a.localeCompare(b));
}

function profileText(profile) {
  return [profile?.industry, ...asArray(profile?.services), ...asArray(profile?.includeKeywords)].filter(Boolean).join(" ");
}

function hasExplicitProfileTerm(profile, terms) {
  return normalizedIncludesAny([...asArray(profile?.services), ...asArray(profile?.includeKeywords)].join(" "), terms);
}

function getCivilContractorFit(profile, opportunity, serviceHits, keywordHits) {
  const isCivilProfile = normalizedIncludesAny(profileText(profile), [
    ...CIVIL_STRONG_SERVICE_TERMS,
    ...CIVIL_OPTIONAL_WINTER_SERVICE_TERMS,
    "construction", "contractor", "verktaki", "mannvirki", "jarðtækni",
  ]);
  if (!isCivilProfile) {
    return {
      serviceHits,
      keywordHits,
      hasWeakOnlyFit: false,
      hasIndoorMismatch: false,
      hasConsultingMismatch: false,
      hasSecondaryOnlyFit: false,
      hasPromotedBroadFit: false,
      hasWinterOnlyFit: false,
    };
  }

  const text = opportunityText(opportunity);
  const hasStrongCivilTerm = normalizedIncludesAny(text, CIVIL_STRONG_SERVICE_TERMS);
  const hasWinterTerm = normalizedIncludesAny(text, CIVIL_OPTIONAL_WINTER_SERVICE_TERMS);
  const hasEligibleWinterTerm = hasWinterTerm && hasExplicitProfileTerm(profile, CIVIL_OPTIONAL_WINTER_SERVICE_TERMS);
  const hasIndoorTerm = normalizedIncludesAny(text, CIVIL_INDOOR_DOWNGRADE_TERMS);
  const hasConsultingTerm = normalizedIncludesAny(text, CIVIL_CONSULTING_DOWNGRADE_TERMS);
  const detectedStrongTerms = CIVIL_STRONG_SERVICE_TERMS.filter((term) => text.includes(normalizeText(term)));
  const detectedWinterTerms = hasEligibleWinterTerm
    ? CIVIL_OPTIONAL_WINTER_SERVICE_TERMS.filter((term) => text.includes(normalizeText(term)))
    : [];
  const hasAnySpecificHit = [...serviceHits, ...keywordHits].some((hit) => !isCivilWeakGenericTerm(hit));
  const hasWeakGenericHit = [...serviceHits, ...keywordHits].some(isCivilWeakGenericTerm);
  const shouldPromoteWeakTerms = !hasAnySpecificHit && hasWeakGenericHit && hasStrongCivilTerm;
  const expandedServiceHits = (shouldPromoteWeakTerms || hasEligibleWinterTerm)
    ? Array.from(new Set([...serviceHits, ...(shouldPromoteWeakTerms ? detectedStrongTerms : []), ...detectedWinterTerms]))
    : serviceHits;
  const shouldScoreWeakTerms = hasStrongCivilTerm || hasEligibleWinterTerm || hasAnySpecificHit;
  const promoteWeak = (hits) => shouldPromoteWeakTerms
    ? Array.from(new Set([...detectedStrongTerms, ...hits.filter((hit) => !isCivilWeakGenericTerm(hit))]))
    : hits.filter((hit) => !isCivilWeakGenericTerm(hit));
  const filteredServiceHits = shouldScoreWeakTerms ? promoteWeak(expandedServiceHits) : expandedServiceHits.filter((hit) => !isCivilWeakGenericTerm(hit));
  const filteredKeywordHits = shouldScoreWeakTerms ? promoteWeak(keywordHits) : keywordHits.filter((hit) => !isCivilWeakGenericTerm(hit));
  const specificHits = Array.from(new Set([...filteredServiceHits, ...filteredKeywordHits].filter((hit) => !isCivilWeakGenericTerm(hit))));

  return {
    serviceHits: sortMatchTermsBySpecificity(filteredServiceHits),
    keywordHits: sortMatchTermsBySpecificity(filteredKeywordHits),
    hasWeakOnlyFit: !hasStrongCivilTerm && !hasEligibleWinterTerm && !hasAnySpecificHit &&
      ((serviceHits.length > 0 && serviceHits.every(isCivilWeakGenericTerm)) || (keywordHits.length > 0 && keywordHits.every(isCivilWeakGenericTerm))),
    hasIndoorMismatch: hasIndoorTerm && !hasStrongCivilTerm && !hasExplicitProfileTerm(profile, CIVIL_INDOOR_ALLOWED_SERVICE_TERMS),
    hasConsultingMismatch: hasConsultingTerm && !hasExplicitProfileTerm(profile, CIVIL_CONSULTING_ALLOWED_SERVICE_TERMS),
    hasWinterOnlyFit: hasEligibleWinterTerm && !hasStrongCivilTerm,
    hasSecondaryOnlyFit: hasAnySpecificHit && !normalizedIncludesAny(profileText(profile), CIVIL_CORE_EXECUTION_PROFILE_TERMS) && specificHits.length <= 2 && detectedStrongTerms.length >= 3,
    hasPromotedBroadFit: shouldPromoteWeakTerms,
  };
}

function normalizeCountryCode(value) {
  const code = String(value || "").trim().toUpperCase();
  if (["IS", "ISL"].includes(code)) return "IS";
  if (["NO", "NOR"].includes(code)) return "NO";
  if (["DK", "DNK"].includes(code)) return "DK";
  if (["SE", "SWE"].includes(code)) return "SE";
  if (["FI", "FIN"].includes(code)) return "FI";
  return "";
}

function inferOpportunityLocationFromText(opportunity) {
  const payload = rawPayload(opportunity);
  const text = normalizeText([
    opportunity?.title, opportunity?.description, opportunity?.buyer, payload.buyer, payload.extracted_buyer,
    payload.source_name, payload.extracted_location, payload.location,
  ].filter(Boolean).join(" "));
  if (text.includes("reykjavik") || text.includes("reykjavikurborg") || text.includes("hofudborgarsvaedid")) {
    return "Reykjavík / Höfuðborgarsvæðið";
  }
  return "";
}

function getEffectiveOpportunityLocation(opportunity) {
  const raw = String(opportunity?.location || "").trim();
  const normalized = normalizeText(raw);
  if (raw && !["unknown", "all iceland", "iceland", "island"].includes(normalized)) return raw;
  return inferOpportunityLocationFromText(opportunity) || raw;
}

function getOpportunityCountryCode(opportunity) {
  const direct = normalizeCountryCode(opportunityField(opportunity, "countryCode", "country_code"));
  if (direct) return direct;
  const location = normalizeText(getEffectiveOpportunityLocation(opportunity));
  if (["iceland", "island", "reykjavik", "capital area", "hofudborgarsvaedid"].some((term) => location.includes(term))) return "IS";
  return "";
}

function localLocationMatches(profile, opportunity) {
  const selectedLocations = [
    ...asArray(profile?.locations),
    ...asArray(profile?.serviceAreas),
    profile?.baseLocation,
  ].filter(Boolean).map(normalizeText);
  if (!selectedLocations.length) return false;
  const opportunityLocation = normalizeText(getEffectiveOpportunityLocation(opportunity));
  if (selectedLocations.includes("all iceland")) return getOpportunityCountryCode(opportunity) === "IS" || opportunityLocation.includes("iceland") || opportunityLocation.includes("island");
  return selectedLocations.some((selected) => selected === opportunityLocation ||
    isExplicitLocationAliasMatch(selected, opportunityLocation) ||
    opportunityLocation.includes(selected) || selected.includes(opportunityLocation));
}

function isNationalOpportunity(opportunity) {
  const location = normalizeText(String(opportunity?.location || ""));
  if (["", "unknown", "all iceland", "iceland", "island"].includes(location) && inferOpportunityLocationFromText(opportunity)) return false;
  const text = normalizeText(`${opportunity?.title || ""} ${opportunity?.description || ""} ${opportunity?.location || ""}`);
  return ["all iceland", "iceland", "island", "national", "nationwide", "landsvist"].some((value) => text.includes(value));
}

function getLocationMatchCategory(profile, opportunity) {
  if (localLocationMatches(profile, opportunity)) return "local_match";
  const location = normalizeText(getEffectiveOpportunityLocation(opportunity));
  if (location.includes("remote") || location.includes("online")) return profile?.remoteProjects ? "remote_match" : "outside_area_low_confidence";
  if (isNationalOpportunity(opportunity) && getOpportunityCountryCode(opportunity) === "IS") return "national_match";
  if (getOpportunityCountryCode(opportunity) === "IS" && (profile?.nationalProjects || profile?.willingToTravel)) return "outside_area_possible";
  return "outside_area_low_confidence";
}

function daysUntilDeadline(value, referenceTime) {
  if (!value) return 9999;
  const date = new Date(`${String(value).slice(0, 10)}T23:59:59Z`);
  if (Number.isNaN(date.getTime())) return 9999;
  const now = referenceTime == null ? Date.now() : new Date(referenceTime).getTime();
  return Math.ceil((date.getTime() - now) / 86400000);
}

function getMatchLabel(score) {
  if (score >= 85) return "Strong match";
  if (score >= 65) return "Good match";
  if (score >= 45) return "Possible match";
  return "Weak match";
}

function getMissingDeadlineRisk(opportunity) {
  return String(rawPayload(opportunity).deadline_warning || "Deadline not available in imported data — verify on source page.");
}

export function calculateCompanyOpportunityMatch(profile, opportunity, options = {}) {
  if (!profile) {
    return { ...opportunity, matchScore: 0, match_score: 0, matchLabel: "Weak match", match_label: "Weak match", matchReasons: [], match_reasons: [], risks: [], nextSteps: [], next_steps: [], has_company_fit: false, location_category: "outside_area_low_confidence" };
  }

  const text = opportunityText(opportunity);
  let score = 0;
  const reasons = [];
  const risks = [];
  const industry = normalizeText(profile.industry);
  const category = normalizeText(opportunity?.category);
  const categoryMatch = Boolean(industry && category && (category.includes(industry) || industry.includes(category)));
  if (categoryMatch) {
    score += 35;
    reasons.push(`Matches your ${profile.industry} industry`);
  }

  const rawServiceHits = asArray(profile.services).filter((service) => textIncludes(text, service));
  const rawKeywordHits = asArray(profile.includeKeywords).filter((keyword) => textIncludes(text, keyword));
  const civilFit = getCivilContractorFit(profile, opportunity, rawServiceHits, rawKeywordHits);
  for (const service of civilFit.serviceHits) {
    score += 10;
    reasons.push(`Mentions your service: ${service}`);
  }
  for (const keyword of civilFit.keywordHits) {
    score += 8;
    reasons.push(`Contains your keyword: ${keyword}`);
  }

  const locationCategory = getLocationMatchCategory(profile, opportunity);
  if (locationCategory === "local_match") {
    score += 22;
    reasons.push("Local match");
  } else if (locationCategory === "national_match") {
    score += 16;
    reasons.push("National opportunity");
  } else if (locationCategory === "remote_match") {
    score += 14;
    reasons.push("Remote opportunity");
  } else if (locationCategory === "outside_area_possible") {
    const travelMinimum = Number(profile.minimumProjectValueForTravel || 0);
    const estimated = Number(opportunityField(opportunity, "estimatedValue", "estimated_value") || 0);
    const belowTravelMinimum = Boolean(travelMinimum && estimated && estimated < travelMinimum);
    score += belowTravelMinimum ? -4 : 4;
    reasons.push("Outside base area but travel allowed");
    risks.push(belowTravelMinimum ? "Outside base area and below your preferred travel project value" : "Check travel cost, project size and delivery capacity");
  } else {
    score -= 8;
    risks.push("Outside selected area; location match is low confidence");
  }

  if (civilFit.hasWinterOnlyFit && locationCategory === "local_match") {
    score += 12;
    reasons.push("Local winter service fit");
  }

  const estimatedValue = Number(opportunityField(opportunity, "estimatedValue", "estimated_value") || 0);
  const valueMatches = !estimatedValue
    ? Boolean(profile.allowUnknownValue)
    : !(profile.minProjectValue && estimatedValue < Number(profile.minProjectValue)) && !(profile.maxProjectValue && estimatedValue > Number(profile.maxProjectValue));
  if (valueMatches) {
    score += 10;
    if (estimatedValue) reasons.push("Project value is inside your preferred range");
  } else {
    score -= 25;
    risks.push("Estimated project value is outside your preferred range");
  }

  const deadline = String(opportunity?.deadline || "");
  if (!deadline) {
    risks.push(getMissingDeadlineRisk(opportunity));
  } else {
    const days = daysUntilDeadline(deadline, options.referenceTime);
    if (days >= 0 && days <= 30) {
      score += 8;
      reasons.push("Deadline is coming up soon");
    } else if (days < 0) {
      score -= 50;
      risks.push("Deadline has passed");
    }
  }

  const excluded = asArray(profile.excludeKeywords).filter((keyword) => textIncludes(text, keyword));
  if (excluded.length) {
    score -= Math.min(36, excluded.length * 18);
    for (const keyword of excluded.slice(0, 2)) risks.push(`Contains exclude keyword: ${keyword}`);
  }

  if (civilFit.hasWeakOnlyFit) {
    score = Math.min(score, 40);
    risks.push("Only broad construction/procurement terms matched; verify fit");
  }
  if (civilFit.hasIndoorMismatch) {
    score = Math.min(score - 20, 40);
    risks.push("Appears to be indoor/building finishing work outside your core civil services");
  }
  if (civilFit.hasConsultingMismatch) {
    score = Math.min(score - 30, 35);
    risks.push("Appears to be design, consulting, supervision, or project management work outside your execution services");
  }
  if (civilFit.hasSecondaryOnlyFit) {
    score = Math.min(score, 84);
    risks.push("Secondary service match in a broader infrastructure tender; verify scope");
  }
  if (civilFit.hasPromotedBroadFit) {
    score = Math.min(score, 72);
    risks.push("Broad construction terms matched; verify the specific work type");
  }
  if (civilFit.hasWinterOnlyFit) {
    score = Math.min(score, 68);
    risks.push("Winter/snow service fit; verify capacity and scope");
  }

  score = Math.max(0, Math.min(100, Math.round(score)));
  const matchLabel = getMatchLabel(score);
  const matchReasons = reasons.slice(0, 5);
  const uniqueRisks = Array.from(new Set(risks.filter(Boolean))).slice(0, 4);
  const nextSteps = [
    "Open the source documents",
    "Confirm mandatory requirements",
    "Check capacity and profitability",
    "Prepare questions before the deadline",
  ];
  return {
    ...opportunity,
    opportunity_id: opportunity?.id,
    matchScore: score,
    match_score: score,
    matchLabel,
    match_label: matchLabel,
    matchReasons,
    match_reasons: matchReasons,
    risks: uniqueRisks,
    nextSteps,
    next_steps: nextSteps,
    has_company_fit: categoryMatch || civilFit.serviceHits.length > 0 || civilFit.keywordHits.length > 0,
    location_category: locationCategory,
  };
}
