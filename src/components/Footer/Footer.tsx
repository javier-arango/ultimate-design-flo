import styles from "./Footer.module.css";

import { footerItemsData } from "data";

import { Container, Icon, LinkItem } from "@components/common";
import { FooterItem } from "./FooterItem/FooterItem";

export const Footer = () => {
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

          {/* change the justify-content for the class .footerBottomInformation in the css if the social media is not present */}
          <div className={styles.footerSocials}>
            <p className="label-responsive">Follow Us</p>

            <LinkItem to="https://www.facebook.com/UltimateDesignFlo" external>
              <Icon name="facebook" width={20} height={20} color={"#D4C4BC"} />
            </LinkItem>

            <LinkItem
              to="https://www.instagram.com/ultimate_designfl/"
              external
            >
              <Icon name="instagram" width={20} height={20} color={"#D4C4BC"} />
            </LinkItem>
          </div>
        </div>
      </Container>
    </footer>
  );
};
