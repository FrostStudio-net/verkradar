#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${COMPANY_PROVISIONING_SECURITY_TEST_DATABASE_URL:-}" ]]; then
  echo "COMPANY_PROVISIONING_SECURITY_TEST_DATABASE_URL is required" >&2
  exit 2
fi

root_dir="$(cd "$(dirname "$0")/.." && pwd)"
psql "$COMPANY_PROVISIONING_SECURITY_TEST_DATABASE_URL" -v ON_ERROR_STOP=1 \
  -f "$root_dir/supabase/migrations/20261017163000_company_provisioning_server_controlled.sql"
psql "$COMPANY_PROVISIONING_SECURITY_TEST_DATABASE_URL" -v ON_ERROR_STOP=1 \
  -f "$root_dir/supabase/tests/company_provisioning_security_integration.sql"
