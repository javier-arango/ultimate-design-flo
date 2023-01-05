import styles from "./Hero.module.css";

import { Button, Container } from "../Global";
import { useRouter } from "next/router";

const Hero = () => {
  let router = useRouter();

  // Condition base redirecting
  function redirect() {
    router.push("/contact");
  }

  return (
    <div className={`${styles.heroContainer}`}>
      <div className={`bg-blur-sm ${styles.heroContent}`}>
        <Container flexDirection="column" className="text-align-center">
          <p className={`label-lg ${styles.heroTitle}`}>Welcome To</p>
          <h1 className={`display-sm ${styles.heroDisplay}`}>
            Ultimate Design Flo
          </h1>
          <p className={`paragraph-lg ${styles.heroParagraph}`}>
            Upgrade your home's style with our furniture makeover magic!
          </p>

          <Button label="Contact Now" onClick={redirect} />
        </Container>
      </div>
    </div>
  );
};

export default Hero;
