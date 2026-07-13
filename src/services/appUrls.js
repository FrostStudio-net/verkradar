export const PRODUCTION_APP_ORIGIN = "https://verkradar.is";

export function getAppOrigin() {
  if (typeof window === "undefined") return PRODUCTION_APP_ORIGIN;
  const override = normalizeOrigin(window.VERKRADAR_APP_URL);
  if (override) return override;
  const origin = window.location?.origin || PRODUCTION_APP_ORIGIN;
  const hostname = window.location?.hostname || "";
  if (isLocalHost(hostname)) return origin;
  if (hostname === "verkradar.is" || hostname === "www.verkradar.is") return PRODUCTION_APP_ORIGIN;
  if (hostname.endsWith(".vercel.app")) return PRODUCTION_APP_ORIGIN;
  return origin;
}

export function getAppUrl(path = "/") {
  const normalizedPath = String(path || "/").startsWith("/") ? String(path || "/") : `/${path}`;
  return `${getAppOrigin()}${normalizedPath}`;
}

export function getAppHashUrl(route = "/") {
  const normalizedRoute = String(route || "/").startsWith("/") ? String(route || "/") : `/${route}`;
  return `${getAppOrigin()}/#${normalizedRoute}`;
}

function normalizeOrigin(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  try {
    return new URL(raw).origin;
  } catch {
    return "";
  }
}

function isLocalHost(hostname) {
  return ["localhost", "127.0.0.1", "::1"].includes(String(hostname || "").toLowerCase());
}
