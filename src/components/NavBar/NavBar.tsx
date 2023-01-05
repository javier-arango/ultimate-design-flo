import styles from "./NavBar.module.css";

import { INavBarItemsData } from "../../types";
import { navBarItemsData } from "../../data";
import { Container, LinkItem } from "../Global";
import HamburgerMenu from "./MenuButton/HamburgerMenu";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* Navigation Bar Content */}
      <nav className={styles["navBar-container"]}>
        <Container flexDirection="row">
          {/* Logo */}
          <LinkItem name="Ultimate Design Flo" to="/" />

          {/* Menu Button for mobile */}
          <HamburgerMenu open={isMenuOpen} setOpen={setIsMenuOpen} />

          {/* Navigation container */}
          <ul
            className={`${
              isMenuOpen ? styles["navBar-menu-mobile"] : styles["navBar-menu"]
            }`}
          >
            {/* Show divider on mobile */}
            {isMenuOpen && <hr className="divider-sm" />}

            {/* Navigation items */}
            {navBarItemsData.map((item: INavBarItemsData) => (
              <li key={item.name}>
                <LinkItem name={item.name} to={item.href} />
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </>
  );
};

export default NavBar;