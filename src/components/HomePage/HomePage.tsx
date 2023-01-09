import styles from "./HomePage.module.css";

import { useRouter } from "next/router";
import { Container, Hero, InfoBlock } from "../Global";
import Services from "../Services/Services";
import { servicesData } from "../../data";

const HomePage = () => {
  let router = useRouter();

  return (
    <>
      <Hero
        image={{
          src: "/assets/hero-images/home-page-img.png",
          alt: "Home page image for Ultimate Design Flow website",
        }}
        infoBlock={{
          title: "Welcome To",
          headline: "Ultimate Design Flo",
          paragraph:
            "Upgrade your home's style with our furniture makeover magic!",
          button: {
            label: "Contact Now",
            onClick: () => router.push("/contact"),
          },
        }}
      />

      {/* About */}
      <InfoBlock
        headline="Our Story"
        paragraph="Founded in 2014, Ultimate Design Flo has been dedicated to providing
          expert furniture upholstery services to customers in the Florida area
          for over 8 years. With a team of skilled upholsterers and a commitment
          to quality craftsmanship, we have built a reputation for excellence
          within the industry."
        button={{
          label: "Learn More",
          variant: "secondary",
          onClick: () => router.push("/about"),
        }}
      />

      {/* Services */}
      <Container
        className="text-align-center padding-responsive"
        justifyContent="center"
        flexDirection="column"
      >
        {/* Title */}
        <p className="overline-responsive">Our Services</p>
        <h2 className={styles.headline}>
          Transform your furniture vision into reality
        </h2>

        {/* ImageCard with the Services provided */}
        <Services services={servicesData.slice(0, 3)} />
      </Container>
    </>
  );
};

export default HomePage;
