import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { id: 0 };

export const productSlice = createSlice({
  name: "product",
  initialState: { value: initialStateValue },
  reducers: {
    getProductId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getProductId } = productSlice.actions;

export default productSlice.reducer;
