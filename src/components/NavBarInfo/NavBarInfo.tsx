import styles from "./NavBarInfo.module.css";
import { contactInfoData } from "../../data";

import { Container } from "../Global";
import LabelAndIcon from "../Global/LabelAndIcon/LabelAndIcon";

const NavBarInfo = () => {
  return (
    <div className={styles.navBarInfoContainer}>
      <Container justifyContent="center">
        <div className={styles.navBarInfoContent}>
          {/* Phone */}
          <LabelAndIcon label={contactInfoData.phone} iconName={"phone"} />

          {/* Email */}
          <LabelAndIcon label={contactInfoData.email} iconName={"email"} />
        </div>
      </Container>
    </div>
  );
};

export default NavBarInfo;
