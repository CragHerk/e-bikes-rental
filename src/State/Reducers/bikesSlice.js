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
      return { ...state, activeIndex: action.payload };
    },
    setReservedIndex: (state, action) => {
      state.reservedIndex = action.payload;
    },
    setSelectedDates: (state, action) => {
      const { index, from } = action.payload;

      const updatedSelectedDates = [...state.selectedDates];
      updatedSelectedDates[index] = { from, to: null };
      state.selectedDates = updatedSelectedDates;
    },
    setBikeInfo: (state, action) => {
      state.bikeInfo = action.payload;
    },
    setPeriod: (state, action) => {
      state.period = action.payload;
    },
    setCheckoutData: (state, action) => {
      state.selectedFromDate = action.payload.selectedFromDate;
      state.period = action.payload.period;
    },
  },
});

export const {
  setActiveIndex,
  setReservedIndex,
  setSelectedDates,
  setBikeInfo,
  setPeriod,
  setCheckoutData,
} = bikesSlice.actions;

export default bikesSlice.reducer;
