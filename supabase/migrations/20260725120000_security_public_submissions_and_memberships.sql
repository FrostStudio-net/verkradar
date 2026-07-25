-- Prevent invite acceptance from becoming a cross-company privilege escalation.
-- RLS controls which row can be activated; column grants control what can change.
revoke update on public.company_members from public, anon, authenticated;
grant update (user_id, status, accepted_at, revoked_at, updated_at)
  on public.company_members to authenticated;

drop policy if exists "Invited users activate own memberships" on public.company_members;
create policy "Invited users activate own memberships"
  on public.company_members for update to authenticated
  using (
    status = 'invited'
    and user_id is null
    and email_normalized = lower(coalesce(auth.jwt() ->> 'email', ''))
  )
  with check (
    status = 'active'
    and user_id = auth.uid()
    and accepted_at is not null
    and revoked_at is null
    and email_normalized = lower(coalesce(auth.jwt() ->> 'email', ''))
  );

-- RLS protects the company row, while column grants protect admin/billing fields on it.
revoke update on public.companies from public, anon, authenticated;
grant update (
  company_name,
  contact_email,
  kennitala,
  billing_email,
  contact_name,
  phone,
  address,
  website,
  industry,
  base_location,
  service_areas,
  willing_to_travel,
  national_projects,
  remote_projects,
  minimum_project_value_for_travel,
  min_project_value,
  max_project_value,
  allow_unknown_value,
  report_frequency,
  report_day,
  deadline_reminders,
  include_low_confidence,
  auto_alert_mode
) on public.companies to authenticated;

-- Public submissions now go through the rate-limited public-form-submit function.
drop policy if exists "Anyone can submit trial requests" on public.trial_requests;
drop policy if exists "Anyone can submit contact requests" on public.contact_requests;
revoke insert on public.trial_requests from public, anon, authenticated;
revoke insert on public.contact_requests from public, anon, authenticated;

-- Enforce one company per converted trial request even under concurrent admin calls.
alter table public.companies
  add column if not exists source_trial_request_id uuid
  references public.trial_requests(id) on delete set null;
create unique index if not exists companies_source_trial_request_id_key
  on public.companies(source_trial_request_id)
  where source_trial_request_id is not null;
create unique index if not exists companies_kennitala_normalized_key
  on public.companies ((regexp_replace(kennitala, '[^0-9]', '', 'g')))
  where length(regexp_replace(coalesce(kennitala, ''), '[^0-9]', '', 'g')) > 0;

create table if not exists public.public_submission_rate_limits (
  bucket text not null,
  key_hash text not null,
  window_started_at timestamptz not null default now(),
  request_count integer not null default 0 check (request_count >= 0),
  primary key (bucket, key_hash)
);

alter table public.public_submission_rate_limits enable row level security;
revoke all on public.public_submission_rate_limits from public, anon, authenticated;

create or replace function public.consume_public_submission_rate_limit(
  p_bucket text,
  p_key_hash text,
  p_limit integer,
  p_window_seconds integer
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  allowed boolean := false;
begin
  if length(coalesce(p_bucket, '')) not between 1 and 100
    or length(coalesce(p_key_hash, '')) not between 32 and 128
    or p_limit not between 1 and 1000
    or p_window_seconds not between 1 and 604800 then
    return false;
  end if;

  insert into public.public_submission_rate_limits (
    bucket,
    key_hash,
    window_started_at,
    request_count
  ) values (
    p_bucket,
    p_key_hash,
    now(),
    1
  )
  on conflict (bucket, key_hash) do update
  set
    window_started_at = case
      when public.public_submission_rate_limits.window_started_at
        <= now() - (p_window_seconds * interval '1 second') then now()
      else public.public_submission_rate_limits.window_started_at
    end,
    request_count = case
      when public.public_submission_rate_limits.window_started_at
        <= now() - (p_window_seconds * interval '1 second') then 1
      else public.public_submission_rate_limits.request_count + 1
    end
  returning request_count <= p_limit into allowed;

  return coalesce(allowed, false);
end;
$$;

revoke all on function public.consume_public_submission_rate_limit(text, text, integer, integer)
  from public, anon, authenticated;
grant execute on function public.consume_public_submission_rate_limit(text, text, integer, integer)
  to service_role;

notify pgrst, 'reload schema';
