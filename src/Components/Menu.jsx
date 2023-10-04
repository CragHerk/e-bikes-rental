import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../State/Actions/menu.actions";
import styles from "../Styles/Menu.module.css";
import { FaTimes } from "react-icons/fa";

const Menu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };
  console.log("Stan menu:", isMenuOpen);
  const menuClassName = isMenuOpen
    ? `${styles.menu} ${styles.menuOpen}`
    : styles.menu;

  return (
    <div className={menuClassName}>
      <button className={styles.closeButton} onClick={handleCloseMenu}>
        <FaTimes className={styles.closeIcon} />
      </button>
      <ul className={styles.menuList}>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
  );
};

export default Menu;
