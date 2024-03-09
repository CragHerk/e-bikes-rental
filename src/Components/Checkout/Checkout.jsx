import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendReservation } from "../../State/Reducers/reservations.slice";
import { clearReservationData } from "../../State/Reducers/addToCart.slice";
import { clearAllReservedDatesFromLocalStorage } from "../../Utils/toLocalStorage";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Notiflix from "notiflix";
import { validationSchema } from "../../Utils/validationSchema";
import { Checkbox } from "../Checkbox/Checkbox";
import ButtonSpinner from "../Spinners/ButtonSpinner/ButtonSpinner.jsx";
import Header from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reservationData = useSelector((state) => state.addToCart.data);
  const totalAmount = reservationData.reduce(
    (total, reservation) => total + reservation.totalPrice,
    0
  );
  const error = useSelector((state) => state.reservations.error);
  useEffect(() => {
    if (error) {
      Notiflix.Notify.failure(
        "Błąd, spróbuj ponownie, data już jest zarezerwowana " + error
      );
    }
  }, [error]);
  const handleSubmit = (values, reservationData) => {
    dispatch(
      sendReservation({
        ...values,
        bikeModel: reservationData[0].name,
        totalPrice: reservationData[0].totalPrice,
        startDate: reservationData[0].startDate,
        endDate: reservationData[0].endDate,
      })
    );
    setTimeout(() => {
      dispatch(clearReservationData());
      clearAllReservedDatesFromLocalStorage();
    }, 3000);
  };

  return (
    <div className={styles.checkout_container}>
      <Header />
      <div className={styles.checkout_wrapper}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            companyName: "",
            country: "",
            street: "",
            postalCode: "",
            city: "",
            phone: "",
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            handleSubmit(values, reservationData);
            setTimeout(() => {
              setSubmitting(false);
              if (!error) {
                navigate("/complete");
              }
            }, 3000);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.checkout_form}>
              <h2> Rezerwacja</h2>
              <Link to={"/"}>
                <button className={styles.home_btn}>Strona Główna</button>
              </Link>
              <div className={styles.form_field}>
                <p>Imię *</p>
                <Field className={styles.field} type="text" name="firstName" />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.form_field}>
                <p>Nazwisko *</p>
                <Field className={styles.field} type="text" name="lastName" />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.form_field}>
                <p>Nazwa firmy (opcjonalnie)</p>
                <Field
                  className={styles.field}
                  type="text"
                  name="companyName"
                />
                <ErrorMessage
                  name="companyName"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.form_field}>
                <p> Kraj *</p>
                <Field className={styles.field} type="text" name="country" />
                <ErrorMessage
                  name="country"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.form_field}>
                <p>Ulica *</p>
                <Field className={styles.field} type="text" name="street" />
                <ErrorMessage
                  name="street"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.form_field}>
                <p>Kod Pocztowy *</p>
                <Field className={styles.field} type="text" name="postalCode" />
                <ErrorMessage
                  name="postalCode"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.form_field}>
                <p>Miasto *</p>
                <Field className={styles.field} type="text" name="city" />
                <ErrorMessage
                  name="city"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.form_field}>
                <p>Telefon *</p>
                <Field className={styles.field} type="number" name="phone" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.form_field}>
                <p>Adres e-mail *</p>
                <Field className={styles.field} type="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error}
                />
              </div>

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
                          <p>Data Zakończenia:</p>{" "}
                          {reservation.formattedEndDate}
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
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <ButtonSpinner color={"rgba(20, 69, 61, 0.8)"} />
                    ) : (
                      "Kupuję i płacę"
                    )}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
