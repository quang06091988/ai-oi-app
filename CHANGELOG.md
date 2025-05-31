# 📦 CHANGELOG

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