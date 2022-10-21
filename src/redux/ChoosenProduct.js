import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: { value: { id: 1 } },
  reducers: {
    getProductId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getProductId } = productSlice.actions;

export default productSlice.reducer;
