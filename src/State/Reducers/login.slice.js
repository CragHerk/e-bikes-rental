import axios from "axios";
const apiEndpoint = import.meta.env.VITE_REACT_APP_API_ENDPOINT;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "users/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${apiEndpoint}/login`, credentials);
      const token = response.data.token;
      return { token, user: response.data.user };
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    token: null,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;
