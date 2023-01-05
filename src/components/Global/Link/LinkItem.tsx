import styles from "./LinkItem.module.css";

import Link from "next/link";

type Props = {
  name: string;
  to?: string;
  className?: string;
};

const LinkItem = ({ name, to, className }: Props) => {
  return (
    <Link
      className={`${styles.link} ${
        !className ? "label-responsive" : className
      }`}
      href={!to ? "/" : to}
    >
      {name}
    </Link>
  );
};

export default LinkItem;
