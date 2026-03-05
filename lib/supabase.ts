import 'expo-sqlite/localStorage/install';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl ='https://ipptubymgoibmxsqjvif.supabase.co'
const supabasePublishableKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwcHR1YnltZ29pYm14c3FqdmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI0ODY4OTAsImV4cCI6MjA4ODA2Mjg5MH0.vrmRu-gPFb6zL7TrOlvZJctN84CZ-0BPl8mmRpUlpA8'

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: localStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})