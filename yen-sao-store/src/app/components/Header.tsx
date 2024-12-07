import styles from "../styles/Header.module.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <a href="/">
            <img
              src="https://i.ibb.co/C6rF61p/Y-N-NH-HUY-N.jpg" // Đường dẫn đến ảnh logo
              alt="Yến Sào Mặt Trời Xanh"
              className={styles.logoImage}
            />
          </a>
        </div>

        {/* Slogan */}
        <div className={styles.slogan}>
          "Yến Sào Bình Phước, có sức khỏe hoàn thành mọi điều ước"
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </header>
  );
}
