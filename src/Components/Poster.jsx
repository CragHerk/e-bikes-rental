import { useState } from "react";
import { Link } from "react-scroll";
import styles from "../Styles/Poster.module.css";

const Poster = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isTablet = window.innerWidth >= 768;
  const isDesktop = window.innerWidth >= 1200;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={styles.poster}>
      <div className={styles.poster_wrapper}>
        <span className={styles.span}>Wypożyczalnia rowerów elektrycznych</span>
        <Link to="bikeslist">
          <button className={styles.button}>Znajdź rower</button>
        </Link>
      </div>

      {!imageLoaded && <div className={styles.placeholder}></div>}
      <img
        src={
          isDesktop
            ? "/assets/desktop-shaped.jpg"
            : isTablet
            ? "/assets/tablet-shaped.jpg"
            : "/assets/mobile-shaped.jpg"
        }
        alt="Poster"
        onLoad={handleImageLoad}
        className={`${styles.image} ${imageLoaded ? styles.visible : ""}`}
      />
    </div>
  );
};

export default Poster;
