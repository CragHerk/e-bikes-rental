import { configureStore } from "@reduxjs/toolkit";
import bikesSlice from "../Reducers/bikes.slice";
import menuSlice from "../Reducers/menu.slice";
import reservationsSlice from "../Reducers/reservations.slice";
import addToCartSlice from "../Reducers/addToCart.slice";
import loadingSlice from "../Reducers/loading.slice";
import conflictSlice from "../Reducers/conflict.slice";

const store = configureStore({
  reducer: {
    bikes: bikesSlice,

    menu: menuSlice,
    reservations: reservationsSlice,
    addToCart: addToCartSlice,
    loading: loadingSlice,
    conflict: conflictSlice,
  },
});

export default store;
