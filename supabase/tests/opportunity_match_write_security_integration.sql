\set ON_ERROR_STOP on

begin;

create temporary table match_security_alert_baseline on commit drop as
select count(*)::bigint as row_count
from public.internal_match_alert_outbox;

do $$
declare
  non_select_policies integer;
begin
  if not has_table_privilege('authenticated', 'public.opportunity_matches', 'SELECT') then
    raise exception 'MATCH SECURITY ASSERTION FAILED: authenticated cannot select matches';
  end if;
  if has_table_privilege('authenticated', 'public.opportunity_matches', 'INSERT')
    or has_table_privilege('authenticated', 'public.opportunity_matches', 'UPDATE')
    or has_table_privilege('authenticated', 'public.opportunity_matches', 'DELETE')
    or has_table_privilege('authenticated', 'public.opportunity_matches', 'TRUNCATE') then
    raise exception 'MATCH SECURITY ASSERTION FAILED: authenticated retains match write privileges';
  end if;
  if not has_table_privilege('service_role', 'public.opportunity_matches', 'INSERT')
    or not has_table_privilege('service_role', 'public.opportunity_matches', 'UPDATE')
    or not has_table_privilege('service_role', 'public.opportunity_matches', 'DELETE') then
    raise exception 'MATCH SECURITY ASSERTION FAILED: service role lost canonical match writes';
  end if;
  select count(*) into non_select_policies
  from pg_policies
  where schemaname = 'public'
    and tablename = 'opportunity_matches'
    and cmd <> 'SELECT';
  if non_select_policies <> 0 then
    raise exception 'MATCH SECURITY ASSERTION FAILED: non-SELECT match policy remains';
  end if;
  if not exists (
    select 1 from pg_trigger
    where tgrelid = 'public.opportunity_matches'::regclass
      and tgname = 'enqueue_internal_match_alert_after_insert'
      and not tgisinternal
  ) then
    raise exception 'MATCH SECURITY ASSERTION FAILED: legitimate alert trigger is missing';
  end if;
end $$;

-- Use the established Drenlagnir customer fixture from the production-like DB
-- integration environment. SELECT must work, while every write statement must
-- fail at the table-privilege boundary before the alert trigger can run.
set local role authenticated;
select set_config(
  'request.jwt.claims',
  '{"sub":"fecda4d0-ce1d-4d45-9929-44366e4018c6","role":"authenticated","email":"krissijakob19@gmail.com"}',
  true
);

select count(*) from public.opportunity_matches;

do $$
begin
  insert into public.opportunity_matches default values;
  raise exception 'MATCH SECURITY ASSERTION FAILED: customer inserted a canonical match';
exception when insufficient_privilege then null;
end $$;

do $$
begin
  update public.opportunity_matches
  set match_score = 100,
      safety_status = 'auto_approved',
      alert_eligible = true,
      review_required = false,
      reviewed_by = auth.uid(),
      ai_review_status = 'completed';
  raise exception 'MATCH SECURITY ASSERTION FAILED: customer updated trusted match fields';
exception when insufficient_privilege then null;
end $$;

do $$
begin
  delete from public.opportunity_matches;
  raise exception 'MATCH SECURITY ASSERTION FAILED: customer deleted canonical matches';
exception when insufficient_privilege then null;
end $$;

do $$
begin
  if exists (
    select 1 from public.opportunity_matches
    where company_id <> 'cad6b69e-b021-447d-b637-31b2e8dbff2e'::uuid
  ) then
    raise exception 'MATCH SECURITY ASSERTION FAILED: customer can read another tenant match';
  end if;
end $$;

reset role;

do $$
begin
  if (select count(*) from public.internal_match_alert_outbox)
     <> (select row_count from match_security_alert_baseline) then
    raise exception 'MATCH SECURITY ASSERTION FAILED: forged customer write reached alert outbox';
  end if;
  if not exists (
    select 1 from pg_trigger
    where tgrelid = 'public.opportunity_matches'::regclass
      and tgname = 'enqueue_internal_match_alert_after_insert'
      and not tgisinternal
  ) then
    raise exception 'MATCH SECURITY ASSERTION FAILED: operator alert trigger changed';
  end if;
end $$;

-- The server role used by the canonical matcher and secured admin Edge
-- Function must retain effective write access. The privilege assertions above
-- cover empty fixtures; when a match exists, also exercise an actual no-op
-- update. Production writer upserts are covered by the focused code test.
set local role service_role;
do $$
declare
  affected integer;
begin
  if not exists (select 1 from public.opportunity_matches) then
    return;
  end if;
  update public.opportunity_matches
  set match_score = match_score
  where id = (select id from public.opportunity_matches order by id limit 1);
  get diagnostics affected = row_count;
  if affected <> 1 then
    raise exception 'MATCH SECURITY ASSERTION FAILED: service role cannot update canonical matches';
  end if;
end $$;
reset role;

rollback;
