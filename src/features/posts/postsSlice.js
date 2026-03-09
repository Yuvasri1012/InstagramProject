import { createSlice } from "@reduxjs/toolkit";
import {postsData} from "./postsData";

const initialState = postsData;

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const post = state.find((p) => p.id === action.payload);
      if (post) {
        post.liked = !post.liked;
        post.liked ? post.likes++ : post.likes--;
      }
    },
    toggleSave: (state, action) => {
      const post = state.find((p) => p.id === action.payload);
      if (post) {
        post.saved = !post.saved;
      }
    },
  },
});

export const { toggleLike, toggleSave } = postsSlice.actions;
export default postsSlice.reducer;