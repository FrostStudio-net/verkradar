#!/usr/bin/env bash
set -euo pipefail

test_database_url="${PRODUCTION_HOLD_CLEAR_TEST_DATABASE_URL:-postgresql://postgres:postgres@127.0.0.1:54322/postgres}"
root_dir="$(cd "$(dirname "$0")/.." && pwd)"
psql "$test_database_url" -v ON_ERROR_STOP=1 -f "$root_dir/supabase/tests/production_communication_hold_clear_integration.sql"
