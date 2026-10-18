export const MIN_NEW_PASSWORD_LENGTH = 8;

const TURNSTILE_SCRIPT_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let captchaToken = "";
let captchaWidgetId = null;
let turnstileScriptPromise = null;

function isEnabledValue(value) {
  return ["1", "true", "yes", "on"].includes(String(value || "").trim().toLowerCase());
}

export function getAuthCaptchaConfig({ runtimeConfig = {}, env = {} } = {}) {
  const featureFlag = runtimeConfig.VERKRADAR_AUTH_CAPTCHA_ENABLED
    ?? env.VITE_AUTH_CAPTCHA_ENABLED;
  const siteKey = String(
    runtimeConfig.VERKRADAR_TURNSTILE_SITE_KEY
      ?? env.VITE_TURNSTILE_SITE_KEY
      ?? ""
  ).trim();

  return {
    enabled: isEnabledValue(featureFlag) && Boolean(siteKey),
    siteKey,
    provider: "turnstile",
  };
}

export function getCurrentAuthCaptchaConfig() {
  return getAuthCaptchaConfig({
    runtimeConfig: typeof window === "undefined" ? {} : window,
    env: import.meta.env || {},
  });
}

export function isValidNewPassword(password) {
  return String(password || "").length >= MIN_NEW_PASSWORD_LENGTH;
}

export function addCaptchaToken(options = {}, token = "", config = getCurrentAuthCaptchaConfig()) {
  if (!config.enabled) return { ...options };
  return { ...options, captchaToken: String(token || "") };
}

export function renderAuthCaptchaSlot({ enabled, label, helpText }) {
  if (!enabled) return "";
  return `
    <div class="auth-captcha" data-auth-captcha>
      <div data-auth-captcha-widget aria-label="${label}" role="group"></div>
      <p class="auth-captcha-help" data-auth-captcha-status aria-live="polite">${helpText}</p>
    </div>
  `;
}

function clearMountedWidget({ remove = false } = {}) {
  if (captchaWidgetId === null || typeof window === "undefined" || !window.turnstile) {
    captchaWidgetId = null;
    return;
  }
  try {
    if (remove && typeof window.turnstile.remove === "function") {
      window.turnstile.remove(captchaWidgetId);
    } else {
      window.turnstile.reset(captchaWidgetId);
    }
  } catch {
    // The SPA may already have replaced the widget container.
  }
  captchaWidgetId = null;
}

export function consumeAuthCaptchaToken(config = getCurrentAuthCaptchaConfig()) {
  if (!config.enabled) return { ok: true, token: "" };
  if (!captchaToken) return { ok: false, token: "" };

  const token = captchaToken;
  captchaToken = "";
  clearMountedWidget({ remove: true });
  return { ok: true, token };
}

export function resetAuthCaptcha() {
  captchaToken = "";
  clearMountedWidget();
}

function loadTurnstileScript(documentTarget) {
  if (typeof window !== "undefined" && window.turnstile) return Promise.resolve(window.turnstile);
  if (turnstileScriptPromise) return turnstileScriptPromise;

  turnstileScriptPromise = new Promise((resolve, reject) => {
    const existing = documentTarget.querySelector(`script[src="${TURNSTILE_SCRIPT_URL}"]`);
    const script = existing || documentTarget.createElement("script");
    const handleLoad = () => window.turnstile ? resolve(window.turnstile) : reject(new Error("Turnstile did not initialize."));
    const handleError = () => reject(new Error("Turnstile could not be loaded."));

    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });
    if (!existing) {
      script.src = TURNSTILE_SCRIPT_URL;
      script.async = true;
      script.defer = true;
      documentTarget.head.appendChild(script);
    }
  }).catch((error) => {
    turnstileScriptPromise = null;
    throw error;
  });

  return turnstileScriptPromise;
}

function setCaptchaStatus(container, message) {
  const status = container?.querySelector?.("[data-auth-captcha-status]");
  if (status) status.textContent = message;
}

export async function mountAuthCaptcha({ language = "is", expiredMessage = "", unavailableMessage = "" } = {}) {
  const config = getCurrentAuthCaptchaConfig();
  if (!config.enabled || typeof document === "undefined" || typeof window === "undefined") return false;
  if (!document.querySelector("[data-auth-captcha]")) return false;

  try {
    const turnstile = await loadTurnstileScript(document);
    const container = document.querySelector("[data-auth-captcha]");
    const widget = container?.querySelector?.("[data-auth-captcha-widget]");
    if (!container || !widget || widget.dataset.captchaMounted === "true") return false;

    clearMountedWidget({ remove: true });
    captchaToken = "";
    widget.dataset.captchaMounted = "true";
    captchaWidgetId = turnstile.render(widget, {
      sitekey: config.siteKey,
      theme: "dark",
      size: container.clientWidth > 0 && container.clientWidth < 300 ? "compact" : "flexible",
      language: language === "en" ? "en" : "auto",
      callback(token) {
        captchaToken = String(token || "");
        setCaptchaStatus(container, "");
      },
      "expired-callback"() {
        captchaToken = "";
        setCaptchaStatus(container, expiredMessage);
      },
      "error-callback"() {
        captchaToken = "";
        setCaptchaStatus(container, unavailableMessage);
      },
      "timeout-callback"() {
        captchaToken = "";
        setCaptchaStatus(container, expiredMessage);
      },
    });
    return true;
  } catch {
    const container = document.querySelector("[data-auth-captcha]");
    setCaptchaStatus(container, unavailableMessage);
    return false;
  }
}
