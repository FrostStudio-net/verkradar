export function renderAdminV2IngestionPanel({ rows = [], loading = false, error = "", escapeHtml, formatDateTime, controlsEnabled = false }) {
  const canMutate = controlsEnabled === true;
  return `
    <section class="ops-card v2-ingestion-panel">
      <div class="card-header">
        <div>
          <h2>V2 shadow — not customer visible</h2>
          <p>Read-only fixture/shadow health. This panel has no promotion or production-ingestion controls.</p>
        </div>
        <span class="status-pill is-running">Isolated</span>
      </div>
      ${error ? `<div class="admin-message is-error">${escapeHtml(error)}</div>` : ""}
      ${loading && !rows.length ? `<div class="empty-card">Loading v2 ingestion status...</div>` : rows.length ? `
        <div class="ops-table-wrap">
          <table class="ops-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Mode</th>
                <th>Last fixture/shadow run</th>
                <th>Run status</th>
                <th>Observations</th>
                <th>Errors</th>
                <th>Parser health</th>
                <th>Comparison</th>
              </tr>
            </thead>
            <tbody>${rows.map((row) => renderRow(row, escapeHtml, formatDateTime, canMutate)).join("")}</tbody>
          </table>
        </div>
      ` : error ? "" : `<div class="empty-card">No v2 sources configured. Apply the Phase A migration to create the isolated control plane.</div>`}
    </section>
  `;
}

function renderRow(row, escapeHtml, formatDateTime, canMutate = false) {
  const run = row.latestShadowRun || row.latestFixtureRun || row.latestRun || {};
  const health = row.health || {};
  const parserHealth = health.parser_health || {};
  const comparison = summarizeComparisons(row);
  const errors = Number(run.error_count || 0) + Number(row.invalidObservationCount || 0);
  return `
    <tr>
      <td><strong>${escapeHtml(row.display_name || row.source_key || "Unknown")}</strong><br><small>${escapeHtml(`${row.parser_name || "parser"}@${row.parser_version || "?"}`)}</small></td>
      <td><span class="status-pill ${row.mode === "promote" ? "is-error" : "is-running"}">${escapeHtml(row.mode || "disabled")}</span></td>
      <td>${canMutate ? `<button type="button" data-action="v2-enable-shadow" data-source-key="${escapeHtml(row.source_key || "")}" ${row.mode === "shadow" ? "disabled" : ""}>Enable shadow</button><button type="button" data-action="v2-disable-shadow" data-source-key="${escapeHtml(row.source_key || "")}" ${row.mode !== "shadow" ? "disabled" : ""}>Disable shadow</button><button type="button" data-action="v2-run-shadow" data-source-key="${escapeHtml(row.source_key || "")}" ${row.mode !== "shadow" ? "disabled" : ""}>Run shadow now</button>` : `<small>Diagnostics only (non-staging)</small>`}</td>
      <td>${escapeHtml(formatDateTime(run.finished_at || run.started_at || run.created_at || health.last_run_at || ""))}</td>
      <td>${escapeHtml(run.status || health.status || "not run")}${run.suspicious_zero_items ? `<br><small>Zero-item anomaly</small>` : ""}</td>
      <td>${Number(row.observationCount || 0)} <small>(${Number(row.validObservationCount || 0)} valid)</small></td>
      <td>${errors}${health.last_error_message ? `<br><small>${escapeHtml(health.last_error_message)}</small>` : ""}</td>
      <td>${escapeHtml(health.status || "unknown")} / ${escapeHtml(health.circuit_state || "closed")}<br><small>${Number(parserHealth.parsed_count || 0)} parsed, ${Number(parserHealth.invalid_count || 0)} invalid</small></td>
      <td>${escapeHtml(comparison)}</td>
    </tr>
  `;
}

function summarizeComparisons(row) {
  const counts = row.comparisonCounts || {};
  const completed = Object.entries(counts).filter(([key]) => key !== "pending").reduce((sum, [, value]) => sum + Number(value || 0), 0);
  if (!completed && !Number(row.pendingComparisonCount || 0)) return "Not compared";
  return `${completed} decided / ${Number(row.pendingComparisonCount || 0)} pending`;
}
