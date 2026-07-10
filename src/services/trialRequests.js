export async function submitTrialRequest(formData) {
  const entries = Object.fromEntries(formData.entries());
  // TODO: connect this to a Supabase lead/trial_requests table when lead storage is ready.
  return {
    ok: true,
    request: entries,
    stored: false
  };
}
