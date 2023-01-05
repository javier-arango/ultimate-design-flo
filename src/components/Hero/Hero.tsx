import styles from "./Hero.module.css";

import { Button, Container, BgImageContainer } from "../Global";
import { useRouter } from "next/router";

const Hero = () => {
  let router = useRouter();

  // Condition base redirecting
  function redirect() {
    router.push("/contact");
  }

  return (
    <BgImageContainer
      image="/assets/hero-images/home-page-img.png"
      alt="Home page image for Ultimate Design Flow website"
      containerSize="lg"
      className="text-align-center"
    >
      <Container flexDirection="column">
        <p className={`overline-lg ${styles.heroOverline}`}>Welcome To</p>
        <h1 className={`display-sm ${styles.heroDisplay}`}>
          Ultimate Design Flo
        </h1>
        <p className={`paragraph-lg ${styles.heroParagraph}`}>
          Upgrade your home's style with our furniture makeover magic!
        </p>

        <Button label="Contact Now" onClick={redirect} />
      </Container>
    </BgImageContainer>
  );
};

export default Hero;
