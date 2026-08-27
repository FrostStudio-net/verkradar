create extension if not exists pgcrypto;
create schema if not exists auth;
create schema if not exists extensions;
do $$ begin create role anon; exception when duplicate_object then null; end $$;
do $$ begin create role authenticated; exception when duplicate_object then null; end $$;
do $$ begin create role service_role; exception when duplicate_object then null; end $$;
create table auth.users(id uuid primary key);

create type public.procurement_stage as enum ('open_competition','upcoming_procurement','market_consultation','award_or_contract_signed','work_underway','completed','general_news','uncertain');
create table public.admin_users(user_id uuid primary key references auth.users(id));
create table public.sources(id uuid primary key default gen_random_uuid(), name text not null unique);
create table public.companies(id uuid primary key default gen_random_uuid());
create table public.opportunities(
  id uuid primary key default gen_random_uuid(), source_id uuid not null references public.sources(id), external_id text not null,
  title text not null, buyer text, category text, type text, description text, deadline date, published_date date, location text,
  estimated_value numeric, currency text, url text, cpv_code text, requirements text[] not null default '{}', keywords text[] not null default '{}',
  difficulty text, status text, raw_payload jsonb not null default '{}', created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
  procurement_stage public.procurement_stage, actionable_for_suppliers boolean, classification_confidence numeric, classification_reason text,
  positive_signals text[] not null default '{}', negative_signals text[] not null default '{}', classified_by text, classified_at timestamptz,
  classifier_version text, requires_admin_review boolean, classification_grandfathered boolean not null default false,
  unique(source_id, external_id)
);
create table public.opportunity_matches(id uuid primary key default gen_random_uuid(), company_id uuid, opportunity_id uuid references public.opportunities(id) on delete cascade);
create table public.ai_match_reviews(id uuid primary key default gen_random_uuid(), opportunity_id uuid references public.opportunities(id) on delete cascade);
create table public.ai_usage_log(id uuid primary key default gen_random_uuid(), opportunity_id uuid references public.opportunities(id) on delete set null);
create table public.reports(id uuid primary key default gen_random_uuid());
create table public.report_items(id uuid primary key default gen_random_uuid(), report_id uuid references public.reports(id), opportunity_id uuid references public.opportunities(id) on delete cascade);
create table public.company_opportunity_actions(id uuid primary key default gen_random_uuid(), opportunity_id uuid references public.opportunities(id) on delete cascade);
create table public.company_opportunity_sends(id uuid primary key default gen_random_uuid(), opportunity_id uuid references public.opportunities(id) on delete cascade);
create table public.admin_match_decisions(id uuid primary key default gen_random_uuid(), opportunity_id uuid references public.opportunities(id) on delete cascade);
create table public.match_evaluation_labels(id uuid primary key default gen_random_uuid(), opportunity_id uuid references public.opportunities(id) on delete cascade);

