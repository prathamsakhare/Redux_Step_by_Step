import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Listed INC",
    content: "This is a Company",
  },
  {
    id: "2",
    title: "SuperShare",
    content: "This is also a company",
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
      console.log(action.payload)
    },
    postRemoved(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, postRemoved } = postSlice.actions;
export default postSlice.reducer;
