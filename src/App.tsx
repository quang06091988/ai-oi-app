import { PromptGroup } from './components/PromptGroup';
import TryAIForm from './components/TryAIForm';
import PromptHistory from './components/PromptHistory';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbff] to-[#f0f4ff] text-gray-800 font-sans p-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-6">
          ✨ AI Ơi! – Trải nghiệm AI đầu tiên của bạn
        </h1>
        <PromptGroup />
        <TryAIForm />
        <PromptHistory />
      </div>
    </div>
  );
}
