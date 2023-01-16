import styles from "./Button.module.css";
import { IButton } from "../../../lib";

const Button = ({ label, type, variant, onClick, className }: IButton) => {
  return (
    <>
      <button
        type={!type ? "button" : type}
        onClick={onClick}
        className={`${className} ${styles.button} ${
          !variant
            ? styles.primaryButton
            : variant === "primary"
            ? styles.primaryButton
            : styles.secondaryButton
        }`}
      >
        <p className="label-responsive">{label}</p>
      </button>
    </>
  );
};

export default Button;
