# VerkRadar Production Security Review

Date: 2026-07-25

## Executive summary

The review found two critical and four high-severity issues. All confirmed critical/high issues have code fixes in this change set. The database migration and Edge Functions must be deployed before the production environment is considered fixed.

## Findings

### Critical: invite acceptance allowed cross-tenant privilege escalation

**Attack:** An authenticated user invited to one company could update the invited `company_members` row while accepting it. The RLS `WITH CHECK` constrained the final user, email, and status, but did not constrain `company_id`, `role`, or other protected fields. The user could move the row to a known victim company UUID and assign an owner/admin role.

**Fix:** Restricted authenticated UPDATE privileges to the five activation fields only and tightened the activation policy. Company ID, role, email, and token fields are no longer writable by invitees.

**Status:** Fixed in migration `20260725120000_security_public_submissions_and_memberships.sql`.

### Critical: unauthenticated legacy TED importer used the service role

**Attack:** `import-ted-notices` accepted a public request, created a service-role client, and wrote sources, opportunities, and matches without authenticating an admin. Repeated direct calls could mutate production data and consume external/database resources.

**Fix:** Requires either a verified Supabase user who exists in `admin_users` or a constant-time-checked automation secret.

**Status:** Fixed in `supabase/functions/import-ted-notices/index.ts`.

### High: public form APIs bypassed anti-spam controls

**Attack:** Contact and trial forms inserted directly into PostgREST as `anon`. An attacker could bypass browser validation and the honeypot, create unlimited rows, and trigger trial notification email for attacker-created request IDs.

**Fix:** Revoked anonymous/authenticated INSERT on both tables. Added `public-form-submit`, with server validation, subject allowlisting, server-side honeypot handling, atomic database rate limits by IP/email, server-generated IDs, and generic errors. The notification endpoint now accepts service-role calls only.

**Status:** Fixed in the new migration and `supabase/functions/public-form-submit`.

### High: company members could update protected billing/admin columns

**Attack:** RLS limited an authenticated company admin to their own company row, but table-wide UPDATE privileges still allowed direct PostgREST calls to modify protected fields such as plan, billing status, trial dates, owner ID, AI automation settings, and internal admin configuration.

**Fix:** Replaced table-wide UPDATE with an explicit customer-profile column allowlist. Removed plan, billing status, and trial dates from the browser profile update payload. Platform-admin edits continue through the admin-only Edge Function.

**Status:** Fixed in the new migration and `app.js`.

### High: duplicate company creation was not race-safe

**Attack:** Concurrent conversion calls could both pass the pre-insert check and create two companies. Separate trial requests could also create duplicate companies for the same kennitala.

**Fix:** Added unique database indexes for source trial request and normalized kennitala. The admin creation path records the originating request on the company row.

**Status:** Fixed in the new migration and `admin-company-actions`.

### High: vulnerable build dependencies

**Attack surface:** Installed Vite/PostCSS versions had published high-severity advisories affecting developer/CI file access and Windows dev-server handling.

**Fix:** Updated the dependency lock to patched versions. `npm audit fix` reported zero remaining vulnerabilities.

**Status:** Fixed in `package-lock.json`.

### Medium: invitation diagnostics exposed production internals

Detailed invite diagnostics, JWT claim summaries, project details, and PII were returned and logged by default.

**Fix:** Diagnostics are stripped and detailed logging is disabled unless `INVITE_DEBUG_ENABLED=true`.

### Medium: signup and password-reset abuse depends on Supabase Auth configuration

Public UI signup is invite-only and an account alone grants no company or admin access. Direct Supabase Auth signup/reset endpoints remain governed by the hosted Auth configuration. Before onboarding, enable Supabase CAPTCHA, email confirmation, and conservative Auth email/IP rate limits. Consider a Before User Created hook if accounts themselves must be strictly invite-only.

### Low/informational: CSRF

Privileged requests use explicit bearer tokens rather than ambient cookies, so conventional cross-site request forgery does not apply. Public form submission is intentionally unauthenticated and is protected by validation and rate limiting. CORS is not treated as authorization.

## Tests performed

- Anonymous direct REST reads against companies, memberships, opportunities, trial requests, and contact requests were denied by grants/RLS.
- Anonymous calls to admin company actions, daily pipeline, and AI review were rejected.
- Static policy analysis covered company ID substitution, invite acceptance, membership roles, opportunity visibility, report ownership, and admin helpers.
- All Edge Functions were inventoried for service-role use and caller authentication.
- Browser HTML sinks, stored report rendering, URL handling, auth/session storage, and admin route guards were reviewed.
- Production build completed successfully after the fixes.
- `npm audit fix` completed with zero known vulnerabilities.

## Residual validation and deployment requirements

- Apply the new migration before deploying the updated browser bundle; otherwise public forms will either remain exposed or fail during a partial rollout.
- Deploy `public-form-submit`, `notify-trial-request`, `import-ted-notices`, `company-invite`, and `admin-company-actions` together.
- If existing companies share a normalized kennitala, resolve those rows before applying the unique index.
- A local Supabase database was not running, so `supabase db lint --local` could not connect. Validate the migration in a staging clone before production.
- A full authenticated two-user cross-tenant penetration test still requires two non-production customer accounts in separate companies. Do not use real customer accounts for that test.
