import { useState } from "react";
import { Link } from "react-scroll";
import MovingComponent from "react-moving-text";
import { useSpring, animated } from "react-spring";

import styles from "./Poster.module.css";

const Poster = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isTablet = window.innerWidth >= 768;
  const isDesktop = window.innerWidth >= 1200;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const imageSpring = useSpring({
    transform: imageLoaded ? "scale(1)" : "scale(1.05)",
    transition: "transform 4s ease-in-out",
  });

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/icon-poster.png" alt="logo" />
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.h1}>Wypożyczalnia rowerów</h1>
          <span className={styles.span}>
            Rowery elektryczne, górskie z wytrzymałą baterią i mocnym silnikiem
          </span>
        </div>
        <Link to="bikeslist">
          <MovingComponent
            type="fadeInFromLeft"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease-in"
            iteration="1"
            fillMode="none"
          >
            <button className={styles.button}>Wybierz rower</button>
          </MovingComponent>
        </Link>
      </div>

      {!imageLoaded && <div className={styles.placeholder}></div>}
      <animated.img
        src={
          isDesktop
            ? "/assets/desk.jpg"
            : isTablet
            ? "/assets/tab.jpg"
            : "/assets/mob.jpg"
        }
        alt="Poster"
        onLoad={handleImageLoad}
        style={{
          ...imageSpring,
        }}
        className={styles.image}
      />
    </div>
  );
};

export default Poster;
