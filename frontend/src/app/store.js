import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "../features/generalSlice";
import userReducer from "../features/user/userSlice";
import { apiSlice } from "../features/api/apiSlice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    general: generalReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
