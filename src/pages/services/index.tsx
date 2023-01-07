import NavBar from "../../components/NavBar/NavBar";
import NavBarInfo from "../../components/NavBarInfo/NavBarInfo";
import { LinkItem } from "../../components/Global";
import Hero from "../../components/Global/Hero/Hero";

export default function Services() {
  return (
    <>
      {/* Navigation Info */}
      <NavBarInfo />
      <NavBar />

      <Hero
        image={{
          src: "/assets/hero-images/service-page-img.png",
          alt: "Service page image for Ultimate Design Flow website",
        }}
        containerSize="sm"
        infoBlock={{
          headline: "Our Exclusive Jobs",
          paragraph:
            "Trust Our Professional Upholstery Team to Revitalize Your Home",
        }}
      />

      <h1 className="display-lg">Services</h1>
      <LinkItem>Go Back Home</LinkItem>
    </>
  );
}
