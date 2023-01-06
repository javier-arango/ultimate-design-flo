import styles from "./BeforeAfterSlider.module.css";
import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
}) => {
  return (
    <div className={styles.container}>
      {/* Handle */}
      <div className={styles.handle} />

      {/* Before image container */}
      <div className={styles.beforeImgContainer}>
        {/* Label */}
        <p className={`label-responsive ${styles.label} ${styles.labelLeft}`}>
          Before
        </p>

        {/* Image */}
        <div className={`${styles.comparisonItem} ${styles.top}`}>
          <Image
            src={beforeImage}
            alt="Before the result"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className={styles.img}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,LpLNiB%MkWof_NWCV@aeX9j[oJj@"
          />
        </div>
      </div>

      {/* After image container */}
      <div className={styles.afterImgContainer}>
        {/* Label */}
        <p className={`label-responsive ${styles.label} ${styles.labelRight}`}>
          After
        </p>

        {/* Image */}
        <div className={styles.comparisonItem}>
          <Image
            src={afterImage}
            alt="After the result"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className={styles.img}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,LpLNiB%MkWof_NWCV@aeX9j[oJj@"
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
