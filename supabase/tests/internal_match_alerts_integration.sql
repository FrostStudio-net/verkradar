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
select public.internal_alert_assert(
  (select count(*) = 1 from pg_trigger
   where tgrelid = 'public.opportunity_matches'::regclass
     and tgname = 'enqueue_internal_match_alert_after_insert'
     and not tgisinternal),
  'qualifying insert trigger remains installed'
);
select public.internal_alert_assert(
  (select count(*) = 1 from pg_trigger
   where tgrelid = 'public.opportunity_matches'::regclass
     and tgname = 'enqueue_internal_match_alert_after_update'
     and not tgisinternal),
  'qualifying transition update trigger is installed'
);

insert into public.opportunities(id, source_id, external_id, title, buyer, deadline, status, procurement_stage,
  actionable_for_suppliers, requires_admin_review, phase_c_communication_hold, raw_payload)
values
('00000000-0000-4000-8000-000000000103','00000000-0000-4000-8000-000000000001','new-good','New qualifying match','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000104','00000000-0000-4000-8000-000000000001','low-score','Low score','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000105','00000000-0000-4000-8000-000000000001','review','Review required','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000106','00000000-0000-4000-8000-000000000001','other-company','Other company','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000107','00000000-0000-4000-8000-000000000001','disabled','Disabled subscription','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000108','00000000-0000-4000-8000-000000000001','enqueue-failure','Enqueue failure isolation','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000109','00000000-0000-4000-8000-000000000001','subscribed-dashboard-only','Subscribed dashboard-only company','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000110','00000000-0000-4000-8000-000000000001','update-transition','Update transition','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000111','00000000-0000-4000-8000-000000000001','upsert-transition','Upsert transition','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000112','00000000-0000-4000-8000-000000000001','stays-nonqualifying','Stays nonqualifying','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000113','00000000-0000-4000-8000-000000000001','qualifying-to-nonqualifying','Qualifying to nonqualifying','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000114','00000000-0000-4000-8000-000000000001','prior-sent','Prior sent','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000115','00000000-0000-4000-8000-000000000001','unsafe-review','Unsafe review','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000116','00000000-0000-4000-8000-000000000001','disabled-transition','Disabled transition','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000117','00000000-0000-4000-8000-000000000001','repeated-transition','Repeated transition','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}'),
('00000000-0000-4000-8000-000000000118','00000000-0000-4000-8000-000000000001','customer-setting-irrelevant','Customer setting irrelevant','Garðabær','2099-09-30','open','open_competition',true,false,false,'{}');

insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000203','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000103',68,'Good match',array['service +10'], 'auto_approved',true,false);
select public.internal_alert_assert(
  (select count(*)=1 and bool_and(status='queued') from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000103'),
  'new qualifying target-company match queues exactly once'
);

update public.opportunity_matches set match_score=69 where id='00000000-0000-4000-8000-000000000203';
select public.internal_alert_assert(
  (select count(*)=1 from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000103'),
  'qualifying-to-qualifying update does not enqueue or resend'
);

-- Reproduce the latent matcher path: an existing nonqualifying row becomes
-- qualifying through UPDATE and through ON CONFLICT DO UPDATE.
insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000210','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000110',49,'Weak',array[]::text[], 'auto_approved',false,false);
select public.internal_alert_assert(
  (select count(*)=0 from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000110'),
  'nonqualifying insert creates no outbox row'
);
update public.opportunity_matches set match_score=68
where company_id='cad6b69e-b021-447d-b637-31b2e8dbff2e' and opportunity_id='00000000-0000-4000-8000-000000000110';
select public.internal_alert_assert(
  (select count(*)=1 from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000110'),
  'nonqualifying-to-qualifying update queues exactly once'
);

insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000211','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000111',49,'Weak',array[]::text[], 'auto_approved',false,false);
insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000299','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000111',72,'Now qualifying',array['upsert'], 'auto_approved',false,false)
on conflict (company_id, opportunity_id) do update
set match_score=excluded.match_score,
    match_label=excluded.match_label,
    match_reasons=excluded.match_reasons,
    safety_status=excluded.safety_status,
    review_required=excluded.review_required;
select public.internal_alert_assert(
  (select count(*)=1 from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000111'),
  'ON CONFLICT DO UPDATE qualifying transition queues exactly once'
);

insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000212','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000112',40,'Weak',array[]::text[], 'auto_approved',false,false);
update public.opportunity_matches set match_score=49 where id='00000000-0000-4000-8000-000000000212';
select public.internal_alert_assert(
  (select count(*)=0 from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000112'),
  'nonqualifying-to-nonqualifying update creates no outbox row'
);

insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000213','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000113',70,'Good',array[]::text[], 'auto_approved',false,false);
update public.opportunity_matches set match_score=40 where id='00000000-0000-4000-8000-000000000213';
select public.internal_alert_assert(
  (select count(*)=1 from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000113'),
  'qualifying-to-nonqualifying update creates no additional outbox row'
);

insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000214','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000114',49,'Weak',array[]::text[], 'auto_approved',false,false);
insert into public.internal_match_alert_outbox(alert_type,company_id,opportunity_id,match_id,status,queued_at,sent_at,provider_message_id)
values ('new_qualifying_match','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000114','00000000-0000-4000-8000-000000000214','sent',now(),now(),'prior-send');
update public.opportunity_matches set match_score=75 where id='00000000-0000-4000-8000-000000000214';
select public.internal_alert_assert(
  (select count(*)=1 and bool_and(status='sent') from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000114'),
  'prior sent alert prevents duplicate on a later qualifying transition'
);

insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values
 ('00000000-0000-4000-8000-000000000215','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000115',80,'Unsafe',array[]::text[], 'needs_review',false,true),
 ('00000000-0000-4000-8000-000000000217','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000117',49,'Weak',array[]::text[], 'auto_approved',false,false),
 ('00000000-0000-4000-8000-000000000218','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000118',49,'Weak',array[]::text[], 'auto_approved',false,false);
update public.opportunity_matches set match_score=90 where id='00000000-0000-4000-8000-000000000215';
select public.internal_alert_assert(
  (select count(*)=0 from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000115'),
  'unsafe review-required row does not alert'
);
update public.opportunity_matches set match_score=80 where id='00000000-0000-4000-8000-000000000217';
update public.opportunity_matches set match_score=81 where id='00000000-0000-4000-8000-000000000217';
update public.opportunity_matches set match_score=82 where id='00000000-0000-4000-8000-000000000217';
select public.internal_alert_assert(
  (select count(*)=1 from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000117'),
  'repeated qualifying updates remain deduplicated'
);
update public.opportunity_matches set match_score=80 where id='00000000-0000-4000-8000-000000000218';
select public.internal_alert_assert(
  (select count(*)=1 from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000118'),
  'customer alert_eligible remains irrelevant to the internal operator transition'
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

insert into public.internal_match_alert_subscriptions(alert_type,company_id,recipient_secret_name,enabled)
values ('new_qualifying_match','00000000-0000-4000-8000-000000000099','INTERNAL_MATCH_ALERT_EMAIL',true);
insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000209','00000000-0000-4000-8000-000000000099','00000000-0000-4000-8000-000000000109',80,'Other',array[]::text[], 'auto_approved',false,false);
select public.internal_alert_assert(
  (select count(*)=1 and bool_and(status='queued') from public.internal_match_alert_outbox where opportunity_id='00000000-0000-4000-8000-000000000109'),
  'enabled subscription queues an internal alert even when customer alert_eligible is false'
);

update public.internal_match_alert_subscriptions set enabled=false where company_id='cad6b69e-b021-447d-b637-31b2e8dbff2e';
insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000207','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000107',80,'Good',array[]::text[], 'auto_approved',true,false);
insert into public.opportunity_matches(id,company_id,opportunity_id,match_score,match_label,match_reasons,safety_status,alert_eligible,review_required)
values ('00000000-0000-4000-8000-000000000216','cad6b69e-b021-447d-b637-31b2e8dbff2e','00000000-0000-4000-8000-000000000116',49,'Weak',array[]::text[], 'auto_approved',false,false);
update public.opportunity_matches set match_score=80 where id='00000000-0000-4000-8000-000000000216';
select public.internal_alert_assert(
  (select count(*)=0 from public.internal_match_alert_outbox where opportunity_id in ('00000000-0000-4000-8000-000000000107','00000000-0000-4000-8000-000000000116')),
  'disabled subscription blocks insert and update-transition enqueue'
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
