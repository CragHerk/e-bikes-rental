import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isReservationLoading: false,
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
  },
});

export const { setLoading, setReservationLoading } = loadingSlice.actions;
export const selectLoading = (state) => state.loading.isLoading;
export const selectReservationLoading = (state) =>
  state.loading.isReservationLoading;
export default loadingSlice.reducer;
