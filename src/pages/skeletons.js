function block(className) {
  return `<span class="skeleton-block ${className}"></span>`;
}

function opportunityCardSkeleton() {
  return `
    <article class="opportunity-card skeleton-card skeleton-opportunity-card">
      <div class="skeleton-card-main">
        <div class="skeleton-badge-row">
          ${block("skeleton-pill skeleton-pill-wide")}
          ${block("skeleton-pill")}
          ${block("skeleton-pill")}
        </div>
        ${block("skeleton-line skeleton-title-line")}
        ${block("skeleton-line skeleton-copy-line")}
        ${block("skeleton-line skeleton-copy-line skeleton-copy-line-short")}
        <div class="skeleton-meta-row">
          ${block("skeleton-line skeleton-meta-line")}
          ${block("skeleton-line skeleton-meta-line")}
          ${block("skeleton-line skeleton-meta-line")}
        </div>
      </div>
      <div class="skeleton-card-actions">
        ${block("skeleton-button")}
        ${block("skeleton-button")}
        ${block("skeleton-button skeleton-button-small")}
      </div>
    </article>
  `;
}

function dashboardSkeleton() {
  return `
    <div class="loading-skeleton loading-skeleton-dashboard" aria-hidden="true">
      <section class="dashboard-head skeleton-dashboard-head">
        <div>
          ${block("skeleton-line skeleton-eyebrow")}
          ${block("skeleton-line skeleton-page-title")}
          ${block("skeleton-line skeleton-subtitle")}
        </div>
        <div class="dashboard-actions skeleton-dashboard-actions">
          ${block("skeleton-button skeleton-head-action")}
        </div>
      </section>
      <section class="stats-grid skeleton-stats-grid">
        ${Array.from({ length: 4 }, () => `
          <div class="stat-card skeleton-card skeleton-stat-card">
            ${block("skeleton-line skeleton-stat-label")}
            ${block("skeleton-line skeleton-stat-value")}
          </div>
        `).join("")}
      </section>
      <section class="filters skeleton-filter-row">
        ${block("skeleton-input skeleton-search")}
        ${block("skeleton-input")}
        ${block("skeleton-input")}
        ${block("skeleton-input")}
        ${block("skeleton-input")}
        ${block("skeleton-input skeleton-saved-control")}
      </section>
      <div class="note-panel dashboard-filter-summary skeleton-dashboard-status">
        ${block("skeleton-line skeleton-status-line")}
      </div>
      <section class="opportunity-list skeleton-opportunity-list">
        ${Array.from({ length: 3 }, opportunityCardSkeleton).join("")}
      </section>
    </div>
  `;
}

function reportSkeleton() {
  return `
    <div class="loading-skeleton loading-skeleton-report" aria-hidden="true">
      <section class="skeleton-dashboard-head">
        <div>
          ${block("skeleton-line skeleton-eyebrow")}
          ${block("skeleton-line skeleton-page-title")}
          ${block("skeleton-line skeleton-subtitle")}
        </div>
        <div class="skeleton-inline-actions">
          ${block("skeleton-button")}
          ${block("skeleton-button")}
        </div>
      </section>
      <section class="skeleton-card skeleton-report-preview">
        <div class="skeleton-report-header">
          ${block("skeleton-line skeleton-title-line")}
          ${block("skeleton-line skeleton-meta-line")}
        </div>
        ${Array.from({ length: 3 }, () => `
          <div class="skeleton-report-item">
            ${block("skeleton-line skeleton-title-line")}
            ${block("skeleton-line skeleton-copy-line")}
            ${block("skeleton-line skeleton-copy-line skeleton-copy-line-short")}
          </div>
        `).join("")}
      </section>
      ${renderReportArchiveSkeleton(3)}
    </div>
  `;
}

export function renderReportArchiveSkeleton(count = 3) {
  return `
    <div class="skeleton-report-archive" aria-hidden="true">
      ${Array.from({ length: count }, () => `
        <div class="skeleton-card skeleton-report-row">
          <div>
            ${block("skeleton-line skeleton-report-row-title")}
            ${block("skeleton-line skeleton-meta-line")}
          </div>
          ${block("skeleton-button skeleton-button-small")}
        </div>
      `).join("")}
    </div>
  `;
}

export function renderSettingsSkeleton() {
  return `
    <div class="loading-skeleton loading-skeleton-settings" aria-hidden="true">
      <section class="skeleton-dashboard-head">
        <div>
          ${block("skeleton-line skeleton-eyebrow")}
          ${block("skeleton-line skeleton-page-title")}
          ${block("skeleton-line skeleton-subtitle")}
        </div>
      </section>
      <section class="skeleton-card skeleton-settings-card">
        ${block("skeleton-line skeleton-section-title")}
        <div class="skeleton-form-grid">
          ${Array.from({ length: 6 }, () => `
            <div class="skeleton-field">
              ${block("skeleton-line skeleton-field-label")}
              ${block("skeleton-input skeleton-field-input")}
            </div>
          `).join("")}
        </div>
        ${block("skeleton-button skeleton-settings-action")}
      </section>
    </div>
  `;
}

function landingSkeleton() {
  return `
    <div class="loading-skeleton loading-skeleton-landing" aria-hidden="true">
      <section class="skeleton-hero">
        <div class="skeleton-hero-copy">
          ${block("skeleton-line skeleton-eyebrow")}
          ${block("skeleton-line skeleton-hero-title")}
          ${block("skeleton-line skeleton-hero-title skeleton-hero-title-short")}
          ${block("skeleton-line skeleton-copy-line")}
          ${block("skeleton-line skeleton-copy-line skeleton-copy-line-short")}
          ${block("skeleton-button skeleton-hero-action")}
        </div>
        <div class="skeleton-card skeleton-product-shot">
          ${block("skeleton-line skeleton-meta-line")}
          ${Array.from({ length: 3 }, () => `
            <div class="skeleton-shot-row">
              ${block("skeleton-pill")}
              ${block("skeleton-line skeleton-title-line")}
              ${block("skeleton-line skeleton-copy-line skeleton-copy-line-short")}
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function formSkeleton() {
  return `
    <div class="loading-skeleton loading-skeleton-form" aria-hidden="true">
      <section class="skeleton-form-page">
        <div>
          ${block("skeleton-line skeleton-eyebrow")}
          ${block("skeleton-line skeleton-page-title")}
          ${block("skeleton-line skeleton-copy-line")}
        </div>
        <div class="skeleton-card skeleton-form-card">
          ${Array.from({ length: 4 }, () => `
            <div class="skeleton-field">
              ${block("skeleton-line skeleton-field-label")}
              ${block("skeleton-input skeleton-field-input")}
            </div>
          `).join("")}
          ${block("skeleton-button skeleton-form-action")}
        </div>
      </section>
    </div>
  `;
}

export function renderPageLoadingSkeleton(route = "/") {
  const path = String(route || "/").split("?")[0];
  if (path === "/dashboard") return dashboardSkeleton();
  if (path === "/report") return reportSkeleton();
  if (path === "/settings" || path === "/onboarding") return renderSettingsSkeleton();
  if (["/login", "/signup", "/forgot-password", "/reset-password", "/accept-invite", "/trial"].includes(path)) return formSkeleton();
  return landingSkeleton();
}
