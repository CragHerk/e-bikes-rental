import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";
import styles from "./ButtonSpinner.module.css";

const ButtonSpinner = ({ color }) => {
  return (
    <div className={styles.spinner}>
      <ClipLoader color={color} className={styles.cliploader} />
    </div>
  );
};
ButtonSpinner.propTypes = {
  color: PropTypes.string,
};
export default ButtonSpinner;
