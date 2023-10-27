import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isReservationLoading: false,
  isReservationButtonLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setReservationLoading: (state, action) => {
      state.isReservationLoading = action.payload;
    },
    setReservationButtonLoading: (state, action) => {
      state.isReservationButtonLoading = action.payload;
    },
  },
});

export const {
  setLoading,
  setReservationLoading,
  setReservationButtonLoading,
} = loadingSlice.actions;
export const selectLoading = (state) => state.loading.isLoading;
export const selectReservationLoading = (state) =>
  state.loading.isReservationLoading;
export const selectReservationButtonLoading = (state) =>
  state.loading.isReservationButtonLoading;
export default loadingSlice.reducer;
