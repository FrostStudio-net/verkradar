#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${OPPORTUNITY_MATCH_SECURITY_TEST_DATABASE_URL:-}" ]]; then
  echo "OPPORTUNITY_MATCH_SECURITY_TEST_DATABASE_URL is required" >&2
  exit 2
fi

root_dir="$(cd "$(dirname "$0")/.." && pwd)"
psql "$OPPORTUNITY_MATCH_SECURITY_TEST_DATABASE_URL" -v ON_ERROR_STOP=1 \
  -f "$root_dir/supabase/migrations/20261017113000_opportunity_match_customer_read_only.sql"
psql "$OPPORTUNITY_MATCH_SECURITY_TEST_DATABASE_URL" -v ON_ERROR_STOP=1 \
  -f "$root_dir/supabase/tests/opportunity_match_write_security_integration.sql"
