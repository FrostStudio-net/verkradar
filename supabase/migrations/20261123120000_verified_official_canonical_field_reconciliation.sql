-- Reconcile richer, newer fields from verified official V2 observations onto
-- the existing canonical row. Identity and every downstream reference remain
-- unchanged. This does not invoke matching, AI, reports, or communications.

create or replace function public.v2_description_quality_rank(value text, title_value text default null)
returns integer
language sql
immutable
set search_path = public, pg_temp
as $$
  select case
    when nullif(btrim(coalesce(value, '')), '') is null then 0
    when lower(btrim(value)) = lower(btrim(coalesce(title_value, ''))) then 50
    when char_length(btrim(value)) < 80 then 50
    when char_length(btrim(value)) >= 240 then 200
    when lower(value) ~ '(verkið felst|verkefnið felst|helstu verkþættir|lauslegt yfirlit|scope of work)' then 200
    else 100
  end;
$$;

create or replace function public.v2_extract_official_submission_deadline(value text)
returns date
language plpgsql
immutable
set search_path = public, pg_temp
as $$
declare
  normalized text := lower(translate(coalesce(value, ''), 'áéíóúýþðæö', 'aeiouytdao'));
  parts text[];
  month_number integer;
  candidate date;
begin
  parts := regexp_match(
    normalized,
    '(?:(?:tilbodum|umsoknum|gognum)[[:space:]]+skal[[:space:]]+skila(?:d)?|skal[[:space:]]+(?:tilbodum|umsoknum|gognum)[[:space:]]+skila(?:d)?).{0,220}([0-9]{1,2})[. /-]+([0-9]{1,2})[. /-]+([0-9]{4})'
  );
  if parts is not null then
    begin
      candidate := make_date(parts[3]::integer, parts[2]::integer, parts[1]::integer);
      return candidate;
    exception when others then
      return null;
    end;
  end if;

  parts := regexp_match(
    normalized,
    '(?:(?:tilbodum|umsoknum|gognum)[[:space:]]+skal[[:space:]]+skila(?:d)?|skal[[:space:]]+(?:tilbodum|umsoknum|gognum)[[:space:]]+skila(?:d)?).{0,220}([0-9]{1,2})[.]?[[:space:]]*(januar|februar|mars|april|mai|juni|juli|agust|september|oktober|november|desember)[[:space:]]+([0-9]{4})'
  );
  if parts is null then return null; end if;
  month_number := case parts[2]
    when 'januar' then 1 when 'februar' then 2 when 'mars' then 3
    when 'april' then 4 when 'mai' then 5 when 'juni' then 6
    when 'juli' then 7 when 'agust' then 8 when 'september' then 9
    when 'oktober' then 10 when 'november' then 11 when 'desember' then 12
  end;
  begin
    return make_date(parts[3]::integer, month_number, parts[1]::integer);
  exception when others then
    return null;
  end;
end;
$$;

