export function renderConfirmationModal({
  title,
  message,
  confirmLabel,
  cancelLabel,
  busy = false,
  escapeHtml,
}) {
  return `
    <div class="modal-backdrop confirmation-modal-backdrop" data-confirmation-backdrop>
      <section
        class="confirmation-modal"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirmation-modal-title"
        aria-describedby="confirmation-modal-description"
      >
        <div>
          <h2 id="confirmation-modal-title">${escapeHtml(title)}</h2>
          <p id="confirmation-modal-description">${escapeHtml(message)}</p>
        </div>
        <div class="confirmation-modal-actions">
          <button class="btn btn-ghost" type="button" data-action="cancel-confirmation" ${busy ? "disabled" : ""}>${escapeHtml(cancelLabel)}</button>
          <button class="btn btn-danger" type="button" data-action="confirm-confirmation" data-confirmation-primary ${busy ? "disabled" : ""}>${escapeHtml(confirmLabel)}</button>
        </div>
      </section>
    </div>
  `;
}
