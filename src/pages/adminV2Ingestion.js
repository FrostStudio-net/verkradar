export function renderAdminV2IngestionPanel({ rows = [], loading = false, error = "", escapeHtml, formatDateTime, controlsEnabled = false, phaseC2ControlsEnabled = false, phaseC2Action = "", phaseC2Results = {}, phaseC2Assertions = {}, productionShadowControlsEnabled = false, productionShadowAction = "", productionShadowResult = null, phaseC3ProductionControlsEnabled = false, phaseC3SelectedObservationId = "", phaseC3Action = "", phaseC3Result = null }) {
  const canMutate = controlsEnabled === true;
  const cases = rows.flatMap((row) => (row.phaseC2Cases || []).map((item) => ({ ...item, source: row }))).sort((left, right) => left.case_key.localeCompare(right.case_key));
  return `
    <section class="ops-card v2-ingestion-panel">
      <div class="card-header">
        <div>
          <h2>V2 shadow — not customer visible</h2>
          <p>Fixture/shadow health with isolated staging-only canary controls.</p>
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
                <th>Controls</th>
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
      ${productionShadowControlsEnabled ? renderProductionShadowControl(rows, escapeHtml, productionShadowAction, productionShadowResult) : ""}
      ${phaseC2ControlsEnabled && cases.length ? renderPhaseC2(cases, escapeHtml, formatDateTime, phaseC2Action, phaseC2Results, phaseC2Assertions) : ""}
      ${phaseC3ProductionControlsEnabled ? renderPhaseC3Production(rows, escapeHtml, formatDateTime, phaseC3SelectedObservationId, phaseC3Action, phaseC3Result) : ""}
    </section>
  `;
}

function renderProductionShadowControl(rows, escapeHtml, activeAction, result) {
  const row = rows.find((item) => item.source_key === "reykjavik-utbod-v2");
  if (!row || row.production_shadow_enabled !== true || row.mode !== "shadow" || row.promotion_approved === true) return "";
  const busy = Boolean(activeAction);
  return `
    <section class="phase-c-canary" aria-labelledby="production-shadow-title">
      <div class="card-header">
        <div><h3 id="production-shadow-title">Production V2 shadow — Reykjavík only</h3><p>Runs one manual shadow ingestion. It cannot promote, match, report, or send.</p></div>
        <span class="status-pill is-running">PRODUCTION SHADOW</span>
      </div>
      <dl>
        <dt>Source</dt><dd>${escapeHtml(row.display_name || row.source_key)}</dd>
        <dt>Mode</dt><dd>${escapeHtml(row.mode)}</dd>
        <dt>Promotion approved</dt><dd>no</dd>
      </dl>
      <button data-action="v2-production-run-shadow" data-source-key="reykjavik-utbod-v2" ${busy ? "disabled" : ""}>Run shadow once</button>
      ${busy ? `<p class="admin-message">Running one Reykjavík shadow ingestion…</p>` : ""}
      ${result ? `<pre class="phase-c-canary-assertions">${escapeHtml(JSON.stringify(result, null, 2))}</pre>` : ""}
      <p><small>No automatic retry, schedule, bulk action, promotion, release, matching, AI, report, or send control is available here.</small></p>
    </section>`;
}

