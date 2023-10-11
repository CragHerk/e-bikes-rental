import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import styles from "./Checkbox.module.css";

const Checkbox = ({ checked, onChange }) => {
  return (
    <label className={styles.checkboxLabel}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.checkboxInput}
      />

      {checked && <FaTimes className={styles.closeIcon} />}
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
