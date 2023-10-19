import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendReservation } from "../../State/Reducers/reservations.slice";
import { Link } from "react-router-dom";
import Checkbox from "../../Utils/checkbox/checkbox";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const reservationData = useSelector((state) => state.addToCart.data);
  const dispatch = useDispatch();
  const totalAmount = reservationData.reduce(
    (total, reservation) => total + reservation.totalPrice,
    0
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    street: "",
    postalCode: "",
    city: "",
    phone: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event, reservationData) => {
    event.preventDefault();

    dispatch(
      sendReservation({
        ...formData,
        bikeModel: reservationData[0].name,
        totalPrice: reservationData[0].totalPrice,
        startDate: reservationData[0].startDate,
        endDate: reservationData[0].endDate,
      })
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
            <input
              className={styles.checkout_input}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <label className={styles.checkout_label}>
            <p>Nazwisko *</p>
            <input
              className={styles.checkout_input}
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          <label className={styles.checkout_label}>
            <p>Nazwa firmy (opcjonalnie)</p>
            <input
              className={styles.checkout_input}
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </label>
          <label className={styles.checkout_label}>
            <p> Kraj *</p>
            <input
              className={styles.checkout_input}
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </label>
          <label className={styles.checkout_label}>
            <p>Ulica *</p>
            <input
              className={styles.checkout_input}
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />
          </label>
          <label className={styles.checkout_label}>
            <p>Kod Pocztowy *</p>
            <input
              className={styles.checkout_input}
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </label>
          <label className={styles.checkout_label}>
            <p>Miasto *</p>
            <input
              className={styles.checkout_input}
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </label>
          <label className={styles.checkout_label}>
            <p>Telefon *</p>
            <input
              className={styles.checkout_input}
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label className={styles.checkout_label}>
            <p>Adres e-mail *</p>
            <input
              className={styles.checkout_input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
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
