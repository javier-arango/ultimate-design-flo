import styles from "./ImageCard.module.css";
import Image from "next/image";
import { IImageCard } from "../../../types";

const ImageCard = ({ image, serviceName, serviceDescription }: IImageCard) => {
  return (
    <div className={styles.imageCardContainer}>
      <div className={styles.imgContainer}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 282px) 100vw,
              (max-width: 250px) 50vw,
              33vw"
          className={styles.img}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,LpLNiB%MkWof_NWCV@aeX9j[oJj@"
        />
      </div>

      <div className={styles.serviceInfoContainer}>
        <h6 className={styles.serviceName}>{serviceName}</h6>
        <p className={`paragraph-md ${styles.serviceDescription}`}>
          {serviceDescription}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
