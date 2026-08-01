function normalizeCount(value, fallback, maximum = 12) {
  const count = Number(value);
  return Number.isFinite(count) ? Math.min(maximum, Math.max(1, Math.round(count))) : fallback;
}

function normalizeWidth(value) {
  const width = Number(value);
  return Number.isFinite(width) ? Math.min(100, Math.max(18, width)) : 100;
}

function renderSkeletonBlock(className = "", width = 100) {
  return `<span class="skeleton-block ${className}" style="--skeleton-width:${normalizeWidth(width)}%"></span>`;
}

export function renderSkeletonTextRows(options = {}) {
  const widths = Array.isArray(options.widths) && options.widths.length
    ? options.widths
    : [92, 76, 58];
  const className = options.className ? ` ${options.className}` : "";
  return `
    <div class="skeleton-text-rows${className}" aria-hidden="true">
      ${widths.map((width) => renderSkeletonBlock("skeleton-text-line", width)).join("")}
    </div>
  `;
}

export function renderSkeletonStatisticCards(options = {}) {
  const count = normalizeCount(options.count, 4, 8);
  return `
    <section class="stats-grid skeleton-stat-grid" aria-hidden="true">
      ${Array.from({ length: count }, (_, index) => `
        <div class="stat-card skeleton-stat-card">
          ${renderSkeletonBlock("skeleton-label", 54 + (index % 3) * 10)}
          ${renderSkeletonBlock("skeleton-value", 34 + (index % 2) * 12)}
        </div>
      `).join("")}
    </section>
  `;
}

export function renderSkeletonDashboardCards(options = {}) {
  const count = normalizeCount(options.count, 3, 6);
  const admin = options.variant === "admin";
  return `
    <section class="${admin ? "admin-skeleton-list" : "opportunity-list skeleton-card-list"}" aria-hidden="true">
      ${Array.from({ length: count }, (_, index) => `
        <article class="${admin ? "admin-row admin-opportunity-row" : "opportunity-card"} skeleton-dashboard-card">
          <div class="${admin ? "admin-opportunity-content" : "opp-main"}">
            <div class="skeleton-card-kicker">
              ${renderSkeletonBlock("skeleton-pill", 22)}
              ${renderSkeletonBlock("skeleton-pill", 16)}
            </div>
            ${renderSkeletonBlock("skeleton-title", index % 2 ? 72 : 86)}
            ${renderSkeletonTextRows({ widths: index % 2 ? [96, 82, 58] : [91, 76, 64] })}
            <div class="skeleton-card-meta">
              ${renderSkeletonBlock("skeleton-meta", 100)}
              ${renderSkeletonBlock("skeleton-meta", 100)}
              ${renderSkeletonBlock("skeleton-meta", 100)}
            </div>
          </div>
          <div class="${admin ? "admin-row-actions admin-opportunity-actions" : "opp-actions"} skeleton-card-actions">
            ${renderSkeletonBlock("skeleton-button", 100)}
            ${renderSkeletonBlock("skeleton-button", 100)}
            ${renderSkeletonBlock("skeleton-button", 100)}
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

export function renderSkeletonTable(options = {}) {
  const columns = normalizeCount(options.columns, 5, 10);
  const rows = normalizeCount(options.rows, 4, 8);
  return `
    <div class="ops-table-wrap skeleton-table-wrap" aria-hidden="true">
      <table class="ops-table skeleton-table">
        <thead>
          <tr>${Array.from({ length: columns }, () => `<th>${renderSkeletonBlock("skeleton-table-heading", 66)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${Array.from({ length: rows }, (_, rowIndex) => `
            <tr>${Array.from({ length: columns }, (_, columnIndex) => `<td>${renderSkeletonBlock("skeleton-table-cell", 52 + ((rowIndex + columnIndex) % 4) * 11)}</td>`).join("")}</tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

export function renderSkeletonDetailPanel(options = {}) {
  const modalClass = options.modal ? " skeleton-detail-modal" : "";
  return `
    <section class="side-panel skeleton-detail-panel${modalClass}" aria-hidden="true">
      ${renderSkeletonBlock("skeleton-title", 58)}
      ${renderSkeletonTextRows({ widths: [94, 88, 72, 84] })}
      <div class="skeleton-detail-grid">
        ${Array.from({ length: 4 }, (_, index) => `
          <div>
            ${renderSkeletonBlock("skeleton-label", 48 + index * 7)}
            ${renderSkeletonBlock("skeleton-text-line", 76 - index * 5)}
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

export function renderDashboardLoadingSkeleton() {
  return `
    <div class="skeleton-screen skeleton-dashboard-screen" role="status" aria-label="Loading dashboard">
      <section class="dashboard-head skeleton-dashboard-head" aria-hidden="true">
        <div>
          ${renderSkeletonBlock("skeleton-label", 18)}
          ${renderSkeletonBlock("skeleton-page-title", 62)}
          ${renderSkeletonTextRows({ widths: [86, 64] })}
        </div>
        <div class="dashboard-actions">${renderSkeletonBlock("skeleton-button", 100)}</div>
      </section>
      ${renderSkeletonStatisticCards({ count: 4 })}
      <section class="filters skeleton-filter-row" aria-hidden="true">
        ${Array.from({ length: 6 }, (_, index) => renderSkeletonBlock("skeleton-input", index ? 100 : 100)).join("")}
      </section>
      ${renderSkeletonDashboardCards({ count: 3 })}
      <span class="sr-only">Loading dashboard</span>
    </div>
  `;
}

export function renderAdminLoadingSkeleton() {
  return `
    <div class="skeleton-screen skeleton-admin-screen" role="status" aria-label="Loading admin dashboard">
      <section class="page-head" aria-hidden="true">
        ${renderSkeletonBlock("skeleton-label", 12)}
        ${renderSkeletonBlock("skeleton-page-title", 42)}
        ${renderSkeletonTextRows({ widths: [72, 54] })}
      </section>
      <div class="admin-tabs skeleton-admin-tabs" aria-hidden="true">
        ${Array.from({ length: 7 }, (_, index) => renderSkeletonBlock("skeleton-tab", 8 + (index % 3) * 2)).join("")}
      </div>
      <section class="ops-card skeleton-admin-overview">
        ${renderSkeletonTextRows({ widths: [28, 48] })}
        ${renderSkeletonStatisticCards({ count: 4 })}
        ${renderSkeletonTable({ columns: 6, rows: 4 })}
      </section>
      <span class="sr-only">Loading admin dashboard</span>
    </div>
  `;
}

export function renderAdminOpportunitiesLoadingSkeleton() {
  return `
    <div class="skeleton-screen skeleton-admin-opportunities" role="status" aria-label="Loading opportunities">
      <div class="admin-opportunity-filter-fields skeleton-admin-filter-fields" aria-hidden="true">
        ${Array.from({ length: 6 }, () => renderSkeletonBlock("skeleton-input", 100)).join("")}
      </div>
      ${renderSkeletonDashboardCards({ count: 3, variant: "admin" })}
      <span class="sr-only">Loading opportunities</span>
    </div>
  `;
}
