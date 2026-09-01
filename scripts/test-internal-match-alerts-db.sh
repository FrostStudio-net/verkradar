#!/usr/bin/env bash
set -euo pipefail

root_dir="$(cd "$(dirname "$0")/.." && pwd)"
test_database_url="${INTERNAL_MATCH_ALERT_TEST_DATABASE_URL:-postgresql://postgres:postgres@127.0.0.1:54324/postgres}"

psql "$test_database_url" -v ON_ERROR_STOP=1 <<'SQL'
create extension if not exists pgcrypto;
do $$ begin create role anon nologin; exception when duplicate_object then null; end $$;
do $$ begin create role authenticated nologin; exception when duplicate_object then null; end $$;
do $$ begin create role service_role nologin; exception when duplicate_object then null; end $$;
create schema if not exists cron;
create schema if not exists net;
create table cron.job(jobid bigint generated always as identity primary key, jobname text unique, schedule text, command text);
create or replace function cron.schedule(job_name text, schedule_text text, command_text text) returns bigint language plpgsql as $$ declare result bigint; begin insert into cron.job(jobname,schedule,command) values(job_name,schedule_text,command_text) returning jobid into result; return result; end $$;
create or replace function cron.unschedule(target bigint) returns boolean language plpgsql as $$ begin delete from cron.job where jobid=target; return found; end $$;
create or replace function net.http_post(url text, headers jsonb, body jsonb) returns bigint language sql as $$ select 1::bigint $$;
create table public.companies(id uuid primary key, name text not null, minimum_relevance_threshold integer not null default 50);
create table public.sources(id uuid primary key, name text not null);
create table public.opportunities(id uuid primary key, source_id uuid references public.sources(id), external_id text, title text, buyer text, deadline date, status text, procurement_stage text, actionable_for_suppliers boolean default false, requires_admin_review boolean default false, phase_c_communication_hold boolean default false, phase_c_disabled_at timestamptz, raw_payload jsonb not null default '{}'::jsonb);
create table public.opportunity_matches(id uuid primary key, company_id uuid references public.companies(id), opportunity_id uuid references public.opportunities(id), match_score integer, match_label text, match_reasons text[] default '{}', safety_status text default 'needs_review', alert_eligible boolean default false, review_required boolean default true, calculated_at timestamptz default now(), unique(company_id,opportunity_id));
create table public.automation_settings(key text primary key, value text, updated_at timestamptz default now());
create table public.ai_reviews(id uuid primary key default gen_random_uuid());
create table public.reports(id uuid primary key default gen_random_uuid());
create table public.report_items(id uuid primary key default gen_random_uuid());
create table public.company_opportunity_sends(id uuid primary key default gen_random_uuid());
create or replace function public.v2_routine_gateway_authorization() returns text language sql as $$ select 'Bearer test-anon-jwt'::text $$;
insert into public.automation_settings(key,value) values('automation_secret','test-secret');
insert into public.companies(id,name,minimum_relevance_threshold) values ('cad6b69e-b021-447d-b637-31b2e8dbff2e','Garðaþjónusta',50), ('00000000-0000-4000-8000-000000000099','Other',50);
insert into public.sources(id,name) values('00000000-0000-4000-8000-000000000001','Garðabær V2');
insert into public.opportunities(id,source_id,external_id,title,buyer,deadline,status,procurement_stage,actionable_for_suppliers,requires_admin_review,raw_payload) values
 ('00000000-0000-4000-8000-000000000101','00000000-0000-4000-8000-000000000001','existing-1','Existing winter 1','Garðabær','2026-09-15','open','open_competition',true,false,'{}'),
 ('00000000-0000-4000-8000-000000000102','00000000-0000-4000-8000-000000000001','existing-2','Existing winter 2','Garðabær','2026-09-15','open','open_competition',true,false,'{}');
insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required) values
 ('00000000-0000-4000-8000-000000000201','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000101',68,'Good',array['winter'], 'auto_approved',true,false),
 ('00000000-0000-4000-8000-000000000202','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000102',68,'Good',array['winter'], 'auto_approved',true,false);
SQL

psql "$test_database_url" -v ON_ERROR_STOP=1 -f "$root_dir/supabase/migrations/20260901103000_internal_match_alerts.sql"
psql "$test_database_url" -v ON_ERROR_STOP=1 -f "$root_dir/supabase/tests/internal_match_alerts_integration.sql"
