#!/usr/bin/env bash
set -euo pipefail

root_dir="$(cd "$(dirname "$0")/.." && pwd)"
test_database_url="${LEGACY_ZERO_CLICK_TEST_DATABASE_URL:-postgresql://postgres:postgres@127.0.0.1:54325/postgres}"

psql "$test_database_url" -v ON_ERROR_STOP=1 <<'SQL'
create extension if not exists pgcrypto;
do $$ begin create role anon nologin; exception when duplicate_object then null; end $$;
do $$ begin create role authenticated nologin; exception when duplicate_object then null; end $$;
create schema auth;
create schema cron;
create schema net;
create function auth.uid() returns uuid language sql stable as $$ select null::uuid $$;
create table public.admin_users(user_id uuid primary key);
create table public.automation_settings(key text primary key,value text,updated_at timestamptz default now());
create table public.import_runs(id uuid primary key default gen_random_uuid(),run_type text,source_name text,import_mode text,status text,started_at timestamptz default now());
create table cron.job(jobid bigint generated always as identity primary key,jobname text unique,schedule text,command text);
create table net.requests(id bigint generated always as identity primary key,url text,headers jsonb,body jsonb);
create function cron.schedule(job_name text,schedule_text text,command_text text) returns bigint language plpgsql as $$ declare result bigint; begin insert into cron.job(jobname,schedule,command) values(job_name,schedule_text,command_text) returning jobid into result; return result; end $$;
create function cron.unschedule(target bigint) returns boolean language plpgsql as $$ begin delete from cron.job where jobid=target; return found; end $$;
create function net.http_post(url text,headers jsonb,body jsonb) returns bigint language plpgsql as $$ declare result bigint; begin insert into net.requests(url,headers,body) values(url,headers,body) returning id into result; return result; end $$;
create function public.v2_routine_gateway_authorization() returns text language sql as $$ select 'Bearer test-anon-jwt'::text $$;
insert into public.automation_settings(key,value) values('automation_secret','test-automation-secret');
SQL

psql "$test_database_url" -v ON_ERROR_STOP=1 -f "$root_dir/supabase/migrations/20260901150000_legacy_connector_zero_click_automation.sql"
psql "$test_database_url" -v ON_ERROR_STOP=1 -f "$root_dir/supabase/tests/legacy_zero_click_automation_integration.sql"
