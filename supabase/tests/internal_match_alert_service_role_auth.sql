begin;

do $$
begin
  if not has_function_privilege('service_role', 'public.claim_internal_match_alerts(integer)', 'EXECUTE')
     or not has_function_privilege('service_role', 'public.complete_internal_match_alert(uuid,boolean,text,text,integer)', 'EXECUTE') then
    raise exception 'service_role EXECUTE grant missing';
  end if;
  if has_function_privilege('authenticated', 'public.claim_internal_match_alerts(integer)', 'EXECUTE')
     or has_function_privilege('authenticated', 'public.complete_internal_match_alert(uuid,boolean,text,text,integer)', 'EXECUTE')
     or has_function_privilege('anon', 'public.claim_internal_match_alerts(integer)', 'EXECUTE')
     or has_function_privilege('anon', 'public.complete_internal_match_alert(uuid,boolean,text,text,integer)', 'EXECUTE') then
    raise exception 'internal alert RPC exposed outside service_role';
  end if;
end $$;

set local role service_role;
select set_config('request.jwt.claim.role', '', true);
select set_config('request.jwt.claims', '{"role":"service_role"}', true);

create temporary table claimed_alert on commit drop as
select * from public.claim_internal_match_alerts(1);

do $$
declare
  claimed public.internal_match_alert_outbox%rowtype;
  completed public.internal_match_alert_outbox%rowtype;
begin
  select * into claimed from claimed_alert limit 1;
  if not found then raise exception 'service_role did not claim the queued regression alert'; end if;
  if claimed.status <> 'processing' or claimed.attempt_count <> 1 then
    raise exception 'claim did not preserve attempt behavior';
  end if;

  completed := public.complete_internal_match_alert(
    claimed.id, false, null, 'regression retry', 503
  );
  if completed.status <> 'failed' or completed.attempt_count <> 1
     or completed.next_attempt_at is null then
    raise exception 'failed completion did not preserve retry behavior';
  end if;
end $$;

update public.internal_match_alert_outbox
set next_attempt_at = now()
where id = (select id from claimed_alert limit 1);

truncate claimed_alert;
insert into claimed_alert select * from public.claim_internal_match_alerts(1);

do $$
declare
  claimed public.internal_match_alert_outbox%rowtype;
  completed public.internal_match_alert_outbox%rowtype;
begin
  select * into claimed from claimed_alert limit 1;
  if not found or claimed.attempt_count <> 2 then
    raise exception 'retry claim did not increment attempt count';
  end if;
  completed := public.complete_internal_match_alert(
    claimed.id, true, 'regression-provider-id', null, 200
  );
  if completed.status <> 'sent' or completed.attempt_count <> 2
     or completed.provider_message_id <> 'regression-provider-id' then
    raise exception 'service_role could not complete the claimed alert';
  end if;
end $$;

select set_config('request.jwt.claims', '{"role":"authenticated"}', true);
do $$
begin
  perform public.claim_internal_match_alerts(1);
  raise exception 'expected authenticated JWT rejection';
exception when others then
  if sqlerrm not like '%INTERNAL_MATCH_ALERT_SERVICE_ROLE_REQUIRED%' then raise; end if;
end $$;

select set_config('request.jwt.claims', '{"role":"anon"}', true);
do $$
begin
  perform public.claim_internal_match_alerts(1);
  raise exception 'expected anon JWT rejection';
exception when others then
  if sqlerrm not like '%INTERNAL_MATCH_ALERT_SERVICE_ROLE_REQUIRED%' then raise; end if;
end $$;

select set_config('request.jwt.claims', '{}', true);
do $$
begin
  perform public.claim_internal_match_alerts(1);
  raise exception 'expected missing-role rejection';
exception when others then
  if sqlerrm not like '%INTERNAL_MATCH_ALERT_SERVICE_ROLE_REQUIRED%' then raise; end if;
end $$;

rollback;
