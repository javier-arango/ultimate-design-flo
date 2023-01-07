import styles from "./BgImageContainer.module.css";
import { IBgImageContainer, ContainerSize } from "../../../../types";
import Image from "next/image";

interface Props extends IBgImageContainer {
  children?: JSX.Element | JSX.Element[];
}

function containerStyled(containerSize: ContainerSize) {
  const size = containerSize === "sm" ? 40 : 70;

  return {
    display: "block",
    position: "relative",
    height: `${size}vh`,
  } as React.CSSProperties;
}

const BgImageContainer = ({
  image,
  alt,
  containerSize = "lg",
  className,
  children,
}: Props) => {
  return (
    <div className={`${className}`} style={containerStyled(containerSize)}>
      {/* Image as background */}
      <Image
        src={image}
        alt={alt}
        fill
        className={styles.imgContainer}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,LpLNiB%MkWof_NWCV@aeX9j[oJj@"
      />

      {/* Blur background with a color of 50% opacity */}
      <div className={`bg-blur-sm ${styles.contentContainer}`}>
        {/* Content on top of the image */}
        {children}
      </div>
    </div>
  );
};

export default BgImageContainer;
