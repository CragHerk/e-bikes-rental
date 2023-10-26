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
            <img src="/assets/location.svg" alt="location" />
            <a>Słotwina 222 aaa</a>
          </div>
          <div className={styles.email}>
            <img src="/assets/mail.svg" alt="mail" />
            <a href="kamrock36@gmail.com" type="email">
              kamrock36@gmail.com
            </a>
          </div>
          <div className={styles.phone}>
            <img src="/assets/phone.svg" alt="phone" />
            <a>Telefon:</a>
            <h4>123321123123</h4>
          </div>
          <div className={styles.social_media}>
            <a className={styles.icon} href="https://www.instagram.com">
              <img
                className={styles.svg}
                src="/assets/instagram.svg"
                alt="instagram"
              />
            </a>
            <a className={styles.icon} href="https://www.facebook.com">
              <img
                className={styles.svg}
                src="/assets/facebook.svg"
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
