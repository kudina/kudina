import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenu: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setMobileMenu: (state, action) => {
      state.mobileMenu = !state.mobileMenu;
    },
  },
});
export const { setMobileMenu } = generalSlice.actions;
export const mobileMenu = (state) => state.general.mobileMenu;
export default generalSlice.reducer;
