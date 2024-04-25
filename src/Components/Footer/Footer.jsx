import * as styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.container}>
        <div className={styles.footer_wrapper}>
          <span>Godziny otwarcia :</span>
          <div className={styles.footer_avilability}>
            <span>poniedziałek - piątek</span> <span>9:00 - 19.00</span>
          </div>
          <div className={styles.footer_avilability}>
            <span>sobota - niedziela</span> <span>9:00 - 18.00</span>
          </div>
        </div>

        <div className={styles.contact}>
          <span>Kontakt i lokalizacja</span>
          <address className={styles.adress}>
            <img
              src="/assets/svg/location.svg"
              alt="location"
              className={styles.svg}
            />
            <a>Lipowa ul.sloneczne wzgórze 28 </a>
          </address>
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
            <span>536196751</span>
          </div>
          <div className={styles.nip}>
            <img src="/assets/svg/nip.svg" alt="phone" className={styles.svg} />
            <a>NIP:</a>
            <span>536196751</span>
          </div>
          <div className={styles.social_media}>
            <a className={styles.icon} href="https://www.instagram.com">
              <img
                className={styles.svg}
                src="/assets/svg/instagram.svg"
                alt="instagram"
              />
            </a>
            <a
              className={styles.icon}
              href="https://www.facebook.com/profile.php?id=100092719643579"
            >
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
        <span className={styles.cap}>
          © 2023 Wypożyczalnia rowerów elektrycznych w Lipowej
        </span>
      </div>
    </footer>
  );
};

export default Footer;
