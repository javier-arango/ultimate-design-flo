import styles from "./NavBarInfo.module.css";

import { contactInfoData } from "data";
import { Container, LabelAndIcon } from "@components/common";

export const NavBarInfo = () => {
  return (
    <div className={styles.navBarInfoContainer}>
      <Container justifyContent="center">
        <div className={styles.navBarInfoContent}>
          {/* Phone */}
          <a href={`tel:+1${contactInfoData.phone}`}>
            <LabelAndIcon label={contactInfoData.phone} iconName={"phone"} />
          </a>

          {/* Email */}
          <a
            href={`mailto:${contactInfoData.email}?subject=Ultimate Design Flo`}
          >
            <LabelAndIcon label={contactInfoData.email} iconName={"email"} />
          </a>
        </div>
      </Container>
    </div>
  );
};
