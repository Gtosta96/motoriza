import { CSSProperties, ReactNode } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "subtitle1"
  | "subtitle2"
  | "paragraph"
  | "button"
  | "caption"
  | "overline";

const variants: Record<Variant, CSSProperties> = {
  h1: {
    fontFamily: "Inter",
    fontSize: "96px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "96px",
    letterSpacing: "-3.84px",
  },
  h2: {
    fontFamily: "Inter",
    fontSize: "60px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "normal",
    letterSpacing: "-2.4px",
  },
  h3: {
    fontFamily: "Inter",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    letterSpacing: "-1.92px",
  },
  subtitle1: {
    fontFamily: "Inter",
    fontSize: "34px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    letterSpacing: "-1.36px",
  },
  subtitle2: {
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    letterSpacing: "-0.96px",
  },
  paragraph: {
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "-0.48px",
  },
  button: {
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    letterSpacing: "-0.175px",
  },
  caption: {
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "-0.24px",
  },
  overline: {
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    letterSpacing: "-0.24px",
    textTransform: "uppercase",
  },
};

type Props = {
  variant: Variant;
  color?: "white" | "black";
  children: ReactNode;
  block?: boolean;
};

export const Typography = ({
  variant,
  color = "black",
  block,
  children,
}: Props) => {
  return (
    <span
      style={variants[variant]}
      className={`text-${color} ${block ? "block" : undefined}`}
    >
      {children}
    </span>
  );
};
