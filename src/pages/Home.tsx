import { PromptGroup } from '../components/PromptGroup';
import { TryAIForm } from '../components/TryAIForm';

const Home = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🇻🇳 AI ƠI! – Dự án phổ cập AI cho người Việt</h1>
      <PromptGroup />
      <TryAIForm />
    </div>
  );
};

export default Home;
