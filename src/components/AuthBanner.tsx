// src/components/AuthBanner.tsx

import { useState, useEffect } from 'react';
import { signInWithEmail, signOut, getCurrentUser } from '@/lib/auth';

export default function AuthBanner() {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmail(email);
      alert('📨 Đã gửi email đăng nhập! Hãy kiểm tra hộp thư.');
    } catch (err: any) {
      alert('❌ Lỗi: ' + err.message);
    }
  };

  const handleLogout = async () => {
    await signOut();
    setUser(null);
  };

  if (loading) return null;

  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-6 text-sm text-gray-700">
      {user ? (
        <div className="flex justify-between items-center">
          <p>🧑 Xin chào, <strong>{user.email}</strong></p>
          <button onClick={handleLogout} className="text-red-600 hover:underline">Đăng xuất</button>
        </div>
      ) : (
        <div className="space-y-2">
          <p>🔐 Đăng nhập để lưu trữ hành trình AI của riêng bạn:</p>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              className="w-full border px-3 py-1 rounded"
            />
            <button
              onClick={handleLogin}
              className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
            >
              Gửi link
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
