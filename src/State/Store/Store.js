import { configureStore } from "@reduxjs/toolkit";
import bikesSlice from "../Reducers/bikes.slice";
import menuSlice from "../Reducers/menu.slice";
import reservationsSlice from "../Reducers/reservations.slice";

const store = configureStore({
  reducer: {
    bikes: bikesSlice,
    menu: menuSlice,
    reservations: reservationsSlice,
  },
});

export default store;
