import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiEndpoint = import.meta.env.VITE_REACT_APP_API_ENDPOINT;
export const fetchReservations = createAsyncThunk(
  "panel/fetchReservations",
  async () => {
    const response = await axios.get(`${apiEndpoint}/reservations`);
    return response.data;
  }
);

export const deleteReservation = createAsyncThunk(
  "panel/deleteReservation",
  async (id) => {
    await axios.delete(`${apiEndpoint}/reservations/${id}`);
  }
);
const initialState = {
  reservations: [],
  isLoading: false,
  error: null,
};
const panelSlice = createSlice({
  name: "panel",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchReservations.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchReservations.fulfilled]: (state, action) => {
      state.reservations = action.payload;
      state.isLoading = false;
    },
    [fetchReservations.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [deleteReservation.fulfilled]: (state, action) => {
      state.reservations = state.reservations.filter(
        (reservation) => reservation._id !== action.meta.arg
      );
    },
  },
});

export default panelSlice.reducer;
