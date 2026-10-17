import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { renderConfirmationModal } from "../../../src/pages/confirmationModal.js";
import { renderProfileFormPage } from "../../../src/pages/profile.js";
import { renderAdminCompanyProfilePanel } from "../../../src/pages/adminCompanyProfile.js";

const app = readFileSync(new URL("../../../app.js", import.meta.url), "utf8");
const css = readFileSync(new URL("../../../styles.css", import.meta.url), "utf8");
const migration = readFileSync(new URL("../../../supabase/migrations/20260902130000_gardathjonusta_client_handoff.sql", import.meta.url), "utf8");
const matchSecurityMigration = readFileSync(new URL("../../../supabase/migrations/20261017113000_opportunity_match_customer_read_only.sql", import.meta.url), "utf8");
const inviteFunction = readFileSync(new URL("../../../supabase/functions/company-invite/index.ts", import.meta.url), "utf8");
const identity = (value) => String(value ?? "");

function profileContext() {
  return {
    t: (key) => ({ selectedPlan: "Valin áskrift", plan_basic: "Grunnur", planChangeContact: "Hafðu samband" }[key] || key),
    escapeHtml: identity,
    profileDraft: {
      selectedPlan: "basic", companyName: "Garðaþjónusta", services: [], includeKeywords: [], excludeKeywords: [],
      locations: [], serviceAreas: [],
    },
    renderCustomDropdown: ({ key }) => `<button data-dropdown="${key}"></button>`,
    getFilterOptions: () => [],
    arrayFieldText: () => "",
    getProfileSuggestions: () => [],
    renderSuggestionChips: () => "",
    formatCustomerLocation: identity,
    capitalize: identity,
    hasProfile: true,
    isSavingProfile: false,
    profileSaved: false,
  };
}

test("customer settings render the current plan read-only", () => {
  const html = renderProfileFormPage(profileContext());
  assert.match(html, /data-customer-plan-readonly/);
  assert.match(html, />Grunnur</);
  assert.doesNotMatch(html, /name="selectedPlan"/);
  assert.doesNotMatch(html, /data-dropdown="selectedPlan"/);
});

test("admin company profile retains plan editing", () => {
  const html = renderAdminCompanyProfilePanel({ selectedPlan: "basic", services: [], includeKeywords: [], excludeKeywords: [], locations: [] }, {
    escapeHtml: identity,
    actionState: "",
    result: null,
    dirty: false,
  });
  assert.match(html, /name="selectedPlan"/);
});

test("database keeps plan and billing columns outside authenticated customer grants", () => {
  assert.match(migration, /revoke update on public\.companies from public, anon, authenticated/);
  const grant = migration.match(/grant update \(([\s\S]*?)\) on public\.companies to authenticated/)?.[1] || "";
  for (const forbidden of ["plan", "selected_plan", "billing_status", "trial_started_at", "trial_ends_at"]) {
    assert.doesNotMatch(grant, new RegExp(`\\b${forbidden}\\b`));
  }
});

test("customer match access is read-only and browser matching never writes canonical rows", () => {
  assert.match(matchSecurityMigration, /revoke all on public\.opportunity_matches from public, anon, authenticated/i);
  assert.match(matchSecurityMigration, /grant select on public\.opportunity_matches to authenticated/i);
  assert.match(matchSecurityMigration, /create policy "Company members read opportunity matches"[\s\S]*for select[\s\S]*is_company_member\(company_id\)/i);
  assert.doesNotMatch(matchSecurityMigration, /for (?:all|insert|update|delete)[\s\S]*is_company_member\(company_id\)/i);
  const customerRefresh = app.match(/async function runMatchingForCurrentCompany\(\)[\s\S]*?\n}\n\nasync function addOpportunity/)?.[0] || "";
  assert.doesNotMatch(customerRefresh, /\.from\("opportunity_matches"\)/);
  assert.match(customerRefresh, /runAdminCompanyAction\(company\.id, "refresh_matches"\)/);
});

test("report hiding uses an accessible custom confirmation dialog", () => {
  const html = renderConfirmationModal({
    title: "Fela yfirlit?", message: "Útskýring", confirmLabel: "Fela yfirlit", cancelLabel: "Hætta við", escapeHtml: identity,
  });
  assert.match(html, /role="alertdialog"/);
  assert.match(html, /aria-modal="true"/);
  assert.match(html, /data-confirmation-primary/);
  assert.match(app, /requestArchiveReport\(id, action\)/);
  assert.doesNotMatch(app, /async function archiveReport[\s\S]{0,350}window\.confirm/);
  assert.match(app, /event\.key === "Escape"[\s\S]*closeConfirmationDialog/);
  assert.match(app, /event\.key === "Tab"[\s\S]*trapConfirmationFocus/);
  assert.match(css, /\.confirmation-modal-actions/);
});

test("accepted invites are atomically consumed and cannot be reused", () => {
  assert.match(inviteFunction, /token_hash: null/);
  assert.match(inviteFunction, /expires_at: null/);
  assert.match(inviteFunction, /\.eq\("status", "invited"\)/);
  assert.match(inviteFunction, /\.eq\("token_hash", await sha256Hex\(token\)\)/);
  assert.match(migration, /Accepted company invite must consume its token/);
  assert.doesNotMatch(app, /claimInvitedCompanyMemberships\(supabaseClient/);
});

test("pre-launch report cleanup archives exact unsent records without deleting reports or matches", () => {
  assert.match(migration, /update public\.reports/);
  assert.match(migration, /and sent_at is null/);
  assert.doesNotMatch(migration, /delete from public\.(reports|report_items|opportunities|opportunity_matches)/);
  assert.doesNotMatch(migration, /update public\.(opportunities|opportunity_matches)/);
});
