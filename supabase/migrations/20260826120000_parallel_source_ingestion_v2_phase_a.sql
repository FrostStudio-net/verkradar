-- Parallel source ingestion v2, Phase A.
-- Additive only: fixture/replay observations are isolated from customer-visible opportunities.

create extension if not exists pgcrypto;

create table public.v2_source_configs (
  id uuid primary key default gen_random_uuid(),
  source_id uuid references public.sources(id) on delete restrict,
  source_key text not null unique,
  display_name text not null,
  adapter_type text not null check (adapter_type in ('rss', 'wordpress_rest', 'page_monitor')),
  mode text not null default 'disabled' check (mode in ('disabled', 'fixture_only', 'shadow', 'promote')),
  endpoint_url text,
  parser_name text not null,
  parser_version text not null,
  request_timeout_ms integer not null default 8000 check (request_timeout_ms between 250 and 60000),
  run_deadline_ms integer not null default 30000 check (run_deadline_ms between 1000 and 300000),
  max_attempts integer not null default 3 check (max_attempts between 1 and 8),
  zero_item_threshold integer not null default 1 check (zero_item_threshold between 1 and 20),
  settings jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint v2_source_configs_promote_source_required check (mode <> 'promote' or source_id is not null),
  constraint v2_source_configs_live_endpoint_required check (mode not in ('shadow', 'promote') or endpoint_url is not null)
);

create index v2_source_configs_mode_idx on public.v2_source_configs(mode, adapter_type);
create index v2_source_configs_source_id_idx on public.v2_source_configs(source_id) where source_id is not null;

create table public.v2_ingestion_runs (
  id uuid primary key default gen_random_uuid(),
  source_config_id uuid not null references public.v2_source_configs(id) on delete restrict,
  mode text not null check (mode in ('disabled', 'fixture_only', 'shadow', 'promote')),
  trigger_type text not null check (trigger_type in ('fixture', 'replay', 'manual', 'automation')),
  fixture_name text,
  status text not null default 'queued' check (status in ('queued', 'running', 'succeeded', 'partial', 'failed', 'timed_out', 'quarantined', 'cancelled')),
  lease_token uuid,
  lease_expires_at timestamptz,
  heartbeat_at timestamptz,
  run_deadline_at timestamptz,
  attempt_count integer not null default 0 check (attempt_count >= 0),
  fetched_count integer not null default 0 check (fetched_count >= 0),
  parsed_count integer not null default 0 check (parsed_count >= 0),
  observation_count integer not null default 0 check (observation_count >= 0),
  invalid_count integer not null default 0 check (invalid_count >= 0),
  duplicate_count integer not null default 0 check (duplicate_count >= 0),
  error_count integer not null default 0 check (error_count >= 0),
  suspicious_zero_items boolean not null default false,
  error_code text,
  error_message text,
  details jsonb not null default '{}'::jsonb,
  started_at timestamptz,
  finished_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint v2_fixture_run_requires_fixture check (trigger_type not in ('fixture', 'replay') or fixture_name is not null)
);

create index v2_ingestion_runs_source_started_idx on public.v2_ingestion_runs(source_config_id, created_at desc);
create index v2_ingestion_runs_status_lease_idx on public.v2_ingestion_runs(status, lease_expires_at);
create unique index v2_ingestion_runs_one_active_source_idx
  on public.v2_ingestion_runs(source_config_id)
  where status in ('queued', 'running');

create table public.v2_ingestion_observations (
  id uuid primary key default gen_random_uuid(),
  run_id uuid not null references public.v2_ingestion_runs(id) on delete restrict,
  source_config_id uuid not null references public.v2_source_configs(id) on delete restrict,
  source_id uuid references public.sources(id) on delete restrict,
  source_key text not null,
  source_name text not null,
  external_id text not null,
  procurement_reference text,
  discovered_url text,
  canonical_url text,
  normalized_canonical_url text,
  title text not null,
  description text,
  buyer text,
  deadline date,
  publication_date date,
  location text,
  safe_source_payload jsonb not null default '{}'::jsonb,
  content_hash text not null check (content_hash ~ '^[a-f0-9]{64}$'),
  identity_fingerprint text not null check (identity_fingerprint ~ '^[a-f0-9]{64}$'),
  parser_name text not null,
  parser_version text not null,
  fetched_at timestamptz not null,
  source_published_at timestamptz,
  validation_state text not null check (validation_state in ('valid', 'invalid', 'quarantined')),
  validation_errors text[] not null default '{}',
  fetch_metadata jsonb not null default '{}'::jsonb,
  comparison_state text not null default 'not_compared' check (comparison_state in ('not_compared', 'legacy_match', 'legacy_only', 'v2_only', 'conflict', 'review_required')),
  promotion_state text not null default 'not_eligible' check (promotion_state in ('not_eligible', 'eligible', 'blocked', 'promoting', 'promoted', 'failed', 'review_required')),
  promoted_opportunity_id uuid references public.opportunities(id) on delete set null,
  promotion_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (run_id, source_config_id, external_id, content_hash)
);

