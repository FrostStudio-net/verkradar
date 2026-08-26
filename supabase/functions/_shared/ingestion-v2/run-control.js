export function createRunLease({ now = new Date(), leaseMs = 30000, deadlineMs = 30000 } = {}) {
  return {
    lease_token: crypto.randomUUID(),
    lease_expires_at: new Date(now.getTime() + leaseMs).toISOString(),
    heartbeat_at: now.toISOString(),
    run_deadline_at: new Date(now.getTime() + deadlineMs).toISOString(),
  };
}

export function heartbeatLease(leaseToken, { now = new Date(), leaseMs = 30000 } = {}) {
  if (!leaseToken) throw new Error("lease_token is required");
  return {
    lease_token: leaseToken,
    lease_expires_at: new Date(now.getTime() + leaseMs).toISOString(),
    heartbeat_at: now.toISOString(),
    updated_at: now.toISOString(),
  };
}

export function assertRunDeadline(deadline, now = Date.now()) {
  const deadlineAt = Date.parse(deadline || "");
  if (Number.isNaN(deadlineAt) || deadlineAt <= now) {
    const error = new Error("V2 run deadline exceeded");
    error.code = "V2_RUN_DEADLINE";
    error.retryable = false;
    throw error;
  }
}
