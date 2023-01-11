import NavBar from "../../components/NavBar/NavBar";
import NavBarInfo from "../../components/NavBarInfo/NavBarInfo";
import Hero from "../../components/Global/Hero/Hero";
import PortfolioPage from "../../components/PortfolioPage/PortfolioPage";
import Footer from "../../components/Footer/Footer";

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

      <PortfolioPage />
      <Footer />
    </>
  );
}
