# 💡 AI ƠI! – Nền tảng phổ cập AI cho người Việt

🌐 Website: https://ai-oi-app.vercel.app  
📦 GitHub: https://github.com/quang06091988/ai-oi-app

---

## 🎯 Mục tiêu
Tạo ra một trải nghiệm AI đầu tiên thật cảm xúc và gần gũi cho người Việt Nam — từ học sinh, người lao động đến người lớn tuổi — thông qua giao diện thân thiện, prompt gợi ý và lưu lại cảm xúc sau trải nghiệm.

---

## ✅ Các phiên bản

### 📌 V1.5 – Lưu ký ức thật từ GPT
- Tích hợp AI GPT thật (gpt-4o-mini)
- Sau mỗi phản hồi GPT, hiển thị popup hỏi cảm xúc người dùng
- Lưu prompt + response + emotion + user_id vào bảng `real_chats` trên Supabase
- Gợi mở nền tảng cho phân tích hành vi và cá nhân hoá

### 📌 V1.4 – Tích hợp GPT thật
- Gọi GPT bằng API Key từ `.env`
- Hiển thị phản hồi trong giao diện chat `RealChat`

### 📌 V1.3 – Đăng nhập và cá nhân hóa
- Đăng nhập email (Supabase Auth)
- Gắn `user_id` vào dữ liệu cảm xúc
- Lọc lịch sử theo từng người dùng

### 📌 V1.2 – Lưu dữ liệu thật với Supabase
- Kết nối Supabase + PostgreSQL + Auth
- Tạo bảng `prompts`, lưu `prompt` + `emotion`

### 📌 V1.1 – Trải nghiệm cảm xúc
- Cải tiến giao diện (font, khoảng cách, màu sắc)
- Hiệu ứng UX khi copy/lưu prompt

### 📌 V1.0 – MVP đầu tiên
- Giao diện đơn giản, có prompt gợi ý
- Form trải nghiệm AI giả lập
- Lưu lịch sử vào localStorage

---

## 🛠 Công nghệ
- Frontend: React + TypeScript + TailwindCSS + Vite
- Backend: Supabase (PostgreSQL + Auth + RLS)
- Triển khai: Vercel

---

## 🧩 Cơ sở dữ liệu Supabase

### prompts
| Trường       | Kiểu dữ liệu | Mô tả                  |
|--------------|---------------|--------------------------|
| id           | uuid          | khoá chính               |
| user_id      | uuid          | gắn với người dùng       |
| prompt       | text          | prompt gợi ý             |
| emotion      | text          | cảm xúc sau trải nghiệm  |
| created_at   | timestamp     | thời gian lưu            |

### real_chats (từ V1.5)
| Trường       | Kiểu dữ liệu | Mô tả                     |
|--------------|---------------|---------------------------|
| id           | uuid          | khoá chính                |
| user_id      | uuid          | gắn với người dùng        |
| prompt       | text          | câu hỏi người dùng thật   |
| response     | text          | phản hồi GPT              |
| emotion      | text          | cảm xúc thật              |
| model        | text          | model AI (mặc định gpt-4o-mini) |
| created_at   | timestamp     | thời gian lưu             |

---

## 📄 File cấu trúc chính
```
├── src/
│   ├── components/
│   │   ├── RealChat.tsx ← trò chuyện AI
│   │   └── TryAIForm.tsx ← form lưu trải nghiệm đầu tiên
│   ├── services/
│   │   ├── openaiService.ts ← gọi GPT
│   │   └── realChatService.ts ← lưu GPT thật vào Supabase
│   └── lib/
│       ├── auth.ts ← Supabase Auth
│       └── supabaseClient.ts
```

---

## ✨ Giấy phép
MIT Open Source — đóng góp tại: https://github.com/quang06091988/ai-oi-app

---

## 📢 Đóng góp
Nếu bạn muốn hỗ trợ phổ cập AI tại Việt Nam, hãy đóng góp ý tưởng hoặc PR trực tiếp trên GitHub!
