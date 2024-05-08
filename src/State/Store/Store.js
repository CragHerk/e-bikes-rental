import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { sessionReducer } from "../Session/sessionSlice";
import bikesSlice from "../Reducers/bikes.slice";
import menuSlice from "../Reducers/menu.slice";
import reservationsSlice from "../Reducers/reservations.slice";
import addToCartSlice from "../Reducers/addToCart.slice";
import loadingSlice from "../Reducers/loading.slice";
import conflictSlice from "../Reducers/conflict.slice";
import panelSlice from "../Reducers/panel.slice";

const sessionPersistConfig = {
  key: "session",
  storage,
  whitelist: ["token"],
};
export const store = configureStore({
  reducer: {
    bikes: bikesSlice,
    menu: menuSlice,
    reservations: reservationsSlice,
    addToCart: addToCartSlice,
    loading: loadingSlice,
    conflict: conflictSlice,
    panel: panelSlice,
    session: persistReducer(sessionPersistConfig, sessionReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
//
const state = store.getState();
console.log(state);

export const persistor = persistStore(store);

export default store;
