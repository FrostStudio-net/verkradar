begin;

insert into auth.users(id)
values ('00000000-0000-4000-8000-000000000081')
on conflict do nothing;
insert into public.admin_users(user_id)
values ('00000000-0000-4000-8000-000000000081')
on conflict do nothing;

do $$
declare
  config_row public.v2_source_configs%rowtype;
  run_id_value uuid := '00000000-0000-4000-8000-000000000082';
  config_before jsonb;
  automation_before jsonb;
  table_counts_before jsonb;
  table_counts_after jsonb;
begin
  update public.automation_settings set value='false'
  where key in ('phase_c_production_enabled','phase_c_release_enabled');
  update public.v2_source_configs
  set mode='shadow', promotion_approved=false, production_shadow_enabled=true,
      production_canary_enabled=false, release_feature_enabled=false, release_approved=false
  where source_key='reykjavik-utbod-v2';

  if exists(select 1 from public.v2_ingestion_observations where approved_for_promotion or promoted_opportunity_id is not null or promotion_state='promoted')
    or exists(select 1 from public.opportunities where raw_payload->>'promotion_quarantine'='phase_c_canary')
    or exists(select 1 from public.v2_source_configs where mode='promote' or promotion_approved) then
    raise exception 'production canary toggle integration requires neutral fixture state';
  end if;

  select * into config_row from public.v2_source_configs where source_key='reykjavik-utbod-v2';
  insert into public.v2_ingestion_runs(
    id,source_config_id,mode,trigger_type,status,error_count,suspicious_zero_items,
    started_at,finished_at,created_at,details
  ) values (
    run_id_value,config_row.id,'shadow','shadow','succeeded',0,false,
    now()-interval '1 minute',now(),now(),'{}'
  );
  insert into public.v2_source_health(
    source_config_id,status,circuit_state,last_run_id,last_run_at,last_success_at,
    last_error_code,parser_health
  ) values (
    config_row.id,'healthy','closed',run_id_value,now(),now(),null,
    '{"suspicious_zero":false,"parser_errors":[]}'::jsonb
  ) on conflict(source_config_id) do update set
    status='healthy',circuit_state='closed',last_run_id=excluded.last_run_id,
    last_run_at=excluded.last_run_at,last_success_at=excluded.last_success_at,
    last_error_code=null,parser_health=excluded.parser_health;

  select to_jsonb(c)-'production_canary_enabled' into config_before
  from public.v2_source_configs c where c.id=config_row.id;
  select jsonb_object_agg(key,value) into automation_before
  from public.automation_settings where key<>'phase_c_production_enabled';
  select jsonb_build_object(
    'opportunities',(select count(*) from public.opportunities),
    'provenance',(select count(*) from public.opportunity_ingestion_provenance),
    'events',(select count(*) from public.v2_phase_c_events),
    'approved_observations',(select count(*) from public.v2_ingestion_observations where approved_for_promotion)
  ) into table_counts_before;

  perform public.set_reykjavik_production_canary_enabled(true,'00000000-0000-4000-8000-000000000081');

  if not public.v2_phase_c_flag('phase_c_production_enabled')
    or not (select production_canary_enabled from public.v2_source_configs where id=config_row.id) then
    raise exception 'enable did not set both canary flags';
  end if;
  if public.v2_phase_c_flag('phase_c_release_enabled')
    or (select release_feature_enabled or release_approved or promotion_approved or mode<>'shadow'
        from public.v2_source_configs where id=config_row.id) then
    raise exception 'enable changed a release, approval, or mode safety state';
  end if;
  if config_before is distinct from (
      select to_jsonb(c)-'production_canary_enabled' from public.v2_source_configs c where c.id=config_row.id
    ) then raise exception 'enable changed a source field other than production_canary_enabled'; end if;
  if automation_before is distinct from (
      select jsonb_object_agg(key,value) from public.automation_settings where key<>'phase_c_production_enabled'
    ) then raise exception 'enable changed an automation setting other than phase_c_production_enabled'; end if;

  select jsonb_build_object(
    'opportunities',(select count(*) from public.opportunities),
    'provenance',(select count(*) from public.opportunity_ingestion_provenance),
    'events',(select count(*) from public.v2_phase_c_events),
    'approved_observations',(select count(*) from public.v2_ingestion_observations where approved_for_promotion)
  ) into table_counts_after;
  if table_counts_before is distinct from table_counts_after then
    raise exception 'enable created a promotion, approval, opportunity, provenance, or event';
  end if;

  perform public.set_reykjavik_production_canary_enabled(false,'00000000-0000-4000-8000-000000000081');
  if public.v2_phase_c_flag('phase_c_production_enabled')
    or (select production_canary_enabled from public.v2_source_configs where id=config_row.id) then
    raise exception 'neutral disable did not clear both canary flags';
  end if;

  update public.v2_ingestion_runs set status='failed' where id=run_id_value;
  begin
    perform public.set_reykjavik_production_canary_enabled(true,'00000000-0000-4000-8000-000000000081');
    raise exception 'enable accepted a failed latest shadow run';
  exception when others then
    if sqlerrm <> 'V2_LATEST_REYKJAVIK_SHADOW_NOT_SUCCEEDED' then raise; end if;
  end;
  update public.v2_ingestion_runs set status='succeeded' where id=run_id_value;

  update public.v2_source_health set status='degraded' where source_config_id=config_row.id;
  begin
    perform public.set_reykjavik_production_canary_enabled(true,'00000000-0000-4000-8000-000000000081');
    raise exception 'enable accepted unhealthy source health';
  exception when others then
    if sqlerrm <> 'V2_REYKJAVIK_SOURCE_HEALTH_NOT_HEALTHY' then raise; end if;
  end;
  update public.v2_source_health set status='healthy' where source_config_id=config_row.id;

  update public.automation_settings set value='true' where key='phase_c_release_enabled';
  begin
    perform public.set_reykjavik_production_canary_enabled(true,'00000000-0000-4000-8000-000000000081');
    raise exception 'enable accepted an active release flag';
  exception when others then
    if sqlerrm <> 'V2_GLOBAL_RELEASE_MUST_REMAIN_DISABLED' then raise; end if;
  end;
  update public.automation_settings set value='false' where key='phase_c_release_enabled';

  perform public.set_reykjavik_production_canary_enabled(true,'00000000-0000-4000-8000-000000000081');
  insert into public.opportunities(
    source_id,external_id,title,status,raw_payload,procurement_stage,
    actionable_for_suppliers,classification_confidence,classification_reason,
    classified_by,classifier_version,requires_admin_review
  ) values(
    config_row.source_id,'toggle-block-fixture','Toggle block fixture','hidden',
    '{"promotion_quarantine":"phase_c_canary"}','open_competition',false,1,
    'Integration-only quarantine fixture','deterministic_rule','phase-c-toggle-test',false
  );
  begin
    perform public.set_reykjavik_production_canary_enabled(false,'00000000-0000-4000-8000-000000000081');
    raise exception 'disable did not block an active canary';
  exception when others then
    if sqlerrm <> 'V2_ACTIVE_CANARY_EXISTS' then raise; end if;
  end;
  if not public.v2_phase_c_flag('phase_c_production_enabled')
    or not (select production_canary_enabled from public.v2_source_configs where id=config_row.id) then
    raise exception 'blocked disable partially changed canary flags';
  end if;

  begin
    perform public.set_reykjavik_production_canary_enabled(true,'00000000-0000-4000-8000-000000000099');
    raise exception 'non-admin enable unexpectedly succeeded';
  exception when others then
    if sqlerrm <> 'V2_PRODUCTION_CANARY_ADMIN_REQUIRED' then raise; end if;
  end;
end;
$$;

rollback;
