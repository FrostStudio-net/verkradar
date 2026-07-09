export function normalizeAccessEmail(email) {
  return String(email || "").trim().toLowerCase();
}

export async function claimInvitedCompanyMemberships(supabaseClient, user) {
  const email = normalizeAccessEmail(user?.email);
  if (!supabaseClient || !user?.id || !email) return [];

  const { data: invites, error: inviteError } = await supabaseClient
    .from("company_members")
    .select("id, company_id, email, role, status")
    .eq("email_normalized", email)
    .eq("status", "invited");
  if (inviteError) throw inviteError;

  const rows = invites || [];
  if (!rows.length) return [];

  const claimed = [];
  for (const invite of rows) {
    const { data, error } = await supabaseClient
      .from("company_members")
      .update({
        user_id: user.id,
        status: "active",
        accepted_at: new Date().toISOString(),
        revoked_at: null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", invite.id)
      .eq("email_normalized", email)
      .eq("status", "invited")
      .select("id, company_id, email, role, status, accepted_at")
      .maybeSingle();
    if (error) throw error;
    if (data) claimed.push(data);
  }
  return claimed;
}

export async function loadActiveCompanyMemberships(supabaseClient, user) {
  if (!supabaseClient || !user?.id) return [];
  const { data, error } = await supabaseClient
    .from("company_members")
    .select("id, company_id, email, role, status, accepted_at")
    .eq("user_id", user.id)
    .eq("status", "active")
    .order("accepted_at", { ascending: true });
  if (error) throw error;
  return data || [];
}
