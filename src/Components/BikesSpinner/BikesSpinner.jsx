import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";
import styles from "./BikesSpinner.module.css";

const BikesSpinner = ({ color }) => {
  return (
    <div className={styles.spinner}>
      <ClipLoader color={color} className={styles.cliploader} />
    </div>
  );
};
BikesSpinner.propTypes = {
  color: PropTypes.string,
};
export default BikesSpinner;
