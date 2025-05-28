# 🇻🇳 AI ƠI! – Dự án phổ cập AI cho người Việt

**Tên mã:** `ai-oi-app`  
**Stack:** React + Vite + TypeScript  
**Trạng thái:** MVP ✅

---

## 🎯 Mục tiêu dự án

AI ƠI! là một chiến dịch công nghệ – xã hội nhằm:

- Giúp **người dân Việt Nam** tiếp cận ChatGPT và công cụ AI **một cách dễ hiểu, dễ dùng và dễ lan tỏa**.
- Tập trung vào các nhóm **ít có cơ hội tiếp cận công nghệ hiện đại**, như học sinh tỉnh lẻ, người bán hàng nhỏ, lao động phổ thông.
- Truyền cảm hứng bằng cách ghi dấu **“Lần đầu dùng AI”** – và **mint NFT** chứng nhận trải nghiệm đầu tiên.

---

## 🧱 Cấu trúc dự án

```
ai-oi-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── PromptGroup.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── styles/
├── package.json
├── tsconfig.json
├── vite.config.ts
```

---

## 🔥 Tính năng MVP hiện tại

### ✅ 1. Trang chủ giới thiệu chiến dịch AI ƠI!
- Hiển thị lời chào thân thiện
- Định hướng rõ ràng và gọn gàng

### ✅ 2. PromptGroup – Gợi ý theo nhóm người dùng
Hiển thị 3 nhóm đối tượng:
- 👩‍🎓 Học sinh cấp 3
- 👩‍🍼 Mẹ bán hàng online
- 🧑‍🔧 Chú xe ôm/grab

👉 Mỗi nhóm có 2 prompt mẫu gợi ý – bấm copy cực nhanh để dùng thử ngay!

### ✅ 3. Copy prompt vào clipboard + Alert xác nhận

---

## 🚧 Kế hoạch phát triển tiếp theo

| Giai đoạn | Tính năng bổ sung |
|-----------|-------------------|
| V1.1      | Giao diện đẹp hơn bằng TailwindCSS |
| V1.2      | Form ghi nhận cảm xúc lần đầu dùng AI |
| V1.3      | Kết nối Supabase để lưu log người dùng |
| V1.4      | Mint NFT “Tôi đã dùng AI lần đầu” từ NFTơi! |
| V1.5      | Trang chia sẻ câu chuyện người thật dùng AI |

---

## 📦 Cách chạy dự án

```bash
git clone https://github.com/yourname/ai-oi-app.git
cd ai-oi-app
npm install
npm run dev
```

Sau đó mở trình duyệt:  
👉 http://localhost:5173

---

## 💡 Triết lý dự án

> “AI không nên chỉ là công cụ của dân kỹ thuật –  
> mà phải là người bạn đồng hành của mọi người dân Việt Nam.”  
> – Người khởi xướng AI ƠI!
