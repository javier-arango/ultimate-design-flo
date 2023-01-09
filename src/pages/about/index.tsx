import NavBar from "../../components/NavBar/NavBar";
import NavBarInfo from "../../components/NavBarInfo/NavBarInfo";
import AboutPage from "../../components/AboutPage/AboutPage";
import Footer from "../../components/Footer/Footer";

export default function About() {
  return (
    <>
      {/* Navigation Info */}
      <NavBarInfo />
      <NavBar />
      <AboutPage />
      <Footer />
    </>
  );
}
