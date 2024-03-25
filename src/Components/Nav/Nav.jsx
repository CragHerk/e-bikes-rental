import { useState } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../../State/Actions/menu.actions";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";

const Nav = () => {
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
        <Modal />
      </div>
    </div>
  );
};

export default Nav;
