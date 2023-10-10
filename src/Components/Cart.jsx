import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Styles/Cart.module.css";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../State/Reducers/addToCart.slice";
import { FaTimesCircle } from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reservationData = useSelector((state) => state.addToCart.data);

  console.log({ reservationData });

  const handleOrderClick = () => {
    if (reservationData.length > 0) {
      navigate("/checkout", {});
    } else {
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

              <button className={styles.cart_order} onClick={handleOrderClick}>
                Zamówienie
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
