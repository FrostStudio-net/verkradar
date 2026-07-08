import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type AiFit = "strong" | "possible" | "weak" | "no_fit";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const supabaseUrl = requiredEnv("SUPABASE_URL");
    const anonKey = requiredEnv("SUPABASE_ANON_KEY");
    const serviceRoleKey = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
    const openAiKey = requiredEnv("OPENAI_API_KEY");
    const model = Deno.env.get("OPENAI_MODEL") || "gpt-4.1-mini";

    const authHeader = req.headers.get("authorization") || "";
    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false },
    });
    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

    const { data: userData, error: userError } = await userClient.auth.getUser();
    if (userError || !userData.user) return json({ error: "Unauthorized" }, 401);

    const { data: adminRow, error: adminError } = await adminClient
      .from("admin_users")
      .select("user_id")
      .eq("user_id", userData.user.id)
      .maybeSingle();
    if (adminError) throw adminError;
    if (!adminRow) return json({ error: "Admin access required" }, 403);

    const body = await safeJson(req);
    const matchId = String(body.matchId || body.match_id || "").trim();
    if (!isUuid(matchId)) return json({ error: "A valid matchId is required." }, 400);
    const force = body.force === true;

    const context = await loadReviewContext(adminClient, matchId);
    if (!force) {
      const { data: existing, error: existingError } = await adminClient
        .from("ai_match_reviews")
        .select("*")
        .eq("company_id", context.company.id)
        .eq("opportunity_id", context.opportunity.id)
        .maybeSingle();
      if (existingError) throw existingError;
      if (existing) return json({ ok: true, cached: true, review: existing });
    }

    const rawReview = await callOpenAiForReview(openAiKey, model, context);
    const review = applyHardSafetyRules(rawReview, context);
    const row = {
      company_id: context.company.id,
      opportunity_id: context.opportunity.id,
      match_id: context.match.id,
      fit: review.fit,
      confidence: review.confidence,
      send_to_client: review.send_to_client,
      reason: review.reason,
      fit_reasons: review.fit_reasons,
      risks_or_questions: review.risks_or_questions,
      suggested_client_summary: review.suggested_client_summary,
      model,
      updated_at: new Date().toISOString(),
    };

    const { data: saved, error: saveError } = await adminClient
      .from("ai_match_reviews")
      .upsert(row, { onConflict: "company_id,opportunity_id" })
      .select("*")
      .single();
    if (saveError) throw saveError;

    return json({ ok: true, cached: false, review: saved });
  } catch (error) {
    console.error("AI match review failed:", error);
    return json({ error: errorMessage(error) }, 500);
  }
});

