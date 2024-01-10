import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.container}>
        <div className={styles.footer_wrapper}>
          <h4>Godziny otwarcia :</h4>
          <div className={styles.footer_avilability}>
            <span>poniedziałek - piątek</span> <h4>9:00 - 19.00</h4>
          </div>
          <div className={styles.footer_avilability}>
            <span>sobota - niedziela</span> <h4>9:00 - 18.00</h4>
          </div>
        </div>

        <div className={styles.contact}>
          <h4>Kontakt i lokalizacja</h4>
          <div className={styles.adress}>
            <img
              src="/assets/svg/location.svg"
              alt="location"
              className={styles.svg}
            />
            <a>Słotwina 222 aaa</a>
          </div>
          <div className={styles.email}>
            <img src="/assets/svg/mail.svg" alt="mail" className={styles.svg} />
            <a href="kamrock36@gmail.com" type="email">
              kamrock36@gmail.com
            </a>
          </div>
          <div className={styles.phone}>
            <img
              src="/assets/svg/phone.svg"
              alt="phone"
              className={styles.svg}
            />
            <a>Telefon:</a>
            <h4>123321123123</h4>
          </div>
          <div className={styles.social_media}>
            <a className={styles.icon} href="https://www.instagram.com">
              <img
                className={styles.svg}
                src="/assets/svg/instagram.svg"
                alt="instagram"
              />
            </a>
            <a className={styles.icon} href="https://www.facebook.com">
              <img
                className={styles.svg}
                src="/assets/svg/facebook.svg"
                alt="facebook"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <h6>© 2023 Wypożyczalnia rowerów elektrycznych w Słotwinie</h6>
      </div>
    </div>
  );
};
export default Footer;
