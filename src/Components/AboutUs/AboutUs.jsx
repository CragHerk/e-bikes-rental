import * as styles from "./AboutUs.module.css";
import Gallery from "../Gallery/Gallery/Gallery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { images } from "../Gallery/images";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.icon_element}>
          <div className={styles.line}></div>
          <div className={styles.line2}></div>
          <LazyLoadImage
            src="assets/bike-simple.svg"
            alt="bike"
            className={styles.svg}
          />
        </div>
        <h1 className={styles.header_h1}>O nas</h1>
        <div className={styles.wrapper}>
          <figure className={styles.header_img}>
            <img src="assets/about-us.webp" alt="man-bike" />
            <figcaption className={styles.header_h4}>
              <span>Słotwina</span> to urokliwa miejscowość w Beskidzie
              Żywieckim, znajdująca się w okolicach Żywca. Położona u stóp góry
              Skrzyczne, ta spokojna wieś jest idealnym miejscem do aktywnego
              spędzania czasu na świeżym powietrzu. Spacerując po górach można
              nacieszyć się pięknymi widokami, a dla dodatkowych wrażeń warto
              wybrać się na przejażdżkę rowerem elektrycznym z wypożyczalni{" "}
              <span>KamRock</span>! :D
            </figcaption>
          </figure>
        </div>
      </header>

      <header className={styles.header}>
        <div className={styles.icon_element}>
          <div className={styles.line}></div>
          <div className={styles.line2}></div>
          <LazyLoadImage
            src="assets/bike-simple.svg"
            alt="bike"
            className={styles.svg}
          />
        </div>
        <h1 className={styles.header_h1}>Galeria</h1>

        <p className={styles.header_h4}>
          Znajdź nas na Instagramie oraz Facebooku !
        </p>
        <div className={styles.socials_wrapper}>
          <a href="https://www.facebook.com/">
            <img
              className={styles.svg}
              src="assets/svg/instagram-big.svg"
              alt="instagram"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              className={styles.svg}
              src="assets/svg/facebook-big.svg"
              alt="facebook"
            />
          </a>
        </div>
      </header>

      <div className={styles.aboutus_container}>
        <Gallery images={images} />
      </div>
    </div>
  );
};

export default AboutUs;
