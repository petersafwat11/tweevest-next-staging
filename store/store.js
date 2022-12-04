import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./stockSlice";

//Global store
export const store = configureStore({
  reducer: {
    //reducers are defined here
    stock: stockReducer,
  },
});