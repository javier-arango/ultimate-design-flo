import styles from "./Hero.module.css";

import { Button, Container, BgImageContainer } from "../Global";
import { IHero } from "../../types";

const Hero = ({
  image,
  containerSize = "lg",
  title,
  headline,
  paragraph,
  button,
}: IHero) => {
  return (
    <BgImageContainer
      image={image.src}
      alt={image.alt}
      containerSize={containerSize}
      className="text-align-center"
    >
      <Container flexDirection="column">
        <p className={`overline-lg ${styles.heroOverline}`}>{title}</p>
        <h1 className={`display-sm ${styles.heroDisplay}`}>{headline}</h1>
        <p className={`paragraph-lg ${styles.heroParagraph}`}>{paragraph}</p>

        {!button ? (
          <></>
        ) : (
          <Button
            label={button.label}
            type={button.type}
            variant={button.variant}
            onClick={button.onClick}
          />
        )}
      </Container>
    </BgImageContainer>
  );
};

export default Hero;