async function loadReviewContext(supabase: ReturnType<typeof createClient>, matchId: string) {
  const { data: match, error: matchError } = await supabase
    .from("opportunity_matches")
    .select(`
      id,
      company_id,
      opportunity_id,
      match_score,
      match_label,
      match_reasons,
      risks,
      safety_status,
      safety_reasons,
      alert_eligible,
      review_required,
      companies (*),
      opportunities (
        *,
        sources (
          name,
          source_type
        )
      )
    `)
    .eq("id", matchId)
    .single();
  if (matchError) throw matchError;
  if (!match?.companies || !match?.opportunities) throw new Error("Match context is incomplete.");

  const [servicesResult, keywordsResult, locationsResult] = await Promise.all([
    supabase.from("company_services").select("service").eq("company_id", match.company_id),
    supabase.from("company_keywords").select("keyword, type").eq("company_id", match.company_id),
    supabase.from("company_locations").select("location").eq("company_id", match.company_id),
  ]);
  if (servicesResult.error) throw servicesResult.error;
  if (keywordsResult.error) throw keywordsResult.error;
  if (locationsResult.error) throw locationsResult.error;

  const keywords = keywordsResult.data || [];
  return {
    match,
    company: {
      id: String(match.companies.id),
      name: String(match.companies.company_name || ""),
      industry: String(match.companies.industry || ""),
      services: (servicesResult.data || []).map((row) => String(row.service || "")).filter(Boolean),
      includeKeywords: keywords.filter((row) => row.type === "include").map((row) => String(row.keyword || "")).filter(Boolean),
      excludeKeywords: keywords.filter((row) => row.type === "exclude").map((row) => String(row.keyword || "")).filter(Boolean),
      locations: (locationsResult.data || []).map((row) => String(row.location || "")).filter(Boolean),
      baseLocation: String(match.companies.base_location || ""),
      serviceAreas: Array.isArray(match.companies.service_areas) ? match.companies.service_areas.map(String) : [],
      willingToTravel: Boolean(match.companies.willing_to_travel),
      nationalProjects: Boolean(match.companies.national_projects),
      remoteProjects: Boolean(match.companies.remote_projects),
    },
    opportunity: {
      id: String(match.opportunities.id),
      title: String(match.opportunities.title || ""),
      description: String(match.opportunities.description || ""),
      buyer: String(match.opportunities.buyer || ""),
      location: String(match.opportunities.location || ""),
      source: String(match.opportunities.sources?.name || match.opportunities.raw_payload?.source_name || ""),
      sourceType: String(match.opportunities.sources?.source_type || ""),
      deadline: match.opportunities.deadline ? String(match.opportunities.deadline) : "",
      deadlineAt: String(match.opportunities.raw_payload?.deadline_at || ""),
      category: String(match.opportunities.category || ""),
      type: String(match.opportunities.type || ""),
      status: String(match.opportunities.status || ""),
      rawPayload: match.opportunities.raw_payload && typeof match.opportunities.raw_payload === "object" ? match.opportunities.raw_payload : {},
    },
  };
}

