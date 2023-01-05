import { Container } from "../Global";
import LabelAndIcon from "../Global/LabelAndIcon/LabelAndIcon";

import styles from "./NavBarInfo.module.css";

const NavBarInfo = () => {
  return (
    <div className={styles.navBarInfoContainer}>
      <Container justifyContent="center">
        <div className={styles.navBarInfoContent}>
          {/* Phone */}
          <LabelAndIcon label={"(954) 817 0721"} iconName={"phone"} />

          {/* Email */}
          <LabelAndIcon
            label={"ultimatedesignflo@gmail.com"}
            iconName={"email"}
          />
        </div>
      </Container>
    </div>
  );
};

export default NavBarInfo;
