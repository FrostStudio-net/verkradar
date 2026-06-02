alter table public.companies
  add column if not exists base_location text,
  add column if not exists service_areas text[] not null default '{}',
  add column if not exists willing_to_travel boolean not null default false,
  add column if not exists national_projects boolean not null default false,
  add column if not exists remote_projects boolean not null default false,
  add column if not exists minimum_project_value_for_travel numeric;

create table if not exists public.source_status (
  source_id uuid primary key references public.sources(id) on delete cascade,
  status text not null default 'planned',
  last_checked_at timestamptz,
  last_success_at timestamptz,
  last_error text,
  fetched_count integer not null default 0,
  inserted_count integer not null default 0,
  updated_count integer not null default 0,
  active_opportunities_count integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.source_status enable row level security;

drop policy if exists "Admins manage source status" on public.source_status;
drop policy if exists "Authenticated users read source status" on public.source_status;

create policy "Authenticated users read source status"
  on public.source_status
  for select
  to authenticated
  using (true);

create policy "Admins manage source status"
  on public.source_status
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.admin_users
      where admin_users.user_id = auth.uid()
    )
  );

with seeded_sources(name, source_type, base_url, notes) as (
  values
    ('Útboðsvefur.is', 'utbodsvefur', 'https://utbodsvefur.is', 'Icelandic public tender portal. Importer planned.'),
    ('TED Iceland/Nordic', 'eu_ted', 'https://ted.europa.eu', 'TED importer for Iceland/Nordic notices.'),
    ('Reykjavík tender portal', 'municipal_website', 'https://reykjavik.is', 'Municipal tender coverage planned.'),
    ('Ríkiskaup / island.is procurement', 'tender_portal', 'https://island.is', 'Central public procurement source coverage planned.'),
    ('Orkuveita/Reykjavik Energy tender portal', 'public_institution_page', 'https://www.or.is', 'Utility procurement source coverage planned.'),
    ('Isavia/Keflavik procurement', 'public_institution_page', 'https://www.isavia.is', 'Airport procurement source coverage planned.'),
    ('Akureyri Municipality', 'municipal_website', 'https://www.akureyri.is', 'Municipal source coverage planned.'),
    ('Kópavogur Municipality', 'municipal_website', 'https://www.kopavogur.is', 'Municipal source coverage planned.'),
    ('Hafnarfjörður Municipality', 'municipal_website', 'https://www.hafnarfjordur.is', 'Municipal source coverage planned.'),
    ('Reykjanesbær', 'municipal_website', 'https://www.reykjanesbaer.is', 'Municipal source coverage planned.'),
    ('Fjarðabyggð', 'municipal_website', 'https://www.fjardabyggd.is', 'East Iceland municipal source coverage planned.'),
    ('Múlaþing', 'municipal_website', 'https://www.mulathing.is', 'East Iceland municipal source coverage planned.'),
    ('Árborg', 'municipal_website', 'https://www.arborg.is', 'Municipal source coverage planned.'),
    ('Vegagerðin', 'public_institution_page', 'https://www.vegagerdin.is', 'Road authority procurement source coverage planned.'),
    ('Landspítali', 'public_institution_page', 'https://www.landspitali.is', 'Healthcare procurement source coverage planned.'),
    ('Háskóli Íslands', 'public_institution_page', 'https://www.hi.is', 'University procurement source coverage planned.'),
    ('Landsnet', 'public_institution_page', 'https://www.landsnet.is', 'Transmission operator procurement source coverage planned.'),
    ('Veitur', 'public_institution_page', 'https://www.veitur.is', 'Utility procurement source coverage planned.')
)
insert into public.sources (name, source_type, base_url, is_active, notes)
select name, source_type, base_url, true, notes
from seeded_sources
on conflict (name) do update set
  source_type = excluded.source_type,
  base_url = excluded.base_url,
  is_active = true,
  notes = excluded.notes;

insert into public.source_status (source_id, status)
select id,
  case
    when name = 'TED Iceland/Nordic' then 'connected'
    else 'planned'
  end
from public.sources
where name in (
  'Útboðsvefur.is',
  'TED Iceland/Nordic',
  'Reykjavík tender portal',
  'Ríkiskaup / island.is procurement',
  'Orkuveita/Reykjavik Energy tender portal',
  'Isavia/Keflavik procurement',
  'Akureyri Municipality',
  'Kópavogur Municipality',
  'Hafnarfjörður Municipality',
  'Reykjanesbær',
  'Fjarðabyggð',
  'Múlaþing',
  'Árborg',
  'Vegagerðin',
  'Landspítali',
  'Háskóli Íslands',
  'Landsnet',
  'Veitur'
)
on conflict (source_id) do nothing;

notify pgrst, 'reload schema';
