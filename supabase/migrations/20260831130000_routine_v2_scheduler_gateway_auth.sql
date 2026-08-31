-- Authenticate routine V2 pg_cron requests at both the Edge gateway and the
-- application automation boundary. The gateway credential is the project's
-- public anon JWT, stored in Vault at deployment time; the automation secret
-- remains the actual authorization gate inside the Edge Function.

create or replace function public.v2_routine_gateway_authorization()
returns text
language plpgsql
security definer
set search_path = public, vault, pg_temp
as $$
declare
  gateway_jwt text;
begin
  select decrypted_secret
    into gateway_jwt
  from vault.decrypted_secrets
  where name = 'v2_routine_gateway_anon_jwt'
  order by created_at desc
  limit 1;

  if nullif(gateway_jwt, '') is null
     or gateway_jwt !~ '^[^.]+\.[^.]+\.[^.]+$' then
    raise exception 'V2_ROUTINE_GATEWAY_AUTH_NOT_CONFIGURED';
  end if;

  return 'Bearer ' || gateway_jwt;
end;
$$;

revoke all on function public.v2_routine_gateway_authorization() from public, anon, authenticated;

create or replace function public.trigger_isafjordur_v2_automation()
returns void language plpgsql security definer set search_path=public,extensions,pg_temp as $$
declare endpoint text; secret text; gateway_authorization text; c public.v2_source_configs%rowtype;
begin
  select * into c from public.v2_source_configs where source_key='isafjordur-utbod-v2';
  if c.id is null or not c.routine_production_enabled or c.mode<>'shadow' or c.promotion_approved then return; end if;
  select value into endpoint from public.automation_settings where key='v2_isafjordur_automation_url';
  select value into secret from public.automation_settings where key='automation_secret';
  gateway_authorization := public.v2_routine_gateway_authorization();
  if endpoint<>'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/import-source-connectors-v2' or nullif(secret,'') is null then raise exception 'V2_ROUTINE_AUTOMATION_CONFIG_INVALID'; end if;
  perform net.http_post(url:=endpoint,headers:=jsonb_build_object('Content-Type','application/json','Authorization',gateway_authorization,'x-automation-secret',secret),body:=jsonb_build_object('action','run_isafjordur_production','source_key','isafjordur-utbod-v2'));
end;
$$;

create or replace function public.trigger_borgarbyggd_v2_automation()
returns void language plpgsql security definer set search_path=public,extensions,pg_temp as $$
declare endpoint text; secret text; gateway_authorization text; c public.v2_source_configs%rowtype;
begin
  select * into c from public.v2_source_configs where source_key='borgarbyggd-utbod-v2';
  if c.id is null or not c.routine_production_enabled or c.mode<>'shadow' or c.promotion_approved then return; end if;
  select value into endpoint from public.automation_settings where key='v2_borgarbyggd_automation_url';
  select value into secret from public.automation_settings where key='automation_secret';
  gateway_authorization := public.v2_routine_gateway_authorization();
  if endpoint<>'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/import-source-connectors-v2' or nullif(secret,'') is null then raise exception 'V2_ROUTINE_AUTOMATION_CONFIG_INVALID'; end if;
  perform net.http_post(url:=endpoint,headers:=jsonb_build_object('Content-Type','application/json','Authorization',gateway_authorization,'x-automation-secret',secret),body:=jsonb_build_object('action','run_borgarbyggd_production','source_key','borgarbyggd-utbod-v2'));
end;
$$;

create or replace function public.trigger_gardabaer_v2_automation()
returns void language plpgsql security definer set search_path=public,extensions,pg_temp as $$
declare endpoint text; secret text; gateway_authorization text; c public.v2_source_configs%rowtype;
begin
  select * into c from public.v2_source_configs where source_key='gardabaer-utbod-v2';
  if c.id is null or not c.routine_production_enabled or c.mode<>'shadow' or c.promotion_approved then return; end if;
  select value into endpoint from public.automation_settings where key='v2_gardabaer_automation_url';
  select value into secret from public.automation_settings where key='automation_secret';
  gateway_authorization := public.v2_routine_gateway_authorization();
  if endpoint<>'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/import-source-connectors-v2' or nullif(secret,'') is null then raise exception 'V2_ROUTINE_AUTOMATION_CONFIG_INVALID'; end if;
  perform net.http_post(url:=endpoint,headers:=jsonb_build_object('Content-Type','application/json','Authorization',gateway_authorization,'x-automation-secret',secret),body:=jsonb_build_object('action','run_gardabaer_production','source_key','gardabaer-utbod-v2'));
end;
$$;

create or replace function public.trigger_reykjavik_v2_automation()
returns void language plpgsql security definer set search_path=public,extensions,pg_temp as $$
declare endpoint text; secret text; gateway_authorization text; c public.v2_source_configs%rowtype;
begin
  select * into c from public.v2_source_configs where source_key='reykjavik-utbod-v2';
  if c.id is null or not c.routine_production_enabled or c.mode<>'shadow' or c.promotion_approved then return; end if;
  select value into endpoint from public.automation_settings where key='v2_reykjavik_automation_url';
  select value into secret from public.automation_settings where key='automation_secret';
  gateway_authorization := public.v2_routine_gateway_authorization();
  if endpoint<>'https://asojxjbsgqbfpbepojzh.supabase.co/functions/v1/import-source-connectors-v2' or nullif(secret,'') is null then raise exception 'V2_ROUTINE_AUTOMATION_CONFIG_INVALID'; end if;
  perform net.http_post(url:=endpoint,headers:=jsonb_build_object('Content-Type','application/json','Authorization',gateway_authorization,'x-automation-secret',secret),body:=jsonb_build_object('action','run_reykjavik_production','source_key','reykjavik-utbod-v2'));
end;
$$;

revoke all on function public.trigger_isafjordur_v2_automation() from public, anon, authenticated;
revoke all on function public.trigger_borgarbyggd_v2_automation() from public, anon, authenticated;
revoke all on function public.trigger_gardabaer_v2_automation() from public, anon, authenticated;
revoke all on function public.trigger_reykjavik_v2_automation() from public, anon, authenticated;

notify pgrst, 'reload schema';
