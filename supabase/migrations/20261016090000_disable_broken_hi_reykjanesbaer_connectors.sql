-- Stop two confirmed daily 404s without broadening collection. HÍ has only a
-- generic feed with no reliable procurement surface. Reykjanesbær publishes a
-- replacement tender page, but its current robots.txt disallows all crawling.

do $$
declare
  hi_id constant uuid := 'f944e96a-c9eb-4bba-9a99-9795920aafc0';
  reykjanesbaer_id constant uuid := 'c4d43cec-a8b9-4ab2-ab59-a9c963434be0';
  affected_rows integer;
begin
  if not exists (
    select 1
    from public.sources
    where id = hi_id
      and name = 'Háskóli Íslands'
      and base_url = 'https://www.hi.is'
  ) or not exists (
    select 1
    from public.sources
    where id = reykjanesbaer_id
      and name = 'Reykjanesbær'
      and base_url = 'https://www.reykjanesbaer.is'
  ) then
    raise exception 'BROKEN_SOURCE_DISABLE_BLOCKED: audited source identities differ';
  end if;

  if not exists (
    select 1
    from public.source_connectors
    where source_id = hi_id
      and connector_type = 'rss_feed'
      and endpoint_url = 'https://hi.is/frettir/18551/feed'
      and enabled
  ) or not exists (
    select 1
    from public.source_connectors
    where source_id = reykjanesbaer_id
      and connector_type = 'rss_feed'
      and endpoint_url = 'https://www.reykjanesbaer.is/feed'
      and enabled
  ) then
    raise exception 'BROKEN_SOURCE_DISABLE_BLOCKED: audited connector state differs';
  end if;

  update public.source_connectors
  set connector_type = 'planned',
      endpoint_url = 'https://www.hi.is/rss.xml',
      enabled = false,
      status = 'planned',
      last_error = null,
      notes = 'Disabled 2026-10-16: the former feed returns 404. The public /rss.xml feed is robots-allowed but generic, currently contains no procurement notices, and no procurement-specific HÍ page/feed/API was found. Reactivate only when HÍ publishes a reliable procurement source.',
      updated_at = now()
  where source_id = hi_id;

  get diagnostics affected_rows = row_count;
  if affected_rows <> 1 then
    raise exception 'BROKEN_SOURCE_DISABLE_BLOCKED: expected one HÍ connector update, got %', affected_rows;
  end if;

  update public.source_connectors
  set connector_type = 'permission_required',
      endpoint_url = 'https://www.reykjanesbaer.is/reykjanesbaer/fjarmal/utbod',
      enabled = false,
      status = 'permission_required',
      last_error = null,
      notes = 'Disabled 2026-10-16: the former RSS feed returns 404. The replacement official tender page is public, but robots.txt contains User-agent: * / Disallow: /. Do not crawl or probe Payload/Next.js APIs without explicit permission or an official feed/API.',
      updated_at = now()
  where source_id = reykjanesbaer_id;

  get diagnostics affected_rows = row_count;
  if affected_rows <> 1 then
    raise exception 'BROKEN_SOURCE_DISABLE_BLOCKED: expected one Reykjanesbær connector update, got %', affected_rows;
  end if;

  update public.sources
  set is_active = false,
      notes = case id
        when hi_id then 'Planned university procurement coverage. Broken legacy feed disabled; awaiting a procurement-specific official page, feed, or API.'
        when reykjanesbaer_id then 'Planned municipal procurement coverage. Replacement tender page exists, but automated access is blocked by robots.txt; awaiting permission or an official feed/API.'
      end
  where id in (hi_id, reykjanesbaer_id);

  if (select count(*) from public.sources where id in (hi_id, reykjanesbaer_id) and not is_active) <> 2 then
    raise exception 'BROKEN_SOURCE_DISABLE_VERIFICATION_FAILED: source active state differs';
  end if;

  update public.source_status
  set status = case source_id
        when hi_id then 'planned'
        when reykjanesbaer_id then 'permission_required'
      end,
      last_error = null,
      updated_at = now()
  where source_id in (hi_id, reykjanesbaer_id);

  if exists (
    select 1
    from public.source_connectors
    where source_id in (hi_id, reykjanesbaer_id)
      and enabled
  ) then
    raise exception 'BROKEN_SOURCE_DISABLE_VERIFICATION_FAILED: connector remains enabled';
  end if;
end;
$$;

notify pgrst, 'reload schema';
