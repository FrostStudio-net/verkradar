export function renderAdminCompanyAiReviewPanel(company, options) {
  const {
    escapeHtml,
    formatDateTime,
    actionState = "",
    filter = "not_reviewed",
    lastResult = null,
  } = options;
  const matches = getFilteredMatches(company.latestMatches || [], filter);
  return `
    <section class="side-panel admin-company-ai-panel">
      <div class="admin-company-ai-header">
        <div>
          <h3>AI match review</h3>
          <p>Run a controlled AI review for current eligible matches. Max 10 per run.</p>
        </div>
        <button class="btn btn-secondary btn-small" type="button" data-action="admin-ai-review-company" data-id="${escapeHtml(company.id)}" ${actionState ? "disabled" : ""}>
          ${actionState ? "Running AI review..." : "Run AI review for this company"}
        </button>
      </div>

      ${lastResult ? renderBatchResult(lastResult, escapeHtml) : ""}

      <label class="admin-inline-control admin-company-ai-filter">
        <span>AI review filter</span>
        <select data-admin-company-ai-filter>
          ${[
            ["not_reviewed", "Not reviewed"],
            ["strong", "Strong"],
            ["possible", "Possible"],
            ["weak_no_fit", "Weak / no fit"]
          ].map(([value, label]) => `<option value="${value}" ${filter === value ? "selected" : ""}>${label}</option>`).join("")}
        </select>
      </label>

      ${matches.length ? `
        <ul class="admin-detail-list admin-ai-match-list">
          ${matches.map((match) => renderAiMatchRow(match, { escapeHtml, formatDateTime })).join("")}
        </ul>
      ` : `<p class="muted-text">No matches for this AI review filter.</p>`}
    </section>
  `;
}

function getFilteredMatches(matches, filter) {
  return (matches || []).filter((match) => {
    const status = String(match.ai_review_status || "not_reviewed");
    const fit = String(match.ai_review_fit || "");
    if (filter === "not_reviewed") return status === "not_reviewed";
    if (filter === "strong") return fit === "strong";
    if (filter === "possible") return fit === "possible";
    if (filter === "weak_no_fit") return fit === "weak" || fit === "no_fit" || status === "low_priority";
    return true;
  });
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
      ${result.estimated_cost ? `<span>${escapeHtml(result.estimated_cost)}</span>` : ""}
    </div>
  `;
}

function renderAiMatchRow(match, { escapeHtml, formatDateTime }) {
  const opportunity = match.opportunities || {};
  const fit = match.ai_review_fit || "not reviewed";
  const confidence = match.ai_review_confidence == null ? "" : ` · ${Math.round(Number(match.ai_review_confidence || 0) * 100)}%`;
  const reviewedAt = match.ai_reviewed_at ? ` · ${formatDateTime(match.ai_reviewed_at)}` : "";
  return `
    <li>
      <strong>${escapeHtml(opportunity.title || "Opportunity")}</strong>
      <span>${escapeHtml(match.match_label || "Match")} · ${Number(match.match_score || 0)} · AI: ${escapeHtml(formatAiFit(fit))}${escapeHtml(confidence)}${escapeHtml(reviewedAt)}</span>
    </li>
  `;
}

function formatAiFit(value) {
  const labels = {
    strong: "Strong",
    possible: "Possible",
    weak: "Weak",
    no_fit: "No fit",
    not_reviewed: "Not reviewed"
  };
  return labels[String(value || "")] || "Not reviewed";
}
