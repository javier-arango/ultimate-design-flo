import styles from "./CompareImages.module.css";
import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Icon from "../Icon/Icon";
import { ICompareImages } from "../../../types";

const CompareImages = ({ before, after }: ICompareImages) => {
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const topImageRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const setPositioning = useCallback((x: number) => {
    const { left, width } = topImageRef?.current?.getBoundingClientRect() ?? {
      left: 0,
      width: 0,
    };
    const handleWidth = handleRef?.current?.offsetWidth ?? 0;

    if (x >= left && x <= width + left - handleWidth!) {
      handleRef!.current!.style.left = `${((x - left) / width) * 100}%`;
      topImageRef!.current!.style.clipPath = `inset(0 ${
        100 - ((x - left) / width) * 100
      }% 0 0)`;
    }
  }, []);

  const handleResize = useCallback(
    (e: any) => {
      setPositioning(e.clientX ?? e.touches?.[0]?.clientX ?? 0);
    },
    [setPositioning]
  );

  // Set initial positioning on component mount
  useEffect(() => {
    const { left, width } = topImageRef?.current?.getBoundingClientRect() ?? {
      left: 0,
      width: 0,
    };

    const handleWidth = handleRef?.current?.offsetWidth ?? 0;

    setPositioning(width / 2 + left - handleWidth / 2);
  }, [setPositioning]);

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);

    window.removeEventListener("mousemove", handleResize);
    window.removeEventListener("touchmove", handleResize);
    window.removeEventListener("mouseup", handleResizeEnd);
    window.removeEventListener("touchend", handleResizeEnd);
  }, [handleResize]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleResize);
      window.addEventListener("touchmove", handleResize);
      window.addEventListener("mouseup", handleResizeEnd);
      window.addEventListener("touchend", handleResizeEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleResize);
      window.removeEventListener("touchmove", handleResize);
      window.removeEventListener("mouseup", handleResizeEnd);
      window.removeEventListener("touchend", handleResizeEnd);
    };
  }, [isResizing, handleResize, handleResizeEnd]);

  return (
    <>
      <div className={styles.comparisonSlider}>
        {/* Slider */}
        <div
          ref={handleRef}
          className={styles.handle}
          onMouseDown={() => setIsResizing(true)}
          onTouchStart={() => setIsResizing(true)}
        >
          <Icon name="compare" width={16} height={16} color="#51423B" />
        </div>

        {/* Before Image */}
        <div className={`${styles.comparisonItem} ${styles.bottomImg}`}>
          <Image
            className={styles.img}
            draggable="false"
            src={before.src}
            alt={before.alt}
            fill
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,LpLNiB%MkWof_NWCV@aeX9j[oJj@"
            sizes="(min-width: 66em) 33vw,
            (min-width: 44em) 50vw, 100vw"
          />

          {/* Label Right */}
          <div className={`${styles.labelRightContainer} ${styles.top}`}>
            <p className={`label-responsive ${styles.labelRight}`}>After</p>
          </div>
        </div>

        {/* After Image */}
        <div
          ref={topImageRef}
          className={`${styles.comparisonItem} ${styles.topImg}`}
        >
          <Image
            className={styles.img}
            draggable="false"
            src={after.src}
            alt={after.alt}
            fill
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,LpLNiB%MkWof_NWCV@aeX9j[oJj@"
            sizes="(min-width: 66em) 33vw,
            (min-width: 44em) 50vw, 100vw"
          />

          {/* Label Left */}
          <div className={styles.labelLeftContainer}>
            <p className={`label-responsive ${styles.labelLeft}`}>Before</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareImages;
