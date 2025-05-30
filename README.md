# 🧠 AI ƠI! – Dự án phổ cập AI thực tế cho người Việt

> Phiên bản: **V1.3**
> Ngày cập nhật: 30/05/2025

---

## 🌟 Giới thiệu

**AI ƠI!** là một ứng dụng đơn giản giúp người dùng Việt Nam lần đầu trải nghiệm sức mạnh của AI như ChatGPT theo cách dân dã, thân thiện và có cảm xúc.

---

## 🚀 Có gì mới ở V1.3?

🎯 **Cá nhân hóa trải nghiệm bằng Supabase Auth**

✅ Đăng nhập bằng Email OTP  
✅ Chào người dùng + cho phép Đăng xuất  
✅ Mỗi người dùng chỉ thấy trải nghiệm của chính họ (filter theo `user_id`)  
✅ Dữ liệu lưu lên Supabase an toàn nhờ RLS  
✅ Tự động gán `user_id` khi lưu prompt  
✅ UI tối giản, phù hợp Gen Z

---

## ✅ Tính năng đã có

- 📌 Form nhập prompt + cảm xúc
- 📌 Gợi ý prompt có sẵn
- 📌 Hiển thị ký ức AI (local + Supabase)
- 📌 Loading state, toast, hiệu ứng UX mượt
- 📌 Giao diện đẹp, mobile responsive
- 📌 Lưu data thật vào Supabase DB (PostgreSQL)

---

## 🔐 Bảo mật với Supabase RLS

- Dữ liệu trong bảng `prompts` được bảo vệ bằng Row-Level Security:
  - Chỉ SELECT/INSERT nếu `auth.uid() = user_id`
  - Không hỗ trợ UPDATE/DELETE để tránh rủi ro

---

## 🛠 Công nghệ sử dụng

- **React + TypeScript + TailwindCSS**
- **Supabase Auth + Database + RLS**
- **LocalStorage**
- **Triển khai Vercel**

---

## 🧪 Cách chạy local

```bash
npm install
npm run dev
```

---

## 🌍 Trang chính thức

👉 [https://ai-oi-app.vercel.app](https://ai-oi-app.vercel.app)

---

## 🏁 Định hướng V1.4 (dự kiến)

- 🎁 Mint NFT chứng nhận “Người dùng AI đầu tiên” qua Zora
- 🧠 Gợi ý AI thật (GPT API)
- 🌱 Mở trải nghiệm cộng đồng (share ký ức ẩn danh)