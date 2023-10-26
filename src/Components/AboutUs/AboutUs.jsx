import { images } from "../Gallery/images";
import Gallery from "../Gallery/Gallery/Gallery";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon_element}>
          <div className={styles.line}></div>
          <div className={styles.line2}></div>
          <img src="assets/bike-simple.svg" alt="bike" />
        </div>
        <h1 className={styles.header_h1}>O nas</h1>
        <div className={styles.wrapper}>
          <img
            className={styles.header_img}
            src="assets/about-us.jpg"
            alt="man-bike"
          />
          <h4 className={styles.header_h4}>
            <span>Słotwina</span> to urokliwa miejscowość w Beskidzie Żywieckim,
            znajdująca się w okolicach Żywca. Położona u stóp góry Skrzyczne, ta
            spokojna wieś jest idealnym miejscem do aktywnego spędzania czasu na
            świeżym powietrzu. Spacerując po górach można nacieszyć się pięknymi
            widokami, a dla dodatkowych wrażeń warto wybrać się na przejażdżkę
            rowerem elektrycznym z wypożyczalni <span>KamRock</span>! :D
          </h4>
        </div>
      </div>

      <div className={styles.header}>
        <div className={styles.icon_element}>
          <div className={styles.line}></div>
          <div className={styles.line2}></div>
          <img src="assets/bike-simple.svg" alt="bike" />
        </div>
        <h1 className={styles.header_h1}>Galeria</h1>

        <h4 className={styles.header_h4}>
          Znajdź nas na Instagramie oraz Facebooku !
        </h4>
        <div className={styles.socials_wrapper}>
          <a href="https://www.facebook.com/">
            <img
              className={styles.svg}
              src="assets/instagram-big.svg"
              alt="instagram"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              className={styles.svg}
              src="assets/facebook-big.svg"
              alt="facebook"
            />
          </a>
        </div>
      </div>

      <div className={styles.aboutus_container}>
        <Gallery images={images} />
      </div>
    </div>
  );
};
export default AboutUs;
