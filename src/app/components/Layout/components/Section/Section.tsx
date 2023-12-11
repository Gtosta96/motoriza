import styles from "./Section.module.css";

import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export const Section = ({ children, className }: Props) => {
  return (
    <div className={`${styles.container} ${className} sm:px-6`}>{children}</div>
  );
};
