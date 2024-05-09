import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../State/Actions/menu.actions";
import { useImperativeDisableScroll } from "../../Utils/unseImperaticeDisabledScroll";
import { useSpring, animated } from "react-spring";
import styles from "./Modal.module.css";
import {
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Modal = () => {
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
        <button
          className={styles.close_btn}
          onClick={handleCloseMenu}
          aria-label="close"
        >
          <FaTimes className={styles.close_icon} />
        </button>
        <ul className={styles.menu_list}>
          <li className={styles.menu_element}>
            <a
              href="https://www.facebook.com/profile.php?id=100092719643579"
              className={styles.icon}
            >
              <FaFacebook /> Facebook
            </a>
          </li>
          <li className={styles.menu_element}>
            <a href="https://www.instagram.com" className={styles.icon}>
              <FaInstagram /> Instagram
            </a>
          </li>
          <li className={styles.menu_element}>
            <FaEnvelope /> kamrock36@gmail.com
          </li>
          <li className={styles.menu_element}>
            <FaPhone /> 536196751
          </li>
        </ul>
        <p className={styles.menu_p}>
          © 2023 Wypożyczalnia rowerów elektrycznych w Słotwinie
        </p>
        <Link to="/xxxlll">
          <button type="button" className={styles.panel}>
            PANEL
          </button>
        </Link>
      </div>
    </animated.div>
  );
};

export default Modal;
