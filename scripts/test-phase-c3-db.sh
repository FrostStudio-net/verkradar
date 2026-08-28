#!/usr/bin/env bash
set -euo pipefail

test_database_url="${PHASE_C3_TEST_DATABASE_URL:-postgresql://postgres:postgres@127.0.0.1:54322/postgres}"
root_dir="$(cd "$(dirname "$0")/.." && pwd)"
psql "$test_database_url" -v ON_ERROR_STOP=1 -f "$root_dir/supabase/tests/phase_c3_integration.sql"

psql "$test_database_url" -v ON_ERROR_STOP=1 -c "begin; select * from public.promote_v2_observation('00000000-0000-4000-8000-000000000061','00000000-0000-4000-8000-000000000031'); select pg_sleep(.3); commit" >/dev/null &
first_pid=$!
psql "$test_database_url" -v ON_ERROR_STOP=1 -c "select * from public.promote_v2_observation('00000000-0000-4000-8000-000000000063','00000000-0000-4000-8000-000000000031')" >/dev/null &
second_pid=$!
wait "$first_pid"
wait "$second_pid"

psql "$test_database_url" -v ON_ERROR_STOP=1 <<'SQL'
select public.c3_assert(
  (select count(*)=1 from public.opportunities where raw_payload->>'procurement_reference'='C3-RACE'),
  'concurrent same-reference production promotions converge on one opportunity'
);
select public.c3_assert(
  (select count(*)=2 from public.opportunity_ingestion_provenance p join public.opportunities o on o.id=p.opportunity_id where o.raw_payload->>'procurement_reference'='C3-RACE'),
  'both concurrent observations attach provenance to one opportunity'
);
select public.c3_assert(
  (select count(*)=1 from public.v2_phase_c_events where event_type='opportunity_created' and metadata->>'identity_match_type' is not null),
  'exactly one new opportunity event is recorded for the race'
);
drop function public.c3_insert_candidate(uuid,uuid,text,text);
drop function public.c3_assert(boolean,text);
SQL
