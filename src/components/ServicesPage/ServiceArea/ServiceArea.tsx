import styles from "./ServiceArea.module.css";

import { serviceAreaLocationData } from "data";
import { InfoBlock, LabelAndIcon, Map } from "@components/common";

export const ServiceArea = () => {
  return (
    <>
      <InfoBlock headline="Service Area">
        <Map />

        <h6 className={styles.headline}>
          Ultimate Design Flo provides services to the following communities:
        </h6>

        <ul className={`text-align-left ${styles.locationList}`}>
          {serviceAreaLocationData.map((area) => (
            <li key={area.name} className={styles.listItem}>
              <LabelAndIcon
                iconName="location"
                label={area.name}
                iconProperties={{
                  width: 24,
                  height: 24,
                  color: "#51423B",
                }}
              />
            </li>
          ))}
        </ul>
      </InfoBlock>
    </>
  );
};
