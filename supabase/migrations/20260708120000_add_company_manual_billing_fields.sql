alter table public.companies
  add column if not exists selected_plan text,
  add column if not exists kennitala text,
  add column if not exists billing_email text,
  add column if not exists contact_name text,
  add column if not exists phone text,
  add column if not exists address text;

update public.companies
set
  selected_plan = coalesce(nullif(selected_plan, ''), nullif(plan, ''), 'basic'),
  billing_email = coalesce(nullif(billing_email, ''), contact_email),
  billing_status = coalesce(nullif(billing_status, ''), 'trial'),
  trial_started_at = coalesce(trial_started_at, created_at, now()),
  trial_ends_at = coalesce(trial_ends_at, coalesce(created_at, now()) + interval '14 days')
where selected_plan is null
  or selected_plan = ''
  or billing_email is null
  or billing_email = ''
  or billing_status is null
  or billing_status = ''
  or trial_started_at is null
  or trial_ends_at is null;

alter table public.companies
  alter column selected_plan set default 'basic',
  alter column billing_status set default 'trial',
  alter column billing_email set default '';
