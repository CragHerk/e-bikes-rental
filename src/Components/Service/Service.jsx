import styles from "./Service.module.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

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
        <div className={styles.header_h4}>Bosch professional</div>
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
                    className={styles.move}
                  >
                    {" "}
                    -Przeglądy sezonowe
                  </motion.div>

                  <motion.div
                    ref={ref2}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: inView2 ? 1 : 0,
                      y: inView2 ? 0 : 0,
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
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: inView3 ? 1 : 0,
                      y: inView3 ? 0 : 0,
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
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: inView4 ? 1 : 0,
                      y: inView4 ? 0 : 0,
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
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: inView5 ? 1 : 0,
                      y: inView5 ? 0 : 0,
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
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: inView6 ? 1 : 0,
                      y: inView6 ? 0 : 0,
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
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: inView7 ? 1 : 0,
                      y: inView7 ? 0 : 0,
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
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: inView8 ? 1 : 0,
                      y: inView8 ? 0 : 0,
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
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: inView9 ? 1 : 0,
                      y: inView9 ? 0 : 0,
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
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: inView10 ? 1 : 0,
                      y: inView10 ? 0 : 0,
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
