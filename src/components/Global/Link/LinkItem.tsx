import styles from "./LinkItem.module.css";
import { ILInk } from "../../../types";

import Link from "next/link";

const LinkItem = ({ name, to, className }: ILInk) => {
  return (
    <Link
      className={`label-responsive ${styles.link} ${className}`}
      href={!to ? "/" : to}
    >
      {name}
    </Link>
  );
};

export default LinkItem;
