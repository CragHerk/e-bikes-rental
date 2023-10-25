import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../State/Actions/menu.actions";
import { useImperativeDisableScroll } from "../../Utils/unseImperaticeDisabledScroll";
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
  useImperativeDisableScroll({ element: document.body, disabled: isMenuOpen });

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  const menuAnimation = useSpring({
    transform: isMenuOpen ? `translateX(-0%)` : `translateX(-100%)`,
  });

  return (
    <animated.div style={menuAnimation} className={styles.menu_container}>
      <div className={styles.container}>
        <button className={styles.close_btn} onClick={handleCloseMenu}>
          <FaTimes className={styles.close_icon} />
        </button>
        <ul className={styles.menu_list}>
          <li className={styles.menu_element}>
            <FaFacebook /> Facebook
          </li>
          <li className={styles.menu_element}>
            <FaInstagram /> Instagram
          </li>
          <li className={styles.menu_element}>
            <FaEnvelope /> Email
          </li>
          <li className={styles.menu_element}>
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
