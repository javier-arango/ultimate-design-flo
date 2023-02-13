import styles from "./CompanyQualities.module.css";

import { ICompanyQualities } from "lib";

import { InfoBlock } from "@components/common/InfoBlock/InfoBlock";
import { IconCard } from "@components/common/IconCard/IconCard";

export const CompanyQualities = ({
  containerTitle,
  containerHeadline,
  qualities,
}: ICompanyQualities) => {
  if (!qualities) return null;

  return (
    <InfoBlock title={containerTitle} headline={containerHeadline}>
      <div className={styles.iconCardContainer}>
        {qualities.map((quality) => (
          <IconCard
            key={quality.title}
            iconName={quality.iconName}
            title={quality.title}
            description={quality.description}
          />
        ))}
      </div>
    </InfoBlock>
  );
};
