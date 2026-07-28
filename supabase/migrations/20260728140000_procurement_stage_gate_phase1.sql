do $$
begin
  if not exists (
    select 1
    from pg_type
    where typname = 'procurement_stage'
      and typnamespace = 'public'::regnamespace
  ) then
    create type public.procurement_stage as enum (
      'open_competition',
      'upcoming_procurement',
      'market_consultation',
      'award_or_contract_signed',
      'work_underway',
      'completed',
      'general_news',
      'uncertain'
    );
  end if;
end $$;

alter table public.opportunities
  add column if not exists procurement_stage public.procurement_stage,
  add column if not exists actionable_for_suppliers boolean,
  add column if not exists classification_confidence numeric(5, 4),
  add column if not exists classification_reason text,
  add column if not exists positive_signals text[] not null default '{}',
  add column if not exists negative_signals text[] not null default '{}',
  add column if not exists classified_by text,
  add column if not exists classified_at timestamptz,
  add column if not exists classifier_version text,
  add column if not exists requires_admin_review boolean;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'opportunities_classification_confidence_check'
      and conrelid = 'public.opportunities'::regclass
  ) then
    alter table public.opportunities
      add constraint opportunities_classification_confidence_check
      check (
        classification_confidence is null
        or classification_confidence between 0 and 1
      );
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'opportunities_classified_by_check'
      and conrelid = 'public.opportunities'::regclass
  ) then
    alter table public.opportunities
      add constraint opportunities_classified_by_check
      check (
        classified_by is null
        or classified_by in ('source_metadata', 'deterministic_rule', 'openai', 'admin')
      );
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'opportunities_actionable_stage_check'
      and conrelid = 'public.opportunities'::regclass
  ) then
    alter table public.opportunities
      add constraint opportunities_actionable_stage_check
      check (
        actionable_for_suppliers is not true
        or procurement_stage in (
          'open_competition',
          'upcoming_procurement',
          'market_consultation'
        )
      );
  end if;
end $$;

create index if not exists opportunities_procurement_gate_idx
  on public.opportunities (
    actionable_for_suppliers,
    requires_admin_review,
    procurement_stage,
    status,
    deadline
  );

comment on column public.opportunities.procurement_stage is
  'Phase 1 procurement lifecycle classification. NULL means the legacy classifier still applies.';

notify pgrst, 'reload schema';
