#!/usr/bin/env bash
set -euo pipefail

test_database_url="${GARDABAER_RECONCILIATION_TEST_DATABASE_URL:-postgresql://postgres:postgres@127.0.0.1:54322/postgres}"
root_dir="$(cd "$(dirname "$0")/.." && pwd)"
psql "$test_database_url" -v ON_ERROR_STOP=1 -f "$root_dir/supabase/tests/gardabaer_eligibility_reconciliation.sql"
