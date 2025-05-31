import { supabase } from './supabaseClient';

export async function signInWithEmail(email: string) {
  const redirectUrl =
    window.location.hostname === 'localhost'
      ? 'http://localhost:5173'
      : 'https://ai-oi-app.vercel.app';

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: redirectUrl,
    },
  });

  if (error) throw new Error(error.message);
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return user;
}
