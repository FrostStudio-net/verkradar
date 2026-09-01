import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { isProcurementOpportunityEligible } from "../_shared/procurement-stage.js";
import { isExplicitLocationAliasMatch } from "../_shared/location-aliases.js";
import { calculateCompanyOpportunityMatch, COMPANY_MATCH_THRESHOLD } from "../_shared/company-matcher.js";

const MIN_MATCH_SCORE = COMPANY_MATCH_THRESHOLD;
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type CompanyProfile = {
  id: string;
  companyName: string;
  contactEmail: string;
  industry: string;
  services: string[];
  includeKeywords: string[];
  excludeKeywords: string[];
  locations: string[];
  baseLocation: string;
  serviceAreas: string[];
  willingToTravel: boolean;
  nationalProjects: boolean;
  remoteProjects: boolean;
  minimumProjectValueForTravel: number | null;
  minProjectValue: number | null;
  maxProjectValue: number | null;
  allowUnknownValue: boolean;
  autoAlertMode: string;
};

type ReportMode = "new_only" | "all_current";

type AdminCompanyInput = Record<string, unknown>;

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

    const authHeader = req.headers.get("authorization") || "";
    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false },
    });
    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

    const { data: userData, error: userError } = await userClient.auth.getUser();
    if (userError || !userData.user) return jsonError("Unauthorized", "UNAUTHORIZED", 401);

    const { data: adminRow, error: adminError } = await adminClient
      .from("admin_users")
      .select("user_id")
      .eq("user_id", userData.user.id)
      .maybeSingle();
    if (adminError) throw adminError;
    if (!adminRow) return jsonError("Admin access required", "ADMIN_REQUIRED", 403);

    const body = await safeJson(req);
    const companyId = String(body.companyId || "").trim();
    const action = String(body.action || "refresh_matches").trim();
    const reportMode: ReportMode = body.reportMode === "all_current" ? "all_current" : "new_only";
    if (action === "create_company_from_trial_request") {
      const trialRequestId = String(body.trialRequestId || "").trim();
      const result = await createCompanyFromTrialRequest(adminClient, {
        trialRequestId,
        company: body.company || {},
      });
      return json({ ok: true, action, ...result });
    }
    if (action === "delete_trial_request") {
      const trialRequestId = String(body.trialRequestId || "").trim();
      const result = await deleteTrialRequest(adminClient, { trialRequestId });
      return json({ ok: true, action, ...result });
    }
    if (!isUuid(companyId)) return jsonError("A valid companyId is required.", "INVALID_COMPANY_ID", 400);
    if (!["refresh_matches", "generate_report", "review_match", "mark_report_sent", "invite_customer", "revoke_customer_access", "update_company_profile", "update_company_matching_profile", "upsert_match_decision", "upsert_evaluation_label"].includes(action)) {
      return jsonError("Unsupported action", "UNSUPPORTED_ACTION", 400, { action });
    }

    if (action === "update_company_profile") {
      const result = await updateAdminCompanyProfile(adminClient, {
        companyId,
        profile: body.companyProfile || {},
        changedBy: userData.user.id,
        changedByEmail: userData.user.email || "",
        refreshMatches: Boolean(body.refreshMatches),
      });
      return json({ success: true, ok: true, message: "Company profile updated", action, companyId: result.company_id, ...result });
    }

    if (action === "update_company_matching_profile") {
      const result = await updateCompanyMatchingProfile(adminClient, {
        companyId,
        matchingProfile: body.matchingProfile || {},
      });
      return json({ ok: true, action, ...result });
    }

    if (action === "upsert_match_decision") {
      const result = await upsertMatchDecision(adminClient, {
        companyId,
        opportunityId: String(body.opportunityId || "").trim(),
        decision: String(body.decision || "").trim(),
        reason: String(body.reason || "").trim(),
        comment: String(body.comment || "").trim(),
        userId: userData.user.id,
      });
      return json({ ok: true, action, ...result });
    }

    if (action === "upsert_evaluation_label") {
      const result = await upsertEvaluationLabel(adminClient, {
        companyId,
        opportunityId: String(body.opportunityId || "").trim(),
        label: String(body.label || "").trim(),
        reason: String(body.reason || "").trim(),
        notes: String(body.notes || "").trim(),
        userId: userData.user.id,
      });
      return json({ ok: true, action, ...result });
    }

    if (action === "invite_customer") {
      const email = String(body.email || "").trim();
      const result = await inviteCompanyCustomer(adminClient, {
        companyId,
        email,
        invitedBy: userData.user.id,
      });
      return json({ ok: true, action, ...result });
    }

    if (action === "revoke_customer_access") {
      const memberId = String(body.memberId || "").trim();
      if (!isUuid(memberId)) return json({ error: "A valid memberId is required." }, 400);
      const result = await revokeCompanyAccess(adminClient, {
        companyId,
        memberId,
      });
      return json({ ok: true, action, ...result });
    }

    if (action === "review_match") {
      const matchId = String(body.matchId || "").trim();
      const reviewAction = String(body.reviewAction || "").trim();
      if (!isUuid(matchId)) return json({ error: "A valid matchId is required." }, 400);
      if (!["approve", "reject"].includes(reviewAction)) return json({ error: "Unsupported review action." }, 400);
      const reviewResult = await reviewOpportunityMatch(adminClient, {
        matchId,
        companyId,
        reviewAction,
        reviewedBy: userData.user.id,
      });
      return json({ ok: true, action, ...reviewResult });
    }

    if (action === "mark_report_sent") {
      const reportId = String(body.reportId || "").trim();
      if (!isUuid(reportId)) return json({ error: "A valid reportId is required." }, 400);
      const result = await markReportSent(adminClient, {
        reportId,
        companyId,
        sentBy: userData.user.id,
      });
      return json({ ok: true, action, ...result });
    }

    const refreshResult = await refreshCompanyMatches(adminClient, companyId);
    if (action === "refresh_matches") {
      return json({
        ok: true,
        action,
        company_id: refreshResult.company.id,
        company_name: refreshResult.company.companyName,
        matches_refreshed: refreshResult.matches_refreshed,
      });
    }

    const reportResult = await generateCompanyReport(adminClient, refreshResult.company, refreshResult.matches, reportMode);
    return json({
      ok: true,
      action,
      company_id: refreshResult.company.id,
      company_name: refreshResult.company.companyName,
      matches_refreshed: refreshResult.matches_refreshed,
      report_mode: reportMode,
      ...reportResult,
    });
  } catch (error) {
    console.error("Admin company action failed:", error);
    return jsonError(errorMessage(error), "INTERNAL_ERROR", 500);
  }
});

async function updateAdminCompanyProfile(
  supabase: ReturnType<typeof createClient>,
  options: { companyId: string; profile: Record<string, unknown>; changedBy: string; changedByEmail: string; refreshMatches: boolean },
) {
  const profile = normalizeAdminCompanyProfileInput(options.profile || {});
  if (!profile.companyName) throw new Error("Company name is required.");
  if (!profile.contactEmail || !profile.contactEmail.includes("@")) throw new Error("A valid contact email is required.");
  if (profile.notificationEmail && !profile.notificationEmail.includes("@")) throw new Error("A valid notification email is required.");
  if (profile.billingEmail && !profile.billingEmail.includes("@")) throw new Error("A valid billing email is required.");

  const [companyResult, servicesResult, locationsResult, keywordsResult] = await Promise.all([
    supabase.from("companies").select("*").eq("id", options.companyId).maybeSingle(),
    supabase.from("company_services").select("service").eq("company_id", options.companyId),
    supabase.from("company_locations").select("location").eq("company_id", options.companyId),
    supabase.from("company_keywords").select("keyword, type").eq("company_id", options.companyId),
  ]);
  if (companyResult.error) throw companyResult.error;
  if (servicesResult.error) throw servicesResult.error;
  if (locationsResult.error) throw locationsResult.error;
  if (keywordsResult.error) throw keywordsResult.error;
  if (!companyResult.data) throw new Error("Company not found.");

  const company = companyResult.data;
  const previous = buildCompanyProfileSnapshot(company, servicesResult.data || [], locationsResult.data || [], keywordsResult.data || []);
  const now = new Date().toISOString();
  const companyPayload = {
    company_name: profile.companyName,
    kennitala: profile.kennitala || null,
    contact_name: profile.contactName || null,
    contact_email: profile.contactEmail,
    notification_email: profile.notificationEmail || profile.contactEmail,
    billing_email: profile.billingEmail || profile.contactEmail,
    selected_plan: profile.selectedPlan,
    plan: profile.selectedPlan,
    billing_status: profile.billingStatus,
    base_location: profile.baseLocation || null,
    service_areas: profile.serviceAreas,
    opportunity_categories: profile.opportunityCategories,
    opportunity_types: profile.opportunityTypes,
    subcontracting_relevant: profile.subcontractingRelevant,
    minimum_relevance_threshold: profile.minimumRelevanceThreshold,
    report_frequency: profile.reportFrequency,
    report_day: profile.reportDay,
    deadline_reminders: profile.deadlineReminders,
    include_low_confidence: profile.includeLowConfidence,
    core_services: profile.coreServices,
    secondary_services: profile.secondaryServices,
    excluded_services: profile.excludedServices,
    preferred_project_types: profile.preferredProjectTypes,
    excluded_project_types: profile.excludedProjectTypes,
    equipment: profile.equipment,
    certifications: profile.certifications,
    preferred_buyers: profile.preferredBuyers,
    max_travel_distance_km: profile.maxTravelDistanceKm,
    typical_project_size: profile.typicalProjectSize || null,
    profile_notes_for_ai: profile.profileNotesForAi || null,
    internal_admin_notes: profile.internalAdminNotes || null,
    matching_profile_updated_at: now,
    matching_profile_hash: await sha256Hex(JSON.stringify(profile)),
  };

  const { data: updatedCompany, error: updateError } = await supabase
    .from("companies")
    .update(companyPayload)
    .eq("id", options.companyId)
    .select("id, company_name, matching_profile_updated_at")
    .maybeSingle();
  if (updateError) throw updateError;
  if (!updatedCompany) throw new Error("Company not found.");

  await replaceCompanyProfileRows(supabase, options.companyId, profile);

  const next = buildCompanyProfileSnapshot({ ...company, ...companyPayload },
    profile.services.map((service) => ({ service })),
    profile.locations.map((location) => ({ location })),
    [
      ...profile.includeKeywords.map((keyword) => ({ keyword, type: "include" })),
      ...profile.excludeKeywords.map((keyword) => ({ keyword, type: "exclude" })),
    ],
  );
  const changedFields = getChangedProfileFields(previous, next);
  if (changedFields.length) {
    const { error: auditError } = await supabase.from("company_profile_change_log").insert({
      company_id: options.companyId,
      changed_by: options.changedBy,
      changed_by_email: options.changedByEmail || null,
      source: "admin",
      changed_fields: changedFields,
      previous_values: pickFields(previous, changedFields),
      new_values: pickFields(next, changedFields),
    });
    if (auditError) throw auditError;
  }

  const refresh = options.refreshMatches ? await refreshCompanyMatches(supabase, options.companyId) : null;
  return {
    company_id: updatedCompany.id,
    company_name: updatedCompany.company_name,
    matching_profile_updated_at: updatedCompany.matching_profile_updated_at,
    changed_fields: changedFields,
    audit_logged: changedFields.length > 0,
    refresh: refresh ? {
      matches_refreshed: refresh.matches_refreshed,
      matches_created: refresh.matches_created,
      matches_updated: refresh.matches_updated,
      matches_removed: refresh.matches_removed,
    } : null,
  };
}

async function replaceCompanyProfileRows(
  supabase: ReturnType<typeof createClient>,
  companyId: string,
  profile: ReturnType<typeof normalizeAdminCompanyProfileInput>,
) {
  const [deleteServices, deleteLocations, deleteKeywords] = await Promise.all([
    supabase.from("company_services").delete().eq("company_id", companyId),
    supabase.from("company_locations").delete().eq("company_id", companyId),
    supabase.from("company_keywords").delete().eq("company_id", companyId),
  ]);
  if (deleteServices.error) throw deleteServices.error;
  if (deleteLocations.error) throw deleteLocations.error;
  if (deleteKeywords.error) throw deleteKeywords.error;

  const serviceRows = profile.services.map((service) => ({ company_id: companyId, service }));
  const locationRows = profile.locations.map((location) => ({ company_id: companyId, location }));
  const keywordRows = [
    ...profile.includeKeywords.map((keyword) => ({ company_id: companyId, keyword, type: "include" })),
    ...profile.excludeKeywords.map((keyword) => ({ company_id: companyId, keyword, type: "exclude" })),
  ];
  if (serviceRows.length) {
    const { error } = await supabase.from("company_services").insert(serviceRows);
    if (error) throw error;
  }
  if (locationRows.length) {
    const { error } = await supabase.from("company_locations").insert(locationRows);
    if (error) throw error;
  }
  if (keywordRows.length) {
    const { error } = await supabase.from("company_keywords").insert(keywordRows);
    if (error) throw error;
  }
}

