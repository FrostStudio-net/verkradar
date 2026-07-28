# VerkRadar Website MVP

This is a complete front-end MVP for the VerkRadar / Opportunity Radar idea.

It includes:

- Landing page
- Company onboarding form
- Dashboard
- Opportunity cards
- Match scoring
- Opportunity detail modal
- Save / ignore actions
- Weekly report preview
- Pricing page
- Settings page
- LocalStorage persistence
- Mock tender/opportunity data

## How to run

Open `index.html` in your browser, or use a small local server:

```bash
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

Supabase is loaded from the CDN in `index.html`, so the static server path works.
Paste the public anon key into `SUPABASE_ANON_KEY` in `app.js` to enable live
Supabase opportunities. If it is left as the placeholder, the app uses `data.js`
demo opportunities.


## What to do with the old Python code

The Python code was the first prototype of the core matching/report logic.

For this website MVP, the same idea has been rewritten in JavaScript inside `app.js`:

- `calculateMatch(profile, opportunity)`
- `getMatchLabel(score)`
- `generateWeeklyReport(profile, matches)`

So you do not need the Python code for the website MVP.

Use the Python version later only if you want a backend worker that:
1. fetches tender data,
2. calculates matches on the server,
3. sends weekly emails.

## How this works

1. The user creates a company profile.
2. The profile is saved to localStorage.
3. The app loads mock opportunities from `data.js`.
4. `calculateMatch()` scores every opportunity.
5. Dashboard shows ranked matches.
6. User can save or ignore opportunities.
7. Report page creates a weekly email preview from the best matches.

## How to connect to Supabase later

Replace localStorage with Supabase tables:

- `companies`
- `company_services`
- `company_locations`
- `company_keywords`
- `opportunities`
- `opportunity_matches`
- `saved_opportunities`
- `ignored_opportunities`
- `reports`

The database pack you already have contains this structure.

## MVP recommendation

Do not build live scraping first.

First validate with:
- this website demo
- mock/manual data
- 5–10 businesses
- ask if they would pay for the weekly report

Then add real integrations.

## TED importer

The first real source integration lives in:

- `supabase/functions/import-ted/index.ts`
- `supabase/migrations/20260529120000_ted_importer.sql`

It runs server-side as a Supabase Edge Function. Do not put the
`SUPABASE_SERVICE_ROLE_KEY` in `index.html`, `app.js`, or any other frontend
file.

Deploy outline:

```bash
supabase db push
supabase functions deploy classify-procurement-stage
supabase functions deploy import-ted
supabase functions deploy import-source-connectors
supabase functions deploy admin-company-actions
supabase functions deploy ai-review-match
```

Production TED automation targets `import-ted`, which is the active TED path and owns the Phase 1 `form-type` classification mapping. `import-ted-notices` is a legacy importer retained unchanged for later cleanup; it must not be scheduled alongside `import-ted`.

Required Edge Function environment:

```text
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
AUTOMATION_SECRET=...
OPENAI_API_KEY=...
# Optional; falls back to OPENAI_MODEL, then gpt-4.1-mini.
OPENAI_CLASSIFIER_MODEL=...
```

Frontend configuration for the dev/admin dashboard button:

```html
<script>
  window.VERKRADAR_SUPABASE_URL = "https://YOUR_PROJECT_REF.supabase.co";
  window.VERKRADAR_SUPABASE_ANON_KEY = "YOUR_PUBLIC_ANON_KEY";
</script>
```

Or set the exact function URL:

```html
<script>
  window.VERKRADAR_TED_IMPORT_URL = "https://YOUR_PROJECT_REF.supabase.co/functions/v1/import-ted";
</script>
```

The importer:

1. verifies the current user is authenticated and listed in `admin_users`,
2. upserts the `EU TED` source row,
3. calls the official TED Search API,
4. normalizes notices into `opportunities`,
5. deduplicates with `source_id + external_id`,
6. stores the full TED response item in `raw_payload`.

The local static MVP still falls back to `data.js` mock opportunities.

Automation now also writes `import_runs`, refreshes company matches, and seeds weekly report records from the latest useful matches.
To run it on a schedule, set `AUTOMATION_SECRET` for the Edge Function and configure the cron callback with rows in `public.automation_settings`:

```sql
insert into public.automation_settings (key, value)
values
  ('automation_url', 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/import-ted'),
  ('automation_secret', 'YOUR_AUTOMATION_SECRET')
on conflict (key) do update set
  value = excluded.value,
  updated_at = now();
```

The cron migration in `supabase/migrations/20260530152000_ted_automation_cron.sql` reads those settings and posts to the Edge Function daily.
