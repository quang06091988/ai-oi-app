import { useState } from 'react';
import { Check, Clipboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const prompts = [
  'Viết một đoạn giới thiệu bản thân ấn tượng bằng tiếng Việt',
  'Tạo thực đơn ăn kiêng trong 1 tuần theo kiểu Việt Nam',
  'Hướng dẫn dùng ChatGPT để học từ vựng tiếng Anh mỗi ngày',
];

export function PromptGroup() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (prompt: string, index: number) => {
    await navigator.clipboard.writeText(prompt);
    setCopiedIndex(index);
    toast('📋 Prompt đã được copy!');
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">📚 Prompt gợi ý:</h2>
      <ul className="space-y-2">
        {prompts.map((prompt, index) => (
          <li
            key={index}
            className="bg-white rounded-xl shadow p-3 flex justify-between items-center border hover:border-indigo-300 transition"
          >
            <span className="text-sm">{prompt}</span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleCopy(prompt, index)}
              className="ml-2"
            >
              {copiedIndex === index ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Clipboard className="w-4 h-4" />
              )}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
