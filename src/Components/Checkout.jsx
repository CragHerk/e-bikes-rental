import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { bookReservation } from "../State/Reducers/reservations.slice";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../Styles/Checkout.module.css";
const Checkout = () => {
  const location = useLocation();
  const { totalPrice, formattedStartDate, formattedEndDate, name } =
    location.state;
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      firstName: event.target.elements.firstName.value,
      lastName: event.target.elements.lastName.value,
      companyName: event.target.elements.companyName.value,
      country: event.target.elements.country.value,
      street: event.target.elements.street.value,
      postalCode: event.target.elements.postalCode.value,
      city: event.target.elements.city.value,
      phone: event.target.elements.phone.value,
      email: event.target.elements.email.value,
    };

    dispatch(
      bookReservation(
        formData,
        totalPrice,
        formattedStartDate,
        formattedEndDate
      )
    );
  };
  return (
    <div className={styles.checkout}>
      <Header />
      <div className={styles.checkout_container}>
        <form onSubmit={handleSubmit} className={styles.checkout_form}>
          <h2> Rezerwacja</h2>
          <label className={styles.checkout_label}>
            <p>Imię *</p>
            <input className={styles.checkout_input} type="text" />
          </label>
          <label className={styles.checkout_label}>
            <p>Nazwisko *</p>
            <input className={styles.checkout_input} type="text" />
          </label>
          <label className={styles.checkout_label}>
            <p>Nazwa firmy (opcjonalnie)</p>
            <input className={styles.checkout_input} type="text" />
          </label>
          <label className={styles.checkout_label}>
            <p> Kraj *</p>
            <input className={styles.checkout_input} type="text" />
          </label>
          <label className={styles.checkout_label}>
            <p>Ulica *</p>
            <input className={styles.checkout_input} type="text" />
          </label>
          <label className={styles.checkout_label}>
            <p>Kod Pocztowy *</p>
            <input className={styles.checkout_input} type="text" />
          </label>
          <label className={styles.checkout_label}>
            <p>Miasto *</p>
            <input className={styles.checkout_input} type="text" />
          </label>
          <label className={styles.checkout_label}>
            <p>Telefon *</p>
            <input className={styles.checkout_input} type="text" />
          </label>
          <label className={styles.checkout_label}>
            <p>Adres e-mail *</p>
            <input className={styles.checkout_input} type="text" />
          </label>
        </form>
        <div className={styles.checkout_order}>
          <h4>Twoje zamówienie</h4>
          <div className={styles.checkout_cart}>
            <div className={styles.checkout_item}>
              <span className={styles.checkout_span}>
                <p>Rower:</p> {name}
              </span>
              <span className={styles.checkout_span}>
                <p>Data startu:</p> {formattedStartDate}
              </span>
              <span className={styles.checkout_span}>
                <p>Data Zakończenia:</p> {formattedEndDate}
              </span>
              <span className={styles.checkout_span}>
                <p>Cena:</p> {totalPrice}zł
              </span>
              <span className={styles.checkout_span}>
                <input className={styles.checkout_checkbox} type="checkbox" />
                Płatność na miejscu
              </span>
              <button type="submit" className={styles.checkout_sumbit}>
                Kupuję i płacę
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Checkout;
