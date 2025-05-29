# 🧠 AI ƠI! – Dự án phổ cập AI thực tế cho người Việt

> Phiên bản: **V1.2**
> Ngày cập nhật: 29/05/2025

---

## 🌟 Giới thiệu

**AI ƠI!** là một ứng dụng đơn giản giúp người dùng Việt Nam lần đầu tiếp cận và trải nghiệm sức mạnh của AI (như ChatGPT) theo cách nhẹ nhàng, dễ hiểu và cá nhân hóa.

---

## 🚀 Tính năng chính – V1.2

✅ **Hiển thị danh sách prompt mẫu** theo nhóm  
✅ **Form nhập prompt + cảm xúc + lưu trữ localStorage & Supabase**  
✅ **Hiển thị lịch sử tương tác từ LocalStorage và Supabase**  
✅ **Giao diện đẹp hơn** với TailwindCSS  
✅ **Trải nghiệm người dùng nâng cao**:
- Font chữ mới: Be Vietnam Pro, Inter
- Phản hồi khi copy (toast)
- Highlight khi lưu lịch sử
- Hiển thị thời gian thực theo chuẩn vi-VN
- Phân biệt rõ prompt local và prompt thật (từ Supabase)

---

## 🛠️ Công nghệ sử dụng

- **React + Vite**
- **TailwindCSS**
- **TypeScript**
- **LocalStorage + Supabase (DB + Auth)** để lưu trạng thái
- **Triển khai Vercel**

---

## 🗂️ Cấu trúc thư mục chính

```
ai-oi-app/
├── public/
├── src/
│   ├── components/
│   │   ├── PromptGroup.tsx
│   │   ├── TryAIForm.tsx
│   │   └── PromptHistory.tsx
│   ├── lib/
│   │   └── supabaseClient.ts
│   ├── index.css
│   ├── main.tsx
│   └── App.tsx
├── .env.example
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🧪 Cách chạy local

```bash
npm install
npm run dev
```

Mở trình duyệt tại [http://localhost:5173](http://localhost:5173)

---

## 📦 Build production

```bash
npm run build
```

---

## 🏁 Milestone tiếp theo (V1.3 - dự kiến)

- 🔐 Đăng nhập Supabase Auth (Email/Google)
- 👤 Cá nhân hóa prompt theo người dùng
- 🌍 Chia sẻ prompt lên mạng xã hội
- 🧾 Tạo NFT chứng nhận "Người dùng AI lần đầu" qua Zora

---

## 🇻🇳 Dự án thuộc chuỗi **NFTơi! + AI ƠI!**
> Tự build sản phẩm Web3 + AI thật sự dành cho người Việt.

---