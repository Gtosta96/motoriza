import { PropsWithChildren } from "react";
import { NavBar } from "./components/Navbar/Navbar";
import { Section } from "./components/Section/Section";

export const Layout = ({ children }: PropsWithChildren) => <>{children}</>;

Layout.Navbar = NavBar;
Layout.Section = Section;
