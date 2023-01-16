import styles from "./ImageCard.module.css";
import Image from "next/image";
import { IImageCard } from "../../../lib";

const ImageCard = ({ image, serviceName, serviceDescription }: IImageCard) => {
  return (
    <div className={styles.imageCardContainer}>
      <div className={styles.imgContainer}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={styles.img}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,LpLNiB%MkWof_NWCV@aeX9j[oJj@"
          sizes="(min-width: 66em) 33vw,
            (min-width: 44em) 50vw, 100vw"
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
