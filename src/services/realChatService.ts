// src/services/realChatService.ts
import { supabase } from '@/lib/supabaseClient';
import { getCurrentUser } from '@/lib/auth';

interface RealChatRecord {
  prompt: string;
  response: string;
  emotion: string;
  model?: string;
}

export async function saveRealChat({
  prompt,
  response,
  emotion,
  model = 'gpt-4o-mini',
}: RealChatRecord) {
  try {
    const user = await getCurrentUser();
    if (!user) throw new Error('Người dùng chưa đăng nhập');

    const { error } = await supabase.from('real_chats').insert([
      {
        user_id: user.id,
        prompt,
        response,
        emotion,
        model,
      },
    ]);

    if (error) throw error;
  } catch (err) {
    console.error('❌ Lỗi khi lưu real chat:', err);
  }
}