function buildCompanyProfileSnapshot(
  company: Record<string, unknown>,
  servicesRows: Array<Record<string, unknown>>,
  locationsRows: Array<Record<string, unknown>>,
  keywordRows: Array<Record<string, unknown>>,
) {
  return {
    companyName: String(company.company_name || ""),
    kennitala: String(company.kennitala || ""),
    contactName: String(company.contact_name || ""),
    contactEmail: String(company.contact_email || ""),
    notificationEmail: String(company.notification_email || ""),
    billingEmail: String(company.billing_email || ""),
    selectedPlan: String(company.selected_plan || company.plan || ""),
    billingStatus: String(company.billing_status || ""),
    services: cleanStringArray(servicesRows.map((row) => row.service)),
    locations: cleanStringArray(locationsRows.map((row) => row.location)),
    includeKeywords: cleanStringArray(keywordRows.filter((row) => row.type === "include").map((row) => row.keyword)),
    excludeKeywords: cleanStringArray(keywordRows.filter((row) => row.type === "exclude").map((row) => row.keyword)),
    baseLocation: String(company.base_location || ""),
    serviceAreas: cleanStringArray(company.service_areas),
    opportunityCategories: cleanStringArray(company.opportunity_categories),
    opportunityTypes: cleanStringArray(company.opportunity_types),
    subcontractingRelevant: Boolean(company.subcontracting_relevant),
    minimumRelevanceThreshold: Number(company.minimum_relevance_threshold ?? 50),
    reportFrequency: String(company.report_frequency || "weekly"),
    reportDay: String(company.report_day || "monday"),
    deadlineReminders: Boolean(company.deadline_reminders),
    includeLowConfidence: Boolean(company.include_low_confidence),
    coreServices: cleanStringArray(company.core_services),
    secondaryServices: cleanStringArray(company.secondary_services),
    excludedServices: cleanStringArray(company.excluded_services),
    preferredProjectTypes: cleanStringArray(company.preferred_project_types),
    excludedProjectTypes: cleanStringArray(company.excluded_project_types),
    equipment: cleanStringArray(company.equipment),
    certifications: cleanStringArray(company.certifications),
    preferredBuyers: cleanStringArray(company.preferred_buyers),
    maxTravelDistanceKm: nullableNumber(company.max_travel_distance_km),
    typicalProjectSize: String(company.typical_project_size || ""),
    profileNotesForAi: String(company.profile_notes_for_ai || ""),
    internalAdminNotes: String(company.internal_admin_notes || ""),
  };
}

function getChangedProfileFields(previous: Record<string, unknown>, next: Record<string, unknown>) {
  return Object.keys(next).filter((key) => JSON.stringify(previous[key] ?? null) !== JSON.stringify(next[key] ?? null));
}

function pickFields(source: Record<string, unknown>, fields: string[]) {
  return fields.reduce((acc, field) => {
    acc[field] = source[field] ?? null;
    return acc;
  }, {} as Record<string, unknown>);
}

async function updateCompanyMatchingProfile(
  supabase: ReturnType<typeof createClient>,
  options: { companyId: string; matchingProfile: Record<string, unknown> },
) {
  const profile = normalizeMatchingProfileInput(options.matchingProfile || {});
  const { data, error } = await supabase
    .from("companies")
    .update({
      core_services: profile.coreServices,
      secondary_services: profile.secondaryServices,
      excluded_services: profile.excludedServices,
      preferred_project_types: profile.preferredProjectTypes,
      excluded_project_types: profile.excludedProjectTypes,
      equipment: profile.equipment,
      certifications: profile.certifications,
      preferred_buyers: profile.preferredBuyers,
      max_travel_distance_km: profile.maxTravelDistanceKm,
      typical_project_size: profile.typicalProjectSize || null,
      profile_notes_for_ai: profile.profileNotesForAi || null,
      matching_profile_updated_at: new Date().toISOString(),
      matching_profile_hash: await sha256Hex(JSON.stringify(profile)),
    })
    .eq("id", options.companyId)
    .select("id, company_name, matching_profile_updated_at")
    .maybeSingle();
  if (error) throw error;
  if (!data) throw new Error("Company not found.");
  return {
    company_id: data.id,
    company_name: data.company_name,
    matching_profile_updated_at: data.matching_profile_updated_at,
  };
}

async function upsertMatchDecision(
  supabase: ReturnType<typeof createClient>,
  options: { companyId: string; opportunityId: string; decision: string; reason: string; comment: string; userId: string },
) {
  if (!isUuid(options.opportunityId)) throw new Error("A valid opportunityId is required.");
  if (!["send", "possible", "reject"].includes(options.decision)) throw new Error("Decision must be send, possible or reject.");
  const reason = normalizeDecisionReason(options.reason);
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from("admin_match_decisions")
    .upsert({
      company_id: options.companyId,
      opportunity_id: options.opportunityId,
      decision: options.decision,
      reason: reason || null,
      comment: options.comment || null,
      decided_by: options.userId,
      decided_at: now,
      updated_at: now,
    }, { onConflict: "company_id,opportunity_id" })
    .select("id, company_id, opportunity_id, decision, reason, comment, decided_at")
    .single();
  if (error) throw error;
  return { decision: data };
}

async function upsertEvaluationLabel(
  supabase: ReturnType<typeof createClient>,
  options: { companyId: string; opportunityId: string; label: string; reason: string; notes: string; userId: string },
) {
  if (!isUuid(options.opportunityId)) throw new Error("A valid opportunityId is required.");
  if (!["strong", "possible", "no_fit"].includes(options.label)) throw new Error("Evaluation label must be strong, possible or no_fit.");
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from("match_evaluation_labels")
    .upsert({
      company_id: options.companyId,
      opportunity_id: options.opportunityId,
      label: options.label,
      reason: options.reason || null,
      notes: options.notes || null,
      labeled_by: options.userId,
      labeled_at: now,
      updated_at: now,
    }, { onConflict: "company_id,opportunity_id" })
    .select("id, company_id, opportunity_id, label, reason, notes, labeled_at")
    .single();
  if (error) throw error;
  return { evaluation_label: data };
}

async function findAuthUserByEmail(supabase: ReturnType<typeof createClient>, email: string) {
  const normalizedEmail = normalizeEmail(email);
  if (!normalizedEmail) return null;
  const { data, error } = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 });
  if (error) throw error;
  return (data?.users || []).find((user) => normalizeEmail(user.email || "") === normalizedEmail) || null;
}

async function ensureCompanyOwnerMembership(
  supabase: ReturnType<typeof createClient>,
  options: { companyId: string; email: string; userId?: string | null },
) {
  const normalizedEmail = normalizeEmail(options.email);
  if (!isUuid(options.companyId) || !normalizedEmail) return null;
  const now = new Date().toISOString();
  const payload = {
    company_id: options.companyId,
    user_id: options.userId || null,
    email: String(options.email || "").trim(),
    email_normalized: normalizedEmail,
    role: "owner",
    status: options.userId ? "active" : "invited",
    invited_at: now,
    accepted_at: options.userId ? now : null,
    revoked_at: null,
    updated_at: now,
  };
  const { data, error } = await supabase
    .from("company_members")
    .upsert(payload, { onConflict: "company_id,email_normalized" })
    .select("id, company_id, email, role, status, user_id")
    .maybeSingle();
  if (error) throw error;
  return data || null;
}

async function createCompanyFromTrialRequest(
  supabase: ReturnType<typeof createClient>,
  options: { trialRequestId: string; company: AdminCompanyInput },
) {
  if (!isUuid(options.trialRequestId)) throw new Error("A valid trialRequestId is required.");
  const { data: request, error: requestError } = await supabase
    .from("trial_requests")
    .select("id, status, converted_company_id")
    .eq("id", options.trialRequestId)
    .maybeSingle();
  if (requestError) throw requestError;
  if (!request) throw new Error("Trial request not found.");
  if (request.converted_company_id || request.status === "converted") {
    throw new Error("This trial request has already been converted.");
  }

  const cleanProfile = normalizeAdminCompanyInput(options.company);
  if (!cleanProfile.companyName || !cleanProfile.kennitala || !cleanProfile.contactEmail || !cleanProfile.billingEmail || !cleanProfile.contactName || !cleanProfile.phone || !cleanProfile.address || !cleanProfile.industry) {
    throw new Error("Company name, kennitala, contact email, billing email, contact name, phone, address and industry are required.");
  }

  const now = new Date().toISOString();
  const companyPayload = {
    source_trial_request_id: options.trialRequestId,
    company_name: cleanProfile.companyName,
    contact_email: cleanProfile.contactEmail,
    kennitala: cleanProfile.kennitala,
    billing_email: cleanProfile.billingEmail,
    contact_name: cleanProfile.contactName,
    phone: cleanProfile.phone,
    address: cleanProfile.address,
    website: cleanProfile.website || null,
    industry: cleanProfile.industry,
    plan: cleanProfile.selectedPlan,
    selected_plan: cleanProfile.selectedPlan,
    billing_status: cleanProfile.billingStatus,
    trial_started_at: cleanProfile.trialStartedAt || now,
    trial_ends_at: cleanProfile.trialEndsAt || new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    base_location: cleanProfile.baseLocation || null,
    service_areas: cleanProfile.serviceAreas,
    willing_to_travel: cleanProfile.willingToTravel,
    national_projects: cleanProfile.nationalProjects,
    remote_projects: cleanProfile.remoteProjects,
    minimum_project_value_for_travel: cleanProfile.minimumProjectValueForTravel,
    min_project_value: cleanProfile.minProjectValue,
    max_project_value: cleanProfile.maxProjectValue,
    allow_unknown_value: cleanProfile.allowUnknownValue,
    report_frequency: cleanProfile.reportFrequency,
    report_day: cleanProfile.reportDay,
    deadline_reminders: cleanProfile.deadlineReminders,
    include_low_confidence: cleanProfile.includeLowConfidence,
    auto_alert_mode: cleanProfile.autoAlertMode,
  };
  const existingUser = await findAuthUserByEmail(supabase, cleanProfile.contactEmail);

  const { data: company, error: companyError } = await supabase
    .from("companies")
    .insert(companyPayload)
    .select("id, company_name")
    .single();
  if (companyError) throw companyError;

  await ensureCompanyOwnerMembership(supabase, {
    companyId: company.id,
    email: cleanProfile.contactEmail,
    userId: existingUser?.id || null,
  });

  const serviceRows = cleanProfile.services.map((service) => ({ company_id: company.id, service }));
  const locationRows = cleanProfile.locations.map((location) => ({ company_id: company.id, location }));
  const keywordRows = [
    ...cleanProfile.includeKeywords.map((keyword) => ({ company_id: company.id, keyword, type: "include" })),
    ...cleanProfile.excludeKeywords.map((keyword) => ({ company_id: company.id, keyword, type: "exclude" })),
  ];
  if (serviceRows.length) {
    const { error } = await supabase.from("company_services").insert(serviceRows);
    if (error) throw error;
  }
  if (locationRows.length) {
    const { error } = await supabase.from("company_locations").insert(locationRows);
    if (error) throw error;
  }
  if (keywordRows.length) {
    const { error } = await supabase.from("company_keywords").insert(keywordRows);
    if (error) throw error;
  }

  const { error: updateError } = await supabase
    .from("trial_requests")
    .update({
      status: "converted",
      converted_company_id: company.id,
    })
    .eq("id", options.trialRequestId)
    .is("converted_company_id", null);
  if (updateError) throw updateError;

  return {
    trial_request_id: options.trialRequestId,
    company_id: company.id,
    company_name: company.company_name,
    trial_request_status: "converted",
  };
}

async function deleteTrialRequest(
  supabase: ReturnType<typeof createClient>,
  options: { trialRequestId: string },
) {
  if (!isUuid(options.trialRequestId)) throw new Error("A valid trialRequestId is required.");

  const { data: request, error: requestError } = await supabase
    .from("trial_requests")
    .select("id, status, converted_company_id")
    .eq("id", options.trialRequestId)
    .maybeSingle();
  if (requestError) throw requestError;
  if (!request) throw new Error("Trial request not found.");

  const { error: deleteError } = await supabase
    .from("trial_requests")
    .delete()
    .eq("id", options.trialRequestId);
  if (deleteError) throw deleteError;

  return {
    trial_request_id: options.trialRequestId,
    deleted: true,
    was_converted: Boolean(request.converted_company_id || request.status === "converted"),
    converted_company_id: request.converted_company_id || null,
  };
}

async function markReportSent(
  supabase: ReturnType<typeof createClient>,
  options: { reportId: string; companyId: string; sentBy: string },
) {
  const { data: report, error } = await supabase
    .from("reports")
    .select("id, company_id, report_items(opportunity_id)")
    .eq("id", options.reportId)
    .eq("company_id", options.companyId)
    .single();
  if (error) throw error;
  const items = Array.isArray(report.report_items) ? report.report_items : [];
  const opportunityIds = uniqueStrings(items.map((item) => String(item.opportunity_id || ""))).filter(Boolean);
  if (!opportunityIds.length) {
    return { report_id: options.reportId, company_id: options.companyId, marked_sent: 0 };
  }
  const now = new Date().toISOString();
  const rows = opportunityIds.map((opportunityId) => ({
    company_id: options.companyId,
    opportunity_id: opportunityId,
    channel: "manual_email",
    sent_at: now,
    sent_by: options.sentBy,
    note: `Manually marked sent from report ${options.reportId}`,
  }));
  const { error: upsertError } = await supabase
    .from("company_opportunity_sends")
    .upsert(rows, { onConflict: "company_id,opportunity_id,channel" });
  if (upsertError) throw upsertError;
  return {
    report_id: options.reportId,
    company_id: options.companyId,
    marked_sent: rows.length,
    sent_at: now,
  };
}

