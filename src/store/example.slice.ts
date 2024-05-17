import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
  },
});

export default exampleSlice.reducer;
export const { increament } = exampleSlice.actions;
