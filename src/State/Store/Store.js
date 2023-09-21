import { configureStore } from "@reduxjs/toolkit";
import bikesSlice from "../Reducers/bikesSlice";
import menuSlice from "../Reducers/menuSlice";

const store = configureStore({
  reducer: {
    bikes: bikesSlice,
    menu: menuSlice,
  },
});

export default store;
