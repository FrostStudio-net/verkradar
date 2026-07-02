alter table public.reports
  add column if not exists archived_at timestamptz,
  add column if not exists archived_by uuid references auth.users(id);

create index if not exists reports_company_archived_idx
  on public.reports(company_id, archived_at);

alter table public.report_items
  add column if not exists match_reasons jsonb not null default '[]'::jsonb,
  add column if not exists risks jsonb not null default '[]'::jsonb;
