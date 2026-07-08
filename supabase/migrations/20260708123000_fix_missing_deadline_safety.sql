with target_opportunities as (
  select
    id,
    raw_payload,
    raw_payload->>'quality_status' as previous_quality_status,
    coalesce(raw_payload->>'admin_report_status', '') as admin_report_status,
    lower(coalesce(raw_payload->>'manual_approved', 'false')) = 'true' as manual_approved
  from public.opportunities
  where deadline is null
),
updated_opportunities as (
  update public.opportunities
  set raw_payload =
    jsonb_set(
      jsonb_set(
        jsonb_set(
          jsonb_set(
            jsonb_set(
              coalesce(public.opportunities.raw_payload, '{}'::jsonb),
              '{alert_eligible}',
              'false'::jsonb,
              true
            ),
            '{review_required}',
            case
              when target_opportunities.admin_report_status = 'include' or target_opportunities.manual_approved then 'false'::jsonb
              else 'true'::jsonb
            end,
            true
          ),
          '{safety_status}',
          case
            when target_opportunities.admin_report_status = 'include' or target_opportunities.manual_approved then to_jsonb(coalesce(public.opportunities.raw_payload->>'safety_status', 'needs_review'))
            else '"needs_review"'::jsonb
          end,
          true
        ),
        '{quality_status}',
        case
          when target_opportunities.admin_report_status = 'include' or target_opportunities.manual_approved then to_jsonb(coalesce(nullif(public.opportunities.raw_payload->>'quality_status', ''), 'needs_review'))
          when lower(coalesce(target_opportunities.previous_quality_status, '')) in ('confirmed_tender', 'likely_tender') then '"needs_review"'::jsonb
          else to_jsonb(coalesce(nullif(public.opportunities.raw_payload->>'quality_status', ''), 'needs_review'))
        end,
        true
      ),
      '{deadline_debug_reason}',
      '"Missing bid deadline after enrichment; requires manual review."'::jsonb,
      true
    ) || jsonb_build_object(
      'deadline_warning', 'Deadline not available in imported data — verify on source page.',
      'missing_deadline_safety_checked_at', now()
    )
  from target_opportunities
  where public.opportunities.id = target_opportunities.id
  returning public.opportunities.id
),
target_matches as (
  select matches.id
  from public.opportunity_matches matches
  join public.opportunities opportunities on opportunities.id = matches.opportunity_id
  where opportunities.deadline is null
    and matches.reviewed_at is null
),
updated_matches as (
  update public.opportunity_matches matches
  set
    safety_status = 'needs_review',
    safety_reasons = array['Missing bid deadline after enrichment; requires manual review.'],
    alert_eligible = false,
    review_required = true
  from target_matches
  where matches.id = target_matches.id
  returning matches.id
)
select
  'missing_deadline_safety_backfill' as operation,
  (select count(*) from target_opportunities) as missing_deadline_opportunities_checked,
  (select count(*) from updated_opportunities) as opportunities_updated,
  (select count(*) from updated_matches) as unreviewed_matches_updated,
  (select count(*) from public.opportunities where deadline is null and lower(coalesce(raw_payload->>'alert_eligible', '')) = 'false') as missing_deadline_alert_false,
  (select count(*) from public.opportunities where deadline is null and lower(coalesce(raw_payload->>'alert_eligible', '')) <> 'false') as missing_deadline_alert_not_false,
  (select count(*) from public.opportunities where deadline is null and raw_payload->>'quality_status' = 'confirmed_tender') as missing_deadline_confirmed_tender,
  (select count(*) from public.opportunities where deadline is null and raw_payload->>'quality_status' = 'needs_review') as missing_deadline_needs_review;
