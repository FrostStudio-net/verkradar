export function renderAcceptInvitePage(options) {
  const {
    escapeHtml,
    invite = null,
    loading = false,
    error = "",
    user = null,
    accepting = false,
    signupHref = "/signup",
    loginHref = "/login",
    language = "is",
  } = options;
  const isIs = language === "is";
  const title = isIs ? "Aðgangsboð í VerkRadar" : "VerkRadar invite";
  const loadingText = isIs ? "Sæki aðgangsboð..." : "Loading invite...";
  const companyLabel = isIs ? "Fyrirtæki" : "Company";
  const emailLabel = isIs ? "Boðið netfang" : "Invited email";
  const loginLabel = isIs ? "Innskráning" : "Login";
  const signupLabel = isIs ? "Stofna aðgang" : "Create account";
  const acceptLabel = isIs ? "Tengja aðgang" : "Accept invite";
  const goLoginLabel = isIs ? "Fara í innskráningu" : "Go to login";
  const goHomeLabel = isIs ? "Fara á forsíðu" : "Go to homepage";
  const helper = isIs
    ? "Aðgangsboðið tengir innskráninguna við fyrirtækjaprófíl sem hefur þegar verið settur upp."
    : "This invite connects your login to an existing company profile.";

  return `
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${escapeHtml(isIs ? "AÐGANGUR" : "ACCESS")}</p>
          <h1>${escapeHtml(title)}</h1>
          <p>${escapeHtml(helper)}</p>
        </div>
        <div class="auth-form-column">
          <div class="auth-card invite-card">
            ${loading ? `<p>${escapeHtml(loadingText)}</p>` : ""}
            ${error ? `<div class="admin-message is-error">${escapeHtml(error)}</div>` : ""}
            ${error && !invite ? `
              <div class="auth-actions">
                <button class="btn btn-primary btn-large" type="button" data-action="go" data-href="/login">${escapeHtml(goLoginLabel)}</button>
                <button class="btn btn-secondary btn-large" type="button" data-action="go" data-href="/">${escapeHtml(goHomeLabel)}</button>
              </div>
            ` : ""}
            ${invite ? `
              <div class="invite-summary">
                <p>${escapeHtml(isIs
                  ? `Þér hefur verið boðið að fá aðgang að ${invite.company_name || "fyrirtæki"}.`
                  : `You have been invited to access ${invite.company_name || "a company"}.`)}</p>
                <p><strong>${escapeHtml(companyLabel)}:</strong> ${escapeHtml(invite.company_name || "")}</p>
                <p><strong>${escapeHtml(emailLabel)}:</strong> ${escapeHtml(invite.invited_email || invite.email || "")}</p>
                <p>${escapeHtml(isIs
                  ? `Skráðu þig inn eða stofnaðu aðgang með ${invite.invited_email || invite.email || "boðið netfang"} til að virkja aðganginn.`
                  : `Log in or create an account with ${invite.invited_email || invite.email || "the invited email"} to activate access.`)}</p>
              </div>
              ${user ? `
                <button class="btn btn-primary btn-large" type="button" data-action="accept-company-invite" ${accepting ? "disabled" : ""}>
                  ${escapeHtml(accepting ? (isIs ? "Tengi..." : "Accepting...") : acceptLabel)}
                </button>
              ` : `
                <div class="auth-actions">
                  <button class="btn btn-primary btn-large" type="button" data-action="go" data-href="${escapeHtml(signupHref)}">${escapeHtml(signupLabel)}</button>
                  <button class="btn btn-secondary btn-large" type="button" data-action="go" data-href="${escapeHtml(loginHref)}">${escapeHtml(loginLabel)}</button>
                </div>
              `}
            ` : ""}
          </div>
        </div>
      </div>
    </section>
  `;
}
