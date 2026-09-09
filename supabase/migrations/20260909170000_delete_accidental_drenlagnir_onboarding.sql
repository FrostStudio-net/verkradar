-- Production data repair: remove the single accidental Drenlagnir onboarding,
-- including its linked trial request, without touching Auth or shared data.
do $$
declare
  target_company_id constant uuid := '82abe80c-e084-4f36-a4c5-c617e971f5c2';
  target_trial_id constant uuid := '3c9fede6-7c63-433a-b373-2218638a72c6';
  target_membership_id constant uuid := '4a8e2b59-4bf9-407f-877b-37df5f5e3e6a';
  target_email constant text := 'ihagar@ihagar.is';
  admin_user_id constant uuid := '99d1a651-77f9-4cbc-ac93-9b5de72192ce';
  protected_ids constant uuid[] := array[
    'cad6b69e-b021-447d-b637-31b2e8dbff2e'::uuid,
    '13e99301-931a-4e7b-9193-16ec719282a2'::uuid,
    '701bfc6b-1349-4a2d-942c-488f25168f37'::uuid
  ];
  company_before jsonb;
  trial_before jsonb;
  membership_before jsonb;
  protected_before jsonb;
  admin_before jsonb;
  shared_before jsonb;
  dependency_counts jsonb;
  report_ids uuid[];
  affected_rows integer;