async function inviteCompanyCustomer(
  supabase: ReturnType<typeof createClient>,
  options: { companyId: string; email: string; invitedBy: string },
) {
  const email = String(options.email || "").trim();
  const emailNormalized = normalizeEmail(email);
  if (!emailNormalized || !emailNormalized.includes("@")) {
    throw new Error("A valid customer email is required.");
  }

  const { data: company, error: companyError } = await supabase
    .from("companies")
    .select("id, company_name")
    .eq("id", options.companyId)
    .maybeSingle();
  if (companyError) throw companyError;
  if (!company) throw new Error("Company not found.");

  const { data: existing, error: existingError } = await supabase
    .from("company_members")
    .select("id, company_id, user_id, email, role, status, invited_at, accepted_at")
    .eq("company_id", options.companyId)
    .eq("email_normalized", emailNormalized)
    .maybeSingle();
  if (existingError) throw existingError;

  const now = new Date().toISOString();
  const inviteToken = generateInviteToken();
  const tokenHash = await sha256Hex(inviteToken);
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
  if (existing) {
    if (existing.status === "active") {
      throw new Error("This customer already has active access.");
    }
    const update = {
      email,
      role: existing.role || "owner",
      status: "invited",
      invited_at: now,
      accepted_at: null,
      revoked_at: null,
      user_id: null,
      token_hash: tokenHash,
      expires_at: expiresAt,
      invited_by: options.invitedBy,
      updated_at: now,
    };
    const { data, error } = await supabase
      .from("company_members")
      .update(update)
      .eq("id", existing.id)
      .select("id, company_id, user_id, email, role, status, invited_at, accepted_at, expires_at, token_hash")
      .single();
    if (error) throw error;
    const debug = await buildInviteDebug(supabase, data, inviteToken, tokenHash);
    console.info("company_invite_created", debug);
    return {
      company_id: options.companyId,
      company_name: company.company_name,
      member: sanitizeInviteMember(data),
      invite_token: inviteToken,
      expires_at: expiresAt,
      debug,
      rows_updated: 1,
    };
  }

  const { data, error } = await supabase
    .from("company_members")
    .insert({
      company_id: options.companyId,
      email,
      email_normalized: emailNormalized,
      role: "owner",
      status: "invited",
      invited_at: now,
      token_hash: tokenHash,
      expires_at: expiresAt,
      invited_by: options.invitedBy,
      updated_at: now,
    })
    .select("id, company_id, user_id, email, role, status, invited_at, accepted_at, expires_at, token_hash")
    .single();
  if (error) throw error;
  const debug = await buildInviteDebug(supabase, data, inviteToken, tokenHash);
  console.info("company_invite_created", debug);
  return {
    company_id: options.companyId,
    company_name: company.company_name,
    member: sanitizeInviteMember(data),
    invite_token: inviteToken,
    expires_at: expiresAt,
    debug,
    rows_updated: 1,
  };
}

async function buildInviteDebug(
  supabase: ReturnType<typeof createClient>,
  member: Record<string, unknown>,
  inviteToken: string,
  tokenHash: string,
) {
  const { data, error } = await supabase
    .from("company_members")
    .select("id, status, expires_at")
    .eq("token_hash", tokenHash)
    .eq("id", member.id)
    .maybeSingle();
  if (error) throw error;
  return {
    member_id: String(member.id || ""),
    company_id: String(member.company_id || ""),
    email: String(member.email || ""),
    status: String(member.status || ""),
    expires_at: String(member.expires_at || ""),
    has_token_hash: Boolean(member.token_hash),
    raw_token_length: inviteToken.length,
    token_hash_prefix: tokenHash.slice(0, 8),
    copied_invite_url_present: Boolean(inviteToken),
    hash_lookup_found: Boolean(data),
    hash_lookup_status: data?.status || "",
    hash_lookup_expires_at: data?.expires_at || "",
  };
}

function sanitizeInviteMember(member: Record<string, unknown>) {
  return {
    id: member.id,
    company_id: member.company_id,
    user_id: member.user_id,
    email: member.email,
    role: member.role,
    status: member.status,
    invited_at: member.invited_at,
    accepted_at: member.accepted_at,
    expires_at: member.expires_at,
  };
}