function renderPhaseC3Production(rows, escapeHtml, formatDateTime, selectedId, activeAction, result) {
  const row = rows.find((item) => item.source_key === "reykjavik-utbod-v2");
  const control = row?.phaseC3Production;
  if (!row || !control) return "";
  const canaryControlsEnabled = control.enabled === true && row.production_canary_enabled === true;
  const eitherCanaryFlagEnabled = control.enabled === true || row.production_canary_enabled === true;
  const busy = Boolean(activeAction);
  const setup = `
    <section class="phase-c-canary" aria-labelledby="phase-c3-enable-title">
      <div class="card-header"><div><h3 id="phase-c3-enable-title">Phase C3 — Reykjavík production canary</h3><p>Enable canary controls only. This action cannot approve or promote anything.</p></div><span class="status-pill is-error">PRODUCTION — MANUAL</span></div>
      <dl>
        <dt>phase_c_production_enabled</dt><dd>${control.enabled ? "true" : "false"}</dd>
        <dt>Reykjavík production_canary_enabled</dt><dd>${row.production_canary_enabled ? "true" : "false"}</dd>
        <dt>Release</dt><dd>${control.release_enabled || row.release_feature_enabled || row.release_approved ? "unexpectedly enabled" : "disabled"}</dd>
        <dt>Reykjavík mode</dt><dd>${escapeHtml(row.mode || "—")}</dd>
        <dt>Promotion approved</dt><dd>${row.promotion_approved ? "yes" : "no"}</dd>
      </dl>
      <div class="admin-inline-actions">
        ${!eitherCanaryFlagEnabled ? `<button data-action="v2-c3-enable-controls" ${busy ? "disabled" : ""}>Enable Reykjavík production canary</button>` : ""}
        ${eitherCanaryFlagEnabled ? `<button data-action="v2-c3-disable-controls" ${busy ? "disabled" : ""}>Disable production canary</button>` : ""}
      </div>
      ${activeAction === "v2-c3-enable-controls" || activeAction === "v2-c3-disable-controls" ? `<p class="admin-message">Updating canary control flags…</p>` : ""}
      ${result ? `<pre class="phase-c-canary-assertions">${escapeHtml(JSON.stringify(result, null, 2))}</pre>` : ""}
      <p><small>No approval, promotion, release, matching, AI, report, or send occurs when these controls are enabled.</small></p>
    </section>`;
  if (!canaryControlsEnabled) return setup;
  const candidates = control.candidates || [];
  const selected = candidates.find((item) => item.observation.id === selectedId) || null;
  const observation = selected?.observation;
  const opportunity = selected?.opportunity;
  const provenance = selected?.provenance;
  const sourceApproved = row.mode === "promote" && row.promotion_approved === true;
  const held = opportunity?.phase_c_communication_hold === true || opportunity?.raw_payload?.phase_c_communication_hold === true;
  const quarantined = opportunity?.raw_payload?.promotion_quarantine === "phase_c_canary";
  return `${setup}
    <section class="phase-c-canary" aria-labelledby="phase-c3-production-title">
      <div class="card-header"><div><h3 id="phase-c3-production-title">Phase C3 production canary</h3><p>One source and one observation only. Promotion, release, and communication are separate.</p></div><span class="status-pill is-error">PRODUCTION — MANUAL</span></div>
      <label>Eligible Reykjavík observation
        <select data-action="v2-c3-select-observation" ${busy ? "disabled" : ""}>
          <option value="">Select exactly one observation</option>
          ${candidates.map((item) => `<option value="${escapeHtml(item.observation.id)}" ${item.observation.id === selectedId ? "selected" : ""}>${escapeHtml(`${item.observation.procurement_reference || "no reference"} — ${item.observation.title}`)}</option>`).join("")}
        </select>
      </label>
      <dl>
        <dt>Source mode / approval</dt><dd>${escapeHtml(row.mode)} / ${row.promotion_approved ? "approved" : "not approved"}</dd>
        <dt>Observation</dt><dd>${observation ? `<code>${escapeHtml(observation.id)}</code>` : "—"}</dd>
        <dt>Reference</dt><dd>${escapeHtml(observation?.procurement_reference || "—")}</dd>
        <dt>Title</dt><dd>${escapeHtml(observation?.title || "—")}</dd>
        <dt>Deadline / stage / confidence</dt><dd>${escapeHtml(observation ? `${observation.deadline || "—"} / ${observation.predicted_procurement_stage || "—"} / ${Number(observation.predicted_confidence || 0).toFixed(2)}` : "—")}</dd>
        <dt>Comparison / promotion</dt><dd>${escapeHtml(observation ? `${observation.comparison_state} / ${observation.promotion_state}` : "—")}</dd>
        <dt>Opportunity</dt><dd>${opportunity ? `<code>${escapeHtml(opportunity.id)}</code> — ${escapeHtml(opportunity.status || "—")}` : "—"}</dd>
        <dt>Provenance</dt><dd>${escapeHtml(provenance?.provenance_type || "—")}</dd>
        <dt>Quarantine / communication hold</dt><dd>${quarantined ? "QUARANTINED" : "no"} / ${held ? "HELD" : "no"}</dd>
      </dl>
      <div class="admin-inline-actions">
        <button data-action="v2-c3-approve-source" ${sourceApproved || busy ? "disabled" : ""}>Approve Reykjavík source</button>
        <button data-action="v2-c3-revoke-source" ${(!row.promotion_approved && row.mode !== "promote") || busy ? "disabled" : ""}>Revoke source</button>
        <button data-action="v2-c3-approve-observation" ${!observation || !sourceApproved || observation.approved_for_promotion || busy ? "disabled" : ""}>Approve observation</button>
        <button data-action="v2-c3-promote" ${!observation || !sourceApproved || !observation.approved_for_promotion || opportunity || busy ? "disabled" : ""}>Promote once</button>
        <button data-action="v2-c3-assertions" ${!opportunity || busy ? "disabled" : ""}>Run safety assertions</button>
        <button data-action="v2-c3-rollback" ${!opportunity || !quarantined || busy ? "disabled" : ""}>Rollback before release</button>
      </div>
      ${activeAction ? `<p class="admin-message">Running ${escapeHtml(activeAction)}…</p>` : ""}
      ${result ? `<pre class="phase-c-canary-assertions">${escapeHtml(JSON.stringify(result, null, 2))}</pre>` : ""}
      <p><small>Release remains unavailable. No matching, AI, report, send, bulk, automatic release, or communication-hold-clear control exists here.</small></p>
    </section>`;
}

