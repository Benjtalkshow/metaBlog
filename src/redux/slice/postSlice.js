import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    SET_POSTS: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { SET_POSTS } = postSlice.actions;
export const selectPosts = (state) => state.post.posts;

export default postSlice.reducer;
