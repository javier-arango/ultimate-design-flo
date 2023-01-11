import NavBar from "../../components/NavBar/NavBar";
import NavBarInfo from "../../components/NavBarInfo/NavBarInfo";
import PortfolioPage from "../../components/PortfolioPage/PortfolioPage";
import Footer from "../../components/Footer/Footer";

export default function Portfolio() {
  return (
    <>
      {/* Navigation Info */}
      <NavBarInfo />
      <NavBar />
      <PortfolioPage />
      <Footer />
    </>
  );
}