function renderPhaseC2(cases, escapeHtml, formatDateTime, activeAction, results, assertions) {
  return `
    <section class="phase-c-canary" aria-labelledby="phase-c2-title">
      <div class="card-header">
        <div>
          <h3 id="phase-c2-title">Phase C2 — staging only</h3>
          <p>Exactly three prepared manual cases. No bulk, release, matching, AI, report, or send controls.</p>
        </div>
        <span class="status-pill is-running">STAGING ONLY</span>
      </div>
      <div class="phase-c-canary-grid">
        ${cases.map((item) => renderPhaseC2Case(item, escapeHtml, formatDateTime, activeAction, results[item.observation_id], assertions[item.observation_id])).join("")}
      </div>
    </section>
  `;
}

function renderPhaseC2Case(item, escapeHtml, formatDateTime, activeAction, result, assertions) {
  const row = item.source;
  const observation = item.observation;
  const provenance = item.provenance;
  const opportunity = item.opportunity;
  const sourceApproved = row.promotion_approved === true && row.mode === "promote";
  const busy = Boolean(activeAction);
  const eligibility = getKnownCanaryEligibility(row, observation);
  const observationApproved = observation?.approved_for_promotion === true && observation?.promotion_state === "eligible";
  const canPromote = sourceApproved && observationApproved && eligibility.ready && !opportunity && !observation?.promoted_opportunity_id;
  const canRollback = ["A", "B"].includes(item.case_key)
    && Boolean(opportunity && provenance)
    && observation?.promotion_state === "promoted"
    && observation?.promoted_opportunity_id === opportunity.id;
  const canClearReviewApproval = item.case_key === "C"
    && observation?.approved_for_promotion === true
    && observation?.comparison_state === "review_required"
    && observation?.promotion_state === "review_required"
    && !observation?.promoted_opportunity_id
    && !provenance;
  const payload = opportunity?.raw_payload || {};
  const unchanged = provenance?.metadata?.opportunity_mutated === false
    || result?.reasons?.some?.((reason) => reason?.opportunity_mutated === false) === true;
  const blockedReason = result?.block_code || result?.code || result?.error || "";
  return `
    <article class="phase-c-canary-result" data-case-card="${escapeHtml(item.case_key)}">
      <div class="card-header">
        <div><h4>CASE ${escapeHtml(item.case_key)}</h4><small>${escapeHtml(expectedLabel(item.expected))}</small></div>
        <span class="status-pill ${opportunity ? "is-running" : ""}">${escapeHtml(observation?.promotion_state || "not found")}</span>
      </div>
      <dl>
        <dt>Source</dt><dd>${escapeHtml(row.display_name || row.source_key)}</dd>
        <dt>Observation ID</dt><dd><code>${escapeHtml(item.observation_id)}</code></dd>
        <dt>Reference</dt><dd>${escapeHtml(observation?.procurement_reference || "—")}</dd>
        <dt>Title</dt><dd>${escapeHtml(observation?.title || "—")}</dd>
        <dt>Deadline</dt><dd>${escapeHtml(observation?.deadline || "—")}</dd>
        <dt>Predicted stage</dt><dd>${escapeHtml(observation?.predicted_procurement_stage || "—")}</dd>
        <dt>Confidence</dt><dd>${escapeHtml(formatConfidence(observation?.predicted_confidence))}</dd>
        <dt>Comparison state</dt><dd>${escapeHtml(observation?.comparison_state || "—")}</dd>
        <dt>Promotion state</dt><dd>${escapeHtml(observation?.promotion_state || "—")}</dd>
        <dt>Approved</dt><dd>${observation?.approved_for_promotion ? `yes — ${escapeHtml(formatDateTime(observation.approved_at || ""))}` : "no"}</dd>
        <dt>Promoted opportunity</dt><dd>${observation?.promoted_opportunity_id ? `<code>${escapeHtml(observation.promoted_opportunity_id)}</code>` : "—"}</dd>
        <dt>Source promotion approved</dt><dd>${row.promotion_approved === true ? "yes" : "no"}</dd>
      </dl>
      <div class="admin-inline-actions">
        <button type="button" data-action="v2-c2-approve-source" data-source-key="${escapeHtml(row.source_key)}" ${sourceApproved || busy ? "disabled" : ""}>Approve source for manual promotion</button>
        <button type="button" data-action="v2-c2-revoke-source" data-source-key="${escapeHtml(row.source_key)}" ${(!row.promotion_approved && row.mode !== "promote") || busy ? "disabled" : ""}>Revoke source approval</button>
        <button type="button" data-action="v2-c2-approve-observation" data-observation-id="${escapeHtml(item.observation_id)}" ${!sourceApproved || observation?.approved_for_promotion || busy || Boolean(opportunity) ? "disabled" : ""}>Approve observation</button>
        <button type="button" data-action="v2-c2-promote" data-observation-id="${escapeHtml(item.observation_id)}" ${!canPromote || busy ? "disabled" : ""}>Promote once</button>
        ${opportunity ? `<button type="button" data-action="v2-c2-assertions" data-observation-id="${escapeHtml(item.observation_id)}" data-opportunity-id="${escapeHtml(opportunity.id)}" ${busy ? "disabled" : ""}>Run downstream safety assertions</button>` : ""}
        ${["A", "B"].includes(item.case_key) ? `<button type="button" data-action="v2-c2-rollback" data-observation-id="${escapeHtml(item.observation_id)}" ${!canRollback || busy ? "disabled" : ""}>Roll back Case ${escapeHtml(item.case_key)}</button>` : ""}
        ${item.case_key === "C" ? `<button type="button" data-action="v2-c2-clear-approval" data-observation-id="${escapeHtml(item.observation_id)}" ${!canClearReviewApproval || busy ? "disabled" : ""}>Clear manual approval</button>` : ""}
      </div>
      ${!eligibility.ready && !opportunity ? `<p class="admin-message is-error">Promotion unavailable: ${escapeHtml(eligibility.reasons.join("; "))}</p>` : ""}
      ${result ? `
        <div class="admin-message ${result.ok === false ? "is-error" : ""}" role="status">
          <strong>${result.ok === false ? "PROMOTION BLOCKED" : result.action === "rollback_canary" ? "ROLLBACK SUCCEEDED" : result.action === "clear_c2_review_approval" ? "APPROVAL CLEARED" : "PROMOTION RESULT"}</strong>
          <dl>
            <dt>Returned opportunity ID</dt><dd>${result.opportunity_id ? `<code>${escapeHtml(result.opportunity_id)}</code>` : "—"}</dd>
            <dt>Provenance type</dt><dd>${escapeHtml(provenance?.provenance_type || "—")}</dd>
            ${item.case_key === "B" ? `<dt>Existing opportunity unchanged</dt><dd>${unchanged ? "yes" : "not yet verified"}</dd>` : ""}
            ${item.case_key === "C" ? `<dt>Blocked reason</dt><dd>${escapeHtml(blockedReason || "—")}</dd><dt>Opportunity created</dt><dd>${result.created === true || result.opportunity_created === true ? "yes" : "no"}</dd><dt>Provenance created</dt><dd>${result.provenance_attached === true || result.provenance_created === true ? "yes" : "no"}</dd>` : ""}
            ${result.action === "rollback_canary" ? `<dt>Rollback state</dt><dd>${escapeHtml(result.rollback?.rollback_status || "—")}</dd><dt>Opportunity deleted</dt><dd>${result.rollback?.opportunity_deleted === true ? "yes" : "no"}</dd>` : ""}
            ${result.action === "clear_c2_review_approval" ? `<dt>Review evidence preserved</dt><dd>${result.review_evidence_preserved === true ? "yes" : "no"}</dd><dt>Opportunity/provenance changed</dt><dd>${result.opportunity_mutated === false && result.provenance_mutated === false ? "no" : "unexpected"}</dd>` : ""}
          </dl>
          ${result.ok === false ? `<pre class="phase-c-canary-assertions">${escapeHtml(JSON.stringify(result, null, 2))}</pre>` : ""}
        </div>
      ` : ""}
      ${assertions ? `<pre class="phase-c-canary-assertions">${escapeHtml(JSON.stringify(assertions, null, 2))}</pre>` : ""}
      ${activeAction ? `<p class="admin-message">Running ${escapeHtml(activeAction)}…</p>` : ""}
    </article>
  `;
}

