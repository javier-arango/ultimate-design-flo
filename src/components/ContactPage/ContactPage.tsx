import styles from "./ContactPage.module.css";

import { IconCard, InfoBlock } from "../Global";
import { contactInfoData } from "../../data";

const ContactPage = () => {
  return (
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
  );
};

export default ContactPage;
