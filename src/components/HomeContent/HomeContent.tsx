import styles from "./HomeContent.module.css";

import { useRouter } from "next/router";
import {
  BeforeAfterSlider,
  Button,
  Container,
  Hero,
  InfoBlock,
} from "../Global";

const HomeContent = () => {
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

      {/* <Container
        className={`text-align-center ${styles.aboutContainer}`}
        justifyContent="center"
        flexDirection="column"
      >
        <h2 className={styles.headline}>Our Story</h2>

        <p className={`paragraph-lg ${styles.paragraph}`}>
          Founded in 2014, Ultimate Design Flo has been dedicated to providing
          expert furniture upholstery services to customers in the Florida area
          for over 8 years. With a team of skilled upholsterers and a commitment
          to quality craftsmanship, we have built a reputation for excellence
          within the industry.
        </p>

        <Button
          label="Learn More"
          variant="secondary"
          onClick={() => router.push("/about")}
        />
      </Container> */}
    </>
  );
};

export default HomeContent;