function expectedLabel(expected) {
  if (expected === "new_quarantined_opportunity") return "Expected: new quarantined opportunity";
  if (expected === "existing_opportunity_reuse") return "Expected: reuse existing opportunity + provenance only";
  return "Expected: fuzzy-only promotion block";
}

function renderPhaseCCanary(row, escapeHtml, formatDateTime, canaryAction, assertions, idempotency) {
  const canary = row.phaseCCanary || {};
  const observation = canary.observation || null;
  const provenance = canary.provenance || null;
  const opportunity = canary.opportunity || null;
  const sourceApproved = row.promotion_approved === true && row.mode === "promote";
  const busy = Boolean(canaryAction);
  const observationApproved = observation?.approved_for_promotion === true && observation?.promotion_state === "eligible";
  const eligibility = getKnownCanaryEligibility(row, observation);
  const canPromote = sourceApproved && observationApproved && eligibility.ready && !opportunity && !observation?.promoted_opportunity_id;
  const payload = opportunity?.raw_payload || {};
  const quarantine = payload.promotion_quarantine === "phase_c_canary";
  const alreadyPromotedCanary = Boolean(
    opportunity
    && provenance
    && observation?.promotion_state === "promoted"
    && observation?.promoted_opportunity_id === opportunity.id
    && quarantine
  );
  return `
    <section class="phase-c-canary" aria-labelledby="phase-c-canary-title">
      <div class="card-header">
        <div>
          <h3 id="phase-c-canary-title">Phase C canary — staging only</h3>
          <p>One Reykjavík observation. Manual approval and promotion only; no release or downstream actions.</p>
        </div>
        <span class="status-pill ${quarantine ? "is-error" : "is-running"}">${quarantine ? "QUARANTINED CANARY" : "STAGING ONLY"}</span>
      </div>
      <div class="phase-c-canary-grid">
        <div>
          <h4>Source approval</h4>
          <dl>
            <dt>Source</dt><dd>${escapeHtml(row.display_name || row.source_key)}</dd>
            <dt>Mode</dt><dd>${escapeHtml(row.mode || "unknown")}</dd>
            <dt>Promotion approved</dt><dd>${row.promotion_approved === true ? "yes" : "no"}</dd>
          </dl>
          <div class="admin-inline-actions">
            <button type="button" data-action="v2-c1-approve-source" ${sourceApproved || busy ? "disabled" : ""}>Approve source for manual promotion</button>
            <button type="button" data-action="v2-c1-revoke-source" ${(!row.promotion_approved && row.mode !== "promote") || busy ? "disabled" : ""}>Revoke source approval</button>
          </div>
        </div>
        <div>
          <h4>Selected observation</h4>
          ${observation ? `
            <dl>
              <dt>Observation ID</dt><dd><code>${escapeHtml(observation.id)}</code></dd>
              <dt>Reference</dt><dd>${escapeHtml(observation.procurement_reference || "—")}</dd>
              <dt>Title</dt><dd>${escapeHtml(observation.title || "—")}</dd>
              <dt>Deadline</dt><dd>${escapeHtml(observation.deadline || "—")}</dd>
              <dt>Predicted stage</dt><dd>${escapeHtml(observation.predicted_procurement_stage || "—")}</dd>
              <dt>Confidence</dt><dd>${escapeHtml(formatConfidence(observation.predicted_confidence))}</dd>
              <dt>Promotion state</dt><dd>${escapeHtml(observation.promotion_state || "—")}</dd>
              <dt>Approved</dt><dd>${observation.approved_for_promotion ? `yes — ${escapeHtml(formatDateTime(observation.approved_at || ""))}` : "no"}</dd>
              <dt>Promoted opportunity</dt><dd>${observation.promoted_opportunity_id ? `<code>${escapeHtml(observation.promoted_opportunity_id)}</code>` : "—"}</dd>
            </dl>
            ${!eligibility.ready ? `<p class="admin-message is-error">Promotion unavailable: ${escapeHtml(eligibility.reasons.join("; "))}</p>` : ""}
            <div class="admin-inline-actions">
              <button type="button" data-action="v2-c1-approve-observation" ${!sourceApproved || observation.approved_for_promotion || busy || Boolean(opportunity) ? "disabled" : ""}>Approve observation</button>
              <button type="button" data-action="v2-c1-promote" ${!canPromote || busy ? "disabled" : ""}>Promote once</button>
            </div>
          ` : `<p class="admin-message is-error">Configured canary observation was not found.</p>`}
        </div>
      </div>
      ${opportunity ? `
        <div class="phase-c-canary-result">
          <h4>Quarantined opportunity</h4>
          <dl>
            <dt>Opportunity ID</dt><dd><code>${escapeHtml(opportunity.id)}</code></dd>
            <dt>Status</dt><dd>${escapeHtml(opportunity.status || "—")}</dd>
            <dt>Quarantine</dt><dd>${escapeHtml(payload.promotion_quarantine || "—")}</dd>
            <dt>Hidden from reports</dt><dd>${payload.hidden_from_reports === true ? "yes" : "no"}</dd>
            <dt>Admin report status</dt><dd>${escapeHtml(payload.admin_report_status || "—")}</dd>
            <dt>Provenance type</dt><dd>${escapeHtml(provenance?.provenance_type || "—")}</dd>
          </dl>
          <div class="admin-inline-actions">
            ${alreadyPromotedCanary ? `<button type="button" data-action="v2-c1-test-idempotency" data-opportunity-id="${escapeHtml(opportunity.id)}" ${busy ? "disabled" : ""}>Test promotion idempotency</button>` : ""}
            <button type="button" data-action="v2-c1-assertions" data-opportunity-id="${escapeHtml(opportunity.id)}" ${busy ? "disabled" : ""}>Run downstream safety assertions</button>
            <button type="button" data-action="v2-c1-rollback" ${busy ? "disabled" : ""}>Roll back canary</button>
          </div>
          ${idempotency ? renderIdempotencyResult(idempotency, escapeHtml) : ""}
          ${assertions ? `<pre class="phase-c-canary-assertions">${escapeHtml(JSON.stringify(assertions, null, 2))}</pre>` : ""}
        </div>
      ` : ""}
      ${canaryAction ? `<p class="admin-message">Running ${escapeHtml(canaryAction)}…</p>` : ""}
    </section>
  `;
}

