const SAME_USER_SESSION_EVENTS = new Set(["SIGNED_IN", "TOKEN_REFRESHED"]);

export function getAuthStateChangePlan({
  event,
  previousUserId,
  nextUserId,
  hydratedUserId,
  profileLoaded,
  adminLoaded,
  profile,
  companyId,
  hasPendingInvite,
  passwordRecoveryActive,
}) {
  const isSignedOut = event === "SIGNED_OUT" || !nextUserId;
  const isPasswordRecovery = event === "PASSWORD_RECOVERY" || passwordRecoveryActive;
  const hasHydratedCompanyContext = Boolean(
    profileLoaded && adminLoaded && profile && companyId
  );
  const isSameUserSessionEvent = Boolean(
    SAME_USER_SESSION_EVENTS.has(event) &&
    previousUserId &&
    previousUserId === nextUserId &&
    hydratedUserId === nextUserId
  );
  const preserveHydratedContext = Boolean(
    isSameUserSessionEvent &&
    hasHydratedCompanyContext &&
    !hasPendingInvite &&
    !isPasswordRecovery &&
    !isSignedOut
  );

  return {
    preserveHydratedContext,
    shouldReloadContext: Boolean(nextUserId) && !preserveHydratedContext && !isPasswordRecovery,
    shouldClearContext: isSignedOut,
    shouldRender: !preserveHydratedContext,
  };
}
