const SAME_USER_SESSION_EVENTS = new Set(["SIGNED_IN", "TOKEN_REFRESHED"]);

export function getAuthStateChangePlan({
  event,
  previousUserId,
  nextUserId,
  hydratedUserId,
  resumeContextMatches,
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
    (hydratedUserId === nextUserId || resumeContextMatches)
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

function normalizeHydratedDashboardContext(context) {
  if (
    context?.route !== "/dashboard" ||
    !context.userId ||
    !context.companyId ||
    !context.profile ||
    !context.profileLoaded ||
    !context.adminLoaded
  ) return null;

  return {
    userId: context.userId,
    companyId: context.companyId,
    route: context.route,
  };
}

export function registerBrowserResumeTracker({ windowTarget, documentTarget, getContext, onReturn }) {
  let backgroundContext = null;
  const captureBackgroundContext = () => {
    backgroundContext = normalizeHydratedDashboardContext(getContext());
  };
  const handleReturn = () => onReturn();
  const handleVisibilityChange = () => {
    if (documentTarget.visibilityState === "hidden") captureBackgroundContext();
    else if (documentTarget.visibilityState === "visible") handleReturn();
  };

  windowTarget.addEventListener("blur", captureBackgroundContext);
  windowTarget.addEventListener("focus", handleReturn);
  windowTarget.addEventListener("pagehide", captureBackgroundContext);
  windowTarget.addEventListener("pageshow", handleReturn);
  documentTarget.addEventListener("visibilitychange", handleVisibilityChange);

  return {
    matches({ userId, companyId, route }) {
      return Boolean(
        backgroundContext &&
        backgroundContext.userId === userId &&
        backgroundContext.companyId === companyId &&
        backgroundContext.route === route
      );
    },
    clear() {
      backgroundContext = null;
    },
  };
}
