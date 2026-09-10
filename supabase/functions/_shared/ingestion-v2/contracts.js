export const V2_SOURCE_MODES = Object.freeze(["disabled", "fixture_only", "shadow", "promote"]);
export const V2_VALIDATION_STATES = Object.freeze(["valid", "invalid", "quarantined"]);

export class V2ValidationError extends Error {
  constructor(message, errors = []) {
    super(message);
    this.name = "V2ValidationError";
    this.code = "V2_VALIDATION_ERROR";
    this.errors = errors;
    this.retryable = false;
  }
}

export function normalizeIdentityText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[þÞ]/g, "t")
    .replace(/[ðÐ]/g, "d")
    .replace(/[æÆ]/g, "a")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function normalizeCanonicalUrl(value) {
  const input = String(value || "").trim();
  if (!input) return null;
  try {
    const url = new URL(input);
    url.hash = "";
    url.hostname = url.hostname.toLowerCase();
    url.pathname = url.pathname.replace(/\/+$/, "") || "/";
    return url.toString().replace(/\/$/, "").toLowerCase();
  } catch {
    return input.toLowerCase().split("#", 1)[0].replace(/\/+$/, "") || null;
  }
}

export function stableStringify(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
  return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(",")}}`;
}

export async function sha256Hex(value) {
  const bytes = new TextEncoder().encode(String(value));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function buildIdentityFingerprint(candidate) {
  const input = [
    normalizeIdentityText(candidate.buyer),
    normalizeIdentityText(candidate.title),
    normalizeDate(candidate.deadline) || "",
    normalizeIdentityText(candidate.procurement_reference),
  ].join("|");
  return sha256Hex(input);
}

export async function buildContentHash(candidate) {
  return sha256Hex(stableStringify({
    source_key: clean(candidate.source_key),
    external_id: clean(candidate.external_id),
    procurement_reference: clean(candidate.procurement_reference),
    canonical_url: normalizeCanonicalUrl(candidate.canonical_url || candidate.discovered_url),
    title: clean(candidate.title),
    description: clean(candidate.description),
    buyer: clean(candidate.buyer),
    deadline: normalizeDate(candidate.deadline),
    publication_date: normalizeDate(candidate.publication_date),
    location: clean(candidate.location),
    safe_source_payload: sanitizeSafePayload(candidate.safe_source_payload),
  }));
}

export async function createObservation(candidate, context) {
  const validationErrors = validateCandidate(candidate);
  const canonicalUrl = clean(candidate.canonical_url) || clean(candidate.discovered_url) || null;
  const observation = {
    run_id: context.run_id,
    source_config_id: context.source_config_id,
    source_id: context.source_id || null,
    source_key: clean(context.source_key),
    source_name: clean(context.source_name),
    external_id: clean(candidate.external_id),
    procurement_reference: clean(candidate.procurement_reference) || null,
    discovered_url: clean(candidate.discovered_url) || null,
    canonical_url: canonicalUrl,
    normalized_canonical_url: normalizeCanonicalUrl(canonicalUrl),
    title: clean(candidate.title),
    description: clean(candidate.description) || null,
    buyer: clean(candidate.buyer) || null,
    deadline: normalizeDate(candidate.deadline),
    publication_date: normalizeDate(candidate.publication_date),
    location: clean(candidate.location) || null,
    safe_source_payload: sanitizeSafePayload(candidate.safe_source_payload),
    parser_name: clean(context.parser_name),
    parser_version: clean(context.parser_version),
    fetched_at: normalizeTimestamp(context.fetched_at || new Date().toISOString()),
    source_published_at: normalizeTimestamp(candidate.source_published_at, true),
    validation_state: validationErrors.length ? "invalid" : "valid",
    validation_errors: validationErrors,
    fetch_metadata: sanitizeSafePayload(context.fetch_metadata),
    comparison_state: "not_compared",
    promotion_state: "not_eligible",
  };
  observation.identity_fingerprint = await buildIdentityFingerprint(observation);
  observation.content_hash = await buildContentHash(observation);
  return observation;
}

export function assertValidObservation(observation) {
  if (!observation || observation.validation_state !== "valid") {
    throw new V2ValidationError("Observation is not valid", observation?.validation_errors || []);
  }
  return observation;
}

export function validateCandidate(candidate) {
  const errors = Array.isArray(candidate?.validation_errors)
    ? candidate.validation_errors.map((value) => String(value || "").trim()).filter(Boolean)
    : [];
  if (!clean(candidate?.external_id)) errors.push("external_id_required");
  if (!clean(candidate?.title)) errors.push("title_required");
  if (!clean(candidate?.discovered_url) && !clean(candidate?.canonical_url)) errors.push("source_url_required");
  if (candidate?.deadline && !normalizeDate(candidate.deadline)) errors.push("deadline_invalid");
  if (candidate?.publication_date && !normalizeDate(candidate.publication_date)) errors.push("publication_date_invalid");
  return errors;
}

export function sanitizeSafePayload(value) {
  if (!value || typeof value !== "object") return {};
  const blocked = /token|secret|password|authorization|cookie|api[_-]?key/i;
  const visit = (input) => {
    if (Array.isArray(input)) return input.slice(0, 100).map(visit);
    if (!input || typeof input !== "object") return typeof input === "string" ? input.slice(0, 20000) : input;
    return Object.fromEntries(Object.entries(input)
      .filter(([key]) => !blocked.test(key))
      .slice(0, 100)
      .map(([key, child]) => [key, visit(child)]));
  };
  return visit(value);
}

function clean(value) {
  return String(value ?? "").trim();
}

function normalizeDate(value) {
  if (!value) return null;
  const match = String(value).trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return null;
  const date = new Date(`${match[1]}-${match[2]}-${match[3]}T00:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== `${match[1]}-${match[2]}-${match[3]}`) return null;
  return date.toISOString().slice(0, 10);
}

function normalizeTimestamp(value, nullable = false) {
  if (!value) return nullable ? null : new Date().toISOString();
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? (nullable ? null : new Date().toISOString()) : date.toISOString();
}
