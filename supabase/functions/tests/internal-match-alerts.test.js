import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  ADMIN_URL,
  buildInternalMatchAlertEmail,
  isAuthorizedAutomationRequest,
  resendIdempotencyKey,
} from "../_shared/internal-match-alerts.js";

const migration = readFileSync(new URL("../../migrations/20260901103000_internal_match_alerts.sql", import.meta.url), "utf8");
const edge = readFileSync(new URL("../internal-match-alerts/index.ts", import.meta.url), "utf8");
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

test("database trigger is insert-only, target-scoped, qualifying, and permanently deduplicated", () => {
  assert.match(migration, /after insert on public\.opportunity_matches/i);
  assert.doesNotMatch(migration, /after update on public\.opportunity_matches/i);
  assert.match(migration, new RegExp(targetCompany, "g"));
  assert.match(migration, /unique \(alert_type, company_id, opportunity_id\)/i);
  assert.match(migration, /safety_status is distinct from 'auto_approved'/);
  assert.match(migration, /alert_eligible is distinct from true/);
  assert.match(migration, /review_required is distinct from false/);
  assert.match(migration, /new\.match_score < company_threshold/);
  assert.match(migration, /exception when others/);
  assert.match(migration, /notification enqueueing is best effort/i);
});

test("existing matches are suppressed before the enqueue trigger is installed", () => {
  const seed = migration.indexOf("'suppressed_existing'");
  const trigger = migration.indexOf("create trigger enqueue_internal_match_alert_after_insert");
  assert.ok(seed > 0 && trigger > seed);
  assert.match(migration, /Existing match at alert-system activation; no backfill email/);
  assert.match(migration, /on conflict \(alert_type, company_id, opportunity_id\) do nothing/i);
});

test("delivery is service-role internal, bounded, retryable, and Resend-idempotent", () => {
  assert.match(migration, /attempt_count between 0 and 3/);
  assert.match(migration, /for update skip locked/i);
  assert.match(migration, /interval '5 minutes'/);
  assert.match(migration, /interval '30 minutes'/);
  assert.match(migration, /grant execute on function public\.claim_internal_match_alerts\(integer\) to service_role/i);
  assert.match(migration, /revoke all on public\.internal_match_alert_outbox from public, anon, authenticated/i);
  assert.match(edge, /INTERNAL_MATCH_ALERT_EMAIL/);
  assert.match(edge, /TRIAL_NOTIFICATION_FROM/);
  assert.match(edge, /RESEND_API_KEY/);
  assert.match(edge, /"Idempotency-Key": email\.idempotencyKey/);
  assert.doesNotMatch(edge, /TRIAL_NOTIFICATION_EMAIL/);
});

test("alert implementation has no customer-send, AI, report, or matcher mutation path", () => {
  for (const forbidden of ["company_opportunity_sends", "ai_reviews", "opportunity_reports", "report_items", "refresh_matches", "matchCompaniesToOpportunities"]) {
    assert.doesNotMatch(`${migration}\n${edge}`, new RegExp(forbidden, "i"));
  }
  assert.doesNotMatch(edge, /\.from\("opportunity_matches"\)\s*\.insert|\.from\("opportunity_matches"\)\s*\.upsert/s);
});
