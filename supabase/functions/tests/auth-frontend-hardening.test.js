import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  addCaptchaToken,
  getAuthCaptchaConfig,
  isValidNewPassword,
  MIN_NEW_PASSWORD_LENGTH,
  renderAuthCaptchaSlot,
} from "../../../src/services/authSecurity.js";
import {
  renderForgotPasswordPage,
  renderLoginPage,
  renderSignupPage,
} from "../../../src/pages/auth.js";
import { translations } from "../../../src/i18n.js";

const root = new URL("../../../", import.meta.url);
const appSource = fs.readFileSync(new URL("app.js", root), "utf8");
const authPageSource = fs.readFileSync(new URL("src/pages/auth.js", root), "utf8");
const captchaSource = fs.readFileSync(new URL("src/services/authSecurity.js", root), "utf8");

const escapeHtml = (value) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");
const authForm = { email: "", password: "", newPassword: "", confirmPassword: "" };
const t = (key) => translations.en[key] || key;

test("new signup passwords require eight characters without complexity rules", () => {
  assert.equal(MIN_NEW_PASSWORD_LENGTH, 8);
  assert.equal(isValidNewPassword("1234567"), false);
  assert.equal(isValidNewPassword("12345678"), true);
  assert.equal(isValidNewPassword("abcdefgh"), true);
  assert.match(translations.is.passwordTooShort, /8/);
  assert.match(translations.en.passwordTooShort, /8/);

  const signup = renderSignupPage({ t, escapeHtml, authForm, authSubmitting: false, authMessage: null });
  assert.match(signup, /name="password"[^>]*minlength="8"/);
  const login = renderLoginPage({ t, escapeHtml, authForm, authSubmitting: false, authMessage: null });
  assert.doesNotMatch(login, /name="password"[^>]*minlength=/);
});

test("CAPTCHA stays invisible and tokens stay absent unless flag and site key are present", () => {
  const off = getAuthCaptchaConfig({
    runtimeConfig: {},
    env: { VITE_AUTH_CAPTCHA_ENABLED: "false", VITE_TURNSTILE_SITE_KEY: "public-key" },
  });
  const missingKey = getAuthCaptchaConfig({
    runtimeConfig: {},
    env: { VITE_AUTH_CAPTCHA_ENABLED: "true" },
  });
  const on = getAuthCaptchaConfig({
    runtimeConfig: {},
    env: { VITE_AUTH_CAPTCHA_ENABLED: "true", VITE_TURNSTILE_SITE_KEY: "public-key" },
  });

  assert.equal(off.enabled, false);
  assert.equal(missingKey.enabled, false);
  assert.equal(on.enabled, true);
  assert.deepEqual(addCaptchaToken({ redirectTo: "/reset" }, "token", off), { redirectTo: "/reset" });
  assert.deepEqual(addCaptchaToken({ redirectTo: "/reset" }, "token", on), {
    redirectTo: "/reset",
    captchaToken: "token",
  });
  assert.equal(renderAuthCaptchaSlot({ enabled: false, label: "Security", helpText: "Help" }), "");
});

test("signup, login and reset request share the optional CAPTCHA UI and Supabase token path", () => {
  const common = { t, escapeHtml, authForm, authSubmitting: false, authMessage: null, captchaEnabled: true };
  assert.match(renderSignupPage(common), /data-auth-captcha/);
  assert.match(renderLoginPage(common), /data-auth-captcha/);
  assert.match(renderForgotPasswordPage(common), /data-auth-captcha/);

  assert.match(appSource, /signUp\(form\.get\("email"\), password, captchaToken\)/);
  assert.match(appSource, /signIn\(form\.get\("email"\), form\.get\("password"\), captchaToken\)/);
  assert.match(appSource, /sendPasswordResetEmail\(form\.get\("email"\), captchaToken\)/);
  assert.match(appSource, /signUp\([\s\S]*options: addCaptchaToken\(/);
  assert.match(appSource, /signInWithPassword\(credentials\)/);
  assert.match(appSource, /resetPasswordForEmail\([\s\S]*addCaptchaToken\(/);
  assert.equal((appSource.match(/captchaEnabled: getCurrentAuthCaptchaConfig\(\)\.enabled && !state\.authSubmitting/g) || []).length, 3);
});

test("invite state is not cleared by CAPTCHA retry or reset paths", () => {
  const consumeHelper = appSource.match(/function consumeCaptchaForAuthSubmission\(\)[\s\S]*?\n}\n/)?.[0] || "";
  assert.match(consumeHelper, /captchaRequired/);
  assert.doesNotMatch(consumeHelper, /clearStoredPendingInviteToken|pendingInviteToken\s*=/);
  assert.doesNotMatch(captchaSource, /verkradar_pending_invite|clearStoredPendingInviteToken/);
  assert.match(appSource, /state\.pendingInviteToken \|\| getStoredPendingInviteToken\(\)/);
});

test("CAPTCHA markup is accessible and the CSP permits only the selected provider", () => {
  const slot = renderAuthCaptchaSlot({ enabled: true, label: "Security verification", helpText: "Confirm" });
  assert.match(slot, /role="group"/);
  assert.match(slot, /aria-label="Security verification"/);
  assert.match(slot, /aria-live="polite"/);
  assert.match(authPageSource, /captchaEnabled = false/);
  assert.match(captchaSource, /clientWidth < 300 \? "compact" : "flexible"/);

  const vercel = JSON.parse(fs.readFileSync(new URL("vercel.json", root), "utf8"));
  const csp = vercel.headers[0].headers.find((header) => header.key === "Content-Security-Policy")?.value || "";
  assert.match(csp, /script-src 'self' https:\/\/challenges\.cloudflare\.com/);
  assert.match(csp, /frame-src https:\/\/challenges\.cloudflare\.com/);
});
