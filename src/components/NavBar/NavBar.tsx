import styles from "./NavBar.module.css";

import { useState } from "react";

import { INavBarItems } from "lib";
import { navBarItemsData } from "data";

import { Container, LinkItem } from "@components/common";
import { Logo } from "./Logo/Logo";
import { HamburgerMenu } from "./MenuButton/HamburgerMenu";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* Navigation Bar Content */}
      <nav className={styles["navBar-container"]}>
        <Container flexDirection="row">
          {/* Logo */}
          <Logo />

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
            {navBarItemsData.map((item: INavBarItems) => (
              <li key={item.name}>
                <LinkItem to={item.href}>{item.name}</LinkItem>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </>
  );
};
