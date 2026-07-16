-- Link admin-created trial/customer companies to customer auth accounts via the existing
-- company_members access model. If the auth user already exists, activate the membership
-- immediately. Otherwise keep it invited so the user can claim it after email confirmation/login
-- with the same address.

with companies_with_contact as (
  select
    companies.id as company_id,
    trim(companies.contact_email) as email,
    lower(trim(companies.contact_email)) as email_normalized,
    companies.created_at
  from public.companies companies
  where nullif(trim(companies.contact_email), '') is not null
), matched_users as (
  select distinct on (companies_with_contact.company_id)
    companies_with_contact.company_id,
    companies_with_contact.email,
    companies_with_contact.email_normalized,
    companies_with_contact.created_at,
    users.id as user_id
  from companies_with_contact
  left join auth.users users
    on lower(users.email) = companies_with_contact.email_normalized
  order by companies_with_contact.company_id, users.created_at asc nulls last
)
insert into public.company_members (
  company_id,
  user_id,
  email,
  email_normalized,
  role,
  status,
  invited_at,
  accepted_at,
  created_at,
  updated_at
)
select
  matched_users.company_id,
  matched_users.user_id,
  matched_users.email,
  matched_users.email_normalized,
  'owner',
  case when matched_users.user_id is null then 'invited' else 'active' end,
  coalesce(matched_users.created_at, now()),
  case when matched_users.user_id is null then null else now() end,
  now(),
  now()
from matched_users
where not exists (
  select 1
  from public.company_members existing
  where existing.company_id = matched_users.company_id
    and existing.email_normalized = matched_users.email_normalized
)
on conflict (company_id, email_normalized) do nothing;

with owner_candidates as (
  select distinct on (companies.id)
    companies.id as company_id,
    users.id as user_id
  from public.companies companies
  join auth.users users
    on lower(users.email) = lower(trim(companies.contact_email))
  where companies.owner_id is null
    and nullif(trim(companies.contact_email), '') is not null
  order by companies.id, users.created_at asc
)
update public.companies companies
set owner_id = owner_candidates.user_id
from owner_candidates
where companies.id = owner_candidates.company_id
  and not exists (
    select 1
    from public.companies other_company
    where other_company.owner_id = owner_candidates.user_id
      and other_company.id <> companies.id
  );

notify pgrst, 'reload schema';
