import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  uName: null,
  email: null,
  userId: null,
  posts:[],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      const { email, uName, userId } = action.payload;
      state.isLoggedIn = true
      state.email = email
      state.uName = uName
      state.userId = userId
    },
    REMOVE_ACTIVE_USER: (state, action) => {
        state.isLoggedIn = false
        state.email = null
        state.uName = null
        state.userId = null
      },
      SET_POSTS: (state, action) => {
        state.posts = action.payload;
      },
  },
});

export const {REMOVE_ACTIVE_USER, SET_ACTIVE_USER, SET_POSTS } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserId = (state) => state.auth.userId;
export const selectUname = (state) => state.auth.uName;
export const selectPosts = (state) => state.auth.posts; // Add selector for posts


export default authSlice.reducer;
