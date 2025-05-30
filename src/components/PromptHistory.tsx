import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Prompt = {
  id: number;
  prompt: string;
  emotion: string;
  created_at: string;
};

export default function PromptHistory() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrompts = async () => {
      setLoading(true);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setPrompts([]);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('prompts')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Lỗi khi fetch dữ liệu:', error.message);
        setPrompts([]);
      } else {
        setPrompts(data || []);
      }

      setLoading(false);
    };

    fetchPrompts();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">🧠 Ký ức AI đầu tiên của bạn</h2>
      {loading ? (
        <p className="text-gray-500">Đang tải dữ liệu...</p>
      ) : prompts.length === 0 ? (
        <p className="text-gray-500">Chưa có dữ liệu nào được lưu.</p>
      ) : (
        <ul className="space-y-3">
          {prompts.map((item) => (
            <li
              key={item.id}
              className="border border-gray-300 rounded-lg p-3 bg-white shadow-sm"
            >
              <p className="text-gray-800">{item.prompt}</p>
              <p className="text-sm text-gray-500 italic mt-1">
                😄 Cảm xúc: <strong>{item.emotion}</strong>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(item.created_at).toLocaleString('vi-VN')}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
