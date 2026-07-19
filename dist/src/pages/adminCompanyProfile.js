const PLAN_OPTIONS = [
  ["basic", "Grunnur"],
  ["pro", "Pro"],
  ["priority", "Forgangur"]
];

const STATUS_OPTIONS = [
  ["trial", "Trial"],
  ["active", "Active"],
  ["paused", "Paused"],
  ["cancelled", "Cancelled"]
];

const FREQUENCY_OPTIONS = [
  ["weekly", "Vikulega"],
  ["daily", "Daglega"]
];

const DAY_OPTIONS = [
  ["monday", "Monday"],
  ["tuesday", "Tuesday"],
  ["wednesday", "Wednesday"],
  ["thursday", "Thursday"],
  ["friday", "Friday"]
];

export function renderAdminCompanyProfilePanel(company, options) {
  const { escapeHtml, actionState = "", lastResult = null, changes = [], formatDateTime = (value) => value || "" } = options;
  const saving = actionState === "profile_save";
  const refreshing = actionState === "profile_refresh";
  const busy = saving || refreshing;
  return `
    <section class="side-panel admin-company-profile-editor">
      <div class="admin-company-ai-header">
        <div>
          <h3>Vöktunarprófíll</h3>
          <p>Fullur admin-prófíll sem stjórnar leit, síun, samsvörun og tilkynningum.</p>
        </div>
      </div>
      <form data-admin-company-profile-form data-company-id="${escapeHtml(company.id)}">
        ${section("Grunnupplýsingar", `
          <div class="form-grid">
            ${input("Company name", "companyName", company.companyName, escapeHtml, true)}
            ${input("Kennitala", "kennitala", company.kennitala, escapeHtml)}
            ${input("Contact person", "contactName", company.contactName, escapeHtml)}
            ${input("Contact email", "contactEmail", company.contactEmail, escapeHtml, true, "email")}
            ${input("Notification email", "notificationEmail", company.notificationEmail || company.billingEmail || company.contactEmail, escapeHtml, false, "email")}
            ${input("Selected plan", "selectedPlan", company.selectedPlan || "basic", escapeHtml, false, "select", PLAN_OPTIONS)}
          </div>
        `)}
        ${section("Þjónusta og leitarorð", `
          ${textarea("Services", "services", company.services, escapeHtml)}
          ${textarea("Keywords", "includeKeywords", company.includeKeywords, escapeHtml)}
          ${textarea("Excluded keywords", "excludeKeywords", company.excludeKeywords, escapeHtml)}
          ${textarea("Core services", "coreServices", company.coreServices, escapeHtml)}
          ${textarea("Secondary services", "secondaryServices", company.secondaryServices, escapeHtml)}
          ${textarea("Excluded services", "excludedServices", company.excludedServices, escapeHtml)}
        `)}
        ${section("Svæði og tækifærategundir", `
          <div class="form-grid">
            ${input("Base location", "baseLocation", company.baseLocation, escapeHtml)}
            ${input("Operating areas / locations", "locations", company.locations, escapeHtml)}
          </div>
          ${textarea("Service areas", "serviceAreas", company.serviceAreas, escapeHtml)}
          ${textarea("Opportunity categories", "opportunityCategories", company.opportunityCategories, escapeHtml)}
          ${textarea("Opportunity types", "opportunityTypes", company.opportunityTypes || company.preferredProjectTypes, escapeHtml)}
          ${textarea("Preferred project types", "preferredProjectTypes", company.preferredProjectTypes, escapeHtml)}
          ${textarea("Excluded project types", "excludedProjectTypes", company.excludedProjectTypes, escapeHtml)}
          <label class="checkbox inline"><input type="checkbox" name="subcontractingRelevant" ${company.subcontractingRelevant ? "checked" : ""} /><span>Subcontracting opportunities are relevant</span></label>
        `)}
        ${section("Samsvörunarstillingar", `
          <div class="form-grid">
            ${input("Minimum relevance threshold", "minimumRelevanceThreshold", company.minimumRelevanceThreshold ?? 50, escapeHtml, false, "number")}
            ${input("Max travel distance (km)", "maxTravelDistanceKm", company.maxTravelDistanceKm, escapeHtml, false, "number")}
            ${input("Typical project size", "typicalProjectSize", company.typicalProjectSize, escapeHtml)}
          </div>
          ${textarea("Equipment", "equipment", company.equipment, escapeHtml)}
          ${textarea("Certifications", "certifications", company.certifications, escapeHtml)}
          ${textarea("Preferred buyers", "preferredBuyers", company.preferredBuyers, escapeHtml)}
          ${textarea("Notes for AI", "profileNotesForAi", company.profileNotesForAi, escapeHtml)}
        `)}
        ${section("Tilkynningar og staða", `
          <div class="form-grid">
            ${input("Notification frequency", "reportFrequency", company.reportFrequency || "weekly", escapeHtml, false, "select", FREQUENCY_OPTIONS)}
            ${input("Report day", "reportDay", company.reportDay || "monday", escapeHtml, false, "select", DAY_OPTIONS)}
            ${input("Trial / active / paused / cancelled status", "billingStatus", company.billingStatus || "trial", escapeHtml, false, "select", STATUS_OPTIONS)}
          </div>
          <label class="checkbox inline"><input type="checkbox" name="deadlineReminders" ${company.deadlineReminders ? "checked" : ""} /><span>Deadline reminders</span></label>
          <label class="checkbox inline"><input type="checkbox" name="includeLowConfidence" ${company.includeLowConfidence ? "checked" : ""} /><span>Include lower-confidence matches</span></label>
        `)}
        ${section("Innri athugasemdir", `
          <label>Internal admin notes
            <textarea name="internalAdminNotes" rows="5" placeholder="Only interested in Reykjavík projects\nDoes not want equipment purchases\nOpen to larger projects as subcontractor">${escapeHtml(company.internalAdminNotes || "")}</textarea>
          </label>
        `)}
        <div class="admin-profile-actions">
          <button class="btn btn-secondary" type="submit" data-admin-profile-submit="save" ${busy ? "disabled" : ""}>${saving ? "Vista..." : "Vista breytingar"}</button>
          <button class="btn btn-primary" type="submit" data-admin-profile-submit="refresh" ${busy ? "disabled" : ""}>${refreshing ? "Vista og endurreikna..." : "Vista og endurreikna samsvaranir"}</button>
        </div>
        ${lastResult ? renderRefreshResult(lastResult, escapeHtml) : ""}
      </form>
      ${renderAdminCompanyProfileHistory(changes, { escapeHtml, formatDateTime })}
    </section>
  `;
}

