import styles from "./Footer.module.css";

import { Container, Icon, LinkItem } from "../Global";
import { footerItemsData } from "../../data";
import FooterItem from "./FooterItem/FooterItem";

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
          <p className="label-responsive text-align-center">
            © Ultimate Design Flo. All rights reserved.
          </p>

          {/* Change the class .footerBottomInformation to justify-content   */}
          {/* <div className={styles.footerSocials}>
            <p className="label-responsive">Follow Us</p>

            <LinkItem to="https://www.facebook.com/" external>
              <Icon name="facebook" width={20} height={20} color={"#D4C4BC"} />
            </LinkItem>

            <LinkItem to="https://www.instagram.com/" external>
              <Icon name="instagram" width={20} height={20} color={"#D4C4BC"} />
            </LinkItem>
          </div> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
