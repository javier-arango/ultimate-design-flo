import styles from "./HamburgerMenu.module.css";

interface IHamburgerMenu {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

const HamburgerMenu = ({ open, setOpen }: IHamburgerMenu) => {
  return (
    <button
      className={styles.toggleMenuBtn}
      aria-expanded="false"
      aria-controls="nav-menu"
      aria-label="toggle menu"
      onClick={() => setOpen(!open)}
    >
      <div id={styles.toggleMenuIcon} className={open ? styles.open : "close"}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default HamburgerMenu;
