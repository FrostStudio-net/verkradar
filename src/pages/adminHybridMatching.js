import {
  formatMatchingProfileArray,
  getCompanyMatchingProfile,
  isHybridMatchingEnabled,
  MATCH_DECISION_REASONS
} from "../services/hybridMatching.js";

export function renderAdminMatchingProfilePanel(company, options) {
  const { escapeHtml, actionState = "" } = options;
  const profile = getCompanyMatchingProfile(company);
  return `
    <section class="side-panel admin-matching-profile-panel">
      <div class="admin-company-ai-header">
        <div>
          <h3>Matching profile</h3>
          <p>Structured matching context for future hybrid scoring and AI reranking. Current production matching is unchanged.</p>
          <p><strong>Hybrid matching:</strong> ${isHybridMatchingEnabled() ? "Enabled" : "Disabled / comparison only"}</p>
        </div>
      </div>
      <form data-admin-matching-profile-form data-company-id="${escapeHtml(company.id)}">
        ${renderTextarea("Kjarnaþjónusta", "coreServices", profile.coreServices, escapeHtml)}
        ${renderTextarea("Aukaþjónusta", "secondaryServices", profile.secondaryServices, escapeHtml)}
        ${renderTextarea("Útilokuð þjónusta", "excludedServices", profile.excludedServices, escapeHtml)}
        ${renderTextarea("Æskilegar verkefnategundir", "preferredProjectTypes", profile.preferredProjectTypes, escapeHtml)}
        ${renderTextarea("Útilokaðar verkefnategundir", "excludedProjectTypes", profile.excludedProjectTypes, escapeHtml)}
        ${renderTextarea("Tæki og búnaður", "equipment", profile.equipment, escapeHtml)}
        ${renderTextarea("Vottanir / réttindi", "certifications", profile.certifications, escapeHtml)}
        ${renderTextarea("Æskilegir kaupendur", "preferredBuyers", profile.preferredBuyers, escapeHtml)}
        <label>Hámarks akstursfjarlægð (km)
          <input name="maxTravelDistanceKm" type="number" min="0" step="1" value="${escapeHtml(profile.maxTravelDistanceKm)}" />
        </label>
        <label>Dæmigerð verkefnastærð
          <input name="typicalProjectSize" value="${escapeHtml(profile.typicalProjectSize)}" />
        </label>
        <label>Athugasemdir fyrir AI
          <textarea name="profileNotesForAi" rows="4">${escapeHtml(profile.profileNotesForAi)}</textarea>
        </label>
        <button class="btn btn-secondary btn-small" type="submit" ${actionState === "matching_profile" ? "disabled" : ""}>
          ${actionState === "matching_profile" ? "Vista..." : "Vista matching profile"}
        </button>
      </form>
    </section>
  `;
}

export function renderMatchDecisionControls(match, options) {
  const { escapeHtml } = options;
  const decision = match.adminDecision || {};
  const evaluation = match.evaluationLabel || {};
  const opportunityId = match.opportunity_id || match.opportunities?.id || "";
  return `
    <div class="admin-match-learning-controls">
      <div class="admin-match-control-group">
        <h4>Admin decision</h4>
        <form data-admin-match-decision-form data-company-id="${escapeHtml(match.company_id || "")}">
          <input type="hidden" name="opportunityId" value="${escapeHtml(opportunityId)}" />
          <label><span>Decision</span><select name="decision">
            ${[
              ["", "Ákvörðun"],
              ["send", "Senda"],
              ["possible", "Mögulegt"],
              ["reject", "Hafna"]
            ].map(([value, label]) => `<option value="${value}" ${decision.decision === value ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}
          </select></label>
          <label><span>Reason</span><select name="reason">
            ${MATCH_DECISION_REASONS.map(([value, label]) => `<option value="${value}" ${decision.reason === value ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}
          </select></label>
          <label><span>Optional comment</span><input name="comment" value="${escapeHtml(decision.comment || "")}" placeholder="Athugasemd" /></label>
          <button class="btn btn-ghost btn-small" type="submit">Vista ákvörðun</button>
        </form>
      </div>
      <div class="admin-match-control-group">
        <h4>Match assessment</h4>
        <form data-admin-evaluation-label-form data-company-id="${escapeHtml(match.company_id || "")}">
          <input type="hidden" name="opportunityId" value="${escapeHtml(opportunityId)}" />
          <label><span>Assessment</span><select name="label">
            ${[
              ["", "Mat"],
              ["strong", "Sterkt"],
              ["possible", "Mögulegt"],
              ["no_fit", "Passar ekki"]
            ].map(([value, label]) => `<option value="${value}" ${evaluation.label === value ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}
          </select></label>
          <label><span>Reason</span><input name="reason" value="${escapeHtml(evaluation.reason || "")}" placeholder="Ástæða" /></label>
          <label><span>Notes</span><input name="notes" value="${escapeHtml(evaluation.notes || "")}" placeholder="Minnispunktar" /></label>
          <button class="btn btn-ghost btn-small" type="submit">Vista mat</button>
        </form>
      </div>
    </div>
  `;
}

function renderTextarea(label, name, value, escapeHtml) {
  return `
    <label>${escapeHtml(label)}
      <textarea name="${escapeHtml(name)}" rows="2">${escapeHtml(formatMatchingProfileArray(value))}</textarea>
    </label>
  `;
}
