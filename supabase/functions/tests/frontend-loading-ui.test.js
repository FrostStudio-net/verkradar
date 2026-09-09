import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { renderLandingPage } from "../../../src/pages/public.js";
import { DEFAULT_DASHBOARD_QUALITY_FILTER, renderDashboardPage } from "../../../src/pages/dashboard.js";
import {
  renderPageLoadingSkeleton,
  renderReportArchiveSkeleton,
  renderSettingsSkeleton,
} from "../../../src/pages/skeletons.js";
import { getAuthStateChangePlan, registerBrowserResumeTracker } from "../../../src/services/authLifecycle.js";

const app = readFileSync(new URL("../../../app.js", import.meta.url), "utf8");
const css = readFileSync(new URL("../../../styles.css", import.meta.url), "utf8");
const index = readFileSync(new URL("../../../index.html", import.meta.url), "utf8");
const identity = (value) => String(value);

test("public homepage has one primary profile CTA and no sample section", () => {
  const landing = renderLandingPage({
    t: (key) => key,
    escapeHtml: identity,
    language: "is",
    trialHref: "/trial",
  });

  assert.match(landing, /hero-text[\s\S]*?<div class="hero-actions">[\s\S]*?<button class="btn btn-primary btn-large" data-action="go" data-href="\/trial">createProfile<\/button>/);
  assert.equal((landing.match(/data-href="\/trial"/g) || []).length, 1);
  assert.doesNotMatch(landing, /hero-actions[\s\S]*?btn-secondary/);
  assert.doesNotMatch(landing, /createFreeDemoProfile|sample-report|viewSampleReport|sampleReportTitle|public-report-preview/);
  assert.match(landing, /how-it-works-section/);

  const publicPage = readFileSync(new URL("../../../src/pages/public.js", import.meta.url), "utf8");
  assert.match(publicPage, /renderPricingPage[\s\S]*pricingTrialPlan/);
  assert.match(publicPage, /pricingCard[\s\S]*trialHref/);
  assert.match(app, /const isPublicHome = !isLoggedIn && getRoutePath\(state\.route\) === "\/"/);
  assert.match(app, /const headerCta = isPublicHome \? null : getHeaderCta/);
  assert.doesNotMatch(app, /navSampleReport|#sample-report/);
  assert.doesNotMatch(css, /sample-report-section|public-sample-report-page|public-report-preview/);
});

test("mobile authenticated pages preserve viewport scale and contain wide content", () => {
  assert.match(index, /<meta name="viewport" content="width=device-width, initial-scale=1\.0"\s*\/>/);
  assert.match(css, /@media \(max-width: 720px\)[\s\S]*?body \{\s*font-size: 14px;\s*\}[\s\S]*?input,\s*select,\s*textarea \{\s*font-size: 16px;\s*\}/);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?main\.app-main\.is-authenticated \{\s*width: min\(100% - 40px, 1180px\);\s*\}/);
  assert.match(css, /@media \(max-width: 360px\)[\s\S]*?main\.app-main\.is-authenticated \{\s*width: min\(100% - 32px, 1180px\);\s*\}/);
  assert.match(css, /\.ops-table-wrap \{[\s\S]*?overflow-x: auto;/);
  assert.match(css, /@media \(max-width: 760px\)[\s\S]*?\.opportunity-card \{[\s\S]*?grid-template-columns: 1fr;/);
  assert.doesNotMatch(css, /main\.app-main\.is-authenticated \{[^}]*(?:zoom|transform):/);

  for (const viewportWidth of [320, 375, 390, 430]) {
    const gutter = viewportWidth <= 360 ? 32 : 40;
    assert.ok(viewportWidth - gutter > 0 && viewportWidth - gutter < viewportWidth);
  }
});

test("dashboard loading uses content-shaped cards, stats, filters, and no loading copy", () => {
  const html = renderPageLoadingSkeleton("/dashboard");
  assert.match(html, /loading-skeleton-dashboard/);
  assert.match(html, /dashboard-head skeleton-dashboard-head/);
  assert.equal((html.match(/skeleton-stat-card/g) || []).length, 4);
  assert.equal((html.match(/skeleton-opportunity-card/g) || []).length, 3);
  assert.match(html, /skeleton-filter-row/);
  assert.equal((html.match(/skeleton-input/g) || []).length, 6);
  assert.match(html, /dashboard-filter-summary skeleton-dashboard-status/);
  assert.match(html, /opportunity-list skeleton-opportunity-list/);
  assert.match(html, /aria-hidden="true"/);
  assert.doesNotMatch(html, />[^<]*(loading|hleð)[^<]*</i);
});

test("customer dashboard defaults to all eligible matches and preserves the narrower recommended filter", () => {
  assert.equal(DEFAULT_DASHBOARD_QUALITY_FILTER, "all");
  assert.match(app, /label:\s*DEFAULT_DASHBOARD_QUALITY_FILTER/);
  assert.match(app, /if \(selected === "all"\) return true/);
  assert.match(app, /value: "recommended"[\s\S]*Mælt með/);
  assert.match(app, /value: "all"[\s\S]*Allar samsvaranir/);
});

test("Garðaþjónusta first-view fixture renders both eligible score-68 cards without a recommended empty state", () => {
  const matches = [
    {
      id: "winter-roads",
      title: "Vetrarþjónusta gatna í Garðabæ 2026–2029 (EES)",
      matchScore: 68,
    },
    {
      id: "winter-grounds",
      title: "Vetrarþjónusta stofnanalóða og húsagatna í Garðabæ 2026–2029 (EES)",
      matchScore: 68,
    },
  ];
  const html = renderDashboardPage({
    profile: { companyName: "Garðaþjónusta" },
    matches,
    stats: { strong: 0, closingSoon: 2, savedCount: 0, totalValue: "0 kr." },
    filters: { search: "", label: "all", category: "all", location: "all", type: "all", savedOnly: false },
    filterSummary: "2 tækifæri fundust sem gætu passað við Garðaþjónusta. Sýni 2.",
    matchStatus: null,
    opportunityLoadError: "",
    isAdmin: false,
    matchingLoading: false,
    labels: {
      dashboard: "Yfirlit",
      welcomeCompany: "Velkomin, Garðaþjónusta",
      dashboardIntro: "Nýjustu samsvaranir.",
      viewWeeklyReport: "Skoða yfirlit",
      strongMatches: "Sterkar samsvaranir",
      closingSoon: "Rennur út fljótlega",
      savedLabel: "Vistað",
      totalPotentialValue: "Heildarvirði",
      searchOpportunities: "Leita",
      savedOnly: "Aðeins vistað",
    },
    renderFilterDropdown: (key) => `<button data-filter-key="${key}">${key}</button>`,
    renderOpportunityCard: (match) => `<article data-opportunity-id="${match.id}"><h3>${match.title}</h3><span>Good match · ${match.matchScore}</span></article>`,
    renderEmptyState: () => "<div>Engar ráðlagðar samsvaranir</div>",
    escapeHtml: (value) => String(value),
  });

  assert.equal((html.match(/Good match · 68/g) || []).length, 2);
  assert.match(html, /Vetrarþjónusta gatna/);
  assert.match(html, /Vetrarþjónusta stofnanalóða/);
  assert.match(html, /Sterkar samsvaranir<\/span><strong>0<\/strong>/);
  assert.match(html, /Rennur út fljótlega<\/span><strong>2<\/strong>/);
  assert.doesNotMatch(html, /Engar ráðlagðar samsvaranir/);
});

test("customer report and company settings loaders match their final sections", () => {
  const report = renderPageLoadingSkeleton("/report");
  const archive = renderReportArchiveSkeleton(3);
  const settings = renderSettingsSkeleton();

  assert.match(report, /skeleton-report-preview/);
  assert.equal((archive.match(/class="skeleton-card skeleton-report-row"/g) || []).length, 3);
  assert.match(settings, /skeleton-form-grid/);
  assert.equal((settings.match(/skeleton-field-input/g) || []).length, 6);
  assert.match(report, /aria-hidden="true"/);
  assert.match(settings, /aria-hidden="true"/);
});

test("app routes boot, report archive, and settings loading through skeleton renderers", () => {
  assert.match(app, /renderShell\(renderPageLoadingSkeleton\(state\.route\)\)/);
  assert.match(app, /state\.reportArchiveLoading[\s\S]*renderReportArchiveSkeleton\(3\)/);
  assert.match(app, /state\.profileLoading[\s\S]*renderShell\(renderSettingsSkeleton\(\)\)/);
  assert.doesNotMatch(app, /class="app-loader"|class="loader-mark"/);
});

test("skeleton animation is subtle, responsive, and reduced-motion safe", () => {
  assert.match(css, /\.skeleton-block::after[\s\S]*animation: skeleton-shimmer 1\.8s ease-in-out infinite/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)[\s\S]*animation: none/);
  assert.match(css, /@media \(max-width: 720px\)[\s\S]*\.skeleton-opportunity-card/);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*\.skeleton-filter-row \.skeleton-search/);
  assert.match(css, /@media \(max-width: 340px\)[\s\S]*\.stats-grid/);
});

