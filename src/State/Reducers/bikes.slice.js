import { createSlice } from "@reduxjs/toolkit";

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
    setSelectedDates: (state, action) => {
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
});

export const {
  setActiveIndex,
  setReservedIndex,
  setSelectedDates,
  setBikeInfo,
  setPeriod,
  setInitialStartDate,
} = bikesSlice.actions;

export default bikesSlice.reducer;
