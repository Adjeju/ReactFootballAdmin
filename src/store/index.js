import { configureStore } from "@reduxjs/toolkit";
import { authApi, playersApi, matchesApi, usersApi } from "../api";
import { authReducer } from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [matchesApi.reducerPath]: matchesApi.reducer,
    [playersApi.reducerPath]: playersApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      matchesApi.middleware,
      playersApi.middleware,
      usersApi.middleware
    ),
});
