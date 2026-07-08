alter table public.companies
  add column if not exists auto_ai_review_enabled boolean not null default false;

create index if not exists companies_auto_ai_review_enabled_idx
  on public.companies(auto_ai_review_enabled);
