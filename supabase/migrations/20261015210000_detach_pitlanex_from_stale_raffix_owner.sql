-- Remove the stale legacy owner link that makes the Pitlanex identity a member
-- of both RafFix and Drenlagnir. Preserve both companies and every related row.
do $$
declare
  pitlanex_user_id constant uuid := 'b255d03c-9c3f-42d8-ad8e-9fe24b5fc49d';
  stale_raffix_id constant uuid := '701bfc6b-1349-4a2d-942c-488f25168f37';
  retained_raffix_id constant uuid := '13e99301-931a-4e7b-9193-16ec719282a2';
  drenlagnir_id constant uuid := '41941a6f-8ffc-46b9-8562-8982bf49d4b6';
  drenlagnir_membership_id constant uuid := '9349a62e-e36d-41cb-b519-bc75198f822d';
  protected_company_ids constant uuid[] := array[
    'cad6b69e-b021-447d-b637-31b2e8dbff2e'::uuid,
    '5fd8ec2e-9be4-4a64-b0f0-1c9cc12c9e9b'::uuid,
    'e6f1c1d3-691d-48a7-bd38-5b82bc0402a8'::uuid
  ];
  company_before jsonb;
  company_after jsonb;
  drenlagnir_before jsonb;
  membership_before jsonb;
  retained_raffix_before jsonb;
  retained_raffix_members_before jsonb;
  protected_companies_before jsonb;
  admin_rows_before jsonb;
  related_counts_before jsonb;
  related_counts_after jsonb;
  affected_rows integer;
