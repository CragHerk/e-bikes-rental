import * as styles from "./AboutUs.module.css";

import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon_element}>
          <div className={styles.line}></div>
          <div className={styles.line2}></div>
          <img src="assets/bike-simple.svg" alt="bike" className="style.svg" />
        </div>
        <h1 className={styles.header_h1}>O nas</h1>
        <div className={styles.wrapper}>
          <img
            className={styles.header_img}
            src="assets/about-us.webp"
            alt="man-bike"
          />
          <div className={styles.header_h4}>
            <span>Słotwina</span> to urokliwa miejscowość w Beskidzie Żywieckim,
            znajdująca się w okolicach Żywca. Położona u stóp góry Skrzyczne, ta
            spokojna wieś jest idealnym miejscem do aktywnego spędzania czasu na
            świeżym powietrzu. Spacerując po górach można nacieszyć się pięknymi
            widokami, a dla dodatkowych wrażeń warto wybrać się na przejażdżkę
            rowerem elektrycznym z wypożyczalni <span>KamRock</span>! :D
          </div>
        </div>
      </div>

      <div className={styles.header}>
        <div className={styles.icon_element}>
          <div className={styles.line}></div>
          <div className={styles.line2}></div>
          <LazyLoadImage
            src="assets/bike-simple.svg"
            alt="bike"
            className="style.svg"
          />
        </div>
        <h1 className={styles.header_h1}>Galeria</h1>

        <div className={styles.header_h4}>
          Znajdź nas na Instagramie oraz Facebooku !
        </div>
        <div className={styles.socials_wrapper}>
          <a href="https://www.facebook.com/">
            <img />
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
