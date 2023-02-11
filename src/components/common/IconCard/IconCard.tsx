import styles from "./IconCard.module.css";

import { IIconCard } from "lib";
import { Icon } from "@components/common/Icon/Icon";

export const IconCard = ({
  iconName,
  iconStyle,
  title,
  description,
}: IIconCard) => {
  const { width = 62, height = 62, color = "#51423B" } = iconStyle || {};

  return (
    <div className={`text-align-center ${styles.iconCardContainer}`}>
      <Icon name={iconName} width={width} height={height} color={color} />

      <h3 className={styles.title}>{title}</h3>
      <p className={`paragraph-md ${styles.description}`}>{description}</p>
    </div>
  );
};
