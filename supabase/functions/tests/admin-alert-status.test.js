import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const edge = readFileSync(new URL("../admin-company-actions/index.ts", import.meta.url), "utf8");
const app = readFileSync(new URL("../../../app.js", import.meta.url), "utf8");

test("alert status is an admin-only read action with no dispatch path", () => {
  assert.match(edge, /from\("admin_users"\)/);
  assert.match(edge, /Admin access required/);
  assert.match(edge, /action === "get_alert_status"/);
  assert.match(edge, /from\("internal_match_alert_subscriptions"\)/);
  assert.match(edge, /from\("internal_match_alert_outbox"\)/);
  assert.match(edge, /recipient_secret_name === "INTERNAL_MATCH_ALERT_EMAIL"/);
  assert.doesNotMatch(edge, /RESEND_API_KEY/);
  assert.doesNotMatch(edge, /complete_internal_match_alert/);
  assert.doesNotMatch(edge, /claim_internal_match_alerts/);
});

test("admin alert panel is rendered from the authenticated admin action response", () => {
  assert.match(app, /loadAdminCompanyAlertStatus\(id\)/);
  assert.match(app, /renderAdminCompanyAlertStatus\(company\)/);
  assert.match(app, /operator_alert/);
  assert.match(app, /Customer automatic emails/);
});
