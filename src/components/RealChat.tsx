import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { askGPT } from '../services/openaiService';
import { saveRealChat } from '../services/realChatService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function RealChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showEmotionPopup, setShowEmotionPopup] = useState(false);
  const [latestPrompt, setLatestPrompt] = useState('');
  const [latestResponse, setLatestResponse] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newUserMessage: Message = {
      role: 'user',
      content: input.trim(),
    };

    setMessages([...messages, newUserMessage]);
    setInput('');
    setLoading(true);

    try {
      const aiReply = await askGPT(input.trim());
      const newAssistantMessage: Message = {
        role: 'assistant',
        content: aiReply,
      };
      setMessages((prev) => [...prev, newAssistantMessage]);

      // 💾 Chuẩn bị lưu cảm xúc
      setLatestPrompt(input.trim());
      setLatestResponse(aiReply);
      setShowEmotionPopup(true);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '🛑 Xin lỗi, AI gặp lỗi khi trả lời. Vui lòng thử lại.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-2xl shadow-md bg-white relative">
      <h2 className="text-xl font-bold mb-4">🧠 Trò chuyện cùng AI ƠI!</h2>

      <div className="space-y-2 max-h-96 overflow-y-auto border p-2 rounded-md mb-4 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-xl text-sm whitespace-pre-line ${
              msg.role === 'user'
                ? 'bg-blue-100 text-right ml-12'
                : 'bg-green-100 text-left mr-12'
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && (
          <div className="italic text-gray-400 text-sm">AI đang trả lời...</div>
        )}
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Nhập điều bạn muốn hỏi AI..."
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          className="flex-1"
        />
        <Button onClick={sendMessage} disabled={loading || !input.trim()}>
          Gửi
        </Button>
      </div>

      {showEmotionPopup && (
        <div className="fixed bottom-6 left-6 bg-white p-4 rounded-xl shadow-xl z-50 max-w-xs border border-gray-200">
          <p className="text-sm mb-2">💬 Cảm xúc của bạn sau khi dùng AI là gì?</p>
          <div className="flex gap-2">
            {['hay', 'bình thường', 'không thích'].map((emotion) => (
              <button
                key={emotion}
                onClick={async () => {
                  await saveRealChat({
                    prompt: latestPrompt,
                    response: latestResponse,
                    emotion,
                  });
                  setShowEmotionPopup(false);
                }}
                className="px-3 py-1 bg-indigo-100 rounded hover:bg-indigo-200 text-sm"
              >
                {emotion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
