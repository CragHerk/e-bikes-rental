import styles from "./Panel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import {
  fetchReservations,
  deleteReservation,
} from "../../State/Reducers/panel.slice";

const Panel = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.panel.reservations);
  const isLoading = useSelector((state) => state.panel.isLoading);
  const error = useSelector((state) => state.panel.error);
  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteReservation(id));
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <h1>PANEL REZERWACJI</h1>
      <div className={styles.container}>
        {reservations.map((reservation) => (
          <div className={styles.ul} key={reservation._id}>
            <button type="button" onClick={() => handleDelete(reservation._id)}>
              <FaTrashAlt
                className={styles.trash}
                size={30}
                aria-label="trash"
              />
            </button>

            <div>_id:{reservation._id} </div>
            <div>firstname: {reservation.firstName}</div>
            <div>lastname:{reservation.lastName} </div>
            <div>companyname:{reservation.companyName}</div>
            <div>country:{reservation.country}</div>
            <div>street:{reservation.street}</div>
            <div>postalCode:{reservation.postalCode}</div>
            <div>city:{reservation.city}</div>
            <div>phone:{reservation.phone}</div>
            <div>email:{reservation.email}</div>
            <div>bikeModel:{reservation.bikeModel}</div>
            <div>startDate:{reservation.startDate}</div>
            <div>endDate:{reservation.endDate}</div>
            <div>totalPrice:{reservation.totalPrice}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Panel;