async function revokeCompanyAccess(
  supabase: ReturnType<typeof createClient>,
  options: { companyId: string; memberId: string },
) {
  const { data, error } = await supabase
    .from("company_members")
    .update({
      status: "revoked",
      revoked_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", options.memberId)
    .eq("company_id", options.companyId)
    .select("id, company_id, email, role, status, revoked_at")
    .maybeSingle();
  if (error) throw error;
  if (!data) throw new Error("Company access membership not found.");
  return {
    company_id: options.companyId,
    member: data,
    rows_updated: 1,
  };
}

async function reviewOpportunityMatch(
  supabase: ReturnType<typeof createClient>,
  options: { matchId: string; companyId: string; reviewAction: string; reviewedBy: string },
) {
  const approved = options.reviewAction === "approve";
  const update = {
    safety_status: approved ? "auto_approved" : "hidden",
    safety_reasons: approved
      ? ["Admin approved this match for customer reports and alerts"]
      : ["Admin rejected this match for this company"],
    alert_eligible: approved,
    review_required: false,
    reviewed_at: new Date().toISOString(),
    reviewed_by: options.reviewedBy,
    review_note: approved ? "Approved in Admin Review Queue" : "Rejected in Admin Review Queue",
  };
  const { data, error } = await supabase
    .from("opportunity_matches")
    .update(update)
    .eq("id", options.matchId)
    .eq("company_id", options.companyId)
    .select("id, company_id, opportunity_id, safety_status")
    .single();
  if (error) throw error;
  return {
    match_id: data.id,
    company_id: data.company_id,
    opportunity_id: data.opportunity_id,
    safety_status: data.safety_status,
    message: approved ? "Match approved for customer reports." : "Match rejected and hidden for this company.",
  };
}

async function refreshCompanyMatches(supabase: ReturnType<typeof createClient>, companyId: string) {
  const company = await loadCompanyProfile(supabase, companyId);
  const { data: opportunities, error: opportunitiesError } = await supabase
    .from("opportunities")
    .select("*, sources(name, source_type)")
    .eq("status", "open")
    .order("created_at", { ascending: false })
    .limit(1000);

  if (opportunitiesError) throw opportunitiesError;

  const { data: existingSafetyRows, error: existingSafetyError } = await supabase
    .from("opportunity_matches")
    .select("opportunity_id, match_score, match_label, safety_status, safety_reasons, alert_eligible, review_required, reviewed_at, reviewed_by, review_note")
    .eq("company_id", companyId);
  if (existingSafetyError) throw existingSafetyError;
  const existingRows = existingSafetyRows || [];
  const existingByOpportunity = new Map(existingRows.map((row) => [String(row.opportunity_id), row]));
  const existingSafety = new Map(existingRows
    .filter((row) => row.reviewed_at)
    .map((row) => [String(row.opportunity_id), row]));

  const matches = (opportunities || [])
    .map(mapOpportunity)
    .filter(isCustomerMatchEligibleOpportunity)
    .filter(isDashboardVisibleOpportunity)
    .map((opportunity) => calculateMatch(company, opportunity))
    .filter((match) => match.matchScore >= MIN_MATCH_SCORE)
    .map((match) => ({
      ...match,
      ...applyReviewedSafetyOverride(classifyMatchSafety(company, match), existingSafety.get(String(match.id || ""))),
    }))
    .sort((a, b) => b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline));

  const { error: deleteError } = await supabase
    .from("opportunity_matches")
    .delete()
    .eq("company_id", companyId);
  if (deleteError) throw deleteError;

  const rows = matches.map((match) => ({
    company_id: companyId,
    opportunity_id: match.id,
    match_score: match.matchScore,
    match_label: match.matchLabel,
    match_reasons: match.matchReasons,
    risks: match.risks,
    next_steps: match.nextSteps,
    safety_status: match.safetyStatus,
    safety_reasons: match.safetyReasons,
    alert_eligible: match.alertEligible,
    review_required: match.reviewRequired,
    reviewed_at: match.reviewedAt || null,
    reviewed_by: match.reviewedBy || null,
    review_note: match.reviewNote || null,
    calculated_at: new Date().toISOString(),
  }));

  if (rows.length) {
    const { error: insertError } = await supabase.from("opportunity_matches").insert(rows);
    if (insertError) throw insertError;
  }

  const nextOpportunityIds = new Set(rows.map((row) => String(row.opportunity_id)));
  const matches_created = rows.filter((row) => !existingByOpportunity.has(String(row.opportunity_id))).length;
  const matches_updated = rows.filter((row) => {
    const previous = existingByOpportunity.get(String(row.opportunity_id));
    return previous && (
      Number(previous.match_score || 0) !== Number(row.match_score || 0) ||
      String(previous.match_label || "") !== String(row.match_label || "") ||
      String(previous.safety_status || "") !== String(row.safety_status || "")
    );
  }).length;
  const matches_removed = existingRows.filter((row) => !nextOpportunityIds.has(String(row.opportunity_id))).length;

  return {
    company,
    matches,
    matches_refreshed: rows.length,
    matches_created,
    matches_updated,
    matches_removed,
  };
}

async function loadCompanyProfile(supabase: ReturnType<typeof createClient>, companyId: string): Promise<CompanyProfile> {
  const [{ data: company, error: companyError }, servicesResult, locationsResult, keywordsResult] = await Promise.all([
    supabase.from("companies").select("*").eq("id", companyId).single(),
    supabase.from("company_services").select("service").eq("company_id", companyId),
    supabase.from("company_locations").select("location").eq("company_id", companyId),
    supabase.from("company_keywords").select("keyword, type").eq("company_id", companyId),
  ]);

  if (companyError) throw companyError;
  if (servicesResult.error) throw servicesResult.error;
  if (locationsResult.error) throw locationsResult.error;
  if (keywordsResult.error) throw keywordsResult.error;

  return {
    id: company.id,
    companyName: String(company.company_name || "Company"),
    contactEmail: String(company.contact_email || ""),
    industry: String(company.industry || ""),
    services: cleanStringArray((servicesResult.data || []).map((row) => row.service)),
    locations: cleanStringArray((locationsResult.data || []).map((row) => row.location)),
    includeKeywords: cleanStringArray((keywordsResult.data || []).filter((row) => row.type === "include").map((row) => row.keyword)),
    excludeKeywords: cleanStringArray((keywordsResult.data || []).filter((row) => row.type === "exclude").map((row) => row.keyword)),
    baseLocation: String(company.base_location || ""),
    serviceAreas: Array.isArray(company.service_areas) ? cleanStringArray(company.service_areas) : [],
    willingToTravel: Boolean(company.willing_to_travel),
    nationalProjects: Boolean(company.national_projects),
    remoteProjects: Boolean(company.remote_projects),
    minimumProjectValueForTravel: company.minimum_project_value_for_travel == null ? null : Number(company.minimum_project_value_for_travel),
    minProjectValue: company.min_project_value == null ? null : Number(company.min_project_value),
    maxProjectValue: company.max_project_value == null ? null : Number(company.max_project_value),
    allowUnknownValue: Boolean(company.allow_unknown_value),
    autoAlertMode: String(company.auto_alert_mode || "auto_safe_only"),
  };
}

async function generateCompanyReport(
  supabase: ReturnType<typeof createClient>,
  company: CompanyProfile,
  matches: Array<Record<string, unknown>>,
  reportMode: ReportMode,
) {
  const seenIds = await loadPreviouslyReportedOpportunityIds(supabase, company.id);
  const ignoredIds = await loadCompanyActionOpportunityIds(supabase, company.id, ["ignored"]);
  const aiEnrichedMatches = await enrichMatchesWithAiReviews(supabase, company.id, matches);
  const reportMatches = buildCompanyReportMatches(company, aiEnrichedMatches, reportMode, {
    previouslyReportedIds: seenIds,
    ignoredIds,
  });
  if (!reportMatches.length) {
    const diagnostics = summarizeReportCandidateExclusions(aiEnrichedMatches, seenIds, ignoredIds);
    return {
      report_created: false,
      report_id: null,
      report_items: 0,
      report_mode: reportMode,
      previous_report_items_excluded: seenIds.size,
      message: reportMode === "new_only"
        ? `No new eligible opportunities found for this company. ${diagnostics}`
        : `No customer-report-ready matches found. ${diagnostics}`,
    };
  }

  const report = buildReportContent(company, reportMatches);
  const { data: savedReport, error: reportError } = await supabase
    .from("reports")
    .insert({
      company_id: company.id,
      title: `${report.title} (${new Date().toISOString()})`,
      period_start: report.periodStart,
      period_end: report.periodEnd,
      summary: report.summary,
      text_content: report.textContent,
      html_content: report.htmlContent,
      status: reportMode === "new_only" ? "generated_new_only" : "generated_all_current",
    })
    .select("id")
    .single();

  if (reportError) throw reportError;

  const itemRows = reportMatches.map((match, index) => ({
    report_id: savedReport.id,
    opportunity_id: match.id,
    match_score: match.matchScore,
    match_reasons: getAiReportReasons(match),
    risks: getAiReportRisks(match),
    sort_order: index + 1,
  }));

  if (itemRows.length) {
    const { error: itemsError } = await supabase.from("report_items").insert(itemRows);
    if (itemsError) throw itemsError;
  }

  return {
    report_created: true,
    report_id: savedReport.id,
    report_items: itemRows.length,
    report_mode: reportMode,
    previous_report_items_excluded: seenIds.size,
    message: `Generated report with ${itemRows.length} item${itemRows.length === 1 ? "" : "s"}.`,
  };
}

function buildCompanyReportMatches(
  company: CompanyProfile,
  matches: Array<Record<string, unknown>>,
  reportMode: ReportMode,
  options: {
    previouslyReportedIds?: Set<string>;
    ignoredIds?: Set<string>;
  } = {},
) {
  const previouslyReportedIds = options.previouslyReportedIds || new Set<string>();
  const ignoredIds = options.ignoredIds || new Set<string>();
  const modeMatches = reportMode === "new_only"
    ? matches.filter((match) => !previouslyReportedIds.has(String(match.id || "")))
    : matches;
  return sortAiReportMatches(modeMatches
    .filter((match) => !ignoredIds.has(String(match.id || "")))
    .filter(isCustomerMatchEligibleOpportunity)
    .filter((match) => isReportModeSafetyEligible(match, reportMode))
  ).slice(0, 8);
}

function isReportModeSafetyEligible(match: Record<string, unknown>, reportMode: ReportMode) {
  const safety = getMatchSafetyStatus(match);
  if (safety === "hidden") return false;
  if (!isAiReportMatchEligible(match)) return false;
  if (reportMode === "new_only") return true;
  return true;
}

function summarizeReportCandidateExclusions(
  matches: Array<Record<string, unknown>>,
  previouslyReportedIds: Set<string>,
  ignoredIds: Set<string>,
) {
  let activeRelevant = 0;
  let aiReviewed = 0;
  let weakOrNoFit = 0;
  let missingDeadline = 0;
  let expired = 0;
  let alreadySent = 0;
  let ignored = 0;
  let noAiReview = 0;
  let outsideServiceArea = 0;
  for (const match of matches) {
    const id = String(match.id || "");
    if (previouslyReportedIds.has(id)) alreadySent += 1;
    if (ignoredIds.has(id)) ignored += 1;
    if (match.aiReviewFit) aiReviewed += 1;
    else noAiReview += 1;
    const fit = String(match.aiReviewFit || "").toLowerCase();
    if (fit === "weak" || fit === "no_fit") weakOrNoFit += 1;
    const riskText = [
      match.aiReviewReason,
      ...(Array.isArray(match.aiRisksOrQuestions) ? match.aiRisksOrQuestions : []),
    ].filter(Boolean).join(" ").toLowerCase();
    if (riskText.includes("outside service area")) outsideServiceArea += 1;
    if (!match.deadline) missingDeadline += 1;
    else if (daysUntilDeadline(String(match.deadline || "")) < 0) expired += 1;
    if (isAiReportMatchEligible(match) && !ignoredIds.has(id)) activeRelevant += 1;
  }
  return `Diagnostics: ${matches.length} matches checked, ${activeRelevant} active relevant matches found, ${aiReviewed} AI reviewed, ${noAiReview} without AI review, ${alreadySent} already sent, ${ignored} ignored, ${missingDeadline} missing deadline, ${expired} expired, ${weakOrNoFit} AI weak/no-fit, ${outsideServiceArea} outside service area.`;
}

async function enrichMatchesWithAiReviews(
  supabase: ReturnType<typeof createClient>,
  companyId: string,
  matches: Array<Record<string, unknown>>,
) {
  const opportunityIds = uniqueStrings(matches.map((match) => String(match.id || ""))).filter(Boolean);
  if (!opportunityIds.length) return matches;
  const { data, error } = await supabase
    .from("ai_match_reviews")
    .select("opportunity_id, fit, confidence, send_to_client, reason, fit_reasons, risks_or_questions, suggested_client_summary, created_at, updated_at")
    .eq("company_id", companyId)
    .in("opportunity_id", opportunityIds);
  if (error) throw error;
  const reviewsByOpportunity = new Map<string, Record<string, unknown>>();
  for (const review of data || []) {
    const opportunityId = String(review.opportunity_id || "");
    if (opportunityId) reviewsByOpportunity.set(opportunityId, review as Record<string, unknown>);
  }
  return matches.map((match) => {
    const review = reviewsByOpportunity.get(String(match.id || ""));
    if (!review) return match;
    const aiFitReasons = Array.isArray(review.fit_reasons) ? review.fit_reasons.map(String).filter(Boolean) : [];
    const aiRisksOrQuestions = Array.isArray(review.risks_or_questions) ? review.risks_or_questions.map(String).filter(Boolean) : [];
    const aiSuggestedClientSummary = String(review.suggested_client_summary || "");
    return {
      ...match,
      aiReviewFit: String(review.fit || "").toLowerCase(),
      aiReviewConfidence: Number(review.confidence || 0),
      aiReviewSendToClient: review.send_to_client === true,
      aiReviewReason: String(review.reason || ""),
      aiFitReasons,
      aiRisksOrQuestions,
      aiSuggestedClientSummary,
      aiReviewedAt: String(review.updated_at || review.created_at || ""),
      matchReasons: uniqueStrings([
        aiSuggestedClientSummary,
        ...aiFitReasons,
        ...(Array.isArray(match.matchReasons) ? match.matchReasons.map(String) : []),
      ]),
      risks: uniqueStrings([
        ...aiRisksOrQuestions,
        ...(Array.isArray(match.risks) ? match.risks.map(String) : []),
      ]),
    };
  });
}

function isAiReportMatchEligible(match: Record<string, unknown>) {
  return getReportCandidateKind(match) !== "excluded";
}

function getReportCandidateKind(match: Record<string, unknown>) {
  const fit = String(match.aiReviewFit || "").toLowerCase();
  const stage = String(match.procurementStage || match.procurement_stage || "");
  if (!isProcurementOpportunityEligible(match, { allowLegacyUnclassified: true, legacyEligibility: () => true })) return "excluded";
  if ((!stage || stage === "open_competition") && !match.deadline) return "excluded";
  if (match.deadline && daysUntilDeadline(String(match.deadline || "")) < 0) return "excluded";
  const safety = getMatchSafetyStatus(match);
  if (stage && (safety === "hidden" || safety === "needs_review")) return "excluded";
  const riskText = [
    match.aiReviewReason,
    ...(Array.isArray(match.aiRisksOrQuestions) ? match.aiRisksOrQuestions : []),
  ].filter(Boolean).join(" ").toLowerCase();
  if (riskText.includes("outside service area")) return "excluded";

  if (fit) {
    if (fit === "weak" || fit === "no_fit") return "excluded";
    if (fit === "strong" && match.aiReviewSendToClient === true) return "ai_strong";
    if (fit === "possible" && match.aiReviewSendToClient === true) return "ai_possible";
    return "excluded";
  }

  if (safety === "hidden" || safety === "needs_review") return "excluded";
  const label = String(match.matchLabel || "").toLowerCase();
  const score = Number(match.matchScore || 0);
  if (score >= 75 || label.includes("strong") || label.includes("good")) return "rule_fallback";
  return "excluded";
}

function sortAiReportMatches(matches: Array<Record<string, unknown>>) {
  const kindRank: Record<string, number> = { ai_strong: 0, ai_possible: 1, rule_fallback: 2 };
  return [...matches]
    .filter(isAiReportMatchEligible)
    .sort((a, b) => {
      const rankDiff = (kindRank[getReportCandidateKind(a)] ?? 9) - (kindRank[getReportCandidateKind(b)] ?? 9);
      if (rankDiff) return rankDiff;
      const confidenceDiff = Number(b.aiReviewConfidence || 0) - Number(a.aiReviewConfidence || 0);
      if (confidenceDiff) return confidenceDiff;
      const scoreDiff = Number(b.matchScore || 0) - Number(a.matchScore || 0);
      if (scoreDiff) return scoreDiff;
      return daysUntilDeadline(String(a.deadline || "")) - daysUntilDeadline(String(b.deadline || ""));
    });
}

function getAiReportReasons(match: Record<string, unknown>) {
  return uniqueStrings([
    match.aiSuggestedClientSummary,
    ...(Array.isArray(match.aiFitReasons) ? match.aiFitReasons : []),
    ...(Array.isArray(match.matchReasons) ? match.matchReasons : []),
  ].map(String));
}

function getAiReportRisks(match: Record<string, unknown>) {
  return uniqueStrings([
    ...(Array.isArray(match.aiRisksOrQuestions) ? match.aiRisksOrQuestions : []),
    ...(Array.isArray(match.risks) ? match.risks : []),
  ].map(String));
}

async function loadPreviouslyReportedOpportunityIds(supabase: ReturnType<typeof createClient>, companyId: string) {
  const ids = new Set<string>();
  const { data: sends, error: sendsError } = await supabase
    .from("company_opportunity_sends")
    .select("opportunity_id")
    .eq("company_id", companyId)
    .in("channel", ["manual_email", "automated_email"]);
  if (!sendsError) {
    for (const row of sends || []) {
      if (row?.opportunity_id) ids.add(String(row.opportunity_id));
    }
  }
  return ids;
}

async function loadCompanyActionOpportunityIds(
  supabase: ReturnType<typeof createClient>,
  companyId: string,
  actionTypes: string[],
) {
  const { data, error } = await supabase
    .from("company_opportunity_actions")
    .select("opportunity_id")
    .eq("company_id", companyId)
    .in("action_type", actionTypes);
  if (error) throw error;
  return new Set((data || []).map((row) => String(row.opportunity_id || "")).filter(Boolean));
}

function mapOpportunity(row: Record<string, unknown>) {
  const source = row.sources && typeof row.sources === "object" ? row.sources as Record<string, unknown> : {};
  const rawPayload = row.raw_payload && typeof row.raw_payload === "object" ? row.raw_payload as Record<string, unknown> : {};
  return {
    id: String(row.id || ""),
    source: String(source.name || rawPayload.source_name || "Unknown source"),
    sourceType: String(source.source_type || ""),
    externalId: String(row.external_id || ""),
    countryCode: String(row.country_code || ""),
    title: String(row.title || "Untitled opportunity"),
    buyer: String(row.buyer || "Unknown buyer"),
    category: String(row.category || ""),
    type: String(row.type || "tender"),
    description: String(row.description || ""),
    deadline: row.deadline ? String(row.deadline) : "",
    publishedDate: row.published_date ? String(row.published_date) : "",
    location: String(row.location || "Unknown"),
    estimatedValue: row.estimated_value == null ? null : Number(row.estimated_value),
    currency: String(row.currency || "ISK"),
    url: String(row.url || ""),
    requirements: Array.isArray(row.requirements) ? row.requirements.map(String) : [],
    keywords: Array.isArray(row.keywords) ? row.keywords.map(String) : [],
    difficulty: String(row.difficulty || "medium"),
    status: String(row.status || "open"),
    procurementStage: row.procurement_stage ? String(row.procurement_stage) : "",
    classificationGrandfathered: row.classification_grandfathered === true,
    actionableForSuppliers: row.actionable_for_suppliers === true,
    requiresAdminReview: row.requires_admin_review === true,
    classificationConfidence: row.classification_confidence == null ? null : Number(row.classification_confidence),
    classificationReason: String(row.classification_reason || ""),
    positiveSignals: Array.isArray(row.positive_signals) ? row.positive_signals.map(String) : [],
    negativeSignals: Array.isArray(row.negative_signals) ? row.negative_signals.map(String) : [],
    classifiedBy: String(row.classified_by || ""),
    classifiedAt: String(row.classified_at || ""),
    classifierVersion: String(row.classifier_version || ""),
    qualityStatus: String(rawPayload.quality_status || ""),
    rawPayload,
  };
}

const CIVIL_STRONG_SERVICE_TERMS = [
  "jarðvinna",
  "gatnagerð",
  "gatna- og stígagerð",
  "gatna og stígagerð",
  "stígagerð",
  "lóðarframkvæmdir",
  "lagnavinna",
  "lagnir",
  "fráveita",
  "fráveitulagnir",
  "vatnsveita",
  "hitaveita",
  "vatnslagnir",
  "regnvatnslagnir",
  "drenlagnir",
  "endurnýjun lagna",
  "brunnar",
  "dælubrunnar",
  "malbikun",
  "gangstétt",
  "gangstéttir",
  "stígar",
  "bílastæði",
  "vegagerð",
  "gröftur",
  "fyllingar",
  "grjóthleðsla",
  "jarðvegsskipti",
  "undirbygging",
  "yfirborðsfrágangur",
  "hellulögn",
  "hellulagnir",
  "kantsteinn",
  "kantsteinar",
  "landmótun",
  "afvötnun",
  "jarðvegsvinna",
  "útiframkvæmdir",
  "gatnaframkvæmdir",
];

const CIVIL_OPTIONAL_WINTER_SERVICE_TERMS = [
  "snjómokstur",
  "snjóruðningur",
  "hálkuvarnir",
  "vetrarþjónusta",
  "gangstéttir",
  "stofnanalóðir",
];

const CIVIL_WEAK_GENERIC_TERMS = [
  "framkvæmdir",
  "framkvæmd",
  "útboð",
  "verðfyrirspurn",
  "tilboð",
  "viðhald",
  "verktaki",
  "verk",
];

const CIVIL_INDOOR_DOWNGRADE_TERMS = [
  "innanhússfrágangur",
  "innanhúss",
  "smíði",
  "smíðavinna",
  "málun",
  "gólfefni",
  "innréttingar",
  "raflagnir",
  "pípulagnir",
  "leikskóli",
  "skóli",
  "húsnæði",
  "byggingarvinna",
];

const CIVIL_INDOOR_ALLOWED_SERVICE_TERMS = [
  "innanhússfrágangur",
  "innanhúss",
  "smíði",
  "smíðavinna",
  "málun",
  "gólfefni",
  "innréttingar",
  "raflagnir",
  "pípulagnir",
  "byggingarvinna",
];

const CIVIL_CONSULTING_DOWNGRADE_TERMS = [
  "for- og verkhönnun",
  "verkhönnun",
  "forhönnun",
  "hönnun",
  "ráðgjöf",
  "verkfræðiráðgjöf",
  "eftirlit",
  "umsjón",
  "verkefnastjórn",
  "verkefnastjórnun",
];

const CIVIL_CONSULTING_ALLOWED_SERVICE_TERMS = [
  "hönnun",
  "for- og verkhönnun",
  "verkhönnun",
  "forhönnun",
  "ráðgjöf",
  "verkfræðiráðgjöf",
  "eftirlit",
  "umsjón",
  "verkefnastjórn",
  "verkefnastjórnun",
];

const CIVIL_CORE_EXECUTION_PROFILE_TERMS = [
  "jarðvinna",
  "jarðvegsvinna",
  "gatnagerð",
  "gatna- og stígagerð",
  "stígagerð",
  "vegagerð",
  "lóðarframkvæmdir",
  "gröftur",
  "jarðvegsskipti",
  "fyllingar",
  "afvötnun",
  "landmótun",
  "yfirborðsfrágangur",
  "malbikun",
  "útiframkvæmdir",
];

function normalizedIncludesAny(text: string, terms: string[]) {
  const normalized = normalizeText(text);
  return terms.some((term) => normalized.includes(normalizeText(term)));
}

function isCivilWeakGenericTerm(value: string) {
  const normalized = normalizeText(value);
  return CIVIL_WEAK_GENERIC_TERMS.some((term) => normalized === normalizeText(term));
}

function rankMatchTerm(value: string) {
  const normalized = normalizeText(value);
  if (CIVIL_STRONG_SERVICE_TERMS.some((term) => normalized === normalizeText(term))) return 0;
  if (CIVIL_STRONG_SERVICE_TERMS.some((term) => normalized.includes(normalizeText(term)) || normalizeText(term).includes(normalized))) return 1;
  if (CIVIL_OPTIONAL_WINTER_SERVICE_TERMS.some((term) => normalized === normalizeText(term))) return 2;
  if (isCivilWeakGenericTerm(value)) return 10;
  return 3;
}

function sortMatchTermsBySpecificity(values: string[]) {
  return [...values].sort((a, b) => rankMatchTerm(a) - rankMatchTerm(b) || b.length - a.length || a.localeCompare(b));
}

function getStrongCivilTermsInText(text: string) {
  const normalizedText = normalizeText(text);
  return CIVIL_STRONG_SERVICE_TERMS.filter((term) => normalizedText.includes(normalizeText(term)));
}

function getOptionalWinterTermsInText(text: string) {
  const normalizedText = normalizeText(text);
  return CIVIL_OPTIONAL_WINTER_SERVICE_TERMS.filter((term) => normalizedText.includes(normalizeText(term)));
}

function promoteWeakGenericHitsToSpecificCivilTerms(hits: string[], opportunityTextValue: string) {
  const strongTerms = getStrongCivilTermsInText(opportunityTextValue);
  if (!strongTerms.length || !hits.some(isCivilWeakGenericTerm)) return hits;
  const nonWeakHits = hits.filter((hit) => !isCivilWeakGenericTerm(hit));
  return Array.from(new Set([...strongTerms, ...nonWeakHits]));
}

function isCivilContractorProfile(profile: CompanyProfile) {
  const profileText = [
    profile.industry,
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : []),
  ].filter(Boolean).join(" ");
  return normalizedIncludesAny(profileText, [
    ...CIVIL_STRONG_SERVICE_TERMS,
    ...CIVIL_OPTIONAL_WINTER_SERVICE_TERMS,
    "construction",
    "contractor",
    "verktaki",
    "mannvirki",
    "jarðtækni",
  ]);
}

