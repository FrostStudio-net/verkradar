export function renderLandingPage({ t, escapeHtml, language, trialHref }) {
  const isIcelandic = language === "is";
  const heroSamples = isIcelandic
    ? [
        { title: "Gatnagerð og lagnir við nýtt hverfi", type: "1", score: "Sterk samsvörun · Skilafrestur eftir 10 daga" },
        { title: "Lóðarframkvæmdir við skóla", type: "2", score: "Passar við lóðarvinnu · Staðfesta gögn" },
        { title: "Bílastæði og yfirborðsfrágangur", type: "3", score: "Möguleg samsvörun · Opna heimild" }
      ]
    : [
        { title: "Roadworks and utilities for a new neighborhood", type: "1", score: "Strong match · Deadline in 10 days" },
        { title: "Site works at a school", type: "2", score: "Fits site work · Verify documents" },
        { title: "Parking area and surface finishing", type: "3", score: "Possible match · Open source" }
      ];
  const targetCards = isIcelandic
    ? [
        ["Jarðvinna og gatnagerð", "Útboð um vegi, lóðir, bílastæði, stíga og jarðvegsvinnu."],
        ["Lagnavinna og fráveita", "Verkefni um lagnir, dælustöðvar, fráveitu, vatn og hitaveitu."],
        ["Malbikun og lóðarframkvæmdir", "Gatnagerð, yfirborðsfrágangur, gangstéttir og viðhald."],
        ["Rafverktakar", "Raflagnir, brunakerfi, lýsing, öryggiskerfi og hleðslustöðvar."],
        ["Ræstingar og þjónusta", "Reglulegir þjónustusamningar, húsþjónusta og rekstrarverkefni."],
        ["Verkfræðistofur og ráðgjafar", "Hönnun, eftirlit, ráðgjöf og verkefnastjórnun þegar það á við."]
      ]
    : [
        ["Earthworks and roadworks", "Tenders for roads, plots, parking areas, paths and earthworks."],
        ["Utilities and drainage", "Projects for pipes, pumping stations, drainage, water and heating utilities."],
        ["Paving and site works", "Road construction, surface finishing, sidewalks and maintenance."],
        ["Electrical contractors", "Wiring, fire alarms, lighting, security systems and chargers."],
        ["Cleaning and services", "Recurring service contracts, facility services and operations work."],
        ["Engineering and advisors", "Design, supervision, consulting and project management where relevant."]
      ];
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">${escapeHtml(t("heroEyebrow"))}</p>
        <h1>${escapeHtml(t("heroTitle"))}</h1>
        <p class="hero-text">
          ${escapeHtml(t("heroText"))}
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary btn-large" data-action="go" data-href="${escapeHtml(trialHref)}">${escapeHtml(t("createFreeDemoProfile"))} <span aria-hidden="true">&rarr;</span></button>
          <button class="btn btn-secondary btn-large" data-action="scroll-to" data-target="sample-report">${escapeHtml(t("viewSampleReport"))}</button>
        </div>
        <div class="proof-lines" aria-label="Product proof">
          <strong>${escapeHtml(t("proofStrong"))}</strong>
          <span>${escapeHtml(t("proofText"))}</span>
        </div>
      </div>
      <div class="product-shot hero-card" aria-label="VerkRadar product preview">
        <div class="shot-topbar">
          <span>VERKRADAR / ${escapeHtml(isIcelandic ? "JARÐVINNUFYRIRTÆKI EHF." : "CIVIL CONTRACTOR LTD.")}</span>
          <span>${new Date().toLocaleDateString(isIcelandic ? "is-IS" : "en-GB", { day: "2-digit", month: "short" })}</span>
        </div>
        <div class="shot-metric">
          <span>${escapeHtml(t("bestOpenMatch"))}</span>
          <strong>${escapeHtml(isIcelandic ? "3 verkefni sem passa" : "3 matching projects")}</strong>
        </div>
        <div class="shot-row is-active">
          <div>
            <span class="shot-label">${escapeHtml(heroSamples[0].type)}</span>
            <h3>${escapeHtml(heroSamples[0].title)}</h3>
            <p>${escapeHtml(heroSamples[0].score)}</p>
          </div>
        </div>
        ${heroSamples.slice(1, 3).map((opp) => `
          <div class="shot-row">
            <div>
              <span class="shot-label">${escapeHtml(opp.type)}</span>
              <h3>${escapeHtml(opp.title)}</h3>
              <p>${escapeHtml(opp.score)}</p>
            </div>
          </div>
        `).join("")}
        <div class="shot-footer">
          <span>${escapeHtml(t("deadlineRisk"))}</span>
          <strong>${escapeHtml(isIcelandic ? "2 verkefni" : "2 projects")}</strong>
        </div>
      </div>
    </section>

    <section class="problem-section">
      <div class="section-copy">
        <p class="eyebrow">${escapeHtml(t("problemEyebrow"))}</p>
        <h2>${escapeHtml(t("problemTitle"))}</h2>
      </div>
      <div class="problem-table">
        <div class="problem-row">
          <span>01</span>
          <h3>${escapeHtml(t("problemOneTitle"))}</h3>
          <p>${escapeHtml(t("problemOneText"))}</p>
        </div>
        <div class="problem-row">
          <span>02</span>
          <h3>${escapeHtml(t("problemTwoTitle"))}</h3>
          <p>${escapeHtml(t("problemTwoText"))}</p>
        </div>
      </div>
    </section>

    <section class="section target-section">
      <div class="section-copy">
        <p class="eyebrow">${escapeHtml(t("targetEyebrow"))}</p>
        <h2>${escapeHtml(t("targetTitle"))}</h2>
        <p>${escapeHtml(t("targetText"))}</p>
      </div>
      <div class="feature-grid target-grid">
        ${targetCards.map(([title, text]) => `
          <div class="feature-card">
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(text)}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <section id="how-it-works" class="section section-grid reversed how-it-works-section">
      <div class="feature-grid">
        <div class="feature-card"><h3>${escapeHtml(t("createProfileStep"))}</h3><p>${escapeHtml(t("createProfileStepText"))}</p></div>
        <div class="feature-card"><h3>${escapeHtml(t("matchProjectsStep"))}</h3><p>${escapeHtml(t("matchProjectsStepText"))}</p></div>
        <div class="feature-card"><h3>${escapeHtml(t("getReportStep"))}</h3><p>${escapeHtml(t("getReportStepText"))}</p></div>
      </div>
      <div class="section-copy">
        <p class="eyebrow">${escapeHtml(t("solutionEyebrow"))}</p>
        <h2>${escapeHtml(t("solutionTitle"))}</h2>
        <p>${escapeHtml(t("solutionText"))}</p>
      </div>
    </section>

    <section id="sample-report" class="section sample-report-section public-sample-report-page">
      <div class="section-copy">
        <p class="eyebrow">${escapeHtml(t("sampleReportEyebrow"))}</p>
        <h2>${escapeHtml(t("sampleReportTitle"))}</h2>
        <p>${escapeHtml(t("sampleReportText"))}</p>
      </div>
      <div class="public-report-preview">
        <div class="report-topbar">
          <span>${escapeHtml(t("reportTitle"))}</span>
          <span>Jarðtækni ehf.</span>
        </div>
        <article class="report-item">
          <h3>${escapeHtml(isIcelandic ? "Gatnagerð og lagnir á Akranesi" : "Roadworks and utilities in Akranes")}</h3>
          <p><strong>${escapeHtml(t("buyer"))}:</strong> ${escapeHtml(isIcelandic ? "Akraneskaupstaður" : "Akranes Municipality")}</p>
          <p><strong>${escapeHtml(t("deadline"))}:</strong> ${escapeHtml(t("daysLeft", { count: 18 }))} · <strong>${escapeHtml(t("possibleMatch"))}:</strong> 92/100</p>
          <ul>
            <li>${escapeHtml(isIcelandic ? "Nefnir gatnagerð og lagnir sem passa við verkflokka fyrirtækisins." : "Mentions roadworks and utilities that match the company profile.")}</li>
            <li>${escapeHtml(isIcelandic ? "Svæðið er innan valins þjónustusvæðis." : "The area is inside the selected service region.")}</li>
            <li>${escapeHtml(isIcelandic ? "Verkefnið er þess virði að staðfesta í upprunalegum útboðsgögnum." : "The project is worth verifying in the original tender documents.")}</li>
          </ul>
          <p><strong>${escapeHtml(t("openSource"))}:</strong> ${isIcelandic ? "Opnið heimild og staðfestið skilafrest, kröfur og gögn." : "Open the source and confirm deadline, requirements and documents."}</p>
        </article>
        <article class="report-item">
          <h3>${escapeHtml(isIcelandic ? "Lóðarframkvæmdir við Myllubakkaskóla" : "Site works at Myllubakkaskóli")}</h3>
          <p><strong>${escapeHtml(t("buyer"))}:</strong> ${escapeHtml(isIcelandic ? "Reykjanesbær" : "Reykjanesbær Municipality")}</p>
          <p><strong>${escapeHtml(t("deadline"))}:</strong> ${escapeHtml(t("daysLeft", { count: 24 }))} · <strong>${escapeHtml(t("possibleMatch"))}:</strong> 86/100</p>
          <ul>
            <li>${escapeHtml(isIcelandic ? "Inniheldur leitarorð: lóðarframkvæmdir, yfirborðsfrágangur." : "Contains keywords: site works, surface finishing.")}</li>
            <li>${escapeHtml(isIcelandic ? "Passar við jarðvinnu, frágang og verk á lóðum." : "Fits earthworks, finishing and site work services.")}</li>
          </ul>
        </article>
        <article class="report-item">
          <h3>${escapeHtml(isIcelandic ? "Verðfyrirspurn - Sandbakki - gatnagerð" : "Quote request - Sandbakki roadworks")}</h3>
          <p><strong>${escapeHtml(t("buyer"))}:</strong> ${escapeHtml(isIcelandic ? "Opinber verkkaupi" : "Public buyer")}</p>
          <p><strong>${escapeHtml(t("deadline"))}:</strong> ${escapeHtml(t("daysLeft", { count: 11 }))} · <strong>${escapeHtml(t("possibleMatch"))}:</strong> 83/100</p>
          <ul>
            <li>${escapeHtml(isIcelandic ? "Skýr verðfyrirspurn með gatnagerð í titli." : "Clear quote request with roadworks in the title.")}</li>
            <li>${escapeHtml(isIcelandic ? "Stuttur frestur, því þarf að bregðast hratt við." : "Short deadline, so it needs quick review.")}</li>
          </ul>
        </article>
        <p class="source-disclaimer">${escapeHtml(t("sourceDisclaimer"))}</p>
      </div>
    </section>

    <section class="cta-panel">
      <h2>${escapeHtml(t("tryDemoTitle"))}</h2>
      <p>${escapeHtml(t("tryDemoText"))}</p>
      <button class="btn btn-primary" data-action="load-demo">${escapeHtml(t("loadDemoCompany"))}</button>
    </section>
  `;
}

export function renderPricingPage({ t, escapeHtml, trialHref }) {
  const plans = [
    {
      key: "basic",
      name: t("pricingStarter"),
      price: "9.900 kr",
      items: [
        t("pricingWeeklyReport"),
        t("pricingFiveMatches"),
        t("pricingBasicMatching"),
        t("pricingDeadlineReminders"),
        t("pricingOneProfile")
      ]
    },
    {
      key: "pro",
      name: t("pricingGrowth"),
      price: "19.900 kr",
      highlighted: true,
      items: [
        t("pricingEverythingStarter"),
        t("pricingMoreSources"),
        t("pricingSummaries"),
        t("pricingLabels"),
        t("pricingSaved"),
        t("pricingArchive")
      ]
    },
    {
      key: "priority",
      name: t("pricingPro"),
      price: "29.900 kr",
      items: [
        t("pricingEverythingGrowth"),
        t("pricingDocumentSummaries"),
        t("pricingRequirements"),
        t("pricingRiskWarnings"),
        t("pricingBidChecklist"),
        t("pricingPrioritySupport")
      ]
    }
  ];
  return `
    <section class="page-head">
      <p class="eyebrow">${escapeHtml(t("pricingEyebrow"))}</p>
      <h1>${escapeHtml(t("pricingHeadline"))}</h1>
      <p>${escapeHtml(t("pricingSubtitle"))}</p>
    </section>

    <section class="pricing-grid">
      ${plans.map((plan) => pricingCard(plan, { t, escapeHtml, trialHref })).join("")}
    </section>
  `;
}

function pricingCard(plan, { t, escapeHtml, trialHref }) {
  const highlighted = Boolean(plan.highlighted);
  const href = `${trialHref}${String(trialHref).includes("?") ? "&" : "?"}plan=${encodeURIComponent(plan.key || "basic")}`;
  return `
    <div class="pricing-card ${highlighted ? "highlighted" : ""}">
      ${highlighted ? `<span class="popular">${escapeHtml(t("pricingBadge"))}</span>` : ""}
      <h2>${escapeHtml(plan.name)}</h2>
      <p class="price">${escapeHtml(plan.price)}<span>${escapeHtml(t("pricingMonth"))}</span></p>
      <ul class="check-list">
        ${plan.items.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}
      </ul>
      <button class="btn pricing-cta ${highlighted ? "btn-primary" : "btn-secondary"}" data-action="go" data-href="${escapeHtml(href)}">${escapeHtml(t("pricingCta"))}</button>
      <p class="pricing-trial-note">${escapeHtml(t("pricingTrialNoCard"))}</p>
    </div>
  `;
}
