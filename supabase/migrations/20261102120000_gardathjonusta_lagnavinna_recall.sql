-- Narrow Garðaþjónusta recall expansion and one official Veitur DPS parent connector.
-- This migration does not refresh matches, enqueue alerts, or send notifications.

do $$
declare
  target_company_id constant uuid := 'cad6b69e-b021-447d-b637-31b2e8dbff2e';
begin
  if not exists (
    select 1 from public.companies
    where id = target_company_id
      and company_name = 'Garðaþjónusta Reykjavíkur ehf.'
  ) then
    raise exception 'GARDA_PROFILE_TARGET_MISMATCH';
  end if;

  insert into public.company_services(company_id, service)
  values
    (target_company_id, 'lagnavinna'),
    (target_company_id, 'veitulagnir')
  on conflict do nothing;

  insert into public.company_keywords(company_id, keyword, type)
  values
    (target_company_id, 'pípulagnir', 'include'),
    (target_company_id, 'fráveita', 'include'),
    (target_company_id, 'skólplagnir', 'include')
  on conflict do nothing;

  if (select count(*) from public.company_services
      where company_id = target_company_id and service in ('lagnavinna', 'veitulagnir')) <> 2 then
    raise exception 'GARDA_SERVICE_ADDITIONS_INCOMPLETE';
  end if;
  if (select count(*) from public.company_keywords
      where company_id = target_company_id and type = 'include'
        and keyword in ('pípulagnir', 'fráveita', 'skólplagnir')) <> 3 then
    raise exception 'GARDA_KEYWORD_ADDITIONS_INCOMPLETE';
  end if;
end $$;

update public.sources
set notes = 'Official Veitur DPS parent source. Fetches only two fixed public Veitur pages: current rolling-admission status and exact VEGK-2024-01 identity evidence. Does not crawl Útboðsvefur or protected In-Tend endpoints.'
where name = 'Veitur';

insert into public.source_connectors(
  source_id, connector_type, endpoint_url, enabled, status,
  include_keywords, exclude_keywords, require_any_keyword, notes
)
select
  id,
  'page_monitor_allowed',
  'https://www.veitur.is/frettir/oskum-eftir-fleiri-samstarfsadilum-gagnvirkt-innkaupakerfi',
  true,
  'connected',
  array['gagnvirkt innkaupakerfi','veitulagnir','jarðvinna','yfirborðsfrágangur']::text[],
  array[]::text[],
  true,
  'Narrow official-page connector for the persistent VEGK-2024-01 DPS parent. Applications remain open through April 2028; call-offs are separate opportunities.'
from public.sources
where name = 'Veitur'
on conflict (source_id) do update
set connector_type = excluded.connector_type,
    endpoint_url = excluded.endpoint_url,
    enabled = excluded.enabled,
    status = excluded.status,
    include_keywords = excluded.include_keywords,
    exclude_keywords = excluded.exclude_keywords,
    require_any_keyword = excluded.require_any_keyword,
    notes = excluded.notes,
    updated_at = now();

do $$
begin
  if not exists (
    select 1
    from public.source_connectors connectors
    join public.sources sources on sources.id = connectors.source_id
    where sources.name = 'Veitur'
      and connectors.enabled
      and connectors.connector_type = 'page_monitor_allowed'
      and connectors.endpoint_url = 'https://www.veitur.is/frettir/oskum-eftir-fleiri-samstarfsadilum-gagnvirkt-innkaupakerfi'
  ) then
    raise exception 'VEITUR_DPS_CONNECTOR_NOT_CONFIGURED';
  end if;
end $$;
