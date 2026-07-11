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
      ${result ? renderDailyPipelineResult(result, escapeHtml) : ""}
    </section>
  `;
}

function renderDailyPipelineResult(result, escapeHtml) {
  const companies = Array.isArray(result.company_summaries) ? result.company_summaries : [];
  const matchDetails = Array.isArray(result.match_details) ? result.match_details : [];
  return `
    <div class="daily-pipeline-result">
      <div class="daily-pipeline-section">
        <h3>Yfirlit</h3>
        <div class="daily-pipeline-kpis">
          ${renderKpi("Ný tækifæri", result.opportunities_inserted, escapeHtml)}
          ${renderKpi("Uppfært", result.opportunities_updated, escapeHtml)}
          ${renderKpi("Fyrirtæki uppfærð", result.companies_refreshed, escapeHtml)}
          ${renderKpi("AI yfirferðir", result.ai_reviews_created, escapeHtml)}
          ${renderKpi("Þegar yfirfarið", result.skipped_already_reviewed, escapeHtml)}
          ${renderKpi("Utan þjónustusvæðis", result.skipped_outside_service_area, escapeHtml)}
          ${renderKpi("Vantar skilafrest", result.skipped_missing_deadline, escapeHtml)}
          ${renderKpi("Útrunnið", result.skipped_expired, escapeHtml)}
        </div>
      </div>

      <div class="daily-pipeline-section">
        <div class="daily-pipeline-heading">
          <h3>Fyrirtæki</h3>
          <span>${companies.length} fyrirtæki í niðurstöðu</span>
        </div>
        ${companies.length ? `
          <div class="daily-company-grid">
            ${companies.map((company) => renderCompanySummary(company, escapeHtml)).join("")}
          </div>
        ` : `<div class="empty-card">Engin fyrirtæki með niðurstöðu í þessari keyrslu.</div>`}
      </div>

      <div class="daily-pipeline-section">
        <div class="daily-pipeline-heading">
          <h3>Nýlega AI-yfirfarin tækifæri</h3>
          <span>${matchDetails.length} tækifæri</span>
        </div>
        ${matchDetails.length ? `
          <div class="daily-match-list">
            ${matchDetails.map((match) => renderMatchDetail(match, escapeHtml)).join("")}
          </div>
        ` : `<div class="empty-card">Engin ný AI-yfirfarin tækifæri í þessari keyrslu.</div>`}
      </div>

      ${renderErrors(result.errors, escapeHtml)}
      ${renderTechnicalDiagnostics(result, escapeHtml)}
    </div>
  `;
}

function renderKpi(label, value, escapeHtml) {
  return `
    <div class="daily-kpi">
      <strong>${Number(value || 0)}</strong>
      <span>${escapeHtml(label)}</span>
    </div>
  `;
}

function renderCompanySummary(company, escapeHtml) {
  const details = Array.isArray(company.match_details) ? company.match_details : [];
  return `
    <article class="daily-company-card">
      <div class="daily-company-header">
        <h4>${escapeHtml(company.company_name || "Óþekkt fyrirtæki")}</h4>
        ${company.company_id ? `<button class="btn btn-ghost btn-small" type="button" data-action="view-admin-company" data-id="${escapeHtml(company.company_id)}">Open company</button>` : ""}
      </div>
      <div class="daily-company-stats">
        ${renderMiniStat("Ný tækifæri", company.new_matches_count, escapeHtml)}
        ${renderMiniStat("Mælt með", company.ai_recommended_count, escapeHtml)}
        ${renderMiniStat("Mögulegt", company.ai_possible_count, escapeHtml)}
        ${renderMiniStat("Passar ekki", company.ai_rejected_count, escapeHtml)}
        ${renderMiniStat("Þegar yfirfarið", company.already_reviewed_count, escapeHtml)}
        ${renderMiniStat("Þarf yfirferð", company.needs_manual_review_count, escapeHtml)}
      </div>
      <div class="daily-company-skips">
        <span>Utan þjónustusvæðis: ${Number(company.skipped_outside_service_area || 0)}</span>
        <span>Vantar skilafrest: ${Number(company.skipped_missing_deadline || 0)}</span>
        <span>Útrunnið: ${Number(company.skipped_expired || 0)}</span>
      </div>
      ${details.length ? `
        <ul class="daily-company-match-titles">
          ${details.slice(0, 3).map((match) => `<li>${escapeHtml(match.opportunity_title || "Tækifæri")}</li>`).join("")}
        </ul>
      ` : ""}
    </article>
  `;
}

function renderMiniStat(label, value, escapeHtml) {
  return `
    <span>
      <strong>${Number(value || 0)}</strong>
      ${escapeHtml(label)}
    </span>
  `;
}

function renderMatchDetail(match, escapeHtml) {
  const reasons = Array.isArray(match.top_reasons) ? match.top_reasons.filter(Boolean).slice(0, 3) : [];
  const sourceUrl = String(match.source_url || "").trim();
  return `
    <article class="daily-match-card">
      <div class="daily-match-top">
        <div>
          <h4>${escapeHtml(match.opportunity_title || "Tækifæri")}</h4>
          <p>${escapeHtml(match.company_name || "Óþekkt fyrirtæki")} · ${escapeHtml(match.buyer || "Óþekktur kaupandi")} · ${escapeHtml(match.source || "Óþekkt heimild")}</p>
        </div>
        <div class="daily-match-badges">
          <span>${escapeHtml(formatFit(match.ai_fit))}</span>
          <span>${Math.round(Number(match.ai_confidence || 0) * 100)}%</span>
          <span>${match.send_to_client ? "Hæft til sendingar" : "Ekki senda"}</span>
          ${match.ai_review_is_stale ? `<span class="is-warning">AI gæti verið úrelt</span>` : ""}
        </div>
      </div>
      <div class="daily-match-meta">
        <span>Skilafrestur: ${escapeHtml(formatValue(match.deadline))}</span>
        <span>Regluskor: ${Number(match.rule_score || 0)}</span>
        <span>AI fit: ${escapeHtml(String(match.ai_fit || ""))}</span>
      </div>
      ${reasons.length ? `
        <div class="daily-match-reasons">
          <strong>Helstu ástæður</strong>
          <ul>${reasons.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("")}</ul>
        </div>
      ` : ""}
      ${match.top_risk ? `
        <div class="daily-match-risk">
          <strong>Áhætta/spurning</strong>
          <span>${escapeHtml(match.top_risk)}</span>
        </div>
      ` : ""}
      <div class="daily-match-actions">
        ${match.company_id ? `<button class="btn btn-ghost btn-small" type="button" data-action="view-admin-company" data-id="${escapeHtml(match.company_id)}">Open company</button>` : ""}
        ${match.match_id ? `<button class="btn btn-secondary btn-small" type="button" data-action="admin-ai-review-match" data-id="${escapeHtml(match.match_id)}" data-force="true">Re-run AI review</button>` : ""}
        ${sourceUrl ? `<a class="btn btn-ghost btn-small" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">Opna heimild</a>` : ""}
      </div>
    </article>
  `;
}

function renderErrors(errors, escapeHtml) {
  if (!Array.isArray(errors) || !errors.length) return "";
  return `
    <div class="admin-message is-error">
      ${errors.map((error) => `<div>${escapeHtml(error)}</div>`).join("")}
    </div>
  `;
}

function renderTechnicalDiagnostics(result, escapeHtml) {
  return `
    <details class="daily-pipeline-diagnostics">
      <summary>Technical diagnostics</summary>
      <pre>${escapeHtml(JSON.stringify(result, null, 2))}</pre>
    </details>
  `;
}

function formatFit(fit) {
  const value = String(fit || "").toLowerCase();
  if (value === "strong") return "Mælt með";
  if (value === "possible") return "Mögulegt";
  if (value === "weak" || value === "no_fit") return "Passar ekki";
  return "Þarf yfirferð";
}

function formatValue(value) {
  return String(value || "").trim() || "Ekki skráð";
}
