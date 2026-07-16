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
          <div class="admin-message is-success">
            <span>Skilaboðin hafa verið send. Við höfum samband eins fljótt og auðið er.</span>
          </div>
        ` : ""}
        ${error ? `
          <div class="admin-message is-error">
            <span>${escapeHtml(error)}</span>
          </div>
        ` : ""}
        <div class="form-honeypot" aria-hidden="true">
          <label for="contact-website">Website</label>
          <input id="contact-website" name="website" type="text" tabindex="-1" autocomplete="off" />
        </div>
        <div class="form-grid two">
          <label class="form-group">Nafn<input type="text" name="name" autocomplete="name" required /></label>
          <label class="form-group">Fyrirtæki <span class="optional-label">(valfrjálst)</span><input type="text" name="company" autocomplete="organization" /></label>
          <label class="form-group">Netfang<input type="email" name="email" autocomplete="email" required /></label>
          <label class="form-group">Sími <span class="optional-label">(valfrjálst)</span><input type="tel" name="phone" autocomplete="tel" /></label>
        </div>
        <label class="form-group">Efni
          <select name="subject" required>
            <option value="">Veldu efni</option>
            ${subjects.map((subject) => `<option value="${escapeHtml(subject)}">${escapeHtml(subject)}</option>`).join("")}
          </select>
        </label>
        <label class="form-group">Skilaboð<textarea name="message" rows="6" required></textarea></label>
        <button class="btn btn-primary btn-large" type="submit" ${submitting ? "disabled" : ""}>${submitting ? "Sendi..." : "Senda skilaboð"}</button>
      </form>
    </section>
  `;
}
