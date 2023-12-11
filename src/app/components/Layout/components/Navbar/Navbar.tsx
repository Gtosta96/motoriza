import Image from "next/image";

import styles from "./Navbar.module.css";
import MotorizaLogo from "./motoriza-logo.svg";

export const NavBar = () => {
  return (
    <div className={`${styles.container} sm:px-6`}>
      <Image src={MotorizaLogo} alt="Motoriza Logo" width={145} height={35} />
    </div>
  );
};
