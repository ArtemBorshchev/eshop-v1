import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../../utils/constans";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async(_, thunkAPI) => {
    // try {
    //   const response = await axios(`${BASE_URL}/categories`);
    //   return response.data;
    // } catch(err) {
    //     console.log(err);
    //     return thunkAPI.rejectWithValue(err);
    //   }
    const response = await axios(`${BASE_URL}categories`);
    return response.data;
  }
)

const categoriesSlise = createSlice({
  name: "categories",
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
      console.log("LOADING...")
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

export default categoriesSlise.reducer;