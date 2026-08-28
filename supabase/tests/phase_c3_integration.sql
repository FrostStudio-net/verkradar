\set ON_ERROR_STOP on

create or replace function public.c3_assert(condition boolean, message text) returns void language plpgsql as $$
begin if condition is not true then raise exception 'C3 ASSERTION FAILED: %', message; end if; end;
$$;

insert into auth.users(id) values ('00000000-0000-4000-8000-000000000031') on conflict do nothing;
insert into public.admin_users(user_id) values ('00000000-0000-4000-8000-000000000031') on conflict do nothing;
insert into public.companies(id,company_name,contact_email) values ('00000000-0000-4000-8000-000000000032','C3 guard company','c3@example.test') on conflict do nothing;
update public.automation_settings set value='true' where key in ('phase_c_production_enabled','phase_c_release_enabled');
update public.v2_source_configs set production_canary_enabled=true,release_feature_enabled=true where source_key='reykjavik-utbod-v2';
select * from public.set_v2_source_production_approval('reykjavik-utbod-v2',true,'00000000-0000-4000-8000-000000000031','C3 integration');

create or replace function public.c3_insert_candidate(obs_id uuid, run_id_value uuid, external_value text, reference_value text)
returns void language plpgsql as $$
declare c public.v2_source_configs%rowtype;
begin
  select * into c from public.v2_source_configs where source_key='reykjavik-utbod-v2';
  insert into public.v2_ingestion_runs(id,source_config_id,mode,trigger_type,status,error_count,suspicious_zero_items,started_at,finished_at)
  values(run_id_value,c.id,'shadow','shadow','succeeded',0,false,now()-interval '1 minute',now())
  on conflict(id) do nothing;
  insert into public.v2_source_health(source_config_id,status,circuit_state,last_run_id,last_run_at,last_success_at,parser_health)
  values(c.id,'healthy','closed',run_id_value,now(),now(),'{"parser_errors":[],"suspicious_zero_items":false,"enrichment":{"failed":0}}')
  on conflict(source_config_id) do update set status='healthy',circuit_state='closed',last_run_id=excluded.last_run_id,last_run_at=now(),last_success_at=now(),parser_health=excluded.parser_health;
  insert into public.v2_ingestion_observations(
    id,run_id,source_config_id,source_id,source_key,source_name,external_id,procurement_reference,discovered_url,canonical_url,normalized_canonical_url,
    title,buyer,deadline,safe_source_payload,content_hash,identity_fingerprint,parser_name,parser_version,fetched_at,validation_state,comparison_state,promotion_state,
    predicted_procurement_stage,predicted_actionable,predicted_confidence,predicted_reason,predicted_requires_admin_review,enrichment_status,
    approved_for_promotion,approved_at,approved_by,strong_procurement_evidence,deadline_evidence,promotion_enrichment_status
  ) values(
    obs_id,run_id_value,c.id,c.source_id,c.source_key,c.display_name,external_value,reference_value,
    'https://reykjavik.is/utbod/'||lower(reference_value),'https://reykjavik.is/utbod/'||lower(reference_value),'https://reykjavik.is/utbod/'||lower(reference_value),
    'C3 future tender '||reference_value,'Reykjavíkurborg',current_date+30,'{}',encode(digest(obs_id::text,'sha256'),'hex'),
    public.v2_identity_fingerprint('Reykjavíkurborg','C3 future tender '||reference_value,current_date+30,reference_value),
    'c3','1',now(),'valid','v2_only','eligible','open_competition',true,.97,'Explicit tender',false,'enriched',true,now(),'00000000-0000-4000-8000-000000000031',true,'explicit_source','succeeded'
  );
end;
$$;

-- Transaction 1: quarantine blocks legacy upsert and all downstream linkage,
-- unrelated rows stay writable, and authorized rollback remains functional.
begin;
select public.c3_insert_candidate('00000000-0000-4000-8000-000000000041','00000000-0000-4000-8000-000000000042','c3-quarantine','C3-Q');
select * from public.promote_v2_observation('00000000-0000-4000-8000-000000000041','00000000-0000-4000-8000-000000000031');
select public.c3_assert((select count(*)=1 from public.opportunities where external_id='c3-quarantine' and status='hidden' and raw_payload->>'promotion_quarantine'='phase_c_canary'),'promotion creates exactly one hidden canary');

do $$ begin
  perform set_config('verkradar.phase_c_authorized_action','rollback',true);
  update public.opportunities set title='spoofed authorization' where external_id='c3-quarantine';
  raise exception 'spoofed authorization unexpectedly mutated quarantine';
exception when others then if sqlerrm <> 'V2_QUARANTINED_OPPORTUNITY_IMMUTABLE' then raise; end if; end $$;

do $$ begin
  insert into public.opportunities(source_id,external_id,title,status,raw_payload,procurement_stage)
  select source_id,'c3-quarantine','legacy overwrite','open','{}','open_competition' from public.v2_source_configs where source_key='reykjavik-utbod-v2'
  on conflict(source_id,external_id) do update set title=excluded.title,status=excluded.status,raw_payload=excluded.raw_payload;
  raise exception 'legacy upsert unexpectedly mutated quarantine';
exception when others then if sqlerrm <> 'V2_QUARANTINED_OPPORTUNITY_IMMUTABLE' then raise; end if; end $$;

