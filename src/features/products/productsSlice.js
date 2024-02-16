import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../../utils/constans";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async(_, thunkAPI) => {
    const response = await axios(`${BASE_URL}products`);
    return response.data;
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    // filtered: [],
    // related: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
      console.log("products is LOADING...")
    })
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
      console.log("404")
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    })
  }
});

export default productsSlice.reducer;
