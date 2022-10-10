import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: { value: { sortBy: "AllProducts" } },
  reducers: {
    category: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { category } = categorySlice.actions;

export default categorySlice.reducer;
