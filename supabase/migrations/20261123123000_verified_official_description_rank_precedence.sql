-- Follow-up for databases where the preceding migration was already applied:
-- a verified detail-page description (rank 300) must outrank an older rich
-- listing description (rank 200), even when the corrected text is marginally
-- shorter. Once rank-300 evidence is recorded, shorter/equal-rank text cannot
-- overwrite it.

do $migration$
declare
  function_definition text;
  old_fragment constant text := $old$
     and (
       char_length(candidate_description) > char_length(coalesce(opportunity_row.description, ''))
       or public.v2_description_quality_rank(opportunity_row.description, opportunity_row.title) <= 50
     ) then
$old$;
  new_fragment constant text := $new$
     and (
       char_length(candidate_description) > char_length(coalesce(opportunity_row.description, ''))
       or candidate_description_rank > existing_description_rank
       or public.v2_description_quality_rank(opportunity_row.description, opportunity_row.title) <= 50
     ) then
$new$;
begin
  select pg_get_functiondef('public.v2_reconcile_verified_official_fields(uuid,uuid)'::regprocedure)
  into function_definition;

  if strpos(function_definition, old_fragment) > 0 then
    execute replace(function_definition, old_fragment, new_fragment);
  elsif strpos(function_definition, new_fragment) = 0 then
    raise exception 'V2_CANONICAL_DESCRIPTION_PRECEDENCE_DEFINITION_UNEXPECTED';
  end if;
end;
$migration$;

-- Idempotently re-run reconciliation for only Reykjavík 16342 so its canonical
-- description and deadline carry the same newer official detail evidence.
do $$
declare
  target_observation_id uuid;
begin
  select o.id into target_observation_id
  from public.v2_ingestion_observations o
  join public.v2_source_configs c on c.id = o.source_config_id
  join public.opportunities q
    on q.id = '3f838300-17c4-413a-96f5-44856a082b07'::uuid
   and q.source_id = o.source_id
   and q.external_id = o.external_id
  where o.validation_state = 'valid'
    and o.strong_procurement_evidence = true
    and o.enrichment_status = 'enriched'
    and c.source_key = 'reykjavik-utbod-v2'
  order by o.fetched_at desc, o.created_at desc
  limit 1;

  if target_observation_id is not null then
    perform public.v2_reconcile_verified_official_fields(
      '3f838300-17c4-413a-96f5-44856a082b07'::uuid,
      target_observation_id
    );
  end if;
end;
$$;
