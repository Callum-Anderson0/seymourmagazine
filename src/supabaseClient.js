import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_API_KEY     // Your anon key here

export const supabase = createClient(supabaseUrl, supabaseAnonKey);