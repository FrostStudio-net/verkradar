alter table public.company_services
  add column if not exists service text;

alter table public.company_locations
  add column if not exists location text;

alter table public.company_keywords
  add column if not exists type text;

alter table public.company_keywords
  drop constraint if exists company_keywords_type_check;

alter table public.company_keywords
  add constraint company_keywords_type_check check (type in ('include', 'exclude'));
