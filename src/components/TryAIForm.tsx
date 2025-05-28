import { useState, useEffect } from 'react';

export const TryAIForm = () => {
  const [input, setInput] = useState('');
  const [feeling, setFeeling] = useState('');
  const [history, setHistory] = useState<{ input: string, feeling: string }[]>([]);

  const handleSubmit = () => {
    if (!input || !feeling) return;
    const newEntry = { input, feeling };
    const updated = [...history, newEntry];
    setHistory(updated);
    localStorage.setItem('ai-oi-history', JSON.stringify(updated));
    setInput('');
    setFeeling('');
  };

  useEffect(() => {
    const saved = localStorage.getItem('ai-oi-history');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="mt-10 p-4 border rounded-xl bg-white space-y-4">
      <h2 className="text-xl font-bold">📝 Thử nhập prompt của bạn</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập câu hỏi, yêu cầu bạn muốn gửi tới AI..."
        className="w-full border p-2 rounded resize-none"
        rows={3}
      />
      <div>
        <label className="block mb-2 font-medium">💬 Cảm xúc sau khi thử?</label>
        <select
          value={feeling}
          onChange={(e) => setFeeling(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">-- Chọn cảm xúc --</option>
          <option value="😃 Thú vị">😃 Thú vị</option>
          <option value="😕 Bối rối">😕 Bối rối</option>
          <option value="🤔 Muốn tìm hiểu thêm">🤔 Muốn tìm hiểu thêm</option>
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Lưu trải nghiệm
      </button>

      {history.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold">📜 Lịch sử trải nghiệm:</h3>
          <ul className="list-disc pl-5 space-y-1">
            {history.map((h, i) => (
              <li key={i}>
                <strong>{h.input}</strong> – <em>{h.feeling}</em>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
