import styles from "./Panel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

const Panel = () => {
  return (
    <div>
      <h1>PANEL REZERWACJI</h1>

      <div className={styles.ul}>
        <a href="">
          {" "}
          <FaTrashAlt className={styles.trash} size={30} aria-label="trash" />
        </a>

        <div>_id: </div>
        <div>firstname</div>
        <div>lastname </div>
        <div>companyname</div>
        <div>country</div>
        <div>street</div>
        <div>postalCode</div>
        <div>city</div>
        <div>phone</div>
        <div>email</div>
        <div>bikeModel</div>
        <div>startDate</div>
        <div>endDate</div>
        <div>totalPrice</div>
      </div>
    </div>
  );
};

export default Panel;