insert into public.opportunities(source_id,external_id,title,status,raw_payload,procurement_stage)
select source_id,'c3-normal','normal row','open','{}','open_competition' from public.v2_source_configs where source_key='reykjavik-utbod-v2';
update public.opportunities set title='normal row updated' where external_id='c3-normal';
select public.c3_assert((select title='normal row updated' from public.opportunities where external_id='c3-normal'),'ordinary opportunities remain writable');

do $$ begin
  insert into public.opportunity_matches(company_id,opportunity_id,match_score,match_label)
  select '00000000-0000-4000-8000-000000000032',id,90,'strong' from public.opportunities where external_id='c3-quarantine';
  raise exception 'quarantine match unexpectedly inserted';
exception when others then if sqlerrm <> 'V2_PHASE_C_DOWNSTREAM_LINK_BLOCKED' then raise; end if; end $$;
do $$ begin
  insert into public.report_items(opportunity_id) select id from public.opportunities where external_id='c3-quarantine';
  raise exception 'quarantine report item unexpectedly inserted';
exception when others then if sqlerrm <> 'V2_PHASE_C_DOWNSTREAM_LINK_BLOCKED' then raise; end if; end $$;
do $$ begin
  insert into public.company_opportunity_actions(company_id,opportunity_id,action_type)
  select '00000000-0000-4000-8000-000000000032',id,'saved' from public.opportunities where external_id='c3-quarantine';
  raise exception 'quarantine action unexpectedly inserted';
exception when others then if sqlerrm <> 'V2_PHASE_C_DOWNSTREAM_LINK_BLOCKED' then raise; end if; end $$;

select * from public.rollback_v2_canary_promotion('00000000-0000-4000-8000-000000000041','00000000-0000-4000-8000-000000000031','C3 integration rollback');
select public.c3_assert(not exists(select 1 from public.opportunities where external_id='c3-quarantine'),'authorized rollback deletes clean V2-created canary');
rollback;

-- Transaction 2: atomic release keeps communication held, allows matching only,
-- blocks all customer communication linkage, and disable archives without delete.
begin;
select public.c3_insert_candidate('00000000-0000-4000-8000-000000000051','00000000-0000-4000-8000-000000000052','c3-release','C3-R');
select * from public.promote_v2_observation('00000000-0000-4000-8000-000000000051','00000000-0000-4000-8000-000000000031');
select * from public.set_v2_source_production_approval('reykjavik-utbod-v2',false,'00000000-0000-4000-8000-000000000031','C3 release source neutralization');
select public.approve_v2_canary_release('00000000-0000-4000-8000-000000000051','00000000-0000-4000-8000-000000000031','release integration approval');
select public.release_v2_canary('00000000-0000-4000-8000-000000000051','00000000-0000-4000-8000-000000000031','release integration');
select public.c3_assert((select status='open' and phase_c_communication_hold and raw_payload->>'promotion_quarantine' is null and raw_payload->>'admin_report_status'='released_held' from public.opportunities where external_id='c3-release'),'release opens only under communication hold');

insert into public.opportunity_matches(company_id,opportunity_id,match_score,match_label,safety_status,alert_eligible,review_required)
select '00000000-0000-4000-8000-000000000032',id,90,'strong','needs_review',false,true from public.opportunities where external_id='c3-release';
do $$ begin
  insert into public.report_items(opportunity_id) select id from public.opportunities where external_id='c3-release';
  raise exception 'held report item unexpectedly inserted';
exception when others then if sqlerrm <> 'V2_PHASE_C_DOWNSTREAM_LINK_BLOCKED' then raise; end if; end $$;
do $$ begin
  insert into public.company_opportunity_sends(company_id,opportunity_id,channel)
  select '00000000-0000-4000-8000-000000000032',id,'report' from public.opportunities where external_id='c3-release';
  raise exception 'held send unexpectedly inserted';
exception when others then if sqlerrm <> 'V2_PHASE_C_DOWNSTREAM_LINK_BLOCKED' then raise; end if; end $$;

select public.disable_released_v2_canary('00000000-0000-4000-8000-000000000051','00000000-0000-4000-8000-000000000031','post-release integration disable');
select public.c3_assert((select status='hidden' and phase_c_communication_hold and phase_c_disabled_at is not null from public.opportunities where external_id='c3-release'),'post-release disable hides but preserves opportunity');
select public.c3_assert((select safety_status='hidden' and not alert_eligible from public.opportunity_matches m join public.opportunities o on o.id=m.opportunity_id where o.external_id='c3-release'),'disable hides related matches');
select public.c3_assert((select count(*)>=6 from public.v2_phase_c_events),'lifecycle events recorded');
do $$ begin update public.v2_phase_c_events set reason='tampered'; raise exception 'event update unexpectedly succeeded'; exception when others then if sqlerrm <> 'V2_PHASE_C_EVENT_LOG_APPEND_ONLY' then raise; end if; end $$;
rollback;

-- Persistent setup for the shell-level two-session race check.
select public.c3_insert_candidate('00000000-0000-4000-8000-000000000061','00000000-0000-4000-8000-000000000062','c3-race-a','C3-RACE');
select public.c3_insert_candidate('00000000-0000-4000-8000-000000000063','00000000-0000-4000-8000-000000000062','c3-race-b','C3-RACE');
