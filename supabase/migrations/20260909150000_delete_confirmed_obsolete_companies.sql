-- Production data repair: delete only the five owner-confirmed obsolete/test
-- companies and their company-scoped dependent rows. Shared data, Auth users,
-- retained companies, and historical trial requests are guarded explicitly.
do $$
declare
  target_ids constant uuid[] := array[
    '9ad07562-acce-4af7-808d-60533cabda92'::uuid,
    'de334fed-d610-45b7-9e58-f36511ed6b22'::uuid,
    '128d9a63-0ab2-4631-8089-9543ff517c11'::uuid,
    'f39687ce-57c9-4289-a867-89b1968f8931'::uuid,
    '43615696-f571-440b-ba83-81bfef867517'::uuid
  ];
  protected_ids constant uuid[] := array[
    'cad6b69e-b021-447d-b637-31b2e8dbff2e'::uuid,
    '13e99301-931a-4e7b-9193-16ec719282a2'::uuid,
    '701bfc6b-1349-4a2d-942c-488f25168f37'::uuid
  ];
  retained_auth_ids constant uuid[] := array[
    '9123ee13-a3b1-4dbe-89f4-3ef51590fcdd'::uuid,
    '1d587d54-f129-4383-8a96-b8244bf841ca'::uuid,
    '99d1a651-77f9-4cbc-ac93-9b5de72192ce'::uuid
  ];
  trial_ids constant uuid[] := array[
    '885db806-0df1-499f-bbd7-811977eac2bd'::uuid,
    'ec1e2b3a-4d20-4904-8ceb-b83123881fca'::uuid
  ];
  target_count integer;
  affected_rows integer;
  expected record;
  actual_counts jsonb;
  expected_counts jsonb;
  deletion_audit jsonb := '{}'::jsonb;
  report_ids uuid[];
  trials_before jsonb;
  trials_after jsonb;
  protected_before jsonb;
  auth_before jsonb;
  admin_before jsonb;
  shared_before jsonb;
