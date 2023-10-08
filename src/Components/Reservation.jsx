// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  setPeriod,
  setSelectedDates,
  setReservedIndex,
} from "../State/Reducers/bikesSlice.js";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../Styles/Reservation.module.css";

const Reservation = ({ index }) => {
  const dispatch = useDispatch();
  const selectedDates = useSelector((state) => state.bikes.selectedDates);
  const period = useSelector((state) => state.bikes.period);
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
              className="form-control"
            />
          </div>
          <div className={styles.date_input}>
            <label>Okres:</label>
            <select value={period} onChange={handlePeriodChange}>
              <option value={1}>1 dzień</option>
              <option value={2}>2 dni</option>
              <option value={3}>3 dni</option>
            </select>
          </div>
        </div>
        <button className={styles.close_button} onClick={handleClose}></button>
        <Link to={"/cart"}>
          <button className={styles.reservation_btn}>Zarezerwój teraz</button>
        </Link>
      </div>
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
