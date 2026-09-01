\set ON_ERROR_STOP on

create or replace function public.legacy_automation_assert(condition boolean,message text)
returns void language plpgsql as $$
begin if not condition then raise exception 'assertion failed: %',message; end if; end $$;

select public.legacy_automation_assert(
  (select count(*)=1 from cron.job where jobname='legacy-source-connectors-batch-1' and schedule='30 0 * * *'),
  'batch 1 scheduled at 00:30 UTC'
);
select public.legacy_automation_assert(
  (select count(*)=1 from cron.job where jobname='legacy-source-connectors-batch-2' and schedule='50 0 * * *'),
  'batch 2 scheduled at 00:50 UTC'
);

select public.trigger_legacy_connector_automation('legacy_batch_1');
select public.trigger_legacy_connector_automation('legacy_batch_2');
select public.legacy_automation_assert((select count(*)=2 from net.requests),'both scheduler dispatch paths execute');
select public.legacy_automation_assert(
  (select bool_and(headers ? 'Authorization' and headers ? 'x-automation-secret') from net.requests),
  'gateway and application automation auth are both present'
);
select public.legacy_automation_assert(
  (select bool_and(headers->>'Authorization'='Bearer test-anon-jwt') from net.requests),
  'gateway uses anon JWT rather than service role'
);
select public.legacy_automation_assert(
  (select count(*)=2 from net.requests where body->>'action'='run_legacy_connector_batch'
    and body->>'batch_key' in ('legacy_batch_1','legacy_batch_2')),
  'dispatch payload permits only the two exact batch keys'
);
select public.legacy_automation_assert(
  (select count(*)=2 from public.legacy_connector_automation_dispatches where status='dispatched' and request_id is not null),
  'each scheduler invocation is logged with request id'
);

do $$ begin
  begin
    perform public.trigger_legacy_connector_automation('rikiskaup');
    raise exception 'expected invalid batch rejection';
  exception when others then
    if sqlerrm not like '%LEGACY_CONNECTOR_AUTOMATION_BATCH_NOT_ALLOWED%' then raise; end if;
  end;
end $$;

insert into public.import_runs(run_type,source_name,import_mode,status,started_at)
values('source-connectors-automation','test active','legacy-connectors-ingestion-only','running',now());
select public.trigger_legacy_connector_automation('legacy_batch_1');
select public.legacy_automation_assert((select count(*)=2 from net.requests),'active-run guard prevents overlapping HTTP dispatch');
select public.legacy_automation_assert(
  (select count(*)=1 from public.legacy_connector_automation_dispatches where status='skipped_active_run'),
  'overlap skip remains observable'
);

set role authenticated;
do $$ begin
  begin
    perform public.trigger_legacy_connector_automation('legacy_batch_1');
    raise exception 'expected authenticated denial';
  exception when others then
    if sqlerrm not like '%permission denied for function trigger_legacy_connector_automation%' then raise; end if;
  end;
end $$;
reset role;

drop function public.legacy_automation_assert(boolean,text);
