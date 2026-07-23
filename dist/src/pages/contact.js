export function renderContactPage({ escapeHtml, submitted = false, error = "", submitting = false }) {
  const subjects = [
    "Spurning um VerkRadar",
    "Áhugi á prufu",
    "Ábending um útboð eða heimild",
    "Tæknileg aðstoð",
    "Annað"
  ];
  return `
    <section class="page-head pricing-head">
      <p class="eyebrow">Hafa samband</p>
      <h1>Hafa samband</h1>
      <p>Viltu prófa VerkRadar, spyrja um vöktun eða senda okkur ábendingu?</p>
    </section>

    <section class="trial-request-layout contact-request-layout">
      <form id="contact-request-form" class="form-card trial-request-card contact-request-card" novalidate>
        ${submitted ? `
          <div class="admin-message is-success" role="status">
            <span>Skilaboðin hafa verið send. Við höfum samband eins fljótt og auðið er.</span>
          </div>
        ` : ""}
        ${error ? `
          <div class="admin-message is-error" role="alert">
            <span>${escapeHtml(error)}</span>
          </div>
        ` : ""}
        <div class="form-honeypot" aria-hidden="true">
          <label for="contact-website">Website</label>
          <input id="contact-website" name="website" type="text" tabindex="-1" autocomplete="off" />
        </div>
        <div class="form-grid two">
          ${renderContactInput({ id: "contact-name", name: "name", label: "Nafn", autocomplete: "name", required: true })}
          ${renderContactInput({ id: "contact-company", name: "company", label: "Fyrirtæki", autocomplete: "organization" })}
          ${renderContactInput({ id: "contact-email", name: "email", label: "Netfang", type: "email", autocomplete: "email", required: true })}
          ${renderContactInput({ id: "contact-phone", name: "phone", label: "Sími", type: "tel", autocomplete: "tel" })}
        </div>
        <div class="form-group custom-select-field">
          <span class="contact-field-label" id="contact-subject-label">Efni <span class="required-mark" aria-hidden="true">*</span></span>
          <input type="hidden" name="subject" value="" required aria-required="true" />
          <div class="custom-select" data-contact-subject-select>
            <button
              type="button"
              id="contact-subject-trigger"
              class="custom-select-trigger"
              data-action="toggle-contact-subject"
              aria-haspopup="listbox"
              aria-expanded="false"
              aria-controls="contact-subject-list"
              aria-labelledby="contact-subject-label contact-subject-value"
              aria-describedby="contact-subject-error"
              aria-required="true"
            >
              <span id="contact-subject-value" data-contact-subject-label>Veldu efni</span>
              <span class="custom-select-arrow" aria-hidden="true"></span>
            </button>
            <div
              id="contact-subject-list"
              class="custom-select-menu"
              role="listbox"
              aria-labelledby="contact-subject-trigger"
              hidden
            >
              ${subjects.map((subject) => `
                <button
                  type="button"
                  class="custom-select-option"
                  data-action="select-contact-subject"
                  data-value="${escapeHtml(subject)}"
                  role="option"
                  aria-selected="false"
                >
                  <span>${escapeHtml(subject)}</span>
                  <span class="custom-select-check" aria-hidden="true"></span>
                </button>
              `).join("")}
            </div>
          </div>
          <span class="field-error" id="contact-subject-error" aria-live="polite"></span>
        </div>
        <label class="form-group" for="contact-message">
          <span class="contact-field-label">Skilaboð <span class="required-mark" aria-hidden="true">*</span></span>
          <textarea id="contact-message" name="message" rows="6" required aria-required="true" aria-describedby="contact-message-error"></textarea>
          <span class="field-error" id="contact-message-error" aria-live="polite"></span>
        </label>
        <button class="btn btn-primary btn-large trial-request-submit" type="submit" ${submitting ? "disabled" : ""}>${submitting ? "Sendi..." : "Senda skilaboð"}</button>
      </form>
    </section>
  `;
}

export function validateContactRequestForm(form) {
  if (!form) return true;
  const fields = [
    { name: "name", message: "Nafn vantar." },
    { name: "email", message: "Netfang vantar.", invalidMessage: "Skráðu gilt netfang." },
    { name: "subject", message: "Veldu efni.", focusSelector: "#contact-subject-trigger" },
    { name: "message", message: "Skilaboð vantar." }
  ];
  const invalidControls = [];

  for (const field of fields) {
    const input = form.elements[field.name];
    const control = field.focusSelector ? form.querySelector(field.focusSelector) : input;
    clearContactRequestFieldError(control);
    const value = String(input?.value || "").trim();
    const message = !value
      ? field.message
      : field.invalidMessage && !input.validity.valid
        ? field.invalidMessage
        : "";
    if (!message || !control) continue;
    setContactRequestFieldError(control, message);
    invalidControls.push(control);
  }

  if (!invalidControls.length) return true;
  invalidControls[0].focus({ preventScroll: true });
  invalidControls[0].scrollIntoView({ behavior: "smooth", block: "center" });
  return false;
}

export function clearContactRequestFieldError(control) {
  if (!control) return;
  control.removeAttribute("aria-invalid");
  const errorId = control.getAttribute("aria-describedby");
  const error = errorId ? document.getElementById(errorId) : null;
  if (error) error.textContent = "";
}

function setContactRequestFieldError(control, message) {
  control.setAttribute("aria-invalid", "true");
  const errorId = control.getAttribute("aria-describedby");
  const error = errorId ? document.getElementById(errorId) : null;
  if (error) error.textContent = message;
}

function renderContactInput({ id, name, label, type = "text", autocomplete = "", required = false }) {
  const errorId = `${id}-error`;
  const requiredMark = required ? ` <span class="required-mark" aria-hidden="true">*</span>` : "";
  return `
    <label class="form-group" for="${id}">
      <span class="contact-field-label">${label}${requiredMark}</span>
      <input
        id="${id}"
        type="${type}"
        name="${name}"
        ${autocomplete ? `autocomplete="${autocomplete}"` : ""}
        ${required ? `required aria-required="true" aria-describedby="${errorId}"` : ""}
      />
      ${required ? `<span class="field-error" id="${errorId}" aria-live="polite"></span>` : ""}
    </label>
  `;
}
