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
    transform: isMenuOpen ? `translateX(-19%)` : `translateX(-150%)`,
  });

  return (
    <animated.div style={menuAnimation} className={styles.menu}>
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
    </animated.div>
  );
};

export default Menu;
