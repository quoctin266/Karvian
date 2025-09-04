import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import productReducer from "./slices/productSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
});