function hydratedAuthPlan(event, overrides = {}) {
  return getAuthStateChangePlan({
    event,
    previousUserId: "user-1",
    nextUserId: "user-1",
    hydratedUserId: "user-1",
    resumeContextMatches: false,
    profileLoaded: true,
    adminLoaded: true,
    profile: { id: "company-1" },
    companyId: "company-1",
    hasPendingInvite: false,
    passwordRecoveryActive: false,
    ...overrides,
  });
}

test("same-user SIGNED_IN after tab resume preserves the hydrated dashboard", () => {
  const plan = hydratedAuthPlan("SIGNED_IN");

  assert.equal(plan.preserveHydratedContext, true);
  assert.equal(plan.shouldReloadContext, false);
  assert.equal(plan.shouldRender, false);
});

test("same-user TOKEN_REFRESHED preserves the hydrated dashboard", () => {
  const plan = hydratedAuthPlan("TOKEN_REFRESHED");

  assert.equal(plan.preserveHydratedContext, true);
  assert.equal(plan.shouldReloadContext, false);
  assert.equal(plan.shouldRender, false);
});

test("different-user sign-in still performs full context initialization", () => {
  const plan = hydratedAuthPlan("SIGNED_IN", { nextUserId: "user-2" });

  assert.equal(plan.preserveHydratedContext, false);
  assert.equal(plan.shouldReloadContext, true);
  assert.equal(plan.shouldRender, true);
});

