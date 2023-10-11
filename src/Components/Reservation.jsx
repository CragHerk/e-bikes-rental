// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  setPeriod,
  setSelectedDates,
  setReservedIndex,
} from "../State/Reducers/bikes.slice.js";
import { addToCart } from "../State/Reducers/addToCart.slice.js";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../Styles/Reservation.module.css";
import { FaCalendar } from "react-icons/fa";

const Reservation = ({ index }) => {
  const dispatch = useDispatch();
  const selectedDates = useSelector((state) => state.bikes.selectedDates);
  const period = useSelector((state) => state.bikes.period);
  const price = useSelector((state) => state.bikes.bikeInfo.price);
  const name = useSelector((state) => state.bikes.bikeInfo.name);
  const totalPrice = period * price;
  const startDate = useSelector(
    (state) => new Date(state.bikes.selectedFromDate)
  );

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + period);

  const formattedStartDate = startDate.toLocaleDateString("pl-PL");
  const formattedEndDate = endDate.toLocaleDateString("pl-PL");
  const handleChange = (date, key) => {
    const timestamp = date.getTime();
    dispatch(setSelectedDates({ index, [key]: timestamp }));
  };
  const handleClose = () => {
    dispatch(setReservedIndex(-1));
  };
  const handlePeriodChange = (e) => {
    const selectedPeriod = parseInt(e.target.value, 10);
    dispatch(setPeriod(selectedPeriod));
  };
  const handleReservation = () => {
    const reservationData = {
      formattedStartDate,
      formattedEndDate,
      totalPrice,
      period,
      price,
      name,
    };
    dispatch(addToCart(reservationData)), dispatch(setReservedIndex(-1));
  };

  return (
    <div className={styles.reservation_container}>
      <div className={styles.reservation_wrapper}>
        <h3 className={styles.reservation_header}>Wybierz daty</h3>
        <div className={styles.date_inputs}>
          <div className={styles.date_input}>
            <label>Początek:</label>
            <ReactDatePicker
              selected={selectedDates[index]?.from || null}
              onChange={(date) => handleChange(date, "from")}
              dateFormat="dd/MM/yyyy"
              className={styles.datepicker}
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
          <h4 className={styles.name}>{name}</h4>
          <h3 className={styles.price}>Cena : {totalPrice}zł</h3>
        </div>

        <Link to={"/cart"}>
          <button
            onClick={handleReservation}
            className={styles.reservation_btn}
          >
            Zarezerwój teraz
          </button>
        </Link>
      </div>
      <button className={styles.close_button} onClick={handleClose}></button>
    </div>
  );
};

Reservation.propTypes = {
  bike: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Reservation;
