
# 🧑‍💼 Employee Management System

Hệ thống quản lý nhân viên đơn giản được xây dựng bằng **React**, **TypeScript** và **Ant Design**.

## 🚀 Công nghệ sử dụng

- ⚛️ React 18 – Thư viện UI chính
- 🟦 TypeScript – Ngôn ngữ lập trình
- ⚡ Vite – Công cụ build siêu nhanh
- 🎨 Ant Design – Thư viện UI component
- 🔁 React Router – Điều hướng trang
- 📅 Day.js – Thư viện xử lý ngày tháng
- 🌐 Context API – Quản lý state toàn cục

## 📋 Tính năng

- ✅ Xem danh sách nhân viên
- ✅ Thêm nhân viên mới
- ✅ Chỉnh sửa thông tin nhân viên
- ✅ Xóa nhân viên (kèm xác nhận)
- ✅ Kiểm tra dữ liệu nhập (validation)
- ✅ Giao diện responsive
- ✅ Hiển thị thông báo thành công/lỗi

## 📁 Cấu trúc dự án

vite-project/
├── src/
│   ├── components/
│   │   └── layout/                   # Header, Footer, Sidebar
│   ├── contexts/
│   │   └── EmployeeContext.tsx      # Quản lý state nhân viên
│   ├── features/
│   │   └── employees/
│   │       ├── components/
│   │       │   ├── EmployeeTable.tsx   # Bảng danh sách nhân viên
│   │       │   └── EmployeeModal.tsx   # Form thêm/sửa nhân viên
│   │       ├── types.ts                # Kiểu dữ liệu
│   │       └── index.tsx               # Export module
│   ├── data/
│   │   └── index.ts                # Dữ liệu mẫu
│   ├── pages/
│   │   └── EmployeeManagementPage.tsx
│   ├── App.tsx
│   └── main.tsx
└── ...

## 🛠️ Cài đặt và chạy dự án

```bash
# Clone project
git clone <repository-url>
cd vite-project

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

📝 Thông tin nhân viên
Mỗi nhân viên bao gồm các trường sau:


ID – Mã nhân viên (tự động tạo)


Tên – Họ và tên (tối thiểu 2 ký tự)


Ngày sinh – Định dạng DD/MM/YYYY


Giới tính – Nam / Nữ / Khác


Email – Địa chỉ email hợp lệ


Địa chỉ – Địa chỉ chi tiết (tối thiểu 5 ký tự)


🎯 Hướng dẫn sử dụng
➕ Thêm nhân viên


Nhấn nút "Thêm Nhân Viên"


Điền đầy đủ thông tin vào form


Nhấn "Thêm" để lưu


✏️ Chỉnh sửa nhân viên


Nhấn nút "Edit" ở hàng nhân viên


Cập nhật thông tin cần thiết


Nhấn "Cập Nhật" để lưu


🗑️ Xóa nhân viên


Nhấn nút "Delete" ở hàng nhân viên


Xác nhận trong popup để thực hiện xóa



💡 Đây là dự án demo với dữ liệu giả lập, có thể mở rộng tích hợp với API thực tế trong tương lai.