test("same-user events cannot preserve a context hydrated for a different user", () => {
  const plan = hydratedAuthPlan("TOKEN_REFRESHED", { hydratedUserId: "user-2" });

  assert.equal(plan.preserveHydratedContext, false);
  assert.equal(plan.shouldReloadContext, true);
});

test("browser tab and window return preserve the exact hydrated dashboard context", () => {
  const windowTarget = new EventTarget();
  const documentTarget = new EventTarget();
  documentTarget.visibilityState = "visible";
  let returnCount = 0;
  const context = {
    route: "/dashboard",
    userId: "user-1",
    companyId: "company-1",
    profile: { id: "company-1" },
    profileLoaded: true,
    adminLoaded: true,
  };
  const tracker = registerBrowserResumeTracker({
    windowTarget,
    documentTarget,
    getContext: () => context,
    onReturn: () => { returnCount += 1; },
  });

  const previousPlan = hydratedAuthPlan("SIGNED_IN", {
    hydratedUserId: "",
    resumeContextMatches: false,
  });
  assert.equal(previousPlan.shouldReloadContext, true);

  documentTarget.visibilityState = "hidden";
  documentTarget.dispatchEvent(new Event("visibilitychange"));
  documentTarget.visibilityState = "visible";
  documentTarget.dispatchEvent(new Event("visibilitychange"));
  windowTarget.dispatchEvent(new Event("focus"));

  const plan = hydratedAuthPlan("SIGNED_IN", {
    hydratedUserId: "",
    resumeContextMatches: tracker.matches(context),
  });

  assert.equal(returnCount, 2);
  assert.equal(plan.preserveHydratedContext, true);
  assert.equal(plan.shouldReloadContext, false);
  assert.equal(plan.shouldRender, false);
});

