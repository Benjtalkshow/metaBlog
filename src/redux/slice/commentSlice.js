import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  uName: null,
  email: null,
  userId: null,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    SET_COMMENTING_USER: (state, action) => {
      const { email, uName, userId } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.uName = uName;
      state.userId = userId;
    },
    REMOVE_COMMENTING_USER: (state, action) => {
      state.isLoggedIn = false;
      state.email = null;
      state.uName = null;
      state.userId = null;
    },
  },
});

export const {SET_COMMENTING_USER, REMOVE_COMMENTING_USER } = commentSlice.actions;
export const selectIsLoggedIn = (state) => state.comment.isLoggedIn;
export const selectEmail = (state) => state.comment.email;
export const selectUserId = (state) => state.comment.userId;
export const selectUname = (state) => state.comment.uName;
export default commentSlice.reducer;
