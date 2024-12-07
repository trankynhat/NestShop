'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Import Link từ Next.js
import styles from '../styles/SignUp.module.css';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Đăng ký không thành công: ${errorText}`);
      }

      const result = await response.json();
      console.log('Đăng ký thành công:', result);
      alert("Đăng ký thành công!");
      router.push('/login');
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error('Lỗi khi đăng ký:', error);
      alert(`Lỗi khi đăng ký: ${errorMessage}`);
    }
  };

  return (
    <div className={styles.signupContainer}>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Tạo tài khoản</h2>
        <input
          type="text"
          name="username"
          placeholder="Tên đăng nhập"
          value={formData.username}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={formData.password}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Nhập lại mật khẩu"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>Đăng ký</button>
        
        {/* Thêm liên kết đến trang đăng nhập */}
        <p className={styles.loginPrompt}>
          Đã có tài khoản? <Link href="/login" className={styles.loginLink}>Đăng nhập</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
