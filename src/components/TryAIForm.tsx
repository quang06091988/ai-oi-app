import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

type HistoryItem = {
  prompt: string;
  feeling: string;
};

export function TryAIForm() {
  const [prompt, setPrompt] = useState('');
  const [feeling, setFeeling] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('ai-experience-history');
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt || !feeling) {
      toast.error('Vui lòng điền đầy đủ thông tin');
      return;
    }

    const newItem: HistoryItem = { prompt, feeling };
    const updatedHistory = [newItem, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('ai-experience-history', JSON.stringify(updatedHistory));

    setPrompt('');
    setFeeling('');
    toast.success('🎉 Đã lưu trải nghiệm đầu tiên với AI!');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">🧠 Hãy thử dùng AI:</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          placeholder="Bạn đã hỏi AI điều gì?"
          value={prompt}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrompt(e.target.value)}
        />
        <Input
          placeholder="Cảm xúc sau khi dùng AI?"
          value={feeling}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFeeling(e.target.value)}
        />
        <Button type="submit" className="w-full">
          Lưu trải nghiệm AI đầu tiên
        </Button>
      </form>

      {history.length > 0 && (
        <div className="mt-4">
          <h3 className="text-md font-medium mb-2">🕰️ Ký ức AI của bạn:</h3>
          <ul className="space-y-1">
            {history.map((item, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded-lg">
                <div className="text-sm">
                  <strong>Prompt:</strong> {item.prompt}
                </div>
                <div className="text-sm">
                  <strong>Cảm xúc:</strong> {item.feeling}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