function hasExplicitWinterService(profile: CompanyProfile) {
  const profileText = [
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : []),
  ].filter(Boolean).join(" ");
  return normalizedIncludesAny(profileText, CIVIL_OPTIONAL_WINTER_SERVICE_TERMS);
}

function hasExplicitIndoorService(profile: CompanyProfile) {
  const profileText = [
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : []),
  ].filter(Boolean).join(" ");
  return normalizedIncludesAny(profileText, CIVIL_INDOOR_ALLOWED_SERVICE_TERMS);
}

function hasExplicitConsultingService(profile: CompanyProfile) {
  const profileText = [
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : []),
  ].filter(Boolean).join(" ");
  return normalizedIncludesAny(profileText, CIVIL_CONSULTING_ALLOWED_SERVICE_TERMS);
}

function hasCoreExecutionService(profile: CompanyProfile) {
  const profileText = [
    profile.industry,
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : []),
  ].filter(Boolean).join(" ");
  return normalizedIncludesAny(profileText, CIVIL_CORE_EXECUTION_PROFILE_TERMS);
}

function getCivilContractorFit(
  profile: CompanyProfile,
  opportunity: Record<string, unknown>,
  serviceHits: string[],
  keywordHits: string[],
) {
  if (!isCivilContractorProfile(profile)) {
    return {
      serviceHits,
      keywordHits,
      hasWeakOnlyFit: false,
      hasIndoorMismatch: false,
      hasConsultingMismatch: false,
      hasSecondaryOnlyFit: false,
      hasPromotedBroadFit: false,
      hasWinterOnlyFit: false,
    };
  }

  const opportunityTextValue = opportunityText(opportunity);
  const hasStrongCivilTerm = normalizedIncludesAny(opportunityTextValue, CIVIL_STRONG_SERVICE_TERMS);
  const hasWinterTerm = normalizedIncludesAny(opportunityTextValue, CIVIL_OPTIONAL_WINTER_SERVICE_TERMS);
  const allowsWinterWork = hasExplicitWinterService(profile);
  const hasEligibleWinterTerm = hasWinterTerm && allowsWinterWork;
  const hasIndoorTerm = normalizedIncludesAny(opportunityTextValue, CIVIL_INDOOR_DOWNGRADE_TERMS);
  const allowsIndoorWork = hasExplicitIndoorService(profile);
  const hasConsultingTerm = normalizedIncludesAny(opportunityTextValue, CIVIL_CONSULTING_DOWNGRADE_TERMS);
  const allowsConsultingWork = hasExplicitConsultingService(profile);
  const detectedStrongTerms = getStrongCivilTermsInText(opportunityTextValue);
  const detectedWinterTerms = hasEligibleWinterTerm ? getOptionalWinterTermsInText(opportunityTextValue) : [];
  const serviceHitsAreWeakOnly = serviceHits.length > 0 && serviceHits.every(isCivilWeakGenericTerm);
  const keywordHitsAreWeakOnly = keywordHits.length > 0 && keywordHits.every(isCivilWeakGenericTerm);
  const hasAnySpecificHit = [...serviceHits, ...keywordHits].some((hit) => !isCivilWeakGenericTerm(hit));
  const hasWeakGenericHit = [...serviceHits, ...keywordHits].some(isCivilWeakGenericTerm);
  const shouldPromoteWeakTerms = !hasAnySpecificHit && hasWeakGenericHit && hasStrongCivilTerm;
  const expandedServiceHits = (shouldPromoteWeakTerms || hasEligibleWinterTerm)
    ? Array.from(new Set([...serviceHits, ...(shouldPromoteWeakTerms ? detectedStrongTerms : []), ...detectedWinterTerms]))
    : serviceHits;
  const shouldScoreWeakTerms = hasStrongCivilTerm || hasEligibleWinterTerm || hasAnySpecificHit;
  const filteredServiceHits = shouldScoreWeakTerms
    ? (shouldPromoteWeakTerms ? promoteWeakGenericHitsToSpecificCivilTerms(expandedServiceHits, opportunityTextValue) : expandedServiceHits.filter((service) => !isCivilWeakGenericTerm(service)))
    : expandedServiceHits.filter((service) => !isCivilWeakGenericTerm(service));
  const filteredKeywordHits = shouldScoreWeakTerms
    ? (shouldPromoteWeakTerms ? promoteWeakGenericHitsToSpecificCivilTerms(keywordHits, opportunityTextValue) : keywordHits.filter((keyword) => !isCivilWeakGenericTerm(keyword)))
    : keywordHits.filter((keyword) => !isCivilWeakGenericTerm(keyword));
  const specificHits = Array.from(new Set([...filteredServiceHits, ...filteredKeywordHits].filter((hit) => !isCivilWeakGenericTerm(hit))));
  const lacksCoreExecutionProfile = !hasCoreExecutionService(profile);

  return {
    serviceHits: sortMatchTermsBySpecificity(filteredServiceHits),
    keywordHits: sortMatchTermsBySpecificity(filteredKeywordHits),
    hasWeakOnlyFit: !hasStrongCivilTerm && !hasEligibleWinterTerm && !hasAnySpecificHit && (serviceHitsAreWeakOnly || keywordHitsAreWeakOnly),
    hasIndoorMismatch: hasIndoorTerm && !hasStrongCivilTerm && !allowsIndoorWork,
    hasConsultingMismatch: hasConsultingTerm && !allowsConsultingWork,
    hasWinterOnlyFit: hasEligibleWinterTerm && !hasStrongCivilTerm,
    hasSecondaryOnlyFit: hasAnySpecificHit && lacksCoreExecutionProfile && specificHits.length <= 2 && detectedStrongTerms.length >= 3,
    hasPromotedBroadFit: shouldPromoteWeakTerms,
  };
}

function calculateMatch(profile: CompanyProfile, opportunity: Record<string, unknown>) {
  return calculateCompanyOpportunityMatch(profile, opportunity);
  /* c8 ignore start -- retained temporarily for review history; canonical scorer returns above. */
  const text = opportunityText(opportunity);
  let score = 0;
  const reasons: string[] = [];
  const risks: string[] = [];

  if (categoryMatches(profile, opportunity)) {
    score += 35;
    reasons.push(`Matches your ${profile.industry} industry`);
  }

  const rawServiceHits = (profile.services || []).filter((service) => textIncludes(text, service));
  const rawKeywordHits = (profile.includeKeywords || []).filter((keyword) => textIncludes(text, keyword));
  const civilFit = getCivilContractorFit(profile, opportunity, rawServiceHits, rawKeywordHits);

  for (const service of civilFit.serviceHits) {
    score += 10;
    reasons.push(`Mentions your service: ${service}`);
  }

  for (const keyword of civilFit.keywordHits) {
    score += 8;
    reasons.push(`Contains your keyword: ${keyword}`);
  }

  const locationCategory = getLocationMatchCategory(profile, opportunity);
  if (locationCategory === "local_match") {
    score += 22;
    reasons.push("Local match");
  } else if (locationCategory === "national_match") {
    score += 16;
    reasons.push("National opportunity");
  } else if (locationCategory === "remote_match") {
    score += 14;
    reasons.push("Remote opportunity");
  } else if (locationCategory === "outside_area_possible") {
    const travelMinimum = Number(profile.minimumProjectValueForTravel || 0);
    const belowTravelMinimum = Boolean(travelMinimum && opportunity.estimatedValue && Number(opportunity.estimatedValue) < travelMinimum);
    score += belowTravelMinimum ? -4 : 4;
    reasons.push("Outside base area but travel allowed");
    risks.push(belowTravelMinimum
      ? "Outside base area and below your preferred travel project value"
      : "Check travel cost, project size and delivery capacity");
  } else {
    score -= 8;
    risks.push("Outside selected area; location match is low confidence");
  }

  if (civilFit.hasWinterOnlyFit && locationCategory === "local_match") {
    score += 12;
    reasons.push("Local winter service fit");
  }

  if (valueMatches(profile, opportunity)) {
    score += 10;
    if (opportunity.estimatedValue) reasons.push("Project value is inside your preferred range");
  } else {
    score -= 25;
    risks.push("Estimated project value is outside your preferred range");
  }

  const deadline = String(opportunity.deadline || "");
  if (!deadline) {
    risks.push(getOpportunityMissingDeadlineRisk(opportunity));
  } else {
    const days = daysUntilDeadline(deadline);
    if (days >= 0 && days <= 30) {
      score += 8;
      reasons.push("Deadline is coming up soon");
    } else if (days < 0) {
      score -= 50;
      risks.push("Deadline has passed");
    }
  }

  const excluded = profile.excludeKeywords.filter((keyword) => textIncludes(text, keyword));
  if (excluded.length) {
    score -= Math.min(36, excluded.length * 18);
    for (const keyword of excluded.slice(0, 2)) risks.push(`Contains exclude keyword: ${keyword}`);
  }

  if (civilFit.hasWeakOnlyFit) {
    score = Math.min(score, 40);
    risks.push("Only broad construction/procurement terms matched; verify fit");
  }

  if (civilFit.hasIndoorMismatch) {
    score = Math.min(score - 20, 40);
    risks.push("Appears to be indoor/building finishing work outside your core civil services");
  }

  if (civilFit.hasConsultingMismatch) {
    score = Math.min(score - 30, 35);
    risks.push("Appears to be design, consulting, supervision, or project management work outside your execution services");
  }

  if (civilFit.hasSecondaryOnlyFit) {
    score = Math.min(score, 84);
    risks.push("Secondary service match in a broader infrastructure tender; verify scope");
  }

  if (civilFit.hasPromotedBroadFit) {
    score = Math.min(score, 72);
    risks.push("Broad construction terms matched; verify the specific work type");
  }

  if (civilFit.hasWinterOnlyFit) {
    score = Math.min(score, 68);
    risks.push("Winter/snow service fit; verify capacity and scope");
  }

  score = Math.max(0, Math.min(100, Math.round(score)));
  return {
    ...opportunity,
    matchScore: score,
    matchLabel: getMatchLabel(score),
    matchReasons: reasons.slice(0, 5),
    risks: uniqueStrings(risks).slice(0, 4),
    nextSteps: [
      "Open the source documents",
      "Confirm mandatory requirements",
      "Check capacity and profitability",
      "Prepare questions before the deadline",
    ],
  };
  /* c8 ignore stop */
}

