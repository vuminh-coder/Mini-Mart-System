# 🛒 Hệ Thống Quản Trị Hệ Thống Mini-Mart

Một ứng dụng hoàn chỉnh (Full-stack) được xây dựng dành cho việc quản lý sản phẩm nội bộ của cửa hàng tiện lợi / Mini-Mart. Dự án cung cấp một giao diện quản trị tuyệt đẹp, tốc độ cao được xây dựng trên React Router v6 kết hợp với một máy chủ Backend API tốc độ cao viết bằng Express.

## 🚀 Tính năng nổi bật

- 🔐 **Bảo mật & Phân quyền:** Form đăng nhập với Protected Routes, ngăn chặn người dùng chưa xác thực truy cập vào tài nguyên.
- 📦 **Quản lý Sản phẩm (CRUD):** Thêm mới, Chỉnh sửa, Đọc danh sách, và Xóa sản phẩm theo thời gian thực (Cập nhật thẳng vào CSDL máy chủ thông qua REST API).
- 🔍 **Tìm kiếm & Phân loại Thông minh:** Áp dụng thuật toán memoization để lọc danh mục sản phẩm và tìm kiếm theo từ khóa cực mốc với tốc độ < 50ms.
- 📄 **Module Phân Trang:** Phân trang sản phẩm gọn gàng, tự động tính toán tổng số trang và điều khiển tiến/lùi mượt mà.
- ✨ **Trải Nghiệm UX Cao Cấp:** Sử dụng `react-toastify` và `SweetAlert2` cho mọi thông báo thành công / thất bại, và xác nhận thay vì Alert mặc định của phần mềm.
- 🤖 **Trợ lý Ảo AI Tích Hợp:** Có Chatbot đa năng tích hợp mô hình Gemini AI, có khả năng tư vấn và nắm rõ context các sản phẩm hiện trường kho.

## 🛠️ Công nghệ sử dụng (Tech Stack)

### 🖥️ Frontend (`/Exam-react`)
- **Core:** ReactJS (Vite Build Tool)
- **Routing:** React Router DOM (v6)
- **HTTP Client:** Axios
- **UI/UX:** Vanilla CSS, React-Toastify, SweetAlert2

### ⚙️ Backend (`/Exam-backend`)
- **Core:** Node.js (với Nodemon để hot-reload)
- **Server:** Express.js
- **Database:** In-Memory Database (Tạm thời lưu trạng thái ngay trên bộ nhớ tiến trình, siêu nhẹ và nhanh).

## 📂 Cấu trúc thư mục

```text
📦 Mini-Mart-System/
 ┣ 📂 Exam-backend/       # Thư mục chứa REST API Server
 ┃ ┣ 📜 index.js         # Entry point chính xử lý toàn bộ logic API/CORS
 ┃ ┗ 📜 package.json     # Chứa dependencies như express, cors, nodemon
 ┗ 📂 Exam-react/         # Thư mục Frontend React App
   ┣ 📂 src/
   ┃ ┣ 📂 components/    # Chứa Header, ChatbotGemini...
   ┃ ┣ 📂 layouts/       # Chứa Layout Bọc vòng ProtectedRoutes
   ┃ ┣ 📂 pages/         # Login, Products, AddProduct, EditProduct
   ┃ ┗ 📜 App.jsx        # Điểm kiểm soát Router và Fetch Data gốc
   ┣ 📜 index.html
   ┗ 📜 package.json     # Chứa dependencies (vite, react, axios, v.v)
```

## 💻 Cài đặt & Khởi chạy

Để chạy dự án này trên môi trường Local của bạn, vui lòng mở 2 Terminal (Cửa sổ lệnh) riêng biệt.

### 1. Khởi chạy Backend (Port 5000)
```bash
cd Exam-backend
npm install
npm run start # hoặc npx nodemon index.js
```
*Server sẽ thông báo: `Server listening on http://localhost:5000`*

### 2. Khởi chạy Frontend (Port 5173 mặc định)
```bash
cd Exam-react
npm install
npm run dev
```

### 3. Thông tin Đăng nhập Mặc định
Trang web sẽ tự động mở tại: `http://localhost:5173/`
Vui lòng sử dụng thông tin sau để vượt qua tường lửa uỷ quyền:
- **Tên đăng nhập:** `admin`
- **Mật khẩu:** `admin1234`

## 🔮 Bức tranh tương lai (Roadmap)
- Tích hợp MongoDB (Mongoose) làm cở sở dữ liệu vĩnh viễn vững chắc trên GitHub.
- Đăng nhập bảo mật theo chuẩn JWT Token ở máy chủ API.
- Cải thiện tải ảnh nội bộ lên Backend thay vì dán URL liên kết ngoài.
- Biểu đồ thống kê số lượng tồn kho hiển thị trực quan thông qua ChartJS.
