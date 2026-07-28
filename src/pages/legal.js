function legalParagraphs(items, escapeHtml) {
  return items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");
}

export function renderLegalPageContent({ escapeHtml, eyebrow, title, intro, sections }) {
  return `
    <section class="legal-page">
      <div class="legal-hero">
        <p class="eyebrow">${escapeHtml(eyebrow)}</p>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(intro)}</p>
      </div>
      <div class="legal-layout">
        ${sections.map(([sectionTitle, paragraphs]) => `
          <section class="legal-section">
            <h2>${escapeHtml(sectionTitle)}</h2>
            <div class="legal-content">${legalParagraphs(paragraphs, escapeHtml)}</div>
          </section>
        `).join("")}
      </div>
    </section>
  `;
}
