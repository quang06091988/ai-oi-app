import { useState } from 'react';

const prompts = {
  "🎓 Học sinh": [
    "Giải thích định luật Newton dễ hiểu nhất có thể",
    "Viết đoạn văn về 'Mẹ' bằng 5 câu",
  ],
  "👩‍🍼 Mẹ bán hàng": [
    "Viết caption bán hàng cho nước mắm truyền thống",
    "Gợi ý cách livestream thu hút người xem",
  ],
  "🛵 Chú xe ôm": [
    "Cách nói chuyện vui vẻ với khách đi đường xa",
    "Viết lời giới thiệu bản thân thân thiện",
  ],
};

export const PromptGroup = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">📚 Gợi ý prompt theo nhóm người dùng</h2>
      {Object.entries(prompts).map(([group, groupPrompts]) => (
        <div key={group} className="bg-gray-100 p-4 rounded-xl">
          <h3 className="font-semibold">{group}</h3>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            {groupPrompts.map((prompt, idx) => (
              <li key={idx} className="flex items-start justify-between gap-2">
                <span className="flex-1">{prompt}</span>
                <button
                  onClick={() => handleCopy(prompt)}
                  className="text-sm px-2 py-1 bg-blue-100 hover:bg-blue-200 rounded"
                >
                  {copied === prompt ? "✅ Copied!" : "📋 Copy"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
