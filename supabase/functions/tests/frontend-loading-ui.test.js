import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { renderLandingPage } from "../../../src/pages/public.js";
import {
  renderPageLoadingSkeleton,
  renderReportArchiveSkeleton,
  renderSettingsSkeleton,
} from "../../../src/pages/skeletons.js";

const app = readFileSync(new URL("../../../app.js", import.meta.url), "utf8");
const css = readFileSync(new URL("../../../styles.css", import.meta.url), "utf8");
const identity = (value) => String(value);

test("public homepage removes only the demo/trial hero CTA", () => {
  const landing = renderLandingPage({
    t: (key) => key,
    escapeHtml: identity,
    language: "is",
    trialHref: "/trial",
  });

  assert.doesNotMatch(landing, /createFreeDemoProfile|data-href="\/trial"/);
  assert.match(landing, /data-target="sample-report"/);
  assert.match(landing, /hero-actions-single/);

  const publicPage = readFileSync(new URL("../../../src/pages/public.js", import.meta.url), "utf8");
  assert.match(publicPage, /renderPricingPage[\s\S]*pricingTrialPlan/);
  assert.match(publicPage, /pricingCard[\s\S]*trialHref/);
  assert.match(app, /const isPublicHome = !isLoggedIn && getRoutePath\(state\.route\) === "\/"/);
  assert.match(app, /const headerCta = isPublicHome \? null : getHeaderCta/);
});

test("dashboard loading uses content-shaped cards, stats, filters, and no loading copy", () => {
  const html = renderPageLoadingSkeleton("/dashboard");
  assert.match(html, /loading-skeleton-dashboard/);
  assert.equal((html.match(/skeleton-stat-card/g) || []).length, 4);
  assert.equal((html.match(/skeleton-opportunity-card/g) || []).length, 3);
  assert.match(html, /skeleton-filter-row/);
  assert.match(html, /aria-hidden="true"/);
  assert.doesNotMatch(html, />[^<]*(loading|hleð)[^<]*</i);
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
  assert.match(css, /@media \(max-width: 430px\)[\s\S]*\.skeleton-stats-grid/);
});
