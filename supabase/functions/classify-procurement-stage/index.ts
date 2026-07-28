import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import {
  PROCUREMENT_STAGES,
  buildAiClassifierInput,
  classificationColumns,
  classifyProcurementStage,
} from "../_shared/procurement-stage.js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-automation-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return json({ ok: true });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    await assertAuthorized(req);
    const body = await safeJson(req);
    const input = buildAiClassifierInput(body);
    if (!input.title && !input.body_text) return json({ error: "A title or body_text is required." }, 400);
    const deterministic = classifyProcurementStage({ ...input, connector_type: "rss_feed" });
    if (!deterministic.needs_ai || !String(input.source_type).toLowerCase().includes("municipal")) {
      const classification = classificationColumns(deterministic, deterministic.classified_by);
      return json({ ok: true, model: null, ...classification, confidence: classification.classification_confidence, short_reason: classification.classification_reason });
    }

    const openAiKey = requiredEnv("OPENAI_API_KEY");
    const model = Deno.env.get("OPENAI_CLASSIFIER_MODEL") || Deno.env.get("OPENAI_MODEL") || "gpt-4.1-mini";
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        authorization: `Bearer ${openAiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0,
        max_output_tokens: 700,
        input: [
          {
            role: "system",
            content: [{
              type: "input_text",
              text: [
                "Classify the procurement lifecycle stage of a public Icelandic source item.",
                "Planned construction is not planned procurement unless the text explicitly says a procurement or tender will occur.",
                "Work starting soon, work underway, traffic disruption, and resident notices are not supplier opportunities.",
                "Award notices, selected contractors, and signed contracts are not open competitions.",
                "Generic words such as framkvæmdir, fyrirhugað, endurnýjun, and verkið felur í sér are never sufficient evidence of supplier actionability.",
                "Use uncertain and require admin review when lifecycle evidence is ambiguous.",
              ].join(" "),
            }],
          },
          {
            role: "user",
            content: [{ type: "input_text", text: JSON.stringify(input) }],
          },
        ],
        text: {
          format: {
            type: "json_schema",
            name: "procurement_stage_classification",
            strict: true,
            schema: {
              type: "object",
              additionalProperties: false,
              properties: {
                procurement_stage: { type: "string", enum: PROCUREMENT_STAGES },
                confidence: { type: "number", minimum: 0, maximum: 1 },
                short_reason: { type: "string", maxLength: 500 },
                positive_signals: { type: "array", maxItems: 12, items: { type: "string", maxLength: 80 } },
                negative_signals: { type: "array", maxItems: 12, items: { type: "string", maxLength: 80 } },
                requires_admin_review: { type: "boolean" },
              },
              required: ["procurement_stage", "confidence", "short_reason", "positive_signals", "negative_signals", "requires_admin_review"],
            },
          },
        },
      }),
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(`OpenAI classification failed (${response.status}): ${JSON.stringify(payload).slice(0, 500)}`);
    const parsed = parseStructuredOutput(payload);
    const classification = classificationColumns(parsed, "openai");
    return json({ ok: true, model, ...classification, confidence: classification.classification_confidence, short_reason: classification.classification_reason });
  } catch (error) {
    console.error("Procurement-stage classification failed:", error);
    return json({ error: errorMessage(error) }, 500);
  }
});

async function assertAuthorized(req: Request) {
  const automationSecret = Deno.env.get("AUTOMATION_SECRET") || "";
  if (automationSecret && req.headers.get("x-automation-secret") === automationSecret) return;

  const authHeader = req.headers.get("authorization") || "";
  const jwt = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (!jwt) throw new Error("Authentication required.");
  const supabaseUrl = requiredEnv("SUPABASE_URL");
  const anonKey = requiredEnv("SUPABASE_ANON_KEY");
  const serviceRoleKey = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
  const userClient = createClient(supabaseUrl, anonKey, { global: { headers: { Authorization: authHeader } }, auth: { persistSession: false } });
  const adminClient = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false } });
  const { data: userData, error: userError } = await userClient.auth.getUser(jwt);
  if (userError || !userData.user) throw new Error("Authentication failed.");
  const { data: admin, error: adminError } = await adminClient.from("admin_users").select("user_id").eq("user_id", userData.user.id).maybeSingle();
  if (adminError) throw adminError;
  if (!admin) throw new Error("Admin access required.");
}

function parseStructuredOutput(payload: Record<string, unknown>) {
  const direct = String(payload.output_text || "");
  if (direct) return JSON.parse(direct);
  const output = Array.isArray(payload.output) ? payload.output as Record<string, unknown>[] : [];
  for (const item of output) {
    const content = Array.isArray(item.content) ? item.content as Record<string, unknown>[] : [];
    for (const part of content) {
      const text = String(part.text || part.output_text || "");
      if (text) return JSON.parse(text);
    }
  }
  throw new Error("OpenAI returned no structured classification.");
}

async function safeJson(req: Request) {
  try {
    return await req.json() as Record<string, unknown>;
  } catch {
    return {};
  }
}

function requiredEnv(name: string) {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing ${name}.`);
  return value;
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}

function json(payload: unknown, status = 200) {
  return new Response(JSON.stringify(payload), { status, headers: { ...corsHeaders, "content-type": "application/json" } });
}