begin
  select to_jsonb(companies)
  into company_before
  from public.companies
  where id = stale_raffix_id
  for update;

  if company_before is null then
    raise notice 'PITLANEX_TENANT_ISOLATION_NOOP: audited stale RafFix company is absent in this environment';
    return;
  end if;

  if not exists (
    select 1
    from auth.users
    where id = pitlanex_user_id
      and lower(email) = 'pitlanex@gmail.com'
      and email_confirmed_at is not null
      and banned_until is null
  ) then
    raise exception 'PITLANEX_TENANT_ISOLATION_BLOCKED: expected active Pitlanex Auth user was not found';
  end if;

  select to_jsonb(companies)
  into drenlagnir_before
  from public.companies
  where id = drenlagnir_id
    and company_name = 'Drenlagnir ehf.'
  for share;

  select to_jsonb(company_members)
  into membership_before
  from public.company_members
  where id = drenlagnir_membership_id
    and company_id = drenlagnir_id
    and user_id = pitlanex_user_id
    and email_normalized = 'pitlanex@gmail.com'
    and role = 'owner'
    and status = 'active'
    and revoked_at is null
  for share;

  if drenlagnir_before is null or membership_before is null then
    raise exception 'PITLANEX_TENANT_ISOLATION_BLOCKED: intended Drenlagnir company or active membership differs from the audit';
  end if;

  if (select count(*) from public.company_members where user_id = pitlanex_user_id and status = 'active') <> 1 then
    raise exception 'PITLANEX_TENANT_ISOLATION_BLOCKED: Pitlanex has an unexpected active membership set';
  end if;

  if company_before ->> 'company_name' <> 'RafFix ehf.'
    or company_before ->> 'contact_email' <> 'owner@raffix.is'
    or company_before ->> 'billing_status' <> 'not_started'
    or company_before ->> 'notification_email' is not null
    or company_before ->> 'source_trial_request_id' is not null
    or (company_before ->> 'trial_ends_at')::timestamptz >= now() then
    raise exception 'PITLANEX_TENANT_ISOLATION_BLOCKED: target RafFix identity or inactive lifecycle differs from the audit';
  end if;

  if company_before ->> 'owner_id' is null then
    if exists (select 1 from public.companies where owner_id = pitlanex_user_id) then
      raise exception 'PITLANEX_TENANT_ISOLATION_BLOCKED: Pitlanex still owns an unexpected company';
    end if;
    raise notice 'PITLANEX_TENANT_ISOLATION_NOOP: stale owner link is already clear and Drenlagnir membership is active';
    return;
  end if;

  if company_before ->> 'owner_id' <> pitlanex_user_id::text
    or (select count(*) from public.companies where owner_id = pitlanex_user_id) <> 1 then
    raise exception 'PITLANEX_TENANT_ISOLATION_BLOCKED: Pitlanex ownership set differs from the audited stale link';
  end if;

  if exists (select 1 from public.company_members where company_id = stale_raffix_id)
    or exists (select 1 from public.opportunity_matches where company_id = stale_raffix_id)
    or exists (select 1 from public.internal_match_alert_subscriptions where company_id = stale_raffix_id)
    or exists (select 1 from public.trial_requests where converted_company_id = stale_raffix_id) then
    raise exception 'PITLANEX_TENANT_ISOLATION_BLOCKED: stale RafFix gained a member, current match, alert subscription, or trial link';
  end if;

  select to_jsonb(companies)
  into retained_raffix_before
  from public.companies
  where id = retained_raffix_id
    and company_name = 'RafFix ehf.'
    and owner_id is null
  for share;

  select coalesce(jsonb_agg(to_jsonb(company_members) order by id), '[]'::jsonb)
  into retained_raffix_members_before
  from public.company_members
  where company_id = retained_raffix_id;

  if retained_raffix_before is null
    or jsonb_array_length(retained_raffix_members_before) <> 1
    or not exists (
      select 1
      from public.company_members
      where company_id = retained_raffix_id
        and status = 'invited'
        and user_id is null
        and expires_at < now()
    ) then
    raise exception 'PITLANEX_TENANT_ISOLATION_BLOCKED: retained ownerless RafFix state differs from the audit';
  end if;

  select coalesce(jsonb_agg(to_jsonb(companies) order by id), '[]'::jsonb)
  into protected_companies_before
  from public.companies
  where id = any(protected_company_ids);

  if jsonb_array_length(protected_companies_before) <> 3 then
    raise exception 'PITLANEX_TENANT_ISOLATION_BLOCKED: protected Garðaþjónusta, Fagurverk, or 270 company is missing';
  end if;

  select coalesce(jsonb_agg(to_jsonb(admin_users) order by user_id), '[]'::jsonb)
  into admin_rows_before
  from public.admin_users;

  select jsonb_build_object(
    'members', (select count(*) from public.company_members where company_id = stale_raffix_id),
    'services', (select count(*) from public.company_services where company_id = stale_raffix_id),
    'keywords', (select count(*) from public.company_keywords where company_id = stale_raffix_id),
    'locations', (select count(*) from public.company_locations where company_id = stale_raffix_id),
    'reports', (select count(*) from public.reports where company_id = stale_raffix_id),
    'matches', (select count(*) from public.opportunity_matches where company_id = stale_raffix_id),
    'actions', (select count(*) from public.company_opportunity_actions where company_id = stale_raffix_id),
    'sends', (select count(*) from public.company_opportunity_sends where company_id = stale_raffix_id),
    'ai_reviews', (select count(*) from public.ai_match_reviews where company_id = stale_raffix_id),
    'ai_usage', (select count(*) from public.ai_usage_log where company_id = stale_raffix_id),
    'admin_match_decisions', (select count(*) from public.admin_match_decisions where company_id = stale_raffix_id),
    'match_evaluation_labels', (select count(*) from public.match_evaluation_labels where company_id = stale_raffix_id),
    'alert_subscriptions', (select count(*) from public.internal_match_alert_subscriptions where company_id = stale_raffix_id),
    'profile_change_log', (select count(*) from public.company_profile_change_log where company_id = stale_raffix_id),
    'trial_request_links', (select count(*) from public.trial_requests where converted_company_id = stale_raffix_id)
  ) into related_counts_before;

  update public.companies
  set owner_id = null
  where id = stale_raffix_id
    and owner_id = pitlanex_user_id;

  get diagnostics affected_rows = row_count;
  if affected_rows <> 1 then
    raise exception 'PITLANEX_TENANT_ISOLATION_BLOCKED: expected one owner-link update, got %', affected_rows;
  end if;

  select to_jsonb(companies)
  into company_after
  from public.companies
  where id = stale_raffix_id;

  if company_after ->> 'owner_id' is not null
    or (company_before - 'owner_id' - 'updated_at') is distinct from (company_after - 'owner_id' - 'updated_at') then
    raise exception 'PITLANEX_TENANT_ISOLATION_BLOCKED: stale RafFix changes exceeded owner_id and updated_at';
  end if;

  if exists (select 1 from public.companies where owner_id = pitlanex_user_id)
    or (select count(*) from public.company_members where user_id = pitlanex_user_id and status = 'active') <> 1
    or (select to_jsonb(companies) from public.companies where id = drenlagnir_id) is distinct from drenlagnir_before
    or (select to_jsonb(company_members) from public.company_members where id = drenlagnir_membership_id) is distinct from membership_before
    or (select to_jsonb(companies) from public.companies where id = retained_raffix_id) is distinct from retained_raffix_before
    or (select coalesce(jsonb_agg(to_jsonb(company_members) order by id), '[]'::jsonb) from public.company_members where company_id = retained_raffix_id) is distinct from retained_raffix_members_before
    or (select coalesce(jsonb_agg(to_jsonb(companies) order by id), '[]'::jsonb) from public.companies where id = any(protected_company_ids)) is distinct from protected_companies_before
    or (select coalesce(jsonb_agg(to_jsonb(admin_users) order by user_id), '[]'::jsonb) from public.admin_users) is distinct from admin_rows_before then
    raise exception 'PITLANEX_TENANT_ISOLATION_BLOCKED: membership, retained tenant, protected company, or admin state changed';
  end if;

  select jsonb_build_object(
    'members', (select count(*) from public.company_members where company_id = stale_raffix_id),
    'services', (select count(*) from public.company_services where company_id = stale_raffix_id),
    'keywords', (select count(*) from public.company_keywords where company_id = stale_raffix_id),
    'locations', (select count(*) from public.company_locations where company_id = stale_raffix_id),
    'reports', (select count(*) from public.reports where company_id = stale_raffix_id),
    'matches', (select count(*) from public.opportunity_matches where company_id = stale_raffix_id),
    'actions', (select count(*) from public.company_opportunity_actions where company_id = stale_raffix_id),
    'sends', (select count(*) from public.company_opportunity_sends where company_id = stale_raffix_id),
    'ai_reviews', (select count(*) from public.ai_match_reviews where company_id = stale_raffix_id),
    'ai_usage', (select count(*) from public.ai_usage_log where company_id = stale_raffix_id),
    'admin_match_decisions', (select count(*) from public.admin_match_decisions where company_id = stale_raffix_id),
    'match_evaluation_labels', (select count(*) from public.match_evaluation_labels where company_id = stale_raffix_id),
    'alert_subscriptions', (select count(*) from public.internal_match_alert_subscriptions where company_id = stale_raffix_id),
    'profile_change_log', (select count(*) from public.company_profile_change_log where company_id = stale_raffix_id),
    'trial_request_links', (select count(*) from public.trial_requests where converted_company_id = stale_raffix_id)
  ) into related_counts_after;

  if related_counts_after is distinct from related_counts_before then
    raise exception 'PITLANEX_TENANT_ISOLATION_BLOCKED: retained RafFix related data changed';
  end if;

  raise notice 'PITLANEX_TENANT_ISOLATION_COMPLETE: user % now resolves only through active Drenlagnir membership; RafFix data retained %',
    pitlanex_user_id, related_counts_after;
end;
$$;
