const LOCATION_OPTIONS = [
  "Reykjavík",
  "Capital Area",
  "Suðurnes",
  "South Iceland",
  "West Iceland",
  "North Iceland",
  "East Iceland",
  "Westfjords",
  "All Iceland",
  "Remote / Online"
];

function renderProfileBasicsSection(ctx) {
  const { t, escapeHtml, profileDraft: p, renderCustomDropdown, getFilterOptions } = ctx;
  const selectedIndustry = p.industry || "";
  return `
    <div class="form-section">
      <h2>${escapeHtml(t("companyBasics"))}</h2>
      <div class="form-grid">
        <label>${escapeHtml(t("companyName"))}<input name="companyName" data-profile-field="companyName" value="${escapeHtml(p.companyName || "")}" required /></label>
        <label>${escapeHtml(t("kennitala"))}<input name="kennitala" data-profile-field="kennitala" value="${escapeHtml(p.kennitala || "")}" required /></label>
        <label>${escapeHtml(t("contactEmail"))}<input name="contactEmail" type="email" data-profile-field="contactEmail" value="${escapeHtml(p.contactEmail || "")}" required /></label>
        <label>${escapeHtml(t("billingEmail"))}<input name="billingEmail" type="email" data-profile-field="billingEmail" value="${escapeHtml(p.billingEmail || "")}" required /></label>
        <label>${escapeHtml(t("contactName"))}<input name="contactName" data-profile-field="contactName" value="${escapeHtml(p.contactName || "")}" required /></label>
        <label>${escapeHtml(t("phone"))}<input name="phone" data-profile-field="phone" value="${escapeHtml(p.phone || "")}" required /></label>
        <label>${escapeHtml(t("address"))}<input name="address" data-profile-field="address" value="${escapeHtml(p.address || "")}" required /></label>
        <label>${escapeHtml(t("website"))}<input name="website" data-profile-field="website" value="${escapeHtml(p.website || "")}" /></label>
        <label>${escapeHtml(t("selectedPlan"))}
          <select name="selectedPlan" data-profile-field="selectedPlan">
            ${["basic", "pro", "priority"].map((plan) => `<option value="${plan}" ${String(p.selectedPlan || "basic") === plan ? "selected" : ""}>${escapeHtml(t(`plan_${plan}`))}</option>`).join("")}
          </select>
        </label>
        <label class="custom-select-field">${escapeHtml(t("industry"))}
          <input id="industry-input" type="hidden" name="industry" value="${escapeHtml(selectedIndustry)}" required />
          ${renderCustomDropdown({
            key: "industry",
            value: selectedIndustry,
            options: getFilterOptions("industry"),
            profileField: "industry"
          })}
        </label>
      </div>
    </div>
  `;
}

function renderProfileServicesSection(ctx) {
  const { t, escapeHtml, profileDraft: p, arrayFieldText, getProfileSuggestions, renderSuggestionChips } = ctx;
  const selectedIndustry = p.industry || "";
  const serviceSuggestions = getProfileSuggestions("services", selectedIndustry);
  const keywordSuggestions = getProfileSuggestions("includeKeywords", selectedIndustry);
  return `
    <div class="form-section">
      <h2>${escapeHtml(t("servicesAndKeywords"))}</h2>
      <p class="form-section-hint">${escapeHtml(t("servicesHint"))}</p>
      <label>${escapeHtml(t("servicesLabel"))}
        <textarea name="services" data-profile-field="services" data-profile-array="true" rows="3">${escapeHtml(arrayFieldText(p.services))}</textarea>
      </label>
      <p class="field-helper">${escapeHtml(t("servicesHelper"))}</p>
      ${renderSuggestionChips({
        field: "services",
        title: selectedIndustry ? t("suggestedServicesFor", { industry: selectedIndustry }) : t("selectIndustryForServices"),
        values: serviceSuggestions,
        selectedValues: p.services || []
      })}
      <div class="form-grid keyword-grid">
        <label class="profile-keyword-field">${escapeHtml(t("extraWords"))}
          <input name="includeKeywords" data-profile-field="includeKeywords" data-profile-array="true" value="${escapeHtml(arrayFieldText(p.includeKeywords))}" />
          <span class="field-helper inline-helper">${escapeHtml(t("includeKeywordsHelper"))}</span>
        </label>
        <label class="profile-keyword-field">${escapeHtml(t("excludeWords"))}
          <input name="excludeKeywords" data-profile-field="excludeKeywords" data-profile-array="true" value="${escapeHtml(arrayFieldText(p.excludeKeywords))}" />
          <span class="field-helper inline-helper">${escapeHtml(t("excludeKeywordsHelper"))}</span>
        </label>
      </div>
      ${renderSuggestionChips({
        field: "includeKeywords",
        title: selectedIndustry ? t("suggestedKeywordsFor", { industry: selectedIndustry }) : t("selectIndustryForKeywords"),
        values: keywordSuggestions,
        selectedValues: p.includeKeywords || []
      })}
    </div>
  `;
}

