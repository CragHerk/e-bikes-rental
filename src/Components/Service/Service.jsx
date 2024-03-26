import styles from "./Service.module.css";

const Service = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icon_element}>
        <div className={styles.line}></div>
        <div className={styles.line2}></div>
        <img src="assets/bike-simple.svg" alt="bike" className="style.svg" />
      </div>
      <h1 className={styles.header_h1}>Serwis</h1>
      <div className={styles.header_h4}>Bosh professional</div>
      <div className={styles.service}>
        <img
          src="/assets/service/serwis2.webp"
          alt="service"
          className={styles.service_image}
        />
        <img
          src="/assets/service/serwis.webp"
          alt="service"
          className={styles.service_image}
        />
        <img
          src="/assets/service/serwis1.webp"
          alt="service"
          className={styles.service_image}
        />
      </div>
    </div>
  );
};

export default Service;
