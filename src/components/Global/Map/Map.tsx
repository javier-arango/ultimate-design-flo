import Image from "next/image";

const Map = () => {
  return (
    <>
      <h1>Map</h1>
      <Image
        src="/assets/service-images/service-area-map.png"
        width={600}
        height={400}
        alt="Map of service area"
      />
    </>
  );
};

export default Map;
