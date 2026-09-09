-- Production data repair: remove only the obsolete customer-context ownership
-- link between the VerkRadar admin and the retained RafFix company.
do $$
declare
  target_company_id constant uuid := '13e99301-931a-4e7b-9193-16ec719282a2';
  admin_user_id constant uuid := '99d1a651-77f9-4cbc-ac93-9b5de72192ce';
  pending_membership_id constant uuid := '51f0a36d-53db-4621-80e6-eeff8da03ad1';
  gardathjonusta_company_id constant uuid := 'cad6b69e-b021-447d-b637-31b2e8dbff2e';
  company_before jsonb;
  company_after jsonb;
  membership_before jsonb;
  admin_before jsonb;
  gardathjonusta_before jsonb;
  related_counts_before jsonb;
  related_counts_after jsonb;
  affected_rows integer;
begin
  select to_jsonb(companies)
  into company_before
  from public.companies
  where id = target_company_id
  for update;

  if company_before is null then
    raise notice 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_NOOP: target company is not present in this environment';
    return;
  end if;

  if company_before ->> 'owner_id' is null then
    raise notice 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_NOOP: target owner_id is already null';
    return;
  end if;

  if company_before ->> 'owner_id' <> admin_user_id::text then
    raise exception 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_BLOCKED: unexpected owner_id %', company_before ->> 'owner_id';
  end if;

  select to_jsonb(admin_users)
  into admin_before
  from public.admin_users
  where user_id = admin_user_id
  for share;

  if admin_before is null then
    raise exception 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_BLOCKED: admin authorization row is missing';
  end if;

  if not exists (
    select 1
    from auth.users
    where id = admin_user_id
      and lower(email) = 'kristjanjakob03@gmail.com'
      and email_confirmed_at is not null
      and banned_until is null
  ) then
    raise exception 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_BLOCKED: expected active admin Auth user was not found';
  end if;

  select to_jsonb(company_members)
  into membership_before
  from public.company_members
  where id = pending_membership_id
    and company_id = target_company_id
    and lower(email) = 'jonnni404@gmail.com'
    and role = 'owner'
    and status = 'invited'
    and user_id is null
  for share;

  if membership_before is null then
    raise exception 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_BLOCKED: expected pending RafFix invitation was not found';
  end if;

  if not exists (
    select 1 from auth.users where lower(email) = 'jonnni404@gmail.com'
  ) then
    raise exception 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_BLOCKED: invited Auth user was not found';
  end if;

  select to_jsonb(companies)
  into gardathjonusta_before
  from public.companies
  where id = gardathjonusta_company_id
    and company_name = 'Garðaþjónusta Reykjavíkur ehf.'
  for share;

  if gardathjonusta_before is null then
    raise exception 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_BLOCKED: Garðaþjónusta company was not found';
  end if;

  select jsonb_build_object(
    'members', (select count(*) from public.company_members where company_id = target_company_id),
    'services', (select count(*) from public.company_services where company_id = target_company_id),
    'keywords', (select count(*) from public.company_keywords where company_id = target_company_id),
    'locations', (select count(*) from public.company_locations where company_id = target_company_id),
    'reports', (select count(*) from public.reports where company_id = target_company_id),
    'matches', (select count(*) from public.opportunity_matches where company_id = target_company_id),
    'admin_match_decisions', (select count(*) from public.admin_match_decisions where company_id = target_company_id),
    'match_evaluation_labels', (select count(*) from public.match_evaluation_labels where company_id = target_company_id),
    'ai_reviews', (select count(*) from public.ai_match_reviews where company_id = target_company_id),
    'ai_usage', (select count(*) from public.ai_usage_log where company_id = target_company_id),
    'actions', (select count(*) from public.company_opportunity_actions where company_id = target_company_id),
    'sends', (select count(*) from public.company_opportunity_sends where company_id = target_company_id),
    'alert_subscriptions', (select count(*) from public.internal_match_alert_subscriptions where company_id = target_company_id),
    'profile_change_log', (select count(*) from public.company_profile_change_log where company_id = target_company_id),
    'trial_request_links', (select count(*) from public.trial_requests where converted_company_id = target_company_id)
  ) into related_counts_before;

  update public.companies
  set owner_id = null
  where id = target_company_id
    and owner_id = admin_user_id;

  get diagnostics affected_rows = row_count;
  if affected_rows <> 1 then
    raise exception 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_BLOCKED: expected one company update, got %', affected_rows;
  end if;

  select to_jsonb(companies)
  into company_after
  from public.companies
  where id = target_company_id;

  if company_after ->> 'owner_id' is not null
    or (company_before - 'owner_id' - 'updated_at') is distinct from (company_after - 'owner_id' - 'updated_at')
    or (company_after ->> 'updated_at')::timestamptz <= (company_before ->> 'updated_at')::timestamptz then
    raise exception 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_BLOCKED: company changes exceeded owner_id and its updated_at audit timestamp';
  end if;

  if (select to_jsonb(admin_users) from public.admin_users where user_id = admin_user_id)
      is distinct from admin_before then
    raise exception 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_BLOCKED: admin authorization changed';
  end if;

  if (select to_jsonb(company_members) from public.company_members where id = pending_membership_id)
      is distinct from membership_before then
    raise exception 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_BLOCKED: pending invitation changed';
  end if;

  if (select to_jsonb(companies) from public.companies where id = gardathjonusta_company_id)
      is distinct from gardathjonusta_before then
    raise exception 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_BLOCKED: Garðaþjónusta changed';
  end if;

  select jsonb_build_object(
    'members', (select count(*) from public.company_members where company_id = target_company_id),
    'services', (select count(*) from public.company_services where company_id = target_company_id),
    'keywords', (select count(*) from public.company_keywords where company_id = target_company_id),
    'locations', (select count(*) from public.company_locations where company_id = target_company_id),
    'reports', (select count(*) from public.reports where company_id = target_company_id),
    'matches', (select count(*) from public.opportunity_matches where company_id = target_company_id),
    'admin_match_decisions', (select count(*) from public.admin_match_decisions where company_id = target_company_id),
    'match_evaluation_labels', (select count(*) from public.match_evaluation_labels where company_id = target_company_id),
    'ai_reviews', (select count(*) from public.ai_match_reviews where company_id = target_company_id),
    'ai_usage', (select count(*) from public.ai_usage_log where company_id = target_company_id),
    'actions', (select count(*) from public.company_opportunity_actions where company_id = target_company_id),
    'sends', (select count(*) from public.company_opportunity_sends where company_id = target_company_id),
    'alert_subscriptions', (select count(*) from public.internal_match_alert_subscriptions where company_id = target_company_id),
    'profile_change_log', (select count(*) from public.company_profile_change_log where company_id = target_company_id),
    'trial_request_links', (select count(*) from public.trial_requests where converted_company_id = target_company_id)
  ) into related_counts_after;

  if related_counts_after is distinct from related_counts_before then
    raise exception 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_BLOCKED: related row counts changed';
  end if;

  raise notice 'ADMIN_CUSTOMER_CONTEXT_CLEANUP_COMPLETE: company %, owner_id % -> null; related rows unchanged %',
    target_company_id, admin_user_id, related_counts_after;
end;
$$;
