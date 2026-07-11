function renderAuthFormMessage({ authMessage, escapeHtml }) {
  if (!authMessage) return "";
  const actions = Array.isArray(authMessage.actions) ? authMessage.actions : [];
  return `
    <div class="admin-message ${authMessage.type === "error" ? "is-error" : "is-success"}">
      <span>${escapeHtml(authMessage.text)}</span>
      ${actions.length ? `
        <div class="auth-message-actions">
          ${actions.map((action) => `
            <button type="button" class="btn btn-${action.variant === "primary" ? "primary" : "secondary"}" data-action="go" data-href="${escapeHtml(action.href)}">
              ${escapeHtml(action.label)}
            </button>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

export function renderLoginPage({ t, escapeHtml, authForm, authSubmitting, authMessage, signupHref = "/signup", signupLabel = "", forgotPasswordHref = "/forgot-password" }) {
  const secondaryCta = signupLabel || t("createAccount");
  return `
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${escapeHtml(t("login"))}</p>
          <h1>${escapeHtml(t("authLoginTitle"))}</h1>
          <p>${escapeHtml(t("authLoginSubtitle"))}</p>
        </div>

        <div class="auth-form-column">
          ${renderAuthFormMessage({ authMessage, escapeHtml })}
          <form id="login-form" class="auth-card">
            <label class="form-group">${escapeHtml(t("email"))} <input type="email" name="email" data-auth-field="email" value="${escapeHtml(authForm.email)}" autocomplete="email" required /></label>
            <label class="form-group">${escapeHtml(t("password"))} <input type="password" name="password" data-auth-field="password" value="${escapeHtml(authForm.password)}" autocomplete="current-password" required /></label>
            <p class="auth-help-link"><button type="button" data-action="go" data-href="${escapeHtml(forgotPasswordHref)}">${escapeHtml(t("forgotPassword"))}</button></p>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${authSubmitting ? "disabled" : ""}>
                ${authSubmitting ? escapeHtml(t("loggingIn")) : escapeHtml(t("login"))}
              </button>
            </div>
            <p class="auth-switch">${escapeHtml(t("newToVerkRadar"))} <button type="button" data-action="go" data-href="${escapeHtml(signupHref)}">${escapeHtml(secondaryCta)}</button></p>
          </form>
        </div>
      </div>
    </section>
  `;
}

export function renderForgotPasswordPage({ t, escapeHtml, authForm, authSubmitting, authMessage }) {
  return `
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${escapeHtml(t("passwordReset"))}</p>
          <h1>${escapeHtml(t("resetPasswordTitle"))}</h1>
          <p>${escapeHtml(t("resetPasswordSubtitle"))}</p>
        </div>

        <div class="auth-form-column">
          ${renderAuthFormMessage({ authMessage, escapeHtml })}
          <form id="forgot-password-form" class="auth-card">
            <label class="form-group">${escapeHtml(t("email"))} <input type="email" name="email" data-auth-field="email" value="${escapeHtml(authForm.email)}" autocomplete="email" required /></label>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${authSubmitting ? "disabled" : ""}>
                ${authSubmitting ? escapeHtml(t("sending")) : escapeHtml(t("sendResetLink"))}
              </button>
            </div>
            <p class="auth-switch">${escapeHtml(t("rememberedPassword"))} <button type="button" data-action="go" data-href="/login">${escapeHtml(t("backToLogin"))}</button></p>
          </form>
        </div>
      </div>
    </section>
  `;
}

export function renderResetPasswordPage({ t, escapeHtml, authForm, authSubmitting, authMessage }) {
  return `
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${escapeHtml(t("newPassword"))}</p>
          <h1>${escapeHtml(t("chooseNewPassword"))}</h1>
          <p>${escapeHtml(t("resetPasswordHelp"))}</p>
        </div>

        <div class="auth-form-column">
          ${renderAuthFormMessage({ authMessage, escapeHtml })}
          <form id="reset-password-form" class="auth-card">
            <label class="form-group">${escapeHtml(t("newPassword"))} <input type="password" name="newPassword" data-auth-field="newPassword" value="${escapeHtml(authForm.newPassword)}" autocomplete="new-password" minlength="8" required /></label>
            <label class="form-group">${escapeHtml(t("confirmNewPassword"))} <input type="password" name="confirmPassword" data-auth-field="confirmPassword" value="${escapeHtml(authForm.confirmPassword)}" autocomplete="new-password" minlength="8" required /></label>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${authSubmitting ? "disabled" : ""}>
                ${authSubmitting ? escapeHtml(t("updating")) : escapeHtml(t("updatePassword"))}
              </button>
            </div>
            <p class="auth-switch">${escapeHtml(t("needNewLink"))} <button type="button" data-action="go" data-href="/forgot-password">${escapeHtml(t("sendAnotherResetLink"))}</button></p>
            <p class="auth-switch">${escapeHtml(t("backToLogin"))} <button type="button" data-action="go" data-href="/login">${escapeHtml(t("login"))}</button></p>
          </form>
        </div>
      </div>
    </section>
  `;
}

export function renderSignupPage({ t, escapeHtml, authForm, authSubmitting, authMessage, loginHref = "/login", inviteEmail = "", isInviteSignup = false }) {
  const emailValue = inviteEmail || authForm.email;
  const subtitle = isInviteSignup ? t("inviteCreateAccountSubtitle") : t("createAccountSubtitle");
  return `
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${escapeHtml(t("createAccount"))}</p>
          <h1>${escapeHtml(t("createAccountTitle"))}</h1>
          <p>${escapeHtml(subtitle)}</p>
        </div>

        <div class="auth-form-column">
          ${renderAuthFormMessage({ authMessage, escapeHtml })}
          <form id="signup-form" class="auth-card">
            <label class="form-group">${escapeHtml(t("email"))} <input type="email" name="email" data-auth-field="email" value="${escapeHtml(emailValue)}" autocomplete="email" ${isInviteSignup ? "readonly" : ""} required /></label>
            <label class="form-group">${escapeHtml(t("password"))} <input type="password" name="password" data-auth-field="password" value="${escapeHtml(authForm.password)}" autocomplete="new-password" minlength="6" required /></label>
            ${isInviteSignup ? `<p class="muted-text">${escapeHtml(t("inviteSignupEmailHelp"))}</p>` : ""}
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${authSubmitting ? "disabled" : ""}>
                ${authSubmitting ? escapeHtml(t("creating")) : escapeHtml(t("createAccount"))}
              </button>
            </div>
            <p class="auth-switch">${escapeHtml(t("alreadyHaveAccount"))} <button type="button" data-action="go" data-href="${escapeHtml(loginHref)}">${escapeHtml(t("login"))}</button></p>
          </form>
        </div>
      </div>
    </section>
  `;
}

export function renderPublicSignupUnavailablePage({ t, escapeHtml, trialHref = "/trial" }) {
  return `
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${escapeHtml(t("trialRequestEyebrow"))}</p>
          <h1>${escapeHtml(t("publicSignupUnavailableTitle"))}</h1>
          <p>${escapeHtml(t("publicSignupUnavailableText"))}</p>
        </div>
        <div class="auth-form-column">
          <div class="auth-card">
            <p>${escapeHtml(t("publicSignupUnavailableHelp"))}</p>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="button" data-action="go" data-href="${escapeHtml(trialHref)}">${escapeHtml(t("createFreeDemoProfile"))}</button>
              <button class="btn btn-secondary btn-large" type="button" data-action="go" data-href="/login">${escapeHtml(t("login"))}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
