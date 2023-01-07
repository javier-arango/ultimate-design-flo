import styles from "./Hero.module.css";

import { Button, Container, BgImageContainer } from "..";
import { IHero } from "../../../types";

const Hero = ({ image, containerSize = "lg", infoBlock }: IHero) => {
  return (
    <BgImageContainer
      image={image.src}
      alt={image.alt}
      containerSize={containerSize}
      className="text-align-center"
    >
      <Container flexDirection="column">
        {!infoBlock.title ? (
          <></>
        ) : (
          <p className={`overline-lg ${styles.heroOverline}`}>
            {infoBlock.title}
          </p>
        )}
        
        <h1 className={`display-sm ${styles.heroDisplay}`}>
          {infoBlock.headline}
        </h1>
        <p className={`paragraph-lg ${styles.heroParagraph}`}>
          {infoBlock.paragraph}
        </p>

        {!infoBlock.button ? (
          <></>
        ) : (
          <Button
            label={infoBlock.button.label}
            type={infoBlock.button.type}
            variant={infoBlock.button.variant}
            onClick={infoBlock.button.onClick}
          />
        )}
      </Container>
    </BgImageContainer>
  );
};

export default Hero;
