-- Create the Fagurverk internal trial profile only. This is a company-scoped
-- setup: no external contact, invite, trial request, notification, report,
-- AI review, or shared-data mutation is performed.
do $$
declare
  target_company_id constant uuid := '5fd8ec2e-9be4-4a64-b0f0-1c9cc12c9e9b';
  membership_id constant uuid := '2bcf2a91-4f2e-4b9a-a4b7-f7c93a9ac0a5';
  internal_user_id constant uuid := 'f61e7065-6492-4e9c-9dbb-4f7986ac6bfd';
  internal_email constant text := 'jonnni404@gmail.com';
  protected_ids constant uuid[] := array[
    'cad6b69e-b021-447d-b637-31b2e8dbff2e'::uuid,
    '13e99301-931a-4e7b-9193-16ec719282a2'::uuid,
    '701bfc6b-1349-4a2d-942c-488f25168f37'::uuid
  ];
  protected_before jsonb;
  shared_before jsonb;
  affected_rows integer;
begin
  if exists (select 1 from public.companies where id = target_company_id or lower(company_name) = 'fagurverk ehf.') then
    if exists (
      select 1 from public.companies
      where id = target_company_id
        and company_name = 'Fagurverk ehf.'
        and contact_email = internal_email
    ) then
      raise notice 'INTERNAL_FAGURVERK_TRIAL_NOOP: expected internal test company already exists';
      return;
    end if;
    raise exception 'INTERNAL_FAGURVERK_TRIAL_BLOCKED: conflicting Fagurverk company exists';
  end if;

  if not exists (
    select 1 from auth.users
    where id = internal_user_id
      and lower(email) = internal_email
      and email_confirmed_at is not null
      and banned_until is null
  ) then
    raise exception 'INTERNAL_FAGURVERK_TRIAL_BLOCKED: expected active internal Auth user is unavailable';
  end if;

  if exists (select 1 from public.admin_users where user_id = internal_user_id) then
    raise exception 'INTERNAL_FAGURVERK_TRIAL_BLOCKED: internal test owner unexpectedly has an admin role';
  end if;

  if exists (select 1 from public.company_members where company_id = target_company_id or id = membership_id) then
    raise exception 'INTERNAL_FAGURVERK_TRIAL_BLOCKED: target membership identifiers are already in use';
  end if;

  select coalesce(jsonb_agg(to_jsonb(companies) order by id), '[]'::jsonb)
  into protected_before
  from public.companies where id = any(protected_ids);
  if jsonb_array_length(protected_before) <> 3
     or (select count(*) from public.opportunity_matches where company_id = protected_ids[1]) <> 3 then
    raise exception 'INTERNAL_FAGURVERK_TRIAL_BLOCKED: protected companies or Garðaþjónusta matches differ from audit';
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
    target_company_id, null, 'Fagurverk ehf.', internal_email, null,
    internal_email, null, 'Internal test profile', '571-8060',
    'Smiðshöfði 21, 110 Reykjavík', 'https://www.fagurverk.is/',
    'Construction', 'basic', 'basic', 'trial', now(), now() + interval '14 days',
    null, 'Reykjavík', array['Reykjavík', 'Höfuðborgarsvæðið']::text[],
    true, false, false, null, null, null, true, 'weekly', 'monday', true,
    false, 50, 'dashboard_only', false,
    'Internal matching test profile. Public company contact: fagurverk@fagurverk.is. Do not contact the prospect.'
  );
  get diagnostics affected_rows = row_count;
  if affected_rows <> 1 then
    raise exception 'INTERNAL_FAGURVERK_TRIAL_BLOCKED: expected one company insert, got %', affected_rows;
  end if;

  insert into public.company_members (
    id, company_id, user_id, email, email_normalized, role, status,
    invited_at, accepted_at, revoked_at, token_hash, expires_at, invited_by
  ) values (
    membership_id, target_company_id, internal_user_id, internal_email,
    internal_email, 'owner', 'active', now(), now(), null, null, null, null
  );

  insert into public.company_services (company_id, service)
  select target_company_id, service from unnest(array[
    'jarðvinna', 'jarðvegsskipti', 'lagnavinna', 'drenlagnir', 'fyllingar',
    'hellulagnir', 'hleðslur', 'kantar', 'stígar', 'lóðavinna',
    'yfirborðsfrágangur', 'kjarnaborun', 'snjóbræðsla', 'múrvinna',
    'snjómokstur', 'hálkuvarnir', 'söltun', 'söndun'
  ]::text[]) service;
  get diagnostics affected_rows = row_count;
  if affected_rows <> 18 then
    raise exception 'INTERNAL_FAGURVERK_TRIAL_BLOCKED: expected 18 services, got %', affected_rows;
  end if;

  insert into public.company_keywords (company_id, keyword, type)
  select target_company_id, keyword, 'include' from unnest(array[
    'jarðvinna', 'jarðvegsskipti', 'lagnir', 'dren', 'drenlagnir',
    'hellulögn', 'hellulagnir', 'lóð', 'lóðavinna', 'yfirborðsfrágangur',
    'kantar', 'stígar', 'fyllingar', 'snjómokstur', 'vetrarþjónusta',
    'hálkuvarnir', 'söltun', 'söndun'
  ]::text[]) keyword;
  get diagnostics affected_rows = row_count;
  if affected_rows <> 18 then
    raise exception 'INTERNAL_FAGURVERK_TRIAL_BLOCKED: expected 18 include keywords, got %', affected_rows;
  end if;

  insert into public.company_locations (company_id, location)
  select target_company_id, location from unnest(array[
    'Reykjavík', 'Höfuðborgarsvæðið'
  ]::text[]) location;
  get diagnostics affected_rows = row_count;
  if affected_rows <> 2 then
    raise exception 'INTERNAL_FAGURVERK_TRIAL_BLOCKED: expected two locations, got %', affected_rows;
  end if;

  if (select count(*) from public.companies where id = target_company_id and owner_id is null
      and contact_email = internal_email and billing_email = internal_email
      and notification_email is null and source_trial_request_id is null
      and national_projects is false and willing_to_travel is true
      and auto_alert_mode = 'dashboard_only' and auto_ai_review_enabled is false) <> 1
     or (select count(*) from public.company_members where id = membership_id
         and company_id = target_company_id and user_id = internal_user_id
         and status = 'active' and role = 'owner' and token_hash is null and invited_by is null) <> 1
     or (select count(*) from public.company_services where company_id = target_company_id) <> 18
     or (select count(*) from public.company_keywords where company_id = target_company_id and type = 'include') <> 18
     or exists (select 1 from public.company_keywords where company_id = target_company_id and type = 'exclude')
     or (select count(*) from public.company_locations where company_id = target_company_id) <> 2
     or exists (select 1 from public.company_locations where company_id = target_company_id and lower(location) in ('allt landið', 'all iceland'))
     or exists (select 1 from public.opportunity_matches where company_id = target_company_id)
     or exists (select 1 from public.reports where company_id = target_company_id)
     or exists (select 1 from public.company_opportunity_sends where company_id = target_company_id)
     or exists (select 1 from public.ai_match_reviews where company_id = target_company_id)
     or exists (select 1 from public.ai_usage_log where company_id = target_company_id)
     or exists (select 1 from public.internal_match_alert_subscriptions where company_id = target_company_id)
     or exists (select 1 from public.internal_match_alert_outbox where company_id = target_company_id) then
    raise exception 'INTERNAL_FAGURVERK_TRIAL_BLOCKED: created profile or zero-side-effect state failed verification';
  end if;

  if (select coalesce(jsonb_agg(to_jsonb(companies) order by id), '[]'::jsonb)
      from public.companies where id = any(protected_ids)) is distinct from protected_before
     or (select count(*) from public.opportunity_matches where company_id = protected_ids[1]) <> 3 then
    raise exception 'INTERNAL_FAGURVERK_TRIAL_BLOCKED: protected company state changed';
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
    raise exception 'INTERNAL_FAGURVERK_TRIAL_BLOCKED: shared, report, send, AI, scheduler, or alert state changed';
  end if;

  raise notice 'INTERNAL_FAGURVERK_TRIAL_CREATED: company %, active internal membership %, services 18, include keywords 18, exclude keywords 0, locations 2, threshold 50, AI off, dashboard-only alerts', target_company_id, membership_id;
end;
$$;
