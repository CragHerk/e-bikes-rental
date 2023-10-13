import { images } from "../Gallery/images";
import Gallery from "../Gallery/Gallery/Gallery";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
  return (
    <div className={styles.aboutus}>
      <h2>O nas :</h2>
      <div className={styles.aboutus_container}>
        <Gallery images={images} />
      </div>
    </div>
  );
};
export default AboutUs;
