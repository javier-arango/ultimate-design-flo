import styles from "./InfoBlock.module.css";

import { IInfoBlock } from "lib";

import { Button } from "@components/common/Button/Button";
import { Container } from "@components/common/Container/Container";

interface Props extends IInfoBlock {
  children?: JSX.Element | JSX.Element[];
}

export const InfoBlock = ({
  title,
  headline,
  paragraph,
  button,
  children,
}: Props) => {
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
        <p
          className={`paragraph-lg ${
            children ? styles.noPaddingBottom : styles.paragraph
          }`}
        >
          {paragraph}
        </p>
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
