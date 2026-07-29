do $$
declare
  company_fk_name text;
begin
  select constraint_row.conname
    into company_fk_name
  from pg_constraint constraint_row
  join pg_attribute company_column
    on company_column.attrelid = constraint_row.conrelid
   and company_column.attnum = any (constraint_row.conkey)
  where constraint_row.contype = 'f'
    and constraint_row.conrelid = 'public.opportunity_matches'::regclass
    and constraint_row.confrelid = 'public.companies'::regclass
    and company_column.attname = 'company_id'
  limit 1;

  if company_fk_name is null then
    alter table public.opportunity_matches
      add constraint opportunity_matches_company_id_fkey
      foreign key (company_id)
      references public.companies(id)
      on delete cascade
      not valid;

    company_fk_name := 'opportunity_matches_company_id_fkey';
  end if;

  execute format(
    'alter table public.opportunity_matches validate constraint %I',
    company_fk_name
  );
end
$$;
