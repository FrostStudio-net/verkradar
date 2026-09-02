-- Restore dual-layer authentication for the production TED pg_cron dispatcher.
-- The project anon JWT stays in Vault and only satisfies Edge gateway JWT
-- verification; the existing automation secret remains the application-level
-- authorization gate in import-ted.

create or replace function public.trigger_ted_automation()
returns void
language plpgsql
security definer
set search_path = public, extensions, pg_temp
as $$
declare
  automation_url text;
  automation_secret text;
  gateway_authorization text;
begin
  select value
    into automation_url
  from public.automation_settings
  where key = 'automation_url';

  select value
    into automation_secret
  from public.automation_settings
  where key = 'automation_secret';

  gateway_authorization := public.v2_routine_gateway_authorization();

  if automation_url <> 'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/import-ted'
     or nullif(automation_secret, '') is null then
    raise exception 'TED_AUTOMATION_CONFIG_INVALID';
  end if;

  perform net.http_post(
    url := automation_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', gateway_authorization,
      'x-automation-secret', automation_secret
    ),
    body := '{}'::jsonb
  );
end;
$$;

revoke all on function public.trigger_ted_automation()
  from public, anon, authenticated;

notify pgrst, 'reload schema';
