import Image from "next/image";
import styles from "./PortfolioPage.module.css";

const PortfolioPage = () => {
  return (
    <div className={styles.gridContainer}>
      <Image
        src="/assets/product-images/1.jpeg"
        alt="Portfolio image 1"
        fill
        className={styles.imgStyle}
      />
    </div>
  );
};

export default PortfolioPage;