create table public.v2_source_configs(
  id uuid primary key default gen_random_uuid(), source_id uuid references public.sources(id), source_key text not null unique, display_name text not null,
  adapter_type text not null, mode text not null, endpoint_url text, parser_name text not null, parser_version text not null,
  request_timeout_ms integer not null default 8000, run_deadline_ms integer not null default 30000, max_attempts integer not null default 3,
  zero_item_threshold integer not null default 1, settings jsonb not null default '{}', created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.v2_ingestion_runs(
  id uuid primary key default gen_random_uuid(), source_config_id uuid not null references public.v2_source_configs(id), mode text not null,
  trigger_type text not null, fixture_name text, status text not null, lease_token uuid, lease_expires_at timestamptz, heartbeat_at timestamptz,
  run_deadline_at timestamptz, attempt_count integer not null default 0, fetched_count integer not null default 0, parsed_count integer not null default 0,
  observation_count integer not null default 0, invalid_count integer not null default 0, duplicate_count integer not null default 0,
  error_count integer not null default 0, suspicious_zero_items boolean not null default false, error_code text, error_message text,
  details jsonb not null default '{}', started_at timestamptz, finished_at timestamptz, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.v2_ingestion_observations(
  id uuid primary key default gen_random_uuid(), run_id uuid not null references public.v2_ingestion_runs(id), source_config_id uuid not null references public.v2_source_configs(id),
  source_id uuid references public.sources(id), source_key text not null, source_name text not null, external_id text not null, procurement_reference text,
  discovered_url text, canonical_url text, normalized_canonical_url text, title text not null, description text, buyer text, deadline date,
  publication_date date, location text, safe_source_payload jsonb not null default '{}', content_hash text not null, identity_fingerprint text not null,
  parser_name text not null, parser_version text not null, fetched_at timestamptz not null, source_published_at timestamptz,
  validation_state text not null, validation_errors text[] not null default '{}', fetch_metadata jsonb not null default '{}', comparison_state text not null,
  promotion_state text not null, promoted_opportunity_id uuid references public.opportunities(id) on delete set null, promotion_error text,
  predicted_procurement_stage text, predicted_actionable boolean, predicted_confidence numeric, predicted_reason text,
  predicted_requires_admin_review boolean, enrichment_status text, shadow_quality_category text,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.v2_source_health(
  source_config_id uuid primary key references public.v2_source_configs(id), status text not null, circuit_state text not null,
  consecutive_failures integer not null default 0, consecutive_zero_item_runs integer not null default 0, circuit_opened_at timestamptz,
  circuit_retry_at timestamptz, last_run_id uuid references public.v2_ingestion_runs(id), last_run_at timestamptz, last_success_at timestamptz,
  last_fixture_at timestamptz, last_shadow_at timestamptz, last_http_status integer, last_latency_ms integer,
  last_observation_count integer not null default 0, last_error_code text, last_error_message text, parser_health jsonb not null default '{}', updated_at timestamptz not null default now()
);
create table public.v2_legacy_comparisons(
  id uuid primary key default gen_random_uuid(), observation_id uuid not null references public.v2_ingestion_observations(id) on delete cascade,
  legacy_opportunity_id uuid references public.opportunities(id) on delete set null, match_type text not null, decision text not null,
  confidence numeric, field_differences jsonb not null default '{}', notes text, compared_at timestamptz not null default now(),
  compared_by uuid references auth.users(id), created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.opportunity_ingestion_provenance(
  id uuid primary key default gen_random_uuid(), opportunity_id uuid not null references public.opportunities(id) on delete cascade,
  observation_id uuid not null references public.v2_ingestion_observations(id) on delete restrict, source_config_id uuid not null references public.v2_source_configs(id),
  provenance_type text not null check (provenance_type in ('legacy_row_matched','v2_created','v2_safe_enrichment')),
  identity_match_type text not null, content_hash text not null, attached_at timestamptz not null default now(), metadata jsonb not null default '{}',
  unique(observation_id), unique(opportunity_id, observation_id)
);

create function public.v2_normalize_identity_text(value text) returns text language sql immutable as $$
  select trim(regexp_replace(lower(translate(coalesce(value, ''), 'áéíóúýþðæöÁÉÍÓÚÝÞÐÆÖ', 'aeiouytdaoAEIOUYTDAO')), '[^a-z0-9]+', ' ', 'g'));
$$;
create function public.v2_normalize_canonical_url(value text) returns text language sql immutable as $$
  select nullif(regexp_replace(lower(split_part(trim(coalesce(value, '')), '#', 1)), '/+$', ''), '');
$$;
create function public.v2_identity_fingerprint(buyer text, title text, deadline date, procurement_reference text) returns text language sql immutable as $$
  select encode(digest(public.v2_normalize_identity_text(buyer) || '|' || public.v2_normalize_identity_text(title) || '|' || coalesce(deadline::text, '') || '|' || public.v2_normalize_identity_text(procurement_reference), 'sha256'), 'hex');
$$;
