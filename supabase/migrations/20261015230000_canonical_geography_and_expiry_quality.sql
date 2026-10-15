-- Correct audited canonical geography/description defects and maintain the
-- existing canonical hidden state for tenders whose explicit deadline passed.

do $$
declare
  audited_ids constant uuid[] := array[
    'aa4685ba-330d-493e-98be-abd37d563b66'::uuid,
    '0ec91edf-4c4e-4ddb-bd90-4099c676fb32'::uuid,
    'a22e5aac-4d58-4565-9cde-c436c6d610d4'::uuid,
    '0b720e1b-d497-4f9e-a69e-d4c05be96dfc'::uuid
  ];
  present_count integer;
begin
  select count(*) into present_count
  from public.opportunities
  where id = any(audited_ids);

  if present_count = 0 then
    raise notice 'CANONICAL_GEOGRAPHY_AUDIT_NOOP: audited production rows are absent in this environment';
    return;
  end if;

  if present_count <> 4
    or not exists (select 1 from public.opportunities where id = audited_ids[1] and external_id = '26-141' and location in ('Ísland', 'Húsavík / Norðurþing / Norðurland eystra'))
    or not exists (select 1 from public.opportunities where id = audited_ids[2] and external_id = '26-132' and location in ('Ísland', 'Reykjanes / Suðurnes'))
    or not exists (select 1 from public.opportunities where id = audited_ids[3] and external_id = '26-133' and location in ('Ísland', 'Höfuðborgarsvæðið'))
    or not exists (select 1 from public.opportunities where id = audited_ids[4] and title = 'Útboð: Grjótgildra við Holtastöð' and location in ('All Iceland', 'Mosfellsbær / Höfuðborgarsvæðið')) then
    raise exception 'CANONICAL_GEOGRAPHY_AUDIT_BLOCKED: production identities or pre-change geography differ from the audited rows';
  end if;

  update public.opportunities
  set location = 'Húsavík / Norðurþing / Norðurland eystra',
      country_code = 'IS',
      raw_payload = coalesce(raw_payload, '{}'::jsonb) || jsonb_build_object(
        'geography_evidence', 'official_vegagerdin_title_and_scope',
        'canonical_geography_repaired_at', now()
      ),
      updated_at = now()
  where id = audited_ids[1];

  update public.opportunities
  set location = 'Reykjanes / Suðurnes',
      country_code = 'IS',
      description = 'Vegagerðin býður hér með út þjónustu og viðhald veglýsingar á Reykjanesi. Um er að ræða almenna þjónustu og viðhald á veglýsingarkerfinu, niðurtekt og uppsetningu lampa, stauraskipti, stauraréttingar og fleira. Samningur sem gerður verður í framhaldi af útboði þessu skal gilda í þrjú ár frá töku tilboðs með heimild um framlengingar, tvisvar sinnum, til 1 árs í senn. Útboðsgögn eru afhent rafrænt í TendSign útboðskerfinu. Afhending gagnanna er án endurgjalds, frá og með miðvikudeginum 23. september 2026. Tilboði skal skila rafrænt í TendSign útboðskerfinu fyrir kl. 14:00 þriðjudaginn 27. október 2026. Ekki verður haldinn sérstakur opnunarfundur en eftir lok tilboðsfrests verður bjóðendum tilkynnt um nöfn bjóðenda í útboðinu, heildartilboðsupphæð og hvort tilboð sé sett fram sem frávikstilboð.',
      raw_payload = coalesce(raw_payload, '{}'::jsonb) || jsonb_build_object(
        'geography_evidence', 'official_vegagerdin_title_and_scope',
        'description_quality', 'official_human_readable_scope',
        'canonical_geography_repaired_at', now()
      ),
      updated_at = now()
  where id = audited_ids[2];

  update public.opportunities
  set location = 'Höfuðborgarsvæðið',
      country_code = 'IS',
      description = 'Vegagerðin býður hér með út þjónustu og viðhald veglýsingar á höfuðborgarsvæðinu. Um er að ræða almenna þjónustu og viðhald á veglýsingarkerfinu, niðurtekt og uppsetningu lampa, stauraskipti, stauraréttingar og fleira. Samningur sem gerður verður í framhaldi af útboði þessu skal gilda í þrjú ár frá töku tilboðs með heimild um framlengingar, tvisvar sinnum, til 1 árs í senn. Útboðsgögn eru afhent rafrænt í TendSign útboðskerfinu. Afhending gagnanna er án endurgjalds, frá og með miðvikudeginum 23. september 2026. Tilboði skal skila rafrænt í TendSign útboðskerfinu fyrir kl. 14:00 þriðjudaginn 27. október 2026. Ekki verður haldinn sérstakur opnunarfundur en eftir lok tilboðsfrests verður bjóðendum tilkynnt um nöfn bjóðenda í útboðinu, heildartilboðsupphæð og hvort tilboð sé sett fram sem frávikstilboð.',
      raw_payload = coalesce(raw_payload, '{}'::jsonb) || jsonb_build_object(
        'geography_evidence', 'official_vegagerdin_title_and_scope',
        'description_quality', 'official_human_readable_scope',
        'canonical_geography_repaired_at', now()
      ),
      updated_at = now()
  where id = audited_ids[3];

  update public.opportunities
  set location = 'Mosfellsbær / Höfuðborgarsvæðið',
      country_code = 'IS',
      raw_payload = coalesce(raw_payload, '{}'::jsonb) || jsonb_build_object(
        'geography_evidence', 'official_mosfellsbaer_detail_page',
        'description_quality', 'official_human_readable_scope',
        'canonical_geography_repaired_at', now()
      ),
      updated_at = now()
  where id = audited_ids[4];
