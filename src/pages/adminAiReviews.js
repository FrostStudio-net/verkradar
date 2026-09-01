import {
  filterAdminMatchesByAiStatus,
  formatSkippedReason,
  getAdminMatchAiDisplay,
} from "../services/matchDisplay.js";

export function renderAdminAutomaticAiReviewPanel(options) {
  const {
    escapeHtml,
    usageSummary = null,
    lastResult = null,
    isRunning = false,
    formatAiUsageCost = (value) => `$${Number(value || 0).toFixed(4)}`,
  } = options;
  return `
    <section class="ops-card admin-auto-ai-panel">
      <div class="card-header">
        <div>
          <h2>Automatic AI review</h2>
          <p>Admin-triggered pass for new eligible matches across enabled active/trial companies. Max 10 per run.</p>
        </div>
        <button class="btn btn-secondary btn-small" type="button" data-action="admin-run-auto-ai-review" ${isRunning ? "disabled" : ""}>
          ${isRunning ? "Running automatic AI review..." : "Run automatic AI review now"}
        </button>
      </div>
      ${usageSummary ? renderUsageSummary(usageSummary, { escapeHtml, formatAiUsageCost }) : ""}
      ${lastResult ? renderAutoRunResult(lastResult, escapeHtml) : ""}
    </section>
  `;
}

export function renderAdminCompanyMatchList(company, options) {
  const { escapeHtml, renderMatchDecisionControls = null } = options;
  const matches = company.latestMatches || [];
  if (!matches.length) return `<p>No stored matches yet.</p>`;
  return `
    <ul class="admin-detail-list admin-ai-aware-match-list">
      ${matches.map((match) => renderCompactMatchRow(match, { escapeHtml, company, renderMatchDecisionControls })).join("")}
    </ul>
  `;
}

export function renderAdminCompanyAiReviewPanel(company, options) {
  const {
    escapeHtml,
    formatDateTime,
    formatAiUsageCost = (value) => `$${Number(value || 0).toFixed(4)}`,
    actionState = "",
    filter = "not_reviewed",
    lastResult = null,
    usageSummary = null,
  } = options;
  const matches = filterAdminMatchesByAiStatus(company.latestMatches || [], filter, company);
  return `
    <section class="side-panel admin-company-ai-panel">
      <div class="admin-company-ai-header">
        <div>
          <h3>AI match review</h3>
          <p>Run a controlled AI review for current eligible matches. Max 10 per run.</p>
          <p><strong>Auto AI:</strong> ${company.autoAiReviewEnabled ? "Enabled" : "Disabled"}</p>
        </div>
        <button class="btn btn-secondary btn-small" type="button" data-action="admin-ai-review-company" data-id="${escapeHtml(company.id)}" ${actionState ? "disabled" : ""}>
          ${actionState ? "Running AI review..." : "Run AI review for this company"}
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-action="admin-ai-review-company" data-id="${escapeHtml(company.id)}" data-force="true" ${actionState ? "disabled" : ""}>
          ${actionState ? "Revalidating..." : "Re-run AI review for this company"}
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-action="admin-toggle-company-auto-ai" data-id="${escapeHtml(company.id)}" data-enabled="${company.autoAiReviewEnabled ? "false" : "true"}">
          ${company.autoAiReviewEnabled ? "Disable auto AI" : "Enable auto AI"}
        </button>
      </div>

      ${usageSummary ? renderUsageSummary(usageSummary, { escapeHtml, formatAiUsageCost }) : ""}
      ${lastResult ? renderBatchResult(lastResult, escapeHtml) : ""}

      <label class="admin-inline-control admin-company-ai-filter">
        <span>AI review filter</span>
        <select data-admin-company-ai-filter>
          ${[
            ["ai_recommended", "AI recommended"],
            ["ai_possible", "AI possible"],
            ["needs_review", "Needs review"],
            ["outside_service_area", "Outside service area"],
            ["not_reviewed", "Not AI reviewed"]
          ].map(([value, label]) => `<option value="${value}" ${filter === value ? "selected" : ""}>${label}</option>`).join("")}
        </select>
      </label>

      ${matches.length ? `
        <ul class="admin-detail-list admin-ai-match-list">
          ${matches.map((match) => renderAiMatchRow(match, { escapeHtml, formatDateTime, company })).join("")}
        </ul>
      ` : `<p class="muted-text">No matches for this AI review filter.</p>`}
    </section>
  `;
}

function renderUsageSummary(summary, { escapeHtml, formatAiUsageCost }) {
  return `
    <div class="admin-ai-usage-summary">
      <span><strong>AI usage today</strong></span>
      <span>${Number(summary.reviewsToday || 0)} reviews today</span>
      <span>${escapeHtml(formatAiUsageCost(summary.estimatedCostToday || 0))} estimated cost</span>
      <span>${Number(summary.remainingReviewsToday || 0)} reviews remaining</span>
    </div>
  `;
}

function renderBatchResult(result, escapeHtml) {
  return `
    <div class="admin-ai-batch-result">
      <strong>Last batch</strong>
      <span>${Number(result.reviewed || 0)} reviewed</span>
      <span>${Number(result.strong || 0)} strong</span>
      <span>${Number(result.possible || 0)} possible</span>
      <span>${Number(result.weak_or_no_fit || 0)} weak/no fit</span>
      <span>${Number(result.skipped || 0)} skipped</span>
      <span>${Number(result.skipped_outside_service_area || 0)} outside service area</span>
      <span>${Number(result.skipped_already_reviewed || 0)} already reviewed</span>
      <span>${Number(result.skipped_expired_or_missing_deadline || 0)} expired/missing deadline</span>
      <span>${Number(result.skipped_score_too_low || 0)} score too low</span>
      <span>${Number(result.skipped_manually_rejected || 0)} manually rejected</span>
      ${result.estimated_cost ? `<span>${escapeHtml(result.estimated_cost)}</span>` : ""}
    </div>
  `;
}

