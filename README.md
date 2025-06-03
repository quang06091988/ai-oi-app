# 🌟 AI ƠI! – Trải nghiệm AI đầu tiên của bạn

Website: [https://ai-oi-app.vercel.app](https://ai-oi-app.vercel.app)  
Source code: [github.com/quang06091988/ai-oi-app](https://github.com/quang06091988/ai-oi-app)

<p align="center">
  <img src="/public/ai-oi-preview.webp" alt="✨ AI Ơi – Dự án phổ cập AI cho người mới, ai-oi.app.vercel.app" width="600" />
</p>

---

## 🧠 Mục tiêu

Giúp **người mới tại Việt Nam** lần đầu tiếp cận ChatGPT một cách **cảm xúc, dễ hiểu và có dấu ấn cá nhân**.

- ❌ Không cần tài khoản OpenAI
- ❌ Không yêu cầu kiến thức kỹ thuật
- ✅ Chỉ cần cảm xúc và một câu hỏi đầu tiên

---

## 🧩 Tính năng chính

| Tính năng                            | Mô tả                                                                 |
|-------------------------------------|----------------------------------------------------------------------|
| 🧠 Hỏi AI thật                      | Tích hợp GPT-4o mini qua API chính thức                             |
| 💬 Gợi ý prompt cảm xúc            | Gợi mở người mới khi không biết hỏi gì                              |
| 🧾 Ghi lại ký ức AI đầu tiên       | Lưu prompt, phản hồi, cảm xúc vào Supabase                          |
| 📖 Nhật ký AI                      | Xem lại hành trình trò chuyện, lưu ảnh entry thành PNG              |
| 🥳 Mốc 3 câu hỏi đầu tiên          | Sau 3 lần hỏi thật → toast chúc mừng → tự chuyển sang nhật ký       |
| 📦 Sẵn sàng mở rộng               | Chuẩn bị tính năng mint NFT & chia sẻ nhật ký AI đầu tiên           |

---

## 🛠️ Công nghệ sử dụng

| Layer       | Công nghệ                                  |
|-------------|--------------------------------------------|
| Frontend    | React + TypeScript + TailwindCSS + Vite   |
| Backend     | Supabase (Auth + Database)                |
| AI          | OpenAI GPT-4o mini (gọi qua API)          |
| Hosting     | Vercel                                     |
| Storage     | Supabase Table `real_chats`               |
| UI/UX       | Tối giản, phù hợp Gen Z và người mới       |

---

## 🚀 Khởi chạy local

```bash
# 1. Clone dự án
git clone https://github.com/quang06091988/ai-oi-app.git
cd ai-oi-app

# 2. Cài đặt
npm install

# 3. Tạo file .env.local với các biến sau
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
VITE_OPENAI_API_KEY=...

# 4. Chạy local
npm run dev
```

---

## 🗂 Cấu trúc thư mục

```
src/
├─ components/         # Các UI component: RealChat, DiaryEntry, DiaryList...
├─ lib/                # Các client dùng chung: supabaseClient, auth...
├─ services/           # Logic xử lý với AI và Supabase
├─ App.tsx             # Routing chính
└─ main.tsx            # Entry point
```

---

## 📜 Phiên bản

- Xem tất cả thay đổi trong [`CHANGELOG.md`](./CHANGELOG.md)

---

## 💖 Góp ý & đóng góp

AI ƠI! là dự án **open-source vì cộng đồng Việt**.  
Mọi đóng góp về code, giao diện, prompt mẫu, gợi ý UX đều được chào đón!

- Mở Issue để đề xuất
- Fork và tạo Pull Request
- Gửi lời nhắn tại [Facebook](https://facebook.com/quang06091988)

---

## 🌏 Tương lai

> Phiên bản tiếp theo sẽ cho phép bạn **mint NFT từ câu hỏi đầu tiên của mình với AI**, như một mốc kỷ niệm cảm xúc.

---

## © 2025 – [Quang Trending](https://quangtrending.com)

Dự án thuộc [phong trào phổ cập AI](https://ai-oi-app.vercel.app) – “AI dành cho người thật tại Việt Nam”.