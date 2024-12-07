import styles from "./styles/HomePage.module.css";


export default function HomePage() {
  return (
    <div>
      {/* Banner */}
      <div className={styles.banner}>
        <h1 className={styles.bannerHeading}>Chào mừng đến với Yến Sào Mặt Trời Xanh</h1>
        <p className={styles.bannerSubText}>
          Khám phá sản phẩm tổ yến cao cấp, tốt cho sức khỏe và sắc đẹp của bạn.
        </p>
      </div>

      {/* Nội dung chính */}
      <div className={styles.container}>
        {/* Giới thiệu ngắn gọn */}
        <section className={styles.intro}>
          <h2 className={styles.heading}>Về Chúng Tôi</h2>
          <p className={styles.text}>
            Yến Sào Mặt Trời Xanh tự hào cung cấp những sản phẩm tổ yến nguyên chất,
            được chế biến và đóng gói theo tiêu chuẩn chất lượng cao nhất.
          </p>
        </section>

        {/* Sản phẩm nổi bật */}
        <section className={styles.products}>
          <h2 className={styles.heading}>Sản Phẩm Nổi Bật</h2>
          <div className={styles.productList}>
            <div className={styles.product}>
              <img
                src="https://i.ibb.co/zXG27h8/2d6dc9616644de1a8755.jpg"
                alt="Sản phẩm 1"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Tổ Yến Chưng Sẵn</h3>
              <p className={styles.productPrice}>500.000 VNĐ</p>
            </div>
            <div className={styles.product}>
              <img
                src="https://i.ibb.co/X4kzSNG/458193857-1152345812505372-5981272853178290938-n.jpg"
                alt="Sản phẩm 2"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Tổ Yến Thô</h3>
              <p className={styles.productPrice}>2.000.000 VNĐ</p>
            </div>
            <div className={styles.product}>
              <img
                src="https://i.ibb.co/S7Q1x23/465694234-8656109891169092-8698413474901202698-n.jpg"
                alt="Sản phẩm 3"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Tổ Yến Tinh Chế</h3>
              <p className={styles.productPrice}>3.000.000 VNĐ</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
