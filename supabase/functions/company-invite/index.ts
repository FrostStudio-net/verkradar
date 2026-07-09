import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !anonKey || !serviceRoleKey) {
      return json({ error: "Missing Supabase Edge Function environment variables." }, 500);
    }

    const body = await safeJson(req);
    const token = String(body.token || "").trim();
    if (!token) {
      const diagnostics = buildPreviewDiagnostics("", false, null);
      console.info("company_invite_preview_lookup", diagnostics);
      return json({ error: "Invite token is required.", code: "invite_invalid", diagnostics }, 400);
    }

    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });
    const action = String(body.action || (body.preview === true ? "preview" : body.accept === true ? "accept" : "")).trim();
    if (!["preview", "accept"].includes(action)) {
      return json({ error: "Unsupported invite action." }, 400);
    }

    let lookup;
    try {
      lookup = await loadInviteByToken(adminClient, token);
    } catch (lookupError) {
      const diagnostics = await buildQueryErrorDiagnostics(token);
      console.info("company_invite_preview_lookup", diagnostics);
      console.error("Company invite lookup failed:", errorMessage(lookupError));
      return json({ error: "Invite lookup failed.", code: "invite_invalid", diagnostics }, 500);
    }
    console.info("company_invite_preview_lookup", lookup.diagnostics);
    const invite = lookup.invite;
    if (!invite) {
      return json({
        error: "Invite not found, expired, or revoked.",
        code: "invite_invalid",
        status: "invalid",
        diagnostics: lookup.diagnostics,
      }, 404);
    }

    const inviteStatus = getInviteStatus(invite);
    if (action === "preview") {
      console.info("company_invite_preview_success", {
        member_id: invite.id,
        company_id: invite.company_id,
        invited_email: invite.email,
        status: invite.status,
        expires_at: invite.expires_at,
        token_hash_prefix: lookup.diagnostics.computed_hash_prefix,
      });
      return json({
        ok: true,
        company_name: invite.company_name || "Company",
        invited_email: invite.email,
        role: invite.role,
        status: inviteStatus,
        expires_at: invite.expires_at,
        diagnostics: lookup.diagnostics,
      });
    }

    if (action === "accept") {
      if (inviteStatus === "expired" || inviteStatus === "revoked") {
        return json({
          error: "Invite not found, expired, or revoked.",
          code: "invite_invalid",
          status: inviteStatus,
        }, 410);
      }
      const authHeader = req.headers.get("authorization") || "";
      if (!authHeader) return json({ error: "Log in to accept this invite." }, 401);
      const userClient = createClient(supabaseUrl, anonKey, {
        global: { headers: { Authorization: authHeader } },
        auth: { persistSession: false },
      });
      const { data: userData, error: userError } = await userClient.auth.getUser();
      if (userError || !userData.user) return json({ error: "Log in to accept this invite." }, 401);

      const userEmail = normalizeEmail(userData.user.email);
      if (userEmail !== normalizeEmail(invite.email)) {
        return json({
          error: `This invite was sent to ${invite.email}. Log in with that email address.`,
          code: "email_mismatch",
          invited_email: invite.email,
        }, 403);
      }

      if (invite.status === "active") {
        if (invite.user_id === userData.user.id) {
          return json({
            ok: true,
            company_id: invite.company_id,
            company_name: invite.company_name || "Company",
            member: {
              id: invite.id,
              company_id: invite.company_id,
              email: invite.email,
              role: invite.role,
              status: invite.status,
              accepted_at: invite.accepted_at,
            },
          });
        }
        return json({
          error: "This invite has already been accepted.",
          code: "invite_already_accepted",
          status: "active",
        }, 409);
      }

      const now = new Date().toISOString();
      const { data, error } = await adminClient
        .from("company_members")
        .update({
          user_id: userData.user.id,
          status: "active",
          accepted_at: now,
          revoked_at: null,
          updated_at: now,
        })
        .eq("id", invite.id)
        .select("id, company_id, email, role, status, accepted_at")
        .single();
      if (error) throw error;

      return json({
        ok: true,
        company_id: data.company_id,
        company_name: invite.company_name || "Company",
        member: data,
      });
    }
  } catch (error) {
    console.error("Company invite failed:", error);
    return json({ error: errorMessage(error) }, 500);
  }
});

