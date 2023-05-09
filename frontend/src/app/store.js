import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "../features/generalSlice";

export default configureStore({
  reducer: {
    general: generalReducer,
  },
});
