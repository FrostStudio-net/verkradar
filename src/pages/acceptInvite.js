export function renderAcceptInvitePage(options) {
  const {
    escapeHtml,
    invite = null,
    loading = false,
    error = "",
    debugInfo = null,
    showDebug = false,
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
  const alreadyHaveAccount = isIs ? "Ertu þegar með aðgang?" : "Already have an account?";
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
            ${showDebug && debugInfo ? renderInviteDebug(debugInfo, escapeHtml) : ""}
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
                </div>
                <p class="auth-switch">${escapeHtml(alreadyHaveAccount)} <button type="button" data-action="go" data-href="${escapeHtml(loginHref)}">${escapeHtml(loginLabel)}</button></p>
              `}
            ` : ""}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderInviteDebug(debugInfo, escapeHtml) {
  const groups = [
    {
      title: "Route/token",
      fields: [
        "current_url",
        "current_hash",
        "token_source",
        "token_present",
        "token_length",
        "localStorage_pending_token_present",
        "sessionStorage_pending_token_present",
        "auth_flow",
        "raw_token_had_fragment",
        "sanitized_token_length",
        "code_present",
        "exchange_code_attempted",
        "exchange_code_succeeded",
        "session_present",
        "auth_callback_error",
      ],
    },
    {
      title: "Auth",
      fields: [
        "auth_session_present",
        "auth_user_id_present",
        "auth_user_email",
        "email_confirmed_at_present",
        "auth_event_received",
        "access_token_present",
      ],
    },
    {
      title: "Preview",
      fields: [
        "preview_request_sent",
        "preview_status",
        "preview_response_body",
      ],
    },
    {
      title: "Accept",
      fields: [
        "accept_request_sent",
        "authorization_header_included",
        "accept_http_status",
        "accept_response_body",
        "accept_error_reason",
      ],
    },
    {
      title: "Backend lookup",
      fields: [
        "action",
        "token_received",
        "token_length",
        "computed_hash_prefix",
        "lookup_found",
        "matching_rows_count",
        "invite_status",
        "invite_expires_at",
        "latest_invite_status",
        "latest_invite_expires_at",
        "invited_email",
        "auth_user_id_present",
        "auth_user_email",
        "email_match",
        "authorization_header_present",
        "invalid_reason",
        "update_attempted",
        "update_succeeded",
      ],
    },
  ];

  return `
    <details class="admin-invite-debug">
      <summary>Invite diagnostics</summary>
      ${groups.map((group) => `
        <div class="admin-invite-debug-group">
          <strong>${escapeHtml(group.title)}</strong>
          ${group.fields.map((field) => renderDebugField(field, debugInfo[field], escapeHtml)).join("")}
        </div>
      `).join("")}
    </details>
  `;
}

function renderDebugField(label, value, escapeHtml) {
  const formatted = typeof value === "object" && value !== null
    ? JSON.stringify(value, null, 2)
    : String(value ?? "");
  return `
    <div class="admin-invite-debug-row">
      <span>${escapeHtml(label)}</span>
      <code>${escapeHtml(formatted || "—")}</code>
    </div>
  `;
}