async function loadInviteByToken(supabase: ReturnType<typeof createClient>, token: string) {
  const tokenHash = await sha256Hex(token);
  const { data, error } = await supabase
    .from("company_members")
    .select("id, company_id, user_id, email, role, status, expires_at, accepted_at, revoked_at, created_at")
    .eq("token_hash", tokenHash)
    .order("created_at", { ascending: false })
    .limit(10);
  if (error) throw error;
  const rows = data || [];
  const diagnosticRow = (row: Record<string, unknown> | null) => row
    ? {
      ...row,
      computed_hash_prefix: tokenHash.slice(0, 8),
      matching_rows_count: rows.length,
      lookup_table: "company_members",
      lookup_column: "token_hash",
    }
    : {
      computed_hash_prefix: tokenHash.slice(0, 8),
      matching_rows_count: rows.length,
      lookup_table: "company_members",
      lookup_column: "token_hash",
    };
  const validInvite = rows.find((row) => getInviteStatus(row) === "valid");
  if (validInvite) {
    const invite = await attachCompanyName(supabase, validInvite);
    return {
      invite,
      diagnostics: buildPreviewDiagnostics(token, true, diagnosticRow(invite)),
    };
  }
  const latest = rows[0] || null;
  return {
    invite: null,
    diagnostics: buildPreviewDiagnostics(token, rows.length > 0, diagnosticRow(latest)),
  };
}

async function attachCompanyName(supabase: ReturnType<typeof createClient>, invite: Record<string, unknown>) {
  const companyId = String(invite.company_id || "");
  if (!companyId) return { ...invite, company_name: "Company" };
  const { data, error } = await supabase
    .from("companies")
    .select("company_name")
    .eq("id", companyId)
    .maybeSingle();
  if (error) {
    console.info("company_invite_company_lookup_failed", {
      member_id: invite.id,
      company_id: companyId,
      reason: error.message,
    });
    return { ...invite, company_name: "Company" };
  }
  return { ...invite, company_name: data?.company_name || "Company" };
}

function getInviteStatus(invite: Record<string, unknown>) {
  const status = String(invite.status || "");
  if (status === "revoked" || invite.revoked_at) return "revoked";
  if (invite.expires_at && new Date(String(invite.expires_at)).getTime() < Date.now()) return "expired";
  if (status === "active") return "active";
  return "valid";
}

function buildPreviewDiagnostics(token: string, found: boolean, row: Record<string, unknown> | null) {
  const status = row ? getInviteStatus(row) : "";
  const matchingRowsCount = Number(row?.matching_rows_count || 0);
  return {
    token_received: Boolean(token),
    token_length: token.length,
    computed_hash_prefix: String(row?.computed_hash_prefix || ""),
    lookup_found: found,
    invalid_reason: !token
      ? "no_token"
      : !found
        ? "no_hash_match"
        : status === "expired"
          ? "expired"
          : status === "revoked"
            ? "revoked"
            : status === "active"
              ? "already_accepted"
              : row?.status && row.status !== "invited"
                ? "wrong_status"
                : "unknown",
    matching_rows_count: matchingRowsCount,
    latest_invite_status: String(row?.status || ""),
    latest_invite_expires_at: String(row?.expires_at || ""),
    lookup_table: String(row?.lookup_table || "company_members"),
    lookup_column: String(row?.lookup_column || "token_hash"),
  };
}

async function buildQueryErrorDiagnostics(token: string) {
  const tokenHash = token ? await sha256Hex(token) : "";
  return {
    token_received: Boolean(token),
    token_length: token.length,
    computed_hash_prefix: tokenHash.slice(0, 8),
    lookup_found: false,
    invalid_reason: "query_error",
    matching_rows_count: 0,
    latest_invite_status: "",
    latest_invite_expires_at: "",
    lookup_table: "company_members",
    lookup_column: "token_hash",
  };
}

async function sha256Hex(value: string) {
  const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(hash)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function normalizeEmail(value: unknown) {
  return String(value || "").trim().toLowerCase();
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
