import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const edge = await readFile(new URL("../ai-review-match/index.ts", import.meta.url), "utf8");
const migration = await readFile(new URL("../../migrations/20260910200000_automatic_ai_match_review.sql", import.meta.url), "utf8");

test("scheduled authentication is secret-gated and restricted to existing auto mode", () => {
  assert.match(edge, /req\.headers\.get\("x-automation-secret"\)/);
  assert.match(edge, /automationHeader === automationSecret/);
  assert.match(edge, /!auto \|\| batch \|\| force \|\| companyId/);
  assert.match(edge, /Automation may only run standard automatic AI review/);
  assert.match(edge, /runScheduledAutomaticAiReview\(adminClient, openAiKey, model, limit\)/);
});

test("existing opt-in, eligibility, and cost controls remain authoritative", () => {
  for (const expected of [
    "const DAILY_AI_REVIEW_LIMIT = 50",
    "const DAILY_COMPANY_AUTO_REVIEW_LIMIT = 10",
    "const MAX_BATCH_MATCHES = 10",
    "auto_ai_review_enabled !== true",
    "isActiveCompanyForAutoAi",
    "isCompleteAutoAiProfile",
    "loadBatchCandidates",
  ]) assert.ok(edge.includes(expected), expected);
  const candidates = edge.slice(edge.indexOf("async function loadBatchCandidates"), edge.indexOf("async function markMatchAiSkipped"));
  assert.match(candidates, /Number\(match\.match_score \|\| 0\) < 50/);
  assert.doesNotMatch(candidates, /source_id|source_name|sources\s*\(/);
});

test("automation is single-run, audited, bounded, and failure-isolated", () => {
  assert.match(edge, /ai_review_automation_runs/);
  assert.match(edge, /skipped_active_run/);
  assert.match(edge, /for \(const candidate of candidateResult\.candidates\)/);
  assert.match(edge, /Automatic AI review candidate failed/);
  assert.match(edge, /summary\.failures\.length < 10/);
  assert.match(migration, /unique[\s\S]*where status = 'running'/i);
});

test("production cron runs at 03:40 with dual server authentication", () => {
  assert.match(migration, /automatic-ai-match-review-daily-production/);
  assert.match(migration, /'40 3 \* \* \*'/);
  assert.match(migration, /functions\/v1\/ai-review-match/);
  assert.match(migration, /'Authorization', gateway_authorization/);
  assert.match(migration, /'x-automation-secret', automation_secret/);
  assert.match(migration, /'auto', true, 'limit', 10/);
});

test("scheduler does not mutate sources, matching, profiles, flags, or delivery", () => {
  assert.doesNotMatch(migration, /source_connectors|v2_source_configs|opportunity_matches|company_opportunity_sends|reports|report_items|notification|auto_ai_review_enabled/i);
  assert.doesNotMatch(migration, /import-ted|import-source-connectors|refresh_all_matches/);
});
