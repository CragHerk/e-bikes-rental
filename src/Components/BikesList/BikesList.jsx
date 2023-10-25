import { useSelector, useDispatch } from "react-redux";
import {
  setActiveIndex,
  setReservedIndex,
  setBikeInfo,
} from "../../State/Reducers/bikes.slice.js";
import { setLoading, selectLoading } from "../../State/Reducers/loading.slice";
import Reservation from "../Reservation/Reservation";
import Carousel from "react-multi-carousel";
import BikesSpinner from "../BikesSpinner/BikesSpinner.jsx";
import bikeList from "../../Utils/bikelist";
import responsive from "../../Utils/carouselConfig";
import "react-multi-carousel/lib/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BikesList.module.css";

const BikesList = () => {
  const activeIndex = useSelector((state) => state.bikes.activeIndex);
  const reservedIndex = useSelector((state) => state.bikes.reservedIndex);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const handleReservationClick = (index) => {
    dispatch(setLoading(true));

    setTimeout(() => {
      dispatch(setReservedIndex(index));

      dispatch(setLoading(false));
    }, 2000);
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
    <div className={styles.carousel_container}>
      <div className={styles.header}>
        <h3>Przeżyj niezapomnianą przygodę, skorzystaj z naszej oferty</h3>
      </div>
      <Carousel
        className={styles.carousel}
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={false}
        itemClass={styles.carousel_li}
      >
        {bikeList.map((bike, index) => {
          const isReserved = index === reservedIndex;

          return (
            <div
              id="bikeslist"
              key={index}
              className={styles.carousel_item}
              onClick={() => handleCarouselItemClick(index)}
            >
              <div className={styles.carousel_wrapper}>
                <img
                  src={bikeList[index].img}
                  alt="bike"
                  className={styles.img}
                />
                <div className={styles.wrapper}>
                  <h3 className={styles.name}>
                    {bikeList[index].name +
                      " - Rozmiar: " +
                      bikeList[index].size +
                      " (" +
                      bikeList[index].battery +
                      ") Kolor: " +
                      bikeList[index].color}
                  </h3>
                </div>
                <div className={styles.bike}>
                  <img
                    className={styles.bike_svg}
                    src="assets/bike-green-carousel.svg"
                    alt="bike"
                  />
                  <p>Rower full</p>
                </div>
              </div>
              <button
                className={styles.button}
                onClick={() => !isLoading && handleReservationClick(index)}
                disabled={isLoading}
              >
                {isLoading && index === activeIndex ? (
                  <BikesSpinner color="rgba(20, 69, 61, 0.2)" />
                ) : (
                  "Zarezerwuj"
                )}
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
    </div>
  );
};

export default BikesList;
