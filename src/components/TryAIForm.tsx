import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function TryAIForm() {
  const [prompt, setPrompt] = useState('');
  const [emotion, setEmotion] = useState('');
  const [memories, setMemories] = useState<{ prompt: string; emotion: string }[]>([]);

  const handleSubmit = async () => {
    if (!prompt || !emotion) return;

    const newMemory = { prompt, emotion };

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      alert('❌ Bạn cần đăng nhập để lưu dữ liệu!');
      return;
    }

    const { error } = await supabase.from('prompts').insert([
      {
        prompt,
        emotion,
        user_id: user.id,
      },
    ]);

    if (error) {
      console.error('Lỗi khi lưu Supabase:', error.message);
      return;
    }

    const updatedMemories = [newMemory, ...memories];
    setMemories(updatedMemories);
    setPrompt('');
    setEmotion('');
    localStorage.setItem('ai_memories', JSON.stringify(updatedMemories));
  };

  useEffect(() => {
    const saved = localStorage.getItem('ai_memories');
    if (saved) setMemories(JSON.parse(saved));
  }, []);

  return (
    <div className="space-y-4 mt-4">
      <h2 className="text-xl font-semibold">🧠 Hãy thử dùng AI:</h2>
      <input
        type="text"
        placeholder="Bạn đã hỏi AI điều gì?"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full border px-3 py-2 rounded shadow-sm"
      />
      <input
        type="text"
        placeholder="Cảm xúc sau khi dùng AI?"
        value={emotion}
        onChange={(e) => setEmotion(e.target.value)}
        className="w-full border px-3 py-2 rounded shadow-sm"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Lưu trải nghiệm AI đầu tiên
      </button>

      {memories.length > 0 && (
        <div className="bg-gray-100 rounded-xl p-4 mt-6">
          <h3 className="font-semibold text-gray-800 mb-2">🙋‍♀️ Ký ức AI của bạn:</h3>
          <ul className="space-y-3">
            {memories.map((item, index) => (
              <li key={index} className="bg-white rounded p-3 shadow-sm">
                <p><strong>Prompt:</strong> {item.prompt}</p>
                <p><strong>Cảm xúc:</strong> {item.emotion}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
