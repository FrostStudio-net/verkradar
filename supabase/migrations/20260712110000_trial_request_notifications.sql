alter table public.trial_requests
  add column if not exists notification_sent_at timestamptz,
  add column if not exists notification_started_at timestamptz,
  add column if not exists notification_error text;

drop policy if exists "Anyone can submit trial requests" on public.trial_requests;

create policy "Anyone can submit trial requests"
  on public.trial_requests
  for insert
  to anon, authenticated
  with check (
    status = 'new'
    and converted_company_id is null
    and notification_sent_at is null
    and notification_started_at is null
    and notification_error is null
    and length(trim(company_name)) > 0
    and length(trim(contact_name)) > 0
    and length(trim(email)) > 0
    and length(trim(services)) > 0
    and length(trim(locations)) > 0
  );
