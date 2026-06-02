alter table public.opportunities
  add column if not exists country_code text;

create index if not exists opportunities_country_code_idx
  on public.opportunities(country_code);

notify pgrst, 'reload schema';