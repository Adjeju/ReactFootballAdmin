import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { matchesApi } from "../api/matchesApi";
import { authReducer } from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [matchesApi.reducerPath]: matchesApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, matchesApi.middleware),
});