async function callOpenAiForReview(openAiKey: string, model: string, context: Record<string, unknown>) {
  const input = [
    {
      role: "system",
      content: [{
        type: "input_text",
        text: [
          "You are an expert Icelandic B2B tender analyst for VerkRadar.",
          "Assess whether the opportunity is relevant for the company profile.",
          "Return strict JSON only. No markdown.",
          "Use fit: strong, possible, weak, or no_fit.",
          "Set send_to_client=false if the deadline is missing, expired, hidden, needs manual deadline review, outside service area, wrong work type, or uncertain.",
        ].join(" "),
      }],
    },
    {
      role: "user",
      content: [{
        type: "input_text",
        text: JSON.stringify({
          instructions: {
            output_schema: {
              fit: "strong | possible | weak | no_fit",
              confidence: "number 0..1",
              send_to_client: "boolean",
              reason: "short string",
              fit_reasons: "string[]",
              risks_or_questions: "string[]",
              suggested_client_summary: "short Icelandic customer-facing summary",
            },
            safety_rules: [
              "If deadline is missing, send_to_client=false.",
              "If deadline is expired, send_to_client=false.",
              "If opportunity is hidden/needs_review because of missing deadline, send_to_client=false.",
              "If location is clearly outside service area and company is not national/travel, downgrade.",
              "If tender is supervision/consulting/design but company is execution contractor, downgrade.",
              "If uncertain, fit should be possible or weak and send_to_client=false.",
            ],
          },
          context,
        }),
      }],
    },
  ];

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      authorization: `Bearer ${openAiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model,
      input,
      temperature: 0.1,
      max_output_tokens: 900,
      text: {
        format: {
          type: "json_schema",
          name: "ai_match_review",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              fit: { type: "string", enum: ["strong", "possible", "weak", "no_fit"] },
              confidence: { type: "number", minimum: 0, maximum: 1 },
              send_to_client: { type: "boolean" },
              reason: { type: "string" },
              fit_reasons: { type: "array", items: { type: "string" } },
              risks_or_questions: { type: "array", items: { type: "string" } },
              suggested_client_summary: { type: "string" },
            },
            required: ["fit", "confidence", "send_to_client", "reason", "fit_reasons", "risks_or_questions", "suggested_client_summary"],
          },
        },
      },
    }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload?.error?.message || `OpenAI request failed with status ${response.status}`);
  return normalizeAiReview(parseOpenAiJson(payload));
}

function parseOpenAiJson(payload: Record<string, unknown>) {
  const outputText = String(payload.output_text || "");
  if (outputText) return JSON.parse(outputText);
  const output = Array.isArray(payload.output) ? payload.output : [];
  for (const item of output) {
    const content = Array.isArray((item as Record<string, unknown>).content) ? (item as Record<string, unknown>).content as Record<string, unknown>[] : [];
    for (const part of content) {
      const text = String(part.text || part.output_text || "");
      if (text) return JSON.parse(text);
    }
  }
  throw new Error("OpenAI response did not include JSON output.");
}

function normalizeAiReview(value: Record<string, unknown>) {
  const fit = ["strong", "possible", "weak", "no_fit"].includes(String(value.fit)) ? String(value.fit) as AiFit : "weak";
  const confidence = Math.max(0, Math.min(1, Number(value.confidence || 0)));
  return {
    fit,
    confidence,
    send_to_client: value.send_to_client === true,
    reason: String(value.reason || "").slice(0, 1200),
    fit_reasons: toStringArray(value.fit_reasons).slice(0, 8),
    risks_or_questions: toStringArray(value.risks_or_questions).slice(0, 8),
    suggested_client_summary: String(value.suggested_client_summary || "").slice(0, 1200),
  };
}

function applyHardSafetyRules(review: ReturnType<typeof normalizeAiReview>, context: Record<string, unknown>) {
  const opportunity = context.opportunity as Record<string, unknown>;
  const match = context.match as Record<string, unknown>;
  const rawPayload = opportunity.rawPayload && typeof opportunity.rawPayload === "object" ? opportunity.rawPayload as Record<string, unknown> : {};
  const deadline = String(opportunity.deadline || "");
  const deadlineAt = String(opportunity.deadlineAt || rawPayload.deadline_at || "");
  const days = daysUntil(deadline || deadlineAt);
  const isMissingDeadline = !deadline && !deadlineAt;
  const isExpired = Number.isFinite(days) && days < 0;
  const hidden = opportunity.status === "hidden" || rawPayload.hidden_from_reports === true || ["hidden", "noise", "deleted"].includes(String(rawPayload.admin_report_status || ""));
  const missingDeadlineReview = String(rawPayload.deadline_debug_reason || rawPayload.deadline_warning || "").toLowerCase().includes("missing");
  if (isMissingDeadline || isExpired || hidden || missingDeadlineReview || String(match.safety_status || "") === "hidden") {
    return {
      ...review,
      fit: review.fit === "strong" ? "possible" : review.fit,
      send_to_client: false,
      risks_or_questions: uniqueStrings([
        ...review.risks_or_questions,
        isMissingDeadline ? "Missing bid deadline; do not send automatically." : "",
        isExpired ? "Deadline appears expired; do not send automatically." : "",
        hidden ? "Opportunity is hidden or excluded by system rules." : "",
        missingDeadlineReview ? "Opportunity requires manual deadline review." : "",
      ]),
    };
  }
  return review;
}

function daysUntil(value: string) {
  if (!value) return Number.NaN;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return Number.NaN;
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const normalized = new Date(date);
  normalized.setUTCHours(0, 0, 0, 0);
  return Math.ceil((normalized.getTime() - today.getTime()) / 86400000);
}

function toStringArray(value: unknown) {
  return Array.isArray(value) ? value.map((item) => String(item || "").trim()).filter(Boolean) : [];
}

function uniqueStrings(values: string[]) {
  return Array.from(new Set(values.map((value) => String(value || "").trim()).filter(Boolean)));
}

function requiredEnv(name: string) {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing ${name}.`);
  return value;
}

async function safeJson(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

function json(payload: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...corsHeaders, "content-type": "application/json" },
  });
}

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}
