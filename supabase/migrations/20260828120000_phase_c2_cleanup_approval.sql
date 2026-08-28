-- Phase C2 staging cleanup: clear only the manual approval on the prepared
-- fuzzy-review case. Review state and evidence remain immutable.

create or replace function public.clear_v2_c2_review_approval(
  target_observation_id uuid,
  clearing_admin_id uuid
)
returns table(
  observation_id uuid,
  approval_cleared boolean,
  comparison_state text,
  promotion_state text,
  promotion_error text
)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  observation_row public.v2_ingestion_observations%rowtype;
  was_approved boolean;
begin
  if not exists (select 1 from public.admin_users where user_id = clearing_admin_id) then
    raise exception 'V2_C2_CLEAR_APPROVAL_ADMIN_REQUIRED';
  end if;

  if target_observation_id is distinct from '9c6b7648-1685-4d9b-953e-6afdcba208a7'::uuid then
    raise exception 'V2_C2_CLEAR_APPROVAL_OBSERVATION_NOT_ALLOWED';
  end if;

  select * into observation_row
  from public.v2_ingestion_observations
  where id = target_observation_id
  for update;
  if not found then raise exception 'V2_OBSERVATION_NOT_FOUND'; end if;

  if observation_row.comparison_state is distinct from 'review_required'
     or observation_row.promotion_state is distinct from 'review_required'
     or coalesce(observation_row.promotion_error, '') not like '%V2_FUZZY_REVIEW_REQUIRED%' then
    raise exception 'V2_C2_FUZZY_REVIEW_EVIDENCE_REQUIRED';
  end if;
  if observation_row.promoted_opportunity_id is not null then
    raise exception 'V2_C2_CLEAR_APPROVAL_PROMOTED_OBSERVATION';
  end if;
  if exists (
    select 1 from public.opportunity_ingestion_provenance provenance
    where provenance.observation_id = target_observation_id
  ) then
    raise exception 'V2_C2_CLEAR_APPROVAL_PROVENANCE_EXISTS';
  end if;

  was_approved := observation_row.approved_for_promotion;
  if was_approved then
    update public.v2_ingestion_observations
    set approved_for_promotion = false,
        approved_at = null,
        approved_by = null,
        approval_note = null
    where id = target_observation_id;
  end if;

  observation_id := target_observation_id;
  approval_cleared := was_approved;
  comparison_state := observation_row.comparison_state;
  promotion_state := observation_row.promotion_state;
  promotion_error := observation_row.promotion_error;
  return next;
end;
$$;

revoke all on function public.clear_v2_c2_review_approval(uuid, uuid) from public, anon, authenticated;
grant execute on function public.clear_v2_c2_review_approval(uuid, uuid) to service_role;

comment on function public.clear_v2_c2_review_approval(uuid, uuid) is
  'Service-role-only Phase C2 staging cleanup for the prepared fuzzy-review observation. Clears manual approval fields only and preserves review evidence.';