function renderAutoRunResult(result, escapeHtml) {
  return `
    <div class="admin-ai-batch-result">
      <strong>Last automatic run</strong>
      <span>${Number(result.companies_checked || 0)} companies checked</span>
      <span>${Number(result.total_companies_found || 0)} total companies</span>
      <span>${Number(result.enabled_companies_found || 0)} auto AI enabled</span>
      <span>${Number(result.eligible_companies || 0)} eligible companies</span>
      <span>${Number(result.matches_checked || 0)} matches checked</span>
      <span>${Number(result.ai_reviews_created || 0)} AI reviews created</span>
      <span>${Number(result.skipped_expired || 0)} expired</span>
      <span>${Number(result.skipped_missing_deadline || 0)} missing deadline</span>
      <span>${Number(result.skipped_outside_service_area || 0)} outside service area</span>
      <span>${Number(result.skipped_already_reviewed || 0)} already reviewed</span>
      <span>${Number(result.skipped_usage_limit || 0)} usage limit</span>
      <span>${Number(result.skipped_no_candidate_matches || 0)} no candidate matches</span>
      <span>${Number(result.daily_usage_remaining || 0)} daily reviews remaining</span>
      ${result.error ? `<span>${escapeHtml(result.error)}</span>` : ""}
    </div>
    ${renderAutoCompanyDiagnostics(result.company_diagnostics || [], escapeHtml)}
  `;
}

function renderAutoCompanyDiagnostics(rows, escapeHtml) {
  if (!rows.length) return "";
  return `
    <div class="admin-ai-diagnostics">
      ${rows.slice(0, 8).map((row) => `
        <div>
          <strong>${escapeHtml(row.company_name || "Company")}</strong>
          <span>${escapeHtml(row.reason || "checked")}</span>
          <span>${Number(row.candidate_matches_found || 0)} candidates · ${Number(row.reviewed_count || 0)} reviewed</span>
          <span>${Number(row.skipped_already_reviewed || 0)} already reviewed · ${Number(row.skipped_missing_deadline || 0)} missing deadline · ${Number(row.skipped_outside_service_area || 0)} outside area · ${Number(row.skipped_score_too_low || 0)} low score</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderCompactMatchRow(match, { escapeHtml, company, renderMatchDecisionControls }) {
  const opportunity = match.opportunities || {};
  const display = getAdminMatchAiDisplay(match, company);
  const score = Number(match.match_score || 0);
  return `
    <li class="admin-ai-aware-match ${escapeHtml(display.tone || "muted")}">
      <div class="admin-match-card-header">
        <strong class="admin-match-card-title">${escapeHtml(opportunity.title || "Opportunity")}</strong>
        <div class="admin-match-card-meta" aria-label="Match overview">
          <span><b>${escapeHtml(display.label)}</b>${display.confidence ? ` · ${Math.round(display.confidence * 100)}%` : ""}</span>
          <span>Rule score <b>${score}</b></span>
          <span>${display.bucket === "outside_service_area" ? "Rule label suppressed" : escapeHtml(match.match_label || "Match")}</span>
        </div>
      </div>
      ${match.ai_review_skipped_reason ? `<small>Skipped: ${escapeHtml(formatSkippedReason(match.ai_review_skipped_reason))}</small>` : ""}
      ${match.ai_review_profile_stale ? `<small>AI review may be stale because the company profile changed.</small>` : ""}
      ${match.adminDecision ? `<small>Decision: ${escapeHtml(match.adminDecision.decision || "")}${match.adminDecision.reason ? ` · ${escapeHtml(match.adminDecision.reason)}` : ""}</small>` : ""}
      ${match.evaluationLabel ? `<small>Evaluation: ${escapeHtml(match.evaluationLabel.label || "")}${match.evaluationLabel.reason ? ` · ${escapeHtml(match.evaluationLabel.reason)}` : ""}</small>` : ""}
      ${renderMatchDecisionControls ? renderMatchDecisionControls(match, { escapeHtml }) : ""}
    </li>
  `;
}

function renderAiMatchRow(match, { escapeHtml, formatDateTime, company }) {
  const opportunity = match.opportunities || {};
  const display = getAdminMatchAiDisplay(match, company);
  const confidence = display.confidence ? ` · ${Math.round(display.confidence * 100)}%` : "";
  const reviewedAt = match.ai_reviewed_at ? ` · ${formatDateTime(match.ai_reviewed_at)}` : "";
  const skipped = match.ai_review_skipped_reason ? ` · Skipped: ${formatSkippedReason(match.ai_review_skipped_reason)}` : "";
  return `
    <li class="admin-ai-match-row ${escapeHtml(display.tone || "muted")}">
      <strong>${escapeHtml(opportunity.title || "Opportunity")}</strong>
      <span>${escapeHtml(display.label)}${escapeHtml(confidence)}${escapeHtml(reviewedAt)}${escapeHtml(skipped)}</span>
      ${match.ai_review_profile_stale ? `<span>AI review may be stale because the company profile changed.</span>` : ""}
      <span>Rule score ${Number(match.match_score || 0)} · ${escapeHtml(match.match_label || "Match")}</span>
      <span class="admin-ai-debug">company_id=${escapeHtml(match.company_id || "")} · opportunity_id=${escapeHtml(match.opportunity_id || "")} · ai_review_found=${match.ai_review_found === true ? "true" : "false"}</span>
    </li>
  `;
}
