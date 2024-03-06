import { useState } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../../State/Actions/menu.actions";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    dispatch(openMenu());
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const menuClassName = isMenuOpen
    ? `${styles.menu} ${styles.menuOpen}`
    : styles.menu;

  return (
    <div className={styles.container}>
      <button
        className={styles.hamburger}
        onClick={handleOpenMenu}
        id="hamburger"
        aria-label="hamburger"
      >
        <FaBars className={styles.hamburger_icon} />
      </button>
      <Link to={"/"}>
        <img src="/icon (1).png" alt="logo" />
      </Link>
      <Link to={"/cart"} aria-label="link to cart">
        <button className={styles.cart} aria-label="cart" id="cart">
          <FaShoppingCart size={24} />
        </button>
      </Link>
      <div
        className={menuClassName}
        onClick={() => {
          handleCloseMenu();
        }}
      >
        <Menu />
      </div>
    </div>
  );
};

export default Header;
