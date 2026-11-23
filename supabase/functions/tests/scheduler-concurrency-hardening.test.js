import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const migration = await readFile(
  new URL("../../migrations/20261123210000_scheduler_single_active_run_admission.sql", import.meta.url),
  "utf8",
);
const matcher = await readFile(new URL("../admin-company-actions/index.ts", import.meta.url), "utf8");
const ted = await readFile(new URL("../import-ted/index.ts", import.meta.url), "utf8");
const legacy = await readFile(new URL("../import-source-connectors/index.ts", import.meta.url), "utf8");

test("canonical matcher admission is atomic, exclusive, recoverable, and cleanly skipped", () => {
  assert.match(migration, /canonical_match_runs_one_active_idx[\s\S]*on public\.canonical_match_runs \(\(true\)\)[\s\S]*where status = 'running'/);
  assert.match(migration, /admit_canonical_match_run[\s\S]*pg_advisory_xact_lock\(hashtextextended\('verkradar:canonical-matcher-admission'/);
  assert.match(migration, /started_at <= now\(\) - interval '20 minutes'/);
  assert.match(migration, /return query select false, active_run_id, 'already_running'/);
  assert.match(migration, /exception when unique_violation/);
  assert.match(matcher, /rpc\("admit_canonical_match_run"/);
  assert.match(matcher, /status: "skipped_active_run"/);
  assert.ok(
    matcher.indexOf('rpc("admit_canonical_match_run"') < matcher.indexOf("for (const company of companies || [])"),
    "admission must happen before any company snapshot processing",
  );
});

test("matcher persistence and normal single-run behavior remain unchanged after admission", () => {
  assert.match(matcher, /\.upsert\(rows, \{ onConflict: "company_id,opportunity_id" \}\)/);
  assert.match(matcher, /const staleOpportunityIds = existingRows/);
  assert.match(matcher, /\.from\("canonical_match_runs"\)\.update\(\{[\s\S]*status: "success"/);
  assert.match(matcher, /await refreshCompanyMatches\(supabase, String\(company\.id\)\)/);
});

test("TED admission blocks automation and manual overlap before source or network processing", () => {
  assert.match(migration, /import_runs_one_active_ted_idx[\s\S]*on public\.import_runs \(\(true\)\)[\s\S]*run_type in \('ted-automation', 'ted-manual'\)/);
  assert.match(migration, /admit_ted_import_run[\s\S]*pg_advisory_xact_lock\(hashtextextended\('verkradar:ted-import-admission'/);
  assert.match(migration, /started_at <= now\(\) - interval '30 minutes'/);
  assert.match(ted, /rpc\("admit_ted_import_run"/);
  assert.match(ted, /execution_skipped: true[\s\S]*status: "skipped_active_run"/);
  assert.ok(ted.indexOf("if (!runAdmission.admitted)") < ted.indexOf("sourceId = await getOrCreateTedSource"));
  assert.ok(ted.indexOf("if (!runAdmission.admitted)") < ted.indexOf("const tedResponse = await fetchTedNotices"));
});

test("TED opportunity and weekly-report semantics remain unchanged behind the guard", () => {
  assert.match(ted, /\.upsert\(prepared, \{ onConflict: "source_id,external_id" \}\)/);
  assert.match(ted, /summary\.reports_generated = await generateWeeklyReports\(adminClient\)/);
  assert.ok(
    ted.indexOf("if (!runAdmission.admitted)") < ted.indexOf("generateWeeklyReports(adminClient)"),
    "a duplicate TED invocation must exit before report existence checks and inserts",
  );
  assert.match(ted, /const importMode = parseImportMode\(body\.importMode \|\| body\.mode \|\| \(isAutomation \? "iceland" : "nordic"\)\)/);
});

test("legacy admission is per batch, so duplicate batches block while distinct batches remain independent", () => {
  assert.match(migration, /import_runs_one_active_legacy_batch_idx[\s\S]*on public\.import_runs \(source_name\)/);
  assert.match(migration, /'verkradar:legacy-connector-admission:' \|\| requested_source_name/);
  assert.match(migration, /'Legacy source connectors \/ legacy_batch_1'[\s\S]*'Legacy source connectors \/ legacy_batch_2'/);
  assert.match(migration, /and source_name = requested_source_name[\s\S]*interval '10 minutes'/);
  assert.match(migration, /logical_source_name := 'Legacy source connectors \/ ' \|\| batch_key_value/);
  assert.match(legacy, /rpc\("admit_legacy_connector_import_run"/);
  assert.match(legacy, /message: "This legacy connector batch is already running\."/);
  assert.ok(
    legacy.indexOf("if (!runAdmission.admitted)") < legacy.indexOf("for (let connectorIndex = 0; connectorIndex < connectors.length"),
    "duplicate admission must exit before any source processing",
  );
});

test("migration is service-role-only, idempotent, data-safe, and does not alter schedules", () => {
  assert.match(migration, /auth\.role\(\) is distinct from 'service_role'/);
  assert.match(migration, /create unique index if not exists/g);
  assert.match(migration, /CANONICAL_MATCHER_MULTIPLE_ACTIVE_RUNS/);
  assert.match(migration, /TED_MULTIPLE_ACTIVE_RUNS/);
  assert.match(migration, /LEGACY_CONNECTOR_MULTIPLE_ACTIVE_RUNS/);
  assert.doesNotMatch(migration, /cron\.schedule|cron\.unschedule/);
  assert.doesNotMatch(migration, /opportunity_matches|company_services|company_keywords|company_locations/);
});
