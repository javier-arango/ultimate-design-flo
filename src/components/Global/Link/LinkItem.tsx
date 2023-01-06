import styles from "./LinkItem.module.css";
import { ILInk } from "../../../types";

import Link from "next/link";

const LinkItem = ({
  to,
  external,
  className,
  children,
}: React.PropsWithChildren<ILInk>) => {
  return (
    <>
      {!external ? (
        <Link
          className={`label-responsive ${styles.link} ${className}`}
          href={!to ? "/" : to}
        >
          {children}
        </Link>
      ) : (
        <a
          className={`label-responsive ${styles.link} ${className}`}
          href={!to ? "/" : to}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )}
    </>
  );
};

export default LinkItem;