create index v2_observations_source_external_idx on public.v2_ingestion_observations(source_id, external_id);
create index v2_observations_reference_idx on public.v2_ingestion_observations(procurement_reference) where procurement_reference is not null;
create index v2_observations_url_idx on public.v2_ingestion_observations(normalized_canonical_url) where normalized_canonical_url is not null;
create index v2_observations_fingerprint_idx on public.v2_ingestion_observations(identity_fingerprint);
create index v2_observations_states_idx on public.v2_ingestion_observations(validation_state, comparison_state, promotion_state);
create index v2_observations_created_idx on public.v2_ingestion_observations(source_config_id, created_at desc);

create table public.v2_source_health (
  source_config_id uuid primary key references public.v2_source_configs(id) on delete cascade,
  status text not null default 'unknown' check (status in ('unknown', 'healthy', 'degraded', 'unhealthy', 'circuit_open')),
  circuit_state text not null default 'closed' check (circuit_state in ('closed', 'open', 'half_open')),
  consecutive_failures integer not null default 0 check (consecutive_failures >= 0),
  consecutive_zero_item_runs integer not null default 0 check (consecutive_zero_item_runs >= 0),
  circuit_opened_at timestamptz,
  circuit_retry_at timestamptz,
  last_run_id uuid references public.v2_ingestion_runs(id) on delete set null,
  last_run_at timestamptz,
  last_success_at timestamptz,
  last_fixture_at timestamptz,
  last_shadow_at timestamptz,
  last_http_status integer,
  last_latency_ms integer,
  last_observation_count integer not null default 0 check (last_observation_count >= 0),
  last_error_code text,
  last_error_message text,
  parser_health jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create index v2_source_health_status_idx on public.v2_source_health(status, circuit_state, updated_at desc);

create table public.v2_legacy_comparisons (
  id uuid primary key default gen_random_uuid(),
  observation_id uuid not null references public.v2_ingestion_observations(id) on delete cascade,
  legacy_opportunity_id uuid references public.opportunities(id) on delete set null,
  match_type text not null check (match_type in ('same_source_external_id', 'procurement_reference', 'canonical_url', 'fingerprint', 'fuzzy_review_candidate', 'legacy_only', 'v2_only', 'none')),
  decision text not null default 'pending' check (decision in ('pending', 'equivalent', 'v2_better', 'legacy_better', 'different', 'false_positive', 'needs_review')),
  confidence numeric(5, 4) check (confidence is null or confidence between 0 and 1),
  field_differences jsonb not null default '{}'::jsonb,
  notes text,
  compared_at timestamptz not null default now(),
  compared_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (observation_id, legacy_opportunity_id, match_type)
);

create index v2_legacy_comparisons_decision_idx on public.v2_legacy_comparisons(decision, compared_at desc);
create index v2_legacy_comparisons_legacy_idx on public.v2_legacy_comparisons(legacy_opportunity_id) where legacy_opportunity_id is not null;
create unique index v2_legacy_comparisons_no_legacy_unique_idx
  on public.v2_legacy_comparisons(observation_id, match_type)
  where legacy_opportunity_id is null;

create table public.opportunity_ingestion_provenance (
  id uuid primary key default gen_random_uuid(),
  opportunity_id uuid not null references public.opportunities(id) on delete cascade,
  observation_id uuid not null references public.v2_ingestion_observations(id) on delete restrict,
  source_config_id uuid not null references public.v2_source_configs(id) on delete restrict,
  provenance_type text not null check (provenance_type in ('legacy_row_matched', 'v2_created', 'v2_safe_enrichment')),
  identity_match_type text not null check (identity_match_type in ('same_source_external_id', 'procurement_reference', 'canonical_url', 'fingerprint')),
  content_hash text not null,
  attached_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb,
  unique (observation_id),
  unique (opportunity_id, observation_id)
);

create index opportunity_ingestion_provenance_opportunity_idx on public.opportunity_ingestion_provenance(opportunity_id, attached_at desc);
create index opportunity_ingestion_provenance_source_idx on public.opportunity_ingestion_provenance(source_config_id, attached_at desc);

create or replace function public.v2_normalize_identity_text(value text)
returns text
language sql
immutable
parallel safe
as $$
  select trim(regexp_replace(
    lower(translate(coalesce(value, ''), 'áéíóúýþðæöÁÉÍÓÚÝÞÐÆÖ', 'aeiouytdaoAEIOUYTDAO')),
    '[^a-z0-9]+', ' ', 'g'
  ));
$$;

create or replace function public.v2_normalize_canonical_url(value text)
returns text
language sql
immutable
parallel safe
as $$
  select nullif(regexp_replace(lower(split_part(trim(coalesce(value, '')), '#', 1)), '/+$', ''), '');
$$;

create or replace function public.v2_identity_fingerprint(
  buyer text,
  title text,
  deadline date,
  procurement_reference text
)
returns text
language sql
immutable
parallel safe
as $$
  select encode(extensions.digest(
    public.v2_normalize_identity_text(buyer) || '|' ||
    public.v2_normalize_identity_text(title) || '|' ||
    coalesce(deadline::text, '') || '|' ||
    public.v2_normalize_identity_text(procurement_reference),
    'sha256'
  ), 'hex');
$$;

create or replace function public.protect_v2_observation_payload()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if row(
    new.run_id, new.source_config_id, new.source_id, new.source_key, new.source_name,
    new.external_id, new.procurement_reference, new.discovered_url, new.canonical_url,
    new.normalized_canonical_url, new.title, new.description, new.buyer, new.deadline,
    new.publication_date, new.location, new.safe_source_payload, new.content_hash,
    new.identity_fingerprint, new.parser_name, new.parser_version, new.fetched_at,
    new.source_published_at, new.validation_state, new.validation_errors, new.fetch_metadata,
    new.created_at
  ) is distinct from row(
    old.run_id, old.source_config_id, old.source_id, old.source_key, old.source_name,
    old.external_id, old.procurement_reference, old.discovered_url, old.canonical_url,
    old.normalized_canonical_url, old.title, old.description, old.buyer, old.deadline,
    old.publication_date, old.location, old.safe_source_payload, old.content_hash,
    old.identity_fingerprint, old.parser_name, old.parser_version, old.fetched_at,
    old.source_published_at, old.validation_state, old.validation_errors, old.fetch_metadata,
    old.created_at
  ) then
    raise exception 'v2 observation payloads are immutable';
  end if;
  new.updated_at := now();
  return new;
end;
$$;

create trigger protect_v2_observation_payload_trigger
before update on public.v2_ingestion_observations
for each row execute function public.protect_v2_observation_payload();

create or replace function public.prevent_v2_observation_delete()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  raise exception 'v2 observations are append-only and cannot be deleted';
end;
$$;

create trigger prevent_v2_observation_delete_trigger
before delete on public.v2_ingestion_observations
for each row execute function public.prevent_v2_observation_delete();

create or replace function public.promote_v2_observation(
  target_observation_id uuid,
  classification jsonb default null
)
returns table(opportunity_id uuid, created boolean, identity_match_type text, provenance_attached boolean)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  observation_row public.v2_ingestion_observations%rowtype;
  config_row public.v2_source_configs%rowtype;
  existing_opportunity public.opportunities%rowtype;
  matched_by text;
  created_now boolean := false;
  required_stage public.procurement_stage;
  provenance_was_attached boolean := false;
  inserted_provenance_count integer := 0;
begin
  select * into observation_row
  from public.v2_ingestion_observations
  where id = target_observation_id;
  if not found then raise exception 'V2 observation not found'; end if;

  select * into config_row
  from public.v2_source_configs
  where id = observation_row.source_config_id;
  if not found then raise exception 'V2 source config not found'; end if;
  if config_row.mode <> 'promote' then
    raise exception 'V2 source mode must be explicitly promote; current mode is %', config_row.mode;
  end if;
  if observation_row.validation_state <> 'valid' then
    raise exception 'Only valid V2 observations may be promoted';
  end if;
  if observation_row.source_id is null or config_row.source_id is distinct from observation_row.source_id then
    raise exception 'V2 observation must use the configured canonical source_id';
  end if;

  perform pg_advisory_xact_lock(hashtextextended(
    'verkradar-v2:' || coalesce(observation_row.identity_fingerprint, observation_row.source_id::text || ':' || observation_row.external_id),
    0
  ));

  select opportunities.* into existing_opportunity
  from public.opportunities
  where opportunities.source_id = observation_row.source_id
    and opportunities.external_id = observation_row.external_id
  order by opportunities.created_at asc
  limit 1
  for update;
  if found then matched_by := 'same_source_external_id'; end if;

  if existing_opportunity.id is null and nullif(trim(observation_row.procurement_reference), '') is not null then
    select opportunities.* into existing_opportunity
    from public.opportunities
    where public.v2_normalize_identity_text(coalesce(
      opportunities.raw_payload->>'procurement_reference',
      opportunities.raw_payload->>'reference_number',
      opportunities.raw_payload->>'notice_number'
    )) = public.v2_normalize_identity_text(observation_row.procurement_reference)
    order by opportunities.created_at asc
    limit 1
    for update;
    if found then matched_by := 'procurement_reference'; end if;
  end if;

  if existing_opportunity.id is null and observation_row.normalized_canonical_url is not null then
    select opportunities.* into existing_opportunity
    from public.opportunities
    where public.v2_normalize_canonical_url(opportunities.url) = observation_row.normalized_canonical_url
    order by opportunities.created_at asc
    limit 1
    for update;
    if found then matched_by := 'canonical_url'; end if;
  end if;

  if existing_opportunity.id is null then
    select opportunities.* into existing_opportunity
    from public.opportunities
    where public.v2_identity_fingerprint(
      opportunities.buyer,
      opportunities.title,
      opportunities.deadline,
      coalesce(
        opportunities.raw_payload->>'procurement_reference',
        opportunities.raw_payload->>'reference_number',
        opportunities.raw_payload->>'notice_number'
      )
    ) = observation_row.identity_fingerprint
    order by opportunities.created_at asc
    limit 1
    for update;
    if found then matched_by := 'fingerprint'; end if;
  end if;

  if existing_opportunity.id is not null then
    update public.opportunities
    set buyer = coalesce(nullif(buyer, ''), observation_row.buyer),
        description = coalesce(nullif(description, ''), observation_row.description),
        deadline = coalesce(deadline, observation_row.deadline),
        published_date = coalesce(published_date, observation_row.publication_date),
        location = coalesce(nullif(location, ''), observation_row.location),
        url = coalesce(nullif(url, ''), observation_row.canonical_url, observation_row.discovered_url),
        updated_at = case
          when (nullif(buyer, '') is null and observation_row.buyer is not null)
            or (nullif(description, '') is null and observation_row.description is not null)
            or (deadline is null and observation_row.deadline is not null)
            or (published_date is null and observation_row.publication_date is not null)
            or (nullif(location, '') is null and observation_row.location is not null)
            or (nullif(url, '') is null and coalesce(observation_row.canonical_url, observation_row.discovered_url) is not null)
          then now() else updated_at end
    where id = existing_opportunity.id;
  else
    if classification is null or nullif(classification->>'procurement_stage', '') is null then
      raise exception 'Existing procurement-stage classification contract is required for a new opportunity';
    end if;
    required_stage := (classification->>'procurement_stage')::public.procurement_stage;
    if nullif(classification->>'classified_by', '') is null
      or nullif(classification->>'classifier_version', '') is null
      or classification->'actionable_for_suppliers' is null
      or classification->'classification_confidence' is null
      or classification->'requires_admin_review' is null then
      raise exception 'Complete procurement-stage classification metadata is required';
    end if;

    insert into public.opportunities (
      source_id, external_id, title, buyer, description, deadline, published_date, location, url,
      status, raw_payload, procurement_stage, actionable_for_suppliers, classification_confidence,
      classification_reason, positive_signals, negative_signals, classified_by, classified_at,
      classifier_version, requires_admin_review
    ) values (
      observation_row.source_id, observation_row.external_id, observation_row.title,
      observation_row.buyer, observation_row.description, observation_row.deadline,
      observation_row.publication_date, observation_row.location,
      coalesce(observation_row.canonical_url, observation_row.discovered_url), 'open',
      jsonb_build_object(
        'v2_observation_id', observation_row.id,
        'procurement_reference', observation_row.procurement_reference,
        'source_payload', observation_row.safe_source_payload
      ),
      required_stage,
      (classification->>'actionable_for_suppliers')::boolean,
      (classification->>'classification_confidence')::numeric,
      classification->>'classification_reason',
      coalesce(array(select jsonb_array_elements_text(coalesce(classification->'positive_signals', '[]'::jsonb))), '{}'),
      coalesce(array(select jsonb_array_elements_text(coalesce(classification->'negative_signals', '[]'::jsonb))), '{}'),
      classification->>'classified_by',
      coalesce((classification->>'classified_at')::timestamptz, now()),
      classification->>'classifier_version',
      (classification->>'requires_admin_review')::boolean
    )
    returning * into existing_opportunity;
    matched_by := 'same_source_external_id';
    created_now := true;
  end if;

  insert into public.opportunity_ingestion_provenance (
    opportunity_id, observation_id, source_config_id, provenance_type,
    identity_match_type, content_hash, metadata
  ) values (
    existing_opportunity.id, observation_row.id, observation_row.source_config_id,
    case when created_now then 'v2_created' else 'legacy_row_matched' end,
    matched_by, observation_row.content_hash,
    jsonb_build_object('phase', 'v2', 'safe_missing_field_enrichment_only', not created_now)
  )
  on conflict (observation_id) do nothing;
  get diagnostics inserted_provenance_count = row_count;
  provenance_was_attached := inserted_provenance_count > 0;

  update public.v2_ingestion_observations
  set promotion_state = 'promoted',
      promoted_opportunity_id = existing_opportunity.id,
      promotion_error = null,
      updated_at = now()
  where id = observation_row.id;

  opportunity_id := existing_opportunity.id;
  created := created_now;
  identity_match_type := matched_by;
  provenance_attached := provenance_was_attached;
  return next;
end;
$$;

alter table public.v2_source_configs enable row level security;
alter table public.v2_ingestion_runs enable row level security;
alter table public.v2_ingestion_observations enable row level security;
alter table public.v2_source_health enable row level security;
alter table public.v2_legacy_comparisons enable row level security;
alter table public.opportunity_ingestion_provenance enable row level security;

do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'v2_source_configs', 'v2_ingestion_runs', 'v2_ingestion_observations',
    'v2_source_health', 'v2_legacy_comparisons', 'opportunity_ingestion_provenance'
  ] loop
    execute format('revoke all on public.%I from anon, authenticated', table_name);
    execute format('grant select on public.%I to authenticated', table_name);
    execute format(
      'create policy %I on public.%I for select to authenticated using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()))',
      'Admins read ' || table_name,
      table_name
    );
  end loop;