create or replace function public.v2_reconcile_verified_official_fields(
  target_opportunity_id uuid,
  target_observation_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  opportunity_row public.opportunities%rowtype;
  observation_row public.v2_ingestion_observations%rowtype;
  config_row public.v2_source_configs%rowtype;
  enrichment jsonb;
  observed_at timestamptz;
  existing_evidence jsonb;
  next_evidence jsonb;
  next_payload jsonb;
  detail_description text;
  listing_description text;
  candidate_description text;
  description_source text;
  candidate_description_rank integer := 0;
  existing_description_rank integer := 0;
  previous_description_observed_at timestamptz;
  submission_deadline date;
  structured_deadline date;
  listing_deadline date;
  candidate_deadline date;
  deadline_source text;
  candidate_deadline_rank integer := 0;
  existing_deadline_rank integer := 0;
  previous_deadline_observed_at timestamptz;
  deadline_conflict boolean := false;
  candidate_buyer text;
  candidate_location text;
  candidate_url text;
  next_description text;
  next_deadline date;
  next_buyer text;
  next_location text;
  next_url text;
  description_changed boolean := false;
  deadline_changed boolean := false;
  buyer_changed boolean := false;
  location_changed boolean := false;
  url_changed boolean := false;
  evidence_changed boolean := false;
begin
  if current_user not in ('postgres', 'service_role', 'supabase_admin') then
    raise exception 'V2_CANONICAL_RECONCILIATION_SERVICE_ROLE_REQUIRED';
  end if;

  select * into observation_row
  from public.v2_ingestion_observations
  where id = target_observation_id;
  if not found then return jsonb_build_object('status', 'observation_not_found'); end if;

  select * into config_row
  from public.v2_source_configs
  where id = observation_row.source_config_id;
  if not found or config_row.source_key not in ('gardabaer-utbod-v2', 'reykjavik-utbod-v2') then
    return jsonb_build_object('status', 'source_not_trusted');
  end if;
  if observation_row.validation_state <> 'valid'
     or observation_row.strong_procurement_evidence is distinct from true
     or observation_row.enrichment_status <> 'enriched' then
    return jsonb_build_object('status', 'observation_not_verified');
  end if;

  select * into opportunity_row
  from public.opportunities
  where id = target_opportunity_id
  for update;
  if not found then return jsonb_build_object('status', 'opportunity_not_found'); end if;

  if opportunity_row.source_id is distinct from observation_row.source_id
     or opportunity_row.external_id is distinct from observation_row.external_id then
    return jsonb_build_object('status', 'identity_mismatch');
  end if;

  enrichment := coalesce(observation_row.safe_source_payload->'shadow_enrichment', '{}'::jsonb);
  if coalesce(enrichment->>'enrichment_status', observation_row.enrichment_status, '') <> 'enriched' then
    return jsonb_build_object('status', 'detail_enrichment_not_verified');
  end if;

  candidate_url := nullif(coalesce(enrichment->>'canonical_url', observation_row.canonical_url), '');
  if config_row.source_key = 'gardabaer-utbod-v2' and candidate_url !~* '^https://(www[.])?gardabaer[.]is/' then
    return jsonb_build_object('status', 'official_url_not_verified');
  end if;
  if config_row.source_key = 'reykjavik-utbod-v2' and candidate_url !~* '^https://(www[.])?reykjavik[.]is/' then
    return jsonb_build_object('status', 'official_url_not_verified');
  end if;

  observed_at := coalesce(observation_row.fetched_at, observation_row.updated_at, observation_row.created_at);
  existing_evidence := coalesce(opportunity_row.raw_payload->'canonical_field_evidence', '{}'::jsonb);
  next_evidence := existing_evidence;
  next_payload := coalesce(opportunity_row.raw_payload, '{}'::jsonb);

  detail_description := nullif(btrim(enrichment->>'description'), '');
  listing_description := nullif(btrim(observation_row.description), '');
  if detail_description is not null then
    candidate_description := detail_description;
    description_source := 'official_detail_enrichment';
    candidate_description_rank := 300;
  elsif listing_description is not null then
    candidate_description := listing_description;
    candidate_description_rank := public.v2_description_quality_rank(listing_description, observation_row.title);
    description_source := case when candidate_description_rank >= 200 then 'official_full_listing' else 'official_listing_excerpt' end;
  end if;
  existing_description_rank := coalesce((existing_evidence#>>'{description,rank}')::integer, public.v2_description_quality_rank(opportunity_row.description, opportunity_row.title));
  previous_description_observed_at := nullif(existing_evidence#>>'{description,observed_at}', '')::timestamptz;
  next_description := opportunity_row.description;
  if candidate_description is not null
     and candidate_description_rank >= existing_description_rank
     and (previous_description_observed_at is null or observed_at >= previous_description_observed_at)
     and (
       char_length(candidate_description) > char_length(coalesce(opportunity_row.description, ''))
       or public.v2_description_quality_rank(opportunity_row.description, opportunity_row.title) <= 50
     ) then
    next_description := candidate_description;
    description_changed := next_description is distinct from opportunity_row.description;
    next_evidence := jsonb_set(next_evidence, '{description}', jsonb_build_object(
      'source', description_source,
      'rank', candidate_description_rank,
      'observed_at', observed_at,
      'observation_id', observation_row.id,
      'length', char_length(candidate_description)
    ), true);
    evidence_changed := true;
  end if;

  submission_deadline := coalesce(
    nullif(enrichment#>>'{deadline_evidence,submission_deadline}', '')::date,
    public.v2_extract_official_submission_deadline(detail_description)
  );
  structured_deadline := coalesce(
    nullif(enrichment#>>'{deadline_evidence,structured_deadline}', '')::date,
    nullif(enrichment->>'deadline', '')::date
  );
  listing_deadline := observation_row.deadline;
  deadline_conflict := coalesce((enrichment->>'deadline_conflict')::boolean, false)
    or (submission_deadline is not null and structured_deadline is not null and submission_deadline <> structured_deadline);

  if submission_deadline is not null then
    candidate_deadline := submission_deadline;
    deadline_source := 'official_detail_submission';
    candidate_deadline_rank := 300;
  elsif structured_deadline is not null then
    candidate_deadline := structured_deadline;
    deadline_source := 'official_detail_structured';
    candidate_deadline_rank := 250;
  elsif listing_deadline is not null then
    candidate_deadline := listing_deadline;
    deadline_source := 'official_listing_deadline';
    candidate_deadline_rank := 200;
  end if;

  existing_deadline_rank := coalesce((existing_evidence#>>'{deadline,rank}')::integer, 0);
  previous_deadline_observed_at := coalesce(
    nullif(existing_evidence#>>'{deadline,observed_at}', '')::timestamptz,
    nullif(existing_evidence#>>'{deadline_conflict,observed_at}', '')::timestamptz
  );
  next_deadline := opportunity_row.deadline;
  if deadline_conflict and (previous_deadline_observed_at is null or observed_at >= previous_deadline_observed_at) then
    next_evidence := jsonb_set(next_evidence, '{deadline_conflict}', jsonb_build_object(
      'status', 'review_required',
      'submission_deadline', submission_deadline,
      'structured_deadline', structured_deadline,
      'listing_deadline', listing_deadline,
      'observed_at', observed_at,
      'observation_id', observation_row.id,
      'resolution', 'canonical_deadline_preserved'
    ), true);
    evidence_changed := true;
  elsif not deadline_conflict
     and candidate_deadline is not null
     and candidate_deadline_rank >= existing_deadline_rank
     and (previous_deadline_observed_at is null or observed_at >= previous_deadline_observed_at) then
    next_deadline := candidate_deadline;
    deadline_changed := next_deadline is distinct from opportunity_row.deadline;
    next_evidence := jsonb_set(next_evidence - 'deadline_conflict', '{deadline}', jsonb_build_object(
      'source', deadline_source,
      'rank', candidate_deadline_rank,
      'observed_at', observed_at,
      'observation_id', observation_row.id,
      'value', candidate_deadline
    ), true);
    evidence_changed := true;
  end if;

  candidate_buyer := nullif(btrim(coalesce(enrichment->>'buyer', observation_row.buyer)), '');
  candidate_location := nullif(btrim(observation_row.location), '');
  next_buyer := opportunity_row.buyer;
  next_location := opportunity_row.location;
  next_url := opportunity_row.url;
  if lower(btrim(coalesce(opportunity_row.buyer, ''))) in ('', 'unknown', 'unknown buyer') and candidate_buyer is not null then
    next_buyer := candidate_buyer;
    buyer_changed := true;
  end if;
  if lower(btrim(coalesce(opportunity_row.location, ''))) in ('', 'unknown') and candidate_location is not null then
    next_location := candidate_location;
    location_changed := true;
  end if;
  if candidate_url is not null and candidate_url is distinct from opportunity_row.url then
    next_url := candidate_url;
    url_changed := true;
  end if;

  if evidence_changed then
    next_payload := jsonb_set(next_payload, '{canonical_field_evidence}', next_evidence, true);
  end if;

  if description_changed or deadline_changed or buyer_changed or location_changed or url_changed or evidence_changed then
    update public.opportunities
    set description = next_description,
        deadline = next_deadline,
        buyer = next_buyer,
        location = next_location,
        url = next_url,
        raw_payload = next_payload,
        updated_at = now()
    where id = opportunity_row.id;
  end if;

  return jsonb_build_object(
    'status', case when deadline_conflict then 'deadline_conflict' when description_changed or deadline_changed or buyer_changed or location_changed or url_changed then 'updated' else 'unchanged' end,
    'opportunity_id', opportunity_row.id,
    'observation_id', observation_row.id,
    'description_changed', description_changed,
    'deadline_changed', deadline_changed,
    'buyer_changed', buyer_changed,
    'location_changed', location_changed,
    'url_changed', url_changed,
    'deadline_conflict', deadline_conflict
  );
end;
$$;

revoke all on function public.v2_description_quality_rank(text, text) from public, anon, authenticated;
revoke all on function public.v2_extract_official_submission_deadline(text) from public, anon, authenticated;
revoke all on function public.v2_reconcile_verified_official_fields(uuid, uuid) from public, anon, authenticated;
grant execute on function public.v2_reconcile_verified_official_fields(uuid, uuid) to service_role;

create or replace function public.v2_reconcile_promoted_official_observation()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if new.promotion_state = 'promoted'
     and new.promoted_opportunity_id is not null
     and (old.promotion_state is distinct from new.promotion_state or old.promoted_opportunity_id is distinct from new.promoted_opportunity_id) then
    perform public.v2_reconcile_verified_official_fields(new.promoted_opportunity_id, new.id);
  end if;
  return new;
end;
$$;

revoke all on function public.v2_reconcile_promoted_official_observation() from public, anon, authenticated;

drop trigger if exists reconcile_promoted_official_observation_after_update on public.v2_ingestion_observations;
create trigger reconcile_promoted_official_observation_after_update
after update of promotion_state, promoted_opportunity_id on public.v2_ingestion_observations
for each row execute function public.v2_reconcile_promoted_official_observation();

-- Controlled, idempotent repair of the two audited canonical rows only. The
-- helper preserves IDs and does not touch any downstream table.
do $$
declare
  target record;
begin
  for target in
    select q.id as opportunity_id, latest_observation.id as observation_id
    from public.opportunities q
    cross join lateral (
      select o.id
      from public.v2_ingestion_observations o
      join public.v2_source_configs c on c.id = o.source_config_id
      where o.source_id = q.source_id
        and o.external_id = q.external_id
        and o.validation_state = 'valid'
        and o.strong_procurement_evidence = true
        and o.enrichment_status = 'enriched'
        and c.source_key in ('gardabaer-utbod-v2', 'reykjavik-utbod-v2')
      order by o.fetched_at desc, o.created_at desc
      limit 1
    ) latest_observation
    where q.id in (
      'f94dab85-70da-4d7f-ad94-d26262feed0d'::uuid,
      '3f838300-17c4-413a-96f5-44856a082b07'::uuid
    )
  loop
    perform public.v2_reconcile_verified_official_fields(target.opportunity_id, target.observation_id);
  end loop;
end;
$$;

comment on function public.v2_reconcile_verified_official_fields(uuid, uuid) is
  'Safely reconciles richer/newer verified official fields onto the same canonical row; never triggers matching or communications.';
