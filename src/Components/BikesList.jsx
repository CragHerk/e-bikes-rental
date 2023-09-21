import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import bikeList from "../assets/bikelist";
import styles from "../Styles/BikesList.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "../Utils/carouselConfig";
import { useSelector, useDispatch } from "react-redux";
import { setActiveIndex } from "../State/Reducers/bikesSlice.js";
import { DayPicker } from "react-day-picker";

const BikesList = () => {
  const activeIndex = useSelector((state) => state.bikes.activeIndex);
  const dispatch = useDispatch();
  const [reservedIndex, setReservedIndex] = useState(-1);
  const [selectedDate, setSelectedDate] = useState({});

  const handleReservationClick = (index) => {
    setReservedIndex(index);
  };

  const handleCarouselItemClick = (index) => {
    dispatch(setActiveIndex(index));
  };

  const handleInputClick = (inputName) => {
    setSelectedDate({ ...selectedDate, [inputName]: null });
  };

  const handleDaySelect = (date, inputName) => {
    setSelectedDate({ ...selectedDate, [inputName]: date });
  };

  return (
    <Carousel
      className={styles.carousel}
      responsive={responsive}
      autoPlay={false}
      swipeable={true}
      draggable={false}
      showDots={true}
      infinite={false}
      partialVisible={false}
      dotListClass="custom-dot-list-style"
      itemClass={`carousel-item ${styles.custom_item}`}
    >
      {bikeList.map((bike, index) => {
        const isActive = index === activeIndex; // Sprawdzamy, czy element jest aktywny
        const isReserved = index === reservedIndex; // Sprawdzamy, czy element jest zarezerwowany

        return (
          <div
            key={index}
            className={`carousel-item ${isActive ? "active" : ""} ${
              isReserved ? styles.reserved : ""
            }`}
            onClick={() => handleCarouselItemClick(index)}
          >
            <div className={styles.date__inputs}>
              <input
                className={styles.input__from}
                type="text"
                onClick={() => handleInputClick("from")}
                value={
                  isActive && selectedDate["from"]
                    ? selectedDate["from"].toLocaleDateString()
                    : ""
                }
              />
              <input
                className={styles.input__to}
                type="text"
                onClick={() => handleInputClick("to")}
                value={
                  isActive && selectedDate["to"]
                    ? selectedDate["to"].toLocaleDateString()
                    : ""
                }
              />
            </div>
            {isActive && (
              <DayPicker
                className={styles.picker}
                mode="single"
                selected={null}
                onSelect={(date) =>
                  handleDaySelect(date, selectedDate["from"] ? "to" : "from")
                }
              />
            )}
            <p className={styles.bike_name}>{bike.name}</p>
            <button
              className={styles.button}
              onClick={() => handleReservationClick(index)}
            >
              Zarezerwuj
            </button>
          </div>
        );
      })}
    </Carousel>
  );
};

export default BikesList;
