import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    phone: '',
    email: ''
  });

  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    if (name === 'username' && value.length < 8) {
      errorMessage = 'Tên đăng nhập phải từ 8 ký tự trở lên';
    }

    if (name === 'password' && !/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(value)) {
      errorMessage = 'Mật khẩu phải từ 8 ký tự trở lên và bao gồm cả chữ và số';
    }

    if (name === 'phone' && !/^\d{11}$/.test(value)) {
      errorMessage = 'Số điện thoại phải có 11 số';
    }

    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMessage = 'Email không hợp lệ';
    }

    setErrors({
      ...errors,
      [name]: errorMessage
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setMessage('Vui lòng sửa lỗi trong các trường.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/users', form);

      if (response.status === 201) {
        setMessage('Đăng ký thành công!');
        setForm({ username: '', password: '', phone: '', email: '' });
      } else {
        throw new Error('Đăng ký thất bại!');
      }
    } catch (error) {
      console.error(error);
      setMessage('Đăng ký thất bại!');
    }
  };

  const validateForm = () => {
    let valid = true;
    let errorMessages = {};
    if (form.username.length < 8) {
      errorMessages.username = 'Tên đăng nhập phải từ 8 ký tự trở lên';
      valid = false;
    }
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(form.password)) {
      errorMessages.password = 'Mật khẩu phải từ 8 ký tự trở lên và bao gồm cả chữ và số';
      valid = false;
    }

    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(form.phone)) {
      errorMessages.phone = 'Số điện thoại phải có 11 số';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      errorMessages.email = 'Email không hợp lệ';
      valid = false;
    }

    setErrors(errorMessages);
    return valid;
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên đăng nhập:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            onBlur={handleBlur}
            required
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
            onBlur={handleBlur}
            required
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <div>
          <label>Số điện thoại:</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <button type="submit">Đăng ký</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;