function renderIdempotencyResult(result, escapeHtml) {
  const status = result.pass === true ? "IDEMPOTENCY PASS" : "IDEMPOTENCY FAIL";
  return `
    <div class="admin-message ${result.pass === true ? "" : "is-error"}" role="status">
      <strong>${status}</strong>
      <dl>
        <dt>Returned opportunity ID</dt><dd><code>${escapeHtml(result.returned_opportunity_id || "—")}</code></dd>
        <dt>Opportunity count for deterministic identity</dt><dd>${Number(result.opportunity_count ?? 0)}</dd>
        <dt>Provenance count</dt><dd>${Number(result.provenance_count ?? 0)}</dd>
        <dt>Observation points to same opportunity</dt><dd>${result.observation_points_to_same_opportunity === true ? "yes" : "no"}</dd>
        <dt>Quarantine intact</dt><dd>${result.quarantine_intact === true ? "yes" : "no"}</dd>
        <dt>Downstream assertion</dt><dd>${result.downstream_assertions?.zero_downstream === true ? "zero downstream" : "FAILED"}</dd>
      </dl>
      <pre class="phase-c-canary-assertions">${escapeHtml(JSON.stringify(result, null, 2))}</pre>
    </div>
  `;
}

export function getKnownCanaryEligibility(row, observation, today = new Date()) {
  const reasons = [];
  const health = row?.health || {};
  const parserHealth = health.parser_health || {};
  const run = row?.latestShadowRun || {};
  if (!observation) return { ready: false, reasons: ["observation missing"] };
  if (observation.validation_state !== "valid") reasons.push("observation invalid");
  if (!["open_competition", "upcoming_procurement", "market_consultation"].includes(observation.predicted_procurement_stage)) reasons.push("stage is not promotion-eligible");
  if (observation.predicted_actionable !== true) reasons.push("not actionable");
  if (Number(observation.predicted_confidence || 0) < 0.90) reasons.push("confidence below 0.90");
  if (observation.predicted_requires_admin_review !== false) reasons.push("admin review required");
  if (!observation.procurement_reference) reasons.push("reference missing");
  if (!observation.canonical_url) reasons.push("canonical URL missing");
  if (!observation.buyer) reasons.push("buyer missing");
  if (observation.strong_procurement_evidence !== true) reasons.push("strong procurement evidence missing");
  if (observation.deadline_evidence !== "explicit_source") reasons.push("explicit deadline evidence missing");
  if (!["succeeded", "not_needed"].includes(observation.promotion_enrichment_status)) reasons.push("enrichment not successful");
  const todayIso = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())).toISOString().slice(0, 10);
  if (!observation.deadline || observation.deadline <= todayIso) reasons.push("deadline is not strictly future");
  if (!["legacy_match", "v2_only", "baseline_unavailable"].includes(observation.comparison_state)) reasons.push("comparison unresolved");
  if (run.status !== "succeeded" || !run.finished_at || Number(run.error_count || 0) !== 0 || run.suspicious_zero_items === true) reasons.push("latest run is not cleanly completed");
  if (health.status !== "healthy" || health.circuit_state !== "closed") reasons.push("source health is not healthy/closed");
  if (Array.isArray(parserHealth.parser_errors) ? parserHealth.parser_errors.length : true) reasons.push("parser errors unresolved");
  if (Number(parserHealth?.enrichment?.failed || 0) !== 0) reasons.push("source enrichment failures present");
  if (parserHealth.suspicious_zero_items === true) reasons.push("suspicious-zero health");
  return { ready: reasons.length === 0, reasons };
}

