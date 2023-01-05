import styles from "./Footer.module.css";

import { Container } from "../Global";
import FooterItem from "./FooterItem/FooterItem";
import { footerItemsData } from "../../data";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={`text-align-center ${styles.footerItemsContainer}`}>
          {footerItemsData.map((item) => (
            <FooterItem
              key={item.label}
              label={item.label}
              icon={item.iconName}
              info={item.info}
            />
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
