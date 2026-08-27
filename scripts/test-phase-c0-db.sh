#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${PHASE_C0_TEST_DATABASE_URL:-}" ]]; then
  echo "PHASE_C0_TEST_DATABASE_URL is required" >&2
  exit 2
fi

root_dir="$(cd "$(dirname "$0")/.." && pwd)"
psql "$PHASE_C0_TEST_DATABASE_URL" -v ON_ERROR_STOP=1 -f "$root_dir/supabase/tests/phase_c0_bootstrap.sql"
psql "$PHASE_C0_TEST_DATABASE_URL" -v ON_ERROR_STOP=1 -f "$root_dir/supabase/migrations/20260827230000_phase_c0_promotion_safety.sql"
psql "$PHASE_C0_TEST_DATABASE_URL" -v ON_ERROR_STOP=1 -f "$root_dir/supabase/tests/phase_c0_integration.sql"

# Two independent sessions sharing only a strong reference must serialize and
# converge on one opportunity. Each transaction keeps the lock long enough to
# exercise the cross-identity race boundary.
psql "$PHASE_C0_TEST_DATABASE_URL" -v ON_ERROR_STOP=1 <<'SQL'
select public.c0_insert_observation('40000000-0000-4000-8000-000000000008','race-a','C0-RACE','https://c0.test/race-a','Race candidate A');
select public.c0_insert_observation('40000000-0000-4000-8000-000000000009','race-b','C0-RACE','https://c0.test/race-b','Race candidate B');
SQL

psql "$PHASE_C0_TEST_DATABASE_URL" -v ON_ERROR_STOP=1 -c "begin; select * from public.promote_v2_observation('40000000-0000-4000-8000-000000000008'); select pg_sleep(.3); commit" >/dev/null &
first_pid=$!
psql "$PHASE_C0_TEST_DATABASE_URL" -v ON_ERROR_STOP=1 -c "select * from public.promote_v2_observation('40000000-0000-4000-8000-000000000009')" >/dev/null &
second_pid=$!
wait "$first_pid"
wait "$second_pid"

psql "$PHASE_C0_TEST_DATABASE_URL" -v ON_ERROR_STOP=1 <<'SQL'
select public.c0_assert(
  (select count(*) = 1 from public.opportunities where raw_payload->>'procurement_reference'='C0-RACE'),
  'concurrent same-reference promotion must create exactly one opportunity'
);
select public.c0_assert(
  (select count(*) = 2 from public.opportunity_ingestion_provenance p join public.opportunities o on o.id=p.opportunity_id where o.raw_payload->>'procurement_reference'='C0-RACE'),
  'both concurrent observations must attach to the one opportunity'
);
SQL
