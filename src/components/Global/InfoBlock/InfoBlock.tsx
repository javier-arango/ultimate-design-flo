import styles from "./InfoBlock.module.css";

import Button from "../Button/Button";
import { Container } from "../Containers";
import { IInfoBlock } from "../../../types";

interface Props extends IInfoBlock {
  children?: JSX.Element | JSX.Element[];
}

const InfoBlock = ({ title, headline, paragraph, button, children }: Props) => {
  return (
    <Container
      className={`text-align-center padding-responsive`}
      justifyContent="center"
      flexDirection="column"
    >
      {/* Title */}
      {!title ? (
        <></>
      ) : (
        <p className={`overline-responsive ${styles.overline}`}>{title}</p>
      )}

      {/* Headline */}
      <h2
        className={
          children && !paragraph ? styles.noPaddingBottom : styles.headline
        }
      >
        {headline}
      </h2>

      {/* Paragraph */}
      {!paragraph ? (
        <></>
      ) : (
        <p className={`paragraph-lg ${styles.paragraph}`}>{paragraph}</p>
      )}

      {/* Children */}
      <>{!children ? <></> : children}</>

      {/* Button */}
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
