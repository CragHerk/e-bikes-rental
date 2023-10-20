import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BikesSpinner from "../BikesSpinner/BikesSpinner";
import { removeFromCart } from "../../State/Reducers/addToCart.slice";
import { FaTimesCircle } from "react-icons/fa";
import styles from "./Cart.module.css";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const reservationData = useSelector((state) => state.addToCart.data);

  const handleOrderClick = () => {
    setIsLoading(true);
    if (reservationData.length > 0) {
      setTimeout(() => {
        setIsLoading(false);
        navigate("/checkout");
      }, 2000);
    } else {
      setIsLoading(false);
      alert("Koszyk jest pusty. Dodaj produkty do koszyka przed kontynuacją.");
    }
  };

  const handleRemove = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <div className={styles.checkout}>
      <Header />
      <div className={styles.checkout_container}>
        <div className={styles.cart_wrapper}>
          <h1 className={styles.cart_header}>KOSZYK</h1>
          <Link to={"/"}>
            <button className={styles.home_btn}>Strona Główna</button>
          </Link>
        </div>
        <h2>Rezerwacja </h2>
        {reservationData.length > 0 ? (
          <div className={styles.checkout_wrapper}>
            {reservationData.map((reservation, index) => (
              <div key={index} className={styles.cart_element}>
                <div className={styles.checkout_list}>
                  <button
                    type="button"
                    className={styles.cart_remove}
                    onClick={() => handleRemove(index)}
                  >
                    <FaTimesCircle size={24} />
                  </button>

                  <div className={styles.summary}>
                    <span className={styles.name}>{reservation.name}</span>
                    <span className={styles.start}>
                      <p className={styles.p}>Data rozpoczęcia:</p>{" "}
                      {reservation.formattedStartDate}
                    </span>
                    <span className={styles.end}>
                      <p className={styles.p}>Data zakończenia:</p>{" "}
                      {reservation.formattedEndDate}
                    </span>
                  </div>
                  <h3 className={styles.total}>{reservation.totalPrice} zł</h3>
                </div>
              </div>
            ))}
            <div className={styles.overview}>
              <h2>Podsumowanie</h2>
              <h3>
                Suma:{" "}
                {reservationData.reduce(
                  (total, reservation) => total + reservation.totalPrice,
                  0
                )}{" "}
                zł
              </h3>

              <button
                className={styles.cart_order}
                onClick={handleOrderClick}
                disabled={isLoading}
              >
                {isLoading ? (
                  <BikesSpinner color="rgba(20, 69, 61, 0.2)" />
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
