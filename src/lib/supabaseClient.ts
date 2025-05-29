import { createClient } from '@supabase/supabase-js'

// 🧪 Lấy thông tin từ biến môi trường Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 🚀 Tạo Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
