export function renderReportArchiveRowPage({
  report,
  title,
  created,
  itemLabel,
  statusLabel,
  hideLabel,
  viewLabel,
  escapeHtml
}) {
  return `
    <div class="report-archive-row">
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(created)} · ${escapeHtml(itemLabel)} · ${escapeHtml(statusLabel)}</p>
      </div>
      <div class="admin-row-actions">
        <button class="btn btn-secondary" data-action="view-report" data-id="${escapeHtml(report.id)}">${escapeHtml(viewLabel)}</button>
        <button class="btn btn-ghost btn-small" data-action="archive-report" data-id="${escapeHtml(report.id)}">${escapeHtml(hideLabel)}</button>
      </div>
    </div>
  `;
}

export function renderReportPreviewPage({
  report,
  options = {},
  companyName,
  dateRange,
  generatedByLabel,
  reportTitleLabel,
  closeLabel,
  escapeHtml
}) {
  const id = options.id ? ` id="${escapeHtml(options.id)}"` : "";
  return `
    <section class="report-preview"${id}>
      <div class="report-meta-bar">
        <div>
          <span>${escapeHtml(generatedByLabel)}</span>
          <strong>${escapeHtml(report.title || reportTitleLabel)}</strong>
        </div>
        <div>
          <span>${escapeHtml(companyName)}</span>
          <strong>${escapeHtml(dateRange)}</strong>
        </div>
      </div>
      <div class="report-body">
        ${report.htmlContent}
        ${options.closeButton ? `<button class="btn btn-secondary report-close-btn" data-action="close-archive-report">${escapeHtml(closeLabel)}</button>` : ""}
      </div>
      ${report.textContent && options.includeTextArea !== false ? `<textarea id="report-text" class="hidden-textarea">${escapeHtml(report.textContent)}</textarea>` : ""}
    </section>
  `;
}

export function renderReportSummaryCardPage({ label, value, escapeHtml }) {
  return `
    <div class="report-summary-card">
      <span>${escapeHtml(label)}</span>
      <strong>${value}</strong>
    </div>
  `;
}

export function renderReportOpportunitySectionPage({
  title,
  description,
  opportunities,
  emptyText,
  renderOpportunityItem,
  escapeHtml
}) {
  return `
    <section class="report-section">
      <div class="report-section-head">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}</p>
      </div>
      ${opportunities.length
        ? opportunities.map(renderOpportunityItem).join("")
        : `<div class="report-empty">${escapeHtml(emptyText)}</div>`}
    </section>
  `;
}

export function renderReportOpportunityItemPage({
  opp,
  valueText,
  deadlineText,
  sourceUrl,
  risks,
  fallbackReason,
  qualityBadgeHtml,
  matchBadgeClass,
  matchLabel,
  statusText,
  buyerLabel,
  buyerValue,
  sourceLabel,
  sourceValue,
  areaLabel,
  areaValue,
  deadlineLabel,
  valueLabel,
  whyLabel,
  risksLabel,
  openSourceLabel,
  sourceMissingLabel,
  formatReason,
  formatRisk,
  escapeHtml
}) {
  const reasons = (opp.matchReasons.length ? opp.matchReasons : [fallbackReason]).slice(0, 4);
  return `
    <article class="report-item">
      <div class="report-item-top">
        ${qualityBadgeHtml}
        <span class="${matchBadgeClass}">${escapeHtml(matchLabel)} · ${opp.matchScore}</span>
      </div>
      <h4>${escapeHtml(opp.title)}</h4>
      ${statusText ? `<p class="report-item-status">${escapeHtml(statusText)}</p>` : ""}
      <div class="report-facts">
        <span><strong>${escapeHtml(buyerLabel)}</strong>${escapeHtml(buyerValue)}</span>
        <span><strong>${escapeHtml(sourceLabel)}</strong>${escapeHtml(sourceValue)}</span>
        <span><strong>${escapeHtml(areaLabel)}</strong>${escapeHtml(areaValue)}</span>
        <span><strong>${escapeHtml(deadlineLabel)}</strong><em>${escapeHtml(deadlineText)}</em></span>
        <span><strong>${escapeHtml(valueLabel)}</strong><em>${escapeHtml(valueText)}</em></span>
      </div>
      <div class="report-detail-grid">
        <div>
          <h5>${escapeHtml(whyLabel)}</h5>
          <ul>${reasons.map((reason) => `<li>${escapeHtml(formatReason(reason))}</li>`).join("")}</ul>
        </div>
        <div>
          <h5>${escapeHtml(risksLabel)}</h5>
          <ul>${risks.slice(0, 5).map((risk) => `<li>${escapeHtml(formatRisk(risk))}</li>`).join("")}</ul>
        </div>
      </div>
      ${sourceUrl ? `<a class="report-source-link" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener">${escapeHtml(openSourceLabel)} <span aria-hidden="true">↗</span></a>` : `<span class="report-source-link is-disabled">${escapeHtml(sourceMissingLabel)}</span>`}
    </article>
  `;
}

export function renderReportQualityBadgePage({ status, label, escapeHtml }) {
  return `<span class="report-quality ${escapeHtml(status)}">${escapeHtml(label)}</span>`;
}
