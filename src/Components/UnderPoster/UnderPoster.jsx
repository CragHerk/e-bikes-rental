import styles from "./UnderPoster.module.css";
import { Link } from "react-router-dom";

const UnderPoster = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.first}>ROWERY ELEKTRYCZNE</div>
      <div className={styles.second}>
        {" "}
        <Link
          to={"/service"}
          aria-label="link to service"
          className={styles.link}
        >
          SERWIS
        </Link>
      </div>
      <div className={styles.third}>WYCIECZKI</div>
    </div>
  );
};

export default UnderPoster;
