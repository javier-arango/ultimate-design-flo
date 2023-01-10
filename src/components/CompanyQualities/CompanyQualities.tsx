import styles from "./CompanyQualities.module.css";

import { IconCard, InfoBlock } from "../Global";
import { IIconCard } from "../../types";

const CompanyQualities = ({ qualities }: { qualities: IIconCard[] }) => {
  if (!qualities) return null;

  return (
    <InfoBlock title="Why Us" headline="Why Our Upholstery Services Stand Out">
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
