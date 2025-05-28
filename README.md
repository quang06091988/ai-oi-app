
# 🧠 AI ƠI! – Dự án phổ cập AI thực tế cho người Việt

> Phiên bản: **V1.1**
> Ngày cập nhật: 28/05/2025

---

## 🌟 Giới thiệu

**AI ƠI!** là một ứng dụng đơn giản giúp người dùng Việt Nam lần đầu tiếp cận và trải nghiệm sức mạnh của AI (như ChatGPT) theo cách nhẹ nhàng, dễ hiểu và cá nhân hóa.

---

## 🚀 Tính năng chính – V1.1

✅ **Hiển thị danh sách prompt mẫu** theo nhóm  
✅ **Form nhập prompt cảm xúc + lưu trữ localStorage**  
✅ **Hiển thị lịch sử tương tác** ngay trên giao diện  
✅ **Giao diện đẹp hơn** với TailwindCSS  
✅ **Trải nghiệm người dùng nâng cao**:
- Font chữ mới: Be Vietnam Pro, Inter
- Phản hồi khi copy (toast)
- Highlight khi lưu lịch sử

---

## 🛠️ Công nghệ sử dụng

- **React + Vite**
- **TailwindCSS**
- **TypeScript**
- **LocalStorage** để lưu trạng thái
- **Không dùng backend**

---

## 🗂️ Cấu trúc thư mục chính

```
ai-oi-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PromptGroup.tsx
│   │   └── TryAIForm.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── index.css
│   ├── main.tsx
│   └── App.tsx
├── tailwind.config.js
├── postcss.config.js
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

## 🏁 Milestone tiếp theo (V1.2 - gợi ý)

- ☁️ Kết nối với Supabase để lưu dữ liệu thật
- 🎨 Cho phép người dùng tùy chỉnh giao diện prompt
- 🌍 Chia sẻ prompt lên mạng xã hội
- 🧾 Tạo NFT chứng nhận "Người dùng AI lần đầu" qua Zora

---

## 🇻🇳 Dự án thuộc chuỗi **NFTơi! + AI ƠI!**
> Tự build sản phẩm Web3 + AI thật sự dành cho người Việt.

---
