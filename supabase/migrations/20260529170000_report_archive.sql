create extension if not exists pgcrypto;

create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete cascade,
  title text,
  period_start date,
  period_end date,
  summary text,
  text_content text,
  html_content text,
  status text default 'draft',
  created_at timestamptz default now(),
  sent_at timestamptz
);

create table if not exists public.report_items (
  id uuid primary key default gen_random_uuid(),
  report_id uuid references public.reports(id) on delete cascade,
  opportunity_id uuid references public.opportunities(id) on delete cascade,
  match_score integer,
  sort_order integer,
  created_at timestamptz default now()
);

create index if not exists reports_company_id_idx on public.reports(company_id);
create index if not exists report_items_report_id_idx on public.report_items(report_id);

alter table public.reports enable row level security;
alter table public.report_items enable row level security;

drop policy if exists "Owners manage reports" on public.reports;
drop policy if exists "Owners manage report items" on public.report_items;

create policy "Owners manage reports"
  on public.reports
  for all
  to authenticated
  using (
    exists (
      select 1 from public.companies
      where companies.id = reports.company_id
        and companies.owner_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.companies
      where companies.id = reports.company_id
        and companies.owner_id = auth.uid()
    )
  );

create policy "Owners manage report items"
  on public.report_items
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.reports
      join public.companies on companies.id = reports.company_id
      where reports.id = report_items.report_id
        and companies.owner_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.reports
      join public.companies on companies.id = reports.company_id
      where reports.id = report_items.report_id
        and companies.owner_id = auth.uid()
    )
  );
