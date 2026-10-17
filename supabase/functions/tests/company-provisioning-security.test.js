import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const migration = readFileSync(new URL("../../../supabase/migrations/20261017163000_company_provisioning_server_controlled.sql", import.meta.url), "utf8");
const app = readFileSync(new URL("../../../app.js", import.meta.url), "utf8");
const adminActions = readFileSync(new URL("../admin-company-actions/index.ts", import.meta.url), "utf8");
const inviteFunction = readFileSync(new URL("../company-invite/index.ts", import.meta.url), "utf8");

function customerSaveFunction() {
  return app.match(/async function saveCompanyProfile\(profile\)[\s\S]*?\n}\n\nfunction mapSupabaseCompanyProfile/)?.[0] || "";
}

test("authenticated customers cannot create or delete company rows", () => {
  assert.match(migration, /revoke all on public\.companies from public, anon, authenticated/i);
  assert.match(migration, /drop policy if exists "companies_insert_own"/i);
  assert.match(migration, /drop policy if exists "companies_delete_own"/i);
  assert.doesNotMatch(migration, /grant (?:insert|delete|all).*public\.companies.*authenticated/i);
  assert.match(migration, /grant all on public\.companies to service_role/i);
});

test("authenticated company updates exclude trusted billing and automation fields", () => {
  const updateGrant = migration.match(/grant update \(([\s\S]*?)\) on public\.companies to authenticated/i)?.[1] || "";
  for (const forbidden of [
    "owner_id", "plan", "selected_plan", "billing_status", "trial_started_at", "trial_ends_at",
    "minimum_relevance_threshold", "auto_ai_review_enabled", "auto_alert_mode", "notification_email",
    "source_trial_request_id", "internal_admin_notes", "matching_profile_hash", "matching_profile_updated_at",
  ]) {
    assert.doesNotMatch(updateGrant, new RegExp(`\\b${forbidden}\\b`, "i"));
  }
  for (const allowed of ["company_name", "contact_email", "website", "industry", "base_location", "service_areas"]) {
    assert.match(updateGrant, new RegExp(`\\b${allowed}\\b`, "i"));
  }
});

test("browser profile save updates an existing tenant and never provisions one", () => {
  const save = customerSaveFunction();
  assert.match(save, /if \(!state\.companyId\)[\s\S]*created by VerkRadar through the trial and invite process/i);
  assert.match(save, /\.from\("companies"\)[\s\S]*\.update\(companyPayload\)/);
  assert.doesNotMatch(save, /\.from\("companies"\)\s*\.(?:insert|upsert)\(/);
  assert.doesNotMatch(save, /owner_id\s*:/);
  assert.doesNotMatch(save, /auto_alert_mode\s*:/);
});

test("company RLS retains tenant reads and intended profile updates only", () => {
  assert.match(migration, /create policy "Admins read companies"[\s\S]*for select[\s\S]*is_admin\(\)/i);
  assert.match(migration, /create policy "Company members read companies"[\s\S]*for select[\s\S]*is_company_member\(id\)/i);
  assert.match(migration, /create policy "Company admins update companies"[\s\S]*for update[\s\S]*is_company_admin_member\(id\)/i);
  assert.doesNotMatch(migration, /create policy[\s\S]*for insert/i);
});

test("existing trusted admin trial conversion remains the only company creation path", () => {
  assert.match(adminActions, /adminClient = createClient\(supabaseUrl, serviceRoleKey/);
  assert.match(adminActions, /action === "create_company_from_trial_request"/);
  assert.match(adminActions, /async function createCompanyFromTrialRequest[\s\S]*\.from\("companies"\)[\s\S]*\.insert\(companyPayload\)/);
  assert.match(adminActions, /from\("internal_match_alert_subscriptions"\)[\s\S]*recipient_secret_name: "INTERNAL_MATCH_ALERT_EMAIL"/);
  assert.match(adminActions, /ensureCompanyOwnerMembership/);
});

test("invite acceptance only claims pre-provisioned membership", () => {
  assert.match(inviteFunction, /\.from\("company_members"\)[\s\S]*\.update\(/);
  assert.doesNotMatch(inviteFunction, /\.from\("companies"\)[\s\S]*\.(?:insert|upsert)\(/);
  const signup = app.match(/function renderSignup\(\)[\s\S]*?\n}\n\nfunction renderImportStatus/)?.[0] || "";
  assert.match(signup, /if \(!inviteToken\)[\s\S]*renderPublicSignupUnavailablePage/);
});
