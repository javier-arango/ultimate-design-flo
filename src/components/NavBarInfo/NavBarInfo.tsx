import { Container, Icon } from "../Global";

import styles from "./NavBarInfo.module.css";

const NavBarInfo = () => {
  return (
    <div className={styles.navBarInfoContainer}>
      <Container justifyContent="center">
        <div className={styles.navBarInfoContent}>
          {/* Phone */}
          <div className="label-container">
            <Icon name={"phone"} width={16} height={16} color={"#D4C4BC"} />
            <p className={"label-sm"}>(954) 817 0721</p>
          </div>

          <div className="label-container">
            <Icon name={"email"} width={16} height={16} color={"#D4C4BC"} />
            <p className={"label-sm"}>ultimatedesignflo@gmail.com</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBarInfo;