function formatConfidence(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number.toFixed(2) : "—";
}

function renderRow(row, escapeHtml, formatDateTime, canMutate = false) {
  const run = row.latestShadowRun || row.latestFixtureRun || row.latestRun || {};
  const health = row.health || {};
  const parserHealth = health.parser_health || {};
  const comparison = summarizeComparisons(row);
  const errors = Number(run.error_count || 0) + Number(row.invalidObservationCount || 0);
  const shadowControlsAvailable = canMutate && row.mode !== "promote";
  return `
    <tr>
      <td><strong>${escapeHtml(row.display_name || row.source_key || "Unknown")}</strong><br><small>${escapeHtml(`${row.parser_name || "parser"}@${row.parser_version || "?"}`)}</small></td>
      <td><span class="status-pill ${row.mode === "promote" ? "is-error" : "is-running"}">${escapeHtml(row.mode || "disabled")}</span></td>
      <td>${shadowControlsAvailable ? `<button type="button" data-action="v2-enable-shadow" data-source-key="${escapeHtml(row.source_key || "")}" ${row.mode === "shadow" ? "disabled" : ""}>Enable shadow</button><button type="button" data-action="v2-disable-shadow" data-source-key="${escapeHtml(row.source_key || "")}" ${row.mode !== "shadow" ? "disabled" : ""}>Disable shadow</button><button type="button" data-action="v2-run-shadow" data-source-key="${escapeHtml(row.source_key || "")}" ${row.mode !== "shadow" ? "disabled" : ""}>Run shadow now</button>` : canMutate ? `<small>Use Phase C2 controls below</small>` : `<small>Diagnostics only (non-staging)</small>`}</td>
      <td>${escapeHtml(formatDateTime(run.finished_at || run.started_at || run.created_at || health.last_run_at || ""))}</td>
      <td>${escapeHtml(run.status || health.status || "not run")}${run.suspicious_zero_items ? `<br><small>Zero-item anomaly</small>` : ""}</td>
      <td>${Number(row.observationCount || 0)} <small>(${Number(row.validObservationCount || 0)} valid)</small></td>
      <td>${errors}${health.last_error_message ? `<br><small>${escapeHtml(health.last_error_message)}</small>` : ""}</td>
      <td>${escapeHtml(health.status || "unknown")} / ${escapeHtml(health.circuit_state || "closed")}<br><small>${Number(parserHealth.fetched_count ?? run.fetched_count ?? 0)} fetched, ${Number(parserHealth.parsed_count ?? run.parsed_count ?? 0)} parsed, ${Number(parserHealth.valid_count ?? Math.max(0, Number(run.observation_count || 0) - Number(run.invalid_count || 0)))} valid, ${Number(parserHealth.invalid_count ?? run.invalid_count ?? 0)} invalid, ${Number(parserHealth.duplicate_count ?? run.duplicate_count ?? 0)} duplicates</small></td>
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
