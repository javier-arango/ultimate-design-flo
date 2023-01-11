import NavBar from "../../components/NavBar/NavBar";
import NavBarInfo from "../../components/NavBarInfo/NavBarInfo";
import ContactPage from "../../components/ContactPage/ContactPage";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  return (
    <>
      {/* Navigation Info */}
      <NavBarInfo />
      <NavBar />
      <ContactPage />
      <Footer />
    </>
  );
}
