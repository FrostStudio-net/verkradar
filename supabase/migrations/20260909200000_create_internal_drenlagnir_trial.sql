-- Create a Drenlagnir profile for internal matching tests only. The existing
-- internal Auth user receives direct active access; no trial request, invite
-- token, notification address, report, subscription, or outbound send is made.
do $$
declare
  target_company_id constant uuid := '41941a6f-8ffc-46b9-8562-8982bf49d4b6';
  membership_id constant uuid := '9349a62e-e36d-41cb-b519-bc75198f822d';
  internal_user_id constant uuid := 'b255d03c-9c3f-42d8-ad8e-9fe24b5fc49d';
  internal_email constant text := 'pitlanex@gmail.com';
  forbidden_email constant text := 'ihagar@ihagar.is';
  protected_ids constant uuid[] := array[
    'cad6b69e-b021-447d-b637-31b2e8dbff2e'::uuid,
    '13e99301-931a-4e7b-9193-16ec719282a2'::uuid,
    '701bfc6b-1349-4a2d-942c-488f25168f37'::uuid
  ];
  protected_before jsonb;
  shared_before jsonb;
  affected_rows integer;
begin
  if exists (select 1 from public.companies where id = target_company_id or lower(company_name) = 'drenlagnir ehf.') then
    if exists (
      select 1 from public.companies
      where id = target_company_id
        and company_name = 'Drenlagnir ehf.'
        and contact_email = internal_email
    ) then
      raise notice 'INTERNAL_DRENLAGNIR_TRIAL_NOOP: expected internal test company already exists';
      return;
    end if;
    raise exception 'INTERNAL_DRENLAGNIR_TRIAL_BLOCKED: conflicting Drenlagnir company exists';
  end if;

  if not exists (
    select 1 from auth.users
    where id = internal_user_id
      and lower(email) = internal_email
      and email_confirmed_at is not null
      and banned_until is null
  ) then
    raise exception 'INTERNAL_DRENLAGNIR_TRIAL_BLOCKED: expected active internal Auth user is unavailable';
  end if;

  if exists (select 1 from public.admin_users where user_id = internal_user_id) then
    raise exception 'INTERNAL_DRENLAGNIR_TRIAL_BLOCKED: internal test owner unexpectedly has an admin role';
  end if;

  if exists (select 1 from auth.users where lower(email) = forbidden_email)
    or exists (select 1 from public.company_members where email_normalized = forbidden_email)
    or exists (select 1 from public.trial_requests where lower(email) = forbidden_email)
    or exists (
      select 1 from public.companies
      where lower(coalesce(contact_email, '')) = forbidden_email
         or lower(coalesce(billing_email, '')) = forbidden_email
         or lower(coalesce(notification_email, '')) = forbidden_email
    ) then
    raise exception 'INTERNAL_DRENLAGNIR_TRIAL_BLOCKED: forbidden prospect email reappeared in onboarding or access data';
  end if;

  if exists (
    select 1 from public.company_members
    where company_id = target_company_id
       or id = membership_id
  ) then
    raise exception 'INTERNAL_DRENLAGNIR_TRIAL_BLOCKED: target membership identifiers are already in use';
  end if;

  select coalesce(jsonb_agg(to_jsonb(companies) order by id), '[]'::jsonb)
  into protected_before
  from public.companies
  where id = any(protected_ids);

  if jsonb_array_length(protected_before) <> 3
    or (select count(*) from public.opportunity_matches where company_id = 'cad6b69e-b021-447d-b637-31b2e8dbff2e') <> 3 then
    raise exception 'INTERNAL_DRENLAGNIR_TRIAL_BLOCKED: protected companies or Garðaþjónusta matches differ from audit';
  end if;

  select jsonb_build_object(
    'sources', (select count(*) from public.sources),
    'opportunities', (select count(*) from public.opportunities),
    'provenance', (select count(*) from public.opportunity_ingestion_provenance),
    'automation_settings', (select count(*) from public.automation_settings),
    'cron_jobs', (select count(*) from cron.job),
    'alert_outbox', (select count(*) from public.internal_match_alert_outbox),
    'reports', (select count(*) from public.reports),
    'sends', (select count(*) from public.company_opportunity_sends),
    'ai_reviews', (select count(*) from public.ai_match_reviews),
    'ai_usage', (select count(*) from public.ai_usage_log)
  ) into shared_before;

  insert into public.companies (
    id, owner_id, company_name, contact_email, notification_email,
    billing_email, kennitala, contact_name, phone, address, website,
    industry, plan, selected_plan, billing_status, trial_started_at,
    trial_ends_at, source_trial_request_id, base_location, service_areas,
    willing_to_travel, national_projects, remote_projects,
    minimum_project_value_for_travel, min_project_value, max_project_value,
    allow_unknown_value, report_frequency, report_day, deadline_reminders,
    include_low_confidence, minimum_relevance_threshold, auto_alert_mode,
    auto_ai_review_enabled, internal_admin_notes
  ) values (
    target_company_id, null, 'Drenlagnir ehf.', internal_email, null,
    internal_email, '551216-0200', 'Arnor Hauksson', '6923212',
    'Vitastíg 12', null, 'Construction', 'basic', 'basic', 'trial',
    now(), now() + interval '14 days', null, null,
    array['Reykjavík', 'Höfuðborgarsvæðið', 'Suðurnes']::text[],
    false, false, false, null, null, null, true, 'weekly', 'monday',
    true, false, 50, 'dashboard_only', false,
    'Internal matching test profile. Do not contact the prospect.'
  );

  get diagnostics affected_rows = row_count;
  if affected_rows <> 1 then
    raise exception 'INTERNAL_DRENLAGNIR_TRIAL_BLOCKED: expected one company insert, got %', affected_rows;
  end if;

  insert into public.company_members (
    id, company_id, user_id, email, email_normalized, role, status,
    invited_at, accepted_at, revoked_at, token_hash, expires_at, invited_by
  ) values (
    membership_id, target_company_id, internal_user_id, internal_email,
    internal_email, 'owner', 'active', now(), now(), null, null, null, null
  );

  insert into public.company_services (company_id, service)
  select target_company_id, service
  from unnest(array[
    'drenlagnir', 'endurnýjun skólplagna', 'fóðrun skólplagna',
    'jarðvinna', 'gröfuþjónusta', 'kjarnaborun', 'steypusögun',
    'snjómokstur', 'hálkuvarnir'
  ]::text[]) service;

  get diagnostics affected_rows = row_count;
  if affected_rows <> 9 then
    raise exception 'INTERNAL_DRENLAGNIR_TRIAL_BLOCKED: expected nine services, got %', affected_rows;
  end if;

  insert into public.company_keywords (company_id, keyword, type)
  select target_company_id, keyword, 'include'
  from unnest(array[
    'dren', 'drenlagnir', 'skólp', 'skólplagnir', 'fráveita',
    'jarðvinna', 'gröfuþjónusta', 'snjómokstur', 'hálkuvarnir'
  ]::text[]) keyword;

  get diagnostics affected_rows = row_count;
  if affected_rows <> 9 then
    raise exception 'INTERNAL_DRENLAGNIR_TRIAL_BLOCKED: expected nine include keywords, got %', affected_rows;
  end if;

  insert into public.company_locations (company_id, location)
  select target_company_id, location
  from unnest(array['Reykjavík', 'Höfuðborgarsvæðið', 'Suðurnes']::text[]) location;

  get diagnostics affected_rows = row_count;
  if affected_rows <> 3 then
    raise exception 'INTERNAL_DRENLAGNIR_TRIAL_BLOCKED: expected three locations, got %', affected_rows;
  end if;

  if (select count(*) from public.companies where id = target_company_id and owner_id is null and notification_email is null and source_trial_request_id is null and national_projects is false and auto_alert_mode = 'dashboard_only') <> 1
    or (select count(*) from public.company_members where id = membership_id and company_id = target_company_id and user_id = internal_user_id and status = 'active' and role = 'owner' and token_hash is null and invited_by is null) <> 1
    or (select count(*) from public.company_services where company_id = target_company_id) <> 9
    or (select count(*) from public.company_keywords where company_id = target_company_id and type = 'include') <> 9
    or (select count(*) from public.company_keywords where company_id = target_company_id and type = 'exclude') <> 0
    or (select count(*) from public.company_locations where company_id = target_company_id) <> 3
    or exists (select 1 from public.company_locations where company_id = target_company_id and lower(location) in ('allt landið', 'all iceland'))
    or exists (select 1 from public.opportunity_matches where company_id = target_company_id)
    or exists (select 1 from public.reports where company_id = target_company_id)
    or exists (select 1 from public.company_opportunity_sends where company_id = target_company_id)
    or exists (select 1 from public.ai_match_reviews where company_id = target_company_id)
    or exists (select 1 from public.ai_usage_log where company_id = target_company_id)
    or exists (select 1 from public.internal_match_alert_subscriptions where company_id = target_company_id)
    or exists (select 1 from public.internal_match_alert_outbox where company_id = target_company_id) then
    raise exception 'INTERNAL_DRENLAGNIR_TRIAL_BLOCKED: created profile or zero-side-effect state failed verification';
  end if;

  if (select coalesce(jsonb_agg(to_jsonb(companies) order by id), '[]'::jsonb) from public.companies where id = any(protected_ids))
      is distinct from protected_before
    or (select count(*) from public.opportunity_matches where company_id = 'cad6b69e-b021-447d-b637-31b2e8dbff2e') <> 3 then
    raise exception 'INTERNAL_DRENLAGNIR_TRIAL_BLOCKED: protected company state changed';
  end if;

  if (select jsonb_build_object(
        'sources', (select count(*) from public.sources),
        'opportunities', (select count(*) from public.opportunities),
        'provenance', (select count(*) from public.opportunity_ingestion_provenance),
        'automation_settings', (select count(*) from public.automation_settings),
        'cron_jobs', (select count(*) from cron.job),
        'alert_outbox', (select count(*) from public.internal_match_alert_outbox),
        'reports', (select count(*) from public.reports),
        'sends', (select count(*) from public.company_opportunity_sends),
        'ai_reviews', (select count(*) from public.ai_match_reviews),
        'ai_usage', (select count(*) from public.ai_usage_log)
      )) is distinct from shared_before then
    raise exception 'INTERNAL_DRENLAGNIR_TRIAL_BLOCKED: shared, report, send, AI, scheduler, or alert state changed';
  end if;

  raise notice 'INTERNAL_DRENLAGNIR_TRIAL_CREATED: company %, active internal membership %, services 9, include keywords 9, exclude keywords 0, locations 3, threshold 50, dashboard-only alerts',
    target_company_id, membership_id;
end;
$$;
