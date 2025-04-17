import React, { useState } from 'react';

function Login() {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';

    if (name === 'username') {
      if (value.trim() === '') {
        errorMessage = 'Tên đăng nhập không được để trống';
      } else if (value.length < 6) {
        errorMessage = 'Tên đăng nhập phải có ít nhất 6 ký tự';
      }
    }

    if (name === 'password') {
      if (value.trim() === '') {
        errorMessage = 'Mật khẩu không được để trống';
      } else if (value.length < 8) {
        errorMessage = 'Mật khẩu phải có ít nhất 8 ký tự';
      }
    }

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(form).forEach((field) => validateField(field, form[field]));
    if (Object.values(errors).some((error) => error !== '')) {
      setMessage('Vui lòng sửa lỗi trước khi gửi');
      return;
    }
    setMessage('Đăng nhập thành công!');
    setForm({
      username: '',
      password: ''
    });
  };

  const [message, setMessage] = useState('');

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên đăng nhập:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
