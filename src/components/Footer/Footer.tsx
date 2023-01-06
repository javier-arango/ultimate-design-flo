import styles from "./Footer.module.css";

import { Container } from "../Global";
import FooterItem from "./FooterItem/FooterItem";
import { footerItemsData } from "../../data";
import { FacebookIcon, InstagramIcon } from "../Global/Icon/Icons";

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
        <div className={styles.footerBottomInformation}>
            <div className={styles.footerCopyright}>
              © Ultimate Design Flo. All rights reserved.
            </div>
            <div className={styles.footerSocials}>
              Follow Us <FacebookIcon width={20} height={20} color={"#D4C4BC"} /> <InstagramIcon width={20} height={20} color={"#D4C4BC"} />
            </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
