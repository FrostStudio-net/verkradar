alter table public.companies
  alter column local_user_id drop not null;

alter table public.companies
  drop column if exists local_user_id;

alter table public.companies
  add column if not exists owner_id uuid references auth.users(id) on delete cascade;

drop index if exists public.companies_owner_id_idx;

alter table public.companies
  drop constraint if exists companies_owner_id_key;

alter table public.companies
  add constraint companies_owner_id_key unique (owner_id);
