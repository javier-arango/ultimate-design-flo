import styles from "./ContactPage.module.css";

import { Hero, IconCard, InfoBlock } from "../Global";
import { contactInfoData } from "../../data";

const ContactPage = () => {
  return (
    <>
      <Hero
        image={{
          src: "/assets/hero-images/contact-page-img.webp",
          alt: "Contact page image for Ultimate Design Flow website",
        }}
        containerSize="sm"
        infoBlock={{
          headline: "Contact Us",
          paragraph: "Get in touch with us for expert upholstery services",
        }}
      />

      <InfoBlock headline="Contact">
        <div className={styles.iconCardContainer}>
          <IconCard
            iconName="location"
            title="Find Us"
            description={contactInfoData.address}
          />

          <IconCard
            iconName="phone"
            title="Call Us"
            description={contactInfoData.phone}
          />

          <IconCard
            iconName="email"
            title="Email Us"
            description={contactInfoData.email}
          />
        </div>
      </InfoBlock>
    </>
  );
};

export default ContactPage;
