import styles from "./CompanyQualities.module.css";

import { IconCard, InfoBlock } from "../Global";
import { ICompanyQualities, IIconCard } from "../../types";

const CompanyQualities = ({
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

export default CompanyQualities;
