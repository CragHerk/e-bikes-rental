import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiEndpoint = import.meta.env.VITE_REACT_APP_API_ENDPOINT;
export const pullReservedDates = createAsyncThunk(
  "bikes/pullReservedDates",
  async (bikeModel) => {
    const response = await axios.get(
      `${apiEndpoint}/availability/${bikeModel}`
    );
    return response.data;
  }
);

const initialState = {
  activeIndex: -1,
  reservedIndex: -1,
  selectedFromDate: null,
  selectedDates: [],
  bikeInfo: {
    price: null,
    name: "",
    img: "",
  },
  period: 1,
  reservations: [],
};

const bikesSlice = createSlice({
  name: "bikes",
  initialState,
  reducers: {
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
    setReservedIndex: (state, action) => {
      state.reservedIndex = action.payload;
    },
    setFromDate: (state, action) => {
      const { index, from } = action.payload;
      state.selectedDates[index] = { from, to: null };
      state.selectedFromDate = from;
    },
    setInitialStartDate: (state) => {
      if (!state.selectedFromDate) {
        const today = new Date();
        state.selectedFromDate = today.getTime();
        state.selectedDates[0] = { from: today.getTime(), to: null };
      }
    },
    setBikeInfo: (state, action) => {
      state.bikeInfo = action.payload;
    },
    setPeriod: (state, action) => {
      state.period = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(pullReservedDates.fulfilled, (state, action) => {
      const { reservedDates } = action.payload;
      state.reservations = reservedDates;
    });
  },
});

export const {
  setActiveIndex,
  setReservedIndex,
  setFromDate,
  setBikeInfo,
  setPeriod,
  setInitialStartDate,
} = bikesSlice.actions;

export default bikesSlice.reducer;
