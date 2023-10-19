import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendReservation = createAsyncThunk(
  "reservations/sendReservation",
  async (payload) => {
    try {
      const response = await axios.post(
        "https://e-bikes-mu2k.onrender.com/api/book",
        payload
      );
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

const reservationsSlice = createSlice({
  name: "reservations",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendReservation.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(sendReservation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
      })
      .addCase(sendReservation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectReservations = (state) => state.reservations.data;
export const selectReservationStatus = (state) => state.reservations.status;
export const selectReservationError = (state) => state.reservations.error;

export default reservationsSlice.reducer;
