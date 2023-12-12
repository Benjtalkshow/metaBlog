import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isAdmin: false,
  uName: null,
  email: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      const { email, uName, userId , isAdmin} = action.payload;
      state.isLoggedIn = true;
      state.isAdmin = isAdmin;
      state.email = email;
      state.uName = uName;
      state.userId = userId;
    },
    REMOVE_ACTIVE_USER: (state, action) => {
        state.isLoggedIn = false
        state.isAdmin = false
        state.email = null
        state.uName = null
        state.userId = null
      },
  },
});

export const {REMOVE_ACTIVE_USER, SET_ACTIVE_USER } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsAdmin = (state) => state.auth.isAdmin; 
export const selectEmail = (state) => state.auth.email;
export const selectUserId = (state) => state.auth.userId;
export const selectUname = (state) => state.auth.uName;

export default authSlice.reducer;
