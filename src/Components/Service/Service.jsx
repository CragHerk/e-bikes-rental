import styles from "./Service.module.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();
  const [ref8, inView8] = useInView();
  const [ref9, inView9] = useInView();
  const [ref10, inView10] = useInView();

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);
  const [isVisible10, setIsVisible10] = useState(false);

  useEffect(() => {
    if (inView1) {
      setIsVisible1(true);
    } else {
      setIsVisible1(false);
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      setIsVisible2(true);
    } else {
      setIsVisible2(false);
    }
  }, [inView2]);

  useEffect(() => {
    if (inView3) {
      setIsVisible3(true);
    } else {
      setIsVisible3(false);
    }
  }, [inView3]);
  useEffect(() => {
    if (inView4) {
      setIsVisible4(true);
    } else {
      setIsVisible4(false);
    }
  }, [inView4]);
  useEffect(() => {
    if (inView5) {
      setIsVisible5(true);
    } else {
      setIsVisible5(false);
    }
  }, [inView5]);
  useEffect(() => {
    if (inView6) {
      setIsVisible6(true);
    } else {
      setIsVisible6(false);
    }
  }, [inView6]);
  useEffect(() => {
    if (inView7) {
      setIsVisible7(true);
    } else {
      setIsVisible7(false);
    }
  }, [inView7]);
  useEffect(() => {
    if (inView8) {
      setIsVisible8(true);
    } else {
      setIsVisible8(false);
    }
  }, [inView8]);
  useEffect(() => {
    if (inView9) {
      setIsVisible9(true);
    } else {
      setIsVisible9(false);
    }
  }, [inView9]);
  useEffect(() => {
    if (inView10) {
      setIsVisible10(true);
    } else {
      setIsVisible10(false);
    }
  }, [inView10]);
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <div className={styles.icon_element}>
          <div className={styles.line}></div>
          <div className={styles.line2}></div>
          <img src="assets/bike-simple.svg" alt="bike" className="style.svg" />
        </div>
        <h1 className={styles.header_h1}>Serwis</h1>
        <div className={styles.header_h4}>Bosh professional</div>
        <div className={styles.service}>
          <div className={styles.desc}>
            <div className={styles.first_wrapper}>
              <img
                src="/assets/service/serwis2.webp"
                alt="service"
                className={styles.service_image}
              />
              <div className={styles.inside_wrapper}>
                {" "}
                <span className={styles.heading}>
                  Zapraszamy do serwisu rowerów elektrycznych i analogowych
                  Kamrock Bikes w Lipowej.
                </span>
                <img src="/assets/service/bosh-logo.jpg" alt="bosh logo" />
                <span>
                  Jesteśmy autoryzowanym serwisem systemów Bosch. Nasz serwis
                  polega na narzedziach renomowanych marek min. Park tool i
                  Unior. Oferujemy kompleksową obsługę waszych jednośladów oraz
                  doradztwo.
                </span>{" "}
              </div>
            </div>
            <div className={styles.ul}>
              <div className={styles.ul_1}>
                <div className={styles.li_1}>
                  <motion.div
                    ref={ref1}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                      opacity: isVisible1 ? 1 : 0,
                      x: isVisible1 ? 0 : -100,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                    className={styles.move}
                  >
                    {" "}
                    -Przeglądy sezonowe
                  </motion.div>

                  <motion.div
                    ref={ref2}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                      opacity: isVisible2 ? 1 : 0,
                      x: isVisible2 ? 0 : 100,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                    className={styles.move}
                  >
                    -Przeglądy gwarancyjne
                  </motion.div>
                </div>

                <img
                  className={styles.img_2}
                  src="/assets/service/serwis2.jpg"
                  alt="serwis"
                />
              </div>
              <div className={styles.ul_2}>
                {" "}
                <div className={styles.li_2}>
                  <motion.div
                    ref={ref3}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                      opacity: isVisible3 ? 1 : 0,
                      x: isVisible3 ? 0 : -100,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                    className={styles.move}
                  >
                    -Diagnostyka oraz usługi programem Bosch diagnostic tool
                  </motion.div>
                  <motion.div
                    ref={ref4}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                      opacity: isVisible4 ? 1 : 0,
                      x: isVisible4 ? 0 : 100,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                    className={styles.move}
                  >
                    -Wymianę komponentów
                  </motion.div>
                  <motion.div
                    ref={ref5}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                      opacity: isVisible5 ? 1 : 0,
                      x: isVisible5 ? 0 : -100,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                    className={styles.move}
                  >
                    -Składanie nowych rowerów
                  </motion.div>
                </div>
                <img
                  className={styles.gear}
                  src="/assets/service/serwis1.webp"
                  alt="gear"
                />
              </div>
              <div className={styles.ul_3}>
                <div className={styles.li_3}>
                  <motion.div
                    ref={ref6}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                      opacity: isVisible6 ? 1 : 0,
                      x: isVisible6 ? 0 : 100,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                    className={styles.move}
                  >
                    -Centrowanie i zaplatanie kół
                  </motion.div>
                  <motion.div
                    ref={ref7}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                      opacity: isVisible7 ? 1 : 0,
                      x: isVisible7 ? 0 : -100,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                    className={styles.move}
                  >
                    -Naprawy bieżące
                  </motion.div>
                  <motion.div
                    ref={ref8}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                      opacity: isVisible8 ? 1 : 0,
                      x: isVisible8 ? 0 : 100,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                    className={styles.move}
                  >
                    -Serwis amortyzatorów Rock Shox
                  </motion.div>
                </div>

                <div className={styles.cert}>
                  <img src="/assets/service/certbp.jpg" alt="certyficate" />
                  <img src="/assets/service/certbp2.jpg" alt="certyficate" />
                </div>
              </div>
              <div className={styles.ul_4}>
                <div className={styles.li_4}>
                  <motion.div
                    ref={ref9}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                      opacity: isVisible9 ? 1 : 0,
                      x: isVisible9 ? 0 : -100,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                    className={styles.move}
                  >
                    -Oklejanie ram folią ochronną
                  </motion.div>
                  <motion.div
                    ref={ref10}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                      opacity: isVisible10 ? 1 : 0,
                      x: isVisible10 ? 0 : 100,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                    className={styles.move}
                  >
                    -Serwis door to door I wiele więcej.
                  </motion.div>
                </div>
                <img
                  src="/assets/service/loz.jpg"
                  alt="loz"
                  className={styles.last_img}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
