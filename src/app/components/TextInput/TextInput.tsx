"use client";

import { CSSProperties } from "react";
import { variants as typographyVariants } from "@/app/components/Typography/Typography";

type Props = {
  placeholder?: string;
  variant: "dark" | "white";
};

const variants: Record<"dark", CSSProperties> = {
  dark: {
    borderRadius: "8px",
    borderTop: "1px solid #FFF",
    borderRight: "1px solid #FFF",
    borderBottom: "2px solid #FFF",
    borderLeft: "1px solid #FFF",
    boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.06)",
    color: "#FFF",
  },
};

export const TextInput = ({ placeholder, variant }: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        style={{ ...typographyVariants["paragraph"], ...variants["dark"] }}
        className="h-16 bg-transparent px-6 placeholder-white"
      />
    </div>
  );
};
