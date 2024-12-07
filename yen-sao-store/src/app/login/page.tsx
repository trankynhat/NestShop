'use client';

import React, { useState } from 'react';
import styles from '../styles/Login.module.css'; // Đảm bảo file CSS đã tồn tại

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Perform validation and API call here
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Đăng nhập</h2>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Nhập email của bạn"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.formLabel}>Mật khẩu</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Nhập mật khẩu của bạn"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>

        <button type="submit" className={styles.submitButton}>Đăng nhập</button>

        {/* Thêm phần liên kết đăng ký nếu người dùng chưa có tài khoản */}
        <div className={styles.registerPrompt}>
          <p>
            Bạn chưa có tài khoản?{' '}
            <a href="/signup" className={styles.registerLink}>
              Đăng ký ngay
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
