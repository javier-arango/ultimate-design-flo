import styles from "./Services.module.css";
import { ImageCard } from "../Global";
import { IImageCard } from "../../types";

const Services = ({ services }: { services: IImageCard[] }) => {
  if (!services) return null;

  return (
    <div className={styles.serviceContainer}>
      {services.map((service) => (
        <ImageCard
          key={service.serviceName}
          image={{
            src: service.image.src,
            alt: service.image.alt,
          }}
          serviceName={service.serviceName}
          serviceDescription={service.serviceDescription}
        />
      ))}
    </div>
  );
};

export default Services;