function classifyMatchSafety(profile: CompanyProfile, match: Record<string, unknown>) {
  const reasons: string[] = [];
  const payload = match.rawPayload && typeof match.rawPayload === "object"
    ? match.rawPayload as Record<string, unknown>
    : {};
  const adminStatus = String(payload.admin_report_status || "").toLowerCase();

  if (adminStatus === "include") {
    return {
      safetyStatus: "auto_approved",
      safetyReasons: ["Admin override includes this opportunity in customer reports"],
      alertEligible: true,
      reviewRequired: false,
    };
  }

  if (!isCustomerMatchEligibleOpportunity(match) || !isDashboardVisibleOpportunity(match)) {
    return {
      safetyStatus: "hidden",
      safetyReasons: ["Excluded by customer eligibility, duplicate, stale, hidden, demo, or expired filters"],
      alertEligible: false,
      reviewRequired: false,
    };
  }

  if (isAlreadyAwardedOrTenderedReportItem(match)) reasons.push("Tender appears already awarded or already tendered");
  if (isDesignConsultingOnlyForProfile(profile, match)) reasons.push("Design, consulting, or supervision-only fit for a contractor profile");
  if (isStaleCustomerOpportunity(match)) reasons.push("Stale or expired opportunity signal");

  const deadline = String(match.deadline || "");
  const hasFutureDeadline = Boolean(deadline) && daysUntilDeadline(deadline) >= 0;
  const stage = String(match.procurementStage || match.procurement_stage || "");
  const requiresSupplierDeadline = !stage || stage === "open_competition";
  const hasStrongWorkTypeFit = hasStrongWorkTypeMatch(match);
  const risks = Array.isArray(match.risks) ? match.risks.map(String) : [];
  if (!deadline && requiresSupplierDeadline) reasons.push("No reliable deadline was found");
  if (isUnknownBuyer(match)) reasons.push("Buyer is missing or generic");
  if (risks.some((risk) => /broad construction|low confidence/i.test(risk))) reasons.push("Match depends on broad or low-confidence terms");
  if (risks.some((risk) => /indoor|finishing|outside your core civil services/i.test(risk))) reasons.push("Possible service mismatch for this company profile");
  if (containsReviewOnlyTerms(match) && !companyExplicitlyAllowsReviewOnlyWork(profile)) {
    reasons.push("Mentions design, consulting, supervision, or project management terms");
  }

  if (reasons.some((reason) => /awarded|already tendered|stale|expired/i.test(reason))) {
    return {
      safetyStatus: "hidden",
      safetyReasons: uniqueStrings(reasons),
      alertEligible: false,
      reviewRequired: false,
    };
  }

  const autoApproved = (requiresSupplierDeadline ? hasFutureDeadline : true) &&
    hasStrongWorkTypeFit &&
    !reasons.some((reason) => /missing|generic|broad|mismatch|consulting|supervision|project management/i.test(reason));

  if (autoApproved) {
    return {
      safetyStatus: "auto_approved",
      safetyReasons: uniqueStrings([
        "Valid future deadline found",
        "Strong service/work-type fit",
      ]),
      alertEligible: profile.autoAlertMode !== "dashboard_only",
      reviewRequired: false,
    };
  }

  return {
    safetyStatus: "needs_review",
    safetyReasons: uniqueStrings(reasons.length ? reasons : ["Current opportunity is plausible but needs review before customer alerts"]),
    alertEligible: false,
    reviewRequired: true,
  };
}

function applyReviewedSafetyOverride(safety: Record<string, unknown>, existing?: Record<string, unknown>) {
  if (!existing?.reviewed_at) return safety;
  return {
    safetyStatus: String(existing.safety_status || safety.safetyStatus || "needs_review"),
    safetyReasons: Array.isArray(existing.safety_reasons) ? existing.safety_reasons.map(String) : safety.safetyReasons,
    alertEligible: Boolean(existing.alert_eligible),
    reviewRequired: Boolean(existing.review_required),
    reviewedAt: String(existing.reviewed_at || ""),
    reviewedBy: String(existing.reviewed_by || ""),
    reviewNote: String(existing.review_note || ""),
  };
}

function getMatchSafetyStatus(match: Record<string, unknown>) {
  return String(match.safetyStatus || match.safety_status || "needs_review");
}

