import { BeforeAfterSlider } from "../Global";

const HomeContent = () => {
  return (
    <>
      <h1>Image slider</h1>
      <BeforeAfterSlider
        beforeImage="/assets/hero-images/home-page-img.png"
        afterImage="/assets/hero-images/service-page-img.png"
      />
    </>
  );
};

export default HomeContent;
