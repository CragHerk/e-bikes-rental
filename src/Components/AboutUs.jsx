import styles from "../Styles/AboutUs.module.css";
const AboutUs = () => {
  return (
    <div className={styles.aboutus}>
      <h2>O nas :</h2>
      <div className={styles.aboutus_container}>
        <div className={styles.aboutus_wrapper}>
          <span className={styles.aboutus_span}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            laboriosam ratione ipsam necessitatibus recusandae architecto iste
            quasi
          </span>
        </div>
        <div className={styles.aboutus_wrapper2}>
          <span className={styles.aboutus_span2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            laboriosam ratione ipsam necessitatibus recusandae architecto iste
            quasi
          </span>
        </div>
        <div className={styles.aboutus_wrapper3}>
          <span className={styles.aboutus_span3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            laboriosam ratione ipsam necessitatibus recusandae architecto iste
            quasi
          </span>
        </div>
        <div className={styles.aboutus_wrapper4}>
          <span className={styles.aboutus_span4}>
            consectetur adipisicing elit. Quisquam, laboriosam ratione
            recusandae architecto iste quasi
          </span>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
