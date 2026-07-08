create table if not exists public.ai_usage_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  company_id uuid references public.companies(id) on delete cascade,
  opportunity_id uuid references public.opportunities(id) on delete set null,
  action text not null check (action in ('single_review', 'batch_review', 'rerun')),
  model text,
  input_tokens integer,
  output_tokens integer,
  estimated_cost numeric(12, 6),
  created_at timestamptz not null default now()
);

create index if not exists ai_usage_log_created_at_idx
  on public.ai_usage_log(created_at);

create index if not exists ai_usage_log_company_created_idx
  on public.ai_usage_log(company_id, created_at);

alter table public.ai_usage_log enable row level security;

drop policy if exists "Admins read ai usage log" on public.ai_usage_log;
create policy "Admins read ai usage log"
  on public.ai_usage_log
  for select
  using (
    exists (
      select 1
      from public.admin_users admin_users
      where admin_users.user_id = auth.uid()
    )
  );
