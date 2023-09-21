import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeIndex: 0,
  isPreviousButtonDisabled: false,
  isNextButtonDisabled: false,
};

const bikesSlice = createSlice({
  name: "bikes",
  initialState,
  reducers: {
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
  },
});

export const { setActiveIndex } = bikesSlice.actions;

export default bikesSlice.reducer;
