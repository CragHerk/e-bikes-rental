import { createSlice } from "@reduxjs/toolkit";

export const conflictSlice = createSlice({
  name: "conflict",
  initialState: false,
  reducers: {
    setConflict: (state, action) => {
      return action.payload;
    },
  },
});

export const { setConflict } = conflictSlice.actions;
export const selectConflict = (state) => state.conflict;

export default conflictSlice.reducer;
