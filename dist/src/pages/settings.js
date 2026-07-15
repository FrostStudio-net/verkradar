export function renderSettingsPage({
  t,
  escapeHtml,
  language,
  profileDraftDirty,
  profileLoadError,
  showTrialReset,
  profileFormHtml
}) {
  return `
    <section class="page-head">
      <p class="eyebrow">${escapeHtml(t("navSettings"))}</p>
      <h1>${escapeHtml(language === "is" ? "Breyta prófíl" : "Edit profile")}</h1>
      <p>${escapeHtml(language === "is" ? "Uppfærið fyrirtækjaprófíl og samsvörunarstillingar." : "Update your company profile and matching preferences.")}</p>
      ${profileDraftDirty ? `<div class="form-message warning">${escapeHtml(language === "is" ? "Óvistaðar breytingar" : "Unsaved changes")}</div>` : ""}
      ${profileLoadError ? `
        <div class="form-message error">
          ${escapeHtml(profileLoadError)}
          <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">${escapeHtml(language === "is" ? "Reyna aftur" : "Retry")}</button>
        </div>
      ` : ""}
    </section>
    ${profileFormHtml}
    ${showTrialReset ? `<section class="danger-zone trial-reset-card">
      <h2>${escapeHtml(t("resetTrialTitle"))}</h2>
      <p>${escapeHtml(t("resetTrialText"))}</p>
      <button class="btn btn-ghost" data-action="reset-trial-data">${escapeHtml(t("resetTrialButton"))}</button>
    </section>` : ""}
  `;
}
