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
      <div className={styles.nav}>
        <Link
          to={"/cart"}
          aria-label="link to cart"
          className={styles.cart_link}
        >
          <button aria-label="cart" id="cart">
            <FaShoppingCart size={16} className={styles.cart_icon} />
          </button>
        </Link>
        <Link
          to={"/"}
          aria-label="link to service"
          className={styles.cart_link}
        >
          {" "}
          <button type="button" className="">
            STRONA GŁÓWNA
          </button>
        </Link>
        <Link
          to={"/service"}
          aria-label="link to service"
          className={styles.cart_link}
        >
          {" "}
          <button type="button" className="">
            SERWIS
          </button>
        </Link>
      </div>

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
