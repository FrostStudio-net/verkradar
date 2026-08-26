export class V2FetchError extends Error {
  constructor(message, options = {}) {
    super(message);
    this.name = "V2FetchError";
    this.code = options.code || "V2_FETCH_ERROR";
    this.status = options.status || null;
    this.retryable = options.retryable === true;
    this.retryAfterMs = options.retryAfterMs || null;
  }
}

export class V2RunDeadlineError extends V2FetchError {
  constructor(message = "V2 run deadline exceeded") {
    super(message, { code: "V2_RUN_DEADLINE", retryable: false });
    this.name = "V2RunDeadlineError";
  }
}

export function isRetryableStatus(status) {
  return status === 408 || status === 429 || status === 500 || status === 502 || status === 503 || status === 504;
}

export function parseRetryAfter(value, now = Date.now()) {
  if (!value) return null;
  const seconds = Number(value);
  if (Number.isFinite(seconds) && seconds >= 0) return Math.round(seconds * 1000);
  const date = Date.parse(value);
  return Number.isNaN(date) ? null : Math.max(0, date - now);
}

export function retryDelayMs(attempt, options = {}) {
  const baseMs = options.baseMs ?? 250;
  const maxMs = options.maxMs ?? 4000;
  const random = options.random || Math.random;
  const exponential = Math.min(maxMs, baseMs * (2 ** Math.max(0, attempt - 1)));
  return Math.round(exponential * (0.5 + random() * 0.5));
}

export async function fetchWithRetry(url, options = {}) {
  const fetchImpl = options.fetchImpl || fetch;
  const sleep = options.sleep || ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
  const maxAttempts = Math.max(1, options.maxAttempts ?? 3);
  const timeoutMs = Math.max(1, options.timeoutMs ?? 8000);
  const deadlineAt = options.deadlineAt ?? Date.now() + 30000;
  const attempts = [];

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    if (Date.now() >= deadlineAt) throw new V2RunDeadlineError();
    const remainingMs = Math.max(1, deadlineAt - Date.now());
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort("request_timeout"), Math.min(timeoutMs, remainingMs));
    const startedAt = Date.now();
    try {
      const response = await fetchImpl(url, { ...(options.request || {}), signal: controller.signal });
      const latencyMs = Date.now() - startedAt;
      attempts.push({ attempt, status: response.status, latency_ms: latencyMs });
      if (response.ok) return { response, attempts, latencyMs };
      const retryable = isRetryableStatus(response.status);
      const retryAfterMs = parseRetryAfter(response.headers?.get?.("retry-after"));
      const error = new V2FetchError(`Fetch returned HTTP ${response.status}`, {
        code: `HTTP_${response.status}`,
        status: response.status,
        retryable,
        retryAfterMs,
      });
      if (!retryable || attempt === maxAttempts) throw error;
      const delay = Math.min(retryAfterMs ?? retryDelayMs(attempt, options), Math.max(0, deadlineAt - Date.now()));
      if (delay <= 0) throw new V2RunDeadlineError();
      await sleep(delay);
    } catch (error) {
      const aborted = controller.signal.aborted || error?.name === "AbortError";
      const normalized = error instanceof V2FetchError
        ? error
        : new V2FetchError(aborted ? "Fetch timed out" : `Network fetch failed: ${error?.message || error}`, {
          code: aborted ? "REQUEST_TIMEOUT" : "NETWORK_ERROR",
          retryable: true,
        });
      attempts.push({ attempt, error_code: normalized.code, latency_ms: Date.now() - startedAt });
      if (!normalized.retryable || attempt === maxAttempts) {
        normalized.attempts = attempts;
        throw normalized;
      }
      const delay = Math.min(normalized.retryAfterMs ?? retryDelayMs(attempt, options), Math.max(0, deadlineAt - Date.now()));
      if (delay <= 0) throw new V2RunDeadlineError();
      await sleep(delay);
    } finally {
      clearTimeout(timeout);
    }
  }
  throw new V2FetchError("Fetch attempts exhausted", { retryable: false });
}
