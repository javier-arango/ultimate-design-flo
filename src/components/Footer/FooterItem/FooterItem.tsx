import { IconName } from "../../../types";
import { LabelAndIcon } from "../../Global";
import styles from "./FooterItem.module.css";

interface IFooterItem {
  label: string;
  icon: IconName;
  info: string;
}

const FooterItem = ({ label, icon, info }: IFooterItem) => {
  return (
    <div className={styles.footerItemContainer}>
      <LabelAndIcon
        label={label}
        iconName={icon}
        iconProperties={{
          width: 24,
          height: 24,
          color: "#D4C4BC",
        }}
      />

      <p className="overline-responsive">{info}</p>
    </div>
  );
};

export default FooterItem;
