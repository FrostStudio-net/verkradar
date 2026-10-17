-- Keep Reykjanesbær disabled while its robots policy disallows automation, but
-- record the municipality's current official procurement page for a future
-- permissioned connector. This does not add the source back to any schedule.

do $$
declare
  reykjanesbaer_id constant uuid := 'c4d43cec-a8b9-4ab2-ab59-a9c963434be0';
  affected_rows integer;
begin
  if not exists (
    select 1
    from public.sources
    where id = reykjanesbaer_id
      and name = 'Reykjanesbær'
      and base_url = 'https://www.reykjanesbaer.is'
      and not is_active
  ) or not exists (
    select 1
    from public.source_connectors
    where source_id = reykjanesbaer_id
      and connector_type = 'permission_required'
      and endpoint_url = 'https://www.reykjanesbaer.is/reykjanesbaer/fjarmal/utbod'
      and not enabled
  ) then
    raise exception 'REYKJANESBAER_ENDPOINT_UPDATE_BLOCKED: audited disabled state differs';
  end if;

  update public.source_connectors
  set endpoint_url = 'https://www.reykjanesbaer.is/is/stjornsysla/fjarmal-og-rekstur/utbod',
      notes = 'Disabled: the former RSS feed returns 404. This is the current official tender page, but robots.txt contains User-agent: * / Disallow: /. Do not crawl or probe Payload/Next.js APIs without explicit permission or an official feed/API.',
      last_error = null,
      updated_at = now()
  where source_id = reykjanesbaer_id
    and connector_type = 'permission_required'
    and not enabled;

  get diagnostics affected_rows = row_count;
  if affected_rows <> 1 then
    raise exception 'REYKJANESBAER_ENDPOINT_UPDATE_BLOCKED: expected one connector update, got %', affected_rows;
  end if;

  if exists (
    select 1
    from public.source_connectors
    where source_id = reykjanesbaer_id
      and (
        enabled
        or connector_type <> 'permission_required'
        or endpoint_url <> 'https://www.reykjanesbaer.is/is/stjornsysla/fjarmal-og-rekstur/utbod'
      )
  ) then
    raise exception 'REYKJANESBAER_ENDPOINT_UPDATE_VERIFICATION_FAILED';
  end if;
end;
$$;

notify pgrst, 'reload schema';
