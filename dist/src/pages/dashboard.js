export function renderDashboardEmptyStatePage({
  copy,
  suggestions,
  labels,
  escapeHtml
}) {
  return `
    <div class="dashboard-empty-state">
      <div>
        <p class="eyebrow">${escapeHtml(copy.eyebrow)}</p>
        <h2>${escapeHtml(copy.title)}</h2>
        <p>${escapeHtml(copy.body)}</p>
      </div>
      <ul>
        ${suggestions.map((suggestion) => `<li>${escapeHtml(suggestion)}</li>`).join("")}
      </ul>
      <div class="dashboard-empty-actions">
        <button class="btn btn-primary" type="button" data-action="go" data-href="/settings">${escapeHtml(labels.improveProfile)}</button>
        <button class="btn btn-secondary" type="button" data-action="include-national-opportunities">${escapeHtml(labels.includeNationalOpportunities)}</button>
        <button class="btn btn-secondary" type="button" data-action="show-all-matches">${escapeHtml(labels.showAllStoredMatches)}</button>
        <button class="btn btn-secondary" type="button" data-action="show-all-opportunities">${escapeHtml(labels.inspectAllOpportunities)}</button>
      </div>
    </div>
  `;
}

export function renderDashboardPage({
  profile,
  matches,
  stats,
  filters,
  filterSummary,
  matchStatus,
  opportunityLoadError,
  isAdmin,
  matchingLoading,
  labels,
  renderFilterDropdown,
  renderOpportunityCard,
  renderEmptyState,
  escapeHtml
}) {
  const companyName = String(profile?.companyName || "");
  const welcomeText = String(labels.welcomeCompany || "");
  const companyIndex = companyName ? welcomeText.indexOf(companyName) : -1;
  const welcomeHeading = companyIndex >= 0
    ? `${escapeHtml(welcomeText.slice(0, companyIndex))}<span class="dashboard-company-name">${escapeHtml(companyName)}</span>${escapeHtml(welcomeText.slice(companyIndex + companyName.length))}`
    : escapeHtml(welcomeText);
  return `
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${escapeHtml(labels.dashboard)}</p>
        <h1>${welcomeHeading}</h1>
        <p>${escapeHtml(labels.dashboardIntro)}</p>
      </div>
      <div class="dashboard-actions">
        ${isAdmin ? `
          <button class="btn btn-primary" data-action="run-matching" ${matchingLoading ? "disabled" : ""}>
            ${matchingLoading ? escapeHtml(labels.refreshing) : escapeHtml(labels.refreshMatches)}
          </button>
        ` : ""}
        <button class="btn btn-secondary" data-action="go" data-href="/report">${escapeHtml(labels.viewWeeklyReport)}</button>
      </div>
    </section>

    ${matchStatus ? `
      <div class="admin-message ${matchStatus.type === "error" ? "is-error" : "is-success"}">
        ${escapeHtml(matchStatus.text)}
      </div>
    ` : ""}

    ${opportunityLoadError ? `
      <div class="note-panel">
        ${escapeHtml(opportunityLoadError)}
      </div>
    ` : ""}

    <section class="stats-grid">
      <div class="stat-card"><span>${escapeHtml(labels.strongMatches)}</span><strong>${stats.strong}</strong></div>
      <div class="stat-card"><span>${escapeHtml(labels.closingSoon)}</span><strong>${stats.closingSoon}</strong></div>
      <div class="stat-card"><span>${escapeHtml(labels.savedLabel)}</span><strong>${stats.savedCount}</strong></div>
      <div class="stat-card"><span>${escapeHtml(labels.totalPotentialValue)}</span><strong>${stats.totalValue}</strong></div>
    </section>

    <section class="filters">
      <input data-filter="search" value="${escapeHtml(filters.search)}" placeholder="${escapeHtml(labels.searchOpportunities)}" />
      ${renderFilterDropdown("label")}
      ${renderFilterDropdown("category")}
      ${renderFilterDropdown("location")}
      ${renderFilterDropdown("type")}
      <label class="checkbox compact"><input type="checkbox" data-filter="savedOnly" ${filters.savedOnly ? "checked" : ""}/><span>${escapeHtml(labels.savedOnly)}</span></label>
    </section>

    <div class="note-panel dashboard-filter-summary">
      ${escapeHtml(filterSummary)}
    </div>

    <section class="opportunity-list">
      ${matches.length ? matches.map(renderOpportunityCard).join("") : renderEmptyState(profile)}
    </section>
  `;
}

