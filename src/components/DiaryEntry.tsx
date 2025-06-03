import React from 'react';

interface DiaryEntryProps {
  entryId: string;
  prompt: string;
  response: string;
  emotion: string;
  timestamp: string;
  onCapture?: () => void;
}

const DiaryEntry: React.FC<DiaryEntryProps> = ({
  entryId,
  prompt,
  response,
  emotion,
  timestamp,
  onCapture,
}) => {
  return (
    <div className="border rounded-2xl p-4 shadow-md bg-white mb-4 relative transition-transform hover:scale-[1.01]" id={`entry-${entryId}`}>
      <div className="text-sm text-gray-500">📅 {timestamp}</div>
      <div className="text-base mt-2">
        <span className="font-semibold">🧠 Bạn hỏi:</span>
        <p className="mt-1 italic">"{prompt}"</p>
      </div>
      <div className="text-base mt-3">
        <span className="font-semibold">🤖 AI trả lời:</span>
        <p className="mt-1">{response}</p>
      </div>
      <div className="text-sm text-right mt-2">📍 Cảm xúc: <span className="font-medium">{emotion}</span></div>
      {onCapture && (
        <button
          onClick={onCapture}
          className="absolute top-2 right-2 text-xs text-blue-600 border border-blue-500 rounded px-2 py-1 hover:bg-blue-50"
        >
          📸 Lưu ảnh
        </button>
      )}
    </div>
  );
};

export default DiaryEntry;