end;
$$;

create or replace function public.expire_canonical_opportunities()
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  expired_count integer := 0;
begin
  perform pg_advisory_xact_lock(hashtext('expire_canonical_opportunities'));

  with expired as (
    update public.opportunities
    set status = 'hidden',
        actionable_for_suppliers = false,
        raw_payload = coalesce(raw_payload, '{}'::jsonb) || jsonb_build_object(
          'hidden_from_reports', true,
          'admin_report_status', 'hidden',
          'stale_status', 'expired',
          'deadline_state', 'passed',
          'stale_reason', 'Explicit bid deadline has passed.',
          'canonical_expired_at', now(),
          'description_quality', case
            when description ~* 'Útboðstilkynning flutt inn af Útboðsvef|Opnið upprunasíðuna til að staðfesta'
              then 'portal_placeholder_not_meaningful'
            else coalesce(raw_payload->>'description_quality', 'unchanged')
          end
        ),
        updated_at = now()
    where status = 'open'
      and deadline is not null
      and deadline < (now() at time zone 'UTC')::date
    returning id
  )
  select count(*) into expired_count from expired;

  return jsonb_build_object('expired', expired_count, 'as_of', (now() at time zone 'UTC')::date);
end;
$$;

revoke all on function public.expire_canonical_opportunities() from public, anon, authenticated;
grant execute on function public.expire_canonical_opportunities() to service_role;

select public.expire_canonical_opportunities();

do $$
declare
  existing_job_id bigint;
begin
  select jobid into existing_job_id
  from cron.job
  where jobname = 'expire-canonical-opportunities-daily';
  if existing_job_id is not null then
    perform cron.unschedule(existing_job_id);
  end if;
end;
$$;

select cron.schedule(
  'expire-canonical-opportunities-daily',
  '15 3 * * *',
  $$select public.expire_canonical_opportunities();$$
);

do $$
begin
  if exists (
    select 1 from public.opportunities
    where status = 'open'
      and deadline is not null
      and deadline < (now() at time zone 'UTC')::date
  ) then
    raise exception 'CANONICAL_EXPIRY_VERIFICATION_FAILED: definitively expired open opportunities remain';
  end if;
end;
$$;

notify pgrst, 'reload schema';
