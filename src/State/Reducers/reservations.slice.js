import { createSlice } from "@reduxjs/toolkit";

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState: {
    data: [],
  },
  reducers: {
    bookReservation: (state, action) => {
      const { formData, name, startDate, endDate } = action.payload;
      state.data.push({
        formData,
        name,
        startDate,
        endDate,
      });
    },
  },
});

export const { bookReservation } = reservationsSlice.actions;

export const selectReservations = (state) => state.reservations.data;

export default reservationsSlice.reducer;