function isRecentOpportunity(opportunity: Record<string, unknown>, maxAgeDays: number) {
  const published = String(opportunity.publishedDate || opportunity.published_date || "");
  if (!published) return false;
  const date = new Date(`${published.slice(0, 10)}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return false;
  return (Date.now() - date.getTime()) / 86400000 <= maxAgeDays;
}

function isHighIntentSource(opportunity: Record<string, unknown>) {
  const text = normalizeText(`${opportunity.source || ""} ${opportunity.sourceType || ""} ${opportunity.category || ""}`);
  return [
    "utbodsvefur",
    "ríkiskaup",
    "rikiskaup",
    "tender",
    "procurement",
    "útboð",
    "utbod",
  ].some((term) => text.includes(normalizeText(term)));
}

function hasStrongWorkTypeMatch(match: Record<string, unknown>) {
  const reasons = Array.isArray(match.matchReasons) ? match.matchReasons.map(String).join(" ") : "";
  const text = getOpportunityQualityText(match);
  return containsAnyNormalizedPhrase(`${reasons} ${text}`, CIVIL_STRONG_SERVICE_TERMS) ||
    containsAnyNormalizedPhrase(reasons, ["service:", "keyword:"]) && !containsAnyNormalizedPhrase(reasons, CIVIL_WEAK_GENERIC_TERMS);
}

function isUnknownBuyer(opportunity: Record<string, unknown>) {
  const buyer = normalizeText(String(opportunity.buyer || ""));
  return !buyer || ["unknown buyer", "óþekktur kaupandi", "admin", "administrator", "editor", "ritstjóri", "noreply"].includes(buyer);
}

function containsReviewOnlyTerms(opportunity: Record<string, unknown>) {
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opportunity), [
    "umsjón",
    "umsjon",
    "eftirlit",
    "hönnun",
    "honnun",
    "ráðgjöf",
    "radgjof",
    "verkefnastjórn",
    "verkefnastjorn",
  ]);
}

function companyExplicitlyAllowsReviewOnlyWork(profile: CompanyProfile) {
  return containsAnyNormalizedPhrase([
    profile.industry,
    ...profile.services,
    ...profile.includeKeywords,
  ].join(" "), [
    "umsjón",
    "umsjon",
    "eftirlit",
    "hönnun",
    "honnun",
    "ráðgjöf",
    "radgjof",
    "verkefnastjórn",
    "verkefnastjorn",
    "verkfræðiráðgjöf",
    "verkfraediradgjof",
  ]);
}

function isCustomerMatchEligibleOpportunity(opportunity: Record<string, unknown>) {
  if (!isProcurementOpportunityEligible(opportunity, { allowLegacyUnclassified: true, legacyEligibility: () => true })) return false;
  if (opportunity.procurementStage || opportunity.procurement_stage) return true;
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object"
    ? opportunity.rawPayload as Record<string, unknown>
    : {};
  if (isDemoTestOpportunity(opportunity)) return false;
  const adminStatus = String(payload.admin_report_status || "").toLowerCase();
  if (adminStatus === "include") return true;
  if (payload.hidden_from_reports === true) return false;
  if (["hidden", "hide", "noise", "deleted"].includes(adminStatus)) return false;
  if (isSecondaryDuplicateOpportunity(opportunity, payload)) return false;
  if (isStaleCustomerOpportunity(opportunity)) return false;
  const tenderState = String(payload.tender_state || "").toLowerCase();
  if (["tender_awarded", "awarded", "already_awarded", "already_tendered"].includes(tenderState)) return false;
  const intent = normalizeReportIntent(String(payload.opportunity_intent || payload.intent || payload.quality_status || ""));
  if (["news_context", "not_opportunity"].includes(intent)) return false;
  if (containsTitleNewsIntent(String(opportunity.title || "")) && !containsConfirmedTenderIntent(getOpportunityQualityText(opportunity))) return false;
  return true;
}

function isSecondaryDuplicateOpportunity(opportunity: Record<string, unknown>, payload: Record<string, unknown>) {
  const id = String(opportunity.id || "");
  const canonicalId = String(payload.canonical_opportunity_id || "");
  return payload.is_duplicate === true ||
    Boolean(payload.duplicate_of) ||
    (Boolean(canonicalId) && Boolean(id) && canonicalId !== id);
}

function isStaleCustomerOpportunity(opportunity: Record<string, unknown>) {
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object"
    ? opportunity.rawPayload as Record<string, unknown>
    : {};
  if (payload.stale_status === "stale_or_expired" || payload.opportunity_intent === "stale_opportunity") return true;
  return getStaleOpportunityInfo({
    title: String(opportunity.title || ""),
    description: String(opportunity.description || ""),
    content: [
      String(opportunity.category || ""),
      String(opportunity.source || ""),
      Array.isArray(opportunity.keywords) ? (opportunity.keywords as unknown[]).join(" ") : "",
    ].join(" "),
    publishedDate: String(opportunity.publishedDate || ""),
    deadline: String(opportunity.deadline || ""),
    sourceName: String(opportunity.source || ""),
    sourceType: String(opportunity.sourceType || ""),
    connectorType: String(payload.connector_type || ""),
  }).isStale;
}

function isDashboardVisibleOpportunity(opportunity: Record<string, unknown>) {
  if (!opportunity || String(opportunity.status || "") !== "open") return false;
  const payload = opportunity.rawPayload as Record<string, unknown> | undefined;
  if (opportunity.phase_c_communication_hold === true || opportunity.phaseCCommunicationHold === true || payload?.phase_c_communication_hold === true) return false;
  if (!opportunity.url || opportunity.url === "#") return false;
  if (daysUntilDeadline(String(opportunity.deadline || "")) < 0) return false;
  if (isDemoTestOpportunity(opportunity)) return false;
  if ((opportunity.rawPayload as Record<string, unknown> | undefined)?.extraction_method === "parent_article_with_child_opportunities") return false;
  return true;
}

function getReportSections(company: CompanyProfile, matches: Array<Record<string, unknown>>) {
  const buckets = { confirmed: [] as Array<Record<string, unknown>>, early: [] as Array<Record<string, unknown>> };
  const seen = new Set<string>();
  sortCustomerReportMatches(matches).forEach((opportunity) => {
    const id = String(opportunity.id || "");
    if (!id || seen.has(id) || !isStrictCustomerReportEligible(company, opportunity)) return;
    seen.add(id);
    const intent = getOpportunityIntent(opportunity);
    if (intent === "confirmed_tender") buckets.confirmed.push(opportunity);
    else if (intent === "early_opportunity") buckets.early.push(opportunity);
    else {
      const quality = normalizeOpportunityQualityStatus(String(opportunity.qualityStatus || ""), opportunity);
      if (quality === "confirmed_tender") buckets.confirmed.push(opportunity);
      else if (quality === "early_signal") buckets.early.push(opportunity);
    }
  });
  let remaining = 8;
  buckets.confirmed = buckets.confirmed.slice(0, remaining);
  remaining -= buckets.confirmed.length;
  buckets.early = buckets.early.slice(0, Math.max(0, remaining));
  return buckets;
}

function isStrictCustomerReportEligible(company: CompanyProfile, opportunity: Record<string, unknown>) {
  const payload = opportunity.rawPayload as Record<string, unknown> | undefined;
  if (opportunity.phase_c_communication_hold === true || opportunity.phaseCCommunicationHold === true || payload?.phase_c_communication_hold === true) return false;
  if (!isCustomerMatchEligibleOpportunity(opportunity)) return false;
  if (opportunity.procurementStage || opportunity.procurement_stage) return true;
  if (isAlreadyAwardedOrTenderedReportItem(opportunity)) return false;
  if (isDesignConsultingOnlyForProfile(company, opportunity)) return false;
  if (isNeedsReviewWrongTypeForProfile(company, opportunity)) return false;
  if (containsTitleNewsIntent(String(opportunity.title || "")) && !hasOpenTenderOrQuoteIntent(opportunity)) return false;
  const intent = getOpportunityIntent(opportunity);
  if (intent === "confirmed_tender") return hasOpenTenderOrQuoteIntent(opportunity) || isProcurementSource(opportunity);
  if (intent === "early_opportunity") return hasUpcomingTenderIntent(opportunity);
  const quality = normalizeOpportunityQualityStatus(String(opportunity.qualityStatus || ""), opportunity);
  if (quality === "confirmed_tender") return hasOpenTenderOrQuoteIntent(opportunity) || isProcurementSource(opportunity);
  if (quality === "early_signal") return hasUpcomingTenderIntent(opportunity);
  return false;
}

function isDesignConsultingOnlyForProfile(company: CompanyProfile, opportunity: Record<string, unknown>) {
  const text = getOpportunityQualityText(opportunity);
  const hasDesignOnlyTerm = containsAnyNormalizedPhrase(text, [
    "for og verkhönnun",
    "for og verkhonnun",
    "verkhönnun",
    "verkhonnun",
    "forhönnun",
    "forhonnun",
    "verkfræðiráðgjöf",
    "verkfraediradgjof",
    "ráðgjöf",
    "radgjof",
    "umsjón",
    "umsjon",
    "verkefnastjórn",
    "verkefnastjorn",
    "útboðsgögn hönnun",
    "utbodsgogn honnun",
  ]);
  const hasGeneralDesignTerm = containsAnyNormalizedPhrase(text, ["hönnun", "honnun"]);
  const hasPhysicalWorkTerm = containsAnyNormalizedPhrase(text, [
    "lóðarframkvæmdir",
    "lodarframkvaemdir",
    "gatnagerð",
    "gatnagerd",
    "stígagerð",
    "stigagerd",
    "lagnir",
    "regnvatnslagnir",
    "jarðvinna",
    "jardvinna",
    "jarðvegsskipti",
    "jardvegsskipti",
    "fyllingar",
    "grjóthleðsla",
    "grjothledsla",
    "malbikun",
    "hellulögn",
    "hellulogn",
    "kantsteinar",
    "landmótun",
    "landmotun",
    "yfirborðsfrágangur",
    "yfirbordsfragangur",
    "bílastæði",
    "bilastaedi",
  ]);
  const supervisionOnly = containsAnyNormalizedPhrase(text, ["eftirlit", "umsjón", "umsjon", "verkefnastjórn", "verkefnastjorn"]) && !hasPhysicalWorkTerm;

  if (!hasDesignOnlyTerm && !(hasGeneralDesignTerm && !hasPhysicalWorkTerm) && !supervisionOnly) return false;

  const profileServiceText = [
    company.industry,
    ...(Array.isArray(company.services) ? company.services : []),
  ].filter(Boolean).join(" ");

  return !containsAnyNormalizedPhrase(profileServiceText, [
    "hönnun",
    "honnun",
    "ráðgjöf",
    "radgjof",
    "verkfræðiráðgjöf",
    "verkfraediradgjof",
    "verkfræði",
    "verkfraedi",
    "eftirlit",
    "verkefnastjórnun",
    "verkefnastjornun",
    "útboðsgögn",
    "utbodsgogn",
    "engineering",
    "design",
    "consulting",
    "project management",
    "supervision",
  ]);
}

function isNeedsReviewWrongTypeForProfile(company: CompanyProfile, opportunity: Record<string, unknown>) {
  if (getMatchSafetyStatus(opportunity) !== "needs_review") return false;
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object"
    ? opportunity.rawPayload as Record<string, unknown>
    : {};
  const reasonText = [
    ...(Array.isArray(opportunity.safetyReasons) ? opportunity.safetyReasons.map(String) : []),
    ...(Array.isArray(opportunity.risks) ? opportunity.risks.map(String) : []),
    ...(Array.isArray(payload.safety_reasons) ? payload.safety_reasons.map(String) : []),
    ...(Array.isArray(payload.risks) ? payload.risks.map(String) : []),
  ].filter(Boolean).join(" ");
  if (!containsReviewOnlyTerms({ title: reasonText, description: "" })) return false;
  return !companyExplicitlyAllowsReviewOnlyWork(company);
}

function sortCustomerReportMatches(matches: Array<Record<string, unknown>>) {
  return [...matches].sort((a, b) => {
    const rankDiff = getStrictReportRank(a) - getStrictReportRank(b);
    if (rankDiff) return rankDiff;
    const procurementDiff = Number(isProcurementSource(b)) - Number(isProcurementSource(a));
    if (procurementDiff) return procurementDiff;
    return Number(b.matchScore || 0) - Number(a.matchScore || 0);
  });
}

function getStrictReportRank(opportunity: Record<string, unknown>) {
  if (isAlreadyAwardedOrTenderedReportItem(opportunity)) return 99;
  const intent = getOpportunityIntent(opportunity);
  if (intent === "confirmed_tender") return 0;
  if (intent === "early_opportunity") return 1;
  return 10;
}

function getOpportunityIntent(opportunity: Record<string, unknown>) {
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object"
    ? opportunity.rawPayload as Record<string, unknown>
    : {};
  const adminStatus = String(payload.admin_report_status || "").toLowerCase();
  const override = normalizeReportIntent(String(payload.opportunity_intent || payload.intent || ""));
  if (adminStatus === "include") return override || "confirmed_tender";
  if (["hidden", "hide", "noise", "deleted"].includes(adminStatus)) return override || "not_opportunity";
  if (override) return override;
  if (/ted|tenders electronic daily/i.test(String(opportunity.source || ""))) return "confirmed_tender";
  const text = getOpportunityQualityText(opportunity);
  if (containsConfirmedTenderIntent(text)) return "confirmed_tender";
  if (containsTitleNewsIntent(String(opportunity.title || "")) || containsObviousNewsIntent(text)) return "news_context";
  if (hasUpcomingTenderIntent(opportunity)) return "early_opportunity";
  return "market_signal";
}

function normalizeOpportunityQualityStatus(status: string, opportunity: Record<string, unknown>) {
  const value = String(status || "").toLowerCase();
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object" ? opportunity.rawPayload as Record<string, unknown> : {};
  const intentOverride = normalizeReportIntent(String(payload.opportunity_intent || payload.intent || ""));
  if (intentOverride === "confirmed_tender") return "confirmed_tender";
  if (["early_opportunity", "market_signal"].includes(intentOverride)) return "early_signal";
  if (["news_context", "not_opportunity"].includes(intentOverride)) return "needs_review";
  if (/ted|tenders electronic daily/i.test(String(opportunity.source || ""))) return "confirmed_tender";
  if (value === "early_signal" || value === "needs_review" || value === "confirmed_tender") return value;
  const text = getOpportunityQualityText(opportunity);
  if (containsConfirmedTenderIntent(text)) return "confirmed_tender";
  if (hasUpcomingTenderIntent(opportunity)) return "early_signal";
  return "needs_review";
}

function buildReportContent(company: CompanyProfile, matches: Array<Record<string, unknown>>) {
  const now = new Date();
  const periodEnd = now.toISOString().slice(0, 10);
  const start = new Date(now);
  start.setDate(start.getDate() - 7);
  const periodStart = start.toISOString().slice(0, 10);
  const title = `Útboðs- og verkefnayfirlit fyrir ${company.companyName}`;
  const summary = `${matches.length} viðeigandi útboðs- eða verðfyrirspurnaratriði fundust fyrir ${company.companyName}.`;
  const textContent = `${title}
${periodStart} - ${periodEnd}

${summary}

${matches.map((match, index) => {
    const reasons = getAiReportReasons(match);
    return `${index + 1}. ${match.title}
   Kaupandi: ${match.buyer || "Óþekktur kaupandi"}
   Skilafrestur: ${match.deadline || "Fannst ekki"}
   Heimild: ${match.source || "Óþekkt heimild"}${match.url ? ` (${match.url})` : ""}
   AI mat: ${match.aiReviewFit || "possible"}${match.aiReviewConfidence ? ` (${Math.round(Number(match.aiReviewConfidence) * 100)}%)` : ""}
   Samantekt: ${match.aiSuggestedClientSummary || match.aiReviewReason || "Viðeigandi atriði samkvæmt AI yfirferð."}
   Ástæður: ${reasons.length ? reasons.join("; ") : "Passar við fyrirtækjaprófílinn."}`;
  }).join("\n\n")}`;
  const htmlContent = `
    <section>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(summary)}</p>
      ${matches.map((match, index) => `
        <article>
          <h3>${index + 1}. ${escapeHtml(String(match.title || ""))}</h3>
          <p>
            <strong>Kaupandi:</strong> ${escapeHtml(String(match.buyer || "Óþekktur kaupandi"))} ·
            <strong>Skilafrestur:</strong> ${escapeHtml(String(match.deadline || "Fannst ekki"))} ·
            <strong>Heimild:</strong> ${escapeHtml(String(match.source || ""))}
          </p>
          ${match.url ? `<p><a href="${escapeHtml(String(match.url))}" target="_blank" rel="noopener noreferrer">Opna heimild</a></p>` : ""}
          <p><strong>AI mat:</strong> ${escapeHtml(String(match.aiReviewFit || "possible"))}${match.aiReviewConfidence ? ` (${Math.round(Number(match.aiReviewConfidence) * 100)}%)` : ""}</p>
          <p>${escapeHtml(String(match.aiSuggestedClientSummary || match.aiReviewReason || "Viðeigandi atriði samkvæmt AI yfirferð."))}</p>
          ${getAiReportReasons(match).length ? `<ul>${getAiReportReasons(match).map((reason) => `<li>${escapeHtml(reason)}</li>`).join("")}</ul>` : ""}
        </article>
      `).join("")}
    </section>
  `;
  return { title, periodStart, periodEnd, summary, textContent, htmlContent };
}

function getLocationMatchCategory(profile: CompanyProfile, opportunity: Record<string, unknown>) {
  if (localLocationMatches(profile, opportunity)) return "local_match";
  const locationText = normalizeLocationText(getEffectiveOpportunityLocation(opportunity));
  if (locationText.includes("remote") || locationText.includes("online")) return profile.remoteProjects ? "remote_match" : "outside_area_low_confidence";
  if (isNationalOpportunity(opportunity) && getOpportunityCountryCode(opportunity) === "IS") return "national_match";
  if (getOpportunityCountryCode(opportunity) === "IS" && (profile.nationalProjects || profile.willingToTravel)) return "outside_area_possible";
  return "outside_area_low_confidence";
}

function localLocationMatches(profile: CompanyProfile, opportunity: Record<string, unknown>) {
  const selectedLocations = [
    ...profile.locations,
    ...profile.serviceAreas,
    profile.baseLocation,
  ].filter(Boolean).map(normalizeLocationText);
  if (!selectedLocations.length) return false;
  const opportunityLocation = normalizeLocationText(getEffectiveOpportunityLocation(opportunity));
  if (selectedLocations.includes("all iceland")) return getOpportunityCountryCode(opportunity) === "IS" || opportunityLocation.includes("iceland") || opportunityLocation.includes("island");
  return selectedLocations.some((selected) => {
    if (!selected) return false;
    if (selected === opportunityLocation) return true;
    if (isExplicitLocationAliasMatch(selected, opportunityLocation)) return true;
    return opportunityLocation.includes(selected) || selected.includes(opportunityLocation);
  });
}

function isNationalOpportunity(opportunity: Record<string, unknown>) {
  const location = normalizeLocationText(String(opportunity.location || ""));
  if (isGenericIcelandLocation(location) && inferOpportunityLocationFromText(opportunity)) return false;
  const text = normalizeLocationText(`${opportunity.title || ""} ${opportunity.description || ""} ${opportunity.location || ""}`);
  return ["all iceland", "iceland", "island", "national", "nationwide", "landsvist"].some((value) => text.includes(value));
}

function getOpportunityCountryCode(opportunity: Record<string, unknown>) {
  const direct = normalizeCountryCode(opportunity.countryCode);
  if (direct) return direct;
  const location = normalizeLocationText(getEffectiveOpportunityLocation(opportunity));
  if (
    location.includes("iceland") ||
    location.includes("island") ||
    location.includes("reykjavik") ||
    location.includes("capital area") ||
    location.includes("hofudborgarsvaedid")
  ) return "IS";
  return "";
}

function getEffectiveOpportunityLocation(opportunity: Record<string, unknown>) {
  const rawLocation = String(opportunity.location || "").trim();
  const normalized = normalizeLocationText(rawLocation);
  if (rawLocation && !isGenericIcelandLocation(normalized)) return rawLocation;
  return inferOpportunityLocationFromText(opportunity) || rawLocation;
}

function isGenericIcelandLocation(normalizedLocation: string) {
  return !normalizedLocation ||
    normalizedLocation === "unknown" ||
    normalizedLocation === "all iceland" ||
    normalizedLocation === "iceland" ||
    normalizedLocation === "island";
}

function inferOpportunityLocationFromText(opportunity: Record<string, unknown>) {
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object"
    ? opportunity.rawPayload as Record<string, unknown>
    : {};
  const text = normalizeLocationText([
    opportunity.title,
    opportunity.description,
    opportunity.buyer,
    payload.buyer,
    payload.extracted_buyer,
    payload.source_name,
    payload.extracted_location,
    payload.location,
  ].filter(Boolean).join(" "));
  if (
    text.includes("reykjavik") ||
    text.includes("reykjavikurborg") ||
    text.includes("hofudborgarsvaedid")
  ) return "Reykjavík / Höfuðborgarsvæðið";
  return "";
}

function normalizeCountryCode(value: unknown) {
  const code = String(value || "").trim().toUpperCase();
  if (["IS", "ISL"].includes(code)) return "IS";
  if (["NO", "NOR"].includes(code)) return "NO";
  if (["DK", "DNK"].includes(code)) return "DK";
  if (["SE", "SWE"].includes(code)) return "SE";
  if (["FI", "FIN"].includes(code)) return "FI";
  return "";
}

function categoryMatches(profile: CompanyProfile, opportunity: Record<string, unknown>) {
  const industry = normalizeText(profile.industry);
  const category = normalizeText(String(opportunity.category || ""));
  return category.includes(industry) || industry.includes(category);
}

function valueMatches(profile: CompanyProfile, opportunity: Record<string, unknown>) {
  const estimatedValue = Number(opportunity.estimatedValue || 0);
  if (!estimatedValue) return Boolean(profile.allowUnknownValue);
  if (profile.minProjectValue && estimatedValue < profile.minProjectValue) return false;
  if (profile.maxProjectValue && estimatedValue > profile.maxProjectValue) return false;
  return true;
}

function opportunityText(opportunity: Record<string, unknown>) {
  return normalizeText([
    opportunity.title,
    opportunity.description,
    opportunity.category,
    opportunity.location,
    ...(Array.isArray(opportunity.keywords) ? opportunity.keywords : []),
  ].filter(Boolean).join(" "));
}

function textIncludes(text: string, value: string) {
  const normalized = normalizeText(value);
  return Boolean(normalized && text.includes(normalized));
}

function getOpportunityQualityText(opportunity: Record<string, unknown>) {
  return `${opportunity.title || ""} ${opportunity.description || ""} ${opportunity.category || ""} ${Array.isArray(opportunity.keywords) ? opportunity.keywords.join(" ") : ""}`;
}

function hasOpenTenderOrQuoteIntent(opportunity: Record<string, unknown>) {
  return containsConfirmedTenderIntent(getOpportunityQualityText(opportunity));
}

function hasUpcomingTenderIntent(opportunity: Record<string, unknown>) {
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opportunity), [
    "senn í útboð",
    "senn i utbod",
    "áætlað útboð",
    "aaetlad utbod",
    "áætlað er að bjóða út",
    "aaetlad er ad bjoda ut",
    "fyrirhugað útboð",
    "fyrirhugad utbod",
  ]);
}

function containsConfirmedTenderIntent(text: string) {
  return containsAnyNormalizedPhrase(text, [
    "útboð",
    "utbod",
    "útboðsauglýsing",
    "utbodsauglysing",
    "tilboð",
    "tilbod",
    "óskað eftir tilboðum",
    "oskad eftir tilbodum",
    "verðfyrirspurn",
    "verdfyrirspurn",
    "forval",
    "skilafrestur",
    "útboðsgögn",
    "utbodsgogn",
  ]);
}

function getStaleOpportunityInfo(input: {
  title?: string;
  description?: string;
  content?: string;
  publishedDate?: string | null;
  deadline?: string | null;
  sourceName?: string;
  sourceType?: string;
  connectorType?: string;
}) {
  const deadline = String(input.deadline || "").slice(0, 10);
  if (deadline && daysUntilDeadline(deadline) >= 0) {
    return { isStale: false, reason: "", thresholdDays: null as number | null, ageDays: null as number | null, oldYears: [] as number[], expiredKeywords: [] as string[] };
  }
  const text = `${input.title || ""} ${input.description || ""} ${input.content || ""}`;
  const normalized = normalizeText(text);
  const oldYears = getOldYears(normalized);
  const expiredKeywords = getExpiredResultKeywords(normalized);
  const publishedDate = parseIsoDate(String(input.publishedDate || ""));
  const ageDays = publishedDate ? Math.floor((Date.now() - new Date(`${publishedDate}T00:00:00Z`).getTime()) / 86400000) : null;
  const thresholdDays = isStrictStaleSource(input) ? 45 : 60;

  if (oldYears.length) {
    return { isStale: true, reason: `Old year detected (${oldYears.join(", ")}) and no future deadline found.`, thresholdDays, ageDays, oldYears, expiredKeywords };
  }
  if (expiredKeywords.length) {
    return { isStale: true, reason: `Expired/result wording detected (${expiredKeywords.slice(0, 3).join(", ")}) and no future deadline found.`, thresholdDays, ageDays, oldYears, expiredKeywords };
  }
  if (ageDays !== null && ageDays > thresholdDays) {
    return { isStale: true, reason: `Published ${ageDays} days ago with no current deadline.`, thresholdDays, ageDays, oldYears, expiredKeywords };
  }
  return { isStale: false, reason: "", thresholdDays, ageDays, oldYears, expiredKeywords };
}

function isStrictStaleSource(input: { sourceName?: string; sourceType?: string; connectorType?: string }) {
  const text = normalizeText(`${input.sourceName || ""} ${input.sourceType || ""} ${input.connectorType || ""}`);
  return input.connectorType === "rss_feed" && [
    "municipal",
    "sveitarfelag",
    "akranes",
    "borgarbyggd",
    "arborg",
    "selfoss",
    "gardabaer",
    "reykjanesbaer",
    "hafnarfjordur",
    "mosfellsbaer",
    "kopavogur",
    "mulathing",
    "fjardabyggd",
  ].some((value) => text.includes(normalizeText(value)));
}

function getOldYears(normalizedText: string) {
  const currentYear = new Date().getUTCFullYear();
  const years = new Set<number>();
  for (const match of normalizedText.matchAll(/\b(20[0-9]{2})\b/g)) {
    const year = Number(match[1]);
    if (year >= 2020 && year < currentYear) years.add(year);
  }
  return Array.from(years).sort();
}

function getExpiredResultKeywords(normalizedText: string) {
  const phrases = [
    "nidurstada utbods",
    "nidurstodur utbods",
    "opnun tilboda",
    "tilbod opnud",
    "lokid",
    "lokid utbodi",
    "buid",
    "ut runnid",
    "eldri utbod",
    "utbodssaga",
    "samningur gerdur",
    "verksamningur",
    "awarded",
    "tender results",
    "contract awarded",
    "expired",
  ];
  return phrases.filter((phrase) => normalizedText.includes(normalizeText(phrase)));
}

function parseIsoDate(value: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
}

function containsTitleNewsIntent(title: string) {
  return containsAnyNormalizedPhrase(title, [
    "lokun",
    "lokað",
    "lokad",
    "lokanir",
    "umferð",
    "umferd",
    "tafir",
    "hjáleið",
    "hjaleid",
    "akstursleið",
    "akstursleid",
    "vegfarendur",
    "frétt",
    "frett",
    "myndband",
    "tekur á sig mynd",
    "tekur a sig mynd",
    "opið aftur",
    "opid aftur",
  ]);
}

function containsObviousNewsIntent(text: string) {
  return containsAnyNormalizedPhrase(text, ["frétt", "frett", "viðburður", "vidburdur", "fundur", "myndband"]);
}

function isAlreadyAwardedOrTenderedReportItem(opportunity: Record<string, unknown>) {
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object" ? opportunity.rawPayload as Record<string, unknown> : {};
  const tenderState = String(payload.tender_state || "").toLowerCase();
  if (["tender_awarded", "awarded", "already_awarded", "already_tendered"].includes(tenderState)) return true;
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opportunity), [
    "lægstbjóðandi",
    "laegstbjodandi",
    "samningur var",
    "samið var",
    "samid var",
    "útboð hefur farið fram",
    "utbod hefur farid fram",
    "útboð var auglýst",
    "utbod var auglyst",
  ]);
}

function isProcurementSource(opportunity: Record<string, unknown>) {
  const source = normalizeText(String(opportunity.source || ""));
  return ["rikiskaup", "utbodsvefur", "ted", "procurement", "tender portal"].some((value) => source.includes(normalizeText(value)));
}

function isDemoTestOpportunity(opportunity: Record<string, unknown>) {
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object"
    ? opportunity.rawPayload as Record<string, unknown>
    : {};
  if (payload.is_demo === true || payload.demo === true) return true;
  const haystack = normalizeText(`${opportunity.source || ""} ${opportunity.sourceType || ""} ${opportunity.title || ""} ${opportunity.externalId || ""}`);
  return ["private lead", "manual test", "grant portal", "demo", "test", "sample", "mock", "fake"].some((value) => haystack.includes(normalizeText(value)));
}

function getOpportunityMissingDeadlineRisk(opportunity: Record<string, unknown>) {
  const payload = opportunity.rawPayload && typeof opportunity.rawPayload === "object" ? opportunity.rawPayload as Record<string, unknown> : {};
  return String(payload.deadline_warning || "Deadline not available in imported data — verify on source page.");
}

function getMatchLabel(score: number) {
  if (score >= 85) return "Strong match";
  if (score >= 65) return "Good match";
  if (score >= 45) return "Possible match";
  return "Weak match";
}

function normalizeAdminCompanyInput(input: AdminCompanyInput) {
  return {
    companyName: String(input.companyName || "").trim(),
    kennitala: String(input.kennitala || "").trim(),
    contactEmail: String(input.contactEmail || "").trim(),
    billingEmail: String(input.billingEmail || input.contactEmail || "").trim(),
    contactName: String(input.contactName || "").trim(),
    phone: String(input.phone || "").trim(),
    address: String(input.address || "").trim(),
    website: String(input.website || "").trim(),
    industry: String(input.industry || "").trim(),
    selectedPlan: normalizePlan(String(input.selectedPlan || "basic")),
    billingStatus: String(input.billingStatus || "trial").trim() || "trial",
    trialStartedAt: String(input.trialStartedAt || "").trim(),
    trialEndsAt: String(input.trialEndsAt || "").trim(),
    services: cleanStringArray(input.services as unknown[]),
    locations: cleanStringArray(input.locations as unknown[]),
    includeKeywords: cleanStringArray(input.includeKeywords as unknown[]),
    excludeKeywords: cleanStringArray(input.excludeKeywords as unknown[]),
    baseLocation: String(input.baseLocation || "").trim(),
    serviceAreas: cleanStringArray(input.serviceAreas as unknown[]),
    willingToTravel: Boolean(input.willingToTravel),
    nationalProjects: Boolean(input.nationalProjects),
    remoteProjects: Boolean(input.remoteProjects),
    minimumProjectValueForTravel: nullableNumber(input.minimumProjectValueForTravel),
    minProjectValue: nullableNumber(input.minProjectValue),
    maxProjectValue: nullableNumber(input.maxProjectValue),
    allowUnknownValue: Boolean(input.allowUnknownValue),
    reportFrequency: String(input.reportFrequency || "weekly").trim() || "weekly",
    reportDay: String(input.reportDay || "monday").trim() || "monday",
    deadlineReminders: Boolean(input.deadlineReminders),
    includeLowConfidence: Boolean(input.includeLowConfidence),
    autoAlertMode: String(input.autoAlertMode || "auto_safe_only").trim() || "auto_safe_only",
  };
}

function normalizeMatchingProfileInput(input: Record<string, unknown>) {
  return {
    coreServices: cleanStringArray(input.coreServices),
    secondaryServices: cleanStringArray(input.secondaryServices),
    excludedServices: cleanStringArray(input.excludedServices),
    preferredProjectTypes: cleanStringArray(input.preferredProjectTypes),
    excludedProjectTypes: cleanStringArray(input.excludedProjectTypes),
    equipment: cleanStringArray(input.equipment),
    certifications: cleanStringArray(input.certifications),
    preferredBuyers: cleanStringArray(input.preferredBuyers),
    maxTravelDistanceKm: nullableNumber(input.maxTravelDistanceKm),
    typicalProjectSize: String(input.typicalProjectSize || "").trim(),
    profileNotesForAi: String(input.profileNotesForAi || "").trim(),
  };
}

function normalizeAdminCompanyProfileInput(input: Record<string, unknown>) {
  const billingStatus = normalizeBillingStatus(String(input.billingStatus || "trial"));
  const reportFrequency = ["daily", "weekly"].includes(String(input.reportFrequency || ""))
    ? String(input.reportFrequency)
    : "weekly";
  const reportDay = ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(String(input.reportDay || ""))
    ? String(input.reportDay)
    : "monday";
  const minimumRelevanceThreshold = Math.max(0, Math.min(100, Number(input.minimumRelevanceThreshold ?? 50) || 50));
  return {
    companyName: String(input.companyName || "").trim(),
    kennitala: String(input.kennitala || "").trim(),
    contactName: String(input.contactName || "").trim(),
    contactEmail: normalizeEmail(String(input.contactEmail || "")),
    notificationEmail: normalizeEmail(String(input.notificationEmail || "")),
    billingEmail: normalizeEmail(String(input.billingEmail || "")),
    selectedPlan: normalizePlan(String(input.selectedPlan || "basic")),
    billingStatus,
    services: cleanStringArray(input.services),
    includeKeywords: cleanStringArray(input.includeKeywords),
    excludeKeywords: cleanStringArray(input.excludeKeywords),
    locations: cleanStringArray(input.locations),
    serviceAreas: cleanStringArray(input.serviceAreas),
    baseLocation: String(input.baseLocation || "").trim(),
    opportunityCategories: cleanStringArray(input.opportunityCategories),
    opportunityTypes: cleanStringArray(input.opportunityTypes),
    preferredProjectTypes: cleanStringArray(input.preferredProjectTypes),
    excludedProjectTypes: cleanStringArray(input.excludedProjectTypes),
    subcontractingRelevant: Boolean(input.subcontractingRelevant),
    minimumRelevanceThreshold,
    reportFrequency,
    reportDay,
    deadlineReminders: Boolean(input.deadlineReminders),
    includeLowConfidence: Boolean(input.includeLowConfidence),
    coreServices: cleanStringArray(input.coreServices),
    secondaryServices: cleanStringArray(input.secondaryServices),
    excludedServices: cleanStringArray(input.excludedServices),
    equipment: cleanStringArray(input.equipment),
    certifications: cleanStringArray(input.certifications),
    preferredBuyers: cleanStringArray(input.preferredBuyers),
    maxTravelDistanceKm: nullableNumber(input.maxTravelDistanceKm),
    typicalProjectSize: String(input.typicalProjectSize || "").trim(),
    profileNotesForAi: String(input.profileNotesForAi || "").trim(),
    internalAdminNotes: String(input.internalAdminNotes || "").trim(),
  };
}

function normalizeBillingStatus(value: string) {
  const normalized = String(value || "").trim().toLowerCase();
  return ["trial", "active", "paused", "cancelled"].includes(normalized) ? normalized : "trial";
}

function normalizeDecisionReason(value: string) {
  const normalized = String(value || "").trim();
  return [
    "wrong_service",
    "wrong_location",
    "too_large",
    "too_small",
    "missing_equipment_or_certification",
    "consultancy_not_execution",
    "not_interested",
    "duplicate_or_already_known",
    "other",
  ].includes(normalized) ? normalized : "";
}

function normalizePlan(value: string) {
  return ["basic", "pro", "priority"].includes(value) ? value : "basic";
}

function nullableNumber(value: unknown) {
  if (value == null || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function normalizeReportIntent(value: string) {
  const normalized = String(value || "").toLowerCase().trim();
  const aliases: Record<string, string> = {
    confirmed: "confirmed_tender",
    confirmed_tender: "confirmed_tender",
    likely_opportunity: "confirmed_tender",
    verified: "confirmed_tender",
    early_signal: "early_opportunity",
    early_opportunity: "early_opportunity",
    upcoming_tender: "early_opportunity",
    market_signal: "market_signal",
    project_signal: "market_signal",
    needs_review: "market_signal",
    news_context: "news_context",
    news: "news_context",
    noise: "not_opportunity",
    not_opportunity: "not_opportunity",
    stale_opportunity: "not_opportunity",
    stale: "not_opportunity",
    expired: "not_opportunity",
  };
  return aliases[normalized] || "";
}

function cleanStringArray(values: unknown) {
  const items = Array.isArray(values)
    ? values
    : String(values || "").split(/[\n,;]+/);
  return uniqueStrings(items.map((value) => String(value || "").trim()).filter(Boolean));
}

function uniqueStrings(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)));
}

function containsAnyNormalizedPhrase(text: string, phrases: string[]) {
  const normalized = normalizeText(text);
  return phrases.map(normalizeText).some((phrase) => phrase && normalized.includes(phrase));
}

function normalizeText(value: unknown) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ð/g, "d")
    .replace(/þ/g, "th")
    .replace(/æ/g, "ae")
    .replace(/ö/g, "o")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function normalizeLocationText(value: unknown) {
  return normalizeText(value);
}

function normalizeEmail(value: unknown) {
  return String(value || "").trim().toLowerCase();
}

function generateInviteToken() {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return base64UrlEncode(bytes);
}

function base64UrlEncode(bytes: Uint8Array) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

async function sha256Hex(value: string) {
  const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(hash)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function daysUntilDeadline(value: string) {
  if (!value) return 9999;
  const date = new Date(`${String(value).slice(0, 10)}T23:59:59Z`);
  if (Number.isNaN(date.getTime())) return 9999;
  return Math.ceil((date.getTime() - Date.now()) / 86400000);
}

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function escapeHtml(value: unknown) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;",
  }[char] || char));
}

async function safeJson(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

function jsonError(error: string, code: string, status = 400, details: Record<string, unknown> = {}) {
  return json({
    success: false,
    error,
    code,
    ...details,
  }, status);
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
