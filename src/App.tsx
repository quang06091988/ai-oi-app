import { Routes, Route, Link } from 'react-router-dom';
import AuthBanner from './components/AuthBanner';
import RealChat from './components/RealChat';
import DiaryList from './components/DiaryList';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbff] to-[#f0f4ff] text-gray-800 font-sans p-4">
      <Toaster position="top-center" richColors />
      <div className="max-w-3xl mx-auto space-y-6">
        <nav className="text-center mb-4">
          <Link to="/" className="text-blue-600 underline mx-2">Trang chính</Link>
          <Link to="/diary" className="text-blue-600 underline mx-2">📖 Nhật ký AI</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <h1 className="text-3xl md:text-4xl font-bold text-center mt-6">
                ✨ AI Ơi! – Trải nghiệm AI đầu tiên của bạn
              </h1>
              <p className="text-center text-gray-600 mt-2 italic">
                Hãy hỏi điều bạn từng thắc mắc — AI sẽ trả lời ngay bây giờ.
              </p>
              <AuthBanner />
              <div className="border-t pt-4">
                <RealChat />
              </div>
            </>
          } />
          <Route path="/diary" element={<DiaryList />} />
        </Routes>
      </div>
    </div>
  );
}
