import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: { products: "" } },
  reducers: {
    AddToCart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { AddToCart } = cartSlice.actions;

export default cartSlice.reducer;
