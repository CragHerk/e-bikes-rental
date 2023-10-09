import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

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
      return {
        ...state,
        selectedDates: updatedSelectedDates,
        selectedFromDate: from,
      };
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
} = bikesSlice.actions;

export const selectBikesState = (state) => state.bikes;

export const selectPeriod = createSelector(
  [selectBikesState],
  (bikes) => bikes.period
);

export const selectSelectedFromDate = createSelector(
  [selectBikesState],
  (bikes) => bikes.selectedFromDate
);

export const selectSelectedDates = createSelector(
  [selectBikesState],
  (bikes) => bikes.selectedDates
);

export const selectBikeInfo = createSelector(
  [selectBikesState],
  (bikes) => bikes.bikeInfo
);

export default bikesSlice.reducer;
