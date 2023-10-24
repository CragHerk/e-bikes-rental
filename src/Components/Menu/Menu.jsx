import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../State/Actions/menu.actions";
import { useSpring, animated } from "react-spring";
import styles from "./Menu.module.css";
import {
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Menu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  const menuAnimation = useSpring({
    transform: isMenuOpen ? `translateX(-0%)` : `translateX(-100%)`,
  });

  return (
    <animated.div style={menuAnimation} className={styles.menu}>
      <div className={styles.menu_container}>
        <button className={styles.closeButton} onClick={handleCloseMenu}>
          <FaTimes className={styles.closeIcon} />
        </button>
        <ul className={styles.menuList}>
          <li className={styles.menuElement}>
            <FaFacebook /> Facebook
          </li>
          <li className={styles.menuElement}>
            <FaInstagram /> Instagram
          </li>
          <li className={styles.menuElement}>
            <FaEnvelope /> Email
          </li>
          <li className={styles.menuElement}>
            <FaPhone /> Telefon
          </li>
        </ul>
        <p className={styles.menu_p}>
          © 2023 Wypożyczalnia rowerów elektrycznych w Słotwinie
        </p>
      </div>
    </animated.div>
  );
};

export default Menu;
