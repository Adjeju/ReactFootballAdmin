import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthed: false,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAdmin: (state, action) => {
      state.isAuthed = true;
      state.accessToken = action.payload;
    },
    logoutAdmin: (state, action) => {
      state.isAuthed = false;
      state.accessToken = null;
    },
  },
});

export const { actions, reducer: authReducer } = authSlice;
export const { loginAdmin, logoutAdmin } = actions;
