# VerkRadar Production URL

Primary production URL:

```text
https://verkradar.is
```

The Vercel deployment URL may still exist internally, but user-facing links, auth callbacks, invite links and notification emails should use `https://verkradar.is`.

## Supabase Auth Settings

Set the Supabase Auth Site URL to:

```text
https://verkradar.is
```

Add redirect URLs:

```text
https://verkradar.is/auth/callback
https://verkradar.is/*
```

Keep localhost redirects for development, for example:

```text
http://localhost:5173/auth/callback
http://localhost:5173/*
http://127.0.0.1:5173/auth/callback
http://127.0.0.1:5173/*
```

## Edge Function Secrets

Set the app URL used by server-generated links:

```bash
supabase secrets set VERKRADAR_APP_URL=https://verkradar.is
```

## Vercel Routing

`vercel.json` rewrites `/auth/callback` and all SPA routes to `index.html`.

Required paths to verify:

```text
/
/auth/callback
/#/accept-invite
/#/dashboard
```

## DNS / Hostinger

Point `verkradar.is` to the Vercel project as the primary production domain. Do not configure a redirect from `verkradar.is` to the Vercel deployment URL.
