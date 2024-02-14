import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../../utils/constans";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async(_, thunkAPI) => {
    const response = await axios(`${BASE_URL}categories`);
    return response.data;
  }
)

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
      console.log("categories is LOADING...")
    })
    builder.addCase(getCategories.rejected, (state) => {
      state.isLoading = false;
      console.log("404")
    })
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    })
  }
});

export default categoriesSlice.reducer;