end $$;

revoke all on function public.promote_v2_observation(uuid, jsonb) from public, anon, authenticated;
grant execute on function public.promote_v2_observation(uuid, jsonb) to service_role;
revoke all on function public.v2_normalize_identity_text(text) from public, anon, authenticated;
revoke all on function public.v2_normalize_canonical_url(text) from public, anon, authenticated;
revoke all on function public.v2_identity_fingerprint(text, text, date, text) from public, anon, authenticated;

with fixture_sources(source_name, source_key, display_name, adapter_type, endpoint_url, parser_name, parser_version) as (
  values
    ('Akranes útboð', 'akranes-utbod-v2', 'Akranes útboð v2', 'rss', 'https://www.akranes.is/is/feed/7', 'akranes-rss', '1.0.0'),
    ('Borgarbyggð útboð', 'borgarbyggd-utbod-v2', 'Borgarbyggð útboð v2', 'wordpress_rest', 'https://dev.borgarbyggd.is/wp-json/wp/v2/posts?categories=177', 'borgarbyggd-wordpress', '1.0.0'),
    ('Garðabær Municipality', 'gardabaer-utbod-v2', 'Garðabær útboð v2', 'page_monitor', 'https://www.gardabaer.is/framkvaemdir/utbod', 'gardabaer-page-monitor', '1.0.0')
)
insert into public.v2_source_configs (
  source_id, source_key, display_name, adapter_type, mode, endpoint_url, parser_name, parser_version
)
select sources.id, fixture_sources.source_key, fixture_sources.display_name,
  fixture_sources.adapter_type, 'fixture_only', fixture_sources.endpoint_url,
  fixture_sources.parser_name, fixture_sources.parser_version
from fixture_sources
join public.sources on sources.name = fixture_sources.source_name
on conflict (source_key) do nothing;

insert into public.v2_source_health(source_config_id)
select id from public.v2_source_configs
on conflict (source_config_id) do nothing;

comment on table public.v2_ingestion_observations is 'Immutable source evidence. Operational comparison/promotion state may change; fixture and shadow rows are never customer-visible.';
comment on function public.promote_v2_observation(uuid, jsonb) is 'Service-role-only gate. Refuses writes unless the source mode is explicitly promote and a new row has complete existing-contract procurement classification.';

notify pgrst, 'reload schema';
