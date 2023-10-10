import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import styles from "./Checkbox.module.css";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className={styles.checkboxLabel}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.checkboxInput}
      />
      {label}
      {checked && <FaTimes className={styles.closeIcon} />}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
