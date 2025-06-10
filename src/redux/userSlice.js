import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.userInfo = action.payload.userInfo;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.userInfo = null;
    },
  },
});

export const { loginSuccess, setAccessToken, logout } = userSlice.actions;
export default userSlice.reducer;
