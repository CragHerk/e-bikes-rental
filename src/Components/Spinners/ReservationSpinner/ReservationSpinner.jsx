import BarLoader from "react-spinners/BarLoader";
import PropTypes from "prop-types";
import styles from "./ReservationSpinner.module.css";

const BikesSpinner = ({ color }) => {
  return (
    <div className={styles.spinner}>
      <BarLoader color={color} className={styles.cliploader} />
    </div>
  );
};
BikesSpinner.propTypes = {
  color: PropTypes.string,
};
export default BikesSpinner;
