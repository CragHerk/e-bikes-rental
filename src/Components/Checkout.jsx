import { useDispatch, useSelector } from "react-redux";
import { bookReservation } from "../State/Reducers/reservations.slice";
import { Link } from "react-router-dom";
import Checkbox from "../Utils/checkbox/checkbox";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../Styles/Checkout.module.css";

const Checkout = () => {
  const reservationData = useSelector((state) => state.addToCart.data);
  const dispatch = useDispatch();
  const totalAmount = reservationData.reduce(
    (total, reservation) => total + reservation.totalPrice,
    0
  );

  const handleSubmit = (event, reservation) => {
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
        reservation.name,
        reservation.totalPrice,
        reservation.formattedStartDate,
        reservation.formattedEndDate
      )
    );
  };

  return (
    <div className={styles.checkout}>
      <Header />
      <div className={styles.checkout_container}>
        <form onSubmit={handleSubmit} className={styles.checkout_form}>
          <h2> Rezerwacja</h2>
          <Link to={"/"}>
            <button className={styles.home_btn}>Strona Główna</button>
          </Link>
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
        <div className={styles.summary}>
          <h2>Twoje zamówienie </h2>
          {reservationData.map((reservation, index) => (
            <div key={index} className={styles.checkout_order}>
              <div className={styles.checkout_cart}>
                <div className={styles.checkout_item}>
                  <span className={styles.checkout_span}>
                    <p>Rower:</p> {reservation.name}
                  </span>
                  <span className={styles.checkout_span}>
                    <p>Data startu:</p> {reservation.formattedStartDate}
                  </span>
                  <span className={styles.checkout_span}>
                    <p>Data Zakończenia:</p> {reservation.formattedEndDate}
                  </span>
                  <span className={styles.checkout_span}>
                    <p>Cena:</p> {reservation.totalPrice}zł
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className={styles.checkout_overview}>
            <h3 className={styles.price}>
              SUMA : <p>{totalAmount}zł</p>
            </h3>
            <div className={styles.checkbox}>
              <Checkbox />
              Płatność na miejscu
            </div>
            <button
              type="submit"
              className={styles.checkout_sumbit}
              onClick={(event) => handleSubmit(event, reservationData)}
            >
              Kupuję i płacę
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
