import styles from "./BeforeAfterSlider.module.css";
import Image from "next/image";
import { useState } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className={styles.container}>
      <Image src={beforeImage} alt="Before" fill className={styles.img} />
      <Image
        src={afterImage}
        alt="After"
        fill
        className={`${styles.img} ${styles.foregroundImg}`}
      />
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        className={styles.slider}
        name="slider"
        id={styles.slider}
      />
    </div>
  );
};

export default BeforeAfterSlider;
