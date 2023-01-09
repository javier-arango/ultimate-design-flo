import styles from "./InfoBlock.module.css";

import Button from "../Button/Button";
import { Container } from "../Containers";
import { IInfoBlock } from "../../../types";

const InfoBlock = ({ title, headline, paragraph, button }: IInfoBlock) => {
  return (
    <Container
      className={`text-align-center padding-responsive`}
      justifyContent="center"
      flexDirection="column"
    >
      {!title ? (
        <></>
      ) : (
        <p className={`overline-responsive ${styles.overline}`}>{title}</p>
      )}

      <h2 className={`${styles.headline}`}>{headline}</h2>
      <p className={`paragraph-lg ${styles.paragraph}`}>{paragraph}</p>

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
  );
};

export default InfoBlock;
