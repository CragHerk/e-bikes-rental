import "react-multi-carousel/lib/styles.css";
import bikeList from "../Utils/bikelist";
import styles from "../Styles/BikesList.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "../Utils/carouselConfig";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveIndex,
  setReservedIndex,
  setBikeInfo,
} from "../State/Reducers/bikes.slice.js";
import "react-datepicker/dist/react-datepicker.css";

import Reservation from "./Reservation";

const BikesList = () => {
  const activeIndex = useSelector((state) => state.bikes.activeIndex);
  const reservedIndex = useSelector((state) => state.bikes.reservedIndex);

  const dispatch = useDispatch();

  const handleReservationClick = (index) => {
    dispatch(setReservedIndex(index));
  };

  const handleCarouselItemClick = (index) => {
    dispatch(setActiveIndex(index));

    const selectedBike = bikeList[index];
    dispatch(
      setBikeInfo({
        price: selectedBike.price,
        name: selectedBike.name,
        img: selectedBike.img,
      })
    );
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
        const isActive = index === activeIndex;
        const isReserved = index === reservedIndex;

        return (
          <div
            key={index}
            className={`carousel-item ${isActive ? "active" : ""} ${
              isReserved ? styles.reserved : ""
            } ${styles.item_container}`}
            onClick={() => handleCarouselItemClick(index)}
          >
            <div className={styles.container}>
              <img
                src={bikeList[index].img}
                alt="bike"
                className={styles.img}
              />
              <h2 className={styles.h2}>{bikeList[index].name}</h2>
            </div>
            <button
              className={styles.button}
              onClick={() => handleReservationClick(index)}
            >
              Zarezerwuj
            </button>

            {isReserved && (
              <Reservation
                bike={bikeList[index].name}
                price={bikeList[index].price}
                img={bikeList[index].img}
                index={index}
              />
            )}
          </div>
        );
      })}
    </Carousel>
  );
};

export default BikesList;
