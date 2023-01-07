import NavBar from "../../components/NavBar/NavBar";
import NavBarInfo from "../../components/NavBarInfo/NavBarInfo";
import { LinkItem } from "../../components/Global";
import Hero from "../../components/Global/Hero/Hero";

export default function Portfolio() {
  return (
    <>
      {/* Navigation Info */}
      <NavBarInfo />
      <NavBar />

      <Hero
        image={{
          src: "/assets/hero-images/portfolio-page-img.png",
          alt: "Portfolio page image for Ultimate Design Flow website",
        }}
        containerSize="sm"
        infoBlock={{
          headline: "Our Portfolio",
          paragraph: "See the Magic of Our Upholstery Services in Action",
        }}
      />

      <h1 className="display-lg">Portfolio</h1>
      <LinkItem>Go Back Home</LinkItem>
    </>
  );
}
