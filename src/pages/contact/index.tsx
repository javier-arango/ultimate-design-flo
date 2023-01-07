import NavBar from "../../components/NavBar/NavBar";
import NavBarInfo from "../../components/NavBarInfo/NavBarInfo";
import { LinkItem } from "../../components/Global";
import Hero from "../../components/Global/Hero/Hero";

export default function Contact() {
  return (
    <>
      {/* Navigation Info */}
      <NavBarInfo />
      <NavBar />

      <Hero
        image={{
          src: "/assets/hero-images/contact-page-img.png",
          alt: "Contact page image for Ultimate Design Flow website",
        }}
        containerSize="sm"
        infoBlock={{
          headline: "Contact Us",
          paragraph: "Get in touch with us for expert upholstery services",
        }}
      />

      <h1 className="display-lg">Contact</h1>
      <LinkItem>Go Back Home</LinkItem>
    </>
  );
}
