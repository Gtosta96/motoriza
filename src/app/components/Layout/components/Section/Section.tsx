import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export const Section = ({ children, className }: Props) => {
  return (
    <div className={`flex flex-col gap-y-2.5 px-6 py-24 sm:px-28 ${className}`}>
      {children}
    </div>
  );
};
