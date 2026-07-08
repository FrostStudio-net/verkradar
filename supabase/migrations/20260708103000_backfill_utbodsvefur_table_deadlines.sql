update public.opportunities
set
  deadline = date '2026-07-21',
  published_date = coalesce(published_date, date '2026-07-03'),
  status = 'open',
  raw_payload = coalesce(raw_payload, '{}'::jsonb) || jsonb_build_object(
    'bid_deadline', '2026-07-21',
    'deadline_at', '2026-07-21T10:00:00',
    'bid_deadline_at', '2026-07-21T10:00:00',
    'extracted_deadline_text', '21.07.2026 kl. 10:00',
    'extractedDeadlineText', '21.07.2026 kl. 10:00',
    'extracted_deadline_source', 'table',
    'extractedDeadlineSource', 'table',
    'tender_documents_date', '2026-07-03',
    'extracted_published_text', '03.07.2026 kl. 11:00',
    'extractedPublishedText', '03.07.2026 kl. 11:00',
    'opening_date', '2026-07-21',
    'extracted_opening_text', '21.07.2026 kl. 10:00',
    'deadline_warning', null,
    'deadline_debug_reason', null,
    'quality_status', 'confirmed_tender',
    'opportunity_intent', 'confirmed_tender',
    'hidden_from_reports', false
  )
where external_id = '9548'
  or url ilike '%/vogabyggd-1-strandstigur-gatna-og-stigagerd-utbod-nr-16328/%'
  or title ilike 'Vogabyggð 1. Strandstígur%';
