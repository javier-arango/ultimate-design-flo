import styles from "./CarouselButton.module.css";
import { Icon } from "../../Global";

const CarouselButton = () => {
  return (
    <div className={styles.buttonContainers}>
      <button className={styles.buttonLeft}>
        <Icon name="arrowCircleLeft" width={44} height={44} color="#51423B" />
      </button>

      <button className={styles.buttonRight}>
        <Icon name="arrowCircleRight" width={44} height={44} color="#51423B" />
      </button>
    </div>
  );
};

export default CarouselButton;
