import styles from "./Offer.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Offer = () => {
  const [ref1, inView1] = useInView();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon_element}>
          <div className={styles.line}></div>
          <div className={styles.line2}></div>
          <img src="assets/bike-simple.svg" alt="bike" className="style.svg" />
        </div>
      </div>
      <h1>Oferujemy</h1>
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: inView1 ? 1 : 0,
          y: inView1 ? 0 : 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className={styles.el}
      >
        {" "}
        <div className={styles.el1}>
          -Serwis rowerów analogowych i elektrycznych
        </div>
        <div className={styles.el1}>
          -Autoryzowany serwis silników marek bosch i brose na oryginalnych
          częściach
        </div>
        <div className={styles.el1}>-Wycieczki z przewodnikiem</div>
        <div className={styles.el1}>
          -Organizacja wyjazdów firmowych, wieczorow kawalerskich itp
        </div>
      </motion.div>
    </div>
  );
};

export default Offer;
