import { useState } from "react";
import styles from "../Styles/Poster.module.css";

const Poster = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isTablet = window.innerWidth >= 768;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={styles.poster}>
      {!imageLoaded && <div className={styles.placeholder}></div>}
      <img
        src={
          isTablet
            ? "/assets/poster-shaped-tablet.jpg"
            : "/assets/poster-shaped-mobile.jpg"
        }
        alt="Poster"
        onLoad={handleImageLoad}
        className={`${styles.image} ${imageLoaded ? styles.visible : ""}`}
      />
    </div>
  );
};

export default Poster;
