import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./example.slice";
import searchQuerySlice from "./search.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      example: exampleSlice,
      searchQuery: searchQuerySlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
