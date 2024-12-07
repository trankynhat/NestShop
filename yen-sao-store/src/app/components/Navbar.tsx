'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
     
      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>Trang chủ</Link>
        <Link href="/product/1" className={styles.navLink}>Sản phẩm</Link>
        <Link href="/about" className={styles.navLink}>Giới thiệu</Link>
        <Link href="/contact" className={styles.navLink}>Liên hệ</Link>
      </div>

      <div className={styles.authLinks}>
        <Link href="/cart" className={styles.navLink}>Giỏ hàng</Link>
        <Link href="/login" className={styles.navLink}>Đăng nhập</Link>
        <Link href="/signup" className={`${styles.navLink} ${styles.signup}`}>Đăng ký</Link>
      </div>
    </nav>
  );
};

export default Navbar;
