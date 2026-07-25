import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://asojxjbsgqbfpbepojzh.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0";

export const supabaseClient =
  SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== "PASTE_MY_ANON_PUBLIC_KEY_HERE"
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        flowType: "pkce",
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true,
      },
    })
    : null;
