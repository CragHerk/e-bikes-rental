import styles from "../Styles/AboutUs.module.css";
const AboutUs = () => {
  return (
    <div className={styles.aboutus}>
      <h2>O nas :</h2>
      <span className={styles.aboutus_span}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        laboriosam ratione ipsam necessitatibus recusandae architecto iste quasi
      </span>
      <div className={styles.aboutus_wrapper}></div>
    </div>
  );
};
export default AboutUs;
