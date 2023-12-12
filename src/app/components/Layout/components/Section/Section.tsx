import styles from "./Section.module.css";

import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  bgColor?: "transparent" | "white" | "black";
};

export const Section = ({
  children,
  bgColor = "transparent",
  className,
}: Props) => {
  return (
    <div className={`${styles.container} ${className} sm:px-6 bg-${bgColor}`}>
      {children}
    </div>
  );
};
