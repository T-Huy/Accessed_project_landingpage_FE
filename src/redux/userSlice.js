import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: null,
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.access_token = action.payload.access_token;
      state.userInfo = action.payload.userInfo;
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
    },
    logout: (state) => {
      state.access_token = null;
      state.userInfo = null;
    },
  },
});

export const { loginSuccess, setAccessToken, logout } = userSlice.actions;
export default userSlice.reducer;
