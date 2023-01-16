import styles from "./Map.module.css";
import { IServiceAreaLocation } from "../../../lib";
import { useState } from "react";
import { serviceAreaLocationData } from "../../../data";

import {
  GoogleMap,
  InfoWindow,
  LoadScriptNext,
  Marker,
} from "@react-google-maps/api";

const defaultCenter = {
  lat: 26.3014,
  lng: -80.6327,
};

const Map = () => {
  const [selected, setSelected] = useState({} as IServiceAreaLocation);

  const onSelect = (item: IServiceAreaLocation) => {
    setSelected(item);
  };

  return (
    <div className={styles.mapContainer}>
      <LoadScriptNext
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      >
        <GoogleMap
          id="google-map"
          mapContainerClassName={styles.mapStyles}
          center={defaultCenter}
          zoom={7}
        >
          {serviceAreaLocationData.map((area) => {
            return (
              <Marker
                key={area.name}
                position={area.coordinates}
                onClick={() => onSelect(area)}
              />
            );
          })}
          {selected.coordinates && (
            <InfoWindow
              position={selected.coordinates}
              onCloseClick={() => setSelected({} as IServiceAreaLocation)}
            >
              <div className={styles.infoWindowItemContainer}>
                <p className="paragraph-sm">We Provide Service in this Area:</p>
                <p className="overline-sm">{selected.name}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScriptNext>
    </div>
  );
};

export default Map;
