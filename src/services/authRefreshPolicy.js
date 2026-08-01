export const AUTH_BACKGROUND_STALE_MS = 5 * 60 * 1000;

const TAB_RETURN_AUTH_EVENTS = new Set(["SIGNED_IN", "TOKEN_REFRESHED"]);

export function getAuthenticatedRefreshDecision({
  event,
  previousUserId,
  nextUserId,
  authLoaded,
  adminLoaded,
  profileLoaded,
  lastRefreshedAt,
  now = Date.now(),
  staleTime = AUTH_BACKGROUND_STALE_MS,
}) {
  const sameUser = Boolean(previousUserId && nextUserId && previousUserId === nextUserId);
  const hasResolvedData = sameUser && authLoaded && adminLoaded && profileLoaded;
  if (!hasResolvedData) return { refresh: true, background: false };

  const isTabReturnEvent = TAB_RETURN_AUTH_EVENTS.has(event);
  const isFresh = lastRefreshedAt > 0 && now - lastRefreshedAt < staleTime;
  if (isTabReturnEvent && isFresh) return { refresh: false, background: true };
  return { refresh: true, background: true };
}
