alter table public.opportunity_matches
  add column if not exists safety_status text not null default 'needs_review',
  add column if not exists safety_reasons text[] not null default '{}',
  add column if not exists alert_eligible boolean not null default false,
  add column if not exists review_required boolean not null default true,
  add column if not exists reviewed_at timestamptz,
  add column if not exists reviewed_by uuid references auth.users(id),
  add column if not exists review_note text;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'opportunity_matches_safety_status_check'
  ) then
    alter table public.opportunity_matches
      add constraint opportunity_matches_safety_status_check
      check (safety_status in ('auto_approved', 'needs_review', 'hidden'));
  end if;
end $$;

alter table public.companies
  add column if not exists auto_alert_mode text not null default 'auto_safe_only';

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'companies_auto_alert_mode_check'
  ) then
    alter table public.companies
      add constraint companies_auto_alert_mode_check
      check (auto_alert_mode in ('auto_safe_only', 'review_required', 'dashboard_only'));
  end if;
end $$;

create table if not exists public.company_opportunity_sends (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  opportunity_id uuid not null references public.opportunities(id) on delete cascade,
  sent_at timestamptz not null default now(),
  channel text not null check (channel in ('manual_email', 'automated_email', 'report')),
  sent_by uuid references auth.users(id),
  note text,
  created_at timestamptz not null default now(),
  unique (company_id, opportunity_id, channel)
);

create index if not exists company_opportunity_sends_company_idx
  on public.company_opportunity_sends(company_id);

create index if not exists company_opportunity_sends_opportunity_idx
  on public.company_opportunity_sends(opportunity_id);

alter table public.company_opportunity_sends enable row level security;

drop policy if exists "Owners read company opportunity sends" on public.company_opportunity_sends;
drop policy if exists "Admins manage company opportunity sends" on public.company_opportunity_sends;

create policy "Owners read company opportunity sends"
  on public.company_opportunity_sends
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.companies
      where companies.id = company_opportunity_sends.company_id
        and companies.owner_id = auth.uid()
    )
  );

create policy "Admins manage company opportunity sends"
  on public.company_opportunity_sends
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

update public.opportunity_matches as matches
set
  safety_status = 'hidden',
  safety_reasons = array['Hidden from customer reports by opportunity status or admin/source classification'],
  alert_eligible = false,
  review_required = false,
  reviewed_at = coalesce(reviewed_at, now()),
  review_note = coalesce(review_note, 'Automatically hidden by safety classification migration')
from public.opportunities as opportunities
where opportunities.id = matches.opportunity_id
  and (
    opportunities.status <> 'open'
    or lower(coalesce(opportunities.raw_payload->>'hidden_from_reports', 'false')) in ('true', '1', 'yes')
    or lower(coalesce(opportunities.raw_payload->>'is_demo', 'false')) in ('true', '1', 'yes')
    or lower(coalesce(opportunities.raw_payload->>'demo', 'false')) in ('true', '1', 'yes')
    or lower(coalesce(opportunities.raw_payload->>'is_duplicate', 'false')) in ('true', '1', 'yes')
    or coalesce(opportunities.raw_payload->>'duplicate_of', '') <> ''
    or lower(coalesce(opportunities.raw_payload->>'admin_report_status', '')) in ('hidden', 'hide', 'noise', 'deleted')
    or lower(coalesce(opportunities.raw_payload->>'opportunity_intent', '')) in ('news_context', 'not_opportunity', 'stale_opportunity')
    or lower(coalesce(opportunities.raw_payload->>'quality_status', '')) in ('news_context', 'not_opportunity')
    or lower(coalesce(opportunities.raw_payload->>'stale_status', '')) = 'stale_or_expired'
    or lower(coalesce(opportunities.raw_payload->>'tender_state', '')) in ('tender_awarded', 'awarded', 'already_awarded', 'already_tendered')
  );

delete from public.opportunity_matches as matches
using public.opportunities as opportunities
where opportunities.id = matches.opportunity_id
  and matches.safety_status = 'hidden'
  and (
    opportunities.status <> 'open'
    or lower(coalesce(opportunities.raw_payload->>'hidden_from_reports', 'false')) in ('true', '1', 'yes')
    or lower(coalesce(opportunities.raw_payload->>'is_demo', 'false')) in ('true', '1', 'yes')
    or lower(coalesce(opportunities.raw_payload->>'demo', 'false')) in ('true', '1', 'yes')
    or lower(coalesce(opportunities.raw_payload->>'is_duplicate', 'false')) in ('true', '1', 'yes')
    or coalesce(opportunities.raw_payload->>'duplicate_of', '') <> ''
    or lower(coalesce(opportunities.raw_payload->>'admin_report_status', '')) in ('hidden', 'hide', 'noise', 'deleted')
    or lower(coalesce(opportunities.raw_payload->>'opportunity_intent', '')) in ('news_context', 'not_opportunity', 'stale_opportunity')
    or lower(coalesce(opportunities.raw_payload->>'quality_status', '')) in ('news_context', 'not_opportunity')
    or lower(coalesce(opportunities.raw_payload->>'stale_status', '')) = 'stale_or_expired'
    or lower(coalesce(opportunities.raw_payload->>'tender_state', '')) in ('tender_awarded', 'awarded', 'already_awarded', 'already_tendered')
  );

notify pgrst, 'reload schema';