function renderProfileLocationsSection(ctx) {
  const { t, escapeHtml, profileDraft: p, arrayFieldText, formatCustomerLocation } = ctx;
  return `
    <div class="form-section">
      <h2>${escapeHtml(t("locationsTitle"))}</h2>
      <p class="form-section-hint">${escapeHtml(t("locationsHint"))}</p>
      <div class="form-grid">
        <label>${escapeHtml(t("baseLocation"))}
          <input name="baseLocation" data-profile-field="baseLocation" value="${escapeHtml(p.baseLocation || "")}" placeholder="${escapeHtml(t("baseLocationPlaceholder"))}" />
        </label>
        <label>${escapeHtml(t("serviceAreas"))}
          <input name="serviceAreas" data-profile-field="serviceAreas" data-profile-array="true" value="${escapeHtml(arrayFieldText(p.serviceAreas))}" placeholder="${escapeHtml(t("serviceAreasPlaceholder"))}" />
        </label>
      </div>
      <div class="checkbox-grid">
        ${LOCATION_OPTIONS.map((loc) => `
          <label class="checkbox">
            <input type="checkbox" name="locations" value="${loc}" data-profile-location ${(p.locations || []).includes(loc) ? "checked" : ""} />
            <span>${escapeHtml(formatCustomerLocation(loc))}</span>
          </label>
        `).join("")}
      </div>
      <div class="profile-travel-panel">
        <h3>${escapeHtml(t("travelScope"))}</h3>
        <div class="profile-travel-grid">
          <label class="checkbox inline"><input type="checkbox" name="willingToTravel" data-profile-field="willingToTravel" ${p.willingToTravel ? "checked" : ""} /><span>${escapeHtml(t("willingToTravel"))}</span></label>
          <label class="checkbox inline"><input type="checkbox" name="nationalProjects" data-profile-field="nationalProjects" ${p.nationalProjects ? "checked" : ""} /><span>${escapeHtml(t("includeNational"))}</span></label>
          <label class="checkbox inline"><input type="checkbox" name="remoteProjects" data-profile-field="remoteProjects" ${p.remoteProjects ? "checked" : ""} /><span>${escapeHtml(t("includeRemote"))}</span></label>
          <label>${escapeHtml(t("minimumTravelValue"))}
            <input name="minimumProjectValueForTravel" type="number" data-profile-field="minimumProjectValueForTravel" data-profile-number="true" value="${p.minimumProjectValueForTravel || ""}" />
          </label>
        </div>
      </div>
    </div>
  `;
}

function renderProfileValueSection(ctx) {
  const { t, escapeHtml, profileDraft: p } = ctx;
  return `
    <div class="form-section">
      <h2>${escapeHtml(t("projectSize"))}</h2>
      <div class="form-grid">
        <label>${escapeHtml(t("minimumValue"))}<input name="minProjectValue" type="number" data-profile-field="minProjectValue" data-profile-number="true" value="${p.minProjectValue || ""}" /></label>
        <label>${escapeHtml(t("maximumValue"))}<input name="maxProjectValue" type="number" data-profile-field="maxProjectValue" data-profile-number="true" value="${p.maxProjectValue || ""}" /></label>
      </div>
      <label class="checkbox inline">
        <input type="checkbox" name="allowUnknownValue" data-profile-field="allowUnknownValue" ${p.allowUnknownValue ? "checked" : ""} />
        <span>${escapeHtml(t("showUnknownValue"))}</span>
      </label>
    </div>
  `;
}

function renderProfileReportsSection(ctx) {
  const { t, escapeHtml, capitalize, profileDraft: p } = ctx;
  return `
    <div class="form-section">
      <h2>${escapeHtml(t("reportPreferences"))}</h2>
      <div class="form-grid">
        <label>${escapeHtml(t("frequency"))}
          <select name="reportFrequency" data-profile-field="reportFrequency">
            <option ${p.reportFrequency === "weekly" ? "selected" : ""} value="weekly">${escapeHtml(t("weekly"))}</option>
            <option ${p.reportFrequency === "daily" ? "selected" : ""} value="daily">${escapeHtml(t("daily"))}</option>
          </select>
        </label>
        <label>${escapeHtml(t("reportDay"))}
          <select name="reportDay" data-profile-field="reportDay">
            ${["monday", "tuesday", "wednesday", "thursday", "friday"].map((x) => `<option ${p.reportDay === x ? "selected" : ""} value="${x}">${capitalize(x)}</option>`).join("")}
          </select>
        </label>
      </div>
      <label class="checkbox inline"><input type="checkbox" name="deadlineReminders" data-profile-field="deadlineReminders" ${p.deadlineReminders ? "checked" : ""} /><span>${escapeHtml(t("deadlineReminders"))}</span></label>
      <label class="checkbox inline"><input type="checkbox" name="includeLowConfidence" data-profile-field="includeLowConfidence" ${p.includeLowConfidence ? "checked" : ""} /><span>${escapeHtml(t("includeLowConfidence"))}</span></label>
    </div>
  `;
}

function renderProfileFormActions(ctx) {
  const { t, escapeHtml, hasProfile, isSavingProfile, profileSaved, profileSaveMessage, profileSaveError } = ctx;
  const submitLabel = hasProfile ? t("saveProfile") : t("createProfile");
  return `
    <div class="form-actions">
      <button
        type="submit"
        class="btn btn-primary btn-large"
        ${isSavingProfile ? "disabled" : ""}
      >
        ${isSavingProfile ? escapeHtml(t("saving")) : profileSaved ? escapeHtml(t("saved")) : escapeHtml(submitLabel)}
      </button>
    </div>
    ${profileSaveMessage ? `
      <div class="form-message success">
        ${escapeHtml(profileSaveMessage)}
      </div>
    ` : ""}
    ${profileSaveError ? `
      <div class="form-message error">
        ${escapeHtml(profileSaveError)}
      </div>
    ` : ""}
  `;
}

export function renderProfileFormPage(ctx) {
  return `
    <form id="profile-form" class="form-card settings-profile-form">
      ${renderProfileBasicsSection(ctx)}
      ${renderProfileServicesSection(ctx)}
      ${renderProfileLocationsSection(ctx)}
      ${renderProfileValueSection(ctx)}
      ${renderProfileReportsSection(ctx)}
      ${renderProfileFormActions(ctx)}
    </form>
  `;
}
