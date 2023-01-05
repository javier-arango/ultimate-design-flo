import styles from "./Container.module.css";

type Props = {
  flexDirection?: "row" | "column";
  justifyContent?: "flexStart" | "flexEnd" | "center" | "spaceBetween";
  children: JSX.Element | JSX.Element[];
  className?: string;
};

const Container = ({
  flexDirection = "row",
  justifyContent,
  children,
  className,
}: Props) => {
  return (
    <div
      className={`${className} ${styles.container} 
      ${flexDirection === "row" ? styles.flexRow : styles.flexColumn}
      ${!justifyContent ? styles.spaceBetween : styles[justifyContent]}`}
    >
      {children}
    </div>
  );
};

export default Container;
