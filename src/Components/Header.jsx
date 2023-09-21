import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openMenu } from "../State/Actions/menu.actions.js";
import styles from "../Styles/Header.module.css";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";

const Header = () => {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const dispatch = useDispatch();

  const handleOpenMenu = () => {
    dispatch(openMenu());
  };

  return (
    <div className={styles.header}>
      <button className={styles.hamburgerButton} onClick={handleOpenMenu}>
        <FaBars className={styles.hamburgerIcon} />
      </button>
      <p className={styles.header__p}>Wypożyczalnia rowerów elektrycznych</p>
      {isMenuOpen && <Menu />}
    </div>
  );
};

export default Header;