test("window blur and focus capture the hydrated context before Supabase session recovery", () => {
  const windowTarget = new EventTarget();
  const documentTarget = new EventTarget();
  documentTarget.visibilityState = "visible";
  const context = {
    route: "/dashboard",
    userId: "user-1",
    companyId: "company-1",
    profile: { id: "company-1" },
    profileLoaded: true,
    adminLoaded: true,
  };
  const tracker = registerBrowserResumeTracker({
    windowTarget,
    documentTarget,
    getContext: () => context,
    onReturn: () => {},
  });

  windowTarget.dispatchEvent(new Event("blur"));
  windowTarget.dispatchEvent(new Event("focus"));

  const plan = hydratedAuthPlan("TOKEN_REFRESHED", {
    hydratedUserId: "",
    resumeContextMatches: tracker.matches(context),
  });
  assert.equal(plan.preserveHydratedContext, true);
  assert.equal(plan.shouldReloadContext, false);
  assert.equal(plan.shouldRender, false);
});

test("pageshow restoration does not preserve a changed user or company context", () => {
  const windowTarget = new EventTarget();
  const documentTarget = new EventTarget();
  documentTarget.visibilityState = "visible";
  const context = {
    route: "/dashboard",
    userId: "user-1",
    companyId: "company-1",
    profile: { id: "company-1" },
    profileLoaded: true,
    adminLoaded: true,
  };
  const tracker = registerBrowserResumeTracker({
    windowTarget,
    documentTarget,
    getContext: () => context,
    onReturn: () => {},
  });

  windowTarget.dispatchEvent(new Event("pagehide"));
  windowTarget.dispatchEvent(new Event("pageshow"));

  assert.equal(tracker.matches(context), true);
  assert.equal(tracker.matches({ ...context, userId: "user-2" }), false);
  assert.equal(tracker.matches({ ...context, companyId: "company-2" }), false);
});

test("sign-out still clears and renders the signed-out state", () => {
  const plan = hydratedAuthPlan("SIGNED_OUT", { nextUserId: "" });

  assert.equal(plan.preserveHydratedContext, false);
  assert.equal(plan.shouldClearContext, true);
  assert.equal(plan.shouldRender, true);
});

test("same-user lifecycle events reload when company state is not hydrated or an invite is pending", () => {
  const missingCompany = hydratedAuthPlan("SIGNED_IN", { companyId: "" });
  const pendingInvite = hydratedAuthPlan("TOKEN_REFRESHED", { hasPendingInvite: true });
  const passwordRecovery = hydratedAuthPlan("TOKEN_REFRESHED", { passwordRecoveryActive: true });

  assert.equal(missingCompany.shouldReloadContext, true);
  assert.equal(pendingInvite.shouldReloadContext, true);
  assert.equal(passwordRecovery.preserveHydratedContext, false);
});

test("auth listener exits before global loading and profile reload for preserved lifecycle events", () => {
  const listenerStart = app.indexOf("supabaseClient.auth.onAuthStateChange");
  const listenerEnd = app.indexOf("async function bootApp", listenerStart);
  const listener = app.slice(listenerStart, listenerEnd);
  const earlyReturn = listener.indexOf("if (authStateChangePlan.preserveHydratedContext) return;");
  const adminReload = listener.indexOf("await checkAdminStatus();");
  const profileReload = listener.indexOf("await loadProfileFromSupabase();");

  assert.ok(listenerStart >= 0);
  assert.ok(earlyReturn >= 0);
  assert.ok(earlyReturn < adminReload);
  assert.ok(earlyReturn < profileReload);
  assert.match(app, /if \(state\.isBooting \|\| !state\.authLoaded \|\| !state\.profileLoaded \|\| !state\.adminLoaded\) html = renderLoadingPage\(\);/);
});
