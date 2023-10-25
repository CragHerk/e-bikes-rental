import { images } from "../Gallery/images";
import Gallery from "../Gallery/Gallery/Gallery";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Słotwina – wieś w Polsce położona w województwie śląskim, w powiecie
        żywieckim, w gminie Lipowa u stóp Skrzycznego.
      </p>
      <div className={styles.poster}></div>
      <h2>O nas :</h2>

      <div className={styles.aboutus_container}>
        <Gallery images={images} />
      </div>
    </div>
  );
};
export default AboutUs;
