import styles from "./Panel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import {
  fetchReservations,
  deleteReservation,
} from "../../State/Reducers/panel.slice";
import moment from "moment";
import { Link } from "react-router-dom";
moment.locale("pl");

const Panel = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.panel.reservations);
  const isLoading = useSelector((state) => state.panel.isLoading);
  const error = useSelector((state) => state.panel.error);
  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteReservation(id));
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  if (reservations.length === 0) {
    return <div className={styles.loading}>Aktualnie brak rezerwacji :/</div>;
  }
  return (
    <div className={styles.main}>
      <h1>PANEL REZERWACJI</h1>
      <Link to={"/"} aria-label="link to home" className={styles.cart_link}>
        {" "}
        <button type="button" className="">
          STRONA GŁÓWNA
        </button>
      </Link>
      <div className={styles.container}>
        {reservations.map((reservation) => (
          <div className={styles.ul} key={reservation._id}>
            <button type="button" onClick={() => handleDelete(reservation._id)}>
              <FaTrashAlt
                className={styles.trash}
                size={30}
                aria-label="trash"
              />
            </button>

            <div className={styles.div}>
              <span className={styles.span}>_id:</span>
              {reservation._id}{" "}
            </div>
            <div className={styles.div}>
              <span className={styles.span}>Imię:</span> {reservation.firstName}
            </div>
            <div className={styles.div}>
              <span className={styles.span}>Nazwisko:</span>
              {reservation.lastName}{" "}
            </div>
            <div className={styles.div}>
              <span className={styles.span}>Firma:</span>
              {reservation.companyName}
            </div>
            <div className={styles.div}>
              <span className={styles.span}>Kraj:</span>
              {reservation.country}
            </div>
            <div className={styles.div}>
              <span className={styles.span}>Ulica:</span>
              {reservation.street}
            </div>
            <div className={styles.div}>
              <span className={styles.span}>Kod Pocztowy:</span>
              {reservation.postalCode}
            </div>
            <div className={styles.div}>
              <span className={styles.span}>Miasto:</span>
              {reservation.city}
            </div>
            <div className={styles.div}>
              <span className={styles.span}>Telefon:</span>
              {reservation.phone}
            </div>
            <div className={styles.div}>
              <span className={styles.span}>e-mail:</span>
              {reservation.email}
            </div>
            <div className={styles.div}>
              <span className={styles.span}>Rower:</span>
              {reservation.bikeModel}
            </div>
            <div className={styles.div}>
              <span className={styles.span}>Data startu:</span>
              {moment(reservation.startDate).format("LL")}
            </div>
            <div className={styles.div}>
              <span className={styles.span}>Data zakończenia:</span>
              {moment(reservation.endDate).format("LL")}
            </div>
            <div className={styles.div}>
              <span className={styles.span}>Cena:</span>
              {reservation.totalPrice}zł
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Panel;
