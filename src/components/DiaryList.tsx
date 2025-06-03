import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import DiaryEntry from './DiaryEntry';
import html2canvas from 'html2canvas';

interface RealChat {
  id: string;
  prompt: string;
  response: string;
  emotion: string;
  created_at: string;
}

const DiaryList: React.FC = () => {
  const [entries, setEntries] = useState<RealChat[]>([]);

  useEffect(() => {
    const fetchUserAndEntries = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('real_chats')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
        if (data) setEntries(data);
        if (error) console.error('Fetch error:', error);
      }
    };
    fetchUserAndEntries();
  }, []);

  const handleCapture = async (entryId: string) => {
    const element = document.getElementById(`entry-${entryId}`);
    if (element) {
      const canvas = await html2canvas(element);
      const link = document.createElement('a');
      link.download = `AI-Nhat-ky-${entryId}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 pt-6 pb-12">
      <h1 className="text-2xl font-bold text-center mb-3">📖 Nhật ký AI đầu tiên của bạn</h1>
      <p className="text-center text-gray-600 italic mb-6">
        Đây là những gì bạn đã hỏi – và AI đã trả lời.<br />
        Một hành trình nhỏ, nhưng là bước đầu tiên thật sự.
      </p>
      {entries.length === 0 ? (
        <p className="text-center text-gray-500">Chưa có cuộc trò chuyện nào.</p>
      ) : (
        entries.map((entry) => (
          <DiaryEntry
            key={entry.id}
            entryId={entry.id}
            prompt={entry.prompt}
            response={entry.response}
            emotion={entry.emotion}
            timestamp={new Date(entry.created_at).toLocaleString()}
            onCapture={() => handleCapture(entry.id)}
          />
        ))
      )}
    </div>
  );
};

export default DiaryList;
