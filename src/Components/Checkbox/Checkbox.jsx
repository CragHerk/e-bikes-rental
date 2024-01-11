import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import styles from "./Checkbox.module.css";

export const Checkbox = ({ checked }) => {
  return (
    <label className={styles.checkboxLabel}>
      <input
        type="checkbox"
        checked={checked}
        className={styles.checkboxInput}
      />

      {checked && <FaTimes className={styles.closeIcon} />}
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired
    .description("Indicates whether the checkbox is checked or not")
    .default(false),
};
