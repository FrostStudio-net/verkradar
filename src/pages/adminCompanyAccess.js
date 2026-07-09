export function renderAdminCompanyAccessPanel(company, options) {
  const {
    escapeHtml,
    formatDateTime,
    inviteEmail = "",
    actionState = "",
  } = options;
  const members = Array.isArray(company.members) ? company.members : [];
  const activeMembers = members.filter((member) => member.status === "active");
  const invitedMembers = members.filter((member) => member.status === "invited");
  const accessLabel = activeMembers.length
    ? "Active"
    : invitedMembers.length
      ? "Invited"
      : "Not invited";
  const busy = Boolean(actionState);
  return `
    <section class="side-panel admin-company-access-panel">
      <h3>Customer access</h3>
      <p><strong>Access status:</strong> ${escapeHtml(accessLabel)}</p>
      ${members.length ? `
        <ul class="admin-detail-list admin-company-access-list">
          ${members.map((member) => renderCompanyMemberRow(member, { escapeHtml, formatDateTime, busy })).join("")}
        </ul>
      ` : `<p>No customer access has been invited yet.</p>`}
      <div class="admin-access-invite">
        <label>
          <span>Customer email</span>
          <input
            type="email"
            data-admin-company-invite-email
            data-id="${escapeHtml(company.id)}"
            value="${escapeHtml(inviteEmail)}"
            placeholder="${escapeHtml(company.billingEmail || company.contactEmail || "customer@example.com")}"
          />
        </label>
        <button class="btn btn-secondary btn-small" type="button" data-action="admin-invite-company-customer" data-id="${escapeHtml(company.id)}" ${busy ? "disabled" : ""}>
          ${actionState === "invite" ? "Inviting..." : invitedMembers.length ? "Resend invite" : "Invite customer"}
        </button>
      </div>
    </section>
  `;
}

function renderCompanyMemberRow(member, options) {
  const { escapeHtml, formatDateTime, busy } = options;
  const isRevoked = member.status === "revoked";
  const statusClass = member.status === "active" ? "is-success" : member.status === "invited" ? "is-running" : "";
  return `
    <li>
      <div>
        <strong>${escapeHtml(member.email || "Unknown email")}</strong>
        <span>${escapeHtml(member.role || "member")} · <span class="status-pill ${statusClass}">${escapeHtml(member.status || "unknown")}</span></span>
        <span>${member.accepted_at ? `Accepted ${escapeHtml(formatDateTime(member.accepted_at))}` : `Invited ${escapeHtml(formatDateTime(member.invited_at))}`}</span>
      </div>
      ${isRevoked ? "" : `
        <button
          class="btn btn-ghost btn-small"
          type="button"
          data-action="admin-revoke-company-access"
          data-id="${escapeHtml(member.company_id)}"
          data-member-id="${escapeHtml(member.id)}"
          ${busy ? "disabled" : ""}
        >
          Revoke access
        </button>
      `}
    </li>
  `;
}
