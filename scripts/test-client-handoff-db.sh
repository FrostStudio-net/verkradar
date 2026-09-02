#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${CLIENT_HANDOFF_TEST_DATABASE_URL:-}" ]]; then
  echo "CLIENT_HANDOFF_TEST_DATABASE_URL is required" >&2
  exit 2
fi

root_dir="$(cd "$(dirname "$0")/.." && pwd)"
psql "$CLIENT_HANDOFF_TEST_DATABASE_URL" -v ON_ERROR_STOP=1 \
  -f "$root_dir/supabase/migrations/20260902130000_gardathjonusta_client_handoff.sql"
psql "$CLIENT_HANDOFF_TEST_DATABASE_URL" -v ON_ERROR_STOP=1 \
  -f "$root_dir/supabase/tests/client_handoff_integration.sql"
