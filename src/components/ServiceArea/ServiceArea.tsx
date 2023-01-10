import styles from "./ServiceArea.module.css";

import { InfoBlock, LabelAndIcon, Map } from "../Global";
import { serviceArea } from "../../data";

const ServiceArea = () => {
  return (
    <>
      <InfoBlock headline="Service Area">
        <h6 className={styles.headline}>
          Ultimate Design Flo provides services to the following communities:
        </h6>

        <Map />

        <ul className={`text-align-left ${styles.locationList}`}>
          {serviceArea.map((area) => (
            <li key={area} className={styles.listItem}>
              <LabelAndIcon
                iconName="location"
                label={area}
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

export default ServiceArea;
