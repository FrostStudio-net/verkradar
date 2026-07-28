alter table public.opportunities
  add column if not exists classification_grandfathered boolean not null default false;

update public.opportunities
set classification_grandfathered = true
where procurement_stage is null
  and classification_grandfathered is false;

create or replace function public.enforce_new_opportunity_classification()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if tg_op = 'INSERT' then
    if new.procurement_stage is null then
      raise exception 'New opportunities require an explicit procurement_stage.'
        using errcode = '23514';
    end if;
    new.classification_grandfathered := false;
    return new;
  end if;

  if new.procurement_stage is null then
    if old.classification_grandfathered is not true then
      raise exception 'Only grandfathered opportunities may have a NULL procurement_stage.'
        using errcode = '23514';
    end if;
    new.classification_grandfathered := true;
  else
    new.classification_grandfathered := false;
  end if;
  return new;
end;
$$;

drop trigger if exists enforce_new_opportunity_classification_trigger
  on public.opportunities;

create trigger enforce_new_opportunity_classification_trigger
before insert or update of procurement_stage, classification_grandfathered on public.opportunities
for each row execute function public.enforce_new_opportunity_classification();

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'opportunities_classification_required_check'
      and conrelid = 'public.opportunities'::regclass
  ) then
    alter table public.opportunities
      add constraint opportunities_classification_required_check
      check (
        procurement_stage is not null
        or classification_grandfathered is true
      );
  end if;
end $$;

comment on column public.opportunities.procurement_stage is
  'Phase 1 procurement lifecycle classification. NULL is allowed only for explicitly grandfathered rows that predate this gate.';

comment on column public.opportunities.classification_grandfathered is
  'True only for pre-gate rows that may use legacy eligibility while procurement_stage remains NULL. New inserts are always forced to false.';

create or replace function public.trigger_ted_automation()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  automation_url text;
  automation_secret text;
begin
  select value
  into automation_url
  from public.automation_settings
  where key = 'automation_url';

  select value
  into automation_secret
  from public.automation_settings
  where key = 'automation_secret';

  if coalesce(automation_url, '') = '' then
    raise notice 'TED automation URL is not configured.';
    return;
  end if;

  if automation_url !~ '/functions/v1/import-ted/?$' then
    raise exception 'TED automation URL must target the active import-ted function.';
  end if;

  perform net.http_post(
    url := automation_url,
    headers := jsonb_build_object(
      'content-type', 'application/json',
      'x-automation-secret', coalesce(automation_secret, '')
    ),
    body := '{}'::jsonb
  );
end;
$$;

notify pgrst, 'reload schema';
