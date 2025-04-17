import React, { useState } from 'react';

function Signup() {
  const [form, setForm] = useState({
    fullName: '',
    address: '',
    phone: '',
    email: '',
    gender: '',
    nationality: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    address: '',
    phone: '',
    email: '',
    gender: '',
    nationality: '',
  });

  const [message, setMessage] = useState('');

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

    if (name === 'fullName' && value.trim() === '') {
      errorMessage = 'Họ và tên không được để trống';
    }
    if (name === 'address' && value.trim() === '') {
      errorMessage = 'Địa chỉ không được để trống';
    }
    if (name === 'phone') {
      const phonePattern = /^[0-9]{10,11}$/;
      if (!phonePattern.test(value)) {
        errorMessage = 'Số điện thoại phải là 10 hoặc 11 chữ số';
      }
    }
    if (name === 'email') {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(value)) {
        errorMessage = 'Email không hợp lệ';
      }
    }
    if (name === 'gender' && value === '') {
      errorMessage = 'Giới tính không được để trống';
    }
    if (name === 'nationality' && value.trim() === '') {
      errorMessage = 'Quốc tịch không được để trống';
    }

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Object.keys(form).forEach((field) => validateField(field, form[field]));

    if (Object.values(errors).some((error) => error !== '')) {
      setMessage('Vui lòng sửa lỗi trước khi gửi');
      return;
    }

    try {
      // Giả sử bạn đang sử dụng json-server và nó đang chạy trên cổng 3001
      const response = await fetch('http://localhost:3001/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: form.fullName,
          phone: form.phone,
          email: form.email,
          address: form.address,
          gender: form.gender,
          nationality: form.nationality,
        }),
      });

      if (response.ok) {
        setMessage('Đăng ký thành công!');
        setForm({
          fullName: '',
          address: '',
          phone: '',
          email: '',
          gender: '',
          nationality: '',
        });
      } else {
        setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Đăng ký thành viên</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Họ và tên:</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}
        </div>
        <div>
          <label>Địa chỉ:</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
          {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
        </div>
        <div>
          <label>Số điện thoại:</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
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
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>Giới tính:</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Chọn giới tính</option>
            <option value="Male">Nam</option>
            <option value="Female">Nữ</option>
            <option value="Other">Khác</option>
          </select>
          {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
        </div>
        <div>
          <label>Quốc tịch:</label>
          <input
            type="text"
            name="nationality"
            value={form.nationality}
            onChange={handleChange}
          />
          {errors.nationality && <p style={{ color: 'red' }}>{errors.nationality}</p>}
        </div>
        <button type="submit">Đăng ký</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Signup;
