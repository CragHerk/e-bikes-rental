import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../../State/Reducers/addToCart.slice";
import { setLoading, selectLoading } from "../../State/Reducers/loading.slice";
import {
  setConflict,
  selectConflict,
} from "../../State/Reducers/conflict.slice";
import { isReservationConflict } from "../../Utils/isReservationConflict";
import Notiflix from "notiflix";
import Header from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer";
import ButtonSpinner from "../Spinners/ButtonSpinner/ButtonSpinner.jsx";
import { FaTimesCircle } from "react-icons/fa";
import styles from "./Cart.module.css";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const reservationData = useSelector((state) => state.addToCart.data);
  const isConflict = useSelector(selectConflict);

  const handleOrderClick = () => {
    if (isConflict) {
      Notiflix.Notify.failure(
        "Nie można złożyć zamówienia ze względu na konflikty w koszyku",
        "error"
      );
    } else {
      dispatch(setLoading(true));
      if (reservationData.length > 0) {
        setTimeout(() => {
          dispatch(setLoading(false));
          navigate("/checkout");
        }, 2000);
      } else {
        dispatch(setLoading(false));
        alert(
          "Koszyk jest pusty. Dodaj produkty do koszyka przed kontynuacją."
        );
      }
    }
  };

  const handleRemove = (index) => {
    dispatch(removeFromCart(index));
  };
  useEffect(() => {
    const hasConflict = reservationData.some((reservation, index) => {
      return isReservationConflict(
        reservation,
        reservationData.slice(0, index).concat(reservationData.slice(index + 1))
      );
    });
    dispatch(setConflict(hasConflict));
  }, [reservationData, dispatch]);
  return (
    <div className={styles.cart_container}>
      <Header />
      <div className={styles.cart}>
        <div className={styles.cart_heading}>
          <h1 className={styles.cart_header}>KOSZYK</h1>
          <Link to={"/"}>
            <button className={styles.home_btn}>Strona Główna</button>
          </Link>
        </div>
        <h2>Rezerwacja </h2>
        {reservationData.length > 0 ? (
          <div className={styles.cart_wrapper}>
            {reservationData.map((reservation, index) => {
              const isConflict = isReservationConflict(
                reservation,
                reservationData
              );

              return (
                <div
                  key={index}
                  className={
                    isConflict
                      ? `${styles.cart_element} ${styles.conflict}`
                      : styles.cart_element
                  }
                >
                  <button
                    type="button"
                    className={styles.remove_btn}
                    onClick={() => handleRemove(index)}
                  >
                    <FaTimesCircle size={24} />
                  </button>

                  <div className={styles.element_content}>
                    <span className={styles.bike_name}>{reservation.name}</span>
                    <span className={styles.start_date}>
                      <p className={styles.p}>Data rozpoczęcia:</p>{" "}
                      {reservation.formattedStartDate}
                    </span>
                    <span className={styles.end_date}>
                      <p className={styles.p}>Data zakończenia:</p>{" "}
                      {reservation.formattedEndDate}
                    </span>
                  </div>
                  <h3 className={styles.total}>{reservation.totalPrice} zł</h3>
                </div>
              );
            })}
            <div className={styles.overview}>
              <h2>Podsumowanie</h2>
              <h3>
                Suma:{" "}
                {reservationData.reduce(
                  (total, reservation) => total + reservation.totalPrice,
                  0
                )}
                zł
              </h3>

              <button
                className={styles.cart_order}
                onClick={handleOrderClick}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ButtonSpinner color="rgba(20, 69, 61, 0.2)" />
                ) : (
                  "Zarezerwuj"
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.empty_cart_message}>
            Koszyk jest pusty. Dodaj produkty do koszyka przed kontynuacją.
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
