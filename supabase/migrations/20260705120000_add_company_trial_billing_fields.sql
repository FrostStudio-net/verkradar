alter table public.companies
  add column if not exists plan text not null default 'trial',
  add column if not exists trial_started_at timestamptz not null default now(),
  add column if not exists trial_ends_at timestamptz not null default (now() + interval '14 days'),
  add column if not exists billing_status text not null default 'not_started';

update public.companies
set
  plan = coalesce(nullif(plan, ''), 'trial'),
  trial_started_at = coalesce(trial_started_at, created_at, now()),
  trial_ends_at = coalesce(trial_ends_at, coalesce(created_at, now()) + interval '14 days'),
  billing_status = coalesce(nullif(billing_status, ''), 'not_started')
where
  plan is null
  or plan = ''
  or trial_started_at is null
  or trial_ends_at is null
  or billing_status is null
  or billing_status = '';

alter table public.companies
  alter column plan set default 'trial',
  alter column trial_started_at set default now(),
  alter column trial_ends_at set default (now() + interval '14 days'),
  alter column billing_status set default 'not_started',
  alter column plan set not null,
  alter column trial_started_at set not null,
  alter column trial_ends_at set not null,
  alter column billing_status set not null;
