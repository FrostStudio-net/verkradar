alter table public.company_members
  add column if not exists token_hash text,
  add column if not exists expires_at timestamptz,
  add column if not exists invited_by uuid references auth.users(id);

create index if not exists company_members_token_hash_idx
  on public.company_members(token_hash)
  where token_hash is not null;

create or replace function public.protect_company_member_claim_update()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if old.status = 'invited' and new.status = 'active' then
    if new.company_id is distinct from old.company_id
      or new.email_normalized is distinct from old.email_normalized
      or new.email is distinct from old.email
      or new.role is distinct from old.role
      or new.token_hash is distinct from old.token_hash
      or new.expires_at is distinct from old.expires_at
      or new.invited_by is distinct from old.invited_by then
      raise exception 'Company membership claim cannot change company, email, role, or invite token fields';
    end if;
  end if;
  return new;
end;
$$;

notify pgrst, 'reload schema';