export function renderAdminCompanyProfileHistory(changes, options) {
  const { escapeHtml, formatDateTime } = options;
  const rows = Array.isArray(changes) ? changes.slice(0, 6) : [];
  return `
    <div class="admin-profile-history">
      <h3>Breytingasaga</h3>
      ${rows.length ? `
        <ul class="admin-detail-list">
          ${rows.map((row) => `
            <li>
              <strong>${escapeHtml(formatDateTime(row.changed_at))}</strong>
              <span>${escapeHtml(row.changed_by_email || "Admin")} · ${escapeHtml((row.changed_fields || []).join(", ") || "Profile updated")}</span>
            </li>
          `).join("")}
        </ul>
      ` : `<p>No profile changes logged yet.</p>`}
    </div>
  `;
}

function section(title, body) {
  return `<div class="admin-profile-group"><h4>${title}</h4>${body}</div>`;
}

function input(label, name, value, escapeHtml, required = false, type = "text", options = []) {
  if (Array.isArray(value)) value = value.join(", ");
  if (type === "select") {
    return `<label>${escapeHtml(label)}<select name="${escapeHtml(name)}">${options.map(([optionValue, optionLabel]) => `<option value="${escapeHtml(optionValue)}" ${String(value || "") === optionValue ? "selected" : ""}>${escapeHtml(optionLabel)}</option>`).join("")}</select></label>`;
  }
  return `<label>${escapeHtml(label)}<input name="${escapeHtml(name)}" type="${escapeHtml(type)}" value="${escapeHtml(value ?? "")}" ${required ? "required" : ""} /></label>`;
}

function textarea(label, name, value, escapeHtml) {
  const text = Array.isArray(value) ? value.join(", ") : String(value || "");
  return `<label>${escapeHtml(label)}<textarea name="${escapeHtml(name)}" rows="2">${escapeHtml(text)}</textarea></label>`;
}

function renderRefreshResult(result, escapeHtml) {
  if (!result?.refresh) return "";
  const refresh = result.refresh;
  return `
    <div class="form-message success">
      ${escapeHtml(`Samsvaranir endurreiknaðar: ${Number(refresh.matches_refreshed || 0)} alls, ${Number(refresh.matches_created || 0)} nýjar, ${Number(refresh.matches_updated || 0)} uppfærðar, ${Number(refresh.matches_removed || 0)} fjarlægðar.`)}
    </div>
  `;
}
