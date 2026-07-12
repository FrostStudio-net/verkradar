import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  const recipient = Deno.env.get("TRIAL_NOTIFICATION_EMAIL");
  const sender = Deno.env.get("TRIAL_NOTIFICATION_FROM") || "VerkRadar <onboarding@resend.dev>";
  const appUrl = Deno.env.get("VERKRADAR_APP_URL") || "https://verkradar.vercel.app";

  if (!supabaseUrl || !serviceRoleKey) {
    return json({ error: "Missing Supabase Edge Function environment variables." }, 500);
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  try {
    const body = await safeJson(req);
    const requestId = String(body.requestId || body.id || "").trim();
    if (!isUuid(requestId)) return json({ error: "A valid requestId is required." }, 400);

    const { data: trialRequest, error: requestError } = await supabase
      .from("trial_requests")
      .select("id, company_name, contact_name, email, phone, services, locations, message, status, created_at, notification_sent_at, notification_started_at")
      .eq("id", requestId)
      .maybeSingle();
    if (requestError) throw requestError;
    if (!trialRequest) return json({ error: "Trial request not found." }, 404);

    if (trialRequest.notification_sent_at) {
      return json({
        ok: true,
        skipped: true,
        reason: "already_sent",
        request_id: requestId,
        notification_sent_at: trialRequest.notification_sent_at,
      });
    }

    if (trialRequest.notification_started_at) {
      return json({
        ok: true,
        skipped: true,
        reason: "notification_in_progress",
        request_id: requestId,
      });
    }

    const startedAt = new Date().toISOString();
    const { data: lockRow, error: lockError } = await supabase
      .from("trial_requests")
      .update({
        notification_started_at: startedAt,
        notification_error: null,
      })
      .eq("id", requestId)
      .is("notification_sent_at", null)
      .is("notification_started_at", null)
      .select("id")
      .maybeSingle();
    if (lockError) throw lockError;
    if (!lockRow) {
      return json({
        ok: true,
        skipped: true,
        reason: "already_claimed_or_sent",
        request_id: requestId,
      });
    }

    if (!resendApiKey || !recipient) {
      const message = "Trial notification email is not configured.";
      await markNotificationError(supabase, requestId, message);
      return json({ error: message, request_id: requestId }, 500);
    }

    const email = buildTrialRequestEmail(trialRequest, appUrl);
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        subject: `Ný prufubeiðni í VerkRadar – ${trialRequest.company_name || "óþekkt fyrirtæki"}`,
        text: email.text,
        html: email.html,
      }),
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      const message = result?.message || result?.error || `Resend failed with status ${response.status}`;
      await markNotificationError(supabase, requestId, message);
      return json({ error: message, request_id: requestId }, 502);
    }

    const sentAt = new Date().toISOString();
    const { error: updateError } = await supabase
      .from("trial_requests")
      .update({
        notification_sent_at: sentAt,
        notification_started_at: null,
        notification_error: null,
      })
      .eq("id", requestId)
      .is("notification_sent_at", null);
    if (updateError) throw updateError;

    return json({
      ok: true,
      request_id: requestId,
      notification_sent_at: sentAt,
      provider_id: result?.id || null,
    });
  } catch (error) {
    console.error("Trial request notification failed:", errorMessage(error));
    return json({ error: errorMessage(error) }, 500);
  }
});

function buildTrialRequestEmail(row: Record<string, unknown>, appUrl: string) {
  const adminUrl = `${appUrl.replace(/\/+$/, "")}/#/admin`;
  const lines = [
    `Fyrirtæki: ${value(row.company_name)}`,
    `Tengiliður: ${value(row.contact_name)}`,
    `Netfang: ${value(row.email)}`,
    `Sími: ${value(row.phone)}`,
    `Þjónusta: ${value(row.services)}`,
    `Svæði: ${value(row.locations)}`,
    `Athugasemd: ${value(row.message)}`,
    `Dagsetning: ${value(row.created_at)}`,
    "",
    `Admin Trial Requests: ${adminUrl}`,
  ];
  const htmlRows = [
    ["Fyrirtæki", row.company_name],
    ["Tengiliður", row.contact_name],
    ["Netfang", row.email],
    ["Sími", row.phone],
    ["Þjónusta", row.services],
    ["Svæði", row.locations],
    ["Athugasemd", row.message],
    ["Dagsetning", row.created_at],
  ].map(([label, field]) => `
    <tr>
      <td style="padding:6px 10px;border-bottom:1px solid #e5e7eb;font-weight:700;">${escapeHtml(label)}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #e5e7eb;">${escapeHtml(value(field))}</td>
    </tr>
  `).join("");
  return {
    text: lines.join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.45;color:#111827;">
        <h2>Ný prufubeiðni í VerkRadar</h2>
        <table style="border-collapse:collapse;width:100%;max-width:720px;">${htmlRows}</table>
        <p><a href="${escapeHtml(adminUrl)}">Opna Admin Trial Requests</a></p>
      </div>
    `,
  };
}

async function markNotificationError(
  supabase: ReturnType<typeof createClient>,
  requestId: string,
  message: string,
) {
  await supabase
    .from("trial_requests")
    .update({
      notification_started_at: null,
      notification_error: String(message || "Unknown notification error").slice(0, 1000),
    })
    .eq("id", requestId);
}

function value(input: unknown) {
  return String(input || "").trim() || "—";
}

function escapeHtml(input: unknown) {
  return String(input ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;",
  }[char] || char));
}

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

async function safeJson(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "content-type": "application/json" },
  });
}

function errorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === "object" && error && "message" in error) return String((error as Record<string, unknown>).message);
  return String(error || "Unknown error");
}