begin
  select count(*) into target_count
  from public.companies
  where id = any(target_ids);

  if target_count = 0 then
    raise notice 'OBSOLETE_COMPANY_CLEANUP_NOOP: none of the five allowlisted companies exists in this environment';
    return;
  end if;

  if target_count <> 5 then
    raise exception 'OBSOLETE_COMPANY_CLEANUP_BLOCKED: expected all five allowlisted companies, found %', target_count;
  end if;

  if exists (
    select 1
    from (values
      ('9ad07562-acce-4af7-808d-60533cabda92'::uuid, 'JJ Pípulagnir'::text, '9123ee13-a3b1-4dbe-89f4-3ef51590fcdd'::uuid),
      ('de334fed-d610-45b7-9e58-f36511ed6b22'::uuid, 'Klakkur Verktakar'::text, null::uuid),
      ('128d9a63-0ab2-4631-8089-9543ff517c11'::uuid, 'mingle'::text, null::uuid),
      ('f39687ce-57c9-4289-a867-89b1968f8931'::uuid, 'ÞS Verktakar'::text, null::uuid),
      ('43615696-f571-440b-ba83-81bfef867517'::uuid, 'RafFix ehf.'::text, null::uuid)
    ) as allowed(id, company_name, owner_id)
    left join public.companies companies using (id)
    where companies.id is null
      or companies.company_name is distinct from allowed.company_name
      or companies.owner_id is distinct from allowed.owner_id
  ) then
    raise exception 'OBSOLETE_COMPANY_CLEANUP_BLOCKED: target identity, name, or owner_id differs from the audited state';
  end if;

  -- Fail closed if a new direct company FK has appeared without being audited.
  if exists (
    select 1
    from pg_constraint constraints
    join pg_class child on child.oid = constraints.conrelid
    join pg_namespace namespace on namespace.oid = child.relnamespace
    where constraints.contype = 'f'
      and constraints.confrelid = 'public.companies'::regclass
      and namespace.nspname = 'public'
      and child.relname not in (
        'admin_match_decisions', 'ai_match_reviews', 'ai_usage_log',
        'company_keywords', 'company_locations', 'company_members',
        'company_opportunity_actions', 'company_opportunity_sends',
        'company_profile_change_log', 'company_services',
        'internal_match_alert_subscriptions', 'match_evaluation_labels',
        'opportunity_matches', 'reports', 'trial_requests'
      )
  ) then
    raise exception 'OBSOLETE_COMPANY_CLEANUP_BLOCKED: an unaudited direct company foreign key exists';
  end if;

  for expected in
    select * from (values
      ('9ad07562-acce-4af7-808d-60533cabda92'::uuid, 2, 14, 15, 1, 6, 10, 0, 0, 0, 2, 2, 2, 1, 0, 0, 2, 0, 0),
      ('de334fed-d610-45b7-9e58-f36511ed6b22'::uuid, 1, 8, 19, 2, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0),
      ('128d9a63-0ab2-4631-8089-9543ff517c11'::uuid, 1, 6, 1, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
      ('f39687ce-57c9-4289-a867-89b1968f8931'::uuid, 1, 6, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0),
      ('43615696-f571-440b-ba83-81bfef867517'::uuid, 1, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    ) as audited(
      company_id, members, services, keywords, locations, reports, report_items,
      matches, admin_decisions, evaluation_labels, ai_reviews, ai_usage,
      actions, sends, alert_subscriptions, alert_outbox, profile_changes,
      trial_links, outbox_match_links
    )
  loop
    select jsonb_build_object(
      'members', (select count(*) from public.company_members where company_id = expected.company_id),
      'services', (select count(*) from public.company_services where company_id = expected.company_id),
      'keywords', (select count(*) from public.company_keywords where company_id = expected.company_id),
      'locations', (select count(*) from public.company_locations where company_id = expected.company_id),
      'reports', (select count(*) from public.reports where company_id = expected.company_id),
      'report_items', (select count(*) from public.report_items items join public.reports reports on reports.id = items.report_id where reports.company_id = expected.company_id),
      'matches', (select count(*) from public.opportunity_matches where company_id = expected.company_id),
      'admin_decisions', (select count(*) from public.admin_match_decisions where company_id = expected.company_id),
      'evaluation_labels', (select count(*) from public.match_evaluation_labels where company_id = expected.company_id),
      'ai_reviews', (select count(*) from public.ai_match_reviews where company_id = expected.company_id),
      'ai_usage', (select count(*) from public.ai_usage_log where company_id = expected.company_id),
      'actions', (select count(*) from public.company_opportunity_actions where company_id = expected.company_id),
      'sends', (select count(*) from public.company_opportunity_sends where company_id = expected.company_id),
      'alert_subscriptions', (select count(*) from public.internal_match_alert_subscriptions where company_id = expected.company_id),
      'alert_outbox', (select count(*) from public.internal_match_alert_outbox where company_id = expected.company_id),
      'profile_changes', (select count(*) from public.company_profile_change_log where company_id = expected.company_id),
      'trial_links', (select count(*) from public.trial_requests where converted_company_id = expected.company_id),
      'outbox_match_links', (
        select count(*)
        from public.internal_match_alert_outbox outbox
        join public.opportunity_matches matches on matches.id = outbox.match_id
        where matches.company_id = expected.company_id
      )
    ) into actual_counts;

    expected_counts := jsonb_build_object(
      'members', expected.members, 'services', expected.services,
      'keywords', expected.keywords, 'locations', expected.locations,
      'reports', expected.reports, 'report_items', expected.report_items,
      'matches', expected.matches, 'admin_decisions', expected.admin_decisions,
      'evaluation_labels', expected.evaluation_labels,
      'ai_reviews', expected.ai_reviews, 'ai_usage', expected.ai_usage,
      'actions', expected.actions, 'sends', expected.sends,
      'alert_subscriptions', expected.alert_subscriptions,
      'alert_outbox', expected.alert_outbox,
      'profile_changes', expected.profile_changes,
      'trial_links', expected.trial_links,
      'outbox_match_links', expected.outbox_match_links
    );

    if actual_counts is distinct from expected_counts then
      raise exception 'OBSOLETE_COMPANY_CLEANUP_BLOCKED: dependent row drift for company %; expected %, found %',
        expected.company_id, expected_counts, actual_counts;
    end if;

    deletion_audit := deletion_audit || jsonb_build_object(expected.company_id::text, actual_counts);
  end loop;

  select coalesce(array_agg(id order by id), '{}'::uuid[])
  into report_ids
  from public.reports
  where company_id = any(target_ids);

  select coalesce(jsonb_agg(to_jsonb(trial_requests) order by id), '[]'::jsonb)
  into trials_before
  from public.trial_requests
  where id = any(trial_ids)
    and converted_company_id = any(target_ids);

  if jsonb_array_length(trials_before) <> 2 then
    raise exception 'OBSOLETE_COMPANY_CLEANUP_BLOCKED: expected two retained converted trial requests';
  end if;

  select coalesce(jsonb_agg(to_jsonb(companies) order by id), '[]'::jsonb)
  into protected_before
  from public.companies
  where id = any(protected_ids);

  if jsonb_array_length(protected_before) <> 3
    or (select count(*) from public.opportunity_matches where company_id = 'cad6b69e-b021-447d-b637-31b2e8dbff2e') <> 3 then
    raise exception 'OBSOLETE_COMPANY_CLEANUP_BLOCKED: protected companies or Garðaþjónusta match count differ from audit';
  end if;

  select coalesce(jsonb_agg(jsonb_build_object(
    'id', id,
    'email', lower(email),
    'confirmed', email_confirmed_at is not null,
    'banned', banned_until is not null
  ) order by id), '[]'::jsonb)
  into auth_before
  from auth.users
  where id = any(retained_auth_ids);

  if jsonb_array_length(auth_before) <> 3
    or exists (
      select 1 from auth.users
      where id = any(retained_auth_ids)
        and (email_confirmed_at is null or banned_until is not null)
    ) then
    raise exception 'OBSOLETE_COMPANY_CLEANUP_BLOCKED: retained Auth users differ from the audited active state';
  end if;

  select to_jsonb(admin_users) into admin_before
  from public.admin_users
  where user_id = '99d1a651-77f9-4cbc-ac93-9b5de72192ce'
  for share;

  if admin_before is null then
    raise exception 'OBSOLETE_COMPANY_CLEANUP_BLOCKED: VerkRadar admin authorization row is missing';
  end if;

  select jsonb_build_object(
    'sources', (select count(*) from public.sources),
    'opportunities', (select count(*) from public.opportunities),
    'provenance', (select count(*) from public.opportunity_ingestion_provenance),
    'automation_settings', (select count(*) from public.automation_settings),
    'cron_jobs', (select count(*) from cron.job),
    'alert_outbox', (select count(*) from public.internal_match_alert_outbox)
  ) into shared_before;

  delete from public.companies
  where id = any(target_ids);

  get diagnostics affected_rows = row_count;
  if affected_rows <> 5 then
    raise exception 'OBSOLETE_COMPANY_CLEANUP_BLOCKED: expected five company deletions, got %', affected_rows;
  end if;

  if exists (select 1 from public.companies where id = any(target_ids))
    or exists (select 1 from public.company_members where company_id = any(target_ids))
    or exists (select 1 from public.company_services where company_id = any(target_ids))
    or exists (select 1 from public.company_keywords where company_id = any(target_ids))
    or exists (select 1 from public.company_locations where company_id = any(target_ids))
    or exists (select 1 from public.reports where company_id = any(target_ids))
    or exists (select 1 from public.report_items where report_id = any(report_ids))
    or exists (select 1 from public.opportunity_matches where company_id = any(target_ids))
    or exists (select 1 from public.admin_match_decisions where company_id = any(target_ids))
    or exists (select 1 from public.match_evaluation_labels where company_id = any(target_ids))
    or exists (select 1 from public.ai_match_reviews where company_id = any(target_ids))
    or exists (select 1 from public.ai_usage_log where company_id = any(target_ids))
    or exists (select 1 from public.company_opportunity_actions where company_id = any(target_ids))
    or exists (select 1 from public.company_opportunity_sends where company_id = any(target_ids))
    or exists (select 1 from public.internal_match_alert_subscriptions where company_id = any(target_ids))
    or exists (select 1 from public.internal_match_alert_outbox where company_id = any(target_ids))
    or exists (select 1 from public.company_profile_change_log where company_id = any(target_ids)) then
    raise exception 'OBSOLETE_COMPANY_CLEANUP_BLOCKED: target company-scoped rows remain after cascading delete';
  end if;

  select coalesce(jsonb_agg(to_jsonb(trial_requests) order by id), '[]'::jsonb)
  into trials_after
  from public.trial_requests
  where id = any(trial_ids);

  if (
    select jsonb_agg(value - 'converted_company_id' order by value ->> 'id')
    from jsonb_array_elements(trials_after)
  ) is distinct from (
    select jsonb_agg(value - 'converted_company_id' order by value ->> 'id')
    from jsonb_array_elements(trials_before)
  ) or exists (
    select 1 from jsonb_array_elements(trials_after) row_data
    where row_data ->> 'converted_company_id' is not null
  ) then
    raise exception 'OBSOLETE_COMPANY_CLEANUP_BLOCKED: retained trial/audit history changed beyond converted_company_id -> null';
  end if;

  if (select coalesce(jsonb_agg(to_jsonb(companies) order by id), '[]'::jsonb) from public.companies where id = any(protected_ids))
      is distinct from protected_before
    or (select count(*) from public.opportunity_matches where company_id = 'cad6b69e-b021-447d-b637-31b2e8dbff2e') <> 3 then
    raise exception 'OBSOLETE_COMPANY_CLEANUP_BLOCKED: a protected company or Garðaþjónusta match count changed';
  end if;

  if (select coalesce(jsonb_agg(jsonb_build_object(
        'id', id, 'email', lower(email),
        'confirmed', email_confirmed_at is not null,
        'banned', banned_until is not null
      ) order by id), '[]'::jsonb) from auth.users where id = any(retained_auth_ids))
      is distinct from auth_before
    or (select to_jsonb(admin_users) from public.admin_users where user_id = '99d1a651-77f9-4cbc-ac93-9b5de72192ce')
      is distinct from admin_before then
    raise exception 'OBSOLETE_COMPANY_CLEANUP_BLOCKED: retained Auth users or admin authorization changed';
  end if;

  if (select jsonb_build_object(
        'sources', (select count(*) from public.sources),
        'opportunities', (select count(*) from public.opportunities),
        'provenance', (select count(*) from public.opportunity_ingestion_provenance),
        'automation_settings', (select count(*) from public.automation_settings),
        'cron_jobs', (select count(*) from cron.job),
        'alert_outbox', (select count(*) from public.internal_match_alert_outbox)
      )) is distinct from shared_before then
    raise exception 'OBSOLETE_COMPANY_CLEANUP_BLOCKED: shared data, scheduler, automation, or alert outbox counts changed';
  end if;

  raise notice 'OBSOLETE_COMPANY_CLEANUP_COMPLETE: deleted companies %, dependent row audit %, retained trial requests %, retained Auth users %',
    target_ids, deletion_audit, trial_ids, retained_auth_ids;
end;
$$;
