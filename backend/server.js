const express = require('express');
const jsonServer = require('json-server');
const app = express();
const router = jsonServer.router('db.json');  // Đọc dữ liệu từ db.json
const middlewares = jsonServer.defaults();  // Các middleware mặc định của json-server

// Cấu hình express
app.use(middlewares);
app.use(express.json());  // Để có thể parse JSON

// API cập nhật thông tin người dùng
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;  // Lấy id người dùng từ URL
  const { name, email, password } = req.body;  // Lấy thông tin cập nhật từ body request

  // Tìm người dùng trong db.json
  const user = router.db.get('users').find({ id: parseInt(id) }).value();

  if (user) {
    // Cập nhật thông tin người dùng
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;

    // Lưu lại dữ liệu vào db.json
    router.db.write();
    res.status(200).json(user);  // Trả lại thông tin người dùng đã cập nhật
  } else {
    res.status(404).send('Người dùng không tìm thấy');
  }
});

// Sử dụng router của json-server để cung cấp các API CRUD cơ bản
app.use('/api', router);

// Khởi chạy server trên port 3000
app.listen(3000, () => {
  console.log('Server đang chạy trên cổng 3000');
});
