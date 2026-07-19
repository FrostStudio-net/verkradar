const CLIENT_PROFILE_AUDIT_FIELDS = [
  "companyName",
  "kennitala",
  "contactEmail",
  "billingEmail",
  "contactName",
  "phone",
  "address",
  "website",
  "industry",
  "selectedPlan",
  "billingStatus",
  "services",
  "includeKeywords",
  "excludeKeywords",
  "locations",
  "baseLocation",
  "serviceAreas",
  "willingToTravel",
  "nationalProjects",
  "remoteProjects",
  "minimumProjectValueForTravel",
  "minProjectValue",
  "maxProjectValue",
  "allowUnknownValue",
  "reportFrequency",
  "reportDay",
  "deadlineReminders",
  "includeLowConfidence",
  "autoAlertMode"
];

export async function logClientCompanyProfileChange(supabaseClient, companyId, previousProfile, nextProfile, user) {
  if (!supabaseClient || !companyId || !user?.id) return { changedFields: [], inserted: false };
  const previous = normalizeProfileSnapshot(previousProfile || {});
  const next = normalizeProfileSnapshot(nextProfile || {});
  const changedFields = CLIENT_PROFILE_AUDIT_FIELDS.filter((field) => JSON.stringify(previous[field] ?? null) !== JSON.stringify(next[field] ?? null));
  if (!changedFields.length) return { changedFields, inserted: false };
  const { error } = await supabaseClient.from("company_profile_change_log").insert({
    company_id: companyId,
    changed_by: user.id,
    changed_by_email: user.email || null,
    source: "client",
    changed_fields: changedFields,
    previous_values: pickFields(previous, changedFields),
    new_values: pickFields(next, changedFields)
  });
  if (error) throw error;
  return { changedFields, inserted: true };
}

function normalizeProfileSnapshot(profile) {
  return CLIENT_PROFILE_AUDIT_FIELDS.reduce((snapshot, field) => {
    const value = profile[field];
    snapshot[field] = Array.isArray(value) ? [...value].map(String).filter(Boolean).sort() : normalizeScalar(value);
    return snapshot;
  }, {});
}

function normalizeScalar(value) {
  if (value == null) return "";
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  return String(value).trim();
}

function pickFields(source, fields) {
  return fields.reduce((acc, field) => {
    acc[field] = source[field] ?? null;
    return acc;
  }, {});
}
