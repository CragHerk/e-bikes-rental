import styles from "./Complete.module.css";
import { Link } from "react-router-dom";
import MovingComponent from "react-moving-text";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
const Complete = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Link to={"/"}>
        <MovingComponent
          type="fadeInFromTop"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="linear"
          iteration="1"
          fillMode="none"
        >
          <button className={styles.btn}>Przejdź do strony głównej</button>
        </MovingComponent>
      </Link>
      <MovingComponent
        className={styles.wrapper}
        type="popIn"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease-in-out"
        iteration="1"
        fillMode="none"
      >
        <h1 className={styles.tag}>Zarezerwowano</h1>
        <p className={styles.p}>Sprawdź e-mail</p>
      </MovingComponent>
      <Footer />
    </div>
  );
};
export default Complete;
