export function detectZeroItemAnomaly({ httpOk, parsedCount, consecutiveZeroItemRuns = 0, threshold = 1 }) {
  const suspicious = httpOk === true && Number(parsedCount || 0) === 0;
  const nextCount = suspicious ? Number(consecutiveZeroItemRuns || 0) + 1 : 0;
  return {
    suspicious,
    consecutive_zero_item_runs: nextCount,
    circuit_should_open: suspicious && nextCount >= Math.max(1, threshold),
    reason: suspicious ? "http_success_zero_parsed_items" : null,
  };
}

export function nextCircuitState(health, outcome, options = {}) {
  const failureThreshold = Math.max(1, options.failureThreshold ?? 3);
  const cooldownMs = Math.max(1000, options.cooldownMs ?? 15 * 60 * 1000);
  const now = options.now ? new Date(options.now) : new Date();
  if (outcome.ok && !outcome.suspiciousZero) {
    return { circuit_state: "closed", status: "healthy", consecutive_failures: 0, circuit_opened_at: null, circuit_retry_at: null };
  }
  const failures = Number(health?.consecutive_failures || 0) + 1;
  const open = failures >= failureThreshold || outcome.circuitShouldOpen === true;
  return {
    circuit_state: open ? "open" : "closed",
    status: open ? "circuit_open" : "degraded",
    consecutive_failures: failures,
    circuit_opened_at: open ? now.toISOString() : null,
    circuit_retry_at: open ? new Date(now.getTime() + cooldownMs).toISOString() : null,
  };
}

export function assertCircuitAllowsRun(health, now = Date.now()) {
  if (health?.circuit_state !== "open") return;
  const retryAt = Date.parse(health.circuit_retry_at || "");
  if (!Number.isNaN(retryAt) && retryAt <= now) return;
  const error = new Error("V2 source circuit breaker is open");
  error.code = "V2_CIRCUIT_OPEN";
  error.retryable = false;
  throw error;
}
