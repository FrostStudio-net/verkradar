-- Keep Vegagerðin comparison fail-closed while excluding short, ambiguous
-- legacy titles (for example "A: Húsavík") from the fuzzy-identity tier.
-- Exact reference, canonical URL, source/external ID, and fingerprint tiers
-- remain unchanged and continue to take precedence.

create or replace function public.v2_vegagerdin_fuzzy_identity_candidate(
  candidate_title text,
  observation_title text
)
returns boolean
language sql
immutable
parallel safe
set search_path = public, extensions, pg_temp
as $$
  with normalized as (
    select
      public.v2_normalize_identity_text(candidate_title) as candidate,
      public.v2_normalize_identity_text(observation_title) as observation
  )
  select
    length(candidate) >= 20
    and length(observation) >= 20
    and cardinality(regexp_split_to_array(candidate, '\s+')) >= 3
    and cardinality(regexp_split_to_array(observation, '\s+')) >= 3
    and least(length(candidate), length(observation))::numeric
      / greatest(length(candidate), length(observation))::numeric >= 0.55
    and extensions.similarity(candidate, observation) >= 0.84
  from normalized;
$$;

revoke all on function public.v2_vegagerdin_fuzzy_identity_candidate(text, text) from public, anon, authenticated;
grant execute on function public.v2_vegagerdin_fuzzy_identity_candidate(text, text) to service_role;

do $$
declare
  function_sql text;
  old_compare_predicate text := $old$where extensions.similarity(
        public.v2_normalize_identity_text(title),
        public.v2_normalize_identity_text(o.title)
      ) >= 0.84$old$;
  new_compare_predicate text := $new$where public.v2_vegagerdin_fuzzy_identity_candidate(title, o.title)$new$;
  old_admission_predicate text := 'where extensions.similarity(public.v2_normalize_identity_text(title),public.v2_normalize_identity_text(o.title))>=0.84';
  new_admission_predicate text := 'where public.v2_vegagerdin_fuzzy_identity_candidate(title,o.title)';
begin
  function_sql := pg_get_functiondef('public.compare_vegagerdin_shadow_observation(uuid)'::regprocedure);
  if strpos(function_sql, old_compare_predicate) = 0 then
    raise exception 'V2_VEGAGERDIN_COMPARE_PATCH_TARGET_MISSING';
  end if;
  execute replace(function_sql, old_compare_predicate, new_compare_predicate);

  function_sql := pg_get_functiondef('public.v2_admit_vegagerdin_observation(uuid)'::regprocedure);
  if strpos(function_sql, old_admission_predicate) = 0 then
    raise exception 'V2_VEGAGERDIN_ADMISSION_PATCH_TARGET_MISSING';
  end if;
  execute replace(function_sql, old_admission_predicate, new_admission_predicate);

  if strpos(
    pg_get_functiondef('public.compare_vegagerdin_shadow_observation(uuid)'::regprocedure),
    'v2_vegagerdin_fuzzy_identity_candidate'
  ) = 0 or strpos(
    pg_get_functiondef('public.v2_admit_vegagerdin_observation(uuid)'::regprocedure),
    'v2_vegagerdin_fuzzy_identity_candidate'
  ) = 0 then
    raise exception 'V2_VEGAGERDIN_FUZZY_PATCH_VERIFICATION_FAILED';
  end if;
end;
$$;

comment on function public.v2_vegagerdin_fuzzy_identity_candidate(text, text) is
  'Narrow fuzzy identity predicate for substantive Vegagerðin titles; short or disproportionate titles never block routine admission, while deterministic identity tiers remain authoritative.';
