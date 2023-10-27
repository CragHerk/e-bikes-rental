import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    data: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.data = state.data.filter((_, index) => index !== action.payload);
    },
    clearReservationData: (state) => {
      state.data = [];
    },
  },
});

export const { addToCart, removeFromCart, clearReservationData } =
  addToCartSlice.actions;
export const selectReservations = (state) => state.addToCart.data;
export default addToCartSlice.reducer;
