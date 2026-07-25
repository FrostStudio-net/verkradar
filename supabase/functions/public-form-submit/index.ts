import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const CONTACT_SUBJECTS = new Set([
  "Spurning um VerkRadar",
  "Áhugi á prufu",
  "Ábending um útboð eða heimild",
  "Tæknileg aðstoð",
  "Annað",
]);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const contentLength = Number(req.headers.get("content-length") || 0);
  if (contentLength > 16_384) return json({ error: "Request body is too large." }, 413);

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) {
    return json({ error: "Public form submission is not configured." }, 500);
  }

  try {
    const body = await safeJson(req);
    const kind = body.kind === "trial" || body.kind === "contact" ? body.kind : "";
    if (!kind) return json({ error: "Unsupported form type." }, 400);

    // A filled honeypot receives a generic success response to avoid helping bots tune around it.
    if (clean(body.website, 500)) return json({ ok: true, stored: true });

    const payload = kind === "trial"
      ? validateTrialPayload(body.payload)
      : validateContactPayload(body.payload);
    const email = String(payload.email || "").toLowerCase();
    const ip = getClientIp(req);
    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

    const limits = [
      { bucket: `${kind}:ip:10m`, value: ip, limit: 5, seconds: 600 },
      { bucket: `${kind}:email:1h`, value: email, limit: 3, seconds: 3600 },
      { bucket: "public-forms:ip:day", value: ip, limit: 20, seconds: 86400 },
    ];
    for (const limit of limits) {
      const keyHash = await sha256Hex(`${serviceRoleKey}:${limit.value}`);
      const { data: allowed, error } = await supabase.rpc("consume_public_submission_rate_limit", {
        p_bucket: limit.bucket,
        p_key_hash: keyHash,
        p_limit: limit.limit,
        p_window_seconds: limit.seconds,
      });
      if (error) throw error;
      if (!allowed) {
        return json({ error: "Too many requests. Please try again later." }, 429, {
          "Retry-After": String(limit.seconds),
        });
      }
    }

    const table = kind === "trial" ? "trial_requests" : "contact_requests";
    const { data: saved, error: insertError } = await supabase
      .from(table)
      .insert(payload)
      .select("id")
      .single();
    if (insertError) throw insertError;

    let notification: Record<string, unknown> = { skipped: true };
    if (kind === "trial") {
      notification = await sendTrialNotification(supabaseUrl, serviceRoleKey, saved.id);
    }

    return json({
      ok: true,
      stored: true,
      request: { id: saved.id },
      notification,
    });
  } catch (error) {
    if (error instanceof RequestTooLargeError) return json({ error: error.message }, 413);
    if (error instanceof ValidationError) return json({ error: error.message }, 400);
    console.error("Public form submission failed:", errorMessage(error));
    return json({ error: "Unable to submit the form right now." }, 500);
  }
});

function validateTrialPayload(input: unknown) {
  const source = asRecord(input);
  const payload = {
    company_name: clean(source.company_name, 200),
    contact_name: clean(source.contact_name, 200),
    email: cleanEmail(source.email),
    phone: clean(source.phone, 40),
    services: clean(source.services, 2000),
    locations: clean(source.locations, 2000),
    message: clean(source.message, 4000),
    status: "new",
  };
  if (!payload.company_name || !payload.contact_name || !payload.email || !payload.services) {
    throw new ValidationError("Missing required trial request fields.");
  }
  return payload;
}

function validateContactPayload(input: unknown) {
  const source = asRecord(input);
  const payload = {
    name: clean(source.name, 200),
    company_name: clean(source.company_name, 200),
    email: cleanEmail(source.email),
    phone: clean(source.phone, 40),
    subject: clean(source.subject, 200),
    message: clean(source.message, 4000),
    status: "new",
  };
  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    throw new ValidationError("Missing required contact request fields.");
  }
  if (!CONTACT_SUBJECTS.has(payload.subject)) throw new ValidationError("Unsupported contact subject.");
  return payload;
}

function cleanEmail(input: unknown) {
  const email = clean(input, 254).toLowerCase();
  if (!/^\S+@\S+\.\S+$/.test(email)) throw new ValidationError("A valid email address is required.");
  return email;
}

function clean(input: unknown, maxLength: number) {
  const value = String(input ?? "").trim();
  if (value.length > maxLength) throw new ValidationError("One or more fields are too long.");
  return value;
}

function asRecord(input: unknown): Record<string, unknown> {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new ValidationError("Invalid form payload.");
  }
  return input as Record<string, unknown>;
}

function getClientIp(req: Request) {
  const cfIp = req.headers.get("cf-connecting-ip")?.trim();
  if (cfIp) return cfIp.slice(0, 100);
  const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return (forwarded || "unknown").slice(0, 100);
}

async function sendTrialNotification(supabaseUrl: string, serviceRoleKey: string, requestId: string) {
  try {
    const response = await fetch(`${supabaseUrl}/functions/v1/notify-trial-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
      body: JSON.stringify({ requestId }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error("Trial notification failed after storage:", response.status, errorMessage(result));
      return { ok: false, error: "notification_failed" };
    }
    return result;
  } catch (error) {
    console.error("Trial notification request failed:", errorMessage(error));
    return { ok: false, error: "notification_failed" };
  }
}

async function sha256Hex(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function safeJson(req: Request) {
  const text = await req.text();
  if (new TextEncoder().encode(text).byteLength > 16_384) {
    throw new RequestTooLargeError("Request body is too large.");
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new ValidationError("Invalid JSON body.");
  }
}

function json(body: unknown, status = 200, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, ...extraHeaders, "content-type": "application/json" },
  });
}

function errorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === "object" && error && "message" in error) {
    return String((error as Record<string, unknown>).message);
  }
  return String(error || "Unknown error");
}

class ValidationError extends Error {}
class RequestTooLargeError extends Error {}
