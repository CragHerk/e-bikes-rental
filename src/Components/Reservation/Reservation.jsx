import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setReservationButtonLoading,
  selectReservationButtonLoading,
  selectReservationLoading,
} from "../../State/Reducers/loading.slice";
import {
  setPeriod,
  setFromDate,
  setReservedIndex,
  setInitialStartDate,
} from "../../State/Reducers/bikes.slice.js";
import { pullReservedDates } from "../../State/Reducers/bikes.slice.js";
import { addToCart } from "../../State/Reducers/addToCart.slice.js";
import Notiflix from "notiflix";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import ButtonSpinner from "../Spinners/ButtonSpinner/ButtonSpinner.jsx";
import ReservationSpinner from "../Spinners/ReservationSpinner/ReservationSpinner.jsx";
import { FaCalendar } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Reservation.module.css";

const Reservation = ({ index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isReservationButtonLoading = useSelector(
    selectReservationButtonLoading
  );
  const isReservationLoading = useSelector(selectReservationLoading);
  const selectedDates = useSelector((state) => state.bikes.selectedDates);
  const period = useSelector((state) => state.bikes.period);
  const price = useSelector((state) => state.bikes.bikeInfo.price);
  const name = useSelector((state) => state.bikes.bikeInfo.name);
  const reservedDates = useSelector((state) => state.bikes.reservations);
  const totalPrice = period * price;
  const blockedDates = reservedDates.map((dateObj) => new Date(dateObj.date));
  const startDate = useSelector(
    (state) => new Date(state.bikes.selectedFromDate)
  );
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + period - 1);
  const formattedStartDate = startDate.toLocaleDateString("pl-PL");
  const formattedEndDate = endDate.toLocaleDateString("pl-PL");
  const handleChange = (date, key) => {
    const timestamp = date.getTime();
    dispatch(setFromDate({ index, [key]: timestamp }));
  };
  const handleClose = () => {
    dispatch(setReservedIndex(-1));
  };
  const handlePeriodChange = (e) => {
    const selectedPeriod = parseInt(e.target.value, 10);
    dispatch(setPeriod(selectedPeriod));
  };
  useEffect(() => {
    dispatch(setInitialStartDate());
  }, [dispatch]);
  const handleReservation = () => {
    const selectedDateIsReserved = blockedDates.some((blockedDate) =>
      moment(selectedDates[index]?.from).isSame(moment(blockedDate), "day")
    );

    if (selectedDateIsReserved) {
      Notiflix.Notify.warning(
        "Ten rower jest już zarezerwowany na dzisiaj. Wybierz inną datę."
      );
    } else {
      dispatch(setReservationButtonLoading(true));
      const reservationData = {
        formattedStartDate,
        formattedEndDate,
        totalPrice,
        period,
        price,
        name,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      };
      setTimeout(() => {
        dispatch(addToCart(reservationData)), dispatch(setReservedIndex(-1));
        dispatch(setReservationButtonLoading(false));
        navigate("/cart");
      }, 2000);
    }
  };

  useEffect(() => {
    dispatch(pullReservedDates(name));
  }, [dispatch, name]);

  return (
    <div className={styles.reservation_container}>
      {isReservationLoading ? (
        <ReservationSpinner color={"#43c59e"} />
      ) : (
        <div className={styles.content_wrapper}>
          <div className={styles.reservation_wrapper}>
            <h3 className={styles.reservation_header}>Wybierz daty:</h3>
            <div className={styles.date_inputs}>
              <div className={styles.date_input}>
                <label>Początek:</label>
                <ReactDatePicker
                  selected={selectedDates[index]?.from || new Date()}
                  onChange={(date) => handleChange(date, "from")}
                  dateFormat="dd/MM/yyyy"
                  className={styles.datepicker}
                  minDate={new Date()}
                  excludeDates={blockedDates}
                />
                <FaCalendar className={styles.date_calendar} />
              </div>
              <div className={styles.date_input}>
                <label>Okres:</label>
                <select
                  className={styles.select}
                  value={period}
                  onChange={handlePeriodChange}
                >
                  <option value={1}>1 dzień</option>
                  <option value={2}>2 dni</option>
                  <option value={3}>3 dni</option>
                </select>
                <FaCalendar className={styles.select_calendar} />
              </div>
              <div className={styles.overal}>
                <h4 className={styles.name}>{name}:</h4>
                <h3 className={styles.price}>Suma : {totalPrice}zł</h3>
              </div>
            </div>
            <p className={styles.p}>
              *Wykluczono z kalendarza daty już zarezerwowane lub z przeszłości
            </p>
          </div>
        </div>
      )}
      <button onClick={handleReservation} className={styles.reservation_btn}>
        {isReservationButtonLoading ? (
          <ButtonSpinner color={"rgba(20, 69, 61, 0.8)"} />
        ) : (
          "Zarezerwuj"
        )}
      </button>

      <button className={styles.close_button} onClick={handleClose}></button>
    </div>
  );
};

Reservation.propTypes = {
  bike: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  bikeModel: PropTypes.string,
};

export default Reservation;
