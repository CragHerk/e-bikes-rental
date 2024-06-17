import styles from "./Offer.module.css";

const Offer = () => {
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
      <div className={styles.el}>
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
      </div>
    </div>
  );
};

export default Offer;
