import NavBar from "../../components/NavBar/NavBar";
import NavBarInfo from "../../components/NavBarInfo/NavBarInfo";
import Footer from "../../components/Footer/Footer";
import ServicesPage from "../../components/ServicesPage/ServicesPage";

export default function Services() {
  return (
    <>
      {/* Navigation Info */}
      <NavBarInfo />
      <NavBar />
      <ServicesPage />
      <Footer />
    </>
  );
}
