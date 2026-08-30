-- Ísafjarðarbær access-policy prerequisite for a fresh Phase B shadow audit.
-- Does not enable production or promotion.

update public.v2_source_configs
set request_timeout_ms=5000,
    run_deadline_ms=60000,
    max_attempts=2,
    settings=coalesce(settings,'{}'::jsonb)
      || jsonb_build_object(
        'shadow_quality',coalesce(settings->'shadow_quality','{}'::jsonb)||jsonb_build_object('detail_limit',4),
        'access_policy',coalesce(settings->'access_policy','{}'::jsonb)||jsonb_build_object(
          'public_html_only',true,
          'crawl_delay_ms',5000,
          'authentication_required',false
        )
      ),
    updated_at=now()
where source_key='isafjordur-utbod-v2';
