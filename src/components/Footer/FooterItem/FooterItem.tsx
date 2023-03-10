import styles from "./FooterItem.module.css";

import { TIconName } from "lib";

import { LabelAndIcon } from "@components/common";

interface IFooterItem {
  label: string;
  icon: TIconName;
  info: string;
}

export const FooterItem = ({ label, icon, info }: IFooterItem) => {
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
