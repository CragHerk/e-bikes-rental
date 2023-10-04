import styles from "../Styles/Checkout.module.css";
import Header from "./Header";
import Footer from "./Footer";
const Checkout = () => {
  return (
    <div className={styles.checkout}>
      <Header />
      <div className={styles.checkout_container}>container</div>
      <Footer />
    </div>
  );
};
export default Checkout;