begin
  select to_jsonb(companies)
  into company_before
  from public.companies
  where id = target_company_id;

  select to_jsonb(trial_requests)
  into trial_before
  from public.trial_requests
  where id = target_trial_id;

  if company_before is null and trial_before is null then
    raise notice 'ACCIDENTAL_DRENLAGNIR_CLEANUP_NOOP: target company and trial request are absent in this environment';
    return;
  end if;

  if company_before is null or trial_before is null then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: partial target state detected';
  end if;

  if company_before ->> 'company_name' <> 'Drenlagnir ehf.'
    or lower(company_before ->> 'contact_email') <> target_email
    or lower(company_before ->> 'billing_email') <> target_email
    or company_before ->> 'owner_id' is not null
    or company_before ->> 'source_trial_request_id' <> target_trial_id::text
    or company_before ->> 'billing_status' <> 'trial'
    or company_before ->> 'selected_plan' <> 'basic' then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: company identity or profile differs from the audited state';
  end if;

  if lower(trial_before ->> 'email') <> target_email
    or trial_before ->> 'company_name' <> 'Drenlagnir ehf.'
    or trial_before ->> 'status' <> 'converted'
    or trial_before ->> 'converted_company_id' <> target_company_id::text then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: linked trial request differs from the audited state';
  end if;

  select to_jsonb(company_members)
  into membership_before
  from public.company_members
  where id = target_membership_id
    and company_id = target_company_id;

  if membership_before is null
    or lower(membership_before ->> 'email') <> target_email
    or membership_before ->> 'status' <> 'revoked'
    or membership_before ->> 'role' <> 'owner'
    or membership_before ->> 'user_id' is not null
    or membership_before ->> 'accepted_at' is not null
    or membership_before ->> 'token_hash' is not null then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: invitation/access state differs from the audited revoked, unaccepted state';
  end if;

  -- A newly-created Auth identity or use of the email elsewhere changes the
  -- safety classification and must stop this cleanup.
  if exists (select 1 from auth.users where lower(email) = target_email)
    or exists (select 1 from auth.identities where lower(coalesce(email, '')) = target_email)
    or exists (select 1 from public.admin_users admins join auth.users users on users.id = admins.user_id where lower(users.email) = target_email)
    or exists (select 1 from public.companies where id <> target_company_id and (lower(coalesce(contact_email, '')) = target_email or lower(coalesce(billing_email, '')) = target_email or lower(coalesce(notification_email, '')) = target_email))
    or exists (select 1 from public.company_members where company_id <> target_company_id and email_normalized = target_email)
    or exists (select 1 from public.trial_requests where id <> target_trial_id and lower(email) = target_email)
    or exists (select 1 from public.contact_requests where lower(email) = target_email)
    or exists (select 1 from public.company_profile_change_log where lower(coalesce(changed_by_email, '')) = target_email) then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: Auth account, role, or email data exists outside the accidental setup';
  end if;

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
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: an unaudited direct company foreign key exists';
  end if;

  select jsonb_build_object(
    'company_members', (select count(*) from public.company_members where company_id = target_company_id),
    'company_services', (select count(*) from public.company_services where company_id = target_company_id),
    'company_keywords', (select count(*) from public.company_keywords where company_id = target_company_id),
    'company_locations', (select count(*) from public.company_locations where company_id = target_company_id),
    'opportunity_matches', (select count(*) from public.opportunity_matches where company_id = target_company_id),
    'reports', (select count(*) from public.reports where company_id = target_company_id),
    'report_items', (select count(*) from public.report_items items join public.reports reports on reports.id = items.report_id where reports.company_id = target_company_id),
    'company_opportunity_actions', (select count(*) from public.company_opportunity_actions where company_id = target_company_id),
    'company_opportunity_sends', (select count(*) from public.company_opportunity_sends where company_id = target_company_id),
    'ai_match_reviews', (select count(*) from public.ai_match_reviews where company_id = target_company_id),
    'ai_usage_log', (select count(*) from public.ai_usage_log where company_id = target_company_id),
    'company_profile_change_log', (select count(*) from public.company_profile_change_log where company_id = target_company_id),
    'admin_match_decisions', (select count(*) from public.admin_match_decisions where company_id = target_company_id),
    'match_evaluation_labels', (select count(*) from public.match_evaluation_labels where company_id = target_company_id),
    'internal_match_alert_subscriptions', (select count(*) from public.internal_match_alert_subscriptions where company_id = target_company_id),
    'internal_match_alert_outbox', (select count(*) from public.internal_match_alert_outbox where company_id = target_company_id),
    'trial_requests', (select count(*) from public.trial_requests where id = target_trial_id and converted_company_id = target_company_id)
  ) into dependency_counts;

  if dependency_counts is distinct from jsonb_build_object(
    'company_members', 1,
    'company_services', 9,
    'company_keywords', 9,
    'company_locations', 4,
    'opportunity_matches', 0,
    'reports', 0,
    'report_items', 0,
    'company_opportunity_actions', 0,
    'company_opportunity_sends', 0,
    'ai_match_reviews', 0,
    'ai_usage_log', 0,
    'company_profile_change_log', 0,
    'admin_match_decisions', 0,
    'match_evaluation_labels', 0,
    'internal_match_alert_subscriptions', 0,
    'internal_match_alert_outbox', 0,
    'trial_requests', 1
  ) then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: dependent row counts differ from audit: %', dependency_counts;
  end if;

  select coalesce(array_agg(id order by id), '{}'::uuid[])
  into report_ids
  from public.reports
  where company_id = target_company_id;

  select coalesce(jsonb_agg(to_jsonb(companies) order by id), '[]'::jsonb)
  into protected_before
  from public.companies
  where id = any(protected_ids);

  if jsonb_array_length(protected_before) <> 3
    or (select count(*) from public.opportunity_matches where company_id = 'cad6b69e-b021-447d-b637-31b2e8dbff2e') <> 3 then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: protected companies or Garðaþjónusta matches differ from audit';
  end if;

  select to_jsonb(admin_users)
  into admin_before
  from public.admin_users
  where user_id = admin_user_id;

  if admin_before is null
    or not exists (
      select 1 from auth.users
      where id = admin_user_id
        and lower(email) = 'kristjanjakob03@gmail.com'
        and email_confirmed_at is not null
        and banned_until is null
    ) then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: active VerkRadar admin authorization is missing';
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
  where id = target_company_id;

  get diagnostics affected_rows = row_count;
  if affected_rows <> 1 then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: expected one company deletion, got %', affected_rows;
  end if;

  delete from public.trial_requests
  where id = target_trial_id
    and lower(email) = target_email
    and converted_company_id is null;

  get diagnostics affected_rows = row_count;
  if affected_rows <> 1 then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: expected one linked trial deletion after FK nulling, got %', affected_rows;
  end if;

  if exists (select 1 from public.companies where id = target_company_id)
    or exists (select 1 from public.company_members where company_id = target_company_id or id = target_membership_id)
    or exists (select 1 from public.company_services where company_id = target_company_id)
    or exists (select 1 from public.company_keywords where company_id = target_company_id)
    or exists (select 1 from public.company_locations where company_id = target_company_id)
    or exists (select 1 from public.opportunity_matches where company_id = target_company_id)
    or exists (select 1 from public.reports where company_id = target_company_id)
    or exists (select 1 from public.report_items where report_id = any(report_ids))
    or exists (select 1 from public.company_opportunity_actions where company_id = target_company_id)
    or exists (select 1 from public.company_opportunity_sends where company_id = target_company_id)
    or exists (select 1 from public.ai_match_reviews where company_id = target_company_id)
    or exists (select 1 from public.ai_usage_log where company_id = target_company_id)
    or exists (select 1 from public.company_profile_change_log where company_id = target_company_id)
    or exists (select 1 from public.admin_match_decisions where company_id = target_company_id)
    or exists (select 1 from public.match_evaluation_labels where company_id = target_company_id)
    or exists (select 1 from public.internal_match_alert_subscriptions where company_id = target_company_id)
    or exists (select 1 from public.internal_match_alert_outbox where company_id = target_company_id)
    or exists (select 1 from public.trial_requests where id = target_trial_id or lower(email) = target_email) then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: accidental onboarding rows remain';
  end if;

  if exists (select 1 from auth.users where lower(email) = target_email)
    or exists (select 1 from auth.identities where lower(coalesce(email, '')) = target_email) then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: unexpected Auth identity appeared';
  end if;

  if (select coalesce(jsonb_agg(to_jsonb(companies) order by id), '[]'::jsonb) from public.companies where id = any(protected_ids))
      is distinct from protected_before
    or (select count(*) from public.opportunity_matches where company_id = 'cad6b69e-b021-447d-b637-31b2e8dbff2e') <> 3 then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: protected company state changed';
  end if;

  if (select to_jsonb(admin_users) from public.admin_users where user_id = admin_user_id)
      is distinct from admin_before then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: admin authorization changed';
  end if;

  if (select jsonb_build_object(
        'sources', (select count(*) from public.sources),
        'opportunities', (select count(*) from public.opportunities),
        'provenance', (select count(*) from public.opportunity_ingestion_provenance),
        'automation_settings', (select count(*) from public.automation_settings),
        'cron_jobs', (select count(*) from cron.job),
        'alert_outbox', (select count(*) from public.internal_match_alert_outbox)
      )) is distinct from shared_before then
    raise exception 'ACCIDENTAL_DRENLAGNIR_CLEANUP_BLOCKED: shared data, scheduler, automation, or alert state changed';
  end if;

  raise notice 'ACCIDENTAL_DRENLAGNIR_CLEANUP_COMPLETE: deleted company %, trial request %, dependency audit %, Auth user deletion not applicable (no matching Auth user)',
    target_company_id, target_trial_id, dependency_counts;
end;
$$;
