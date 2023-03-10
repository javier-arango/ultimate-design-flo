import styles from "./LabelAndIcon.module.css";
import { ILabelAndIcon } from "lib";

import { Icon } from "@components/common/Icon/Icon";

export const LabelAndIcon = ({
  label,
  labelSize = "responsive",
  iconName,
  iconProperties = {
    width: 16,
    height: 16,
    color: "#D4C4BC",
  },
}: ILabelAndIcon) => {
  return (
    <>
      <div className={styles.labelContainer}>
        <Icon
          name={iconName}
          width={iconProperties.width}
          height={iconProperties.height}
          color={iconProperties.color}
        />

        <p className={`label-${labelSize}`}>{label}</p>
      </div>
    </>
  );
};
