import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {} from "../State/Reducers/bikesSlice";
import styles from "../Styles/Cart.module.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const bikeInfo = useSelector((state) => state.bikes.bikeInfo);
  const { price, name } = bikeInfo;
  const period = useSelector((state) => state.bikes.period);

  const startDate = useSelector(
    (state) => new Date(state.bikes.selectedFromDate)
  );

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + period);

  const formattedStartDate = startDate.toLocaleDateString("pl-PL");
  const formattedEndDate = endDate.toLocaleDateString("pl-PL");

  const totalPrice = period * price;
  const handleOrderClick = () => {
    navigate("/checkout", {
      state: {
        formattedStartDate,
        formattedEndDate,
        totalPrice,
        name,
      },
    });
  };

  return (
    <div className={styles.checkout}>
      <Header />
      <div className={styles.checkout_container}>
        <div className={styles.checkout_wrapper}>
          <ul className={styles.checkout_list}>
            <li>Rezerwacja</li>
            <li className={styles.name}>{name}</li>
            <li className={styles.start}>
              Data rozpoczęcia:{formattedStartDate}
            </li>
            <li className={styles.end}>Data zakończenia{formattedEndDate}</li>
            <li className={styles.total}>Cena:{totalPrice}zł</li>
          </ul>
        </div>
        <div className={styles.overview}>
          <h2>Podsumowanie</h2>
          <h3>Suma {totalPrice} zł</h3>

          <button onClick={handleOrderClick}>Zamówienie</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
