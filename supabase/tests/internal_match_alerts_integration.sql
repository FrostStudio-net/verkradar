\set ON_ERROR_STOP on

create or replace function public.internal_alert_assert(condition boolean, message text)
returns void language plpgsql as $$
begin
  if not condition then raise exception 'assertion failed: %', message; end if;
end $$;

select public.internal_alert_assert(
  (select count(*) = 1 and bool_and(enabled) from public.internal_match_alert_subscriptions
   where company_id = 'cad6b69e-b021-447d-b637-31b2e8dbff2e'),
  'target subscription is enabled exactly once'
);
select public.internal_alert_assert(
  (select count(*) = 2 from public.internal_match_alert_outbox where status = 'suppressed_existing'),
  'the two pre-existing matches are permanently suppressed'
);

insert into public.opportunities(id, source_id, external_id, title, buyer, deadline, status, procurement_stage,
  actionable_for_suppliers, requires_admin_review, phase_c_communication_hold, raw_payload)
values
('00000000-0000-4000-8000-000000000103','00000000-0000-4000-8000-000000000001','new-good','New qualifying match','Garðabær','2026-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000104','00000000-0000-4000-8000-000000000001','low-score','Low score','Garðabær','2026-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000105','00000000-0000-4000-8000-000000000001','review','Review required','Garðabær','2026-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000106','00000000-0000-4000-8000-000000000001','other-company','Other company','Garðabær','2026-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000107','00000000-0000-4000-8000-000000000001','disabled','Disabled subscription','Garðabær','2026-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000108','00000000-0000-4000-8000-000000000001','enqueue-failure','Enqueue failure isolation','Garðabær','2026-09-30','open','open_competition',true,false,false,'{}');

insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000203','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000103',68,'Good match',array['service +10'], 'auto_approved',true,false);
select public.internal_alert_assert(
  (select count(*)=1 and bool_and(status='queued') from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000103'),
  'new qualifying target-company match queues exactly once'
);

update public.opportunity_matches set match_score=69 where id='00000000-0000-4000-8000-000000000203';
select public.internal_alert_assert(
  (select count(*)=1 from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000103'),
  'match update does not enqueue or resend'
);

insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000204','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000104',49,'Weak',array[]::text[], 'auto_approved',true,false);
insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000205','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000105',80,'Review',array[]::text[], 'needs_review',false,true);
insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000206','00000000-0000-4000-8000-000000000099','00000000-0000-4000-8000-000000000106',80,'Other',array[]::text[], 'auto_approved',true,false);
select public.internal_alert_assert(
  (select count(*)=0 from public.internal_match_alert_outbox where opportunity_id in ('00000000-0000-4000-8000-000000000104','00000000-0000-4000-8000-000000000105','00000000-0000-4000-8000-000000000106')),
  'low score, review-required, and unrelated company matches do not queue'
);

update public.internal_match_alert_subscriptions set enabled=false where company_id='cad6b69e-b021-447d-b637-31b2e8dbff2e';
insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000207','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000107',80,'Good',array[]::text[], 'auto_approved',true,false);
select public.internal_alert_assert(
  (select count(*)=0 from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000107'),
  'disabled subscription blocks enqueue'
);
update public.internal_match_alert_subscriptions set enabled=true where company_id='cad6b69e-b021-447d-b637-31b2e8dbff2e';

alter table public.internal_match_alert_outbox rename to internal_match_alert_outbox_unavailable;
insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000208','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000108',80,'Good',array[]::text[], 'auto_approved',true,false);
alter table public.internal_match_alert_outbox_unavailable rename to internal_match_alert_outbox;
select public.internal_alert_assert(
  exists(select 1 from public.opportunity_matches where id='00000000-0000-4000-8000-000000000208'),
  'enqueue failure does not roll back match insert'
);

set request.jwt.claim.role = 'service_role';
select public.claim_internal_match_alerts(5);
select public.internal_alert_assert(
  (select status='processing' and attempt_count=1 from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000103'),
  'service-role dispatcher claims one queued alert'
);
select public.complete_internal_match_alert(
  (select id from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000103'),
  false,null,'provider unavailable',503
);
select public.internal_alert_assert(
  (select status='failed' and attempt_count=1 and next_attempt_at is not null from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000103'),
  'provider failure is logged and bounded retry is scheduled'
);
update public.internal_match_alert_outbox set next_attempt_at=now() where opportunity_id='00000000-0000-4000-8000-000000000103';
select public.claim_internal_match_alerts(5);
select public.complete_internal_match_alert(
  (select id from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000103'),
  true,'resend-test-id',null,200
);
select public.internal_alert_assert(
  (select status='sent' and attempt_count=2 and provider_message_id='resend-test-id' and jsonb_array_length(delivery_log)=4
   from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000103'),
  'retry completes once with provider id and append-only attempt log'
);

reset request.jwt.claim.role;
set role authenticated;
do $$ begin
  begin
    perform public.claim_internal_match_alerts(1);
    raise exception 'expected service-role rejection';
  exception when others then
    if sqlerrm not like '%INTERNAL_MATCH_ALERT_SERVICE_ROLE_REQUIRED%'
       and sqlerrm not like '%permission denied for function claim_internal_match_alerts%' then
      raise;
    end if;
  end;
end $$;
reset role;

select public.internal_alert_assert((select count(*)=0 from public.ai_reviews), 'no AI rows');
select public.internal_alert_assert((select count(*)=0 from public.reports), 'no report rows');
select public.internal_alert_assert((select count(*)=0 from public.report_items), 'no report item rows');
select public.internal_alert_assert((select count(*)=0 from public.company_opportunity_sends), 'no customer sends');

drop function public.internal_alert_assert(boolean,text);
