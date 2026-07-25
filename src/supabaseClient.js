import { createClient } from "@supabase/supabase-js";

const runtimeConfig = typeof window === "undefined" ? {} : window;
const viteConfig = import.meta.env || {};

export const SUPABASE_URL = String(
  runtimeConfig.VERKRADAR_SUPABASE_URL || viteConfig.VITE_SUPABASE_URL || ""
).trim();
export const SUPABASE_ANON_KEY = String(
  runtimeConfig.VERKRADAR_SUPABASE_ANON_KEY || viteConfig.VITE_SUPABASE_ANON_KEY || ""
).trim();

export const supabaseClient =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        flowType: "pkce",
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true,
      },
    })
    : null;
