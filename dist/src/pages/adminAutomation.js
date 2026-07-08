export function renderAdminDailyPipelinePanel(options) {
  const {
    escapeHtml,
    isRunning = false,
    result = null,
  } = options;
  return `
    <section class="ops-card admin-daily-pipeline-panel">
      <div class="card-header">
        <div>
          <h2>Daily pipeline</h2>
          <p>Runs source imports, refreshes active customer matches, then runs automatic AI review. No emails are sent.</p>
        </div>
        <button class="btn btn-primary" type="button" data-action="admin-run-daily-pipeline" ${isRunning ? "disabled" : ""}>
          ${isRunning ? "Running daily pipeline..." : "Run daily pipeline now"}
        </button>
      </div>
      ${result ? renderDailyPipelineSummary(result, escapeHtml) : ""}
    </section>
  `;
}

function renderDailyPipelineSummary(result, escapeHtml) {
  return `
    <div class="admin-ai-batch-result admin-daily-pipeline-summary">
      <strong>Latest daily pipeline</strong>
      <span>${Number(result.sources_imported || 0)} sources imported</span>
      <span>${Number(result.opportunities_inserted || 0)} inserted</span>
      <span>${Number(result.opportunities_updated || 0)} updated</span>
      <span>${Number(result.companies_refreshed || 0)} companies refreshed</span>
      <span>${Number(result.matches_created_updated || 0)} matches refreshed</span>
      <span>${Number(result.ai_companies_checked || 0)} AI companies checked</span>
      <span>${Number(result.ai_reviews_created || 0)} AI reviews created</span>
      <span>${Number(result.skipped_already_reviewed || 0)} already reviewed</span>
      <span>${Number(result.skipped_outside_service_area || 0)} outside service area</span>
      <span>${Number(result.skipped_missing_deadline || 0)} missing deadline</span>
      <span>${Number(result.skipped_expired || 0)} expired</span>
    </div>
    ${Array.isArray(result.errors) && result.errors.length ? `
      <div class="admin-message is-error">
        ${result.errors.map((error) => `<div>${escapeHtml(error)}</div>`).join("")}
      </div>
    ` : ""}
  `;
}
