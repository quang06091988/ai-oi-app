# 📦 CHANGELOG

### v1.6.1 – Nâng trải nghiệm người dùng (2025-06-03)

**✨ Cải tiến UX:**
- Gợi ý nhẹ đầu trang: "🌱 Bạn chỉ cần bắt đầu từ một câu hỏi nhỏ..."
- Placeholder gợi cảm hứng trong ô input
- Focus lại ô nhập sau khi gửi câu hỏi
- Toast “✅ AI đã trả lời!” sau mỗi phản hồi
- Hover hiệu ứng mượt mà khi xem nhật ký
- Dòng nhắc nhẹ nhàng phía dưới ô chat

**🛠 File thay đổi:**
- ✏️ `src/components/RealChat.tsx`
- ✏️ `src/components/DiaryEntry.tsx`
- ✏️ `src/App.tsx`

---

### v1.6 – Hồ sơ AI đầu tiên của bạn (2025-06-02)

**✨ Tính năng mới:**
- Xem lại toàn bộ câu hỏi thật + phản hồi GPT + cảm xúc đã lưu
- Giao diện `DiaryList` đẹp hơn, có nút 📸 lưu ảnh mỗi đoạn chat
- Tự động chuyển sang nhật ký sau 3 lượt hỏi đầu
- Toast động viên người dùng sau 3 lượt đầu tiên

**🛠 File thay đổi:**
- ➕ `src/components/DiaryList.tsx`
- ➕ `src/components/DiaryEntry.tsx`
- ✏️ `src/components/RealChat.tsx`
- ✏️ `src/App.tsx`

---

### v1.5 – Lưu ký ức GPT thật với cảm xúc người dùng (2025-05-31)

**✨ Tính năng mới:**
- Tích hợp gọi GPT thật (gpt-4o-mini)
- Hiển thị popup cảm xúc sau mỗi phản hồi GPT
- Lưu dữ liệu vào bảng `real_chats` gồm: `prompt`, `response`, `emotion`, `user_id`, `model`, `created_at`

**🛠 File thay đổi:**
- ➕ `src/services/realChatService.ts`
- ✏️ `src/components/RealChat.tsx`

**🎯 Mục tiêu:**
Ghi lại hành vi thật của người dùng khi trò chuyện với AI – tạo nền tảng phân tích hành vi và trải nghiệm cá nhân hóa sau này.

---

## [v1.4] – 2025-05-31

### ✨ Tính năng mới
- Tích hợp GPT thật bằng OpenAI API (`gpt-4o-mini`)
- Phản hồi hiển thị trực tiếp trên giao diện “Trò chuyện cùng AI ƠI!”
- Log phản hồi GPT rõ ràng trong console
- Bắt lỗi `invalid_api_key` và `insufficient_quota` thân thiện

### 🔧 Thay đổi
- Cập nhật `openaiService.ts` để gọi GPT thật bằng `fetch`
- Sửa `RealChat.tsx` để gửi/nhận tin nhắn GPT thật

### 📚 Tài liệu
- Cập nhật `README.md` với thông tin phiên bản V1.4

---

## [v1.3] – 2025-05-30

### ✨ Tính năng mới
- Supabase Auth – Đăng nhập bằng email OTP
- Hiển thị tên người dùng + nút Đăng xuất (AuthBanner)
- Gắn `user_id` vào dữ liệu prompt khi insert
- Lọc dữ liệu Supabase theo `user_id` (mỗi người chỉ thấy ký ức của họ)
- Tự động lấy `auth.uid()` trong insert
- UI tối giản, thân thiện, phù hợp Gen Z

### 🔐 Bảo mật
- Bật Row-Level Security (RLS) cho bảng `prompts`
- Tạo policy SELECT + INSERT theo `auth.uid() = user_id`
- Không cho phép UPDATE/DELETE từ client (mặc định Supabase block)

### 📚 Tài liệu
- Cập nhật `README.md` với thông tin phiên bản V1.3

---

## [v1.2] – 2025-05-29

### ✅ Tính năng
- Kết nối Supabase và lưu dữ liệu thật (prompt + emotion)
- Giao diện hiển thị lịch sử từ Supabase
- Loading state, thời gian định dạng `vi-VN`
- Toast khi copy prompt

---

## [v1.1] – 2025-05-28

- Cải thiện giao diện (font, spacing)
- UX Feedback: toast, copy, highlight khi lưu
- Ký ức AI từ LocalStorage

## [v1.0] – MVP Gốc

- Form trải nghiệm AI giả lập
- Prompt gợi ý
- Lưu dữ liệu local