import styles from "./Services.module.css";
import { ImageCard, InfoBlock } from "../Global";
import { IButton, IImageCard } from "../../types";

interface Props {
  title: string;
  headline: string;
  services: IImageCard[];
  button?: IButton;
}

const Services = ({ title, headline, services, button }: Props) => {
  if (!services) return null;

  return (
    <InfoBlock title={title} headline={headline} button={button}>
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
    </InfoBlock>
  );
};

export default Services;
