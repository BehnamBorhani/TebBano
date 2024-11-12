import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: 0,
};

const searchQuerySlice = createSlice({
  name: "searchQuery",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export default searchQuerySlice.reducer;
export const { setSearchQuery } = searchQuerySlice.actions;
