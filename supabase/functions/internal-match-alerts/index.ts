import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import {
  buildInternalMatchAlertEmail,
  isAuthorizedAutomationRequest,
  TARGET_COMPANY_ID,
} from "../_shared/internal-match-alerts.js";

const jsonHeaders = { "Content-Type": "application/json" };

Deno.serve(async (request) => {
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
  const automationSecret = Deno.env.get("AUTOMATION_SECRET") || "";
  const requestSecret = request.headers.get("x-automation-secret") || "";
  if (!isAuthorizedAutomationRequest({ supabaseUrl, automationSecret, requestSecret })) {
    return json({ error: "Unauthorized" }, 401);
  }

  const resendApiKey = Deno.env.get("RESEND_API_KEY") || "";
  const sender = Deno.env.get("TRIAL_NOTIFICATION_FROM") || "";
  const recipient = Deno.env.get("INTERNAL_MATCH_ALERT_EMAIL") || "";
  if (!serviceRoleKey || !resendApiKey || !sender || !recipient) {
    return json({ error: "Internal match alert delivery is not configured." }, 503);
  }

  const body = await request.json().catch(() => ({}));
  if (body?.action !== "dispatch") return json({ error: "Unsupported action" }, 400);
  const batchLimit = Math.max(1, Math.min(Number(body?.batch_limit) || 5, 10));
  const supabase = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false } });
  const { data: alerts, error: claimError } = await supabase.rpc("claim_internal_match_alerts", {
    batch_limit: batchLimit,
  });
  if (claimError) return json({ error: "Unable to claim internal alerts." }, 500);

  const result = { claimed: alerts?.length || 0, sent: 0, failed: 0 };
  for (const alert of alerts || []) {
    let providerStatus = null;
    try {
      if (alert.company_id !== TARGET_COMPANY_ID) throw new Error("Alert company is outside configured scope.");
      const { data: match, error: matchError } = await supabase
        .from("opportunity_matches")
        .select("id, company_id, opportunity_id, match_score, match_reasons, safety_status, alert_eligible, review_required")
        .eq("company_id", alert.company_id)
        .eq("opportunity_id", alert.opportunity_id)
        .maybeSingle();
      if (matchError || !match) throw new Error("Qualifying match no longer exists.");

      const { data: opportunity, error: opportunityError } = await supabase
        .from("opportunities")
        .select("id, title, buyer, deadline, source_id, sources(name)")
        .eq("id", alert.opportunity_id)
        .maybeSingle();
      if (opportunityError || !opportunity) throw new Error("Opportunity no longer exists.");

      const linkedSources = opportunity.sources as unknown;
      const sourceName = Array.isArray(linkedSources)
        ? String(linkedSources[0]?.name || "")
        : linkedSources && typeof linkedSources === "object" && "name" in linkedSources
          ? String((linkedSources as { name?: unknown }).name || "")
          : "";
      const email = buildInternalMatchAlertEmail({ alert, match, opportunity, sourceName });
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
          "Idempotency-Key": email.idempotencyKey,
        },
        body: JSON.stringify({
          from: sender,
          to: [recipient],
          subject: email.subject,
          text: email.text,
          html: email.html,
        }),
      });
      providerStatus = response.status;
      const providerResult = await response.json().catch(() => ({}));
      if (!response.ok || !providerResult?.id) {
        throw new Error(String(providerResult?.message || providerResult?.error || `Resend HTTP ${response.status}`));
      }
      const { error: completeError } = await supabase.rpc("complete_internal_match_alert", {
        alert_id: alert.id,
        delivered: true,
        provider_id: providerResult.id,
        error_text: null,
        provider_http_status: response.status,
      });
      if (completeError) throw new Error("Email sent but delivery log update failed.");
      result.sent += 1;
    } catch (error) {
      const safeError = String(error instanceof Error ? error.message : error).slice(0, 1000);
      await supabase.rpc("complete_internal_match_alert", {
        alert_id: alert.id,
        delivered: false,
        provider_id: null,
        error_text: safeError,
        provider_http_status: providerStatus,
      });
      result.failed += 1;
    }
  }
  return json({ ok: result.failed === 0, ...result }, result.failed === 0 ? 200 : 207);
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}
