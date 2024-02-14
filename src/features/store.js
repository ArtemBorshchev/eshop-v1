import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlise";
import productsSlice from "./products/productsSlice";

export const store = configureStore({
  reducer : {
    categories: categoriesSlice,
    products: productsSlice,
  },
  devTools: true,
});
