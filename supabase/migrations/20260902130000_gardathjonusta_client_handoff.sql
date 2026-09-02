-- Customer handoff hardening: keep billing admin-only, repair the customer
-- match-refresh trigger privilege boundary, consume invites once, and archive
-- Garðaþjónusta's unsent pre-launch reports without deleting audit history.

revoke update on public.companies from public, anon, authenticated;
grant update (
  company_name, contact_email, kennitala, billing_email, contact_name, phone,
  address, website, industry, base_location, service_areas, willing_to_travel,
  national_projects, remote_projects, minimum_project_value_for_travel,
  min_project_value, max_project_value, allow_unknown_value, report_frequency,
  report_day, deadline_reminders, include_low_confidence, auto_alert_mode
) on public.companies to authenticated;

create or replace function public.v2_phase_c_guard_downstream_link()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if new.opportunity_id is not null and (
    public.v2_phase_c_is_quarantined(new.opportunity_id)
    or (tg_table_name <> 'opportunity_matches' and public.v2_phase_c_is_restricted(new.opportunity_id))
  ) then
    raise exception 'V2_PHASE_C_DOWNSTREAM_LINK_BLOCKED';
  end if;
  return new;
end;
$$;

revoke all on function public.v2_phase_c_guard_downstream_link() from public, anon, authenticated;

create or replace function public.protect_company_member_claim_update()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if old.status = 'invited' and new.status = 'active' then
    if new.company_id is distinct from old.company_id
      or new.email_normalized is distinct from old.email_normalized
      or new.email is distinct from old.email
      or new.role is distinct from old.role
      or (new.token_hash is not null and new.token_hash is distinct from old.token_hash)
      or (new.expires_at is not null and new.expires_at is distinct from old.expires_at)
      or new.invited_by is distinct from old.invited_by then
      raise exception 'Company membership claim cannot change company, email, role, or invite token fields';
    end if;
    if new.token_hash is not null or new.expires_at is not null then
      raise exception 'Accepted company invite must consume its token';
    end if;
  end if;
  return new;
end;
$$;

update public.reports
set archived_at = coalesce(archived_at, now()),
    archived_by = coalesce(
      archived_by,
      (select au.id
       from auth.users au
       join public.admin_users ad on ad.user_id = au.id
       where lower(au.email) = 'kristjanjakob03@gmail.com'
       limit 1)
    )
where company_id = 'cad6b69e-b021-447d-b637-31b2e8dbff2e'
  and id in (
    '5719346c-e232-42b6-aba8-c200d885697c',
    '5f186460-fd14-4575-9a8d-f8f8d539584a',
    '1e89b5d8-2d0e-4af2-9a0b-b4f808674158',
    '4adc388b-edef-474d-8f1f-2b8d870a9cd3'
  )
  and sent_at is null;

notify pgrst, 'reload schema';
