import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  ADMIN_URL,
  buildInternalMatchAlertEmail,
  isAuthorizedAutomationRequest,
  resendIdempotencyKey,
} from "../_shared/internal-match-alerts.js";

const baseMigration = readFileSync(new URL("../../migrations/20260901103000_internal_match_alerts.sql", import.meta.url), "utf8");
const subscriptionMigration = readFileSync(new URL("../../migrations/20261015190000_subscription_driven_internal_operator_alerts.sql", import.meta.url), "utf8");
const edge = readFileSync(new URL("../internal-match-alerts/index.ts", import.meta.url), "utf8");
const adminEdge = readFileSync(new URL("../admin-company-actions/index.ts", import.meta.url), "utf8");
const targetCompany = "cad6b69e-b021-447d-b637-31b2e8dbff2e";

test("automation authorization is exact-production and secret gated", () => {
  assert.equal(isAuthorizedAutomationRequest({
    supabaseUrl: "https://asojxjbsgqbfpbepojzh.supabase.co",
    automationSecret: "expected",
    requestSecret: "expected",
  }), true);
  assert.equal(isAuthorizedAutomationRequest({
    supabaseUrl: "https://ipixuxznqtrcdpzoxric.supabase.co",
    automationSecret: "expected",
    requestSecret: "expected",
  }), false);
  assert.equal(isAuthorizedAutomationRequest({
    supabaseUrl: "https://asojxjbsgqbfpbepojzh.supabase.co",
    automationSecret: "expected",
    requestSecret: "customer-jwt-only",
  }), false);
});

test("email contains only requested operator-facing match context", () => {
  const alert = { company_id: targetCompany, opportunity_id: "00000000-0000-4000-8000-000000000021" };
  const email = buildInternalMatchAlertEmail({
    alert,
    match: { match_score: 68, match_reasons: ["Service: vetrarþjónusta +10", "Local geography +22"] },
    opportunity: { title: "Vetrarþjónusta", buyer: "Garðabær", deadline: "2026-09-15" },
    sourceName: "Garðabær V2",
    companyName: "Garðaþjónusta",
  });
  assert.match(email.subject, /Ný VerkRadar samsvörun/);
  assert.match(email.text, /Garðaþjónusta/);
  assert.match(email.text, /Garðabær/);
  assert.match(email.text, /68/);
  assert.match(email.text, /Companies → Garðaþjónusta/);
  assert.match(email.text, new RegExp(ADMIN_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.equal(email.idempotencyKey, resendIdempotencyKey(alert));
  assert.equal(email.idempotencyKey, `new_qualifying_match/${targetCompany}/${alert.opportunity_id}`);
});

test("database trigger stays insert-only, subscription-driven, qualifying, and deduplicated", () => {
  assert.match(baseMigration, /after insert on public\.opportunity_matches/i);
  assert.doesNotMatch(baseMigration, /after update on public\.opportunity_matches/i);
  assert.match(baseMigration, /unique \(alert_type, company_id, opportunity_id\)/i);
  assert.match(subscriptionMigration, /subscriptions\.company_id = new\.company_id/);
  assert.match(subscriptionMigration, /subscriptions\.recipient_secret_name = 'INTERNAL_MATCH_ALERT_EMAIL'/);
  assert.doesNotMatch(subscriptionMigration, /new\.company_id\s*(?:is distinct from|<>|!=|= any|<> all)/i);
  assert.match(subscriptionMigration, /safety_status is distinct from 'auto_approved'/);
  assert.doesNotMatch(subscriptionMigration, /new\.alert_eligible/);
  assert.match(subscriptionMigration, /review_required is distinct from false/);
  assert.match(subscriptionMigration, /new\.match_score < company_threshold/);
  assert.match(subscriptionMigration, /exception when others/);
  assert.doesNotMatch(edge, /INTERNAL_ALERT_COMPANY_IDS|outside configured scope/);
});

test("existing matches are suppressed before the enqueue trigger is installed", () => {
  const seed = baseMigration.indexOf("'suppressed_existing'");
  const trigger = baseMigration.indexOf("create trigger enqueue_internal_match_alert_after_insert");
  assert.ok(seed > 0 && trigger > seed);
  assert.match(baseMigration, /Existing match at alert-system activation; no backfill email/);
  assert.match(baseMigration, /on conflict \(alert_type, company_id, opportunity_id\) do nothing/i);
  assert.doesNotMatch(subscriptionMigration, /suppressed_existing/);
});

test("delivery is service-role internal, bounded, retryable, and Resend-idempotent", () => {
  assert.match(baseMigration, /attempt_count between 0 and 3/);
  assert.match(subscriptionMigration, /for update skip locked/i);
  assert.match(baseMigration, /interval '5 minutes'/);
  assert.match(baseMigration, /interval '30 minutes'/);
  assert.match(subscriptionMigration, /grant execute on function public\.claim_internal_match_alerts\(integer\) to service_role/i);
  assert.match(baseMigration, /revoke all on public\.internal_match_alert_outbox from public, anon, authenticated/i);
  assert.match(edge, /INTERNAL_MATCH_ALERT_EMAIL/);
  assert.match(edge, /TRIAL_NOTIFICATION_FROM/);
  assert.match(edge, /RESEND_API_KEY/);
  assert.match(edge, /"Idempotency-Key": email\.idempotencyKey/);
  assert.doesNotMatch(edge, /TRIAL_NOTIFICATION_EMAIL/);
});

test("alert implementation has no customer-send, AI, report, or matcher mutation path", () => {
  for (const forbidden of ["company_opportunity_sends", "ai_reviews", "opportunity_reports", "report_items", "refresh_matches", "matchCompaniesToOpportunities"]) {
    assert.doesNotMatch(`${subscriptionMigration}\n${edge}`, new RegExp(forbidden, "i"));
  }
  assert.doesNotMatch(edge, /\.from\("opportunity_matches"\)\s*\.insert|\.from\("opportunity_matches"\)\s*\.upsert/s);
});

test("admin trial conversion enrolls only the internal secret-backed operator path", () => {
  assert.match(adminEdge, /from\("internal_match_alert_subscriptions"\)/);
  assert.match(adminEdge, /recipient_secret_name: "INTERNAL_MATCH_ALERT_EMAIL"/);
  assert.match(adminEdge, /enabled: true/);
  assert.doesNotMatch(adminEdge, /notification_email:\s*cleanProfile/);
});
