// src/app/layout.tsx
import React from 'react';
import Header from '../app/components/Header';
import styles from './styles/Layout.module.css';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className={styles.pageContainer}>
          <Header />
        
          <main className={styles.content}>{children}</main>
         
        </div>
      </body>
    </html>
  );
};

export default Layout;