export function renderOpportunityCardPage({
  opp,
  saved,
  deadline,
  sourceBadgeHtml,
  qualityBadgeHtml,
  safetyBadgeHtml,
  extractedBadgeHtml,
  originalLanguageBadgeHtml,
  matchBadgeClass,
  matchLabel,
  buyer,
  location,
  value,
  reasons,
  labels,
  escapeHtml
}) {
  return `
    <article class="opportunity-card">
      <div class="opp-main">
        <div class="opp-top">
          <div class="opportunity-badges">
            ${sourceBadgeHtml}
            ${qualityBadgeHtml}
            ${safetyBadgeHtml}
            ${extractedBadgeHtml}
            ${originalLanguageBadgeHtml}
          </div>
          <span class="${matchBadgeClass}">${escapeHtml(matchLabel)} · ${opp.matchScore}</span>
        </div>
        <h3>${escapeHtml(opp.title)}</h3>
        <p>${escapeHtml(opp.description)}</p>
        <div class="meta-row">
          <span>${escapeHtml(buyer)}</span>
          <span>${escapeHtml(location)}</span>
          <span>${value}</span>
          <span class="${deadline.className}">${escapeHtml(deadline.label)}</span>
        </div>
        <div class="reason-row">
          ${reasons.slice(0, 3).map((reason) => `<span>${escapeHtml(reason)}</span>`).join("")}
        </div>
      </div>
      <div class="opp-actions">
        <button class="btn btn-secondary" data-action="details" data-id="${opp.id}">${escapeHtml(labels.details)}</button>
        <button class="btn ${saved ? "btn-primary" : "btn-secondary"}" data-action="save" data-id="${opp.id}">${saved ? escapeHtml(labels.saved) : escapeHtml(labels.save)}</button>
        <button class="btn btn-ghost" data-action="ignore" data-id="${opp.id}">${escapeHtml(labels.ignore)}</button>
      </div>
    </article>
  `;
}

export function renderOpportunityModalPage({
  opp,
  saved,
  deadline,
  requirements,
  matchReasons,
  risks,
  safetyReasons,
  nextSteps,
  matchBadgeClass,
  matchLabel,
  qualityBadgeHtml,
  safetyBadgeHtml,
  extractedBadgeHtml,
  qualityWarningHtml,
  buyerSummary,
  location,
  value,
  sourceUrl,
  extractedDetails,
  qualityLabel,
  safetyStatusLine,
  category,
  type,
  publishedDate,
  cpvCode,
  labels,
  escapeHtml
}) {
  return `
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <div class="opportunity-badges">
              <span class="${matchBadgeClass}">${escapeHtml(matchLabel)} · ${opp.matchScore}</span>
              ${qualityBadgeHtml}
              ${safetyBadgeHtml}
              ${extractedBadgeHtml}
            </div>
            <h2>${escapeHtml(opp.title)}</h2>
            <p>${escapeHtml(buyerSummary)} · ${escapeHtml(location)} · ${value}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-modal" aria-label="Close details">×</button>
        </div>

        <div class="modal-body">
          <div class="modal-grid">
            <section>
              ${qualityWarningHtml}
              <h3>${escapeHtml(labels.description)}</h3>
              <p>${escapeHtml(opp.description || labels.noDescription)}</p>
              <h3>${escapeHtml(labels.requirements)}</h3>
              <ul class="check-list">
                ${(requirements.length ? requirements : [labels.noSpecificRequirements]).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
              <h3>${escapeHtml(labels.matchReasons)}</h3>
              <ul class="check-list">
                ${(matchReasons.length ? matchReasons : [labels.noMatchReasons]).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </section>

            <aside class="side-panel">
              <h3>${escapeHtml(labels.opportunityInfo)}</h3>
              <p><strong>${escapeHtml(labels.source)}:</strong> ${escapeHtml(labels.sourceValue)}</p>
              ${extractedDetails}
              <p><strong>${escapeHtml(labels.quality)}:</strong> ${escapeHtml(qualityLabel)}</p>
              ${safetyStatusLine}
              <p><strong>${escapeHtml(labels.category)}:</strong> ${escapeHtml(category)}</p>
              <p><strong>${escapeHtml(labels.type)}:</strong> ${escapeHtml(type)}</p>
              <p><strong>${escapeHtml(labels.deadline)}:</strong> <span class="${deadline.className}">${escapeHtml(labels.deadlineLabel)}</span></p>
              <p><strong>${escapeHtml(labels.published)}:</strong> ${escapeHtml(publishedDate)}</p>
              <p><strong>${escapeHtml(labels.cpv)}:</strong> ${escapeHtml(cpvCode || "—")}</p>

              <h3>${escapeHtml(labels.risksToCheck)}</h3>
              <ul class="risk-list">
                ${(safetyReasons.length ? safetyReasons : risks).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>

              <h3>${escapeHtml(labels.recommendedNextSteps)}</h3>
              <ol class="steps-list">
                ${(nextSteps.length ? nextSteps : [labels.openSourceAndConfirm]).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ol>

              <div class="button-stack">
                <button class="btn btn-primary" data-action="save" data-id="${opp.id}">${saved ? escapeHtml(labels.removeFromSaved) : escapeHtml(labels.saveOpportunity)}</button>
                <a class="btn btn-secondary" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(labels.openSource)}</a>
                <button class="btn btn-ghost" data-action="ignore" data-id="${opp.id}">${escapeHtml(labels.markNotRelevant)}</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  `;
}
