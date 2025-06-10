// redux/locationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    cityCode: null,
  },
  reducers: {
    setCityCode: (state, action) => {
      state.cityCode = action.payload;
    },
  },
});

export const { setCityCode } = locationSlice.actions;
export default locationSlice.reducer;
