import { useSelector, useDispatch } from "react-redux";
import { openMenu } from "../State/Actions/menu.actions.js";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import styles from "../Styles/Header.module.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const dispatch = useDispatch();

  const handleOpenMenu = () => {
    dispatch(openMenu());
  };

  return (
    <div className={styles.header}>
      <button className={styles.hamburger_button} onClick={handleOpenMenu}>
        <FaBars className={styles.hamburger_icon} />
      </button>
      <Link to={"/"}>
        <p className={styles.header_p}>Wypożyczalnia rowerów elektrycznych</p>
      </Link>
      <Link to={"/"}>
        <div className={styles.logo}>LOGO</div>
      </Link>
      <Link to={"/cart"}>
        <button className={styles.cart}>
          <FaShoppingCart />
        </button>
      </Link>
      {isMenuOpen && <Menu />}
    </div>
  );
};

export default Header;
